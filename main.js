"use strict";(()=>{var Ct=Object.defineProperty;var yt=Object.getOwnPropertyDescriptor;var l=(r,t,e,o)=>{for(var a=o>1?void 0:o?yt(t,e):t,s=r.length-1,d;s>=0;s--)(d=r[s])&&(a=(o?d(t,e,a):d(a))||a);return o&&a&&Ct(t,e,a),a};var Ee=globalThis,Ae=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol(),Qe=new WeakMap,pe=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ae&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=Qe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Qe.set(e,t))}return t}toString(){return this.cssText}},Ye=r=>new pe(typeof r=="string"?r:r+"",void 0,qe),c=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((o,a,s)=>o+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[s+1],r[0]);return new pe(e,r,qe)},Oe=(r,t)=>{if(Ae)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let o=document.createElement("style"),a=Ee.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=e.cssText,r.appendChild(o)}},Se=Ae?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return Ye(e)})(r):r;var{is:kt,defineProperty:wt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:At,getOwnPropertySymbols:St,getPrototypeOf:Mt}=Object,Me=globalThis,Ve=Me.trustedTypes,$t=Ve?Ve.emptyScript:"",Pt=Me.reactiveElementPolyfillSupport,ue=(r,t)=>r,me={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},$e=(r,t)=>!kt(r,t),et={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:$e};Symbol.metadata??=Symbol("metadata"),Me.litPropertyMetadata??=new WeakMap;var R=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(t,o,e);a!==void 0&&wt(this.prototype,t,a)}}static getPropertyDescriptor(t,e,o){let{get:a,set:s}=Et(this.prototype,t)??{get(){return this[e]},set(d){this[e]=d}};return{get(){return a?.call(this)},set(d){let n=a?.call(this);s.call(this,d),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(ue("elementProperties")))return;let t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue("properties"))){let e=this.properties,o=[...At(e),...St(e)];for(let a of o)this.createProperty(a,e[a])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[o,a]of e)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[e,o]of this.elementProperties){let a=this._$Eu(e,o);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let a of o)e.unshift(Se(a))}else t!==void 0&&e.push(Se(t));return e}static _$Eu(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){let o=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,o);if(a!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:me).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){let o=this.constructor,a=o._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let s=o.getPropertyOptions(a),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:me;this._$Em=a,this[a]=d.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??$e)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],s)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[ue("elementProperties")]=new Map,R[ue("finalized")]=new Map,Pt?.({ReactiveElement:R}),(Me.reactiveElementVersions??=[]).push("2.0.4");var Xe=globalThis,Pe=Xe.trustedTypes,tt=Pe?Pe.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,it="?"+U,Rt=`<${it}>`,W=document,xe=()=>W.createComment(""),he=r=>r===null||typeof r!="object"&&typeof r!="function",nt=Array.isArray,Lt=r=>nt(r)||typeof r?.[Symbol.iterator]=="function",He=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,at=/>/g,z=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,st=/"/g,ft=/^(?:script|style|textarea|title)$/i,pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),i=pt(1),Xt=pt(2),L=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),lt=new WeakMap,N=W.createTreeWalker(W,129);function ut(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}var Tt=(r,t)=>{let e=r.length-1,o=[],a,s=t===2?"<svg>":"",d=ce;for(let n=0;n<e;n++){let p=r[n],b,v,h=-1,C=0;for(;C<p.length&&(d.lastIndex=C,v=d.exec(p),v!==null);)C=d.lastIndex,d===ce?v[1]==="!--"?d=ot:v[1]!==void 0?d=at:v[2]!==void 0?(ft.test(v[2])&&(a=RegExp("</"+v[2],"g")),d=z):v[3]!==void 0&&(d=z):d===z?v[0]===">"?(d=a??ce,h=-1):v[1]===void 0?h=-2:(h=d.lastIndex-v[2].length,b=v[1],d=v[3]===void 0?z:v[3]==='"'?st:rt):d===st||d===rt?d=z:d===ot||d===at?d=ce:(d=z,a=void 0);let y=d===z&&r[n+1].startsWith("/>")?" ":"";s+=d===ce?p+Rt:h>=0?(o.push(b),p.slice(0,h)+dt+p.slice(h)+U+y):p+U+(h===-2?n:y)}return[ut(r,s+(r[e]||"<?>")+(t===2?"</svg>":"")),o]},ge=class r{constructor({strings:t,_$litType$:e},o){let a;this.parts=[];let s=0,d=0,n=t.length-1,p=this.parts,[b,v]=Tt(t,e);if(this.el=r.createElement(b,o),N.currentNode=this.el.content,e===2){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=N.nextNode())!==null&&p.length<n;){if(a.nodeType===1){if(a.hasAttributes())for(let h of a.getAttributeNames())if(h.endsWith(dt)){let C=v[d++],y=a.getAttribute(h).split(U),V=/([.?@])?(.*)/.exec(C);p.push({type:1,index:s,name:V[2],strings:y,ctor:V[1]==="."?ze:V[1]==="?"?Ne:V[1]==="@"?We:te}),a.removeAttribute(h)}else h.startsWith(U)&&(p.push({type:6,index:s}),a.removeAttribute(h));if(ft.test(a.tagName)){let h=a.textContent.split(U),C=h.length-1;if(C>0){a.textContent=Pe?Pe.emptyScript:"";for(let y=0;y<C;y++)a.append(h[y],xe()),N.nextNode(),p.push({type:2,index:++s});a.append(h[C],xe())}}}else if(a.nodeType===8)if(a.data===it)p.push({type:2,index:s});else{let h=-1;for(;(h=a.data.indexOf(U,h+1))!==-1;)p.push({type:7,index:s}),h+=U.length-1}s++}}static createElement(t,e){let o=W.createElement("template");return o.innerHTML=t,o}};function ee(r,t,e=r,o){if(t===L)return t;let a=o!==void 0?e._$Co?.[o]:e._$Cl,s=he(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(r),a._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=a:e._$Cl=a),a!==void 0&&(t=ee(r,a._$AS(r,t.values),a,o)),t}var _e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,a=(t?.creationScope??W).importNode(e,!0);N.currentNode=a;let s=N.nextNode(),d=0,n=0,p=o[0];for(;p!==void 0;){if(d===p.index){let b;p.type===2?b=new ve(s,s.nextSibling,this,t):p.type===1?b=new p.ctor(s,p.name,p.strings,this,t):p.type===6&&(b=new je(s,this,t)),this._$AV.push(b),p=o[++n]}d!==p?.index&&(s=N.nextNode(),d++)}return N.currentNode=W,a}p(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},ve=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,a){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ee(this,t,e),he(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==E&&he(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ge.createElement(ut(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(e);else{let s=new _e(a,this),d=s.u(this.options);s.p(e),this.T(d),this._$AH=s}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new ge(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,a=0;for(let s of t)a===e.length?e.push(o=new r(this.S(xe()),this.S(xe()),this,this.options)):o=e[a],o._$AI(s),a++;a<e.length&&(this._$AR(o&&o._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,a,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}_$AI(t,e=this,o,a){let s=this.strings,d=!1;if(s===void 0)t=ee(this,t,e,0),d=!he(t)||t!==this._$AH&&t!==L,d&&(this._$AH=t);else{let n=t,p,b;for(t=s[0],p=0;p<s.length-1;p++)b=ee(this,n[o+p],e,p),b===L&&(b=this._$AH[p]),d||=!he(b)||b!==this._$AH[p],b===E?t=E:t!==E&&(t+=(b??"")+s[p+1]),this._$AH[p]=b}d&&!a&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ze=class extends te{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},Ne=class extends te{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}},We=class extends te{constructor(t,e,o,a,s){super(t,e,o,a,s),this.type=5}_$AI(t,e=this){if((t=ee(this,t,e,0)??E)===L)return;let o=this._$AH,a=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==E&&(o===E||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},je=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}};var Ft=Xe.litHtmlPolyfillSupport;Ft?.(ge,ve),(Xe.litHtmlVersions??=[]).push("3.1.2");var mt=(r,t,e)=>{let o=e?.renderBefore??t,a=o._$litPart$;if(a===void 0){let s=e?.renderBefore??null;o._$litPart$=a=new ve(t.insertBefore(xe(),s),s,void 0,e??{})}return a._$AI(r),a};var m=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});var Ut=globalThis.litElementPolyfillSupport;Ut?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.0.4");var x=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Dt={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:$e},Bt=(r=Dt,t,e)=>{let{kind:o,metadata:a}=e,s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(e.name,r),o==="accessor"){let{name:d}=e;return{set(n){let p=t.get.call(this);t.set.call(this,n),this.requestUpdate(d,p,r)},init(n){return n!==void 0&&this.P(d,void 0,r),n}}}if(o==="setter"){let{name:d}=e;return function(n){let p=this[d];t.call(this,n),this.requestUpdate(d,p,r)}}throw Error("Unsupported decorator location: "+o)};function f(r){return(t,e)=>typeof e=="object"?Bt(r,t,e):((o,a,s)=>{let d=a.hasOwnProperty(s);return a.constructor.createProperty(s,d?{...o,wrapped:!0}:o),d?Object.getOwnPropertyDescriptor(a,s):void 0})(r,t,e)}function ct(r){return f({...r,state:!0,attribute:!1})}var j=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function oe(r,t){return(e,o,a)=>{let s=d=>d.renderRoot?.querySelector(r)??null;if(t){let{get:d,set:n}=typeof o=="object"?e:a??(()=>{let p=Symbol();return{get(){return this[p]},set(b){this[p]=b}}})();return j(e,o,{get(){let p=d.call(this);return p===void 0&&(p=s(this),(p!==null||this.hasUpdated)&&n.call(this,p)),p}})}return j(e,o,{get(){return s(this)}})}}function X(r,t,e){return r?t(r):e?.(r)}var xt=(r,t,e=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),e.length&&e.forEach(a=>{let s=xt(...a);o.appendChild(s)}),o},be=([r,t,e])=>xt(r,t,e);var It=r=>Array.from(r.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),qt=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",Ot=r=>r.flatMap(qt).map(e=>e.trim()).filter(Boolean).filter((e,o,a)=>a.indexOf(e)===o).join(" "),Ht=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,o)=>e.toUpperCase()+o.toLowerCase()),Ge=(r,{nameAttr:t,icons:e,attrs:o})=>{let a=r.getAttribute(t);if(a==null)return;let s=Ht(a),d=e[s];if(!d)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);let n=It(r),[p,b,v]=d,h={...b,"data-lucide":a,...o,...n},C=Ot(["lucide",`lucide-${a}`,n,o]);C&&Object.assign(h,{class:C});let y=be([p,h,v]);return r.parentNode?.replaceChild(y,r)};var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ce=["svg",k,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];var Ke=["svg",k,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];var Re=["svg",k,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];var ye=["svg",k,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];var Le=["svg",k,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];var P=["svg",k,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];var Te=["svg",k,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];var Fe=["svg",k,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];var Ue=["svg",k,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];var De=["svg",k,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];var ke=["svg",k,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];var $=({icons:r={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>Ge(a,{nameAttr:t,icons:r,attrs:e})),t==="data-lucide"){let a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(s=>Ge(s,{nameAttr:"icon-name",icons:r,attrs:e})))}};var g=c`
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
`;function Be(r,t){if(r==null||t==null||r<=0||t<=0)return"";let e=r+t,o=e%3===2?10:e%3===1?8:6;return`${Math.trunc(e/3)}d6+d${o}`}function A(r){let t=Number.parseInt(r,10);return isNaN(t)?0:t??0}function M(r){return r===void 0||isNaN(r)?"":Math.round(r).toString()}var ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gt=r=>(...t)=>({_$litDirective$:r,values:t}),Ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var vt=gt(class extends Ie{constructor(r){if(super(r),r.type!==ht.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let e=r.element.classList;for(let o of this.st)o in t||(e.remove(o),this.st.delete(o));for(let o in t){let a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return L}});var D=class extends m{constructor(){super(...arguments);this.size=24;this.strokeWidth=2}render(){this.style.setProperty("--icon-width",`${this.size}px`),this.style.setProperty("--icon-height",`${this.size}px`);let e=be(this.icon);return e.setAttribute("stroke-width",this.strokeWidth.toString()),i`${e}`}};D.styles=[c`
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
    `],l([f({type:Array})],D.prototype,"icon",2),l([f({type:Number})],D.prototype,"size",2),l([f({type:Number})],D.prototype,"strokeWidth",2),D=l([x("lucide-icon")],D);$({icons:{Plus:P}});var T=class extends m{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return i`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        title=${this.canAffordRank?`Buy a rank of this skill for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this skill (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${P} .size=${16}></lucide-icon>
      </button>
      <input
        type="text"
        id="skill-name"
        class="${vt({ghosted:(this.model.rank??0)==0})}"
        .value=${this.model.name}
        @change=${this.onNameFieldChanged}
      />
      <input
        type="number"
        id="rank"
        min="0"
        ?readonly=${this.locked}
        .value=${M(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="die-code">
        ${Be(this.attributeModel.rank,this.model.rank)}
      </div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${M(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}connectedCallback(){super.connectedCallback()}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(e){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(e){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(e){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{xp:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(e){let o=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),o>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-o}},bubbles:!0,composed:!0,cancelable:!1}))}};T.styles=[g,c`
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
    `],l([f({type:Object})],T.prototype,"model",2),l([f({type:Object})],T.prototype,"attributeModel",2),l([f({type:Number})],T.prototype,"generalXp",2),l([f({type:Boolean})],T.prototype,"locked",2),T=l([x("skill-view")],T);$({icons:{Plus:P}});var F=class extends m{constructor(){super(...arguments);this.generalXp=0;this.showHeader=!1;this.locked=!0}render(){return i`
      ${this.showHeader?this.renderHeader():i``}
      <section>
        <div id="attribute">
          <button
            id="buy-button"
            class="buy-button"
            title=${this.canAffordRank?`Buy a rank of this attribute for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this attribute (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
            ?disabled=${!this.canAffordRank}
            @click=${this.onBuyRankButtonClicked}
          >
            <lucide-icon .icon=${P} .size=${16}></lucide-icon>
          </button>
          <div id="name">${this.model.name}</div>
          <input
            type="number"
            id="rank"
            min="1"
            ?readonly=${this.locked}
            .value=${M(this.model.rank)}
            @change=${this.onRankChanged}
          />
          <div id="die-code">${Be(this.model.rank,0)}</div>
          <input
            type="number"
            id="xp"
            min="0"
            .value=${M(this.model.xp)}
            @change=${this.onXpFieldChanged}
          />
        </div>
        ${this.model.skills.map(e=>i`<skill-view
              .model=${e}
              .attributeModel=${this.model}
              .generalXp=${this.generalXp}
              .locked=${this.locked}
            ></skill-view>`)}
        ${this.locked?i``:this.renderEditUi()}
      </section>
    `}renderHeader(){return i`
      <header>
        <div class="text-column"></div>
        <div class="numeric-column">Rank</div>
        <div class="die-code-column">Dice</div>
        <div class="numeric-column">XP</div>
      </header>
    `}renderEditUi(){return i`<button @click=${this.onAddButtonClicked}>Add skill</button>`}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return((this.model.rank??0)+1)*5}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onRankChanged(e){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(e){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{xp:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(e){let o=((this.model.rank??0)+1)*5,a=Math.max(0,o-(this.model.xp??0));this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-o)}},bubbles:!0,composed:!0,cancelable:!1})),a>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-a}},bubbles:!0,composed:!0,cancelable:!1}))}onAddButtonClicked(e){this.dispatchEvent(new CustomEvent("add-skill-row",{detail:{id:this.model.id},bubbles:!0,composed:!0,cancelable:!1}))}};F.styles=[g,c`
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
    `],l([f({type:Object})],F.prototype,"model",2),l([f({type:Number})],F.prototype,"generalXp",2),l([f({type:Boolean})],F.prototype,"showHeader",2),l([f({type:Boolean})],F.prototype,"locked",2),F=l([x("attribute-view")],F);var B=class extends m{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",e=>this.recalculateColumns())}render(){return i`
      <h2>Attributes</h2>
      ${this.renderAttributes()}
    `}renderAttributes(){let e=[];return this.model.attributes.forEach((o,a)=>{let s=i`<attribute-view
        .model=${o}
        .generalXp=${this.model.xp}
        .showHeader=${a<this.columnCount}
        .locked=${this.locked}
      ></attribute-view>`;a%this.columnCount===0?e.push([s]):e[e.length-1].push(s)}),e.map(o=>i`<div class="attribute-group">${o}</div>`)}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}};B.styles=[g,c`
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
    `],l([f({type:Object})],B.prototype,"model",2),l([f({type:Number})],B.prototype,"columnCount",2),l([f({type:Boolean})],B.prototype,"locked",2),B=l([x("attributes-view")],B);var ae=class extends m{render(){return i`
      <h2>Description</h2>
      <section>
        <textarea
          .value=${this.model.description||""}
          @change=${this.onDescriptionChanged}
        ></textarea>
      </section>
    `}onDescriptionChanged(e){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{description:e.target.value}},bubbles:!0,composed:!0}))}};ae.styles=[g,c`
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
    `],l([f({type:Object})],ae.prototype,"model",2),ae=l([x("character-description-view")],ae);var re=class extends m{render(){return i`
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
    `}fieldChangeHandler(e){return o=>{this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{[e]:o.target.value}},bubbles:!0,composed:!0}))}}};re.styles=[g,c`
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
    `],l([f({type:Object})],re.prototype,"model",2),re=l([x("character-info-view")],re);var se=class extends m{render(){return i`
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
    `}onNameChanged(e){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRelationshipChanged(e){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{relationship:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}};se.styles=[g,c`
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
    `],l([f({type:Object})],se.prototype,"model",2),se=l([x("connection-view")],se);var G=class extends m{constructor(){super(...arguments);this.locked=!0}render(){return i`
      <h2>Connections & Bonds</h2>
      <section>
        ${this.model.connections.map(e=>i`<connection-view .model=${e}></connection-view>`)}
        ${this.locked?i``:this.renderAddUi()}
      </section>
    `}renderAddUi(){return i`
      <div id="add-ui">
        <button @click=${this.onAddButtonClicked}>Add row</button>
      </div>
    `}onAddButtonClicked(e){this.dispatchEvent(new CustomEvent("add-connection-row",{detail:{},bubbles:!0,composed:!0}))}};G.styles=[g,c`
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
    `],l([f({type:Object})],G.prototype,"model",2),l([f({type:Boolean})],G.prototype,"locked",2),G=l([x("connections-view")],G);var I=class extends m{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return i`
      ${this.showHeader?this.renderHeader():i``}
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
    `}renderHeader(){return i`
      <header>
        <span id="name-header">Equipment</span>
        <span id="bonus-header">Bonus</span>
      </header>
    `}onNameChanged(e){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0}))}onBonusChanged(e){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{bonus:e.target.value}},bubbles:!0,composed:!0}))}};I.styles=[g,c`
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
    `],l([f({type:Object})],I.prototype,"model",2),l([f({type:Boolean})],I.prototype,"showHeader",2),l([f({type:Boolean})],I.prototype,"locked",2),I=l([x("equipment-view")],I);var le=class extends m{render(){return i`
      <div id="label">General XP</div>
      <input
        type="number"
        .value=${M(this.model.xp)}
        @change=${this.onXPChanged}
      />
    `}onXPChanged(e){let o=A(e.target.value);isNaN(o)&&(o=0),this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:o}},bubbles:!0,composed:!0}))}};le.styles=[g,c`
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
    `],l([f({type:Object})],le.prototype,"model",2),le=l([x("general-xp-view")],le);var de=class extends m{constructor(){super(...arguments);this.on=!1}connectedCallback(){super.connectedCallback(),this.role="button"}render(){return i`
      ${X(this.on,()=>i`<slot name="on" @slotchange=${this.preventFocus}></slot>`,()=>i`<slot @slotchange=${this.preventFocus}></slot>`)}
    `}preventFocus(e){let o=e.target;for(let a of o.assignedElements())a.setAttribute("tabindex","-1")}};de.styles=[g,c`
      :host {
        cursor: pointer;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid transparent;
        color: var(--paper-brown-800);
        margin: 0;
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
    `],l([f({type:Boolean})],de.prototype,"on",2),de=l([x("icon-button")],de);var q=class extends m{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return i`
      ${this.showHeader?this.renderHeader():i``}
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
          .value=${M(this.model.quantity)}
          @change=${this.onQuantityChanged}
        />
      </div>
    `}renderHeader(){return i`
      <header>
        <span id="name-header">Items</span>
        <span id="quantity-header">Quantity</span>
      </header>
    `}onNameChanged(e){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0}))}onQuantityChanged(e){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{quantity:Number.parseFloat(e.target.value)}},bubbles:!0,composed:!0}))}};q.styles=[g,c`
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
    `],l([f({type:Object})],q.prototype,"model",2),l([f({type:Boolean})],q.prototype,"showHeader",2),l([f({type:Boolean})],q.prototype,"locked",2),q=l([x("item-view")],q);var K=class extends m{constructor(){super(...arguments);this.locked=!0}render(){return i`
      <h2>Equipment & Items</h2>
      <section>
        <div id="equipment">
          ${this.model.inventory.equipment.map((e,o)=>i`<equipment-view
                .model=${e}
                .showHeader=${o===0}
                .locked=${this.locked}
              ></equipment-view>`)}
          ${this.locked?i``:i`<button @click=${this.onAddEquipmentButtonClicked}>
                Add row
              </button>`}
        </div>
        <div id="items">
          ${this.model.inventory.items.map((e,o)=>i`<item-view
                .model=${e}
                .showHeader=${o===0}
                .locked=${this.locked}
              ></item-view>`)}
          ${this.locked?i``:i`<button @click=${this.onAddItemButtonClicked}>
                Add row
              </button>`}
        </div>
      </section>
    `}onAddEquipmentButtonClicked(e){this.dispatchEvent(new CustomEvent("add-equipment-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}onAddItemButtonClicked(e){this.dispatchEvent(new CustomEvent("add-item-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}};K.styles=[g,c`
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
    `],l([f({type:Object})],K.prototype,"model",2),l([f({type:Boolean})],K.prototype,"locked",2),K=l([x("inventory-view")],K);var ie=class extends m{render(){return i`
      <h2>Notes</h2>
      <section>
        <textarea
          .value=${this.model.notes||""}
          @change=${this.onNotesChanged}
        ></textarea>
      </section>
    `}onNotesChanged(e){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{notes:e.target.value}},bubbles:!0,composed:!0}))}};ie.styles=[g,c`
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
    `],l([f({type:Object})],ie.prototype,"model",2),ie=l([x("notes-view")],ie);function Ze(r,t){let e=1-Math.random(),o=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*o)*t+r}function Je(r){return r[Math.floor(Math.random()*r.length)]}function we(r){let t=Object.values(r);return Je(t)}function bt(r){let t=Array.from(r.values()).reduce((a,s)=>a+s,0),e=Math.random()*t,o=0;for(let a of r.keys())if(o+=r.get(a),e<o)return a;return Array.from(r.keys())[0]}var Z=class extends m{render(){return i`<dialog @close=${this._generateNPC}>
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
    </dialog>`}configure(){this._dialog.showModal()}_generateRandomName(){return"Pirate Steve"}_generateRandomAge(){return Math.round(Ze(35,10)).toString()}_pickRandomArchetype(){return Je(["Swashbuckler","Scoundrel","Navigator","Dispossessed","Chronicler","Bruiser","Aristocrat","Alchemist","Administrator"])}_pickRandomGender(){return bt(new Map(Object.entries({female:1,male:1,AFAB:.2,AMAB:.2,intersex:.1})))}_pickRandomPresentation(){return""}_pickRandomPrimeValue(){return""}_pickRandomPrimeFear(){return""}_pickRandomTraits(){return""}_generateAttributes(e,o){let a;(w=>(w[w.STRENGTH=0]="STRENGTH",w[w.DEXTERITY=1]="DEXTERITY",w[w.PERCEPTION=2]="PERCEPTION",w[w.PRESENCE=3]="PRESENCE",w[w.GRACE=4]="GRACE",w[w.INTUITION=5]="INTUITION",w[w.WILL=6]="WILL",w[w.WITS=7]="WITS",w[w.AWARENESS=8]="AWARENESS"))(a||={});let s=e.averageRank*9,d=Array(9).fill(0).map(()=>Ze(1,.2)),n=d.reduce((h,C)=>h+C,0),p=d.map(h=>Math.round(h/n*s)),b=h=>h>=e.focusedDomain*3&&h<(e.focusedDomain+1)*3,v=h=>h%3==e.focusedAspect;for(let h=0;h<Math.round(s/4*e.minMaxFactor);++h){let C;do C=we(a);while(!b(C));let y;do y=we(a);while(b(y)||p[y]<=1);--p[y],++p[C];do C=we(a);while(!v(C));do y=we(a);while(v(y)||p[y]<=1);--p[y],++p[C]}return o.map((h,C)=>({...h,rank:p[C]}))}_generateNPC(){if(this._dialog?.returnValue!="confirm")return;let e={averageAttributeRank:A((this.shadowRoot?.querySelector("#rank")).value),focusedDomain:A((this.shadowRoot?.querySelector("#focused-domain")).value),focusedAspect:A((this.shadowRoot?.querySelector("#focused-aspect")).value),minMaxFactor:parseFloat((this.shadowRoot?.querySelector("#min-max-factor")).value),hasTraits:!1};this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{name:this._generateRandomName(),age:this._generateRandomAge(),player:"NPC",archetype:this._pickRandomArchetype(),gender:this._pickRandomGender(),presentation:this._pickRandomPresentation(),primeValue:this._pickRandomPrimeValue(),primeFear:this._pickRandomPrimeFear(),traits:e.hasTraits?this._pickRandomTraits():"",attributes:this._generateAttributes({averageRank:e.averageAttributeRank,minMaxFactor:e.minMaxFactor,focusedDomain:e.focusedDomain,focusedAspect:e.focusedAspect},this.model.attributes)}},bubbles:!0,composed:!0,cancelable:!1}))}};Z.styles=[g,c`
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
    `],l([f({type:Object})],Z.prototype,"model",2),l([oe("dialog")],Z.prototype,"_dialog",2),Z=l([x("npc-generator")],Z);$({icons:[De]});var ne=class extends m{constructor(){super(...arguments);this.size=32}render(){return i`<lucide-icon
      .size=${this.size}
      .icon=${De}
    ></lucide-icon>`}};ne.styles=[g,c`
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
    `],l([f({type:Number})],ne.prototype,"size",2),ne=l([x("loading-spinner")],ne);$({icons:[Ce]});var O=class extends m{constructor(){super(...arguments);this.loading=!1}render(){return i`
      <h2>Portrait</h2>
      <input
        id="file-picker"
        type="file"
        hidden
        @change=${this.onPortraitPicked}
      />
      <section>
        ${X(this.model.portraitUrl,()=>i`<div
              id="image"
              style="background-image: url('${this.model.portraitUrl}'); background-color: ${this.model.portraitBg}"
              @click=${this.choosePortrait}
            >
              <icon-button
                title="Replace portrait"
                @click=${this.choosePortrait}
              >
                <lucide-icon size="32" .icon=${Ce}></lucide-icon>
              </icon-button>
            </div>`,()=>i`<div id="placeholder" @click=${this.choosePortrait}>
            ${X(this.loading,()=>i`<loading-spinner></loading-spinner>`,()=>i`<icon-button
                title="Add portrait"
                @click=${this.choosePortrait}
              >
                <lucide-icon size="32" .icon=${Ce}></lucide-icon>
              </icon-button>`)}
          </div>`)}
      </section>
    `}choosePortrait(e){this.filePicker?.click(),e.stopPropagation()}onPortraitPicked(e){let o=this.filePicker?.files?.[0];if(!o)return;this.loading=!0;let a=new FileReader;a.onload=s=>{let d=s.target.result,n=new Image;n.src=d,n.onload=p=>{let b=document.createElement("canvas"),v=Math.min(1,650/n.width);b.width=n.width*v,b.height=n.height*v;let h=b.getContext("2d",{willReadFrequently:!0});h?.scale(v,v),h?.drawImage(n,0,0);let C=h?.getImageData(0,0,n.width*v,n.height*v),y=h?.getImageData(0,0,1,1).data,V=y?`#${(y[0]<<16|y[1]<<8|y[2]).toString(16)}`:"";this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{portraitUrl:b.toDataURL("image/jpeg",.7),portraitBg:V}},bubbles:!0,composed:!0})),this.loading=!1}},a.readAsDataURL(o)}};O.styles=[g,c`
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
    `],l([f({type:Object})],O.prototype,"model",2),l([oe("#file-picker")],O.prototype,"filePicker",2),l([ct()],O.prototype,"loading",2),O=l([x("portrait-view")],O);$({icons:{Plus:P}});var H=class extends m{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return i`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        title=${this.canAffordRank?`Buy a rank of this specialization for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this specialization (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${P} .size=${16}></lucide-icon>
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
        .value=${M(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="bonus">${this.model.rank?`+${this.model.rank}`:""}</div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${M(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(e){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{name:e.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(e){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(e){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{xp:A(e.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(e){let o=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),o>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-o}},bubbles:!0,composed:!0,cancelable:!1}))}};H.styles=[g,c`
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
    `],l([f({type:Object})],H.prototype,"model",2),l([f({type:Number})],H.prototype,"generalXp",2),l([f({type:Boolean})],H.prototype,"locked",2),H=l([x("specialization-view")],H);var _=class extends m{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",e=>this.recalculateColumns())}render(){return i`
      <h2>Specializations</h2>
      <header>
        ${Array.from(Array(this.columnCount).keys()).map(()=>i`<div class="header-column">
            <div class="text-column"></div>
            <div class="numeric-column">Rank</div>
            <div class="die-code-column">Bonus</div>
            <div class="numeric-column last-column">XP</div>
          </div>`)}
      </header>
      <section>
        ${this.model.specializations.map(e=>i`<specialization-view
              .model=${e}
              .generalXp=${this.model.xp}
              .locked=${this.locked}
            ></specialization-view>`)}
        ${this.locked?i``:this.renderEditUi()}
      </section>
    `}renderEditUi(){return i`<div id="edit-ui">
      <button @click=${this.onAddButtonClicked}>Add row</button>
    </div>`}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}onAddButtonClicked(e){this.dispatchEvent(new CustomEvent("add-specialization-row",{detail:{},bubbles:!0,composed:!0}))}};_.styles=[g,c`
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
    `],l([f({type:Object})],_.prototype,"model",2),l([f({type:Number})],_.prototype,"columnCount",2),l([f({type:Boolean})],_.prototype,"locked",2),_=l([x("specializations-view")],_);var J=class extends m{constructor(){super(...arguments);this.showHeader=!1}render(){return i`
      ${this.showHeader?this.renderHeader():i``}
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
    `}renderHeader(){return i`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Wounds</span>
        <span id="effects-header">Effects</span>
        <span id="shock-check-header">Shock check</span>
      </header>
    `}onCheckedChanged(e){this.dispatchEvent(new CustomEvent("wound-level-change",{detail:{id:this.model.id,checked:e.target.checked},bubbles:!0,composed:!0}))}};J.styles=[g,c`
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
    `],l([f({type:Object})],J.prototype,"model",2),l([f({type:Boolean})],J.prototype,"showHeader",2),J=l([x("wound-level-view")],J);var Q=class extends m{constructor(){super(...arguments);this.showHeader=!1}render(){return i`
      ${this.showHeader?this.renderHeader():i``}
      <div id="content">
        <input
          type="checkbox"
          .checked=${this.model.checked}
          @change=${this.onCheckedChanged}
        />
        <span id="level">${this.model.level}</span>
        <span id="effects">${this.model.effects}</span>
      </div>
    `}renderHeader(){return i`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Fatigue</span>
        <span id="effects-header">Effects</span>
      </header>
    `}onCheckedChanged(e){this.dispatchEvent(new CustomEvent("fatigue-level-change",{detail:{id:this.model.id,checked:e.target.checked},bubbles:!0,composed:!0}))}};Q.styles=[g,c`
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
    `],l([f({type:Object})],Q.prototype,"model",2),l([f({type:Boolean})],Q.prototype,"showHeader",2),Q=l([x("fatigue-level-view")],Q);var Y=class extends m{constructor(){super(...arguments);this.locked=!0}render(){return i`
      <h2>Status</h2>
      <section>
        <div id="wound-levels">
          ${this.model.status.woundLevels.map((e,o)=>i`<wound-level-view
                .model=${e}
                .showHeader=${o===0}
              ></wound-level-view>`)}
          ${this.locked?i``:this.renderWoundEditUi()}
        </div>
        <div id="fatigue-levels">
          ${this.model.status.fatigueLevels.map((e,o)=>i`<fatigue-level-view
                .model=${e}
                .showHeader=${o===0}
              ></fatigue-level-view>`)}
          ${this.locked?i``:this.renderFatigueEditUi()}
        </div>
      </section>
    `}renderWoundEditUi(){return i`
      <div id="wound-edit-ui">
        <button @click=${this.onAddWoundLevel}>Add wound level</button
        ><button
          .disabled=${this.model.status.woundLevels.length<=6}
          @click=${this.onRemoveWoundLevel}
        >
          Remove wound level
        </button>
      </div>
    `}renderFatigueEditUi(){return i`
      <div id="fatigue-edit-ui">
        <button @click=${this.onAddFatigueLevel}>Add fatigue level</button
        ><button @click=${this.onRemoveFatigueLevel}>
          Remove fatigue level
        </button>
      </div>
    `}onAddWoundLevel(e){this.dispatchEvent(new CustomEvent("add-wound-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveWoundLevel(e){this.dispatchEvent(new CustomEvent("remove-wound-level",{detail:{},bubbles:!0,composed:!0}))}onAddFatigueLevel(e){this.dispatchEvent(new CustomEvent("add-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveFatigueLevel(e){this.dispatchEvent(new CustomEvent("remove-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}};Y.styles=[g,c`
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
    `],l([f({type:Object})],Y.prototype,"model",2),l([f({type:Boolean})],Y.prototype,"locked",2),Y=l([x("status-view")],Y);var fe=class extends m{render(){return i`
      <h2>Wealth</h2>

      <section>
        <table>
          <tr>
            <th></th>
            <th>Party Wealth</th>
            <th>Individual Wealth</th>
          </tr>
          ${this.model.wealth.map(e=>i`
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
    `}partyWealthLevelChangedHandler(e){return o=>{this.dispatchEvent(new CustomEvent("party-wealth-level-change",{detail:{id:e,checked:o.target.checked},bubbles:!0,composed:!0}))}}individualWealthLevelChangedHandler(e){return o=>{this.dispatchEvent(new CustomEvent("individual-wealth-level-change",{detail:{id:e,checked:o.target.checked},bubbles:!0,composed:!0}))}}};fe.styles=[g,c`
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
    `],l([f({type:Object})],fe.prototype,"model",2),fe=l([x("wealth-view")],fe);$({icons:{FileUp:Re,Save:Fe,Printer:Te,Lock:Le,LockOpen:ye,Dices:Ke,UserRoundPlus:ke,Share2:Ue}});function S(r,t){return Array(r).fill(null).map(()=>t())}var u=class extends m{constructor(){super();this.columnCount=3;this.locked=!0;this._printDiv=null;this.model={name:"",archetype:"",player:"",age:"",gender:"",presentation:"",primeValue:"",primeFear:"",traits:"",description:"",notes:"",portraitUrl:"",portraitBg:"",xp:0,connections:S(21,()=>({name:"",relationship:"",id:u.makeId()})),status:{woundLevels:[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:u.makeId()},{level:"2",effects:"-1",shockCheck:"",checkable:!0,checked:!1,id:u.makeId()},{level:"3",effects:"-2",shockCheck:"5",checkable:!0,checked:!1,id:u.makeId()},{level:"4",effects:"-1d",shockCheck:"10",checkable:!0,checked:!1,id:u.makeId()},{level:"5",effects:"-2d",shockCheck:"15",checkable:!0,checked:!1,id:u.makeId()},{level:"6",effects:"-3d",shockCheck:"30",checkable:!0,checked:!1,id:u.makeId()},{level:"7+",effects:"Death",shockCheck:"\u{1F571}",checkable:!1,checked:!1,id:u.makeId()}],fatigueLevels:[{level:"1",effects:"-1d",checked:!1,id:u.makeId()},{level:"2",effects:"-2d",checked:!1,id:u.makeId()},{level:"3",effects:"-3d",checked:!1,id:u.makeId()},{level:"4",effects:"-4d",checked:!1,id:u.makeId()}]},attributes:[{name:"Strength",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Dexterity",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Perception",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Presence",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Grace",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Intuition",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Will",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Wits",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))},{name:"Awareness",id:u.makeId(),skills:S(8,()=>({name:"",id:u.makeId()}))}],specializations:S(15,()=>({name:"",rank:0,xp:0,id:u.makeId()})),inventory:{equipment:S(12,()=>({name:"",bonus:"",id:u.makeId()})),items:S(12,()=>({name:"",quantity:0,id:u.makeId()}))},wealth:[{name:"Indebted",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Destitute",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Struggling",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Adequate",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Comfortable",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Prosperous",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Wealthy",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()},{name:"Opulent",selectedForParty:!1,selectedForIndividual:!1,id:u.makeId()}]},this.columnCount=3,this.locked=!0,this._printDiv=null}static makeId(){return Math.random().toString(36).slice(2,11)}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeprint",e=>this.onBeforePrint(e)),window.addEventListener("afterprint",e=>this.onAfterPrint(e)),this.addEventListener("character-change",e=>this.onCharacterChange(e)),this.addEventListener("connection-change",e=>this.onConnectionChange(e)),this.addEventListener("wound-level-change",e=>this.onWoundLevelChange(e)),this.addEventListener("fatigue-level-change",e=>this.onFatigueLevelChange(e)),this.addEventListener("attribute-change",e=>this.onAttributeChange(e)),this.addEventListener("skill-change",e=>this.onSkillChange(e)),this.addEventListener("specialization-change",e=>this.onSpecializationChange(e)),this.addEventListener("equipment-change",e=>this.onEquipmentChange(e)),this.addEventListener("item-change",e=>this.onItemChange(e)),this.addEventListener("party-wealth-level-change",e=>this.onPartyWealthLevelChange(e)),this.addEventListener("individual-wealth-level-change",e=>this.onIndividualWealthLevelChange(e)),this.addEventListener("add-connection-row",e=>this.onAddConnectionRow(e)),this.addEventListener("add-wound-level",e=>this.onAddWoundLevel(e)),this.addEventListener("remove-wound-level",e=>this.onRemoveWoundLevel(e)),this.addEventListener("add-fatigue-level",e=>this.onAddFatigueLevel(e)),this.addEventListener("remove-fatigue-level",e=>this.onRemoveFatigueLevel(e)),this.addEventListener("add-skill-row",e=>this.onAddSkillRow(e)),this.addEventListener("add-specialization-row",e=>this.onAddSpecializationRow(e)),this.addEventListener("add-equipment-row",e=>this.onAddEquipmentRow(e)),this.addEventListener("add-item-row",e=>this.onAddItemRow(e))}render(){return i`
      <div id="modal-loading-spinner">
        <loading-spinner size="64"></loading-spinner>
      </div>
      <npc-generator id="npc-generator" .model=${this.model}></npc-generator>
      <nav>
        <icon-button
          id="load-button"
          title="Load from file"
          @click=${this.onLoadFromFile}
        >
          <lucide-icon .size=${20} .icon=${Re}></lucide-icon>
        </icon-button>
        <icon-button
          id="save-button"
          title="Save to file"
          @click=${this.onSaveToFile}
          ><lucide-icon .size=${20} .icon=${Fe}></lucide-icon
        ></icon-button>
        <icon-button
          id="share-button"
          title="Share (mobile only)"
          @click=${this.onMobileShare}
          ><lucide-icon .size=${20} .icon=${Ue}></lucide-icon
        ></icon-button>
        <icon-button id="print-button" title="Print" @click=${this.onPrint}>
          <lucide-icon .size=${20} .icon=${Te}></lucide-icon>
        </icon-button>
        <icon-button
          id="lock-button"
          title="Lock/unlock"
          .on=${this.locked}
          @click=${this.onToggleLocked}
          ><lucide-icon .size=${20} .icon=${ye}></lucide-icon
          ><lucide-icon slot="on" .size=${20} .icon=${Le}></lucide-icon
        ></icon-button>
        ${X(!1,()=>i`<icon-button
              id="generate-button"
              title="Generate NPC"
              @click=${()=>{this.shadowRoot.querySelector("#npc-generator").configure()}}
              ><lucide-icon .size=${20} .icon=${ke}></lucide-icon
            ></icon-button>`)}
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
    `}onCharacterChange(e){let o=e.detail.change;this.model={...this.model,...o}}onConnectionChange(e){let o=e.detail.id,a=e.detail.change,s=this.model.connections.find(n=>n.id===o),d={...s,...a};this.model={...this.model,connections:[...this.model.connections.map(n=>n===s?d:n)]}}onWoundLevelChange(e){let o=e.detail.id,a=e.detail.checked,s=[...this.model.status.woundLevels],d=s.findIndex(n=>n.id===o);a?s=s.map((n,p)=>({...n,checked:p<=d})):s=s.map((n,p)=>({...n,checked:p>=d?!1:n.checked})),this.model={...this.model,status:{...this.model.status,woundLevels:s}}}onFatigueLevelChange(e){let o=e.detail.id,a=e.detail.checked,s=[...this.model.status.fatigueLevels],d=s.findIndex(n=>n.id===o);a?s=s.map((n,p)=>({...n,checked:p<=d})):s=s.map((n,p)=>({...n,checked:p>=d?!1:n.checked})),this.model={...this.model,status:{...this.model.status,fatigueLevels:s}}}onAttributeChange(e){let o=e.detail.id,a=e.detail.change,s=this.model.attributes.find(n=>n.id===o),d={...s,...a};this.model={...this.model,attributes:[...this.model.attributes.map(n=>n===s?d:n)]}}onSkillChange(e){let o=e.detail.attribute,a=e.detail.id,s=e.detail.change,d=this.model.attributes.find(v=>v.id===o),n=d.skills.find(v=>v.id===a),p={...n,...s},b={...d,skills:[...d.skills.map(v=>v===n?p:v)]};this.model={...this.model,attributes:[...this.model.attributes.map(v=>v===d?b:v)]}}onSpecializationChange(e){let o=e.detail.id,a=e.detail.change,s=this.model.specializations.find(n=>n.id===o),d={...s,...a};this.model={...this.model,specializations:[...this.model.specializations.map(n=>n===s?d:n)]}}onEquipmentChange(e){let o=e.detail.id,a=e.detail.change,s=this.model.inventory.equipment.find(n=>n.id===o),d={...s,...a};this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment.map(n=>n===s?d:n)]}}}onItemChange(e){let o=e.detail.id,a=e.detail.change,s=this.model.inventory.items.find(n=>n.id===o),d={...s,...a};this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items.map(n=>n===s?d:n)]}}}onPartyWealthLevelChange(e){let o=e.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(a=>({...a,selectedForParty:a.id===o}))]}}onIndividualWealthLevelChange(e){let o=e.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(a=>({...a,selectedForIndividual:a.id===o}))]}}onAddConnectionRow(e){this.model={...this.model,connections:[...this.model.connections,...S(3,()=>({name:"",relationship:"",id:u.makeId()}))]}}onAddSpecializationRow(e){this.model={...this.model,specializations:[...this.model.specializations,...S(3,()=>({name:"",id:u.makeId()}))]}}onAddSkillRow(e){let o=e.detail.id;this.model={...this.model,attributes:[...this.model.attributes.map(a=>a.id===o?{...a,skills:[...a.skills,{name:"",rank:0,xp:0,id:u.makeId()}]}:a)]}}onAddWoundLevel(e){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((o,a)=>a===0?[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:u.makeId()},{...o,level:`${a+2}`}]:[{...o,level:`${a+2}`}])}}}onRemoveWoundLevel(e){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((o,a)=>a===0?[]:[{...o,level:`${a}`}])}}}onAddFatigueLevel(e){let o=this.model.status.fatigueLevels.length+1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(o).keys()).map(a=>({level:`${a+1}`,effects:`-${a+1}d`,checked:this.model.status.fatigueLevels.length>a?this.model.status.fatigueLevels[a].checked:!1,id:u.makeId()}))}}}onRemoveFatigueLevel(e){let o=this.model.status.fatigueLevels.length-1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(o).keys()).map(a=>({level:`${a+1}`,effects:`-${a+1}d`,checked:this.model.status.fatigueLevels[a].checked,id:u.makeId()}))}}}onAddEquipmentRow(e){this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment,{name:"",bonus:"",id:u.makeId()}]}}}onAddItemRow(e){this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items,{name:"",quantity:0,id:u.makeId()}]}}}lint(e){return{...e,attributes:e.attributes.map(o=>({...o,skills:o.skills.map(a=>({...a,name:a.name??void 0,rank:a.name?a.rank:void 0,xp:a.name?a.xp:void 0}))})),specializations:e.specializations.map(o=>({...o,name:o.name??void 0,rank:o.name?o.rank:void 0,xp:o.name?o.xp:void 0}))}}onSaveToFile(e){let o=JSON.stringify(this.lint(this.model),void 0,2),a=document.createElement("a"),s=new Blob([o],{type:"application/json"});a.href=URL.createObjectURL(s),a.download=`${this._toFileName(this.model.name)}.json`,a.click(),URL.revokeObjectURL(a.href)}async onMobileShare(e){let o=JSON.stringify(this.lint(this.model),void 0,2),a=new Blob([o],{type:"application/json"}),s=new File([a],`${this._toFileName(this.model.name)}.json`);navigator.canShare({files:[s]})||alert("Sorry, sharing is not available.  Try saving instead.");try{await navigator.share({files:[s]})}catch(d){alert(`Sorry, sharing failed with the following error: ${d.message}.`)}}onLoadFromFile(e){let o=document.createElement("input");o.type="file",o.accept="application/json",o.addEventListener("change",async()=>{if(!o.files)return;this.modalLoadingSpinner.style.display="flex";let s=await o.files[0].text();this.model=this.lint(JSON.parse(s)),this.modalLoadingSpinner.style.display="none"},{once:!0}),o.click()}onPrint(e){this.onBeforePrint(null),requestAnimationFrame(()=>{window.print()})}onBeforePrint(e){if(!this._printDiv){this._printDiv=document.createElement("div");let o=this.shadowRoot.getRootNode();for(let a of o.querySelector("main").children){let s=a.cloneNode(!0);"model"in s&&(s.model=this.model),"columnCount"in s&&(s.columnCount=3),this._printDiv.appendChild(s),"flushUpdate"in s&&typeof s.flushUpdate=="function"&&s.flushUpdate()}document.body.appendChild(this._printDiv)}}onAfterPrint(e){this._printDiv?.remove(),this._printDiv=null}onToggleLocked(e){let o=e.target;this.locked=!o.on}_toFileName(e){return e.replace(/\W+/g,"_").toLowerCase()}};u.styles=[g,c`
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
        padding: 8px;
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
    `],l([f({type:Object})],u.prototype,"model",2),l([f({type:Number})],u.prototype,"columnCount",2),l([f({type:Boolean})],u.prototype,"locked",2),l([oe("#modal-loading-spinner")],u.prototype,"modalLoadingSpinner",2),u=l([x("character-sheet")],u);})();
/*! Bundled license information:

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
*/
//# sourceMappingURL=main.js.map
