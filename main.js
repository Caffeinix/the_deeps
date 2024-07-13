"use strict";(()=>{var oo=Object.defineProperty;var ao=Object.getOwnPropertyDescriptor;var p=(t,e,i,n)=>{for(var r=n>1?void 0:n?ao(e,i):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(n?a(e,i,r):a(r))||r);return n&&r&&oo(e,i,r),r};var Lt=globalThis,Tt=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mi=Symbol(),Nr=new WeakMap,tt=class{constructor(e,i,n){if(this._$cssResult$=!0,n!==Mi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(Tt&&e===void 0){let n=i!==void 0&&i.length===1;n&&(e=Nr.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Nr.set(i,e))}return e}toString(){return this.cssText}},Rr=t=>new tt(typeof t=="string"?t:t+"",void 0,Mi),b=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new tt(i,t,Mi)},Ei=(t,e)=>{if(Tt)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let n=document.createElement("style"),r=Lt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=i.cssText,t.appendChild(n)}},Ot=Tt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let n of e.cssRules)i+=n.cssText;return Rr(i)})(t):t;var{is:lo,defineProperty:ho,getOwnPropertyDescriptor:co,getOwnPropertyNames:po,getOwnPropertySymbols:uo,getPrototypeOf:mo}=Object,It=globalThis,$r=It.trustedTypes,fo=$r?$r.emptyScript:"",go=It.reactiveElementPolyfillSupport,it=(t,e)=>t,rt={toAttribute(t,e){switch(e){case Boolean:t=t?fo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Nt=(t,e)=>!lo(t,e),Dr={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),It.litPropertyMetadata??=new WeakMap;var X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Dr){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,i);r!==void 0&&ho(this.prototype,e,r)}}static getPropertyDescriptor(e,i,n){let{get:r,set:s}=co(this.prototype,e)??{get(){return this[i]},set(a){this[i]=a}};return{get(){return r?.call(this)},set(a){let o=r?.call(this);s.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Dr}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;let e=mo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){let i=this.properties,n=[...po(i),...uo(i)];for(let r of n)this.createProperty(r,i[r])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[n,r]of i)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[i,n]of this.elementProperties){let r=this._$Eu(i,n);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)i.unshift(Ot(r))}else e!==void 0&&i.push(Ot(e));return i}static _$Eu(e,i){let n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ei(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$EC(e,i){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:rt).toAttribute(i,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,i){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:rt;this._$Em=r,this[r]=a.fromAttribute(i,s.type),this._$Em=null}}requestUpdate(e,i,n){if(e!==void 0){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??Nt)(this[e],i))return;this.P(e,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,n){this._$AL.has(e)||this._$AL.set(e,i),n.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,s]of n)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(i)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(i=>this._$EC(i,this[i])),this._$EU()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[it("elementProperties")]=new Map,X[it("finalized")]=new Map,go?.({ReactiveElement:X}),(It.reactiveElementVersions??=[]).push("2.0.4");var Ti=globalThis,Rt=Ti.trustedTypes,Vr=Rt?Rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Kr="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Wr="?"+re,vo=`<${Wr}>`,fe=document,st=()=>fe.createComment(""),ot=t=>t===null||typeof t!="object"&&typeof t!="function",Yr=Array.isArray,_o=t=>Yr(t)||typeof t?.[Symbol.iterator]=="function",Si=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,Br=/>/g,ue=RegExp(`>|${Si}(?:([^\\s"'>=/]+)(${Si}*=${Si}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ur=/'/g,jr=/"/g,Xr=/^(?:script|style|textarea|title)$/i,Jr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),m=Jr(1),y1=Jr(2),ge=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),qr=new WeakMap,me=fe.createTreeWalker(fe,129);function Gr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vr!==void 0?Vr.createHTML(e):e}var yo=(t,e)=>{let i=t.length-1,n=[],r,s=e===2?"<svg>":"",a=nt;for(let o=0;o<i;o++){let l=t[o],d,h,c=-1,u=0;for(;u<l.length&&(a.lastIndex=u,h=a.exec(l),h!==null);)u=a.lastIndex,a===nt?h[1]==="!--"?a=Fr:h[1]!==void 0?a=Br:h[2]!==void 0?(Xr.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=ue):h[3]!==void 0&&(a=ue):a===ue?h[0]===">"?(a=r??nt,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?ue:h[3]==='"'?jr:Ur):a===jr||a===Ur?a=ue:a===Fr||a===Br?a=nt:(a=ue,r=void 0);let _=a===ue&&t[o+1].startsWith("/>")?" ":"";s+=a===nt?l+vo:c>=0?(n.push(d),l.slice(0,c)+Kr+l.slice(c)+re+_):l+re+(c===-2?o:_)}return[Gr(t,s+(t[i]||"<?>")+(e===2?"</svg>":"")),n]},at=class t{constructor({strings:e,_$litType$:i},n){let r;this.parts=[];let s=0,a=0,o=e.length-1,l=this.parts,[d,h]=yo(e,i);if(this.el=t.createElement(d,n),me.currentNode=this.el.content,i===2){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=me.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(Kr)){let u=h[a++],_=r.getAttribute(c).split(re),z=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:z[2],strings:_,ctor:z[1]==="."?Ai:z[1]==="?"?Pi:z[1]==="@"?Hi:Le}),r.removeAttribute(c)}else c.startsWith(re)&&(l.push({type:6,index:s}),r.removeAttribute(c));if(Xr.test(r.tagName)){let c=r.textContent.split(re),u=c.length-1;if(u>0){r.textContent=Rt?Rt.emptyScript:"";for(let _=0;_<u;_++)r.append(c[_],st()),me.nextNode(),l.push({type:2,index:++s});r.append(c[u],st())}}}else if(r.nodeType===8)if(r.data===Wr)l.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(re,c+1))!==-1;)l.push({type:7,index:s}),c+=re.length-1}s++}}static createElement(e,i){let n=fe.createElement("template");return n.innerHTML=e,n}};function He(t,e,i=t,n){if(e===ge)return e;let r=n!==void 0?i._$Co?.[n]:i._$Cl,s=ot(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,n)),n!==void 0?(i._$Co??=[])[n]=r:i._$Cl=r),r!==void 0&&(e=He(t,r._$AS(t,e.values),r,n)),e}var ki=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:i},parts:n}=this._$AD,r=(e?.creationScope??fe).importNode(i,!0);me.currentNode=r;let s=me.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new lt(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new Li(s,this,e)),this._$AV.push(d),l=n[++o]}a!==l?.index&&(s=me.nextNode(),a++)}return me.currentNode=fe,r}p(e){let i=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}},lt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=He(this,e,i),ot(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_o(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==k&&ot(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){let{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=at.createElement(Gr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(i);else{let s=new ki(r,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(e){let i=qr.get(e.strings);return i===void 0&&qr.set(e.strings,i=new at(e)),i}k(e){Yr(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,n,r=0;for(let s of e)r===i.length?i.push(n=new t(this.S(st()),this.S(st()),this,this.options)):n=i[r],n._$AI(s),r++;r<i.length&&(this._$AR(n&&n._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,n,r,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,i=this,n,r){let s=this.strings,a=!1;if(s===void 0)e=He(this,e,i,0),a=!ot(e)||e!==this._$AH&&e!==ge,a&&(this._$AH=e);else{let o=e,l,d;for(e=s[0],l=0;l<s.length-1;l++)d=He(this,o[n+l],i,l),d===ge&&(d=this._$AH[l]),a||=!ot(d)||d!==this._$AH[l],d===k?e=k:e!==k&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ai=class extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Pi=class extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Hi=class extends Le{constructor(e,i,n,r,s){super(e,i,n,r,s),this.type=5}_$AI(e,i=this){if((e=He(this,e,i,0)??k)===ge)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Li=class{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){He(this,e)}};var bo=Ti.litHtmlPolyfillSupport;bo?.(at,lt),(Ti.litHtmlVersions??=[]).push("3.1.2");var Zr=(t,e,i)=>{let n=i?.renderBefore??e,r=n._$litPart$;if(r===void 0){let s=i?.renderBefore??null;n._$litPart$=r=new lt(e.insertBefore(st(),s),s,void 0,i??{})}return r._$AI(t),r};var y=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zr(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};y._$litElement$=!0,y.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:y});var xo=globalThis.litElementPolyfillSupport;xo?.({LitElement:y});(globalThis.litElementVersions??=[]).push("4.0.4");var x=b`
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
`;var ve=!(window.ShadyDOM&&window.ShadyDOM.inUse),$t;function Qr(t){t&&t.shimcssproperties?$t=!1:$t=ve||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}var ne;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ne=window.ShadyCSS.cssBuild);var Dt=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?$t=window.ShadyCSS.nativeCss:window.ShadyCSS?(Qr(window.ShadyCSS),window.ShadyCSS=void 0):Qr(window.WebComponents&&window.WebComponents.flags);var Te=$t;var Vt=class{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}};function Oi(t){return t=wo(t),en(Co(t),t)}function wo(t){return t.replace(G.comments,"").replace(G.port,"")}function Co(t){let e=new Vt;e.start=0,e.end=t.length;let i=e;for(let n=0,r=t.length;n<r;n++)if(t[n]===tn){i.rules||(i.rules=[]);let s=i,a=s.rules[s.rules.length-1]||null;i=new Vt,i.start=n+1,i.parent=s,i.previous=a,s.rules.push(i)}else t[n]===rn&&(i.end=n+1,i=i.parent||e);return e}function en(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let r=t.previous?t.previous.end:t.parent.start;i=e.substring(r,t.start-1),i=zo(i),i=i.replace(G.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let s=t.parsedSelector=t.selector=i.trim();t.atRule=s.indexOf(Po)===0,t.atRule?s.indexOf(Ao)===0?t.type=J.MEDIA_RULE:s.match(G.keyframesRule)&&(t.type=J.KEYFRAMES_RULE,t.keyframesName=t.selector.split(G.multipleSpaces).pop()):s.indexOf(nn)===0?t.type=J.MIXIN_RULE:t.type=J.STYLE_RULE}let n=t.rules;if(n)for(let r=0,s=n.length,a;r<s&&(a=n[r]);r++)en(a,e);return t}function zo(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function Ii(t,e,i=""){let n="";if(t.cssText||t.rules){let r=t.rules;if(r&&!Mo(r))for(let s=0,a=r.length,o;s<a&&(o=r[s]);s++)n=Ii(o,e,n);else n=e?t.cssText:Eo(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+tn+`
`),i+=n,t.selector&&(i+=rn+`

