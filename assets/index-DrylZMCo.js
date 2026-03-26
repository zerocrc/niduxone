(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Gu={exports:{}},Va={},ju={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function ov(){if(mm)return mt;mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function _(U,q,Ae){this.props=U,this.context=q,this.refs=C,this.updater=Ae||M}_.prototype.isReactComponent={},_.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=_.prototype;function R(U,q,Ae){this.props=U,this.context=q,this.refs=C,this.updater=Ae||M}var L=R.prototype=new y;L.constructor=R,w(L,_.prototype),L.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,O={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function A(U,q,Ae){var We,Ze={},re=null,me=null;if(q!=null)for(We in q.ref!==void 0&&(me=q.ref),q.key!==void 0&&(re=""+q.key),q)F.call(q,We)&&!V.hasOwnProperty(We)&&(Ze[We]=q[We]);var pe=arguments.length-2;if(pe===1)Ze.children=Ae;else if(1<pe){for(var Fe=Array(pe),He=0;He<pe;He++)Fe[He]=arguments[He+2];Ze.children=Fe}if(U&&U.defaultProps)for(We in pe=U.defaultProps,pe)Ze[We]===void 0&&(Ze[We]=pe[We]);return{$$typeof:s,type:U,key:re,ref:me,props:Ze,_owner:O.current}}function P(U,q){return{$$typeof:s,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function fe(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return q[Ae]})}var J=/\/+/g;function $(U,q){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):q.toString(36)}function le(U,q,Ae,We,Ze){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(re){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case s:case e:me=!0}}if(me)return me=U,Ze=Ze(me),U=We===""?"."+$(me,0):We,D(Ze)?(Ae="",U!=null&&(Ae=U.replace(J,"$&/")+"/"),le(Ze,q,Ae,"",function(He){return He})):Ze!=null&&(fe(Ze)&&(Ze=P(Ze,Ae+(!Ze.key||me&&me.key===Ze.key?"":(""+Ze.key).replace(J,"$&/")+"/")+U)),q.push(Ze)),1;if(me=0,We=We===""?".":We+":",D(U))for(var pe=0;pe<U.length;pe++){re=U[pe];var Fe=We+$(re,pe);me+=le(re,q,Ae,Fe,Ze)}else if(Fe=x(U),typeof Fe=="function")for(U=Fe.call(U),pe=0;!(re=U.next()).done;)re=re.value,Fe=We+$(re,pe++),me+=le(re,q,Ae,Fe,Ze);else if(re==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return me}function ee(U,q,Ae){if(U==null)return U;var We=[],Ze=0;return le(U,We,"","",function(re){return q.call(Ae,re,Ze++)}),We}function ie(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},Q={transition:null},oe={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Q,ReactCurrentOwner:O};function ce(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ee,forEach:function(U,q,Ae){ee(U,function(){q.apply(this,arguments)},Ae)},count:function(U){var q=0;return ee(U,function(){q++}),q},toArray:function(U){return ee(U,function(q){return q})||[]},only:function(U){if(!fe(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=_,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=R,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,mt.act=ce,mt.cloneElement=function(U,q,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=w({},U.props),Ze=U.key,re=U.ref,me=U._owner;if(q!=null){if(q.ref!==void 0&&(re=q.ref,me=O.current),q.key!==void 0&&(Ze=""+q.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(Fe in q)F.call(q,Fe)&&!V.hasOwnProperty(Fe)&&(We[Fe]=q[Fe]===void 0&&pe!==void 0?pe[Fe]:q[Fe])}var Fe=arguments.length-2;if(Fe===1)We.children=Ae;else if(1<Fe){pe=Array(Fe);for(var He=0;He<Fe;He++)pe[He]=arguments[He+2];We.children=pe}return{$$typeof:s,type:U.type,key:Ze,ref:re,props:We,_owner:me}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},mt.createElement=A,mt.createFactory=function(U){var q=A.bind(null,U);return q.type=U,q},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:d,render:U}},mt.isValidElement=fe,mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},mt.memo=function(U,q){return{$$typeof:m,type:U,compare:q===void 0?null:q}},mt.startTransition=function(U){var q=Q.transition;Q.transition={};try{U()}finally{Q.transition=q}},mt.unstable_act=ce,mt.useCallback=function(U,q){return W.current.useCallback(U,q)},mt.useContext=function(U){return W.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},mt.useEffect=function(U,q){return W.current.useEffect(U,q)},mt.useId=function(){return W.current.useId()},mt.useImperativeHandle=function(U,q,Ae){return W.current.useImperativeHandle(U,q,Ae)},mt.useInsertionEffect=function(U,q){return W.current.useInsertionEffect(U,q)},mt.useLayoutEffect=function(U,q){return W.current.useLayoutEffect(U,q)},mt.useMemo=function(U,q){return W.current.useMemo(U,q)},mt.useReducer=function(U,q,Ae){return W.current.useReducer(U,q,Ae)},mt.useRef=function(U){return W.current.useRef(U)},mt.useState=function(U){return W.current.useState(U)},mt.useSyncExternalStore=function(U,q,Ae){return W.current.useSyncExternalStore(U,q,Ae)},mt.useTransition=function(){return W.current.useTransition()},mt.version="18.3.1",mt}var gm;function Cf(){return gm||(gm=1,ju.exports=ov()),ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function lv(){if(xm)return Va;xm=1;var s=Cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var v,S={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:d,key:x,ref:M,props:S,_owner:o.current}}return Va.Fragment=t,Va.jsx=u,Va.jsxs=u,Va}var vm;function cv(){return vm||(vm=1,Gu.exports=lv()),Gu.exports}var g=cv(),ml={},Wu={exports:{}},kn={},Xu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function uv(){return _m||(_m=1,(function(s){function e(Q,oe){var ce=Q.length;Q.push(oe);e:for(;0<ce;){var U=ce-1>>>1,q=Q[U];if(0<o(q,oe))Q[U]=oe,Q[ce]=q,ce=U;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var oe=Q[0],ce=Q.pop();if(ce!==oe){Q[0]=ce;e:for(var U=0,q=Q.length,Ae=q>>>1;U<Ae;){var We=2*(U+1)-1,Ze=Q[We],re=We+1,me=Q[re];if(0>o(Ze,ce))re<q&&0>o(me,Ze)?(Q[U]=me,Q[re]=ce,U=re):(Q[U]=Ze,Q[We]=ce,U=We);else if(re<q&&0>o(me,ce))Q[U]=me,Q[re]=ce,U=re;else break e}}return oe}function o(Q,oe){var ce=Q.sortIndex-oe.sortIndex;return ce!==0?ce:Q.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],v=1,S=null,x=3,M=!1,w=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Q){for(var oe=t(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=Q)r(m),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(m)}}function D(Q){if(C=!1,L(Q),!w)if(t(h)!==null)w=!0,ie(F);else{var oe=t(m);oe!==null&&W(D,oe.startTime-Q)}}function F(Q,oe){w=!1,C&&(C=!1,y(A),A=-1),M=!0;var ce=x;try{for(L(oe),S=t(h);S!==null&&(!(S.expirationTime>oe)||Q&&!k());){var U=S.callback;if(typeof U=="function"){S.callback=null,x=S.priorityLevel;var q=U(S.expirationTime<=oe);oe=s.unstable_now(),typeof q=="function"?S.callback=q:S===t(h)&&r(h),L(oe)}else r(h);S=t(h)}if(S!==null)var Ae=!0;else{var We=t(m);We!==null&&W(D,We.startTime-oe),Ae=!1}return Ae}finally{S=null,x=ce,M=!1}}var O=!1,V=null,A=-1,P=5,fe=-1;function k(){return!(s.unstable_now()-fe<P)}function J(){if(V!==null){var Q=s.unstable_now();fe=Q;var oe=!0;try{oe=V(!0,Q)}finally{oe?$():(O=!1,V=null)}}else O=!1}var $;if(typeof R=="function")$=function(){R(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ee=le.port2;le.port1.onmessage=J,$=function(){ee.postMessage(null)}}else $=function(){_(J,0)};function ie(Q){V=Q,O||(O=!0,$())}function W(Q,oe){A=_(function(){Q(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ie(F))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Q){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var ce=x;x=oe;try{return Q()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,oe){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ce=x;x=Q;try{return oe()}finally{x=ce}},s.unstable_scheduleCallback=function(Q,oe,ce){var U=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,Q){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ce+q,Q={id:v++,callback:oe,priorityLevel:Q,startTime:ce,expirationTime:q,sortIndex:-1},ce>U?(Q.sortIndex=ce,e(m,Q),t(h)===null&&Q===t(m)&&(C?(y(A),A=-1):C=!0,W(D,ce-U))):(Q.sortIndex=q,e(h,Q),w||M||(w=!0,ie(F))),Q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(Q){var oe=x;return function(){var ce=x;x=oe;try{return Q.apply(this,arguments)}finally{x=ce}}}})(Yu)),Yu}var ym;function dv(){return ym||(ym=1,Xu.exports=uv()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function fv(){if(Sm)return kn;Sm=1;var s=Cf(),e=dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(n){return h.call(S,n)?!0:h.call(v,n)?!1:m.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,c)&&(a=null),c||f===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Q=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function q(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ae=!1;function We(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),p=c.stack.split(`
`),T=f.length-1,I=p.length-1;1<=T&&0<=I&&f[T]!==p[I];)I--;for(;1<=T&&0<=I;T--,I--)if(f[T]!==p[I]){if(T!==1||I!==1)do if(T--,I--,0>I||f[T]!==p[I]){var B=`
`+f[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ze(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case O:return"Portal";case P:return"Profiler";case A:return"StrictMode";case $:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case fe:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=He(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function kt(n,i){ut(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vt(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var xt=Array.isArray;function Et(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ge(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(xt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function j(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(n){rt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),qe[i]=qe[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||qe.hasOwnProperty(n)&&qe[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var je=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(je[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Me=null,De=null;function Se(n){if(n=ba(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Po(i),be(n.stateNode,n.type,i))}}function de(n){Me?De?De.push(n):De=[n]:Me=n}function ze(){if(Me){var n=Me,i=De;if(De=Me=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function at(n,i){return n(i)}function Lt(){}var wt=!1;function ei(n,i,a){if(wt)return n(i,a);wt=!0;try{return at(n,i,a)}finally{wt=!1,(Me!==null||De!==null)&&(Lt(),ze())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=Po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(d)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){us=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{us=!1}function dc(n,i,a,c,f,p,T,I,B){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ve){this.onError(ve)}}var sr=!1,Or=null,ti=!1,kr=null,oo={onError:function(n){sr=!0,Or=n}};function lo(n,i,a,c,f,p,T,I,B){sr=!1,Or=null,dc.apply(oo,arguments)}function ds(n,i,a,c,f,p,T,I,B){if(lo.apply(this,arguments),sr){if(sr){var se=Or;sr=!1,Or=null}else throw Error(t(198));ti||(ti=!0,kr=se)}}function Ti(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function la(n){if(Ti(n)!==n)throw Error(t(188))}function co(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return la(f),n;if(p===c)return la(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=p;else{for(var T=!1,I=f.child;I;){if(I===a){T=!0,a=f,c=p;break}if(I===c){T=!0,c=f,a=p;break}I=I.sibling}if(!T){for(I=p.child;I;){if(I===a){T=!0,a=p,c=f;break}if(I===c){T=!0,c=p,a=f;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function uo(n){return n=co(n),n!==null?fo(n):null}function fo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fo(n);if(i!==null)return i;n=n.sibling}return null}var ho=e.unstable_scheduleCallback,po=e.unstable_cancelCallback,fc=e.unstable_shouldYield,hc=e.unstable_requestPaint,b=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,ae=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,Re=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,Ce=null,Le=null;function Qe(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Nt,dt=Math.log,Je=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(dt(n)/Je|0)|0}var Ft=64,Ut=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~f;I!==0?c=yt(I):(p&=T,p!==0&&(c=yt(p)))}else T=a&~f,T!==0?c=yt(T):p!==0&&(c=yt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$e(i),f=1<<a,c|=n[a],i&=~f;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var T=31-$e(p),I=1<<T,B=f[T];B===-1?((I&a)===0||(I&c)!==0)&&(f[T]=Ye(I,i)):B<=i&&(n.expiredLanes|=I),p&=~I}}function vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nn(){var n=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),n}function Dn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function jn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$e(i),n[i]=a}function ar(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-$e(a),p=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~p}}function Ct(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$e(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var ot=0;function hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,ni,zi,ca,Zf,pc=!1,mo=[],or=null,lr=null,cr=null,ua=new Map,da=new Map,ur=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(n,i){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(n,i,a,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ba(i),i!==null&&ni(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function P0(n,i,a,c,f){switch(i){case"focusin":return or=fa(or,n,i,a,c,f),!0;case"dragenter":return lr=fa(lr,n,i,a,c,f),!0;case"mouseover":return cr=fa(cr,n,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return ua.set(p,fa(ua.get(p)||null,n,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,da.set(p,fa(da.get(p)||null,n,i,a,c,f)),!0}return!1}function $f(n){var i=zr(n.target);if(i!==null){var a=Ti(i);if(a!==null){if(i=a.tag,i===13){if(i=Br(a),i!==null){n.blockedOn=i,Zf(n.priority,function(){zi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function go(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ct=c,a.target.dispatchEvent(c),ct=null}else return i=ba(a),i!==null&&ni(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){go(n)&&a.delete(i)}function N0(){pc=!1,or!==null&&go(or)&&(or=null),lr!==null&&go(lr)&&(lr=null),cr!==null&&go(cr)&&(cr=null),ua.forEach(eh),da.forEach(eh)}function ha(n,i){n.blockedOn===i&&(n.blockedOn=null,pc||(pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,N0)))}function pa(n){function i(f){return ha(f,n)}if(0<mo.length){ha(mo[0],n);for(var a=1;a<mo.length;a++){var c=mo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(or!==null&&ha(or,n),lr!==null&&ha(lr,n),cr!==null&&ha(cr,n),ua.forEach(i),da.forEach(i),a=0;a<ur.length;a++)c=ur[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&ur.shift()}var fs=D.ReactCurrentBatchConfig,xo=!0;function D0(n,i,a,c){var f=ot,p=fs.transition;fs.transition=null;try{ot=1,mc(n,i,a,c)}finally{ot=f,fs.transition=p}}function L0(n,i,a,c){var f=ot,p=fs.transition;fs.transition=null;try{ot=4,mc(n,i,a,c)}finally{ot=f,fs.transition=p}}function mc(n,i,a,c){if(xo){var f=gc(n,i,a,c);if(f===null)Lc(n,i,c,vo,a),Jf(n,c);else if(P0(f,n,i,a,c))c.stopPropagation();else if(Jf(n,c),i&4&&-1<R0.indexOf(n)){for(;f!==null;){var p=ba(f);if(p!==null&&Zt(p),p=gc(n,i,a,c),p===null&&Lc(n,i,c,vo,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Lc(n,i,c,null,a)}}var vo=null;function gc(n,i,a,c){if(vo=null,n=H(c),n=zr(n),n!==null)if(i=Ti(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Br(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vo=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case ae:return 1;case ne:return 4;case Z:case Re:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var dr=null,xc=null,_o=null;function nh(){if(_o)return _o;var n,i=xc,a=i.length,c,f="value"in dr?dr.value:dr.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[p-c];c++);return _o=f.slice(n,1<c?1-c:void 0)}function yo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function So(){return!0}function ih(){return!1}function Wn(n){function i(a,c,f,p,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?So:ih,this.isPropagationStopped=ih,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=Wn(hs),ma=ce({},hs,{view:0,detail:0}),I0=Wn(ma),_c,yc,ga,Mo=ce({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(_c=n.screenX-ga.screenX,yc=n.screenY-ga.screenY):yc=_c=0,ga=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),rh=Wn(Mo),U0=ce({},Mo,{dataTransfer:0}),F0=Wn(U0),O0=ce({},ma,{relatedTarget:0}),Sc=Wn(O0),k0=ce({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Wn(k0),z0=ce({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V0=Wn(z0),H0=ce({},hs,{data:0}),sh=Wn(H0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=W0[n])?!!i[n]:!1}function Mc(){return X0}var Y0=ce({},ma,{key:function(n){if(n.key){var i=G0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q0=Wn(Y0),K0=ce({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Wn(K0),Q0=ce({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Z0=Wn(Q0),J0=ce({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Wn(J0),ex=ce({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=Wn(ex),nx=[9,13,27,32],Ec=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var ix=d&&"TextEvent"in window&&!xa,oh=d&&(!Ec||xa&&8<xa&&11>=xa),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function rx(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function sx(n,i){if(ps)return n==="compositionend"||!Ec&&uh(n,i)?(n=nh(),_o=xc=dr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ax[n.type]:i==="textarea"}function hh(n,i,a,c){de(c),i=Ao(i,"onChange"),0<i.length&&(a=new vc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,_a=null;function ox(n){Nh(n,0)}function Eo(n){var i=_s(n);if(Kt(i))return n}function lx(n,i){if(n==="change")return i}var ph=!1;if(d){var wc;if(d){var Tc="oninput"in document;if(!Tc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Tc=typeof mh.oninput=="function"}wc=Tc}else wc=!1;ph=wc&&(!document.documentMode||9<document.documentMode)}function gh(){va&&(va.detachEvent("onpropertychange",xh),_a=va=null)}function xh(n){if(n.propertyName==="value"&&Eo(_a)){var i=[];hh(i,_a,n,H(n)),ei(ox,i)}}function cx(n,i,a){n==="focusin"?(gh(),va=i,_a=a,va.attachEvent("onpropertychange",xh)):n==="focusout"&&gh()}function ux(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(_a)}function dx(n,i){if(n==="click")return Eo(i)}function fx(n,i){if(n==="input"||n==="change")return Eo(i)}function hx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pi=typeof Object.is=="function"?Object.is:hx;function ya(n,i){if(pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!pi(n[f],i[f]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function px(n){var i=Sh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=_h(a,p);var T=_h(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mx=d&&"documentMode"in document&&11>=document.documentMode,ms=null,Ac=null,Sa=null,Cc=!1;function Mh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||ms==null||ms!==pt(c)||(c=ms,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&ya(Sa,c)||(Sa=c,c=Ao(Ac,"onSelect"),0<c.length&&(i=new vc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Rc={},Eh={};d&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function To(n){if(Rc[n])return Rc[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Rc[n]=i[a];return n}var wh=To("animationend"),Th=To("animationiteration"),bh=To("animationstart"),Ah=To("transitionend"),Ch=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Ch.set(n,i),l(i,[n])}for(var Pc=0;Pc<Rh.length;Pc++){var Nc=Rh[Pc],gx=Nc.toLowerCase(),xx=Nc[0].toUpperCase()+Nc.slice(1);fr(gx,"on"+xx)}fr(wh,"onAnimationEnd"),fr(Th,"onAnimationIteration"),fr(bh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ds(c,i,void 0,n),n.currentTarget=null}function Nh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var I=c[T],B=I.instance,se=I.currentTarget;if(I=I.listener,B!==p&&f.isPropagationStopped())break e;Ph(f,I,se),p=B}else for(T=0;T<c.length;T++){if(I=c[T],B=I.instance,se=I.currentTarget,I=I.listener,B!==p&&f.isPropagationStopped())break e;Ph(f,I,se),p=B}}}if(ti)throw n=kr,ti=!1,kr=null,n}function Bt(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Dh(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),Dh(a,n,c,i)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[bo]){n[bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[bo]||(i[bo]=!0,Dc("selectionchange",!1,i))}}function Dh(n,i,a,c){switch(th(i)){case 1:var f=D0;break;case 4:f=L0;break;default:f=mc}a=f.bind(null,i,a,n),f=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Lc(n,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;T=T.return}for(;I!==null;){if(T=zr(I),T===null)return;if(B=T.tag,B===5||B===6){c=p=T;continue e}I=I.parentNode}}c=c.return}ei(function(){var se=p,ve=H(a),_e=[];e:{var xe=Ch.get(n);if(xe!==void 0){var Ie=vc,Ve=n;switch(n){case"keypress":if(yo(a)===0)break e;case"keydown":case"keyup":Ie=q0;break;case"focusin":Ve="focus",Ie=Sc;break;case"focusout":Ve="blur",Ie=Sc;break;case"beforeblur":case"afterblur":Ie=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Z0;break;case wh:case Th:case bh:Ie=B0;break;case Ah:Ie=$0;break;case"scroll":Ie=I0;break;case"wheel":Ie=tx;break;case"copy":case"cut":case"paste":Ie=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ah}var Xe=(i&4)!==0,Jt=!Xe&&n==="scroll",K=Xe?xe!==null?xe+"Capture":null:xe;Xe=[];for(var G=se,te;G!==null;){te=G;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,K!==null&&(Ee=wn(G,K),Ee!=null&&Xe.push(wa(G,Ee,te)))),Jt)break;G=G.return}0<Xe.length&&(xe=new Ie(xe,Ve,null,a,ve),_e.push({event:xe,listeners:Xe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",xe&&a!==ct&&(Ve=a.relatedTarget||a.fromElement)&&(zr(Ve)||Ve[Vi]))break e;if((Ie||xe)&&(xe=ve.window===ve?ve:(xe=ve.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ie?(Ve=a.relatedTarget||a.toElement,Ie=se,Ve=Ve?zr(Ve):null,Ve!==null&&(Jt=Ti(Ve),Ve!==Jt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=se),Ie!==Ve)){if(Xe=rh,Ee="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=ah,Ee="onPointerLeave",K="onPointerEnter",G="pointer"),Jt=Ie==null?xe:_s(Ie),te=Ve==null?xe:_s(Ve),xe=new Xe(Ee,G+"leave",Ie,a,ve),xe.target=Jt,xe.relatedTarget=te,Ee=null,zr(ve)===se&&(Xe=new Xe(K,G+"enter",Ve,a,ve),Xe.target=te,Xe.relatedTarget=Jt,Ee=Xe),Jt=Ee,Ie&&Ve)t:{for(Xe=Ie,K=Ve,G=0,te=Xe;te;te=xs(te))G++;for(te=0,Ee=K;Ee;Ee=xs(Ee))te++;for(;0<G-te;)Xe=xs(Xe),G--;for(;0<te-G;)K=xs(K),te--;for(;G--;){if(Xe===K||K!==null&&Xe===K.alternate)break t;Xe=xs(Xe),K=xs(K)}Xe=null}else Xe=null;Ie!==null&&Lh(_e,xe,Ie,Xe,!1),Ve!==null&&Jt!==null&&Lh(_e,Jt,Ve,Xe,!0)}}e:{if(xe=se?_s(se):window,Ie=xe.nodeName&&xe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&xe.type==="file")var Ke=lx;else if(fh(xe))if(ph)Ke=fx;else{Ke=ux;var et=cx}else(Ie=xe.nodeName)&&Ie.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=dx);if(Ke&&(Ke=Ke(n,se))){hh(_e,Ke,a,ve);break e}et&&et(n,xe,se),n==="focusout"&&(et=xe._wrapperState)&&et.controlled&&xe.type==="number"&&Vt(xe,"number",xe.value)}switch(et=se?_s(se):window,n){case"focusin":(fh(et)||et.contentEditable==="true")&&(ms=et,Ac=se,Sa=null);break;case"focusout":Sa=Ac=ms=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Mh(_e,a,ve);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Mh(_e,a,ve)}var tt;if(Ec)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ps?uh(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(oh&&a.locale!=="ko"&&(ps||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ps&&(tt=nh()):(dr=ve,xc="value"in dr?dr.value:dr.textContent,ps=!0)),et=Ao(se,lt),0<et.length&&(lt=new sh(lt,n,null,a,ve),_e.push({event:lt,listeners:et}),tt?lt.data=tt:(tt=dh(a),tt!==null&&(lt.data=tt)))),(tt=ix?rx(n,a):sx(n,a))&&(se=Ao(se,"onBeforeInput"),0<se.length&&(ve=new sh("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:se}),ve.data=tt))}Nh(_e,i)})}function wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ao(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=wn(n,a),p!=null&&c.unshift(wa(n,p,f)),p=wn(n,i),p!=null&&c.push(wa(n,p,f))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lh(n,i,a,c,f){for(var p=i._reactName,T=[];a!==null&&a!==c;){var I=a,B=I.alternate,se=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&se!==null&&(I=se,f?(B=wn(a,p),B!=null&&T.unshift(wa(a,B,I))):f||(B=wn(a,p),B!=null&&T.push(wa(a,B,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var _x=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(_x,`
`).replace(yx,"")}function Co(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Ro(){}var Ic=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(Ex)}:Oc;function Ex(n){setTimeout(function(){throw n})}function kc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);pa(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),bi="__reactFiber$"+vs,Ta="__reactProps$"+vs,Vi="__reactContainer$"+vs,Bc="__reactEvents$"+vs,wx="__reactListeners$"+vs,Tx="__reactHandles$"+vs;function zr(n){var i=n[bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Vi]||a[bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[bi])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function ba(n){return n=n[bi]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Po(n){return n[Ta]||null}var zc=[],ys=-1;function pr(n){return{current:n}}function zt(n){0>ys||(n.current=zc[ys],zc[ys]=null,ys--)}function Ot(n,i){ys++,zc[ys]=n.current,n.current=i}var mr={},gn=pr(mr),Ln=pr(!1),Vr=mr;function Ss(n,i){var a=n.type.contextTypes;if(!a)return mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function In(n){return n=n.childContextTypes,n!=null}function No(){zt(Ln),zt(gn)}function Oh(n,i,a){if(gn.current!==mr)throw Error(t(168));Ot(gn,i),Ot(Ln,a)}function kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,me(n)||"Unknown",f));return ce({},a,c)}function Do(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Vr=gn.current,Ot(gn,n),Ot(Ln,Ln.current),!0}function Bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,zt(Ln),zt(gn),Ot(gn,n)):zt(Ln),Ot(Ln,a)}var Hi=null,Lo=!1,Vc=!1;function zh(n){Hi===null?Hi=[n]:Hi.push(n)}function bx(n){Lo=!0,zh(n)}function gr(){if(!Vc&&Hi!==null){Vc=!0;var n=0,i=ot;try{var a=Hi;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Hi=null,Lo=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(n+1)),ho(ae,gr),f}finally{ot=i,Vc=!1}}return null}var Ms=[],Es=0,Io=null,Uo=0,ii=[],ri=0,Hr=null,Gi=1,ji="";function Gr(n,i){Ms[Es++]=Uo,Ms[Es++]=Io,Io=n,Uo=i}function Vh(n,i,a){ii[ri++]=Gi,ii[ri++]=ji,ii[ri++]=Hr,Hr=n;var c=Gi;n=ji;var f=32-$e(c)-1;c&=~(1<<f),a+=1;var p=32-$e(i)+f;if(30<p){var T=f-f%5;p=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Gi=1<<32-$e(i)+f|a<<f|c,ji=p+n}else Gi=1<<p|a<<f|c,ji=n}function Hc(n){n.return!==null&&(Gr(n,1),Vh(n,1,0))}function Gc(n){for(;n===Io;)Io=Ms[--Es],Ms[Es]=null,Uo=Ms[--Es],Ms[Es]=null;for(;n===Hr;)Hr=ii[--ri],ii[ri]=null,ji=ii[--ri],ii[ri]=null,Gi=ii[--ri],ii[ri]=null}var Xn=null,Yn=null,Ht=!1,mi=null;function Hh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,Yn=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Gi,overflow:ji}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,Yn=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(Ht){var i=Yn;if(i){var a=i;if(!Gh(n,i)){if(jc(n))throw Error(t(418));i=hr(a.nextSibling);var c=Xn;i&&Gh(n,i)?Hh(c,a):(n.flags=n.flags&-4097|2,Ht=!1,Xn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Xn=n}}}function jh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Fo(n){if(n!==Xn)return!1;if(!Ht)return jh(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=Yn)){if(jc(n))throw Wh(),Error(t(418));for(;i;)Hh(n,i),i=hr(i.nextSibling)}if(jh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Yn=hr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Yn=null}}else Yn=Xn?hr(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=Yn;n;)n=hr(n.nextSibling)}function ws(){Yn=Xn=null,Ht=!1}function Xc(n){mi===null?mi=[n]:mi.push(n)}var Ax=D.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var I=f.refs;T===null?delete I[p]:I[p]=T},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(K,G){if(n){var te=K.deletions;te===null?(K.deletions=[G],K.flags|=16):te.push(G)}}function a(K,G){if(!n)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function f(K,G){return K=wr(K,G),K.index=0,K.sibling=null,K}function p(K,G,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<G?(K.flags|=2,G):te):(K.flags|=2,G)):(K.flags|=1048576,G)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,G,te,Ee){return G===null||G.tag!==6?(G=Ou(te,K.mode,Ee),G.return=K,G):(G=f(G,te),G.return=K,G)}function B(K,G,te,Ee){var Ke=te.type;return Ke===V?ve(K,G,te.props.children,Ee,te.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Xh(Ke)===G.type)?(Ee=f(G,te.props),Ee.ref=Aa(K,G,te),Ee.return=K,Ee):(Ee=ol(te.type,te.key,te.props,null,K.mode,Ee),Ee.ref=Aa(K,G,te),Ee.return=K,Ee)}function se(K,G,te,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=ku(te,K.mode,Ee),G.return=K,G):(G=f(G,te.children||[]),G.return=K,G)}function ve(K,G,te,Ee,Ke){return G===null||G.tag!==7?(G=Zr(te,K.mode,Ee,Ke),G.return=K,G):(G=f(G,te),G.return=K,G)}function _e(K,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Ou(""+G,K.mode,te),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case F:return te=ol(G.type,G.key,G.props,null,K.mode,te),te.ref=Aa(K,null,G),te.return=K,te;case O:return G=ku(G,K.mode,te),G.return=K,G;case ie:var Ee=G._init;return _e(K,Ee(G._payload),te)}if(xt(G)||oe(G))return G=Zr(G,K.mode,te,null),G.return=K,G;Oo(K,G)}return null}function xe(K,G,te,Ee){var Ke=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(K,G,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===Ke?B(K,G,te,Ee):null;case O:return te.key===Ke?se(K,G,te,Ee):null;case ie:return Ke=te._init,xe(K,G,Ke(te._payload),Ee)}if(xt(te)||oe(te))return Ke!==null?null:ve(K,G,te,Ee,null);Oo(K,te)}return null}function Ie(K,G,te,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return K=K.get(te)||null,I(G,K,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case F:return K=K.get(Ee.key===null?te:Ee.key)||null,B(G,K,Ee,Ke);case O:return K=K.get(Ee.key===null?te:Ee.key)||null,se(G,K,Ee,Ke);case ie:var et=Ee._init;return Ie(K,G,te,et(Ee._payload),Ke)}if(xt(Ee)||oe(Ee))return K=K.get(te)||null,ve(G,K,Ee,Ke,null);Oo(G,Ee)}return null}function Ve(K,G,te,Ee){for(var Ke=null,et=null,tt=G,lt=G=0,dn=null;tt!==null&&lt<te.length;lt++){tt.index>lt?(dn=tt,tt=null):dn=tt.sibling;var At=xe(K,tt,te[lt],Ee);if(At===null){tt===null&&(tt=dn);break}n&&tt&&At.alternate===null&&i(K,tt),G=p(At,G,lt),et===null?Ke=At:et.sibling=At,et=At,tt=dn}if(lt===te.length)return a(K,tt),Ht&&Gr(K,lt),Ke;if(tt===null){for(;lt<te.length;lt++)tt=_e(K,te[lt],Ee),tt!==null&&(G=p(tt,G,lt),et===null?Ke=tt:et.sibling=tt,et=tt);return Ht&&Gr(K,lt),Ke}for(tt=c(K,tt);lt<te.length;lt++)dn=Ie(tt,K,lt,te[lt],Ee),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?lt:dn.key),G=p(dn,G,lt),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(Tr){return i(K,Tr)}),Ht&&Gr(K,lt),Ke}function Xe(K,G,te,Ee){var Ke=oe(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var et=Ke=null,tt=G,lt=G=0,dn=null,At=te.next();tt!==null&&!At.done;lt++,At=te.next()){tt.index>lt?(dn=tt,tt=null):dn=tt.sibling;var Tr=xe(K,tt,At.value,Ee);if(Tr===null){tt===null&&(tt=dn);break}n&&tt&&Tr.alternate===null&&i(K,tt),G=p(Tr,G,lt),et===null?Ke=Tr:et.sibling=Tr,et=Tr,tt=dn}if(At.done)return a(K,tt),Ht&&Gr(K,lt),Ke;if(tt===null){for(;!At.done;lt++,At=te.next())At=_e(K,At.value,Ee),At!==null&&(G=p(At,G,lt),et===null?Ke=At:et.sibling=At,et=At);return Ht&&Gr(K,lt),Ke}for(tt=c(K,tt);!At.done;lt++,At=te.next())At=Ie(tt,K,lt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?lt:At.key),G=p(At,G,lt),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(av){return i(K,av)}),Ht&&Gr(K,lt),Ke}function Jt(K,G,te,Ee){if(typeof te=="object"&&te!==null&&te.type===V&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var Ke=te.key,et=G;et!==null;){if(et.key===Ke){if(Ke=te.type,Ke===V){if(et.tag===7){a(K,et.sibling),G=f(et,te.props.children),G.return=K,K=G;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Xh(Ke)===et.type){a(K,et.sibling),G=f(et,te.props),G.ref=Aa(K,et,te),G.return=K,K=G;break e}a(K,et);break}else i(K,et);et=et.sibling}te.type===V?(G=Zr(te.props.children,K.mode,Ee,te.key),G.return=K,K=G):(Ee=ol(te.type,te.key,te.props,null,K.mode,Ee),Ee.ref=Aa(K,G,te),Ee.return=K,K=Ee)}return T(K);case O:e:{for(et=te.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(K,G.sibling),G=f(G,te.children||[]),G.return=K,K=G;break e}else{a(K,G);break}else i(K,G);G=G.sibling}G=ku(te,K.mode,Ee),G.return=K,K=G}return T(K);case ie:return et=te._init,Jt(K,G,et(te._payload),Ee)}if(xt(te))return Ve(K,G,te,Ee);if(oe(te))return Xe(K,G,te,Ee);Oo(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(K,G.sibling),G=f(G,te),G.return=K,K=G):(a(K,G),G=Ou(te,K.mode,Ee),G.return=K,K=G),T(K)):a(K,G)}return Jt}var Ts=Yh(!0),qh=Yh(!1),ko=pr(null),Bo=null,bs=null,Yc=null;function qc(){Yc=bs=Bo=null}function Kc(n){var i=ko.current;zt(ko),n._currentValue=i}function Qc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function As(n,i){Bo=n,Yc=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Bo===null)throw Error(t(308));bs=n,Bo.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var jr=null;function Zc(n){jr===null?jr=[n]:jr.push(n)}function Kh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Zc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Wi(n,c)}function Wi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var xr=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Wi(n,a)}return f=c.interleaved,f===null?(i.next=i,Zc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Wi(n,a)}function zo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ct(n,a)}}function Zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,c){var f=n.updateQueue;xr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,se=B.next;B.next=null,T===null?p=se:T.next=se,T=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=se:I.next=se,ve.lastBaseUpdate=B))}if(p!==null){var _e=f.baseState;T=0,ve=se=B=null,I=p;do{var xe=I.lane,Ie=I.eventTime;if((c&xe)===xe){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=n,Xe=I;switch(xe=i,Ie=a,Xe.tag){case 1:if(Ve=Xe.payload,typeof Ve=="function"){_e=Ve.call(Ie,_e,xe);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Xe.payload,xe=typeof Ve=="function"?Ve.call(Ie,_e,xe):Ve,xe==null)break e;_e=ce({},_e,xe);break e;case 2:xr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[I]:xe.push(I))}else Ie={eventTime:Ie,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(se=ve=Ie,B=_e):ve=ve.next=Ie,T|=xe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(ve===null&&(B=_e),f.baseState=B,f.firstBaseUpdate=se,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Yr|=T,n.lanes=T,n.memoizedState=_e}}function Jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ca={},Ai=pr(Ca),Ra=pr(Ca),Pa=pr(Ca);function Wr(n){if(n===Ca)throw Error(t(174));return n}function $c(n,i){switch(Ot(Pa,i),Ot(Ra,n),Ot(Ai,Ca),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}zt(Ai),Ot(Ai,i)}function Cs(){zt(Ai),zt(Ra),zt(Pa)}function $h(n){Wr(Pa.current);var i=Wr(Ai.current),a=ge(i,n.type);i!==a&&(Ot(Ra,n),Ot(Ai,a))}function eu(n){Ra.current===n&&(zt(Ai),zt(Ra))}var jt=pr(0);function Ho(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Go=D.ReactCurrentDispatcher,iu=D.ReactCurrentBatchConfig,Xr=0,Wt=null,nn=null,cn=null,jo=!1,Na=!1,Da=0,Cx=0;function xn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!pi(n[a],i[a]))return!1;return!0}function su(n,i,a,c,f,p){if(Xr=p,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Go.current=n===null||n.memoizedState===null?Dx:Lx,n=a(c,f),Na){p=0;do{if(Na=!1,Da=0,25<=p)throw Error(t(301));p+=1,cn=nn=null,i.updateQueue=null,Go.current=Ix,n=a(c,f)}while(Na)}if(Go.current=Yo,i=nn!==null&&nn.next!==null,Xr=0,cn=nn=Wt=null,jo=!1,i)throw Error(t(300));return n}function au(){var n=Da!==0;return Da=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Wt.memoizedState=cn=n:cn=cn.next=n,cn}function ai(){if(nn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=cn===null?Wt.memoizedState:cn.next;if(i!==null)cn=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},cn===null?Wt.memoizedState=cn=n:cn=cn.next=n}return cn}function La(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=nn,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var I=T=null,B=null,se=p;do{var ve=se.lane;if((Xr&ve)===ve)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var _e={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(I=B=_e,T=c):B=B.next=_e,Wt.lanes|=ve,Yr|=ve}se=se.next}while(se!==null&&se!==p);B===null?T=c:B.next=I,pi(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Wt.lanes|=p,Yr|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=n(p,T.action),T=T.next;while(T!==f);pi(p,i.memoizedState)||(Un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function ep(){}function tp(n,i){var a=Wt,c=ai(),f=i(),p=!pi(c.memoizedState,f);if(p&&(c.memoizedState=f,Un=!0),c=c.queue,cu(rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Ia(9,ip.bind(null,a,c,f,i),void 0,null),un===null)throw Error(t(349));(Xr&30)!==0||np(a,i,f)}return f}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,c){i.value=a,i.getSnapshot=c,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!pi(n,a)}catch{return!0}}function ap(n){var i=Wi(n,1);i!==null&&_i(i,n,1,-1)}function op(n){var i=Ci();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},i.queue=n,n=n.dispatch=Nx.bind(null,Wt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function lp(){return ai().memoizedState}function Wo(n,i,a,c){var f=Ci();Wt.flags|=n,f.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function Xo(n,i,a,c){var f=ai();c=c===void 0?null:c;var p=void 0;if(nn!==null){var T=nn.memoizedState;if(p=T.destroy,c!==null&&ru(c,T.deps)){f.memoizedState=Ia(i,a,p,c);return}}Wt.flags|=n,f.memoizedState=Ia(1|i,a,p,c)}function cp(n,i){return Wo(8390656,8,n,i)}function cu(n,i){return Xo(2048,8,n,i)}function up(n,i){return Xo(4,2,n,i)}function dp(n,i){return Xo(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4,4,fp.bind(null,i,n),a)}function uu(){}function pp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a):(pi(a,i)||(a=Nn(),Wt.lanes|=a,Yr|=a,n.baseState=!0),i)}function Rx(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{ot=a,iu.transition=c}}function xp(){return ai().memoizedState}function Px(n,i,a){var c=Mr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))_p(i,a);else if(a=Kh(n,i,a,c),a!==null){var f=An();_i(a,n,c,f),yp(a,i,c)}}function Nx(n,i,a){var c=Mr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))_p(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,I=p(T,a);if(f.hasEagerState=!0,f.eagerState=I,pi(I,T)){var B=i.interleaved;B===null?(f.next=f,Zc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=Kh(n,i,f,c),a!==null&&(f=An(),_i(a,n,c,f),yp(a,i,c))}}function vp(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function _p(n,i){Na=jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ct(n,a)}}var Yo={readContext:si,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Dx={readContext:si,useCallback:function(n,i){return Ci().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4194308,4,fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wo(4,2,n,i)},useMemo:function(n,i){var a=Ci();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ci();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Px.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Ci();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:uu,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=Rx.bind(null,n[1]),Ci().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,f=Ci();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));(Xr&30)!==0||np(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,cp(rp.bind(null,c,p,n),[n]),c.flags|=2048,Ia(9,ip.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Ci(),i=un.identifierPrefix;if(Ht){var a=ji,c=Gi;a=(c&~(1<<32-$e(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Cx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Lx={readContext:si,useCallback:pp,useContext:si,useEffect:cu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:dp,useMemo:mp,useReducer:ou,useRef:lp,useState:function(){return ou(La)},useDebugValue:uu,useDeferredValue:function(n){var i=ai();return gp(i,nn.memoizedState,n)},useTransition:function(){var n=ou(La)[0],i=ai().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:xp,unstable_isNewReconciler:!1},Ix={readContext:si,useCallback:pp,useContext:si,useEffect:cu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:dp,useMemo:mp,useReducer:lu,useRef:lp,useState:function(){return lu(La)},useDebugValue:uu,useDeferredValue:function(n){var i=ai();return nn===null?i.memoizedState=n:gp(i,nn.memoizedState,n)},useTransition:function(){var n=lu(La)[0],i=ai().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:xp,unstable_isNewReconciler:!1};function gi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=An(),f=Mr(n),p=Xi(c,f);p.payload=i,a!=null&&(p.callback=a),i=vr(n,p,f),i!==null&&(_i(i,n,f,c),zo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=An(),f=Mr(n),p=Xi(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=vr(n,p,f),i!==null&&(_i(i,n,f,c),zo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),c=Mr(n),f=Xi(a,c);f.tag=2,i!=null&&(f.callback=i),i=vr(n,f,c),i!==null&&(_i(i,n,c,a),zo(i,n,c))}};function Sp(n,i,a,c,f,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(f,p):!0}function Mp(n,i,a){var c=!1,f=mr,p=i.contextType;return typeof p=="object"&&p!==null?p=si(p):(f=In(i)?Vr:gn.current,c=i.contextTypes,p=(c=c!=null)?Ss(n,f):mr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function Ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function fu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Jc(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=si(p):(p=In(i)?Vr:gn.current,f.context=Ss(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(du(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&qo.enqueueReplaceState(f,f.state,null),Vo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var a="",c=i;do a+=Ze(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function wp(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){tl||(tl=!0,Ru=c),pu(n,i)},a}function Tp(n,i,a){a=Xi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){pu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){pu(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function bp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Ux;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Kx.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Fx=D.ReactCurrentOwner,Un=!1;function bn(n,i,a,c){i.child=n===null?qh(i,null,a,c):Ts(i,n.child,a,c)}function Rp(n,i,a,c,f){a=a.render;var p=i.ref;return As(i,f),c=su(n,i,a,c,p,f),a=au(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Yi(n,i,f)):(Ht&&a&&Hc(i),i.flags|=1,bn(n,i,c,f),i.child)}function Pp(n,i,a,c,f){if(n===null){var p=a.type;return typeof p=="function"&&!Fu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Np(n,i,p,c,f)):(n=ol(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(T,c)&&n.ref===i.ref)return Yi(n,i,f)}return i.flags|=1,n=wr(p,c),n.ref=i.ref,n.return=i,i.child=n}function Np(n,i,a,c,f){if(n!==null){var p=n.memoizedProps;if(ya(p,c)&&n.ref===i.ref)if(Un=!1,i.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,Yi(n,i,f)}return mu(n,i,a,c,f)}function Dp(n,i,a){var c=i.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ns,qn),qn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ot(Ns,qn),qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ot(Ns,qn),qn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ot(Ns,qn),qn|=c;return bn(n,i,f,a),i.child}function Lp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,a,c,f){var p=In(a)?Vr:gn.current;return p=Ss(i,p),As(i,f),a=su(n,i,a,c,p,f),c=au(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Yi(n,i,f)):(Ht&&c&&Hc(i),i.flags|=1,bn(n,i,a,f),i.child)}function Ip(n,i,a,c,f){if(In(a)){var p=!0;Do(i)}else p=!1;if(As(i,f),i.stateNode===null)Qo(n,i),Mp(i,a,c),fu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var B=T.context,se=a.contextType;typeof se=="object"&&se!==null?se=si(se):(se=In(a)?Vr:gn.current,se=Ss(i,se));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";_e||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||B!==se)&&Ep(i,T,c,se),xr=!1;var xe=i.memoizedState;T.state=xe,Vo(i,c,T,f),B=i.memoizedState,I!==c||xe!==B||Ln.current||xr?(typeof ve=="function"&&(du(i,a,ve,c),B=i.memoizedState),(I=xr||Sp(i,a,I,c,xe,B,se))?(_e||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),T.props=c,T.state=B,T.context=se,c=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Qh(n,i),I=i.memoizedProps,se=i.type===i.elementType?I:gi(i.type,I),T.props=se,_e=i.pendingProps,xe=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=si(B):(B=In(a)?Vr:gn.current,B=Ss(i,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==_e||xe!==B)&&Ep(i,T,c,B),xr=!1,xe=i.memoizedState,T.state=xe,Vo(i,c,T,f);var Ve=i.memoizedState;I!==_e||xe!==Ve||Ln.current||xr?(typeof Ie=="function"&&(du(i,a,Ie,c),Ve=i.memoizedState),(se=xr||Sp(i,a,se,c,xe,Ve,B)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ve,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ve,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),T.props=c,T.state=Ve,T.context=B,c=se):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,a,c,p,f)}function gu(n,i,a,c,f,p){Lp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Bh(i,a,!1),Yi(n,i,p);c=i.stateNode,Fx.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,p),i.child=Ts(i,null,I,p)):bn(n,i,I,p),i.memoizedState=c.state,f&&Bh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(n,i.context,!1),$c(n,i.containerInfo)}function Fp(n,i,a,c,f){return ws(),Xc(f),i.flags|=256,bn(n,i,a,c),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var c=i.pendingProps,f=jt.current,p=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ot(jt,f&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=ll(T,c,0,null),n=Zr(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=vu(a),i.memoizedState=xu,n):_u(i,T));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Ox(n,i,T,c,I,f,a);if(p){p=c.fallback,T=i.mode,f=n.child,I=f.sibling;var B={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=wr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?p=wr(I,p):(p=Zr(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=n.child.memoizedState,T=T===null?vu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=n.childLanes&~a,i.memoizedState=xu,c}return p=n.child,n=p.sibling,c=wr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _u(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ko(n,i,a,c){return c!==null&&Xc(c),Ts(i,n.child,null,a),n=_u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ox(n,i,a,c,f,p,T){if(a)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),Ko(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=ll({mode:"visible",children:c.children},f,0,null),p=Zr(p,f,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=vu(T),i.memoizedState=xu,p);if((i.mode&1)===0)return Ko(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=hu(p,c,void 0),Ko(n,i,T,c)}if(I=(T&n.childLanes)!==0,Un||I){if(c=un,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Wi(n,f),_i(c,n,f,-1))}return Uu(),c=hu(Error(t(421))),Ko(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Qx.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Yn=hr(f.nextSibling),Xn=i,Ht=!0,mi=null,n!==null&&(ii[ri++]=Gi,ii[ri++]=ji,ii[ri++]=Hr,Gi=n.id,ji=n.overflow,Hr=i),i=_u(i,c.children),i.flags|=4096,i)}function kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Qc(n.return,i,a)}function yu(n,i,a,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Bp(n,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(bn(n,i,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ot(jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Ho(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),yu(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ho(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}yu(i,!0,a,null,p);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Yi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function kx(n,i,a){switch(i.tag){case 3:Up(i),ws();break;case 5:$h(i);break;case 1:In(i.type)&&Do(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ot(ko,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ot(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Op(n,i,a):(Ot(jt,jt.current&1),n=Yi(n,i,a),n!==null?n.sibling:null);Ot(jt,jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(jt,jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return Yi(n,i,a)}var zp,Su,Vp,Hp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Su=function(){},Vp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Wr(Ai.current);var p=null;switch(a){case"input":f=Mt(n,f),c=Mt(n,c),p=[];break;case"select":f=ce({},f,{value:void 0}),c=ce({},c,{value:void 0}),p=[];break;case"textarea":f=Ge(n,f),c=Ge(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}Be(a,c);var T;a=null;for(se in f)if(!c.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var I=f[se];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?p||(p=[]):(p=p||[]).push(se,null));for(se in c){var B=c[se];if(I=f!=null?f[se]:void 0,c.hasOwnProperty(se)&&B!==I&&(B!=null||I!=null))if(se==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(p||(p=[]),p.push(se,a)),a=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(p=p||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&Bt("scroll",n),p||I===B||(p=[])):(p=p||[]).push(se,B))}a&&(p=p||[]).push("style",a);var se=p;(i.updateQueue=se)&&(i.flags|=4)}},Hp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ua(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Bx(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return In(i.type)&&No(),vn(i),null;case 3:return c=i.stateNode,Cs(),zt(Ln),zt(gn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(Du(mi),mi=null))),Su(n,i),vn(i),null;case 5:eu(i);var f=Wr(Pa.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Wr(Ai.current),Fo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[bi]=i,c[Ta]=p,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(f=0;f<Ma.length;f++)Bt(Ma[f],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Pt(c,p),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Bt("invalid",c);break;case"textarea":N(c,p),Bt("invalid",c)}Be(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var I=p[T];T==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Co(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Co(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":it(c),z(c,p,!0);break;case"textarea":it(c),j(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ro)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[bi]=i,n[Ta]=c,zp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ne(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),f=c;break;case"iframe":case"object":case"embed":Bt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ma.length;f++)Bt(Ma[f],n);f=c;break;case"source":Bt("error",n),f=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=c;break;case"details":Bt("toggle",n),f=c;break;case"input":Pt(n,c),f=Mt(n,c),Bt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ce({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":N(n,c),f=Ge(n,c),Bt("invalid",n);break;default:f=c}Be(a,f),I=f;for(p in I)if(I.hasOwnProperty(p)){var B=I[p];p==="style"?we(n,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ke(n,B)):p==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Te(n,B):typeof B=="number"&&Te(n,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Bt("scroll",n):B!=null&&L(n,p,B,T))}switch(a){case"input":it(n),z(n,c,!1);break;case"textarea":it(n),j(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Et(n,!!c.multiple,p,!1):c.defaultValue!=null&&Et(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(Pa.current),Wr(Ai.current),Fo(i)){if(c=i.stateNode,a=i.memoizedProps,c[bi]=i,(p=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:Co(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Co(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[bi]=i,i.stateNode=c}return vn(i),null;case 13:if(zt(jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),ws(),i.flags|=98560,p=!1;else if(p=Fo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[bi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),p=!1}else mi!==null&&(Du(mi),mi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?rn===0&&(rn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Cs(),Su(n,i),n===null&&Ea(i.stateNode.containerInfo),vn(i),null;case 10:return Kc(i.type._context),vn(i),null;case 17:return In(i.type)&&No(),vn(i),null;case 19:if(zt(jt),p=i.memoizedState,p===null)return vn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ua(p,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Ho(n),T!==null){for(i.flags|=128,Ua(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,n=T.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(jt,jt.current&1|2),i.child}n=n.sibling}p.tail!==null&&b()>Ds&&(i.flags|=128,c=!0,Ua(p,!1),i.lanes=4194304)}else{if(!c)if(n=Ho(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Ht)return vn(i),null}else 2*b()-p.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,c=!0,Ua(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=b(),i.sibling=null,a=jt.current,Ot(jt,c?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Iu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function zx(n,i){switch(Gc(i),i.tag){case 1:return In(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),zt(Ln),zt(gn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(zt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(jt),null;case 4:return Cs(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Zo=!1,_n=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){qt(n,i,c)}else a.current=null}function Mu(n,i,a){try{a()}catch(c){qt(n,i,c)}}var Gp=!1;function Hx(n,i){if(Ic=xo,n=Sh(),bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,I=-1,B=-1,se=0,ve=0,_e=n,xe=null;t:for(;;){for(var Ie;_e!==a||f!==0&&_e.nodeType!==3||(I=T+f),_e!==p||c!==0&&_e.nodeType!==3||(B=T+c),_e.nodeType===3&&(T+=_e.nodeValue.length),(Ie=_e.firstChild)!==null;)xe=_e,_e=Ie;for(;;){if(_e===n)break t;if(xe===a&&++se===f&&(I=T),xe===p&&++ve===c&&(B=T),(Ie=_e.nextSibling)!==null)break;_e=xe,xe=_e.parentNode}_e=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},xo=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Xe=Ve.memoizedProps,Jt=Ve.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:gi(i.type,Xe),Jt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ve=Gp,Gp=!1,Ve}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Mu(i,a,p)}f=f.next}while(f!==c)}}function Jo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Eu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function jp(n){var i=n.alternate;i!==null&&(n.alternate=null,jp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[bi],delete i[Ta],delete i[Bc],delete i[wx],delete i[Tx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}var hn=null,xi=!1;function _r(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 5:_n||Ps(a,i);case 6:var c=hn,f=xi;hn=null,_r(n,i,a),hn=c,xi=f,hn!==null&&(xi?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(xi?(n=hn,a=a.stateNode,n.nodeType===8?kc(n.parentNode,a):n.nodeType===1&&kc(n,a),pa(n)):kc(hn,a.stateNode));break;case 4:c=hn,f=xi,hn=a.stateNode.containerInfo,xi=!0,_r(n,i,a),hn=c,xi=f;break;case 0:case 11:case 14:case 15:if(!_n&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&Mu(a,i,T),f=f.next}while(f!==c)}_r(n,i,a);break;case 1:if(!_n&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){qt(a,i,I)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(_n=(c=_n)||a.memoizedState!==null,_r(n,i,a),_n=c):_r(n,i,a);break;default:_r(n,i,a)}}function qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Vx),i.forEach(function(c){var f=Zx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:hn=I.stateNode,xi=!1;break e;case 3:hn=I.stateNode.containerInfo,xi=!0;break e;case 4:hn=I.stateNode.containerInfo,xi=!0;break e}I=I.return}if(hn===null)throw Error(t(160));Yp(p,T,f),hn=null,xi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(se){qt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Ri(n),c&4){try{Fa(3,n,n.return),Jo(3,n)}catch(Xe){qt(n,n.return,Xe)}try{Fa(5,n,n.return)}catch(Xe){qt(n,n.return,Xe)}}break;case 1:vi(i,n),Ri(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(vi(i,n),Ri(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var f=n.stateNode;try{Te(f,"")}catch(Xe){qt(n,n.return,Xe)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,T=a!==null?a.memoizedProps:p,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&ut(f,p),Ne(I,T);var se=Ne(I,p);for(T=0;T<B.length;T+=2){var ve=B[T],_e=B[T+1];ve==="style"?we(f,_e):ve==="dangerouslySetInnerHTML"?ke(f,_e):ve==="children"?Te(f,_e):L(f,ve,_e,se)}switch(I){case"input":kt(f,p);break;case"textarea":E(f,p);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?Et(f,!!p.multiple,Ie,!1):xe!==!!p.multiple&&(p.defaultValue!=null?Et(f,!!p.multiple,p.defaultValue,!0):Et(f,!!p.multiple,p.multiple?[]:"",!1))}f[Ta]=p}catch(Xe){qt(n,n.return,Xe)}}break;case 6:if(vi(i,n),Ri(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Xe){qt(n,n.return,Xe)}}break;case 3:if(vi(i,n),Ri(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Xe){qt(n,n.return,Xe)}break;case 4:vi(i,n),Ri(n);break;case 13:vi(i,n),Ri(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Cu=b())),c&4&&qp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(se=_n)||ve,vi(i,n),_n=se):vi(i,n),Ri(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(_e=Oe=ve;Oe!==null;){switch(xe=Oe,Ie=xe.child,xe.tag){case 0:case 11:case 14:case 15:Fa(4,xe,xe.return);break;case 1:Ps(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Xe){qt(c,a,Xe)}}break;case 5:Ps(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Jp(_e);continue}}Ie!==null?(Ie.return=xe,Oe=Ie):Jp(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{f=_e.stateNode,se?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=_e.stateNode,B=_e.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ye("display",T))}catch(Xe){qt(n,n.return,Xe)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=se?"":_e.memoizedProps}catch(Xe){qt(n,n.return,Xe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:vi(i,n),Ri(n),c&4&&qp(n);break;case 21:break;default:vi(i,n),Ri(n)}}function Ri(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Te(f,""),c.flags&=-33);var p=Xp(n);Tu(n,p,f);break;case 3:case 4:var T=c.stateNode.containerInfo,I=Xp(n);wu(n,I,T);break;default:throw Error(t(161))}}catch(B){qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gx(n,i,a){Oe=n,Qp(n)}function Qp(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,p=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||Zo;if(!T){var I=f.alternate,B=I!==null&&I.memoizedState!==null||_n;I=Zo;var se=_n;if(Zo=T,(_n=B)&&!se)for(Oe=f;Oe!==null;)T=Oe,B=T.child,T.tag===22&&T.memoizedState!==null?$p(f):B!==null?(B.return=T,Oe=B):$p(f);for(;p!==null;)Oe=p,Qp(p),p=p.sibling;Oe=f,Zo=I,_n=se}Zp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Oe=p):Zp(n)}}function Zp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Jo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:gi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Jh(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jh(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&pa(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&Eu(i)}catch(xe){qt(i,i.return,xe)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Jp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function $p(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jo(4,i)}catch(B){qt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){qt(i,f,B)}}var p=i.return;try{Eu(i)}catch(B){qt(i,p,B)}break;case 5:var T=i.return;try{Eu(i)}catch(B){qt(i,T,B)}}}catch(B){qt(i,i.return,B)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var jx=Math.ceil,$o=D.ReactCurrentDispatcher,bu=D.ReactCurrentOwner,oi=D.ReactCurrentBatchConfig,Tt=0,un=null,en=null,pn=0,qn=0,Ns=pr(0),rn=0,Oa=null,Yr=0,el=0,Au=0,ka=null,Fn=null,Cu=0,Ds=1/0,qi=null,tl=!1,Ru=null,yr=null,nl=!1,Sr=null,il=0,Ba=0,Pu=null,rl=-1,sl=0;function An(){return(Tt&6)!==0?b():rl!==-1?rl:rl=b()}function Mr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&pn!==0?pn&-pn:Ax.transition!==null?(sl===0&&(sl=Nn()),sl):(n=ot,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function _i(n,i,a,c){if(50<Ba)throw Ba=0,Pu=null,Error(t(185));jn(n,a,c),((Tt&2)===0||n!==un)&&(n===un&&((Tt&2)===0&&(el|=a),rn===4&&Er(n,pn)),On(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Ds=b()+500,Lo&&gr()))}function On(n,i){var a=n.callbackNode;Tn(n,i);var c=Qt(n,n===un?pn:0);if(c===0)a!==null&&po(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&po(a),i===1)n.tag===0?bx(tm.bind(null,n)):zh(tm.bind(null,n)),Mx(function(){(Tt&6)===0&&gr()}),a=null;else{switch(hi(c)){case 1:a=ae;break;case 4:a=ne;break;case 16:a=Z;break;case 536870912:a=Ue;break;default:a=Z}a=cm(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(rl=-1,sl=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ls()&&n.callbackNode!==a)return null;var c=Qt(n,n===un?pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=al(n,c);else{i=c;var f=Tt;Tt|=2;var p=im();(un!==n||pn!==i)&&(qi=null,Ds=b()+500,Kr(n,i));do try{Yx();break}catch(I){nm(n,I)}while(!0);qc(),$o.current=p,Tt=f,en!==null?i=0:(un=null,pn=0,i=rn)}if(i!==0){if(i===2&&(f=vt(n),f!==0&&(c=f,i=Nu(n,f))),i===1)throw a=Oa,Kr(n,0),Er(n,c),On(n,b()),a;if(i===6)Er(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Wx(f)&&(i=al(n,c),i===2&&(p=vt(n),p!==0&&(c=p,i=Nu(n,p))),i===1))throw a=Oa,Kr(n,0),Er(n,c),On(n,b()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,Fn,qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Cu+500-b(),10<i)){if(Qt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Oc(Qr.bind(null,n,Fn,qi),i);break}Qr(n,Fn,qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-$e(c);p=1<<T,T=i[T],T>f&&(f=T),c&=~p}if(c=f,c=b()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jx(c/1960))-c,10<c){n.timeoutHandle=Oc(Qr.bind(null,n,Fn,qi),c);break}Qr(n,Fn,qi);break;case 5:Qr(n,Fn,qi);break;default:throw Error(t(329))}}}return On(n,b()),n.callbackNode===a?em.bind(null,n):null}function Nu(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(Kr(n,i).flags|=256),n=al(n,i),n!==2&&(i=Fn,Fn=a,i!==null&&Du(i)),n}function Du(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function Wx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!pi(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Au,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$e(i),c=1<<a;n[a]=-1,i&=~c}}function tm(n){if((Tt&6)!==0)throw Error(t(327));Ls();var i=Qt(n,0);if((i&1)===0)return On(n,b()),null;var a=al(n,i);if(n.tag!==0&&a===2){var c=vt(n);c!==0&&(i=c,a=Nu(n,c))}if(a===1)throw a=Oa,Kr(n,0),Er(n,i),On(n,b()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,Fn,qi),On(n,b()),null}function Lu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Ds=b()+500,Lo&&gr())}}function qr(n){Sr!==null&&Sr.tag===0&&(Tt&6)===0&&Ls();var i=Tt;Tt|=1;var a=oi.transition,c=ot;try{if(oi.transition=null,ot=1,n)return n()}finally{ot=c,oi.transition=a,Tt=i,(Tt&6)===0&&gr()}}function Iu(){qn=Ns.current,zt(Ns)}function Kr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sx(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Cs(),zt(Ln),zt(gn),nu();break;case 5:eu(c);break;case 4:Cs();break;case 13:zt(jt);break;case 19:zt(jt);break;case 10:Kc(c.type._context);break;case 22:case 23:Iu()}a=a.return}if(un=n,en=n=wr(n.current,null),pn=qn=i,rn=0,Oa=null,Au=el=Yr=0,Fn=ka=null,jr!==null){for(i=0;i<jr.length;i++)if(a=jr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,c.next=T}a.pending=c}jr=null}return n}function nm(n,i){do{var a=en;try{if(qc(),Go.current=Yo,jo){for(var c=Wt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}jo=!1}if(Xr=0,cn=nn=Wt=null,Na=!1,Da=0,bu.current=null,a===null||a.return===null){rn=1,Oa=i,en=null;break}e:{var p=n,T=a.return,I=a,B=i;if(i=pn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var xe=ve.alternate;xe?(ve.updateQueue=xe.updateQueue,ve.memoizedState=xe.memoizedState,ve.lanes=xe.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Ap(T);if(Ie!==null){Ie.flags&=-257,Cp(Ie,T,I,p,i),Ie.mode&1&&bp(p,se,i),i=Ie,B=se;var Ve=i.updateQueue;if(Ve===null){var Xe=new Set;Xe.add(B),i.updateQueue=Xe}else Ve.add(B);break e}else{if((i&1)===0){bp(p,se,i),Uu();break e}B=Error(t(426))}}else if(Ht&&I.mode&1){var Jt=Ap(T);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Cp(Jt,T,I,p,i),Xc(Rs(B,I));break e}}p=B=Rs(B,I),rn!==4&&(rn=2),ka===null?ka=[p]:ka.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=wp(p,B,i);Zh(p,K);break e;case 1:I=B;var G=p.type,te=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(yr===null||!yr.has(te)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Tp(p,I,i);Zh(p,Ee);break e}}p=p.return}while(p!==null)}sm(a)}catch(Ke){i=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function im(){var n=$o.current;return $o.current=Yo,n===null?Yo:n}function Uu(){(rn===0||rn===3||rn===2)&&(rn=4),un===null||(Yr&268435455)===0&&(el&268435455)===0||Er(un,pn)}function al(n,i){var a=Tt;Tt|=2;var c=im();(un!==n||pn!==i)&&(qi=null,Kr(n,i));do try{Xx();break}catch(f){nm(n,f)}while(!0);if(qc(),Tt=a,$o.current=c,en!==null)throw Error(t(261));return un=null,pn=0,rn}function Xx(){for(;en!==null;)rm(en)}function Yx(){for(;en!==null&&!fc();)rm(en)}function rm(n){var i=lm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,i===null?sm(n):en=i,bu.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Bx(a,i,qn),a!==null){en=a;return}}else{if(a=zx(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);rn===0&&(rn=5)}function Qr(n,i,a){var c=ot,f=oi.transition;try{oi.transition=null,ot=1,qx(n,i,a,c)}finally{oi.transition=f,ot=c}return null}function qx(n,i,a,c){do Ls();while(Sr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ar(n,p),n===un&&(en=un=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nl||(nl=!0,cm(Z,function(){return Ls(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=oi.transition,oi.transition=null;var T=ot;ot=1;var I=Tt;Tt|=4,bu.current=null,Hx(n,a),Kp(a,n),px(Uc),xo=!!Ic,Uc=Ic=null,n.current=a,Gx(a),hc(),Tt=I,ot=T,oi.transition=p}else n.current=a;if(nl&&(nl=!1,Sr=n,il=f),p=n.pendingLanes,p===0&&(yr=null),Qe(a.stateNode),On(n,b()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(tl)throw tl=!1,n=Ru,Ru=null,n;return(il&1)!==0&&n.tag!==0&&Ls(),p=n.pendingLanes,(p&1)!==0?n===Pu?Ba++:(Ba=0,Pu=n):Ba=0,gr(),null}function Ls(){if(Sr!==null){var n=hi(il),i=oi.transition,a=ot;try{if(oi.transition=null,ot=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,il=0,(Tt&6)!==0)throw Error(t(331));var f=Tt;for(Tt|=4,Oe=n.current;Oe!==null;){var p=Oe,T=p.child;if((Oe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var B=0;B<I.length;B++){var se=I[B];for(Oe=se;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Fa(8,ve,p)}var _e=ve.child;if(_e!==null)_e.return=ve,Oe=_e;else for(;Oe!==null;){ve=Oe;var xe=ve.sibling,Ie=ve.return;if(jp(ve),ve===se){Oe=null;break}if(xe!==null){xe.return=Ie,Oe=xe;break}Oe=Ie}}}var Ve=p.alternate;if(Ve!==null){var Xe=Ve.child;if(Xe!==null){Ve.child=null;do{var Jt=Xe.sibling;Xe.sibling=null,Xe=Jt}while(Xe!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,Oe=T;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Fa(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Oe=K;break e}Oe=p.return}}var G=n.current;for(Oe=G;Oe!==null;){T=Oe;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Oe=te;else e:for(T=G;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Jo(9,I)}}catch(Ke){qt(I,I.return,Ke)}if(I===T){Oe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Oe=Ee;break e}Oe=I.return}}if(Tt=f,gr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ce,n)}catch{}c=!0}return c}finally{ot=a,oi.transition=i}}return!1}function am(n,i,a){i=Rs(a,i),i=wp(n,i,1),n=vr(n,i,1),i=An(),n!==null&&(jn(n,1,i),On(n,i))}function qt(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Rs(a,n),n=Tp(i,n,1),i=vr(i,n,1),n=An(),i!==null&&(jn(i,1,n),On(i,n));break}}i=i.return}}function Kx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(pn&a)===a&&(rn===4||rn===3&&(pn&130023424)===pn&&500>b()-Cu?Kr(n,0):Au|=a),On(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var a=An();n=Wi(n,i),n!==null&&(jn(n,i,a),On(n,a))}function Qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function Zx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Un=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Un=!1,kx(n,i,a);Un=(n.flags&131072)!==0}else Un=!1,Ht&&(i.flags&1048576)!==0&&Vh(i,Uo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var f=Ss(i,gn.current);As(i,a),f=su(null,i,c,n,f,a);var p=au();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(c)?(p=!0,Do(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Jc(i),f.updater=qo,i.stateNode=f,f._reactInternals=i,fu(i,c,n,a),i=gu(null,i,c,!0,p,a)):(i.tag=0,Ht&&p&&Hc(i),bn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=$x(c),n=gi(c,n),f){case 0:i=mu(null,i,c,n,a);break e;case 1:i=Ip(null,i,c,n,a);break e;case 11:i=Rp(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,gi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),mu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),Ip(n,i,c,f,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Qh(n,i),Vo(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Rs(Error(t(423)),i),i=Fp(n,i,c,a,f);break e}else if(c!==f){f=Rs(Error(t(424)),i),i=Fp(n,i,c,a,f);break e}else for(Yn=hr(i.stateNode.containerInfo.firstChild),Xn=i,Ht=!0,mi=null,a=qh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===f){i=Yi(n,i,a);break e}bn(n,i,c,a)}i=i.child}return i;case 5:return $h(i),n===null&&Wc(i),c=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,T=f.children,Fc(c,f)?T=null:p!==null&&Fc(c,p)&&(i.flags|=32),Lp(n,i),bn(n,i,T,a),i.child;case 6:return n===null&&Wc(i),null;case 13:return Op(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):bn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),Rp(n,i,c,f,a);case 7:return bn(n,i,i.pendingProps,a),i.child;case 8:return bn(n,i,i.pendingProps.children,a),i.child;case 12:return bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Ot(ko,c._currentValue),c._currentValue=T,p!==null)if(pi(p.value,T)){if(p.children===f.children&&!Ln.current){i=Yi(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){T=p.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=Xi(-1,a&-a),B.tag=2;var se=p.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),se.pending=B}}p.lanes|=a,B=p.alternate,B!==null&&(B.lanes|=a),Qc(p.return,a,i),I.lanes|=a;break}B=B.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Qc(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}bn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,As(i,a),f=si(f),c=c(f),i.flags|=1,bn(n,i,c,a),i.child;case 14:return c=i.type,f=gi(c,i.pendingProps),f=gi(c.type,f),Pp(n,i,c,f,a);case 15:return Np(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),Qo(n,i),i.tag=1,In(c)?(n=!0,Do(i)):n=!1,As(i,a),Mp(i,c,f),fu(i,c,f,a),gu(null,i,c,!0,n,a);case 19:return Bp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function cm(n,i){return ho(n,i)}function Jx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new Jx(n,i,a,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $x(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ee)return 14}return 2}function wr(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,f,p){var T=2;if(c=n,typeof n=="function")Fu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case V:return Zr(a.children,f,p,i);case A:T=8,f|=8;break;case P:return n=li(12,a,i,f|2),n.elementType=P,n.lanes=p,n;case $:return n=li(13,a,i,f),n.elementType=$,n.lanes=p,n;case le:return n=li(19,a,i,f),n.elementType=le,n.lanes=p,n;case W:return ll(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fe:T=10;break e;case k:T=9;break e;case J:T=11;break e;case ee:T=14;break e;case ie:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,a,i,f),i.elementType=n,i.type=c,i.lanes=p,i}function Zr(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function ll(n,i,a,c){return n=li(22,n,c,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Ou(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function ku(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ev(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dn(0),this.expirationTimes=Dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bu(n,i,a,c,f,p,T,I,B){return n=new ev(n,i,a,I,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=li(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(p),n}function tv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function um(n){if(!n)return mr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return kh(n,a,i)}return i}function dm(n,i,a,c,f,p,T,I,B){return n=Bu(a,c,!0,n,f,p,T,I,B),n.context=um(null),a=n.current,c=An(),f=Mr(a),p=Xi(c,f),p.callback=i??null,vr(a,p,f),n.current.lanes=f,jn(n,f,c),On(n,c),n}function cl(n,i,a,c){var f=i.current,p=An(),T=Mr(f);return a=um(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(p,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=vr(f,i,T),n!==null&&(_i(n,f,T,p),zo(n,f,T)),T}function ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zu(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}function nv(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}dl.prototype.render=Vu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){cl(null,n,null,null)}),i[Vi]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ca();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ur.length&&i!==0&&i<ur[a].priority;a++);ur.splice(a,0,n),a===0&&$f(n)}};function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function iv(n,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var se=ul(T);p.call(se)}}var T=dm(i,c,n,0,null,!1,!1,"",pm);return n._reactRootContainer=T,n[Vi]=T.current,Ea(n.nodeType===8?n.parentNode:n),qr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var se=ul(B);I.call(se)}}var B=Bu(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=B,n[Vi]=B.current,Ea(n.nodeType===8?n.parentNode:n),qr(function(){cl(i,B,a,c)}),B}function hl(n,i,a,c,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var I=f;f=function(){var B=ul(T);I.call(B)}}cl(i,T,n,f)}else T=iv(a,i,n,f,c);return ul(T)}Zt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=yt(i.pendingLanes);a!==0&&(Ct(i,a|1),On(i,b()),(Tt&6)===0&&(Ds=b()+500,gr()))}break;case 13:qr(function(){var c=Wi(n,1);if(c!==null){var f=An();_i(c,n,1,f)}}),zu(n,1)}},ni=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var a=An();_i(i,n,134217728,a)}zu(n,134217728)}},zi=function(n){if(n.tag===13){var i=Mr(n),a=Wi(n,i);if(a!==null){var c=An();_i(a,n,i,c)}zu(n,i)}},ca=function(){return ot},Zf=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},be=function(n,i,a){switch(i){case"input":if(kt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Po(c);if(!f)throw Error(t(90));Kt(c),kt(c,f)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Et(n,!!a.multiple,i,!1)}},at=Lu,Lt=qr;var rv={usingClientEntryPoint:!1,Events:[ba,_s,Po,de,ze,Lu]},za={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sv={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=uo(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Ce=pl.inject(sv),Le=pl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return tv(n,i,null,a)},kn.createRoot=function(n,i){if(!Hu(n))throw Error(t(299));var a=!1,c="",f=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bu(n,1,!1,null,null,a,!1,c,f),n[Vi]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Vu(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=uo(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return qr(n)},kn.hydrate=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Hu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",T=hm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=dm(i,null,n,1,a??null,f,!1,p,T),n[Vi]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new dl(i)},kn.render=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!fl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},kn.unstable_batchedUpdates=Lu,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,a,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Mm;function hv(){if(Mm)return Wu.exports;Mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wu.exports=fv(),Wu.exports}var Em;function pv(){if(Em)return ml;Em=1;var s=hv();return ml.createRoot=s.createRoot,ml.hydrateRoot=s.hydrateRoot,ml}var mv=pv();const Dd="/niduxone/assets/81b886f34308b9c29c4bb4272f90c74fdcfcc1cf-DMkJiHlF.png",gv="/niduxone/assets/cad1eedb250dedb989bcf880945e8e4ddec9e375-fTQrOpOh.png",xv="/niduxone/assets/ff2602408fe0dfe0c3aa47190fca9bba7cce2892-C5LJFu4o.png",vv="/niduxone/assets/236905f42cbad7f1896f604b569774dc4f341eca-CryAWzfC.png",_v="/niduxone/assets/e72576206dda58dcb72858e9a1a4c0a7fc3aa23e-Bw_XQcWk.png",yv="/niduxone/assets/0e260aada5ca13c918e52190cb9b0e4e0e50d721-1XGseohQ.png",wm="/niduxone/assets/d25169f57a91ab45e7f39965e7de2d8bff073a2c-CnWP4qe9.png";var Gt=Cf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="183",Ks={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sv=0,Tm=1,Mv=2,Xl=1,Ev=2,Qa=3,Ur=0,Hn=1,er=2,Ui=0,Qs=1,Js=2,bm=3,Am=4,wv=5,rs=100,Tv=101,bv=102,Av=103,Cv=104,Rv=200,Pv=201,Nv=202,Dv=203,Ld=204,Id=205,Lv=206,Iv=207,Uv=208,Fv=209,Ov=210,kv=211,Bv=212,zv=213,Vv=214,Ud=0,Fd=1,Od=2,$s=3,kd=4,Bd=5,zd=6,Vd=7,Yg=0,Hv=1,Gv=2,Fi=0,Pf=1,Nf=2,Df=3,ac=4,Lf=5,If=6,Uf=7,qg=300,ls=301,ea=302,qu=303,Ku=304,oc=306,Hd=1e3,tr=1001,Gd=1002,mn=1003,jv=1004,gl=1005,Mn=1006,Qu=1007,as=1008,fi=1009,Kg=1010,Qg=1011,Ja=1012,Ff=1013,Oi=1014,Li=1015,Jn=1016,Of=1017,kf=1018,$a=1020,Zg=35902,Jg=35899,$g=1021,e0=1022,wi=1023,ir=1026,os=1027,t0=1028,Bf=1029,ta=1030,zf=1031,Vf=1033,Yl=33776,ql=33777,Kl=33778,Ql=33779,jd=35840,Wd=35841,Xd=35842,Yd=35843,qd=36196,Kd=37492,Qd=37496,Zd=37488,Jd=37489,$d=37490,ef=37491,tf=37808,nf=37809,rf=37810,sf=37811,af=37812,of=37813,lf=37814,cf=37815,uf=37816,df=37817,ff=37818,hf=37819,pf=37820,mf=37821,gf=36492,xf=36494,vf=36495,_f=36283,yf=36284,Sf=36285,Mf=36286,Wv=3200,Xv=0,Yv=1,Lr="",ui="srgb",na="srgb-linear",ec="linear",Dt="srgb",Is=7680,Cm=519,qv=512,Kv=513,Qv=514,Hf=515,Zv=516,Jv=517,Gf=518,$v=519,Rm=35044,Pm="300 es",Ii=2e3,tc=2001;function e_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t_(){const s=nc("canvas");return s.style.display="block",s}const Nm={};function Dm(...s){const e="THREE."+s.shift();console.log(e,...s)}function n0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=n0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=n0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ic(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,st(...s))}function n_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const i_={[Ud]:Fd,[Od]:zd,[kd]:Vd,[$s]:Bd,[Fd]:Ud,[zd]:Od,[Vd]:kd,[Bd]:$s};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,Ef=180/Math.PI;function no(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function r_(s,e){return(s%e+e)%e}function Zu(s,e,t){return(1-t)*s+t*e}function Ha(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const s_={DEG2RAD:Zl};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],m=r[o+1],v=r[o+2],S=r[o+3],x=l[u+0],M=l[u+1],w=l[u+2],C=l[u+3];if(S!==C||h!==x||m!==M||v!==w){let _=h*x+m*M+v*w+S*C;_<0&&(x=-x,M=-M,w=-w,C=-C,_=-_);let y=1-d;if(_<.9995){const R=Math.acos(_),L=Math.sin(R);y=Math.sin(y*R)/L,d=Math.sin(d*R)/L,h=h*y+x*d,m=m*y+M*d,v=v*y+w*d,S=S*y+C*d}else{h=h*y+x*d,m=m*y+M*d,v=v*y+w*d,S=S*y+C*d;const R=1/Math.sqrt(h*h+m*m+v*v+S*S);h*=R,m*=R,v*=R,S*=R}}e[t]=h,e[t+1]=m,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],v=r[o+3],S=l[u],x=l[u+1],M=l[u+2],w=l[u+3];return e[t]=d*w+v*S+h*M-m*x,e[t+1]=h*w+v*x+m*S-d*M,e[t+2]=m*w+v*M+d*x-h*S,e[t+3]=v*w-d*S-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),v=d(o/2),S=d(l/2),x=h(r/2),M=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=x*v*S+m*M*w,this._y=m*M*S-x*v*w,this._z=m*v*w+x*M*S,this._w=m*v*S-x*M*w;break;case"YXZ":this._x=x*v*S+m*M*w,this._y=m*M*S-x*v*w,this._z=m*v*w-x*M*S,this._w=m*v*S+x*M*w;break;case"ZXY":this._x=x*v*S-m*M*w,this._y=m*M*S+x*v*w,this._z=m*v*w+x*M*S,this._w=m*v*S-x*M*w;break;case"ZYX":this._x=x*v*S-m*M*w,this._y=m*M*S+x*v*w,this._z=m*v*w-x*M*S,this._w=m*v*S+x*M*w;break;case"YZX":this._x=x*v*S+m*M*w,this._y=m*M*S+x*v*w,this._z=m*v*w-x*M*S,this._w=m*v*S-x*M*w;break;case"XZY":this._x=x*v*S-m*M*w,this._y=m*M*S-x*v*w,this._z=m*v*w+x*M*S,this._w=m*v*S+x*M*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],v=t[6],S=t[10],x=r+d+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,m=t._z,v=t._w;return this._x=r*v+u*d+o*m-l*h,this._y=o*v+u*h+l*d-r*m,this._z=l*v+u*m+r*h-o*d,this._w=u*v-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);h=Math.sin(h*m)/v,t=Math.sin(t*m)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),v=2*(d*t-l*o),S=2*(l*r-u*t);return this.x=t+h*m+u*S-d*v,this.y=r+h*v+d*m-l*S,this.z=o+h*S+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new Y,Lm=new Fr;class ft{constructor(e,t,r,o,l,u,d,h,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m)}set(e,t,r,o,l,u,d,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],v=r[4],S=r[7],x=r[2],M=r[5],w=r[8],C=o[0],_=o[3],y=o[6],R=o[1],L=o[4],D=o[7],F=o[2],O=o[5],V=o[8];return l[0]=u*C+d*R+h*F,l[3]=u*_+d*L+h*O,l[6]=u*y+d*D+h*V,l[1]=m*C+v*R+S*F,l[4]=m*_+v*L+S*O,l[7]=m*y+v*D+S*V,l[2]=x*C+M*R+w*F,l[5]=x*_+M*L+w*O,l[8]=x*y+M*D+w*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8];return t*u*v-t*d*m-r*l*v+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8],S=v*u-d*m,x=d*h-v*l,M=m*l-u*h,w=t*S+r*x+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(o*m-v*r)*C,e[2]=(d*r-o*u)*C,e[3]=x*C,e[4]=(v*t-o*h)*C,e[5]=(o*l-d*t)*C,e[6]=M*C,e[7]=(r*h-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply($u.makeScale(e,t)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,t){return this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new ft,Im=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){const s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[na]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const St=a_();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class o_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=nc("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(ed(o[u].image)):l.push(ed(o[u]))}else l=ed(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?o_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let c_=0;const td=new Y;class Rn extends cs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=tr,o=tr,l=Mn,u=as,d=wi,h=fi,m=Rn.DEFAULT_ANISOTROPY,v=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=no(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=qg;Rn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],v=h[4],S=h[8],x=h[1],M=h[5],w=h[9],C=h[2],_=h[6],y=h[10];if(Math.abs(v-x)<.01&&Math.abs(S-C)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+C)<.1&&Math.abs(w+_)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,D=(M+1)/2,F=(y+1)/2,O=(v+x)/4,V=(S+C)/4,A=(w+_)/4;return L>D&&L>F?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=O/r,l=V/r):D>F?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=O/o,l=A/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=V/l,o=A/l),this.set(r,o,l,t),this}let R=Math.sqrt((_-w)*(_-w)+(S-C)*(S-C)+(x-v)*(x-v));return Math.abs(R)<.001&&(R=1),this.x=(_-w)/R,this.y=(S-C)/R,this.z=(x-v)/R,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u_ extends cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Rn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new jf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends u_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class i0 extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e,t,r,o,l,u,d,h,m,v,S,x,M,w,C,_){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m,v,S,x,M,w,C,_)}set(e,t,r,o,l,u,d,h,m,v,S,x,M,w,C,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=h,y[2]=m,y[6]=v,y[10]=S,y[14]=x,y[3]=M,y[7]=w,y[11]=C,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*S,w=d*v,C=d*S;t[0]=h*v,t[4]=-h*S,t[8]=m,t[1]=M+w*m,t[5]=x-C*m,t[9]=-d*h,t[2]=C-x*m,t[6]=w+M*m,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*S,w=m*v,C=m*S;t[0]=x+C*d,t[4]=w*d-M,t[8]=u*m,t[1]=u*S,t[5]=u*v,t[9]=-d,t[2]=M*d-w,t[6]=C+x*d,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*S,w=m*v,C=m*S;t[0]=x-C*d,t[4]=-u*S,t[8]=w+M*d,t[1]=M+w*d,t[5]=u*v,t[9]=C-x*d,t[2]=-u*m,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*S,w=d*v,C=d*S;t[0]=h*v,t[4]=w*m-M,t[8]=x*m+C,t[1]=h*S,t[5]=C*m+x,t[9]=M*m-w,t[2]=-m,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*m,w=d*h,C=d*m;t[0]=h*v,t[4]=C-x*S,t[8]=w*S+M,t[1]=S,t[5]=u*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*S+w,t[10]=x-C*S}else if(e.order==="XZY"){const x=u*h,M=u*m,w=d*h,C=d*m;t[0]=h*v,t[4]=-S,t[8]=m*v,t[1]=x*S+C,t[5]=u*v,t[9]=M*S-w,t[2]=w*S-M,t[6]=d*v,t[10]=C*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,h_)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),br.crossVectors(r,Kn),br.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),br.crossVectors(r,Kn)),br.normalize(),xl.crossVectors(Kn,br),o[0]=br.x,o[4]=xl.x,o[8]=Kn.x,o[1]=br.y,o[5]=xl.y,o[9]=Kn.y,o[2]=br.z,o[6]=xl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],v=r[1],S=r[5],x=r[9],M=r[13],w=r[2],C=r[6],_=r[10],y=r[14],R=r[3],L=r[7],D=r[11],F=r[15],O=o[0],V=o[4],A=o[8],P=o[12],fe=o[1],k=o[5],J=o[9],$=o[13],le=o[2],ee=o[6],ie=o[10],W=o[14],Q=o[3],oe=o[7],ce=o[11],U=o[15];return l[0]=u*O+d*fe+h*le+m*Q,l[4]=u*V+d*k+h*ee+m*oe,l[8]=u*A+d*J+h*ie+m*ce,l[12]=u*P+d*$+h*W+m*U,l[1]=v*O+S*fe+x*le+M*Q,l[5]=v*V+S*k+x*ee+M*oe,l[9]=v*A+S*J+x*ie+M*ce,l[13]=v*P+S*$+x*W+M*U,l[2]=w*O+C*fe+_*le+y*Q,l[6]=w*V+C*k+_*ee+y*oe,l[10]=w*A+C*J+_*ie+y*ce,l[14]=w*P+C*$+_*W+y*U,l[3]=R*O+L*fe+D*le+F*Q,l[7]=R*V+L*k+D*ee+F*oe,l[11]=R*A+L*J+D*ie+F*ce,l[15]=R*P+L*$+D*W+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],v=e[2],S=e[6],x=e[10],M=e[14],w=e[3],C=e[7],_=e[11],y=e[15],R=h*M-m*x,L=d*M-m*S,D=d*x-h*S,F=u*M-m*v,O=u*x-h*v,V=u*S-d*v;return t*(C*R-_*L+y*D)-r*(w*R-_*F+y*O)+o*(w*L-C*F+y*V)-l*(w*D-C*O+_*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8],S=e[9],x=e[10],M=e[11],w=e[12],C=e[13],_=e[14],y=e[15],R=t*d-r*u,L=t*h-o*u,D=t*m-l*u,F=r*h-o*d,O=r*m-l*d,V=o*m-l*h,A=v*C-S*w,P=v*_-x*w,fe=v*y-M*w,k=S*_-x*C,J=S*y-M*C,$=x*y-M*_,le=R*$-L*J+D*k+F*fe-O*P+V*A;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/le;return e[0]=(d*$-h*J+m*k)*ee,e[1]=(o*J-r*$-l*k)*ee,e[2]=(C*V-_*O+y*F)*ee,e[3]=(x*O-S*V-M*F)*ee,e[4]=(h*fe-u*$-m*P)*ee,e[5]=(t*$-o*fe+l*P)*ee,e[6]=(_*D-w*V-y*L)*ee,e[7]=(v*V-x*D+M*L)*ee,e[8]=(u*J-d*fe+m*A)*ee,e[9]=(r*fe-t*J-l*A)*ee,e[10]=(w*O-C*D+y*R)*ee,e[11]=(S*D-v*O-M*R)*ee,e[12]=(d*P-u*k-h*A)*ee,e[13]=(t*k-r*P+o*A)*ee,e[14]=(C*L-w*F-_*R)*ee,e[15]=(v*F-S*L+x*R)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,v=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,v*d+r,v*h-o*u,0,m*h-o*d,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,m=l+l,v=u+u,S=d+d,x=l*m,M=l*v,w=l*S,C=u*v,_=u*S,y=d*S,R=h*m,L=h*v,D=h*S,F=r.x,O=r.y,V=r.z;return o[0]=(1-(C+y))*F,o[1]=(M+D)*F,o[2]=(w-L)*F,o[3]=0,o[4]=(M-D)*O,o[5]=(1-(x+y))*O,o[6]=(_+R)*O,o[7]=0,o[8]=(w+L)*V,o[9]=(_-R)*V,o[10]=(1-(x+C))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Fs.set(o[0],o[1],o[2]).length();const d=Fs.set(o[4],o[5],o[6]).length(),h=Fs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const m=1/u,v=1/d,S=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,t.setFromRotationMatrix(yi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,t,r,o,l,u,d=Ii,h=!1){const m=this.elements,v=2*l/(t-e),S=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(d===Ii)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(d===tc)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Ii,h=!1){const m=this.elements,v=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(d===Ii)w=-2/(u-l),C=-(u+l)/(u-l);else if(d===tc)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new Y,yi=new Yt,f_=new Y(0,0,0),h_=new Y(1,1,1),br=new Y,xl=new Y,Kn=new Y,Fm=new Yt,Om=new Fr;class rr{constructor(e=0,t=0,r=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],v=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";let Wf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p_=0;const km=new Y,Os=new Fr,Ki=new Yt,vl=new Y,Ga=new Y,m_=new Y,g_=new Fr,Bm=new Y(1,0,0),zm=new Y(0,1,0),Vm=new Y(0,0,1),Hm={type:"added"},x_={type:"removed"},ks={type:"childadded",child:null},nd={type:"childremoved",child:null};class En extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Y,t=new rr,r=new Fr,o=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ga,vl,this.up):Ki.lookAt(vl,Ga,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Ki),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),ks.child=e,this.dispatchEvent(ks),ks.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),S=u(e.shapes),x=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const h=[];for(const m in d){const v=d[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}En.DEFAULT_UP=new Y(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _l extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const _=t.getJointPose(C,r),y=this._getHandJoint(m,C);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,w=.005;m.inputState.pinching&&x>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _l;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},yl={h:0,s:0,l:0};function rd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=St.workingColorSpace){if(e=r_(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=rd(u,l,e+1/3),this.g=rd(u,l,e),this.b=rd(u,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=r0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return St.workingToColorSpace(Sn.copy(this),e),Math.round(gt(Sn.r*255,0,255))*65536+Math.round(gt(Sn.g*255,0,255))*256+Math.round(gt(Sn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const v=(d+u)/2;if(d===u)h=0,m=0;else{const S=u-d;switch(m=v<=.5?S/(u+d):S/(2-u-d),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ui){St.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(yl);const r=Zu(Ar.h,yl.h,t),o=Zu(Ar.s,yl.s,t),l=Zu(Ar.l,yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new _t;_t.NAMES=r0;class Xf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=t}clone(){return new Xf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class __ extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new Y,Qi=new Y,sd=new Y,Zi=new Y,Bs=new Y,zs=new Y,Gm=new Y,ad=new Y,od=new Y,ld=new Y,cd=new $t,ud=new $t,dd=new $t;class Ei{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),Qi.subVectors(r,t),sd.subVectors(e,t);const u=Si.dot(Si),d=Si.dot(Qi),h=Si.dot(sd),m=Qi.dot(Qi),v=Qi.dot(sd),S=u*m-d*d;if(S===0)return l.set(0,0,0),null;const x=1/S,M=(m*h-d*v)*x,w=(u*v-d*h)*x;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(u,Zi.y),h.addScaledVector(d,Zi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return cd.setScalar(0),ud.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,t),ud.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(cd,l.x),u.addScaledVector(ud,l.y),u.addScaledVector(dd,l.z),u}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),Qi.subVectors(e,t),Si.cross(Qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Bs.subVectors(o,r),zs.subVectors(l,r),ad.subVectors(e,r);const h=Bs.dot(ad),m=zs.dot(ad);if(h<=0&&m<=0)return t.copy(r);od.subVectors(e,o);const v=Bs.dot(od),S=zs.dot(od);if(v>=0&&S<=v)return t.copy(o);const x=h*S-v*m;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Bs,u);ld.subVectors(e,l);const M=Bs.dot(ld),w=zs.dot(ld);if(w>=0&&M<=w)return t.copy(l);const C=M*m-h*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(zs,d);const _=v*w-M*S;if(_<=0&&S-v>=0&&M-w>=0)return Gm.subVectors(l,o),d=(S-v)/(S-v+(M-w)),t.copy(o).addScaledVector(Gm,d);const y=1/(_+C+x);return u=C*y,d=x*y,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class io{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Ml.subVectors(this.max,ja),Vs.subVectors(e.a,ja),Hs.subVectors(e.b,ja),Gs.subVectors(e.c,ja),Cr.subVectors(Hs,Vs),Rr.subVectors(Gs,Hs),Jr.subVectors(Vs,Gs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-Jr.z,Jr.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,Jr.z,0,-Jr.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-Jr.y,Jr.x,0];return!fd(t,Vs,Hs,Gs,Ml)||(t=[1,0,0,0,1,0,0,0,1],!fd(t,Vs,Hs,Gs,Ml))?!1:(El.crossVectors(Cr,Rr),t=[El.x,El.y,El.z],fd(t,Vs,Hs,Gs,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Mi=new Y,Sl=new io,Vs=new Y,Hs=new Y,Gs=new Y,Cr=new Y,Rr=new Y,Jr=new Y,ja=new Y,Ml=new Y,El=new Y,$r=new Y;function fd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){$r.fromArray(s,l);const d=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),h=e.dot($r),m=t.dot($r),v=r.dot($r);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>d)return!1}return!0}const tn=new Y,wl=new nt;let y_=0;class Xt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Rm,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ha(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class s0 extends Xt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class a0 extends Xt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends Xt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const S_=new io,Wa=new Y,hd=new Y;class ro{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):S_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(hd)),this.expandByPoint(Wa.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let M_=0;const ci=new Yt,pd=new En,js=new Y,Qn=new io,Xa=new io,fn=new Y;class Pn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?a0:s0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Xa.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Qn.min,Xa.min),Qn.expandByPoint(fn),fn.addVectors(Qn.max,Xa.max),Qn.expandByPoint(fn)):(Qn.expandByPoint(Xa.min),Qn.expandByPoint(Xa.max))}Qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)fn.fromBufferAttribute(d,m),h&&(js.fromBufferAttribute(e,m),fn.add(js)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let A=0;A<r.count;A++)d[A]=new Y,h[A]=new Y;const m=new Y,v=new Y,S=new Y,x=new nt,M=new nt,w=new nt,C=new Y,_=new Y;function y(A,P,fe){m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,P),S.fromBufferAttribute(r,fe),x.fromBufferAttribute(l,A),M.fromBufferAttribute(l,P),w.fromBufferAttribute(l,fe),v.sub(m),S.sub(m),M.sub(x),w.sub(x);const k=1/(M.x*w.y-w.x*M.y);isFinite(k)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(S,-M.y).multiplyScalar(k),_.copy(S).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(k),d[A].add(C),d[P].add(C),d[fe].add(C),h[A].add(_),h[P].add(_),h[fe].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,P=R.length;A<P;++A){const fe=R[A],k=fe.start,J=fe.count;for(let $=k,le=k+J;$<le;$+=3)y(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new Y,D=new Y,F=new Y,O=new Y;function V(A){F.fromBufferAttribute(o,A),O.copy(F);const P=d[A];L.copy(P),L.sub(F.multiplyScalar(F.dot(P))).normalize(),D.crossVectors(O,P);const k=D.dot(h[A])<0?-1:1;u.setXYZW(A,L.x,L.y,L.z,k)}for(let A=0,P=R.length;A<P;++A){const fe=R[A],k=fe.start,J=fe.count;for(let $=k,le=k+J;$<le;$+=3)V(e.getX($+0)),V(e.getX($+1)),V(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new Y,l=new Y,u=new Y,d=new Y,h=new Y,m=new Y,v=new Y,S=new Y;if(e)for(let x=0,M=e.count;x<M;x+=3){const w=e.getX(x+0),C=e.getX(x+1),_=e.getX(x+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,_),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,_),d.add(v),h.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,h){const m=d.array,v=d.itemSize,S=d.normalized,x=new m.constructor(h.length*v);let M=0,w=0;for(let C=0,_=h.length;C<_;C++){d.isInterleavedBufferAttribute?M=h[C]*d.data.stride+d.offset:M=h[C]*v;for(let y=0;y<v;y++)x[w++]=m[M++]}return new Xt(x,v,S)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let v=0,S=m.length;v<S;v++){const x=m[v],M=e(x,r);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let S=0,x=m.length;S<x;S++){const M=m[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],S=l[m];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let E_=0;class sa extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Qs,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Id,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ld&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new Y,md=new Y,Tl=new Y,Pr=new Y,gd=new Y,bl=new Y,xd=new Y;class so{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){md.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(md);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),d=Pr.dot(this.direction),h=-Pr.dot(Tl),m=Pr.lengthSq(),v=Math.abs(1-u*u);let S,x,M,w;if(v>0)if(S=u*h-d,x=u*d-h,w=l*v,S>=0)if(x>=-w)if(x<=w){const C=1/v;S*=C,x*=C,M=S*(S+u*x+2*d)+x*(u*S+x+2*h)+m}else x=l,S=Math.max(0,-(u*x+d)),M=-S*S+x*(x+2*h)+m;else x=-l,S=Math.max(0,-(u*x+d)),M=-S*S+x*(x+2*h)+m;else x<=-w?(S=Math.max(0,-(-u*l+d)),x=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+m):x<=w?(S=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(S=Math.max(0,-(u*l+d)),x=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+x*(x+2*h)+m);else x=u>0?-l:l,S=Math.max(0,-(u*x+d)),M=-S*S+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(md).addScaledVector(Tl,x),M}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(d=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){gd.subVectors(t,e),bl.subVectors(r,e),xd.crossVectors(gd,bl);let u=this.direction.dot(xd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Pr.subVectors(this.origin,e);const h=d*this.direction.dot(bl.crossVectors(Pr,bl));if(h<0)return null;const m=d*this.direction.dot(gd.cross(Pr));if(m<0||h+m>u)return null;const v=-d*Pr.dot(xd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yf extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jm=new Yt,es=new so,Al=new ro,Wm=new Y,Cl=new Y,Rl=new Y,Pl=new Y,vd=new Y,Nl=new Y,Xm=new Y,Dl=new Y;class ki extends En{constructor(e=new Pn,t=new Yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Nl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=d[h],S=l[h];v!==0&&(vd.fromBufferAttribute(S,e),u?Nl.addScaledVector(vd,v):Nl.addScaledVector(vd.sub(t),v))}t.add(Nl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Al.containsPoint(es.origin)===!1&&(es.intersectSphere(Al,Wm)===null||es.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(jm.copy(l).invert(),es.copy(e.ray).applyMatrix4(jm),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,C=x.length;w<C;w++){const _=x[w],y=u[_.materialIndex],R=Math.max(_.start,M.start),L=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let D=R,F=L;D<F;D+=3){const O=d.getX(D),V=d.getX(D+1),A=d.getX(D+2);o=Ll(this,y,e,r,m,v,S,O,V,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let _=w,y=C;_<y;_+=3){const R=d.getX(_),L=d.getX(_+1),D=d.getX(_+2);o=Ll(this,u,e,r,m,v,S,R,L,D),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=x.length;w<C;w++){const _=x[w],y=u[_.materialIndex],R=Math.max(_.start,M.start),L=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let D=R,F=L;D<F;D+=3){const O=D,V=D+1,A=D+2;o=Ll(this,y,e,r,m,v,S,O,V,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let _=w,y=C;_<y;_+=3){const R=_,L=_+1,D=_+2;o=Ll(this,u,e,r,m,v,S,R,L,D),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function w_(s,e,t,r,o,l,u,d){let h;if(e.side===Hn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Ur,d),h===null)return null;Dl.copy(d),Dl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Dl);return m<t.near||m>t.far?null:{distance:m,point:Dl.clone(),object:s}}function Ll(s,e,t,r,o,l,u,d,h,m){s.getVertexPosition(d,Cl),s.getVertexPosition(h,Rl),s.getVertexPosition(m,Pl);const v=w_(s,e,t,r,Cl,Rl,Pl,Xm);if(v){const S=new Y;Ei.getBarycoord(Xm,Cl,Rl,Pl,S),o&&(v.uv=Ei.getInterpolatedAttribute(o,d,h,m,S,new nt)),l&&(v.uv1=Ei.getInterpolatedAttribute(l,d,h,m,S,new nt)),u&&(v.normal=Ei.getInterpolatedAttribute(u,d,h,m,S,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new Y,materialIndex:0};Ei.getNormal(Cl,Rl,Pl,x.normal),v.face=x,v.barycoord=S}return v}class T_ extends Rn{constructor(e=null,t=1,r=1,o,l,u,d,h,m=mn,v=mn,S,x){super(null,u,d,h,m,v,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new Y,b_=new Y,A_=new ft;class Dr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_d.subVectors(r,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_d),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||A_.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ro,C_=new nt(.5,.5),Il=new Y;class o0{constructor(e=new Dr,t=new Dr,r=new Dr,o=new Dr,l=new Dr,u=new Dr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],v=l[4],S=l[5],x=l[6],M=l[7],w=l[8],C=l[9],_=l[10],y=l[11],R=l[12],L=l[13],D=l[14],F=l[15];if(o[0].setComponents(m-u,M-v,y-w,F-R).normalize(),o[1].setComponents(m+u,M+v,y+w,F+R).normalize(),o[2].setComponents(m+d,M+S,y+C,F+L).normalize(),o[3].setComponents(m-d,M-S,y-C,F-L).normalize(),r)o[4].setComponents(h,x,_,D).normalize(),o[5].setComponents(m-h,M-x,y-_,F-D).normalize();else if(o[4].setComponents(m-h,M-x,y-_,F-D).normalize(),t===Ii)o[5].setComponents(m+h,M+x,y+_,F+D).normalize();else if(t===tc)o[5].setComponents(h,x,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=C_.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Il.x=o.normal.x>0?e.max.x:e.min.x,Il.y=o.normal.y>0?e.max.y:e.min.y,Il.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R_ extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new Y,sc=new Y,Ym=new Yt,Ya=new so,Ul=new ro,yd=new Y,qm=new Y;class P_ extends En{constructor(e=new Pn,t=new R_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)rc.fromBufferAttribute(t,o-1),sc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new $n(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(o),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;Ym.copy(o).invert(),Ya.copy(e.ray).applyMatrix4(Ym);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let C=M,_=w-1;C<_;C+=m){const y=v.getX(C),R=v.getX(C+1),L=Fl(this,e,Ya,h,y,R,C);L&&t.push(L)}if(this.isLineLoop){const C=v.getX(w-1),_=v.getX(M),y=Fl(this,e,Ya,h,C,_,w-1);y&&t.push(y)}}else{const M=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let C=M,_=w-1;C<_;C+=m){const y=Fl(this,e,Ya,h,C,C+1,C);y&&t.push(y)}if(this.isLineLoop){const C=Fl(this,e,Ya,h,w-1,M,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Fl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(rc.fromBufferAttribute(d,o),sc.fromBufferAttribute(d,l),t.distanceSqToSegment(rc,sc,yd,qm)>r)return;yd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(yd);if(!(m<e.near||m>e.far))return{distance:m,point:qm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Km=new Y,Qm=new Y;class N_ extends P_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Km.fromBufferAttribute(t,o),Qm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Km.distanceTo(Qm);e.setAttribute("lineDistance",new $n(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zm=new Yt,wf=new so,Ol=new ro,kl=new Y;class l0 extends En{constructor(e=new Pn,t=new D_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(o),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;Zm.copy(o).invert(),wf.copy(e.ray).applyMatrix4(Zm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,S=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=x,C=M;w<C;w++){const _=m.getX(w);kl.fromBufferAttribute(S,_),Jm(kl,_,h,o,e,t,this)}}else{const x=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let w=x,C=M;w<C;w++)kl.fromBufferAttribute(S,w),Jm(kl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Jm(s,e,t,r,o,l,u){const d=wf.distanceSqToPoint(s);if(d<t){const h=new Y;wf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class c0 extends Rn{constructor(e=[],t=ls,r,o,l,u,d,h,m,v){super(e,t,r,o,l,u,d,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eo extends Rn{constructor(e,t,r=Oi,o,l,u,d=mn,h=mn,m,v=ir,S=1){if(v!==ir&&v!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,l,u,d,h,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class L_ extends eo{constructor(e,t=Oi,r=ls,o,l,u=mn,d=mn,h,m=ir){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,d,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class u0 extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ao extends Pn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],v=[],S=[];let x=0,M=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(S,2));function w(C,_,y,R,L,D,F,O,V,A,P){const fe=D/V,k=F/A,J=D/2,$=F/2,le=O/2,ee=V+1,ie=A+1;let W=0,Q=0;const oe=new Y;for(let ce=0;ce<ie;ce++){const U=ce*k-$;for(let q=0;q<ee;q++){const Ae=q*fe-J;oe[C]=Ae*R,oe[_]=U*L,oe[y]=le,m.push(oe.x,oe.y,oe.z),oe[C]=0,oe[_]=0,oe[y]=O>0?1:-1,v.push(oe.x,oe.y,oe.z),S.push(q/V),S.push(1-ce/A),W+=1}}for(let ce=0;ce<A;ce++)for(let U=0;U<V;U++){const q=x+U+ee*ce,Ae=x+U+ee*(ce+1),We=x+(U+1)+ee*(ce+1),Ze=x+(U+1)+ee*ce;h.push(q,Ae,Ze),h.push(Ae,We,Ze),Q+=6}d.addGroup(M,Q,P),M+=Q,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lc extends Pn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),m=d+1,v=h+1,S=e/d,x=t/h,M=[],w=[],C=[],_=[];for(let y=0;y<v;y++){const R=y*x-u;for(let L=0;L<m;L++){const D=L*S-l;w.push(D,-R,0),C.push(0,0,1),_.push(L/d),_.push(1-y/h)}}for(let y=0;y<h;y++)for(let R=0;R<d;R++){const L=R+m*y,D=R+m*(y+1),F=R+1+m*(y+1),O=R+1+m*y;M.push(L,D,O),M.push(D,F,O)}this.setIndex(M),this.setAttribute("position",new $n(w,3)),this.setAttribute("normal",new $n(C,3)),this.setAttribute("uv",new $n(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=ia(s[t]);for(const o in r)e[o]=r[o]}return e}function I_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function d0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const to={clone:ia,merge:Cn};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=I_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class f0 extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O_ extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k_ extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class B_ extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bl=new Y,zl=new Fr,Pi=new Y;class h0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Bl,zl,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new Y,$m=new nt,eg=new nt;class di extends h0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,$m,eg),t.subVectors(eg,$m)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qf extends h0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class z_ extends B_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,Xs=1;class V_ extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new di(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new di(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const d=new di(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const h=new di(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const m=new di(Ws,Xs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const m of t)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,x,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class H_ extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let G_=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=j_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function j_(){this._document.hidden===!1&&this.reset()}const tg=new Yt;class W_{constructor(e,t,r=0,o=1/0){this.ray=new so(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,t=!0,r=[]){return Tf(e,this,r,t),r.sort(ng),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Tf(e[o],this,r,t);return r.sort(ng),r}}function ng(s,e){return s.distance-e.distance}function Tf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Tf(l[u],e,t,!0)}}class X_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class ig{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_ extends cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function rg(s,e,t,r){const o=q_(r);switch(t){case $g:return s*e;case t0:return s*e/o.components*o.byteLength;case Bf:return s*e/o.components*o.byteLength;case ta:return s*e*2/o.components*o.byteLength;case zf:return s*e*2/o.components*o.byteLength;case e0:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case Vf:return s*e*4/o.components*o.byteLength;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Yd:return Math.max(s,16)*Math.max(e,8)/4;case jd:case Xd:return Math.max(s,8)*Math.max(e,8)/2;case qd:case Kd:case Zd:case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qd:case $d:case ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case uf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case df:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ff:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gf:case xf:case vf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _f:case yf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sf:case Mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q_(s){switch(s){case fi:case Kg:return{byteLength:1,components:1};case Ja:case Qg:case Jn:return{byteLength:2,components:1};case Of:case kf:return{byteLength:2,components:4};case Oi:case Ff:case Li:return{byteLength:4,components:1};case Zg:case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function K_(s){const e=new WeakMap;function t(d,h){const m=d.array,v=d.usage,S=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,h,m){const v=h.array,S=h.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,v);else{S.sort((M,w)=>M.start-w.start);let x=0;for(let M=1;M<S.length;M++){const w=S[x],C=S[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++x,S[x]=C)}S.length=x+1;for(let M=0,w=S.length;M<w;M++){const C=S[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yy=`PhysicalMaterial material;
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
#endif`,qy=`uniform sampler2D dfgLUT;
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
}`,Ky=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s1=`#if defined( USE_POINTS_UV )
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
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
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
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,_1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I1=`float getShadowMask() {
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
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,O1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
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
#endif`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
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
}`,nS=`#if DEPTH_PACKING == 3200
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
}`,iS=`#define DISTANCE
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
}`,rS=`#define DISTANCE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#include <common>
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
}`,uS=`uniform vec3 diffuse;
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
}`,dS=`#define LAMBERT
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
}`,fS=`#define LAMBERT
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
}`,hS=`#define MATCAP
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
}`,pS=`#define MATCAP
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
}`,mS=`#define NORMAL
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
}`,gS=`#define NORMAL
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
}`,xS=`#define PHONG
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
}`,vS=`#define PHONG
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
}`,_S=`#define STANDARD
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
}`,yS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,MS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,wS=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,AS=`uniform float rotation;
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
}`,CS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Q_,alphahash_pars_fragment:Z_,alphamap_fragment:J_,alphamap_pars_fragment:$_,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:xy,color_vertex:vy,common:_y,cube_uv_reflection_fragment:yy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:wy,emissivemap_pars_fragment:Ty,colorspace_fragment:by,colorspace_pars_fragment:Ay,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:Hy,envmap_vertex:Dy,fog_vertex:Ly,fog_pars_vertex:Iy,fog_fragment:Uy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:ky,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:Vy,lights_toon_fragment:Gy,lights_toon_pars_fragment:jy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:Yy,lights_physical_pars_fragment:qy,lights_fragment_begin:Ky,lights_fragment_maps:Qy,lights_fragment_end:Zy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:t1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:r1,map_particle_pars_fragment:s1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:u1,morphtarget_pars_vertex:d1,morphtarget_vertex:f1,normal_fragment_begin:h1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:x1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:_1,clearcoat_normal_fragment_maps:y1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:M1,opaque_fragment:E1,packing:w1,premultiplied_alpha_fragment:T1,project_vertex:b1,dithering_fragment:A1,dithering_pars_fragment:C1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:D1,shadowmap_vertex:L1,shadowmask_pars_fragment:I1,skinbase_vertex:U1,skinning_pars_vertex:F1,skinning_vertex:O1,skinnormal_vertex:k1,specularmap_fragment:B1,specularmap_pars_fragment:z1,tonemapping_fragment:V1,tonemapping_pars_fragment:H1,transmission_fragment:G1,transmission_pars_fragment:j1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:Y1,worldpos_vertex:q1,background_vert:K1,background_frag:Q1,backgroundCube_vert:Z1,backgroundCube_frag:J1,cube_vert:$1,cube_frag:eS,depth_vert:tS,depth_frag:nS,distance_vert:iS,distance_frag:rS,equirect_vert:sS,equirect_frag:aS,linedashed_vert:oS,linedashed_frag:lS,meshbasic_vert:cS,meshbasic_frag:uS,meshlambert_vert:dS,meshlambert_frag:fS,meshmatcap_vert:hS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:gS,meshphong_vert:xS,meshphong_frag:vS,meshphysical_vert:_S,meshphysical_frag:yS,meshtoon_vert:SS,meshtoon_frag:MS,points_vert:ES,points_frag:wS,shadow_vert:TS,shadow_frag:bS,sprite_vert:AS,sprite_frag:CS},Pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Di={basic:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Cn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Cn([Pe.lights,Pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Di.physical={uniforms:Cn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Vl={r:0,b:0,g:0},ns=new rr,RS=new Yt;function PS(s,e,t,r,o,l){const u=new _t(0);let d=o===!0?0:1,h,m,v=null,S=0,x=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const D=R.backgroundBlurriness>0;L=e.get(L,D)}return L}function w(R){let L=!1;const D=M(R);D===null?_(u,d):D&&D.isColor&&(_(D,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,L){const D=M(L);D&&(D.isCubeTexture||D.mapping===oc)?(m===void 0&&(m=new ki(new ao(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ia(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ns.copy(L.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(ns)),m.material.toneMapped=St.getTransfer(D.colorSpace)!==Dt,(v!==D||S!==D.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=D,S=D.version,x=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new ki(new lc(2,2),new an({name:"BackgroundMaterial",uniforms:ia(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=St.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||S!==D.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=D,S=D.version,x=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function _(R,L){R.getRGB(Vl,d0(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,L,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,L=1){u.set(R),d=L,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,_(u,d)},render:w,addToRenderList:C,dispose:y}}function NS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function d(k,J,$,le,ee){let ie=!1;const W=S(k,le,$,J);l!==W&&(l=W,m(l.object)),ie=M(k,le,$,ee),ie&&w(k,le,$,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,D(k,J,$,le),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function h(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function S(k,J,$,le){const ee=le.wireframe===!0;let ie=r[J.id];ie===void 0&&(ie={},r[J.id]=ie);const W=k.isInstancedMesh===!0?k.id:0;let Q=ie[W];Q===void 0&&(Q={},ie[W]=Q);let oe=Q[$.id];oe===void 0&&(oe={},Q[$.id]=oe);let ce=oe[ee];return ce===void 0&&(ce=x(h()),oe[ee]=ce),ce}function x(k){const J=[],$=[],le=[];for(let ee=0;ee<t;ee++)J[ee]=0,$[ee]=0,le[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:le,object:k,attributes:{},index:null}}function M(k,J,$,le){const ee=l.attributes,ie=J.attributes;let W=0;const Q=$.getAttributes();for(const oe in Q)if(Q[oe].location>=0){const U=ee[oe];let q=ie[oe];if(q===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;W++}return l.attributesNum!==W||l.index!==le}function w(k,J,$,le){const ee={},ie=J.attributes;let W=0;const Q=$.getAttributes();for(const oe in Q)if(Q[oe].location>=0){let U=ie[oe];U===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),ee[oe]=q,W++}l.attributes=ee,l.attributesNum=W,l.index=le}function C(){const k=l.newAttributes;for(let J=0,$=k.length;J<$;J++)k[J]=0}function _(k){y(k,0)}function y(k,J){const $=l.newAttributes,le=l.enabledAttributes,ee=l.attributeDivisors;$[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),ee[k]!==J&&(s.vertexAttribDivisor(k,J),ee[k]=J)}function R(){const k=l.newAttributes,J=l.enabledAttributes;for(let $=0,le=J.length;$<le;$++)J[$]!==k[$]&&(s.disableVertexAttribArray($),J[$]=0)}function L(k,J,$,le,ee,ie,W){W===!0?s.vertexAttribIPointer(k,J,$,ee,ie):s.vertexAttribPointer(k,J,$,le,ee,ie)}function D(k,J,$,le){C();const ee=le.attributes,ie=$.getAttributes(),W=J.defaultAttributeValues;for(const Q in ie){const oe=ie[Q];if(oe.location>=0){let ce=ee[Q];if(ce===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const U=ce.normalized,q=ce.itemSize,Ae=e.get(ce);if(Ae===void 0)continue;const We=Ae.buffer,Ze=Ae.type,re=Ae.bytesPerElement,me=Ze===s.INT||Ze===s.UNSIGNED_INT||ce.gpuType===Ff;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Fe=pe.stride,He=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let it=0;it<oe.locationSize;it++)y(oe.location+it,pe.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let it=0;it<oe.locationSize;it++)_(oe.location+it);s.bindBuffer(s.ARRAY_BUFFER,We);for(let it=0;it<oe.locationSize;it++)L(oe.location+it,q/oe.locationSize,Ze,U,Fe*re,(He+q/oe.locationSize*it)*re,me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)y(oe.location+pe,ce.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let pe=0;pe<oe.locationSize;pe++)L(oe.location+pe,q/oe.locationSize,Ze,U,q*re,q/oe.locationSize*pe*re,me)}}else if(W!==void 0){const U=W[Q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}R()}function F(){P();for(const k in r){const J=r[k];for(const $ in J){const le=J[$];for(const ee in le){const ie=le[ee];for(const W in ie)v(ie[W].object),delete ie[W];delete le[ee]}}delete r[k]}}function O(k){if(r[k.id]===void 0)return;const J=r[k.id];for(const $ in J){const le=J[$];for(const ee in le){const ie=le[ee];for(const W in ie)v(ie[W].object),delete ie[W];delete le[ee]}}delete r[k.id]}function V(k){for(const J in r){const $=r[J];for(const le in $){const ee=$[le];if(ee[k.id]===void 0)continue;const ie=ee[k.id];for(const W in ie)v(ie[W].object),delete ie[W];delete ee[k.id]}}}function A(k){for(const J in r){const $=r[J],le=k.isInstancedMesh===!0?k.id:0,ee=$[le];if(ee!==void 0){for(const ie in ee){const W=ee[ie];for(const Q in W)v(W[Q].object),delete W[Q];delete ee[ie]}delete $[le],Object.keys($).length===0&&delete r[J]}}}function P(){fe(),u=!0,l!==o&&(l=o,m(l.object))}function fe(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:fe,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:_,disableUnusedAttributes:R}}function DS(s,e,t){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function u(m,v,S){S!==0&&(s.drawArraysInstanced(r,m,v,S),t.update(v,r,S))}function d(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,S);let M=0;for(let w=0;w<S;w++)M+=v[w];t.update(M,r,1)}function h(m,v,S,x){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)u(m[w],v[w],x[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,S);let w=0;for(let C=0;C<S;C++)w+=v[C]*x[C];t.update(w,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function LS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==wi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const A=V===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==fi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Li&&!A)}function h(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=h(m);v!==m&&(st("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:D,maxSamples:F,samples:O}}function IS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Dr,d=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){t=v(S,x,0)},this.setState=function(S,x,M){const w=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,y=s.get(S);if(!o||w===null||w.length===0||l&&!_)l?v(null):m();else{const R=l?0:r,L=R*4;let D=y.clippingState||null;h.value=D,D=v(w,x,L,M);for(let F=0;F!==L;++F)D[F]=t[F];y.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,w){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=h.value,w!==!0||_===null){const y=M+C*4,R=x.matrixWorldInverse;d.getNormalMatrix(R),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,D=M;L!==C;++L,D+=4)u.copy(S[L]).applyMatrix4(R,d),u.normal.toArray(_,D),_[D+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Ir=4,sg=[.125,.215,.35,.446,.526,.582],ss=20,US=256,qa=new qf,ag=new _t;let Sd=null,Md=0,Ed=0,wd=!1;const FS=new Y;class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=FS}=l;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=wd,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Jn,format:wi,colorSpace:na,depthBuffer:!1},o=lg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OS(l)),this._blurMaterial=BS(l,e,t),this._ggxMaterial=kS(l,e,t)}return o}_compileMaterial(e){const t=new ki(new Pn,e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,r,o,l){const h=new di(90,1,t,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(ag),S.toneMapping=Fi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new ao,new Yf({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let y=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,y=!0):(_.color.copy(ag),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[L],l.y,l.z)):D===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[L]));const F=this._cubeSize;Ys(o,D*F,L>2?F:0,F,F),S.setRenderTarget(o),y&&S.render(C,h),S.render(e,h)}S.toneMapping=M,S.autoClear=x,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ls||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ys(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,qa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(m*m-v*v),x=0+m*1.25,M=S*x,{_lodMax:w}=this,C=this._sizeLods[r],_=3*C*(r>w-Ir?r-w+Ir:0),y=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=w-t,Ys(l,_,y,3*C,2*C),o.setRenderTarget(l),o.render(d,qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,Ys(e,_,y,3*C,2*C),o.setRenderTarget(e),o.render(d,qa)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[o];S.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ss-1),C=l/w,_=isFinite(l)?1+Math.floor(v*C):ss;_>ss&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ss}`);const y=[];let R=0;for(let V=0;V<ss;++V){const A=V/C,P=Math.exp(-A*A/2);y.push(P),V===0?R+=P:V<_&&(R+=2*P)}for(let V=0;V<y.length;V++)y[V]=y[V]/R;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=y,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const D=this._sizeLods[o],F=3*D*(o>L-Ir?o-L+Ir:0),O=4*(this._cubeSize-D);Ys(t,F,O,3*D,2*D),h.setRenderTarget(t),h.render(S,qa)}}function OS(s){const e=[],t=[],r=[];let o=s;const l=s-Ir+1+sg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>s-Ir?h=sg[u-s+Ir-1]:u===0&&(h=0),t.push(h);const m=1/(d-2),v=-m,S=1+m,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,w=6,C=3,_=2,y=1,R=new Float32Array(C*w*M),L=new Float32Array(_*w*M),D=new Float32Array(y*w*M);for(let O=0;O<M;O++){const V=O%3*2/3-1,A=O>2?0:-1,P=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];R.set(P,C*w*O),L.set(x,_*w*O);const fe=[O,O,O,O,O,O];D.set(fe,y*w*O)}const F=new Pn;F.setAttribute("position",new Xt(R,C)),F.setAttribute("uv",new Xt(L,_)),F.setAttribute("faceIndex",new Xt(D,y)),r.push(new ki(F,null)),o>Ir&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function lg(s,e,t){const r=new Gn(s,e,t);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function kS(s,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:US,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function BS(s,e,t){const r=new Float32Array(ss),o=new Y(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function cg(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ug(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}class m0 extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new c0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ao(5,5,5),l=new an({name:"CubemapFromEquirect",uniforms:ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ui});l.uniforms.tEquirect.value=t;const u=new ki(o,l),d=t.minFilter;return t.minFilter===as&&(t.minFilter=Mn),new V_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function zS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===qu||M===Ku)if(e.has(x)){const w=e.get(x).texture;return d(w,x.mapping)}else{const w=x.image;if(w&&w.height>0){const C=new m0(w.height);return C.fromEquirectangularTexture(s,x),e.set(x,C),x.addEventListener("dispose",m),d(C.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,w=M===qu||M===Ku,C=M===ls||M===ea;if(w||C){let _=t.get(x);const y=_!==void 0?_.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return r===null&&(r=new og(s)),_=w?r.fromEquirectangular(x,_):r.fromCubemap(x,_),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),_.texture;if(_!==void 0)return _.texture;{const R=x.image;return w&&R&&R.height>0||C&&R&&h(R)?(r===null&&(r=new og(s)),_=w?r.fromEquirectangular(x):r.fromCubemap(x),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),x.addEventListener("dispose",v),_.texture):null}}}return x}function d(x,M){return M===qu?x.mapping=ls:M===Ku&&(x.mapping=ea),x}function h(x){let M=0;const w=6;for(let C=0;C<w;C++)x[C]!==void 0&&M++;return M===w}function m(x){const M=x.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function VS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ic("WebGLRenderer: "+r+" extension not supported."),o}}}function HS(s,e,t,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(S){const x=[],M=S.index,w=S.attributes.position;let C=0;if(w===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let L=0,D=R.length;L<D;L+=3){const F=R[L+0],O=R[L+1],V=R[L+2];x.push(F,O,O,V,V,F)}}else{const R=w.array;C=w.version;for(let L=0,D=R.length/3-1;L<D;L+=3){const F=L+0,O=L+1,V=L+2;x.push(F,O,O,V,V,F)}}const _=new(w.count>=65535?a0:s0)(x,1);_.version=C;const y=l.get(S);y&&e.remove(y),l.set(S,_)}function v(S){const x=l.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&m(S)}else m(S);return l.get(S)}return{get:d,update:h,getWireframeAttribute:v}}function GS(s,e,t){let r;function o(x){r=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,M){s.drawElements(r,M,l,x*u),t.update(M,r,1)}function m(x,M,w){w!==0&&(s.drawElementsInstanced(r,M,l,x*u,w),t.update(M,r,w))}function v(x,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,w);let _=0;for(let y=0;y<w;y++)_+=M[y];t.update(_,r,1)}function S(x,M,w,C){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<x.length;y++)m(x[y]/u,M[y],C[y]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,C,0,w);let y=0;for(let R=0;R<w;R++)y+=M[R]*C[R];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function jS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function WS(s,e,t){const r=new WeakMap,o=new $t;function l(u,d,h){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let fe=function(){A.dispose(),r.delete(d),d.removeEventListener("dispose",fe)};var M=fe;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),C===!0&&(D=2),_===!0&&(D=3);let F=d.attributes.position.count*D,O=1;F>e.maxTextureSize&&(O=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const V=new Float32Array(F*O*4*S),A=new i0(V,F,O,S);A.type=Li,A.needsUpdate=!0;const P=D*4;for(let k=0;k<S;k++){const J=y[k],$=R[k],le=L[k],ee=F*O*4*k;for(let ie=0;ie<J.count;ie++){const W=ie*P;w===!0&&(o.fromBufferAttribute(J,ie),V[ee+W+0]=o.x,V[ee+W+1]=o.y,V[ee+W+2]=o.z,V[ee+W+3]=0),C===!0&&(o.fromBufferAttribute($,ie),V[ee+W+4]=o.x,V[ee+W+5]=o.y,V[ee+W+6]=o.z,V[ee+W+7]=0),_===!0&&(o.fromBufferAttribute(le,ie),V[ee+W+8]=o.x,V[ee+W+9]=o.y,V[ee+W+10]=o.z,V[ee+W+11]=le.itemSize===4?o.w:1)}}x={count:S,texture:A,size:new nt(F,O)},r.set(d,x),d.addEventListener("dispose",fe)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const C=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function XS(s,e,t,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,S=m.geometry,x=e.get(m,S);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function d(){l=new WeakMap}function h(m){const v=m.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const YS={[Pf]:"LINEAR_TONE_MAPPING",[Nf]:"REINHARD_TONE_MAPPING",[Df]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[If]:"AGX_TONE_MAPPING",[Uf]:"NEUTRAL_TONE_MAPPING",[Lf]:"CUSTOM_TONE_MAPPING"};function qS(s,e,t,r,o){const l=new Gn(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Gn(e,t,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),d=new Pn;d.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $n([0,2,0,0,2,0],2));const h=new f0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ki(d,h),v=new qf(-1,1,1,-1,0,1);let S=null,x=null,M=!1,w,C=null,_=[],y=!1;this.setSize=function(R,L){l.setSize(R,L),u.setSize(R,L);for(let D=0;D<_.length;D++){const F=_[D];F.setSize&&F.setSize(R,L)}},this.setEffects=function(R){_=R,y=_.length>0&&_[0].isRenderPass===!0;const L=l.width,D=l.height;for(let F=0;F<_.length;F++){const O=_[F];O.setSize&&O.setSize(L,D)}},this.begin=function(R,L){if(M||R.toneMapping===Fi&&_.length===0)return!1;if(C=L,L!==null){const D=L.width,F=L.height;(l.width!==D||l.height!==F)&&this.setSize(D,F)}return y===!1&&R.setRenderTarget(l),w=R.toneMapping,R.toneMapping=Fi,!0},this.hasRenderPass=function(){return y},this.end=function(R,L){R.toneMapping=w,M=!0;let D=l,F=u;for(let O=0;O<_.length;O++){const V=_[O];if(V.enabled!==!1&&(V.render(R,F,D,L),V.needsSwap!==!1)){const A=D;D=F,F=A}}if(S!==R.outputColorSpace||x!==R.toneMapping){S=R.outputColorSpace,x=R.toneMapping,h.defines={},St.getTransfer(S)===Dt&&(h.defines.SRGB_TRANSFER="");const O=YS[x];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(C),R.render(m,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),h.dispose()}}const g0=new Rn,bf=new eo(1,1),x0=new i0,v0=new d_,_0=new c0,dg=[],fg=[],hg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=dg[o];if(l===void 0&&(l=new Float32Array(o),dg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=fg[e];t===void 0&&(t=new Int32Array(e),fg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function KS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function $S(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;mg.set(r),s.uniformMatrix2fv(this.addr,!1,mg),ln(t,r)}}function eM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;pg.set(r),s.uniformMatrix3fv(this.addr,!1,pg),ln(t,r)}}function tM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;hg.set(r),s.uniformMatrix4fv(this.addr,!1,hg),ln(t,r)}}function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function aM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(bf.compareFunction=t.isReversedDepthBuffer()?Gf:Hf,l=bf):l=g0,t.setTexture2D(e||l,o)}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||v0,o)}function fM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||_0,o)}function hM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||x0,o)}function pM(s){switch(s){case 5126:return KS;case 35664:return QS;case 35665:return ZS;case 35666:return JS;case 35674:return $S;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function gM(s,e){const t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function xM(s,e){const t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function vM(s,e){const t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function _M(s,e){const t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yM(s,e){const t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function SM(s,e){const t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function TM(s,e){s.uniform4iv(this.addr,e)}function bM(s,e){s.uniform1uiv(this.addr,e)}function AM(s,e){s.uniform2uiv(this.addr,e)}function CM(s,e){s.uniform3uiv(this.addr,e)}function RM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=bf:u=g0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function NM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||v0,l[u])}function DM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||_0,l[u])}function LM(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||x0,l[u])}function IM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return vM;case 35674:return _M;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return bM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}class UM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class FM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function gg(s,e){s.seq.push(e),s.map[e.id]=e}function kM(s,e,t){const r=s.name,o=r.length;for(Td.lastIndex=0;;){const l=Td.exec(r),u=Td.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){gg(t,m===void 0?new UM(d,s,e):new FM(d,s,e));break}else{let S=t.map[d];S===void 0&&(S=new OM(d),gg(t,S)),t=S}}}class Jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);kM(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function xg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BM=37297;let zM=0;function VM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const vg=new ft;function HM(s){St._getMatrix(vg,St.workingColorSpace,s);const e=`mat3( ${vg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _g(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+VM(s.getShaderSource(e),d)}else return l}function GM(s,e){const t=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jM={[Pf]:"Linear",[Nf]:"Reinhard",[Df]:"Cineon",[ac]:"ACESFilmic",[If]:"AgX",[Uf]:"Neutral",[Lf]:"Custom"};function WM(s,e){const t=jM[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new Y;function XM(){St.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function qM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function KM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Za(s){return s!==""}function yg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(s){return s.replace(QM,JM)}const ZM=new Map;function JM(s,e){let t=ht[e];if(t===void 0){const r=ZM.get(e);if(r!==void 0)t=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Af(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(s){return s.replace($M,eE)}function eE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Eg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const tE={[Xl]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function nE(s){return tE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iE={[ls]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function rE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sE={[ea]:"ENVMAP_MODE_REFRACTION"};function aE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oE={[Yg]:"ENVMAP_BLENDING_MULTIPLY",[Hv]:"ENVMAP_BLENDING_MIX",[Gv]:"ENVMAP_BLENDING_ADD"};function lE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oE[s.combine]||"ENVMAP_BLENDING_NONE"}function cE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function uE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=nE(t),m=rE(t),v=aE(t),S=lE(t),x=cE(t),M=YM(t),w=qM(l),C=o.createProgram();let _,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Za).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Za).join(`
`),y.length>0&&(y+=`
`)):(_=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),y=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Fi?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),u=Af(u),u=yg(u,t),u=Sg(u,t),d=Af(d),d=yg(d,t),d=Sg(d,t),u=Mg(u),d=Mg(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=R+_+u,D=R+y+d,F=xg(o,o.VERTEX_SHADER,L),O=xg(o,o.FRAGMENT_SHADER,D);o.attachShader(C,F),o.attachShader(C,O),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function V(k){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(C)||"",$=o.getShaderInfoLog(F)||"",le=o.getShaderInfoLog(O)||"",ee=J.trim(),ie=$.trim(),W=le.trim();let Q=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,F,O);else{const ce=_g(o,F,"vertex"),U=_g(o,O,"fragment");bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+ce+`
`+U)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(ie===""||W==="")&&(oe=!1);oe&&(k.diagnostics={runnable:Q,programLog:ee,vertexShader:{log:ie,prefix:_},fragmentShader:{log:W,prefix:y}})}o.deleteShader(F),o.deleteShader(O),A=new Jl(o,C),P=KM(o,C)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let fe=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return fe===!1&&(fe=o.getProgramParameter(C,BM)),fe},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=O,this}let dE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hE(e),t.set(e,r)),r}}class hE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function pE(s,e,t,r,o,l){const u=new Wf,d=new fE,h=new Set,m=[],v=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return h.add(A),A===0?"uv":`uv${A}`}function C(A,P,fe,k,J){const $=k.fog,le=J.geometry,ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,W=e.get(A.envMap||ee,ie),Q=W&&W.mapping===oc?W.image.height:null,oe=M[A.type];A.precision!==null&&(x=r.getMaxPrecision(A.precision),x!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const ce=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=ce!==void 0?ce.length:0;let q=0;le.morphAttributes.position!==void 0&&(q=1),le.morphAttributes.normal!==void 0&&(q=2),le.morphAttributes.color!==void 0&&(q=3);let Ae,We,Ze,re;if(oe){const wt=Di[oe];Ae=wt.vertexShader,We=wt.fragmentShader}else Ae=A.vertexShader,We=A.fragmentShader,d.update(A),Ze=d.getVertexShaderID(A),re=d.getFragmentShaderID(A);const me=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=J.isInstancedMesh===!0,He=J.isBatchedMesh===!0,it=!!A.map,Kt=!!A.matcap,pt=!!W,Mt=!!A.aoMap,Pt=!!A.lightMap,ut=!!A.bumpMap,kt=!!A.normalMap,z=!!A.displacementMap,Vt=!!A.emissiveMap,xt=!!A.metalnessMap,Et=!!A.roughnessMap,Ge=A.anisotropy>0,N=A.clearcoat>0,E=A.dispersion>0,j=A.iridescence>0,he=A.sheen>0,ge=A.transmission>0,ue=Ge&&!!A.anisotropyMap,ke=N&&!!A.clearcoatMap,Te=N&&!!A.clearcoatNormalMap,qe=N&&!!A.clearcoatRoughnessMap,rt=j&&!!A.iridescenceMap,ye=j&&!!A.iridescenceThicknessMap,we=he&&!!A.sheenColorMap,je=he&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Ne=!!A.specularColorMap,ct=!!A.specularIntensityMap,H=ge&&!!A.transmissionMap,be=ge&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,Se=A.alphaTest>0,de=!!A.alphaHash,ze=!!A.extensions;let at=Fi;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=s.toneMapping);const Lt={shaderID:oe,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:We,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:He,batchingColor:He&&J._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&J.instanceColor!==null,instancingMorph:Fe&&J.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:na,alphaToCoverage:!!A.alphaToCoverage,map:it,matcap:Kt,envMap:pt,envMapMode:pt&&W.mapping,envMapCubeUVHeight:Q,aoMap:Mt,lightMap:Pt,bumpMap:ut,normalMap:kt,displacementMap:z,emissiveMap:Vt,normalMapObjectSpace:kt&&A.normalMapType===Yv,normalMapTangentSpace:kt&&A.normalMapType===Xv,metalnessMap:xt,roughnessMap:Et,anisotropy:Ge,anisotropyMap:ue,clearcoat:N,clearcoatMap:ke,clearcoatNormalMap:Te,clearcoatRoughnessMap:qe,dispersion:E,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:we,sheenRoughnessMap:je,specularMap:Be,specularColorMap:Ne,specularIntensityMap:ct,transmission:ge,transmissionMap:H,thicknessMap:be,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Qs&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:de,combine:A.combine,mapUv:it&&w(A.map.channel),aoMapUv:Mt&&w(A.aoMap.channel),lightMapUv:Pt&&w(A.lightMap.channel),bumpMapUv:ut&&w(A.bumpMap.channel),normalMapUv:kt&&w(A.normalMap.channel),displacementMapUv:z&&w(A.displacementMap.channel),emissiveMapUv:Vt&&w(A.emissiveMap.channel),metalnessMapUv:xt&&w(A.metalnessMap.channel),roughnessMapUv:Et&&w(A.roughnessMap.channel),anisotropyMapUv:ue&&w(A.anisotropyMap.channel),clearcoatMapUv:ke&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:je&&w(A.sheenRoughnessMap.channel),specularMapUv:Be&&w(A.specularMap.channel),specularColorMapUv:Ne&&w(A.specularColorMap.channel),specularIntensityMapUv:ct&&w(A.specularIntensityMap.channel),transmissionMapUv:H&&w(A.transmissionMap.channel),thicknessMapUv:be&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(kt||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(it||De),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||le.attributes.normal===void 0&&kt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:pe,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&fe.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:it&&A.map.isVideoTexture===!0&&St.getTransfer(A.map.colorSpace)===Dt,decodeVideoTextureEmissive:Vt&&A.emissiveMap.isVideoTexture===!0&&St.getTransfer(A.emissiveMap.colorSpace)===Dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===er,flipSided:A.side===Hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Lt.vertexUv1s=h.has(1),Lt.vertexUv2s=h.has(2),Lt.vertexUv3s=h.has(3),h.clear(),Lt}function _(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const fe in A.defines)P.push(fe),P.push(A.defines[fe]);return A.isRawShaderMaterial===!1&&(y(P,A),R(P,A),P.push(s.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function y(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function R(A,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),A.push(u.mask)}function L(A){const P=M[A.type];let fe;if(P){const k=Di[P];fe=to.clone(k.uniforms)}else fe=A.uniforms;return fe}function D(A,P){let fe=v.get(P);return fe!==void 0?++fe.usedTimes:(fe=new uE(s,P,A,o),m.push(fe),v.set(P,fe)),fe}function F(A){if(--A.usedTimes===0){const P=m.indexOf(A);m[P]=m[m.length-1],m.pop(),v.delete(A.cacheKey),A.destroy()}}function O(A){d.remove(A)}function V(){d.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:L,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:m,dispose:V}}function mE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function gE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function wg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function d(x,M,w,C,_,y){let R=s[e];return R===void 0?(R={id:x.id,object:x,geometry:M,material:w,materialVariant:u(x),groupOrder:C,renderOrder:x.renderOrder,z:_,group:y},s[e]=R):(R.id=x.id,R.object=x,R.geometry=M,R.material=w,R.materialVariant=u(x),R.groupOrder=C,R.renderOrder=x.renderOrder,R.z=_,R.group=y),e++,R}function h(x,M,w,C,_,y){const R=d(x,M,w,C,_,y);w.transmission>0?r.push(R):w.transparent===!0?o.push(R):t.push(R)}function m(x,M,w,C,_,y){const R=d(x,M,w,C,_,y);w.transmission>0?r.unshift(R):w.transparent===!0?o.unshift(R):t.unshift(R)}function v(x,M){t.length>1&&t.sort(x||gE),r.length>1&&r.sort(M||wg),o.length>1&&o.sort(M||wg)}function S(){for(let x=e,M=s.length;x<M;x++){const w=s[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:v}}function xE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Tg,s.set(r,[u])):o>=l.length?(u=new Tg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new _t};break;case"SpotLight":t={position:new Y,direction:new Y,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let yE=0;function SE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ME(s){const e=new vE,t=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const o=new Y,l=new Yt,u=new Yt;function d(m){let v=0,S=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,C=0,_=0,y=0,R=0,L=0,D=0,F=0,O=0,V=0;m.sort(SE);for(let P=0,fe=m.length;P<fe;P++){const k=m[P],J=k.color,$=k.intensity,le=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ta?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=J.r*$,S+=J.g*$,x+=J.b*$;else if(k.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(k.sh.coefficients[ie],$);V++}else if(k.isDirectionalLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=ee,r.directionalShadowMatrix[M]=k.shadow.matrix,R++}r.directional[M]=ie,M++}else if(k.isSpotLight){const ie=e.get(k);ie.position.setFromMatrixPosition(k.matrixWorld),ie.color.copy(J).multiplyScalar($),ie.distance=le,ie.coneCos=Math.cos(k.angle),ie.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ie.decay=k.decay,r.spot[C]=ie;const W=k.shadow;if(k.map&&(r.spotLightMap[F]=k.map,F++,W.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[C]=W.matrix,k.castShadow){const Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.spotShadow[C]=Q,r.spotShadowMap[C]=ee,D++}C++}else if(k.isRectAreaLight){const ie=e.get(k);ie.color.copy(J).multiplyScalar($),ie.halfWidth.set(k.width*.5,0,0),ie.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=ie,_++}else if(k.isPointLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),ie.distance=k.distance,ie.decay=k.decay,k.castShadow){const W=k.shadow,Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,r.pointShadow[w]=Q,r.pointShadowMap[w]=ee,r.pointShadowMatrix[w]=k.shadow.matrix,L++}r.point[w]=ie,w++}else if(k.isHemisphereLight){const ie=e.get(k);ie.skyColor.copy(k.color).multiplyScalar($),ie.groundColor.copy(k.groundColor).multiplyScalar($),r.hemi[y]=ie,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==M||A.pointLength!==w||A.spotLength!==C||A.rectAreaLength!==_||A.hemiLength!==y||A.numDirectionalShadows!==R||A.numPointShadows!==L||A.numSpotShadows!==D||A.numSpotMaps!==F||A.numLightProbes!==V)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=_,r.point.length=w,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+F-O,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=V,A.directionalLength=M,A.pointLength=w,A.spotLength=C,A.rectAreaLength=_,A.hemiLength=y,A.numDirectionalShadows=R,A.numPointShadows=L,A.numSpotShadows=D,A.numSpotMaps=F,A.numLightProbes=V,r.version=yE++)}function h(m,v){let S=0,x=0,M=0,w=0,C=0;const _=v.matrixWorldInverse;for(let y=0,R=m.length;y<R;y++){const L=m[y];if(L.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),S++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),M++}else if(L.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(_),x++}else if(L.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(_),C++}}}return{setup:d,setupView:h,state:r}}function bg(s){const e=new ME(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function h(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function EE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new bg(s),e.set(o,[d])):l>=u.length?(d=new bg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`,bE=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],AE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ag=new Yt,Ka=new Y,bd=new Y;function CE(s,e,t){let r=new o0;const o=new nt,l=new nt,u=new $t,d=new O_,h=new k_,m={},v=t.maxTextureSize,S={[Ur]:Hn,[Hn]:Ur,[er]:er},x=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:wE,fragmentShader:TE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const w=new Pn;w.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ki(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let y=this.type;this.render=function(O,V,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;this.type===Ev&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const P=s.getRenderTarget(),fe=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ui),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=y!==this.type;$&&V.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ee=>ee.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ee=O.length;le<ee;le++){const ie=O[le],W=ie.shadow;if(W===void 0){st("WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Q=W.getFrameExtents();o.multiply(Q),l.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Q.x),o.x=l.x*Q.x,W.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Q.y),o.y=l.y*Q.y,W.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||$===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Qa){if(ie.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gn(o.x,o.y,{format:ta,type:Jn,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),W.map.texture.name=ie.name+".shadowMap",W.map.depthTexture=new eo(o.x,o.y,Li),W.map.depthTexture.name=ie.name+".shadowMapDepth",W.map.depthTexture.format=ir,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn}else ie.isPointLight?(W.map=new m0(o.x),W.map.depthTexture=new L_(o.x,Oi)):(W.map=new Gn(o.x,o.y),W.map.depthTexture=new eo(o.x,o.y,Oi)),W.map.depthTexture.name=ie.name+".shadowMap",W.map.depthTexture.format=ir,this.type===Xl?(W.map.depthTexture.compareFunction=oe?Gf:Hf,W.map.depthTexture.minFilter=Mn,W.map.depthTexture.magFilter=Mn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn);W.camera.updateProjectionMatrix()}const ce=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,U),s.clear();else{U===0&&(s.setRenderTarget(W.map),s.clear());const q=W.getViewport(U);u.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),J.viewport(u)}if(ie.isPointLight){const q=W.camera,Ae=W.matrix,We=ie.distance||q.far;We!==q.far&&(q.far=We,q.updateProjectionMatrix()),Ka.setFromMatrixPosition(ie.matrixWorld),q.position.copy(Ka),bd.copy(q.position),bd.add(bE[U]),q.up.copy(AE[U]),q.lookAt(bd),q.updateMatrixWorld(),Ae.makeTranslation(-Ka.x,-Ka.y,-Ka.z),Ag.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ag,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(ie);r=W.getFrustum(),D(V,A,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Qa&&R(W,A),W.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(P,fe,k)};function R(O,V){const A=e.update(C);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Gn(o.x,o.y,{format:ta,type:Jn})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(V,null,A,x,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(V,null,A,M,C,null)}function L(O,V,A,P){let fe=null;const k=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)fe=k;else if(fe=A.isPointLight===!0?h:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const J=fe.uuid,$=V.uuid;let le=m[J];le===void 0&&(le={},m[J]=le);let ee=le[$];ee===void 0&&(ee=fe.clone(),le[$]=ee,V.addEventListener("dispose",F)),fe=ee}if(fe.visible=V.visible,fe.wireframe=V.wireframe,P===Qa?fe.side=V.shadowSide!==null?V.shadowSide:V.side:fe.side=V.shadowSide!==null?V.shadowSide:S[V.side],fe.alphaMap=V.alphaMap,fe.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,fe.map=V.map,fe.clipShadows=V.clipShadows,fe.clippingPlanes=V.clippingPlanes,fe.clipIntersection=V.clipIntersection,fe.displacementMap=V.displacementMap,fe.displacementScale=V.displacementScale,fe.displacementBias=V.displacementBias,fe.wireframeLinewidth=V.wireframeLinewidth,fe.linewidth=V.linewidth,A.isPointLight===!0&&fe.isMeshDistanceMaterial===!0){const J=s.properties.get(fe);J.light=A}return fe}function D(O,V,A,P,fe){if(O.visible===!1)return;if(O.layers.test(V.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&fe===Qa)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const $=e.update(O),le=O.material;if(Array.isArray(le)){const ee=$.groups;for(let ie=0,W=ee.length;ie<W;ie++){const Q=ee[ie],oe=le[Q.materialIndex];if(oe&&oe.visible){const ce=L(O,oe,P,fe);O.onBeforeShadow(s,O,V,A,$,ce,Q),s.renderBufferDirect(A,null,$,ce,O,Q),O.onAfterShadow(s,O,V,A,$,ce,Q)}}}else if(le.visible){const ee=L(O,le,P,fe);O.onBeforeShadow(s,O,V,A,$,ee,null),s.renderBufferDirect(A,null,$,ee,O,null),O.onAfterShadow(s,O,V,A,$,ee,null)}}const J=O.children;for(let $=0,le=J.length;$<le;$++)D(J[$],V,A,P,fe)}function F(O){O.target.removeEventListener("dispose",F);for(const A in m){const P=m[A],fe=O.target.uuid;fe in P&&(P[fe].dispose(),delete P[fe])}}}function RE(s,e){function t(){let H=!1;const be=new $t;let Me=null;const De=new $t(0,0,0,0);return{setMask:function(Se){Me!==Se&&!H&&(s.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){H=Se},setClear:function(Se,de,ze,at,Lt){Lt===!0&&(Se*=at,de*=at,ze*=at),be.set(Se,de,ze,at),De.equals(be)===!1&&(s.clearColor(Se,de,ze,at),De.copy(be))},reset:function(){H=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let H=!1,be=!1,Me=null,De=null,Se=null;return{setReversed:function(de){if(be!==de){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),be=de;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return be},setTest:function(de){de?me(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){Me!==de&&!H&&(s.depthMask(de),Me=de)},setFunc:function(de){if(be&&(de=i_[de]),De!==de){switch(de){case Ud:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Od:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case kd:s.depthFunc(s.EQUAL);break;case Bd:s.depthFunc(s.GEQUAL);break;case zd:s.depthFunc(s.GREATER);break;case Vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=de}},setLocked:function(de){H=de},setClear:function(de){Se!==de&&(Se=de,be&&(de=1-de),s.clearDepth(de))},reset:function(){H=!1,Me=null,De=null,Se=null,be=!1}}}function o(){let H=!1,be=null,Me=null,De=null,Se=null,de=null,ze=null,at=null,Lt=null;return{setTest:function(wt){H||(wt?me(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(wt){be!==wt&&!H&&(s.stencilMask(wt),be=wt)},setFunc:function(wt,ei,wn){(Me!==wt||De!==ei||Se!==wn)&&(s.stencilFunc(wt,ei,wn),Me=wt,De=ei,Se=wn)},setOp:function(wt,ei,wn){(de!==wt||ze!==ei||at!==wn)&&(s.stencilOp(wt,ei,wn),de=wt,ze=ei,at=wn)},setLocked:function(wt){H=wt},setClear:function(wt){Lt!==wt&&(s.clearStencil(wt),Lt=wt)},reset:function(){H=!1,be=null,Me=null,De=null,Se=null,de=null,ze=null,at=null,Lt=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let v={},S={},x=new WeakMap,M=[],w=null,C=!1,_=null,y=null,R=null,L=null,D=null,F=null,O=null,V=new _t(0,0,0),A=0,P=!1,fe=null,k=null,J=null,$=null,le=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,W=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ie=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ie=W>=2);let oe=null,ce={};const U=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),Ae=new $t().fromArray(U),We=new $t().fromArray(q);function Ze(H,be,Me,De){const Se=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Me;ze++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(be+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return de}const re={};re[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(s.DEPTH_TEST),u.setFunc($s),ut(!1),kt(Tm),me(s.CULL_FACE),Mt(Ui);function me(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function pe(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Fe(H,be){return S[H]!==be?(s.bindFramebuffer(H,be),S[H]=be,H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=be),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=be),!0):!1}function He(H,be){let Me=M,De=!1;if(H){Me=x.get(be),Me===void 0&&(Me=[],x.set(be,Me));const Se=H.textures;if(Me.length!==Se.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let de=0,ze=Se.length;de<ze;de++)Me[de]=s.COLOR_ATTACHMENT0+de;Me.length=Se.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function it(H){return w!==H?(s.useProgram(H),w=H,!0):!1}const Kt={[rs]:s.FUNC_ADD,[Tv]:s.FUNC_SUBTRACT,[bv]:s.FUNC_REVERSE_SUBTRACT};Kt[Av]=s.MIN,Kt[Cv]=s.MAX;const pt={[Rv]:s.ZERO,[Pv]:s.ONE,[Nv]:s.SRC_COLOR,[Ld]:s.SRC_ALPHA,[Ov]:s.SRC_ALPHA_SATURATE,[Uv]:s.DST_COLOR,[Lv]:s.DST_ALPHA,[Dv]:s.ONE_MINUS_SRC_COLOR,[Id]:s.ONE_MINUS_SRC_ALPHA,[Fv]:s.ONE_MINUS_DST_COLOR,[Iv]:s.ONE_MINUS_DST_ALPHA,[kv]:s.CONSTANT_COLOR,[Bv]:s.ONE_MINUS_CONSTANT_COLOR,[zv]:s.CONSTANT_ALPHA,[Vv]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(H,be,Me,De,Se,de,ze,at,Lt,wt){if(H===Ui){C===!0&&(pe(s.BLEND),C=!1);return}if(C===!1&&(me(s.BLEND),C=!0),H!==wv){if(H!==_||wt!==P){if((y!==rs||D!==rs)&&(s.blendEquation(s.FUNC_ADD),y=rs,D=rs),wt)switch(H){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bm:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",H);break}R=null,L=null,F=null,O=null,V.set(0,0,0),A=0,_=H,P=wt}return}Se=Se||be,de=de||Me,ze=ze||De,(be!==y||Se!==D)&&(s.blendEquationSeparate(Kt[be],Kt[Se]),y=be,D=Se),(Me!==R||De!==L||de!==F||ze!==O)&&(s.blendFuncSeparate(pt[Me],pt[De],pt[de],pt[ze]),R=Me,L=De,F=de,O=ze),(at.equals(V)===!1||Lt!==A)&&(s.blendColor(at.r,at.g,at.b,Lt),V.copy(at),A=Lt),_=H,P=!1}function Pt(H,be){H.side===er?pe(s.CULL_FACE):me(s.CULL_FACE);let Me=H.side===Hn;be&&(Me=!Me),ut(Me),H.blending===Qs&&H.transparent===!1?Mt(Ui):Mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const De=H.stencilWrite;d.setTest(De),De&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(H){fe!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),fe=H)}function kt(H){H!==Sv?(me(s.CULL_FACE),H!==k&&(H===Tm?s.cullFace(s.BACK):H===Mv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),k=H}function z(H){H!==J&&(ie&&s.lineWidth(H),J=H)}function Vt(H,be,Me){H?(me(s.POLYGON_OFFSET_FILL),($!==be||le!==Me)&&($=be,le=Me,u.getReversed()&&(be=-be),s.polygonOffset(be,Me))):pe(s.POLYGON_OFFSET_FILL)}function xt(H){H?me(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function Et(H){H===void 0&&(H=s.TEXTURE0+ee-1),oe!==H&&(s.activeTexture(H),oe=H)}function Ge(H,be,Me){Me===void 0&&(oe===null?Me=s.TEXTURE0+ee-1:Me=oe);let De=ce[Me];De===void 0&&(De={type:void 0,texture:void 0},ce[Me]=De),(De.type!==H||De.texture!==be)&&(oe!==Me&&(s.activeTexture(Me),oe=Me),s.bindTexture(H,be||re[H]),De.type=H,De.texture=be)}function N(){const H=ce[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ge(){try{s.texSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function Te(){try{s.texStorage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function qe(){try{s.texStorage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function rt(){try{s.texImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function we(H){Ae.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function je(H){We.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),We.copy(H))}function Be(H,be){let Me=m.get(be);Me===void 0&&(Me=new WeakMap,m.set(be,Me));let De=Me.get(H);De===void 0&&(De=s.getUniformBlockIndex(be,H.name),Me.set(H,De))}function Ne(H,be){const De=m.get(be).get(H);h.get(be)!==De&&(s.uniformBlockBinding(be,De,H.__bindingPointIndex),h.set(be,De))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,ce={},S={},x=new WeakMap,M=[],w=null,C=!1,_=null,y=null,R=null,L=null,D=null,F=null,O=null,V=new _t(0,0,0),A=0,P=!1,fe=null,k=null,J=null,$=null,le=null,Ae.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:me,disable:pe,bindFramebuffer:Fe,drawBuffers:He,useProgram:it,setBlending:Mt,setMaterial:Pt,setFlipSided:ut,setCullFace:kt,setLineWidth:z,setPolygonOffset:Vt,setScissorTest:xt,activeTexture:Et,bindTexture:Ge,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:rt,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:qe,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:ke,scissor:we,viewport:je,reset:ct}}function PE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nt,v=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,E){return M?new OffscreenCanvas(N,E):nc("canvas")}function C(N,E,j){let he=1;const ge=Ge(N);if((ge.width>j||ge.height>j)&&(he=j/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(he*ge.width),ke=Math.floor(he*ge.height);S===void 0&&(S=w(ue,ke));const Te=E?w(ue,ke):S;return Te.width=ue,Te.height=ke,Te.getContext("2d").drawImage(N,0,0,ue,ke),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+ke+")."),Te}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function _(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,E,j,he,ge=!1){if(N!==null){if(s[N]!==void 0)return s[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=E;if(E===s.RED&&(j===s.FLOAT&&(ue=s.R32F),j===s.HALF_FLOAT&&(ue=s.R16F),j===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.R8UI),j===s.UNSIGNED_SHORT&&(ue=s.R16UI),j===s.UNSIGNED_INT&&(ue=s.R32UI),j===s.BYTE&&(ue=s.R8I),j===s.SHORT&&(ue=s.R16I),j===s.INT&&(ue=s.R32I)),E===s.RG&&(j===s.FLOAT&&(ue=s.RG32F),j===s.HALF_FLOAT&&(ue=s.RG16F),j===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RG8UI),j===s.UNSIGNED_SHORT&&(ue=s.RG16UI),j===s.UNSIGNED_INT&&(ue=s.RG32UI),j===s.BYTE&&(ue=s.RG8I),j===s.SHORT&&(ue=s.RG16I),j===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),j===s.UNSIGNED_INT&&(ue=s.RGB32UI),j===s.BYTE&&(ue=s.RGB8I),j===s.SHORT&&(ue=s.RGB16I),j===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),j===s.UNSIGNED_INT&&(ue=s.RGBA32UI),j===s.BYTE&&(ue=s.RGBA8I),j===s.SHORT&&(ue=s.RGBA16I),j===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const ke=ge?ec:St.getTransfer(he);j===s.FLOAT&&(ue=s.RGBA32F),j===s.HALF_FLOAT&&(ue=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ue=ke===Dt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(N,E){let j;return N?E===null||E===Oi||E===$a?j=s.DEPTH24_STENCIL8:E===Li?j=s.DEPTH32F_STENCIL8:E===Ja&&(j=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===$a?j=s.DEPTH_COMPONENT24:E===Li?j=s.DEPTH_COMPONENT32F:E===Ja&&(j=s.DEPTH_COMPONENT16),j}function F(N,E){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==mn&&N.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function O(N){const E=N.target;E.removeEventListener("dispose",O),A(E),E.isVideoTexture&&v.delete(E)}function V(N){const E=N.target;E.removeEventListener("dispose",V),fe(E)}function A(N){const E=r.get(N);if(E.__webglInit===void 0)return;const j=N.source,he=x.get(j);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(N),Object.keys(he).length===0&&x.delete(j)}r.remove(N)}function P(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const j=N.source,he=x.get(j);delete he[E.__cacheKey],u.memory.textures--}function fe(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=N.textures;for(let he=0,ge=j.length;he<ge;he++){const ue=r.get(j[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(j[he])}r.remove(N)}let k=0;function J(){k=0}function $(){const N=k;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),k+=1,N}function le(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ee(N,E){const j=r.get(N);if(N.isVideoTexture&&xt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const he=N.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{re(j,N,E);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function ie(N,E){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){re(j,N,E);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function W(N,E){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){re(j,N,E);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function Q(N,E){const j=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){me(j,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const oe={[Hd]:s.REPEAT,[tr]:s.CLAMP_TO_EDGE,[Gd]:s.MIRRORED_REPEAT},ce={[mn]:s.NEAREST,[jv]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Qu]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},U={[qv]:s.NEVER,[$v]:s.ALWAYS,[Kv]:s.LESS,[Hf]:s.LEQUAL,[Qv]:s.EQUAL,[Gf]:s.GEQUAL,[Zv]:s.GREATER,[Jv]:s.NOTEQUAL};function q(N,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===Qu||E.magFilter===gl||E.magFilter===as||E.minFilter===Mn||E.minFilter===Qu||E.minFilter===gl||E.minFilter===as)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,oe[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==gl&&E.minFilter!==as||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(N,E){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",O));const he=E.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const ue=le(E);if(ue!==N.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ge[ue].usedTimes++;const ke=ge[N.__cacheKey];ke!==void 0&&(ge[N.__cacheKey].usedTimes--,ke.usedTimes===0&&P(E)),N.__cacheKey=ue,N.__webglTexture=ge[ue].texture}return j}function We(N,E,j){return Math.floor(Math.floor(N/j)/E)}function Ze(N,E,j,he){const ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,he,E.data);else{ue.sort((ye,we)=>ye.start-we.start);let ke=0;for(let ye=1;ye<ue.length;ye++){const we=ue[ke],je=ue[ye],Be=we.start+we.count,Ne=We(je.start,E.width,4),ct=We(we.start,E.width,4);je.start<=Be+1&&Ne===ct&&We(je.start+je.count-1,E.width,4)===Ne?we.count=Math.max(we.count,je.start+je.count-we.start):(++ke,ue[ke]=je)}ue.length=ke+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,we=ue.length;ye<we;ye++){const je=ue[ye],Be=Math.floor(je.start/4),Ne=Math.ceil(je.count/4),ct=Be%E.width,H=Math.floor(Be/E.width),be=Ne,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,ct,H,be,Me,j,he,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function re(N,E,j){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Ae(N,E),ue=E.source;t.bindTexture(he,N.__webglTexture,s.TEXTURE0+j);const ke=r.get(ue);if(ue.version!==ke.__version||ge===!0){t.activeTexture(s.TEXTURE0+j);const Te=St.getPrimaries(St.workingColorSpace),qe=E.colorSpace===Lr?null:St.getPrimaries(E.colorSpace),rt=E.colorSpace===Lr||Te===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=C(E.image,!1,o.maxTextureSize);ye=Et(E,ye);const we=l.convert(E.format,E.colorSpace),je=l.convert(E.type);let Be=L(E.internalFormat,we,je,E.colorSpace,E.isVideoTexture);q(he,E);let Ne;const ct=E.mipmaps,H=E.isVideoTexture!==!0,be=ke.__version===void 0||ge===!0,Me=ue.dataReady,De=F(E,ye);if(E.isDepthTexture)Be=D(E.format===os,E.type),be&&(H?t.texStorage2D(s.TEXTURE_2D,1,Be,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,we,je,null));else if(E.isDataTexture)if(ct.length>0){H&&be&&t.texStorage2D(s.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let Se=0,de=ct.length;Se<de;Se++)Ne=ct[Se],H?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,je,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Be,Ne.width,Ne.height,0,we,je,Ne.data);E.generateMipmaps=!1}else H?(be&&t.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height),Me&&Ze(E,ye,we,je)):t.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,we,je,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,ct[0].width,ct[0].height,ye.depth);for(let Se=0,de=ct.length;Se<de;Se++)if(Ne=ct[Se],E.format!==wi)if(we!==null)if(H){if(Me)if(E.layerUpdates.size>0){const ze=rg(Ne.width,Ne.height,E.format,E.type);for(const at of E.layerUpdates){const Lt=Ne.data.subarray(at*ze/Ne.data.BYTES_PER_ELEMENT,(at+1)*ze/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,at,Ne.width,Ne.height,1,we,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,we,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,we,je,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Ne.width,Ne.height,ye.depth,0,we,je,Ne.data)}else{H&&be&&t.texStorage2D(s.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let Se=0,de=ct.length;Se<de;Se++)Ne=ct[Se],E.format!==wi?we!==null?H?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Be,Ne.width,Ne.height,0,Ne.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,je,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Be,Ne.width,Ne.height,0,we,je,Ne.data)}else if(E.isDataArrayTexture)if(H){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,ye.width,ye.height,ye.depth),Me)if(E.layerUpdates.size>0){const Se=rg(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const ze=ye.data.subarray(de*Se/ye.data.BYTES_PER_ELEMENT,(de+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,we,je,ze)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,je,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,we,je,ye.data);else if(E.isData3DTexture)H?(be&&t.texStorage3D(s.TEXTURE_3D,De,Be,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,je,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,we,je,ye.data);else if(E.isFramebufferTexture){if(be)if(H)t.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height);else{let Se=ye.width,de=ye.height;for(let ze=0;ze<De;ze++)t.texImage2D(s.TEXTURE_2D,ze,Be,Se,de,0,we,je,null),Se>>=1,de>>=1}}else if(ct.length>0){if(H&&be){const Se=Ge(ct[0]);t.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}for(let Se=0,de=ct.length;Se<de;Se++)Ne=ct[Se],H?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,we,je,Ne):t.texImage2D(s.TEXTURE_2D,Se,Be,we,je,Ne);E.generateMipmaps=!1}else if(H){if(be){const Se=Ge(ye);t.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,je,ye)}else t.texImage2D(s.TEXTURE_2D,0,Be,we,je,ye);_(E)&&y(he),ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function me(N,E,j){if(E.image.length!==6)return;const he=Ae(N,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+j);const ue=r.get(ge);if(ge.version!==ue.__version||he===!0){t.activeTexture(s.TEXTURE0+j);const ke=St.getPrimaries(St.workingColorSpace),Te=E.colorSpace===Lr?null:St.getPrimaries(E.colorSpace),qe=E.colorSpace===Lr||ke===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!rt&&!ye?we[de]=C(E.image[de],!0,o.maxCubemapSize):we[de]=ye?E.image[de].image:E.image[de],we[de]=Et(E,we[de]);const je=we[0],Be=l.convert(E.format,E.colorSpace),Ne=l.convert(E.type),ct=L(E.internalFormat,Be,Ne,E.colorSpace),H=E.isVideoTexture!==!0,be=ue.__version===void 0||he===!0,Me=ge.dataReady;let De=F(E,je);q(s.TEXTURE_CUBE_MAP,E);let Se;if(rt){H&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,ct,je.width,je.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let ze=0;ze<Se.length;ze++){const at=Se[ze];E.format!==wi?Be!==null?H?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,at.width,at.height,Be,at.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ct,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,at.width,at.height,Be,Ne,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ct,at.width,at.height,0,Be,Ne,at.data)}}}else{if(Se=E.mipmaps,H&&be){Se.length>0&&De++;const de=Ge(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,ct,de.width,de.height)}for(let de=0;de<6;de++)if(ye){H?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Be,Ne,we[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,we[de].width,we[de].height,0,Be,Ne,we[de].data);for(let ze=0;ze<Se.length;ze++){const Lt=Se[ze].image[de].image;H?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Lt.width,Lt.height,Be,Ne,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ct,Lt.width,Lt.height,0,Be,Ne,Lt.data)}}else{H?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be,Ne,we[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Be,Ne,we[de]);for(let ze=0;ze<Se.length;ze++){const at=Se[ze];H?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Be,Ne,at.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ct,Be,Ne,at.image[de])}}}_(E)&&y(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function pe(N,E,j,he,ge,ue){const ke=l.convert(j.format,j.colorSpace),Te=l.convert(j.type),qe=L(j.internalFormat,ke,Te,j.colorSpace),rt=r.get(E),ye=r.get(j);if(ye.__renderTarget=E,!rt.__hasExternalTextures){const we=Math.max(1,E.width>>ue),je=Math.max(1,E.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,qe,we,je,E.depth,0,ke,Te,null):t.texImage2D(ge,ue,qe,we,je,0,ke,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ye.__webglTexture,0,z(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ye.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(N,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ue=D(E.stencilBuffer,ge),ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),ue,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,N)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const ue=he[ge],ke=l.convert(ue.format,ue.colorSpace),Te=l.convert(ue.type),qe=L(ue.internalFormat,ke,Te,ue.colorSpace);Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),qe,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(N,E,j){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),q(s.TEXTURE_CUBE_MAP,E.depthTexture);const rt=l.convert(E.depthTexture.format),ye=l.convert(E.depthTexture.type);let we;E.depthTexture.format===ir?we=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(we=s.DEPTH24_STENCIL8);for(let je=0;je<6;je++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,we,E.width,E.height,0,rt,ye,null)}}else ee(E.depthTexture,0);const ue=ge.__webglTexture,ke=z(E),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,qe=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Te,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Te,ue,0);else if(E.depthTexture.format===os)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Te,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Te,ue,0);else throw new Error("Unknown depthTexture format")}function it(N){const E=r.get(N),j=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let he=0;he<6;he++)He(E.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?He(E.__webglFramebuffer[0],N,0):He(E.__webglFramebuffer,N,0)}else if(j){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[he],N,!1);else{const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(N,E,j){const he=r.get(N);E!==void 0&&pe(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&it(N)}function pt(N){const E=N.texture,j=r.get(N),he=r.get(E);N.addEventListener("dispose",V);const ge=N.textures,ue=N.isWebGLCubeRenderTarget===!0,ke=ge.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,u.memory.textures++),ue){j.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Te]=[];for(let qe=0;qe<E.mipmaps.length;qe++)j.__webglFramebuffer[Te][qe]=s.createFramebuffer()}else j.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)j.__webglFramebuffer[Te]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ke)for(let Te=0,qe=ge.length;Te<qe;Te++){const rt=r.get(ge[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Vt(N)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const qe=ge[Te];j.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Te]);const rt=l.convert(qe.format,qe.colorSpace),ye=l.convert(qe.type),we=L(qe.internalFormat,rt,ye,qe.colorSpace,N.isXRRenderTarget===!0),je=z(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,we,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,j.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)pe(j.__webglFramebuffer[Te][qe],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe);else pe(j.__webglFramebuffer[Te],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);_(E)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Te=0,qe=ge.length;Te<qe;Te++){const rt=ge[Te],ye=r.get(rt);let we=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),q(we,rt),pe(j.__webglFramebuffer,N,rt,s.COLOR_ATTACHMENT0+Te,we,0),_(rt)&&y(we)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),q(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)pe(j.__webglFramebuffer[qe],N,E,s.COLOR_ATTACHMENT0,Te,qe);else pe(j.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Te,0);_(E)&&y(Te),t.unbindTexture()}N.depthBuffer&&it(N)}function Mt(N){const E=N.textures;for(let j=0,he=E.length;j<he;j++){const ge=E[j];if(_(ge)){const ue=R(N),ke=r.get(ge).__webglTexture;t.bindTexture(ue,ke),y(ue),t.unbindTexture()}}}const Pt=[],ut=[];function kt(N){if(N.samples>0){if(Vt(N)===!1){const E=N.textures,j=N.width,he=N.height;let ge=s.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(N),Te=E.length>1;if(Te)for(let rt=0;rt<E.length;rt++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const qe=N.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[rt]);const ye=r.get(E[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,j,he,0,0,j,he,ge,s.NEAREST),h===!0&&(Pt.length=0,ut.length=0,Pt.push(s.COLOR_ATTACHMENT0+rt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pt.push(ue),ut.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let rt=0;rt<E.length;rt++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,ke.__webglColorRenderbuffer[rt]);const ye=r.get(E[rt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(N){return Math.min(o.maxSamples,N.samples)}function Vt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(N){const E=u.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function Et(N,E){const j=N.colorSpace,he=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==na&&j!==Lr&&(St.getTransfer(j)===Dt?(he!==wi||ge!==fi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",j)),E}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=Kt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NE(s,e){function t(r,o=Lr){let l;const u=St.getTransfer(o);if(r===fi)return s.UNSIGNED_BYTE;if(r===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kg)return s.BYTE;if(r===Qg)return s.SHORT;if(r===Ja)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===Jn)return s.HALF_FLOAT;if(r===$g)return s.ALPHA;if(r===e0)return s.RGB;if(r===wi)return s.RGBA;if(r===ir)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===t0)return s.RED;if(r===Bf)return s.RED_INTEGER;if(r===ta)return s.RG;if(r===zf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===Yl||r===ql||r===Kl||r===Ql)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jd||r===Wd||r===Xd||r===Yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===jd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd||r===Kd||r===Qd||r===Zd||r===Jd||r===$d||r===ef)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===qd||r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zd)return l.COMPRESSED_R11_EAC;if(r===Jd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return l.COMPRESSED_RG11_EAC;if(r===ef)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===af)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===of)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===df)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ff)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gf||r===xf||r===vf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===gf)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_f||r===yf||r===Sf||r===Mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===_f)return l.COMPRESSED_RED_RGTC1_EXT;if(r===yf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LE=`
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

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new u0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new an({vertexShader:DE,fragmentShader:LE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends cs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,v=null,S=null,x=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",_=new IE,y={},R=t.getContextAttributes();let L=null,D=null;const F=[],O=[],V=new nt;let A=null;const P=new di;P.viewport=new $t;const fe=new di;fe.viewport=new $t;const k=[P,fe],J=new H_;let $=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=F[re];return me===void 0&&(me=new id,F[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=F[re];return me===void 0&&(me=new id,F[re]=me),me.getGripSpace()},this.getHand=function(re){let me=F[re];return me===void 0&&(me=new id,F[re]=me),me.getHandSpace()};function ee(re){const me=O.indexOf(re.inputSource);if(me===-1)return;const pe=F[me];pe!==void 0&&(pe.update(re.inputSource,re.frame,m||u),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",W);for(let re=0;re<F.length;re++){const me=O[re];me!==null&&(O[re]=null,F[re].disconnect(me))}$=null,le=null,_.reset();for(const re in y)delete y[re];e.setRenderTarget(L),M=null,x=null,S=null,o=null,D=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,He=null;R.depth&&(He=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?os:ir,Fe=R.stencil?$a:Oi);const it={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(it),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Gn(x.textureWidth,x.textureHeight,{format:wi,type:fi,depthTexture:new eo(x.textureWidth,x.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Gn(M.framebufferWidth,M.framebufferHeight,{format:wi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(re){for(let me=0;me<re.removed.length;me++){const pe=re.removed[me],Fe=O.indexOf(pe);Fe>=0&&(O[Fe]=null,F[Fe].disconnect(pe))}for(let me=0;me<re.added.length;me++){const pe=re.added[me];let Fe=O.indexOf(pe);if(Fe===-1){for(let it=0;it<F.length;it++)if(it>=O.length){O.push(pe),Fe=it;break}else if(O[it]===null){O[it]=pe,Fe=it;break}if(Fe===-1)break}const He=F[Fe];He&&He.connect(pe)}}const Q=new Y,oe=new Y;function ce(re,me,pe){Q.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Fe=Q.distanceTo(oe),He=me.projectionMatrix.elements,it=pe.projectionMatrix.elements,Kt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),Mt=(He[9]+1)/He[5],Pt=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],kt=(it[8]+1)/it[0],z=Kt*ut,Vt=Kt*kt,xt=Fe/(-ut+kt),Et=xt*-ut;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Et),re.translateZ(xt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ge=Kt+xt,N=pt+xt,E=z-Et,j=Vt+(Fe-Et),he=Mt*pt/N*Ge,ge=Pt*pt/N*Ge;re.projectionMatrix.makePerspective(E,j,he,ge,Ge,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let me=re.near,pe=re.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),J.near=fe.near=P.near=me,J.far=fe.far=P.far=pe,($!==J.near||le!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,le=J.far),J.layers.mask=re.layers.mask|6,P.layers.mask=J.layers.mask&-5,fe.layers.mask=J.layers.mask&-3;const Fe=re.parent,He=J.cameras;U(J,Fe);for(let it=0;it<He.length;it++)U(He[it],Fe);He.length===2?ce(J,P,fe):J.projectionMatrix.copy(P.projectionMatrix),q(re,J,Fe)};function q(re,me,pe){pe===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ef*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(re){h=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(re){return y[re]};let Ae=null;function We(re,me){if(v=me.getViewerPose(m||u),w=me,v!==null){const pe=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Fe=!1;pe.length!==J.cameras.length&&(J.cameras.length=0,Fe=!0);for(let pt=0;pt<pe.length;pt++){const Mt=pe[pt];let Pt=null;if(M!==null)Pt=M.getViewport(Mt);else{const kt=S.getViewSubImage(x,Mt);Pt=kt.viewport,pt===0&&(e.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(D))}let ut=k[pt];ut===void 0&&(ut=new di,ut.layers.enable(pt),ut.viewport=new $t,k[pt]=ut),ut.matrix.fromArray(Mt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Mt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(J.matrix.copy(ut.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Fe===!0&&J.cameras.push(ut)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const pt=S.getDepthInformation(pe[0]);pt&&pt.isValid&&pt.texture&&_.init(pt,o.renderState)}if(He&&He.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let pt=0;pt<pe.length;pt++){const Mt=pe[pt].camera;if(Mt){let Pt=y[Mt];Pt||(Pt=new u0,y[Mt]=Pt);const ut=S.getCameraImage(Mt);Pt.sourceTexture=ut}}}}for(let pe=0;pe<F.length;pe++){const Fe=O[pe],He=F[pe];Fe!==null&&He!==void 0&&He.update(Fe,me,m||u)}Ae&&Ae(re,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const Ze=new p0;Ze.setAnimationLoop(We),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const is=new rr,FE=new Yt;function OE(s,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,d0(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,R,L,D){y.isMeshBasicMaterial?l(_,y):y.isMeshLambertMaterial?(l(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(_,y),S(_,y)):y.isMeshPhongMaterial?(l(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(_,y),x(_,y),y.isMeshPhysicalMaterial&&M(_,y,D)):y.isMeshMatcapMaterial?(l(_,y),w(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),C(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(u(_,y),y.isLineDashedMaterial&&d(_,y)):y.isPointsMaterial?h(_,y,R,L):y.isSpriteMaterial?m(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Hn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Hn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const R=e.get(y),L=R.envMap,D=R.envMapRotation;L&&(_.envMap.value=L,is.copy(D),is.x*=-1,is.y*=-1,is.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),_.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(is)),_.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function u(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function d(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function h(_,y,R,L){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*R,_.scale.value=L*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function m(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function S(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function x(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function M(_,y,R){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,y){y.matcap&&(_.matcap.value=y.matcap)}function C(_,y){const R=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,L){const D=L.program;r.uniformBlockBinding(R,D)}function m(R,L){let D=o[R.id];D===void 0&&(w(R),D=v(R),o[R.id]=D,R.addEventListener("dispose",_));const F=L.program;r.updateUBOMapping(R,F);const O=e.render.frame;l[R.id]!==O&&(x(R),l[R.id]=O)}function v(R){const L=S();R.__bindingPointIndex=L;const D=s.createBuffer(),F=R.__size,O=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function S(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(R){const L=o[R.id],D=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,V=D.length;O<V;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let P=0,fe=A.length;P<fe;P++){const k=A[P];if(M(k,O,P,F)===!0){const J=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let ee=0;ee<$.length;ee++){const ie=$[ee],W=C(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,J+le,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,le),le+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,L,D,F){const O=R.value,V=L+"_"+D;if(F[V]===void 0)return typeof O=="number"||typeof O=="boolean"?F[V]=O:F[V]=O.clone(),!0;{const A=F[V];if(typeof O=="number"||typeof O=="boolean"){if(A!==O)return F[V]=O,!0}else if(A.equals(O)===!1)return A.copy(O),!0}return!1}function w(R){const L=R.uniforms;let D=0;const F=16;for(let V=0,A=L.length;V<A;V++){const P=Array.isArray(L[V])?L[V]:[L[V]];for(let fe=0,k=P.length;fe<k;fe++){const J=P[fe],$=Array.isArray(J.value)?J.value:[J.value];for(let le=0,ee=$.length;le<ee;le++){const ie=$[le],W=C(ie),Q=D%F,oe=Q%W.boundary,ce=Q+oe;D+=oe,ce!==0&&F-ce<W.storage&&(D+=F-ce),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=W.storage}}}const O=D%F;return O>0&&(D+=F-O),R.__size=D,R.__cache={},this}function C(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",R),L}function _(R){const L=R.target;L.removeEventListener("dispose",_);const D=u.indexOf(L.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:m,dispose:y}}const BE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function zE(){return Ni===null&&(Ni=new T_(BE,16,16,ta,Jn),Ni.name="DFG_LUT",Ni.minFilter=Mn,Ni.magFilter=Mn,Ni.wrapS=tr,Ni.wrapT=tr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class VE{constructor(e={}){const{canvas:t=t_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=M,_=new Set([Vf,zf,Bf]),y=new Set([fi,Oi,Ja,$a,Of,kf]),R=new Uint32Array(4),L=new Int32Array(4);let D=null,F=null;const O=[],V=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let fe=!1;this._outputColorSpace=ui;let k=0,J=0,$=null,le=-1,ee=null;const ie=new $t,W=new $t;let Q=null;const oe=new _t(0);let ce=0,U=t.width,q=t.height,Ae=1,We=null,Ze=null;const re=new $t(0,0,U,q),me=new $t(0,0,U,q);let pe=!1;const Fe=new o0;let He=!1,it=!1;const Kt=new Yt,pt=new Y,Mt=new $t,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function kt(){return $===null?Ae:1}let z=r;function Vt(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rf}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),z===null){const X="webgl2";if(z=Vt(X,b),z===null)throw Vt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw bt("WebGLRenderer: "+b.message),b}let xt,Et,Ge,N,E,j,he,ge,ue,ke,Te,qe,rt,ye,we,je,Be,Ne,ct,H,be,Me,De;function Se(){xt=new VS(z),xt.init(),be=new NE(z,xt),Et=new LS(z,xt,e,be),Ge=new RE(z,xt),Et.reversedDepthBuffer&&x&&Ge.buffers.depth.setReversed(!0),N=new jS(z),E=new mE,j=new PE(z,xt,Ge,E,Et,be,N),he=new zS(P),ge=new K_(z),Me=new NS(z,ge),ue=new HS(z,ge,N,Me),ke=new XS(z,ue,ge,Me,N),Ne=new WS(z,Et,j),we=new IS(E),Te=new pE(P,he,xt,Et,Me,we),qe=new OE(P,E),rt=new xE,ye=new EE(xt),Be=new PS(P,he,Ge,ke,w,h),je=new CE(P,ke,Et),De=new kE(z,N,Et,Ge),ct=new DS(z,xt,N),H=new GS(z,xt,N),N.programs=Te.programs,P.capabilities=Et,P.extensions=xt,P.properties=E,P.renderLists=rt,P.shadowMap=je,P.state=Ge,P.info=N}Se(),C!==fi&&(A=new qS(C,t.width,t.height,o,l));const de=new UE(P,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(b){b!==void 0&&(Ae=b,this.setSize(U,q,!1))},this.getSize=function(b){return b.set(U,q)},this.setSize=function(b,X,ae=!0){if(de.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,q=X,t.width=Math.floor(b*Ae),t.height=Math.floor(X*Ae),ae===!0&&(t.style.width=b+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(U*Ae,q*Ae).floor()},this.setDrawingBufferSize=function(b,X,ae){U=b,q=X,Ae=ae,t.width=Math.floor(b*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,X,ae,ne){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,X,ae,ne),Ge.viewport(ie.copy(re).multiplyScalar(Ae).round())},this.getScissor=function(b){return b.copy(me)},this.setScissor=function(b,X,ae,ne){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,X,ae,ne),Ge.scissor(W.copy(me).multiplyScalar(Ae).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){Ge.setScissorTest(pe=b)},this.setOpaqueSort=function(b){We=b},this.setTransparentSort=function(b){Ze=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ae=!0){let ne=0;if(b){let Z=!1;if($!==null){const Re=$.texture.format;Z=_.has(Re)}if(Z){const Re=$.texture.type,Ue=y.has(Re),Ce=Be.getClearColor(),Le=Be.getClearAlpha(),Qe=Ce.r,$e=Ce.g,dt=Ce.b;Ue?(R[0]=Qe,R[1]=$e,R[2]=dt,R[3]=Le,z.clearBufferuiv(z.COLOR,0,R)):(L[0]=Qe,L[1]=$e,L[2]=dt,L[3]=Le,z.clearBufferiv(z.COLOR,0,L))}else ne|=z.COLOR_BUFFER_BIT}X&&(ne|=z.DEPTH_BUFFER_BIT),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Be.dispose(),rt.dispose(),ye.dispose(),E.dispose(),he.dispose(),ke.dispose(),Me.dispose(),De.dispose(),Te.dispose(),de.dispose(),de.removeEventListener("sessionstart",sr),de.removeEventListener("sessionend",Or),ti.stop()};function ze(b){b.preventDefault(),Dm("WebGLRenderer: Context Lost."),fe=!0}function at(){Dm("WebGLRenderer: Context Restored."),fe=!1;const b=N.autoReset,X=je.enabled,ae=je.autoUpdate,ne=je.needsUpdate,Z=je.type;Se(),N.autoReset=b,je.enabled=X,je.autoUpdate=ae,je.needsUpdate=ne,je.type=Z}function Lt(b){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wt(b){const X=b.target;X.removeEventListener("dispose",wt),ei(X)}function ei(b){wn(b),E.remove(b)}function wn(b){const X=E.get(b).programs;X!==void 0&&(X.forEach(function(ae){Te.releaseProgram(ae)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ae,ne,Z,Re){X===null&&(X=Pt);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=uo(b,X,ae,ne,Z);Ge.setMaterial(ne,Ue);let Le=ae.index,Qe=1;if(ne.wireframe===!0){if(Le=ue.getWireframeAttribute(ae),Le===void 0)return;Qe=2}const $e=ae.drawRange,dt=ae.attributes.position;let Je=$e.start*Qe,Nt=($e.start+$e.count)*Qe;Re!==null&&(Je=Math.max(Je,Re.start*Qe),Nt=Math.min(Nt,(Re.start+Re.count)*Qe)),Le!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,Le.count)):dt!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,dt.count));const Ft=Nt-Je;if(Ft<0||Ft===1/0)return;Me.setup(Z,ne,Ce,ae,Le);let Ut,yt=ct;if(Le!==null&&(Ut=ge.get(Le),yt=H,yt.setIndex(Ut)),Z.isMesh)ne.wireframe===!0?(Ge.setLineWidth(ne.wireframeLinewidth*kt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=ne.linewidth;Qt===void 0&&(Qt=1),Ge.setLineWidth(Qt*kt()),Z.isLineSegments?yt.setMode(z.LINES):Z.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else Z.isPoints?yt.setMode(z.POINTS):Z.isSprite&&yt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ic("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))yt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Tn=Z._multiDrawCount,vt=Le?ge.get(Le).bytesPerElement:1,Nn=E.get(ne).currentProgram.getUniforms();for(let Dn=0;Dn<Tn;Dn++)Nn.setValue(z,"_gl_DrawID",Dn),yt.render(Qt[Dn]/vt,Ye[Dn])}else if(Z.isInstancedMesh)yt.renderInstances(Je,Ft,Z.count);else if(ae.isInstancedBufferGeometry){const Qt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ye=Math.min(ae.instanceCount,Qt);yt.renderInstances(Je,Ft,Ye)}else yt.render(Je,Ft)};function us(b,X,ae){b.transparent===!0&&b.side===er&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,Br(b,X,ae),b.side=Ur,b.needsUpdate=!0,Br(b,X,ae),b.side=er):Br(b,X,ae)}this.compile=function(b,X,ae=null){ae===null&&(ae=b),F=ye.get(ae),F.init(X),V.push(F),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),b!==ae&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const ne=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Ce=Re[Ue];us(Ce,ae,Z),ne.add(Ce)}else us(Re,ae,Z),ne.add(Re)}),F=V.pop(),ne},this.compileAsync=function(b,X,ae=null){const ne=this.compile(b,X,ae);return new Promise(Z=>{function Re(){if(ne.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Z(b);return}setTimeout(Re,10)}xt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Bi=null;function dc(b){Bi&&Bi(b)}function sr(){ti.stop()}function Or(){ti.start()}const ti=new p0;ti.setAnimationLoop(dc),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Bi=b,de.setAnimationLoop(b),b===null?ti.stop():ti.start()},de.addEventListener("sessionstart",sr),de.addEventListener("sessionend",Or),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;const ae=de.enabled===!0&&de.isPresenting===!0,ne=A!==null&&($===null||ae)&&A.begin(P,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,X,$),F=ye.get(b,V.length),F.init(X),V.push(F),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(Kt,Ii,X.reversedDepth),it=this.localClippingEnabled,He=we.init(this.clippingPlanes,it),D=rt.get(b,O.length),D.init(),O.push(D),de.enabled===!0&&de.isPresenting===!0){const Ue=P.xr.getDepthSensingMesh();Ue!==null&&kr(Ue,X,-1/0,P.sortObjects)}kr(b,X,0,P.sortObjects),D.finish(),P.sortObjects===!0&&D.sort(We,Ze),ut=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ut&&Be.addToRenderList(D,b),this.info.render.frame++,He===!0&&we.beginShadows();const Z=F.state.shadowsArray;if(je.render(Z,b,X),He===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const Ue=D.opaque,Ce=D.transmissive;if(F.setupLights(),X.isArrayCamera){const Le=X.cameras;if(Ce.length>0)for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe];lo(Ue,Ce,b,dt)}ut&&Be.render(b);for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe];oo(D,b,dt,dt.viewport)}}else Ce.length>0&&lo(Ue,Ce,b,X),ut&&Be.render(b),oo(D,b,X)}$!==null&&J===0&&(j.updateMultisampleRenderTarget($),j.updateRenderTargetMipmap($)),ne&&A.end(P),b.isScene===!0&&b.onAfterRender(P,b,X),Me.resetDefaultState(),le=-1,ee=null,V.pop(),V.length>0?(F=V[V.length-1],He===!0&&we.setGlobalState(P.clippingPlanes,F.state.camera)):F=null,O.pop(),O.length>0?D=O[O.length-1]:D=null};function kr(b,X,ae,ne){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)F.pushLight(b),b.castShadow&&F.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){ne&&Mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);const Ue=ke.update(b),Ce=b.material;Ce.visible&&D.push(b,Ue,Ce,ae,Mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const Ue=ke.update(b),Ce=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Mt.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Mt.copy(Ue.boundingSphere.center)),Mt.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ce)){const Le=Ue.groups;for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe],Je=Ce[dt.materialIndex];Je&&Je.visible&&D.push(b,Ue,Je,ae,Mt.z,dt)}}else Ce.visible&&D.push(b,Ue,Ce,ae,Mt.z,null)}}const Re=b.children;for(let Ue=0,Ce=Re.length;Ue<Ce;Ue++)kr(Re[Ue],X,ae,ne)}function oo(b,X,ae,ne){const{opaque:Z,transmissive:Re,transparent:Ue}=b;F.setupLightsView(ae),He===!0&&we.setGlobalState(P.clippingPlanes,ae),ne&&Ge.viewport(ie.copy(ne)),Z.length>0&&ds(Z,X,ae),Re.length>0&&ds(Re,X,ae),Ue.length>0&&ds(Ue,X,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function lo(b,X,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ne.id]===void 0){const Je=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ne.id]=new Gn(1,1,{generateMipmaps:!0,type:Je?Jn:fi,minFilter:as,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Re=F.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||ie;Re.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);const Ce=P.getRenderTarget(),Le=P.getActiveCubeFace(),Qe=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(oe),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),ut&&Be.render(ae);const $e=P.toneMapping;P.toneMapping=Fi;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),F.setupLightsView(ne),He===!0&&we.setGlobalState(P.clippingPlanes,ne),ds(b,ae,ne),j.updateMultisampleRenderTarget(Re),j.updateRenderTargetMipmap(Re),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,Ft=X.length;Nt<Ft;Nt++){const Ut=X[Nt],{object:yt,geometry:Qt,material:Ye,group:Tn}=Ut;if(Ye.side===er&&yt.layers.test(ne.layers)){const vt=Ye.side;Ye.side=Hn,Ye.needsUpdate=!0,Ti(yt,ae,ne,Qt,Ye,Tn),Ye.side=vt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(j.updateMultisampleRenderTarget(Re),j.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ce,Le,Qe),P.setClearColor(oe,ce),dt!==void 0&&(ne.viewport=dt),P.toneMapping=$e}function ds(b,X,ae){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Re=b.length;Z<Re;Z++){const Ue=b[Z],{object:Ce,geometry:Le,group:Qe}=Ue;let $e=Ue.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Ce.layers.test(ae.layers)&&Ti(Ce,X,ae,Le,$e,Qe)}}function Ti(b,X,ae,ne,Z,Re){b.onBeforeRender(P,X,ae,ne,Z,Re),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(P,X,ae,ne,b,Re),Z.transparent===!0&&Z.side===er&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,P.renderBufferDirect(ae,X,ne,Z,b,Re),Z.side=Ur,Z.needsUpdate=!0,P.renderBufferDirect(ae,X,ne,Z,b,Re),Z.side=er):P.renderBufferDirect(ae,X,ne,Z,b,Re),b.onAfterRender(P,X,ae,ne,Z,Re)}function Br(b,X,ae){X.isScene!==!0&&(X=Pt);const ne=E.get(b),Z=F.state.lights,Re=F.state.shadowsArray,Ue=Z.state.version,Ce=Te.getParameters(b,Z.state,Re,X,ae),Le=Te.getProgramCacheKey(Ce);let Qe=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=he.get(b.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",wt),Qe=new Map,ne.programs=Qe);let dt=Qe.get(Le);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ue)return co(b,Ce),dt}else Ce.uniforms=Te.getUniforms(b),b.onBeforeCompile(Ce,P),dt=Te.acquireProgram(Ce,Le),Qe.set(Le,dt),ne.uniforms=Ce.uniforms;const Je=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=we.uniform),co(b,Ce),ne.needsLights=ho(b),ne.lightsStateVersion=Ue,ne.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=dt,ne.uniformsList=null,dt}function la(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Jl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function co(b,X){const ae=E.get(b);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function uo(b,X,ae,ne,Z){X.isScene!==!0&&(X=Pt),j.resetTextureUnits();const Re=X.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ce=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:na,Le=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=he.get(ne.envMap||Ue,Le),$e=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,dt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!ae.morphAttributes.position,Nt=!!ae.morphAttributes.normal,Ft=!!ae.morphAttributes.color;let Ut=Fi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=P.toneMapping);const yt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qt=yt!==void 0?yt.length:0,Ye=E.get(ne),Tn=F.state.lights;if(He===!0&&(it===!0||b!==ee)){const Zt=b===ee&&ne.id===le;we.setState(ne,b,Zt)}let vt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Tn.state.version||Ye.outputColorSpace!==Ce||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Qe||ne.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==we.numPlanes||Ye.numIntersection!==we.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==dt||Ye.morphTargets!==Je||Ye.morphNormals!==Nt||Ye.morphColors!==Ft||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==Qt)&&(vt=!0):(vt=!0,Ye.__version=ne.version);let Nn=Ye.currentProgram;vt===!0&&(Nn=Br(ne,X,Z));let Dn=!1,jn=!1,ar=!1;const Ct=Nn.getUniforms(),ot=Ye.uniforms;if(Ge.useProgram(Nn.program)&&(Dn=!0,jn=!0,ar=!0),ne.id!==le&&(le=ne.id,jn=!0),Dn||ee!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ct.setValue(z,"projectionMatrix",b.projectionMatrix),Ct.setValue(z,"viewMatrix",b.matrixWorldInverse);const ni=Ct.map.cameraPosition;ni!==void 0&&ni.setValue(z,pt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&Ct.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,jn=!0,ar=!0)}if(Ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&Ct.setValue(z,"directionalShadowMap",Tn.state.directionalShadowMap,j),Tn.state.spotShadowMap.length>0&&Ct.setValue(z,"spotShadowMap",Tn.state.spotShadowMap,j),Tn.state.pointShadowMap.length>0&&Ct.setValue(z,"pointShadowMap",Tn.state.pointShadowMap,j)),Z.isSkinnedMesh){Ct.setOptional(z,Z,"bindMatrix"),Ct.setOptional(z,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ct.setValue(z,"boneTexture",Zt.boneTexture,j))}Z.isBatchedMesh&&(Ct.setOptional(z,Z,"batchingTexture"),Ct.setValue(z,"batchingTexture",Z._matricesTexture,j),Ct.setOptional(z,Z,"batchingIdTexture"),Ct.setValue(z,"batchingIdTexture",Z._indirectTexture,j),Ct.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ct.setValue(z,"batchingColorTexture",Z._colorsTexture,j));const hi=ae.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Ne.update(Z,ae,Nn),(jn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Ct.setValue(z,"receiveShadow",Z.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(ot.envMapIntensity.value=X.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=zE()),jn&&(Ct.setValue(z,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&fo(ot,ar),Re&&ne.fog===!0&&qe.refreshFogUniforms(ot,Re),qe.refreshMaterialUniforms(ot,ne,Ae,q,F.state.transmissionRenderTarget[b.id]),Jl.upload(z,la(Ye),ot,j)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jl.upload(z,la(Ye),ot,j),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(z,"center",Z.center),Ct.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ct.setValue(z,"normalMatrix",Z.normalMatrix),Ct.setValue(z,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Zt=ne.uniformsGroups;for(let ni=0,zi=Zt.length;ni<zi;ni++){const ca=Zt[ni];De.update(ca,Nn),De.bind(ca,Nn)}}return Nn}function fo(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function ho(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,X,ae){const ne=E.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=X,E.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const ae=E.get(b);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const po=z.createFramebuffer();this.setRenderTarget=function(b,X=0,ae=0){$=b,k=X,J=ae;let ne=null,Z=!1,Re=!1;if(b){const Ce=E.get(b);if(Ce.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),ie.copy(b.viewport),W.copy(b.scissor),Q=b.scissorTest,Ge.viewport(ie),Ge.scissor(W),Ge.setScissorTest(Q),le=-1;return}else if(Ce.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(Ce.__hasExternalTextures)j.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $e=b.depthTexture;if(Ce.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Re=!0);const Qe=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?ne=Qe[X][ae]:ne=Qe[X],Z=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?ne=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,ie.copy(b.viewport),W.copy(b.scissor),Q=b.scissorTest}else ie.copy(re).multiplyScalar(Ae).floor(),W.copy(me).multiplyScalar(Ae).floor(),Q=pe;if(ae!==0&&(ne=po),Ge.bindFramebuffer(z.FRAMEBUFFER,ne)&&Ge.drawBuffers(b,ne),Ge.viewport(ie),Ge.scissor(W),Ge.setScissorTest(Q),Z){const Ce=E.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,ae)}else if(Re){const Ce=X;for(let Le=0;Le<b.textures.length;Le++){const Qe=E.get(b.textures[Le]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Le,Qe.__webglTexture,ae,Ce)}}else if(b!==null&&ae!==0){const Ce=E.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,ae)}le=-1},this.readRenderTargetPixels=function(b,X,ae,ne,Z,Re,Ue,Ce=0){if(!(b&&b.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le){Ge.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Qe=b.textures[Ce],$e=Qe.format,dt=Qe.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!Et.textureFormatReadable($e)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(dt)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ne&&ae>=0&&ae<=b.height-Z&&z.readPixels(X,ae,ne,Z,be.convert($e),be.convert(dt),Re)}finally{const Qe=$!==null?E.get($).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,X,ae,ne,Z,Re,Ue,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le)if(X>=0&&X<=b.width-ne&&ae>=0&&ae<=b.height-Z){Ge.bindFramebuffer(z.FRAMEBUFFER,Le);const Qe=b.textures[Ce],$e=Qe.format,dt=Qe.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!Et.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.bufferData(z.PIXEL_PACK_BUFFER,Re.byteLength,z.STREAM_READ),z.readPixels(X,ae,ne,Z,be.convert($e),be.convert(dt),0);const Nt=$!==null?E.get($).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Nt);const Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await n_(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Re),z.deleteBuffer(Je),z.deleteSync(Ft),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ae=0){const ne=Math.pow(2,-ae),Z=Math.floor(b.image.width*ne),Re=Math.floor(b.image.height*ne),Ue=X!==null?X.x:0,Ce=X!==null?X.y:0;j.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ue,Ce,Z,Re),Ge.unbindTexture()};const fc=z.createFramebuffer(),hc=z.createFramebuffer();this.copyTextureToTexture=function(b,X,ae=null,ne=null,Z=0,Re=0){let Ue,Ce,Le,Qe,$e,dt,Je,Nt,Ft;const Ut=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Le=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,$e=ae.min.y,dt=ae.isBox3?ae.min.z:0;else{const ot=Math.pow(2,-Z);Ue=Math.floor(Ut.width*ot),Ce=Math.floor(Ut.height*ot),b.isDataArrayTexture?Le=Ut.depth:b.isData3DTexture?Le=Math.floor(Ut.depth*ot):Le=1,Qe=0,$e=0,dt=0}ne!==null?(Je=ne.x,Nt=ne.y,Ft=ne.z):(Je=0,Nt=0,Ft=0);const yt=be.convert(X.format),Qt=be.convert(X.type);let Ye;X.isData3DTexture?(j.setTexture3D(X,0),Ye=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),Ye=z.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Tn=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nn=z.getParameter(z.UNPACK_SKIP_PIXELS),Dn=z.getParameter(z.UNPACK_SKIP_ROWS),jn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,$e),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const ar=b.isDataArrayTexture||b.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const ot=E.get(b),hi=E.get(X),Zt=E.get(ot.__renderTarget),ni=E.get(hi.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let zi=0;zi<Le;zi++)ar&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(b).__webglTexture,Z,dt+zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Re,Ft+zi)),z.blitFramebuffer(Qe,$e,Ue,Ce,Je,Nt,Ue,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||E.has(b)){const ot=E.get(b),hi=E.get(X);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,fc),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,hc);for(let Zt=0;Zt<Le;Zt++)ar?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ot.__webglTexture,Z,dt+Zt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ot.__webglTexture,Z),Ct?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hi.__webglTexture,Re,Ft+Zt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hi.__webglTexture,Re),Z!==0?z.blitFramebuffer(Qe,$e,Ue,Ce,Je,Nt,Ue,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):Ct?z.copyTexSubImage3D(Ye,Re,Je,Nt,Ft+Zt,Qe,$e,Ue,Ce):z.copyTexSubImage2D(Ye,Re,Je,Nt,Qe,$e,Ue,Ce);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ct?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Ye,Re,Je,Nt,Ft,Ue,Ce,Le,yt,Qt,Ut.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Re,Je,Nt,Ft,Ue,Ce,Le,yt,Ut.data):z.texSubImage3D(Ye,Re,Je,Nt,Ft,Ue,Ce,Le,yt,Qt,Ut):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Re,Je,Nt,Ue,Ce,yt,Qt,Ut.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Re,Je,Nt,Ut.width,Ut.height,yt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,Re,Je,Nt,Ue,Ce,yt,Qt,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,Tn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jn),Re===0&&X.generateMipmaps&&z.generateMipmap(Ye),Ge.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){k=0,J=0,$=null,Ge.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const Cg={type:"change"},Kf={type:"start"},y0={type:"end"},Gl=new so,Rg=new Dr,HE=Math.cos(70*s_.DEG2RAD),sn=new Y,zn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ad=1e-6;class GE extends Y_{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Fr,this._lastTargetPosition=new Y,this._quat=new Fr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ig,this._sphericalDelta=new ig,this._scale=1,this._panOffset=new Y,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new Y,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WE.bind(this),this._onPointerDown=jE.bind(this),this._onPointerUp=XE.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=KE.bind(this),this._onKeyDown=QE.bind(this),this._onTouchStart=ZE.bind(this),this._onTouchMove=JE.bind(this),this._onMouseDown=YE.bind(this),this._onMouseMove=qE.bind(this),this._interceptControlDown=ew.bind(this),this._interceptControlUp=tw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cg),this.update(),this.state=It.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=zn:r>Math.PI&&(r-=zn),o<-Math.PI?o+=zn:o>Math.PI&&(o-=zn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=sn.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const m=new Y(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<HE?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ad||this._lastTargetPosition.distanceToSquared(this.target)>Ad?(this.dispatchEvent(Cg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zn/60*this.autoRotateSpeed*e:zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let l=sn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function jE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function WE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function XE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(y0),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=It.DOLLY;break;case Ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}break;case Ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Kf)}function qE(s){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KE(s){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(s.preventDefault(),this.dispatchEvent(Kf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(y0))}function QE(s){this.enabled!==!1&&this._handleKeyDown(s)}function ZE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=It.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=It.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Kf)}function JE(s){switch(this._trackPointer(s),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=It.NONE}}function $E(s){this.enabled!==!1&&s.preventDefault()}function ew(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $l={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class oa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nw=new qf(-1,1,1,-1,0,1);class iw extends Pn{constructor(){super(),this.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $n([0,2,0,0,2,0],2))}}const rw=new iw;class Qf{constructor(e){this._mesh=new ki(rw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sw extends oa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=to.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qf(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Pg extends oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class aw extends oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ow{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new nt);this._width=r.width,this._height=r.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sw($l),this.copyPass.material.blending=Ui,this.timer=new G_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Pg!==void 0&&(u instanceof Pg?r=!0:u instanceof aw&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lw extends oa{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _t}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const cw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ra extends oa{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Gn(l,u,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const S=new Gn(l,u,{type:Jn});S.texture.name="UnrealBloomPass.h"+v,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const x=new Gn(l,u,{type:Jn});x.texture.name="UnrealBloomPass.v"+v,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),l=Math.round(l/2),u=Math.round(u/2)}const d=cw;this.highPassUniforms=to.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new nt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=to.clone($l.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:$l.vertexShader,fragmentShader:$l.fragmentShader,premultipliedAlpha:!0,blending:Js,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new Yf,this._fsQuad=new Qf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=ra.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=ra.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}ra.BlurDirectionX=new nt(1,0);ra.BlurDirectionY=new nt(0,1);const jl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class uw extends oa{constructor(){super(),this.isOutputPass=!0,this.uniforms=to.clone(jl.uniforms),this.material=new f0({name:jl.name,uniforms:this.uniforms,vertexShader:jl.vertexShader,fragmentShader:jl.fragmentShader}),this._fsQuad=new Qf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Df?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===If?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const S0=`
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
`,dw=`
${S0}

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
`,fw=`
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
  vec3 primary   = vec3(0.788, 0.953, 0.114); // #C9F31D
  vec3 secondary = vec3(0.659, 0.800, 0.055); // #a8cc0e
  vec3 tertiary  = vec3(0.898, 1.000, 0.541); // #e5ff8a
  vec3 accent    = vec3(0.478, 0.722, 0.000); // #7ab800
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
`,hw=`
${S0}

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
`,pw=`
uniform float uTime;

varying float vAlpha;
varying float vProgress;
varying float vPulse;

void main() {
  vec3 primary  = vec3(0.788, 0.953, 0.114); // #C9F31D
  vec3 accent   = vec3(0.478, 0.722, 0.000); // #7ab800
  vec3 highlight= vec3(0.941, 1.000, 0.420); // #f0ff6b

  vec3 col = mix(accent, primary, vProgress);
  col = mix(col, highlight, vPulse * 0.6);

  // fade at ends
  float endFade = smoothstep(0.0, 0.1, vProgress) * smoothstep(1.0, 0.9, vProgress);

  gl_FragColor = vec4(col, vAlpha * endFade);
}
`;function mw(s,e,t){const r=Math.PI*(3-Math.sqrt(5)),o=1-s/(e-1)*2,l=Math.sqrt(1-o*o),u=r*s;return new Y(Math.cos(u)*l*t,o*t,Math.sin(u)*l*t)}function gw(){const s=[1,20,40,60,40,20],e=[0,2.5,4.5,6.5,8.5,10],t=[];t.push({pos:new Y(0,0,0),layer:0,type:0});for(let x=1;x<s.length;x++){const M=s[x];for(let w=0;w<M;w++){const C=mw(w,M,e[x]);t.push({pos:C,layer:x,type:x<=2?0:1})}}const r=t.length,o=new Float32Array(r*3),l=new Float32Array(r),u=new Float32Array(r),d=new Float32Array(r),h=new Float32Array(r*3);for(let x=0;x<r;x++){const M=t[x];o[x*3]=M.pos.x,o[x*3+1]=M.pos.y,o[x*3+2]=M.pos.z;const w=M.pos.clone().normalize();h[x*3]=w.x||0,h[x*3+1]=w.y||1,h[x*3+2]=w.z||0,l[x]=M.layer===0?2.8:M.type===0?1.6:.9+Math.random()*.5,u[x]=M.type,d[x]=M.layer}const m=[],v=[];let S=0;for(const x of s)v.push(S),S+=x;for(let x=0;x<s.length-1;x++){const M=v[x],w=M+s[x],C=v[x+1],_=C+s[x+1];for(let y=M;y<w;y++){const R=t[y].pos,L=[];for(let F=C;F<_;F++)L.push({idx:F,dist:R.distanceTo(t[F].pos)});L.sort((F,O)=>F.dist-O.dist);const D=x===0?8:3;for(let F=0;F<Math.min(D,L.length);F++)m.push({start:R.clone(),end:t[L[F].idx].pos.clone()})}}for(let x=2;x<s.length;x++){const M=v[x],w=M+s[x];for(let C=M;C<w;C+=3){const _=M+(C-M+1)%s[x];m.push({start:t[C].pos.clone(),end:t[_].pos.clone()})}}return{positions:o,sizes:l,types:u,layers:d,normals:h,connections:m}}function xw(s){const t=s.length*24,r=new Float32Array(t*3),o=new Float32Array(t*3),l=new Float32Array(t),u=new Float32Array(t);let d=0;for(let v=0;v<s.length;v++){const S=s[v];for(let x=0;x<24;x++){const M=d;r[M*3]=S.start.x,r[M*3+1]=S.start.y,r[M*3+2]=S.start.z,o[M*3]=S.end.x,o[M*3+1]=S.end.y,o[M*3+2]=S.end.z,l[M]=x/23,u[M]=v,d++}}const h=new Pn;h.setAttribute("position",new Xt(new Float32Array(t*3),3)),h.setAttribute("aStart",new Xt(r,3)),h.setAttribute("aEnd",new Xt(o,3)),h.setAttribute("aProgress",new Xt(l,1)),h.setAttribute("aConnectionIndex",new Xt(u,1));const m=[];for(let v=0;v<s.length;v++){const S=v*24;for(let x=0;x<23;x++)m.push(S+x,S+x+1)}return h.setIndex(m),h}function vw(){const e=new Float32Array(6e3),t=new Float32Array(2e3);for(let l=0;l<2e3;l++){const u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),h=40+Math.random()*60;e[l*3]=h*Math.sin(d)*Math.cos(u),e[l*3+1]=h*Math.sin(d)*Math.sin(u),e[l*3+2]=h*Math.cos(d),t[l]=.5+Math.random()*1.5}const r=new Pn;r.setAttribute("position",new Xt(e,3)),r.setAttribute("size",new Xt(t,1));const o=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:{uTime:{value:0}},vertexShader:`
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
    `});return new l0(r,o)}function _w(){const s=Gt.useRef(null);return Gt.useEffect(()=>{const e=s.current;if(!e)return;const t=e.parentElement;let r=t.clientWidth,o=t.clientHeight;const l=new VE({canvas:e,antialias:!0,alpha:!1});l.setSize(r,o),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(328968),l.toneMapping=ac,l.toneMappingExposure=1.2;const u=new __;u.fog=new Xf(328968,.018);const d=new di(60,r/o,.1,200);d.position.set(0,5,18);const h=new GE(d,e);h.enableDamping=!0,h.dampingFactor=.05,h.autoRotate=!0,h.autoRotateSpeed=.4,h.maxDistance=40,h.minDistance=6,h.enablePan=!1,h.rotateSpeed=.6;const m=new ow(l);m.addPass(new lw(u,d));const v=new ra(new nt(r,o),1,.5,.25);m.addPass(v),m.addPass(new uw);const S=gw(),x={uTime:{value:0},uPulseTime:{value:0},uPulseOrigin:{value:new Y(0,0,0)},uPulseActive:{value:0}},M=new Pn;M.setAttribute("position",new Xt(S.positions,3)),M.setAttribute("aBasePosition",new Xt(S.positions,3)),M.setAttribute("normal",new Xt(S.normals,3)),M.setAttribute("aSize",new Xt(S.sizes,1)),M.setAttribute("aType",new Xt(S.types,1)),M.setAttribute("aLayer",new Xt(S.layers,1));const w=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:x,vertexShader:dw,fragmentShader:fw}),C=new l0(M,w);u.add(C);const _=xw(S.connections),y=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:x,vertexShader:hw,fragmentShader:pw}),R=new N_(_,y);u.add(R);const L=vw();u.add(L),u.add(new z_(13234973,.02));const D=new W_,F=new nt;function O(k){const J=e.getBoundingClientRect();F.x=(k.clientX-J.left)/J.width*2-1,F.y=-((k.clientY-J.top)/J.height)*2+1,D.setFromCamera(F,d);const $=D.ray.direction.clone().multiplyScalar(8),le=D.ray.origin.clone().add($);x.uPulseOrigin.value.copy(le),x.uPulseTime.value=0,x.uPulseActive.value=1}e.addEventListener("pointerdown",O);function V(){r=t.clientWidth,o=t.clientHeight,d.aspect=r/o,d.updateProjectionMatrix(),l.setSize(r,o),m.setSize(r,o)}window.addEventListener("resize",V);const A=new X_;let P=0;function fe(){P=requestAnimationFrame(fe);const k=A.getElapsedTime();x.uTime.value=k,x.uPulseActive.value>0&&(x.uPulseTime.value+=A.getDelta()||.016,x.uPulseTime.value>3&&(x.uPulseActive.value=0)),L.material.uniforms.uTime.value=k,h.update(),m.render()}return fe(),()=>{cancelAnimationFrame(P),window.removeEventListener("resize",V),e.removeEventListener("pointerdown",O),h.dispose(),l.dispose(),m.dispose(),M.dispose(),w.dispose(),_.dispose(),y.dispose(),L.geometry.dispose(),L.material.dispose()}},[]),g.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}const yw="/niduxone/assets/intronidux-CK4_iifn.mp4";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=s=>{const e=Mw(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ww=Gt.createContext({}),Tw=()=>Gt.useContext(ww),bw=Gt.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,color:x="currentColor",className:M=""}=Tw()??{},w=r??S?Number(t??v)*24/Number(e??m):t??v;return Gt.createElement("svg",{ref:h,...Cd,width:e??m??Cd.width,height:e??m??Cd.height,stroke:s??x,strokeWidth:w,className:M0("lucide",M,o),...!l&&!Ew(d)&&{"aria-hidden":"true"},...d},[...u.map(([C,_])=>Gt.createElement(C,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=(s,e)=>{const t=Gt.forwardRef(({className:r,...o},l)=>Gt.createElement(bw,{ref:l,iconNode:e,className:M0(`lucide-${Sw(Ng(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Ng(s),t};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Cw=Rt("building-2",Aw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Dg=Rt("chart-column",Rw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],E0=Rt("circle-check-big",Pw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Wl=Rt("credit-card",Nw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lg=Rt("eye",Dw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Iw=Rt("file-text",Lw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ig=Rt("globe",Uw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ug=Rt("heart",Fw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],kw=Rt("layers",Ow);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zw=Rt("mail",Bw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Hw=Rt("map-pin",Vw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Fg=Rt("message-circle",Gw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Rd=Rt("package",jw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Xw=Rt("phone",Ww);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],qw=Rt("send",Yw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Qw=Rt("shield",Kw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Jw=Rt("shopping-bag",Zw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Og=Rt("shopping-cart",$w);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],tT=Rt("sparkles",eT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],iT=Rt("store",nT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sT=Rt("target",rT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],oT=Rt("timer",aT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],cT=Rt("trending-up",lT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],dT=Rt("triangle-alert",uT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],hT=Rt("trophy",fT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Pd=Rt("truck",pT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],gT=Rt("unlink",mT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],vT=Rt("user-x",xT);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yT=Rt("user",_T);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],MT=Rt("users",ST);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],wT=Rt("zap",ET),w0="/niduxone/assets/ecoomerceclick-DWH2IhCi.jpg",TT="/niduxone/assets/whatsapp-manual-CjxkaqAj.png",bT="/niduxone/assets/inventario-invisible-DdcoREvF.png",AT="/niduxone/assets/canales-desconectados-Dz55Tn1t.png",CT="/niduxone/assets/sin-fidelizacion-COamxeIG.png",RT="/niduxone/assets/decisiones-ciegas-osgInUpK.png",PT="/niduxone/assets/maria-Bixn4qQw.png",NT="/niduxone/assets/carlos-DaAMweFv.png",DT="/niduxone/assets/daniel-DnuLVIZ4.png",LT="/niduxone/assets/ana-B5WtU48w.png",T0="/niduxone/assets/ndx-pos-Cwemhkzt.png",b0="/niduxone/assets/ndx-ecommerce-NaUpCkQN.png",A0="/niduxone/assets/ndx-connect--f_D-pzj.png",C0="/niduxone/assets/ndx-loyalty-CM4CLttr.png",kg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKsklEQVR4nO2da3AVVx3Af+fs4+69NwnhFSCQlEJogIAUKKEtSh9CS5mx09Y+RmccFUerftBRZ/zg6De/OM6oo46O2lanWh+dsdpKi60tUkqhLylpAwQoTUjCIySBPO/efR4/LJQE0hAkqdv2/GZ25s7s/549+/+d3fO4M/eARqPRaDQajUaj0Wg+1IixBrazEQE24ExgfT6wKMQAEM/hyVHjzEsoUwJlwMzLqNeHmYNACMSjBY1ZiIASEJuAH1xmxT6sLAVagb7RguR7UxcNyZMx6tMBWkjq0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpIwPsBCVHOLs5/cHl/JHyv8bAkTWRlZMQrk+8akBCKLhIaUOclIeTInqd4l7BiEaIYlSIMqyyPI8APHJXpQXDIsVjomcUY4ocZLDNCCKUQWPqLMP1eeiCt6IjkQ+88534t5B1KAP6vxAhaycirAMVMFLjkHvcrP0DhMvREqMmgpyn/04waGjeI+9Qnxy+H8Jm0uryKxbhizL4+9qwnv6ddSAf0FRwjax6mtwblkOQOF3zxK1dKEGziVEVpaRu/8W7NWLsZctQOQdlB8Q7m9h8JGt+M83Eja0jijErJ2FtXIecloZ3rOvE+xpP6/xKBQR2U99FGNmOUHjEYKGZsI9reOSKngPhIicTck37yT7ybWoQY9Tb50g2NmEKoTvxMTHunFurcdaeiXmompEzsb9/QvnlaSQU/OUfuc+7JVXETQ2U/jlFtRgERDI8hyZO1dS8rW7MefPAttCWGbyVJkSc1kNZQuqiNo6GPjxYxT/9hLqdHF4MmoqyWysJ7N2GbnPb+D0vd8nPHwS1T+0ccRk716Ltbgad/MuVL/7/hEi8jbGlVPJ3n0DIu8g8g7OXdeDAv+5xnfiorbT+Lv2Ictz2KsXIWwb95HnIT7XxcnpZZhXz8W+vg5hmbiP7yTqHgAlECUZMvdcy6Qf3o8syRIcOIL33B6KT76C6hlEZG3sG5dQ8tU7MGurKf32vVgrFtD39V9DNGQ/AtNAODZySimyvIRJv/o6gz97AvfRneBHnH2sRC6DKMkiHAvM8e2GJ1SIUTUN+4alCMciOtqJnFZOpn4hUVM7/vN7ITzz3ogU/kv7MebNxKmZg3FFBUZtJdH+E+fKurIC+6OLEVIQd5wm3P02FHwQIKfkyd5+HXJSnqi1g8KvtuDvPkx08BiqGCBMA9XrIrIOzvqVmAvmYC+vwVxSTdjQNnLlpcC8qorMxlWEe9sIGlrG8Efhl8/EjbJyJtbK+eQ3bUC5PgM/fYxg90HMmtnYa+ow588YFu5va8TfsQ81UEDOmEz2vrWczYDImNira8nevZa438V9dBvh3jaUHyKn5DEXV5G5+Uy/8pdtuH96gWDnAeKT/ai+IvGpQYLXj1D42WaK/3gZVfQxF8zG2biKETuTMCI+3Y8sy+HcuorcpnXYNy2ZsFQNZcKEGJWTMWtnYy6sJu7uo/j4Lvxd+1BBiFkzC7N2zrDdS+KufqKDR4laOxGOjX3tYkRJJukDJucxrpqNMXcWqmeA4pbXiPtcAER5HqNqOiLngFKJ1D53xNYctZ8mbGon7uxB5JykDiMEKj8gOtZFeKQDYRnYN3wE57aVyOmlE5Stc0yYEPu6hVjL5yNMg6CplehAR5LI7j6MmtmYy+eDHJoMSdDUTtBwOBlNLZmLUTMT4ViYNbOwFlUhhCA6cQrvuT2ogaRDFqU55PTyZHgaxURvd6D8cORKIYiOnyI62YPIWBgzp6I41zecRRU8gv3NFP68laCpFWvpPJw71mDfWHdB7HgzMUIyAuf267HXLEW5HoMPPoEiwt/RSLC3BYII+5oFZDasGPa1qOUk/isHidpPIkpz5L64AVlZhrViPtbKWuKeAQp/3Aq+GCEvAsQYNwwaQ5hA4P78KQq/fYbw7WOYc2dQ8o07sdcvQtjG2K7zPzAhnXrm1hVYS+YmE7hYMen791P23S8QHesEERN39WDX1yJMiffUf0BJQECoCF46QOGhf1L63c+Q+8x68DzMhdWIrE14oA33D9uGXUv1DJwpFzAkZl0V0eEOlBuMULMY44oZGJXTUEWfsLUDgcm7GVKFEPfhbcipZeQ+fRPWioVM+d33kPncJWwWdWmMvxCpsOtrkdPKkhYrVPJKMSSyogzCMBkyZjMY8yoxF80hau5GuclYP2rrwt/VhCr6yLxD5pZVyeipvRP/1QOo/uGz4vhUP1FzB6p3EDEpT+bWlfjb96G83gu6B7N2FtayuciKycT9LsEbzVwss8r18Z7dg7BM8l+7A2P65OTEWJ/GS2R8hZgSq34e9seWInIO/vY3cJ/YieopgmUgK8qwr1uEtbAaWV6KUTmV3JduY/AnTxC1dAEQd/cTNBzB296As6Eeq+5KiGPcv2zDffjZc0PlM6h+j/Dgcdy/vkBu0wayn7iWuLOX4OUDBK8dIu53EY6NWVdN7nPrsFcvgigmbGzGe+pVLtrUYwh2NxN39SOmlZLfdBsiY49r2oYyrkKEZZBZtxxjzjTi7j68F/dSeOBp4t4iwpDIWeXER7uIb/gITkk2adE3X03x0R1Ebd3JmlQMasDD29aAs/4akDJpzU3tBG8cufCiClSvS3HLq9hr6jDmziB71xqM6unIGZNQPYOQy2CvWoBzWz3CsfF3v4W3/U2ilk7G9O7xI+L2brzNr2Avm49dvxCsiZnCjV+pAkSJTWbdCghj3M078P79Jqo3QGBABHF7L4UHt+K/2ITqK+BsXI0sL8WsqyJobEuGq4Aa9Cj+/WVy992ELC8haGxOhrM9xREvrQo+3jMN9IYPkPvcLVhXz8fZUE/unhtBSlAKNegSnThFeOgohd9swdv6JsTivHI84s5eomNdxN39qCELi6oY4u84QM83fkn5j7+CUVVB3NWPKly45nY5jHm48C0WZEBcA6wfMUAKjDlTMK+oIDp8nOJfXyR848gIFRbJjfQMoDyPqKWDuON0Mqs+04+gAD9C+R7xidN42xsJXtg3+s17IVHTcYLX9iNKMsiMhZxSlszSw4jwUDuFh5/Bfehf+Nv2QTG6oAhR4kAcozp7Cd5sIWw4Mnxx0Q+Jj/US9fShCkXCPW8THjxGfLxnLCn8BdD7Iw6NanDMPdNRNpaB+DKjbZsnBSJjAaCCMHkFXbB8fQZDIiwj6RyjGBVEw2OFSM5LmSTp/POj1cG2kmfflAgpk5YeRuDHqDCG6F3WQAyJMOSQa4YjTzss49yyfjRKeUNQUAe0zuHJgdHixvdFGKtzrfxinL2Zd0OpUSZ4F6lD0efsj1MKkXxWcNH2d7E6nSWIkgYyAUz87yH/N4ZOHido0jABfIB/wn1/ooWkDC0kZWgh7x2SMeR7zJ36mf3AHwA2X0alPrQI1Fsk23ePyqWMsmJggGQLas2lc9G91DUajUaj0Wg0Go1Go+G/A+k8TIiUWV4AAAAASUVORK5CYII=",Bg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAANlElEQVR4nO2aa4xd11WAv7XPOfcx71f8iD21p7HrevwoTdRHqJoUCUpCaJL2D9CGKAJE+QGIIpE+VESAgBo1EgktiYFSihAIIgdolYRGDYkgSUshNE0aO7YnGduxZ+wZ2+OZO/fOfZxz9uLHOffec+884hb+FPYnjXzm3OW119prr73XXnfA4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwdCLNh5paTHz5VwOd76l5St6GiGYk1aQPJvPSkghlBVO1Kql66ZK3a5uh0qVbU9lu3evJr2dLU96sYct68oDtAwQrMaXqKB7e2nJN/Vm7s/+qZGQ6x4rDkN7ePoJ87n7xjO3QZHXZNCrPz9mZ+8dyWsdY7QwIqUPNAVrOrBOQ5s8q+XUC0po0MvIbBASTcfYHkW/Krh0QpUBsLPMLee6+v0q50ZPRlfWR1Xo1Oy+ZeetajHEcc/cnP8n7P3CjJyYJiN822YCtEJdewIsj1F/BdhgrXT8bTXBWvjnJG00YGdms7g1W/Jq2fD/yG9kCJipgjFCpFDly1FKuDXTp6n5u+qiIZBZhK1iG7rmyaiktL4O0dbQComoIYvAiC165I+ipACqgqQGSGpCdjvZ7EFVUBMVmTO6Uzw6RyGvmvbY+b7rRngZtun5ltmwg37Ys8ywgXhWjQhAXujSuDkD3aJ1KNQ1M1rNkjFiVuGtRtAISi2AkwhACYNZZ+HHqSMu0dBFYWP0exUpizyr59H1rk1KwJEHvft/KeO0+NbrkU9k4jUwrP9P3zYzP2tJCOqfXGsFYwagga012xor2Z0mGq2q66CX5XLPnioBIEhCUWG3HTtTOkJalsva465mUvkgSUlA8TEt/nKx8BFqHoqLJVCIISvawjTGarF2LaZ1h7YlSLBZRrz2BCoLtykSw4mE0zQ1JNHav77VcEcDq+puZkkwmmljfqS/NAAW1aWYQrx7FeCCSLNSmWEorILY5Nc2ArHVO07ljd3+8sFLg5MxmglgwJmbnjssM5MpcrvcyPTOAWI+iqbJ9W4XeYp3Y5nltZohqNQCUiW0lBntDps8HlJZ7EBuAWCLPEgv0+3XGBhucubAZkQhFKaJsvqpM33CVQlgFIMLn9flBlku9iKmxdaTO+ECJzErpdGZtV9dGhO3j4/T39aM2YnbmDCsrK8SxsnXrZkZGRlBVzp49S71eZ+KtO1cF7cLFi/j5HGfPnl2lvr1lYfEFMGsEZB0LO3ZPNXznxR4+9UeXUPHwPI/P/GYPt71b+MazPXz+y0s01GdbX8TnPzvGvh0zXFoZ5NfuXWR+sQffE37r5y233+rzx4cjnnmuhsR1UJ/Yr2N9mNwW8zM3jXPfoQWEGrGJ8dRjbNDy/uv7+MTPGYq5KgvLm/jcFxd45Yhi/Bq3/rjHZ+/qxZjyFc3+egFRlFtu+Snu+f3fo5Avglimjh3nrrvu4vLiIvf+wb28573vwVrlTw8d4utPPsnfPfIIvu936Pnyl/6CmXOzHD58GJFki2tiugeVbmtk9a/Z+il7YFuF0PpU4wEqtS28fLxOWQxPf7tCJRqgGg6xEubxTQEBTp0POL+UIw76WQ59vvNqkYYtsnfUMLkrQGw/USNgUzHHO3cr+3YKakKqVmmo5QM/OsA1b/eZvjTG336jyIvHC8RGeeVkg2MzUM0VWbYjvDptqFmvaebGbHA1ieOY2z58O0NDQ0xNneD8+Tn2HTzA2/bsYXBggD17304jTM7gAwcPsnj5MocefpjHH3ucIAh4bWqKhx96mKeeeoqv/dNXCRsNDIKRdhhaT62JTg1qHrwb3Boyz4KKYAGrAcNF6KHK2Tcs4UovJ6Yjcp5HX07xAoN4Afg+r85VwfpMjIZs7o147VxMqQwf/9keHvj0KKODK9gg5r3XGr5yzyD3/EqOglkAhf68z0dvstz5kR7yfo1QSiyseNRNgaNHDYulAjuvVpAKZ+Y8ytUgsU/Wnu9WHKRdpHQTBB5B4GNRvvmt53nlle+hVskFAaOjowyPjPDcs88xPT3Nrt27KJVKPPQnD/HEE48jwImpKQ4dOsRLL79MZaWSZEbXmb0qQ5rYjNB6N422M2kwRMEEjI159A1WOX3Ocnq2SKnkMzrsUShaQiJCYkL1eO10RBhFjG/zGRyAuYWYmVkBf5mAS1gT0vAgMnVyuoCnZYQYUYOqT9n6XFxqQBwT1DwG8wa1OY6cKIMWuHZ3LwM5qKzkmJkXrLTLzm6fsreYzivzam9VY8CyVFpifn6ORqPBnj17CDyf5559lqNHj7Dpqk0Mp+dJq2vRrEI6Bu2sINYNiMmWjVxBpmdqybHNMHmgjzMLPs+8lKMe+ex4iwemhiXEaoNG3WPqaAwGtu80jGyyVCs+L/1nemNQm5bLkl58BTS9a6hQWSnwhw80+PMvKZ4art2v7N9dJqwIJ+cFwXLgGstYX45KNeDIdJCWLevTXbZv5KyIx32fu4+bbr6ZF154gQPvOAjAB3/yJ5jcN0mxp8juXbvwjMGkVZWqpjciEDFpAbVOhnTcc6VzW+ruAmW32e4tV4gp+nVuPJAnqg7wj8+ERBqyb9zgR3EyvvFYrheYnvXwPBgf7mXzYA8VC08fWSSMLaJJ60asouqlAbetQ85aS9iwVOsBkRY5NxezVAt4Y84wu1CkEIT0bs/TO2IIVfneVNx2fo3Vn/Wx299uqeZN/I6P3cGDDz7Avsm9/Mg79vPqS8/z9Nfv5R8e+13mL5zkXdddh8FgkHYJr6C6/p6zeslsWPNdCTEelmsmBM+LmJldxg8i3rKtkLR5JKneL100LJYUawv8y7+WmXrdQyXH+UsxtbKPiGBEEDEgJt3bk3aHIBhT4Zd/Kc9NN8eosVy8XOD0mRxzF3pphAZB+OfHGpyf84jVMjPjY6NiGpM3d3IjCVXFWsvkvkluvOFGrt6+DVE4/Fef4c6b3uCGiX/n8J/9Npu3bCbGZFb7m+0zmbL3fwu1ljiKGN1apti3QrTST1+fZfuOpGxMth3LqdcVtXmsl+c/TlRRfMIoT2mxwMVzRca2ps1Na5MJoPNq2Zs37B1bYaDf59EnFxFbpNEY5uixRRq2iF9X/uubJaqSI5/PMT9/mWp5gNzIMhobZNWFjSsq9ZsppgrGeISNOpXlSzz/td/gFz4yw5bBC+wcDNjU9wx/+ehLSFyjeTtHDIJJFtk6+J3DtG+N2aTq/u/S9WwFYjFJOwSLijLUbxkfNpyoRExu6WFTnxJaoRgbgtjnu6+HhFLgp39MuOODeU7NhvzOg0q1NsixWeF9W5ap+YI1OXxCjCbbmHoW9euoifCjIQKpInEOPxYa9QrfPhmBFnnn7hKf/njIv70YcOjv68xVc5yasxzsM1hjf6CVqGopl0uIKLd9+Da01uCRL36Kj73vW1z/rhr53CLWgmrIxJZL/PpHIyh4lEvzRFGDVl9rA9YNVba5uHFfFDxryWmELzWMaWCMJWdy7JmIKZpL7NqXJw7qmLiOiSMaNubUmSoFs8LBHVX2v3WJ6/bUuCp3kZzWOX6qQpgTfA0psEghtkkpbgT1GvheDWOqqFehxxiGWCZgiVPnQ87Nlhmx8+zeVOZtE3V27RXywRJeGHP69DJoqmu9pvAGiMATTzxOvV5jeHiIR//6AbaMPc+7ry9jTJ1GOEQjGiKKhlA7wHC/cvedA1y3e4bHvvqVpDpT3fAMaZmwohWTX35szhz/xTGk3HELzzYOO2hmkwhqlMulAkfeGGEkF7J/R53pc5bZy/1sHW+wZTDk1WMBGkfs3Z3n9dMRZZtj99U1hgdXCEPhxPEeVmyesYEaO8brvHJslKpGjAxWmByvEfvKwoLP0dlBvAj2TyxBvsCxqSIaWfoGGiwtB8QasnWkwq7tMaVGLydeyxPVPbaOV5gYLWON4r3Jdq7pheTMhWFu/4RluTaQdDEQ9kxOkgsCLp75Ltu3lPCkjrF+cuY1m4mirWqtHPVwcr7I4NAE0ydPtQoTtZYHv/AFPnTrhzwR6ay2K5mAiCm/eZ3bZbymRaUVQWJJG36AeGCSMjYRTvdgaTfErUpzZ85YJKAmOcgFRBUrgtHmdpp+vyDJs0kb2c2y30Cmskl6QbERfKvt78wyPmQXXbN0MN0BwaRfQSR4mrQ729fjpqbM3DRTURTbPAU3CEhntzedr1V1+JulcqbraVRbTbzkXdylqx2IJmbNfVVB4g5bTOqcaeptfRa3xlvrDiGpfl/bAV+/X5XpfGcnpak9s2ba395o67dVZA/wVX2p1WTONqXZKP+fl74/fHT0U1v+p01/Scr1jgS+QvQKgpClFZBilH6PYRto2qvvbOf+32Etd1afkYnz1osIjSHSNEMl2aCTpNugE5n291Rt65sYs9Z21tU6aQXEkEd1G42+G9KA2Faqfx/HyQ81HeW8RqiJMfEgBw9ELNd6EVUMluaXXRuioGKSgofmCZMEoLmJxXHM0PBQx8Dt5FQ1aOVv0FND7T+R+X+MBSSPxjnq0eZMH2yjrOhm47BpbCn0FDFibhGz5t9HORwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDv4bK9FsVVwm/p0AAAAASUVORK5CYII=",zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPEUlEQVR4nO2deZRU1Z3HP/dttXX1RoMsDSKLbN02gjGigoMLbuAoYoxOcEejJxqSOOOoo8mYaJJxxmXmTBhPEnJIJBqiCSfGhREVl5FRkU0QBYQGWzZ7r67tbXf+eG01bdNsVVS/Sd7nnD5QXe/+3u33rXvv7/5+v/cKAgICAgICAgICAgICAgIC/IPo6w4cjPpYNYAGKJ0/+eB2/tjDkw15mjp2+FaQTjEqgeuA7wHhPE26wBLgcWCzX0XxpSCdYoSBe4FvAeUFMm0DTwLfBtr9KIrvBKmPVStANTAPuJP8R8aXcYGFwKN4I8UusP280Pq6AwegBLgGmI8nhglsAFJ52jWAsUAp3jRo443A5jztFhQ/jpDBwCt4Fw9gH3AFsC1P01XAAuC0ztftQO3wZMPOPO0WFD+OEOjuUdnAvuHJhrwm/PpYtQlk8upVEcjXlQwoMIEgPqMgU1anm2rgLZj5Ukn3fmlAeX2suipPu1VfsqsAlfWx6nydBfDWI7MQbnSh1hANmATMKoCtEjxRviAKXA80FsDusP1eG3iudWuedgGeA1bhrXd5UShBFGAacE+B7O1PCXDzMbBrALcVyFYbsLoQhgq5hvw1r0cF+9v/mi+iLwkE8RmBID4jEMRnBIL4jEAQnxEI4jMCQXxGIIjPCATxGYEgPiMQxGcULYUrwmGEriEtC5k1QcrDbxsyQNdBSmQq7bXVNNR+FShlXgpGmhb2zgZwXYRhoFSUI8IhnM92I+0DR8WFpnnHxWPIRBK3tQ1pWd57sShC8T6v0rKQpgWum+dVODRFEUREI1T+2w8xasfjNDXTet9DmBs2gXtoUZR4nMrHH0IfNQKnsYmWe3+EtWkz2sABlNw0l+jF5wFg1zfQOG8+bmsres1Y4vOuwZhUR/vD/0HymT8d2PaAKsq+cyuhaaeTeeV1Er9cjP3JdkS8hAFPPoHSrwKAzBtv0/Gr32JtybfO4tAURxBVRT9xFMbEWqRlE7v6Cpx/fwJn156DN1RVQlNOITz9TNT+VTi7dqPES7z3DB1tyCD0cWO815oGmgqAEouhDT8eY8JY4rfdiL17L+Y7q5C2071fuo42rBpjwlisj7ciwiHv95qGXjsOdUB/AOyGXYhotHAX5CAUfQ0Rukb8uqsw6moOeaw2ZBDRSy5E7X/02dvQ5Doqf/p99AnjQPiu6qkHfbKoi5IY8XnXICKR3g/SVKKXXUxk5vn5nUxV0WvG0W/Bv2KMH+N7UfrMyzIm1hI+87Re31dKSgifPRW1qrLXYw4XoWnoY0YRu3oO2rDqvO0dS/pMEKW8jJKb5iIiPUt3haahjz+R0KS6gp1PhEJEZ19MbPZMhGEUzG6h6TNBhKETnjaF8N+c2eM9paof5ff/A0pF/kXv9rZ63GavsEQbWk3pd28jfPZUz5X2IUUXxFy11vOuHAclFiV68Qy0oUNy74tYjOicSwh95WScxmbs7TuQ1tFX12TfXU3rA/+Cs3sv4I3Mih/dS3j61AOOzr6m6IJk135A6rmXcJqaQVEInzONyEXnInTPA9eqB1F6+zyEYZB5/X9ILX0RbOuoz+c2tZD83R9p/fEj3qZSCPSxo6l89EGMGv95Xn0yZaWWPo9d7xWda0OHEJ4+FW3UCBCC8LlnoQ0ZhMxkyCx/HWvz1rzP5yY6SC19kfTyFchsNnfe+K035Hb6fqFPBLG27SC5+Jnc6/C00ym5eg6hUydRctXlSMvGfH8dqT+/dEQhloPhNrfQ+sDDJH/7bC6UEvrqZEJnfLUg9gtFny3qmTdXYm/f4XWiNE74rDMo/dY8tOHDkO3tdCz+PW5LW0HPaX28lY5FT2Fv2wHOsY9LHQ19Joi9o4HWBx/JvTbqJhC95AKEoZNa+gLJ3y0t/EmlJPv+Oppunu9NhUUIFh4pfSaINE1vlGyr936hqqCqOJ830b5gIdI0j9GJJebaDbTc80PsTs/LT/RdPkRK3M+bSD3/MjLjLbQ4Dqk/Po+19dhGVaVtk3ljJe2P/Rduo69uMSxSPkRKZDKJ25ZApjO5qUKaJullr2JMrME4qQZn9x6SzzwH+0VlpWniticQpo2b6OiK2LoSaVqePfBE7XQApOMgs1lkOpPLb/ToUjZLcslSlHgJpfO/CabZNYVJiUymcDuSXbaLNL0VRRBpWaSeW0Z2/YeYK99DJrvukTHXrCexYCHGqZMx31+HvW17t7bW5k/oWPQ0GAayrR23c5qRyRTmmvWIqLe5c3bvy7m0bmMT2bffxW1pwfzgw1775TY107HoKZSKMuwdDbjtCc92Nkty6QsopXGvj+s24DS3FO6CHISC7IrqY9UG8F3gx4Ww9/+Qu4FHhicb8l74gpy6zwgE8RmBID4jEMRn9N2THIRAqKpXnCAl0rG7ubsHRVG8KK2Uh3RHRchAKS8HJG5Ty4FLgoQ4eNRXyoLF1A5FcQURAm3EcIy6CeijRqAO6O+5rY6Dm8rgNjZibdpC6s/LejYNhwidOhlj0kmoVf1A18CysXc2YK7dgLl+IzKT6XG++C3XEZ15PtJxSCz4FemXVyDT6f3sholePgtjwlh6w1z7AZkVb+Hsy/fO7ENTPEE0DaN2HKW33oAxsRZ1WDVKSazr/c7NWHrZKz0EUSoriF15KdFZF2CcNMELmQsBrouz73OsDzeTfPoPdCxZCvuNAKWinNiVl3kVLlLiNOzC2rQZa8snuWNEyCA6cwbRWRf02vXkkqWY6zf+ZQminziS+LxriM65xMtp2zZ2/U6cxmYQAiUWQR0yuGftlGFQcu3Xid90DdrQwUjbxtywCadhF2r1YIzxY1DPPg6lohynrY308y93tQ2FuvIdQqCUlyH2/xB0IrOml7zqBZk1/7J26mgqsUsvJvb12QjDwNm9l9YHHib9368hbQsQCEVBxCI9wuLhs06n9PabUfv3w21rp/3RBXQsehppmoiSGJWPP0Rk+jSMuglUPHAP1qYtuYCls3cf6ReWE//m9ch0mvSyV7E+3tLNvpvooPl799F630O9dt9NppCJRKGvygEpTuWibqDXjM1VeySf/gPp5a/j7N3X/cBGui2u6uCBRGZM90qBhCC7eh2Jn/86F+Ig0UHbg4+ijzgB/cSRaMOqiZwzjY5PP/NiWK5L608fo2PxEhAK1pZtudhXDtfFbWrGbTqGF+AIKM4IUUS39UKpqkSJRejhU0m6eTP62NEYk+o8rwrIvrO6Swy8Y811GzA3foR2fDUiEsaYWIN6XH/shl2Al1M3m4oThyoExdmHOK63VnQSmz2L6OxZaMOqEYbeazNt8MBuhW1fZBi7ISXWx1tyIXy1ejDqkEGF63uRKU6018ySXvYqocl1aCNPQMSilP3jfKJ/eyGZ194i+7+ryK5ag7NnvylMCJT+Vd0qF3tMcZ24jc05Z0CtrMzVc2knDEOtrMBNprA+2nLAtr0iBEq8BH3MaGQ6jf3pZ7ht7Udm4ygozghxJZk3V5JYuDiXJxeGjlFXQ3zeXMrunk/ZXd/GqB3XNWKE8IrZtK7PTC6R9SVkKt3lBamKt+EEopfNpOzu+cRvmutlJI8ERaCNHkH5fXcSv+1G9DGjjqz9UVK00Imzaw+JBQvZ97XrSD75e9wWr5pQxGKeMDd+gwFLFxO7crbXQEpv577/Drm33bJjd70nJbLz/9rggYTPnEL4rNNRj+t/RP0VoRDG2NGEz56KUTcBpbQ45UJFjWVJ0yL73lqa7/oB+752Pcmnnu3aXSsK6oAqSu+4GW3E8bm7pWS2K8XQ63pjhEDxvDNp2dBZ6Wht3Y40LURJCaGJtUfUVyUeRx/v7d6dvZ/jtBbiOWeHcd6inGV/bBu3rZ3se2tovvN+9s25no7fLMFpbAIhUIcOIX7jNwBwWlq9CsdO1IHHHdCkOnAAQvPEclvbcnN9ZsVbuC0tqFX9iF11OSJ6kNsfvoR+4kiiM2cgTRNzzXrs7cV5mmzfRXttB7etncyKt2h/9Gdklr8BeKEMo3Y8AM6efTif7c410UcO72lHVTHGjs7d/eTs2oOzx0vzWh9vxVy/EREJE5ryFUKnnJwrWT0YIhYleulFaCNPwNr8Cdl3V+M2FacYwhfhd7ct0ZWzdiVuwisusDZuIvve6tz6ED7rDJTysm5tQ6dNxphchwiHkJkM5vtrsb8QUUoSv/gN9rZ61OP6U/6Du4hdcSlC793V1keNoOKBe4j93RxkMkXHwsVk33638H90LxRHECEwTprg7boHDuj6lAqBNnQI0UsvIjx1CgAyk8ldAKepBfO9tbiJDgD0MaMomXslIuZtMpV+FcRvnOst2ELgNrWQXbUWnK4tp7luA4knFuE0NROadBKld9xC/JZrMU6u7ap+V1UvKnDReZR//++JXX05QtfJrl5H+uXXcucvBsUJnWgakYvOI3LBOdjbd3i3H6fSIECrHoJeMw59xHAA7K3bSb3QGSB0HDLvrMLa+BHGKRNRysuI33It6tAh2Dt2op9wPJEZ0xGRCLIjSfrlFd0iueCNvuQzf0JEI5TecQt6zVhKb7+Z8HnTO+8daUFEo6iDBqCPHOFNl5pK5k2vbsveUdxvUChK1YmIRum/6GdELjyn65dfuKn7xa4yb7xN6/0/IbtqTbf22vFDqXjwn4ic7118XBfpON5+Q1HAdWlfsJDWf34YmTrwY3iFrhOZMZ34bTd4o1FRuhJP+yWo3PYEHb98kvb//AXO3s8PNzFVsKqTI9wtHZj5RqkKTAHOPeABrovT1Izb1IwwDISmegkm18Wp/5Tsynfp+PmvafvJ41jb6ntcBDeRILP8dewdn6LEoohQCKGqOI1NpJe9StuDj3hV7QeLyLoudv1O0i+9grV1O2Sz3pSlKLjNXv1W6tnnaP7OPaReXI7b2nYkWcJXgJWPWe2HmfLsnaLVZQldA133FlRFya0j0rTAdjqflnDwJzwIw+jcvaudCSrppWSzpvfv4VxAIRC67u1pNK1bKlhaNjKbOawHGnyJgo2QoiWovtiwSXpPBB3ShmnmX4QtZWHsHCN84fYGdBEI4jMCQXxGIIjPCATxGYEgPiMQxGcEgviMQBCfUUhBfP8dgceQgm37CxXLAi8M489nHh17THz+teABAQEBAQEBAQEBAQEBAQFHw/8BPLraqUirU7oAAAAASUVORK5CYII=",Vg="/niduxone/assets/mugui-C3aQOAQL.png",Hg="/niduxone/assets/pequeno-Cn4UQbOv.png",Gg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHRElEQVR4nO3Ze0xUVx7A8e+9d2ZAGIb3aAVfgI8CvkVFK4ui1Whta1frKkrxQbdqq65sfT+wEjRatWvR0tp2uzHZR2qi20d0242ptFjxUXeV1biCrlGRN1Rbs53X3T8s7Aoycyfd1DT+PgmEzLm/O79zfufMOXcAIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC/GQpzX90SUhWgeUPMJeHkqaqd1SFXZcvngXA1Kp984+f0kOvDigEPADqg81FtGa4IJqqEtP5Ebp1jcVqDTYUY0UhsNVriqJgj47CbDZ7jQ0ICMAWEoKqtnyqYtI0IiMjMJlaL+z22UKsqKr/8y4iPIzuXbtgj45C8zNeAWy2EL/fEwwWxGIxM3P6MxTt3klR4U4KNq4lNuYRrzE6OpPdGv086n83KsBisVC4cxs9E+K8xj82Yji5SxZhs9lacpg4PoM1K5YRGmI1kjYA0555iqRHexm+HiCxT09e21bAG4U72LPrVcZlpPlVVHtUJFkzp/tdSDBYkLQRqeTMncPs53KYMjWTY1+WMnjgAHQvMTpgQcEE6Pq9LZGR4T5neXhYKN27dcWkmQgMMJOTPYsXcuaRX7CV+sYmI2nTyR5F1qwZZGX+4vuMfLMGB/F20eu8894+np46k6W5K+ibnExwcJCheIA5z2WyeNEv6dzJbjimmaGCxMR0prziMk23bvNvh4M/7j/IBx8fvmfmt6agUKK6uKQYG4j2BAaYmZ89mwnjx7FoaS4NTbcMx2bOeJabN6tITkokvkc3QzEhwVYsZgtl5y/wncPJ9cpqtr+2m9u3vzEUHxEextSpUygrO8+E8WNRFG+j1JahghSXHCMhIY5lLy0gOioSHdB1XwOtExPQgXCTGT9zamE2m8hd8iJJSYnkLFzKlavXDcd2tEczNmMMu/a8ybEvS8nKnNF6qd5XbUMDRz4rZkt+HiOHp6BpKh4DcXB3TObMmkHpiVOsf6WAOdlZ2KOjDOcMBgvyr6vXWLTk1/To0Y19v32LtSuWYfOxsXvcbtJffpE+E8YY/LBoKynxUQYPGsBvdhVRVV3jV+zUKU9yqfwSZ8vOc+To5wwZMojYWO/7HoDL5aJg6w7OnStjzcpc3ircycD+yegGehERFsq0aVMoevMdyi5c5Mb1SjLSR/m1SgwVRNd1zv3jAqs3bCJvUwG9eibw/PxsLBYvJyVdp1PHaMJCQw0n09qNG5VUXL7Cghfm0iEwwHCcSdN4fOxojh8/SVBgIDU1ddTV1fPkExMNxTd9fYs9e99j0ZKXOfXVGVbkLiWpT2+vMTqQkjKYpsYm6uobiI6M5NDhT5g/N4ugDh0M5+6zIIqiEB4ehqqq3L79LcdPnGbFmg0MSxlCTGdvM07B7fJgtQbfs9eoiopJ03C73D6Tq62ro/CNvZhMJvLWrSQqMsJAlyApsTe2EBsZo9PJW7eKXy1eSIjVSnraKMxm74eJwMAAQm02XC4XV65e4+1391Hf0MCokale90xbiJXxY8fwzbd3WLd6ORvXryI1dRhhYWEMHzrEUN7Q9km9DbPZzOZX1rH33d9x+szdx3vdo+N0OHA52x9UTdO4XllJQlwcmqbhct+9tld8DwIDA2hoaDCQnsLVazfYvHU7W/I3snr5MlauzcPhdLXfIVVlwfPzeH13EQc/Otzy5ZA9OortWzbROyGesgsX241PfyyV9PQ01mzIx+324NF1PB4PDofTa6YpgwYQH9ed6bPm4HR57r6ow7zsTDJGp1H8RQlOA5PQ5wpxuVxUVFxh/erlDB0ykNShg9m0YTUlx0uprLrZfqCi8MFHh7Dbo1iQk82oEcOYNGEc+RvX8f6BP1NV431P0P/n9/XKavLyt9CtayyZ03+OSdPajevaJZYB/ftRevoMHt2Dx3P3p6q6hk/+eoScedlenykuVVxh+NAUnnpiIv379WX2zGexhVg5WvxFu7tIQICFMT8bxVdn/s53DlfLe3p0D7//03769O5J3+REr/1t1tKz0Ai7AmxofYGu65SeOEVVdTWLX1rI8GFDOXDwQ/7w/gHcbu8Vr62t58hnxcTHdWfy5El06minYOsOPj70qc8DT3BQEE6Hg7+dK8PhcNDQ2ERxyTEmPD6W6to6ampq7xuXnjaSf5aXc/TzkjZt1dU1JCX24eTJUzhd919ljU1f85dPjzA7czpPT56Ew+lk87adXLvR/uSLjelMfFx39h/4kIbGxnvanE4XJk1D00yUl1fQ+sipKsodReHVxvpqHdp+2+t1hJtPC76PvPen67p/53Jdb9MBn/dozq2da/zJQVNU3LrHYKre7ts8Xm3bNVWtUxU6Xr541gMG9pDWb/pD+PuQdL9B9XkPH+3+5GC0GL7v+38+9oofT+sVsuqBZPFwu8P3/wsRQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHET9x/ABGhS3mQ8ucCAAAAAElFTkSuQmCC",jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKMElEQVR4nO3YfWwc9ZnA8e/zm9m1443cCO9OcyjKBXA2jnf7evkDECUkJME4Lg209EWoVaW7U1tKxb1FbYR6EaoiBH0Tl57UN7XpC2+loaSsA4E0paW0HFBEYe2kS+qzcsiXzDppatmOsXfnuT9mNrd+S3onFfjj+Ugre2af+f2eZ34zv/ntgDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYY8+eTuTs6NqxuQyQPTJ48VKk09mc3rVmukS4n0uOS8toB51r8SlgqRwAdm/NpwXUCpyeHRkeWXNSxSkTa5vWojIwePHIaIHfN2nbxXRGRZRrpiDgph6VybaFEs5u72oEVs3Y6mXIpb7iRQ0Pu2u4LgG7xXLvWouM4KVf3D0zPbTPX070MtCi+1671aEScHAn7B6aa+rwYcMDQ6BNHokw+YMlfX5AHask+Oq5ec6E4WbZAyiOjTxw5nd3ctRRYOTdvSXnD1Tl5k3Q2i7ckvdRrSx/w2tJP53oLQVxgwbnW1H1eW/opb2nLCtfi/7tr8X+n9ah49riW9BWuxR9wae/vxHPOa/G/51r8gQU+NwAEfYVOSXlPIPIUsE+cPAd8Nbupq3WB4nAtfs+8tlLeAMrdHZvWtMVtFgm2Fq4Szz0tnnsK6BffPSdO7gu2FjsbbWXyAbnewkbx3VPie3Gc536LyAPB1uLFTX3udS3+PtfipwE0vggPuBb/Hq/F95OYXYvUeV3y/ZUL5S2wO+grpufW6c+vnBDVWxG5T4R/zOSDHeJJD3Al8PWwVH4+2Fo4gMgmcbIJeCnoKwK8D6hpLTrY1No0qt9WZfzsHuWlzOocINuBIvBp4AWU7QifdK3+XuDJBcakcTXdD/wOcKhuQORmrzX1G+BelMsR2QeMo/olRA6r6gYR+SDCyo6N+c0nD1VOZ1bn1iHyE2AS5SsIA0lbHwD25a5Z+57qgcOnF7owFhGh+jVVppr2lWdFKA8hPBfnzdUINwPPta3J7pn8/ejZsHkDEpYGeMu6lT9uWd7+IURuaevMHQB2A2H9zMxOAETuB3Yg8r5MPvhK/cxM1luS+hgwiMgzTc1N4/SO6iODrzb3EQ8IK4FpYBh4KZqu/T3K3aBHz1P8vrBUvh8g6CvuB34LrA+2Fn6EcDvgtB5dX3108FmATD7Yk1mdG0LkX73W1HXA94HbktpvDPvLv0ra+g7KzxDWS8p7O/DL8+TRLELk9mp/+dRiARpFj1QfHdyT9HUIeBrYAOxpjpt/hwB/ev5YLddb2C5OXhYnPwAuBG46+bOzQ/kq8BiwbcmqjhUu7RWBZSjfrD42GGXyQWMqbNUZ/UJ2S9c48bz7xdHHj4xMvFIls+at3wKuAh4BjrgWv4zqPYqE5yxd9cbctYUCKMDlxHfOPpAVwKXACxrp843wiUoYtV3UsVdS3udwclnQV7wX6EYZmhk782wjLiyVSU7OrBOU1P6NoK9YI57is8DxOTFOa9Gd2S1d8R0SRbtGD1ZmxYiT63PXFi6Ja+CK5On9YPPdAYsMSFL4UZCvA/8AHKpPvPZQc/K53sIT4uTDLu1dhbIBYRz4xpxWfPG96yQ+adPAt4ARAI30YSJ9j/huI/F0tw2RGwQ+scBJaapMNonHlSDtyZ7btBYdFM+tTOqZdilv9sPSczXiHBpztg86WZ+YnvdQXcBSoLdpe/5CBZz47gbBxe1F0W7mDprIRvG4HIgXAKr/HNV1/7yGFsui+uggqP482bzn5M9fmbVKEScPE98ptyJsBF5UZGhOM5OgVwsUBN4FVACCvmJanHxYfLc8LJXvAtajXANMAbc23WEL2S5Q0Ei/luQ/VH1scBrhVeJ5+93RdL27EbzssotAdRPQivIfqNaAo4h0tv5V+9m4TD4g19N9Q3bL2t3ZzV1XNfU3BLxLoEA9ehvJBTVHDbgsqbOAzDsPaKS3CRRQ/bc4bzl2Zmj0/Kus2aRxwLwDBT0N/BRYB6xEuafa//IC7cvFCnmFPHBpsLW4PJqaAeVW4HtBX3ELkEVoJb6CR0DPdeWOnSiVQ3GyCzgG3JHdvKY9LJWngDuApS7t7Qv6ituCvmI+3ZH5F/HcLmBIa/WHw/4BNNKvAmlE9jbiMvngc+K777q0t82l/SNN/dWA0ROlcjj+h9Ew2V5I59k6RS4N+orBrG9Vx06UyqEqO4EQ4Y5MPpi3yjrPgBAtlsCJ0gCoPpLEhKA/XCAsDTwI/KLp0zt68PfTCLclbfcDA8TPkuMo2ycq1XPlEwGEpfIp4F5glWtJfSDVkUEj/Snxqu0CYC/wMnAn8VV+Y/XA4RBg5tTk4yifIp4+GnG7iK/+904cPXG8qb9Fc2jikvyb69wy5xgAqvsHxlHdA3SifDyTnz1uiz9DAIRfAu9g4dsURA4RT0VTYf/AeNM3EfC3xPPvLKp6DGCiEh5s68y9TZysI/7BdwzVZ//4zPBiK5WDwN8Qr8oa7iQ+oWMA1f0DtUw++Hbb6tx+EVkHBEAlmqm/OHrg8FjjoNPP/GfUtjr4ztJ88BjCOmA5cCR6rfbin174r7GZkxON0I8Qn+zGdB0B7wWm9X8v1J3A3Qvkeyz5+6sk78Y2quwS4QGNorEFjjPGLGreu6w3Qq6n+wqE9ze2tR49TcQhSbntgENkWpw8MF4Jy5OVkLduLaDwT4gMh6XyQwDZnrVvF2Sb+O6usFSeyl2z9hagVD1weDjoLVyo8GkRApRfRPXofnHyTuCmpjQerD46+OvXt/L5zvdQf12I794pnrtOPPffyWcMJxeI524Wz/niZDnQn7mo40KA+kx9BSLbgc/nertbAZzvrRLf7US5PegrIinvekl5Qa6nux0ne8VJNyKv4GSHOOkSz3WL565o6nPqXDm+Xt4UA5IYBwaBQfFc45f2FPBl4genn7xlxqW8HqAEnBbn1jW1MYLwweR3BxAPdvLvTWGpfJfWovXiucGm9k8Bp2pjU8N/qcL+L869ynp9rQR2EK9kPkM8QO3Ey+YAeLJ+ZuZYrqd7GSKfQRkCliJ8vmNDfmvSxpDWo93iubuBxlvjduJV2BTA5NDoKZQosyaA+LXI5iTuceLBeUO9mQbkxYnKiQ2NjSWrsp3Eg/Ip4HYgrE9MT3kdmV6gDeEl4l/+H/My6XzjOHHyEKrrEbkZANUXEOkCbgn6ik8CnwW+0Oiz8b/f3jr5ly7wz/GmmLI00lNEemyiUqXxIdJpjfSoRnpcI92ukV7uv6W1G/QyjfTLYam887UT4ztQ7kW1V1XHUB0O+wciRD6L6o9RnfrjM8MjqH4C1Y9qXR9AmUT1OJGOEWkXkd6XfHre6PMAb5JVVvLuyk1UwrNvBdouyTrxXBqYUgWJX600XhIyUQmjpmMbzrbRdknWF89FTXFp4hlhaqISNt5IN88QtUasMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjzP/L/wDmKdfxtb6J0AAAAABJRU5ErkJggg==",Zn=({to:s,label:e=""})=>g.jsx("div",{className:"flex justify-center mt-12 md:mt-16",children:g.jsxs("button",{onClick:()=>{var t;return(t=document.getElementById(s))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"group flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity",children:[e&&g.jsx("span",{className:"text-[10px] tracking-[0.15em] uppercase text-[var(--nx-text-4)] group-hover:text-[var(--nx-accent)] transition-colors",children:e}),g.jsx("div",{className:"w-8 h-8 rounded-full border border-[var(--nx-border)] group-hover:border-[#C9F31D]/50 flex items-center justify-center transition-all group-hover:shadow-[0_0_15px_rgba(201,243,29,0.15)]",children:g.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-[var(--nx-text-3)] group-hover:text-[var(--nx-accent)] transition-colors",children:g.jsx("path",{d:"M6 2v8m0 0l3-3m-3 3L3 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),Nd=()=>g.jsx("div",{className:"w-5 h-5 rounded-full bg-[#C9F31D] flex items-center justify-center shrink-0",children:g.jsx(E0,{className:"w-3.5 h-3.5 text-black"})}),IT=({className:s="w-5 h-5"})=>g.jsx("svg",{className:s,viewBox:"0 0 20 20",fill:"none",children:g.jsx("path",{d:"M4 10h12m0 0l-4-4m4 4l-4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Vn=IT,UT=()=>g.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[g.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),g.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),g.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),FT=()=>g.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),OT=({className:s=""})=>g.jsx("div",{className:`pointer-events-none ${s}`,children:g.jsx("div",{className:"w-[360px] h-[360px] rounded-full bg-[#C9F31D] opacity-20 blur-[120px]"})}),Wg=[T0,b0,A0,C0,w0];function kT(){const[s,e]=Gt.useState(0);return Gt.useEffect(()=>{const t=setInterval(()=>{e(r=>(r+1)%Wg.length)},4e3);return()=>clearInterval(t)},[]),g.jsxs("section",{id:"productos","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[Wg.map((t,r)=>g.jsx("img",{src:t,alt:"",className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${s===r?"opacity-75":"opacity-0"}`},r)),g.jsx("div",{className:"absolute inset-0 bg-black/40 pointer-events-none"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none"}),g.jsxs("div",{className:"relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"LA SOLUCIÓN"}),g.jsxs("h2",{className:"mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1]",children:["Un ecosistema diseñado",g.jsx("br",{}),g.jsx("span",{className:"text-[var(--nx-accent)]",children:"para vender más"})]}),g.jsx("p",{className:"mt-6 text-white text-base md:text-xl max-w-2xl mx-auto drop-shadow-lg",children:"Cuatro productos. Un solo lugar. Todo conectado."}),g.jsx(Zn,{to:"ndx-pos",label:"Descubrir productos"})]})]})}const Xg=[{label:"NDX POS",desc:"Punto de venta",details:"Sistema de punto de venta intuitivo que conecta su tienda física con todo el ecosistema NIDUX. Cobre, facture y controle inventario en tiempo real.",features:["Múltiples métodos de pago","Facturación electrónica","Control de inventario"]},{label:"NDX Ecommerce",desc:"Tienda online",details:"Su tienda online profesional, lista para vender 24/7. Sincronizada con su inventario físico y con herramientas de marketing integradas.",features:["Tienda personalizable","Sync de inventario","Pasarelas de pago"]},{label:"NDX Connect",desc:"WhatsApp Commerce",details:"Venda por WhatsApp con catálogo automatizado, carrito de compras y seguimiento de pedidos. Todo conectado a su inventario.",features:["Catálogo automatizado","Carrito conversacional","Seguimiento en tiempo real"]},{label:"NDX Loyalty",desc:"Fidelización QPONS",details:"Programa de fidelización integrado. Recompense a sus clientes y haga que vuelvan una y otra vez con cupones y beneficios exclusivos.",features:["Puntos y recompensas","Cupones automáticos","Análisis de clientes"]}];function BT(s,e){const[t,r]=Gt.useState([]),o=Gt.useRef(0),l=Gt.useRef(e);return l.current=e,Gt.useEffect(()=>{let u;const d=typeof window<"u"?Math.min(window.innerWidth*.2,320):280,h=d*.55,m=.4,v=()=>{l.current||(o.current+=.003);const S=[];for(let x=0;x<s;x++){const M=o.current+x/s*Math.PI*2,w=Math.cos(M)*d,C=Math.sin(M)*h,_=Math.sin(M),y=C*Math.cos(m)+_*h*Math.sin(m)*.4,R=_<0,L=(_+1)/2,D=R?.75+L*.15:.9+L*.15,F=R?.5+L*.2:.8+L*.2;S.push({x:w,y,z:_,scale:D,opacity:F,behind:R})}r(S),u=requestAnimationFrame(v)};return v(),()=>cancelAnimationFrame(u)},[s]),t}function zT({product:s,pos:e,index:t,onHover:r,isHovered:o}){const l=Gt.useRef(null),[u,d]=Gt.useState(null);return Gt.useEffect(()=>{if(o&&l.current){const h=l.current.getBoundingClientRect(),m=h.left+h.width/2,x=h.top<260+20,M=Math.max(170,Math.min(m,window.innerWidth-170)),w=x?h.bottom+12:h.top-12;d({top:w,left:M,placeBelow:x})}},[o,e]),g.jsxs(g.Fragment,{children:[g.jsx("div",{ref:l,className:"absolute pointer-events-auto",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) translate(${e.x}px, ${e.y}px) scale(${o?1.2:e.scale})`,zIndex:o?100:e.behind?1:20,opacity:o?1:e.opacity,transition:"transform 0.3s ease-out, opacity 0.3s ease-out"},onMouseEnter:()=>r(t),onMouseLeave:()=>r(null),children:g.jsxs("div",{className:`w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full backdrop-blur-2xl border-2 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${o?"bg-[#C9F31D]/25 border-[#C9F31D] shadow-[0_0_60px_rgba(201,243,29,0.35),0_0_120px_rgba(201,243,29,0.1)]":"bg-[#0a0a0a]/70 border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:border-[#C9F31D]/40"}`,children:[g.jsx("p",{className:`text-xs md:text-sm lg:text-base font-bold leading-tight transition-colors duration-300 ${o?"text-[#C9F31D]":"text-white"}`,children:s.label.replace("NDX ","")}),g.jsx("span",{className:`text-[9px] md:text-[11px] mt-1 transition-colors duration-300 ${o?"text-white/80":"text-white/40"}`,children:s.desc})]})}),o&&u&&g.jsx("div",{className:"fixed z-[100] w-80 pointer-events-none animate-popup-in",style:{top:u.top,left:u.left,transform:u.placeBelow?"translate(-50%, 0)":"translate(-50%, -100%)"},children:g.jsxs("div",{className:"relative backdrop-blur-2xl bg-[#0a0a0a]/95 border border-[#C9F31D]/25 rounded-2xl p-5 shadow-[0_24px_64px_rgba(0,0,0,0.7),0_0_40px_rgba(201,243,29,0.1)]",children:[g.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#0a0a0a]/95 border-[#C9F31D]/25 ${u.placeBelow?"-top-2 border-l border-t":"-bottom-2 border-r border-b"}`}),g.jsx("h4",{className:"text-[#C9F31D] font-bold text-base mb-2",children:s.label}),g.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-4",children:s.details}),g.jsx("ul",{className:"space-y-2",children:s.features.map((h,m)=>g.jsxs("li",{className:"flex items-center gap-2.5 text-sm text-white/80",children:[g.jsxs("svg",{className:"w-4 h-4 shrink-0 text-[#C9F31D]",viewBox:"0 0 20 20",fill:"none",children:[g.jsx("circle",{cx:"10",cy:"10",r:"10",fill:"currentColor"}),g.jsx("path",{d:"M6 10.5l2.5 2.5L14 8",stroke:"#0a0a0a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),h]},m))})]})})]})}function VT(){const[s,e]=Gt.useState(null),t=BT(Xg.length,s!==null);return g.jsxs(g.Fragment,{children:[g.jsxs("section",{id:"inicio",className:"relative h-screen overflow-hidden bg-[#050508] snap-start shrink-0",children:[g.jsx("div",{className:"absolute inset-0 z-0",children:g.jsx(_w,{})}),g.jsx("div",{className:"absolute inset-0 z-[1] pointer-events-none",style:{background:"radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)"}}),g.jsx("div",{className:"absolute top-12 md:top-16 left-0 right-0 z-[1] pointer-events-none text-center px-4",children:g.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] opacity-60",children:["Comercio ",g.jsx("span",{className:"text-[#C9F31D]",children:"unificado"})]})}),g.jsx("div",{className:"absolute inset-0 z-[2] flex items-center justify-center pointer-events-none -translate-y-[8vh]",children:g.jsxs("div",{className:"relative w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] flex items-center justify-center",children:[g.jsx("div",{className:"absolute w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] shadow-[0_0_80px_rgba(201,243,29,0.06),0_0_120px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(201,243,29,0.02)]",style:{zIndex:10}}),g.jsx("div",{className:"absolute w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border border-[#C9F31D]/[0.06]",style:{zIndex:10}}),g.jsx("img",{src:Dd,alt:"NIDUX ONE",className:"relative w-40 md:w-56 lg:w-64 pointer-events-none",style:{zIndex:50,filter:"drop-shadow(0 0 50px rgba(201,243,29,0.12)) drop-shadow(0 2px 10px rgba(0,0,0,0.6))"}}),t.length>0&&Xg.map((r,o)=>g.jsx(zT,{product:r,pos:t[o],index:o,onHover:e,isHovered:s===o},o))]})}),g.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-[3] pointer-events-none pb-8",children:g.jsxs("div",{className:"text-center px-4",children:[g.jsx("p",{className:"text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-1 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]",children:"Tienda. Online. WhatsApp. Lealtad."}),g.jsx("p",{className:"text-[#C9F31D] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]",children:"Un solo ecosistema. Cero complicaciones."}),g.jsxs("button",{onClick:()=>{var r;return(r=document.getElementById("hero-tagline"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},className:"pointer-events-auto group flex flex-col items-center gap-4 mx-auto cursor-pointer","aria-label":"Scroll down",children:[g.jsx("span",{className:"text-sm md:text-base tracking-[0.15em] uppercase text-white/60 group-hover:text-[#C9F31D] transition-colors font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",children:"Descubrir"}),g.jsx("div",{className:"w-12 h-20 rounded-full border-2 border-white/30 group-hover:border-[#C9F31D] flex items-start justify-center pt-3 transition-all duration-300 shadow-[0_0_30px_rgba(201,243,29,0.1)] group-hover:shadow-[0_0_40px_rgba(201,243,29,0.25)]",children:g.jsx("div",{className:"w-2 h-4 rounded-full bg-[#C9F31D] animate-scroll-dot shadow-[0_0_10px_rgba(201,243,29,0.5)]"})})]})]})})]}),g.jsxs("section",{id:"hero-tagline",className:"relative h-screen flex items-center justify-center overflow-hidden snap-start shrink-0",children:[g.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover",children:g.jsx("source",{src:yw,type:"video/mp4"})}),g.jsx("div",{className:"absolute inset-0 bg-black/65"}),g.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(201,243,29,0.05) 0%, transparent 60%)"}}),g.jsxs("div",{"data-reveal":"scale",className:"relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center",children:[g.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight drop-shadow-2xl",children:["Venda más.",g.jsx("br",{}),g.jsx("span",{className:"text-[#C9F31D]",children:"En todos los canales."}),g.jsx("br",{}),g.jsx("span",{className:"text-white/80",children:"Desde un solo lugar."})]}),g.jsx("p",{className:"mt-8 text-base md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed drop-shadow-lg",children:"Controle su tienda física, su tienda online y sus ventas por WhatsApp con una sola plataforma diseñada para hacer crecer su negocio."}),g.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row gap-4 justify-center",children:[g.jsxs("a",{href:"#agendar",className:"inline-flex items-center justify-center gap-3 bg-[#C9F31D] text-black font-bold text-sm px-8 py-4 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(201,243,29,0.2)]",children:["Agendar Demo",g.jsx(Vn,{className:"w-4 h-4 text-black"})]}),g.jsx("a",{href:"#contacto",className:"inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-medium text-sm px-8 py-4 rounded-full hover:bg-white/10 hover:text-white transition backdrop-blur-sm",children:"Conozca más"})]}),g.jsxs("p",{className:"mt-6 text-xs text-white/30 flex items-center gap-1.5 justify-center",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#C9F31D]"}),"+2,000 comercios activos en Costa Rica"]}),g.jsx(Zn,{to:"about",label:"Seguir"})]})]}),g.jsx("style",{children:`
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
      `})]})}function HT(){Gt.useEffect(()=>{const s=document.querySelectorAll("[data-reveal], [data-fade]"),e=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&(d.target.classList.add("revealed"),e.unobserve(d.target))})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});s.forEach(u=>e.observe(u));const t=document.querySelectorAll("[data-parallax]");function r(){const u=window.scrollY;t.forEach(d=>{const h=parseFloat(d.dataset.parallax||"0.1"),v=(d.getBoundingClientRect().top+u-window.innerHeight/2)*h;d.style.transform=`translateY(${v}px)`})}const o=document.querySelectorAll("[data-counter]"),l=new IntersectionObserver(u=>{u.forEach(d=>{if(d.isIntersecting){const h=d.target,m=parseInt(h.dataset.counter||"0"),v=h.dataset.counterSuffix||"";let S=0;const M=m/(2e3/16),w=()=>{S=Math.min(S+M,m),h.textContent=Math.floor(S).toLocaleString()+v,S<m&&requestAnimationFrame(w)};w(),l.unobserve(h)}})},{threshold:.5});return o.forEach(u=>l.observe(u)),window.addEventListener("scroll",r,{passive:!0}),r(),()=>{e.disconnect(),l.disconnect(),window.removeEventListener("scroll",r)}},[])}function GT(){const[s,e]=Gt.useState(!1);return Gt.useEffect(()=>{const t=()=>{const o=document.querySelector("[data-snap-container]"),l=o?o.scrollTop:window.scrollY;e(l>window.innerHeight*.8)};window.addEventListener("scroll",t,{passive:!0});const r=document.querySelector("[data-snap-container]");return r==null||r.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),r==null||r.removeEventListener("scroll",t)}},[]),s}function jT(){const[s,e]=Gt.useState(!1),[t,r]=Gt.useState(()=>typeof window<"u"&&localStorage.getItem("nidux-theme")||"dark"),o=GT();HT();const l=()=>{const d=t==="dark"?"light":"dark";r(d),localStorage.setItem("nidux-theme",d)},u=["Inicio","Productos","Planes","Alianzas","Contacto"];return g.jsxs("div",{"data-snap-container":!0,"data-theme":t,className:"h-screen bg-[var(--nx-bg)] text-[var(--nx-text)] font-['Poppins'] overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth",children:[g.jsxs("header",{className:`fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 -translate-y-full pointer-events-none"}`,children:[g.jsxs("nav",{className:"w-full max-w-[1320px] backdrop-blur-[12.5px] bg-[rgba(255,255,255,0.06)] border border-white/10 rounded-[100px] flex items-center justify-between px-6 py-3",children:[g.jsx("img",{src:Dd,alt:"NIDUX",className:"h-8 md:h-10 w-auto"}),g.jsx("ul",{className:"hidden lg:flex items-center gap-8 text-sm text-white/80 font-['Poppins']",children:u.map(d=>g.jsx("li",{children:g.jsx("a",{href:`#${d.toLowerCase()}`,className:"hover:text-white transition-colors",children:d})},d))}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("button",{onClick:l,className:"w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-[#C9F31D]/50 transition-colors","aria-label":"Toggle theme",children:t==="dark"?g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[g.jsx("circle",{cx:"12",cy:"12",r:"5"}),g.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),g.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),g.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),g.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),g.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),g.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),g.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),g.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:g.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),g.jsxs("a",{href:"#agendar",className:"hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#C9F31D] to-[#a8cc0e] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition",children:["Agendar Demo",g.jsx("span",{className:"w-6 h-6 rounded-full bg-black/20 flex items-center justify-center",children:g.jsx(Vn,{className:"w-3.5 h-3.5 text-black"})})]})]}),g.jsx("button",{className:"lg:hidden",onClick:()=>e(!s),"aria-label":"Toggle menu",children:s?g.jsx(FT,{}):g.jsx(UT,{})})]}),s&&g.jsxs("div",{className:"absolute top-full mt-2 inset-x-4 backdrop-blur-[20px] bg-[rgba(10,10,10,0.95)] border border-white/10 rounded-3xl p-6 flex flex-col gap-4 lg:hidden",children:[u.map(d=>g.jsx("a",{href:`#${d.toLowerCase()}`,className:"text-lg text-white/80 hover:text-white font-['Poppins']",onClick:()=>e(!1),children:d},d)),g.jsxs("a",{href:"#agendar",className:"mt-2 flex items-center justify-center gap-2 bg-[#C9F31D] text-black font-semibold text-sm px-5 py-3 rounded-full",onClick:()=>e(!1),children:["Agendar Demo",g.jsx(Vn,{className:"w-4 h-4 text-black"})]})]})]}),g.jsx(VT,{}),g.jsx("section",{id:"about","data-reveal":!0,className:"relative py-10 md:py-14 overflow-hidden snap-start shrink-0",style:{background:"linear-gradient(135deg, #0d1117 0%, #0a0a0a 40%, #0f1210 100%)"},children:g.jsxs("div",{className:"relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row gap-5 lg:gap-12 mb-8 md:mb-10",children:[g.jsxs("div",{"data-fade":"left",className:"lg:w-1/2",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"Quiénes Somos"}),g.jsxs("h2",{"data-line-draw":!0,className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] pb-2",children:["Impulsando el"," ",g.jsx("span",{className:"text-[var(--nx-accent)] underline decoration-[#C9F31D]/30 underline-offset-4",children:"comercio digital"})," ","en la región"]})]}),g.jsx("div",{"data-fade":"right","data-delay":"2",className:"lg:w-1/2 flex items-end",children:g.jsx("p",{className:"text-[var(--nx-text-3)] text-base md:text-lg leading-relaxed",children:"Con más de 13 años de experiencia, NIDUX es la empresa líder en comercio electrónico en Costa Rica. Nacimos con una misión: que cualquier negocio, sin importar su tamaño, pueda vender en línea y crecer."})})]}),g.jsxs("div",{className:"flex flex-col lg:flex-row gap-10 lg:gap-16",children:[g.jsxs("div",{className:"lg:w-1/2 grid grid-cols-2 gap-5",children:[g.jsxs("div",{"data-fade":!0,"data-hover-lift":!0,"data-glow":!0,className:"bg-[var(--nx-accent)] rounded-2xl p-6 md:p-8 flex flex-col justify-between row-span-2",children:[g.jsx(MT,{className:"w-10 h-10 text-black/30 mb-4"}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-black font-bold text-4xl md:text-5xl mb-1",children:"+2,000"}),g.jsx("p",{className:"text-black font-semibold text-lg mb-2",children:"comercios activos"}),g.jsx("p",{className:"text-black/50 text-sm leading-relaxed",children:"Confían en nosotros para gestionar sus ventas en tienda física, online y WhatsApp."})]}),g.jsx("a",{href:"#contacto",className:"self-end mt-4 w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform",children:g.jsx(Vn,{className:"w-5 h-5 text-white"})})]}),g.jsxs("div",{"data-fade":!0,"data-delay":"1","data-hover-lift":!0,className:"rounded-2xl border border-[var(--nx-border)] bg-[var(--nx-surface)] p-6 flex flex-col justify-center",children:[g.jsx(hT,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),g.jsx("p",{"data-counter":"13","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),g.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Años liderando el eCommerce"})]}),g.jsxs("div",{"data-fade":!0,"data-delay":"2","data-hover-lift":!0,className:"rounded-2xl border border-[var(--nx-border)] bg-[var(--nx-surface)] p-6 flex flex-col justify-center",children:[g.jsx(Jw,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),g.jsx("p",{"data-counter":"1800","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),g.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Tiendas creadas"})]}),g.jsxs("div",{"data-fade":!0,"data-delay":"3","data-hover-lift":!0,className:"rounded-2xl border border-[#C9F31D]/15 bg-[#C9F31D]/[0.04] p-6 flex flex-col justify-center",children:[g.jsx(Hw,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),g.jsx("p",{"data-counter":"6","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),g.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Países en la región"})]})]}),g.jsxs("div",{className:"lg:w-1/2 flex flex-col gap-8 lg:gap-10",children:[[{icon:g.jsx(sT,{className:"w-5 h-5"}),title:"Nuestra Misión",desc:"Democratizar el comercio electrónico en Costa Rica y la región, brindando herramientas accesibles para que cualquier negocio pueda vender en línea con éxito."},{icon:g.jsx(tT,{className:"w-5 h-5"}),title:"Nuestra Visión",desc:"Ser la plataforma líder de comercio unificado en Latinoamérica, donde cada comercio pueda conectar todos sus canales de venta en un solo ecosistema."},{icon:g.jsx(E0,{className:"w-5 h-5"}),title:"Lo Que Nos Diferencia",desc:"No solo ofrecemos tecnología: acompañamos a cada cliente con capacitación, soporte local y mejoras continuas gratuitas. Tu éxito es nuestro éxito."}].map((d,h,m)=>g.jsxs("div",{className:"flex gap-4",children:[g.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[g.jsx("div",{className:"w-11 h-11 rounded-full bg-[var(--nx-accent)] flex items-center justify-center text-black",children:d.icon}),h<m.length-1&&g.jsx("div",{className:"w-px flex-1 bg-[#C9F31D]/20 mt-2"})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-lg mb-1",children:d.title}),g.jsx("p",{className:"text-[var(--nx-text-3)] text-sm leading-relaxed",children:d.desc})]})]},h)),g.jsx("a",{href:"#contacto",className:"mt-2 inline-flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm px-7 py-3.5 rounded-full hover:brightness-110 transition self-start",children:"Conozca más sobre nosotros"})]})]}),g.jsxs("div",{className:"mt-8 md:mt-12 rounded-2xl bg-[#C9F31D] py-6 md:py-8 overflow-hidden",children:[g.jsx("p",{className:"text-center text-xs text-black/50 uppercase tracking-widest mb-5 font-semibold",children:"Empresas que confían en nosotros"}),g.jsx("div",{className:"overflow-hidden",children:g.jsx("div",{className:"flex items-center gap-14 md:gap-20 animate-logo-marquee",children:[{src:Vg,name:"Mugui"},{src:Hg,name:"Pequeño Mundo"},{src:Gg,name:"Sukasa"},{src:jg,name:"Yves Rocher"},{src:kg,name:"Avon"},{src:Bg,name:"Matra"},{src:zg,name:"Miniso"},{src:Vg,name:"Mugui"},{src:Hg,name:"Pequeño Mundo"},{src:Gg,name:"Sukasa"},{src:jg,name:"Yves Rocher"},{src:kg,name:"Avon"},{src:Bg,name:"Matra"},{src:zg,name:"Miniso"}].map((d,h)=>g.jsx("img",{src:d.src,alt:d.name,className:"h-10 md:h-14 lg:h-16 w-auto object-contain shrink-0"},h))})})]}),g.jsx("style",{children:`
            @keyframes logo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-logo-marquee {
              animation: logo-marquee 20s linear infinite;
            }
          `}),g.jsx(Zn,{to:"el-problema"})]})}),g.jsx("section",{id:"el-problema","data-reveal":!0,className:"relative py-10 md:py-14 snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(180deg, #0a0c0a 0%, #0d0a10 50%, #0a0a0a 100%)"},children:g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[g.jsxs("div",{className:"text-center mb-8 md:mb-10",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"EL PROBLEMA"}),g.jsx("h2",{className:"mt-2 text-2xl sm:text-3xl md:text-4xl font-bold",children:"Sabemos lo que estás viviendo"})]}),g.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[320px] gap-3 md:gap-4",children:[{title:"WhatsApp manual",subtitle:"Ventas perdidas",desc:"Respondés mensajes uno por uno, perdés tiempo y dejás clientes esperando. Sin catálogo automatizado, sin seguimiento real.",img:TT,icon:g.jsx(dT,{className:"w-10 h-10 md:w-14 md:h-14"}),span:"lg:col-span-2 lg:row-span-2"},{title:"Inventario invisible",subtitle:"Stock descontrolado",desc:"No sabés cuánto tenés, cuánto vendiste ni qué se está agotando. Cada canal tiene su propio conteo y nada cuadra.",img:bT,icon:g.jsx(Rd,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Canales desconectados",subtitle:"Datos dispersos",desc:"Su tienda física, su ecommerce y WhatsApp no se hablan entre sí. Cada uno opera como negocio aparte.",img:AT,icon:g.jsx(gT,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Sin fidelización",subtitle:"Clientes que no vuelven",desc:"No sabés quién te compra, con qué frecuencia ni cuánto gasta. Sin datos, no hay forma de fidelizar ni crecer.",img:CT,icon:g.jsx(vT,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Decisiones a ciegas",subtitle:"Cero métricas",desc:"No tiene dashboards, no sabe qué producto vende más ni cuál canal genera más ingresos. Decide por intuición.",img:RT,icon:g.jsx(Lg,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"}].map((d,h)=>g.jsxs("div",{className:`group relative rounded-2xl border border-[var(--nx-border)] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#C9F31D]/40 hover:shadow-[0_0_30px_rgba(201,243,29,0.08)] ${d.span}`,children:[g.jsx("img",{src:d.img,alt:d.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"}),g.jsxs("div",{className:"absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10",children:[g.jsx("div",{className:"text-white/20 group-hover:text-[#C9F31D]/40 transition-colors",children:d.icon}),g.jsxs("div",{children:[g.jsx("p",{className:"text-[10px] text-[var(--nx-accent)] uppercase tracking-wider font-semibold",children:d.subtitle}),g.jsx("h3",{className:"text-base md:text-lg font-bold mt-0.5",children:d.title}),g.jsx("p",{className:"text-xs md:text-sm text-[var(--nx-text-3)] leading-relaxed mt-2 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out",children:d.desc}),g.jsxs("div",{className:"flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:[g.jsx("span",{className:"text-[10px] text-[#C9F31D]/60",children:"NIDUX lo resuelve"}),g.jsx("div",{className:"w-7 h-7 rounded-full bg-[var(--nx-accent)] flex items-center justify-center",children:g.jsx(Vn,{className:"w-3 h-3 text-black"})})]})]})]})]},h))}),g.jsxs("div",{className:"mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3",children:[g.jsx("p",{className:"text-sm text-[var(--nx-text-3)]",children:"Pruebe NIDUX One gratis por 14 días."}),g.jsxs("a",{href:"#agendar",className:"inline-flex items-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Quiero solucionar esto ",g.jsx(Vn,{className:"w-4 h-4"})]})]}),g.jsx(Zn,{to:"productos"})]})}),g.jsx(kT,{}),g.jsxs("section",{id:"ndx-pos","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[g.jsx("img",{src:T0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),g.jsx("div",{className:"absolute inset-0 bg-black/50"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10 lg:gap-16",children:[g.jsxs("div",{className:"lg:w-1/2",children:[g.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"01"}),g.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",g.jsx("span",{className:"text-[#C9F31D]",children:"POS"})]}),g.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md drop-shadow",children:"Punto de venta inteligente para su tienda física. Rápido, confiable y conectado con todo su ecosistema."}),g.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#C9F31D] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",g.jsx(Vn,{className:"w-4 h-4 text-black"})]})]}),g.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Cobro con múltiples métodos de pago",desc:"Efectivo, tarjeta, SINPE Móvil, QR — todo en un solo punto.",icon:g.jsx(Wl,{className:"w-5 h-5"})},{title:"Facturación electrónica integrada",desc:"Facture al instante, cumpla con Hacienda sin esfuerzo.",icon:g.jsx(Iw,{className:"w-5 h-5"})},{title:"Control de inventario en tiempo real",desc:"Sepa qué tiene, qué se vendió y cuándo reponer. Automático.",icon:g.jsx(Rd,{className:"w-5 h-5"})}].map((d,h)=>g.jsxs("div",{className:"group flex gap-4 p-5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#C9F31D]/30 transition-all",children:[g.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#C9F31D] flex items-center justify-center text-black",children:d.icon}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#C9F31D] transition-colors",children:d.title}),g.jsx("p",{className:"text-sm text-white/50 mt-1",children:d.desc})]})]},h))})]}),g.jsx(Zn,{to:"ndx-ecommerce"})]})]}),g.jsxs("section",{id:"ndx-ecommerce","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[g.jsx("img",{src:b0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),g.jsx("div",{className:"absolute inset-0 bg-black/50"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",children:[g.jsxs("div",{className:"lg:w-1/2 lg:text-right",children:[g.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"02"}),g.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",g.jsx("span",{className:"text-[#C9F31D]",children:"Ecommerce"})]}),g.jsxs("div",{className:"inline-flex items-center gap-2 mt-2 bg-[#C9F31D]/10 border border-[#C9F31D]/20 rounded-full px-3 py-1",children:[g.jsx("span",{className:"text-[#C9F31D] text-sm",children:"★"}),g.jsx("span",{className:"text-[#C9F31D] text-xs font-semibold",children:"Más popular"})]}),g.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md lg:ml-auto drop-shadow",children:"Su tienda online profesional, lista para vender 24/7 sin complicaciones técnicas. Sincronizada con todo."}),g.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#C9F31D] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",g.jsx(Vn,{className:"w-4 h-4 text-black"})]})]}),g.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Tienda online personalizable",desc:"Diseño profesional sin saber programar. Su marca, su estilo.",icon:g.jsx(Ig,{className:"w-5 h-5"})},{title:"Sincronización automática de inventario",desc:"Venda online y offline sin descuadres. Stock siempre al día.",icon:g.jsx(kw,{className:"w-5 h-5"})},{title:"Pasarelas de pago integradas",desc:"Acepte pagos nacionales e internacionales sin fricciones.",icon:g.jsx(Wl,{className:"w-5 h-5"})}].map((d,h)=>g.jsxs("div",{className:"group flex gap-4 p-5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#C9F31D]/30 transition-all",children:[g.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#C9F31D] flex items-center justify-center text-black",children:d.icon}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#C9F31D] transition-colors",children:d.title}),g.jsx("p",{className:"text-sm text-white/50 mt-1",children:d.desc})]})]},h))})]}),g.jsx(Zn,{to:"ndx-connect"})]})]}),g.jsxs("section",{id:"ndx-connect","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[g.jsx("img",{src:A0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),g.jsx("div",{className:"absolute inset-0 bg-black/50"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10 lg:gap-16",children:[g.jsxs("div",{className:"lg:w-1/2",children:[g.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"03"}),g.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",g.jsx("span",{className:"text-[#C9F31D]",children:"Connect"})]}),g.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md drop-shadow",children:"Venda por WhatsApp con catálogo automático, carrito de compras y seguimiento integrado a su inventario."}),g.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#C9F31D] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",g.jsx(Vn,{className:"w-4 h-4 text-black"})]})]}),g.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Catálogo automatizado en WhatsApp",desc:"Sus productos disponibles en WhatsApp, siempre actualizados.",icon:g.jsx(Fg,{className:"w-5 h-5"})},{title:"Carrito de compras conversacional",desc:"El cliente elige, agrega y paga sin salir de la conversación.",icon:g.jsx(Og,{className:"w-5 h-5"})},{title:"Seguimiento de pedidos en tiempo real",desc:"Tanto usted como su cliente saben el estado de cada pedido.",icon:g.jsx(Pd,{className:"w-5 h-5"})}].map((d,h)=>g.jsxs("div",{className:"group flex gap-4 p-5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#C9F31D]/30 transition-all",children:[g.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#C9F31D] flex items-center justify-center text-black",children:d.icon}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#C9F31D] transition-colors",children:d.title}),g.jsx("p",{className:"text-sm text-white/50 mt-1",children:d.desc})]})]},h))})]}),g.jsx(Zn,{to:"ndx-loyalty"})]})]}),g.jsxs("section",{id:"ndx-loyalty","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[g.jsx("img",{src:C0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),g.jsx("div",{className:"absolute inset-0 bg-black/50"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",children:[g.jsxs("div",{className:"lg:w-1/2 lg:text-right",children:[g.jsx("span",{className:"text-[#C9F31D]/20 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"04"}),g.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",g.jsx("span",{className:"text-[#C9F31D]",children:"Loyalty"})]}),g.jsx("p",{className:"text-white/40 text-sm mt-1",children:"(QPONS)"}),g.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md lg:ml-auto drop-shadow",children:"Fidelice clientes con puntos, cupones y recompensas automáticas. Haga que vuelvan una y otra vez."}),g.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#C9F31D] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",g.jsx(Vn,{className:"w-4 h-4 text-black"})]})]}),g.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Programa de puntos y recompensas",desc:"Sus clientes acumulan puntos con cada compra. Automático.",icon:g.jsx(Ug,{className:"w-5 h-5"})},{title:"Cupones y promociones automáticas",desc:"Envíe ofertas personalizadas sin mover un dedo.",icon:g.jsx(wT,{className:"w-5 h-5"})},{title:"Análisis de comportamiento del cliente",desc:"Sepa quién compra, qué prefiere y cuándo vuelve.",icon:g.jsx(Dg,{className:"w-5 h-5"})}].map((d,h)=>g.jsxs("div",{className:"group flex gap-4 p-5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-[#C9F31D]/30 transition-all",children:[g.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#C9F31D] flex items-center justify-center text-black",children:d.icon}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#C9F31D] transition-colors",children:d.title}),g.jsx("p",{className:"text-sm text-white/50 mt-1",children:d.desc})]})]},h))})]}),g.jsx(Zn,{to:"planes"})]})]}),g.jsx("section",{id:"planes","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(201,243,29,0.04) 0%, #0a0a0a 50%)"},children:g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[g.jsxs("div",{className:"text-center mb-12",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"PLANES"}),g.jsx("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold",children:"Elija el plan que mejor se adapte"})]}),g.jsx("div",{className:"flex justify-center mb-10",children:g.jsxs("div",{className:"inline-flex rounded-full border border-[#C9F31D]/40 p-1",children:[g.jsx("button",{className:"px-6 py-2 rounded-full bg-[var(--nx-accent)] text-black text-sm font-semibold",children:"Mensual"}),g.jsx("button",{className:"px-6 py-2 rounded-full text-[var(--nx-text-3)] text-sm font-medium hover:text-[var(--nx-text)] transition",children:"Anual"})]})}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center",children:[g.jsxs("div",{className:"relative border border-[var(--nx-border)] rounded-2xl p-7 md:p-9 flex flex-col bg-[var(--nx-bg)] hover:border-[#C9F31D]/20 transition-colors",children:[g.jsx("h3",{className:"text-2xl md:text-3xl font-bold",children:"Plus"}),g.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[g.jsx("span",{className:"text-5xl md:text-6xl font-bold text-[var(--nx-accent)]",children:"$29"}),g.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),g.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Para negocios que inician en digital"}),g.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center border border-[var(--nx-accent)] text-[var(--nx-accent)] font-semibold text-sm py-3.5 rounded-full hover:bg-[var(--nx-accent)] hover:text-black transition-all",children:"Elegir Plan"}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),g.jsx("ul",{className:"space-y-3",children:["POS + Ecommerce","1 sucursal","Facturación electrónica","Soporte por chat"].map((d,h)=>g.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-3)]",children:[g.jsx(Nd,{}),d]},h))})]})]}),g.jsxs("div",{className:"relative border-2 border-[#C9F31D]/50 rounded-2xl p-7 md:p-9 flex flex-col bg-gradient-to-b from-[#1a1aff]/30 via-[#2020cc]/20 to-[#0a0a0a] md:-my-6 shadow-[0_0_40px_rgba(201,243,29,0.08)]",children:[g.jsx("div",{className:"absolute -top-0 -right-0 overflow-hidden w-24 h-24",children:g.jsx("div",{className:"absolute top-3 -right-6 rotate-45 bg-[var(--nx-accent)] text-black text-[10px] font-bold py-1 px-8 tracking-wider",children:"Popular"})}),g.jsx("h3",{className:"text-3xl md:text-4xl font-bold text-[var(--nx-accent)]",children:"Pro"}),g.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[g.jsx("span",{className:"text-6xl md:text-7xl font-bold text-[var(--nx-text)]",children:"$42"}),g.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),g.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Servicio completo para crecer"}),g.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center bg-[var(--nx-accent)] text-black font-bold text-sm py-4 rounded-full hover:brightness-110 transition shadow-[0_0_20px_rgba(201,243,29,0.2)]",children:"Elegir Plan"}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),g.jsx("ul",{className:"space-y-3",children:["Todo del plan Plus","POS + Ecommerce + Connect","Hasta 3 sucursales","WhatsApp Commerce","Soporte prioritario","Reportes avanzados"].map((d,h)=>g.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-2)]",children:[g.jsx(Nd,{}),d]},h))})]})]}),g.jsxs("div",{className:"relative border border-[var(--nx-border)] rounded-2xl p-7 md:p-9 flex flex-col bg-[var(--nx-bg)] hover:border-[#C9F31D]/20 transition-colors",children:[g.jsx("h3",{className:"text-2xl md:text-3xl font-bold",children:"Corporativo"}),g.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[g.jsx("span",{className:"text-5xl md:text-6xl font-bold text-[var(--nx-accent)]",children:"$59"}),g.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),g.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Para empresas en expansión"}),g.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center border border-[var(--nx-accent)] text-[var(--nx-accent)] font-semibold text-sm py-3.5 rounded-full hover:bg-[var(--nx-accent)] hover:text-black transition-all",children:"Elegir Plan"}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),g.jsx("ul",{className:"space-y-3",children:["Todo del plan Pro","Loyalty (QPONS)","Sucursales ilimitadas","Integraciones avanzadas"].map((d,h)=>g.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-3)]",children:[g.jsx(Nd,{}),d]},h))})]})]})]}),g.jsx(Zn,{to:"resultados"})]})}),g.jsxs("section",{id:"resultados","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-black",children:[g.jsx("img",{src:w0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-20"}),g.jsx("div",{className:"absolute inset-0 bg-black/60"}),g.jsxs("div",{className:"relative z-10 w-full",children:[g.jsx("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"text-center mb-12",children:[g.jsx("span",{className:"text-[#C9F31D] text-xs font-semibold tracking-[0.2em] uppercase",children:"RESULTADOS"}),g.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg",children:["Números que ",g.jsx("span",{className:"text-[#C9F31D]",children:"hablan solos"})]})]})}),g.jsx("div",{className:"flex gap-6 md:gap-8 justify-center flex-wrap max-w-[1320px] mx-auto px-4",children:[{stat:"40%",label:"más ventas",desc:"al conectar todos sus canales",icon:g.jsx(cT,{className:"w-8 h-8"})},{stat:"3x",label:"más rápido",desc:"atención automatizada",icon:g.jsx(oT,{className:"w-8 h-8"})},{stat:"0",label:"errores",desc:"inventario sincronizado",icon:g.jsx(Qw,{className:"w-8 h-8"})},{stat:"100%",label:"visibilidad",desc:"dashboards en tiempo real",icon:g.jsx(Lg,{className:"w-8 h-8"})}].map((d,h)=>g.jsxs("div",{className:"flex-1 min-w-[200px] max-w-[280px] text-center",children:[g.jsx("div",{className:"text-[#C9F31D]/40 flex justify-center mb-3",children:d.icon}),g.jsx("p",{className:"text-6xl md:text-7xl lg:text-8xl font-bold text-[#C9F31D] leading-none drop-shadow-[0_0_30px_rgba(201,243,29,0.2)]",children:d.stat}),g.jsx("p",{className:"text-lg md:text-xl font-bold mt-3 text-white drop-shadow",children:d.label}),g.jsx("p",{className:"text-sm text-white/50 mt-1",children:d.desc})]},h))}),g.jsx("div",{className:"flex items-center justify-center gap-6 mt-12",children:g.jsxs("div",{className:"flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3",children:[g.jsx("span",{className:"text-[#C9F31D] text-lg",children:"📞"}),g.jsx("span",{className:"text-white/60 text-sm",children:"¿Necesita ayuda?"}),g.jsx("a",{href:"tel:+50622223333",className:"text-[#C9F31D] font-bold text-base hover:underline",children:"+506 2222-3333"})]})}),g.jsx("div",{className:"max-w-[1320px] mx-auto px-4",children:g.jsx(Zn,{to:"testimonios"})})]})]}),g.jsx("section",{id:"testimonios","data-reveal":"scale",className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(135deg, #0a0d12 0%, #0a0a0a 50%, #100a0d 100%)"},children:g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start gap-6 mb-12",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-[var(--nx-text-5)] text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none select-none",children:"Testimonials"}),g.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold -mt-6 md:-mt-8 relative z-10",children:["Historias de éxito",g.jsx("br",{}),"de nuestros clientes"]})]}),g.jsxs("div",{className:"flex items-center gap-4 lg:mt-auto",children:[g.jsx("p",{className:"text-sm text-[var(--nx-text-4)] max-w-xs",children:"De la estrategia a la ejecución: así hemos transformado negocios."}),g.jsx("a",{href:"#contacto",className:"shrink-0 w-12 h-12 rounded-full border border-[var(--nx-accent)] flex items-center justify-center hover:bg-[var(--nx-accent)] hover:text-black transition-all group",children:g.jsx(Vn,{className:"w-5 h-5 text-[var(--nx-accent)] group-hover:text-black"})})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[{quote:"NIDUX nos permitió integrar nuestra tienda física con la online en menos de una semana. Ahora vendemos el doble sin duplicar trabajo.",name:"MARÍA LÓPEZ",role:"Propietaria, Tienda de Ropa",photo:PT,offset:"mt-0"},{quote:"Desde que activamos NDX Connect, nuestras ventas por WhatsApp crecieron un 40%. Los clientes piden y pagan sin salir de la conversación.",name:"CARLOS RODRÍGUEZ",role:"Gerente, Restaurante",photo:NT,offset:"lg:mt-12"},{quote:"El equipo de NIDUX nos capacitó y acompañó durante todo el proceso. Nunca nos sentimos solos. Todo fue muy fácil de entender.",name:"DANIEL MORA",role:"Director, Ferretería",photo:DT,offset:"lg:mt-6"},{quote:"QPONS nos ayudó a que los clientes regresen. El programa de lealtad fue super fácil de configurar y los resultados se vieron desde el primer mes.",name:"ANA RAMÍREZ",role:"Dueña, Farmacia",photo:LT,offset:"lg:mt-16"}].map((d,h)=>g.jsx("div",{className:`${d.offset}`,children:g.jsxs("div",{className:"border-t-2 border-[var(--nx-accent)] pt-6",children:[g.jsx("img",{src:d.photo,alt:d.name,className:"w-14 h-14 rounded-full object-cover border-2 border-[#C9F31D]/30 mb-4"}),g.jsx("p",{className:"text-[var(--nx-accent)] text-2xl mb-3",children:"“”"}),g.jsx("p",{className:"text-sm md:text-base text-[var(--nx-text-2)] leading-relaxed italic mb-6",children:d.quote}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"w-6 h-px bg-[var(--nx-text-4)]"}),g.jsxs("div",{children:[g.jsx("p",{className:"font-bold text-sm text-[var(--nx-accent)]",children:d.name}),g.jsx("p",{className:"text-xs text-[var(--nx-text-4)]",children:d.role})]})]})]})},h))}),g.jsxs("div",{className:"flex justify-center gap-2 mt-10",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-[var(--nx-accent)]"}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-[var(--nx-border)]"})]}),g.jsx(Zn,{to:"beneficios"})]})}),g.jsxs("section",{"data-reveal":"up",className:"relative py-12 bg-[var(--nx-bg)] overflow-hidden border-y border-[var(--nx-border-subtle)]",children:[g.jsx("div",{className:"flex items-center gap-8 animate-marquee whitespace-nowrap",children:[...Array(3)].map((d,h)=>g.jsxs("div",{className:"flex items-center gap-8 shrink-0",children:[g.jsx("span",{className:"text-2xl md:text-4xl font-bold font-['Poppins'] text-[var(--nx-text-5)]",children:"Más de 2,000 comercios ya confían en NIDUX"}),g.jsx("img",{src:wm,alt:"",className:"w-6 h-6 opacity-40"}),g.jsx("span",{className:"text-lg md:text-2xl text-[var(--nx-text-5)] font-['Poppins']",children:"BCR · Mastercard · Correos de CR · Meta · AWS · Google"}),g.jsx("img",{src:wm,alt:"",className:"w-6 h-6 opacity-40"})]},h))}),g.jsx("style",{children:`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `})]}),g.jsxs("section",{id:"beneficios","data-reveal":!0,className:"relative py-12 md:py-16 overflow-hidden snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(180deg, #0c0d0a 0%, #0a0a0a 100%)"},children:[g.jsx(OT,{className:"absolute -left-40 top-1/2 -translate-y-1/2"}),g.jsxs("div",{className:"w-full relative z-10",children:[g.jsxs("div",{className:"text-center mb-10 md:mb-14 px-4",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"PARA TODO TIPO DE NEGOCIO"}),g.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",children:["NIDUX se adapta a ",g.jsx("span",{className:"text-[var(--nx-accent)]",children:"su industria"})]})]}),g.jsx("div",{className:"overflow-hidden",children:g.jsx("div",{className:"flex gap-5 animate-industry-carousel",children:[{icon:"👗",name:"Moda & Ropa",desc:"Gestione tallas, colores y temporadas. Venda en tienda y online sin descuadres.",glow:"from-pink-500/20"},{icon:"🍽️",name:"Restaurantes",desc:"Menú digital, pedidos por WhatsApp y control de inventario de ingredientes.",glow:"from-orange-500/20"},{icon:"🔧",name:"Ferreterías",desc:"Miles de SKUs organizados. Búsqueda rápida y facturación al instante.",glow:"from-yellow-500/20"},{icon:"💊",name:"Farmacias",desc:"Control de lotes, vencimientos y recetas. Inventario farmacéutico preciso.",glow:"from-emerald-500/20"},{icon:"🛒",name:"Supermercados",desc:"Alto volumen, múltiples cajas, pesaje integrado. Escale sin límites.",glow:"from-blue-500/20"},{icon:"🌐",name:"Tienda Online",desc:"100% digital. Su ecommerce profesional funcionando en minutos.",glow:"from-violet-500/20"},{icon:"☕",name:"Cafeterías",desc:"Pedidos rápidos, programa de lealtad y gestión de sucursales.",glow:"from-amber-500/20"},{icon:"💄",name:"Cosméticos",desc:"Catálogo visual, ventas por redes sociales y envíos integrados.",glow:"from-rose-500/20"},{icon:"👗",name:"Moda & Ropa",desc:"Gestione tallas, colores y temporadas. Venda en tienda y online sin descuadres.",glow:"from-pink-500/20"},{icon:"🍽️",name:"Restaurantes",desc:"Menú digital, pedidos por WhatsApp y control de inventario de ingredientes.",glow:"from-orange-500/20"},{icon:"🔧",name:"Ferreterías",desc:"Miles de SKUs organizados. Búsqueda rápida y facturación al instante.",glow:"from-yellow-500/20"},{icon:"💊",name:"Farmacias",desc:"Control de lotes, vencimientos y recetas. Inventario farmacéutico preciso.",glow:"from-emerald-500/20"},{icon:"🛒",name:"Supermercados",desc:"Alto volumen, múltiples cajas, pesaje integrado. Escale sin límites.",glow:"from-blue-500/20"},{icon:"🌐",name:"Tienda Online",desc:"100% digital. Su ecommerce profesional funcionando en minutos.",glow:"from-violet-500/20"},{icon:"☕",name:"Cafeterías",desc:"Pedidos rápidos, programa de lealtad y gestión de sucursales.",glow:"from-amber-500/20"},{icon:"💄",name:"Cosméticos",desc:"Catálogo visual, ventas por redes sociales y envíos integrados.",glow:"from-rose-500/20"}].map((d,h)=>g.jsxs("div",{className:`shrink-0 w-[260px] md:w-[300px] group relative rounded-2xl border border-[var(--nx-border)] bg-gradient-to-b ${d.glow} to-[var(--nx-bg)] p-6 md:p-7 flex flex-col justify-between min-h-[320px] md:min-h-[360px] hover:border-[#C9F31D]/30 hover:shadow-[0_0_30px_rgba(201,243,29,0.06)] transition-all duration-500 cursor-pointer`,children:[g.jsx("div",{className:"text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-500",children:d.icon}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl md:text-2xl font-bold group-hover:text-[var(--nx-accent)] transition-colors",children:d.name}),g.jsx("p",{className:"text-sm text-[var(--nx-text-4)] mt-2 leading-relaxed group-hover:text-[var(--nx-text-3)] transition-colors",children:d.desc})]}),g.jsx("div",{className:"absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--nx-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#C9F31D]/40 transition-all",children:g.jsx(Vn,{className:"w-3.5 h-3.5 text-[var(--nx-accent)]"})})]},h))})}),g.jsx("div",{className:"mt-10 text-center",children:g.jsxs("a",{href:"#contacto",className:"text-[var(--nx-accent)] text-sm font-semibold hover:underline inline-flex items-center gap-2",children:["¿Su industria no aparece? También la cubrimos ",g.jsx(Vn,{className:"w-4 h-4"})]})}),g.jsx("div",{className:"px-4",children:g.jsx(Zn,{to:"alianzas"})})]}),g.jsx("style",{children:`
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
        `})]}),g.jsxs("section",{id:"alianzas","data-reveal":!0,className:"relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden snap-start shrink-0 min-h-screen bg-[#050508]",children:[g.jsx("div",{className:"absolute left-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-[#C9F31D]/[0.03] blur-[200px] pointer-events-none"}),g.jsx("div",{className:"absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/[0.03] blur-[180px] pointer-events-none"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[g.jsxs("div",{className:"text-center mb-20 md:mb-24",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight",children:["Conectado con",g.jsx("br",{}),g.jsx("span",{className:"text-[#C9F31D]",children:"todo."})]}),g.jsx("p",{className:"mt-6 text-white/40 text-base md:text-lg max-w-lg mx-auto",children:"Más de 30 integraciones. Cero configuración."})]}),g.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden mb-20",children:[{icon:g.jsx(Rd,{className:"w-7 h-7"}),label:"Inventario",desc:"Sincronizado en tiempo real"},{icon:g.jsx(iT,{className:"w-7 h-7"}),label:"Tienda Física",desc:"POS conectado al ecosistema"},{icon:g.jsx(Og,{className:"w-7 h-7"}),label:"Ecommerce",desc:"Venta online 24/7"},{icon:g.jsx(Fg,{className:"w-7 h-7"}),label:"WhatsApp",desc:"Ventas conversacionales"},{icon:g.jsx(Ug,{className:"w-7 h-7"}),label:"Fidelización",desc:"QPONS y recompensas"},{icon:g.jsx(Wl,{className:"w-7 h-7"}),label:"Pagos",desc:"10+ pasarelas integradas"},{icon:g.jsx(Pd,{className:"w-7 h-7"}),label:"Logística",desc:"Envíos automatizados"},{icon:g.jsx(Dg,{className:"w-7 h-7"}),label:"Analytics",desc:"Dashboards en tiempo real"}].map((d,h)=>g.jsxs("div",{className:"group bg-[#0a0a0a] p-8 md:p-10 flex flex-col items-center text-center hover:bg-white/[0.03] transition-all duration-500 cursor-default",children:[g.jsx("div",{className:"text-white/30 group-hover:text-[#C9F31D] transition-colors duration-500 mb-4",children:d.icon}),g.jsx("h4",{className:"text-sm font-semibold text-white/80 group-hover:text-white transition-colors",children:d.label}),g.jsx("p",{className:"text-[11px] text-white/30 mt-1 group-hover:text-white/50 transition-colors",children:d.desc})]},h))}),g.jsx("div",{className:"text-center mb-8",children:g.jsx("p",{className:"text-white/20 text-xs tracking-[0.3em] uppercase font-semibold",children:"Integraciones"})}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16",children:[{label:"Pagos",icon:g.jsx(Wl,{className:"w-5 h-5"}),partners:["BCR","BN","BAC","PayPal","Tilopay","Zunify","Placetopay","Evertec","LAFISE","GreenPay"]},{label:"Logística",icon:g.jsx(Pd,{className:"w-5 h-5"}),partners:["Correos de CR","Moovin","Growlat"]},{label:"Marketing",icon:g.jsx(Ig,{className:"w-5 h-5"}),partners:["Meta","WhatsApp","Instagram","Mailchimp","Neonet","PixelPay","Mastercard"]}].map((d,h)=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[g.jsx("span",{className:"text-[#C9F31D]",children:d.icon}),g.jsx("h3",{className:"text-sm font-semibold text-white/60 uppercase tracking-wider",children:d.label})]}),g.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-2",children:d.partners.map(m=>g.jsx("span",{className:"text-sm text-white/30 hover:text-[#C9F31D] transition-colors cursor-default",children:m},m))})]},h))}),g.jsxs("div",{className:"mt-16 text-center",children:[g.jsx("p",{className:"text-white/20 text-sm mb-4",children:"¿No ve su integración? Probablemente ya la tenemos."}),g.jsx("a",{href:"#contacto",className:"inline-flex items-center gap-2 border border-white/10 text-white/60 text-sm px-6 py-3 rounded-full hover:border-[#C9F31D]/30 hover:text-white transition-all",children:"Consultar integraciones"})]}),g.jsx(Zn,{to:"contacto"})]})]}),g.jsx("section",{id:"contacto","data-reveal":"scale",className:"relative py-16 md:py-20 snap-start shrink-0 min-h-screen flex items-center overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(201,243,29,0.04) 0%, #0a0a0a 60%)"},children:g.jsxs("div",{className:"max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[g.jsxs("div",{className:"text-center mb-10",children:[g.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-bold tracking-[0.2em] uppercase",children:"Agendar Demo"}),g.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",children:["Empiece a vender más. ",g.jsx("span",{className:"text-[var(--nx-accent)]",children:"Hoy."})]}),g.jsx("p",{className:"mt-3 text-[var(--nx-text-4)] text-base max-w-md mx-auto",children:"14 días gratis. Sin tarjeta. Sin compromiso."})]}),g.jsx("div",{id:"agendar",className:"bg-[var(--nx-surface)] border border-[var(--nx-border)] rounded-3xl p-8 md:p-10 backdrop-blur-sm",children:g.jsxs("form",{className:"flex flex-col gap-5",onSubmit:d=>d.preventDefault(),children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[g.jsx(yT,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Nombre completo ",g.jsx("span",{className:"text-[var(--nx-accent)]",children:"*"})]}),g.jsx("input",{type:"text",required:!0,className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#C9F31D]/50 focus:outline-none transition",placeholder:"Su nombre"})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[g.jsx(zw,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Correo electrónico ",g.jsx("span",{className:"text-[var(--nx-accent)]",children:"*"})]}),g.jsx("input",{type:"email",required:!0,className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#C9F31D]/50 focus:outline-none transition",placeholder:"correo@ejemplo.com"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[g.jsx(Xw,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Teléfono"]}),g.jsx("input",{type:"tel",className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#C9F31D]/50 focus:outline-none transition",placeholder:"+506 8888-8888"})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[g.jsx(Cw,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Sucursales"]}),g.jsx("input",{type:"text",className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#C9F31D]/50 focus:outline-none transition",placeholder:"Ej: 2 en San José"})]})]}),g.jsxs("button",{type:"submit",className:"mt-3 flex items-center justify-center gap-3 bg-[var(--nx-accent)] text-black font-bold text-base py-4 rounded-full hover:brightness-110 transition w-full shadow-[0_0_30px_rgba(201,243,29,0.15)]",children:[g.jsx(qw,{className:"w-5 h-5"}),"AGENDAR MI DEMO GRATIS"]}),g.jsx("p",{className:"text-center text-[var(--nx-text-5)] text-xs mt-1",children:"Al enviar acepta nuestros términos de servicio"})]})})]})}),g.jsxs("section",{"data-reveal":"scale",className:"relative py-20 md:py-28 snap-start shrink-0 min-h-[70vh] flex items-center overflow-hidden",style:{background:"linear-gradient(180deg, #0a0a0a 0%, #0d100a 50%, #0a0a0a 100%)"},children:[g.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]",children:g.jsx("svg",{width:"300",height:"300",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"0.5",children:g.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})}),g.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight italic",children:[g.jsx("span",{className:"text-[var(--nx-accent)]",children:"**"}),g.jsx("span",{className:"text-[var(--nx-accent)]",children:"¿Listo para vender"}),g.jsx("br",{}),g.jsx("span",{className:"text-[var(--nx-text)]",children:"en todos los canales?"})," ",g.jsx("span",{className:"underline decoration-[var(--nx-accent)] underline-offset-4 text-[var(--nx-text)] italic",children:"Empiece hoy"})]}),g.jsxs("p",{className:"mt-8 text-base md:text-lg text-[var(--nx-text-3)] max-w-2xl mx-auto",children:[g.jsx("strong",{className:"text-[var(--nx-text-2)]",children:"Haga crecer su negocio"})," con la plataforma de comercio unificado líder en Costa Rica. Sin complicaciones. Sin riesgo. Con resultados."]}),g.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row gap-4 justify-center",children:[g.jsx("a",{href:"#agendar",className:"inline-flex items-center justify-center gap-3 bg-[var(--nx-accent)] text-black font-bold text-base px-10 py-4 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(201,243,29,0.2)]",children:"Empezar gratis"}),g.jsx("a",{href:"#contacto",className:"inline-flex items-center justify-center gap-2 border border-[var(--nx-border)] text-[var(--nx-text-2)] font-medium text-base px-10 py-4 rounded-full hover:bg-[var(--nx-surface)] hover:text-[var(--nx-text)] transition",children:"Agendar consulta gratuita"})]})]})]}),g.jsxs("footer",{"data-theme":"dark",className:"relative pt-12 md:pt-16 pb-8 bg-[#0a0a0a] overflow-hidden snap-start shrink-0",children:[g.jsx("img",{src:_v,alt:"",className:"absolute top-0 right-0 w-48 opacity-10 pointer-events-none hidden lg:block"}),g.jsx("img",{src:yv,alt:"",className:"absolute bottom-0 left-0 w-64 opacity-5 pointer-events-none hidden lg:block"}),g.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[g.jsxs("div",{className:"text-center mb-16 md:mb-20",children:[g.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Poppins']",children:[g.jsx("span",{className:"font-bold",children:"Es momento"})," ",g.jsx("span",{className:"font-light text-white/40",children:"de crecer"})]}),g.jsx("p",{className:"mt-4 text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed",children:"Ordene su negocio, conecte todos sus canales y venda más con NIDUX One."}),g.jsxs("a",{href:"#agendar",className:"mt-8 inline-flex items-center gap-3 bg-[#C9F31D] text-black font-bold text-base px-8 py-4 rounded-full hover:brightness-110 transition",children:["AGENDAR DEMO",g.jsx(Vn,{className:"w-5 h-5 text-black"})]}),g.jsx("div",{className:"mt-8 flex justify-center gap-5",children:["facebook","instagram","twitter","linkedin"].map(d=>g.jsxs("a",{href:"#",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9F31D] hover:border-[#C9F31D]/30 transition","aria-label":d,children:[d==="facebook"&&g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})}),d==="instagram"&&g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),g.jsx("circle",{cx:"12",cy:"12",r:"5"}),g.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5",fill:"currentColor",stroke:"none"})]}),d==="twitter"&&g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),d==="linkedin"&&g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})})]},d))})]}),g.jsxs("div",{className:"border-t border-white/10 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[g.jsxs("div",{children:[g.jsx("img",{src:Dd,alt:"NIDUX",className:"h-8 w-auto mb-4"}),g.jsx("p",{className:"text-sm text-white/40 leading-relaxed mb-4",children:"Plataforma todo-en-uno para comercios en Latinoamérica. POS, Ecommerce, WhatsApp y Loyalty integrados."}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("img",{src:vv,alt:"Rating",className:"h-6 w-auto"}),g.jsx("img",{src:xv,alt:"Rating",className:"h-6 w-auto"}),g.jsx("img",{src:gv,alt:"Rating",className:"h-6 w-auto"})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Productos"}),g.jsx("ul",{className:"flex flex-col gap-2.5",children:["NDX POS","NDX Ecommerce","NDX Connect","NDX Loyalty (QPONS)","Integraciones"].map(d=>g.jsx("li",{children:g.jsx("a",{href:"#productos",className:"text-sm text-white/40 hover:text-white/70 transition",children:d})},d))})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Legal"}),g.jsxs("ul",{className:"flex flex-col gap-2.5",children:[g.jsx("li",{className:"text-sm text-white/40",children:"San José, Costa Rica"}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-sm text-white/40 hover:text-white/70 transition",children:"Términos de servicio"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-sm text-white/40 hover:text-white/70 transition",children:"Política de privacidad"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Suscríbase al newsletter"}),g.jsxs("form",{className:"flex gap-2",onSubmit:d=>d.preventDefault(),children:[g.jsx("input",{type:"email",placeholder:"correo@ejemplo.com",className:"flex-1 min-w-0 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#C9F31D]/50 focus:outline-none transition"}),g.jsx("button",{type:"submit",className:"bg-[#C9F31D] text-black font-semibold text-sm px-4 py-2.5 rounded-xl hover:brightness-110 transition shrink-0",children:"Suscribirse"})]})]})]}),g.jsx("div",{className:"mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/30",children:"© 2026 NIDUX ONE | Todos los derechos reservados"})]})]}),g.jsx("style",{children:`
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
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(201,243,29,0.05);
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
      `})]})}function WT(){return g.jsx("div",{className:"w-full min-h-screen bg-black overflow-x-hidden",children:g.jsx(jT,{})})}mv.createRoot(document.getElementById("root")).render(g.jsx(WT,{}));
