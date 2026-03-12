(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},as={duration:.5,overwrite:!1,delay:0},Wc,Ut,ut,Xn=1e8,zt=1/Xn,Ll=Math.PI*2,wm=Ll/4,Rm=0,Gf=Math.sqrt,Cm=Math.cos,Pm=Math.sin,Lt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},Xc=function(e){return typeof e>"u"},Kn=function(e){return typeof e=="object"},en=function(e){return e!==!1},qc=function(){return typeof window<"u"},ya=function(e){return gt(e)||Lt(e)},Wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Il=/(?:-?\.?\d|\.)+/gi,Xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,No=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qf=/[+-]=-?[.\d]+/,Yf=/[^,'"\[\]\s]+/gi,Dm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,zn,Ul,Yc,pn={},uo={},Kf,jf=function(e){return(uo=os(e,pn))&&an},Kc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},na=function(e,t){return!t&&console.warn(e)},Zf=function(e,t){return e&&(pn[e]=t)&&uo&&(uo[e]=t)||pn},ia=function(){return 0},Lm={suppressEvents:!0,isStart:!0,kill:!1},$a={suppressEvents:!0,kill:!1},Im={suppressEvents:!0},jc={},Ii=[],Nl={},$f,un={},Oo={},Xu=30,Ja=[],Zc="",$c=function(e){var t=e[0],n,i;if(Kn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(t););n=Ja[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Md(e[i],n)))||e.splice(i,1);return e},cr=function(e){return e._gsap||$c(Sn(e))[0]._gsap},Jf=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Xc(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},$r=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Um=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ho=function(){var e=Ii.length,t=Ii.slice(0),n,i;for(Nl={},Ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qf=function(e,t,n,i){Ii.length&&!Ut&&ho(),e.render(t,n,Ut&&t<0&&(e._initted||e._startAt)),Ii.length&&!Ut&&ho()},ed=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yf).length<2?t:Lt(e)?e.trim():e},td=function(e){return e},mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},os=function(e,t){for(var n in t)e[n]=t[n];return e},qu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Kn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ys=function(e){var t=e.parent||ft,n=e.keyframes?Nm(Vt(e.keyframes)):mn;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Om=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},nd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},wo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ol=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert($a):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Bm=function r(e){return!e||e._ts&&r(e.parent)},Yu=function(e){return e._repeat?ls(e._tTime,e=e.duration()+e._rDelay)*e:0},ls=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ro=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},Co=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ro(e),n._dirty||ur(n,e)),e},id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=po(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>zt)&&t.render(n,!0)),ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Gn=function(e,t,n,i){return t.parent&&Fi(t),t._start=bt((mi(n)?n:n||e!==ft?yn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nd(e,t,"_first","_last",e._sort?"_start":0),Fl(t)||(e._recent=t),i||id(e,t),e._ts<0&&Co(e,e._tTime),e},rd=function(e,t){return(pn.ScrollTrigger||Kc("scrollTrigger",t))&&pn.ScrollTrigger.create(t,e)},sd=function(e,t,n,i,s){if(Qc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$f!==hn.frame)return Ii.push(e),e._lazy=[s,i],1},km=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Fl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&km(e)&&!(!e._initted&&Fl(e))||(e._ts<0||e._dp._ts<0)&&!Fl(e))?0:1,o=e._rDelay,c=0,u,f,l;if(o&&e._repeat&&(c=pa(0,e._tDur,t),f=ls(c,o),e._yoyo&&f&1&&(a=1-a),f!==ls(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||i||e._zTime===zt||!t&&e._zTime){if(!e._initted&&sd(e,t,i,n,c))return;for(l=e._zTime,e._zTime=t||(n?zt:0),n||(n=t&&!l),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Ol(e,t,n,!0),e._onUpdate&&!n&&fn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Fi(e,1),!n&&!Ut&&(fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},cs=function(e,t,n,i){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Co(e,e._tTime=e._tDur*o),e.parent&&Ro(e),n||ur(e.parent,e),e},Ku=function(e){return e instanceof Kt?ur(e):cs(e,e._dur)},Vm={_start:0,endTime:ia,totalDuration:ia},yn=function r(e,t,n){var i=e.labels,s=e._recent||Vm,a=e.duration()>=Xn?s.endTime(!1):e._dur,o,c,u;return Lt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(c=c/100*(Vt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Ks=function(e,t,n){var i=mi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=en(c.vars.inherit)&&c.parent;a.immediateRender=en(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Et(t[0],a,t[s+1])},Vi=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},kt=function(e,t){return!Lt(e)||!(t=Dm.exec(e))?"":t[1]},Gm=function(e,t,n){return Vi(n,function(i){return pa(e,t,i)})},Bl=[].slice,ad=function(e,t){return e&&Kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Kn(e[0]))&&!e.nodeType&&e!==zn},Wm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Lt(i)&&!t||ad(i,1)?(s=n).push.apply(s,Sn(i)):n.push(i)})||n},Sn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Lt(e)&&!n&&(Ul||!us())?Bl.call((t||Yc).querySelectorAll(e),0):Vt(e)?Wm(e,n):ad(e)?Bl.call(e,0):e?[e]:[]},kl=function(e){return e=Sn(e)[0]||na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sn(t,n.querySelectorAll?n:n===e?na("Invalid scope")||Yc.createElement("div"):e)}},od=function(e){return e.sort(function(){return .5-Math.random()})},ld=function(e){if(gt(e))return e;var t=Kn(e)?e:{each:e},n=hr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,u=t.axis,f=i,l=i;return Lt(i)?f=l={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(f=i[0],l=i[1]),function(h,d,_){var g=(_||t).length,m=a[g],p,x,M,v,b,w,A,C,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Xn])[1],!y){for(A=-1e8;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=c?Math.min(y,g)*f-.5:i%y,x=y===Xn?0:c?g*l/y-.5:i/y|0,A=0,C=Xn,w=0;w<g;w++)M=w%y-p,v=x-(w/y|0),m[w]=b=u?Math.abs(u==="y"?v:M):Gf(M*M+v*v),b>A&&(A=b),b<C&&(C=b);i==="random"&&od(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:u?u==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=kt(t.amount||t.each)||0,n=n&&g<0?vd(n):n}return g=(m[h]-m.min)/m.max||0,bt(m.b+(n?n(g):g)*m.v)+m.u}},zl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mi(n)?0:kt(n))}},cd=function(e,t){var n=Vt(e),i,s;return!n&&Kn(e)&&(i=n=e.radius||Xn,e.values?(e=Sn(e.values),(s=!mi(e[0]))&&(i*=i)):e=zl(e.increment)),Vi(t,n?gt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),u=Xn,f=0,l=e.length,h,d;l--;)s?(h=e[l].x-o,d=e[l].y-c,h=h*h+d*d):h=Math.abs(e[l]-o),h<u&&(u=h,f=l);return f=!i||u<=i?e[f]:a,s||f===a||mi(a)?f:f+kt(a)}:zl(e))},ud=function(e,t,n,i){return Vi(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Xm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},qm=function(e,t){return function(n){return e(parseFloat(n))+(t||kt(n))}},Ym=function(e,t,n){return fd(e,t,0,1,n)},hd=function(e,t,n){return Vi(n,function(i){return e[~~t(i)]})},Km=function r(e,t,n){var i=t-e;return Vt(e)?hd(e,r(0,e.length),t):Vi(n,function(s){return(i+(s-e)%i)%i+e})},jm=function r(e,t,n){var i=t-e,s=i*2;return Vt(e)?hd(e,r(0,e.length-1),t):Vi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ra=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Yf:Il),n+=e.substr(t,i-t)+ud(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},fd=function(e,t,n,i,s){var a=t-e,o=i-n;return Vi(s,function(c){return n+((c-e)/a*o||0)})},Zm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Lt(e),o={},c,u,f,l,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(f=[],l=e.length,h=l-2,u=1;u<l;u++)f.push(r(e[u-1],e[u]));l--,s=function(_){_*=l;var g=Math.min(h,~~_);return f[g](_-g)},n=t}else i||(e=os(Vt(e)?[]:{},e));if(!f){for(c in t)Jc.call(o,e,c,"get",t[c]);s=function(_){return nu(_,o)||(a?e.p:e)}}}return Vi(n,s)},ju=function(e,t,n){var i=e.labels,s=Xn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},fn=function(e,t,n){var i=e.vars,s=i[t],a=ut,o=e._ctx,c,u,f;if(s)return c=i[t+"Params"],u=i.callbackScope||e,n&&Ii.length&&ho(),o&&(ut=o),f=c?s.apply(u,c):s.call(u),ut=a,f},Gs=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&fn(e,"onInterrupt"),e},Kr,dd=[],pd=function(e){if(e)if(e=!e.name&&e.default||e,qc()||e.headless){var t=e.name,n=gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ia,render:nu,add:Jc,kill:f_,modifier:h_,rawVars:0},a={targetTest:0,get:0,getSetter:tu,aliases:{},register:0};if(us(),e!==i){if(un[t])return;mn(i,mn(fo(e,s),a)),os(i.prototype,os(s,fo(e,a))),un[i.prop=t]=i,e.targetTest&&(Ja.push(i),jc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zf(t,i),e.register&&e.register(an,i,nn)}else dd.push(e)},rt=255,Ws={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Fo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},md=function(e,t,n){var i=e?mi(e)?[e>>16,e>>8&rt,e&rt]:0:Ws.black,s,a,o,c,u,f,l,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])i=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Il),!t)c=+i[0]%360/360,u=+i[1]/100,f=+i[2]/100,a=f<=.5?f*(u+1):f+u-f*u,s=f*2-a,i.length>3&&(i[3]*=1),i[0]=Fo(c+1/3,s,a),i[1]=Fo(c,s,a),i[2]=Fo(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Xf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Il)||Ws.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/rt,a=i[1]/rt,o=i[2]/rt,l=Math.max(s,a,o),h=Math.min(s,a,o),f=(l+h)/2,l===h?c=u=0:(d=l-h,u=f>.5?d/(2-l-h):d/(l+h),c=l===s?(a-o)/d+(a<o?6:0):l===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},_d=function(e){var t=[],n=[],i=-1;return e.split(Ui).forEach(function(s){var a=s.match(Yr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Zu=function(e,t,n){var i="",s=(e+i).match(Ui),a=t?"hsla(":"rgba(",o=0,c,u,f,l;if(!s)return e;if(s=s.map(function(h){return(h=md(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(f=_d(e),c=n.c,c.join(i)!==f.c.join(i)))for(u=e.replace(Ui,"1").split(Yr),l=u.length-1;o<l;o++)i+=u[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!u)for(u=e.split(Ui),l=u.length-1;o<l;o++)i+=u[o]+s[o];return i+u[l]},Ui=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),$m=/hsl[a]?\(/,gd=function(e){var t=e.join(" "),n;if(Ui.lastIndex=0,Ui.test(t))return n=$m.test(t),e[1]=Zu(e[1],n),e[0]=Zu(e[0],n,_d(e[1])),!0},sa,hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,u,f,l,h,d,_=function g(m){var p=r()-i,x=m===!0,M,v,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,M=b-a,(M>0||x)&&(w=++l.frame,h=b-l.time*1e3,l.time=b=b/1e3,a+=M+(M>=s?4:s-M),v=1),x||(c=u(g)),v)for(d=0;d<o.length;d++)o[d](b,h,w,m)};return l={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Kf&&(!Ul&&qc()&&(zn=Ul=window,Yc=zn.document||{},pn.gsap=an,(zn.gsapVersions||(zn.gsapVersions=[])).push(an.version),jf(uo||zn.GreenSockGlobals||!zn.gsap&&zn||{}),dd.forEach(pd)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),u=f||function(m){return setTimeout(m,a-l.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(c),sa=0,u=ia},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=l.time*1e3+s},add:function(m,p,x){var M=p?function(v,b,w,A){m(v,b,w,A),l.remove(M)}:m;return l.remove(m),o[x?"unshift":"push"](M),us(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},l}(),us=function(){return!sa&&hn.wake()},He={},Jm=/^[\d.\-M][\d.\-,\s]/,Qm=/["']/g,e_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,u;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,u=c.substr(0,o),t[i]=isNaN(u)?u.replace(Qm,"").trim():+u,i=c.substr(o+1).trim();return t},t_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},n_=function(e){var t=(e+"").split("("),n=He[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[e_(t[1])]:t_(e).split(",").map(ed)):He._CE&&Jm.test(e)?He._CE("",e):n},vd=function(e){return function(t){return 1-e(1-t)}},xd=function r(e,t){for(var n=e._first,i;n;)n instanceof Kt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},hr=function(e,t){return e&&(gt(e)?e:He[e]||n_(e))||t},gr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return tn(e,function(o){He[o]=pn[o]=s,He[a=o.toLowerCase()]=n;for(var c in s)He[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=He[o+"."+c]=s[c]}),s},yd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ll*(Math.asin(1/i)||0),o=function(f){return f===1?1:i*Math.pow(2,-10*f)*Pm((f-a)*s)+1},c=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:yd(o);return s=Ll/s,c.config=function(u,f){return r(e,u,f)},c},ko=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:yd(n);return i.config=function(s){return r(e,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;gr("Elastic",Bo("in"),Bo("out"),Bo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});gr("Circ",function(r){return-(Gf(1-r*r)-1)});gr("Sine",function(r){return r===1?1:-Cm(r*wm)+1});gr("Back",ko("in"),ko("out"),ko());He.SteppedEase=He.steps=pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-zt;return function(o){return((i*pa(0,a,o)|0)+s)*n}}};as.ease=He["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zc+=r+","+r+"Params,"});var Md=function(e,t){this.id=Rm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jf,this.set=t?t.getSetter:tu},aa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cs(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),sa||hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Co(this,n),!s._dp||s.parent||id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ls(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this._tDur,s),i!==!1),Ro(this),Fm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?po(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Im);var i=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ku(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ku(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(yn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-zt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=gt(n)?n:td,o=function(){var u=i.then;i.then=null,gt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Gs(this)},r}();mn(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Kt=function(r){Vf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),ft&&Gn(n.parent||ft,li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&rd(li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ks(0,arguments,this),this},t.from=function(i,s,a){return Ks(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ks(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,yn(this,a),1),this},t.call=function(i,s,a){return Gn(this,Et.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,u,f){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=f,a.parent=this,new Et(i,a,yn(this,c)),this},t.staggerFrom=function(i,s,a,o,c,u,f){return a.runBackwards=1,Ys(a).immediateRender=en(a.immediateRender),this.staggerTo(i,s,a,o,c,u,f)},t.staggerFromTo=function(i,s,a,o,c,u,f,l){return o.startAt=a,Ys(o).immediateRender=en(o.immediateRender),this.staggerTo(i,s,o,c,u,f,l)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=i<=0?0:bt(i),l=this._zTime<0!=i<0&&(this._initted||!u),h,d,_,g,m,p,x,M,v,b,w,A;if(this!==ft&&f>c&&i>=0&&(f=c),f!==this._tTime||a||l){if(o!==this._time&&u&&(f+=this._time-o,i+=this._time-o),h=f,v=this._start,M=this._ts,p=!M,l&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=bt(f%m),f===c?(g=this._repeat,h=u):(b=bt(f/m),g=~~b,g&&g===b&&(h=u,g--),h>u&&(h=u)),b=ls(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(h=u-h,A=1),g!==b&&!this._lock){var C=w&&b&1,y=C===(w&&g&1);if(g<b&&(C=!C),o=C?0:f%u?u:f,this._lock=1,this.render(o||(A?0:bt(g*m)),s,!u)._lock=0,this._tTime=f,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,y&&(this._lock=2,o=C?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;xd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Hm(this,bt(o),bt(h)),x&&(f-=h-(h=x._start))),this._tTime=f,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!g&&(fn(this,"onStart"),this._tTime!==f))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){x=0,_&&(f+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var T=i<0?i:h;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Ut&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){x=0,_&&(f+=this._zTime=T?-1e-8:zt);break}}d=_}}if(x&&!s&&(this.pause(),x.render(h>=o?0:-1e-8)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ro(this),this.render(i,s,a);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(f===c&&this._tTime>=this.totalDuration()||!f&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(f===c&&this._ts>0||!f&&this._ts<0)&&Fi(this,1),!s&&!(i<0&&!o)&&(f||o||!c)&&(fn(this,f===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(mi(s)||(s=yn(this,s,i)),!(i instanceof aa)){if(Vt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Lt(i))return this.addLabel(i,s);if(gt(i))i=Et.delayedCall(0,i);else return this}return this!==i?Gn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],u=this._first;u;)u._start>=o&&(u instanceof Et?s&&c.push(u):(a&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,s,a)))),u=u._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Lt(i)?this.removeLabel(i):gt(i)?this.killTweensOf(i):(i.parent===this&&wo(this,i),i===this._recent&&(this._recent=this._last),ur(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Et.delayedCall(0,s||ia,a);return o.data="isPause",this._hasPause=1,Gn(this,o,yn(this,i))},t.removePause=function(i){var s=this._first;for(i=yn(this,i);s;)s._start===i&&s.data==="isPause"&&Fi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Ri!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Sn(i),c=this._first,u=mi(s),f;c;)c instanceof Et?Um(c._targets,o)&&(u?(!Ri||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(f=c.getTweensOf(o,s)).length&&a.push.apply(a,f),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=yn(a,i),c=s,u=c.startAt,f=c.onStart,l=c.onStartParams,h=c.immediateRender,d,_=Et.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||zt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==m&&cs(_,m,0,1).render(_._time,!0,!0),d=1}f&&f.apply(_,l||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,mn({startAt:{time:yn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ju(this,yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ju(this,yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in c)c[u]>=a&&(c[u]+=i);return ur(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ur(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=Xn,u,f,l;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(l=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gn(a,o,f-o._delay,1)._lock=0):c=f,f<0&&o._ts&&(s-=f,(!l&&!a._dp||l&&l.smoothChildTiming)&&(a._start+=f/a._ts,a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=u;cs(a,a===ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ft._ts&&(Qf(ft,po(i,ft)),$f=hn.frame),hn.frame>=Xu){Xu+=dn.autoSleep||120;var s=ft._first;if((!s||!s._ts)&&dn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(aa);mn(Kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var i_=function(e,t,n,i,s,a,o){var c=new nn(this._pt,e,t,0,1,wd,null,s),u=0,f=0,l,h,d,_,g,m,p,x;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ra(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),h=n.match(No)||[];l=No.exec(i);)_=l[0],g=i.substring(u,l.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[f++]&&(m=parseFloat(h[f-1])||0,c._pt={_next:c._pt,p:g||f===1?g:",",s:m,c:_.charAt(1)==="="?$r(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},u=No.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=o,(qf.test(i)||p)&&(c.e=0),this._pt=c,c},Jc=function(e,t,n,i,s,a,o,c,u,f){gt(i)&&(i=i(s||0,e,a));var l=e[t],h=n!=="get"?n:gt(l)?u?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():l,d=gt(l)?u?l_:bd:eu,_;if(Lt(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(_=$r(h,i)+(kt(h)||0),(_||_===0)&&(i=_))),!f||h!==i||Hl)return!isNaN(h*i)&&i!==""?(_=new nn(this._pt,e,t,+h||0,i-(h||0),typeof l=="boolean"?u_:Ad,0,d),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!l&&!(t in e)&&Kc(t,i),i_.call(this,e,t,h,i,d,c||dn.stringFilter,u))},r_=function(e,t,n,i,s){if(gt(e)&&(e=js(e,s,t,n,i)),!Kn(e)||e.style&&e.nodeType||Vt(e)||Wf(e))return Lt(e)?js(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=js(e[o],s,t,n,i);return a},Sd=function(e,t,n,i,s,a){var o,c,u,f;if(un[e]&&(o=new un[e]).init(s,o.rawVars?t[e]:r_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Kr))for(u=n._ptLookup[n._targets.indexOf(s)],f=o._props.length;f--;)u[o._props[f]]=c;return o},Ri,Hl,Qc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,u=i.onUpdate,f=i.runBackwards,l=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Wc,v=e.timeline,b,w,A,C,y,T,P,z,O,G,q,V,Y;if(v&&(!h||!s)&&(s="none"),e._ease=hr(s,as.ease),e._yEase=l?vd(hr(l===!0?s:l,as.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!v&&!!i.runBackwards,!v||h&&!i.stagger){if(z=m[0]?cr(m[0]).harness:0,V=z&&i[z.prop],b=fo(i,jc),g&&(g._zTime<0&&g.progress(1),t<0&&f&&o&&!d?g.render(-1,!0):g.revert(f&&_?$a:Lm),g._lazy=0),a){if(Fi(e._startAt=Et.set(m,mn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&en(c),startAt:null,delay:0,onUpdate:u&&function(){return fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!d)&&e._startAt.revert($a),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&_&&!g){if(t&&(o=!1),A=mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&en(c),immediateRender:o,stagger:0,parent:p},b),V&&(A[z.prop]=V),Fi(e._startAt=Et.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert($a):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&en(c)||c&&!_,w=0;w<m.length;w++){if(y=m[w],P=y._gsap||$c(m)[w]._gsap,e._ptLookup[w]=G={},Nl[P.id]&&Ii.length&&ho(),q=x===m?w:x.indexOf(y),z&&(O=new z).init(y,V||b,e,q,x)!==!1&&(e._pt=C=new nn(e._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){G[H]=C}),O.priority&&(T=1)),!z||V)for(A in b)un[A]&&(O=Sd(A,b,e,q,y,x))?O.priority&&(T=1):G[A]=C=Jc.call(e,y,A,"get",b[A],q,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),M&&e._pt&&(Ri=e,ft.killTweensOf(y,G,e.globalTime(t)),Y=!e.parent,Ri=0),e._pt&&c&&(Nl[P.id]=1)}T&&Rd(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&v.render(Xn,!0,!0)},s_=function(e,t,n,i,s,a,o,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,l,h,d;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(f=h[d][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Hl=1,e.vars[t]="+=0",Qc(e,o),Hl=0,c?na(t+" not eligible for reset"):1;u.push(f)}for(d=u.length;d--;)l=u[d],f=l._pt||l,f.s=(i||i===0)&&!s?i:f.s+(i||0)+a*f.c,f.c=n-f.s,l.e&&(l.e=xt(n)+kt(l.e)),l.b&&(l.b=f.s+kt(l.b))},a_=function(e,t){var n=e[0]?cr(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=os({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},o_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,u){return o.push({t:u/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},js=function(e,t,n,i,s){return gt(e)?e.call(t,n,i,s):Lt(e)&&~e.indexOf("random(")?ra(e):e},Td=Zc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ed={};tn(Td+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ed[r]=1});var Et=function(r){Vf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ys(i))||this;var c=o.vars,u=c.duration,f=c.delay,l=c.immediateRender,h=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,x=i.parent||ft,M=(Vt(n)||Wf(n)?mi(n[0]):"length"in i)?[n]:Sn(n),v,b,w,A,C,y,T,P;if(o._targets=M.length?$c(M):na("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||ya(u)||ya(f)){if(i=o.vars,v=o.timeline=new Kt({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:M}),v.kill(),v.parent=v._dp=li(o),v._start=0,h||ya(u)||ya(f)){if(A=M.length,T=h&&ld(h),Kn(h))for(C in h)~Td.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(b=0;b<A;b++)w=fo(i,Ed),w.stagger=0,p&&(w.yoyoEase=p),P&&os(w,P),y=M[b],w.duration=+js(u,li(o),b,y,M),w.delay=(+js(f,li(o),b,y,M)||0)-o._delay,!h&&A===1&&w.delay&&(o._delay=f=w.delay,o._start+=f,w.delay=0),v.to(y,w,T?T(b,y,M):0),v._ease=He.none;v.duration()?u=f=0:o.timeline=0}else if(_){Ys(mn(v.vars.defaults,{ease:"none"})),v._ease=hr(_.ease||i.ease||"none");var z=0,O,G,q;if(Vt(_))_.forEach(function(V){return v.to(M,V,">")}),v.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||o_(C,_[C],w,_.easeEach);for(C in w)for(O=w[C].sort(function(V,Y){return V.t-Y.t}),z=0,b=0;b<O.length;b++)G=O[b],q={ease:G.e,duration:(G.t-(b?O[b-1].t:0))/100*u},q[C]=G.v,v.to(M,q,z),z+=q.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||o.duration(u=v.duration())}else o.timeline=0;return d===!0&&!Wc&&(Ri=li(o),ft.killTweensOf(M),Ri=0),Gn(x,li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(l||!u&&!_&&o._start===bt(x._time)&&en(l)&&Bm(li(o))&&x.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-f)||0)),m&&rd(li(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,u=this._dur,f=i<0,l=i>c-zt&&!f?c:i<zt?0:i,h,d,_,g,m,p,x,M,v;if(!u)zm(this,i,s,a);else if(l!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(h=l,M=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(g*100+i,s,a);if(h=bt(l%g),l===c?(_=this._repeat,h=u):(m=bt(l/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),p=this._yoyo&&_&1,p&&(v=this._yEase,h=u-h),m=ls(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=l,this;_!==m&&(M&&this._yEase&&xd(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(bt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(sd(this,f?i:h,a,s,l))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=l,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(h/u),this._from&&(this.ratio=x=1-x),h&&!o&&!s&&!_&&(fn(this,"onStart"),this._tTime!==l))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&Ol(this,i,s,a),fn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(l===this._tDur||!l)&&this._tTime===l&&(f&&!this._onUpdate&&Ol(this,i,!0,!0),(i||!u)&&(l===this._tDur&&this._ts>0||!l&&this._ts<0)&&Fi(this,1),!s&&!(f&&!o)&&(l||o||p)&&(fn(this,l===c?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){sa||hn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Qc(this,u),f=this._ease(u/this._dur),s_(this,i,s,a,o,f,u,c)?this.resetTo(i,s,a,o,1):(Co(this,0),this.parent||nd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ri&&Ri.vars.overwrite!==!0)._first||Gs(this),this.parent&&a!==this.timeline.totalDuration()&&cs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Sn(i):o,u=this._ptLookup,f=this._pt,l,h,d,_,g,m,p;if((!s||s==="all")&&Om(o,c))return s==="all"&&(this._pt=0),Gs(this);for(l=this._op=this._op||[],s!=="all"&&(Lt(s)&&(g={},tn(s,function(x){return g[x]=1}),s=g),s=a_(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){h=u[p],s==="all"?(l[p]=s,_=h,d={}):(d=l[p]=l[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&wo(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&f&&Gs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ks(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ks(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ft.killTweensOf(i,s,a)},e}(aa);mn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new Kt,t=Bl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var eu=function(e,t,n){return e[t]=n},bd=function(e,t,n){return e[t](n)},l_=function(e,t,n,i){return e[t](i.fp,n)},c_=function(e,t,n){return e.setAttribute(t,n)},tu=function(e,t){return gt(e[t])?bd:Xc(e[t])&&e.setAttribute?c_:eu},Ad=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},u_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},h_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},f_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},d_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},nn=function(){function r(t,n,i,s,a,o,c,u,f){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ad,this.d=c||this,this.set=u||eu,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=d_,this.m=n,this.mt=s,this.tween=i},r}();tn(Zc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jc[r]=1});pn.TweenMax=pn.TweenLite=Et;pn.TimelineLite=pn.TimelineMax=Kt;ft=new Kt({sortChildren:!1,defaults:as,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=gd;var fr=[],Qa={},p_=[],$u=0,m_=0,zo=function(e){return(Qa[e]||p_).map(function(t){return t()})},Vl=function(){var e=Date.now(),t=[];e-$u>2&&(zo("matchMediaInit"),fr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,u;for(o in i)a=zn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),c&&t.push(n))}),zo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),$u=e,zo("matchMedia"))},Cd=function(){function r(t,n){this.selector=n&&kl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=m_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){gt(n)&&(s=i,i=n,n=gt);var a=this,o=function(){var u=ut,f=a.selector,l;return u&&u!==a&&u.data.push(a),s&&(a.selector=kl(s)),ut=a,l=i.apply(a,arguments),gt(l)&&a._r.push(l),ut=u,a.selector=f,a.isReverted=!1,l};return a.last=o,n===gt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,u;c--;)u=s.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,l){return l.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),c=s.data.length;c--;)u=s.data[c],u instanceof Kt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Et)&&u.revert&&u.revert(n);s._r.forEach(function(f){return f(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=fr.length;a--;)fr[a].id===this.id&&fr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),__=function(){function r(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Kn(n)||(n={matches:n});var a=new Cd(0,s||this.scope),o=a.conditions={},c,u,f;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?f=1:(c=zn.matchMedia(n[u]),c&&(fr.indexOf(a)<0&&fr.push(a),(o[u]=c.matches)&&(f=1),c.addListener?c.addListener(Vl):c.addEventListener("change",Vl)));return f&&i(a,function(l){return a.add(null,l)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),mo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pd(i)})},timeline:function(e){return new Kt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){Lt(e)&&(e=Sn(e)[0]);var s=cr(e||{}).get,a=n?td:ed;return n==="native"&&(n=""),e&&(t?a((un[t]&&un[t].get||s)(e,t,n,i)):function(o,c,u){return a((un[o]&&un[o].get||s)(e,o,c,u))})},quickSetter:function(e,t,n){if(e=Sn(e),e.length>1){var i=e.map(function(f){return an.quickSetter(f,t,n)}),s=i.length;return function(f){for(var l=s;l--;)i[l](f)}}e=e[0]||{};var a=un[t],o=cr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(f){var l=new a;Kr._pt=0,l.init(e,n?f+n:f,Kr,0,[e]),l.render(1,l),Kr._pt&&nu(1,Kr)}:o.set(e,c);return a?u:function(f){return u(e,c,n?f+n:f,o,1)}},quickTo:function(e,t,n){var i,s=an.to(e,mn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,u,f){return s.resetTo(t,c,u,f)};return a.tween=s,a},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hr(e.ease,as.ease)),qu(as,e||{})},config:function(e){return qu(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!un[o]&&!pn[o]&&na(t+" effect requires "+o+" plugin.")}),Oo[t]=function(o,c,u){return n(Sn(o),mn(c||{},s),u)},a&&(Kt.prototype[t]=function(o,c,u){return this.add(Oo[t](o,Kn(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){He[e]=hr(t)},parseEase:function(e,t){return arguments.length?hr(e,t):He},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kt(e),i,s;for(n.smoothChildTiming=en(e.smoothChildTiming),ft.remove(n),n._dp=0,n._time=n._tTime=ft._time,i=ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Gn(n,i,i._start-i._delay),i=s;return Gn(ft,n,0),n},context:function(e,t){return e?new Cd(e,t):ut},matchMedia:function(e){return new __(e)},matchMediaRefresh:function(){return fr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Vl()},addEventListener:function(e,t){var n=Qa[e]||(Qa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Km,wrapYoyo:jm,distribute:ld,random:ud,snap:cd,normalize:Ym,getUnit:kt,clamp:Gm,splitColor:md,toArray:Sn,selector:kl,mapRange:fd,pipe:Xm,unitize:qm,interpolate:Zm,shuffle:od},install:jf,effects:Oo,ticker:hn,updateRoot:Kt.updateRoot,plugins:un,globalTimeline:ft,core:{PropTween:nn,globals:Zf,Tween:Et,Timeline:Kt,Animation:aa,getCache:cr,_removeLinkedListItem:wo,reverting:function(){return Ut},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Wc=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mo[r]=Et[r]});hn.add(Kt.updateRoot);Kr=mo.to({},{duration:0});var g_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},v_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=g_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ho=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,u;if(Lt(s)&&(c={},tn(s,function(f){return c[f]=1}),s=c),t){c={};for(u in s)c[u]=t(s[u]);s=c}v_(o,s)}}}},an=mo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ho("roundProps",zl),Ho("modifiers"),Ho("snap",cd))||mo;Et.version=Kt.version=an.version="3.12.7";Kf=1;qc()&&us();He.Power0;He.Power1;He.Power2;He.Power3;He.Power4;He.Linear;He.Quad;He.Cubic;He.Quart;He.Quint;He.Strong;He.Elastic;He.Back;He.SteppedEase;He.Bounce;He.Sine;He.Expo;He.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ju,Ci,Jr,iu,sr,Qu,ru,x_=function(){return typeof window<"u"},_i={},tr=180/Math.PI,Qr=Math.PI/180,Sr=Math.atan2,eh=1e8,su=/([A-Z])/g,y_=/(left|right|width|margin|padding|x)/i,M_=/[\s,\(]\S/,Wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},E_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b_=function(e,t,n){return e.style[t]=n},A_=function(e,t,n){return e.style.setProperty(t,n)},w_=function(e,t,n){return e._gsap[t]=n},R_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},C_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},P_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dt="transform",rn=dt+"Origin",D_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in _i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ui(i,o)}):this.tfm[e]=a.x?a[e]:ui(i,e),e===rn&&(this.tfm.zOrigin=a.zOrigin);else return Wn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(rn,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},Ld=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(su,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ru(),(!s||!s.isStart)&&!n[dt]&&(Ld(n),i.zOrigin&&n[rn]&&(n[rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Id=function(e,t){var n={target:e,props:[],revert:L_,save:D_};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ud,Wl=function(e,t){var n=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return n&&n.style?n:Ci.createElement(e)},qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(su,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,hs(t)||t,1)||""},th="O,Moz,ms,Ms,Webkit".split(","),hs=function(e,t,n){var i=t||sr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(th[a]+e in s););return a<0?null:(a===3?"ms":a>=0?th[a]:"")+e},Xl=function(){x_()&&window.document&&(Ju=window,Ci=Ju.document,Jr=Ci.documentElement,sr=Wl("div")||{style:{}},Wl("div"),dt=hs(dt),rn=dt+"Origin",sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ud=!!hs("perspective"),ru=an.core.reverting,iu=1)},nh=function(e){var t=e.ownerSVGElement,n=Wl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Jr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Jr.removeChild(n),s},ih=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Nd=function(e){var t,n;try{t=e.getBBox()}catch{t=nh(e),n=1}return t&&(t.width||t.height)||n||(t=nh(e)),t&&!t.width&&!t.x&&!t.y?{x:+ih(e,["x","cx","x1"])||0,y:+ih(e,["y","cy","y1"])||0,width:0,height:0}:t},Od=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Nd(e))},pr=function(e,t){if(t){var n=e.style,i;t in _i&&t!==rn&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(su,"-$1").toLowerCase())):n.removeAttribute(t)}},Pi=function(e,t,n,i,s,a){var o=new nn(e._pt,t,n,0,1,a?Dd:Pd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},rh={deg:1,rad:1,turn:1},I_={grid:1,flex:1},Bi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=sr.style,c=y_.test(t),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(c?"Width":"Height"),l=100,h=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||rh[i]||rh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Od(e),(d||a==="%")&&(_i[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[f],xt(d?s/_*l:s/100*_);if(o[c?"width":"height"]=l+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ci||!g.appendChild)&&(g=Ci.body),m=g._gsap,m&&d&&m.width&&c&&m.time===hn.time&&!m.uncache)return xt(s/m.width*l);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=l+i,_=e[f],x?e.style[t]=x:pr(e,t)}else(d||a==="%")&&!I_[qn(g,"display")]&&(o.position=qn(e,"position")),g===e&&(o.position="static"),g.appendChild(sr),_=sr[f],g.removeChild(sr),o.position="absolute";return c&&d&&(m=cr(g),m.time=hn.time,m.width=g[f]),xt(h?_*s/l:_&&s?l/_*s:0)},ui=function(e,t,n,i){var s;return iu||Xl(),t in Wn&&t!=="transform"&&(t=Wn[t],~t.indexOf(",")&&(t=t.split(",")[0])),_i[t]&&t!=="transform"?(s=la(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:go(qn(e,rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_o[t]&&_o[t](e,t,n)||qn(e,t)||Jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Bi(e,t,s,n)+n:s},U_=function(e,t,n,i){if(!n||n==="none"){var s=hs(t,e,1),a=s&&qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var o=new nn(this._pt,e.style,t,0,1,wd),c=0,u=0,f,l,h,d,_,g,m,p,x,M,v,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=qn(e,t)||i,g?e.style[t]=g:pr(e,t)),f=[n,i],gd(f),n=f[0],i=f[1],h=n.match(Yr)||[],b=i.match(Yr)||[],b.length){for(;l=Yr.exec(i);)m=l[0],x=i.substring(c,l.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=$r(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),c=Yr.lastIndex-M.length,M||(M=M||dn.units[t]||v,c===i.length&&(i+=M,o.e+=M)),v!==M&&(d=Bi(e,t,g,M)||0),o._pt={_next:o._pt,p:x||u===1?x:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Dd:Pd;return qf.test(i)&&(o.e=0),this._pt=o,o},sh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=sh[n]||n,t[1]=sh[i]||i,t.join(" ")},O_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,u;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],_i[o]&&(c=1,o=o==="transformOrigin"?rn:dt),pr(n,o);c&&(pr(n,dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",la(n,1),a.uncache=1,Ld(i)))}},_o={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new nn(e._pt,t,n,0,0,O_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},oa=[1,0,0,1,0,0],Fd={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ah=function(e){var t=qn(e,dt);return Bd(t)?oa:t.substr(7).match(Xf).map(xt)},au=function(e,t){var n=e._gsap||cr(e),i=e.style,s=ah(e),a,o,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!e.offsetParent&&e!==Jr&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Jr.appendChild(e)),s=ah(e),c?i.display=c:pr(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ql=function(e,t,n,i,s,a){var o=e._gsap,c=s||au(e,!0),u=o.xOrigin||0,f=o.yOrigin||0,l=o.xOffset||0,h=o.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],x=c[5],M=t.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,A,C,y;n?c!==oa&&(A=d*m-_*g)&&(C=v*(m/A)+b*(-g/A)+(g*x-m*p)/A,y=v*(-_/A)+b*(d/A)-(d*x-_*p)/A,v=C,b=y):(w=Nd(e),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(p=v-u,x=b-f,o.xOffset=l+(p*d+x*g)-p,o.yOffset=h+(p*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[rn]="0px 0px",a&&(Pi(a,o,"xOrigin",u,v),Pi(a,o,"yOrigin",f,b),Pi(a,o,"xOffset",l,o.xOffset),Pi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},la=function(e,t){var n=e._gsap||new Md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),u=qn(e,rn)||"0",f,l,h,d,_,g,m,p,x,M,v,b,w,A,C,y,T,P,z,O,G,q,V,Y,H,te,oe,me,Ae,Ze,X,Q;return f=l=h=g=m=p=x=M=v=0,d=_=1,n.svg=!!(e.getCTM&&Od(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),i.scale=i.rotate=i.translate="none"),A=au(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),u=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ql(e,Y||u,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==oa&&(P=A[0],z=A[1],O=A[2],G=A[3],f=q=A[4],l=V=A[5],A.length===6?(d=Math.sqrt(P*P+z*z),_=Math.sqrt(G*G+O*O),g=P||z?Sr(z,P)*tr:0,x=O||G?Sr(O,G)*tr+g:0,x&&(_*=Math.abs(Math.cos(x*Qr))),n.svg&&(f-=b-(b*P+w*O),l-=w-(b*z+w*G))):(Q=A[6],Ze=A[7],oe=A[8],me=A[9],Ae=A[10],X=A[11],f=A[12],l=A[13],h=A[14],C=Sr(Q,Ae),m=C*tr,C&&(y=Math.cos(-C),T=Math.sin(-C),Y=q*y+oe*T,H=V*y+me*T,te=Q*y+Ae*T,oe=q*-T+oe*y,me=V*-T+me*y,Ae=Q*-T+Ae*y,X=Ze*-T+X*y,q=Y,V=H,Q=te),C=Sr(-O,Ae),p=C*tr,C&&(y=Math.cos(-C),T=Math.sin(-C),Y=P*y-oe*T,H=z*y-me*T,te=O*y-Ae*T,X=G*T+X*y,P=Y,z=H,O=te),C=Sr(z,P),g=C*tr,C&&(y=Math.cos(C),T=Math.sin(C),Y=P*y+z*T,H=q*y+V*T,z=z*y-P*T,V=V*y-q*T,P=Y,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=xt(Math.sqrt(P*P+z*z+O*O)),_=xt(Math.sqrt(V*V+Q*Q)),C=Sr(q,V),x=Math.abs(C)>2e-4?C*tr:0,v=X?1/(X<0?-X:X):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(qn(e,dt)),Y&&e.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=l-((n.yPercent=l&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-l)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=xt(d),n.scaleY=xt(_),n.rotation=xt(g)+o,n.rotationX=xt(m)+o,n.rotationY=xt(p)+o,n.skewX=x+o,n.skewY=M+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[rn]=go(u)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?B_:Ud?kd:F_,n.uncache=0,n},go=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vo=function(e,t,n){var i=kt(t);return xt(parseFloat(t)+parseFloat(Bi(e,"x",n+"px",i)))+i},F_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kd(e,t)},qi="0deg",Ps="0px",Yi=") ",kd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,u=n.rotation,f=n.rotationY,l=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,M=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(l!==qi||f!==qi)){var w=parseFloat(f)*Qr,A=Math.sin(w),C=Math.cos(w),y;w=parseFloat(l)*Qr,y=Math.cos(w),a=Vo(x,a,A*y*-M),o=Vo(x,o,-Math.sin(w)*-M),c=Vo(x,c,C*y*-M+M)}m!==Ps&&(v+="perspective("+m+Yi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||a!==Ps||o!==Ps||c!==Ps)&&(v+=c!==Ps||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Yi),u!==qi&&(v+="rotate("+u+Yi),f!==qi&&(v+="rotateY("+f+Yi),l!==qi&&(v+="rotateX("+l+Yi),(h!==qi||d!==qi)&&(v+="skew("+h+", "+d+Yi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Yi),x.style[dt]=v||"translate(0, 0)"},B_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,u=n.skewX,f=n.skewY,l=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,M=parseFloat(a),v=parseFloat(o),b,w,A,C,y;c=parseFloat(c),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,c+=f),c||u?(c*=Qr,u*=Qr,b=Math.cos(c)*l,w=Math.sin(c)*l,A=Math.sin(c-u)*-h,C=Math.cos(c-u)*h,u&&(f*=Qr,y=Math.tan(u-f),y=Math.sqrt(1+y*y),A*=y,C*=y,f&&(y=Math.tan(f),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=xt(b),w=xt(w),A=xt(A),C=xt(C)):(b=l,C=h,w=A=0),(M&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=Bi(d,"x",a,"px"),v=Bi(d,"y",o,"px")),(_||g||m||p)&&(M=xt(M+_-(_*b+g*A)+m),v=xt(v+g-(_*w+g*C)+p)),(i||s)&&(y=d.getBBox(),M=xt(M+i/100*y.width),v=xt(v+s/100*y.height)),y="matrix("+b+","+w+","+A+","+C+","+M+","+v+")",d.setAttribute("transform",y),x&&(d.style[dt]=y)},k_=function(e,t,n,i,s){var a=360,o=Lt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?tr:1),u=c-i,f=i+u+"deg",l,h;return o&&(l=s.split("_")[1],l==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-360)),l==="cw"&&u<0?u=(u+a*eh)%a-~~(u/a)*a:l==="ccw"&&u>0&&(u=(u-a*eh)%a-~~(u/a)*a)),e._pt=h=new nn(e._pt,t,n,i,u,S_),h.e=f,h.u="deg",e._props.push(n),h},oh=function(e,t){for(var n in t)e[n]=t[n];return e},z_=function(e,t,n){var i=oh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,u,f,l,h,d,_;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[dt]=t,o=la(n,1),pr(n,dt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[dt],a[dt]=t,o=la(n,1),a[dt]=u);for(c in _i)u=i[c],f=o[c],u!==f&&s.indexOf(c)<0&&(d=kt(u),_=kt(f),l=d!==_?Bi(n,c,u,_):parseFloat(u),h=parseFloat(f),e._pt=new nn(e._pt,o,c,l,h-l,Gl),e._pt.u=_||0,e._props.push(c));oh(o,i)};tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});_o[e>1?"border"+r:r]=function(o,c,u,f,l){var h,d;if(arguments.length<4)return h=a.map(function(_){return ui(o,_,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(f+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(c,d,l)}});var zd={name:"css",register:Xl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,u,f,l,h,d,_,g,m,p,x,M,v,b,w,A,C;iu||Xl(),this.styles=this.styles||Id(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(f=t[g],!(un[g]&&Sd(g,t,n,i,e,s)))){if(d=typeof f,_=_o[g],d==="function"&&(f=f.call(n,i,e,s),d=typeof f),d==="string"&&~f.indexOf("random(")&&(f=ra(f)),_)_(this,e,g,f,n)&&(A=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),f+="",Ui.lastIndex=0,Ui.test(u)||(m=kt(u),p=kt(f)),p?m!==p&&(u=Bi(e,g,u,p)+p):m&&(f+=m),this.add(o,"setProperty",u,f,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(c&&g in c?(u=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],Lt(u)&&~u.indexOf("random(")&&(u=ra(u)),kt(u+"")||u==="auto"||(u+=dn.units[g]||kt(ui(e,g))||""),(u+"").charAt(1)==="="&&(u=ui(e,g))):u=ui(e,g),h=parseFloat(u),x=d==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),l=parseFloat(f),g in Wn&&(g==="autoAlpha"&&(h===1&&ui(e,"visibility")==="hidden"&&l&&(h=0),C.push("visibility",0,o.visibility),Pi(this,o,"visibility",h?"inherit":"hidden",l?"inherit":"hidden",!l)),g!=="scale"&&g!=="transform"&&(g=Wn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in _i,M){if(this.styles.save(g),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||la(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new nn(this._pt,o,dt,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new nn(this._pt,b,"scaleY",b.scaleY,(x?$r(b.scaleY,x+l):l)-b.scaleY||0,Gl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(rn,0,o[rn]),f=N_(f),b.svg?ql(e,f,0,w,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==b.zOrigin&&Pi(this,b,"zOrigin",b.zOrigin,p),Pi(this,o,g,go(u),go(f)));continue}else if(g==="svgOrigin"){ql(e,f,1,w,0,this);continue}else if(g in Fd){k_(this,b,g,h,x?$r(h,x+f):f);continue}else if(g==="smoothOrigin"){Pi(this,b,"smooth",b.smooth,f);continue}else if(g==="force3D"){b[g]=f;continue}else if(g==="transform"){z_(this,f,e);continue}}else g in o||(g=hs(g)||g);if(M||(l||l===0)&&(h||h===0)&&!M_.test(f)&&g in o)m=(u+"").substr((h+"").length),l||(l=0),p=kt(f)||(g in dn.units?dn.units[g]:m),m!==p&&(h=Bi(e,g,u,p)),this._pt=new nn(this._pt,M?b:o,g,h,(x?$r(h,x+l):l)-h,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?E_:Gl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=T_);else if(g in o)U_.call(this,e,g,u,x?x+f:f);else if(g in e)this.add(e,g,u||e[g],x?x+f:f,i,s);else if(g!=="parseTransform"){Kc(g,f);continue}M||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,u||e[g])),a.push(g)}}A&&Rd(this)},render:function(e,t){if(t.tween._time||!ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ui,aliases:Wn,getSetter:function(e,t,n){var i=Wn[t];return i&&i.indexOf(",")<0&&(t=i),t in _i&&t!==rn&&(e._gsap.x||ui(e,"x"))?n&&Qu===n?t==="scale"?R_:w_:(Qu=n||{})&&(t==="scale"?C_:P_):e.style&&!Xc(e.style[t])?b_:~t.indexOf("-")?A_:tu(e,t)},core:{_removeProperty:pr,_getMatrix:au}};an.utils.checkPrefix=hs;an.core.getStyleSaver=Id;(function(r,e,t,n){var i=tn(r+","+e+","+t,function(s){_i[s]=1});tn(e,function(s){dn.units[s]="deg",Fd[s]=1}),Wn[i[13]]=r+","+e,tn(n,function(s){var a=s.split(":");Wn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){dn.units[r]="px"});an.registerPlugin(zd);var Ee=an.registerPlugin(zd)||an;Ee.core.Tween;var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Go={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var lh;function H_(){return lh||(lh=1,function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||f(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var _=h._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=h._howls[d]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||f(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var _=h._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=h._howls[d]._soundById(_[g]);m&&m._node&&(m._node.muted=l?!0:m._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,f()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),_=l._navigator?l._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,p=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,x=_.match(/Version\/(.*?) /),M=p&&x&&parseInt(x[1],10)<15;return l._codecs={mp3:!!(!m&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!M&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!M&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,l._releaseHtml5Audio(_)}catch{l.noAudio=!0;break}for(var g=0;g<l._howls.length;g++)if(!l._howls[g]._webAudio)for(var m=l._howls[g]._getSoundIds(),p=0;p<m.length;p++){var x=l._howls[g]._soundById(m[p]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}l._autoResume();var M=l.ctx.createBufferSource();M.buffer=l._scratchBuffer,M.connect(l.ctx.destination),typeof M.start>"u"?M.noteOn(0):M.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),M.onended=function(){M.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var v=0;v<l._howls.length;v++)l._howls[v]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var _=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(_,_)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,n=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};n.prototype={init:function(l){var h=this;return t.ctx||f(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var _,g;if(l._format&&l._format[d])_=l._format[d];else{if(g=l._src[d],typeof g!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new i(l),l._webAudio&&a(l),l},play:function(l,h){var d=this,_=null;if(typeof l=="number")_=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var g=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(g++,_=d._sounds[m]._id);g===1?l=null:_=null}}var p=_?d._soundById(_):d._inactiveSound();if(!p)return null;if(_&&!l&&(l=p._sprite||"__default"),d._state!=="loaded"){p._sprite=l,p._ended=!1;var x=p._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(_&&!p._paused)return h||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var M=Math.max(0,p._seek>0?p._seek:d._sprite[l][0]/1e3),v=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-M),b=v*1e3/Math.abs(p._rate),w=d._sprite[l][0]/1e3,A=(d._sprite[l][0]+d._sprite[l][1])/1e3;p._sprite=l,p._ended=!1;var C=function(){p._paused=!1,p._seek=M,p._start=w,p._stop=A,p._loop=!!(p._loop||d._sprite[l][2])};if(M>=A){d._ended(p);return}var y=p._node;if(d._webAudio){var T=function(){d._playLock=!1,C(),d._refreshBuffer(p);var G=p._muted||d._muted?0:p._volume;y.gain.setValueAtTime(G,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?p._loop?y.bufferSource.noteGrainOn(0,M,86400):y.bufferSource.noteGrainOn(0,M,v):p._loop?y.bufferSource.start(0,M,86400):y.bufferSource.start(0,M,v),b!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),b)),h||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(d._playLock=!0,d.once("resume",T),d._clearTimer(p._id))}else{var P=function(){y.currentTime=M,y.muted=p._muted||d._muted||t._muted||y.muted,y.volume=p._volume*t.volume(),y.playbackRate=p._rate;try{var G=y.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(d._playLock=!0,C(),G.then(function(){d._playLock=!1,y._unlocked=!0,h?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):h||(d._playLock=!1,C(),d._emit("play",p._id)),y.playbackRate=p._rate,y.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),b):(d._endTimers[p._id]=function(){d._ended(p),y.removeEventListener("ended",d._endTimers[p._id],!1)},y.addEventListener("ended",d._endTimers[p._id],!1))}catch(q){d._emit("playerror",p._id,q)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=d._src,y.load());var z=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||z)P();else{d._playLock=!0,d._state="loading";var O=function(){d._state="loaded",P(),y.removeEventListener(t._canPlayEvent,O,!1)};y.addEventListener(t._canPlayEvent,O,!1),d._clearTimer(p._id)}}return p._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),_=0;_<d.length;_++){h._clearTimer(d[_]);var g=h._soundById(d[_]);if(g&&!g._paused&&(g._seek=h.seek(d[_]),g._rateSeek=0,g._paused=!0,h._stopFade(d[_]),g._node))if(h._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),h._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||h._emit("pause",g?g._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var _=d._getSoundIds(l),g=0;g<_.length;g++){d._clearTimer(_[g]);var m=d._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(_[g]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),h||d._emit("stop",m._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var _=d._getSoundIds(h),g=0;g<_.length;g++){var m=d._soundById(_[g]);m&&(m._muted=l,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(l?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:l),d._emit("mute",m._id))}return d},volume:function(){var l=this,h=arguments,d,_;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var g=l._getSoundIds(),m=g.indexOf(h[0]);m>=0?_=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),_=parseInt(h[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof _>"u"&&(l._volume=d),_=l._getSoundIds(_);for(var x=0;x<_.length;x++)p=l._soundById(_[x]),p&&(p._volume=d,h[2]||l._stopFade(_[x]),l._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),l._emit("volume",p._id))}else return p=_?l._soundById(_):l._sounds[0],p?p._volume:0;return l},fade:function(l,h,d,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(l,h,d,_)}}),g;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),g.volume(l,_);for(var m=g._getSoundIds(_),p=0;p<m.length;p++){var x=g._soundById(m[p]);if(x){if(_||g._stopFade(m[p]),g._webAudio&&!x._muted){var M=t.ctx.currentTime,v=M+d/1e3;x._volume=l,x._node.gain.setValueAtTime(l,M),x._node.gain.linearRampToValueAtTime(h,v)}g._startFadeInterval(x,l,h,d,m[p],typeof _>"u")}}return g},_startFadeInterval:function(l,h,d,_,g,m){var p=this,x=h,M=d-h,v=Math.abs(M/.01),b=Math.max(4,v>0?_/v:_),w=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var A=(Date.now()-w)/_;w=Date.now(),x+=M*A,x=Math.round(x*100)/100,M<0?x=Math.max(d,x):x=Math.min(d,x),p._webAudio?l._volume=x:p.volume(x,l._id,!0),m&&(p._volume=x),(d<h&&x<=d||d>h&&x>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,p.volume(d,l._id),p._emit("fade",l._id))},b)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,_,g;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return g=l._soundById(parseInt(h[0],10)),g?g._loop:!1;else h.length===2&&(d=h[0],_=parseInt(h[1],10));for(var m=l._getSoundIds(_),p=0;p<m.length;p++)g=l._soundById(m[p]),g&&(g._loop=d,l._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=d,d&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,l.playing(m[p])&&(l.pause(m[p],!0),l.play(m[p],!0)))));return l},rate:function(){var l=this,h=arguments,d,_;if(h.length===0)_=l._sounds[0]._id;else if(h.length===1){var g=l._getSoundIds(),m=g.indexOf(h[0]);m>=0?_=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),_=parseInt(h[1],10));var p;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof _>"u"&&(l._rate=d),_=l._getSoundIds(_);for(var x=0;x<_.length;x++)if(p=l._soundById(_[x]),p){l.playing(_[x])&&(p._rateSeek=l.seek(_[x]),p._playStart=l._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,l._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var M=l.seek(_[x]),v=(l._sprite[p._sprite][0]+l._sprite[p._sprite][1])/1e3-M,b=v*1e3/Math.abs(p._rate);(l._endTimers[_[x]]||!p._paused)&&(l._clearTimer(_[x]),l._endTimers[_[x]]=setTimeout(l._ended.bind(l,p),b)),l._emit("rate",p._id)}}else return p=l._soundById(_),p?p._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,_;if(h.length===0)l._sounds.length&&(_=l._sounds[0]._id);else if(h.length===1){var g=l._getSoundIds(),m=g.indexOf(h[0]);m>=0?_=parseInt(h[0],10):l._sounds.length&&(_=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),_=parseInt(h[1],10));if(typeof _>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var p=l._soundById(_);if(p)if(typeof d=="number"&&d>=0){var x=l.playing(_);x&&l.pause(_,!0),p._seek=d,p._ended=!1,l._clearTimer(_),!l._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var M=function(){x&&l.play(_,!0),l._emit("seek",_)};if(x&&!l._webAudio){var v=function(){l._playLock?setTimeout(v,0):M()};setTimeout(v,0)}else M()}else if(l._webAudio){var b=l.playing(_)?t.ctx.currentTime-p._playStart:0,w=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(w+b*Math.abs(p._rate))}else return p._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var _=0;_<h._sounds.length;_++)if(!h._sounds[_]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,_=h._soundById(l);return _&&(d=h._sprite[_._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var _=t._howls.indexOf(l);_>=0&&t._howls.splice(_,1);var g=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){g=!1;break}return g&&delete s[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,_){var g=this,m=g["_on"+l];return typeof h=="function"&&m.push(_?{id:d,fn:h,once:_}:{id:d,fn:h}),g},off:function(l,h,d){var _=this,g=_["_on"+l],m=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(m=0;m<g.length;m++){var p=d===g[m].id;if(h===g[m].fn&&p||!h&&p){g.splice(m,1);break}}else if(l)_["_on"+l]=[];else{var x=Object.keys(_);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(_[x[m]])&&(_[x[m]]=[])}return _},once:function(l,h,d){var _=this;return _.on(l,h,d,1),_},_emit:function(l,h,d){for(var _=this,g=_["_on"+l],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===h||l==="load")&&(setTimeout((function(p){p.call(this,h,d)}).bind(_,g[m].fn),0),g[m].once&&_.off(l,g[m].fn,g[m].id));return _._loadQueue(l),_},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var _=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&_&&h.stop(l._id,!0).play(l._id),h._webAudio&&_){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var g=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),g)}return h._webAudio&&!_&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!_&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new i(l)},_drain:function(){var l=this,h=l._pool,d=0,_=0;if(!(l._sounds.length<h)){for(_=0;_<l._sounds.length;_++)l._sounds[_]._ended&&d++;for(_=l._sounds.length-1;_>=0;_--){if(d<=h)return;l._sounds[_]._ended&&(l._webAudio&&l._sounds[_]._node&&l._sounds[_]._node.disconnect(0),l._sounds.splice(_,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],_=0;_<h._sounds.length;_++)d.push(h._sounds[_]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=s[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(l){this._parent=l,this.init()};i.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var s={},a=function(l){var h=l._src;if(s[h]){l._duration=s[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),_=new Uint8Array(d.length),g=0;g<d.length;++g)_[g]=d.charCodeAt(g);c(_.buffer,l)}else{var m=new XMLHttpRequest;m.open(l._xhr.method,h,!0),m.withCredentials=l._xhr.withCredentials,m.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(p){m.setRequestHeader(p,l._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}c(m.response,l)},m.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete s[h],l.load())},o(m)}},o=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&h._sounds.length>0?(s[h._src]=g,u(h,g)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(_).catch(d):t.ctx.decodeAudioData(l,_,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof Ds<"u"?(Ds.HowlerGlobal=e,Ds.Howler=t,Ds.Howl=n,Ds.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,a,o){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,s=typeof s!="number"?u[3]:s,a=typeof a!="number"?u[4]:a,o=typeof o!="number"?u[5]:o,typeof t=="number")c._orientation=[t,n,i,s,a,o],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,s,a,o);else return u;return c},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),o=0;o<a.length;o++){var c=i._soundById(a[o]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,s),s==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,s)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var o=a._getSoundIds(s),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var o=a._getSoundIds(s),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var o=t._getSoundIds(s),c=0;c<o.length;c++)if(a=t._soundById(o[c]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var f=a._panner;f||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),f=a._panner),f.coneInnerAngle=u.coneInnerAngle,f.coneOuterAngle=u.coneOuterAngle,f.coneOuterGain=u.coneOuterGain,f.distanceModel=u.distanceModel,f.maxDistance=u.maxDistance,f.refDistance=u.refDistance,f.rolloffFactor=u.rolloffFactor,f.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(Go)),Go}var ou=H_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="172",es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V_=0,ch=1,G_=2,Hd=1,W_=2,oi=3,gi=0,sn=1,Pn=2,Ni=0,ts=1,uh=2,hh=3,fh=4,X_=5,ir=100,q_=101,Y_=102,K_=103,j_=104,Z_=200,$_=201,J_=202,Q_=203,Yl=204,Kl=205,eg=206,tg=207,ng=208,ig=209,rg=210,sg=211,ag=212,og=213,lg=214,jl=0,Zl=1,$l=2,fs=3,Jl=4,Ql=5,ec=6,tc=7,Vd=0,cg=1,ug=2,Oi=0,hg=1,fg=2,dg=3,pg=4,mg=5,_g=6,gg=7,dh="attached",vg="detached",Gd=300,ds=301,ps=302,nc=303,ic=304,Po=306,ki=1e3,Di=1001,vo=1002,Zt=1003,Wd=1004,Xs=1005,yt=1006,eo=1007,hi=1008,vi=1009,Xd=1010,qd=1011,ca=1012,cu=1013,mr=1014,In=1015,ma=1016,uu=1017,hu=1018,ms=1020,Yd=35902,Kd=1021,jd=1022,Tn=1023,Zd=1024,$d=1025,ns=1026,_s=1027,fu=1028,du=1029,Jd=1030,pu=1031,mu=1033,to=33776,no=33777,io=33778,ro=33779,rc=35840,sc=35841,ac=35842,oc=35843,lc=36196,cc=37492,uc=37496,hc=37808,fc=37809,dc=37810,pc=37811,mc=37812,_c=37813,gc=37814,vc=37815,xc=37816,yc=37817,Mc=37818,Sc=37819,Tc=37820,Ec=37821,so=36492,bc=36494,Ac=36495,Qd=36283,wc=36284,Rc=36285,Cc=36286,ua=2300,ha=2301,Wo=2302,ph=2400,mh=2401,_h=2402,xg=2500,yg=0,ep=1,Pc=2,Mg=3200,Sg=3201,tp=0,Tg=1,wi="",ct="srgb",Gt="srgb-linear",xo="linear",nt="srgb",Tr=7680,gh=519,Eg=512,bg=513,Ag=514,np=515,wg=516,Rg=517,Cg=518,Pg=519,Dc=35044,vh="300 es",fi=2e3,yo=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const Zs=Math.PI/180,gs=180/Math.PI;function Nn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Fe(r,e,t){return Math.max(e,Math.min(t,r))}function _u(r,e){return(r%e+e)%e}function Dg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Lg(r,e,t){return r!==e?(t-r)/(e-r):0}function $s(r,e,t){return(1-t)*r+t*e}function Ig(r,e,t,n){return $s(r,e,1-Math.exp(-t*n))}function Ug(r,e=1){return e-Math.abs(_u(r,e*2)-e)}function Ng(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Og(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Bg(r,e){return r+Math.random()*(e-r)}function kg(r){return r*(.5-Math.random())}function zg(r){r!==void 0&&(xh=r);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hg(r){return r*Zs}function Vg(r){return r*gs}function Gg(r){return(r&r-1)===0&&r!==0}function Wg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),f=a((e+n)/2),l=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*f,c*l,c*h,o*u);break;case"YZY":r.set(c*h,o*f,c*l,o*u);break;case"ZXZ":r.set(c*l,c*h,o*f,o*u);break;case"XZX":r.set(o*f,c*_,c*d,o*u);break;case"YXY":r.set(c*d,o*f,c*_,o*u);break;case"ZYZ":r.set(c*_,c*d,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ip={DEG2RAD:Zs,RAD2DEG:gs,generateUUID:Nn,clamp:Fe,euclideanModulo:_u,mapLinear:Dg,inverseLerp:Lg,lerp:$s,damp:Ig,pingpong:Ug,smoothstep:Ng,smootherstep:Og,randInt:Fg,randFloat:Bg,randFloatSpread:kg,seededRandom:zg,degToRad:Hg,radToDeg:Vg,isPowerOfTwo:Gg,ceilPowerOfTwo:Wg,floorPowerOfTwo:Xg,setQuaternionFromProperEuler:qg,normalize:et,denormalize:Dn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,s,a,o,c,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,u)}set(e,t,n,i,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],f=n[4],l=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],M=i[4],v=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*g+o*x+c*b,s[3]=a*m+o*M+c*w,s[6]=a*p+o*v+c*A,s[1]=u*g+f*x+l*b,s[4]=u*m+f*M+l*w,s[7]=u*p+f*v+l*A,s[2]=h*g+d*x+_*b,s[5]=h*m+d*M+_*w,s[8]=h*p+d*v+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-n*s*f+n*o*c+i*s*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=f*a-o*u,h=o*c-f*s,d=u*s-a*c,_=t*l+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=l*g,e[1]=(i*u-f*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(f*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*c-u*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Ue;function rp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yg(){const r=fa("canvas");return r.style.display="block",r}const yh={};function Br(r){r in yh||(yh[r]=!0,console.warn(r))}function Kg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function jg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mh=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){const r={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?xo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gt]:{primaries:e,whitePoint:n,transfer:xo,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),r}const ze=$g();function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class Jg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=fa("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qg=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(qo(i[a].image)):s.push(qo(i[a]))}else s=qo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class At extends vr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Di,i=Di,s=yt,a=hi,o=Tn,c=vi,u=At.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Nn(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Gd;At.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],f=c[4],l=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(l-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(l+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,v=(d+1)/2,b=(p+1)/2,w=(f+h)/4,A=(l+g)/4,C=(_+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(l-g)*(l-g)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(l-g)/x,this.z=(h-f)/x,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new sp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends t0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ap extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],u=n[i+1],f=n[i+2],l=n[i+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(l!==g||c!==h||u!==d||f!==_){let m=1-o;const p=c*h+u*d+f*_+l*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),w=Math.atan2(b,p*x);m=Math.sin(m*w)/b,o=Math.sin(o*w)/b}const v=o*x;if(c=c*m+h*v,u=u*m+d*v,f=f*m+_*v,l=l*m+g*v,m===1-o){const b=1/Math.sqrt(c*c+u*u+f*f+l*l);c*=b,u*=b,f*=b,l*=b}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],u=n[i+2],f=n[i+3],l=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+f*l+c*d-u*h,e[t+1]=c*_+f*h+u*l-o*d,e[t+2]=u*_+f*d+o*h-c*l,e[t+3]=f*_-o*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),f=o(i/2),l=o(s/2),h=c(n/2),d=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=h*f*l+u*d*_,this._y=u*d*l-h*f*_,this._z=u*f*_+h*d*l,this._w=u*f*l-h*d*_;break;case"YXZ":this._x=h*f*l+u*d*_,this._y=u*d*l-h*f*_,this._z=u*f*_-h*d*l,this._w=u*f*l+h*d*_;break;case"ZXY":this._x=h*f*l-u*d*_,this._y=u*d*l+h*f*_,this._z=u*f*_+h*d*l,this._w=u*f*l-h*d*_;break;case"ZYX":this._x=h*f*l-u*d*_,this._y=u*d*l+h*f*_,this._z=u*f*_-h*d*l,this._w=u*f*l+h*d*_;break;case"YZX":this._x=h*f*l+u*d*_,this._y=u*d*l+h*f*_,this._z=u*f*_-h*d*l,this._w=u*f*l-h*d*_;break;case"XZY":this._x=h*f*l-u*d*_,this._y=u*d*l-h*f*_,this._z=u*f*_+h*d*l,this._w=u*f*l+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],f=t[6],l=t[10],h=n+o+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(s-u)*d,this._z=(a-i)*d}else if(n>o&&n>l){const d=2*Math.sqrt(1+n-o-l);this._w=(f-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+u)/d}else if(o>l){const d=2*Math.sqrt(1+o-n-l);this._w=(s-u)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+l-n-o);this._w=(a-i)/d,this._x=(s+u)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+a*o+i*u-s*c,this._y=i*f+a*c+s*o-n*u,this._z=s*f+a*u+n*c-i*o,this._w=a*f-n*o-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),l=Math.sin((1-t)*f)/u,h=Math.sin(t*f)/u;return this._w=a*l+this._w*h,this._x=n*l+this._x*h,this._y=i*l+this._y*h,this._z=s*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*i-o*n),f=2*(o*t-s*i),l=2*(s*n-a*t);return this.x=t+c*u+a*l-o*f,this.y=n+c*f+o*u-s*l,this.z=i+c*l+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new L,Th=new jn;class $n{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Sa.subVectors(this.max,Ls),br.subVectors(e.a,Ls),Ar.subVectors(e.b,Ls),wr.subVectors(e.c,Ls),xi.subVectors(Ar,br),yi.subVectors(wr,Ar),Ki.subVectors(br,wr);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ki.z,Ki.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ki.z,0,-Ki.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ki.y,Ki.x,0];return!Ko(t,br,Ar,wr,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,br,Ar,wr,Sa))?!1:(Ta.crossVectors(xi,yi),t=[Ta.x,Ta.y,Ta.z],Ko(t,br,Ar,wr,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,Ma=new $n,br=new L,Ar=new L,wr=new L,xi=new L,yi=new L,Ki=new L,Ls=new L,Sa=new L,Ta=new L,ji=new L;function Ko(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ji.fromArray(r,s);const o=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),c=e.dot(ji),u=t.dot(ji),f=n.dot(ji);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const i0=new $n,Is=new L,jo=new L;class Jn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):i0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(jo)),this.expandByPoint(Is.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new L,Zo=new L,Ea=new L,Mi=new L,$o=new L,ba=new L,Jo=new L;class Es{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zo.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ea),o=Mi.dot(this.direction),c=-Mi.dot(Ea),u=Mi.lengthSq(),f=Math.abs(1-a*a);let l,h,d,_;if(f>0)if(l=a*c-o,h=a*o-c,_=s*f,l>=0)if(h>=-_)if(h<=_){const g=1/f;l*=g,h*=g,d=l*(l+a*h+2*o)+h*(a*l+h+2*c)+u}else h=s,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;else h=-s,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;else h<=-_?(l=Math.max(0,-(-a*s+o)),h=l>0?-s:Math.min(Math.max(-s,-c),s),d=-l*l+h*(h+2*c)+u):h<=_?(l=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+u):(l=Math.max(0,-(a*s+o)),h=l>0?s:Math.min(Math.max(-s,-c),s),d=-l*l+h*(h+2*c)+u);else h=a>0?-s:s,l=Math.max(0,-(a*h+o)),d=-l*l+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(Zo).addScaledVector(Ea,h),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(o=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,s){$o.subVectors(t,e),ba.subVectors(n,e),Jo.crossVectors($o,ba);let a=this.direction.dot(Jo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const c=o*this.direction.dot(ba.crossVectors(Mi,ba));if(c<0)return null;const u=o*this.direction.dot($o.cross(Mi));if(u<0||c+u>a)return null;const f=-o*Mi.dot(Jo);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,s,a,o,c,u,f,l,h,d,_,g,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,u,f,l,h,d,_,g,m)}set(e,t,n,i,s,a,o,c,u,f,l,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=f,p[10]=l,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const h=a*f,d=a*l,_=o*f,g=o*l;t[0]=c*f,t[4]=-c*l,t[8]=u,t[1]=d+_*u,t[5]=h-g*u,t[9]=-o*c,t[2]=g-h*u,t[6]=_+d*u,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,d=c*l,_=u*f,g=u*l;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*u,t[1]=a*l,t[5]=a*f,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,d=c*l,_=u*f,g=u*l;t[0]=h-g*o,t[4]=-a*l,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*f,t[9]=g-h*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,d=a*l,_=o*f,g=o*l;t[0]=c*f,t[4]=_*u-d,t[8]=h*u+g,t[1]=c*l,t[5]=g*u+h,t[9]=d*u-_,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*u,_=o*c,g=o*u;t[0]=c*f,t[4]=g-h*l,t[8]=_*l+d,t[1]=l,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=d*l+_,t[10]=h-g*l}else if(e.order==="XZY"){const h=a*c,d=a*u,_=o*c,g=o*u;t[0]=c*f,t[4]=-l,t[8]=u*f,t[1]=h*l+g,t[5]=a*f,t[9]=d*l-_,t[2]=_*l-d,t[6]=o*f,t[10]=g*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Si.crossVectors(n,ln),Si.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Si.crossVectors(n,ln)),Si.normalize(),Aa.crossVectors(ln,Si),i[0]=Si.x,i[4]=Aa.x,i[8]=ln.x,i[1]=Si.y,i[5]=Aa.y,i[9]=ln.y,i[2]=Si.z,i[6]=Aa.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],f=n[1],l=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],b=n[15],w=i[0],A=i[4],C=i[8],y=i[12],T=i[1],P=i[5],z=i[9],O=i[13],G=i[2],q=i[6],V=i[10],Y=i[14],H=i[3],te=i[7],oe=i[11],me=i[15];return s[0]=a*w+o*T+c*G+u*H,s[4]=a*A+o*P+c*q+u*te,s[8]=a*C+o*z+c*V+u*oe,s[12]=a*y+o*O+c*Y+u*me,s[1]=f*w+l*T+h*G+d*H,s[5]=f*A+l*P+h*q+d*te,s[9]=f*C+l*z+h*V+d*oe,s[13]=f*y+l*O+h*Y+d*me,s[2]=_*w+g*T+m*G+p*H,s[6]=_*A+g*P+m*q+p*te,s[10]=_*C+g*z+m*V+p*oe,s[14]=_*y+g*O+m*Y+p*me,s[3]=x*w+M*T+v*G+b*H,s[7]=x*A+M*P+v*q+b*te,s[11]=x*C+M*z+v*V+b*oe,s[15]=x*y+M*O+v*Y+b*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],l=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*l-i*u*l-s*o*h+n*u*h+i*o*d-n*c*d)+g*(+t*c*d-t*u*h+s*a*h-i*a*d+i*u*f-s*c*f)+m*(+t*u*l-t*o*d-s*a*l+n*a*d+s*o*f-n*u*f)+p*(-i*o*f-t*c*l+t*o*h+i*a*l-n*a*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],l=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=l*m*u-g*h*u+g*c*d-o*m*d-l*c*p+o*h*p,M=_*h*u-f*m*u-_*c*d+a*m*d+f*c*p-a*h*p,v=f*g*u-_*l*u+_*o*d-a*g*d-f*o*p+a*l*p,b=_*l*c-f*g*c-_*o*h+a*g*h+f*o*m-a*l*m,w=t*x+n*M+i*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(g*h*s-l*m*s-g*i*d+n*m*d+l*i*p-n*h*p)*A,e[2]=(o*m*s-g*c*s+g*i*u-n*m*u-o*i*p+n*c*p)*A,e[3]=(l*c*s-o*h*s-l*i*u+n*h*u+o*i*d-n*c*d)*A,e[4]=M*A,e[5]=(f*m*s-_*h*s+_*i*d-t*m*d-f*i*p+t*h*p)*A,e[6]=(_*c*s-a*m*s-_*i*u+t*m*u+a*i*p-t*c*p)*A,e[7]=(a*h*s-f*c*s+f*i*u-t*h*u-a*i*d+t*c*d)*A,e[8]=v*A,e[9]=(_*l*s-f*g*s-_*n*d+t*g*d+f*n*p-t*l*p)*A,e[10]=(a*g*s-_*o*s+_*n*u-t*g*u-a*n*p+t*o*p)*A,e[11]=(f*o*s-a*l*s-f*n*u+t*l*u+a*n*d-t*o*d)*A,e[12]=b*A,e[13]=(f*g*i-_*l*i+_*n*h-t*g*h-f*n*m+t*l*m)*A,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*A,e[15]=(a*l*i-f*o*i+f*n*c-t*l*c-a*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,f*o+n,f*c-i*a,0,u*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,f=a+a,l=o+o,h=s*u,d=s*f,_=s*l,g=a*f,m=a*l,p=o*l,x=c*u,M=c*f,v=c*l,b=n.x,w=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+v)*b,i[2]=(_-M)*b,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(_+M)*A,i[9]=(m-x)*A,i[10]=(1-(h+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Rr.set(i[0],i[1],i[2]).length();const a=Rr.set(i[4],i[5],i[6]).length(),o=Rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const u=1/s,f=1/a,l=1/o;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=l,Rn.elements[9]*=l,Rn.elements[10]*=l,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=fi){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),l=(t+e)/(t-e),h=(n+i)/(n-i);let d,_;if(o===fi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===yo)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=fi){const c=this.elements,u=1/(t-e),f=1/(n-i),l=1/(a-s),h=(t+e)*u,d=(n+i)*f;let _,g;if(o===fi)_=(a+s)*l,g=-2*l;else if(o===yo)_=s*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rr=new L,Rn=new Le,r0=new L(0,0,0),s0=new L(1,1,1),Si=new L,Aa=new L,ln=new L,Eh=new Le,bh=new jn;class Ht{constructor(e=0,t=0,n=0,i=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],u=i[5],f=i[9],l=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const Ah=new L,Cr=new jn,ii=new Le,wa=new L,Us=new L,o0=new L,l0=new jn,wh=new L(1,0,0),Rh=new L(0,1,0),Ch=new L(0,0,1),Ph={type:"added"},c0={type:"removed"},Pr={type:"childadded",child:null},Qo={type:"childremoved",child:null};class pt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new L,t=new Ht,n=new jn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ue}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Us,wa,this.up):ii.lookAt(wa,Us,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(ii),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const l=c[u];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),l=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new L(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,ri=new L,el=new L,si=new L,Dr=new L,Lr=new L,Dh=new L,tl=new L,nl=new L,il=new L,rl=new je,sl=new je,al=new je;class Ln{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),ri.subVectors(n,t),el.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ri),c=Cn.dot(el),u=ri.dot(ri),f=ri.dot(el),l=a*u-o*o;if(l===0)return s.set(0,0,0),null;const h=1/l,d=(u*c-o*f)*h,_=(a*f-o*c)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return rl.setScalar(0),sl.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),al.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(sl,s.y),a.addScaledVector(al,s.z),a}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),ri.subVectors(e,t),Cn.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Cn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Dr.subVectors(i,n),Lr.subVectors(s,n),tl.subVectors(e,n);const c=Dr.dot(tl),u=Lr.dot(tl);if(c<=0&&u<=0)return t.copy(n);nl.subVectors(e,i);const f=Dr.dot(nl),l=Lr.dot(nl);if(f>=0&&l<=f)return t.copy(i);const h=c*l-f*u;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Dr,a);il.subVectors(e,s);const d=Dr.dot(il),_=Lr.dot(il);if(_>=0&&d<=_)return t.copy(s);const g=d*u-c*_;if(g<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(n).addScaledVector(Lr,o);const m=f*_-d*l;if(m<=0&&l-f>=0&&d-_>=0)return Dh.subVectors(s,i),o=(l-f)/(l-f+(d-_)),t.copy(i).addScaledVector(Dh,o);const p=1/(m+g+h);return a=g*p,o=h*p,t.copy(n).addScaledVector(Dr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function ol(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=_u(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ol(a,s,e+1/3),this.g=ol(a,s,e),this.b=ol(a,s,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Fe(Bt.r*255,0,255))*65536+Math.round(Fe(Bt.g*255,0,255))*256+Math.round(Fe(Bt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=f<=.5?l/(a+o):l/(2-a-o),a){case n:c=(i-s)/l+(i<s?6:0);break;case i:c=(s-n)/l+2;break;case s:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=ct){ze.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ra);const n=$s(Ti.h,Ra.h,t),i=$s(Ti.s,Ra.s,t),s=$s(Ti.l,Ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ce;Ce.NAMES=op;let u0=0;class Yn extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=ts,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Kl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==Kl&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Un extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,Ca=new be;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}}class lp extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cp extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pi extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let h0=0;const xn=new Le,ll=new pt,Ir=new L,cn=new $n,Ns=new $n,Dt=new L;class Fn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?cp:lp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,Ns.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,Ns.max),cn.expandByPoint(Dt)):(cn.expandByPoint(Ns.min),cn.expandByPoint(Ns.max))}cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Dt.fromBufferAttribute(o,u),c&&(Ir.fromBufferAttribute(e,u),Dt.add(Ir)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const u=new L,f=new L,l=new L,h=new be,d=new be,_=new be,g=new L,m=new L;function p(C,y,T){u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,y),l.fromBufferAttribute(n,T),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,T),f.sub(u),l.sub(u),d.sub(h),_.sub(h);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(l,-d.y).multiplyScalar(P),m.copy(l).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(P),o[C].add(g),o[y].add(g),o[T].add(g),c[C].add(m),c[y].add(m),c[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,y=x.length;C<y;++C){const T=x[C],P=T.start,z=T.count;for(let O=P,G=P+z;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new L,v=new L,b=new L,w=new L;function A(C){b.fromBufferAttribute(i,C),w.copy(b);const y=o[C];M.copy(y),M.sub(b.multiplyScalar(b.dot(y))).normalize(),v.crossVectors(w,y);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,y=x.length;C<y;++C){const T=x[C],P=T.start,z=T.count;for(let O=P,G=P+z;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,u=new L,f=new L,l=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),f.subVectors(a,s),l.subVectors(i,s),f.cross(l),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(f),c.add(f),u.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),l.subVectors(i,s),f.cross(l),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,l=o.normalized,h=new u.constructor(c.length*f);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*f;for(let p=0;p<f;p++)h[_++]=u[d++]}return new Nt(h,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,l=u.length;f<l;f++){const h=u[f],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];f.push(d.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],l=s[u];for(let h=0,d=l.length;h<d;h++)f.push(l[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Le,Zi=new Es,Pa=new Jn,Ih=new L,Da=new L,La=new L,Ia=new L,cl=new L,Ua=new L,Uh=new L,Na=new L;class jt extends pt{constructor(e=new Fn,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],l=s[c];f!==0&&(cl.fromBufferAttribute(l,e),a?Ua.addScaledVector(cl,f):Ua.addScaledVector(cl.sub(t),f))}t.add(Ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(Pa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Pa,Ih)===null||Zi.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,l=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){const w=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);i=Oa(this,p,e,n,u,f,l,w,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=Oa(this,a,e,n,u,f,l,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){const w=v,A=v+1,C=v+2;i=Oa(this,p,e,n,u,f,l,w,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=m,M=m+1,v=m+2;i=Oa(this,a,e,n,u,f,l,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function f0(r,e,t,n,i,s,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===gi,o),c===null)return null;Na.copy(o),Na.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Na);return u<t.near||u>t.far?null:{distance:u,point:Na.clone(),object:r}}function Oa(r,e,t,n,i,s,a,o,c,u){r.getVertexPosition(o,Da),r.getVertexPosition(c,La),r.getVertexPosition(u,Ia);const f=f0(r,e,t,n,Da,La,Ia,Uh);if(f){const l=new L;Ln.getBarycoord(Uh,Da,La,Ia,l),i&&(f.uv=Ln.getInterpolatedAttribute(i,o,c,u,l,new be)),s&&(f.uv1=Ln.getInterpolatedAttribute(s,o,c,u,l,new be)),a&&(f.normal=Ln.getInterpolatedAttribute(a,o,c,u,l,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new L,materialIndex:0};Ln.getNormal(Da,La,Ia,h.normal),f.face=h,f.barycoord=l}return f}class bs extends Fn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],l=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new pi(u,3)),this.setAttribute("normal",new pi(f,3)),this.setAttribute("uv",new pi(l,2));function _(g,m,p,x,M,v,b,w,A,C,y){const T=v/A,P=b/C,z=v/2,O=b/2,G=w/2,q=A+1,V=C+1;let Y=0,H=0;const te=new L;for(let oe=0;oe<V;oe++){const me=oe*P-O;for(let Ae=0;Ae<q;Ae++){const Ze=Ae*T-z;te[g]=Ze*x,te[m]=me*M,te[p]=G,u.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=w>0?1:-1,f.push(te.x,te.y,te.z),l.push(Ae/A),l.push(1-oe/C),Y+=1}}for(let oe=0;oe<C;oe++)for(let me=0;me<A;me++){const Ae=h+me+q*oe,Ze=h+me+q*(oe+1),X=h+(me+1)+q*(oe+1),Q=h+(me+1)+q*oe;c.push(Ae,Ze,Q),c.push(Ze,X,Q),H+=6}o.addGroup(d,H,y),d+=H,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const n=vs(r[t]);for(const i in n)e[i]=n[i]}return e}function d0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function up(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const p0={clone:vs,merge:qt};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hp extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new L,Nh=new be,Oh=new be;class Yt extends hp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Oh),t.subVectors(Oh,Nh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Nr=1;class g0 extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(Ur,Nr,e,t);i.layers=this.layers,this.add(i);const s=new Yt(Ur,Nr,e,t);s.layers=this.layers,this.add(s);const a=new Yt(Ur,Nr,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Ur,Nr,e,t);o.layers=this.layers,this.add(o);const c=new Yt(Ur,Nr,e,t);c.layers=this.layers,this.add(c);const u=new Yt(Ur,Nr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(l,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vu extends At{constructor(e,t,n,i,s,a,o,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,i,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bs(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ni});s.uniforms.tEquirect.value=t;const a=new jt(i,s),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=yt),new g0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class x0 extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class y0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new L;class xu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fh=new L,Bh=new je,kh=new je,M0=new L,zh=new Le,Fa=new L,ul=new Jn,Hh=new Le,hl=new Es;class S0 extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dh,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),e.ray.intersectsSphere(ul)!==!1&&(Hh.copy(i).invert(),hl.copy(e.ray).applyMatrix4(Hh),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bh.fromBufferAttribute(i.attributes.skinIndex,e),kh.fromBufferAttribute(i.attributes.skinWeight,e),Fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=kh.getComponent(s);if(a!==0){const o=Bh.getComponent(s);zh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(M0.copy(Fh).applyMatrix4(zh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fp extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dp extends At{constructor(e=null,t=1,n=1,i,s,a,o,c,u=Zt,f=Zt,l,h){super(null,a,o,c,u,f,i,s,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new Le,T0=new Le;class yu{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:T0;Vh.multiplyMatrices(o,t[s]),Vh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dp(t,e,e,Tn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fp),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lc extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Or=new Le,Gh=new Le,Ba=[],Wh=new $n,E0=new Le,Os=new jt,Fs=new Jn;class b0 extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,E0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Wh.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Fs.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Or),Gh.multiplyMatrices(n,Or),Os.matrixWorld=Gh,Os.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){const c=Ba[a];c.instanceId=s,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dp(new Float32Array(i*this.count),i,this.count,fu,In));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const fl=new L,A0=new L,w0=new Ue;class Ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fl.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w0.getNormalMatrix(e),i=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Jn,ka=new L;class Mu{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],u=i[4],f=i[5],l=i[6],h=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],M=i[14],v=i[15];if(n[0].setComponents(c-s,h-u,m-d,v-p).normalize(),n[1].setComponents(c+s,h+u,m+d,v+p).normalize(),n[2].setComponents(c+a,h+f,m+_,v+x).normalize(),n[3].setComponents(c-a,h-f,m-_,v-x).normalize(),n[4].setComponents(c-o,h-l,m-g,v-M).normalize(),t===fi)n[5].setComponents(c+o,h+l,m+g,v+M).normalize();else if(t===yo)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new L,So=new L,Xh=new Le,Bs=new Es,za=new Jn,dl=new L,qh=new L;class Su extends pt{constructor(e=new Fn,t=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Mo.fromBufferAttribute(t,i-1),So.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(So);e.setAttribute("lineDistance",new pi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;Xh.copy(i).invert(),Bs.copy(e.ray).applyMatrix4(Xh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=u){const p=f.getX(g),x=f.getX(g+1),M=Ha(this,e,Bs,c,p,x);M&&t.push(M)}if(this.isLineLoop){const g=f.getX(_-1),m=f.getX(d),p=Ha(this,e,Bs,c,g,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=u){const p=Ha(this,e,Bs,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Ha(this,e,Bs,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Mo.fromBufferAttribute(a,i),So.fromBufferAttribute(a,s),t.distanceSqToSegment(Mo,So,dl,qh)>n)return;dl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(dl);if(!(c<e.near||c>e.far))return{distance:c,point:qh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Yh=new L,Kh=new L;class R0 extends Su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yh.distanceTo(Kh);e.setAttribute("lineDistance",new pi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C0 extends Su{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mp extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jh=new Le,Ic=new Es,Va=new Jn,Ga=new L;class P0 extends pt{constructor(e=new Fn,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;jh.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(jh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const m=u.getX(_);Ga.fromBufferAttribute(l,m),Zh(Ga,m,c,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=h,g=d;_<g;_++)Ga.fromBufferAttribute(l,_),Zh(Ga,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zh(r,e,t,n,i,s,a){const o=Ic.distanceSqToPoint(r);if(o<t){const c=new L;Ic.closestPointToPoint(r,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ar extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class D0 extends At{constructor(e,t,n,i,s,a,o,c,u){super(e,t,n,i,s,a,o,c,u),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:yt,this.magFilter=s!==void 0?s:yt,this.generateMipmaps=!1;const f=this;function l(){f.needsUpdate=!0,e.requestVideoFrameCallback(l)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(l)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class _p extends At{constructor(e,t,n,i,s,a,o,c,u,f=ns){if(f!==ns&&f!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ns&&(n=mr),n===void 0&&f===_s&&(n=ms),super(null,i,s,a,o,c,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _a extends Fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),u=o+1,f=c+1,l=e/o,h=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const x=p*h-a;for(let M=0;M<u;M++){const v=M*l-s;_.push(v,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+u*p,v=x+u*(p+1),b=x+1+u*(p+1),w=x+1+u*p;d.push(M,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new pi(_,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tu extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends Tu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class L0 extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function U0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function N0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $h(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function gp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ga{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class O0 extends ga{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mh:s=e,o=2*t-n;break;case _h:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mh:a=e,c=2*n-t;break;case _h:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,M=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let b=0;b!==o;++b)s[b]=p*a[f+b]+x*a[u+b]+M*a[c+b]+v*a[l+b];return s}}class F0 extends ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,f=(n-t)/(i-t),l=1-f;for(let h=0;h!==o;++h)s[h]=a[u+h]*l+a[c+h]*f;return s}}class B0 extends ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new B0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new F0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&U0(i))for(let o=0,c=i.length;o!==c;++o){const u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)c=!0;else{const l=o*n,h=l-n,d=l+n;for(let _=0;_!==n;++_){const g=t[l+_];if(g!==t[h+_]||g!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const l=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[l+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ha;class As extends Qn{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ua;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends Qn{}vp.prototype.ValueTypeName="color";class xs extends Qn{}xs.prototype.ValueTypeName="number";class k0 extends ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let u=e*o;for(let f=u+o;u!==f;u+=4)jn.slerpFlat(s,0,a,u-o,a,u,c);return s}}class ys extends Qn{InterpolantFactoryMethodLinear(e){return new k0(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Qn{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ua;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Qn{}Ms.prototype.ValueTypeName="vector";class z0{constructor(e="",t=-1,n=[],i=xg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(V0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const f=N0(c);c=$h(c,1,f),u=$h(u,1,f),!i&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],f=u.name.match(s);if(f&&f.length>1){const l=f[1];let h=i[l];h||(i[l]=h=[]),h.push(u)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,h,d,_,g){if(d.length!==0){const m=[],p=[];gp(d,m,p,_),m.length!==0&&g.push(new l(h,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let l=0;l<u.length;l++){const h=u[l].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)d[h[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let x=0;x!==h[_].morphTargets.length;++x){const M=h[_];m.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new xs(".morphTargetInfluence["+g+"]",m,p))}c=d.length*a}else{const d=".bones["+t[l].name+"]";n(Ms,d+".position",h,"pos",i),n(ys,d+".quaternion",h,"rot",i),n(Ms,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return vp;case"quaternion":return ys;case"bool":case"boolean":return As;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function V0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H0(r.type);if(r.times===void 0){const t=[],n=[];gp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Li={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xp{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){const l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],_=u[l+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const G0=new xp;class Gi{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class W0 extends Error{constructor(e,t){super(e),this.response=t}}class To extends Gi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Li.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=ai[e],l=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){x();function x(){l.read().then(({done:M,value:v})=>{if(M)p.close();else{g+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,A=f.length;w<A;w++){const C=f[w];C.onProgress&&C.onProgress(b)}p.enqueue(v),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new W0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return u.json();default:if(o===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),h=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(h);return u.arrayBuffer().then(_=>d.decode(_))}}}).then(u=>{Li.add(e,u);const f=ai[e];delete ai[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const f=ai[e];if(f===void 0)throw this.manager.itemError(e),u;delete ai[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yp extends Gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Li.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=fa("img");function c(){f(),Li.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(l){f(),i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class X0 extends Gi{constructor(e){super(e)}load(e,t,n,i){const s=new vu;s.colorSpace=ct;const a=new yp(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(u){a.load(e[u],function(f){s.images[u]=f,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let u=0;u<e.length;++u)c(u);return s}}class Mp extends Gi{constructor(e){super(e)}load(e,t,n,i){const s=new At,a=new yp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Eu extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pl=new Le,Jh=new L,Qh=new L;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q0 extends bu{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y0 extends Eu{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new q0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ef=new Le,ks=new L,ml=new L;class K0 extends bu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),ml.copy(n.position),ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ml),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class j0 extends Eu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Au extends hp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z0 extends bu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $0 extends Eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class J0 extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Li.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Li.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Li.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Li.add(e,c),s.manager.itemStart(e)}}class Q0 extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tf(){return performance.now()}const wu="\\[\\]\\.:\\/",tv=new RegExp("["+wu+"]","g"),Ru="[^"+wu+"]",nv="[^"+wu.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",Ru),rv=/(WCOD+)?/.source.replace("WCOD",nv),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),ov=new RegExp("^"+iv+rv+sv+av+"$"),lv=["material","materials","bones","map"];class cv{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){const t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);lv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=cv;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Eo{constructor(e){this.value=e}clone(){return new Eo(this.value.clone===void 0?this.value:this.value.clone())}}const nf=new Le;class uv{constructor(e,t,n=0,i=1/0){this.ray=new Es(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(e,t=!0,n=[]){return Uc(e,this,n,t),n.sort(rf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Uc(e[i],this,n,t);return n.sort(rf),n}}function rf(r,e){return r.distance-e.distance}function Uc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Uc(s[a],e,t,!0)}}class sf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hv extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function af(r,e,t,n){const i=fv(n);switch(t){case Kd:return r*e;case Zd:return r*e;case $d:return r*e*2;case fu:return r*e/i.components*i.byteLength;case du:return r*e/i.components*i.byteLength;case Jd:return r*e*2/i.components*i.byteLength;case pu:return r*e*2/i.components*i.byteLength;case jd:return r*e*3/i.components*i.byteLength;case Tn:return r*e*4/i.components*i.byteLength;case mu:return r*e*4/i.components*i.byteLength;case to:case no:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(r,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(r,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case so:case bc:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case wc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fv(r){switch(r){case vi:case Xd:return{byteLength:1,components:1};case ca:case qd:case ma:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case mr:case cu:case In:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function dv(r){const e=new WeakMap;function t(o,c){const u=o.array,f=o.usage,l=u.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,u,f),o.onUploadCallback();let d;if(u instanceof Float32Array)d=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=r.SHORT;else if(u instanceof Uint32Array)d=r.UNSIGNED_INT;else if(u instanceof Int32Array)d=r.INT;else if(u instanceof Int8Array)d=r.BYTE;else if(u instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const f=c.array,l=c.updateRanges;if(r.bindBuffer(u,o),l.length===0)r.bufferSubData(u,0,f);else{l.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<l.length;d++){const _=l[h],g=l[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,l[h]=g)}l.length=h+1;for(let d=0,_=l.length;d<_;d++){const g=l[d];r.bufferSubData(u,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:i,remove:s,update:a}}var pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mv=`#ifdef USE_ALPHAHASH
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
#endif`,_v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yv=`#ifdef USE_AOMAP
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
#endif`,Mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sv=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Rv=`#ifdef USE_BUMPMAP
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fv=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kv=`vec3 transformedNormal = objectNormal;
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
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qv=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kv=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
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
#endif`,ax=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ox=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,My=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Dy=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define NORMAL
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
}`,Uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ny=`#define PHONG
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
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Fy=`#define STANDARD
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
}`,By=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ky=`#define TOON
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
}`,zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hy=`uniform float size;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Xy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:pv,alphahash_pars_fragment:mv,alphamap_fragment:_v,alphamap_pars_fragment:gv,alphatest_fragment:vv,alphatest_pars_fragment:xv,aomap_fragment:yv,aomap_pars_fragment:Mv,batching_pars_vertex:Sv,batching_vertex:Tv,begin_vertex:Ev,beginnormal_vertex:bv,bsdfs:Av,iridescence_fragment:wv,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Cv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Lv,color_fragment:Iv,color_pars_fragment:Uv,color_pars_vertex:Nv,color_vertex:Ov,common:Fv,cube_uv_reflection_fragment:Bv,defaultnormal_vertex:kv,displacementmap_pars_vertex:zv,displacementmap_vertex:Hv,emissivemap_fragment:Vv,emissivemap_pars_fragment:Gv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:Kv,envmap_pars_vertex:jv,envmap_physical_pars_fragment:ax,envmap_vertex:Zv,fog_vertex:$v,fog_pars_vertex:Jv,fog_fragment:Qv,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:xx,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:bx,morphinstance_vertex:Ax,morphcolor_vertex:wx,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Dx,normal_fragment_maps:Lx,normal_pars_fragment:Ix,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Ox,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:zx,opaque_fragment:Hx,packing:Vx,premultiplied_alpha_fragment:Gx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:qx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Zx,shadowmap_vertex:$x,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:ry,tonemapping_fragment:sy,tonemapping_pars_fragment:ay,transmission_fragment:oy,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:hy,worldpos_vertex:fy,background_vert:dy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:_y,cube_vert:gy,cube_frag:vy,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:My,distanceRGBA_frag:Sy,equirect_vert:Ty,equirect_frag:Ey,linedashed_vert:by,linedashed_frag:Ay,meshbasic_vert:wy,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Py,meshmatcap_vert:Dy,meshmatcap_frag:Ly,meshnormal_vert:Iy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Oy,meshphysical_vert:Fy,meshphysical_frag:By,meshtoon_vert:ky,meshtoon_frag:zy,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:qy},ne={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vn={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Vn.physical={uniforms:qt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Xa={r:0,b:0,g:0},Ji=new Ht,Yy=new Le;function Ky(r,e,t,n,i,s,a){const o=new Ce(0);let c=s===!0?0:1,u,f,l=null,h=0,d=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function g(M){let v=!1;const b=_(M);b===null?p(o,c):b&&b.isColor&&(p(b,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===Po)?(f===void 0&&(f=new jt(new bs(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:vs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Ji.copy(v.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Ji)),f.material.toneMapped=ze.getTransfer(b.colorSpace)!==nt,(l!==b||h!==b.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,l=b,h=b.version,d=r.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new jt(new _a(2,2),new Zn({name:"BackgroundMaterial",uniforms:vs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=ze.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(l!==b||h!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,l=b,h=b.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,v){M.getRGB(Xa,up(r)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,v,a)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:g,addToRenderList:m,dispose:x}}function jy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(T,P,z,O,G){let q=!1;const V=l(O,z,P);s!==V&&(s=V,u(s.object)),q=d(T,O,z,G),q&&_(T,O,z,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(T,P,z,O),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function u(T){return r.bindVertexArray(T)}function f(T){return r.deleteVertexArray(T)}function l(T,P,z){const O=z.wireframe===!0;let G=n[T.id];G===void 0&&(G={},n[T.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let V=q[O];return V===void 0&&(V=h(c()),q[O]=V),V}function h(T){const P=[],z=[],O=[];for(let G=0;G<t;G++)P[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,P,z,O){const G=s.attributes,q=P.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const oe=G[H];let me=q[H];if(me===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function _(T,P,z,O){const G={},q=P.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let oe=q[H];oe===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),G[H]=me,V++}s.attributes=G,s.attributesNum=V,s.index=O}function g(){const T=s.newAttributes;for(let P=0,z=T.length;P<z;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const z=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;z[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),G[T]!==P&&(r.vertexAttribDivisor(T,P),G[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==T[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function M(T,P,z,O,G,q,V){V===!0?r.vertexAttribIPointer(T,P,z,G,q):r.vertexAttribPointer(T,P,z,O,G,q)}function v(T,P,z,O){g();const G=O.attributes,q=z.getAttributes(),V=P.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let te=G[Y];if(te===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){const oe=te.normalized,me=te.itemSize,Ae=e.get(te);if(Ae===void 0)continue;const Ze=Ae.buffer,X=Ae.type,Q=Ae.bytesPerElement,_e=X===r.INT||X===r.UNSIGNED_INT||te.gpuType===cu;if(te.isInterleavedBufferAttribute){const se=te.data,Te=se.stride,Pe=te.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,se.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Be=0;Be<H.locationSize;Be++)M(H.location+Be,me/H.locationSize,X,oe,Te*Q,(Pe+me/H.locationSize*Be)*Q,_e)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,te.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let se=0;se<H.locationSize;se++)M(H.location+se,me/H.locationSize,X,oe,me*Q,me/H.locationSize*se*Q,_e)}}else if(V!==void 0){const oe=V[Y];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(H.location,oe);break;case 3:r.vertexAttrib3fv(H.location,oe);break;case 4:r.vertexAttrib4fv(H.location,oe);break;default:r.vertexAttrib1fv(H.location,oe)}}}}x()}function b(){C();for(const T in n){const P=n[T];for(const z in P){const O=P[z];for(const G in O)f(O[G].object),delete O[G];delete P[z]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const z in P){const O=P[z];for(const G in O)f(O[G].object),delete O[G];delete P[z]}delete n[T.id]}function A(T){for(const P in n){const z=n[P];if(z[T.id]===void 0)continue;const O=z[T.id];for(const G in O)f(O[G].object),delete O[G];delete z[T.id]}}function C(){y(),a=!0,s!==i&&(s=i,u(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Zy(r,e,t){let n;function i(u){n=u}function s(u,f){r.drawArrays(n,u,f),t.update(f,n,1)}function a(u,f,l){l!==0&&(r.drawArraysInstanced(n,u,f,l),t.update(f,n,l))}function o(u,f,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,l);let d=0;for(let _=0;_<l;_++)d+=f[_];t.update(d,n,1)}function c(u,f,l,h){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<u.length;_++)a(u[_],f[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,f,0,h,0,l);let _=0;for(let g=0;g<l;g++)_+=f[g]*h[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $y(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Tn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!C)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const l=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function Jy(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ai,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||n!==0||i;return i=h,n=l.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,h){t=f(l,h,0)},this.setState=function(l,h,d){const _=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=r.get(l);if(!i||_===null||_.length===0||s&&!m)s?f(null):u();else{const x=s?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=f(_,h,M,d);for(let b=0;b!==M;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(l,h,d,_){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==g;++M,v+=4)a.copy(l[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Qy(r){let e=new WeakMap;function t(a,o){return o===nc?a.mapping=ds:o===ic&&(a.mapping=ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===nc||o===ic)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new v0(c.height);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Zr=4,of=[.125,.215,.35,.446,.526,.582],rr=20,_l=new Au,lf=new Ce;let gl=null,vl=0,xl=0,yl=!1;const nr=(1+Math.sqrt(5))/2,Fr=1/nr,cf=[new L(-nr,Fr,0),new L(nr,Fr,0),new L(-Fr,0,nr),new L(Fr,0,nr),new L(0,nr,-Fr),new L(0,nr,Fr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){gl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,vl,xl),this._renderer.xr.enabled=yl,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:ma,format:Tn,colorSpace:Gt,depthBuffer:!1},i=hf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(s)),this._blurMaterial=tM(s,e,t)}return i}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,h=f.toneMapping;f.getClearColor(lf),f.toneMapping=Oi,f.autoClear=!1;const d=new Un({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new jt(new bs,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(lf),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));const M=this._cubeSize;qa(i,x*M,p>2?M:0,M,M),f.setRenderTarget(i),g&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ds||e.mapping===ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cf[(i-s-1)%cf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,l=new jt(this._lodPlanes[i],u),h=u.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*rr-1),g=s/_,m=isFinite(s)?1+Math.floor(f*g):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const p=[];let x=0;for(let A=0;A<rr;++A){const C=A/g,y=Math.exp(-C*C/2);p.push(y),A===0?x+=y:A<m&&(x+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const v=this._sizeLods[i],b=3*v*(i>M-Zr?i-M+Zr:0),w=4*(this._cubeSize-v);qa(t,b,w,3*v,2*v),c.setRenderTarget(t),c.render(l,_l)}}function eM(r){const e=[],t=[],n=[];let i=r;const s=r-Zr+1+of.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Zr?c=of[a-r+Zr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),f=-u,l=1+u,h=[f,f,l,f,l,l,f,f,l,l,f,l],d=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*d),M=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,C=w>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(y,g*_*w),M.set(h,m*_*w);const T=[w,w,w,w,w,w];v.set(T,p*_*w)}const b=new Fn;b.setAttribute("position",new Nt(x,g)),b.setAttribute("uv",new Nt(M,m)),b.setAttribute("faceIndex",new Nt(v,p)),e.push(b),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hf(r,e,t){const n=new _r(r,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tM(r,e,t){const n=new Float32Array(rr),i=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ff(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function df(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function nM(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===nc||c===ic,f=c===ds||c===ps;if(u||f){let l=e.get(o);const h=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new uf(r)),l=u?t.fromEquirectangular(o,l):t.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),l.texture;if(l!==void 0)return l.texture;{const d=o.image;return u&&d&&d.height>0||f&&d&&i(d)?(t===null&&(t=new uf(r)),l=u?t.fromEquirectangular(o):t.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,e.set(o,l),o.addEventListener("dispose",s),l.texture):null}}}return o}function i(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function iM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rM(r,e,t,n){const i={},s=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function u(l){const h=[],d=l.index,_=l.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let M=0,v=x.length;M<v;M+=3){const b=x[M+0],w=x[M+1],A=x[M+2];h.push(b,w,w,A,A,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const b=M+0,w=M+1,A=M+2;h.push(b,w,w,A,A,b)}}else return;const m=new(rp(h)?cp:lp)(h,1);m.version=g;const p=s.get(l);p&&e.remove(p),s.set(l,m)}function f(l){const h=s.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:f}}function sM(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function u(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*a,_),t.update(d,n,_))}function f(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function l(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=d[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=l}function aM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function oM(r,e,t){const n=new WeakMap,i=new je;function s(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==l){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var d=T;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*l),C=new ap(A,b,w,l);C.type=In,C.needsUpdate=!0;const y=v*4;for(let P=0;P<l;P++){const z=p[P],O=x[P],G=M[P],q=b*w*4*P;for(let V=0;V<z.count;V++){const Y=V*y;_===!0&&(i.fromBufferAttribute(z,V),A[q+Y+0]=i.x,A[q+Y+1]=i.y,A[q+Y+2]=i.z,A[q+Y+3]=0),g===!0&&(i.fromBufferAttribute(O,V),A[q+Y+4]=i.x,A[q+Y+5]=i.y,A[q+Y+6]=i.z,A[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(G,V),A[q+Y+8]=i.x,A[q+Y+9]=i.y,A[q+Y+10]=i.z,A[q+Y+11]=G.itemSize===4?i.w:1)}}h={count:l,texture:C,size:new be(b,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function lM(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,l=e.get(c,f);if(i.get(l)!==u&&(e.update(l),i.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return l}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Tp=new At,pf=new _p(1,1),Ep=new ap,bp=new n0,Ap=new vu,mf=[],_f=[],gf=new Float32Array(16),vf=new Float32Array(9),xf=new Float32Array(4);function Rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mf[i];if(s===void 0&&(s=new Float32Array(i),mf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Do(r,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function dM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;xf.set(n),r.uniformMatrix2fv(this.addr,!1,xf),Pt(t,n)}}function pM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;vf.set(n),r.uniformMatrix3fv(this.addr,!1,vf),Pt(t,n)}}function mM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;gf.set(n),r.uniformMatrix4fv(this.addr,!1,gf),Pt(t,n)}}function _M(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function vM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function xM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function yM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function MM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function SM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function TM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function EM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pf.compareFunction=np,s=pf):s=Tp,t.setTexture2D(e||s,i)}function bM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bp,i)}function AM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function wM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ep,i)}function RM(r){switch(r){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return _M;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return MM;case 36295:return SM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}function CM(r,e){r.uniform1fv(this.addr,e)}function PM(r,e){const t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function DM(r,e){const t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function LM(r,e){const t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function IM(r,e){const t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function UM(r,e){const t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function NM(r,e){const t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OM(r,e){r.uniform1iv(this.addr,e)}function FM(r,e){r.uniform2iv(this.addr,e)}function BM(r,e){r.uniform3iv(this.addr,e)}function kM(r,e){r.uniform4iv(this.addr,e)}function zM(r,e){r.uniform1uiv(this.addr,e)}function HM(r,e){r.uniform2uiv(this.addr,e)}function VM(r,e){r.uniform3uiv(this.addr,e)}function GM(r,e){r.uniform4uiv(this.addr,e)}function WM(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tp,s[a])}function XM(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bp,s[a])}function qM(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ap,s[a])}function YM(r,e,t){const n=this.cache,i=e.length,s=Do(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ep,s[a])}function KM(r){switch(r){case 5126:return CM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class jM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class ZM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}}class $M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function yf(r,e){r.seq.push(e),r.map[e.id]=e}function JM(r,e,t){const n=r.name,i=n.length;for(Ml.lastIndex=0;;){const s=Ml.exec(n),a=Ml.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){yf(t,u===void 0?new jM(o,r,e):new ZM(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new $M(o),yf(t,l)),t=l}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);JM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Mf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const QM=37297;let eS=0;function tS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sf=new Ue;function nS(r){ze._getMatrix(Sf,ze.workingColorSpace,r);const e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(r)){case xo:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+tS(r.getShaderSource(e),a)}else return i}function iS(r,e){const t=nS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rS(r,e){let t;switch(e){case hg:t="Linear";break;case fg:t="Reinhard";break;case dg:t="Cineon";break;case pg:t="ACESFilmic";break;case _g:t="AgX";break;case gg:t="Neutral";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new L;function sS(){ze.getLuminanceCoefficients(Ya);const r=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function oS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function qs(r){return r!==""}function Ef(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(r){return r.replace(cS,hS)}const uS=new Map;function hS(r,e){let t=Oe[e];if(t===void 0){const n=uS.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const fS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(r){return r.replace(fS,dS)}function dS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function mS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _S(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function gS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case cg:e="ENVMAP_BLENDING_MIX";break;case ug:e="ENVMAP_BLENDING_ADD";break}return e}function vS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=pS(t),u=mS(t),f=_S(t),l=gS(t),h=vS(t),d=aS(t),_=oS(s),g=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Oi?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,iS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=Nc(a),a=Ef(a,t),a=bf(a,t),o=Nc(o),o=Ef(o,t),o=bf(o,t),a=Af(a),o=Af(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,v=x+p+o,b=Mf(i,i.VERTEX_SHADER,M),w=Mf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(b).trim(),G=i.getShaderInfoLog(w).trim();let q=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{const Y=Tf(i,b,"vertex"),H=Tf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(b),i.deleteShader(w),C=new ao(i,g),y=lS(i,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,QM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let yS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new SS(e),t.set(e,n)),n}}class SS{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function TS(r,e,t,n,i,s,a){const o=new gu,c=new MS,u=new Set,f=[],l=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,T,P,z,O){const G=z.fog,q=O.geometry,V=y.isMeshStandardMaterial?z.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=Y&&Y.mapping===Po?Y.image.height:null,te=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=oe!==void 0?oe.length:0;let Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let Ze,X,Q,_e;if(te){const Qe=Vn[te];Ze=Qe.vertexShader,X=Qe.fragmentShader}else Ze=y.vertexShader,X=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const se=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,ht=!!y.map,Xe=!!y.matcap,vt=!!Y,D=!!y.aoMap,_n=!!y.lightMap,Ve=!!y.bumpMap,Ge=!!y.normalMap,xe=!!y.displacementMap,at=!!y.emissiveMap,ve=!!y.metalnessMap,R=!!y.roughnessMap,S=y.anisotropy>0,F=y.clearcoat>0,j=y.dispersion>0,$=y.iridescence>0,K=y.sheen>0,ge=y.transmission>0,ae=S&&!!y.anisotropyMap,he=F&&!!y.clearcoatMap,qe=F&&!!y.clearcoatNormalMap,ee=F&&!!y.clearcoatRoughnessMap,fe=$&&!!y.iridescenceMap,Se=$&&!!y.iridescenceThicknessMap,we=K&&!!y.sheenColorMap,de=K&&!!y.sheenRoughnessMap,We=!!y.specularMap,Ne=!!y.specularColorMap,st=!!y.specularIntensityMap,I=ge&&!!y.transmissionMap,ie=ge&&!!y.thicknessMap,W=!!y.gradientMap,Z=!!y.alphaMap,ce=y.alphaTest>0,le=!!y.alphaHash,Ie=!!y.extensions;let mt=Oi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(mt=r.toneMapping);const Ot={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:X,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Gt,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:Xe,envMap:vt,envMapMode:vt&&Y.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:_n,bumpMap:Ve,normalMap:Ge,displacementMap:h&&xe,emissiveMap:at,normalMapObjectSpace:Ge&&y.normalMapType===Tg,normalMapTangentSpace:Ge&&y.normalMapType===tp,metalnessMap:ve,roughnessMap:R,anisotropy:S,anisotropyMap:ae,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:qe,clearcoatRoughnessMap:ee,dispersion:j,iridescence:$,iridescenceMap:fe,iridescenceThicknessMap:Se,sheen:K,sheenColorMap:we,sheenRoughnessMap:de,specularMap:We,specularColorMap:Ne,specularIntensityMap:st,transmission:ge,transmissionMap:I,thicknessMap:ie,gradientMap:W,opaque:y.transparent===!1&&y.blending===ts&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:le,combine:y.combine,mapUv:ht&&g(y.map.channel),aoMapUv:D&&g(y.aoMap.channel),lightMapUv:_n&&g(y.lightMap.channel),bumpMapUv:Ve&&g(y.bumpMap.channel),normalMapUv:Ge&&g(y.normalMap.channel),displacementMapUv:xe&&g(y.displacementMap.channel),emissiveMapUv:at&&g(y.emissiveMap.channel),metalnessMapUv:ve&&g(y.metalnessMap.channel),roughnessMapUv:R&&g(y.roughnessMap.channel),anisotropyMapUv:ae&&g(y.anisotropyMap.channel),clearcoatMapUv:he&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(y.sheenRoughnessMap.channel),specularMapUv:We&&g(y.specularMap.channel),specularColorMapUv:Ne&&g(y.specularColorMap.channel),specularIntensityMapUv:st&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:ie&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ge||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ht||Z),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:mt,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ze.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:at&&y.emissiveMap.isVideoTexture===!0&&ze.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(T,y),M(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const T=_[y.type];let P;if(T){const z=Vn[T];P=p0.clone(z.uniforms)}else P=y.uniforms;return P}function b(y,T){let P;for(let z=0,O=f.length;z<O;z++){const G=f[z];if(G.cacheKey===T){P=G,++P.usedTimes;break}}return P===void 0&&(P=new xS(r,T,y,s),f.push(P)),P}function w(y){if(--y.usedTimes===0){const T=f.indexOf(y);f[T]=f[f.length-1],f.pop(),y.destroy()}}function A(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:f,dispose:C}}function ES(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function bS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(l,h,d,_,g,m){let p=r[e];return p===void 0?(p={id:l.id,object:l,geometry:h,material:d,groupOrder:_,renderOrder:l.renderOrder,z:g,group:m},r[e]=p):(p.id=l.id,p.object=l,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=l.renderOrder,p.z=g,p.group=m),e++,p}function o(l,h,d,_,g,m){const p=a(l,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(l,h,d,_,g,m){const p=a(l,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function u(l,h){t.length>1&&t.sort(l||bS),n.length>1&&n.sort(h||Rf),i.length>1&&i.sort(h||Rf)}function f(){for(let l=e,h=r.length;l<h;l++){const d=r[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:f,sort:u}}function AS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Cf,r.set(n,[a])):i>=s.length?(a=new Cf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function wS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function RS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CS=0;function PS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function DS(r){const e=new wS,t=RS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);const i=new L,s=new Le,a=new Le;function o(u){let f=0,l=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,x=0,M=0,v=0,b=0,w=0,A=0;u.sort(PS);for(let y=0,T=u.length;y<T;y++){const P=u[y],z=P.color,O=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*O,l+=z.g*O,h+=z.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);A++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,v++}g++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=l,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=A,n.version=CS++)}function c(u,f){let l=0,h=0,d=0,_=0,g=0;const m=f.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const v=n.directional[l];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),l++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Pf(r){const e=new DS(r),t=[],n=[];function i(f){u.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function LS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Pf(r),e.set(i,[o])):s>=a.length?(o=new Pf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const IS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,US=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NS(r,e,t){let n=new Mu;const i=new be,s=new be,a=new je,o=new L0({depthPacking:Sg}),c=new I0,u={},f=t.maxTextureSize,l={[gi]:sn,[sn]:gi,[Pn]:Pn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:IS,fragmentShader:US}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fn;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==oi&&this.type===oi,G=p===oi&&this.type!==oi;for(let q=0,V=w.length;q<V;q++){const Y=w[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),s.copy(H.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/te.x),i.x=s.x*te.x,H.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/te.y),i.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||O===!0||G===!0){const me=this.type!==oi?{minFilter:Zt,magFilter:Zt}:{};H.map!==null&&H.map.dispose(),H.map=new _r(i.x,i.y,me),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const oe=H.getViewportCount();for(let me=0;me<oe;me++){const Ae=H.getViewport(me);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),z.viewport(a),H.updateMatrices(Y,me),n=H.getFrustum(),v(A,C,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===oi&&x(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,P)};function x(w,A){const C=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _r(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,C,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,C,d,g,null)}function M(w,A,C,y){let T=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=T.uuid,O=A.uuid;let G=u[z];G===void 0&&(G={},u[z]=G);let q=G[O];q===void 0&&(q=T.clone(),G[O]=q,A.addEventListener("dispose",b)),T=q}if(T.visible=A.visible,T.wireframe=A.wireframe,y===oi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:l[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=r.properties.get(T);z.light=C}return T}function v(w,A,C,y,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const q=O.groups;for(let V=0,Y=q.length;V<Y;V++){const H=q[V],te=G[H.materialIndex];if(te&&te.visible){const oe=M(w,te,y,T);w.onBeforeShadow(r,w,A,C,O,oe,H),r.renderBufferDirect(C,null,O,oe,w,H),w.onAfterShadow(r,w,A,C,O,oe,H)}}}else if(G.visible){const q=M(w,G,y,T);w.onBeforeShadow(r,w,A,C,O,q,null),r.renderBufferDirect(C,null,O,q,w,null),w.onAfterShadow(r,w,A,C,O,q,null)}}const z=w.children;for(let O=0,G=z.length;O<G;O++)v(z[O],A,C,y,T)}function b(w){w.target.removeEventListener("dispose",b);for(const C in u){const y=u[C],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const OS={[jl]:Zl,[$l]:ec,[Jl]:tc,[fs]:Ql,[Zl]:jl,[ec]:$l,[tc]:Jl,[Ql]:fs};function FS(r,e){function t(){let I=!1;const ie=new je;let W=null;const Z=new je(0,0,0,0);return{setMask:function(ce){W!==ce&&!I&&(r.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){I=ce},setClear:function(ce,le,Ie,mt,Ot){Ot===!0&&(ce*=mt,le*=mt,Ie*=mt),ie.set(ce,le,Ie,mt),Z.equals(ie)===!1&&(r.clearColor(ce,le,Ie,mt),Z.copy(ie))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,W=null,Z=null,ce=null;return{setReversed:function(le){if(ie!==le){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const mt=ce;ce=null,this.setClear(mt)}ie=le},getReversed:function(){return ie},setTest:function(le){le?se(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(le){W!==le&&!I&&(r.depthMask(le),W=le)},setFunc:function(le){if(ie&&(le=OS[le]),Z!==le){switch(le){case jl:r.depthFunc(r.NEVER);break;case Zl:r.depthFunc(r.ALWAYS);break;case $l:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Jl:r.depthFunc(r.EQUAL);break;case Ql:r.depthFunc(r.GEQUAL);break;case ec:r.depthFunc(r.GREATER);break;case tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=le}},setLocked:function(le){I=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),r.clearDepth(le),ce=le)},reset:function(){I=!1,W=null,Z=null,ce=null,ie=!1}}}function i(){let I=!1,ie=null,W=null,Z=null,ce=null,le=null,Ie=null,mt=null,Ot=null;return{setTest:function(Qe){I||(Qe?se(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!I&&(r.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,bn,ei){(W!==Qe||Z!==bn||ce!==ei)&&(r.stencilFunc(Qe,bn,ei),W=Qe,Z=bn,ce=ei)},setOp:function(Qe,bn,ei){(le!==Qe||Ie!==bn||mt!==ei)&&(r.stencilOp(Qe,bn,ei),le=Qe,Ie=bn,mt=ei)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Ot!==Qe&&(r.clearStencil(Qe),Ot=Qe)},reset:function(){I=!1,ie=null,W=null,Z=null,ce=null,le=null,Ie=null,mt=null,Ot=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,u=new WeakMap;let f={},l={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,b=null,w=null,A=new Ce(0,0,0),C=0,y=!1,T=null,P=null,z=null,O=null,G=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let te=null,oe={};const me=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Ze=new je().fromArray(me),X=new je().fromArray(Ae);function Q(I,ie,W,Z){const ce=new Uint8Array(4),le=r.createTexture();r.bindTexture(I,le),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<W;Ie++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ie+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return le}const _e={};_e[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(fs),Ve(!1),Ge(ch),se(r.CULL_FACE),D(Ni);function se(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Te(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Pe(I,ie){return l[I]!==ie?(r.bindFramebuffer(I,ie),l[I]=ie,I===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=ie),I===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Be(I,ie){let W=d,Z=!1;if(I){W=h.get(ie),W===void 0&&(W=[],h.set(ie,W));const ce=I.textures;if(W.length!==ce.length||W[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ie=ce.length;le<Ie;le++)W[le]=r.COLOR_ATTACHMENT0+le;W.length=ce.length,Z=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Z=!0);Z&&r.drawBuffers(W)}function ht(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const Xe={[ir]:r.FUNC_ADD,[q_]:r.FUNC_SUBTRACT,[Y_]:r.FUNC_REVERSE_SUBTRACT};Xe[K_]=r.MIN,Xe[j_]=r.MAX;const vt={[Z_]:r.ZERO,[$_]:r.ONE,[J_]:r.SRC_COLOR,[Yl]:r.SRC_ALPHA,[rg]:r.SRC_ALPHA_SATURATE,[ng]:r.DST_COLOR,[eg]:r.DST_ALPHA,[Q_]:r.ONE_MINUS_SRC_COLOR,[Kl]:r.ONE_MINUS_SRC_ALPHA,[ig]:r.ONE_MINUS_DST_COLOR,[tg]:r.ONE_MINUS_DST_ALPHA,[sg]:r.CONSTANT_COLOR,[ag]:r.ONE_MINUS_CONSTANT_COLOR,[og]:r.CONSTANT_ALPHA,[lg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,ie,W,Z,ce,le,Ie,mt,Ot,Qe){if(I===Ni){g===!0&&(Te(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),I!==X_){if(I!==m||Qe!==y){if((p!==ir||v!==ir)&&(r.blendEquation(r.FUNC_ADD),p=ir,v=ir),Qe)switch(I){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,b=null,w=null,A.set(0,0,0),C=0,m=I,y=Qe}return}ce=ce||ie,le=le||W,Ie=Ie||Z,(ie!==p||ce!==v)&&(r.blendEquationSeparate(Xe[ie],Xe[ce]),p=ie,v=ce),(W!==x||Z!==M||le!==b||Ie!==w)&&(r.blendFuncSeparate(vt[W],vt[Z],vt[le],vt[Ie]),x=W,M=Z,b=le,w=Ie),(mt.equals(A)===!1||Ot!==C)&&(r.blendColor(mt.r,mt.g,mt.b,Ot),A.copy(mt),C=Ot),m=I,y=!1}function _n(I,ie){I.side===Pn?Te(r.CULL_FACE):se(r.CULL_FACE);let W=I.side===sn;ie&&(W=!W),Ve(W),I.blending===ts&&I.transparent===!1?D(Ni):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function Ge(I){I!==V_?(se(r.CULL_FACE),I!==P&&(I===ch?r.cullFace(r.BACK):I===G_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),P=I}function xe(I){I!==z&&(V&&r.lineWidth(I),z=I)}function at(I,ie,W){I?(se(r.POLYGON_OFFSET_FILL),(O!==ie||G!==W)&&(r.polygonOffset(ie,W),O=ie,G=W)):Te(r.POLYGON_OFFSET_FILL)}function ve(I){I?se(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+q-1),te!==I&&(r.activeTexture(I),te=I)}function S(I,ie,W){W===void 0&&(te===null?W=r.TEXTURE0+q-1:W=te);let Z=oe[W];Z===void 0&&(Z={type:void 0,texture:void 0},oe[W]=Z),(Z.type!==I||Z.texture!==ie)&&(te!==W&&(r.activeTexture(W),te=W),r.bindTexture(I,ie||_e[I]),Z.type=I,Z.texture=ie)}function F(){const I=oe[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){Ze.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function de(I){X.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function We(I,ie){let W=u.get(ie);W===void 0&&(W=new WeakMap,u.set(ie,W));let Z=W.get(I);Z===void 0&&(Z=r.getUniformBlockIndex(ie,I.name),W.set(I,Z))}function Ne(I,ie){const Z=u.get(ie).get(I);c.get(ie)!==Z&&(r.uniformBlockBinding(ie,Z,I.__bindingPointIndex),c.set(ie,Z))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},te=null,oe={},l={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,b=null,w=null,A=new Ce(0,0,0),C=0,y=!1,T=null,P=null,z=null,O=null,G=null,Ze.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Te,bindFramebuffer:Pe,drawBuffers:Be,useProgram:ht,setBlending:D,setMaterial:_n,setFlipSided:Ve,setCullFace:Ge,setLineWidth:xe,setPolygonOffset:at,setScissorTest:ve,activeTexture:R,bindTexture:S,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:fe,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:qe,texStorage3D:ee,texSubImage2D:K,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:we,viewport:de,reset:st}}function BS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new be,f=new WeakMap;let l;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return d?new OffscreenCanvas(R,S):fa("canvas")}function g(R,S,F){let j=1;const $=ve(R);if(($.width>F||$.height>F)&&(j=F/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*$.width),ge=Math.floor(j*$.height);l===void 0&&(l=_(K,ge));const ae=S?_(K,ge):l;return ae.width=K,ae.height=ge,ae.getContext("2d").drawImage(R,0,0,K,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+ge+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,F,j,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===r.RED&&(F===r.FLOAT&&(K=r.R32F),F===r.HALF_FLOAT&&(K=r.R16F),F===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.R8UI),F===r.UNSIGNED_SHORT&&(K=r.R16UI),F===r.UNSIGNED_INT&&(K=r.R32UI),F===r.BYTE&&(K=r.R8I),F===r.SHORT&&(K=r.R16I),F===r.INT&&(K=r.R32I)),S===r.RG&&(F===r.FLOAT&&(K=r.RG32F),F===r.HALF_FLOAT&&(K=r.RG16F),F===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RG8UI),F===r.UNSIGNED_SHORT&&(K=r.RG16UI),F===r.UNSIGNED_INT&&(K=r.RG32UI),F===r.BYTE&&(K=r.RG8I),F===r.SHORT&&(K=r.RG16I),F===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGB8UI),F===r.UNSIGNED_SHORT&&(K=r.RGB16UI),F===r.UNSIGNED_INT&&(K=r.RGB32UI),F===r.BYTE&&(K=r.RGB8I),F===r.SHORT&&(K=r.RGB16I),F===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),F===r.UNSIGNED_INT&&(K=r.RGBA32UI),F===r.BYTE&&(K=r.RGBA8I),F===r.SHORT&&(K=r.RGBA16I),F===r.INT&&(K=r.RGBA32I)),S===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const ge=$?xo:ze.getTransfer(j);F===r.FLOAT&&(K=r.RGBA32F),F===r.HALF_FLOAT&&(K=r.RGBA16F),F===r.UNSIGNED_BYTE&&(K=ge===nt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,S){let F;return R?S===null||S===mr||S===ms?F=r.DEPTH24_STENCIL8:S===In?F=r.DEPTH32F_STENCIL8:S===ca&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mr||S===ms?F=r.DEPTH_COMPONENT24:S===In?F=r.DEPTH_COMPONENT32F:S===ca&&(F=r.DEPTH_COMPONENT16),F}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==yt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&f.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const F=R.source,j=h.get(F);if(j){const $=j[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(R),Object.keys(j).length===0&&h.delete(F)}n.remove(R)}function y(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const F=R.source,j=h.get(F);delete j[S.__cacheKey],a.memory.textures--}function T(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let $=0;$<S.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[j][$]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=R.textures;for(let j=0,$=F.length;j<$;j++){const K=n.get(F[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(R)}let P=0;function z(){P=0}function O(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const F=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,R,S);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function V(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,S);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function H(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Q(F,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const te={[ki]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},oe={[Zt]:r.NEAREST,[Wd]:r.NEAREST_MIPMAP_NEAREST,[Xs]:r.NEAREST_MIPMAP_LINEAR,[yt]:r.LINEAR,[eo]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},me={[Eg]:r.NEVER,[Pg]:r.ALWAYS,[bg]:r.LESS,[np]:r.LEQUAL,[Ag]:r.EQUAL,[Cg]:r.GEQUAL,[wg]:r.GREATER,[Rg]:r.NOTEQUAL};function Ae(R,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yt||S.magFilter===eo||S.magFilter===Xs||S.magFilter===hi||S.minFilter===yt||S.minFilter===eo||S.minFilter===Xs||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,oe[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Xs&&S.minFilter!==hi||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const j=S.source;let $=h.get(j);$===void 0&&($={},h.set(j,$));const K=G(S);if(K!==R.__cacheKey){$[K]===void 0&&($[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[K].usedTimes++;const ge=$[R.__cacheKey];ge!==void 0&&($[R.__cacheKey].usedTimes--,ge.usedTimes===0&&y(S)),R.__cacheKey=K,R.__webglTexture=$[K].texture}return F}function X(R,S,F){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const $=Ze(R,S),K=S.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+F);const ge=n.get(K);if(K.version!==ge.__version||$===!0){t.activeTexture(r.TEXTURE0+F);const ae=ze.getPrimaries(ze.workingColorSpace),he=S.colorSpace===wi?null:ze.getPrimaries(S.colorSpace),qe=S.colorSpace===wi||ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ee=g(S.image,!1,i.maxTextureSize);ee=at(S,ee);const fe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let we=M(S.internalFormat,fe,Se,S.colorSpace,S.isVideoTexture);Ae(j,S);let de;const We=S.mipmaps,Ne=S.isVideoTexture!==!0,st=ge.__version===void 0||$===!0,I=K.dataReady,ie=b(S,ee);if(S.isDepthTexture)we=v(S.format===_s,S.type),st&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Se,null));else if(S.isDataTexture)if(We.length>0){Ne&&st&&t.texStorage2D(r.TEXTURE_2D,ie,we,We[0].width,We[0].height);for(let W=0,Z=We.length;W<Z;W++)de=We[W],Ne?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,Se,de.data):t.texImage2D(r.TEXTURE_2D,W,we,de.width,de.height,0,fe,Se,de.data);S.generateMipmaps=!1}else Ne?(st&&t.texStorage2D(r.TEXTURE_2D,ie,we,ee.width,ee.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Se,ee.data)):t.texImage2D(r.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Se,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,we,We[0].width,We[0].height,ee.depth);for(let W=0,Z=We.length;W<Z;W++)if(de=We[W],S.format!==Tn)if(fe!==null)if(Ne){if(I)if(S.layerUpdates.size>0){const ce=af(de.width,de.height,S.format,S.type);for(const le of S.layerUpdates){const Ie=de.data.subarray(le*ce/de.data.BYTES_PER_ELEMENT,(le+1)*ce/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,le,de.width,de.height,1,fe,Ie)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,we,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,Se,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,we,de.width,de.height,ee.depth,0,fe,Se,de.data)}else{Ne&&st&&t.texStorage2D(r.TEXTURE_2D,ie,we,We[0].width,We[0].height);for(let W=0,Z=We.length;W<Z;W++)de=We[W],S.format!==Tn?fe!==null?Ne?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,W,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,Se,de.data):t.texImage2D(r.TEXTURE_2D,W,we,de.width,de.height,0,fe,Se,de.data)}else if(S.isDataArrayTexture)if(Ne){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,we,ee.width,ee.height,ee.depth),I)if(S.layerUpdates.size>0){const W=af(ee.width,ee.height,S.format,S.type);for(const Z of S.layerUpdates){const ce=ee.data.subarray(Z*W/ee.data.BYTES_PER_ELEMENT,(Z+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,fe,Se,ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Se,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,fe,Se,ee.data);else if(S.isData3DTexture)Ne?(st&&t.texStorage3D(r.TEXTURE_3D,ie,we,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Se,ee.data)):t.texImage3D(r.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,fe,Se,ee.data);else if(S.isFramebufferTexture){if(st)if(Ne)t.texStorage2D(r.TEXTURE_2D,ie,we,ee.width,ee.height);else{let W=ee.width,Z=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(r.TEXTURE_2D,ce,we,W,Z,0,fe,Se,null),W>>=1,Z>>=1}}else if(We.length>0){if(Ne&&st){const W=ve(We[0]);t.texStorage2D(r.TEXTURE_2D,ie,we,W.width,W.height)}for(let W=0,Z=We.length;W<Z;W++)de=We[W],Ne?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe,Se,de):t.texImage2D(r.TEXTURE_2D,W,we,fe,Se,de);S.generateMipmaps=!1}else if(Ne){if(st){const W=ve(ee);t.texStorage2D(r.TEXTURE_2D,ie,we,W.width,W.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Se,ee)}else t.texImage2D(r.TEXTURE_2D,0,we,fe,Se,ee);m(S)&&p(j),ge.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,F){if(S.image.length!==6)return;const j=Ze(R,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const K=n.get($);if($.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+F);const ge=ze.getPrimaries(ze.workingColorSpace),ae=S.colorSpace===wi?null:ze.getPrimaries(S.colorSpace),he=S.colorSpace===wi||ge===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!qe&&!ee?fe[Z]=g(S.image[Z],!0,i.maxCubemapSize):fe[Z]=ee?S.image[Z].image:S.image[Z],fe[Z]=at(S,fe[Z]);const Se=fe[0],we=s.convert(S.format,S.colorSpace),de=s.convert(S.type),We=M(S.internalFormat,we,de,S.colorSpace),Ne=S.isVideoTexture!==!0,st=K.__version===void 0||j===!0,I=$.dataReady;let ie=b(S,Se);Ae(r.TEXTURE_CUBE_MAP,S);let W;if(qe){Ne&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,We,Se.width,Se.height);for(let Z=0;Z<6;Z++){W=fe[Z].mipmaps;for(let ce=0;ce<W.length;ce++){const le=W[ce];S.format!==Tn?we!==null?Ne?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,We,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,we,de,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,We,le.width,le.height,0,we,de,le.data)}}}else{if(W=S.mipmaps,Ne&&st){W.length>0&&ie++;const Z=ve(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){Ne?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,we,de,fe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,fe[Z].width,fe[Z].height,0,we,de,fe[Z].data);for(let ce=0;ce<W.length;ce++){const Ie=W[ce].image[Z].image;Ne?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Ie.width,Ie.height,we,de,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,We,Ie.width,Ie.height,0,we,de,Ie.data)}}else{Ne?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,de,fe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,we,de,fe[Z]);for(let ce=0;ce<W.length;ce++){const le=W[ce];Ne?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,we,de,le.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,We,we,de,le.image[Z])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),K.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,F,j,$,K){const ge=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),he=M(F.internalFormat,ge,ae,F.colorSpace),qe=n.get(S),ee=n.get(F);if(ee.__renderTarget=S,!qe.__hasExternalTextures){const fe=Math.max(1,S.width>>K),Se=Math.max(1,S.height>>K);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,K,he,fe,Se,S.depth,0,ge,ae,null):t.texImage2D($,K,he,fe,Se,0,ge,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ee.__webglTexture,0,Ve(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ee.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,$=j&&j.isDepthTexture?j.type:null,K=v(S.stencilBuffer,$),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Ve(S);Ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,K,S.width,S.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{const j=S.textures;for(let $=0;$<j.length;$++){const K=j[$],ge=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),he=M(K.internalFormat,ge,ae,K.colorSpace),qe=Ve(S);F&&Ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,he,S.width,S.height):Ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,he,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,he,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const $=j.__webglTexture,K=Ve(S);if(S.depthTexture.format===ns)Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(S.depthTexture.format===_s)Ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const S=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,R)}else if(F){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),se(S.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(R,S,F){const j=n.get(R);S!==void 0&&_e(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Pe(R)}function ht(R){const S=R.texture,F=n.get(R),j=n.get(S);R.addEventListener("dispose",A);const $=R.textures,K=R.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=r.createFramebuffer()}else F.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)F.__webglFramebuffer[ae]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ae=0,he=$.length;ae<he;ae++){const qe=n.get($[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const he=$[ae];F.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const qe=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),fe=M(he.internalFormat,qe,ee,he.colorSpace,R.isXRRenderTarget===!0),Se=Ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),se(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(F.__webglFramebuffer[ae][he],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else _e(F.__webglFramebuffer[ae],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,he=$.length;ae<he;ae++){const qe=$[ae],ee=n.get(qe);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Ae(r.TEXTURE_2D,qe),_e(F.__webglFramebuffer,R,qe,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(qe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Ae(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(F.__webglFramebuffer[he],R,S,r.COLOR_ATTACHMENT0,ae,he);else _e(F.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}R.depthBuffer&&Pe(R)}function Xe(R){const S=R.textures;for(let F=0,j=S.length;F<j;F++){const $=S[F];if(m($)){const K=x(R),ge=n.get($).__webglTexture;t.bindTexture(K,ge),p(K),t.unbindTexture()}}}const vt=[],D=[];function _n(R){if(R.samples>0){if(Ge(R)===!1){const S=R.textures,F=R.width,j=R.height;let $=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),ae=S.length>1;if(ae)for(let he=0;he<S.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<S.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const qe=n.get(S[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,F,j,0,0,F,j,$,r.NEAREST),c===!0&&(vt.length=0,D.length=0,vt.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(K),D.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<S.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const qe=n.get(S[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(R){const S=a.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function at(R,S){const F=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Gt&&F!==wi&&(ze.getTransfer(F)===nt?(j!==Tn||$!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function kS(r,e){function t(n,i=wi){let s;const a=ze.getTransfer(i);if(n===vi)return r.UNSIGNED_BYTE;if(n===uu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return r.BYTE;if(n===qd)return r.SHORT;if(n===ca)return r.UNSIGNED_SHORT;if(n===cu)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===ma)return r.HALF_FLOAT;if(n===Kd)return r.ALPHA;if(n===jd)return r.RGB;if(n===Tn)return r.RGBA;if(n===Zd)return r.LUMINANCE;if(n===$d)return r.LUMINANCE_ALPHA;if(n===ns)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===fu)return r.RED;if(n===du)return r.RED_INTEGER;if(n===Jd)return r.RG;if(n===pu)return r.RG_INTEGER;if(n===mu)return r.RGBA_INTEGER;if(n===to||n===no||n===io||n===ro)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===sc||n===ac||n===oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lc||n===cc)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===fc||n===dc||n===pc||n===mc||n===_c||n===gc||n===vc||n===xc||n===yc||n===Mc||n===Sc||n===Tc||n===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===bc||n===Ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qd||n===wc||n===Rc||n===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===so)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const zS={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=f.position.distanceTo(l.position),d=.02,_=.005;u.inputState.pinching&&h>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zS)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
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

}`;class GS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:HS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WS extends vr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,l=null,h=null,d=null,_=null;const g=new GS,m=t.getContextAttributes();let p=null,x=null;const M=[],v=[],b=new be;let w=null;const A=new Yt;A.viewport=new je;const C=new Yt;C.viewport=new je;const y=[A,C],T=new Q0;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new Sl,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new Sl,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new Sl,M[X]=Q),Q.getHandSpace()};function O(X){const Q=v.indexOf(X.inputSource);if(Q===-1)return;const _e=M[Q];_e!==void 0&&(_e.update(X.inputSource,X.frame,u||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){const Q=v[X];Q!==null&&(v[X]=null,M[X].disconnect(Q))}P=null,z=null,g.reset(),e.setRenderTarget(p),d=null,h=null,l=null,i=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _e=null,se=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?_s:ns,se=m.stencil?ms:mr);const Pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};l=new XRWebGLBinding(i,t),h=l.createProjectionLayer(Pe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new _r(h.textureWidth,h.textureHeight,{format:Tn,type:vi,depthTexture:new _p(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _r(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let Q=0;Q<X.removed.length;Q++){const _e=X.removed[Q],se=v.indexOf(_e);se>=0&&(v[se]=null,M[se].disconnect(_e))}for(let Q=0;Q<X.added.length;Q++){const _e=X.added[Q];let se=v.indexOf(_e);if(se===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=v.length){v.push(_e),se=Pe;break}else if(v[Pe]===null){v[Pe]=_e,se=Pe;break}if(se===-1)break}const Te=M[se];Te&&Te.connect(_e)}}const V=new L,Y=new L;function H(X,Q,_e){V.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(_e.matrixWorld);const se=V.distanceTo(Y),Te=Q.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,Be=Te[14]/(Te[10]-1),ht=Te[14]/(Te[10]+1),Xe=(Te[9]+1)/Te[5],vt=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],_n=(Pe[8]+1)/Pe[0],Ve=Be*D,Ge=Be*_n,xe=se/(-D+_n),at=xe*-D;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ve=Be+xe,R=ht+xe,S=Ve-at,F=Ge+(se-at),j=Xe*ht/R*ve,$=vt*ht/R*ve;X.projectionMatrix.makePerspective(S,F,j,$,ve,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,_e=X.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),T.near=C.near=A.near=Q,T.far=C.far=A.far=_e,(P!==T.near||z!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,z=T.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,T.layers.mask=A.layers.mask|C.layers.mask;const se=X.parent,Te=T.cameras;te(T,se);for(let Pe=0;Pe<Te.length;Pe++)te(Te[Pe],se);Te.length===2?H(T,A,C):T.projectionMatrix.copy(A.projectionMatrix),oe(X,T,se)};function oe(X,Q,_e){_e===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let me=null;function Ae(X,Q){if(f=Q.getViewerPose(u||a),_=Q,f!==null){const _e=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let se=!1;_e.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let Pe=0;Pe<_e.length;Pe++){const Be=_e[Pe];let ht=null;if(d!==null)ht=d.getViewport(Be);else{const vt=l.getViewSubImage(h,Be);ht=vt.viewport,Pe===0&&(e.setRenderTargetTextures(x,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(x))}let Xe=y[Pe];Xe===void 0&&(Xe=new Yt,Xe.layers.enable(Pe),Xe.viewport=new je,y[Pe]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Pe===0&&(T.matrix.copy(Xe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),se===!0&&T.cameras.push(Xe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Pe=l.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let _e=0;_e<M.length;_e++){const se=v[_e],Te=M[_e];se!==null&&Te!==void 0&&Te.update(se,Q,u||a)}me&&me(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ze=new Sp;Ze.setAnimationLoop(Ae),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const Qi=new Ht,XS=new Le;function qS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,up(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Qi.copy(v),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(Qi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function YS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function u(x,M){let v=i[x.id];v===void 0&&(_(x),v=f(x),i[x.id]=v,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const w=e.render.frame;s[x.id]!==w&&(h(x),s[x.id]=w)}function f(x){const M=l();x.__bindingPointIndex=M;const v=r.createBuffer(),b=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=i[x.id],v=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=v.length;w<A;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,T=C.length;y<T;y++){const P=C[y];if(d(P,w,y,b)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let q=0;q<O.length;q++){const V=O[q],Y=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,v,b){const w=x.value,A=M+"_"+v;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const C=b[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(x){const M=x.uniforms;let v=0;const b=16;for(let A=0,C=M.length;A<C;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,P=y.length;T<P;T++){const z=y[T],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=O.length;G<q;G++){const V=O[G],Y=g(V),H=v%b,te=H%Y.boundary,oe=H+te;v+=te,oe!==0&&b-oe<Y.storage&&(v+=b-oe),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const w=v%b;return w>0&&(v+=b-w),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:u,dispose:p}}class KS{constructor(e={}){const{canvas:t=Yg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let b=!1,w=0,A=0,C=null,y=-1,T=null;const P=new je,z=new je;let O=null;const G=new Ce(0);let q=0,V=t.width,Y=t.height,H=1,te=null,oe=null;const me=new je(0,0,V,Y),Ae=new je(0,0,V,Y);let Ze=!1;const X=new Mu;let Q=!1,_e=!1;this.transmissionResolutionScale=1;const se=new Le,Te=new Le,Pe=new L,Be=new je,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function vt(){return C===null?H:1}let D=n;function _n(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const U="webgl2";if(D=_n(U,E),D===null)throw _n(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Ge,xe,at,ve,R,S,F,j,$,K,ge,ae,he,qe,ee,fe,Se,we,de,We,Ne,st,I;function ie(){Ve=new iM(D),Ve.init(),Ne=new kS(D,Ve),Ge=new $y(D,Ve,e,Ne),xe=new FS(D,Ve),Ge.reverseDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),at=new aM(D),ve=new ES,R=new BS(D,Ve,xe,ve,Ge,Ne,at),S=new Qy(v),F=new nM(v),j=new dv(D),st=new jy(D,j),$=new rM(D,j,at,st),K=new lM(D,$,j,at),we=new oM(D,Ge,R),ee=new Jy(ve),ge=new TS(v,S,F,Ve,Ge,st,ee),ae=new qS(v,ve),he=new AS,qe=new LS(Ve),Se=new Ky(v,S,F,xe,K,d,c),fe=new NS(v,K,Ge),I=new YS(D,at,Ge,xe),de=new Zy(D,Ve,at),We=new sM(D,Ve,at),at.programs=ge.programs,v.capabilities=Ge,v.extensions=Ve,v.properties=ve,v.renderLists=he,v.shadowMap=fe,v.state=xe,v.info=at}ie();const W=new WS(v,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(V,Y,!1))},this.getSize=function(E){return E.set(V,Y)},this.setSize=function(E,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,Y=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(E,U,B){V=E,Y=U,H=B,t.width=Math.floor(E*B),t.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,U,B,k){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,U,B,k),xe.viewport(P.copy(me).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,U,B,k){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,U,B,k),xe.scissor(z.copy(Ae).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){xe.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(E=!0,U=!0,B=!0){let k=0;if(E){let N=!1;if(C!==null){const J=C.texture.format;N=J===mu||J===pu||J===du}if(N){const J=C.texture.type,re=J===vi||J===mr||J===ca||J===ms||J===uu||J===hu,ue=Se.getClearColor(),pe=Se.getClearAlpha(),Re=ue.r,De=ue.g,ye=ue.b;re?(_[0]=Re,_[1]=De,_[2]=ye,_[3]=pe,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Re,g[1]=De,g[2]=ye,g[3]=pe,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),B&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Se.dispose(),he.dispose(),qe.dispose(),ve.dispose(),S.dispose(),F.dispose(),K.dispose(),st.dispose(),I.dispose(),ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",Bu),W.removeEventListener("sessionend",ku),Wi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=at.autoReset,U=fe.enabled,B=fe.autoUpdate,k=fe.needsUpdate,N=fe.type;ie(),at.autoReset=E,fe.enabled=U,fe.autoUpdate=B,fe.needsUpdate=k,fe.type=N}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const U=E.target;U.removeEventListener("dispose",Ie),mt(U)}function mt(E){Ot(E),ve.remove(E)}function Ot(E){const U=ve.get(E).programs;U!==void 0&&(U.forEach(function(B){ge.releaseProgram(B)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,k,N,J){U===null&&(U=ht);const re=N.isMesh&&N.matrixWorld.determinant()<0,ue=Mm(E,U,B,k,N);xe.setMaterial(k,re);let pe=B.index,Re=1;if(k.wireframe===!0){if(pe=$.getWireframeAttribute(B),pe===void 0)return;Re=2}const De=B.drawRange,ye=B.attributes.position;let Ye=De.start*Re,$e=(De.start+De.count)*Re;J!==null&&(Ye=Math.max(Ye,J.start*Re),$e=Math.min($e,(J.start+J.count)*Re)),pe!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,pe.count)):ye!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,ye.count));const St=$e-Ye;if(St<0||St===1/0)return;st.setup(N,k,ue,B,pe);let _t,Ke=de;if(pe!==null&&(_t=j.get(pe),Ke=We,Ke.setIndex(_t)),N.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*vt()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(N.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),xe.setLineWidth(Me*vt()),N.isLineSegments?Ke.setMode(D.LINES):N.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else N.isPoints?Ke.setMode(D.POINTS):N.isSprite&&Ke.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,It=N._multiDrawCounts,Je=N._multiDrawCount,An=pe?j.get(pe).bytesPerElement:1,Mr=ve.get(k).currentProgram.getUniforms();for(let on=0;on<Je;on++)Mr.setValue(D,"_gl_DrawID",on),Ke.render(Me[on]/An,It[on])}else if(N.isInstancedMesh)Ke.renderInstances(Ye,St,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,It=Math.min(B.instanceCount,Me);Ke.renderInstances(Ye,St,It)}else Ke.render(Ye,St)};function Qe(E,U,B){E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,xa(E,U,B),E.side=gi,E.needsUpdate=!0,xa(E,U,B),E.side=Pn):xa(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),p=qe.get(B),p.init(U),M.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const ue=J[re];Qe(ue,B,N),k.add(ue)}else Qe(J,B,N),k.add(J)}),M.pop(),p=null,k},this.compileAsync=function(E,U,B=null){const k=this.compile(E,U,B);return new Promise(N=>{function J(){if(k.forEach(function(re){ve.get(re).currentProgram.isReady()&&k.delete(re)}),k.size===0){N(E);return}setTimeout(J,10)}Ve.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let bn=null;function ei(E){bn&&bn(E)}function Bu(){Wi.stop()}function ku(){Wi.start()}const Wi=new Sp;Wi.setAnimationLoop(ei),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){bn=E,W.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},W.addEventListener("sessionstart",Bu),W.addEventListener("sessionend",ku),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,C),p=qe.get(E,M.length),p.init(U),M.push(p),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,_e),m=he.get(E,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&Io(J,U,-1/0,v.sortObjects)}Io(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,oe),Xe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xe&&Se.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ee.beginShadows();const B=p.state.shadowsArray;fe.render(B,E,U),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const J=U.cameras;if(N.length>0)for(let re=0,ue=J.length;re<ue;re++){const pe=J[re];Hu(k,N,E,pe)}Xe&&Se.render(E);for(let re=0,ue=J.length;re<ue;re++){const pe=J[re];zu(m,E,pe,pe.viewport)}}else N.length>0&&Hu(k,N,E,U),Xe&&Se.render(E),zu(m,E,U);C!==null&&A===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,U),st.resetDefaultState(),y=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&ee.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Io(E,U,B,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const re=K.update(E),ue=E.material;ue.visible&&m.push(E,re,ue,B,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const re=K.update(E),ue=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Be.copy(re.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){const pe=re.groups;for(let Re=0,De=pe.length;Re<De;Re++){const ye=pe[Re],Ye=ue[ye.materialIndex];Ye&&Ye.visible&&m.push(E,re,Ye,B,Be.z,ye)}}else ue.visible&&m.push(E,re,ue,B,Be.z,null)}}const J=E.children;for(let re=0,ue=J.length;re<ue;re++)Io(J[re],U,B,k)}function zu(E,U,B,k){const N=E.opaque,J=E.transmissive,re=E.transparent;p.setupLightsView(B),Q===!0&&ee.setGlobalState(v.clippingPlanes,B),k&&xe.viewport(P.copy(k)),N.length>0&&va(N,U,B),J.length>0&&va(J,U,B),re.length>0&&va(re,U,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Hu(E,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new _r(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ma:vi,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],re=k.viewport||P;J.setSize(re.z*v.transmissionResolutionScale,re.w*v.transmissionResolutionScale);const ue=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Se.render(B);const pe=v.toneMapping;v.toneMapping=Oi;const Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Q===!0&&ee.setGlobalState(v.clippingPlanes,k),va(E,B,k),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ye=0,Ye=U.length;ye<Ye;ye++){const $e=U[ye],St=$e.object,_t=$e.geometry,Ke=$e.material,Me=$e.group;if(Ke.side===Pn&&St.layers.test(k.layers)){const It=Ke.side;Ke.side=sn,Ke.needsUpdate=!0,Vu(St,B,k,_t,Ke,Me),Ke.side=It,Ke.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}v.setRenderTarget(ue),v.setClearColor(G,q),Re!==void 0&&(k.viewport=Re),v.toneMapping=pe}function va(E,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,J=E.length;N<J;N++){const re=E[N],ue=re.object,pe=re.geometry,Re=k===null?re.material:k,De=re.group;ue.layers.test(B.layers)&&Vu(ue,U,B,pe,Re,De)}}function Vu(E,U,B,k,N,J){E.onBeforeRender(v,U,B,k,N,J),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,B,k,E,J),N.transparent===!0&&N.side===Pn&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,E,J),N.side=gi,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,E,J),N.side=Pn):v.renderBufferDirect(B,U,k,N,E,J),E.onAfterRender(v,U,B,k,N,J)}function xa(E,U,B){U.isScene!==!0&&(U=ht);const k=ve.get(E),N=p.state.lights,J=p.state.shadowsArray,re=N.state.version,ue=ge.getParameters(E,N.state,J,U,B),pe=ge.getProgramCacheKey(ue);let Re=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?F:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Ie),Re=new Map,k.programs=Re);let De=Re.get(pe);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===re)return Wu(E,ue),De}else ue.uniforms=ge.getUniforms(E),E.onBeforeCompile(ue,v),De=ge.acquireProgram(ue,pe),Re.set(pe,De),k.uniforms=ue.uniforms;const ye=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Wu(E,ue),k.needsLights=Tm(E),k.lightsStateVersion=re,k.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function Gu(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ao.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Wu(E,U){const B=ve.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Mm(E,U,B,k,N){U.isScene!==!0&&(U=ht),R.resetTextureUnits();const J=U.fog,re=k.isMeshStandardMaterial?U.environment:null,ue=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gt,pe=(k.isMeshStandardMaterial?F:S).get(k.envMap||re),Re=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,$e=!!B.morphAttributes.color;let St=Oi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=v.toneMapping);const _t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=_t!==void 0?_t.length:0,Me=ve.get(k),It=p.state.lights;if(Q===!0&&(_e===!0||E!==T)){const Wt=E===T&&k.id===y;ee.setState(k,E,Wt)}let Je=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==It.state.version||Me.outputColorSpace!==ue||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==pe||k.fog===!0&&Me.fog!==J||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==De||Me.morphTargets!==ye||Me.morphNormals!==Ye||Me.morphColors!==$e||Me.toneMapping!==St||Me.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Me.__version=k.version);let An=Me.currentProgram;Je===!0&&(An=xa(k,U,N));let Mr=!1,on=!1,Cs=!1;const lt=An.getUniforms(),gn=Me.uniforms;if(xe.useProgram(An.program)&&(Mr=!0,on=!0,Cs=!0),k.id!==y&&(y=k.id,on=!0),Mr||T!==E){xe.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),jg(se),Zg(se),lt.setValue(D,"projectionMatrix",se)):lt.setValue(D,"projectionMatrix",E.projectionMatrix),lt.setValue(D,"viewMatrix",E.matrixWorldInverse);const $t=lt.map.cameraPosition;$t!==void 0&&$t.setValue(D,Pe.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,on=!0,Cs=!0)}if(N.isSkinnedMesh){lt.setOptional(D,N,"bindMatrix"),lt.setOptional(D,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),lt.setValue(D,"boneTexture",Wt.boneTexture,R))}N.isBatchedMesh&&(lt.setOptional(D,N,"batchingTexture"),lt.setValue(D,"batchingTexture",N._matricesTexture,R),lt.setOptional(D,N,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",N._indirectTexture,R),lt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",N._colorsTexture,R));const vn=B.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&we.update(N,B,An),(on||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,lt.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gn.envMap.value=pe,gn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),on&&(lt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&Sm(gn,Cs),J&&k.fog===!0&&ae.refreshFogUniforms(gn,J),ae.refreshMaterialUniforms(gn,k,H,Y,p.state.transmissionRenderTarget[E.id]),ao.upload(D,Gu(Me),gn,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ao.upload(D,Gu(Me),gn,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(D,"center",N.center),lt.setValue(D,"modelViewMatrix",N.modelViewMatrix),lt.setValue(D,"normalMatrix",N.normalMatrix),lt.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Wt=k.uniformsGroups;for(let $t=0,Uo=Wt.length;$t<Uo;$t++){const Xi=Wt[$t];I.update(Xi,An),I.bind(Xi,An)}}return An}function Sm(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Tm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,B){ve.get(E.texture).__webglTexture=U,ve.get(E.depthTexture).__webglTexture=B;const k=ve.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=ve.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Em=D.createFramebuffer();this.setRenderTarget=function(E,U=0,B=0){C=E,w=U,A=B;let k=!0,N=null,J=!1,re=!1;if(E){const pe=ve.get(E);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(pe.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(pe.__hasExternalTextures)R.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(pe.__boundDepthTexture!==ye){if(ye!==null&&ve.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(re=!0);const De=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][B]:N=De[U],J=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[B]:N=De,P.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else P.copy(me).multiplyScalar(H).floor(),z.copy(Ae).multiplyScalar(H).floor(),O=Ze;if(B!==0&&(N=Em),xe.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&xe.drawBuffers(E,N),xe.viewport(P),xe.scissor(z),xe.setScissorTest(O),J){const pe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,B)}else if(re){const pe=ve.get(E.texture),Re=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.__webglTexture,B,Re)}else if(E!==null&&B!==0){const pe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(E,U,B,k,N,J,re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){xe.bindFramebuffer(D.FRAMEBUFFER,ue);try{const pe=E.texture,Re=pe.format,De=pe.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&B>=0&&B<=E.height-N&&D.readPixels(U,B,k,N,Ne.convert(Re),Ne.convert(De),J)}finally{const pe=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,k,N,J,re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){const pe=E.texture,Re=pe.format,De=pe.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&B>=0&&B<=E.height-N){xe.bindFramebuffer(D.FRAMEBUFFER,ue);const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(U,B,k,N,Ne.convert(Re),Ne.convert(De),0);const Ye=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Ye);const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kg(D,$e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(ye),D.deleteSync($e),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(E.image.width*k),J=Math.floor(E.image.height*k),re=U!==null?U.x:0,ue=U!==null?U.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,re,ue,N,J),xe.unbindTexture()};const bm=D.createFramebuffer(),Am=D.createFramebuffer();this.copyTextureToTexture=function(E,U,B=null,k=null,N=0,J=null){E.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],J=arguments[3]||0,B=null),J===null&&(N!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let re,ue,pe,Re,De,ye,Ye,$e,St;const _t=E.isCompressedTexture?E.mipmaps[J]:E.image;if(B!==null)re=B.max.x-B.min.x,ue=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,De=B.min.y,ye=B.isBox3?B.min.z:0;else{const vn=Math.pow(2,-N);re=Math.floor(_t.width*vn),ue=Math.floor(_t.height*vn),E.isDataArrayTexture?pe=_t.depth:E.isData3DTexture?pe=Math.floor(_t.depth*vn):pe=1,Re=0,De=0,ye=0}k!==null?(Ye=k.x,$e=k.y,St=k.z):(Ye=0,$e=0,St=0);const Ke=Ne.convert(U.format),Me=Ne.convert(U.type);let It;U.isData3DTexture?(R.setTexture3D(U,0),It=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),It=D.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=D.getParameter(D.UNPACK_ROW_LENGTH),An=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mr=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),Cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,De),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye);const lt=E.isDataArrayTexture||E.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const vn=ve.get(E),Wt=ve.get(U),$t=ve.get(vn.__renderTarget),Uo=ve.get(Wt.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,$t.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let Xi=0;Xi<pe;Xi++)lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,N,ye+Xi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,J,St+Xi)),D.blitFramebuffer(Re,De,re,ue,Ye,$e,re,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||ve.has(E)){const vn=ve.get(E),Wt=ve.get(U);xe.bindFramebuffer(D.READ_FRAMEBUFFER,bm),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Am);for(let $t=0;$t<pe;$t++)lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,N,ye+$t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,N),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,J,St+$t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,J),N!==0?D.blitFramebuffer(Re,De,re,ue,Ye,$e,re,ue,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(It,J,Ye,$e,St+$t,Re,De,re,ue):D.copyTexSubImage2D(It,J,Ye,$e,Re,De,re,ue);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(It,J,Ye,$e,St,re,ue,pe,Ke,Me,_t.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(It,J,Ye,$e,St,re,ue,pe,Ke,_t.data):D.texSubImage3D(It,J,Ye,$e,St,re,ue,pe,Ke,Me,_t):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Ye,$e,re,ue,Ke,Me,_t.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Ye,$e,_t.width,_t.height,Ke,_t.data):D.texSubImage2D(D.TEXTURE_2D,J,Ye,$e,re,ue,Ke,Me,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,An),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mr),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),J===0&&U.generateMipmaps&&D.generateMipmap(It),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,k=null,N=0){return E.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,B,k,N)},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}const Df={type:"change"},Pu={type:"start"},wp={type:"end"},Ka=new Es,Lf=new Ai,jS=Math.cos(70*ip.DEG2RAD),ZS=new L(-3,-1,-4),$S=new L(2,8,8),wt=new L,Jt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class JS extends hv{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new jn,this._lastTargetPosition=new L,this._quat=new jn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sf,this._sphericalDelta=new sf,this._scale=1,this._panOffset=new L,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new L,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eT.bind(this),this._onPointerDown=QS.bind(this),this._onPointerUp=tT.bind(this),this._onContextMenu=lT.bind(this),this._onMouseWheel=rT.bind(this),this._onKeyDown=sT.bind(this),this._onTouchStart=aT.bind(this),this._onTouchMove=oT.bind(this),this._onMouseDown=nT.bind(this),this._onMouseMove=iT.bind(this),this._interceptControlDown=cT.bind(this),this._interceptControlUp=uT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.clamp(ZS,$S),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new L(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<jS?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;wt.copy(i).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function QS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wp),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=it.DOLLY;break;case es.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}break;case es.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Pu)}function iT(r){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function rT(r){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(r.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(wp))}function sT(r){this.enabled!==!1&&this._handleKeyDown(r)}function aT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=it.TOUCH_ROTATE;break;case jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=it.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Pu)}function oT(r){switch(this._trackPointer(r),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=it.NONE}}function lT(r){this.enabled!==!1&&r.preventDefault()}function cT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const El=new WeakMap;class hT extends Gi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new To(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ct,n).catch(n)}decodeDracoFile(e,t,n,i,s=Gt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(El.has(e)){const c=El.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(c=>(i=c,new Promise((u,f)=>{i._callbacks[s]={resolve:u,reject:f},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),El.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Fn;e.index&&t.setIndex(new Nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,c=new Nt(a,o);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==ct)return;const n=new Ce;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),ze.toWorkingColorSpace(n,ct),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new To(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=fT.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function fT(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(f){r.onModuleLoaded=function(l){f({draco:l})},DracoDecoderModule(r)});break;case"decode":const c=o.buffer,u=o.taskConfig;e.then(f=>{const l=f.draco,h=new l.Decoder;try{const d=t(l,h,new Int8Array(c),u),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{l.destroy(h)}});break}};function t(a,o,c,u){const f=u.attributeIDs,l=u.attributeTypes;let h,d;const _=o.GetEncodedGeometryType(c);if(_===a.TRIANGULAR_MESH)h=new a.Mesh,d=o.DecodeArrayToMesh(c,c.byteLength,h);else if(_===a.POINT_CLOUD)h=new a.PointCloud,d=o.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in f){const p=self[l[m]];let x,M;if(u.useUniqueIDs)M=f[m],x=o.GetAttributeByUniqueId(h,M);else{if(M=o.GetAttributeId(h,a[f[m]]),M===-1)continue;x=o.GetAttribute(h,M)}const v=i(a,o,h,m,p,x);m==="color"&&(v.vertexColorSpace=u.vertexColorSpace),g.attributes.push(v)}return _===a.TRIANGULAR_MESH&&(g.index=n(a,o,h)),a.destroy(h),g}function n(a,o,c){const f=c.num_faces()*3,l=f*4,h=a._malloc(l);o.GetTrianglesUInt32Array(c,l,h);const d=new Uint32Array(a.HEAPF32.buffer,h,f).slice();return a._free(h),{array:d,itemSize:1}}function i(a,o,c,u,f,l){const h=l.num_components(),_=c.num_points()*h,g=_*f.BYTES_PER_ELEMENT,m=s(a,f),p=a._malloc(g);o.GetAttributeDataArrayForAllPoints(c,l,m,g,p);const x=new f(a.HEAPF32.buffer,p,_).slice();return a._free(p),{name:u,array:x,itemSize:h}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function If(r,e){if(e===yg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Pc||e===ep){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Pc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class dT extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new LT(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=Js.extractUrlBase(e);a=Js.resolveURL(u,this.path)}else a=Js.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new To(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(f){t(f),s.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rp){try{a[ke.KHR_BINARY_GLTF]=new IT(e)}catch(l){i&&i(l);return}s=JSON.parse(a[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new qT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const l=this.pluginCallbacks[f](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[l.name]=l,a[l.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const l=s.extensionsUsed[f],h=s.extensionsRequired||[];switch(l){case ke.KHR_MATERIALS_UNLIT:a[l]=new _T;break;case ke.KHR_DRACO_MESH_COMPRESSION:a[l]=new UT(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:a[l]=new NT;break;case ke.KHR_MESH_QUANTIZATION:a[l]=new OT;break;default:h.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function pT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mT{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const f=new Ce(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],Gt);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new $0(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new j0(f),u.distance=l;break;case"spot":u=new Y0(f),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,ci(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class _T{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ct))}return Promise.all(i)}}class gT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class vT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(s)}}class xT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class yT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class MT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class ST{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class TT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Gt),Promise.all(s)}}class ET{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class bT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Gt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ct)),Promise.all(s)}}class AT{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class wT{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class RT{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class CT{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PT{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DT{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,u=i.byteLength||0,f=i.count,l=i.byteStride,h=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,l,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(f*l);return a.decodeGltfBuffer(new Uint8Array(d),f,l,h,i.mode,i.filter),d})})}else return null}}class LT{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Mn.TRIANGLES&&u.mode!==Mn.TRIANGLE_STRIP&&u.mode!==Mn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(f=>(c[u]=f,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const f=u.pop(),l=f.isGroup?f.children:[f],h=u[0].count,d=[];for(const _ of l){const g=new Le,m=new L,p=new jn,x=new L(1,1,1),M=new b0(_.geometry,_.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,g.compose(m,p,x));for(const v in c)if(v==="_COLOR_0"){const b=c[v];M.instanceColor=new Lc(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,c[v]);pt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),d.push(M)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const Rp="glTF",zs=12,Uf={JSON:1313821514,BIN:5130562};class IT{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,s=new DataView(e,zs);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Uf.JSON){const u=new Uint8Array(e,zs+a,o);this.content=n.decode(u)}else if(c===Uf.BIN){const u=zs+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const f in a){const l=Oc[f]||f.toLowerCase();o[l]=a[f]}for(const f in e.attributes){const l=Oc[f]||f.toLowerCase();if(a[f]!==void 0){const h=n.accessors[e.attributes[f]],d=rs[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(l,h){i.decodeDracoFile(f,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}l(d)},o,u,Gt,h)})})}}class NT{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OT{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Cp extends ga{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,f=i-t,l=(n-t)/f,h=l*l,d=h*l,_=e*u,g=_-u,m=-2*d+3*h,p=d-h,x=1-m,M=p-h+l;for(let v=0;v!==o;v++){const b=a[g+v+o],w=a[g+v+c]*f,A=a[_+v+o],C=a[_+v]*f;s[v]=x*b+M*w+m*A+p*C}return s}}const FT=new jn;class BT extends Cp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return FT.fromArray(s).normalize().toArray(s),s}}const Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:Zt,9729:yt,9984:Wd,9985:eo,9986:Xs,9987:hi},Of={33071:Di,33648:vo,10497:ki},bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kT={CUBICSPLINE:void 0,LINEAR:ha,STEP:ua},Al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Tu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),r.DefaultMaterial}function er(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HT(r,e,t){let n=!1,i=!1,s=!1;for(let u=0,f=e.length;u<f;u++){const l=e[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let u=0,f=e.length;u<f;u++){const l=e[u];if(n){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):r.attributes.position;a.push(h)}if(i){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):r.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const f=u[0],l=u[1],h=u[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=l),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function VT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GT(r){let e;const t=r.extensions&&r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wl(t.attributes):e=r.indices+":"+wl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+wl(r.targets[n]);return e}function wl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Fc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const XT=new Le;class qT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Mp(this.options.manager):this.textureLoader=new J0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new To(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return er(s,o,i),ci(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,f]of a.children.entries())s(f,o.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Js.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=bl[i.type],o=rs[i.componentType],c=i.normalized===!0,u=new o(i.count*a);return Promise.resolve(new Nt(u,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=bl[i.type],u=rs[i.componentType],f=u.BYTES_PER_ELEMENT,l=f*c,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==l){const p=Math.floor(h/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(x);M||(g=new u(o,p*d,i.count*d/f),M=new y0(g,d/f),t.cache.add(x,M)),m=new xu(M,c,h%d/f,_)}else o===null?g=new u(i.count*c):g=new u(o,h,i.count*c),m=new Nt(g,c,_);if(i.sparse!==void 0){const p=bl.SCALAR,x=rs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new x(a[1],M,i.sparse.count*p),w=new u(a[2],v,i.sparse.count*c);o!==null&&(m=new Nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=b.length;A<C;A++){const y=b[A];if(m.setX(y,w[A*c]),c>=2&&m.setY(y,w[A*c+1]),c>=3&&m.setZ(y,w[A*c+2]),c>=4&&m.setW(y,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return f.magFilter=Nf[h.magFilter]||yt,f.minFilter=Nf[h.minFilter]||hi,f.wrapS=Of[h.wrapS]||ki,f.wrapT=Of[h.wrapT]||ki,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Zt&&f.minFilter!==yt,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new At(g);m.needsUpdate=!0,h(m)}),t.load(Js.resolveURL(l,s.path),_,void 0,d)})}).then(function(l){return u===!0&&o.revokeObjectURL(c),ci(l,a),l.userData.mimeType=a.mimeType||WT(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mp,Yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new pp,Yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Tu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},u=[];if(c[ke.KHR_MATERIALS_UNLIT]){const l=i[ke.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(o,s,t))}else{const l=s.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Gt),o.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",l.baseColorTexture,ct)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Pn);const f=s.alphaMode||Al.OPAQUE;if(f===Al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Al.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Un&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const l=s.normalTexture.scale;o.normalScale.set(l,l)}if(s.occlusionTexture!==void 0&&a!==Un&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Un){const l=s.emissiveFactor;o.emissive=new Ce().setRGB(l[0],l[1],l[2],Gt)}return s.emissiveTexture!==void 0&&a!==Un&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ct)),Promise.all(u).then(function(){const l=new a(o);return s.name&&(l.name=s.name),ci(l,s),t.associations.set(l,{materials:e}),s.extensions&&er(i,l,s),l})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ff(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],f=GT(u),l=i[f];if(l)a.push(l.promise);else{let h;u.extensions&&u.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?h=s(u):h=Ff(new Fn,u,t),i[f]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const f=a[c].material===void 0?zT(this.cache):this.getDependency("material",a[c].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),f=c[c.length-1],l=[];for(let d=0,_=f.length;d<_;d++){const g=f[d],m=a[d];let p;const x=u[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new S0(g,x):new jt(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=If(p.geometry,ep):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=If(p.geometry,Pc));else if(m.mode===Mn.LINES)p=new R0(g,x);else if(m.mode===Mn.LINE_STRIP)p=new Su(g,x);else if(m.mode===Mn.LINE_LOOP)p=new C0(g,x);else if(m.mode===Mn.POINTS)p=new P0(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&VT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ci(p,s),m.extensions&&er(i,p,m),t.assignFinalMaterial(p),l.push(p)}for(let d=0,_=l.length;d<_;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return s.extensions&&er(i,l[0],s),l[0];const h=new ar;s.extensions&&er(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,_=l.length;d<_;d++)h.add(l[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(ip.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Au(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let u=0,f=a.length;u<f;u++){const l=a[u];if(l){o.push(l);const h=new Le;s!==null&&h.fromArray(s.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new yu(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],u=[],f=[];for(let l=0,h=i.channels.length;l<h;l++){const d=i.channels[l],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),u.push(_),f.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(l){const h=l[0],d=l[1],_=l[2],g=l[3],m=l[4],p=[];for(let x=0,M=h.length;x<M;x++){const v=h[x],b=d[x],w=_[x],A=g[x],C=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,b,w,A,C);if(y)for(let T=0;T<y.length;T++)p.push(y[T])}return new z0(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=i.weights.length;c<u;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let u=0,f=o.length;u<f;u++)a.push(n.getDependency("node",o[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){const f=u[0],l=u[1],h=u[2];h!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(h,XT)});for(let d=0,_=l.length;d<_;d++)f.add(l[d]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let f;if(s.isBone===!0?f=new fp:u.length>1?f=new ar:u.length===1?f=u[0]:f=new pt,f!==u[0])for(let l=0,h=u.length;l<h;l++)f.add(u[l]);if(s.name&&(f.userData.name=s.name,f.name=a),ci(f,s),s.extensions&&er(n,f,s),s.matrix!==void 0){const l=new Le;l.fromArray(s.matrix),f.applyMatrix4(l)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ar;n.name&&(s.name=i.createUniqueName(n.name)),ci(s,n),n.extensions&&er(t,s,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let f=0,l=c.length;f<l;f++)s.add(c[f]);const u=f=>{const l=new Map;for(const[h,d]of i.associations)(h instanceof Yn||h instanceof At)&&l.set(h,d);return f.traverse(h=>{const d=i.associations.get(h);d!=null&&l.set(h,d)}),l};return i.associations=u(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];bi[s.path]===bi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let u;switch(bi[s.path]){case bi.weights:u=xs;break;case bi.rotation:u=ys;break;case bi.position:case bi.scale:u=Ms;break;default:switch(n.itemSize){case 1:u=xs;break;case 2:case 3:default:u=Ms;break}break}const f=i.interpolation!==void 0?kT[i.interpolation]:ha,l=this._getArrayFromAccessor(n);for(let h=0,d=c.length;h<d;h++){const _=new u(c[h]+"."+bi[s.path],t.array,l,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ys?BT:Cp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YT(r,e,t){const n=e.attributes,i=new $n;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(u[0],u[1],u[2])),o.normalized){const f=Fc(rs[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let u=0,f=s.length;u<f;u++){const l=s[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const g=Fc(rs[h.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Jn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Ff(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Oc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ze.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),ci(r,e),YT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HT(r,e.targets,t):r})}var KT=`uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

vec2 rotate2D(vec2 value, float angle)
{
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}

void main()
{
    vec3 newPosition = position;

    
    float twistPerlin = texture(
        uPerlinTexture,
        vec2(0.5, uv.y * 0.2 - uTime * 0.01)
    ).r;
    float angle = twistPerlin * 3.0;
    newPosition.xz = rotate2D(newPosition.xz, angle);

    
    vec2 windOffset = vec2(
        texture(uPerlinTexture, vec2(0.25, uTime * 0.01)).r - 0.5,
        texture(uPerlinTexture, vec2(0.75, uTime * 0.01)).r - 0.5
    );
    windOffset *= pow(uv.y, 2.0) * 1.5;
    newPosition.xz += windOffset;

    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    
    vUv = uv;
}`,jT=`uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

void main()
{
    
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.04;

    
    float smoke = texture(uPerlinTexture, smokeUv).r;

    
    smoke = smoothstep(0.4, 1.0, smoke);

    
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    
    gl_FragColor = vec4(1, 1, 1, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,ZT=`varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;

    vUv = uv;
}`,$T=`uniform sampler2D uDayTexture1;
uniform sampler2D uNightTexture1;
uniform sampler2D uDayTexture2;
uniform sampler2D uNightTexture2;
uniform sampler2D uDayTexture3;
uniform sampler2D uNightTexture3;
uniform sampler2D uDayTexture4;
uniform sampler2D uNightTexture4;
uniform float uMixRatio;
uniform int uTextureSet;

varying vec2 vUv;

void main() {
    vec3 dayColor;
    vec3 nightColor;
    
    if(uTextureSet == 1) {
        dayColor = texture2D(uDayTexture1, vUv).rgb;
        nightColor = texture2D(uNightTexture1, vUv).rgb;
    } else if(uTextureSet == 2) {
        dayColor = texture2D(uDayTexture2, vUv).rgb;
        nightColor = texture2D(uNightTexture2, vUv).rgb;
    } else if(uTextureSet == 3) {
        dayColor = texture2D(uDayTexture3, vUv).rgb;
        nightColor = texture2D(uNightTexture3, vUv).rgb;
    } else {
        dayColor = texture2D(uDayTexture4, vUv).rgb;
        nightColor = texture2D(uNightTexture4, vUv).rgb;
    }
    
    vec3 finalColor = mix(dayColor, nightColor, uMixRatio);

    
    finalColor = pow(finalColor, vec3(1.0/2.2));
    gl_FragColor = vec4(finalColor, 1.0);

    
    
    
    
}`;let Rl=null,bo=!1;const Pp=500,JT=2e3,Dp=1,Lp=0,zi=new ou.Howl({src:["/audio/music/cosmic_candy.ogg"],loop:!0,volume:1}),QT=()=>{!lr&&!bo&&(zi.fade(zi.volume(),Lp,Pp),bo=!0)},eE=()=>{!lr&&bo&&(zi.fade(Lp,Dp,Pp),bo=!1)},Du={C1_Key:"Key_24","C#1_Key":"Key_23",D1_Key:"Key_22","D#1_Key":"Key_21",E1_Key:"Key_20",F1_Key:"Key_19","F#1_Key":"Key_18",G1_Key:"Key_17","G#1_Key":"Key_16",A1_Key:"Key_15","A#1_Key":"Key_14",B1_Key:"Key_13",C2_Key:"Key_12","C#2_Key":"Key_11",D2_Key:"Key_10","D#2_Key":"Key_9",E2_Key:"Key_8",F2_Key:"Key_7","F#2_Key":"Key_6",G2_Key:"Key_5","G#2_Key":"Key_4",A2_Key:"Key_3","A#2_Key":"Key_2",B2_Key:"Key_1"},Lu={};Object.values(Du).forEach(r=>{Lu[r]=new ou.Howl({src:[`/audio/sfx/piano/${r}.ogg`],preload:!0,volume:.5})});const xr={click:new ou.Howl({src:["/audio/sfx/click/bubble.ogg"],preload:!0,volume:.5})},tE=document.querySelector("#experience-canvas"),Qt={width:window.innerWidth,height:window.innerHeight},Ss=new x0;Ss.background=new Ce("#D9CAD1");const On=new Yt(35,Qt.width/Qt.height,.1,200),Ts=new KS({canvas:tE,antialias:!0});Ts.setSize(Qt.width,Qt.height);Ts.setPixelRatio(Math.min(window.devicePixelRatio,2));const Mt=new JS(On,Ts.domElement);Mt.minDistance=5;Mt.maxDistance=45;Mt.minPolarAngle=0;Mt.maxPolarAngle=Math.PI/2;Mt.minAzimuthAngle=0;Mt.maxAzimuthAngle=Math.PI/2;Mt.enableDamping=!0;Mt.dampingFactor=.05;Mt.update();window.innerWidth<768?(On.position.set(29.567116827654726,14.018476147584705,31.37040363900147),Mt.target.set(-.08206262548844094,3.3119233527087255,-.7433922282864018)):(On.position.set(17.49173098423395,9.108969527553887,17.850992894238058),Mt.target.set(.4624746759408973,1.9719940043010387,-.8300979125494505));window.addEventListener("resize",()=>{Qt.width=window.innerWidth,Qt.height=window.innerHeight,On.aspect=Qt.width/Qt.height,On.updateProjectionMatrix(),Ts.setSize(Qt.width,Qt.height),Ts.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Cl={work:document.querySelector(".modal.work"),about:document.querySelector(".modal.about"),contact:document.querySelector(".modal.contact")},dr=document.querySelector(".overlay");let En=!1;dr.addEventListener("touchend",r=>{En=!0,r.preventDefault();const e=document.querySelector('.modal[style*="display: block"]');e&&Iu(e)},{passive:!1});dr.addEventListener("click",r=>{if(En)return;r.preventDefault();const e=document.querySelector('.modal[style*="display: block"]');e&&Iu(e)},{passive:!1});document.querySelectorAll(".modal-exit-button").forEach(r=>{function e(t){t.preventDefault();const n=t.target.closest(".modal");Ee.to(r,{scale:5,duration:.5,ease:"back.out(2)",onStart:()=>{Ee.to(r,{scale:1,duration:.5,ease:"back.out(2)",onComplete:()=>{Ee.set(r,{clearProps:"all"})}})}}),xr.click.play(),Iu(n)}r.addEventListener("touchend",t=>{En=!0,e(t)},{passive:!1}),r.addEventListener("click",t=>{En||e(t)},{passive:!1})});let Hi=!0;const Pl=r=>{r.style.display="block",dr.style.display="block",Hi=!0,Mt.enabled=!1,Hn&&(co(Hn,!1),Hn=null),document.body.style.cursor="default",or=[],document.querySelector(".camera-menu").classList.add("hidden"),Ee.set(r,{opacity:0,scale:0}),Ee.set(dr,{opacity:0}),Ee.to(dr,{opacity:1,duration:.5}),Ee.to(r,{opacity:1,scale:1,duration:.5,ease:"back.out(2)"})},Iu=r=>{Hi=!1,Mt.enabled=!0,Ee.to(dr,{opacity:0,duration:.5}),Ee.to(r,{opacity:0,scale:0,duration:.5,ease:"back.in(2)",onComplete:()=>{r.style.display="none",dr.style.display="none",document.querySelector(".camera-menu").classList.remove("hidden")}})},Ip=new xp,oo=document.querySelector(".loading-screen"),Rt=document.querySelector(".loading-screen-button"),Dl=document.querySelector(".no-sound-button");Ip.onLoad=function(){Rt.style.border="8px solid #2a0f4e",Rt.style.background="#401d49",Rt.style.color="#e6dede",Rt.style.boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px",Rt.textContent="Enter!",Rt.style.cursor="pointer",Rt.style.transition="transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";let r=!1;Dl.textContent="Enter without Sound :(";function e(t=!0){r||(Dl.textContent="",Rt.style.cursor="default",Rt.style.border="8px solid #6e5e9c",Rt.style.background="#ead7ef",Rt.style.color="#6e5e9c",Rt.style.boxShadow="none",Rt.textContent="Fivel's Innovation Lab",oo.style.background="#ead7ef",r=!0,gm(),t?zi.play():(lr=!0,mm(!0),Gc.style.display="none",Vc.style.display="block"),nE())}Rt.addEventListener("mouseenter",()=>{Rt.style.transform="scale(1.3)"}),Rt.addEventListener("touchend",t=>{En=!0,t.preventDefault(),e()}),Rt.addEventListener("click",t=>{En||e(!0)}),Rt.addEventListener("mouseleave",()=>{Rt.style.transform="none"}),Dl.addEventListener("click",t=>{En||e(!1)})};function nE(){Ee.timeline().to(oo,{scale:.5,duration:1.2,delay:.25,ease:"back.in(1.8)"}).to(oo,{y:"200vh",transform:"perspective(1000px) rotateX(45deg) rotateY(-35deg)",duration:1.2,ease:"back.in(1.8)",onComplete:()=>{Hi=!1,iE(),oo.remove()}},"-=0.1")}function iE(){const r=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});r.timeScale(.8),r.to(Hp.scale,{x:1,y:1}).to(Vp.scale,{x:1,y:1,z:1},"-=0.5").to(Gp.scale,{x:1,y:1,z:1},"-=0.6").to(Wp.scale,{x:1,y:1,z:1},"-=0.6").to(Xp.scale,{x:1,y:1,z:1},"-=0.6");const e=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});e.timeScale(.8),e.to(um.scale,{x:1,y:1,z:1}).to(hm.scale,{x:1,y:1,z:1},"-=0.5").to(fm.scale,{x:1,y:1,z:1},"-=0.5");const t=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});t.timeScale(.8),t.to(qp.scale,{z:1,y:1,x:1,delay:.4}).to(Yp.scale,{x:1,y:1,z:1},"-=0.5").to(Kp.scale,{x:1,y:1,z:1},"-=0.6").to(jp.scale,{x:1,y:1,z:1},"-=0.6");const n=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});n.timeScale(.8),n.to(em.scale,{x:1,y:1,z:1}).to(Qp.scale,{x:1,y:1,z:1},"-=0.5").to(Jp.scale,{x:1,y:1,z:1},"-=0.5").to($p.scale,{x:1,y:1,z:1},"-=0.5").to(Zp.scale,{x:1,y:1,z:1},"-=0.5");const i=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});i.timeScale(.8),i.to(tm.scale,{x:1,y:1,z:1}).to(nm.scale,{x:1,y:1,z:1},"-=0.5").to(im.scale,{x:1,y:1,z:1},"-=0.5");const s=Ee.timeline({defaults:{duration:.8,delay:.2,ease:"back.out(1.8)"}});s.timeScale(.8),s.to(rm.scale,{x:1,y:1,z:1});const a=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});a.timeScale(.8),a.to(sm.scale,{x:1,y:1,z:1,delay:.5}).to(am.scale,{x:1,y:1,z:1},"-=0.5");const o=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.8)"}});o.timeScale(.8),o.to(om.scale,{x:1,y:1,z:1}).to(lm.scale,{x:1,y:1,z:1},"-=0.5").to(cm.scale,{x:1,y:1,z:1},"-=0.5");const c=Ee.timeline({defaults:{delay:.8,duration:.8,ease:"back.out(1.8)"}});c.timeScale(.8),c.to(Qs.scale,{x:1,y:1,z:1});const u=Ee.timeline({defaults:{duration:.8,ease:"back.out(1.7)"}});u.timeScale(.8),u.to(kr.position,{y:kr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)",delay:.25}).to(kr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(kr.position,{y:kr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(zr.position,{y:zr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(zr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(zr.position,{y:zr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(Hr.position,{y:Hr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(Hr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(Hr.position,{y:Hr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(Vr.position,{y:Vr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(Vr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(Vr.position,{y:Vr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(Gr.position,{y:Gr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(Gr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(Gr.position,{y:Gr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(Wr.position,{y:Wr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(Wr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(Wr.position,{y:Wr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(Xr.position,{y:Xr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(Xr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(Xr.position,{y:Xr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2").to(qr.position,{y:qr.userData.initialPosition.y+.3,duration:.4,ease:"back.out(1.8)"},"-=0.5").to(qr.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(qr.position,{y:qr.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2");const f=Ee.timeline({defaults:{duration:.4,ease:"back.out(1.7)",onComplete:()=>{setTimeout(()=>{fE()},1950)}}});f.timeScale(1.2),[ot.C1_Key,ot.Cs1_Key,ot.D1_Key,ot.Ds1_Key,ot.E1_Key,ot.F1_Key,ot.Fs1_Key,ot.G1_Key,ot.Gs1_Key,ot.A1_Key,ot.As1_Key,ot.B1_Key,ot.C2_Key,ot.Cs2_Key,ot.D2_Key,ot.Ds2_Key,ot.E2_Key,ot.F2_Key,ot.Fs2_Key,ot.G2_Key,ot.Gs2_Key,ot.A2_Key,ot.As2_Key,ot.B2_Key].forEach((h,d)=>{f.to(h.position,{y:h.userData.initialPosition.y+.2,duration:.4,ease:"back.out(1.8)"},d*.1).to(h.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(1.8)"},"<").to(h.position,{y:h.userData.initialPosition.y,duration:.4,ease:"back.out(1.8)"},">-0.2")})}const Bc=new Mp,Up=new hT;Up.setDecoderPath("/draco/");const Np=new dT(Ip);Np.setDRACOLoader(Up);const rE=new X0().setPath("textures/skybox/").load(["px.webp","nx.webp","py.webp","ny.webp","pz.webp","nz.webp"]),Op={First:{day:"/textures/room/day/first_texture_set_day.webp",night:"/textures/room/night/first_texture_set_night.webp"},Second:{day:"/textures/room/day/second_texture_set_day.webp",night:"/textures/room/night/second_texture_set_night.webp"},Third:{day:"/textures/room/day/third_texture_set_day.webp",night:"/textures/room/night/third_texture_set_night.webp"},Fourth:{day:"/textures/room/day/fourth_texture_set_day.webp",night:"/textures/room/night/fourth_texture_set_night.webp"}},kn={day:{},night:{}};Object.entries(Op).forEach(([r,e])=>{const t=Bc.load(e.day);t.flipY=!1,t.colorSpace=ct,t.minFilter=yt,t.magFilter=yt,kn.day[r]=t;const n=Bc.load(e.night);n.flipY=!1,n.colorSpace=ct,n.minFilter=yt,n.magFilter=yt,kn.night[r]=n});const sE=new Bn({transmission:1,opacity:1,color:16514043,metalness:0,roughness:0,ior:3,thickness:.01,specularIntensity:1,envMap:rE,envMapIntensity:1,depthWrite:!1,specularColor:16514043}),aE=new Un({color:16777215}),ja=r=>{const e=new Zn({uniforms:{uDayTexture1:{value:kn.day.First},uNightTexture1:{value:kn.night.First},uDayTexture2:{value:kn.day.Second},uNightTexture2:{value:kn.night.Second},uDayTexture3:{value:kn.day.Third},uNightTexture3:{value:kn.night.Third},uDayTexture4:{value:kn.day.Fourth},uNightTexture4:{value:kn.night.Fourth},uMixRatio:{value:0},uTextureSet:{value:r}},vertexShader:ZT,fragmentShader:$T});return Object.entries(e.uniforms).forEach(([t,n])=>{n.value instanceof At&&(n.value.minFilter=yt,n.value.magFilter=yt)}),e},Fp={First:ja(1),Second:ja(2),Third:ja(3),Fourth:ja(4)},Uu=new _a(1,1,16,64);Uu.translate(0,.5,0);Uu.scale(.33,1,.33);const Nu=Bc.load("/shaders/perlin.png");Nu.wrapS=ki;Nu.wrapT=ki;const Bp=new Zn({vertexShader:KT,fragmentShader:jT,uniforms:{uTime:new Eo(0),uPerlinTexture:new Eo(Nu)},side:Pn,transparent:!0,depthWrite:!1}),ss=new jt(Uu,Bp);ss.position.y=1.83;Ss.add(ss);const yr=document.createElement("video");yr.src="/textures/video/Screen.mp4";yr.loop=!0;yr.muted=!0;yr.playsInline=!0;yr.autoplay=!0;yr.play();const Ou=new D0(yr);Ou.colorSpace=ct;Ou.flipY=!1;let Qs,Hs,kc,zc,lo;const kp=[],zp=[];let Hp,Vp,Gp,Wp,Xp,qp,Yp,Kp,jp,kr,zr,Hr,Vr,Gr,Wr,Xr,qr;const ot={};let Zp,$p,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,fm;const oE=["Bulb","Cactus","Kirby"],Hc=[],lE=["Hanging_Plank_1","Hanging_Plank_2","My_Work_Button","About_Button","Contact_Button","Boba","GitHub","YouTube","Twitter","Name_Letter_1","Name_Letter_2","Name_Letter_3","Name_Letter_4","Name_Letter_5","Name_Letter_6","Name_Letter_7","Name_Letter_8","Flower_1","Flower_2","Flower_3","Flower_4","Flower_5","Box_1","Box_2","Box_3","Lamp","Slipper_1","Slipper_2","Fish_Fourth","Egg_1","Egg_2","Egg_3","Frame_1","Frame_2","Frame_3","C1_Key","C#1_Key","D1_Key","D#1_Key","E1_Key","F1_Key","F#1_Key","G1_Key","G#1_Key","A1_Key","A#1_Key","B1_Key","C2_Key","C#2_Key","D2_Key","D#2_Key","E2_Key","F2_Key","F#2_Key","G2_Key","G#2_Key","A2_Key","A#2_Key","B2_Key"];function cE(r){return lE.some(e=>r.includes(e))}Np.load("/models/Room_Portfolio.glb",r=>{r.scene.traverse(e=>{if(e.isMesh&&(e.name.includes("Fish_Fourth")&&(Qs=e,e.position.x+=.04,e.position.z-=.03,e.userData.initialPosition=new L().copy(e.position)),e.name.includes("Chair_Top")&&(lo=e,e.userData.initialRotation=new Ht().copy(e.rotation)),e.name.includes("Hour_Hand")&&(kc=e,e.userData.initialRotation=new Ht().copy(e.rotation)),e.name.includes("Minute_Hand")&&(zc=e,e.userData.initialRotation=new Ht().copy(e.rotation)),e.name.includes("Coffee")&&(Hs=e.position.clone()),(e.name.includes("Hover")||e.name.includes("Key"))&&(e.userData.initialScale=new L().copy(e.scale),e.userData.initialPosition=new L().copy(e.position),e.userData.initialRotation=new Ht().copy(e.rotation)),e.name.includes("Hanging_Plank_1")?(Hp=e,e.scale.set(0,0,1)):e.name.includes("Hanging_Plank_2")?(Vp=e,e.scale.set(0,0,0)):e.name.includes("My_Work_Button")?(Gp=e,e.scale.set(0,0,0)):e.name.includes("About_Button")?(Wp=e,e.scale.set(0,0,0)):e.name.includes("Contact_Button")?(Xp=e,e.scale.set(0,0,0)):e.name.includes("Boba")?(qp=e,e.scale.set(0,0,0)):e.name.includes("GitHub")?(Yp=e,e.scale.set(0,0,0)):e.name.includes("YouTube")?(Kp=e,e.scale.set(0,0,0)):e.name.includes("Twitter")?(jp=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_1")?(kr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_2")?(zr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_3")?(Hr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_4")?(Vr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_5")?(Gr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_6")?(Wr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_7")?(Xr=e,e.scale.set(0,0,0)):e.name.includes("Name_Letter_8")?(qr=e,e.scale.set(0,0,0)):e.name.includes("Flower_1")?(Zp=e,e.scale.set(0,0,0)):e.name.includes("Flower_2")?($p=e,e.scale.set(0,0,0)):e.name.includes("Flower_3")?(Jp=e,e.scale.set(0,0,0)):e.name.includes("Flower_4")?(Qp=e,e.scale.set(0,0,0)):e.name.includes("Flower_5")?(em=e,e.scale.set(0,0,0)):e.name.includes("Box_1")?(tm=e,e.scale.set(0,0,0)):e.name.includes("Box_2")?(nm=e,e.scale.set(0,0,0)):e.name.includes("Box_3")?(im=e,e.scale.set(0,0,0)):e.name.includes("Lamp")?(rm=e,e.scale.set(0,0,0)):e.name.includes("Slipper_1")?(sm=e,e.scale.set(0,0,0)):e.name.includes("Slipper_2")?(am=e,e.scale.set(0,0,0)):e.name.includes("Fish_Fourth")?e.scale.set(0,0,0):e.name.includes("Egg_1")?(om=e,e.scale.set(0,0,0)):e.name.includes("Egg_2")?(lm=e,e.scale.set(0,0,0)):e.name.includes("Egg_3")?(cm=e,e.scale.set(0,0,0)):e.name.includes("Frame_1")?(um=e,e.scale.set(0,0,0)):e.name.includes("Frame_2")?(hm=e,e.scale.set(0,0,0)):e.name.includes("Frame_3")&&(fm=e,e.scale.set(0,0,0)),Object.keys(Du).forEach(t=>{if(e.name.includes(t)){const n=t.replace("#","s").split("_")[0]+"_Key";ot[n]=e,e.scale.set(0,0,0),e.userData.initialPosition=new L().copy(e.position)}}),e.name.includes("Water")?e.material=new Un({color:5606344,transparent:!0,opacity:.4,depthWrite:!1}):e.name.includes("Glass")?e.material=sE:e.name.includes("Bubble")?e.material=aE:e.name.includes("Screen")?e.material=new Un({map:Ou,transparent:!0,opacity:.9}):Object.keys(Op).forEach(t=>{e.name.includes(t)&&(e.material=Fp[t],e.name.includes("Fan")&&(e.name.includes("Fan_2")||e.name.includes("Fan_4")?kp.push(e):zp.push(e)))}),e.name.includes("Raycaster")))if(cE(e.name))e.userData.originalScale=new L(1,1,1),Hc.push(e);else{const t=dm(e);t!==e&&Ss.add(t),Fu.push(t),Lo.set(t,e)}}),Hs&&ss.position.set(Hs.x,Hs.y+.2,Hs.z),Ss.add(r.scene)});const Fu=[];let or=[],Hn=null;const uE={GitHub:"https://github.com/andrewwoan/sooahkimsfolio",YouTube:"https://youtu.be/AB6sulUMRGE",Twitter:"https://www.twitter.com/"},Bf=new uv,da=new be,Lo=new Map;function hE(r){return oE.some(e=>r.includes(e))}function dm(r){if(hE(r.name))return r.userData.initialScale||(r.userData.initialScale=new L().copy(r.scale)),r.userData.initialPosition||(r.userData.initialPosition=new L().copy(r.position)),r.userData.initialRotation||(r.userData.initialRotation=new Ht().copy(r.rotation)),r.userData.originalObject=r,r;r.userData.initialScale||(r.userData.initialScale=new L().copy(r.scale)),r.userData.initialPosition||(r.userData.initialPosition=new L().copy(r.position)),r.userData.initialRotation||(r.userData.initialRotation=new Ht().copy(r.rotation));const e=r.scale.clone(),t=e.x===0||e.y===0||e.z===0;t&&r.userData.originalScale&&r.scale.copy(r.userData.originalScale);const n=new $n().setFromObject(r),i=n.getSize(new L),s=n.getCenter(new L);t&&r.scale.copy(e);let a,o={x:1.1,y:1.75,z:1.1};a=new bs(i.x*o.x,i.y*o.y,i.z*o.z);const c=new Un({transparent:!0,opacity:0,visible:!1}),u=new jt(a,c);return u.position.copy(s),u.name=r.name+"_Hitbox",u.userData.originalObject=r,r.name.includes("Headphones")&&(u.rotation.x=0,u.rotation.y=Math.PI/4,u.rotation.z=0),u}function fE(){Hc.forEach(r=>{const e=dm(r);e!==r&&Ss.add(e),Fu.push(e),Lo.set(e,r)}),Hc.length=0}function pm(){if(or.length>0){const r=or[0].object,e=Lo.get(r);e.name.includes("Button")&&xr.click.play(),Object.entries(Du).forEach(([t,n])=>{e.name.includes(t)&&(Rl&&clearTimeout(Rl),QT(),Lu[n].play(),Rl=setTimeout(()=>{eE()},JT),Ee.to(e.rotation,{x:e.userData.initialRotation.x+Math.PI/42,duration:.4,ease:"back.out(2)",onComplete:()=>{Ee.to(e.rotation,{x:e.userData.initialRotation.x,duration:.25,ease:"back.out(2)"})}}))}),Object.entries(uE).forEach(([t,n])=>{if(e.name.includes(t)){const i=window.open();i.opener=null,i.location=n,i.target="_blank",i.rel="noopener noreferrer"}}),e.name.includes("Work_Button")?Pl(Cl.work):e.name.includes("About_Button")?Pl(Cl.about):e.name.includes("Contact_Button")&&Pl(Cl.contact)}}function co(r,e){let t=1.4;const n=Lo.get(r);Ee.killTweensOf(n.scale),Ee.killTweensOf(n.rotation),Ee.killTweensOf(n.position),n.name.includes("Coffee")&&(Ee.killTweensOf(ss.scale),e?Ee.to(ss.scale,{x:1.4,y:1.4,z:1.4,duration:.5,ease:"back.out(2)"}):Ee.to(ss.scale,{x:1,y:1,z:1,duration:.3,ease:"back.out(2)"})),n.name.includes("Fish")&&(t=1.2),e?(Ee.to(n.scale,{x:n.userData.initialScale.x*t,y:n.userData.initialScale.y*t,z:n.userData.initialScale.z*t,duration:.5,ease:"back.out(2)"}),n.name.includes("About_Button")?Ee.to(n.rotation,{x:n.userData.initialRotation.x-Math.PI/10,duration:.5,ease:"back.out(2)"}):(n.name.includes("Contact_Button")||n.name.includes("My_Work_Button")||n.name.includes("GitHub")||n.name.includes("YouTube")||n.name.includes("Twitter"))&&Ee.to(n.rotation,{x:n.userData.initialRotation.x+Math.PI/10,duration:.5,ease:"back.out(2)"}),(n.name.includes("Boba")||n.name.includes("Name_Letter"))&&Ee.to(n.position,{y:n.userData.initialPosition.y+.2,duration:.5,ease:"back.out(2)"})):(Ee.to(n.scale,{x:n.userData.initialScale.x,y:n.userData.initialScale.y,z:n.userData.initialScale.z,duration:.3,ease:"back.out(2)"}),(n.name.includes("About_Button")||n.name.includes("Contact_Button")||n.name.includes("My_Work_Button")||n.name.includes("GitHub")||n.name.includes("YouTube")||n.name.includes("Twitter"))&&Ee.to(n.rotation,{x:n.userData.initialRotation.x,duration:.3,ease:"back.out(2)"}),(n.name.includes("Boba")||n.name.includes("Name_Letter"))&&Ee.to(n.position,{y:n.userData.initialPosition.y,duration:.3,ease:"back.out(2)"}))}window.addEventListener("mousemove",r=>{En=!1,da.x=r.clientX/Qt.width*2-1,da.y=-(r.clientY/Qt.height)*2+1});window.addEventListener("touchstart",r=>{Hi||(r.preventDefault(),da.x=r.touches[0].clientX/Qt.width*2-1,da.y=-(r.touches[0].clientY/Qt.height)*2+1)},{passive:!1});window.addEventListener("touchend",r=>{Hi||(r.preventDefault(),pm())},{passive:!1});window.addEventListener("click",pm);const ea=document.querySelector(".theme-toggle-button"),ta=document.querySelector(".mute-toggle-button"),kf=document.querySelector(".sun-svg"),zf=document.querySelector(".moon-svg"),Vc=document.querySelector(".sound-off-svg"),Gc=document.querySelector(".sound-on-svg"),mm=r=>{r?zi.volume(0):zi.volume(Dp),xr.click.mute(r),Object.values(Lu).forEach(e=>{e.mute(r)})},_m=r=>{r.preventDefault(),lr=!lr,mm(lr),xr.click.play(),zi.playing()||zi.play(),Ee.to(ta,{rotate:-45,scale:5,duration:.5,ease:"back.out(2)",onStart:()=>{lr?(Gc.style.display="none",Vc.style.display="block"):(Vc.style.display="none",Gc.style.display="block"),Ee.to(ta,{rotate:0,scale:1,duration:.5,ease:"back.out(2)",onComplete:()=>{Ee.set(ta,{clearProps:"all"})}})}})};let lr=!1;ta.addEventListener("click",r=>{En||_m(r)},{passive:!1});ta.addEventListener("touchend",r=>{En=!0,_m(r)},{passive:!1});const gm=()=>{const e=document.body.classList.contains("dark-theme")?"light":"dark";document.querySelector('link[sizes="96x96"]').href=`media/${e}-favicon/favicon-96x96.png`,document.querySelector('link[type="image/svg+xml"]').href=`/media/${e}-favicon/favicon.svg`,document.querySelector('link[rel="shortcut icon"]').href=`media/${e}-favicon/favicon.ico`,document.querySelector('link[rel="apple-touch-icon"]').href=`media/${e}-favicon/apple-touch-icon.png`,document.querySelector('link[rel="manifest"]').href=`media/${e}-favicon/site.webmanifest`};let Za=!1;const vm=r=>{r.preventDefault(),gm();const e=document.body.classList.contains("dark-theme");document.body.classList.remove(e?"dark-theme":"light-theme"),document.body.classList.add(e?"light-theme":"dark-theme"),Za=!Za,xr.click.play(),Ee.to(ea,{rotate:45,scale:5,duration:.5,ease:"back.out(2)",onStart:()=>{Za?(kf.style.display="none",zf.style.display="block"):(zf.style.display="none",kf.style.display="block"),Ee.to(ea,{rotate:0,scale:1,duration:.5,ease:"back.out(2)",onComplete:()=>{Ee.set(ea,{clearProps:"all"})}})}}),Object.values(Fp).forEach(t=>{Ee.to(t.uniforms.uMixRatio,{value:Za?1:0,duration:1.5,ease:"power2.inOut"})})};ea.addEventListener("click",r=>{En||vm(r)},{passive:!1});ea.addEventListener("touchend",r=>{En=!0,vm(r)},{passive:!1});let Ao={full:{position:{x:17.4917,y:9.1089,z:17.8509},target:{x:.4624,y:1.9719,z:-.83}},desk:{position:{x:5.5,y:4.5,z:9.5},target:{x:-.5,y:3.5,z:-1}},piano:{position:{x:12.5,y:6.5,z:7.5},target:{x:10,y:0,z:-5}},wall:{position:{x:5.6,y:7.4,z:9.5},target:{x:-6,y:6.5,z:-3.5}},screen:{position:{x:.5,y:3.5,z:2},target:{x:.5,y:3.5,z:-2}}};const Hf=localStorage.getItem("cameraPresets");Hf&&(Ao=JSON.parse(Hf));const xm=document.querySelector(".camera-menu"),dE=document.querySelector(".camera-toggle-button");dE.addEventListener("click",()=>{xr.click.play(),xm.classList.toggle("active")});const pE=r=>{const e=Ao[r];e&&(xm.classList.remove("active"),Hi=!0,Mt.enabled=!1,Ee.to(On.position,{x:e.position.x,y:e.position.y,z:e.position.z,duration:2,ease:"power2.inOut"}),Ee.to(Mt.target,{x:e.target.x,y:e.target.y,z:e.target.z,duration:2,ease:"power2.inOut",onUpdate:()=>{Mt.update()},onComplete:()=>{Hi=!1,Mt.enabled=!0}}))},mE=r=>{Ao[r]={position:{x:On.position.x,y:On.position.y,z:On.position.z},target:{x:Mt.target.x,y:Mt.target.y,z:Mt.target.z}},localStorage.setItem("cameraPresets",JSON.stringify(Ao)),console.log(`Saved preset: ${r}`)};let Vs;const _E=3e3;document.querySelectorAll(".preset-button").forEach(r=>{const e=n=>{n.preventDefault(),r.classList.add("pressing"),Vs=setTimeout(()=>{r.classList.remove("pressing"),r.classList.add("saved"),mE(r.dataset.preset),setTimeout(()=>r.classList.remove("saved"),1e3)},_E)},t=n=>{n.preventDefault(),Vs&&(clearTimeout(Vs),r.classList.remove("pressing"),n.type==="pointerup"&&!r.classList.contains("saved")&&(xr.click.play(),pE(r.dataset.preset)))};r.addEventListener("pointerdown",e),r.addEventListener("pointerup",t),r.addEventListener("pointerleave",n=>{Vs&&(clearTimeout(Vs),r.classList.remove("pressing"))})});const gE=new ev,vE=()=>{if(!kc||!zc)return;const r=new Date,e=r.getHours()%12,t=r.getMinutes(),n=r.getSeconds(),i=(t+n/60)*(Math.PI*2/60),s=(e+t/60)*(Math.PI*2/12);zc.rotation.x=-i,kc.rotation.x=-s},ym=r=>{const e=gE.getElapsedTime();if(Bp.uniforms.uTime.value=e,Mt.update(),vE(),kp.forEach(t=>{t.rotation.x-=.04}),zp.forEach(t=>{t.rotation.y-=.04}),lo){const t=r*.001,i=Math.PI/8*Math.sin(t*.5)*(1-Math.abs(Math.sin(t*.5))*.3);lo.rotation.y=lo.userData.initialRotation.y+i}if(Qs){const t=r*.0015,i=.12*Math.sin(t)*(1-Math.abs(Math.sin(t))*.1);Qs.position.y=Qs.userData.initialPosition.y+i}if(!Hi){Bf.setFromCamera(da,On),or=Bf.intersectObjects(Fu);for(let t=0;t<or.length;t++);if(or.length>0){const t=or[0].object;t.name.includes("Hover")&&t!==Hn&&(Hn&&co(Hn,!1),Hn=t,co(t,!0)),t.name.includes("Pointer")?document.body.style.cursor="pointer":document.body.style.cursor="default"}else Hn&&(co(Hn,!1),Hn=null),document.body.style.cursor="default"}Ts.render(Ss,On),window.requestAnimationFrame(ym)};ym();