`)),i}function Mo(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(nn)===0}function Eo(t){return t=So(t),ko(t)}function So(t){return t.replace(G.customProp,"").replace(G.mixinProp,"")}function ko(t){return t.replace(G.mixinApply,"").replace(G.varApply,"")}var J={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},tn="{",rn="}",G={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},nn="--",Ao="@media",Po="@";var dt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Oe=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;var sn=/@media\s(.*)/;var on=new Set,Ho="shady-unscoped";function an(t){let e=t.textContent;if(!on.has(e)){on.add(e);let i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function ln(t){return t.hasAttribute(Ho)}function ht(t,e){return t?(typeof t=="string"&&(t=Oi(t)),e&&Ie(t,e),Ii(t,Te)):""}function Ni(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Oi(t.textContent)),t.__cssRules||null}function Ie(t,e,i,n){if(!t)return;let r=!1,s=t.type;if(n&&s===J.MEDIA_RULE){let o=t.selector.match(sn);o&&(window.matchMedia(o[1]).matches||(r=!0))}s===J.STYLE_RULE?e(t):i&&s===J.KEYFRAMES_RULE?i(t):s===J.MIXIN_RULE&&(r=!0);let a=t.rules;if(a&&!r)for(let o=0,l=a.length,d;o<l&&(d=a[o]);o++)Ie(d,e,i,n)}function Lo(t,e){let i=0;for(let n=e,r=t.length;n<r;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function Ri(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=Lo(t,i+3),r=t.substring(i+4,n),s=t.substring(0,i),a=Ri(t.substring(n+1),e),o=r.indexOf(",");if(o===-1)return e(s,r.trim(),"",a);let l=r.substring(0,o).trim(),d=r.substring(o+1).trim();return e(s,l,d,a)}var U1=window.ShadyDOM&&window.ShadyDOM.wrap||(t=>t);function dn(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function hn(t){let e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){let r=i[n];ln(r)?ve||(an(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}var cn="css-build";function To(t){if(ne!==void 0)return ne;if(t.__cssBuild===void 0){let e=t.getAttribute(cn);if(e)t.__cssBuild=e;else{let i=Oo(t);i!==""&&Io(t),t.__cssBuild=i}}return t.__cssBuild||""}function $i(t){return To(t)!==""}function Oo(t){let e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){let i=e.textContent.trim().split(":");if(i[0]===cn)return i[1]}return""}function Io(t){let e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}function ct(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Ft(t,e){let i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function pn(t){let e=Oe.test(t)||dt.test(t);return Oe.lastIndex=0,dt.lastIndex=0,e}var No=/;\s*/m,Ro=/^\s*(initial)|(inherit)\s*$/,un=/\s*!important/,Di="_-_";var Vi=class{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}},Bt=null,H=class{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Vi}detectMixin(e){return pn(e)}gatherStyles(e){let i=hn(e.content);if(i){let n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));let n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=Ni(e);return this.transformRules(n,i),e.textContent=ht(n),n}transformCustomStyle(e){let i=Ni(e);return Ie(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=ht(i),i}transformRules(e,i){this._currentElement=i,Ie(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace(dt,(n,r,s,a)=>this._produceCssProperties(n,r,s,a,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;let n={},r=!1;return Ie(i,s=>{r=r||s===e,!r&&s.selector===e.selector&&Object.assign(n,this._cssTextToMap(s.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=Oe.exec(e);){let r=n[0],s=n[1],a=n.index,o=a+r.indexOf("@apply"),l=a+r.length,d=e.slice(0,o),h=e.slice(l),c=i?this._fallbacksFromPreviousRules(i):{};Object.assign(c,this._cssTextToMap(d));let u=this._atApplyToCssProperties(s,c);e=`${d}${u}${h}`,Oe.lastIndex=a+u.length}return e}_atApplyToCssProperties(e,i){e=e.replace(No,"");let n=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let s,a,o,l=r.properties;for(s in l)o=i&&i[s],a=[s,": var(",e,Di,s],o&&a.push(",",o.replace(un,"")),a.push(")"),un.test(l[s])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=Ro.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),r,s,a={};for(let o=0,l,d;o<n.length;o++)l=n[o],l&&(d=l.split(":"),d.length>1&&(r=d[0].trim(),s=d.slice(1).join(":"),i&&(s=this._replaceInitialOrInherit(r,s)),a[r]=s));return a}_invalidateMixinEntry(e){if(Bt)for(let i in e.dependants)i!==this._currentElement&&Bt(i)}_produceCssProperties(e,i,n,r,s){if(n&&Ri(n,(F,P)=>{P&&this._map.get(P)&&(r=`@apply ${P};`)}),!r)return e;let a=this._consumeCssProperties(""+r,s),o=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),d=l,h=this._map.get(i),c=h&&h.properties;c?d=Object.assign(Object.create(c),l):this._map.set(i,d);let u=[],_,z,N=!1;for(_ in d)z=l[_],z===void 0&&(z="initial"),c&&!(_ in c)&&(N=!0),u.push(`${i}${Di}${_}: ${z}`);return N&&this._invalidateMixinEntry(h),h&&(h.properties=d),n&&(o=`${e};${o}`),`${o}${u.join("; ")};`}};H.prototype.detectMixin=H.prototype.detectMixin;H.prototype.transformStyle=H.prototype.transformStyle;H.prototype.transformCustomStyle=H.prototype.transformCustomStyle;H.prototype.transformRules=H.prototype.transformRules;H.prototype.transformRule=H.prototype.transformRule;H.prototype.transformTemplate=H.prototype.transformTemplate;H.prototype._separator=Di;Object.defineProperty(H.prototype,"invalidCallback",{get(){return Bt},set(t){Bt=t}});var mn=H;var $o={},pt=$o;var Ut="_applyShimCurrentVersion",Ne="_applyShimNextVersion",jt="_applyShimValidatingVersion",Do=Promise.resolve();function fn(t){let e=pt[t];e&&Vo(e)}function Vo(t){t[Ut]=t[Ut]||0,t[jt]=t[jt]||0,t[Ne]=(t[Ne]||0)+1}function Fi(t){return t[Ut]===t[Ne]}function gn(t){return!Fi(t)&&t[jt]===t[Ne]}function vn(t){t[jt]=t[Ne],t._validating||(t._validating=!0,Do.then(function(){t[Ut]=t[Ne],t._validating=!1}))}var Bi=null,_n=window.HTMLImports&&window.HTMLImports.whenReady||null,Ui;function qt(t){requestAnimationFrame(function(){_n?_n(t):(Bi||(Bi=new Promise(e=>{Ui=e}),document.readyState==="complete"?Ui():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Ui()})),Bi.then(function(){t&&t()}))})}var yn="__seenByShadyCSS",Kt="__shadyCSSCachedStyle",Wt=null,ut=null,B=class{constructor(){this.customStyles=[],this.enqueued=!1,qt(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!ut||(this.enqueued=!0,qt(ut))}addCustomStyle(e){e[yn]||(e[yn]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Kt])return e[Kt];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){let e=this.customStyles;for(let i=0;i<e.length;i++){let n=e[i];if(n[Kt])continue;let r=this.getStyleForCustomStyle(n);if(r){let s=r.__appliedElement||r;Wt&&Wt(s),n[Kt]=s}}return e}};B.prototype.addCustomStyle=B.prototype.addCustomStyle;B.prototype.getStyleForCustomStyle=B.prototype.getStyleForCustomStyle;B.prototype.processStyles=B.prototype.processStyles;Object.defineProperties(B.prototype,{transformCallback:{get(){return Wt},set(t){Wt=t}},validateCallback:{get(){return ut},set(t){let e=!1;ut||(e=!0),ut=t,e&&this.enqueueDocumentValidation()}}});var mt=new mn,ji=class{constructor(){this.customStyleInterface=null,mt.invalidCallback=fn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{mt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),$i(e))return;pt[i]=e;let n=mt.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&mt.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&ct(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}else{let n=e.children||e.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}}styleElement(e){this.ensure();let{is:i}=dn(e),n=pt[i];if(!(n&&$i(n))&&n&&!Fi(n)){gn(n)||(this.prepareTemplate(n,i),vn(n));let r=e.shadowRoot;if(r){let s=r.querySelector("style");s&&(s.__cssRules=n._styleAst,s.textContent=ht(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}};if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let t=new ji,e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,r){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,r){window.ShadyCSS.prepareTemplate(i,n,r)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return Ft(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:Te,nativeShadow:ve,cssBuild:ne,disableRuntime:Dt},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=mt;window.JSCompiler_renameProperty=function(t,e){return t};var Bo=/(url\()([^)]*)(\))/g,Uo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Yt,D;function _e(t,e){if(t&&Uo.test(t)||t==="//")return t;if(Yt===void 0){Yt=!1;try{let i=new URL("b","http://a");i.pathname="c%20d",Yt=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Yt)try{return new URL(t,e).href}catch{return t}return D||(D=document.implementation.createHTMLDocument("temp"),D.base=D.createElement("base"),D.head.appendChild(D.base),D.anchor=D.createElement("a"),D.body.appendChild(D.anchor)),D.base.href=e,D.anchor.href=t,D.anchor.href||t}function ft(t,e){return t.replace(Bo,function(i,n,r,s){return n+"'"+_e(r.replace(/["']/g,""),e)+"'"+s})}function Re(t){return t.substring(0,t.lastIndexOf("/")+1)}var qi=!window.ShadyDOM||!window.ShadyDOM.inUse,vd=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss),_d=!window.customElements.polyfillWrapFlushCallback,bn=qi&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{let t=new CSSStyleSheet;t.replaceSync("");let e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})(),xn=window.Polymer&&window.Polymer.rootPath||Re(document.baseURI||window.location.href);var gt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;var wn=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;var U=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;var Cn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;var Z=window.Polymer&&window.Polymer.legacyOptimizations||!1;var Xt=window.Polymer&&window.Polymer.legacyWarnings||!1;var zn=window.Polymer&&window.Polymer.syncInitialRender||!1;var Jt=window.Polymer&&window.Polymer.legacyUndefined||!1;var Mn=window.Polymer&&window.Polymer.orderedComputed||!1;var Ki=!0;var Wi=window.Polymer&&window.Polymer.removeNestedTemplates||!1;var Gt=window.Polymer&&window.Polymer.fastDomIf||!1;var vt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;var _t=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;var En=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;var jo=0;function Sn(){}Sn.prototype.__mixinApplications;Sn.prototype.__mixinSet;var S=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=jo++;function n(r){let s=r.__mixinSet;if(s&&s[i])return r;let a=e,o=a.get(r);if(!o){o=t(r),a.set(r,o);let l=Object.create(o.__mixinSet||s||null);l[i]=!0,o.__mixinSet=l}return o}return n};var Yi={},Pn={};function kn(t,e){Yi[t]=Pn[t.toLowerCase()]=e}function An(t){return Yi[t]||Pn[t.toLowerCase()]}function qo(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var Q=class extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=An(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,r){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=_e(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Re(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(U&&An(e)!==void 0)throw kn(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,kn(e,this),qo(this)}}};Q.prototype.modules=Yi;customElements.define("dom-module",Q);var Ko="link[rel=import][type~=css]",Wo="include",Hn="shady-unscoped";function Xi(t){return Q.import(t)}function Ln(t){let e=t.body?t.body:t,i=ft(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function Yo(t){let e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...Xo(e[n]));return i}function Xo(t){let e=Xi(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){let i=[];i.push(...Ji(e));let n=e.querySelector("template");n&&i.push(...Zt(n,e.assetpath)),e._styles=i}return e._styles}function Zt(t,e){if(!t._styles){let i=[],n=t.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let s=n[r],a=s.getAttribute(Wo);a&&i.push(...Yo(a).filter(function(o,l,d){return d.indexOf(o)===l})),e&&(s.textContent=ft(s.textContent,e)),i.push(s)}t._styles=i}return t._styles}function Tn(t){let e=Xi(t);return e?Ji(e):[]}function Ji(t){let e=[],i=t.querySelectorAll(Ko);for(let n=0;n<i.length;n++){let r=i[n];if(r.import){let s=r.import,a=r.hasAttribute(Hn);if(a&&!s._unscopedStyle){let o=Ln(s);o.setAttribute(Hn,""),s._unscopedStyle=o}else s._style||(s._style=Ln(s));e.push(a?s._unscopedStyle:s._style)}}return e}function On(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=Jo(e[n]);return i}function Jo(t){let e=Xi(t);if(e&&e._cssText===void 0){let i=Zo(e),n=e.querySelector("template");n&&(i+=Go(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Go(t,e){let i="",n=Zt(t,e);for(let r=0;r<n.length;r++){let s=n[r];s.parentNode&&s.parentNode.removeChild(s),i+=s.textContent}return i}function Zo(t){let e="",i=Ji(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}var f=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function Qt(t){return t.indexOf(".")>=0}function j(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Gi(t,e){return t.indexOf(e+".")===0}function $e(t,e){return e.indexOf(t+".")===0}function ye(t,e,i){return e+i.slice(t.length)}function In(t,e){return t===e||Gi(t,e)||$e(t,e)}function De(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let r=0;r<n.length;r++)e.push(n[r])}return e.join(".")}else return t}function Nn(t){return Array.isArray(t)?De(t).split("."):t.toString().split(".")}function L(t,e,i){let n=t,r=Nn(e);for(let s=0;s<r.length;s++){if(!n)return;let a=r[s];n=n[a]}return i&&(i.path=r.join(".")),n}function Zi(t,e,i){let n=t,r=Nn(e),s=r[r.length-1];if(r.length>1){for(let a=0;a<r.length-1;a++){let o=r[a];if(n=n[o],!n)return}n[s]=i}else n[e]=i;return r.join(".")}var ei={},Qo=/-[a-z]/g,ea=/([A-Z])/g;function ti(t){return ei[t]||(ei[t]=t.indexOf("-")<0?t:t.replace(Qo,e=>e[1].toUpperCase()))}function Ve(t){return ei[t]||(ei[t]=t.replace(ea,"-$1").toLowerCase())}var ta=0,Rn=0,Fe=[],ia=0,Qi=!1,$n=document.createTextNode("");new window.MutationObserver(ra).observe($n,{characterData:!0});function ra(){Qi=!1;let t=Fe.length;for(let e=0;e<t;e++){let i=Fe[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}Fe.splice(0,t),Rn+=t}var se={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}};var R={run(t){return Qi||(Qi=!0,$n.textContent=ia++),Fe.push(t),ta++},cancel(t){let e=t-Rn;if(e>=0){if(!Fe[e])throw new Error("invalid async handle: "+t);Fe[e]=null}}};var na=R,ii=S(t=>{class e extends t{static createProperties(n){let r=this.prototype;for(let s in n)s in r||r._createPropertyAccessor(s)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,r){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,r))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[n];return r||(r=this.constructor.attributeNameForProperty(n),this.__dataAttributes[r]=n),r}_definePropertyAccessor(n,r){Object.defineProperty(this,n,{get(){return this.__data[n]},set:r?function(){}:function(s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,r){this._setPendingProperty(n,r)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,r,s){let a=this.__data[n],o=this._shouldPropertyChange(n,r,a);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=r,this.__dataPending[n]=r),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,na.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;let n=this.__data,r=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(n,r,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,r,s)),this.__dataCounter--}_shouldPropertiesChange(n,r,s){return!!r}_propertiesChanged(n,r,s){}_shouldPropertyChange(n,r,s){return s!==r&&(s===s||r===r)}attributeChangedCallback(n,r,s,a){r!==s&&this._attributeToProperty(n,s),super.attributeChangedCallback&&super.attributeChangedCallback(n,r,s,a)}_attributeToProperty(n,r,s){if(!this.__serializing){let a=this.__dataAttributes,o=a&&a[n]||n;this[o]=this._deserializeValue(r,s||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,r,s){this.__serializing=!0,s=arguments.length<3?this[n]:s,this._valueToNodeAttribute(this,s,r||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,r,s){let a=this._serializeValue(r);(s==="class"||s==="name"||s==="slot")&&(n=f(n)),a===void 0?n.removeAttribute(s):n.setAttribute(s,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,r){switch(r){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});var Dn={},ri=HTMLElement.prototype;for(;ri;){let t=Object.getOwnPropertyNames(ri);for(let e=0;e<t.length;e++)Dn[t[e]]=!0;ri=Object.getPrototypeOf(ri)}var sa=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function oa(t,e){if(!Dn[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}var ni=S(t=>{let e=ii(t);class i extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let s=0;s<r.length;s++)this.prototype._createPropertyAccessor(ti(r[s]))}static attributeNameForProperty(r){return Ve(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let s in r)this._setProperty(s,r[s])}_ensureAttribute(r,s){let a=this;a.hasAttribute(r)||this._valueToNodeAttribute(a,s,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(sa(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,s){let a;switch(s){case Object:try{a=JSON.parse(r)}catch{a=r}break;case Array:try{a=JSON.parse(r)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:a=isNaN(r)?String(r):Number(r),a=new Date(a);break;default:a=super._deserializeValue(r,s);break}return a}_definePropertyAccessor(r,s){oa(this,r),super._definePropertyAccessor(r,s)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return i});var aa={"dom-if":!0,"dom-repeat":!0},Vn=!1,Fn=!1;function la(){if(!Vn){Vn=!0;let t=document.createElement("textarea");t.placeholder="a",Fn=t.placeholder===t.textContent}return Fn}function da(t){la()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}var ha=(()=>{let t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{let r=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(r,n));return}e.setAttribute(n,r)}})();function ca(t){let e=t.getAttribute("is");if(e&&aa[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){let{name:n}=i.attributes[0];ha(t,i,n),i.removeAttribute(n)}}return t}function Bn(t,e){let i=e.parentInfo&&Bn(t,e.parentInfo);if(i){for(let n=i.firstChild,r=0;n;n=n.nextSibling)if(e.parentIndex===r++)return n}else return t}function pa(t,e,i,n){n.id&&(e[n.id]=i)}function ua(t,e,i){if(i.events&&i.events.length)for(let n=0,r=i.events,s;n<r.length&&(s=r[n]);n++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function ma(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function fa(t,e,i){return t=t._methodHost||t,function(r){t[i]?t[i](r,r.detail):console.warn("listener method `"+i+"` not defined")}}var Un=S(t=>{class e extends t{static _parseTemplate(n,r){if(!n._templateInfo){let s=n._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!r,s.stripWhiteSpace=r&&r.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,s,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,r,s){return this._parseTemplateNode(n.content,r,s)}static _parseTemplateNode(n,r,s){let a=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(o,r,s)||a:o.localName==="slot"&&(r.hasInsertionPoint=!0),da(o),o.firstChild&&this._parseTemplateChildNodes(o,r,s),o.hasAttributes&&o.hasAttributes()&&(a=this._parseTemplateNodeAttributes(o,r,s)||a),a||s.noted}static _parseTemplateChildNodes(n,r,s){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,o=0,l;a;a=l){if(a.localName=="template"&&(a=ca(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let h=l;for(;h&&h.nodeType===Node.TEXT_NODE;)a.textContent+=h.textContent,l=h.nextSibling,n.removeChild(h),h=l;if(r.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let d={parentIndex:o,parentInfo:s};this._parseTemplateNode(a,r,d)&&(d.infoIndex=r.nodeInfoList.push(d)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(n,r,s){let a=n,o=this._parseTemplate(a,r);return(o.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),s.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,r,s){let a=!1,o=Array.from(n.attributes);for(let l=o.length-1,d;d=o[l];l--)a=this._parseTemplateNodeAttribute(n,r,s,d.name,d.value)||a;return a}static _parseTemplateNodeAttribute(n,r,s,a,o){return a.slice(0,3)==="on-"?(n.removeAttribute(a),s.events=s.events||[],s.events.push({name:a.slice(3),value:o}),!0):a==="id"?(s.id=o,!0):!1}static _contentForTemplate(n){let r=n._templateInfo;return r&&r.content||n.content}_stampTemplate(n,r){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),r=r||this.constructor._parseTemplate(n);let s=r.nodeInfoList,a=r.content||n.content,o=document.importNode(a,!0);o.__noInsertionPoint=!r.hasInsertionPoint;let l=o.nodeList=new Array(s.length);o.$={};for(let d=0,h=s.length,c;d<h&&(c=s[d]);d++){let u=l[d]=Bn(o,c);pa(this,o.$,u,c),ma(this,u,c,r),ua(this,u,c)}return o=o,o}_addMethodEventListenerToNode(n,r,s,a){a=a||n;let o=fa(a,r,s);return this._addEventListenerToNode(n,r,o),o}_addEventListenerToNode(n,r,s){n.addEventListener(r,s)}_removeEventListenerFromNode(n,r,s){n.removeEventListener(r,s)}}return e});var wt=0,Ct=[],M={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Gn="__computeInfo",ga=/[A-Z]/;function er(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let r in n){let s=n[r],a=n[r]=Array(s.length);for(let o=0;o<s.length;o++)a[o]=s[o]}return n}function xt(t,e,i,n,r,s){if(e){let a=!1,o=wt++;for(let l in i){let d=r?j(l):l,h=e[d];if(h)for(let c=0,u=h.length,_;c<u&&(_=h[c]);c++)(!_.info||_.info.lastRun!==o)&&(!r||nr(l,_.trigger))&&(_.info&&(_.info.lastRun=o),_.fn(t,l,i,n,_.info,r,s),a=!0)}return a}return!1}function va(t,e,i,n,r,s,a,o){let l=!1,d=a?j(n):n,h=e[d];if(h)for(let c=0,u=h.length,_;c<u&&(_=h[c]);c++)(!_.info||_.info.lastRun!==i)&&(!a||nr(n,_.trigger))&&(_.info&&(_.info.lastRun=i),_.fn(t,n,r,s,_.info,a,o),l=!0);return l}function nr(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&Gi(i,t))||!!(e.wildcard&&$e(i,t))}else return!0}function jn(t,e,i,n,r){let s=typeof r.method=="string"?t[r.method]:r.method,a=r.property;s?s.call(t,t.__data[a],n[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function _a(t,e,i,n,r){let s=t[M.NOTIFY],a,o=wt++;for(let d in e)e[d]&&(s&&va(t,s,o,d,i,n,r)||r&&ya(t,d,i))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ya(t,e,i){let n=j(e);if(n!==e){let r=Ve(n)+"-changed";return Zn(t,r,i[e],e),!0}return!1}function Zn(t,e,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),f(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function ba(t,e,i,n,r,s){let o=(s?j(e):e)!=e?e:null,l=o?L(t,o):t.__data[e];o&&l===void 0&&(l=i[e]),Zn(t,r.eventName,l,o)}function xa(t,e,i,n,r){let s,a=t.detail,o=a&&a.path;o?(n=ye(i,n,o),s=a&&a.value):s=t.currentTarget[i],s=r?!s:s,(!e[M.READ_ONLY]||!e[M.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,s,!0,!!o)&&(!a||!a.queueProperty)&&e._invalidateProperties()}function wa(t,e,i,n,r){let s=t.__data[e];gt&&(s=gt(s,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,s)}function Ca(t,e,i,n){let r=t[M.COMPUTE];if(r)if(Mn){wt++;let s=Ma(t),a=[];for(let l in e)qn(l,r,a,s,n);let o;for(;o=a.shift();)Qn(t,"",e,i,o)&&qn(o.methodInfo,r,a,s,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let s=e;for(;xt(t,r,s,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}var za=(t,e,i)=>{let n=0,r=e.length-1,s=-1;for(;n<=r;){let a=n+r>>1,o=i.get(e[a].methodInfo)-i.get(t.methodInfo);if(o<0)n=a+1;else if(o>0)r=a-1;else{s=a;break}}s<0&&(s=r+1),e.splice(s,0,t)},qn=(t,e,i,n,r)=>{let s=r?j(t):t,a=e[s];if(a)for(let o=0;o<a.length;o++){let l=a[o];l.info.lastRun!==wt&&(!r||nr(t,l.trigger))&&(l.info.lastRun=wt,za(l.info,i,n))}};function Ma(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;let i=t[M.COMPUTE],{counts:n,ready:r,total:s}=Ea(t),a;for(;a=r.shift();){e.set(a,e.size);let o=i[a];o&&o.forEach(l=>{let d=l.info.methodInfo;--s,--n[d]===0&&r.push(d)})}s!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Ea(t){let e=t[Gn],i={},n=t[M.COMPUTE],r=[],s=0;for(let a in e){let o=e[a];s+=i[a]=o.args.filter(l=>!l.literal).length+(o.dynamicFn?1:0)}for(let a in n)e[a]||r.push(a);return{counts:i,ready:r,total:s}}function Qn(t,e,i,n,r){let s=rr(t,e,i,n,r);if(s===Ct)return!1;let a=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,s,!0):(t[a]=s,!1)}function Sa(t,e,i){let n=t.__dataLinkedPaths;if(n){let r;for(let s in n){let a=n[s];$e(s,e)?(r=ye(s,a,e),t._setPendingPropertyOrPath(r,i,!0,!0)):$e(a,e)&&(r=ye(a,s,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}function tr(t,e,i,n,r,s,a){i.bindings=i.bindings||[];let o={kind:n,target:r,parts:s,literal:a,isCompound:s.length!==1};if(i.bindings.push(o),La(o)){let{event:d,negate:h}=o.parts[0];o.listenerEvent=d||Ve(r)+"-changed",o.listenerNegate=h}let l=e.nodeInfoList.length;for(let d=0;d<o.parts.length;d++){let h=o.parts[d];h.compoundIndex=d,ka(t,e,o,h,l)}}function ka(t,e,i,n,r){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,a={index:r,binding:i,part:n,evaluator:t};for(let o=0;o<s.length;o++){let l=s[o];typeof l=="string"&&(l=ts(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:Aa,info:a,trigger:l})}}}function Aa(t,e,i,n,r,s,a){let o=a[r.index],l=r.binding,d=r.part;if(s&&d.source&&e.length>d.source.length&&l.kind=="property"&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let h=i[e];e=ye(d.source,l.target,e),o._setPendingPropertyOrPath(e,h,!1,!0)&&t._enqueueClient(o)}else{let h=r.evaluator._evaluateBinding(t,d,e,i,n,s);h!==Ct&&Pa(t,o,l,d,h)}}function Pa(t,e,i,n,r){if(r=Ha(e,r,i,n),gt&&(r=gt(r,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,r,i.target);else{let s=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?(!e[M.READ_ONLY]||!e[M.READ_ONLY][s])&&e._setPendingProperty(s,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,r)}}function Ha(t,e,i,n){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[n.compoundIndex]=e,e=r.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function La(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Ta(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let r=0;r<n.length;r++){let s=n[r],a=i[r],o=s.bindings;if(o)for(let l=0;l<o.length;l++){let d=o[l];Oa(a,d),Ia(a,t,d)}a.__dataHost=t}}function Oa(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a].literal;let s=e.target;i[s]=r,e.literal&&e.kind=="property"&&(s==="className"&&(t=f(t)),t[s]=e.literal)}}function Ia(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(r){xa(r,e,i.target,n.source,n.negate)})}}function Kn(t,e,i,n,r,s){s=e.static||s&&(typeof s!="object"||s[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:s};for(let o=0,l;o<e.args.length&&(l=e.args[o]);o++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:a,trigger:l});return s&&t._addPropertyEffect(e.methodName,i,{fn:n,info:a}),a}function rr(t,e,i,n,r){let s=t._methodHost||t,a=s[r.methodName];if(a){let o=t._marshalArgs(r.args,e,i);return o===Ct?Ct:a.apply(s,o)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}var Na=[],es="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ra="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",$a="(?:'(?:[^'\\\\]|\\\\.)*')",Da='(?:"(?:[^"\\\\]|\\\\.)*")',Va="(?:"+$a+"|"+Da+")",Wn="(?:("+es+"|"+Ra+"|"+Va+")\\s*)",Fa="(?:"+Wn+"(?:,\\s*"+Wn+")*)",Ba="(?:\\(\\s*(?:"+Fa+"?)\\)\\s*)",Ua="("+es+"\\s*"+Ba+"?)",ja="(\\[\\[|{{)\\s*",qa="(?:]]|}})",Ka="(?:(!)\\s*)?",Wa=ja+Ka+Ua+qa,Yn=new RegExp(Wa,"g");function Xn(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function ir(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Na};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return Ya(r,n)}else return n}return null}function Ya(t,e){return e.args=t.map(function(i){let n=ts(i);return n.literal||(e.static=!1),n},this),e}function ts(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=j(e),i.structured=Qt(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function Jn(t,e,i){let n=L(t,i);return n===void 0&&(n=e[i]),n}function is(t,e,i,n){let r={indexSplices:n};Jt&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(i+".splices",r),t.notifyPath(i+".length",e.length),Jt&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function yt(t,e,i,n,r,s){is(t,e,i,[{index:n,addedCount:r,removed:s,object:e,type:"splice"}])}function Xa(t){return t[0].toUpperCase()+t.substring(1)}var be=S(t=>{let e=Un(ni(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return M}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(bt.length){let r=bt[bt.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let s=this[M.READ_ONLY];for(let a in r)(!s||!s[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=r[a])}_addPropertyEffect(r,s,a){this._createPropertyAccessor(r,s==M.READ_ONLY);let o=er(this,s,!0)[r];o||(o=this[s][r]=[]),o.push(a)}_removePropertyEffect(r,s,a){let o=er(this,s,!0)[r],l=o.indexOf(a);l>=0&&o.splice(l,1)}_hasPropertyEffect(r,s){let a=this[s];return!!(a&&a[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,M.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,M.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,M.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,M.COMPUTE)}_setPendingPropertyOrPath(r,s,a,o){if(o||j(Array.isArray(r)?r[0]:r)!==r){if(!o){let l=L(this,r);if(r=Zi(this,r,s),!r||!super._shouldPropertyChange(r,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,s,a))return Sa(this,r,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,s,a);this[r]=s}return!1}_setUnmanagedPropertyToNode(r,s,a){(a!==r[s]||typeof a=="object")&&(s==="className"&&(r=f(r)),r[s]=a)}_setPendingProperty(r,s,a){let o=this.__dataHasPaths&&Qt(r),l=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,s,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),o?this.__dataTemp[r]=s:this.__data[r]=s,this.__dataPending[r]=s,(o||this[M.NOTIFY]&&this[M.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=a),!0):!1}_setProperty(r,s){this._setPendingProperty(r,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let s=0;s<r.length;s++){let a=r[s];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,s){for(let a in r)(s||!this[M.READ_ONLY]||!this[M.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,r[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,s,a){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ca(this,s,a,o),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,a,o),this._flushClients(),xt(this,this[M.REFLECT],s,a,o),xt(this,this[M.OBSERVE],s,a,o),l&&_a(this,l,s,a,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,s,a){this[M.PROPAGATE]&&xt(this,this[M.PROPAGATE],r,s,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,s,a)}_runEffectsForTemplate(r,s,a,o){let l=(d,h)=>{xt(this,r.propertyEffects,d,a,h,r.nodeList);for(let c=r.firstChild;c;c=c.nextSibling)this._runEffectsForTemplate(c,d,a,h)};r.runEffects?r.runEffects(l,s,o):l(s,o)}linkPaths(r,s){r=De(r),s=De(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=s}unlinkPaths(r){r=De(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,s){let a={path:""},o=L(this,r,a);is(this,o,a.path,s)}get(r,s){return L(s||this,r)}set(r,s,a){a?Zi(a,r,s):(!this[M.READ_ONLY]||!this[M.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,s,!0)&&this._invalidateProperties()}push(r,...s){let a={path:""},o=L(this,r,a),l=o.length,d=o.push(...s);return s.length&&yt(this,o,a.path,l,s.length,[]),d}pop(r){let s={path:""},a=L(this,r,s),o=!!a.length,l=a.pop();return o&&yt(this,a,s.path,a.length,0,[l]),l}splice(r,s,a,...o){let l={path:""},d=L(this,r,l);s<0?s=d.length-Math.floor(-s):s&&(s=Math.floor(s));let h;return arguments.length===2?h=d.splice(s):h=d.splice(s,a,...o),(o.length||h.length)&&yt(this,d,l.path,s,o.length,h),h}shift(r){let s={path:""},a=L(this,r,s),o=!!a.length,l=a.shift();return o&&yt(this,a,s.path,0,0,[l]),l}unshift(r,...s){let a={path:""},o=L(this,r,a),l=o.unshift(...s);return s.length&&yt(this,o,a.path,0,s.length,[]),l}notifyPath(r,s){let a;if(arguments.length==1){let o={path:""};s=L(this,r,o),a=o.path}else Array.isArray(r)?a=De(r):a=r;this._setPendingPropertyOrPath(a,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,s){this._addPropertyEffect(r,M.READ_ONLY),s&&(this["_set"+Xa(r)]=function(a){this._setProperty(r,a)})}_createPropertyObserver(r,s,a){let o={property:r,method:s,dynamicFn:!!a};this._addPropertyEffect(r,M.OBSERVE,{fn:jn,info:o,trigger:{name:r}}),a&&this._addPropertyEffect(s,M.OBSERVE,{fn:jn,info:o,trigger:{name:s}})}_createMethodObserver(r,s){let a=ir(r);if(!a)throw new Error("Malformed observer expression '"+r+"'");Kn(this,a,M.OBSERVE,rr,null,s)}_createNotifyingProperty(r){this._addPropertyEffect(r,M.NOTIFY,{fn:ba,info:{eventName:Ve(r)+"-changed",property:r}})}_createReflectedProperty(r){let s=this.constructor.attributeNameForProperty(r);s[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,M.REFLECT,{fn:wa,info:{attrName:s}})}_createComputedProperty(r,s,a){let o=ir(s);if(!o)throw new Error("Malformed computed expression '"+s+"'");let l=Kn(this,o,M.COMPUTE,Qn,r,a);er(this,Gn)[r]=l}_marshalArgs(r,s,a){let o=this.__data,l=[];for(let d=0,h=r.length;d<h;d++){let{name:c,structured:u,wildcard:_,value:z,literal:N}=r[d];if(!N)if(_){let F=$e(c,s),P=Jn(o,a,F?s:c);z={path:F?s:c,value:P,base:F?L(o,c):P}}else z=u?Jn(o,a,c):o[c];if(Jt&&!this._overrideLegacyUndefined&&z===void 0&&r.length>1)return Ct;l[d]=z}return l}static addPropertyEffect(r,s,a){this.prototype._addPropertyEffect(r,s,a)}static createPropertyObserver(r,s,a){this.prototype._createPropertyObserver(r,s,a)}static createMethodObserver(r,s){this.prototype._createMethodObserver(r,s)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,s){this.prototype._createReadOnlyProperty(r,s)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,s,a){this.prototype._createComputedProperty(r,s,a)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,s){let a=this.constructor._parseTemplate(r),o=this.__preBoundTemplateInfo==a;if(!o)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(s)if(a=Object.create(a),a.wasPreBound=o,!this.__templateInfo)this.__templateInfo=a;else{let l=r._parentTemplateInfo||this.__templateInfo,d=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=d,d?d.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(r,s,a){let o=r.hostProps=r.hostProps||{};o[s]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[s]=l[s]||[]).push(a)}_stampTemplate(r,s){s=s||this._bindTemplate(r,!0),bt.push(this);let a=super._stampTemplate(r,s);if(bt.pop(),s.nodeList=a.nodeList,!s.wasPreBound){let o=s.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)o.push(l)}return a.templateInfo=s,Ta(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(r){let s=r.templateInfo,{previousSibling:a,nextSibling:o,parent:l}=s;a?a.nextSibling=o:l&&(l.firstChild=o),o?o.previousSibling=a:l&&(l.lastChild=a),s.nextSibling=s.previousSibling=null;let d=s.childNodes;for(let h=0;h<d.length;h++){let c=d[h];f(f(c).parentNode).removeChild(c)}}static _parseTemplateNode(r,s,a){let o=e._parseTemplateNode.call(this,r,s,a);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,s);l&&(r.textContent=Xn(l)||" ",tr(this,s,a,"text","textContent",l),o=!0)}return o}static _parseTemplateNodeAttribute(r,s,a,o,l){let d=this._parseBindings(l,s);if(d){let h=o,c="property";ga.test(o)?c="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),c="attribute");let u=Xn(d);return u&&c=="attribute"&&(o=="class"&&r.hasAttribute("class")&&(u+=" "+r.getAttribute(o)),r.setAttribute(o,u)),c=="attribute"&&h=="disable-upgrade$"&&r.setAttribute(o,""),r.localName==="input"&&h==="value"&&r.setAttribute(h,""),r.removeAttribute(h),c==="property"&&(o=ti(o)),tr(this,s,a,c,o,d,u),!0}else return e._parseTemplateNodeAttribute.call(this,r,s,a,o,l)}static _parseTemplateNestedTemplate(r,s,a){let o=e._parseTemplateNestedTemplate.call(this,r,s,a),l=r.parentNode,d=a.templateInfo,h=l.localName==="dom-if",c=l.localName==="dom-repeat";Wi&&(h||c)&&(l.removeChild(r),a=a.parentInfo,a.templateInfo=d,a.noted=!0,o=!1);let u=d.hostProps;if(Gt&&h)u&&(s.hostProps=Object.assign(s.hostProps||{},u),Wi||(a.parentInfo.noted=!0));else{let _="{";for(let z in u){let N=[{mode:_,source:z,dependencies:[z],hostProp:!0}];tr(this,s,a,"property","_host_"+z,N)}}return o}static _parseBindings(r,s){let a=[],o=0,l;for(;(l=Yn.exec(r))!==null;){l.index>o&&a.push({literal:r.slice(o,l.index)});let d=l[1][0],h=!!l[2],c=l[3].trim(),u=!1,_="",z=-1;d=="{"&&(z=c.indexOf("::"))>0&&(_=c.substring(z+2),c=c.substring(0,z),u=!0);let N=ir(c),F=[];if(N){let{args:P,methodName:$}=N;for(let zi=0;zi<P.length;zi++){let Ir=P[zi];Ir.literal||F.push(Ir)}let Pe=s.dynamicFns;(Pe&&Pe[$]||N.static)&&(F.push($),N.dynamicFn=!0)}else F.push(c);a.push({source:c,mode:d,negate:h,customEvent:u,signature:N,dependencies:F,event:_}),o=Yn.lastIndex}if(o&&o<r.length){let d=r.substring(o);d&&a.push({literal:d})}return a.length?a:null}static _evaluateBinding(r,s,a,o,l,d){let h;return s.signature?h=rr(r,a,o,l,s.signature):a!=s.source?h=L(r,s.source):d&&Qt(a)?h=L(r,a):h=r.__data[a],s.negate&&(h=!h),h}}return i}),bt=[];var Ja=0;function rs(){Ja++}var Ga=[];function si(t){Ga.push(t)}function Za(t){let e={};for(let i in t){let n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}var ns=S(t=>{let e=ii(t);function i(s){let a=Object.getPrototypeOf(s);return a.prototype instanceof r?a:null}function n(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let a=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){let o=s.properties;o&&(a=Za(o))}s.__ownProperties=a}return s.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){si(this.prototype);let a=this._properties;this.__observedAttributes=a?Object.keys(a).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let a=i(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){let o=this._properties[a];return o&&o.type}_initializeProperties(){rs(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var ss="3.5.1",oi=window.ShadyCSS&&window.ShadyCSS.cssBuild,oe=S(t=>{let e=ns(be(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let h in d){let c=d[h];"value"in c&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[h]=c)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,d,h,c){h.computed&&(h.readOnly=!0),h.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,h.computed,c)),h.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!h.computed):h.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),h.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):h.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),h.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):h.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),h.observer&&l._createPropertyObserver(d,h.observer,c[h.observer]),l._addPropertyToAttributeMap(d)}function s(l,d,h,c){if(!oi){let u=d.content.querySelectorAll("style"),_=Zt(d),z=Tn(h),N=d.content.firstElementChild;for(let P=0;P<z.length;P++){let $=z[P];$.textContent=l._processStyleText($.textContent,c),d.content.insertBefore($,N)}let F=0;for(let P=0;P<_.length;P++){let $=_[P],Pe=u[F];Pe!==$?($=$.cloneNode(!0),Pe.parentNode.insertBefore($,Pe)):F++,$.textContent=l._processStyleText($.textContent,c)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,h),En&&oi&&bn){let u=d.content.querySelectorAll("style");if(u){let _="";Array.from(u).forEach(z=>{_+=z.textContent,z.parentNode.removeChild(z)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(_)}}}function a(l){let d=null;if(l&&(!U||Cn)&&(d=Q.import(l,"template"),U&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class o extends e{static get polymerElementVersion(){return ss}static _finalizeClass(){e._finalizeClass.call(this);let d=n(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):Z||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let h in d)r(this.prototype,h,d[h],d)}static createObservers(d,h){let c=this.prototype;for(let u=0;u<d.length;u++)c._createMethodObserver(d[u],h)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let d=this.importMeta;if(d)this._importPath=Re(d.url);else{let h=Q.import(this.is);this._importPath=h&&h.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=xn,this.importPath=this.constructor.importPath;let d=i(this.constructor);if(d)for(let h in d){let c=d[h];if(this._canApplyPropertyDefault(h)){let u=typeof c.value=="function"?c.value.call(this):c.value;this._hasAccessor(h)?this._setPendingProperty(h,u,!0):this[h]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,h){return ft(d,h)}static _finalizeTemplate(d){let h=this.prototype._template;if(h&&!h.__polymerFinalized){h.__polymerFinalized=!0;let c=this.importPath,u=c?_e(c):"";s(this,h,d,u),this.prototype._bindTemplate(h)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){let h=f(this);if(h.attachShadow)return d?(h.shadowRoot||(h.attachShadow({mode:"open",shadyUpgradeFragment:d}),h.shadowRoot.appendChild(d),this.constructor._styleSheet&&(h.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),zn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(h.shadowRoot),h.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,h){return!h&&this.importPath&&(h=_e(this.importPath)),_e(d,h)}static _parseTemplateContent(d,h,c){return h.dynamicFns=h.dynamicFns||this._properties,e._parseTemplateContent.call(this,d,h,c)}static _addTemplatePropertyEffect(d,h,c){return Xt&&!(h in this._properties)&&!(c.info.part.signature&&c.info.part.signature.static)&&!c.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${h}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,d,h,c)}}return o});var K=class t{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,zt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),zt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof t?e._cancelAsync():e=new t,e.setConfig(i,n),e}},zt=new Set,Be=function(t){zt.add(t)},os=function(){let t=!!zt.size;return zt.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};var lr=typeof document.head.style.touchAction=="string",li="__polymerGestures",ai="__polymerGesturesHandled",or="__polymerGesturesTouchAction",as=25,ls=5,Qa=2,el=2500,us=["mousedown","mousemove","mouseup","click"],tl=[0,1,4,2],il=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function dr(t){return us.indexOf(t)>-1}var hr=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){hr=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function ms(t){if(!(dr(t)||t==="touchend")&&lr&&hr&&wn)return{passive:!0}}var fs=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),ar=[],rl={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},nl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function sl(t){return rl[t.localName]||!1}function ol(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let r=0;r<n.length;r++)e.push(n[r])}}catch{}}return e}var ds=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[ai]={skip:!0},t.type==="click")){let i=!1,n=hi(t);for(let r=0;r<n.length;r++){if(n[r].nodeType===Node.ELEMENT_NODE){if(n[r].localName==="label")ar.push(n[r]);else if(sl(n[r])){let s=ol(n[r]);for(let a=0;a<s.length;a++)i=i||ar.indexOf(s[a])>-1}}if(n[r]===T.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function hs(t){let e=fs?["click"]:us;for(let i=0,n;i<e.length;i++)n=e[i],t?(ar.length=0,document.addEventListener(n,ds,!0)):document.removeEventListener(n,ds,!0)}function al(t){if(!Ki)return;T.mouse.mouseIgnoreJob||hs(!0);let e=function(){hs(),T.mouse.target=null,T.mouse.mouseIgnoreJob=null};T.mouse.target=hi(t)[0],T.mouse.mouseIgnoreJob=K.debounce(T.mouse.mouseIgnoreJob,se.after(el),e)}function we(t){let e=t.type;if(!dr(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!il&&(i=tl[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function ll(t){if(t.type==="click"){if(t.detail===0)return!0;let e=ae(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}var T={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function dl(t){let e="auto",i=hi(t);for(let n=0,r;n<i.length;n++)if(r=i[n],r[or]){e=r[or];break}return e}function gs(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function Ue(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}Ki&&document.addEventListener("touchend",al,hr?{passive:!0}:!1);var hi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Et={},xe=[];function hl(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(i=n)}return i}function ae(t){let e=hi(t);return e.length>0?e[0]:t.target}function vs(t){let e,i=t.type,r=t.currentTarget[li];if(!r)return;let s=r[i];if(s){if(!t[ai]&&(t[ai]={},i.slice(0,5)==="touch")){t=t;let a=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(T.touch.id=a.identifier),T.touch.id!==a.identifier)return;lr||(i==="touchstart"||i==="touchmove")&&cl(t)}if(e=t[ai],!e.skip){for(let a=0,o;a<xe.length;a++)o=xe[a],s[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let a=0,o;a<xe.length;a++)o=xe[a],s[o.name]&&!e[o.name]&&(e[o.name]=!0,o[i](t))}}}function cl(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")T.touch.x=e.clientX,T.touch.y=e.clientY,T.touch.scrollDecided=!1;else if(i==="touchmove"){if(T.touch.scrollDecided)return;T.touch.scrollDecided=!0;let n=dl(t),r=!1,s=Math.abs(T.touch.x-e.clientX),a=Math.abs(T.touch.y-e.clientY);t.cancelable&&(n==="none"?r=!0:n==="pan-x"?r=a>s:n==="pan-y"&&(r=s>a)),r?t.preventDefault():di("track")}}function _s(t,e,i){return Et[e]?(pl(t,e,i),!0):!1}function ys(t,e,i){return Et[e]?(ul(t,e,i),!0):!1}function pl(t,e,i){let n=Et[e],r=n.deps,s=n.name,a=t[li];a||(t[li]=a={});for(let o=0,l,d;o<r.length;o++)l=r[o],!(fs&&dr(l)&&l!=="click")&&(d=a[l],d||(a[l]=d={_count:0}),d._count===0&&t.addEventListener(l,vs,ms(l)),d[s]=(d[s]||0)+1,d._count=(d._count||0)+1);t.addEventListener(e,i),n.touchAction&&pr(t,n.touchAction)}function ul(t,e,i){let n=Et[e],r=n.deps,s=n.name,a=t[li];if(a)for(let o=0,l,d;o<r.length;o++)l=r[o],d=a[l],d&&d[s]&&(d[s]=(d[s]||1)-1,d._count=(d._count||1)-1,d._count===0&&t.removeEventListener(l,vs,ms(l)));t.removeEventListener(e,i)}function cr(t){xe.push(t);for(let e=0;e<t.emits.length;e++)Et[t.emits[e]]=t}function ml(t){for(let e=0,i;e<xe.length;e++){i=xe[e];for(let n=0,r;n<i.emits.length;n++)if(r=i.emits[n],r===t)return i}return null}function pr(t,e){lr&&t instanceof HTMLElement&&R.run(()=>{t.style.touchAction=e}),t[or]=e}function ur(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,f(t).dispatchEvent(n),n.defaultPrevented){let r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function di(t){let e=ml(t);e.info&&(e.info.prevent=!0)}cr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ue(this.info)},mousedown:function(t){if(!we(t))return;let e=ae(t),i=this,n=function(a){we(a)||(Mt("up",e,a),Ue(i.info))},r=function(a){we(a)&&Mt("up",e,a),Ue(i.info)};gs(this.info,n,r),Mt("down",e,t)},touchstart:function(t){Mt("down",ae(t),t.changedTouches[0],t)},touchend:function(t){Mt("up",ae(t),t.changedTouches[0],t)}});function Mt(t,e,i,n){e&&ur(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(r){return di(r)}})}cr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>Qa&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ue(this.info)},mousedown:function(t){if(!we(t))return;let e=ae(t),i=this,n=function(a){let o=a.clientX,l=a.clientY;cs(i.info,o,l)&&(i.info.state=i.info.started?a.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&di("tap"),i.info.addMove({x:o,y:l}),we(a)||(i.info.state="end",Ue(i.info)),e&&sr(i.info,e,a),i.info.started=!0)},r=function(a){i.info.started&&n(a),Ue(i.info)};gs(this.info,n,r),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=ae(t),i=t.changedTouches[0],n=i.clientX,r=i.clientY;cs(this.info,n,r)&&(this.info.state==="start"&&di("tap"),this.info.addMove({x:n,y:r}),sr(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=ae(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),sr(this.info,e,i))}});function cs(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-i);return n>=ls||r>=ls}function sr(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,o,l=0;n&&(o=r.x-n.x,l=r.y-n.y),ur(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:i,hover:function(){return hl(i.clientX,i.clientY)}})}cr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){we(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){we(t)&&ps(this.info,t)},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){ps(this.info,t.changedTouches[0],t)}});function ps(t,e,i){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),s=ae(i||e);!s||nl[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=as&&r<=as||ll(e))&&(t.prevent||ur(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}var ci=S(t=>{class e extends t{_addEventListenerToNode(n,r,s){_s(n,r,s)||super._addEventListenerToNode(n,r,s)}_removeEventListenerFromNode(n,r,s){ys(n,r,s)||super._removeEventListenerFromNode(n,r,s)}}return e});var fl=/:host\(:dir\((ltr|rtl)\)\)/g,gl=':host([dir="$1"])',vl=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,_l=':host([dir="$2"]) $1',yl=/:dir\((?:ltr|rtl)\)/,bs=!!(window.ShadyDOM&&window.ShadyDOM.inUse),St=[],kt=null,mr="";function xs(){mr=document.documentElement.getAttribute("dir")}function ws(t){t.__autoDirOptOut||t.setAttribute("dir",mr)}function Cs(){xs(),mr=document.documentElement.getAttribute("dir");for(let t=0;t<St.length;t++)ws(St[t])}function bl(){kt&&kt.takeRecords().length&&Cs()}var zs=S(t=>{bs||kt||(xs(),kt=new MutationObserver(Cs),kt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));let e=ni(t);class i extends e{static _processStyleText(r,s){return r=e._processStyleText.call(this,r,s),!bs&&yl.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let s=r;return s=s.replace(fl,gl),s=s.replace(vl,_l),s}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(bl(),St.push(this),ws(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let r=St.indexOf(this);r>-1&&St.splice(r,1)}}}return i.__activateDir=!1,i});function Ms(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Ms():window.addEventListener("DOMContentLoaded",Ms);function At(t,e,i){return{index:t,removed:e,addedCount:i}}var Es=0,Ss=1,fr=2,gr=3;function xl(t,e,i,n,r,s){let a=s-r+1,o=i-e+1,l=new Array(a);for(let d=0;d<a;d++)l[d]=new Array(o),l[d][0]=d;for(let d=0;d<o;d++)l[0][d]=d;for(let d=1;d<a;d++)for(let h=1;h<o;h++)if(vr(t[e+h-1],n[r+d-1]))l[d][h]=l[d-1][h-1];else{let c=l[d-1][h]+1,u=l[d][h-1]+1;l[d][h]=c<u?c:u}return l}function wl(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],r=[];for(;e>0||i>0;){if(e==0){r.push(fr),i--;continue}if(i==0){r.push(gr),e--;continue}let s=t[e-1][i-1],a=t[e-1][i],o=t[e][i-1],l;a<o?l=a<s?a:s:l=o<s?o:s,l==s?(s==n?r.push(Es):(r.push(Ss),n=s),e--,i--):l==a?(r.push(gr),e--,n=a):(r.push(fr),i--,n=o)}return r.reverse(),r}function Cl(t,e,i,n,r,s){let a=0,o=0,l,d=Math.min(i-e,s-r);if(e==0&&r==0&&(a=zl(t,n,d)),i==t.length&&s==n.length&&(o=Ml(t,n,d-a)),e+=a,r+=a,i-=o,s-=o,i-e==0&&s-r==0)return[];if(e==i){for(l=At(e,[],0);r<s;)l.removed.push(n[r++]);return[l]}else if(r==s)return[At(e,[],i-e)];let h=wl(xl(t,e,i,n,r,s));l=void 0;let c=[],u=e,_=r;for(let z=0;z<h.length;z++)switch(h[z]){case Es:l&&(c.push(l),l=void 0),u++,_++;break;case Ss:l||(l=At(u,[],0)),l.addedCount++,u++,l.removed.push(n[_]),_++;break;case fr:l||(l=At(u,[],0)),l.addedCount++,u++;break;case gr:l||(l=At(u,[],0)),l.removed.push(n[_]),_++;break}return l&&c.push(l),c}function zl(t,e,i){for(let n=0;n<i;n++)if(!vr(t[n],e[n]))return n;return i}function Ml(t,e,i){let n=t.length,r=e.length,s=0;for(;s<i&&vr(t[--n],e[--r]);)s++;return s}function pi(t,e){return Cl(t,0,t.length,e,0,e.length)}function vr(t,e){return t===e}function je(t){return t.localName==="slot"}var _r=class{static getFlattenedNodes(t){let e=f(t);return je(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(i=>je(i)?(i=i,f(i).assignedNodes({flatten:!0})):[i]).reduce((i,n)=>i.concat(n),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){je(this._target)?this._listenSlots([this._target]):f(this._target).children&&(this._listenSlots(f(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){je(this._target)?this._unlistenSlots([this._target]):f(this._target).children&&(this._unlistenSlots(f(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,R.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=pi(e,this._effectiveNodes);for(let r=0,s;r<i.length&&(s=i[r]);r++)for(let a=0,o;a<s.removed.length&&(o=s.removed[a]);a++)t.removedNodes.push(o);for(let r=0,s;r<i.length&&(s=i[r]);r++)for(let a=s.index;a<s.index+s.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];je(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];je(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};var Pt=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=os();while(t||e)};var qe=Element.prototype,El=qe.matches||qe.matchesSelector||qe.mozMatchesSelector||qe.msMatchesSelector||qe.oMatchesSelector||qe.webkitMatchesSelector,br=function(t,e){return El.call(t,e)},E=class{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new _r(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(f(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=f(i).parentNode||f(i).host;return i===this.node}getOwnerRoot(){return f(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?f(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=f(this.node).assignedSlot;for(;i;)e.push(i),i=f(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return f(n).importNode(e,i)}getEffectiveChildNodes(){return _r.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let r=0,s=i.length,a;r<s&&(a=i[r]);r++)a.nodeType===Node.ELEMENT_NODE&&br(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}};function Sl(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function ks(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function kl(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(r){this.node[n]=r},configurable:!0})}}var Ht=class{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}};E.prototype.cloneNode;E.prototype.appendChild;E.prototype.insertBefore;E.prototype.removeChild;E.prototype.replaceChild;E.prototype.setAttribute;E.prototype.removeAttribute;E.prototype.querySelector;E.prototype.querySelectorAll;E.prototype.parentNode;E.prototype.firstChild;E.prototype.lastChild;E.prototype.nextSibling;E.prototype.previousSibling;E.prototype.firstElementChild;E.prototype.lastElementChild;E.prototype.nextElementSibling;E.prototype.previousElementSibling;E.prototype.childNodes;E.prototype.children;E.prototype.classList;E.prototype.textContent;E.prototype.innerHTML;var yr=E;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(E.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=E.prototype[e])}),ks(t.prototype,["classList"]),yr=t,Object.defineProperties(Ht.prototype,{localTarget:{get(){let e=this.event.currentTarget,i=e&&C(e).getOwnerRoot(),n=this.path;for(let r=0;r<n.length;r++){let s=n[r];if(C(s).getOwnerRoot()===i)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Sl(E.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),ks(E.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),kl(E.prototype,["textContent","innerHTML","className"]);var C=function(t){if(t=t||document,t instanceof yr||t instanceof Ht)return t;let e=t.__domApi;return e||(t instanceof Event?e=new Ht(t):e=new yr(t),t.__domApi=e),e};var xr=window.ShadyDOM,As=window.ShadyCSS;function Ps(t,e){return f(t).getRootNode()===e}function Hs(t,e=!1){if(!xr||!As||!xr.handlesDynamicScoping)return null;let i=As.ScopingShim;if(!i)return null;let n=i.scopeForNode(t),r=f(t).getRootNode(),s=a=>{if(!Ps(a,r))return;let o=Array.from(xr.nativeMethods.querySelectorAll.call(a,"*"));o.push(a);for(let l=0;l<o.length;l++){let d=o[l];if(!Ps(d,r))continue;let h=i.currentScopeForNode(d);h!==n&&(h!==""&&i.unscopeNode(d,h),i.scopeNode(d,n))}};if(s(t),e){let a=new MutationObserver(o=>{for(let l=0;l<o.length;l++){let d=o[l];for(let h=0;h<d.addedNodes.length;h++){let c=d.addedNodes[h];c.nodeType===Node.ELEMENT_NODE&&s(c)}}});return a.observe(t,{childList:!0,subtree:!0}),a}else return null}var wr="disable-upgrade",Cr=t=>{for(;t;){let e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]},hc=S(t=>{let e=oe(t),i=Cr(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(wr)}_initializeProperties(){this.hasAttribute(wr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,a,o,l){s==wr?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,f(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,a,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});var ui="disable-upgrade",Al=window.ShadyCSS,mi=S(t=>{let e=ci(oe(t)),i=oi?e:zs(e),n=Cr(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,d){(this.__dataAttributes&&this.__dataAttributes[o]||o===ui)&&this.attributeChangedCallback(o,l,d,null)}setAttribute(o,l){if(_t&&!this._legacyForceObservedAttributes){let d=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,d,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(_t&&!this._legacyForceObservedAttributes){let l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return _t&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],si(this.prototype)),this.__observedAttributes):n.call(this).concat(ui)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,d,h){l!==d&&(o==ui?this.__isUpgradeDisabled&&d==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,f(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,d,h),this.attributeChanged(o,l,d)))}attributeChanged(o,l,d){}_initializeProperties(){if(Z&&this.hasAttribute(ui))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),_t&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){let o=this.attributes;for(let l=0,d=o.length;l<d;l++){let h=o[l];this.__attributeReaction(h.name,null,h.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,d){this._propertyToAttribute(o,l,d)}serializeValueToAttribute(o,l,d){this._valueToNodeAttribute(d||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let d=Object.getOwnPropertyNames(l);for(let h=0,c;h<d.length&&(c=d[h]);h++){let u=Object.getOwnPropertyDescriptor(l,c);u&&Object.defineProperty(o,c,u)}return o}mixin(o,l){for(let d in l)o[d]=l[d];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,d){d=d||{},l=l??{};let h=new Event(o,{bubbles:d.bubbles===void 0?!0:d.bubbles,cancelable:!!d.cancelable,composed:d.composed===void 0?!0:d.composed});h.detail=l;let c=d.node||this;return f(c).dispatchEvent(h),h}listen(o,l,d){o=o||this;let h=this.__boundListeners||(this.__boundListeners=new WeakMap),c=h.get(o);c||(c={},h.set(o,c));let u=l+d;c[u]||(c[u]=this._addMethodEventListenerToNode(o,l,d,this))}unlisten(o,l,d){o=o||this;let h=this.__boundListeners&&this.__boundListeners.get(o),c=l+d,u=h&&h[c];u&&(this._removeEventListenerFromNode(o,l,u),h[c]=null)}setScrollDirection(o,l){pr(l||this,r[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=f(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){let l=C(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return C(this).getEffectiveChildNodes()}queryDistributedElements(o){return C(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let d=0,h;h=o[d];d++)h.nodeType!==Node.COMMENT_NODE&&l.push(h.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?C(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(d){return d.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){let l=this;return l!==o&&f(l).contains(o)&&f(l).getRootNode()===f(o).getRootNode()}isLocalDescendant(o){return this.root===f(o).getRootNode()}scopeSubtree(o,l=!1){return Hs(o,l)}getComputedStyleValue(o){return Al.getComputedStyleValue(this,o)}debounce(o,l,d){return this._debouncers=this._debouncers||{},this._debouncers[o]=K.debounce(this._debouncers[o],d>0?se.after(d):R,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?se.run(o.bind(this),l):~R.run(o.bind(this))}cancelAsync(o){o<0?R.cancel(~o):se.cancel(o)}create(o,l){let d=document.createElement(o);if(l)if(d.setProperties)d.setProperties(l);else for(let h in l)d[h]=l[h];return d}elementMatches(o,l){return br(l||this,o)}toggleAttribute(o,l){let d=this;return arguments.length===3&&(d=arguments[2]),arguments.length==1&&(l=!d.hasAttribute(o)),l?(f(d).setAttribute(o,""),!0):(f(d).removeAttribute(o),!1)}toggleClass(o,l,d){d=d||this,arguments.length==1&&(l=!d.classList.contains(o)),l?d.classList.add(o):d.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,d,h){h=h||this,this.transform("translate3d("+o+","+l+","+d+")",h)}arrayDelete(o,l){let d;if(Array.isArray(o)){if(d=o.indexOf(l),d>=0)return o.splice(d,1)}else if(d=L(this,o).indexOf(l),d>=0)return this.splice(o,d,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return s.prototype.is="",s});var Pl={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Os={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Hl=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Os);function Ll(t,e,i){let n=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let s=0;s<r.length;s++){let a=r[s];if(!(a in i))if(n)e[a]=t[a];else{let o=Object.getOwnPropertyDescriptor(t,a);o&&(o.configurable=!0,Object.defineProperty(e,a,o))}}}function Tl(t,e,i){for(let n=0;n<e.length;n++)Is(t,e[n],i,Hl)}function Is(t,e,i,n){Ll(e,t,n);for(let r in Pl)e[r]&&(i[r]=i[r]||[],i[r].push(e[r]))}function Ns(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let r=t[n];r?Array.isArray(r)?Ns(r,e):e.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&e.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return e}function Ls(t,e){for(let i in e){let n=t[i],r=e[i];!("value"in r)&&n&&"value"in n?t[i]=Object.assign({value:n.value},r):t[i]=r}}var Ts=mi(HTMLElement);function Ol(t,e,i){let n,r={};class s extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,d;l<n.length;l++)d=n[l],d.properties&&this.createProperties(d.properties),d.observers&&this.createObservers(d.observers,d.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){let l={};if(n)for(let d=0;d<n.length;d++)Ls(l,n[d].properties);return Ls(l,t.properties),l}static get observers(){let l=[];if(n)for(let d=0,h;d<n.length;d++)h=n[d],h.observers&&(l=l.concat(h.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();let l=r.created;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}_registered(){let l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Z&&a(l);let d=Object.getPrototypeOf(this),h=r.beforeRegister;if(h)for(let c=0;c<h.length;c++)h[c].call(d);if(h=r.registered,h)for(let c=0;c<h.length;c++)h[c].call(d)}}_applyListeners(){super._applyListeners();let l=r.listeners;if(l)for(let d=0;d<l.length;d++){let h=l[d];if(h)for(let c in h)this._addMethodEventListenerToNode(this,c,h[c])}}_ensureAttributes(){let l=r.hostAttributes;if(l)for(let d=l.length-1;d>=0;d--){let h=l[d];for(let c in h)this._ensureAttribute(c,h[c])}super._ensureAttributes()}ready(){super.ready();let l=r.ready;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}attached(){super.attached();let l=r.attached;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}detached(){super.detached();let l=r.detached;if(l)for(let d=0;d<l.length;d++)l[d].call(this)}attributeChanged(l,d,h){super.attributeChanged();let c=r.attributeChanged;if(c)for(let u=0;u<c.length;u++)c[u].call(this,l,d,h)}}if(i){Array.isArray(i)||(i=[i]);let o=e.prototype.behaviors;n=Ns(i,null,o),s.prototype.behaviors=o?o.concat(i):n}let a=o=>{n&&Tl(o,n,r),Is(o,t,r,Os)};return Z||a(s.prototype),s.generatedFrom=t,s}var Rs=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Ts):Ts;return i=Ol(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};var O=function(t){let e;return typeof t=="function"?e=t:e=O.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};O.Class=Rs;function zr(t,e,i,n,r){let s;r&&(s=typeof i=="object"&&i!==null,s&&(n=t.__dataTemp[e]));let a=n!==i&&(n===n||i===i);return s&&a&&(t.__dataTemp[e]=i),a}var Ke=S(t=>{class e extends t{_shouldPropertyChange(n,r,s){return zr(this,n,r,s,!0)}}return e}),fi=S(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,r,s){return zr(this,n,r,s,this.mutableData)}}return e});Ke._mutablePropertyChange=zr;var Mr=null;function Er(){return Mr}Er.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Er,writable:!0}});var Ds=be(Er),Il=Ke(Ds);function Nl(t,e){Mr=t,Object.setPrototypeOf(t,e.prototype),new e,Mr=null}var Rl=be(class{});function Sr(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),f(f(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{let r=n.__polymerReplaced__;r&&f(f(r).parentNode).replaceChild(n,r)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}var W=class extends Rl{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let r=this.root.firstChild;r;r=r.nextSibling)i.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,r=>{r.model=this,n(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,i,n)}}_showHideChildren(e){Sr(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}};W.prototype.__dataHost;W.prototype.__templatizeOptions;W.prototype._methodHost;W.prototype.__templatizeOwner;W.prototype.__hostProps;var $l=Ke(W);function $s(t){let e=t.__dataHost;return e&&e._methodHost||e}function Dl(t,e,i){let n=i.mutableData?$l:W;Ce.mixin&&(n=Ce.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(t),Bl(r,t,e,i),r}function Vl(t,e,i,n){let r=i.forwardHostProp;if(r&&e.hasHostProps){let s=t.localName=="template",a=e.templatizeTemplateClass;if(!a){if(s){let l=i.mutableData?Il:Ds;class d extends l{}a=e.templatizeTemplateClass=d}else{let l=t.constructor;class d extends l{}a=e.templatizeTemplateClass=d}let o=e.hostProps;for(let l in o)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Fl(l,r)}),a.prototype._createNotifyingProperty("_host_"+l);Xt&&n&&ql(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),s)Nl(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);let o=e.hostProps;for(let l in o)if(l="_host_"+l,l in t){let d=t[l];delete t[l],t.__data[l]=d}}}}function Fl(t,e){return function(n,r,s){e.call(n.__templatizeOwner,r.substring(6),s[r])}}function Bl(t,e,i,n){let r=i.hostProps||{};for(let s in n.instanceProps){delete r[s];let a=n.notifyInstanceProp;a&&t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ul(s,a)})}if(n.forwardHostProp&&e.__dataHost)for(let s in r)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:jl()})}function Ul(t,e){return function(n,r,s){e.call(n.__templatizeOwner,n,r,s[r])}}function jl(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function Ce(t,e,i){if(U&&!$s(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:W)._parseTemplate(t),s=r.templatizeInstanceClass;s||(s=Dl(t,r,i),r.templatizeInstanceClass=s);let a=$s(t);Vl(t,r,i,a);let o=class extends s{};return o.prototype._methodHost=a,o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=r.hostProps,o=o,o}function ql(t,e,i){let n=i.constructor._properties,{propertyEffects:r}=t,{instanceProps:s}=e;for(let a in r)if(!n[a]&&!(s&&s[a])){let o=r[a];for(let l=0;l<o.length;l++){let{part:d}=o[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function kr(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=f(e).parentNode;return null}var Vs=!1;function We(){if(Z&&!qi){if(!Vs){Vs=!0;let t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}var Kl=ci(fi(be(HTMLElement))),Ar=class extends Kl{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),U)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,r){this.mutableData=!0}connectedCallback(){We()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){f(f(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}};customElements.define("dom-bind",Ar);var Fs=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t}),gi=class{constructor(e,i){Us(e,i);let n=i.reduce((r,s,a)=>r+Bs(s)+e[a+1],e[0]);this.value=n.toString()}toString(){return this.value}};function Bs(t){if(t instanceof gi)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function Wl(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof gi)return Bs(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}var A=function(e,...i){Us(e,i);let n=document.createElement("template"),r=i.reduce((s,a,o)=>s+Wl(a)+e[o+1],e[0]);return Fs&&(r=Fs.createHTML(r)),n.innerHTML=r,n},Us=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};var Ye=oe(HTMLElement);var Yl=fi(Ye),vi=class extends Yl{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!vt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),We()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=f(f(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){let e=this,i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Ce(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(r,s){let a=this.__instances;for(let o=0,l;o<a.length&&(l=a[o]);o++)l.forwardHostProp(r,s)},notifyInstanceProp:function(r,s,a){if(In(this.as,s)){let o=r[this.itemsIndexAs];s==this.as&&(this.items[o]=a);let l=ye(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,s);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=K.debounce(this.__renderDebouncer,i>0?se.after(i):R,e.bind(this)),Be(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Pt()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[],i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!vt||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,r,s)=>this.__filterFn(e[n],r,s))),this.__sortFn&&i.sort((n,r)=>this.__sortFn(e[n],e[r])),i}__calculateLimit(e){let i=e,n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),r=Math.max(i-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){let e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){let r=this.__itemsIdxToInstIdx={},s;for(s=0;s<i;s++){let a=this.__instances[s],o=n[s],l=e[o];r[o]=s,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,s),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(l,s,o)}for(let a=this.__instances.length-1;a>=s;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let i=this.__instances[e],n=f(i.root);for(let r=0;r<i.children.length;r++){let s=i.children[r];n.appendChild(s)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let r={};return r[this.as]=e,r[this.indexAs]=i,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,i,n){let r=this.__stampInstance(e,i,n),s=this.__instances[i+1],a=s?s.children[0]:this;return f(f(this).parentNode).insertBefore(r.root,a),this.__instances[i]=r,r}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),r=n.indexOf("."),s=r<0?n:n.substring(0,r);if(s==parseInt(s,10)){let a=r<0?"":n.substring(r+1);this.__handleObservedPaths(a);let o=this.__itemsIdxToInstIdx[s],l=this.__instances[o];if(l){let d=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(d,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return kr(this.template,e)}};customElements.define(vi.is,vi);var _i=class extends Ye{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=K.debounce(this.__renderDebouncer,R,()=>this.__render()),Be(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();let e=f(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!f(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),We()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){let e=this,i=e._templateInfo?e:f(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(f(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=f(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&f(this).previousSibling!==i[i.length-1])for(let r=0,s;r<i.length&&(s=i[r]);r++)f(e).insertBefore(s,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Pt()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!vt||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}},Pr=class extends _i{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){let i=this.__dataHost||this;if(U&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");let n=i._bindTemplate(this.__template,!0);n.runEffects=(r,s,a)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(o.changedProps,s)),r(s,a);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:r,changedProps:{}}),a)for(let l in s){let d=j(l);o.changedProps[d]=this.__dataHost[d]}else Object.assign(o.changedProps,s)},this.__instance=i._stampTemplate(this.__template,n),f(e).insertBefore(this.__instance,this)}__syncHostProperties(){let e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){let e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,Sr(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}},Hr=class extends _i{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Ce(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[j(i)]=!0))}})),this.__instance=new this.__ctor,f(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=f(e[0]).parentNode;if(i){i=f(i);for(let n=0,r;n<e.length&&(r=e[n]);n++)i.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}},js=Gt?Pr:Hr;customElements.define(js.is,js);var Xl=S(t=>{let e=oe(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,s){let a=s.path;if(a==JSCompiler_renameProperty("items",this)){let o=s.base||[],l=this.__lastItems,d=this.__lastMulti;if(r!==d&&this.clearSelection(),l){let h=pi(o,l);this.__applySplices(h)}this.__lastItems=o,this.__lastMulti=r}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let o=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(r){let s=this.__selectedMap;for(let o=0;o<r.length;o++){let l=r[o];s.forEach((d,h)=>{d<l.index||(d>=l.index+l.removed.length?s.set(h,d+l.addedCount-l.removed.length):s.set(h,-1))});for(let d=0;d<l.addedCount;d++){let h=l.index+d;s.has(this.items[h])&&s.set(this.items[h],h)}}this.__updateLinks();let a=0;s.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,s.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let s=this.__selectedIndexForItemIndex(r);if(s>=0){let a=0;this.__selectedMap.forEach((o,l)=>{s==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(r){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let s=this.__selectedMap.get(r);if(s>=0){this.__selectedMap.delete(r);let a;this.multi&&(a=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let s=this.items[r];this.isSelected(s)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}return i});var Jl=Xl(Ye),yi=class extends Jl{static get is(){return"array-selector"}static get template(){return null}};customElements.define(yi.is,yi);var bi=new B;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){bi.processStyles(),ct(t,e)},styleElement(t){bi.processStyles()},styleDocument(t){bi.processStyles(),ct(document.body,t)},getComputedStyleValue(t,e){return Ft(t,e)},flushCustomStyles(){},nativeCss:Te,nativeShadow:ve,cssBuild:ne,disableRuntime:Dt});window.ShadyCSS.CustomStyleInterface=bi;var qs="include",Gl=window.ShadyCSS.CustomStyleInterface,Lr=class extends HTMLElement{constructor(){super(),this._style=null,Gl.addCustomStyle(this)}getStyle(){if(this._style)return this._style;let e=this.querySelector("style");if(!e)return null;this._style=e;let i=e.getAttribute(qs);return i&&(e.removeAttribute(qs),e.textContent=On(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}};window.customElements.define("custom-style",Lr);var Zl;Zl=Ke._mutablePropertyChange;var Ks=mi(HTMLElement).prototype;var Ws=A`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Ws.setAttribute("style","display: none;");document.head.appendChild(Ws.content);var Ys=document.createElement("style");Ys.textContent="[hidden] { display: none !important; }";document.head.appendChild(Ys);var ee=class t{constructor(e){t[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,i=this.key;if(e&&i)return t.types[e]&&t.types[e][i]}set value(e){var i=this.type,n=this.key;i&&n&&(i=t.types[i]=t.types[i]||{},e==null?delete i[n]:i[n]=e)}get list(){var e=this.type;if(e){var i=t.types[this.type];return i?Object.keys(i).map(function(n){return Ql[this.type][n]},this):[]}}byKey(e){return this.key=e,this.value}};ee[" "]=function(){};ee.types={};var Ql=ee.types;O({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new ee({type:t,key:e});return i!==void 0&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new ee({type:this.type,key:t}).value}});O({_template:A`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Ks.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&C(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,C(this.root).appendChild(this._img))}});var Xs=A`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Xs.setAttribute("style","display: none;");document.head.appendChild(Xs.content);var Js=A`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Js.setAttribute("style","display: none;");document.head.appendChild(Js.content);var Gs={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};var Zs={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},e1={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Qs={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},t1=/[a-z0-9*]/,i1=/U\+/,r1=/^arrow/,n1=/^space(bar)?/,s1=/^escape$/;function eo(t,e){var i="";if(t){var n=t.toLowerCase();n===" "||n1.test(n)?i="space":s1.test(n)?i="esc":n.length==1?(!e||t1.test(n))&&(i=n):r1.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function o1(t){var e="";return t&&(t in Zs?e=Zs[t]:i1.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function a1(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=e1[t]),e}function l1(t,e){return t.key?eo(t.key,e):t.detail&&t.detail.key?eo(t.detail.key,e):o1(t.keyIdentifier)||a1(t.keyCode)||""}function to(t,e){var i=l1(e,t.hasModifiers);return i===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function d1(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,i){var n=i.split(":"),r=n[0],s=n[1];return r in Qs?(e[Qs[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=s||"keydown"),e},{combo:t.split(":").shift()})}function io(t){return t.trim().split(" ").map(function(e){return d1(e)})}var xi={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=io(e),n=0;n<i.length;++n)if(to(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(i,n){var r=i[0].hasModifiers,s=n[0].hasModifiers;return r===s?0:r?-1:1})},_addKeyBinding:function(t,e){io(t).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],r=t[i][1];if(to(n,e)&&(this._triggerKeyHandler(n,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var r=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&i.preventDefault()}};var Tr={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=C(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=C(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},ro=[xi,Tr];var Y={distance:function(t,e,i,n){var r=t-i,s=e-n;return Math.sqrt(r*r+s*s)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function no(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}no.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=Y.distance(t,e,0,0),n=Y.distance(t,e,this.width,0),r=Y.distance(t,e,0,this.height),s=Y.distance(t,e,this.width,this.height);return Math.max(i,n,r,s)}};function ze(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),C(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}ze.MAX_RADIUS=300;ze.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=Y.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?Y.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(t+e),ze.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/ze.MAX_RADIUS),r=this.mouseInteractionSeconds/n,s=i*(1-Math.pow(80,-r));return Math.abs(s)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,ze.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,ze.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new no(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Y.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=Y.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=Y.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=Y.now())},remove:function(){C(C(this.waveContainer).parentNode).removeChild(this.waveContainer)}};O({_template:A`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[xi],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){C(this).parentNode.nodeType==11?this.keyEventTarget=C(this).getOwnerRoot().host:this.keyEventTarget=C(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new ze(this);return C(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});var Or={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){Tr._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&C(e).appendChild(this._ripple),t){var i=C(this._rippleContainer||this),n=C(t).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var t=document.createElement("paper-ripple");return t},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}};var h1={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=Or._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},so=[ro,Gs,Or,h1];O({is:"paper-icon-button",_template:A`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[so],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var i=this.getAttribute("aria-label");(!i||e==i)&&this.setAttribute("aria-label",t)}});O({_template:A`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=C(this).parentNode,e=C(this).getOwnerRoot(),i;return this.for?i=C(e).querySelector("#"+this.for):i=t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t,i},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){t==="entry"?this.show():t==="exit"&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(C(this).textContent.trim()===""){for(var t=!0,e=C(this).getEffectiveChildNodes(),i=0;i<e.length;i++)if(e[i].textContent.trim()!==""){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying){this._showing=!1,this._cancelAnimation();return}else this._onAnimationFinish();this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(!(!this._target||!this.offsetParent)){var t=this.offset;this.marginTop!=14&&this.offset==14&&(t=this.marginTop);var e=this.offsetParent.getBoundingClientRect(),i=this._target.getBoundingClientRect(),n=this.getBoundingClientRect(),r=(i.width-n.width)/2,s=(i.height-n.height)/2,a=i.left-e.left,o=i.top-e.top,l,d;switch(this.position){case"top":l=a+r,d=o-n.height-t;break;case"bottom":l=a+r,d=o+i.height+t;break;case"left":l=a-n.width-t,d=o+s;break;case"right":l=a+i.width+t,d=o+s;break}this.fitToVisibleBounds?(e.left+l+n.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,l)+"px",this.style.right="auto"),e.top+d+n.height>window.innerHeight?(this.style.bottom=e.height-o+t+"px",this.style.top="auto"):(this.style.top=Math.max(-e.top,d)+"px",this.style.bottom="auto")):(this.style.left=l+"px",this.style.top=d+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){t!==500&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if(t==="entry"&&this.animationEntry!=="")return this.animationEntry;if(t==="exit"&&this.animationExit!=="")return this.animationExit;if(this.animationConfig[t]&&typeof this.animationConfig[t][0].name=="string"){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&this.animationConfig[t][0].timing.delay!==0){var e=this.animationConfig[t][0].timing.delay;t==="entry"?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):t==="exit"&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}});O({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ee({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=C(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(C(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=e.getAttribute("dir")==="rtl"}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&window.getComputedStyle(t).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return C(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=n.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",s),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=a,r.appendChild(n).removeAttribute("id"),r}return null}});var c1=A`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(c1.content);function wi(t,e){if(t==null||e==null||t<=0||e<0)return"";let i=t+e,n=i%3===2?10:i%3===1?8:6;return`${Math.trunc(i/3)}d6+d${n}`}function q(t){let e=Number.parseInt(t,10);return isNaN(e)?0:e??0}function V(t){return t===void 0||isNaN(t)?"":Math.round(t).toString()}var w=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var p1={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:Nt},u1=(t=p1,e,i)=>{let{kind:n,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),n==="accessor"){let{name:a}=i;return{set(o){let l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){let{name:a}=i;return function(o){let l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function g(t){return(e,i)=>typeof i=="object"?u1(t,e,i):((n,r,s)=>{let a=r.hasOwnProperty(s);return r.constructor.createProperty(s,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}var te=class extends y{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return m`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        @click=${this.onBuyRankButtonClicked}
      >
        <iron-icon icon="add"></iron-icon></button
      ><paper-tooltip for="buy-button"
        >${this.canAffordRank?`Buy a rank of this skill for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this skill (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}</paper-tooltip
      >
      <input
        type="text"
        id="skill-name"
        .value=${this.model.name}
        @change=${this.onNameFieldChanged}
      />
      <input
        type="number"
        id="rank"
        min="1"
        ?readonly=${this.locked}
        .value=${V(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="die-code">
        ${wi(this.attributeModel.rank,this.model.rank)}
      </div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${V(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}connectedCallback(){super.connectedCallback()}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(i){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{name:i.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(i){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(i){this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{xp:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(i){let n=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("skill-change",{detail:{attribute:this.attributeModel.id,id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),n>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-n}},bubbles:!0,composed:!0,cancelable:!1}))}};te.styles=[x,b`
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
    `],p([g({type:Object})],te.prototype,"model",2),p([g({type:Object})],te.prototype,"attributeModel",2),p([g({type:Number})],te.prototype,"generalXp",2),p([g({type:Boolean})],te.prototype,"locked",2),te=p([w("skill-view")],te);var ie=class extends y{constructor(){super(...arguments);this.generalXp=0;this.showHeader=!1;this.locked=!0}render(){return m`
      ${this.showHeader?this.renderHeader():m``}
      <section>
        <div id="attribute">
          <button
            id="buy-button"
            class="buy-button"
            ?disabled=${!this.canAffordRank}
            @click=${this.onBuyRankButtonClicked}
          >
            <iron-icon icon="add"></iron-icon></button
          ><paper-tooltip for="buy-button"
            >${this.canAffordRank?`Buy a rank of this attribute for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this attribute (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}</paper-tooltip
          >
          <div id="name">${this.model.name}</div>
          <input
            type="number"
            id="rank"
            min="1"
            ?readonly=${this.locked}
            .value=${V(this.model.rank)}
            @change=${this.onRankChanged}
          />
          <div id="die-code">${wi(this.model.rank,0)}</div>
          <input
            type="number"
            id="xp"
            min="0"
            .value=${V(this.model.xp)}
            @change=${this.onXpFieldChanged}
          />
        </div>
        ${this.model.skills.map(i=>m`<skill-view
              .model=${i}
              .attributeModel=${this.model}
              .generalXp=${this.generalXp}
              .locked=${this.locked}
            ></skill-view>`)}
        ${this.locked?m``:this.renderEditUi()}
      </section>
    `}renderHeader(){return m`
      <header>
        <div class="text-column"></div>
        <div class="numeric-column">Rank</div>
        <div class="die-code-column">Dice</div>
        <div class="numeric-column">XP</div>
      </header>
    `}renderEditUi(){return m`<button @click=${this.onAddButtonClicked}>Add skill</button>`}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return((this.model.rank??0)+1)*5}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onRankChanged(i){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(i){this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{xp:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(i){let n=((this.model.rank??0)+1)*5,r=Math.max(0,n-(this.model.xp??0));this.dispatchEvent(new CustomEvent("attribute-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-n)}},bubbles:!0,composed:!0,cancelable:!1})),r>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-r}},bubbles:!0,composed:!0,cancelable:!1}))}onAddButtonClicked(i){this.dispatchEvent(new CustomEvent("add-skill-row",{detail:{id:this.model.id},bubbles:!0,composed:!0,cancelable:!1}))}};ie.styles=[x,b`
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
    `],p([g({type:Object})],ie.prototype,"model",2),p([g({type:Number})],ie.prototype,"generalXp",2),p([g({type:Boolean})],ie.prototype,"showHeader",2),p([g({type:Boolean})],ie.prototype,"locked",2),ie=p([w("attribute-view")],ie);var le=class extends y{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",i=>this.recalculateColumns())}render(){return m`
      <h2>Attributes</h2>
      ${this.renderAttributes()}
    `}renderAttributes(){let i=[];return this.model.attributes.forEach((n,r)=>{let s=m`<attribute-view
        .model=${n}
        .generalXp=${this.model.xp}
        .showHeader=${r<this.columnCount}
        .locked=${this.locked}
      ></attribute-view>`;r%this.columnCount===0?i.push([s]):i[i.length-1].push(s)}),i.map(n=>m`<div class="attribute-group">${n}</div>`)}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}};le.styles=[x,b`
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
    `],p([g({type:Object})],le.prototype,"model",2),p([g({type:Number})],le.prototype,"columnCount",2),p([g({type:Boolean})],le.prototype,"locked",2),le=p([w("attributes-view")],le);var Xe=class extends y{render(){return m`
      <h2>Description</h2>
      <section>
        <textarea
          .value=${this.model.description||""}
          @change=${this.onDescriptionChanged}
        ></textarea>
      </section>
    `}onDescriptionChanged(i){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{description:i.target.value}},bubbles:!0,composed:!0}))}};Xe.styles=[x,b`
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
    `],p([g({type:Object})],Xe.prototype,"model",2),Xe=p([w("character-description-view")],Xe);var Je=class extends y{render(){return m`
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
    `}fieldChangeHandler(i){return n=>{this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{[i]:n.target.value}},bubbles:!0,composed:!0}))}}};Je.styles=[x,b`
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
    `],p([g({type:Object})],Je.prototype,"model",2),Je=p([w("character-info-view")],Je);var Ge=class extends y{render(){return m`
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
    `}onNameChanged(i){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{name:i.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRelationshipChanged(i){this.dispatchEvent(new CustomEvent("connection-change",{detail:{id:this.model.id,change:{relationship:i.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}};Ge.styles=[x,b`
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
    `],p([g({type:Object})],Ge.prototype,"model",2),Ge=p([w("connection-view")],Ge);var Me=class extends y{constructor(){super(...arguments);this.locked=!0}render(){return m`
      <h2>Connections & Bonds</h2>
      <section>
        ${this.model.connections.map(i=>m`<connection-view .model=${i}></connection-view>`)}
        ${this.locked?m``:this.renderAddUi()}
      </section>
    `}renderAddUi(){return m`
      <div id="add-ui">
        <button @click=${this.onAddButtonClicked}>Add row</button>
      </div>
    `}onAddButtonClicked(i){this.dispatchEvent(new CustomEvent("add-connection-row",{detail:{},bubbles:!0,composed:!0}))}};Me.styles=[x,b`
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
    `],p([g({type:Object})],Me.prototype,"model",2),p([g({type:Boolean})],Me.prototype,"locked",2),Me=p([w("connections-view")],Me);var de=class extends y{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return m`
      ${this.showHeader?this.renderHeader():m``}
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
    `}renderHeader(){return m`
      <header>
        <span id="name-header">Equipment</span>
        <span id="bonus-header">Bonus</span>
      </header>
    `}onNameChanged(i){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{name:i.target.value}},bubbles:!0,composed:!0}))}onBonusChanged(i){this.dispatchEvent(new CustomEvent("equipment-change",{detail:{id:this.model.id,change:{bonus:i.target.value}},bubbles:!0,composed:!0}))}};de.styles=[x,b`
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
    `],p([g({type:Object})],de.prototype,"model",2),p([g({type:Boolean})],de.prototype,"showHeader",2),p([g({type:Boolean})],de.prototype,"locked",2),de=p([w("equipment-view")],de);var Ze=class extends y{render(){return m`
      <div id="label">General XP</div>
      <input
        type="number"
        .value=${V(this.model.xp)}
        @change=${this.onXPChanged}
      />
    `}onXPChanged(i){let n=q(i.target.value);isNaN(n)&&(n=0),this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:n}},bubbles:!0,composed:!0}))}};Ze.styles=[x,b`
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
    `],p([g({type:Object})],Ze.prototype,"model",2),Ze=p([w("general-xp-view")],Ze);var he=class extends y{constructor(){super(...arguments);this.showHeader=!1;this.locked=!0}render(){return m`
      ${this.showHeader?this.renderHeader():m``}
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
          .value=${V(this.model.quantity)}
          @change=${this.onQuantityChanged}
        />
      </div>
    `}renderHeader(){return m`
      <header>
        <span id="name-header">Items</span>
        <span id="quantity-header">Quantity</span>
      </header>
    `}onNameChanged(i){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{name:i.target.value}},bubbles:!0,composed:!0}))}onQuantityChanged(i){this.dispatchEvent(new CustomEvent("item-change",{detail:{id:this.model.id,change:{quantity:Number.parseFloat(i.target.value)}},bubbles:!0,composed:!0}))}};he.styles=[x,b`
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
    `],p([g({type:Object})],he.prototype,"model",2),p([g({type:Boolean})],he.prototype,"showHeader",2),p([g({type:Boolean})],he.prototype,"locked",2),he=p([w("item-view")],he);var Ee=class extends y{constructor(){super(...arguments);this.locked=!0}render(){return m`
      <h2>Equipment & Items</h2>
      <section>
        <div id="equipment">
          ${this.model.inventory.equipment.map((i,n)=>m`<equipment-view
                .model=${i}
                .showHeader=${n===0}
                .locked=${this.locked}
              ></equipment-view>`)}
          ${this.locked?m``:m`<button @click=${this.onAddEquipmentButtonClicked}>
                Add row
              </button>`}
        </div>
        <div id="items">
          ${this.model.inventory.items.map((i,n)=>m`<item-view
                .model=${i}
                .showHeader=${n===0}
                .locked=${this.locked}
              ></item-view>`)}
          ${this.locked?m``:m`<button @click=${this.onAddItemButtonClicked}>
                Add row
              </button>`}
        </div>
      </section>
    `}onAddEquipmentButtonClicked(i){this.dispatchEvent(new CustomEvent("add-equipment-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}onAddItemButtonClicked(i){this.dispatchEvent(new CustomEvent("add-item-row",{detail:{},bubbles:!0,composed:!0,cancelable:!1}))}};Ee.styles=[x,b`
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
    `],p([g({type:Object})],Ee.prototype,"model",2),p([g({type:Boolean})],Ee.prototype,"locked",2),Ee=p([w("inventory-view")],Ee);var Qe=class extends y{render(){return m`
      <h2>Notes</h2>
      <section>
        <textarea
          .value=${this.model.notes||""}
          @change=${this.onNotesChanged}
        ></textarea>
      </section>
    `}onNotesChanged(i){this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{notes:i.target.value}},bubbles:!0,composed:!0}))}};Qe.styles=[x,b`
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
    `],p([g({type:Object})],Qe.prototype,"model",2),Qe=p([w("notes-view")],Qe);var ce=class extends y{constructor(){super(...arguments);this.generalXp=0;this.locked=!0}render(){return m`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank||!this.model.name}
        @click=${this.onBuyRankButtonClicked}
      >
        <iron-icon icon="add"></iron-icon></button
      ><paper-tooltip for="buy-button"
        >${this.canAffordRank?`Buy a rank of this specialization for ${this.xpCostToRaise} XP`:`Cannot afford a rank of this specialization (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}</paper-tooltip
      >
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
        .value=${V(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="bonus">${this.model.rank?`+${this.model.rank}`:""}</div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${V(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `}get xpAvailable(){return(this.generalXp??0)+(this.model.xp??0)}get xpCostToRaise(){return(this.model.rank??0)+1}get canAffordRank(){return this.xpAvailable>=this.xpCostToRaise}onNameFieldChanged(i){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{name:i.target.value}},bubbles:!0,composed:!0,cancelable:!1}))}onRankFieldChanged(i){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onXpFieldChanged(i){this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{xp:q(i.target.value)}},bubbles:!0,composed:!0,cancelable:!1}))}onBuyRankButtonClicked(i){let n=Math.max(0,this.xpCostToRaise-(this.model.xp??0));this.dispatchEvent(new CustomEvent("specialization-change",{detail:{id:this.model.id,change:{rank:(this.model.rank??0)+1,xp:Math.max(0,(this.model.xp??0)-this.xpCostToRaise)}},bubbles:!0,composed:!0,cancelable:!1})),n>0&&this.dispatchEvent(new CustomEvent("character-change",{detail:{change:{xp:this.generalXp-n}},bubbles:!0,composed:!0,cancelable:!1}))}};ce.styles=[x,b`
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
    `],p([g({type:Object})],ce.prototype,"model",2),p([g({type:Number})],ce.prototype,"generalXp",2),p([g({type:Boolean})],ce.prototype,"locked",2),ce=p([w("specialization-view")],ce);var pe=class extends y{constructor(){super(...arguments);this.columnCount=3;this.locked=!0}connectedCallback(){super.connectedCallback(),this.recalculateColumns(),window.addEventListener("resize",i=>this.recalculateColumns())}render(){return m`
      <h2>Specializations</h2>
      <header>
        ${Array.from(Array(this.columnCount).keys()).map(()=>m`<div class="header-column">
            <div class="text-column"></div>
            <div class="numeric-column">Rank</div>
            <div class="die-code-column">Bonus</div>
            <div class="numeric-column last-column">XP</div>
          </div>`)}
      </header>
      <section>
        ${this.model.specializations.map(i=>m`<specialization-view
              .model=${i}
              .generalXp=${this.model.xp}
              .locked=${this.locked}
            ></specialization-view>`)}
        ${this.locked?m``:this.renderEditUi()}
      </section>
    `}renderEditUi(){return m`<div id="edit-ui">
      <button @click=${this.onAddButtonClicked}>Add row</button>
    </div>`}recalculateColumns(){window.innerWidth<=500?this.columnCount=1:window.innerWidth<=650?this.columnCount=2:this.columnCount=3}onAddButtonClicked(i){this.dispatchEvent(new CustomEvent("add-specialization-row",{detail:{},bubbles:!0,composed:!0}))}};pe.styles=[x,b`
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
    `],p([g({type:Object})],pe.prototype,"model",2),p([g({type:Number})],pe.prototype,"columnCount",2),p([g({type:Boolean})],pe.prototype,"locked",2),pe=p([w("specializations-view")],pe);var Se=class extends y{constructor(){super(...arguments);this.showHeader=!1}render(){return m`
      ${this.showHeader?this.renderHeader():m``}
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
    `}renderHeader(){return m`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Wounds</span>
        <span id="effects-header">Effects</span>
        <span id="shock-check-header">Shock check</span>
      </header>
    `}onCheckedChanged(i){this.dispatchEvent(new CustomEvent("wound-level-change",{detail:{id:this.model.id,checked:i.target.checked},bubbles:!0,composed:!0}))}};Se.styles=[x,b`
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
        flex: 2 0 0;
      }
    `],p([g({type:Object})],Se.prototype,"model",2),p([g({type:Boolean})],Se.prototype,"showHeader",2),Se=p([w("wound-level-view")],Se);var ke=class extends y{constructor(){super(...arguments);this.showHeader=!1}render(){return m`
      ${this.showHeader?this.renderHeader():m``}
      <div id="content">
        <input
          type="checkbox"
          .checked=${this.model.checked}
          @change=${this.onCheckedChanged}
        />
        <span id="level">${this.model.level}</span>
        <span id="effects">${this.model.effects}</span>
      </div>
    `}renderHeader(){return m`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Fatigue</span>
        <span id="effects-header">Effects</span>
      </header>
    `}onCheckedChanged(i){this.dispatchEvent(new CustomEvent("fatigue-level-change",{detail:{id:this.model.id,checked:i.target.checked},bubbles:!0,composed:!0}))}};ke.styles=[x,b`
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
        flex: 3 0 0;
      }
    `],p([g({type:Object})],ke.prototype,"model",2),p([g({type:Boolean})],ke.prototype,"showHeader",2),ke=p([w("fatigue-level-view")],ke);var Ae=class extends y{constructor(){super(...arguments);this.locked=!0}render(){return m`
      <h2>Status</h2>
      <section>
        <div id="wound-levels">
          ${this.model.status.woundLevels.map((i,n)=>m`<wound-level-view
                .model=${i}
                .showHeader=${n===0}
              ></wound-level-view>`)}
          ${this.locked?m``:this.renderWoundEditUi()}
        </div>
        <div id="fatigue-levels">
          ${this.model.status.fatigueLevels.map((i,n)=>m`<fatigue-level-view
                .model=${i}
                .showHeader=${n===0}
              ></fatigue-level-view>`)}
          ${this.locked?m``:this.renderFatigueEditUi()}
        </div>
      </section>
    `}renderWoundEditUi(){return m`
      <div id="wound-edit-ui">
        <button @click=${this.onAddWoundLevel}>Add wound level</button
        ><button
          .disabled=${this.model.status.woundLevels.length<=6}
          @click=${this.onRemoveWoundLevel}
        >
          Remove wound level
        </button>
      </div>
    `}renderFatigueEditUi(){return m`
      <div id="fatigue-edit-ui">
        <button @click=${this.onAddFatigueLevel}>Add fatigue level</button
        ><button @click=${this.onRemoveFatigueLevel}>
          Remove fatigue level
        </button>
      </div>
    `}onAddWoundLevel(i){this.dispatchEvent(new CustomEvent("add-wound-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveWoundLevel(i){this.dispatchEvent(new CustomEvent("remove-wound-level",{detail:{},bubbles:!0,composed:!0}))}onAddFatigueLevel(i){this.dispatchEvent(new CustomEvent("add-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}onRemoveFatigueLevel(i){this.dispatchEvent(new CustomEvent("remove-fatigue-level",{detail:{},bubbles:!0,composed:!0}))}};Ae.styles=[x,b`
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
    `],p([g({type:Object})],Ae.prototype,"model",2),p([g({type:Boolean})],Ae.prototype,"locked",2),Ae=p([w("status-view")],Ae);var et=class extends y{render(){return m`
      <h2>Wealth</h2>

      <section>
        <table>
          <tr>
            <th></th>
            <th>Party Wealth</th>
            <th>Individual Wealth</th>
          </tr>
          ${this.model.wealth.map(i=>m`
              <tr>
                <td>${i.name}</td>
                <td>
                  <input
                    type="radio"
                    .checked=${i.selectedForParty}
                    @change=${this.partyWealthLevelChangedHandler(i.id)}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    .checked=${i.selectedForIndividual}
                    @change=${this.individualWealthLevelChangedHandler(i.id)}
                  />
                </td>
              </tr>
            `)}
        </table>
      </section>
    `}partyWealthLevelChangedHandler(i){return n=>{this.dispatchEvent(new CustomEvent("party-wealth-level-change",{detail:{id:i,checked:n.target.checked},bubbles:!0,composed:!0}))}}individualWealthLevelChangedHandler(i){return n=>{this.dispatchEvent(new CustomEvent("individual-wealth-level-change",{detail:{id:i,checked:n.target.checked},bubbles:!0,composed:!0}))}}};et.styles=[x,b`
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
    `],p([g({type:Object})],et.prototype,"model",2),et=p([w("wealth-view")],et);function I(t,e){return Array(t).fill(null).map(()=>e())}var v=class extends y{constructor(){super();this.columnCount=3;this.locked=!0;this._printDiv=null;this.model={name:"",archetype:"",player:"",age:"",gender:"",presentation:"",primeValue:"",primeFear:"",traits:"",description:"",notes:"",xp:0,connections:I(21,()=>({name:"",relationship:"",id:v.makeId()})),status:{woundLevels:[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:v.makeId()},{level:"2",effects:"-1",shockCheck:"",checkable:!0,checked:!1,id:v.makeId()},{level:"3",effects:"-2",shockCheck:"5",checkable:!0,checked:!1,id:v.makeId()},{level:"4",effects:"-1d",shockCheck:"10",checkable:!0,checked:!1,id:v.makeId()},{level:"5",effects:"-2d",shockCheck:"15",checkable:!0,checked:!1,id:v.makeId()},{level:"6",effects:"-3d",shockCheck:"30",checkable:!0,checked:!1,id:v.makeId()},{level:"7+",effects:"Death",shockCheck:"\u{1F571}",checkable:!1,checked:!1,id:v.makeId()}],fatigueLevels:[{level:"1",effects:"-1d",checked:!1,id:v.makeId()},{level:"2",effects:"-2d",checked:!1,id:v.makeId()},{level:"3",effects:"-3d",checked:!1,id:v.makeId()},{level:"4",effects:"-4d",checked:!1,id:v.makeId()}]},attributes:[{name:"Strength",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Dexterity",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Perception",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Presence",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Grace",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Intuition",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Will",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Wits",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))},{name:"Awareness",id:v.makeId(),skills:I(8,()=>({name:"",id:v.makeId()}))}],specializations:I(15,()=>({name:"",rank:0,xp:0,id:v.makeId()})),inventory:{equipment:I(12,()=>({name:"",bonus:"",id:v.makeId()})),items:I(12,()=>({name:"",quantity:0,id:v.makeId()}))},wealth:[{name:"Indebted",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Destitute",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Struggling",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Adequate",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Comfortable",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Prosperous",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Wealthy",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()},{name:"Opulent",selectedForParty:!1,selectedForIndividual:!1,id:v.makeId()}]},this.columnCount=3,this.locked=!0,this._printDiv=null}static makeId(){return Math.random().toString(36).substr(2,9)}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeprint",i=>this.onBeforePrint(i)),window.addEventListener("afterprint",i=>this.onAfterPrint(i)),this.addEventListener("character-change",i=>this.onCharacterChange(i)),this.addEventListener("connection-change",i=>this.onConnectionChange(i)),this.addEventListener("wound-level-change",i=>this.onWoundLevelChange(i)),this.addEventListener("fatigue-level-change",i=>this.onFatigueLevelChange(i)),this.addEventListener("attribute-change",i=>this.onAttributeChange(i)),this.addEventListener("skill-change",i=>this.onSkillChange(i)),this.addEventListener("specialization-change",i=>this.onSpecializationChange(i)),this.addEventListener("equipment-change",i=>this.onEquipmentChange(i)),this.addEventListener("item-change",i=>this.onItemChange(i)),this.addEventListener("party-wealth-level-change",i=>this.onPartyWealthLevelChange(i)),this.addEventListener("individual-wealth-level-change",i=>this.onIndividualWealthLevelChange(i)),this.addEventListener("add-connection-row",i=>this.onAddConnectionRow(i)),this.addEventListener("add-wound-level",i=>this.onAddWoundLevel(i)),this.addEventListener("remove-wound-level",i=>this.onRemoveWoundLevel(i)),this.addEventListener("add-fatigue-level",i=>this.onAddFatigueLevel(i)),this.addEventListener("remove-fatigue-level",i=>this.onRemoveFatigueLevel(i)),this.addEventListener("add-skill-row",i=>this.onAddSkillRow(i)),this.addEventListener("add-specialization-row",i=>this.onAddSpecializationRow(i)),this.addEventListener("add-equipment-row",i=>this.onAddEquipmentRow(i)),this.addEventListener("add-item-row",i=>this.onAddItemRow(i))}render(){return m`
      <nav>
        <paper-icon-button
          id="load-button"
          icon="file-upload"
          @click=${this.onLoadFromFile}
        ></paper-icon-button>
        <paper-tooltip for="load-button">Load from file</paper-tooltip>
        <paper-icon-button
          id="save-button"
          icon="save"
          @click=${this.onSaveToFile}
        ></paper-icon-button>
        <paper-tooltip for="save-button">Save to file</paper-tooltip>
        <paper-icon-button
          id="print-button"
          icon="print"
          @click=${this.onPrint}
        ></paper-icon-button>
        <paper-tooltip for="print-button">Print</paper-tooltip>
        <paper-icon-button
          id="lock-button"
          icon="lock-open"
          toggles
          @click=${this.onToggleLocked}
        ></paper-icon-button>
        <paper-tooltip for="lock-button">Lock/unlock</paper-tooltip>
      </nav>
      <h1>${this.model.name?this.model.name:"Character Sheet"}</h1>
      <main>
        <character-info-view .model=${this.model}></character-info-view>
        <character-description-view
          .model=${this.model}
        ></character-description-view>
        <status-view .model=${this.model} .locked=${this.locked}></status-view>
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
    `}onCharacterChange(i){let n=i.detail.change;this.model={...this.model,...n}}onConnectionChange(i){let n=i.detail.id,r=i.detail.change,s=this.model.connections.find(o=>o.id===n),a={...s,...r};this.model={...this.model,connections:[...this.model.connections.map(o=>o===s?a:o)]}}onWoundLevelChange(i){let n=i.detail.id,r=i.detail.checked,s=[...this.model.status.woundLevels],a=s.findIndex(o=>o.id===n);r?s=s.map((o,l)=>({...o,checked:l<=a})):s=s.map((o,l)=>({...o,checked:l>=a?!1:o.checked})),this.model={...this.model,status:{...this.model.status,woundLevels:s}}}onFatigueLevelChange(i){let n=i.detail.id,r=i.detail.checked,s=[...this.model.status.fatigueLevels],a=s.findIndex(o=>o.id===n);r?s=s.map((o,l)=>({...o,checked:l<=a})):s=s.map((o,l)=>({...o,checked:l>=a?!1:o.checked})),this.model={...this.model,status:{...this.model.status,fatigueLevels:s}}}onAttributeChange(i){let n=i.detail.id,r=i.detail.change,s=this.model.attributes.find(o=>o.id===n),a={...s,...r};this.model={...this.model,attributes:[...this.model.attributes.map(o=>o===s?a:o)]}}onSkillChange(i){let n=i.detail.attribute,r=i.detail.id,s=i.detail.change,a=this.model.attributes.find(h=>h.id===n),o=a.skills.find(h=>h.id===r),l={...o,...s},d={...a,skills:[...a.skills.map(h=>h===o?l:h)]};this.model={...this.model,attributes:[...this.model.attributes.map(h=>h===a?d:h)]}}onSpecializationChange(i){let n=i.detail.id,r=i.detail.change,s=this.model.specializations.find(o=>o.id===n),a={...s,...r};this.model={...this.model,specializations:[...this.model.specializations.map(o=>o===s?a:o)]}}onEquipmentChange(i){let n=i.detail.id,r=i.detail.change,s=this.model.inventory.equipment.find(o=>o.id===n),a={...s,...r};this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment.map(o=>o===s?a:o)]}}}onItemChange(i){let n=i.detail.id,r=i.detail.change,s=this.model.inventory.items.find(o=>o.id===n),a={...s,...r};this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items.map(o=>o===s?a:o)]}}}onPartyWealthLevelChange(i){let n=i.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(r=>({...r,selectedForParty:r.id===n}))]}}onIndividualWealthLevelChange(i){let n=i.detail.id;this.model={...this.model,wealth:[...this.model.wealth.map(r=>({...r,selectedForIndividual:r.id===n}))]}}onAddConnectionRow(i){this.model={...this.model,connections:[...this.model.connections,...I(3,()=>({name:"",relationship:"",id:v.makeId()}))]}}onAddSpecializationRow(i){this.model={...this.model,specializations:[...this.model.specializations,...I(3,()=>({name:"",id:v.makeId()}))]}}onAddSkillRow(i){let n=i.detail.id;this.model={...this.model,attributes:[...this.model.attributes.map(r=>r.id===n?{...r,skills:[...r.skills,{name:"",rank:0,xp:0,id:v.makeId()}]}:r)]}}onAddWoundLevel(i){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((n,r)=>r===0?[{level:"1",effects:"",shockCheck:"",checkable:!0,checked:!1,id:v.makeId()},{...n,level:`${r+2}`}]:[{...n,level:`${r+2}`}])}}}onRemoveWoundLevel(i){this.model={...this.model,status:{...this.model.status,woundLevels:this.model.status.woundLevels.flatMap((n,r)=>r===0?[]:[{...n,level:`${r}`}])}}}onAddFatigueLevel(i){let n=this.model.status.fatigueLevels.length+1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(n).keys()).map(r=>({level:`${r+1}`,effects:`-${r+1}d`,checked:this.model.status.fatigueLevels.length>r?this.model.status.fatigueLevels[r].checked:!1,id:v.makeId()}))}}}onRemoveFatigueLevel(i){let n=this.model.status.fatigueLevels.length-1;this.model={...this.model,status:{...this.model.status,fatigueLevels:Array.from(Array(n).keys()).map(r=>({level:`${r+1}`,effects:`-${r+1}d`,checked:this.model.status.fatigueLevels[r].checked,id:v.makeId()}))}}}onAddEquipmentRow(i){this.model={...this.model,inventory:{...this.model.inventory,equipment:[...this.model.inventory.equipment,{name:"",bonus:"",id:v.makeId()}]}}}onAddItemRow(i){this.model={...this.model,inventory:{...this.model.inventory,items:[...this.model.inventory.items,{name:"",quantity:0,id:v.makeId()}]}}}onSaveToFile(i){let n=JSON.stringify(this.model,void 0,2),r=document.createElement("a"),s=new Blob([n],{type:"application/json"});r.href=URL.createObjectURL(s),r.download=`${this._toFileName(this.model.name)}.json`,r.click(),URL.revokeObjectURL(r.href)}onLoadFromFile(i){let n=document.createElement("input");n.type="file",n.accept="application/json",n.addEventListener("change",async()=>{if(!n.files)return;let s=await n.files[0].text();this.model=JSON.parse(s)},{once:!0}),n.click()}onPrint(i){this.onBeforePrint(null),requestAnimationFrame(()=>{window.print()})}onBeforePrint(i){if(!this._printDiv){this._printDiv=document.createElement("div");let n=this.shadowRoot.getRootNode();for(let r of n.querySelector("main").children){let s=r.cloneNode(!0);"model"in s&&(s.model=this.model),"columnCount"in s&&(s.columnCount=3),this._printDiv.appendChild(s),"flushUpdate"in s&&typeof s.flushUpdate=="function"&&s.flushUpdate()}document.body.appendChild(this._printDiv)}}onAfterPrint(i){this._printDiv?.remove(),this._printDiv=null}onToggleLocked(i){this.locked=!i.target.active}_toFileName(i){return i.replace(/\W+/g,"_").toLowerCase()}};v.styles=[x,b`
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

      main {
        background-color: var(--surface-color);
        box-shadow: inset 0 0 49px #e0dcbf, 0 6px 8px rgba(0, 0, 0, 0.25);
      }

      @media print {
        :host {
          display: none;
        }
      }
    `],p([g({type:Object})],v.prototype,"model",2),p([g({type:Number})],v.prototype,"columnCount",2),p([g({type:Boolean})],v.prototype,"locked",2),v=p([w("character-sheet")],v);})();
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

