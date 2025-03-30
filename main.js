"use strict";(()=>{var Ry=Object.defineProperty;var Py=Object.getOwnPropertyDescriptor;var S=(r,e,t,n)=>{for(var i=n>1?void 0:n?Py(e,t):e,s=r.length-1,a;s>=0;s--)(a=r[s])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Ry(e,t,i),i};var Ih=()=>{};var Th=function(r){let e=[],t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Dy=function(r){let e=[],t=0,n=0;for(;t<r.length;){let i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=r[t++],a=r[t++],l=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{let s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){let s=r[i],a=i+1<r.length,l=a?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4,x=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(x=64)),n.push(t[p],t[m],t[x],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Th(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Dy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){let s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;let h=i<r.length?t[r.charAt(i)]:64;++i;let m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new tl;let x=s<<2|l>>4;if(n.push(x),h!==64){let A=l<<4&240|h>>2;if(n.push(A),m!==64){let P=h<<6&192|m;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},tl=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Ny=function(r){let e=Th(r);return Ah.encodeByteArray(e,!0)},ii=function(r){return Ny(r).replace(/\./g,"")},Is=function(r){try{return Ah.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Oy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var My=()=>Oy().__FIREBASE_DEFAULTS__,Ly=()=>{if(typeof process>"u"||typeof process.env>"u")return;let r=process.env.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Vy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=r&&Is(r[1]);return e&&JSON.parse(e)},bs=()=>{try{return Ih()||My()||Ly()||Vy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},nl=r=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Sh=r=>{let e=nl(r);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},il=()=>{var r;return(r=bs())===null||r===void 0?void 0:r.config},sl=r=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${r}`]};var Es=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function Ch(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ii(JSON.stringify(t)),ii(JSON.stringify(a)),""].join(".")}function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Fy(){var r;let e=(r=bs())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ph(){let r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nh(){let r=ge();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Oh(){return!Fy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ol(){try{return typeof indexedDB=="object"}catch{return!1}}function Mh(){return new Promise((r,e)=>{try{let t=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Uy="FirebaseError",Ne=class r extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Uy,Object.setPrototypeOf(this,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}},ft=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?$y(s,n):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ne(i,l,n)}};function $y(r,e){return r.replace(By,(t,n)=>{let i=e[n];return i!=null?String(i):`<${n}?>`})}var By=/\{\$([^}]+)}/g;function Lh(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ze(r,e){if(r===e)return!0;let t=Object.keys(r),n=Object.keys(e);for(let i of t){if(!n.includes(i))return!1;let s=r[i],a=e[i];if(bh(s)&&bh(a)){if(!Ze(s,a))return!1}else if(s!==a)return!1}for(let i of n)if(!t.includes(i))return!1;return!0}function bh(r){return r!==null&&typeof r=="object"}function zr(r){let e=[];for(let[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Hr(r){let e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){let[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gr(r){let e=r.indexOf("?");if(!e)return"";let t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Vh(r,e){let t=new rl(r,e);return t.subscribe.bind(t)}var rl=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");qy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=el),i.error===void 0&&(i.error=el),i.complete===void 0&&(i.complete=el);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function qy(r,e){if(typeof r!="object"||r===null)return!1;for(let t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function el(){}var gI=4*60*60*1e3;function Ae(r){return r&&r._delegate?r._delegate:r}var qe=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var nr="[DEFAULT]";var al=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new Es;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zy(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(let[t,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[s,a]of this.instancesDeferred.entries()){let l=this.normalizeInstanceIdentifier(s);n===l&&a.resolve(i)}return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:jy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function jy(r){return r===nr?void 0:r}function zy(r){return r.instantiationMode==="EAGER"}var Ts=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new al(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Hy=[],X;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(X||(X={}));var Gy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Wy=X.INFO,Ky={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Qy=(r,e,...t)=>{if(e<r.logLevel)return;let n=new Date().toISOString(),i=Ky[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Ot=class{constructor(e){this.name=e,this._logLevel=Wy,this._logHandler=Qy,this._userLogHandler=null,Hy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}};var Xy=(r,e)=>e.some(t=>r instanceof t),Fh,Uh;function Yy(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jy(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var $h=new WeakMap,ul=new WeakMap,Bh=new WeakMap,ll=new WeakMap,dl=new WeakMap;function Zy(r){let e=new Promise((t,n)=>{let i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(et(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$h.set(t,r)}).catch(()=>{}),dl.set(e,r),e}function ev(r){if(ul.has(r))return;let e=new Promise((t,n)=>{let i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ul.set(r,e)}var cl={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ul.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Bh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return et(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function qh(r){cl=r(cl)}function tv(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let n=r.call(As(this),e,...t);return Bh.set(n,e.sort?e.sort():[e]),et(n)}:Jy().includes(r)?function(...e){return r.apply(As(this),e),et($h.get(this))}:function(...e){return et(r.apply(As(this),e))}}function rv(r){return typeof r=="function"?tv(r):(r instanceof IDBTransaction&&ev(r),Xy(r,Yy())?new Proxy(r,cl):r)}function et(r){if(r instanceof IDBRequest)return Zy(r);if(ll.has(r))return ll.get(r);let e=rv(r);return e!==r&&(ll.set(r,e),dl.set(e,r)),e}var As=r=>dl.get(r);function zh(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(r,e),l=et(a);return n&&a.addEventListener("upgradeneeded",c=>{n(et(a.result),c.oldVersion,c.newVersion,et(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}var nv=["get","getKey","getAll","getAllKeys","count"],iv=["put","add","delete","clear"],hl=new Map;function jh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(hl.get(e))return hl.get(e);let t=e.replace(/FromIndex$/,""),n=e!==t,i=iv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||nv.includes(t)))return;let s=async function(a,...l){let c=this.transaction(a,i?"readwrite":"readonly"),h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return hl.set(e,s),s}qh(r=>({...r,get:(e,t,n)=>jh(e,t)||r.get(e,t,n),has:(e,t)=>!!jh(e,t)||r.has(e,t)}));var pl=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sv(t)){let n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}};function sv(r){let e=r.getComponent();return e?.type==="VERSION"}var ml="@firebase/app",Hh="0.11.2";var pt=new Ot("@firebase/app"),ov="@firebase/app-compat",av="@firebase/analytics-compat",lv="@firebase/analytics",uv="@firebase/app-check-compat",cv="@firebase/app-check",dv="@firebase/auth",hv="@firebase/auth-compat",fv="@firebase/database",pv="@firebase/data-connect",mv="@firebase/database-compat",gv="@firebase/functions",yv="@firebase/functions-compat",vv="@firebase/installations",_v="@firebase/installations-compat",xv="@firebase/messaging",wv="@firebase/messaging-compat",Ev="@firebase/performance",Iv="@firebase/performance-compat",bv="@firebase/remote-config",Tv="@firebase/remote-config-compat",Av="@firebase/storage",Sv="@firebase/storage-compat",Cv="@firebase/firestore",kv="@firebase/vertexai",Rv="@firebase/firestore-compat",Pv="firebase",Dv="11.4.0";var gl="[DEFAULT]",Nv={[ml]:"fire-core",[ov]:"fire-core-compat",[lv]:"fire-analytics",[av]:"fire-analytics-compat",[cv]:"fire-app-check",[uv]:"fire-app-check-compat",[dv]:"fire-auth",[hv]:"fire-auth-compat",[fv]:"fire-rtdb",[pv]:"fire-data-connect",[mv]:"fire-rtdb-compat",[gv]:"fire-fn",[yv]:"fire-fn-compat",[vv]:"fire-iid",[_v]:"fire-iid-compat",[xv]:"fire-fcm",[wv]:"fire-fcm-compat",[Ev]:"fire-perf",[Iv]:"fire-perf-compat",[bv]:"fire-rc",[Tv]:"fire-rc-compat",[Av]:"fire-gcs",[Sv]:"fire-gcs-compat",[Cv]:"fire-fst",[Rv]:"fire-fst-compat",[kv]:"fire-vertex","fire-js":"fire-js",[Pv]:"fire-js-all"};var Ss=new Map,Ov=new Map,yl=new Map;function Gh(r,e){try{r.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Lt(r){let e=r.name;if(yl.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,r);for(let t of Ss.values())Gh(t,r);for(let t of Ov.values())Gh(t,r);return!0}function oi(r,e){let t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ve(r){return r==null?!1:r.settings!==void 0}var Mv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new ft("app","Firebase",Mv);var vl=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}};var Vt=Dv;function wl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});let n=Object.assign({name:gl,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(t||(t=il()),!t)throw Mt.create("no-options");let s=Ss.get(i);if(s){if(Ze(t,s.options)&&Ze(n,s.config))return s;throw Mt.create("duplicate-app",{appName:i})}let a=new Ts(i);for(let c of yl.values())a.addComponent(c);let l=new vl(t,n,a);return Ss.set(i,l),l}function Cs(r=gl){let e=Ss.get(r);if(!e&&r===gl&&il())return wl();if(!e)throw Mt.create("no-app",{appName:r});return e}function We(r,e,t){var n;let i=(n=Nv[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(l.join(" "));return}Lt(new qe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Lv="firebase-heartbeat-database",Vv=1,si="firebase-heartbeat-store",fl=null;function Xh(){return fl||(fl=zh(Lv,Vv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(si)}catch(t){console.warn(t)}}}}).catch(r=>{throw Mt.create("idb-open",{originalErrorMessage:r.message})})),fl}async function Fv(r){try{let t=(await Xh()).transaction(si),n=await t.objectStore(si).get(Yh(r));return await t.done,n}catch(e){if(e instanceof Ne)pt.warn(e.message);else{let t=Mt.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function Wh(r,e){try{let n=(await Xh()).transaction(si,"readwrite");await n.objectStore(si).put(e,Yh(r)),await n.done}catch(t){if(t instanceof Ne)pt.warn(t.message);else{let n=Mt.create("idb-set",{originalErrorMessage:t?.message});pt.warn(n.message)}}}function Yh(r){return`${r.name}!${r.options.appId}`}var Uv=1024,$v=30,_l=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new xl(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>$v){let a=qv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Kh(),{heartbeatsToSend:n,unsentEntries:i}=Bv(this._heartbeatsCache.heartbeats),s=ii(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}};function Kh(){return new Date().toISOString().substring(0,10)}function Bv(r,e=Uv){let t=[],n=r.slice();for(let i of r){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Qh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Qh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}var xl=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ol()?Mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Fv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Qh(r){return ii(JSON.stringify({version:2,heartbeats:r})).length}function qv(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}function jv(r){Lt(new qe("platform-logger",e=>new pl(e),"PRIVATE")),Lt(new qe("heartbeat",e=>new _l(e),"PRIVATE")),We(ml,Hh,r),We(ml,Hh,"esm2017"),We("fire-js","")}jv("");var zv="firebase",Hv="11.4.0";We(zv,Hv,"app");function ks(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var vf=yf,_f=new ft("auth","Firebase",yf());var Ls=new Ot("@firebase/auth");function Gv(r,...e){Ls.logLevel<=X.WARN&&Ls.warn(`Auth (${Vt}): ${r}`,...e)}function Ps(r,...e){Ls.logLevel<=X.ERROR&&Ls.error(`Auth (${Vt}): ${r}`,...e)}function je(r,...e){throw jl(r,...e)}function Ke(r,...e){return jl(r,...e)}function ql(r,e,t){let n=Object.assign(Object.assign({},vf()),{[e]:t});return new ft("auth","Firebase",n).create(e,{appName:r.name})}function ir(r){return ql(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wv(r,e,t){let n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&je(r,"argument-error"),ql(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jl(r,...e){if(typeof r!="string"){let t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return _f.create(r,...e)}function F(r,e,...t){if(!r)throw jl(e,...t)}function tt(r){let e="INTERNAL ASSERTION FAILED: "+r;throw Ps(e),new Error(e)}function gt(r,e){r||tt(e)}function Tl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Kv(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}function Qv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kv()||Ph()||"connection"in navigator)?navigator.onLine:!0}function Xv(){if(typeof navigator>"u")return null;let r=navigator;return r.languages&&r.languages[0]||r.language||null}var sr=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=kh()||Dh()}get(){return Qv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function zl(r,e){gt(r.emulator,"Emulator should always be set here");let{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Vs=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Yv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Jv=new sr(3e4,6e4);function ye(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Se(r,e,t,n,i={}){return xf(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});let l=zr(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);let h=Object.assign({method:e,headers:c},s);return Rh()||(h.referrerPolicy="no-referrer"),Vs.fetch()(wf(r,r.config.apiHost,t,l),h)})}async function xf(r,e,t){r._canInitEmulator=!1;let n=Object.assign(Object.assign({},Yv),e);try{let i=new Al(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw li(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw li(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw li(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw li(r,"user-disabled",a);let p=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ql(r,p,h);je(r,p)}}catch(i){if(i instanceof Ne)throw i;je(r,"network-request-failed",{message:String(i)})}}async function cr(r,e,t,n,i={}){let s=await Se(r,e,t,n,i);return"mfaPendingCredential"in s&&je(r,"multi-factor-auth-required",{_serverResponse:s}),s}function wf(r,e,t,n){let i=`${e}${t}?${n}`;return r.config.emulator?zl(r.config,i):`${r.config.apiScheme}://${i}`}function Zv(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Al=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ke(this.auth,"network-request-failed")),Jv.get())})}};function li(r,e,t){let n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);let i=Ke(r,e,n);return i.customData._tokenResponse=t,i}function Zh(r){return r!==void 0&&r.enterprise!==void 0}var Fs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Ef(r,e){return Se(r,"GET","/v2/recaptchaConfig",ye(r,e))}async function e_(r,e){return Se(r,"POST","/v1/accounts:delete",e)}async function If(r,e){return Se(r,"POST","/v1/accounts:lookup",e)}function ui(r){if(r)try{let e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bf(r,e=!1){let t=Ae(r),n=await t.getIdToken(e),i=Hl(n);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:n,authTime:ui(El(i.auth_time)),issuedAtTime:ui(El(i.iat)),expirationTime:ui(El(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function El(r){return Number(r)*1e3}function Hl(r){let[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{let i=Is(t);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ef(r){let e=Hl(r);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function fi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ne&&t_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function t_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}var Sl=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var pi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Us(r){var e;let t=r.auth,n=await r.getIdToken(),i=await fi(r,If(t,{idToken:n}));F(i?.users.length,t,"internal-error");let s=i.users[0];r._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Af(s.providerUserInfo):[],l=r_(r.providerData,a),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!l?.length,p=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new pi(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(r,m)}async function Tf(r){let e=Ae(r);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r_(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Af(r){return r.map(e=>{var{providerId:t}=e,n=ks(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}async function n_(r,e){let t=await xf(r,{},async()=>{let n=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=wf(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Vs.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function i_(r,e){return Se(r,"POST","/v2/accounts:revokeToken",ye(r,e))}var ci=class r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");let t=ef(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:s}=await n_(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new r;return n&&(F(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new r,this.toJSON())}_performRefresh(){return tt("not implemented")}};function Ft(r,e){F(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}var Kr=class r{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bf(this,e)}reload(){return Tf(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Us(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(ir(this.auth));let e=await this.getIdToken();return await fi(this,e_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,l,c,h,p;let m=(n=t.displayName)!==null&&n!==void 0?n:void 0,x=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(l=t.tenantId)!==null&&l!==void 0?l:void 0,O=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,Y=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:q,emailVerified:oe,isAnonymous:Re,providerData:ne,stsTokenManager:w}=t;F(q&&w,e,"internal-error");let g=ci.fromJSON(this.name,w);F(typeof q=="string",e,"internal-error"),Ft(m,e.name),Ft(x,e.name),F(typeof oe=="boolean",e,"internal-error"),F(typeof Re=="boolean",e,"internal-error"),Ft(A,e.name),Ft(P,e.name),Ft(M,e.name),Ft(O,e.name),Ft(Q,e.name),Ft(Y,e.name);let v=new r({uid:q,auth:e,email:x,emailVerified:oe,displayName:m,isAnonymous:Re,photoURL:P,phoneNumber:A,tenantId:M,stsTokenManager:g,createdAt:Q,lastLoginAt:Y});return ne&&Array.isArray(ne)&&(v.providerData=ne.map(_=>Object.assign({},_))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,t,n=!1){let i=new ci;i.updateFromServerResponse(t);let s=new r({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Us(s),s}static async _fromGetAccountInfoResponse(e,t,n){let i=t.users[0];F(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Af(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new ci;l.updateFromIdToken(n);let c=new r({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(c,h),c}};var tf=new Map;function mt(r){gt(r instanceof Function,"Expected a class definition");let e=tf.get(r);return e?(gt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,tf.set(r,e),e)}var $s=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};$s.type="NONE";var Cl=$s;function Ds(r,e,t){return`firebase:${r}:${e}:${t}`}var Bs=class r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:s}=this.auth;this.fullUserKey=Ds(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ds("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new r(mt(Cl),e,n);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||mt(Cl),a=Ds(n,e.config.apiKey,e.name),l=null;for(let h of t)try{let p=await h._get(a);if(p){let m=Kr._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}let c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new r(s,e,n):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new r(s,e,n))}};function rf(r){let e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Df(e))return"Blackberry";if(Nf(e))return"Webos";if(Cf(e))return"Safari";if((e.includes("chrome/")||kf(e))&&!e.includes("edge/"))return"Chrome";if(Pf(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Sf(r=ge()){return/firefox\//i.test(r)}function Cf(r=ge()){let e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kf(r=ge()){return/crios\//i.test(r)}function Rf(r=ge()){return/iemobile/i.test(r)}function Pf(r=ge()){return/android/i.test(r)}function Df(r=ge()){return/blackberry/i.test(r)}function Nf(r=ge()){return/webos/i.test(r)}function Gl(r=ge()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function s_(r=ge()){var e;return Gl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o_(){return Nh()&&document.documentMode===10}function Of(r=ge()){return Gl(r)||Pf(r)||Nf(r)||Df(r)||/windows phone/i.test(r)||Rf(r)}function Mf(r,e=[]){let t;switch(r){case"Browser":t=rf(ge());break;case"Worker":t=`${rf(ge())}-${r}`;break;default:t=r}let n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vt}/${n}`}var kl=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=s=>new Promise((a,l)=>{try{let c=e(s);a(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}};async function a_(r,e={}){return Se(r,"GET","/v2/passwordPolicy",ye(r,e))}var l_=6,Rl=class{constructor(e){var t,n,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:l_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,l;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Pl=class{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qs(this),this.idTokenSubscription=new qs(this),this.beforeStateQueue=new kl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await If(this,{idToken:e}),n=await Kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(ir(this));let t=e?Ae(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await a_(this),t=new Rl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await i_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&mt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let c=e.addObserver(t,n,i);return()=>{a=!0,c()}}else{let c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Gv(`Error while retrieving App Check token: ${t.error}`),t?.token}};function dr(r){return Ae(r)}var qs=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vh(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u_(r){oo=r}function Lf(r){return oo.loadJS(r)}function c_(){return oo.recaptchaEnterpriseScript}function d_(){return oo.gapiScript}function Vf(r){return`__${r}${Math.floor(Math.random()*1e6)}`}var Dl=class{constructor(){this.enterprise=new Nl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Nl=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var h_="recaptcha-enterprise",di="NO_RECAPTCHA",js=class{constructor(e){this.type=h_,this.auth=dr(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Ef(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{let h=new Fs(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){let c=window.grecaptcha;Zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(di)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dl().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{n(this.auth).then(l=>{if(!t&&Zh(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=c_();c.length!==0&&(c+=l),Lf(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}};async function ai(r,e,t,n=!1,i=!1){let s=new js(r),a;if(i)a=di;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){let c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){let c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function hi(r,e,t,n,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let l=await ai(r,e,t,t==="getOobCode");return n(r,l)}else return n(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let c=await ai(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let l=await ai(r,e,t);return n(r,l).catch(async c=>{var h;if(((h=r._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await ai(r,e,t,!1,!0);return n(r,p)}return Promise.reject(c)})}else{let l=await ai(r,e,t,!1,!0);return n(r,l)}else return Promise.reject(i+" provider is not supported.")}async function f_(r){let e=dr(r),t=await Ef(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Fs(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new js(e).verify()}function Ff(r,e){let t=oi(r,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Ze(s,e??{}))return i;je(i,"already-initialized")}return t.initialize({options:e})}function p_(r,e){let t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(mt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function Uf(r,e,t){let n=dr(r);F(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=$f(e),{host:a,port:l}=m_(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){F(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),F(Ze(h,n.config.emulator)&&Ze(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,i||g_()}function $f(r){let e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function m_(r){let e=$f(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};let n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let s=i[1];return{host:s,port:nf(n.substr(s.length+1))}}else{let[s,a]=n.split(":");return{host:s,port:nf(a)}}}function nf(r){if(!r)return null;let e=Number(r);return isNaN(e)?null:e}function g_(){function r(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}var or=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}};async function y_(r,e){return Se(r,"POST","/v1/accounts:signUp",e)}async function v_(r,e){return cr(r,"POST","/v1/accounts:signInWithPassword",ye(r,e))}async function __(r,e){return cr(r,"POST","/v1/accounts:signInWithEmailLink",ye(r,e))}async function x_(r,e){return cr(r,"POST","/v1/accounts:signInWithEmailLink",ye(r,e))}var mi=class r extends or{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new r(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new r(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hi(e,t,"signInWithPassword",v_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return __(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hi(e,n,"signUpPassword",y_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return x_(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Wr(r,e){return cr(r,"POST","/v1/accounts:signInWithIdp",ye(r,e))}var w_="http://localhost",ar=class r extends or{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=ks(t,["providerId","signInMethod"]);if(!n||!i)return null;let a=new r(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Wr(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Wr(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Wr(e,t)}buildRequest(){let e={requestUri:w_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}};async function sf(r,e){return Se(r,"POST","/v1/accounts:sendVerificationCode",ye(r,e))}async function E_(r,e){return cr(r,"POST","/v1/accounts:signInWithPhoneNumber",ye(r,e))}async function I_(r,e){let t=await cr(r,"POST","/v1/accounts:signInWithPhoneNumber",ye(r,e));if(t.temporaryProof)throw li(r,"account-exists-with-different-credential",t);return t}var b_={USER_NOT_FOUND:"user-not-found"};async function T_(r,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cr(r,"POST","/v1/accounts:signInWithPhoneNumber",ye(r,t),b_)}var gi=class r extends or{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new r({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new r({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return E_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return I_(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return T_(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}};function A_(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S_(r){let e=Hr(Gr(r)).link,t=e?Hr(Gr(e)).deep_link_id:null,n=Hr(Gr(r)).deep_link_id;return(n?Hr(Gr(n)).link:null)||n||t||e||r}var zs=class r{constructor(e){var t,n,i,s,a,l;let c=Hr(Gr(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,p=(n=c.oobCode)!==null&&n!==void 0?n:null,m=A_((i=c.mode)!==null&&i!==void 0?i:null);F(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){let t=S_(e);try{return new r(t)}catch{return null}}};var Qr=class r{constructor(){this.providerId=r.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=zs.parseLink(t);return F(n,"argument-error"),mi._fromEmailAndCode(e,n.code,n.tenantId)}};Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var yi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var lr=class extends yi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var vi=class r extends lr{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";var yt=class r extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ar._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return r.credential(t,n)}catch{return null}}};yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";var _i=class r extends lr{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";var xi=class r extends lr{constructor(){super("twitter.com")}static credential(e,t){return ar._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return r.credential(t,n)}catch{return null}}};xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";var wi=class r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){let s=await Kr._fromIdTokenResponse(e,n,i),a=of(n);return new r({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let i=of(n);return new r({user:e,providerId:i,_tokenResponse:n,operationType:t})}};function of(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}var Ol=class r extends Ne{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,r.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new r(e,t,n,i)}};function Bf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,s,e,n):s})}async function C_(r,e,t=!1){let n=await fi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wi._forOperation(r,"link",n)}async function k_(r,e,t=!1){let{auth:n}=r;if(Ve(n.app))return Promise.reject(ir(n));let i="reauthenticate";try{let s=await fi(r,Bf(n,i,e,r),t);F(s.idToken,n,"internal-error");let a=Hl(s.idToken);F(a,n,"internal-error");let{sub:l}=a;return F(r.uid===l,n,"user-mismatch"),wi._forOperation(r,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&je(n,"user-mismatch"),s}}async function R_(r,e,t=!1){if(Ve(r.app))return Promise.reject(ir(r));let n="signIn",i=await Bf(r,n,e),s=await wi._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function qf(r,e,t,n){return Ae(r).onIdTokenChanged(e,t,n)}function jf(r,e,t){return Ae(r).beforeAuthStateChanged(e,t)}function Wl(r,e,t,n){return Ae(r).onAuthStateChanged(e,t,n)}function Kl(r){return Ae(r).signOut()}function af(r,e){return Se(r,"POST","/v2/accounts/mfaEnrollment:start",ye(r,e))}function P_(r,e){return Se(r,"POST","/v2/accounts/mfaEnrollment:finalize",ye(r,e))}function D_(r,e){return Se(r,"POST","/v2/accounts/mfaEnrollment:start",ye(r,e))}function N_(r,e){return Se(r,"POST","/v2/accounts/mfaEnrollment:finalize",ye(r,e))}var Hs="__sak";var Gs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var O_=1e3,M_=10,Ws=class extends Gs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}let n=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);o_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M_):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ws.type="LOCAL";var zf=Ws;var Ks=class extends Gs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ks.type="SESSION";var Ql=Ks;function L_(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Qs=class r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let n=new r(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});let l=Array.from(a).map(async h=>h(t.origin,s)),c=await L_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Qs.receivers=[];function Xl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}var Ml=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{let h=Xl("",20);i.port1.start();let p=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(m){let x=m;if(x.data.eventId===h)switch(x.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(x.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function rt(){return window}function V_(r){rt().location.href=r}function Hf(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function F_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U_(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function $_(){return Hf()?self:null}var Gf="firebaseLocalStorageDb",B_=1,Xs="firebaseLocalStorage",Wf="fbase_key",ur=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function ao(r,e){return r.transaction([Xs],e?"readwrite":"readonly").objectStore(Xs)}function q_(){let r=indexedDB.deleteDatabase(Gf);return new ur(r).toPromise()}function Ll(){let r=indexedDB.open(Gf,B_);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{let n=r.result;try{n.createObjectStore(Xs,{keyPath:Wf})}catch(i){t(i)}}),r.addEventListener("success",async()=>{let n=r.result;n.objectStoreNames.contains(Xs)?e(n):(n.close(),await q_(),e(await Ll()))})})}async function lf(r,e,t){let n=ao(r,!0).put({[Wf]:e,value:t});return new ur(n).toPromise()}async function j_(r,e){let t=ao(r,!1).get(e),n=await new ur(t).toPromise();return n===void 0?null:n.value}function uf(r,e){let t=ao(r,!0).delete(e);return new ur(t).toPromise()}var z_=800,H_=3,Ys=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(n){if(t++>H_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance($_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await F_(),!this.activeServiceWorker)return;this.sender=new Ml(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Ll();return await lf(e,Hs,"1"),await uf(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(n=>j_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=ao(i,!1).getAll();return new ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Ys.type="LOCAL";var Kf=Ys;function cf(r,e){return Se(r,"POST","/v2/accounts/mfaSignIn:start",ye(r,e))}function G_(r,e){return Se(r,"POST","/v2/accounts/mfaSignIn:finalize",ye(r,e))}function W_(r,e){return Se(r,"POST","/v2/accounts/mfaSignIn:finalize",ye(r,e))}var zI=Vf("rcb"),HI=new sr(3e4,6e4);var Ns="recaptcha";async function K_(r,e,t){var n;if(!r._getRecaptchaConfig())try{await f_(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){F(s.type==="enroll",r,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await hi(r,a,"mfaSmsEnrollment",async(p,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===di){F(t?.type===Ns,p,"argument-error");let x=await Il(p,m,t);return af(p,x)}return af(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{F(s.type==="signin",r,"internal-error");let a=((n=i.multiFactorHint)===null||n===void 0?void 0:n.uid)||i.multiFactorUid;F(a,r,"missing-multi-factor-info");let l={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await hi(r,l,"mfaSmsSignIn",async(m,x)=>{if(x.phoneSignInInfo.captchaResponse===di){F(t?.type===Ns,m,"argument-error");let A=await Il(m,x,t);return cf(m,A)}return cf(m,x)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await hi(r,s,"sendVerificationCode",async(h,p)=>{if(p.captchaResponse===di){F(t?.type===Ns,h,"argument-error");let m=await Il(h,p,t);return sf(h,m)}return sf(h,p)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t?._reset()}}async function Il(r,e,t){F(t.type===Ns,r,"argument-error");let n=await t.verify();F(typeof n=="string",r,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:n,captchaResponse:a,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:s,clientType:a,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:n}),i}var Ei=class r{constructor(e){this.providerId=r.PROVIDER_ID,this.auth=dr(e)}verifyPhoneNumber(e,t){return K_(this.auth,e,Ae(t))}static credential(e,t){return gi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return r.credentialFromTaggedObject(t)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?gi._fromTokenResponse(t,n):null}};Ei.PROVIDER_ID="phone";Ei.PHONE_SIGN_IN_METHOD="phone";function Qf(r,e){return e?mt(e):(F(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}var Ii=class extends or{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Q_(r){return R_(r.auth,new Ii(r),r.bypassAuthState)}function X_(r){let{auth:e,user:t}=r;return F(t,e,"internal-error"),k_(t,new Ii(r),r.bypassAuthState)}async function Y_(r){let{auth:e,user:t}=r;return F(t,e,"internal-error"),C_(t,new Ii(r),r.bypassAuthState)}var Js=class{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}let c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q_;case"linkViaPopup":case"linkViaRedirect":return Y_;case"reauthViaPopup":case"reauthViaRedirect":return X_;default:je(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var J_=new sr(2e3,1e4);async function Yl(r,e,t){if(Ve(r.app))return Promise.reject(Ke(r,"operation-not-supported-in-this-environment"));let n=dr(r);Wv(r,e,yi);let i=Qf(n,t);return new Zs(n,"signInViaPopup",e,i).executeNotNull()}var Zs=class r extends Js{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");let e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J_.get())};e()}};Zs.currentPopupAction=null;var Z_="pendingRedirect",Os=new Map,Vl=class extends Js{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{let n=await ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function ex(r,e){let t=nx(e),n=rx(r);if(!await n._isAvailable())return!1;let i=await n._get(t)==="true";return await n._remove(t),i}function tx(r,e){Os.set(r._key(),e)}function rx(r){return mt(r._redirectPersistence)}function nx(r){return Ds(Z_,r.config.apiKey,r.name)}async function ix(r,e,t=!1){if(Ve(r.app))return Promise.reject(ir(r));let n=dr(r),i=Qf(n,e),a=await new Vl(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}var sx=10*60*1e3,Fl=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ox(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xf(e)){let i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(df(e))}saveEventToCache(e){this.cachedEventUids.add(df(e)),this.lastProcessedEventTime=Date.now()}};function df(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Xf({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function ox(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xf(r);default:return!1}}async function ax(r,e={}){return Se(r,"GET","/v1/projects",e)}var lx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ux=/^https?/;async function cx(r){if(r.config.emulator)return;let{authorizedDomains:e}=await ax(r);for(let t of e)try{if(dx(t))return}catch{}je(r,"unauthorized-domain")}function dx(r){let e=Tl(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){let a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!ux.test(t))return!1;if(lx.test(r))return n===r;let i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}var hx=new sr(3e4,6e4);function hf(){let r=rt().___jsl;if(r?.H){for(let e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function fx(r){return new Promise((e,t)=>{var n,i,s;function a(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),t(Ke(r,"network-request-failed"))},timeout:hx.get()})}if(!((i=(n=rt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)a();else{let l=Vf("iframefcb");return rt()[l]=()=>{gapi.load?a():t(Ke(r,"network-request-failed"))},Lf(`${d_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Ms=null,e})}var Ms=null;function px(r){return Ms=Ms||fx(r),Ms}var mx=new sr(5e3,15e3),gx="__/auth/iframe",yx="emulator/auth/iframe",vx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_x=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xx(r){let e=r.config;F(e.authDomain,r,"auth-domain-config-required");let t=e.emulator?zl(e,yx):`https://${r.config.authDomain}/${gx}`,n={apiKey:e.apiKey,appName:r.name,v:Vt},i=_x.get(r.config.apiHost);i&&(n.eid=i);let s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${zr(n).slice(1)}`}async function wx(r){let e=await px(r),t=rt().gapi;return F(t,r,"internal-error"),e.open({where:document.body,url:xx(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vx,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});let a=Ke(r,"network-request-failed"),l=rt().setTimeout(()=>{s(a)},mx.get());function c(){rt().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{s(a)})}))}var Ex={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ix=500,bx=600,Tx="_blank",Ax="http://localhost",eo=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Sx(r,e,t,n=Ix,i=bx){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",c=Object.assign(Object.assign({},Ex),{width:n.toString(),height:i.toString(),top:s,left:a}),h=ge().toLowerCase();t&&(l=kf(h)?Tx:t),Sf(h)&&(e=e||Ax,c.scrollbars="yes");let p=Object.entries(c).reduce((x,[A,P])=>`${x}${A}=${P},`,"");if(s_(h)&&l!=="_self")return Cx(e||"",l),new eo(null);let m=window.open(e||"",l,p);F(m,r,"popup-blocked");try{m.focus()}catch{}return new eo(m)}function Cx(r,e){let t=document.createElement("a");t.href=r,t.target=e;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}var kx="__/auth/handler",Rx="emulator/auth/handler",Px=encodeURIComponent("fac");async function ff(r,e,t,n,i,s){F(r.config.authDomain,r,"auth-domain-config-required"),F(r.config.apiKey,r,"invalid-api-key");let a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Vt,eventId:i};if(e instanceof yi){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Lh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,m]of Object.entries(s||{}))a[p]=m}if(e instanceof lr){let p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);let l=a;for(let p of Object.keys(l))l[p]===void 0&&delete l[p];let c=await r._getAppCheckToken(),h=c?`#${Px}=${encodeURIComponent(c)}`:"";return`${Dx(r)}?${zr(l).slice(1)}${h}`}function Dx({config:r}){return r.emulator?zl(r,Rx):`https://${r.authDomain}/${kx}`}var bl="webStorageSupport",Ul=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=ix,this._overrideRedirectResult=tx}async _openPopup(e,t,n,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await ff(e,t,n,Tl(),i);return Sx(e,a,Xl())}async _openRedirect(e,t,n,i){await this._originValidation(e);let s=await ff(e,t,n,Tl(),i);return V_(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await wx(e),n=new Fl(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bl,{type:bl},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[bl];a!==void 0&&t(!!a),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Of()||Cf()||Gl()}},Yf=Ul,to=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return tt("unexpected MultiFactorSessionType")}}},$l=class r extends to{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new r(e)}_finalizeEnroll(e,t,n){return P_(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return G_(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ro=class{constructor(){}static assertion(e){return $l._fromCredential(e)}};ro.FACTOR_ID="phone";var no=class{static assertionForEnrollment(e,t){return io._fromSecret(e,t)}static assertionForSignIn(e,t){return io._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let n=e;F(typeof((t=n.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await D_(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return so._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}};no.FACTOR_ID="totp";var io=class r extends to{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new r(t,void 0,e)}static _fromEnrollmentId(e,t){return new r(t,e)}async _finalizeEnroll(e,t,n){return F(typeof this.secret<"u",e,"argument-error"),N_(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let n={verificationCode:this.otp};return W_(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},so=class r{constructor(e,t,n,i,s,a,l){this.sessionInfo=a,this.auth=l,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new r(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Rs(e)||Rs(t))&&(i=!0),i&&(Rs(e)&&(e=((n=this.auth.currentUser)===null||n===void 0?void 0:n.email)||"unknownuser"),Rs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Rs(r){return typeof r>"u"||r?.length===0}var pf="@firebase/auth",mf="1.9.1";var Bl=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Nx(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ox(r){Lt(new qe("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let c={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(r)},h=new Pl(n,i,s,c);return p_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Lt(new qe("auth-internal",e=>{let t=dr(e.getProvider("auth").getImmediate());return(n=>new Bl(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(pf,mf,Nx(r)),We(pf,mf,"esm2017")}var Mx=5*60,Lx=sl("authIdTokenMaxAge")||Mx,gf=null,Vx=r=>async e=>{let t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Lx)return;let i=t?.token;gf!==i&&(gf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jl(r=Cs()){let e=oi(r,"auth");if(e.isInitialized())return e.getImmediate();let t=Ff(r,{popupRedirectResolver:Yf,persistence:[Kf,zf,Ql]}),n=sl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(n,location.origin);if(location.origin===s.origin){let a=Vx(s.toString());jf(t,a,()=>a(t.currentUser)),qf(t,l=>a(l))}}let i=nl("auth");return i&&Uf(t,`http://${i}`),t}function Fx(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}u_({loadJS(r){return new Promise((e,t)=>{let n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{let s=Ke("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Fx().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ox("Browser");var Jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zf={};var vt,Zl;(function(){var r;function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(_,E,b){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return g.prototype[E].apply(_,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var _=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)_[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)_[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],E=w.g[2];var b=w.g[3],y=g+(b^v&(E^b))+_[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+_[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+_[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+_[3]+3250441966&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+_[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+_[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+_[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+_[7]+4249261313&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+_[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+_[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+_[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+_[11]+2304563134&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(b^v&(E^b))+_[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(E^g&(v^E))+_[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(v^b&(g^v))+_[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=v+(g^E&(b^g))+_[15]+1236535329&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(v^E))+_[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+_[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+_[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+_[0]+3921069994&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+_[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+_[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+_[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+_[4]+3889429448&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+_[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+_[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+_[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+_[8]+1163531501&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(v^E))+_[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^E&(g^v))+_[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(b^g))+_[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(E^b))+_[12]+2368359562&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(v^E^b)+_[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+_[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+_[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+_[14]+4259657740&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+_[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+_[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+_[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+_[10]+3200236656&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+_[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+_[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+_[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+_[6]+76029189&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^b)+_[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^E)+_[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^v)+_[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=v+(E^b^g)+_[2]+3299628645&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(E^(v|~b))+_[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+_[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+_[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+_[5]+4237533241&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+_[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+_[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+_[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+_[1]+2240044497&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+_[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+_[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+_[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+_[13]+1309151649&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~b))+_[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~E))+_[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~v))+_[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=v+(b^(E|~g))+_[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}n.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,_=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=v;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(_[E++]=w.charCodeAt(b++),E==this.blockSize){i(this,_),E=0;break}}else for(;b<g;)if(_[E++]=w[b++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var _=0;32>_;_+=8)w[v++]=this.g[g]>>>_&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function a(w,g){this.h=g;for(var v=[],_=!0,E=w.length-1;0<=E;E--){var b=w[E]|0;_&&b==g||(v[E]=b,_=!1)}this.g=v}var l={};function c(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return O(h(-w));for(var g=[],v=1,_=0;w>=v;_++)g[_]=w/v|0,v*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return O(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),_=m,E=0;E<w.length;E+=8){var b=Math.min(8,w.length-E),y=parseInt(w.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),_=_.j(b).add(h(y))):(_=_.j(v),_=_.add(h(y)))}return _}var m=c(0),x=c(1),A=c(16777216);r=a.prototype,r.m=function(){if(M(this))return-O(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var _=this.i(v);w+=(0<=_?_:4294967296+_)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(M(this))return"-"+O(this).toString(w);for(var g=h(Math.pow(w,6)),v=this,_="";;){var E=oe(v,g).g;v=Q(v,E.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=E,P(v))return b+_;for(;6>b.length;)b="0"+b;_=b+_}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function M(w){return w.h==-1}r.l=function(w){return w=Q(this,w),M(w)?-1:P(w)?0:1};function O(w){for(var g=w.g.length,v=[],_=0;_<g;_++)v[_]=~w.g[_];return new a(v,~w.h).add(x)}r.abs=function(){return M(this)?O(this):this},r.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0,E=0;E<=g;E++){var b=_+(this.i(E)&65535)+(w.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);_=y>>>16,b&=65535,y&=65535,v[E]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function Q(w,g){return w.add(O(g))}r.j=function(w){if(P(this)||P(w))return m;if(M(this))return M(w)?O(this).j(O(w)):O(O(this).j(w));if(M(w))return O(this.j(O(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],_=0;_<2*g;_++)v[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<w.g.length;E++){var b=this.i(_)>>>16,y=this.i(_)&65535,ct=w.i(E)>>>16,Un=w.i(E)&65535;v[2*_+2*E]+=y*Un,Y(v,2*_+2*E),v[2*_+2*E+1]+=b*Un,Y(v,2*_+2*E+1),v[2*_+2*E+1]+=y*ct,Y(v,2*_+2*E+1),v[2*_+2*E+2]+=b*ct,Y(v,2*_+2*E+2)}for(_=0;_<g;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=g;_<2*g;_++)v[_]=0;return new a(v,0)};function Y(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function q(w,g){this.g=w,this.h=g}function oe(w,g){if(P(g))throw Error("division by zero");if(P(w))return new q(m,m);if(M(w))return g=oe(O(w),g),new q(O(g.g),O(g.h));if(M(g))return g=oe(w,O(g)),new q(O(g.g),g.h);if(30<w.g.length){if(M(w)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var v=x,_=g;0>=_.l(w);)v=Re(v),_=Re(_);var E=ne(v,1),b=ne(_,1);for(_=ne(_,2),v=ne(v,2);!P(_);){var y=b.add(_);0>=y.l(w)&&(E=E.add(v),b=y),_=ne(_,1),v=ne(v,1)}return g=Q(w,E.j(g)),new q(E,g)}for(E=m;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),_=Math.ceil(Math.log(v)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),b=h(v),y=b.j(g);M(y)||0<y.l(w);)v-=_,b=h(v),y=b.j(g);P(b)&&(b=x),E=E.add(b),w=Q(w,y)}return new q(E,w)}r.A=function(w){return oe(this,w).h},r.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)&w.i(_);return new a(v,this.h&w.h)},r.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)|w.i(_);return new a(v,this.h|w.h)},r.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)^w.i(_);return new a(v,this.h^w.h)};function Re(w){for(var g=w.g.length+1,v=[],_=0;_<g;_++)v[_]=w.i(_)<<1|w.i(_-1)>>>31;return new a(v,w.h)}function ne(w,g){var v=g>>5;g%=32;for(var _=w.g.length-v,E=[],b=0;b<_;b++)E[b]=0<g?w.i(b+v)>>>g|w.i(b+v+1)<<32-g:w.i(b+v);return new a(E,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zl=Zf.Md5=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,vt=Zf.Integer=a}).apply(typeof Jf<"u"?Jf:typeof self<"u"?self:typeof window<"u"?window:{});var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_t={};var eu,Ux,Xr,tu,bi,uo,ru,nu,iu;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof lo=="object"&&lo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,u){if(u)e:{var d=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in d))break e;d=d[I]}o=o[o.length-1],f=d[o],u=u(f),u!=f&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,f=!1,I={next:function(){if(!f&&d<o.length){var T=d++;return{value:u(T,o[T]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(u,I)}}return function(){return o.apply(u,arguments)}}function x(o,u,d){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,x.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,I,T){for(var N=Array(arguments.length-2),se=2;se<arguments.length;se++)N[se-2]=arguments[se];return u.prototype[I].apply(f,N)}}function M(o){let u=o.length;if(0<u){let d=Array(u);for(let f=0;f<u;f++)d[f]=o[f];return d}return[]}function O(o,u){for(let d=1;d<arguments.length;d++){let f=arguments[d];if(c(f)){let I=o.length||0,T=f.length||0;o.length=I+T;for(let N=0;N<T;N++)o[I+N]=f[N]}else o.push(f)}}class Q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Y(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function oe(o){return oe[" "](o),o}oe[" "]=function(){};var Re=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ne(o,u,d){for(let f in o)u.call(d,o[f],f,o)}function w(o,u){for(let d in o)u.call(void 0,o[d],d,o)}function g(o){let u={};for(let d in o)u[d]=o[d];return u}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,u){let d,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(d in f)o[d]=f[d];for(let T=0;T<v.length;T++)d=v[T],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function E(o){var u=1;o=o.split(":");let d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=ka;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,d){let f=Un.get();f.set(u,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Un=new Q(()=>new Xg,o=>o.reset());class Xg{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $n,Bn=!1,ka=new ct,Ed=()=>{let o=l.Promise.resolve(void 0);$n=()=>{o.then(Yg)}};var Yg=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var u=Un;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Bn=!1};function Rt(){this.s=this.s,this.C=this.C}Rt.prototype.s=!1,Rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Jg=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function qn(o,u){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Re){e:{try{oe(u.nodeName);var I=!0;break e}catch{}I=!1}I||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zg[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qn.aa.h.call(this)}}P(qn,Ee);var Zg={2:"touch",3:"pen",4:"mouse"};qn.prototype.h=function(){qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),ey=0;function ty(o,u,d,f,I){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!f,this.ha=I,this.key=++ey,this.da=this.fa=!1}function ss(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function os(o){this.src=o,this.g={},this.h=0}os.prototype.add=function(o,u,d,f,I){var T=o.toString();o=this.g[T],o||(o=this.g[T]=[],this.h++);var N=Pa(o,u,f,I);return-1<N?(u=o[N],d||(u.fa=!1)):(u=new ty(u,this.src,T,!!f,I),u.fa=d,o.push(u)),u};function Ra(o,u){var d=u.type;if(d in o.g){var f=o.g[d],I=Array.prototype.indexOf.call(f,u,void 0),T;(T=0<=I)&&Array.prototype.splice.call(f,I,1),T&&(ss(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Pa(o,u,d,f){for(var I=0;I<o.length;++I){var T=o[I];if(!T.da&&T.listener==u&&T.capture==!!d&&T.ha==f)return I}return-1}var Da="closure_lm_"+(1e6*Math.random()|0),Na={};function Id(o,u,d,f,I){if(f&&f.once)return Td(o,u,d,f,I);if(Array.isArray(u)){for(var T=0;T<u.length;T++)Id(o,u[T],d,f,I);return null}return d=Va(d),o&&o[jn]?o.K(u,d,h(f)?!!f.capture:!!f,I):bd(o,u,d,!1,f,I)}function bd(o,u,d,f,I,T){if(!u)throw Error("Invalid event type");var N=h(I)?!!I.capture:!!I,se=Ma(o);if(se||(o[Da]=se=new os(o)),d=se.add(u,d,f,N,T),d.proxy)return d;if(f=ry(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Jg||(I=N),I===void 0&&(I=!1),o.addEventListener(u.toString(),f,I);else if(o.attachEvent)o.attachEvent(Sd(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ry(){function o(d){return u.call(o.src,o.listener,d)}let u=ny;return o}function Td(o,u,d,f,I){if(Array.isArray(u)){for(var T=0;T<u.length;T++)Td(o,u[T],d,f,I);return null}return d=Va(d),o&&o[jn]?o.L(u,d,h(f)?!!f.capture:!!f,I):bd(o,u,d,!0,f,I)}function Ad(o,u,d,f,I){if(Array.isArray(u))for(var T=0;T<u.length;T++)Ad(o,u[T],d,f,I);else f=h(f)?!!f.capture:!!f,d=Va(d),o&&o[jn]?(o=o.i,u=String(u).toString(),u in o.g&&(T=o.g[u],d=Pa(T,d,f,I),-1<d&&(ss(T[d]),Array.prototype.splice.call(T,d,1),T.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ma(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Pa(u,d,f,I)),(d=-1<o?u[o]:null)&&Oa(d))}function Oa(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[jn])Ra(u.i,o);else{var d=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(d,f,o.capture):u.detachEvent?u.detachEvent(Sd(d),f):u.addListener&&u.removeListener&&u.removeListener(f),(d=Ma(u))?(Ra(d,o),d.h==0&&(d.src=null,u[Da]=null)):ss(o)}}}function Sd(o){return o in Na?Na[o]:Na[o]="on"+o}function ny(o,u){if(o.da)o=!0;else{u=new qn(u,this);var d=o.listener,f=o.ha||o.src;o.fa&&Oa(o),o=d.call(f,u)}return o}function Ma(o){return o=o[Da],o instanceof os?o:null}var La="__closure_events_fn_"+(1e9*Math.random()>>>0);function Va(o){return typeof o=="function"?o:(o[La]||(o[La]=function(u){return o.handleEvent(u)}),o[La])}function Ie(){Rt.call(this),this.i=new os(this),this.M=this,this.F=null}P(Ie,Rt),Ie.prototype[jn]=!0,Ie.prototype.removeEventListener=function(o,u,d,f){Ad(this,o,u,d,f)};function Pe(o,u){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new Ee(u,o);else if(u instanceof Ee)u.target=u.target||o;else{var I=u;u=new Ee(f,o),_(u,I)}if(I=!0,d)for(var T=d.length-1;0<=T;T--){var N=u.g=d[T];I=as(N,f,!0,u)&&I}if(N=u.g=o,I=as(N,f,!0,u)&&I,I=as(N,f,!1,u)&&I,d)for(T=0;T<d.length;T++)N=u.g=d[T],I=as(N,f,!1,u)&&I}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],f=0;f<d.length;f++)ss(d[f]);delete o.g[u],o.h--}}this.F=null},Ie.prototype.K=function(o,u,d,f){return this.i.add(String(o),u,!1,d,f)},Ie.prototype.L=function(o,u,d,f){return this.i.add(String(o),u,!0,d,f)};function as(o,u,d,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,T=0;T<u.length;++T){var N=u[T];if(N&&!N.da&&N.capture==d){var se=N.listener,xe=N.ha||N.src;N.fa&&Ra(o.i,N),I=se.call(xe,f)!==!1&&I}}return I&&!f.defaultPrevented}function Cd(o,u,d){if(typeof o=="function")d&&(o=x(o,d));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function kd(o){o.g=Cd(()=>{o.g=null,o.i&&(o.i=!1,kd(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class iy extends Rt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:kd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(o){Rt.call(this),this.h=o,this.g={}}P(zn,Rt);var Rd=[];function Pd(o){ne(o.g,function(u,d){this.g.hasOwnProperty(d)&&Oa(u)},o),o.g={}}zn.prototype.N=function(){zn.aa.N.call(this),Pd(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=l.JSON.stringify,sy=l.JSON.parse,oy=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ua(){}Ua.prototype.h=null;function Dd(o){return o.h||(o.h=o.i())}function Nd(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){Ee.call(this,"d")}P($a,Ee);function Ba(){Ee.call(this,"c")}P(Ba,Ee);var Zt={},Od=null;function ls(){return Od=Od||new Ie}Zt.La="serverreachability";function Md(o){Ee.call(this,Zt.La,o)}P(Md,Ee);function Gn(o){let u=ls();Pe(u,new Md(u))}Zt.STAT_EVENT="statevent";function Ld(o,u){Ee.call(this,Zt.STAT_EVENT,o),this.stat=u}P(Ld,Ee);function De(o){let u=ls();Pe(u,new Ld(u,o))}Zt.Ma="timingevent";function Vd(o,u){Ee.call(this,Zt.Ma,o),this.size=u}P(Vd,Ee);function Wn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Kn(){this.g=!0}Kn.prototype.xa=function(){this.g=!1};function ay(o,u,d,f,I,T){o.info(function(){if(o.g)if(T)for(var N="",se=T.split("&"),xe=0;xe<se.length;xe++){var te=se[xe].split("=");if(1<te.length){var be=te[0];te=te[1];var Te=be.split("_");N=2<=Te.length&&Te[1]=="type"?N+(be+"="+te+"&"):N+(be+"=redacted&")}}else N=null;else N=T;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+d+`
`+N})}function ly(o,u,d,f,I,T,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+d+`
`+T+" "+N})}function $r(o,u,d,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+cy(o,d)+(f?" "+f:"")})}function uy(o,u){o.info(function(){return"TIMEOUT: "+u})}Kn.prototype.info=function(){};function cy(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var T=I[0];if(T!="noop"&&T!="stop"&&T!="close")for(var N=1;N<I.length;N++)I[N]=""}}}}return Fa(d)}catch{return u}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qa;function cs(){}P(cs,Ua),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},qa=new cs;function Pt(o,u,d,f){this.j=o,this.i=u,this.l=d,this.R=f||1,this.U=new zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ud}function Ud(){this.i=null,this.g="",this.h=!1}var $d={},ja={};function za(o,u,d){o.L=1,o.v=ps(dt(u)),o.m=d,o.P=!0,Bd(o,null)}function Bd(o,u){o.F=Date.now(),ds(o),o.A=dt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),th(d.i,"t",f),o.C=0,d=o.j.J,o.h=new Ud,o.g=_h(o.j,d?u:null,!o.m),0<o.O&&(o.M=new iy(x(o.Y,o,o.g),o.O)),u=o.U,d=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Rd[0]=I.toString()),I=Rd);for(var T=0;T<I.length;T++){var N=Id(d,I[T],f||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Gn(),ay(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;let u=this.M;u&&ht(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{let Te=ht(this.g);var u=this.g.Ba();let jr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||Te!=4||u==7||(u==8||0>=jr?Gn(3):Gn(2)),Ha(this);var d=this.g.Z();this.X=d;t:if(qd(this)){var f=lh(this.g);o="";var I=f.length,T=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),Qn(this);var N="";break t}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(T&&u==I-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,ly(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,xe=this.g;if((se=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(se)){var te=se;break t}}te=null}if(d=te)$r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ga(this,d);else{this.o=!1,this.s=3,De(12),er(this),Qn(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<N.length;)if(Ge=dy(this,N),Ge==ja){Te==4&&(this.s=4,De(14),d=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==$d){this.s=4,De(15),$r(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else $r(this.i,this.l,Ge,null),Ga(this,Ge);if(qd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||N.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)$r(this.i,this.l,N,"[Invalid Chunked Response]"),er(this),Qn(this);else if(0<N.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Ja(be),be.M=!0,De(11))}}else $r(this.i,this.l,N,null),Ga(this,N);Te==4&&er(this),this.o&&!this.J&&(Te==4?mh(this.j,this):(this.o=!1,ds(this)))}else Cy(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),er(this),Qn(this)}}}catch{}finally{}};function qd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function dy(o,u){var d=o.C,f=u.indexOf(`
`,d);return f==-1?ja:(d=Number(u.substring(d,f)),isNaN(d)?$d:(f+=1,f+d>u.length?ja:(u=u.slice(f,f+d),o.C=f+d,u)))}Pt.prototype.cancel=function(){this.J=!0,er(this)};function ds(o){o.S=Date.now()+o.I,jd(o,o.I)}function jd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wn(x(o.ba,o),u)}function Ha(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(uy(this.i,this.A),this.L!=2&&(Gn(),De(17)),er(this),this.s=2,Qn(this)):jd(this,this.S-o)};function Qn(o){o.j.G==0||o.J||mh(o.j,o)}function er(o){Ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Pd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ga(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Wa(d.h,o))){if(!o.K&&Wa(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)_s(d),ys(d);else break e;Ya(d),De(18)}}else d.za=I[1],0<d.za-d.T&&37500>I[2]&&d.F&&d.v==0&&!d.C&&(d.C=Wn(x(d.Za,d),6e3));if(1>=Gd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else rr(d,11)}else if((o.K||d.g==o)&&_s(d),!Y(u))for(I=d.Da.g.parse(u),u=0;u<I.length;u++){let te=I[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];let be=te[3];be!=null&&(d.la=be,d.j.info("VER="+d.la));let Te=te[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));let jr=te[5];jr!=null&&typeof jr=="number"&&0<jr&&(f=1.5*jr,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;let Ge=o.g;if(Ge){let ws=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var T=f.h;T.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ka(T,T.h),T.h=null))}if(f.D){let Za=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Za&&(f.ya=Za,ae(f.I,f.D,Za))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var N=o;if(f.qa=vh(f,f.J?f.ia:null,f.W),N.K){Wd(f.h,N);var se=N,xe=f.L;xe&&(se.I=xe),se.B&&(Ha(se),ds(se)),f.g=N}else fh(f);0<d.i.length&&vs(d)}else te[0]!="stop"&&te[0]!="close"||rr(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?rr(d,7):Xa(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}Gn(4)}catch{}}var hy=class{constructor(o,u){this.g=o,this.map=u}};function zd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gd(o){return o.h?1:o.g?o.g.size:0}function Wa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ka(o,u){o.g?o.g.add(u):o.h=u}function Wd(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}zd.prototype.cancel=function(){if(this.i=Kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Kd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let d of o.g.values())u=u.concat(d.D);return u}return M(o.i)}function fy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,f=0;f<d;f++)u.push(o[f]);return u}u=[],d=0;for(f in o)u[d++]=o[f];return u}function py(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(let f in o)u[d++]=f;return u}}}function Qd(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=py(o),f=fy(o),I=f.length,T=0;T<I;T++)u.call(void 0,f[T],d&&d[T],o)}var Xd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function my(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),I=null;if(0<=f){var T=o[d].substring(0,f);I=o[d].substring(f+1)}else T=o[d];u(T,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function tr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tr){this.h=o.h,hs(this,o.j),this.o=o.o,this.g=o.g,fs(this,o.s),this.l=o.l;var u=o.i,d=new Jn;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Yd(this,d),this.m=o.m}else o&&(u=String(o).match(Xd))?(this.h=!1,hs(this,u[1]||"",!0),this.o=Xn(u[2]||""),this.g=Xn(u[3]||"",!0),fs(this,u[4]),this.l=Xn(u[5]||"",!0),Yd(this,u[6]||"",!0),this.m=Xn(u[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}tr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Yn(u,Jd,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Yn(u,Jd,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yn(d,d.charAt(0)=="/"?vy:yy,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yn(d,xy)),o.join("")};function dt(o){return new tr(o)}function hs(o,u,d){o.j=d?Xn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function fs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Yd(o,u,d){u instanceof Jn?(o.i=u,wy(o.i,o.h)):(d||(u=Yn(u,_y)),o.i=new Jn(u,o.h))}function ae(o,u,d){o.i.set(u,d)}function ps(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Xn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,gy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Jd=/[#\/\?@]/g,yy=/[#\?:]/g,vy=/[#\?]/g,_y=/[#\?@]/g,xy=/#/g;function Jn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Dt(o){o.g||(o.g=new Map,o.h=0,o.i&&my(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Jn.prototype,r.add=function(o,u){Dt(this),this.i=null,o=Br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Zd(o,u){Dt(o),u=Br(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function eh(o,u){return Dt(o),u=Br(o,u),o.g.has(u)}r.forEach=function(o,u){Dt(this),this.g.forEach(function(d,f){d.forEach(function(I){o.call(u,I,f,this)},this)},this)},r.na=function(){Dt(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let f=0;f<u.length;f++){let I=o[f];for(let T=0;T<I.length;T++)d.push(u[f])}return d},r.V=function(o){Dt(this);let u=[];if(typeof o=="string")eh(this,o)&&(u=u.concat(this.g.get(Br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},r.set=function(o,u){return Dt(this),this.i=null,o=Br(this,o),eh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function th(o,u,d){Zd(o,u),0<d.length&&(o.i=null,o.g.set(Br(o,u),M(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var f=u[d];let T=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var I=T;N[f]!==""&&(I+="="+encodeURIComponent(String(N[f]))),o.push(I)}}return this.i=o.join("&")};function Br(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function wy(o,u){u&&!o.j&&(Dt(o),o.i=null,o.g.forEach(function(d,f){var I=f.toLowerCase();f!=I&&(Zd(this,f),th(this,I,d))},o)),o.j=u}function Ey(o,u){let d=new Kn;if(l.Image){let f=new Image;f.onload=A(Nt,d,"TestLoadImage: loaded",!0,u,f),f.onerror=A(Nt,d,"TestLoadImage: error",!1,u,f),f.onabort=A(Nt,d,"TestLoadImage: abort",!1,u,f),f.ontimeout=A(Nt,d,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Iy(o,u){let d=new Kn,f=new AbortController,I=setTimeout(()=>{f.abort(),Nt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(T=>{clearTimeout(I),T.ok?Nt(d,"TestPingServer: ok",!0,u):Nt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Nt(d,"TestPingServer: error",!1,u)})}function Nt(o,u,d,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(d)}catch{}}function by(){this.g=new oy}function Ty(o,u,d){let f=d||"";try{Qd(o,function(I,T){let N=I;h(I)&&(N=Fa(I)),u.push(f+T+"="+encodeURIComponent(N))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Zn(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Zn,Ua),Zn.prototype.g=function(){return new ms(this.l,this.j)},Zn.prototype.i=function(o){return function(){return o}}({});function ms(o,u){Ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ms,Ie),r=ms.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ti(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ei(this):ti(this),this.readyState==3&&rh(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,ei(this))},r.Qa=function(o){this.g&&(this.response=o,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ti(o)}r.setRequestHeader=function(o,u){this.u.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ti(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nh(o){let u="";return ne(o,function(d,f){u+=f,u+=":",u+=d,u+=`\r
`}),u}function Qa(o,u,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=nh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ae(o,u,d))}function ue(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ue,Ie);var Ay=/^https?$/i,Sy=["POST","PUT"];r=ue.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,u,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qa.g(),this.v=this.o?Dd(this.o):Dd(qa),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(T){ih(this,T);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)d.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let T of f.keys())d.set(T,f.get(T));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(T=>T.toLowerCase()=="content-type"),I=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sy,u,void 0))||f||I||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[T,N]of d)this.g.setRequestHeader(T,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ah(this),this.u=!0,this.g.send(o),this.u=!1}catch(T){ih(this,T)}};function ih(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,sh(o),gs(o)}function sh(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),gs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gs(this,!0)),ue.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oh(this):this.bb())},r.bb=function(){oh(this)};function oh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ht(o)!=4||o.Z()!=2)){if(o.u&&ht(o)==4)Cd(o.Ea,0,o);else if(Pe(o,"readystatechange"),ht(o)==4){o.h=!1;try{let N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var f;if(f=N===0){var I=String(o.D).match(Xd)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!Ay.test(I?I.toLowerCase():"")}d=f}if(d)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var T=2<ht(o)?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.Z()+"]",sh(o)}}finally{gs(o)}}}}function gs(o,u){if(o.g){ah(o);let d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Pe(o,"ready");try{d.onreadystatechange=f}catch{}}}function ah(o){o.I&&(l.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ht(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),sy(u)}};function lh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cy(o){let u={};o=(o.g&&2<=ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(Y(o[f]))continue;var d=E(o[f]);let I=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let T=u[I]||[];u[I]=T,T.push(d)}w(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function uh(o){this.Aa=0,this.i=[],this.j=new Kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,o),this.cb=ri("retryDelaySeedMs",1e4,o),this.Wa=ri("forwardChannelMaxRetries",2,o),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zd(o&&o.concurrentRequestLimit),this.Da=new by,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=uh.prototype,r.la=8,r.G=1,r.connect=function(o,u,d,f){De(0),this.W=o,this.H=u||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=vh(this,null,this.W),vs(this)};function Xa(o){if(ch(o),o.G==3){var u=o.U++,d=dt(o.I);if(ae(d,"SID",o.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),ni(o,d),u=new Pt(o,o.j,u),u.L=2,u.v=ps(dt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=_h(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ds(u)}yh(o)}function ys(o){o.g&&(Ja(o),o.g.cancel(),o.g=null)}function ch(o){ys(o),o.u&&(l.clearTimeout(o.u),o.u=null),_s(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function vs(o){if(!Hd(o.h)&&!o.s){o.s=!0;var u=o.Ga;$n||Ed(),Bn||($n(),Bn=!0),ka.add(u,o),o.B=0}}function ky(o,u){return Gd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wn(x(o.Ga,o,u),gh(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let I=new Pt(this,this.j,o),T=this.o;if(this.S&&(T?(T=g(T),_(T,this.S)):T=this.S),this.m!==null||this.O||(I.H=T,T=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hh(this,I,u),d=dt(this.I),ae(d,"RID",o),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),ni(this,d),T&&(this.O?u="headers="+encodeURIComponent(String(nh(T)))+"&"+u:this.m&&Qa(d,this.m,T)),Ka(this.h,I),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),I.T=!0,za(I,d,null)):za(I,d,u),this.G=2}}else this.G==3&&(o?dh(this,o):this.i.length==0||Hd(this.h)||dh(this))};function dh(o,u){var d;u?d=u.l:d=o.U++;let f=dt(o.I);ae(f,"SID",o.K),ae(f,"RID",d),ae(f,"AID",o.T),ni(o,f),o.m&&o.o&&Qa(f,o.m,o.o),d=new Pt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ka(o.h,d),za(d,f,u)}function ni(o,u){o.H&&ne(o.H,function(d,f){ae(u,f,d)}),o.l&&Qd({},function(d,f){ae(u,f,d)})}function hh(o,u,d){d=Math.min(o.i.length,d);var f=o.l?x(o.l.Na,o.l,o):null;e:{var I=o.i;let T=-1;for(;;){let N=["count="+d];T==-1?0<d?(T=I[0].g,N.push("ofs="+T)):T=0:N.push("ofs="+T);let se=!0;for(let xe=0;xe<d;xe++){let te=I[xe].g,be=I[xe].map;if(te-=T,0>te)T=Math.max(0,I[xe].g-100),se=!1;else try{Ty(be,N,"req"+te+"_")}catch{f&&f(be)}}if(se){f=N.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,f}function fh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;$n||Ed(),Bn||($n(),Bn=!0),ka.add(u,o),o.v=0}}function Ya(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wn(x(o.Fa,o),gh(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wn(x(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),ys(this),ph(this))};function Ja(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ph(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=dt(o.qa);ae(u,"RID","rpc"),ae(u,"SID",o.K),ae(u,"AID",o.T),ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(u,"TO",o.ja),ae(u,"TYPE","xmlhttp"),ni(o,u),o.m&&o.o&&Qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ps(dt(u)),d.m=null,d.P=!0,Bd(d,o)}r.Za=function(){this.C!=null&&(this.C=null,ys(this),Ya(this),De(19))};function _s(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function mh(o,u){var d=null;if(o.g==u){_s(o),Ja(o),o.g=null;var f=2}else if(Wa(o.h,u))d=u.D,Wd(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var I=o.B;f=ls(),Pe(f,new Vd(f,d)),vs(o)}else fh(o);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&ky(o,u)||f==2&&Ya(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),I){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function gh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var d=x(o.fb,o),f=o.Xa;let I=!f;f=new tr(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||hs(f,"https"),ps(f),I?Ey(f.toString(),d):Iy(f.toString(),d)}else De(2);o.G=0,o.l&&o.l.sa(u),yh(o),ch(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function yh(o){if(o.G=0,o.ka=[],o.l){let u=Kd(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function vh(o,u,d){var f=d instanceof tr?dt(d):new tr(d);if(f.g!="")u&&(f.g=u+"."+f.g),fs(f,f.s);else{var I=l.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var T=new tr(null);f&&hs(T,f),u&&(T.g=u),I&&fs(T,I),d&&(T.l=d),f=T}return d=o.D,u=o.ya,d&&u&&ae(f,d,u),ae(f,"VER",o.la),ni(o,f),f}function _h(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ue(new Zn({eb:d})):new ue(o.pa),u.Ha(o.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xh(){}r=xh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xs(){}xs.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){Ie.call(this),this.g=new uh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new qr(this)}P(Le,Ie),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Xa(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Fa(o),o=d);u.i.push(new hy(u.Ya++,o)),u.G==3&&vs(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,Xa(this.g),delete this.g,Le.aa.N.call(this)};function wh(o){$a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(wh,$a);function Eh(){Ba.call(this),this.status=1}P(Eh,Ba);function qr(o){this.g=o}P(qr,xh),qr.prototype.ua=function(){Pe(this.g,"a")},qr.prototype.ta=function(o){Pe(this.g,new wh(o))},qr.prototype.sa=function(o){Pe(this.g,new Eh)},qr.prototype.ra=function(){Pe(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,iu=_t.createWebChannelTransport=function(){return new xs},nu=_t.getStatEventTarget=function(){return ls()},ru=_t.Event=Zt,uo=_t.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,bi=_t.ErrorCode=us,Fd.COMPLETE="complete",tu=_t.EventType=Fd,Nd.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Xr=_t.WebChannel=Nd,Ux=_t.FetchXmlHttpFactory=Zn,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,eu=_t.XhrIo=ue}).apply(typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{});var ep="@firebase/firestore",tp="4.7.9";var ve=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");var En="11.4.0";var gr=new Ot("@firebase/firestore");function Yr(){return gr.logLevel}function L(r,...e){if(gr.logLevel<=X.DEBUG){let t=e.map(qc);gr.debug(`Firestore (${En}): ${r}`,...t)}}function xt(r,...e){if(gr.logLevel<=X.ERROR){let t=e.map(qc);gr.error(`Firestore (${En}): ${r}`,...t)}}function sn(r,...e){if(gr.logLevel<=X.WARN){let t=e.map(qc);gr.warn(`Firestore (${En}): ${r}`,...t)}}function qc(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}function G(r="Unexpected state"){let e=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: `+r;throw xt(e),new Error(e)}function re(r,e){r||G()}function W(r,e){return r}var C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},$=class extends Ne{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Xe=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var yo=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},uu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}},cu=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},du=class{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0);let n=this.i,i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve(),s=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xe,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){let c=this.t.getImmediate({optional:!0});c?l(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xe)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(re(typeof n.accessToken=="string"),new yo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new ve(e)}},hu=class{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},fu=class{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new hu(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}},vo=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},pu=class{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ve(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){re(this.o===void 0);let n=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};let i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new vo(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new vo(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function $x(r){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}var _o=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),n="";for(;n.length<20;){let i=$x(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}};function Z(r,e){return r<e?-1:r>e?1:0}function on(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}var rp=-62135596800,np=1e6,we=class r{static now(){return r.fromMillis(Date.now())}static fromDate(e){return r.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*np);return new r(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rp)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/np}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds-rp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var K=class r{static fromTimestamp(e){return new r(e)}static min(){return new r(new we(0,0))}static max(){return new r(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var ip="__name__",xo=class r{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(),n===void 0?n=e.length-t:n>e.length-t&&G(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return r.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof r?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let s=r.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=r.isNumericId(e),i=r.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?r.extractNumericId(e).compare(r.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}},ce=class r extends xo{construct(e,t,n){return new r(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new $(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new r(t)}static emptyPath(){return new r([])}},Bx=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Fe=class r extends xo{construct(e,t,n){return new r(e,t,n)}static isValidIdentifier(e){return Bx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ip}static keyField(){return new r([ip])}static fromServerFormat(e){let t=[],n="",i=0,s=()=>{if(n.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},a=!1;for(;i<e.length;){let l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(s(),i++)}if(s(),a)throw new $(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}static emptyPath(){return new r([])}};var H=class r{constructor(e){this.path=e}static fromPath(e){return new r(ce.fromString(e))}static fromName(e){return new r(ce.fromString(e).popFirst(5))}static empty(){return new r(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new r(new ce(e.slice()))}};var Ri=-1,mu=class{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}};mu.UNKNOWN_ID=-1;function qx(r,e){let t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=K.fromTimestamp(n===1e9?new we(t+1,0):new we(t,n));return new yr(i,H.empty(),e)}function jx(r){return new yr(r.readTime,r.key,Ri)}var yr=class r{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new r(K.min(),H.empty(),Ri)}static max(){return new r(K.max(),H.empty(),Ri)}};function zx(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(r.documentKey,e.documentKey),t!==0?t:Z(r.largestBatchId,e.largestBatchId))}var Hx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",gu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function In(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Hx)throw r;L("LocalStore","Unexpectedly lost primary lease")}var k=class r{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new r((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof r?t:r.resolve(t)}catch(t){return r.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):r.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):r.reject(t)}static resolve(e){return new r((t,n)=>{t(e)})}static reject(e){return new r((t,n)=>{n(e)})}static waitFor(e){return new r((t,n)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=r.resolve(!1);for(let n of e)t=t.next(i=>i?r.resolve(i):n());return t}static forEach(e,t){let n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new r((n,i)=>{let s=e.length,a=new Array(s),l=0;for(let c=0;c<s;c++){let h=c;t(e[h]).next(p=>{a[h]=p,++l,l===s&&n(a)},p=>i(p))}})}static doWhile(e,t){return new r((n,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}};function Gx(r){let e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(r){return r.name==="IndexedDbTransactionError"}var an=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.oe(n),this._e=n=>t.writeSequenceNumber(n))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}};an.ae=-1;var jc=-1;function ea(r){return r==null}function Pi(r){return r===0&&1/r==-1/0}function Wx(r){return typeof r=="number"&&Number.isInteger(r)&&!Pi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}var Bp="";function Kx(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=sp(e)),e=Qx(r.get(t),e);return sp(e)}function Qx(r,e){let t=e,n=r.length;for(let i=0;i<n;i++){let s=r.charAt(i);switch(s){case"\0":t+="";break;case Bp:t+="";break;default:t+=s}}return t}function sp(r){return r+Bp+""}var Xx="remoteDocuments",qp="owner";var jp="mutationQueues";var zp="mutations";var Hp="documentMutations",Yx="remoteDocumentsV14";var Gp="remoteDocumentGlobal";var Wp="targets";var Kp="targetDocuments";var Qp="targetGlobal",Xp="collectionParents";var Yp="clientMetadata";var Jp="bundles";var Zp="namedQueries";var Jx="indexConfiguration";var Zx="indexState";var ew="indexEntries";var em="documentOverlays";var tw="globals";var rw=[jp,zp,Hp,Xx,Wp,qp,Qp,Kp,Yp,Gp,Xp,Jp,Zp],hT=[...rw,em],nw=[jp,zp,Hp,Yx,Wp,qp,Qp,Kp,Yp,Gp,Xp,Jp,Zp,em],iw=nw,sw=[...iw,Jx,Zx,ew];var fT=[...sw,tw];function op(r){let e=0;for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ir(r,e){for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function tm(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}var de=class r{constructor(e,t){this.comparator=e,this.root=t||it.EMPTY}insert(e,t){return new r(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new r(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tn(this.root,e,this.comparator,!1)}getReverseIterator(){return new tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tn(this.root,e,this.comparator,!0)}},tn=class{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},it=class r{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??r.RED,this.left=i??r.EMPTY,this.right=s??r.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new r(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return r.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return r.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();let e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}};it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,n,i,s){return this}insert(e,t,n){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var _e=class r{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wo(this.data.getIterator())}getIteratorFrom(e){return new wo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r(this.comparator);return t.data=e,t}},wo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var nt=class r{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new r([])}unionWith(e){let t=new _e(Fe.comparator);for(let n of this.fields)t=t.add(n);for(let n of e)t=t.add(n);return new r(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,n)=>t.isEqual(n))}};var Eo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var ke=class r{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Eo("Invalid base64 string: "+s):s}}(e);return new r(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new r(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ke.EMPTY_BYTE_STRING=new ke("");var ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(r){if(re(!!r),typeof r=="string"){let e=0,t=ow.exec(r);if(re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Et(r){return typeof r=="string"?ke.fromBase64String(r):ke.fromUint8Array(r)}var rm="server_timestamp",nm="__type__",im="__previous_value__",sm="__local_write_time__";function zc(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[nm])===null||t===void 0?void 0:t.stringValue)===rm}function ta(r){let e=r.mapValue.fields[im];return zc(e)?ta(e):e}function Di(r){let e=wt(r.mapValue.fields[sm].timestampValue);return new we(e.seconds,e.nanos)}var yu=class{constructor(e,t,n,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}},Io="(default)",bo=class r{constructor(e,t){this.projectId=e,this.database=t||Io}static empty(){return new r("","")}get isDefaultDatabase(){return this.database===Io}isEqual(e){return e instanceof r&&e.projectId===this.projectId&&e.database===this.database}};var Hc="__type__",om="__max__",co={mapValue:{fields:{__type__:{stringValue:om}}}},Gc="__vector__",ln="value";function $t(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zc(r)?4:lm(r)?9007199254740991:am(r)?10:11:G()}function at(r,e){if(r===e)return!0;let t=$t(r);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Di(r).isEqual(Di(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=wt(i.timestampValue),l=wt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Et(i.bytesValue).isEqual(Et(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=le(i.doubleValue),l=le(s.doubleValue);return a===l?Pi(a)===Pi(l):isNaN(a)&&isNaN(l)}return!1}(r,e);case 9:return on(r.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(op(a)!==op(l))return!1;for(let c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!at(a[c],l[c])))return!1;return!0}(r,e);default:return G()}}function Ni(r,e){return(r.values||[]).find(t=>at(t,e))!==void 0}function un(r,e){if(r===e)return 0;let t=$t(r),n=$t(e);if(t!==n)return Z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(r.booleanValue,e.booleanValue);case 2:return function(s,a){let l=le(s.integerValue||s.doubleValue),c=le(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return ap(r.timestampValue,e.timestampValue);case 4:return ap(Di(r),Di(e));case 5:return Z(r.stringValue,e.stringValue);case 6:return function(s,a){let l=Et(s),c=Et(a);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){let l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){let p=Z(l[h],c[h]);if(p!==0)return p}return Z(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){let l=Z(le(s.latitude),le(a.latitude));return l!==0?l:Z(le(s.longitude),le(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return lp(r.arrayValue,e.arrayValue);case 10:return function(s,a){var l,c,h,p;let m=s.fields||{},x=a.fields||{},A=(l=m[ln])===null||l===void 0?void 0:l.arrayValue,P=(c=x[ln])===null||c===void 0?void 0:c.arrayValue,M=Z(((h=A?.values)===null||h===void 0?void 0:h.length)||0,((p=P?.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:lp(A,P)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===co.mapValue&&a===co.mapValue)return 0;if(s===co.mapValue)return 1;if(a===co.mapValue)return-1;let l=s.fields||{},c=Object.keys(l),h=a.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){let x=Z(c[m],p[m]);if(x!==0)return x;let A=un(l[c[m]],h[p[m]]);if(A!==0)return A}return Z(c.length,p.length)}(r.mapValue,e.mapValue);default:throw G()}}function ap(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Z(r,e);let t=wt(r),n=wt(e),i=Z(t.seconds,n.seconds);return i!==0?i:Z(t.nanos,n.nanos)}function lp(r,e){let t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){let s=un(t[i],n[i]);if(s)return s}return Z(t.length,n.length)}function cn(r){return vu(r)}function vu(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){let n=wt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Et(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return H.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(let s of t.values||[])i?i=!1:n+=",",n+=vu(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){let n=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of n)s?s=!1:i+=",",i+=`${a}:${vu(t.fields[a])}`;return i+"}"}(r.mapValue):G()}function po(r){switch($t(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=ta(r);return e?16+po(e):16;case 5:return 2*r.stringValue.length;case 6:return Et(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+po(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Ir(n.fields,(s,a)=>{i+=s.length+po(a)}),i}(r.mapValue);default:throw G()}}function _u(r){return!!r&&"integerValue"in r}function Wc(r){return!!r&&"arrayValue"in r}function up(r){return!!r&&"nullValue"in r}function cp(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mo(r){return!!r&&"mapValue"in r}function am(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hc])===null||t===void 0?void 0:t.stringValue)===Gc}function Ai(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){let e={mapValue:{fields:{}}};return Ir(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ai(n)),e}if(r.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ai(r.arrayValue.values[t]);return e}return Object.assign({},r)}function lm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===om}var mT={mapValue:{fields:{[Hc]:{stringValue:Gc},[ln]:{arrayValue:{}}}}};var Qe=class r{constructor(e){this.value=e}static empty(){return new r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(t)}setAll(e){let t=Fe.emptyPath(),n={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){let c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}a?n[l.lastSegment()]=Ai(a):i.push(l.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){let t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];mo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ir(t,(i,s)=>e[i]=s);for(let i of n)delete e[i]}clone(){return new r(Ai(this.value))}};function um(r){let e=[];return Ir(r.fields,(t,n)=>{let i=new Fe([t]);if(mo(n)){let s=um(n.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new nt(e)}var Ye=class r{constructor(e,t,n,i,s,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new r(e,0,K.min(),K.min(),K.min(),Qe.empty(),0)}static newFoundDocument(e,t,n,i){return new r(e,1,t,K.min(),n,i,0)}static newNoDocument(e,t){return new r(e,2,t,K.min(),K.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new r(e,3,t,K.min(),K.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof r&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var dn=class{constructor(e,t){this.position=e,this.inclusive=t}};function dp(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){let s=e[i],a=r.position[i];if(s.field.isKeyField()?n=H.comparator(H.fromName(a.referenceValue),t.key):n=un(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function hp(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!at(r.position[t],e.position[t]))return!1;return!0}var hn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function aw(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}var To=class{},me=class r extends To{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new wu(e,t,n):t==="array-contains"?new bu(e,n):t==="in"?new Tu(e,n):t==="not-in"?new Au(e,n):t==="array-contains-any"?new Su(e,n):new r(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Eu(e,n):new Iu(e,n)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(un(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},lt=class r extends To{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new r(e,t)}matches(e){return cm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}};function cm(r){return r.op==="and"}function dm(r){return lw(r)&&cm(r)}function lw(r){for(let e of r.filters)if(e instanceof lt)return!1;return!0}function xu(r){if(r instanceof me)return r.field.canonicalString()+r.op.toString()+cn(r.value);if(dm(r))return r.filters.map(e=>xu(e)).join(",");{let e=r.filters.map(t=>xu(t)).join(",");return`${r.op}(${e})`}}function hm(r,e){return r instanceof me?function(n,i){return i instanceof me&&n.op===i.op&&n.field.isEqual(i.field)&&at(n.value,i.value)}(r,e):r instanceof lt?function(n,i){return i instanceof lt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,l)=>s&&hm(a,i.filters[l]),!0):!1}(r,e):void G()}function fm(r){return r instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${cn(t.value)}`}(r):r instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(fm).join(" ,")+"}"}(r):"Filter"}var wu=class extends me{constructor(e,t,n){super(e,t,n),this.key=H.fromName(n.referenceValue)}matches(e){let t=H.comparator(e.key,this.key);return this.matchesComparison(t)}},Eu=class extends me{constructor(e,t){super(e,"in",t),this.keys=pm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Iu=class extends me{constructor(e,t){super(e,"not-in",t),this.keys=pm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function pm(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>H.fromName(n.referenceValue))}var bu=class extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Wc(t)&&Ni(t.arrayValue,this.value)}},Tu=class extends me{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ni(this.value.arrayValue,t)}},Au=class extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Ni(this.value.arrayValue,t)}},Su=class extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Wc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ni(this.value.arrayValue,n))}};var Cu=class{constructor(e,t=null,n=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.le=null}};function fp(r,e=null,t=[],n=[],i=null,s=null,a=null){return new Cu(r,e,t,n,i,s,a)}function Kc(r){let e=W(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>xu(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ea(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>cn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>cn(n)).join(",")),e.le=t}return e.le}function Qc(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!aw(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!hm(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!hp(r.startAt,e.startAt)&&hp(r.endAt,e.endAt)}function ku(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}var fn=class{constructor(e,t=null,n=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}};function uw(r,e,t,n,i,s,a,l){return new fn(r,e,t,n,i,s,a,l)}function Xc(r){return new fn(r)}function pp(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cw(r){return r.collectionGroup!==null}function Si(r){let e=W(r);if(e.he===null){e.he=[];let t=new Set;for(let s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _e(Fe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new hn(s,n))}),t.has(Fe.keyField().canonicalString())||e.he.push(new hn(Fe.keyField(),n))}return e.he}function st(r){let e=W(r);return e.Pe||(e.Pe=dw(e,Si(r))),e.Pe}function dw(r,e){if(r.limitType==="F")return fp(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new hn(i.field,s)});let t=r.endAt?new dn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dn(r.startAt.position,r.startAt.inclusive):null;return fp(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ru(r,e,t){return new fn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ra(r,e){return Qc(st(r),st(e))&&r.limitType===e.limitType}function mm(r){return`${Kc(st(r))}|lt:${r.limitType}`}function Jr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>fm(i)).join(", ")}]`),ea(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>cn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>cn(i)).join(",")),`Target(${n})`}(st(r))}; limitType=${r.limitType})`}function na(r,e){return e.isFoundDocument()&&function(n,i){let s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(let s of Si(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(let s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,l,c){let h=dp(a,l,c);return a.inclusive?h<=0:h<0}(n.startAt,Si(n),i)||n.endAt&&!function(a,l,c){let h=dp(a,l,c);return a.inclusive?h>=0:h>0}(n.endAt,Si(n),i))}(r,e)}function hw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function gm(r){return(e,t)=>{let n=!1;for(let i of Si(r)){let s=fw(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function fw(r,e,t){let n=r.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,l){let c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?un(c,h):G()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G()}}var It=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(let[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,n)=>{for(let[i,s]of n)e(i,s)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}};var pw=new de(H.comparator);function bt(){return pw}var ym=new de(H.comparator);function Ti(...r){let e=ym;for(let t of r)e=e.insert(t.key,t);return e}function vm(r){let e=ym;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function hr(){return Ci()}function _m(){return Ci()}function Ci(){return new It(r=>r.toString(),(r,e)=>r.isEqual(e))}var mw=new de(H.comparator),gw=new _e(H.comparator);function J(...r){let e=gw;for(let t of r)e=e.add(t);return e}var yw=new _e(Z);function vw(){return yw}function Yc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function xm(r){return{integerValue:""+r}}function _w(r,e){return Wx(e)?xm(e):Yc(r,e)}var pn=class{constructor(){this._=void 0}};function xw(r,e,t){return r instanceof mn?function(i,s){let a={fields:{[nm]:{stringValue:rm},[sm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zc(s)&&(s=ta(s)),s&&(a.fields[im]=s),{mapValue:a}}(t,e):r instanceof vr?Em(r,e):r instanceof _r?Im(r,e):function(i,s){let a=wm(i,s),l=mp(a)+mp(i.Ie);return _u(a)&&_u(i.Ie)?xm(l):Yc(i.serializer,l)}(r,e)}function ww(r,e,t){return r instanceof vr?Em(r,e):r instanceof _r?Im(r,e):t}function wm(r,e){return r instanceof gn?function(n){return _u(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}var mn=class extends pn{},vr=class extends pn{constructor(e){super(),this.elements=e}};function Em(r,e){let t=bm(e);for(let n of r.elements)t.some(i=>at(i,n))||t.push(n);return{arrayValue:{values:t}}}var _r=class extends pn{constructor(e){super(),this.elements=e}};function Im(r,e){let t=bm(e);for(let n of r.elements)t=t.filter(i=>!at(i,n));return{arrayValue:{values:t}}}var gn=class extends pn{constructor(e,t){super(),this.serializer=e,this.Ie=t}};function mp(r){return le(r.integerValue||r.doubleValue)}function bm(r){return Wc(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Ew(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof vr&&i instanceof vr||n instanceof _r&&i instanceof _r?on(n.elements,i.elements,at):n instanceof gn&&i instanceof gn?at(n.Ie,i.Ie):n instanceof mn&&i instanceof mn}(r.transform,e.transform)}var Pu=class{constructor(e,t){this.version=e,this.transformResults=t}},mr=class r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new r}static exists(e){return new r(void 0,e)}static updateTime(e){return new r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function go(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}var yn=class{};function Tm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ao(r.key,mr.none()):new xr(r.key,r.data,mr.none());{let t=r.data,n=Qe.empty(),i=new _e(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new Tt(r.key,n,new nt(i.toArray()),mr.none())}}function Iw(r,e,t){r instanceof xr?function(i,s,a){let l=i.value.clone(),c=yp(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):r instanceof Tt?function(i,s,a){if(!go(i.precondition,s))return void s.convertToUnknownDocument(a.version);let l=yp(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Am(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ki(r,e,t,n){return r instanceof xr?function(s,a,l,c){if(!go(s.precondition,a))return l;let h=s.value.clone(),p=vp(s.fieldTransforms,c,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Tt?function(s,a,l,c){if(!go(s.precondition,a))return l;let h=vp(s.fieldTransforms,c,a),p=a.data;return p.setAll(Am(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,a,l){return go(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,e,t)}function bw(r,e){let t=null;for(let n of r.fieldTransforms){let i=e.data.field(n.field),s=wm(n.transform,i||null);s!=null&&(t===null&&(t=Qe.empty()),t.set(n.field,s))}return t||null}function gp(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&on(n,i,(s,a)=>Ew(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}var xr=class extends yn{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Tt=class extends yn{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Am(r){let e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let n=r.data.field(t);e.set(t,n)}}),e}function yp(r,e,t){let n=new Map;re(r.length===t.length);for(let i=0;i<t.length;i++){let s=r[i],a=s.transform,l=e.data.field(s.field);n.set(s.field,ww(a,l,t[i]))}return n}function vp(r,e,t){let n=new Map;for(let i of r){let s=i.transform,a=t.data.field(i.field);n.set(i.field,xw(s,a,e))}return n}var Ao=class extends yn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Du=class extends yn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Nu=class{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&Iw(s,e,n[i])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ki(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ki(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=_m();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;let c=Tm(a,l);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,n)=>gp(t,n))&&on(this.baseMutations,e.baseMutations,(t,n)=>gp(t,n))}},Ou=class r{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){re(e.mutations.length===n.length);let i=function(){return mw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new r(e,t,n,i)}};var Mu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Lu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var he,ee;function Tw(r){switch(r){case C.OK:return G();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return G()}}function Sm(r){if(r===void 0)return xt("GRPC error has no .code"),C.UNKNOWN;switch(r){case he.OK:return C.OK;case he.CANCELLED:return C.CANCELLED;case he.UNKNOWN:return C.UNKNOWN;case he.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case he.INTERNAL:return C.INTERNAL;case he.UNAVAILABLE:return C.UNAVAILABLE;case he.UNAUTHENTICATED:return C.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case he.NOT_FOUND:return C.NOT_FOUND;case he.ALREADY_EXISTS:return C.ALREADY_EXISTS;case he.PERMISSION_DENIED:return C.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case he.ABORTED:return C.ABORTED;case he.OUT_OF_RANGE:return C.OUT_OF_RANGE;case he.UNIMPLEMENTED:return C.UNIMPLEMENTED;case he.DATA_LOSS:return C.DATA_LOSS;default:return G()}}(ee=he||(he={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";var _p=null;function Aw(){return new TextEncoder}var Sw=new vt([4294967295,4294967295],0);function xp(r){let e=Aw().encode(r),t=new Zl;return t.update(e),new Uint8Array(t.digest())}function wp(r){let e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vt([t,n],0),new vt([i,s],0)]}var Vu=class r{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new fr(`Invalid padding: ${t}`);if(n<0)throw new fr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=vt.fromNumber(this.Ee)}Ae(e,t,n){let i=e.add(t.multiply(vt.fromNumber(n)));return i.compare(Sw)===1&&(i=new vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;let t=xp(e),[n,i]=wp(t);for(let s=0;s<this.hashCount;s++){let a=this.Ae(n,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,n){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new r(s,i,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;let t=xp(e),[n,i]=wp(t);for(let s=0;s<this.hashCount;s++){let a=this.Ae(n,i,s);this.Ve(a)}}Ve(e){let t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}},fr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var So=class r{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new r(K.min(),i,new de(Z),bt(),J())}},Oi=class r{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new r(n,t,J(),J(),J())}};var rn=class{constructor(e,t,n,i){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=i}},Co=class{constructor(e,t){this.targetId=e,this.ge=t}},ko=class{constructor(e,t,n=ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}},Ro=class{constructor(){this.pe=0,this.ye=Ep(),this.we=ke.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=J(),t=J(),n=J();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:G()}}),new Oi(this.we,this.be,e,t,n)}Me(){this.Se=!1,this.ye=Ep()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,re(this.pe>=0)}Le(){this.Se=!0,this.be=!0}},Fu=class{constructor(e){this.ke=e,this.qe=new Map,this.Qe=bt(),this.$e=ho(),this.Ke=ho(),this.Ue=new de(Z)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((n,i)=>{this.Je(i)&&t(i)})}Ze(e){let t=e.targetId,n=e.ge.count,i=this.Xe(t);if(i){let s=i.target;if(ku(s))if(n===0){let a=new H(s.path);this.ze(t,a,Ye.newNoDocument(a,K.min()))}else re(n===1);else{let a=this.et(t);if(a!==n){let l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);let h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,h)}_p?.rt(function(p,m,x,A,P){var M,O,Q,Y,q,oe;let Re={localCacheCount:p,existenceFilterCount:m.count,databaseId:x.database,projectId:x.projectId},ne=m.unchangedNames;return ne&&(Re.bloomFilter={applied:P===0,hashCount:(M=ne?.hashCount)!==null&&M!==void 0?M:0,bitmapLength:(Y=(Q=(O=ne?.bits)===null||O===void 0?void 0:O.bitmap)===null||Q===void 0?void 0:Q.length)!==null&&Y!==void 0?Y:0,padding:(oe=(q=ne?.bits)===null||q===void 0?void 0:q.padding)!==null&&oe!==void 0?oe:0,mightContain:w=>{var g;return(g=A?.mightContain(w))!==null&&g!==void 0&&g}}),Re}(a,e.ge,this.ke.it(),l,c))}}}}tt(e){let t=e.ge.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t,a,l;try{a=Et(n).toUint8Array()}catch(c){if(c instanceof Eo)return sn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Vu(a,i,s)}catch(c){return sn(c instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){let n=this.ke.getRemoteKeysForTarget(t),i=0;return n.forEach(s=>{let a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,s,null),i++)}),i}ot(e){let t=new Map;this.qe.forEach((s,a)=>{let l=this.Xe(a);if(l){if(s.current&&ku(l.target)){let c=new H(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Ye.newNoDocument(c,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let n=J();this.Ke.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{let h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));let i=new So(e,t,this.Ue,this.Qe,n);return this.Qe=bt(),this.$e=ho(),this.Ke=ho(),this.Ue=new de(Z),i}Ge(e,t){if(!this.Je(e))return;let n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Ro,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new _e(Z),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new _e(Z),this.$e=this.$e.insert(e,t)),t}Je(e){let t=this.Xe(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Ro),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}};function ho(){return new de(H.comparator)}function Ep(){return new de(H.comparator)}var Cw={asc:"ASCENDING",desc:"DESCENDING"},kw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rw={and:"AND",or:"OR"},Uu=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function $u(r,e){return r.useProto3Json||ea(e)?e:{value:e}}function Po(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Pw(r,e){return Po(r,e.toTimestamp())}function ot(r){return re(!!r),K.fromTimestamp(function(t){let n=wt(t);return new we(n.seconds,n.nanos)}(r))}function Jc(r,e){return Bu(r,e).canonicalString()}function Bu(r,e){let t=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function km(r){let e=ce.fromString(r);return re(Om(e)),e}function qu(r,e){return Jc(r.databaseId,e.path)}function su(r,e){let t=km(e);if(t.get(1)!==r.databaseId.projectId)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new H(Pm(t))}function Rm(r,e){return Jc(r.databaseId,e)}function Dw(r){let e=km(r);return e.length===4?ce.emptyPath():Pm(e)}function ju(r){return new ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pm(r){return re(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ip(r,e,t){return{name:qu(r,e),fields:t.value.mapValue.fields}}function Nw(r,e){let t;if("targetChange"in e){e.targetChange;let n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(re(p===void 0||typeof p=="string"),ke.fromBase64String(p||"")):(re(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ke.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){let p=h.code===void 0?C.UNKNOWN:Sm(h.code);return new $(p,h.message||"")}(a);t=new ko(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;let n=e.documentChange;n.document,n.document.name,n.document.updateTime;let i=su(r,n.document.name),s=ot(n.document.updateTime),a=n.document.createTime?ot(n.document.createTime):K.min(),l=new Qe({mapValue:{fields:n.document.fields}}),c=Ye.newFoundDocument(i,s,a,l),h=n.targetIds||[],p=n.removedTargetIds||[];t=new rn(h,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;let n=e.documentDelete;n.document;let i=su(r,n.document),s=n.readTime?ot(n.readTime):K.min(),a=Ye.newNoDocument(i,s),l=n.removedTargetIds||[];t=new rn([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;let n=e.documentRemove;n.document;let i=su(r,n.document),s=n.removedTargetIds||[];t=new rn([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;let n=e.filter;n.targetId;let{count:i=0,unchangedNames:s}=n,a=new Lu(i,s),l=n.targetId;t=new Co(l,a)}}return t}function Ow(r,e){let t;if(e instanceof xr)t={update:Ip(r,e.key,e.value)};else if(e instanceof Ao)t={delete:qu(r,e.key)};else if(e instanceof Tt)t={update:Ip(r,e.key,e.data),updateMask:jw(e.fieldMask)};else{if(!(e instanceof Du))return G();t={verify:qu(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){let l=a.transform;if(l instanceof mn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gn)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw G()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Pw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(r,e.precondition)),t}function Mw(r,e){return r&&r.length>0?(re(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?ot(i.updateTime):ot(s);return a.isEqual(K.min())&&(a=ot(s)),new Pu(a,i.transformResults||[])}(t,e))):[]}function Lw(r,e){return{documents:[Rm(r,e.path)]}}function Vw(r,e){let t={structuredQuery:{}},n=e.path,i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Rm(r,i);let s=function(h){if(h.length!==0)return Nm(lt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(h){if(h.length!==0)return h.map(p=>function(x){return{field:Zr(x.field),direction:$w(x.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let l=$u(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:i}}function Fw(r){let e=Dw(r.parent),t=r.structuredQuery,n=t.from?t.from.length:0,i=null;if(n>0){re(n===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(m){let x=Dm(m);return x instanceof lt&&dm(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(x=>function(P){return new hn(en(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(x))}(t.orderBy));let l=null;t.limit&&(l=function(m){let x;return x=typeof m=="object"?m.value:m,ea(x)?null:x}(t.limit));let c=null;t.startAt&&(c=function(m){let x=!!m.before,A=m.values||[];return new dn(A,x)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let x=!m.before,A=m.values||[];return new dn(A,x)}(t.endAt)),uw(e,i,a,s,l,"F",c,h)}function Uw(r,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let n=en(t.unaryFilter.field);return me.create(n,"==",{doubleValue:NaN});case"IS_NULL":let i=en(t.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=en(t.unaryFilter.field);return me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=en(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(r):r.fieldFilter!==void 0?function(t){return me.create(en(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(n=>Dm(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(r):G()}function $w(r){return Cw[r]}function Bw(r){return kw[r]}function qw(r){return Rw[r]}function Zr(r){return{fieldPath:r.canonicalString()}}function en(r){return Fe.fromServerFormat(r.fieldPath)}function Nm(r){return r instanceof me?function(t){if(t.op==="=="){if(cp(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NAN"}};if(up(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cp(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NAN"}};if(up(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(t.field),op:Bw(t.op),value:t.value}}}(r):r instanceof lt?function(t){let n=t.getFilters().map(i=>Nm(i));return n.length===1?n[0]:{compositeFilter:{op:qw(t.op),filters:n}}}(r):G()}function jw(r){let e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Om(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}var Mi=class r{constructor(e,t,n,i,s=K.min(),a=K.min(),l=ke.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var zu=class{constructor(e){this.Tt=e}};function zw(r){let e=Fw({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ru(e,e.limit,"L"):e}var Do=class{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(le(e.integerValue));else if("doubleValue"in e){let n=le(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),Pi(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),typeof n=="string"&&(n=wt(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.bt(t);else if("bytesValue"in e)this.ft(t,30),t.St(Et(e.bytesValue)),this.bt(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?lm(e)?this.ft(t,Number.MAX_SAFE_INTEGER):am(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.bt(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.bt(t)):G()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let n=e.fields||{};this.ft(t,55);for(let i of Object.keys(n))this.wt(i,t),this.Rt(n[i],t)}vt(e,t){var n,i;let s=e.fields||{};this.ft(t,53);let a=ln,l=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.ft(t,15),t.gt(le(l)),this.wt(a,t),this.Rt(s[a],t)}Ft(e,t){let n=e.values||[];this.ft(t,50);for(let i of n)this.Rt(i,t)}Dt(e,t){this.ft(t,37),H.fromName(e).path.forEach(n=>{this.ft(t,60),this.Mt(n,t)})}ft(e,t){e.gt(t)}bt(e){e.gt(2)}};Do.xt=new Do;var Hu=class{constructor(){this.Tn=new Gu}addToCollectionParentIndex(e,t){return this.Tn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(yr.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}},Gu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new _e(ce.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new _e(ce.comparator)).toArray()}};var gT=new Uint8Array(0);var bp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mm=41943040,ze=class r{static withCacheSize(e){return new r(e,r.DEFAULT_COLLECTION_PERCENTILE,r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Mm,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);var Li=class r{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new r(0)}static Un(){return new r(-1)}};var Tp="LruGarbageCollector",Hw=1048576;function Ap([r,e],[t,n]){let i=Z(r,t);return i===0?Z(e,n):i}var Wu=class{constructor(e){this.Hn=e,this.buffer=new _e(Ap),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let n=this.buffer.last();Ap(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}},Ku=class{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){L(Tp,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?L(Tp,"Ignoring IndexedDB error during garbage collection: ",t):await In(t)}await this.er(3e5)})}},Qu=class{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return k.resolve(an.ae);let n=new Wu(t);return this.tr.forEachTarget(e,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(bp)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bp):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,i,s,a,l,c,h,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,l=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Yr()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-p}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function Gw(r,e){return new Qu(r,e)}var Xu=class{constructor(){this.changes=new It(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Yu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Ju=class{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ki(n.mutation,i,nt.empty(),we.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,J()).next(()=>n))}getLocalViewOfDocuments(e,t,n=J()){let i=hr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=Ti();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let n=hr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,J()))}populateOverlays(e,t,n){let i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,i){let s=bt(),a=Ci(),l=function(){return Ci()}();return t.forEach((c,h)=>{let p=n.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Tt)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),ki(p.mutation,h,p.mutation.getFieldMask(),we.now())):a.set(h.key,nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>{var m;return l.set(h,new Yu(p,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){let n=Ci(),i=new de((a,l)=>a-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let l of a)l.keys().forEach(c=>{let h=t.get(c);if(h===null)return;let p=n.get(c)||nt.empty();p=l.applyToLocalView(h,p),n.set(c,p);let m=(i.get(l.batchId)||J()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{let a=[],l=i.getReverseIterator();for(;l.hasNext();){let c=l.getNext(),h=c.key,p=c.value,m=_m();p.forEach(x=>{if(!s.has(x)){let A=Tm(t.get(x),n.get(x));A!==null&&m.set(x,A),s=s.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return k.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):k.resolve(hr()),l=Ri,c=s;return a.next(h=>k.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(x=>{c=c.insert(p,x)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,J())).next(p=>({batchId:l,changes:vm(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(n=>{let i=Ti();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let s=t.collectionGroup,a=Ti();return this.indexManager.getCollectionParents(e,s).next(l=>k.forEach(l,c=>{let h=function(m,x){return new fn(x,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(p=>{p.forEach((m,x)=>{a=a.insert(m,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,h)=>{let p=h.getKey();a.get(p)===null&&(a=a.insert(p,Ye.newInvalidDocument(p)))});let l=Ti();return a.forEach((c,h)=>{let p=s.get(c);p!==void 0&&ki(p.mutation,h,nt.empty(),we.now()),na(t,h)&&(l=l.insert(c,h))}),l})}};var Zu=class{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return k.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ot(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:zw(i.bundledQuery),readTime:ot(i.readTime)}}(t)),k.resolve()}};var ec=class{constructor(){this.overlays=new de(H.comparator),this.Rr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){let n=hr();return k.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.Et(e,t,s)}),k.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.Rr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){let i=hr(),s=t.length+1,a=new H(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){let c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new de((h,p)=>h-p),a=this.overlays.getIterator();for(;a.hasNext();){let h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let p=s.get(h.largestBatchId);p===null&&(p=hr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}let l=hr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return k.resolve(l)}Et(e,t,n){let i=this.overlays.get(n.key);if(i!==null){let a=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Mu(t,n));let s=this.Rr.get(t);s===void 0&&(s=J(),this.Rr.set(t,s)),this.Rr.set(t,s.add(n.key))}};var tc=class{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}};var Vi=class{constructor(){this.Vr=new _e(fe.mr),this.gr=new _e(fe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let n=new fe(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.wr(new fe(e,t))}br(e,t){e.forEach(n=>this.removeReference(n,t))}Sr(e){let t=new H(new ce([])),n=new fe(t,e),i=new fe(t,e+1),s=[];return this.gr.forEachInRange([n,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new H(new ce([])),n=new fe(t,e),i=new fe(t,e+1),s=J();return this.gr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new fe(e,0),n=this.Vr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}},fe=class{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return H.comparator(e.key,t.key)||Z(e.Cr,t.Cr)}static pr(e,t){return Z(e.Cr,t.Cr)||H.comparator(e.key,t.key)}};var rc=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new _e(fe.mr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){let s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Nu(s,t,n,i);this.mutationQueue.push(a);for(let l of i)this.Mr=this.Mr.add(new fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let n=t+1,i=this.Nr(n),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?jc:this.Fr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([n,i],a=>{let l=this.Or(a.Cr);s.push(l)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new _e(Z);return t.forEach(i=>{let s=new fe(i,0),a=new fe(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],l=>{n=n.add(l.Cr)})}),k.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,s=n;H.isDocumentKey(s)||(s=s.child(""));let a=new fe(new H(s),0),l=new _e(Z);return this.Mr.forEachWhile(c=>{let h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Cr)),!0)},a),k.resolve(this.Br(l))}Br(e){let t=[];return e.forEach(n=>{let i=this.Or(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return k.forEach(t.mutations,i=>{let s=new fe(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){let n=new fe(t,0),i=this.Mr.firstAfterOrEqual(n);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var nc=class{constructor(e){this.kr=e,this.docs=function(){return new de(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let n=bt();return t.forEach(i=>{let s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),k.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=bt(),a=t.path,l=new H(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){let{key:h,value:{document:p}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||zx(jx(p),n)<=0||(i.has(p.key)||na(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,n,i){G()}qr(e,t){return k.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ic(this)}getSize(e){return k.resolve(this.size)}},ic=class extends Xu{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(n)}),k.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}};var sc=class{constructor(e){this.persistence=e,this.Qr=new It(t=>Kc(t),Qc),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Vi,this.targetCount=0,this.Ur=Li.Kn()}forEachTarget(e,t){return this.Qr.forEach((n,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),k.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new Li(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.zn(t),k.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let i=0,s=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){let n=this.Qr.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.Kr.br(t,n);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),k.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Kr.vr(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.Kr.containsKey(t))}};var No=class{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new an(0),this.zr=!1,this.zr=!0,this.jr=new tc,this.referenceDelegate=e(this),this.Hr=new sc(this),this.indexManager=new Hu,this.remoteDocumentCache=function(i){return new nc(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new zu(t),this.Yr=new Zu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ec,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new rc(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);let i=new oc(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return k.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}},oc=class extends gu{constructor(e){super(),this.currentSequenceNumber=e}},ac=class r{constructor(e){this.persistence=e,this.ti=new Vi,this.ni=null}static ri(e){return new r(e)}get ii(){if(this.ni)return this.ni;throw G()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),k.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ii,n=>{let i=H.fromPath(n);return this.si(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(n=>{n?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return k.or([()=>k.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}},Oo=class r{constructor(e,t){this.persistence=e,this.oi=new It(n=>Kx(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Gw(this,t)}static ri(e,t){return new r(e,t)}Zr(){}Xr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}rr(e,t){return k.forEach(this.oi,(n,i)=>this.ar(e,n,i).next(s=>s?k.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(l=>{l||(n++,s.removeEntry(a,K.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),k.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=po(e.data.value)),t}ar(e,t,n){return k.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.oi.get(t);return k.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var lc=class r{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=i}static Yi(e,t){let n=J(),i=J();for(let s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new r(e,t.fromCache,n,i)}};var uc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var cc=class{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Oh()?8:Gx(ge())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,i){let s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new uc;return this._s(e,t,a).next(l=>{if(s.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>s.result)}us(e,t,n,i){return n.documentReadCount<this.es?(Yr()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),k.resolve()):(Yr()<=X.DEBUG&&L("QueryEngine","Query:",Jr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(Yr()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):k.resolve())}rs(e,t){if(pp(t))return k.resolve(null);let n=st(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ru(t,null,"F"),n=st(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{let a=J(...s);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{let h=this.cs(t,l);return this.ls(t,h,a,c.readTime)?this.rs(e,Ru(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,n,i){return pp(t)||i.isEqual(K.min())?k.resolve(null):this.ns.getDocuments(e,n).next(s=>{let a=this.cs(t,s);return this.ls(t,a,n,i)?k.resolve(null):(Yr()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(t)),this.hs(e,a,t,qx(i,Ri)).next(l=>l))})}cs(e,t){let n=new _e(gm(e));return t.forEach((i,s)=>{na(e,s)&&(n=n.add(s))}),n}ls(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,n){return Yr()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.ns.getDocumentsMatchingQuery(e,t,yr.min(),n)}hs(e,t,n,i){return this.ns.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Zc="LocalStore",Ww=3e8,dc=class{constructor(e,t,n,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new de(Z),this.Is=new It(s=>Kc(s),Qc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ju(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}};function Kw(r,e,t,n){return new dc(r,e,t,n)}async function Lm(r,e){let t=W(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{let a=[],l=[],c=J();for(let h of i){a.push(h.batchId);for(let p of h.mutations)c=c.add(p.key)}for(let h of s){l.push(h.batchId);for(let p of h.mutations)c=c.add(p.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Qw(r,e){let t=W(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,p){let m=h.batch,x=m.keys(),A=k.resolve();return x.forEach(P=>{A=A.next(()=>p.getEntry(c,P)).next(M=>{let O=h.docVersions.get(P);re(O!==null),M.version.compareTo(O)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),p.addEntry(M)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Vm(r){let e=W(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Xw(r,e){let t=W(r),n=e.snapshotVersion,i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;let l=[];e.targetChanges.forEach((p,m)=>{let x=i.get(m);if(!x)return;l.push(t.Hr.removeMatchingKeys(s,p.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(s,p.addedDocuments,m)));let A=x.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ke.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,n)),i=i.insert(m,A),function(M,O,Q){return M.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Ww?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(x,A,p)&&l.push(t.Hr.updateTargetData(s,A))});let c=bt(),h=J();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Yw(s,a,e.documentUpdates).next(p=>{c=p.Vs,h=p.fs})),!n.isEqual(K.min())){let p=t.Hr.getLastRemoteSnapshotVersion(s).next(m=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(p)}return k.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.Ts=i,s))}function Yw(r,e,t){let n=J(),i=J();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=bt();return t.forEach((l,c)=>{let h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):L(Zc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:i}})}function Jw(r,e){let t=W(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=jc),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Zw(r,e){let t=W(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Hr.getTargetData(n,e).next(s=>s?(i=s,k.resolve(i)):t.Hr.allocateTargetId(n).next(a=>(i=new Mi(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{let i=t.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(n.targetId,n),t.Is.set(e,n.targetId)),n})}async function hc(r,e,t){let n=W(r),i=n.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bn(a))throw a;L(Zc,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ts=n.Ts.remove(e),n.Is.delete(i.target)}function Sp(r,e,t){let n=W(r),i=K.min(),s=J();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,p){let m=W(c),x=m.Is.get(p);return x!==void 0?k.resolve(m.Ts.get(x)):m.Hr.getTargetData(h,p)}(n,a,st(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:J())).next(l=>(eE(n,hw(e),l),{documents:l,gs:s})))}function eE(r,e,t){let n=r.Es.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.Es.set(e,n)}var Mo=class{constructor(){this.activeTargetIds=vw()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var fc=class{constructor(){this.ho=new Mo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Mo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var pc=class{To(e){}shutdown(){}};var Cp="ConnectivityMonitor",Lo=class{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){L(Cp,"Network connectivity changed: AVAILABLE");for(let e of this.Vo)e(0)}Ro(){L(Cp,"Network connectivity changed: UNAVAILABLE");for(let e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var fo=null;function mc(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}var ou="RestConnection",tE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},gc=class{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Io?`project_id=${n}`:`project_id=${n}&database_id=${i}`}bo(e,t,n,i,s){let a=mc(),l=this.So(e,t.toUriEncodedString());L(ou,`Sending RPC '${e}' ${a}:`,l,n);let c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,s),this.vo(e,l,c,n).then(h=>(L(ou,`Received RPC '${e}' ${a}: `,h),h),h=>{throw sn(ou,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",n),h})}Co(e,t,n,i,s,a){return this.bo(e,t,n,i,s)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+En}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}So(e,t){let n=tE[e];return`${this.po}/v1/${t}:${n}`}terminate(){}};var yc=class{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}};var Ce="WebChannelConnection",vc=class extends gc{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,i){let s=mc();return new Promise((a,l)=>{let c=new eu;c.setWithCredentials(!0),c.listenOnce(tu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case bi.NO_ERROR:let p=c.getResponseJson();L(Ce,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case bi.TIMEOUT:L(Ce,`RPC '${e}' ${s} timed out`),l(new $(C.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:let m=c.getStatus();if(L(Ce,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let x=c.getResponseJson();Array.isArray(x)&&(x=x[0]);let A=x?.error;if(A&&A.status&&A.message){let P=function(O){let Q=O.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(Q)>=0?Q:C.UNKNOWN}(A.status);l(new $(P,A.message))}else l(new $(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(C.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(Ce,`RPC '${e}' ${s} completed.`)}});let h=JSON.stringify(i);L(Ce,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Wo(e,t,n){let i=mc(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=iu(),l=nu(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;let p=s.join("");L(Ce,`Creating RPC '${e}' stream ${i}: ${p}`,c);let m=a.createWebChannel(p,c),x=!1,A=!1,P=new yc({Fo:O=>{A?L(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(x||(L(Ce,`Opening RPC '${e}' stream ${i} transport.`),m.open(),x=!0),L(Ce,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},Mo:()=>m.close()}),M=(O,Q,Y)=>{O.listen(Q,q=>{try{Y(q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return M(m,Xr.EventType.OPEN,()=>{A||(L(Ce,`RPC '${e}' stream ${i} transport opened.`),P.Qo())}),M(m,Xr.EventType.CLOSE,()=>{A||(A=!0,L(Ce,`RPC '${e}' stream ${i} transport closed`),P.Ko())}),M(m,Xr.EventType.ERROR,O=>{A||(A=!0,sn(Ce,`RPC '${e}' stream ${i} transport errored:`,O),P.Ko(new $(C.UNAVAILABLE,"The operation could not be completed")))}),M(m,Xr.EventType.MESSAGE,O=>{var Q;if(!A){let Y=O.data[0];re(!!Y);let q=Y,oe=q?.error||((Q=q[0])===null||Q===void 0?void 0:Q.error);if(oe){L(Ce,`RPC '${e}' stream ${i} received error:`,oe);let Re=oe.status,ne=function(v){let _=he[v];if(_!==void 0)return Sm(_)}(Re),w=oe.message;ne===void 0&&(ne=C.INTERNAL,w="Unknown error status: "+Re+" with message "+oe.message),A=!0,P.Ko(new $(ne,w)),m.close()}else L(Ce,`RPC '${e}' stream ${i} received:`,Y),P.Uo(Y)}}),M(l,ru.STAT_EVENT,O=>{O.stat===uo.PROXY?L(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===uo.NOPROXY&&L(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}};function au(){return typeof document<"u"?document:null}function ia(r){return new Uu(r,!0)}var Vo=class{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-n);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}};var kp="PersistentStream",Fo=class{constructor(e,t,n,i,s,a,l,c){this.Ti=e,this.n_=n,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Vo(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===t&&this.V_(n,i)},n=>{e(()=>{let i=new $(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(e,t){let n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return L(kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(L(kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},_c=class extends Fo{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=Nw(this.serializer,e),n=function(s){if(!("targetChange"in s))return K.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?ot(a.readTime):K.min()}(e);return this.listener.p_(t,n)}y_(e){let t={};t.database=ju(this.serializer),t.addTarget=function(s,a){let l,c=a.target;if(l=ku(c)?{documents:Lw(s,c)}:{query:Vw(s,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Cm(s,a.resumeToken);let h=$u(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=Po(s,a.snapshotVersion.toTimestamp());let h=$u(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);let n=Uw(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){let t={};t.database=ju(this.serializer),t.removeTarget=e,this.I_(t)}},xc=class extends Fo{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();let t=Mw(e.writeResults,e.commitTime),n=ot(e.commitTime);return this.listener.v_(n,t)}C_(){let e={};e.database=ju(this.serializer),this.I_(e)}S_(e){let t={streamToken:this.lastStreamToken,writes:e.map(n=>Ow(this.serializer,n))};this.I_(t)}};var wc=class{},Ec=class extends wc{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.bo(e,Bu(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(C.UNKNOWN,s.toString())})}Co(e,t,n,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Bu(t,n),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}},Ic=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(xt(t),this.N_=!1):L("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}};var wr="RemoteStore",bc=class{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{n.enqueueAndForget(async()=>{br(this)&&(L(wr,"Restarting streams for network reachability change."),await async function(c){let h=W(c);h.W_.add(4),await ji(h),h.j_.set("Unknown"),h.W_.delete(4),await sa(h)}(this))})}),this.j_=new Ic(n,i)}};async function sa(r){if(br(r))for(let e of r.G_)await e(!0)}async function ji(r){for(let e of r.G_)await e(!1)}function Fm(r,e){let t=W(r);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),nd(t)?rd(t):Tn(t).c_()&&td(t,e))}function ed(r,e){let t=W(r),n=Tn(t);t.U_.delete(e),n.c_()&&Um(t,e),t.U_.size===0&&(n.c_()?n.P_():br(t)&&t.j_.set("Unknown"))}function td(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){let t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tn(r).y_(e)}function Um(r,e){r.H_.Ne(e),Tn(r).w_(e)}function rd(r){r.H_=new Fu({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Tn(r).start(),r.j_.B_()}function nd(r){return br(r)&&!Tn(r).u_()&&r.U_.size>0}function br(r){return W(r).W_.size===0}function $m(r){r.H_=void 0}async function rE(r){r.j_.set("Online")}async function nE(r){r.U_.forEach((e,t)=>{td(r,e)})}async function iE(r,e){$m(r),nd(r)?(r.j_.q_(e),rd(r)):r.j_.set("Unknown")}async function sE(r,e,t){if(r.j_.set("Online"),e instanceof ko&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let l of s.targetIds)i.U_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.U_.delete(l),i.H_.removeTarget(l))}(r,e)}catch(n){L(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Uo(r,n)}else if(e instanceof rn?r.H_.We(e):e instanceof Co?r.H_.Ze(e):r.H_.je(e),!t.isEqual(K.min()))try{let n=await Vm(r.localStore);t.compareTo(n)>=0&&await function(s,a){let l=s.H_.ot(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){let p=s.U_.get(h);p&&s.U_.set(h,p.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{let p=s.U_.get(c);if(!p)return;s.U_.set(c,p.withResumeToken(ke.EMPTY_BYTE_STRING,p.snapshotVersion)),Um(s,c);let m=new Mi(p.target,c,h,p.sequenceNumber);td(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){L(wr,"Failed to raise snapshot:",n),await Uo(r,n)}}async function Uo(r,e,t){if(!bn(e))throw e;r.W_.add(1),await ji(r),r.j_.set("Offline"),t||(t=()=>Vm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L(wr,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await sa(r)})}function Bm(r,e){return e().catch(t=>Uo(r,t,e))}async function oa(r){let e=W(r),t=Bt(e),n=e.K_.length>0?e.K_[e.K_.length-1].batchId:jc;for(;oE(e);)try{let i=await Jw(e.localStore,n);if(i===null){e.K_.length===0&&t.P_();break}n=i.batchId,aE(e,i)}catch(i){await Uo(e,i)}qm(e)&&jm(e)}function oE(r){return br(r)&&r.K_.length<10}function aE(r,e){r.K_.push(e);let t=Bt(r);t.c_()&&t.b_&&t.S_(e.mutations)}function qm(r){return br(r)&&!Bt(r).u_()&&r.K_.length>0}function jm(r){Bt(r).start()}async function lE(r){Bt(r).C_()}async function uE(r){let e=Bt(r);for(let t of r.K_)e.S_(t.mutations)}async function cE(r,e,t){let n=r.K_.shift(),i=Ou.from(n,e,t);await Bm(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await oa(r)}async function dE(r,e){e&&Bt(r).b_&&await async function(n,i){if(function(a){return Tw(a)&&a!==C.ABORTED}(i.code)){let s=n.K_.shift();Bt(n).h_(),await Bm(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oa(n)}}(r,e),qm(r)&&jm(r)}async function Rp(r,e){let t=W(r);t.asyncQueue.verifyOperationInProgress(),L(wr,"RemoteStore received new credentials");let n=br(t);t.W_.add(3),await ji(t),n&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await sa(t)}async function hE(r,e){let t=W(r);e?(t.W_.delete(2),await sa(t)):e||(t.W_.add(2),await ji(t),t.j_.set("Unknown"))}function Tn(r){return r.J_||(r.J_=function(t,n,i){let s=W(t);return s.M_(),new _c(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:rE.bind(null,r),No:nE.bind(null,r),Lo:iE.bind(null,r),p_:sE.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),nd(r)?rd(r):r.j_.set("Unknown")):(await r.J_.stop(),$m(r))})),r.J_}function Bt(r){return r.Y_||(r.Y_=function(t,n,i){let s=W(t);return s.M_(),new xc(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:lE.bind(null,r),Lo:dE.bind(null,r),D_:uE.bind(null,r),v_:cE.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await oa(r)):(await r.Y_.stop(),r.K_.length>0&&(L(wr,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}var Tc=class r{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){let a=Date.now()+n,l=new r(e,t,a,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function id(r,e){if(xt("AsyncQueue",`${e}: ${r}`),bn(r))return new $(C.UNAVAILABLE,`${e}: ${r}`);throw r}var $o=class r{static emptySet(e){return new r(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||H.comparator(t.key,n.key):(t,n)=>H.comparator(t.key,n.key),this.keyedMap=Ti(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let n=new r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}};var Bo=class{constructor(){this.Z_=new de(H.comparator)}track(e){let t=e.doc.key,n=this.Z_.get(t);n?e.type!==0&&n.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&n.type!==1?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Z_=this.Z_.remove(t):e.type===1&&n.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):G():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}},vn=class r{constructor(e,t,n,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){let a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new r(e,t,$o.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}};var Ac=class{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}},Sc=class{constructor(){this.queries=Pp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,n){let i=W(t),s=i.queries;i.queries=Pp(),s.forEach((a,l)=>{for(let c of l.ta)c.onError(n)})})(this,new $(C.ABORTED,"Firestore shutting down"))}};function Pp(){return new It(r=>mm(r),ra)}async function zm(r,e){let t=W(r),n=3,i=e.query,s=t.queries.get(i);s?!s.na()&&e.ra()&&(n=2):(s=new Ac,n=e.ra()?0:1);try{switch(n){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let l=id(a,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&sd(t)}async function Hm(r,e){let t=W(r),n=e.query,i=3,s=t.queries.get(n);if(s){let a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function fE(r,e){let t=W(r),n=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let l of a.ta)l.oa(i)&&(n=!0);a.ea=i}}n&&sd(t)}function pE(r,e,t){let n=W(r),i=n.queries.get(e);if(i)for(let s of i.ta)s.onError(t);n.queries.delete(e)}function sd(r){r.ia.forEach(e=>{e.next()})}var Cc,Dp;(Dp=Cc||(Cc={}))._a="default",Dp.Cache="cache";var qo=class{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){let n=[];for(let i of e.docChanges)i.type!==3&&n.push(i);e=new vn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;let n=t!=="Offline";return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Cc.Cache}};var jo=class{constructor(e){this.key=e}},zo=class{constructor(e){this.key=e}},kc=class{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=J(),this.mutatedKeys=J(),this.ya=gm(e),this.wa=new $o(this.ya)}get ba(){return this.fa}Sa(e,t){let n=t?t.Da:new Bo,i=t?t.wa:this.wa,s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1,c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{let x=i.get(p),A=na(this.query,m)?m:null,P=!!x&&this.mutatedKeys.has(x.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations),O=!1;x&&A?x.data.isEqual(A.data)?P!==M&&(n.track({type:3,doc:A}),O=!0):this.va(x,A)||(n.track({type:2,doc:A}),O=!0,(c&&this.ya(A,c)>0||h&&this.ya(A,h)<0)&&(l=!0)):!x&&A?(n.track({type:0,doc:A}),O=!0):x&&!A&&(n.track({type:1,doc:x}),O=!0,(c||h)&&(l=!0)),O&&(A?(a=a.add(A),s=M?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),n.track({type:1,doc:p})}return{wa:a,Da:n,ls:l,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let a=e.Da.X_();a.sort((p,m)=>function(A,P){let M=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return M(A)-M(P)}(p.type,m.type)||this.ya(p.doc,m.doc)),this.Ca(n),i=i!=null&&i;let l=t&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new vn(this.query,e.wa,s,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bo,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=J(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});let t=[];return e.forEach(n=>{this.pa.has(n)||t.push(new zo(n))}),this.pa.forEach(n=>{e.has(n)||t.push(new jo(n))}),t}Oa(e){this.fa=e.gs,this.pa=J();let t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return vn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}},od="SyncEngine",Rc=class{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}},Pc=class{constructor(e){this.key=e,this.Ba=!1}},Dc=class{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new It(l=>mm(l),ra),this.qa=new Map,this.Qa=new Set,this.$a=new de(H.comparator),this.Ka=new Map,this.Ua=new Vi,this.Wa={},this.Ga=new Map,this.za=Li.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}};async function mE(r,e,t=!0){let n=Ym(r),i,s=n.ka.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Gm(n,e,t,!0),i}async function gE(r,e){let t=Ym(r);await Gm(t,e,!0,!1)}async function Gm(r,e,t,n){let i=await Zw(r.localStore,st(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t),l;return n&&(l=await yE(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&Fm(r.remoteStore,i),l}async function yE(r,e,t,n,i){r.Ha=(m,x,A)=>async function(M,O,Q,Y){let q=O.view.Sa(Q);q.ls&&(q=await Sp(M.localStore,O.query,!1).then(({documents:w})=>O.view.Sa(w,q)));let oe=Y&&Y.targetChanges.get(O.targetId),Re=Y&&Y.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(q,M.isPrimaryClient,oe,Re);return Op(M,O.targetId,ne.Ma),ne.snapshot}(r,m,x,A);let s=await Sp(r.localStore,e,!0),a=new kc(e,s.gs),l=a.Sa(s.documents),c=Oi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(l,r.isPrimaryClient,c);Op(r,t,h.Ma);let p=new Rc(e,t,a);return r.ka.set(e,p),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),h.snapshot}async function vE(r,e,t){let n=W(r),i=n.ka.get(e),s=n.qa.get(i.targetId);if(s.length>1)return n.qa.set(i.targetId,s.filter(a=>!ra(a,e))),void n.ka.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await hc(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&ed(n.remoteStore,i.targetId),Nc(n,i.targetId)}).catch(In)):(Nc(n,i.targetId),await hc(n.localStore,i.targetId,!0))}async function _E(r,e){let t=W(r),n=t.ka.get(e),i=t.qa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ed(t.remoteStore,n.targetId))}async function xE(r,e,t){let n=SE(r);try{let i=await function(a,l){let c=W(a),h=we.now(),p=l.reduce((A,P)=>A.add(P.key),J()),m,x;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=bt(),M=J();return c.ds.getEntries(A,p).next(O=>{P=O,P.forEach((Q,Y)=>{Y.isValidDocument()||(M=M.add(Q))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,P)).next(O=>{m=O;let Q=[];for(let Y of l){let q=bw(Y,m.get(Y.key).overlayedDocument);q!=null&&Q.push(new Tt(Y.key,q,um(q.value.mapValue),mr.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,Q,l)}).next(O=>{x=O;let Q=O.applyToLocalDocumentSet(m,M);return c.documentOverlayCache.saveOverlays(A,O.batchId,Q)})}).then(()=>({batchId:x.batchId,changes:vm(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new de(Z)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(n,i.batchId,t),await zi(n,i.changes),await oa(n.remoteStore)}catch(i){let s=id(i,"Failed to persist write");t.reject(s)}}async function Wm(r,e){let t=W(r);try{let n=await Xw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ka.get(s);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?re(a.Ba):i.removedDocuments.size>0&&(re(a.Ba),a.Ba=!1))}),await zi(t,n,e)}catch(n){await In(n)}}function Np(r,e,t){let n=W(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){let i=[];n.ka.forEach((s,a)=>{let l=a.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){let c=W(a);c.onlineState=l;let h=!1;c.queries.forEach((p,m)=>{for(let x of m.ta)x.sa(l)&&(h=!0)}),h&&sd(c)}(n.eventManager,e),i.length&&n.La.p_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function wE(r,e,t){let n=W(r);n.sharedClientState.updateQueryState(e,"rejected",t);let i=n.Ka.get(e),s=i&&i.key;if(s){let a=new de(H.comparator);a=a.insert(s,Ye.newNoDocument(s,K.min()));let l=J().add(s),c=new So(K.min(),new Map,new de(Z),a,l);await Wm(n,c),n.$a=n.$a.remove(s),n.Ka.delete(e),ad(n)}else await hc(n.localStore,e,!1).then(()=>Nc(n,e,t)).catch(In)}async function EE(r,e){let t=W(r),n=e.batch.batchId;try{let i=await Qw(t.localStore,e);Qm(t,n,null),Km(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await zi(t,i)}catch(i){await In(i)}}async function IE(r,e,t){let n=W(r);try{let i=await function(a,l){let c=W(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(re(m!==null),p=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(n.localStore,e);Qm(n,e,t),Km(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await zi(n,i)}catch(i){await In(i)}}function Km(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function Qm(r,e,t){let n=W(r),i=n.Wa[n.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Wa[n.currentUser.toKey()]=i}}function Nc(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(let n of r.qa.get(e))r.ka.delete(n),t&&r.La.Ja(n,t);r.qa.delete(e),r.isPrimaryClient&&r.Ua.Sr(e).forEach(n=>{r.Ua.containsKey(n)||Xm(r,n)})}function Xm(r,e){r.Qa.delete(e.path.canonicalString());let t=r.$a.get(e);t!==null&&(ed(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ka.delete(t),ad(r))}function Op(r,e,t){for(let n of t)n instanceof jo?(r.Ua.addReference(n.key,e),bE(r,n)):n instanceof zo?(L(od,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,e),r.Ua.containsKey(n.key)||Xm(r,n.key)):G()}function bE(r,e){let t=e.key,n=t.path.canonicalString();r.$a.get(t)||r.Qa.has(n)||(L(od,"New document in limbo: "+t),r.Qa.add(n),ad(r))}function ad(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){let e=r.Qa.values().next().value;r.Qa.delete(e);let t=new H(ce.fromString(e)),n=r.za.next();r.Ka.set(n,new Pc(t)),r.$a=r.$a.insert(t,n),Fm(r.remoteStore,new Mi(st(Xc(t.path)),n,"TargetPurposeLimboResolution",an.ae))}}async function zi(r,e,t){let n=W(r),i=[],s=[],a=[];n.ka.isEmpty()||(n.ka.forEach((l,c)=>{a.push(n.Ha(c,e,t).then(h=>{var p;if((h||t)&&n.isPrimaryClient){let m=h?!h.fromCache:(p=t?.targetChanges.get(c.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);let m=lc.Yi(c.targetId,h);s.push(m)}}))}),await Promise.all(a),n.La.p_(i),await async function(c,h){let p=W(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>k.forEach(h,x=>k.forEach(x.Hi,A=>p.persistence.referenceDelegate.addReference(m,x.targetId,A)).next(()=>k.forEach(x.Ji,A=>p.persistence.referenceDelegate.removeReference(m,x.targetId,A)))))}catch(m){if(!bn(m))throw m;L(Zc,"Failed to update sequence numbers: "+m)}for(let m of h){let x=m.targetId;if(!m.fromCache){let A=p.Ts.get(x),P=A.snapshotVersion,M=A.withLastLimboFreeSnapshotVersion(P);p.Ts=p.Ts.insert(x,M)}}}(n.localStore,s))}async function TE(r,e){let t=W(r);if(!t.currentUser.isEqual(e)){L(od,"User change. New user:",e.toKey());let n=await Lm(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(l=>{l.forEach(c=>{c.reject(new $(C.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await zi(t,n.Rs)}}function AE(r,e){let t=W(r),n=t.Ka.get(e);if(n&&n.Ba)return J().add(n.key);{let i=J(),s=t.qa.get(e);if(!s)return i;for(let a of s){let l=t.ka.get(a);i=i.unionWith(l.view.ba)}return i}}function Ym(r){let e=W(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wE.bind(null,e),e.La.p_=fE.bind(null,e.eventManager),e.La.Ja=pE.bind(null,e.eventManager),e}function SE(r){let e=W(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IE.bind(null,e),e}var _n=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Kw(this.persistence,new cc,e.initialUser,this.serializer)}Xa(e){return new No(ac.ri,this.serializer)}Za(e){return new fc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};_n.provider={build:()=>new _n};var Oc=class extends _n{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){re(this.persistence.referenceDelegate instanceof Oo);let n=this.persistence.referenceDelegate.garbageCollector;return new Ku(n,e.asyncQueue,t)}Xa(e){let t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new No(n=>Oo.ri(n,t),this.serializer)}};var Fi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Np(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=TE.bind(null,this.syncEngine),await hE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Sc}()}createDatastore(e){let t=ia(e.databaseInfo.databaseId),n=function(s){return new vc(s)}(e.databaseInfo);return function(s,a,l,c){return new Ec(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,l){return new bc(n,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Np(this.syncEngine,t,0),function(){return Lo.D()?new Lo:new pc}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,p){let m=new Dc(i,s,a,l,c,h);return p&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=W(i);L(wr,"RemoteStore shutting down."),s.W_.add(5),await ji(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Fi.provider={build:()=>new Fi};var Ho=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var qt="FirestoreClient",Mc=class{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=_o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{L(qt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(L(qt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=id(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}};async function lu(r,e){r.asyncQueue.verifyOperationInProgress(),L(qt,"Initializing OfflineComponentProvider");let t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Lm(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Mp(r,e){r.asyncQueue.verifyOperationInProgress();let t=await CE(r);L(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Rp(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Rp(e.remoteStore,i)),r._onlineComponents=e}async function CE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L(qt,"Using user provided OfflineComponentProvider");try{await lu(r,r._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await lu(r,new _n)}}else L(qt,"Using default OfflineComponentProvider"),await lu(r,new Oc(void 0));return r._offlineComponents}async function Jm(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L(qt,"Using user provided OnlineComponentProvider"),await Mp(r,r._uninitializedComponentsProvider._online)):(L(qt,"Using default OnlineComponentProvider"),await Mp(r,new Fi))),r._onlineComponents}function kE(r){return Jm(r).then(e=>e.syncEngine)}async function Zm(r){let e=await Jm(r),t=e.eventManager;return t.onListen=mE.bind(null,e.syncEngine),t.onUnlisten=vE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_E.bind(null,e.syncEngine),t}function RE(r,e,t={}){let n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){let p=new Ho({next:x=>{p.su(),a.enqueueAndForget(()=>Hm(s,m));let A=x.docs.has(l);!A&&x.fromCache?h.reject(new $(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&x.fromCache&&c&&c.source==="server"?h.reject(new $(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(x)},error:x=>h.reject(x)}),m=new qo(Xc(l.path),p,{includeMetadataChanges:!0,Ta:!0});return zm(s,m)}(await Zm(r),r.asyncQueue,e,t,n)),n.promise}function PE(r,e,t={}){let n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){let p=new Ho({next:x=>{p.su(),a.enqueueAndForget(()=>Hm(s,m)),x.fromCache&&c.source==="server"?h.reject(new $(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(x)},error:x=>h.reject(x)}),m=new qo(l,p,{includeMetadataChanges:!0,Ta:!0});return zm(s,m)}(await Zm(r),r.asyncQueue,e,t,n)),n.promise}function eg(r){let e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}var Lp=new Map;function tg(r,e,t){if(!t)throw new $(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function DE(r,e,t,n){if(e===!0&&n===!0)throw new $(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vp(r){if(!H.isDocumentKey(r))throw new $(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Fp(r){if(H.isDocumentKey(r))throw new $(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ld(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{let e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":G()}function Er(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new $(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=ld(r);throw new $(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}var rg="firestore.googleapis.com",Up=!0,Go=class{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rg,this.ssl=Up}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Up;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Mm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hw)throw new $(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},xn=class{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uu;switch(n.type){case"firstParty":return new fu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let n=Lp.get(t);n&&(L("ComponentProvider","Removing Datastore"),Lp.delete(t),n.terminate())}(this),Promise.resolve()}};function NE(r,e,t,n={}){var i;let s=(r=Er(r,xn))._getSettings(),a=Object.assign(Object.assign({},s),{emulatorOptions:r._getEmulatorOptions()}),l=`${e}:${t}`;s.host!==rg&&s.host!==l&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let c=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:n});if(!Ze(c,a)&&(r._setSettings(c),n.mockUserToken)){let h,p;if(typeof n.mockUserToken=="string")h=n.mockUserToken,p=ve.MOCK_USER;else{h=Ch(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);let m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new $(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ve(m)}r._authCredentials=new cu(new yo(h,p))}}var Wo=class r{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new r(this.firestore,e,this._query)}},Ue=class r{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new r(this.firestore,e,this._key)}},Ut=class r extends Wo{constructor(e,t,n){super(e,t,Xc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new H(e))}withConverter(e){return new r(this.firestore,e,this._path)}};function ng(r,e,...t){if(r=Ae(r),tg("collection","path",e),r instanceof xn){let n=ce.fromString(e,...t);return Fp(n),new Ut(r,null,n)}{if(!(r instanceof Ue||r instanceof Ut))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=r._path.child(ce.fromString(e,...t));return Fp(n),new Ut(r.firestore,null,n)}}function ud(r,e,...t){if(r=Ae(r),arguments.length===1&&(e=_o.newId()),tg("doc","path",e),r instanceof xn){let n=ce.fromString(e,...t);return Vp(n),new Ue(r,null,new H(n))}{if(!(r instanceof Ue||r instanceof Ut))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=r._path.child(ce.fromString(e,...t));return Vp(n),new Ue(r.firestore,r instanceof Ut?r.converter:null,new H(n))}}var $p="AsyncQueue",Ko=class{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Vo(this,"async_queue_retry"),this.bu=()=>{let n=au();n&&L($p,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.Su=e;let t=au();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=au();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new Xe;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!bn(e))throw e;L($p,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.Su.then(()=>(this.pu=!0,e().catch(n=>{this.gu=n,this.pu=!1;let i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(n);throw xt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.Su=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let i=Tc.createAndSchedule(this,e,t,n,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&G()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(let t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}};var wn=class extends xn{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Ko,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Ko(e),this._firestoreClient=void 0,await e}}};function ig(r,e){let t=typeof r=="object"?r:Cs(),n=typeof r=="string"?r:e||Io,i=oi(t,"firestore").getImmediate({identifier:n});if(!i._initialized){let s=Sh("firestore");s&&NE(i,...s)}return i}function cd(r){if(r._terminated)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OE(r),r._firestoreClient}function OE(r){var e,t,n;let i=r._freezeSettings(),s=function(l,c,h,p){return new yu(l,c,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,eg(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Mc(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(l){let c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(r._componentsProvider))}var Ui=class r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new r(ke.fromBase64String(e))}catch(t){throw new $(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new r(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var $i=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Qo=class{constructor(e){this._methodName=e}};var Bi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}};var qi=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}};var ME=/^__.*__$/,Lc=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new xr(e,this.data,t,this.fieldTransforms)}};function sg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}var Vc=class r{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new r(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.$u(e),i}Ku(e){var t;let n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xo(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(sg(this.Lu)&&ME.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}},Fc=class{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ia(e)}ju(e,t,n,i=!1){return new Vc({Lu:e,methodName:t,zu:n,path:Fe.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function LE(r){let e=r._freezeSettings(),t=ia(r._databaseId);return new Fc(r._databaseId,!!e.ignoreUndefinedProperties,t)}function VE(r,e,t,n,i,s={}){let a=r.ju(s.merge||s.mergeFields?2:0,e,t,i);ug("Data must be an object, but it was:",a,n);let l=ag(n,a),c,h;if(s.merge)c=new nt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let m of s.mergeFields){let x=FE(e,m,t);if(!a.contains(x))throw new $(C.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);$E(p,x)||p.push(x)}c=new nt(p),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new Lc(new Qe(l),c,h)}function og(r,e){if(lg(r=Ae(r)))return ug("Unsupported field value:",e,r),ag(r,e);if(r instanceof Qo)return function(n,i){if(!sg(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);let s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(n,i){let s=[],a=0;for(let l of n){let c=og(l,i.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _w(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){let s=we.fromDate(n);return{timestampValue:Po(i.serializer,s)}}if(n instanceof we){let s=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Po(i.serializer,s)}}if(n instanceof Bi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ui)return{bytesValue:Cm(i.serializer,n._byteString)};if(n instanceof Ue){let s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof qi)return function(a,l){return{mapValue:{fields:{[Hc]:{stringValue:Gc},[ln]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return Yc(l.serializer,h)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${ld(n)}`)}(r,e)}function ag(r,e){let t={};return tm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(r,(n,i)=>{let s=og(i,e.qu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function lg(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof Bi||r instanceof Ui||r instanceof Ue||r instanceof Qo||r instanceof qi)}function ug(r,e,t){if(!lg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let n=ld(t);throw n==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+n)}}function FE(r,e,t){if((e=Ae(e))instanceof $i)return e._internalPath;if(typeof e=="string")return cg(r,e);throw Xo("Field path arguments must be of type string or ",r,!1,void 0,t)}var UE=new RegExp("[~\\*/\\[\\]]");function cg(r,e,t){if(e.search(UE)>=0)throw Xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new $i(...e.split("."))._internalPath}catch{throw Xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Xo(r,e,t,n,i){let s=n&&!n.isEmpty(),a=i!==void 0,l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new $(C.INVALID_ARGUMENT,l+r+c)}function $E(r,e){return r.some(t=>t.isEqual(e))}var Yo=class{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Uc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(dg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Uc=class extends Yo{data(){return super.data()}};function dg(r,e){return typeof e=="string"?cg(r,e):e instanceof $i?e._internalPath:e._delegate._internalPath}function BE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new $(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var $c=class{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return Ir(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;let s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[ln].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new qi(s)}convertGeoPoint(e){return new Bi(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ta(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){let t=wt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=ce.fromString(e);re(Om(n));let i=new bo(n.get(1),n.get(3)),s=new H(n.popFirst(5));return i.isEqual(t)||xt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function qE(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}var pr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Jo=class extends Yo{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new nn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(dg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},nn=class extends Jo{data(e={}){return super.data(e)}},Bc=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new pr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new nn(this._firestore,this._userDataWriter,n.key,n,new pr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{let c=new nn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{let c=new nn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:jE(l.type),doc:c,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function jE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function hg(r){r=Er(r,Ue);let e=Er(r.firestore,wn);return RE(cd(e),r._key).then(t=>HE(e,r,t))}var Zo=class extends $c{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ui(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}};function fg(r){r=Er(r,Wo);let e=Er(r.firestore,wn),t=cd(e),n=new Zo(e);return BE(r._query),PE(t,r._query).then(i=>new Bc(e,n,r,i))}function pg(r,e,t){r=Er(r,Ue);let n=Er(r.firestore,wn),i=qE(r.converter,e,t);return zE(n,[VE(LE(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,mr.none())])}function zE(r,e){return function(n,i){let s=new Xe;return n.asyncQueue.enqueueAndForget(async()=>xE(await kE(n),i,s)),s.promise}(cd(r),e)}function HE(r,e,t){let n=t.docs.get(e._key),i=new Zo(r);return new Jo(r,i,e._key,n,new pr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){En=i})(Vt),Lt(new qe("firestore",(n,{instanceIdentifier:i,options:s})=>{let a=n.getProvider("app").getImmediate(),l=new wn(new du(n.getProvider("auth-internal")),new pu(a,n.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(h.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),We(ep,tp,e),We(ep,tp,"esm2017")})();var GE={apiKey:"AIzaSyAA0F4JZQkF6M8Fu9Wxl-HCta9iGU3TysM",authDomain:"spire-387eb.firebaseapp.com",projectId:"spire-387eb",storageBucket:"spire-387eb.firebasestorage.app",messagingSenderId:"202391557470",appId:"1:202391557470:web:a2a1342bc2c7ab393bebcf"},mg=wl(GE),An=Jl(mg);An.useDeviceLanguage();var WE=new yt,dd=ig(mg);var Hi=class extends Error{constructor(e,t){super(e),this.cause=t,this.name="DbAccessError",t.code==="permission-denied"?(this.type=0,this.uid=An.currentUser?.uid,console.log("Nope!  Your UID is",An.currentUser?.uid)):this.type=1}};async function gg(){try{let r=await Yl(An,WE),t=yt.credentialFromResult(r).accessToken,n=r.user}catch(r){let e=r.code,t=r.message,n=r.customData.email,i=yt.credentialFromError(r);console.error(r.message)}}var yg=Kl.bind(globalThis,An),vg=Wl.bind(globalThis,An);async function _g(){let r=ng(dd,"character_sheets");return(await fg(r)).docs.flatMap(t=>t.get("name")?[{id:t.id,name:t.get("name"),player:t.get("player")}]:[])}async function xg(r,e){try{let t=ud(dd,"character_sheets",r);console.log(t),await pg(t,e)}catch(t){throw t instanceof Ne?new Hi(t.message,t):t}}async function wg(r){try{let e=ud(dd,"character_sheets",r),t=await hg(e);return t.exists()?t.data():null}catch(e){return console.error(e),null}}var aa=globalThis,la=aa.ShadowRoot&&(aa.ShadyCSS===void 0||aa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hd=Symbol(),Eg=new WeakMap,Gi=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==hd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(la&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Eg.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Eg.set(t,e))}return e}toString(){return this.cssText}},Ig=r=>new Gi(typeof r=="string"?r:r+"",void 0,hd),B=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new Gi(t,r,hd)},fd=(r,e)=>{if(la)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=aa.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},ua=la?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ig(t)})(r):r;var{is:KE,defineProperty:QE,getOwnPropertyDescriptor:XE,getOwnPropertyNames:YE,getOwnPropertySymbols:JE,getPrototypeOf:ZE}=Object,ca=globalThis,bg=ca.trustedTypes,eI=bg?bg.emptyScript:"",tI=ca.reactiveElementPolyfillSupport,Wi=(r,e)=>r,Ki={toAttribute(r,e){switch(e){case Boolean:r=r?eI:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},da=(r,e)=>!KE(r,e),Tg={attribute:!0,type:String,converter:Ki,reflect:!1,hasChanged:da};Symbol.metadata??=Symbol("metadata"),ca.litPropertyMetadata??=new WeakMap;var At=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Tg){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&QE(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=XE(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return i?.call(this)},set(a){let l=i?.call(this);s.call(this,a),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tg}static _$Ei(){if(this.hasOwnProperty(Wi("elementProperties")))return;let e=ZE(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wi("properties"))){let t=this.properties,n=[...YE(t),...JE(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(ua(i))}else e!==void 0&&t.push(ua(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fd(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Ki).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ki;this._$Em=i,this[i]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??da)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};At.elementStyles=[],At.shadowRootOptions={mode:"open"},At[Wi("elementProperties")]=new Map,At[Wi("finalized")]=new Map,tI?.({ReactiveElement:At}),(ca.reactiveElementVersions??=[]).push("2.0.4");var md=globalThis,ha=md.trustedTypes,Ag=ha?ha.createPolicy("lit-html",{createHTML:r=>r}):void 0,gd="$lit$",St=`lit$${(Math.random()+"").slice(9)}$`,yd="?"+St,rI=`<${yd}>`,Sr=document,Xi=()=>Sr.createComment(""),Yi=r=>r===null||typeof r!="object"&&typeof r!="function",Dg=Array.isArray,Ng=r=>Dg(r)||typeof r?.[Symbol.iterator]=="function",pd=`[ 	
\f\r]`,Qi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sg=/-->/g,Cg=/>/g,Tr=RegExp(`>|${pd}(?:([^\\s"'>=/]+)(${pd}*=${pd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kg=/'/g,Rg=/"/g,Og=/^(?:script|style|textarea|title)$/i,Mg=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),R=Mg(1),kT=Mg(2),Je=Symbol.for("lit-noChange"),pe=Symbol.for("lit-nothing"),Pg=new WeakMap,Ar=Sr.createTreeWalker(Sr,129);function Lg(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ag!==void 0?Ag.createHTML(e):e}var Vg=(r,e)=>{let t=r.length-1,n=[],i,s=e===2?"<svg>":"",a=Qi;for(let l=0;l<t;l++){let c=r[l],h,p,m=-1,x=0;for(;x<c.length&&(a.lastIndex=x,p=a.exec(c),p!==null);)x=a.lastIndex,a===Qi?p[1]==="!--"?a=Sg:p[1]!==void 0?a=Cg:p[2]!==void 0?(Og.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=Tr):p[3]!==void 0&&(a=Tr):a===Tr?p[0]===">"?(a=i??Qi,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?Tr:p[3]==='"'?Rg:kg):a===Rg||a===kg?a=Tr:a===Sg||a===Cg?a=Qi:(a=Tr,i=void 0);let A=a===Tr&&r[l+1].startsWith("/>")?" ":"";s+=a===Qi?c+rI:m>=0?(n.push(h),c.slice(0,m)+gd+c.slice(m)+St+A):c+St+(m===-2?l:A)}return[Lg(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]},Ji=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,a=0,l=e.length-1,c=this.parts,[h,p]=Vg(e,t);if(this.el=r.createElement(h,n),Ar.currentNode=this.el.content,t===2){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Ar.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let m of i.getAttributeNames())if(m.endsWith(gd)){let x=p[a++],A=i.getAttribute(m).split(St),P=/([.?@])?(.*)/.exec(x);c.push({type:1,index:s,name:P[2],strings:A,ctor:P[1]==="."?pa:P[1]==="?"?ma:P[1]==="@"?ga:kr}),i.removeAttribute(m)}else m.startsWith(St)&&(c.push({type:6,index:s}),i.removeAttribute(m));if(Og.test(i.tagName)){let m=i.textContent.split(St),x=m.length-1;if(x>0){i.textContent=ha?ha.emptyScript:"";for(let A=0;A<x;A++)i.append(m[A],Xi()),Ar.nextNode(),c.push({type:2,index:++s});i.append(m[x],Xi())}}}else if(i.nodeType===8)if(i.data===yd)c.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(St,m+1))!==-1;)c.push({type:7,index:s}),m+=St.length-1}s++}}static createElement(e,t){let n=Sr.createElement("template");return n.innerHTML=e,n}};function Cr(r,e,t=r,n){if(e===Je)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=Yi(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Cr(r,i._$AS(r,e.values),i,n)),e}var fa=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Sr).importNode(t,!0);Ar.currentNode=i;let s=Ar.nextNode(),a=0,l=0,c=n[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Sn(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new ya(s,this,e)),this._$AV.push(h),c=n[++l]}a!==c?.index&&(s=Ar.nextNode(),a++)}return Ar.currentNode=Sr,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Sn=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=pe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Cr(this,e,t),Yi(e)?e===pe||e==null||e===""?(this._$AH!==pe&&this._$AR(),this._$AH=pe):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ng(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==pe&&Yi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Sr.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ji.createElement(Lg(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new fa(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Pg.get(e.strings);return t===void 0&&Pg.set(e.strings,t=new Ji(e)),t}k(e){Dg(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new r(this.S(Xi()),this.S(Xi()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},kr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=pe}_$AI(e,t=this,n,i){let s=this.strings,a=!1;if(s===void 0)e=Cr(this,e,t,0),a=!Yi(e)||e!==this._$AH&&e!==Je,a&&(this._$AH=e);else{let l=e,c,h;for(e=s[0],c=0;c<s.length-1;c++)h=Cr(this,l[n+c],t,c),h===Je&&(h=this._$AH[c]),a||=!Yi(h)||h!==this._$AH[c],h===pe?e=pe:e!==pe&&(e+=(h??"")+s[c+1]),this._$AH[c]=h}a&&!i&&this.j(e)}j(e){e===pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pa=class extends kr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===pe?void 0:e}},ma=class extends kr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==pe)}},ga=class extends kr{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=Cr(this,e,t,0)??pe)===Je)return;let n=this._$AH,i=e===pe&&n!==pe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==pe&&(n===pe||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ya=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Cr(this,e)}},Fg={P:gd,A:St,C:yd,M:1,L:Vg,R:fa,D:Ng,V:Cr,I:Sn,H:kr,N:ma,U:ga,B:pa,F:ya},nI=md.litHtmlPolyfillSupport;nI?.(Ji,Sn),(md.litHtmlVersions??=[]).push("3.1.2");var Ug=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new Sn(e.insertBefore(Xi(),s),s,void 0,t??{})}return i._$AI(r),i};var U=class extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ug(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};U._$litElement$=!0,U.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:U});var iI=globalThis.litElementPolyfillSupport;iI?.({LitElement:U});(globalThis.litElementVersions??=[]).push("4.0.4");var j=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var sI={attribute:!0,type:String,converter:Ki,reflect:!1,hasChanged:da},oI=(r=sI,e,t)=>{let{kind:n,metadata:i}=t,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,r),n==="accessor"){let{name:a}=t;return{set(l){let c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,r)},init(l){return l!==void 0&&this.P(a,void 0,r),l}}}if(n==="setter"){let{name:a}=t;return function(l){let c=this[a];e.call(this,l),this.requestUpdate(a,c,r)}}throw Error("Unsupported decorator location: "+n)};function D(r){return(e,t)=>typeof t=="object"?oI(r,e,t):((n,i,s)=>{let a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,s):void 0})(r,e,t)}function Cn(r){return D({...r,state:!0,attribute:!1})}var Rr=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);function $e(r,e){return(t,n,i)=>{let s=a=>a.renderRoot?.querySelector(r)??null;if(e){let{get:a,set:l}=typeof n=="object"?t:i??(()=>{let c=Symbol();return{get(){return this[c]},set(h){this[c]=h}}})();return Rr(t,n,{get(){let c=a.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return Rr(t,n,{get(){return s(this)}})}}function jt(r,e,t){return r?e(r):t?.(r)}var $g=r=>r??pe;var Bg=(r,e,t=[])=>{let n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t.length&&t.forEach(i=>{let s=Bg(...i);n.appendChild(s)}),n},Zi=([r,e,t])=>Bg(r,e,t);var aI=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),lI=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",uI=r=>r.flatMap(lI).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),cI=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),vd=(r,{nameAttr:e,icons:t,attrs:n})=>{let i=r.getAttribute(e);if(i==null)return;let s=cI(i),a=t[s];if(!a)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);let l=aI(r),[c,h,p]=a,m={...h,"data-lucide":i,...n,...l},x=uI(["lucide",`lucide-${i}`,l,n]);x&&Object.assign(m,{class:x});let A=Zi([c,m,p]);return r.parentNode?.replaceChild(A,r)};var ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var es=["svg",ie,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];var va=["svg",ie,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];var _a=["svg",ie,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];var _d=["svg",ie,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];var xa=["svg",ie,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];var ts=["svg",ie,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];var wa=["svg",ie,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];var ut=["svg",ie,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];var Ea=["svg",ie,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];var Ia=["svg",ie,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];var ba=["svg",ie,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];var kn=["svg",ie,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];var rs=["svg",ie,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];var ns=["svg",ie,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var He=({icons:r={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>vd(i,{nameAttr:e,icons:r,attrs:t})),e==="data-lucide"){let i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>vd(s,{nameAttr:"icon-name",icons:r,attrs:t})))}};var z=B`
  h2 {
    font-family: "IM Fell English", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  paper-tooltip {
    font-style: normal;
  }

  input {
    font-family: var(--body-font-family);
    font-size: 13px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    accent-color: var(--paper-brown-700);
  }

  input:focus {
    background-color: #fafafa;
    border-bottom-color: #888;
  }

  textarea {
    border: none;
    font-family: var(--body-font-family);
    font-size: 13px;
    padding: 8px;
    border-radius: 2px;
  }

  textarea:focus {
    outline: 1px solid #888;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]:hover {
    -moz-appearance: initial;
  }

  select {
    font-family: var(--body-font-family);
    background-color: var(--surface-color);
    border: 1px solid var(--paper-brown-100);
    border-radius: 2px;
  }

  select:hover {
    border-color: var(--paper-brown-300);
  }

  paper-icon-button[active] {
    color: var(--primary-color);
  }

  button {
    --button-color-light: var(--paper-brown-700);
    --button-color-medium: var(--paper-brown-800);
    --button-color-dark: var(--paper-brown-900);
    --button-text-color: #ffffff;
    --button-text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.7);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      to bottom,
      var(--button-color-light) 5%,
      var(--button-color-medium) 100%
    );
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    display: inline-block;
    cursor: pointer;
    color: var(--button-text-color);
    text-shadow: var(--button-text-shadow);
    font-family: var(--body-font-family);
    font-size: 16px;
    padding: 4px 16px;
  }
  button:hover {
    background: linear-gradient(
      to bottom,
      var(--button-color-medium) 5%,
      var(--button-color-dark) 100%
    );
  }
  button:active {
    background: linear-gradient(
      to bottom,
      var(--button-color-dark) 5%,
      var(--button-color-medium) 100%
    );
  }
  button:focus {
    outline: none;
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 1px 1px var(--primary-color);
  }
  button:disabled {
    background: linear-gradient(
      to bottom,
      var(--button-color-light) 5%,
      var(--button-color-medium) 100%
    );
    opacity: 0.5;
  }
  button.buy-button {
    padding: 0;
    width: 18px;
    height: 18px;
    font-size: 80%;

    --button-color-light: var(--paper-yellow-100);
    --button-color-medium: var(--paper-yellow-200);
    --button-color-dark: var(--paper-yellow-300);
    --button-text-color: #000;
    --button-text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.7);

    --iron-icon-height: 12px;
    --iron-icon-width: 12px;
  }

  @media print {
    button.buy-button {
      display: none;
    }
  }
`;function Ta(r,e,t=!1){if(r==null||e==null||r<=0||!t&&e<=0)return"";let n=r+e,i=n%3===2?10:n%3===1?8:6;return`${Math.trunc(n/3)}d6+d${i}`}function Oe(r){let e=Number.parseInt(r,10);return isNaN(e)?0:e??0}function Be(r){return r===void 0||isNaN(r)?"":Math.round(r).toString()}var Aa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Sa=r=>(...e)=>({_$litDirective$:r,values:e}),Rn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var qg=Sa(class extends Rn{constructor(r){if(super(r),r.type!==Aa.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=r.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let i=!!e[n];i===this.st.has(n)||this.nt?.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Je}});var zt=class extends U{constructor(){super(...arguments);this.size=24;this.strokeWidth=2}render(){this.style.setProperty("--icon-width",`${this.size}px`),this.style.setProperty("--icon-height",`${this.size}px`);let t=Zi(this.icon);return t.setAttribute("stroke-width",this.strokeWidth.toString()),R`${t}`}};zt.styles=[B`
      :host {
        --icon-width: 24px;
        --icon-height: 24px;
        display: block;
        width: var(--icon-width);
        height: var(--icon-height);
      }
      :host > * {
        width: var(--icon-width);
        height: var(--icon-height);
      }
    `],S([D({type:Array})],zt.prototype,"icon",2),S([D({type:Number})],zt.prototype,"size",2),S([D({type:Number})],zt.prototype,"strokeWidth",2),zt=S([j("lucide-icon")],zt);He({icons:{Plus:ut}});var Ct=class extends U{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return R`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        title=${this.canAffordRank?`Buy a rank of this skill for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this skill (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${ut} .size=${16}></lucide-icon>
      </button>
      <input
        type="text"
        id="skill-name"
        class="${qg({ghosted:(this.model.rank??0)==0})}"
        .value=${this.model.name}
        @change=${this.onNameFieldChanged}
      />
      <input
        type="number"
        id="rank"
        min="0"
        ?readonly=${this.locked}
        .value=${Be(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="die-code">
        ${Ta(this.attributeModel.rank,this.model.rank)}
      </div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${Be(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}connectedCallback(){super.connectedCallback()}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(t){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{name:t.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(t){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(t){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{xp:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(t){let n=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),n>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-n}},bubbles:!0,composed:!0,cancelable:!1}))}};Ct.styles=[z,B`
      :host {
        display: flex;
        align-items: baseline;
      }

      :host > * {
        margin: 0 2px;
      }

      :host > :first-child {
        margin-left: 0;
      }

      :host > :last-child {
        margin-right: 0;
      }

      #skill-name {
        flex: 1;
        flex-basis: 0;
        width: 0;
      }

      input[type="number"] {
        width: 24px;
        flex: none;
      }

      #die-code {
        font-size: 13px;
        width: 40px;
        flex: none;
      }

      #xp {
        margin-right: 0;
      }

      .ghosted {
        opacity: 0.5;
      }
    `],S([D({type:Object})],Ct.prototype,"model",2),S([D({type:Object})],Ct.prototype,"attributeModel",2),S([D({type:Number})],Ct.prototype,"generalXp",2),S([D({type:Boolean})],Ct.prototype,"locked",2),Ct=S([j("skill-view")],Ct);He({icons:{Plus:ut}});var kt=class extends U{constructor(){super(...arguments);this.generalXp=0;this.showHeader=!1;this.locked=!0}render(){return R`
      ${this.showHeader?this.renderHeader():R``}
      <section>
        <div id="attribute">
          <button
            id="buy-button"
            class="buy-button"
            title=${this.canAffordRank?`Buy a rank of this attribute for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this attribute (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
            ?disabled=${!this.canAffordRank}
            @click=${this.onBuyRankButtonClicked}
          >
            <lucide-icon .icon=${ut} .size=${16}></lucide-icon>
          </button>
          <div id="name">${this.model.name}</div>
          <input
            type="number"
            id="rank"
            min="1"
            ?readonly=${this.locked}
            .value=${Be(this.model.rank)}
            @change=${this.onRankChanged}
          />
          <div id="die-code">${Ta(this.model.rank,0,!0)}</div>
          <input
            type="number"
            id="xp"
            min="0"
            .value=${Be(this.model.xp)}
            @change=${this.onXpFieldChanged}
          />
        </div>
        ${this.model.skills.map(t=>R`<skill-view
              .model=${t}
              .attributeModel=${this.model}
              .generalXp=${this.generalXp}
              .locked=${this.locked}
            ></skill-view>`)}
        ${this.locked?R``:this.renderEditUi()}
      </section>
    `}renderHeader(){return R`
      <header>
        <div class="text-column"></div>
        <div class="numeric-column">Rank</div>
        <div class="die-code-column">Dice</div>
        <div class="numeric-column">XP</div>
      </header>
    `}renderEditUi(){return R`<button @click=${this.onAddButtonClicked}>Add skill</button>`}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return((this.model.rank??0)+1)*5}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onRankChanged(t){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(t){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{xp:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(t){let n=((this.model.rank??0)+1)*5,i=Math.max(0,n-(this.model.xp??0));this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-n)}},bubbles:!0,composed:!0,cancelable:!1})),i>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-i}},bubbles:!0,composed:!0,cancelable:!1}))}onAddButtonClicked(t){this.dispatchEvent(new CustomEvent("add-skill-row",{detail:{id:this.model.id},bubbles:!0,composed:!0,cancelable:!1}))}};kt.styles=[z,B`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-basis: 0;
        margin-bottom: 8px;
      }

      header {
        display: flex;
        padding-right: 6px;
        padding-top: 4px;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: var(--header-color);
      }

      section {
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-basis: 0;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
      }

      #attribute {
        display: flex;
        align-items: baseline;
      }

      header > * {
        text-align: center;
      }

      header > *,
      #attribute > * {
        margin: 0 2px;
      }

      #attribute > :first-child {
        margin-left: 0;
      }

      #attribute > :last-child {
        margin-right: 0;
      }

      .text-column,
      #name {
        font-weight: var(--header-font-weight);
        flex: 1;
        flex-basis: 0;
      }

      .numeric-column,
      input[type="number"] {
        width: 24px;
        flex: none;
      }

      .die-code-column,
      #die-code {
        width: 40px;
        flex: none;
      }

      #die-code {
        font-size: 13px;
      }
    `],S([D({type:Object})],kt.prototype,"model",2),S([D({type:Number})],kt.prototype,"generalXp",2),S([D({type:Boolean})],kt.prototype,"showHeader",2),S([D({type:Boolean})],kt.prototype,"locked",2),kt=S([j("attribute-view")],kt);var Ht=class extends U{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",t=>this.recalculateColumns())}render(){return R`
      <h2>Attributes</h2>
      ${this.renderAttributes()}
    `}renderAttributes(){let t=[];return this.model.attributes.forEach((n,i)=>{let s=R`<attribute-view
        .model=${n}
        .generalXp=${this.model.xp}
        .showHeader=${i<this.columnCount}
        .locked=${this.locked}
      ></attribute-view>`;i%this.columnCount===0?t.push([s]):t[t.length-1].push(s)}),t.map(n=>R`<div class="attribute-group">${n}</div>`)}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}};Ht.styles=[z,B`
      :host {
        position: relative;
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      .attribute-group {
        display: flex;
        flex: 1 1 0;
      }

      .attribute-group > :not(:last-child) {
        margin-right: 8px;
      }
    `],S([D({type:Object})],Ht.prototype,"model",2),S([D({type:Number})],Ht.prototype,"columnCount",2),S([D({type:Boolean})],Ht.prototype,"locked",2),Ht=S([j("attributes-view")],Ht);var Pn=class extends U{render(){return R`
      <h2>Description</h2>
      <section>
        <textarea
          .value=${this.model.description||""}
          @change=${this.onDescriptionChanged}
        ></textarea>
      </section>
    `}onDescriptionChanged(e){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{description:e.target.value}},bubbles:!0,composed:!0}))}};Pn.styles=[z,B`
      :host {
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        gap: 4px 12px;
      }

      textarea {
        flex: 1;
        min-height: 100px;
        box-shadow: inset 0 0 12px var(--paper-yellow-100);
      }
    `],S([D({type:Object})],Pn.prototype,"model",2),Pn=S([j("character-description-view")],Pn);var Dn=class extends U{render(){return R`
      <h2>Character Info</h2>
      <section>
        <label
          ><span>Name</span>
          <input
            type="text"
            .value=${this.model.name||""}
            @change=${this.fieldChangeHandler("name")}
          />
        </label>
        <label
          ><span>Archetype</span>
          <input
            type="text"
            .value=${this.model.archetype||""}
            @change=${this.fieldChangeHandler("archetype")}
          />
        </label>
        <label
          ><span>Player Name</span>
          <input
            type="text"
            .value=${this.model.player||""}
            @change=${this.fieldChangeHandler("player")}
          />
        </label>
        <label
          ><span>Age</span>
          <input
            type="text"
            .value=${this.model.age||""}
            @change=${this.fieldChangeHandler("age")}
          />
        </label>
        <label
          ><span>Sex/Gender</span>
          <input
            type="text"
            .value=${this.model.gender||""}
            @change=${this.fieldChangeHandler("gender")}
          />
        </label>
        <label
          ><span>Presentation</span>
          <input
            type="text"
            .value=${this.model.presentation||""}
            @change=${this.fieldChangeHandler("presentation")}
          />
        </label>
        <label
          ><span>Prime Values</span>
          <input
            type="text"
            .value=${this.model.primeValue||""}
            @change=${this.fieldChangeHandler("primeValue")}
          />
        </label>
        <label
          ><span>Prime Fears</span>
          <input
            type="text"
            .value=${this.model.primeFear||""}
            @change=${this.fieldChangeHandler("primeFear")}
          />
        </label>
        <label
          ><span>Traits</span>
          <input
            type="text"
            .value=${this.model.traits||""}
            @change=${this.fieldChangeHandler("traits")}
          />
        </label>
      </section>
    `}fieldChangeHandler(e){return t=>{this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{[e]:t.target.value}},bubbles:!0,composed:!0}))}}};Dn.styles=[z,B`
      :host {
        position: relative;
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      label {
        flex: 1;
        display: flex;
        align-items: baseline;
        justify-content: baseline;
        min-width: calc(33.3% - 12px);
        box-sizing: border-box;
        font-size: 13px;
      }

      label > span {
        flex: none;
        white-space: nowrap;
        margin-right: 8px;
      }

      label > input {
        flex: 1;
      }

      @media screen and (max-width: 650px) {
        label {
          min-width: calc(50% - 12px);
        }
      }

      @media screen and (max-width: 500px) {
        label {
          min-width: calc(100% - 12px);
        }
      }
    `],S([D({type:Object})],Dn.prototype,"model",2),Dn=S([j("character-info-view")],Dn);var Nn=class extends U{render(){return R`
      <input
        type="text"
        class="name"
        .value=${this.model.name}
        @change=${this.onNameChanged}
      /><input
        type="text"
        class="relationship"
        .value=${this.model.relationship}
        @change=${this.onRelationshipChanged}
      />
    `}onNameChanged(e){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRelationshipChanged(e){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{relationship:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}};Nn.styles=[z,B`
      :host {
        display: flex;
        align-items: baseline;
        justify-content: baseline;
        box-sizing: border-box;
        font-size: 13px;
        gap: 0 4px;
      }

      .name {
        min-width: 32px;
        flex: 1;
      }

      .relationship {
        min-width: 64px;
        flex: 2;
      }
    `],S([D({type:Object})],Nn.prototype,"model",2),Nn=S([j("connection-view")],Nn);var Pr=class extends U{constructor(){super(...arguments);this.locked=!0}render(){return R`
      <h2>Connections & Bonds</h2>
      <section>
        ${this.model.connections.map(t=>R`<connection-view .model=${t}></connection-view>`)}
        ${this.locked?R``:this.renderAddUi()}
      </section>
    `}renderAddUi(){return R`
      <div id="add-ui">
        <button @click=${this.onAddButtonClicked}>Add row</button>
      </div>
    `}onAddButtonClicked(t){this.dispatchEvent(new CustomEvent("add-connection-row",{detail:{},bubbles:!0,composed:!0}))}};Pr.styles=[z,B`
      :host {
        position: relative;
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      connection-view {
        flex: 1;
        min-width: calc(33.3% - 12px);
      }

      #add-ui {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      #add-ui > button {
        flex: 1;
        max-width: 33.33%;
      }

      @media screen and (max-width: 650px) {
        connection-view {
          min-width: calc(50% - 12px);
        }
        #add-ui > button {
          max-width: 50%;
        }
      }

      @media screen and (max-width: 500px) {
        connection-view {
          min-width: calc(100% - 12px);
        }
        #add-ui > button {
          max-width: 100%;
        }
      }
    `],S([D({type:Object})],Pr.prototype,"model",2),S([D({type:Boolean})],Pr.prototype,"locked",2),Pr=S([j("connections-view")],Pr);var Gt=class extends U{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return R`
      ${this.showHeader?this.renderHeader():R``}
      <div id="content">
        <input
          type="text"
          id="equipment-name"
          .value=${this.model.name}
          @change=${this.onNameChanged}
        />
        <input
          type="text"
          id="bonus"
          .value=${this.model.bonus}
          @change=${this.onBonusChanged}
        />
      </div>
    `}renderHeader(){return R`
      <header>
        <span id="name-header">Equipment</span>
        <span id="bonus-header">Bonus</span>
      </header>
    `}onNameChanged(t){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{name:t.target.value}},bubbles:!0,composed:!0}))}onBonusChanged(t){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{bonus:t.target.value}},bubbles:!0,composed:!0}))}};Gt.styles=[z,B`
      :host {
        display: block;
      }

      header {
        display: flex;
        padding: 2px 4px;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-radius: 4px;
        background-color: var(--header-color);
      }

      header > *,
      #content > * {
        margin-right: 12px;
      }

      header > :last-of-type,
      #content > :last-of-type {
        margin-right: 0;
      }

      #content {
        display: flex;
      }

      #name-header,
      #equipment-name {
        flex: 3 0 0;
      }
      #bonus-header,
      #bonus {
        flex: 1;
        min-width: 0;
      }
    `],S([D({type:Object})],Gt.prototype,"model",2),S([D({type:Boolean})],Gt.prototype,"showHeader",2),S([D({type:Boolean})],Gt.prototype,"locked",2),Gt=S([j("equipment-view")],Gt);var On=class extends U{render(){return R`
      <div id="label">General XP</div>
      <input
        type="number"
        .value=${Be(this.model.xp)}
        @change=${this.onXPChanged}
      />
    `}onXPChanged(e){let t=Oe(e.target.value);isNaN(t)&&(t=0),this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:t}},bubbles:!0,composed:!0}))}};On.styles=[z,B`
      :host {
        display: flex;
        padding: 4px;
        margin: 8px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      #label {
        font-weight: var(--header-font-weight);
        text-align: center;
        white-space: nowrap;
      }

      input {
        flex: 1;
      }
    `],S([D({type:Object})],On.prototype,"model",2),On=S([j("general-xp-view")],On);var Dr=class extends U{constructor(){super(...arguments);this.on=!1;this.disabled=!1}connectedCallback(){super.connectedCallback(),this.role="button"}render(){return R`
      ${jt(this.on,()=>R`<slot name="on" @slotchange=${this.preventFocus}></slot>`,()=>R`<slot @slotchange=${this.preventFocus}></slot>`)}
    `}preventFocus(t){let n=t.target;for(let i of n.assignedElements())i.setAttribute("tabindex","-1")}};Dr.styles=[z,B`
      :host {
        cursor: pointer;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid transparent;
        color: var(--paper-brown-800);
        margin: 0;
      }
      :host([disabled]) {
        opacity: 0.55;
        pointer-events: none;
      }
      ::slotted(*) {
        pointer-events: none;
        user-select: none;
        background: none;
        box-shadow: none;
        border-radius: 50%;
        border: 1px solid transparent;
        color: var(--paper-brown-800);
        padding: 8px;
        margin: 0;
      }
      :host(:hover) {
        background: none;
        border-color: var(--paper-brown-100);
        box-shadow: inset 0 0 8px #e0dcbf;
      }
      :host(:active) {
        background: none;
        box-shadow: inset 0 0 8px #b8b59d;
      }
      :host(:focus) {
        background: none;
        border-color: #888;
        border-radius: 50%;
        box-shadow: inset 0 0 8px #e0dcbf;
      }
    `],S([D({type:Boolean})],Dr.prototype,"on",2),S([D({type:Boolean})],Dr.prototype,"disabled",2),Dr=S([j("icon-button")],Dr);var Wt=class extends U{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return R`
      ${this.showHeader?this.renderHeader():R``}
      <div id="content">
        <input
          type="text"
          id="item-name"
          .value=${this.model.name||""}
          @change=${this.onNameChanged}
        />
        <input
          type="number"
          id="quantity"
          .value=${Be(this.model.quantity)}
          @change=${this.onQuantityChanged}
        />
      </div>
    `}renderHeader(){return R`
      <header>
        <span id="name-header">Items</span>
        <span id="quantity-header">Quantity</span>
      </header>
    `}onNameChanged(t){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{name:t.target.value}},bubbles:!0,composed:!0}))}onQuantityChanged(t){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{quantity:Number.parseFloat(t.target.value)}},bubbles:!0,composed:!0}))}};Wt.styles=[z,B`
      :host {
        display: block;
      }

      header {
        display: flex;
        padding: 2px 4px;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-radius: 4px;
        background-color: var(--header-color);
      }

      header > *,
      #content > * {
        margin-right: 12px;
      }

      header > :last-of-type,
      #content > :last-of-type {
        margin-right: 0;
      }

      #content {
        display: flex;
      }

      #name-header,
      #item-name {
        flex: 3 0 0;
      }
      #quantity-header,
      #quantity {
        flex: 1;
        min-width: 0;
      }
    `],S([D({type:Object})],Wt.prototype,"model",2),S([D({type:Boolean})],Wt.prototype,"showHeader",2),S([D({type:Boolean})],Wt.prototype,"locked",2),Wt=S([j("item-view")],Wt);var Nr=class extends U{constructor(){super(...arguments);this.locked=!0}render(){return R`
      <h2>Equipment & Items</h2>
      <section>
        <div id="equipment">
          ${this.model.inventory.equipment.map((t,n)=>R`<equipment-view
                .model=${t}
                .showHeader=${n===0}
                .locked=${this.locked}
              ></equipment-view>`)}
          ${this.locked?R``:R`<button @click=${this.onAddEquipmentButtonClicked}>
                Add row
              </button>`}
        </div>
        <div id="items">
          ${this.model.inventory.items.map((t,n)=>R`<item-view
                .model=${t}
                .showHeader=${n===0}
                .locked=${this.locked}
              ></item-view>`)}
          ${this.locked?R``:R`<button @click=${this.onAddItemButtonClicked}>
                Add row
              </button>`}
        </div>
      </section>
    `}onAddEquipmentButtonClicked(t){this.dispatchEvent(new CustomEvent("add-equipment-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}onAddItemButtonClicked(t){this.dispatchEvent(new CustomEvent("add-item-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}};Nr.styles=[z,B`
      :host {
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 4px;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      #equipment,
      #items {
        flex: 1;
      }

      button {
        width: 100%;
      }

      @media screen and (max-width: 500px) {
        section {
          flex-direction: column;
        }
      }
    `],S([D({type:Object})],Nr.prototype,"model",2),S([D({type:Boolean})],Nr.prototype,"locked",2),Nr=S([j("inventory-view")],Nr);var Mn=class extends U{render(){return R`
      <h2>Notes</h2>
      <section>
        <textarea
          .value=${this.model.notes||""}
          @change=${this.onNotesChanged}
        ></textarea>
      </section>
    `}onNotesChanged(e){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{notes:e.target.value}},bubbles:!0,composed:!0}))}};Mn.styles=[z,B`
      :host {
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      textarea {
        flex: 1;
        min-height: 100px;
      }
    `],S([D({type:Object})],Mn.prototype,"model",2),Mn=S([j("notes-view")],Mn);function xd(r,e){let t=1-Math.random(),n=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)*e+r}function wd(r){return r[Math.floor(Math.random()*r.length)]}function is(r){let e=Object.values(r);return wd(e)}function jg(r){let e=Array.from(r.values()).reduce((i,s)=>i+s,0),t=Math.random()*e,n=0;for(let i of r.keys())if(n+=r.get(i),t<n)return i;return Array.from(r.keys())[0]}var Or=class extends U{render(){return R`<dialog @close=${this._generateNPC}>
      <h2>NPC Configuration</h2>
      <div class="content">
        <div class="row">
          <span>Average attribute rank:</span>
          <input id="rank" type="number" max="99" value="5" />
        </div>
        <div class="row">
          <span>Focused domain:</span>
          <select id="focused-domain">
            <option value=${0}>Physical</option>
            <option value=${1}>Social</option>
            <option value=${2}>Mental</option>
          </select>
        </div>
        <div class="row">
          <span>Focused aspect:</span>
          <select id="focused-aspect">
            <option value=${0}>Power</option>
            <option value=${1}>Finesse</option>
            <option value=${2}>Sense</option>
          </select>
        </div>
        <div class="row">
          <span>MinMax factor:</span>
          <div class="slider">
            <span>0</span>
            <input
              id="min-max-factor"
              type="range"
              min="0.0"
              max="1.0"
              value="0.5"
              step="0.05"
            />
            <span>Péťa</span>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click=${()=>this._dialog?.close("cancel")}>Cancel</button>
        <button @click=${()=>this._dialog?.close("confirm")}>Generate</button>
      </div>
    </dialog>`}configure(){this._dialog.showModal()}_generateRandomName(){return"Pirate Steve"}_generateRandomAge(){return Math.round(xd(35,10)).toString()}_pickRandomArchetype(){return wd(["Swashbuckler","Scoundrel","Navigator","Dispossessed","Chronicler","Bruiser","Aristocrat","Alchemist","Administrator"])}_pickRandomGender(){return jg(new Map(Object.entries({female:1,male:1,AFAB:.2,AMAB:.2,intersex:.1})))}_pickRandomPresentation(){return""}_pickRandomPrimeValue(){return""}_pickRandomPrimeFear(){return""}_pickRandomTraits(){return""}_generateAttributes(e,t){let n;(q=>(q[q.STRENGTH=0]="STRENGTH",q[q.DEXTERITY=1]="DEXTERITY",q[q.PERCEPTION=2]="PERCEPTION",q[q.PRESENCE=3]="PRESENCE",q[q.GRACE=4]="GRACE",q[q.INTUITION=5]="INTUITION",q[q.WILL=6]="WILL",q[q.WITS=7]="WITS",q[q.AWARENESS=8]="AWARENESS"))(n||={});let i=e.averageRank*9,s=Array(9).fill(0).map(()=>xd(1,.2)),a=s.reduce((p,m)=>p+m,0),l=s.map(p=>Math.round(p/a*i)),c=p=>p>=e.focusedDomain*3&&p<(e.focusedDomain+1)*3,h=p=>p%3==e.focusedAspect;for(let p=0;p<Math.round(i/4*e.minMaxFactor);++p){let m;do m=is(n);while(!c(m));let x;do x=is(n);while(c(x)||l[x]<=1);--l[x],++l[m];do m=is(n);while(!h(m));do x=is(n);while(h(x)||l[x]<=1);--l[x],++l[m]}return t.map((p,m)=>({...p,rank:l[m]}))}_generateNPC(){if(this._dialog?.returnValue!="confirm")return;let e={averageAttributeRank:Oe((this.shadowRoot?.querySelector("#rank")).value),focusedDomain:Oe((this.shadowRoot?.querySelector("#focused-domain")).value),focusedAspect:Oe((this.shadowRoot?.querySelector("#focused-aspect")).value),minMaxFactor:parseFloat((this.shadowRoot?.querySelector("#min-max-factor")).value),hasTraits:!1};this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{name:this._generateRandomName(),age:this._generateRandomAge(),player:"NPC",archetype:this._pickRandomArchetype(),gender:this._pickRandomGender(),presentation:this._pickRandomPresentation(),primeValue:this._pickRandomPrimeValue(),primeFear:this._pickRandomPrimeFear(),traits:e.hasTraits?this._pickRandomTraits():"",attributes:this._generateAttributes({averageRank:e.averageAttributeRank,minMaxFactor:e.minMaxFactor,focusedDomain:e.focusedDomain,focusedAspect:e.focusedAspect},this.model.attributes)}},bubbles:!0,composed:!0,cancelable:!1}))}};Or.styles=[z,B`
      h2 {
        margin: 0 0 16px;
      }
      div {
        font-family: var(--body-font-family);
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row {
        display: flex;
        gap: 16px;
      }
      .row > span {
        flex: 1;
      }
      .row > :last-child {
        width: 180px;
      }
      .slider {
        display: flex;
        gap: 4px;
      }
      .buttons {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      dialog {
        border: none;
        box-shadow: inset 0 0 49px #e0dcbf, 0 6px 8px rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
    `],S([D({type:Object})],Or.prototype,"model",2),S([$e("dialog")],Or.prototype,"_dialog",2),Or=S([j("npc-generator")],Or);var Mr=class extends U{render(){return R`<dialog>
      <h2>Cloud access is not set up</h2>
      <div class="content">
        <div>Oops, your account isn't set up to access character sheets yet.</div>
        <div>This is currently a manual process because Brian doesn&rsquo;t want to make a whole big deal out of it.</div>
        <div>Please copy this magic token and send it to Brian on Discord so he can add you.</div>
        <div class="magic">${this.uid}</div>
      </div>
      <div class="buttons">
        <button @click=${()=>this._dialog?.close("cancel")}>OK</button>
      </div>
    </dialog>`}show(){this._dialog.showModal()}};Mr.styles=[z,B`
      h2 {
        margin: 0 0 16px;
      }
      div {
        font-family: var(--body-font-family);
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .magic {
        text-align: center;
        font-size: 150%;
        padding: 1em 0;
      }
      .buttons {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      dialog {
        border: none;
        box-shadow: inset 0 0 49px #e0dcbf, 0 6px 8px rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
    `],S([D({type:String})],Mr.prototype,"uid",2),S([$e("dialog")],Mr.prototype,"_dialog",2),Mr=S([j("cloud-access-error-dialog")],Mr);He({icons:[kn]});var Ln=class extends U{constructor(){super(...arguments);this.size=32}render(){return R`<lucide-icon
      .size=${this.size}
      .icon=${kn}
    ></lucide-icon>`}};Ln.styles=[z,B`
      @keyframes spin {
        0% {
          transform: rotate(-120deg);
        }
        100% {
          transform: rotate(120deg);
        }
      }

      lucide-icon {
        color: var(--paper-brown-800);
        animation: spin 2s ease-in-out infinite alternate;
      }
    `],S([D({type:Number})],Ln.prototype,"size",2),Ln=S([j("loading-spinner")],Ln);He({icons:[es]});var Kt=class extends U{constructor(){super(...arguments);this.loading=!1}render(){return R`
      <h2>Portrait</h2>
      <input
        id="file-picker"
        type="file"
        hidden
        @change=${this.onPortraitPicked}
      />
      <section>
        ${jt(this.model.portraitUrl,()=>R`<div
              id="image"
              style="background-image: url('${this.model.portraitUrl}'); background-color: ${this.model.portraitBg}"
              @click=${this.choosePortrait}
            >
              <icon-button
                title="Replace portrait"
                @click=${this.choosePortrait}
              >
                <lucide-icon size="32" .icon=${es}></lucide-icon>
              </icon-button>
            </div>`,()=>R`<div id="placeholder" @click=${this.choosePortrait}>
            ${jt(this.loading,()=>R`<loading-spinner></loading-spinner>`,()=>R`<icon-button
                title="Add portrait"
                @click=${this.choosePortrait}
              >
                <lucide-icon size="32" .icon=${es}></lucide-icon>
              </icon-button>`)}
          </div>`)}
      </section>
    `}choosePortrait(t){this.filePicker?.click(),t.stopPropagation()}onPortraitPicked(t){let n=this.filePicker?.files?.[0];if(!n)return;this.loading=!0;let i=new FileReader;i.onload=s=>{let a=s.target.result,l=new Image;l.src=a,l.onload=c=>{let h=document.createElement("canvas"),p=Math.min(1,650/l.width);h.width=l.width*p,h.height=l.height*p;let m=h.getContext("2d",{willReadFrequently:!0});m?.scale(p,p),m?.drawImage(l,0,0);let x=m?.getImageData(0,0,1,1).data,A=x?`#${(x[0]<<16|x[1]<<8|x[2]).toString(16)}`:"";this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{portraitUrl:h.toDataURL("image/jpeg",.7),portraitBg:A}},bubbles:!0,composed:!0})),this.loading=!1}},i.readAsDataURL(n)}};Kt.styles=[z,B`
      :host {
        display: flex;
        flex-direction: column;
        padding: 4px 8px;
        border-radius: 2px;
        position: relative;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      #placeholder {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #image {
        flex: 1;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #image icon-button {
        display: none;
      }
      #image:hover icon-button {
        display: block;
        opacity: 0.5;
        background-color: var(--surface-color);
      }

      #image icon-button:hover {
        opacity: 1;
      }
    `],S([D({type:Object})],Kt.prototype,"model",2),S([$e("#file-picker")],Kt.prototype,"filePicker",2),S([Cn()],Kt.prototype,"loading",2),Kt=S([j("portrait-view")],Kt);He({icons:{Plus:ut}});var Qt=class extends U{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return R`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        title=${this.canAffordRank?`Buy a rank of this specialization for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this specialization (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${ut} .size=${16}></lucide-icon>
      </button>
      <input
        type="text"
        id="specialization-name"
        .value=${this.model.name}
        @change=${this.onNameFieldChanged}
      />
      <input
        type="number"
        id="rank"
        min="1"
        ?readonly=${this.locked}
        .value=${Be(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="bonus">${this.model.rank?`+${this.model.rank}`:""}</div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${Be(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(t){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{name:t.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(t){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(t){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{xp:Oe(t.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(t){let n=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),n>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-n}},bubbles:!0,composed:!0,cancelable:!1}))}};Qt.styles=[z,B`
      :host {
        display: flex;
        align-items: baseline;
      }

      :host > * {
        margin: 0 2px;
      }

      :host > :first-child {
        margin-left: 0;
      }

      :host > :last-child {
        margin-right: 0;
      }

      #specialization-name {
        flex: 1;
        flex-basis: 0;
        width: 0;
      }

      input[type="number"] {
        width: 24px;
        flex: none;
      }

      #bonus {
        font-size: 13px;
        width: 36px;
        flex: none;
      }
    `],S([D({type:Object})],Qt.prototype,"model",2),S([D({type:Number})],Qt.prototype,"generalXp",2),S([D({type:Boolean})],Qt.prototype,"locked",2),Qt=S([j("specialization-view")],Qt);var Xt=class extends U{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",t=>this.recalculateColumns())}render(){return R`
      <h2>Specializations</h2>
      <header>
        ${Array.from(Array(this.columnCount).keys()).map(()=>R`<div class="header-column">
            <div class="text-column"></div>
            <div class="numeric-column">Rank</div>
            <div class="die-code-column">Bonus</div>
            <div class="numeric-column last-column">XP</div>
          </div>`)}
      </header>
      <section>
        ${this.model.specializations.map(t=>R`<specialization-view
              .model=${t}
              .generalXp=${this.model.xp}
              .locked=${this.locked}
            ></specialization-view>`)}
        ${this.locked?R``:this.renderEditUi()}
      </section>
    `}renderEditUi(){return R`<div id="edit-ui">
      <button @click=${this.onAddButtonClicked}>Add row</button>
    </div>`}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}onAddButtonClicked(t){this.dispatchEvent(new CustomEvent("add-specialization-row",{detail:{},bubbles:!0,composed:!0}))}};Xt.styles=[z,B`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-basis: 0;
        padding: 4px 8px;
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      header {
        display: flex;
        padding: 4px;
        padding-bottom: 0;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: var(--header-color);
        gap: 4px 12px;
      }

      section {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        flex-basis: 0;
        justify-content: space-between;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 0 12px;
      }

      specialization-view {
        width: calc(33.33% - 12px);
      }

      header > * {
        margin: 0 2px;
      }

      .header-column {
        width: calc(33.33% - 12px);
        display: flex;
        gap: 0 4px;
        justify-content: space-between;
      }

      .text-column {
        font-weight: var(--header-font-weight);
        flex: 1;
        flex-basis: 0;
      }

      .numeric-column {
        width: 28px;
        flex: none;
        text-align: center;
      }

      .die-code-column {
        width: 40px;
        flex: none;
        text-align: center;
      }

      #edit-ui {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      #edit-ui > button {
        flex: 1;
        max-width: 33.33%;
      }

      @media screen and (max-width: 650px) {
        specialization-view {
          width: calc(50% - 12px);
        }

        .header-column {
          width: calc(50% - 12px);
        }

        #edit-ui > button {
          max-width: 50%;
        }
      }

      @media screen and (max-width: 500px) {
        specialization-view {
          width: calc(100% - 12px);
        }

        .header-column {
          width: calc(100% - 12px);
        }

        #edit-ui > button {
          max-width: 100%;
        }
      }
    `],S([D({type:Object})],Xt.prototype,"model",2),S([D({type:Number})],Xt.prototype,"columnCount",2),S([D({type:Boolean})],Xt.prototype,"locked",2),Xt=S([j("specializations-view")],Xt);var Lr=class extends U{constructor(){super(...arguments);this.showHeader=!1}render(){return R`
      ${this.showHeader?this.renderHeader():R``}
      <div id="content">
        <input
          type="checkbox"
          ?disabled=${!this.model.checkable}
          .checked=${this.model.checked}
          @change=${this.onCheckedChanged}
        />
        <span id="level">${this.model.level}</span>
        <span id="effects">${this.model.effects}</span>
        <span id="shock-check">${this.model.shockCheck}</span>
      </div>
    `}renderHeader(){return R`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Wounds</span>
        <span id="effects-header">Effects</span>
        <span id="shock-check-header">Shock check</span>
      </header>
    `}onCheckedChanged(t){this.dispatchEvent(new CustomEvent("wound-level-change",{detail:{id:this.model.id,checked:t.target.checked},bubbles:!0,composed:!0}))}};Lr.styles=[z,B`
      :host {
        display: block;
      }

      header {
        display: flex;
        padding: 2px 0;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-radius: 4px;
        background-color: var(--header-color);
      }

      #checkbox-header,
      input[type="checkbox"] {
        width: 18px;
      }

      header > *,
      #content > * {
        margin-right: 12px;
      }

      #content {
        display: flex;
        height: 21px;
      }

      #level-header,
      #level {
        flex: 1;
      }
      #effects-header,
      #effects {
        flex: 1 0 0;
      }
      #shock-check-header,
      #shock-check {
        flex: 1 0 0;
      }
    `],S([D({type:Object})],Lr.prototype,"model",2),S([D({type:Boolean})],Lr.prototype,"showHeader",2),Lr=S([j("wound-level-view")],Lr);var Vr=class extends U{constructor(){super(...arguments);this.showHeader=!1}render(){return R`
      ${this.showHeader?this.renderHeader():R``}
      <div id="content">
        <input
          type="checkbox"
          .checked=${this.model.checked}
          @change=${this.onCheckedChanged}
        />
        <span id="level">${this.model.level}</span>
        <span id="effects">${this.model.effects}</span>
      </div>
    `}renderHeader(){return R`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Fatigue</span>
        <span id="effects-header">Effects</span>
      </header>
    `}onCheckedChanged(t){this.dispatchEvent(new CustomEvent("fatigue-level-change",{detail:{id:this.model.id,checked:t.target.checked},bubbles:!0,composed:!0}))}};Vr.styles=[z,B`
      :host {
        display: block;
      }

      header {
        display: flex;
        padding: 2px 0;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-radius: 4px;
        background-color: var(--header-color);
      }

      #checkbox-header,
      input[type="checkbox"] {
        width: 18px;
      }

      header > *,
      #content > * {
        margin-right: 12px;
      }

      #content {
        display: flex;
      }

      #level-header,
      #level {
        flex: 1;
      }
      #effects-header,
      #effects {
        flex: 1 0 0;
      }
    `],S([D({type:Object})],Vr.prototype,"model",2),S([D({type:Boolean})],Vr.prototype,"showHeader",2),Vr=S([j("fatigue-level-view")],Vr);var Fr=class extends U{constructor(){super(...arguments);this.locked=!0}render(){return R`
      <h2>Status</h2>
      <section>
        <div id="wound-levels">
          ${this.model.status.woundLevels.map((t,n)=>R`<wound-level-view
                .model=${t}
                .showHeader=${n===0}
              ></wound-level-view>`)}
          ${this.locked?R``:this.renderWoundEditUi()}
        </div>
        <div id="fatigue-levels">
          ${this.model.status.fatigueLevels.map((t,n)=>R`<fatigue-level-view
                .model=${t}
                .showHeader=${n===0}
              ></fatigue-level-view>`)}
          ${this.locked?R``:this.renderFatigueEditUi()}
        </div>
      </section>
    `}renderWoundEditUi(){return R`
      <div id="wound-edit-ui">
        <button @click=${this.onAddWoundLevel}>Add wound level</button
        ><button
          .disabled=${this.model.status.woundLevels.length<=6}
          @click=${this.onRemoveWoundLevel}
        >
          Remove wound level
        </button>
      </div>
    `}renderFatigueEditUi(){return R`
      <div id="fatigue-edit-ui">
        <button @click=${this.onAddFatigueLevel}>Add fatigue level</button
        ><button @click=${this.onRemoveFatigueLevel}>
          Remove fatigue level
        </button>
      </div>
    `}onAddWoundLevel(t){this.dispatchEvent(new CustomEvent("add-wound-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveWoundLevel(t){this.dispatchEvent(new CustomEvent("remove-wound-level",{detail:{},bubbles:!0,composed:!0}))}onAddFatigueLevel(t){this.dispatchEvent(new CustomEvent("add-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveFatigueLevel(t){this.dispatchEvent(new CustomEvent("remove-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}};Fr.styles=[z,B`
      :host {
        position: relative;
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      h2 {
        font-family: "IM Fell English", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      wound-level-view {
        flex-basis: 0.1px;
      }

      #wound-levels,
      #fatigue-levels {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      #wound-edit-ui,
      #fatigue-edit-ui {
        display: flex;
        gap: 4px;
      }

      button {
        flex: 1 0 0;
      }
    `],S([D({type:Object})],Fr.prototype,"model",2),S([D({type:Boolean})],Fr.prototype,"locked",2),Fr=S([j("status-view")],Fr);var Vn=class extends U{render(){return R`
      <h2>Wealth</h2>

      <section>
        <table>
          <tr>
            <th></th>
            <th>Party Wealth</th>
            <th>Individual Wealth</th>
          </tr>
          ${this.model.wealth.map(e=>R`
              <tr>
                <td>${e.name}</td>
                <td>
                  <input
                    type="radio"
                    .checked=${e.selectedForParty}
                    @change=${this.partyWealthLevelChangedHandler(e.id)}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    .checked=${e.selectedForIndividual}
                    @change=${this.individualWealthLevelChangedHandler(e.id)}
                  />
                </td>
              </tr>
            `)}
        </table>
      </section>
    `}partyWealthLevelChangedHandler(e){return t=>{this.dispatchEvent(new CustomEvent("party-wealth-level-change",{detail:{id:e,checked:t.target.checked},bubbles:!0,composed:!0}))}}individualWealthLevelChangedHandler(e){return t=>{this.dispatchEvent(new CustomEvent("individual-wealth-level-change",{detail:{id:e,checked:t.target.checked},bubbles:!0,composed:!0}))}}};Vn.styles=[z,B`
      :host {
        position: relative;
        display: block;
        padding: 4px 8px;
        border-radius: 2px;
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      h2 {
        font-size: 20px;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      section {
        display: flex;
        flex-direction: column;
        padding: 4px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15),
          inset 0 0 12px var(--paper-yellow-100);
        gap: 4px 12px;
      }

      table {
        border-spacing: 12px 0;
        margin: 0 -12px;
      }

      th {
        padding: 2px 0;
        font-size: 13px;
        font-weight: var(--header-font-weight);
        border-radius: 4px;
        background-color: var(--header-color);
        margin: 12px;
      }

      td:first-of-type {
        font-weight: var(--header-font-weight);
        width: auto;
        text-align: right;
      }

      td:not(:first-of-type) {
        width: 50%;
      }

      th:empty {
        background-color: transparent;
      }

      th,
      td {
        text-align: center;
      }
    `],S([D({type:Object})],Vn.prototype,"model",2),Vn=S([j("wealth-view")],Vn);function zg(r){return r.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}var{I:dI}=Fg;var Hg=()=>document.createComment(""),Fn=(r,e,t)=>{let n=r._$AA.parentNode,i=e===void 0?r._$AB:e._$AA;if(t===void 0){let s=n.insertBefore(Hg(),i),a=n.insertBefore(Hg(),i);t=new dI(s,a,r,r.options)}else{let s=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let c;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==a._$AU&&t._$AP(c)}if(s!==i||l){let c=t._$AA;for(;c!==s;){let h=c.nextSibling;n.insertBefore(c,i),c=h}}}return t},Yt=(r,e,t=r)=>(r._$AI(e,t),r),hI={},Gg=(r,e=hI)=>r._$AH=e,Wg=r=>r._$AH,Ca=r=>{r._$AP?.(!1,!0);let e=r._$AA,t=r._$AB.nextSibling;for(;e!==t;){let n=e.nextSibling;e.remove(),e=n}};var Kg=(r,e,t)=>{let n=new Map;for(let i=e;i<=t;i++)n.set(r[i],i);return n},Qg=Sa(class extends Rn{constructor(r){if(super(r),r.type!==Aa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let i=[],s=[],a=0;for(let l of r)i[a]=n?n(l,a):a,s[a]=t(l,a),a++;return{values:s,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){let i=Wg(r),{values:s,keys:a}=this.dt(e,t,n);if(!Array.isArray(i))return this.ut=a,s;let l=this.ut??=[],c=[],h,p,m=0,x=i.length-1,A=0,P=s.length-1;for(;m<=x&&A<=P;)if(i[m]===null)m++;else if(i[x]===null)x--;else if(l[m]===a[A])c[A]=Yt(i[m],s[A]),m++,A++;else if(l[x]===a[P])c[P]=Yt(i[x],s[P]),x--,P--;else if(l[m]===a[P])c[P]=Yt(i[m],s[P]),Fn(r,c[P+1],i[m]),m++,P--;else if(l[x]===a[A])c[A]=Yt(i[x],s[A]),Fn(r,i[m],i[x]),x--,A++;else if(h===void 0&&(h=Kg(a,A,P),p=Kg(l,m,x)),h.has(l[m]))if(h.has(l[x])){let M=p.get(a[A]),O=M!==void 0?i[M]:null;if(O===null){let Q=Fn(r,i[m]);Yt(Q,s[A]),c[A]=Q}else c[A]=Yt(O,s[A]),Fn(r,i[m],O),i[M]=null;A++}else Ca(i[x]),x--;else Ca(i[m]),m++;for(;A<=P;){let M=Fn(r,c[P+1]);Yt(M,s[A]),c[A++]=M}for(;m<=x;){let M=i[m++];M!==null&&Ca(M)}return this.ut=a,Gg(r,c),Je}});var Jt=class extends U{constructor(){super(...arguments);this.sheets=[]}render(){return R`<dialog>
      <h2>Choose character sheet</h2>
      <div class="close-button">
        <icon-button @click=${()=>this._dialog?.close("cancel")}
          ><lucide-icon .icon=${ns}></lucide-icon
        ></icon-button>
      </div>
      <div class="content">
        <table>
          <tr>
            <th></th>
            <th>Character</th>
            <th>Player</th>
          </tr>
          ${Qg(this.sheets,t=>t.id,(t,n)=>R`<tr
                class="sheet-row"
                @click=${()=>this.selectSheet(t)}
              >
                <td><div class="avatar">${t.name.charAt(0)}</div></td>
                <td>${t.name}</td>
                <td>${t.player}</td>
              </tr>`)}
        </table>
      </div>
    </dialog>`}show(){this._dialog.showModal()}async selectSheet(t){this._dialog.close("confirm"),this.dispatchEvent(new CustomEvent("show-loading-spinner",{bubbles:!0,composed:!0,cancelable:!1}));let n=await wg(t.id);this.dispatchEvent(new CustomEvent("character-load",{detail:n,bubbles:!0,composed:!0,cancelable:!1}))}};Jt.styles=[z,B`
      h2 {
        text-align: left;
        margin: 0 0 16px;
      }
      div {
        font-family: var(--body-font-family);
      }
      .close-button {
        position: absolute;
        right: 6px;
        top: 6px;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .avatar {
        font-style: italic;
        text-align: center;
        padding: 2px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 150%;
        color: var(--paper-brown-700);
      }
      table {
        border-spacing: 0;
      }
      th {
        background-color: var(--header-color);
        text-align: left;
      }
      .sheet-row {
        cursor: pointer;
      }
      .sheet-row:hover {
        background-color: var(--paper-brown-50);
        box-shadow: inset 0 0 6px var(--paper-brown-100);
      }
      .buttons {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      dialog {
        border: none;
        box-shadow: inset 0 0 49px #e0dcbf, 0 6px 8px rgba(0, 0, 0, 0.25);
        padding: 16px;
        min-width: 300px;
      }
    `],S([D({type:Array})],Jt.prototype,"sheets",2),S([Cn()],Jt.prototype,"selectedSheet",2),S([$e("dialog")],Jt.prototype,"_dialog",2),Jt=S([j("cloud-choose-sheet-dialog")],Jt);var Ur=class extends U{constructor(){super(...arguments);this.duration=5}connectedCallback(){super.connectedCallback()}show(){this.toast.style.animationName="slide-in",this.toast.style.animationDirection="running",setTimeout(()=>{this.toast.style.animationName="slide-out",this.toast.style.animationPlayState="running"},this.duration*1e3)}render(){return R`
      <div id="toast">
        <slot></slot>
      </div>
    `}};Ur.styles=[z,B`
      :host {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 16px;
        left: 0;
        right: 0;
        z-index: 10;
      }

      #toast {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 2px;
        background: linear-gradient(
          to bottom,
          var(--paper-brown-800) 5%,
          var(--paper-brown-900) 100%
        );
        box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        color: #fff;
        animation-duration: 0.35s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
        transform: translateY(200%);
      }

      @keyframes slide-in {
        from {
          transform: translateY(200%);
        }
        to {
          transform: translateY(0%);
        }
      }

      @keyframes slide-out {
        from {
          transform: translateY(0%);
        }
        to {
          transform: translateY(200%);
        }
      }
    `],S([D({type:Number})],Ur.prototype,"duration",2),S([$e("#toast")],Ur.prototype,"toast",2),Ur=S([j("toast-view")],Ur);He({icons:{FileUp:xa,Save:Ia,Printer:Ea,Lock:wa,LockOpen:ts,Dices:_d,UserRoundPlus:rs,Share2:ba,X:ns}});function Me(r,e){return Array(r).fill(null).map(()=>e())}var V=class extends U{constructor(){super();this.columnCount=3;this.locked=!0;this.user=null;this.availableSheets=[];this._printDiv=null;this.model={name:"",archetype:"",player:"",age:"",gender:"",presentation:"",primeValue:"",primeFear:"",traits:"",description:"",notes:"",portraitUrl:"",portraitBg:"",xp:0,connections:Me(21,()=>({name:"",relationship:"",id:V.makeId()})),status:{woundLevels:[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:V.makeId()},{level:"2",effects:"-1",shockCheck:"",checkable:!0,checked:!1,id:V.makeId()},{level:"3",effects:"-2",shockCheck:"5",checkable:!0,checked:!1,id:V.makeId()},{level:"4",effects:"-1d",shockCheck:"10",checkable:!0,checked:!1,id:V.makeId()},{level:"5",effects:"-2d",shockCheck:"15",checkable:!0,checked:!1,id:V.makeId()},{level:"6",effects:"-3d",shockCheck:"30",checkable:!0,checked:!1,id:V.makeId()},{level:"7+",effects:"Death",shockCheck:"\u{1F571}",checkable:!1,checked:!1,id:V.makeId()}],fatigueLevels:[{level:"1",effects:"-1d",checked:!1,id:V.makeId()},{level:"2",effects:"-2d",checked:!1,id:V.makeId()},{level:"3",effects:"-3d",checked:!1,id:V.makeId()},{level:"4",effects:"-4d",checked:!1,id:V.makeId()}]},attributes:[{name:"Strength",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Dexterity",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Perception",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Presence",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Grace",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Intuition",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Will",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Wits",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))},{name:"Awareness",id:V.makeId(),skills:Me(8,()=>({name:"",id:V.makeId()}))}],specializations:Me(15,()=>({name:"",rank:0,xp:0,id:V.makeId()})),inventory:{equipment:Me(12,()=>({name:"",bonus:"",id:V.makeId()})),items:Me(12,()=>({name:"",quantity:0,id:V.makeId()}))},wealth:[{name:"Indebted",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Destitute",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Struggling",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Adequate",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Comfortable",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Prosperous",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Wealthy",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()},{name:"Opulent",selectedForParty:!1,selectedForIndividual:!1,id:V.makeId()}]},this.columnCount=3,this.locked=!0,this._printDiv=null}static makeId(){return Math.random().toString(36).slice(2,11)}connectedCallback(){super.connectedCallback(),vg(t=>{this.user=t}),window.addEventListener("beforeprint",t=>this.onBeforePrint(t)),window.addEventListener("afterprint",t=>this.onAfterPrint(t)),this.addEventListener("character-load",t=>this.onCharacterLoad(t)),this.addEventListener("character-change",t=>this.onCharacterChange(t)),this.addEventListener("connection-change",t=>this.onConnectionChange(t)),this.addEventListener("wound-level-change",t=>this.onWoundLevelChange(t)),this.addEventListener("fatigue-level-change",t=>this.onFatigueLevelChange(t)),this.addEventListener("attribute-change",t=>this.onAttributeChange(t)),this.addEventListener("skill-change",t=>this.onSkillChange(t)),this.addEventListener("specialization-change",t=>this.onSpecializationChange(t)),this.addEventListener("equipment-change",t=>this.onEquipmentChange(t)),this.addEventListener("item-change",t=>this.onItemChange(t)),this.addEventListener("party-wealth-level-change",t=>this.onPartyWealthLevelChange(t)),this.addEventListener("individual-wealth-level-change",t=>this.onIndividualWealthLevelChange(t)),this.addEventListener("add-connection-row",t=>this.onAddConnectionRow(t)),this.addEventListener("add-wound-level",t=>this.onAddWoundLevel(t)),this.addEventListener("remove-wound-level",t=>this.onRemoveWoundLevel(t)),this.addEventListener("add-fatigue-level",t=>this.onAddFatigueLevel(t)),this.addEventListener("remove-fatigue-level",t=>this.onRemoveFatigueLevel(t)),this.addEventListener("add-skill-row",t=>this.onAddSkillRow(t)),this.addEventListener("add-specialization-row",t=>this.onAddSpecializationRow(t)),this.addEventListener("add-equipment-row",t=>this.onAddEquipmentRow(t)),this.addEventListener("add-item-row",t=>this.onAddItemRow(t)),this.addEventListener("show-loading-spinner",t=>{this.modalLoadingSpinner.style.display="flex"})}render(){return R`
      <toast-view id="save-complete-toast">
        <lucide-icon .size=${24} .icon=${kn}></lucide-icon>
        Character sheet saved.</toast-view
      >
      <div id="modal-loading-spinner">
        <loading-spinner size="64"></loading-spinner>
      </div>
      <npc-generator id="npc-generator" .model=${this.model}></npc-generator>
      <cloud-choose-sheet-dialog
        id="cloud-choose-sheet-dialog"
        .sheets=${this.availableSheets}
      ></cloud-choose-sheet-dialog>
      <cloud-access-error-dialog
        id="cloud-access-error-dialog"
        .uid=${this.user?.uid}
      ></cloud-access-error-dialog>
      <nav>
        ${jt(this.user,()=>R`<icon-button
                id="load-from-cloud-button"
                title="Load from Cloud"
                @click=${this.onLoadFromCloudButtonClicked}
              >
                <lucide-icon .size=${20} .icon=${va}></lucide-icon>
              </icon-button>
              <icon-button
                id="save-to-cloud-button"
                title="Save to Cloud"
                ?disabled=${!this.model.name}
                @click=${this.onSaveToCloudButtonClicked}
              >
                <lucide-icon .size=${20} .icon=${_a}></lucide-icon>
              </icon-button>
              <span class="spacer"></span>`)}
        <icon-button
          id="load-button"
          title="Load from file"
          @click=${this.onLoadFromFile}
        >
          <lucide-icon .size=${20} .icon=${xa}></lucide-icon>
        </icon-button>
        <icon-button
          id="save-button"
          title="Save to file"
          @click=${this.onSaveToFile}
          ><lucide-icon .size=${20} .icon=${Ia}></lucide-icon
        ></icon-button>
        <span class="spacer"></span>
        <icon-button
          id="share-button"
          title="Share (mobile only)"
          @click=${this.onMobileShare}
          ><lucide-icon .size=${20} .icon=${ba}></lucide-icon
        ></icon-button>
        <icon-button id="print-button" title="Print" @click=${this.onPrint}>
          <lucide-icon .size=${20} .icon=${Ea}></lucide-icon>
        </icon-button>
        <span class="spacer"></span>
        <icon-button
          id="lock-button"
          title="Lock/unlock"
          .on=${this.locked}
          @click=${this.onToggleLocked}
          ><lucide-icon .size=${20} .icon=${ts}></lucide-icon
          ><lucide-icon slot="on" .size=${20} .icon=${wa}></lucide-icon
        ></icon-button>
        ${jt(!1,()=>R`<icon-button
              id="generate-button"
              title="Generate NPC"
              @click=${()=>{this.shadowRoot.querySelector("#npc-generator").configure()}}
              ><lucide-icon .size=${20} .icon=${rs}></lucide-icon
            ></icon-button>`)}
        <span style="flex: 1"></span>
        <button
          title="${this.user!=null?`Sign out ${this.user.email}`:""}"
          @click=${this.onToggleSignInButtonClicked}
        >
          <img class="avatar" src="${$g(this.user?.photoURL)}" />
          ${this.user==null?"Sign in":"Sign out"}
        </button>
      </nav>
      <h1>${this.model.name?this.model.name:"Character Sheet"}</h1>
      <main>
        <character-info-view .model=${this.model}></character-info-view>
        <section id="description-and-status">
          <character-description-view
            .model=${this.model}
          ></character-description-view>
          <status-view
            .model=${this.model}
            .locked=${this.locked}
          ></status-view>
          <portrait-view .model=${this.model}></portrait-view>
        </section>
        <attributes-view .model=${this.model} .locked=${this.locked}>
        </attributes-view>
        <specializations-view
          .model=${this.model}
          .locked=${this.locked}
        ></specializations-view>
        <inventory-view
          .model=${this.model}
          .locked=${this.locked}
        ></inventory-view>
        <wealth-view .model=${this.model}></wealth-view>
        <connections-view
          .model=${this.model}
          .locked=${this.locked}
        ></connections-view>
        <general-xp-view .model=${this.model}></general-xp-view>
        <notes-view .model=${this.model}></notes-view>
      </main>
    `}onCharacterLoad(t){this.model=t.detail,this.modalLoadingSpinner.style.display="none"}onCharacterChange(t){let n=t.detail.change;this.model={...this.model,...n}}onConnectionChange(t){let n=t.detail.id,i=t.detail.change,s=this.model.connections.find(l=>l.id===n),a={...s,...i};this.model={...this.model,connections:[...this.model.connections.map(l=>l===s?a:l)]}}onWoundLevelChange(t){let n=t.detail.id,i=t.detail.checked,s=[...this.model.status.woundLevels],a=s.findIndex(l=>l.id===n);i?s=s.map((l,c)=>({...l,checked:c<=a})):s=s.map((l,c)=>({...l,checked:c>=a?!1:l.checked})),this.model={...this.model,status:{...this.model.status,woundLevels:s}}}onFatigueLevelChange(t){let n=t.detail.id,i=t.detail.checked,s=[...this.model.status.fatigueLevels],a=s.findIndex(l=>l.id===n);i?s=s.map((l,c)=>({...l,checked:c<=a})):s=s.map((l,c)=>({...l,checked:c>=a?!1:l.checked})),this.model={...this.model,status:{...this.model.status,fatigueLevels:s}}}onAttributeChange(t){let n=t.detail.id,i=t.detail.change,s=this.model.attributes.find(l=>l.id===n),a={...s,...i};this.model={...this.model,attributes:[...this.model.attributes.map(l=>l===s?a:l)]}}onSkillChange(t){let n=t.detail.attribute,i=t.detail.id,s=t.detail.change,a=this.model.attributes.find(p=>p.id===n),l=a.skills.find(p=>p.id===i),c={...l,...s},h={...a,skills:[...a.skills.map(p=>p===l?c:p)]};this.model={...this.model,attributes:[...this.model.attributes.map(p=>p===a?h:p)]}}onSpecializationChange(t){let n=t.detail.id,i=t.detail.change,s=this.model.specializations.find(l=>l.id===n),a={...s,...i};this.model={...this.model,specializations:[...this.model.specializations.map(l=>l===s?a:l)]}}onEquipmentChange(t){let n=t.detail.id,i=t.detail.change,s=this.model.inventory.equipment.find(l=>l.id===n),a={...s,...i};this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment.map(l=>l===s?a:l)]}}}onItemChange(t){let n=t.detail.id,i=t.detail.change,s=this.model.inventory.items.find(l=>l.id===n),a={...s,...i};this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items.map(l=>l===s?a:l)]}}}onPartyWealthLevelChange(t){let n=t.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(i=>({...i,selectedForParty:i.id===n}))]}}onIndividualWealthLevelChange(t){let n=t.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(i=>({...i,selectedForIndividual:i.id===n}))]}}onAddConnectionRow(t){this.model={...this.model,connections:[...this.model.connections,...Me(3,()=>({name:"",relationship:"",id:V.makeId()}))]}}onAddSpecializationRow(t){this.model={...this.model,specializations:[...this.model.specializations,...Me(3,()=>({name:"",id:V.makeId()}))]}}onAddSkillRow(t){let n=t.detail.id;this.model={...this.model,attributes:[...this.model.attributes.map(i=>i.id===n?{...i,skills:[...i.skills,{name:"",rank:0,xp:0,id:V.makeId()}]}:i)]}}onAddWoundLevel(t){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((n,i)=>i===0?[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:V.makeId()},{...n,level:`${i+2}`}]:[{...n,level:`${i+2}`}])}}}onRemoveWoundLevel(t){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((n,i)=>i===0?[]:[{...n,level:`${i}`}])}}}onAddFatigueLevel(t){let n=this.model.status.fatigueLevels.length+1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(n).keys()).map(i=>({level:`${i+1}`,effects:`-${i+1}d`,checked:this.model.status.fatigueLevels.length>i?this.model.status.fatigueLevels[i].checked:!1,id:V.makeId()}))}}}onRemoveFatigueLevel(t){let n=this.model.status.fatigueLevels.length-1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(n).keys()).map(i=>({level:`${i+1}`,effects:`-${i+1}d`,checked:this.model.status.fatigueLevels[i].checked,id:V.makeId()}))}}}onAddEquipmentRow(t){this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment,{name:"",bonus:"",id:V.makeId()}]}}}onAddItemRow(t){this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items,{name:"",quantity:0,id:V.makeId()}]}}}lint(t){return{...t,attributes:t.attributes.map(n=>({...n,skills:n.skills.map(i=>({...i,name:i.name??"",rank:i.name&&i.rank?i.rank:0,xp:i.name&&i.xp?i.xp:0}))})),specializations:t.specializations.map(n=>({...n,name:n.name??"",rank:n.name&&n.rank?n.rank:0,xp:n.name&&n.xp?n.xp:0}))}}onSaveToFile(t){let n=JSON.stringify(this.lint(this.model),void 0,2),i=document.createElement("a"),s=new Blob([n],{type:"application/json"});i.href=URL.createObjectURL(s),i.download=`${this._toFileName(this.model.name)}.json`,i.click(),URL.revokeObjectURL(i.href)}async onMobileShare(t){let n=JSON.stringify(this.lint(this.model),void 0,2),i=new Blob([n],{type:"application/json"}),s=new File([i],`${this._toFileName(this.model.name)}.json`);navigator.canShare({files:[s]})||alert("Sorry, sharing is not available.  Try saving instead.");try{await navigator.share({files:[s]})}catch(a){alert(`Sorry, sharing failed with the following error: ${a.message}.`)}}onLoadFromFile(t){let n=document.createElement("input");n.type="file",n.accept="application/json",n.addEventListener("change",async()=>{if(!n.files)return;this.modalLoadingSpinner.style.display="flex";let s=await n.files[0].text();this.model=this.lint(JSON.parse(s)),this.modalLoadingSpinner.style.display="none"},{once:!0}),n.click()}onPrint(t){this.onBeforePrint(null),requestAnimationFrame(()=>{window.print()})}onBeforePrint(t){if(!this._printDiv){this._printDiv=document.createElement("div");let n=this.shadowRoot.getRootNode();for(let i of n.querySelector("main").children){let s=i.cloneNode(!0);"model"in s&&(s.model=this.model),"columnCount"in s&&(s.columnCount=3),this._printDiv.appendChild(s),"flushUpdate"in s&&typeof s.flushUpdate=="function"&&s.flushUpdate()}document.body.appendChild(this._printDiv)}}onAfterPrint(t){this._printDiv?.remove(),this._printDiv=null}onToggleLocked(t){let n=t.target;this.locked=!n.on}onToggleSignInButtonClicked(t){this.user?yg():gg()}async onSaveToCloudButtonClicked(t){try{await xg(zg(this.model.name),this.lint(this.model)),this.saveCompleteToast?.show()}catch(n){n instanceof Hi&&n.type===0&&this.shadowRoot.querySelector("#cloud-access-error-dialog").show()}}async onLoadFromCloudButtonClicked(t){this.availableSheets=await _g(),this.shadowRoot.querySelector("#cloud-choose-sheet-dialog").show()}_toFileName(t){return t.replace(/\W+/g,"_").toLowerCase()}};V.styles=[z,B`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      h1 {
        font-family: "IM Fell English", serif;
        font-weight: 400;
        font-style: normal;
        margin: 0;
        margin-bottom: 16px;
        text-align: center;
      }

      nav {
        display: flex;
        align-items: center;
        padding: 8px;
      }

      nav .spacer {
        display: block;
        width: 16px;
      }

      nav button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .avatar {
        max-width: 24px;
        border-radius: 50%;
      }

      main {
        background-color: var(--surface-color);
        box-shadow: inset 0 0 49px #e0dcbf, 0 6px 8px rgba(0, 0, 0, 0.25);
      }

      #modal-loading-spinner {
        position: fixed;
        z-index: 10;
        inset: 0;
        background-color: rgba(255, 255, 255, 0.75);
        justify-content: center;
        align-items: center;
        display: none;
      }

      #description-and-status {
        display: grid;
        grid-template-columns: 1fr min-content;
        grid-template-rows: auto auto;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          "description portrait"
          "status portrait";
      }

      character-description-view {
        grid-area: description;
      }

      status-view {
        grid-area: status;
      }

      portrait-view {
        grid-area: portrait;
        width: 256px;
        box-sizing: border-box;
      }

      @media screen and (max-width: 650px) {
        #description-and-status {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          gap: 0px 0px;
          grid-auto-flow: row;
          grid-template-areas:
            "description"
            "status"
            "portrait";
        }

        portrait-view {
          width: auto;
          height: 480px;
        }
      }

      @media print {
        :host {
          display: none;
        }
      }
    `],S([D({type:Object})],V.prototype,"model",2),S([D({type:Number})],V.prototype,"columnCount",2),S([D({type:Boolean})],V.prototype,"locked",2),S([D({type:Object})],V.prototype,"user",2),S([Cn()],V.prototype,"availableSheets",2),S([$e("#modal-loading-spinner")],V.prototype,"modalLoadingSpinner",2),S([$e("#save-complete-toast")],V.prototype,"saveCompleteToast",2),V=S([j("character-sheet")],V);})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-e84cf44d.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lucide/dist/esm/createElement.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/replaceElement.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/defaultAttributes.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/book-image.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-download.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/cloud-upload.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/dices.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/file-up.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock-open.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/lock.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/plus.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/printer.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/save.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/share-2.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/ship-wheel.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round-plus.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/x.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.454.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=main.js.map