@webcomponents/shadycss/src/style-settings.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/css-parse.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/common-regex.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/unscoped-style-handler.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/style-util.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/common-utils.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/apply-shim.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/template-map.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/apply-shim-utils.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/document-wait.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/src/custom-style-interface.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/entrypoints/apply-shim.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/boot.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/resolve-url.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/settings.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/mixin.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/dom-module.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/style-gather.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/wrap.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/path.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/case-map.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/async.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/properties-changed.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/property-accessors.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/template-stamp.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/property-effects.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/utils/telemetry.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/properties-mixin.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/element-mixin.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/utils/debounce.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/gestures.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/gesture-event-listeners.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/dir-mixin.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/utils/render-status.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/unresolved.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/array-splice.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/flattened-nodes-observer.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/flush.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/legacy/polymer.dom.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/scope-subtree.js:
  (**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/disable-upgrade-mixin.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/legacy/legacy-element-mixin.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/legacy/class.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/legacy/polymer-fn.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/mutable-data.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/templatize.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/legacy/templatizer-behavior.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/hide-template-controls.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/dom-bind.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/html-tag.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/polymer-element.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/dom-repeat.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/dom-if.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/array-selector.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@webcomponents/shadycss/entrypoints/custom-style-interface.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/custom-style.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/legacy/mutable-data-behavior.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/polymer-legacy.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-flex-layout/iron-flex-layout.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-meta/iron-meta.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-icon/iron-icon.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-styles/color.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-styles/default-theme.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-behaviors/iron-control-state.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-behaviors/iron-button-state.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-ripple/paper-ripple.js:
  (**
  @license
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-behaviors/paper-ripple-behavior.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-behaviors/paper-inky-focus-behavior.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-icon-button/paper-icon-button.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/paper-tooltip/paper-tooltip.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-iconset-svg/iron-iconset-svg.js:
  (**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/iron-icons/iron-icons.js:
  (**
  @license
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
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
*/
//# sourceMappingURL=main.js.map
