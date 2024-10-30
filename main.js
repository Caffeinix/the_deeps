"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
      if (decorator = decorators[i4])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e6, o5) {
      if (this._$cssResult$ = true, o5 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e6;
    }
    get styleSheet() {
      let t4 = this.o;
      const s4 = this.t;
      if (e && void 0 === t4) {
        const e6 = void 0 !== s4 && 1 === s4.length;
        e6 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e6) => {
    const o5 = 1 === t4.length ? t4[0] : e6.reduce((e7, s4, o6) => e7 + ((t5) => {
      if (true === t5._$cssResult$)
        return t5.cssText;
      if ("number" == typeof t5)
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t4[o6 + 1], t4[0]);
    return new n(o5, t4, s);
  };
  var S = (s4, o5) => {
    if (e)
      s4.adoptedStyleSheets = o5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else
      for (const e6 of o5) {
        const o6 = document.createElement("style"), n6 = t.litNonce;
        void 0 !== n6 && o6.setAttribute("nonce", n6), o6.textContent = e6.cssText, s4.appendChild(o6);
      }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const s4 of t5.cssRules)
      e6 += s4.cssText;
    return r(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s4) => t4;
  var u = { toAttribute(t4, s4) {
    switch (s4) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s4) {
    let i4 = t4;
    switch (s4) {
      case Boolean:
        i4 = null !== t4;
        break;
      case Number:
        i4 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i4 = JSON.parse(t4);
        } catch (t5) {
          i4 = null;
        }
    }
    return i4;
  } };
  var f = (t4, s4) => !i2(t4, s4);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ??= []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s4 = y) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t4, s4), !s4.noAccessor) {
        const i4 = Symbol(), r6 = this.getPropertyDescriptor(t4, i4, s4);
        void 0 !== r6 && e2(this.prototype, t4, r6);
      }
    }
    static getPropertyDescriptor(t4, s4, i4) {
      const { get: e6, set: h3 } = r2(this.prototype, t4) ?? { get() {
        return this[s4];
      }, set(t5) {
        this[s4] = t5;
      } };
      return { get() {
        return e6?.call(this);
      }, set(s5) {
        const r6 = e6?.call(this);
        h3.call(this, s5), this.requestUpdate(t4, r6, i4);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s4 = [...h(t5), ...o2(t5)];
        for (const i4 of s4)
          this.createProperty(i4, t5[i4]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s4 = litPropertyMetadata.get(t4);
        if (void 0 !== s4)
          for (const [t5, i4] of s4)
            this.elementProperties.set(t5, i4);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s4] of this.elementProperties) {
        const i4 = this._$Eu(t5, s4);
        void 0 !== i4 && this._$Eh.set(i4, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i4 = [];
      if (Array.isArray(s4)) {
        const e6 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e6)
          i4.unshift(c(s5));
      } else
        void 0 !== s4 && i4.push(c(s4));
      return i4;
    }
    static _$Eu(t4, s4) {
      const i4 = s4.attribute;
      return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$EO?.delete(t4);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i4 of s4.keys())
        this.hasOwnProperty(i4) && (t4.set(i4, this[i4]), delete this[i4]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s4, i4) {
      this._$AK(t4, i4);
    }
    _$EC(t4, s4) {
      const i4 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i4);
      if (void 0 !== e6 && true === i4.reflect) {
        const r6 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u).toAttribute(s4, i4.type);
        this._$Em = t4, null == r6 ? this.removeAttribute(e6) : this.setAttribute(e6, r6), this._$Em = null;
      }
    }
    _$AK(t4, s4) {
      const i4 = this.constructor, e6 = i4._$Eh.get(t4);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t5 = i4.getPropertyOptions(e6), r6 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
        this._$Em = e6, this[e6] = r6.fromAttribute(s4, t5.type), this._$Em = null;
      }
    }
    requestUpdate(t4, s4, i4) {
      if (void 0 !== t4) {
        if (i4 ??= this.constructor.getPropertyOptions(t4), !(i4.hasChanged ?? f)(this[t4], s4))
          return;
        this.P(t4, s4, i4);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t4, s4, i4) {
      this._$AL.has(t4) || this._$AL.set(t4, s4), true === i4.reflect && this._$Em !== t4 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t4);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t6, s5] of this._$Ep)
            this[t6] = s5;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0)
          for (const [s5, i4] of t5)
            true !== i4.wrapped || this._$AL.has(s5) || void 0 === this[s5] || this.P(s5, this[s5], i4);
      }
      let t4 = false;
      const s4 = this._$AL;
      try {
        t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EU();
      } catch (s5) {
        throw t4 = false, this._$EU(), s5;
      }
      t4 && this._$AE(s4);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Ej &&= this._$Ej.forEach((t5) => this._$EC(t5, this[t5])), this._$EU();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a2 = Array.isArray;
  var u2 = (t4) => a2(t4) || "function" == typeof t4?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t4) => (i4, ...s4) => ({ _$litType$: t4, strings: i4, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var E = r3.createTreeWalker(r3, 129);
  function C(t4, i4) {
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i4) : i4;
  }
  var P = (t4, i4) => {
    const s4 = t4.length - 1, o5 = [];
    let r6, l3 = 2 === i4 ? "<svg>" : "", c4 = f2;
    for (let i5 = 0; i5 < s4; i5++) {
      const s5 = t4[i5];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); )
        y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t4[i5 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i5 : x2);
    }
    return [C(t4, l3 + (t4[s4] || "<?>") + (2 === i4 ? "</svg>" : "")), o5];
  };
  var V = class _V {
    constructor({ strings: t4, _$litType$: s4 }, n6) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = P(t4, s4);
      if (this.el = _V.createElement(f3, n6), E.currentNode = this.el.content, 2 === s4) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r6 = E.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes())
            for (const t5 of r6.getAttributeNames())
              if (t5.endsWith(e3)) {
                const i4 = v2[a3++], s5 = r6.getAttribute(t5).split(h2), e6 = /([.?@])?(.*)/.exec(i4);
                d3.push({ type: 1, index: c4, name: e6[2], strings: s5, ctor: "." === e6[1] ? k : "?" === e6[1] ? H : "@" === e6[1] ? I : R }), r6.removeAttribute(t5);
              } else
                t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t5));
          if ($.test(r6.tagName)) {
            const t5 = r6.textContent.split(h2), s5 = t5.length - 1;
            if (s5 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i4 = 0; i4 < s5; i4++)
                r6.append(t5[i4], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t5[s5], l2());
            }
          }
        } else if (8 === r6.nodeType)
          if (r6.data === o3)
            d3.push({ type: 2, index: c4 });
          else {
            let t5 = -1;
            for (; -1 !== (t5 = r6.data.indexOf(h2, t5 + 1)); )
              d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t4, i4) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t4, s4;
    }
  };
  function N(t4, i4, s4 = t4, e6) {
    if (i4 === w)
      return i4;
    let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
    const o5 = c3(i4) ? void 0 : i4._$litDirective$;
    return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t4), h3._$AT(t4, s4, e6)), void 0 !== e6 ? (s4._$Co ??= [])[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i4 = N(t4, h3._$AS(t4, i4.values), h3, e6)), i4;
  }
  var S2 = class {
    constructor(t4, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i4 }, parts: s4 } = this._$AD, e6 = (t4?.creationScope ?? r3).importNode(i4, true);
      E.currentNode = e6;
      let h3 = E.nextNode(), o5 = 0, n6 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o5 === l3.index) {
          let i5;
          2 === l3.type ? i5 = new M(h3, h3.nextSibling, this, t4) : 1 === l3.type ? i5 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : 6 === l3.type && (i5 = new L(h3, this, t4)), this._$AV.push(i5), l3 = s4[++n6];
        }
        o5 !== l3?.index && (h3 = E.nextNode(), o5++);
      }
      return E.currentNode = r3, e6;
    }
    p(t4) {
      let i4 = 0;
      for (const s4 of this._$AV)
        void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i4), i4 += s4.strings.length - 2) : s4._$AI(t4[i4])), i4++;
    }
  };
  var M = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i4, s4, e6) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i4 = this._$AM;
      return void 0 !== i4 && 11 === t4?.nodeType && (t4 = i4.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i4 = this) {
      t4 = N(this, t4, i4), c3(t4) ? t4 === T || null == t4 || "" === t4 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t4 !== this._$AH && t4 !== w && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : u2(t4) ? this.k(t4) : this._(t4);
    }
    S(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.S(t4));
    }
    _(t4) {
      this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(r3.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      const { values: i4, _$litType$: s4 } = t4, e6 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = V.createElement(C(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e6)
        this._$AH.p(i4);
      else {
        const t5 = new S2(e6, this), s5 = t5.u(this.options);
        t5.p(i4), this.T(s5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i4 = A.get(t4.strings);
      return void 0 === i4 && A.set(t4.strings, i4 = new V(t4)), i4;
    }
    k(t4) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s4, e6 = 0;
      for (const h3 of t4)
        e6 === i4.length ? i4.push(s4 = new _M(this.S(l2()), this.S(l2()), this, this.options)) : s4 = i4[e6], s4._$AI(h3), e6++;
      e6 < i4.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i4.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t4 && t4 !== this._$AB; ) {
        const i5 = t4.nextSibling;
        t4.remove(), t4 = i5;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var R = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i4, s4, e6, h3) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = T;
    }
    _$AI(t4, i4 = this, s4, e6) {
      const h3 = this.strings;
      let o5 = false;
      if (void 0 === h3)
        t4 = N(this, t4, i4, 0), o5 = !c3(t4) || t4 !== this._$AH && t4 !== w, o5 && (this._$AH = t4);
      else {
        const e7 = t4;
        let n6, r6;
        for (t4 = h3[0], n6 = 0; n6 < h3.length - 1; n6++)
          r6 = N(this, e7[s4 + n6], i4, n6), r6 === w && (r6 = this._$AH[n6]), o5 ||= !c3(r6) || r6 !== this._$AH[n6], r6 === T ? t4 = T : t4 !== T && (t4 += (r6 ?? "") + h3[n6 + 1]), this._$AH[n6] = r6;
      }
      o5 && !e6 && this.j(t4);
    }
    j(t4) {
      t4 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === T ? void 0 : t4;
    }
  };
  var H = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== T);
    }
  };
  var I = class extends R {
    constructor(t4, i4, s4, e6, h3) {
      super(t4, i4, s4, e6, h3), this.type = 5;
    }
    _$AI(t4, i4 = this) {
      if ((t4 = N(this, t4, i4, 0) ?? T) === w)
        return;
      const s4 = this._$AH, e6 = t4 === T && s4 !== T || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== T && (s4 === T || e6);
      e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var L = class {
    constructor(t4, i4, s4) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      N(this, t4);
    }
  };
  var Z = t2.litHtmlPolyfillSupport;
  Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.1.2");
  var j = (t4, i4, s4) => {
    const e6 = s4?.renderBefore ?? i4;
    let h3 = e6._$litPart$;
    if (void 0 === h3) {
      const t5 = s4?.renderBefore ?? null;
      e6._$litPart$ = h3 = new M(i4.insertBefore(l2(), t5), t5, void 0, s4 ?? {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t4 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t4.firstChild, t4;
    }
    update(t4) {
      const i4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = j(i4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
  var r4 = globalThis.litElementPolyfillSupport;
  r4?.({ LitElement: s3 });
  (globalThis.litElementVersions ??= []).push("4.0.4");

  // src/theme.ts
  var themeCss = i`
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
`;

  // src/die_code.ts
  function toDieCode(attributeRank, skillRank) {
    if (attributeRank == null || skillRank == null || attributeRank <= 0 || skillRank < 0) {
      return "";
    }
    const totalRank = attributeRank + skillRank;
    const bonusDie = totalRank % 3 === 2 ? 10 : totalRank % 3 === 1 ? 8 : 6;
    return `${Math.trunc(totalRank / 3)}d6+d${bonusDie}`;
  }

  // src/parsing.ts
  function parseIntOrZero(input) {
    const parsed = Number.parseInt(input, 10);
    return isNaN(parsed) ? 0 : parsed ?? 0;
  }
  function renderIntOrBlank(input) {
    if (input === void 0 || isNaN(input)) {
      return "";
    } else {
      return Math.round(input).toString();
    }
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t4) => (e6, o5) => {
    void 0 !== o5 ? o5.addInitializer(() => {
      customElements.define(t4, e6);
    }) : customElements.define(t4, e6);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r5 = (t4 = o4, e6, r6) => {
    const { kind: n6, metadata: i4 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i4);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i4, s4 = /* @__PURE__ */ new Map()), s4.set(r6.name, t4), "accessor" === n6) {
      const { name: o5 } = r6;
      return { set(r7) {
        const n7 = e6.get.call(this);
        e6.set.call(this, r7), this.requestUpdate(o5, n7, t4);
      }, init(e7) {
        return void 0 !== e7 && this.P(o5, void 0, t4), e7;
      } };
    }
    if ("setter" === n6) {
      const { name: o5 } = r6;
      return function(r7) {
        const n7 = this[o5];
        e6.call(this, r7), this.requestUpdate(o5, n7, t4);
      };
    }
    throw Error("Unsupported decorator location: " + n6);
  };
  function n4(t4) {
    return (e6, o5) => "object" == typeof o5 ? r5(t4, e6, o5) : ((t5, e7, o6) => {
      const r6 = e7.hasOwnProperty(o6);
      return e7.constructor.createProperty(o6, r6 ? { ...t5, wrapped: true } : t5), r6 ? Object.getOwnPropertyDescriptor(e7, o6) : void 0;
    })(t4, e6, o5);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e6, t4, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t4 && Object.defineProperty(e6, t4, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e6, r6) {
    return (n6, s4, i4) => {
      const o5 = (t4) => t4.renderRoot?.querySelector(e6) ?? null;
      if (r6) {
        const { get: e7, set: r7 } = "object" == typeof s4 ? n6 : i4 ?? (() => {
          const t4 = Symbol();
          return { get() {
            return this[t4];
          }, set(e8) {
            this[t4] = e8;
          } };
        })();
        return e4(n6, s4, { get() {
          let t4 = e7.call(this);
          return void 0 === t4 && (t4 = o5(this), (null !== t4 || this.hasUpdated) && r7.call(this, t4)), t4;
        } });
      }
      return e4(n6, s4, { get() {
        return o5(this);
      } });
    };
  }

  // node_modules/lucide/dist/esm/createElement.js
  var createElement = (tag, attrs, children = []) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children.length) {
      children.forEach((child) => {
        const childElement = createElement(...child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

  // node_modules/lucide/dist/esm/replaceElement.js
  var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
  var getClassNames = (attrs) => {
    if (typeof attrs === "string")
      return attrs;
    if (!attrs || !attrs.class)
      return "";
    if (attrs.class && typeof attrs.class === "string") {
      return attrs.class.split(" ");
    }
    if (attrs.class && Array.isArray(attrs.class)) {
      return attrs.class;
    }
    return "";
  };
  var combineClassNames = (arrayOfClassnames) => {
    const classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
  };
  var toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
  var replaceElement = (element, { nameAttr, icons, attrs }) => {
    const iconName = element.getAttribute(nameAttr);
    if (iconName == null)
      return;
    const ComponentName = toPascalCase(iconName);
    const iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(
        `${element.outerHTML} icon name was not found in the provided icons object.`
      );
    }
    const elementAttrs = getAttrs(element);
    const [tag, iconAttributes, children] = iconNode;
    const iconAttrs = {
      ...iconAttributes,
      "data-lucide": iconName,
      ...attrs,
      ...elementAttrs
    };
    const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
    if (classNames) {
      Object.assign(iconAttrs, {
        class: classNames
      });
    }
    const svgElement = createElement$1([tag, iconAttrs, children]);
    return element.parentNode?.replaceChild(svgElement, element);
  };

  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/icons/dices.js
  var Dices = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
      ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }],
      ["path", { d: "M6 18h.01" }],
      ["path", { d: "M10 14h.01" }],
      ["path", { d: "M15 6h.01" }],
      ["path", { d: "M18 9h.01" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/file-up.js
  var FileUp = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M12 12v6" }],
      ["path", { d: "m15 15-3-3-3 3" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock-open.js
  var LockOpen = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/lock.js
  var Lock = [
    "svg",
    defaultAttributes,
    [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/plus.js
  var Plus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "M12 5v14" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/printer.js
  var Printer = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
      ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
      ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/save.js
  var Save = [
    "svg",
    defaultAttributes,
    [
      [
        "path",
        {
          d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
      ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/share-2.js
  var Share2 = [
    "svg",
    defaultAttributes,
    [
      ["circle", { cx: "18", cy: "5", r: "3" }],
      ["circle", { cx: "6", cy: "12", r: "3" }],
      ["circle", { cx: "18", cy: "19", r: "3" }],
      ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
      ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/user-round-plus.js
  var UserRoundPlus = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
      ["circle", { cx: "10", cy: "8", r: "5" }],
      ["path", { d: "M19 16v6" }],
      ["path", { d: "M22 19h-6" }]
    ]
  ];

  // node_modules/lucide/dist/esm/lucide.js
  var createIcons = ({ icons = {}, nameAttr = "data-lucide", attrs = {} } = {}) => {
    if (!Object.values(icons).length) {
      throw new Error(
        "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
      );
    }
    if (typeof document === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
    Array.from(elementsToReplace).forEach(
      (element) => replaceElement(element, { nameAttr, icons, attrs })
    );
    if (nameAttr === "data-lucide") {
      const deprecatedElements = document.querySelectorAll("[icon-name]");
      if (deprecatedElements.length > 0) {
        console.warn(
          "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
        );
        Array.from(deprecatedElements).forEach(
          (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
        );
      }
    }
  };

  // src/lucide-icon.ts
  var LucideIcon = class extends s3 {
    constructor() {
      super(...arguments);
      this.size = 24;
      this.strokeWidth = 2;
    }
    render() {
      this.style.setProperty("--icon-width", `${this.size}px`);
      this.style.setProperty("--icon-height", `${this.size}px`);
      const element = createElement$1(this.icon);
      element.setAttribute("stroke-width", this.strokeWidth.toString());
      return x`${element}`;
    }
  };
  LucideIcon.styles = [
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Array })
  ], LucideIcon.prototype, "icon", 2);
  __decorateClass([
    n4({ type: Number })
  ], LucideIcon.prototype, "size", 2);
  __decorateClass([
    n4({ type: Number })
  ], LucideIcon.prototype, "strokeWidth", 2);
  LucideIcon = __decorateClass([
    t3("lucide-icon")
  ], LucideIcon);

  // src/skill-view.ts
  createIcons({ icons: { Plus } });
  var SkillView = class extends s3 {
    constructor() {
      super(...arguments);
      this.generalXp = 0;
      this.locked = true;
    }
    render() {
      return x`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank || !this.model.name}
        title=${this.canAffordRank ? `Buy a rank of this skill for ${this.xpCostToRaise} XP` : `Cannot afford a rank of this skill (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${Plus} .size=${16}></lucide-icon>
      </button>
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
        .value=${renderIntOrBlank(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="die-code">
        ${toDieCode(this.attributeModel.rank, this.model.rank)}
      </div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${renderIntOrBlank(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `;
    }
    connectedCallback() {
      super.connectedCallback();
    }
    get xpAvailable() {
      return (this.generalXp ?? 0) + (this.model.xp ?? 0);
    }
    get xpCostToRaise() {
      return (this.model.rank ?? 0) + 1;
    }
    get canAffordRank() {
      return this.xpAvailable >= this.xpCostToRaise;
    }
    onNameFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("skill-change", {
          detail: {
            attribute: this.attributeModel.id,
            id: this.model.id,
            change: { name: event.target.value }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onRankFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("skill-change", {
          detail: {
            attribute: this.attributeModel.id,
            id: this.model.id,
            change: {
              rank: parseIntOrZero(event.target.value)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onXpFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("skill-change", {
          detail: {
            attribute: this.attributeModel.id,
            id: this.model.id,
            change: {
              xp: parseIntOrZero(event.target.value)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onBuyRankButtonClicked(event) {
      const generalXpSpent = Math.max(
        0,
        this.xpCostToRaise - (this.model.xp ?? 0)
      );
      this.dispatchEvent(
        new CustomEvent("skill-change", {
          detail: {
            attribute: this.attributeModel.id,
            id: this.model.id,
            change: {
              rank: (this.model.rank ?? 0) + 1,
              xp: Math.max(0, (this.model.xp ?? 0) - this.xpCostToRaise)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
      if (generalXpSpent > 0) {
        this.dispatchEvent(
          new CustomEvent("character-change", {
            detail: {
              change: { xp: this.generalXp - generalXpSpent }
            },
            bubbles: true,
            composed: true,
            cancelable: false
          })
        );
      }
    }
  };
  SkillView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], SkillView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Object })
  ], SkillView.prototype, "attributeModel", 2);
  __decorateClass([
    n4({ type: Number })
  ], SkillView.prototype, "generalXp", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SkillView.prototype, "locked", 2);
  SkillView = __decorateClass([
    t3("skill-view")
  ], SkillView);

  // src/attribute-view.ts
  createIcons({ icons: { Plus } });
  var AttributeView = class extends s3 {
    constructor() {
      super(...arguments);
      this.generalXp = 0;
      this.showHeader = false;
      this.locked = true;
    }
    render() {
      return x`
      ${this.showHeader ? this.renderHeader() : x``}
      <section>
        <div id="attribute">
          <button
            id="buy-button"
            class="buy-button"
            title=${this.canAffordRank ? `Buy a rank of this attribute for ${this.xpCostToRaise} XP` : `Cannot afford a rank of this attribute (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
            ?disabled=${!this.canAffordRank}
            @click=${this.onBuyRankButtonClicked}
          >
            <lucide-icon .icon=${Plus} .size=${16}></lucide-icon>
          </button>
          <div id="name">${this.model.name}</div>
          <input
            type="number"
            id="rank"
            min="1"
            ?readonly=${this.locked}
            .value=${renderIntOrBlank(this.model.rank)}
            @change=${this.onRankChanged}
          />
          <div id="die-code">${toDieCode(this.model.rank, 0)}</div>
          <input
            type="number"
            id="xp"
            min="0"
            .value=${renderIntOrBlank(this.model.xp)}
            @change=${this.onXpFieldChanged}
          />
        </div>
        ${this.model.skills.map(
        (model) => x`<skill-view
              .model=${model}
              .attributeModel=${this.model}
              .generalXp=${this.generalXp}
              .locked=${this.locked}
            ></skill-view>`
      )}
        ${!this.locked ? this.renderEditUi() : x``}
      </section>
    `;
    }
    renderHeader() {
      return x`
      <header>
        <div class="text-column"></div>
        <div class="numeric-column">Rank</div>
        <div class="die-code-column">Dice</div>
        <div class="numeric-column">XP</div>
      </header>
    `;
    }
    renderEditUi() {
      return x`<button @click=${this.onAddButtonClicked}>Add skill</button>`;
    }
    get xpAvailable() {
      return (this.generalXp ?? 0) + (this.model.xp ?? 0);
    }
    get xpCostToRaise() {
      return ((this.model.rank ?? 0) + 1) * 5;
    }
    get canAffordRank() {
      return this.xpAvailable >= this.xpCostToRaise;
    }
    onRankChanged(event) {
      this.dispatchEvent(
        new CustomEvent("attribute-change", {
          detail: {
            id: this.model.id,
            change: {
              rank: parseIntOrZero(event.target.value)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onXpFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("attribute-change", {
          detail: {
            id: this.model.id,
            change: { xp: parseIntOrZero(event.target.value) }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onBuyRankButtonClicked(event) {
      const xpCost = ((this.model.rank ?? 0) + 1) * 5;
      const generalXpSpent = Math.max(0, xpCost - (this.model.xp ?? 0));
      this.dispatchEvent(
        new CustomEvent("attribute-change", {
          detail: {
            id: this.model.id,
            change: {
              rank: (this.model.rank ?? 0) + 1,
              xp: Math.max(0, (this.model.xp ?? 0) - xpCost)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
      if (generalXpSpent > 0) {
        this.dispatchEvent(
          new CustomEvent("character-change", {
            detail: {
              change: { xp: this.generalXp - generalXpSpent }
            },
            bubbles: true,
            composed: true,
            cancelable: false
          })
        );
      }
    }
    onAddButtonClicked(event) {
      this.dispatchEvent(
        new CustomEvent("add-skill-row", {
          detail: {
            id: this.model.id
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
  };
  AttributeView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], AttributeView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Number })
  ], AttributeView.prototype, "generalXp", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], AttributeView.prototype, "showHeader", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], AttributeView.prototype, "locked", 2);
  AttributeView = __decorateClass([
    t3("attribute-view")
  ], AttributeView);

  // src/attributes-view.ts
  var AttributesView = class extends s3 {
    constructor() {
      super(...arguments);
      this.columnCount = 3;
      this.locked = true;
    }
    connectedCallback() {
      super.connectedCallback();
      this.recalculateColumns();
      window.addEventListener("resize", (e6) => this.recalculateColumns());
    }
    render() {
      return x`
      <h2>Attributes</h2>
      ${this.renderAttributes()}
    `;
    }
    renderAttributes() {
      const rows = [];
      this.model.attributes.forEach((attribute, index) => {
        const domResult = x`<attribute-view
        .model=${attribute}
        .generalXp=${this.model.xp}
        .showHeader=${index < this.columnCount}
        .locked=${this.locked}
      ></attribute-view>`;
        if (index % this.columnCount === 0) {
          rows.push([domResult]);
        } else {
          rows[rows.length - 1].push(domResult);
        }
      });
      return rows.map((row) => x`<div class="attribute-group">${row}</div>`);
    }
    recalculateColumns() {
      if (window.innerWidth <= 500) {
        this.columnCount = 1;
      } else if (window.innerWidth <= 650) {
        this.columnCount = 2;
      } else {
        this.columnCount = 3;
      }
    }
  };
  AttributesView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], AttributesView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Number })
  ], AttributesView.prototype, "columnCount", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], AttributesView.prototype, "locked", 2);
  AttributesView = __decorateClass([
    t3("attributes-view")
  ], AttributesView);

  // src/character-description-view.ts
  var CharacterDescriptionView = class extends s3 {
    render() {
      return x`
      <h2>Description</h2>
      <section>
        <textarea
          .value=${this.model.description || ""}
          @change=${this.onDescriptionChanged}
        ></textarea>
      </section>
    `;
    }
    onDescriptionChanged(event) {
      this.dispatchEvent(
        new CustomEvent("character-change", {
          detail: {
            change: { description: event.target.value }
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  CharacterDescriptionView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], CharacterDescriptionView.prototype, "model", 2);
  CharacterDescriptionView = __decorateClass([
    t3("character-description-view")
  ], CharacterDescriptionView);

  // src/character-info-view.ts
  var CharacterInfoView = class extends s3 {
    render() {
      return x`
      <h2>Character Info</h2>
      <section>
        <label
          ><span>Name</span>
          <input
            type="text"
            .value=${this.model.name || ""}
            @change=${this.fieldChangeHandler("name")}
          />
        </label>
        <label
          ><span>Archetype</span>
          <input
            type="text"
            .value=${this.model.archetype || ""}
            @change=${this.fieldChangeHandler("archetype")}
          />
        </label>
        <label
          ><span>Player Name</span>
          <input
            type="text"
            .value=${this.model.player || ""}
            @change=${this.fieldChangeHandler("player")}
          />
        </label>
        <label
          ><span>Age</span>
          <input
            type="text"
            .value=${this.model.age || ""}
            @change=${this.fieldChangeHandler("age")}
          />
        </label>
        <label
          ><span>Sex/Gender</span>
          <input
            type="text"
            .value=${this.model.gender || ""}
            @change=${this.fieldChangeHandler("gender")}
          />
        </label>
        <label
          ><span>Presentation</span>
          <input
            type="text"
            .value=${this.model.presentation || ""}
            @change=${this.fieldChangeHandler("presentation")}
          />
        </label>
        <label
          ><span>Prime Values</span>
          <input
            type="text"
            .value=${this.model.primeValue || ""}
            @change=${this.fieldChangeHandler("primeValue")}
          />
        </label>
        <label
          ><span>Prime Fears</span>
          <input
            type="text"
            .value=${this.model.primeFear || ""}
            @change=${this.fieldChangeHandler("primeFear")}
          />
        </label>
        <label
          ><span>Traits</span>
          <input
            type="text"
            .value=${this.model.traits || ""}
            @change=${this.fieldChangeHandler("traits")}
          />
        </label>
      </section>
    `;
    }
    fieldChangeHandler(field) {
      return (event) => {
        this.dispatchEvent(
          new CustomEvent("character-change", {
            detail: {
              change: { [field]: event.target.value }
            },
            bubbles: true,
            composed: true
          })
        );
      };
    }
  };
  CharacterInfoView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], CharacterInfoView.prototype, "model", 2);
  CharacterInfoView = __decorateClass([
    t3("character-info-view")
  ], CharacterInfoView);

  // src/connection-view.ts
  var ConnectionView = class extends s3 {
    render() {
      return x`
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
    `;
    }
    onNameChanged(event) {
      this.dispatchEvent(
        new CustomEvent("connection-change", {
          detail: {
            id: this.model.id,
            change: { name: event.target.value }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onRelationshipChanged(event) {
      this.dispatchEvent(
        new CustomEvent("connection-change", {
          detail: {
            id: this.model.id,
            change: { relationship: event.target.value }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
  };
  ConnectionView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], ConnectionView.prototype, "model", 2);
  ConnectionView = __decorateClass([
    t3("connection-view")
  ], ConnectionView);

  // src/connections-view.ts
  var ConnectionsView = class extends s3 {
    constructor() {
      super(...arguments);
      this.locked = true;
    }
    render() {
      return x`
      <h2>Connections & Bonds</h2>
      <section>
        ${this.model.connections.map(
        (connection) => x`<connection-view .model=${connection}></connection-view>`
      )}
        ${!this.locked ? this.renderAddUi() : x``}
      </section>
    `;
    }
    renderAddUi() {
      return x`
      <div id="add-ui">
        <button @click=${this.onAddButtonClicked}>Add row</button>
      </div>
    `;
    }
    onAddButtonClicked(event) {
      this.dispatchEvent(
        new CustomEvent("add-connection-row", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
  };
  ConnectionsView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], ConnectionsView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], ConnectionsView.prototype, "locked", 2);
  ConnectionsView = __decorateClass([
    t3("connections-view")
  ], ConnectionsView);

  // src/equipment-view.ts
  var EquipmentView = class extends s3 {
    constructor() {
      super(...arguments);
      this.showHeader = false;
      this.locked = true;
    }
    render() {
      return x`
      ${this.showHeader ? this.renderHeader() : x``}
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
    `;
    }
    renderHeader() {
      return x`
      <header>
        <span id="name-header">Equipment</span>
        <span id="bonus-header">Bonus</span>
      </header>
    `;
    }
    onNameChanged(event) {
      this.dispatchEvent(
        new CustomEvent("equipment-change", {
          detail: {
            id: this.model.id,
            change: {
              name: event.target.value
            }
          },
          bubbles: true,
          composed: true
        })
      );
    }
    onBonusChanged(event) {
      this.dispatchEvent(
        new CustomEvent("equipment-change", {
          detail: {
            id: this.model.id,
            change: {
              bonus: event.target.value
            }
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  EquipmentView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], EquipmentView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], EquipmentView.prototype, "showHeader", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], EquipmentView.prototype, "locked", 2);
  EquipmentView = __decorateClass([
    t3("equipment-view")
  ], EquipmentView);

  // src/general-xp-view.ts
  var GeneralXPView = class extends s3 {
    render() {
      return x`
      <div id="label">General XP</div>
      <input
        type="number"
        .value=${renderIntOrBlank(this.model.xp)}
        @change=${this.onXPChanged}
      />
    `;
    }
    onXPChanged(event) {
      let newXp = parseIntOrZero(event.target.value);
      if (isNaN(newXp)) {
        newXp = 0;
      }
      this.dispatchEvent(
        new CustomEvent("character-change", {
          detail: {
            change: { xp: newXp }
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  GeneralXPView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], GeneralXPView.prototype, "model", 2);
  GeneralXPView = __decorateClass([
    t3("general-xp-view")
  ], GeneralXPView);

  // src/item-view.ts
  var ItemView = class extends s3 {
    constructor() {
      super(...arguments);
      this.showHeader = false;
      this.locked = true;
    }
    render() {
      return x`
      ${this.showHeader ? this.renderHeader() : x``}
      <div id="content">
        <input
          type="text"
          id="item-name"
          .value=${this.model.name || ""}
          @change=${this.onNameChanged}
        />
        <input
          type="number"
          id="quantity"
          .value=${renderIntOrBlank(this.model.quantity)}
          @change=${this.onQuantityChanged}
        />
      </div>
    `;
    }
    renderHeader() {
      return x`
      <header>
        <span id="name-header">Items</span>
        <span id="quantity-header">Quantity</span>
      </header>
    `;
    }
    onNameChanged(event) {
      this.dispatchEvent(
        new CustomEvent("item-change", {
          detail: {
            id: this.model.id,
            change: {
              name: event.target.value
            }
          },
          bubbles: true,
          composed: true
        })
      );
    }
    onQuantityChanged(event) {
      this.dispatchEvent(
        new CustomEvent("item-change", {
          detail: {
            id: this.model.id,
            change: {
              quantity: Number.parseFloat(event.target.value)
            }
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  ItemView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], ItemView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], ItemView.prototype, "showHeader", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], ItemView.prototype, "locked", 2);
  ItemView = __decorateClass([
    t3("item-view")
  ], ItemView);

  // src/inventory-view.ts
  var InventoryView = class extends s3 {
    constructor() {
      super(...arguments);
      this.locked = true;
    }
    render() {
      return x`
      <h2>Equipment & Items</h2>
      <section>
        <div id="equipment">
          ${this.model.inventory.equipment.map(
        (equipment, index) => x`<equipment-view
                .model=${equipment}
                .showHeader=${index === 0}
                .locked=${this.locked}
              ></equipment-view>`
      )}
          ${!this.locked ? x`<button @click=${this.onAddEquipmentButtonClicked}>
                Add row
              </button>` : x``}
        </div>
        <div id="items">
          ${this.model.inventory.items.map(
        (item, index) => x`<item-view
                .model=${item}
                .showHeader=${index === 0}
                .locked=${this.locked}
              ></item-view>`
      )}
          ${!this.locked ? x`<button @click=${this.onAddItemButtonClicked}>
                Add row
              </button>` : x``}
        </div>
      </section>
    `;
    }
    onAddEquipmentButtonClicked(event) {
      this.dispatchEvent(
        new CustomEvent("add-equipment-row", {
          detail: {},
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onAddItemButtonClicked(event) {
      this.dispatchEvent(
        new CustomEvent("add-item-row", {
          detail: {},
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
  };
  InventoryView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], InventoryView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], InventoryView.prototype, "locked", 2);
  InventoryView = __decorateClass([
    t3("inventory-view")
  ], InventoryView);

  // src/notes-view.ts
  var NotesView = class extends s3 {
    render() {
      return x`
      <h2>Notes</h2>
      <section>
        <textarea
          .value=${this.model.notes || ""}
          @change=${this.onNotesChanged}
        ></textarea>
      </section>
    `;
    }
    onNotesChanged(event) {
      this.dispatchEvent(
        new CustomEvent("character-change", {
          detail: {
            change: { notes: event.target.value }
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  NotesView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], NotesView.prototype, "model", 2);
  NotesView = __decorateClass([
    t3("notes-view")
  ], NotesView);

  // src/random.ts
  function randomNormal(mean, stddev) {
    const u3 = 1 - Math.random();
    const v2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u3)) * Math.cos(2 * Math.PI * v2);
    return z * stddev + mean;
  }
  function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function selectRandomEnum(anEnum) {
    const enumValues = Object.values(anEnum);
    return selectRandom(enumValues);
  }
  function selectWeighted(choices) {
    const total = Array.from(choices.values()).reduce((a3, b3) => a3 + b3, 0);
    const roll = Math.random() * total;
    let accum = 0;
    for (const choice of choices.keys()) {
      accum += choices.get(choice);
      if (roll < accum) {
        return choice;
      }
    }
    return Array.from(choices.keys())[0];
  }

  // src/npc-generator.ts
  var NPCGenerator = class extends s3 {
    render() {
      return x`<dialog @close=${this._generateNPC}>
      <h2>NPC Configuration</h2>
      <div class="content">
        <div class="row">
          <span>Average attribute rank:</span>
          <input id="rank" type="number" max="99" value="5" />
        </div>
        <div class="row">
          <span>Focused domain:</span>
          <select id="focused-domain">
            <option value=${0 /* PHYSICAL */}>Physical</option>
            <option value=${1 /* SOCIAL */}>Social</option>
            <option value=${2 /* MENTAL */}>Mental</option>
          </select>
        </div>
        <div class="row">
          <span>Focused aspect:</span>
          <select id="focused-aspect">
            <option value=${0 /* POWER */}>Power</option>
            <option value=${1 /* FINESSE */}>Finesse</option>
            <option value=${2 /* SENSE */}>Sense</option>
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
        <button @click=${() => this._dialog?.close("cancel")}>Cancel</button>
        <button @click=${() => this._dialog?.close("confirm")}>Generate</button>
      </div>
    </dialog>`;
    }
    configure() {
      this._dialog.showModal();
    }
    _generateRandomName() {
      return "Pirate Steve";
    }
    _generateRandomAge() {
      return Math.round(randomNormal(35, 10)).toString();
    }
    _pickRandomArchetype() {
      return selectRandom([
        "Swashbuckler",
        "Scoundrel",
        "Navigator",
        "Dispossessed",
        "Chronicler",
        "Bruiser",
        "Aristocrat",
        "Alchemist",
        "Administrator"
      ]);
    }
    _pickRandomGender() {
      return selectWeighted(
        new Map(
          Object.entries({
            female: 1,
            male: 1,
            AFAB: 0.2,
            AMAB: 0.2,
            intersex: 0.1
          })
        )
      );
    }
    _pickRandomPresentation() {
      return "";
    }
    _pickRandomPrimeValue() {
      return "";
    }
    _pickRandomPrimeFear() {
      return "";
    }
    _pickRandomTraits() {
      return "";
    }
    _generateAttributes(params, model) {
      let Attribute;
      ((Attribute2) => {
        Attribute2[Attribute2["STRENGTH"] = 0] = "STRENGTH";
        Attribute2[Attribute2["DEXTERITY"] = 1] = "DEXTERITY";
        Attribute2[Attribute2["PERCEPTION"] = 2] = "PERCEPTION";
        Attribute2[Attribute2["PRESENCE"] = 3] = "PRESENCE";
        Attribute2[Attribute2["GRACE"] = 4] = "GRACE";
        Attribute2[Attribute2["INTUITION"] = 5] = "INTUITION";
        Attribute2[Attribute2["WILL"] = 6] = "WILL";
        Attribute2[Attribute2["WITS"] = 7] = "WITS";
        Attribute2[Attribute2["AWARENESS"] = 8] = "AWARENESS";
      })(Attribute || (Attribute = {}));
      const availablePoints = params.averageRank * 9;
      const rawAttrs = Array(9).fill(0).map(() => randomNormal(1, 0.2));
      const sum = rawAttrs.reduce((a3, b3) => a3 + b3, 0);
      const normalizedAttrs = rawAttrs.map(
        (a3) => Math.round(a3 / sum * availablePoints)
      );
      const isFocusedDomain = (attr) => attr >= params.focusedDomain * 3 && attr < (params.focusedDomain + 1) * 3;
      const isFocusedAspect = (attr) => attr % 3 == params.focusedAspect;
      for (let i4 = 0; i4 < Math.round(availablePoints / 4 * params.minMaxFactor); ++i4) {
        let destination;
        do {
          destination = selectRandomEnum(Attribute);
        } while (!isFocusedDomain(destination));
        let source;
        do {
          source = selectRandomEnum(Attribute);
        } while (isFocusedDomain(source) || normalizedAttrs[source] <= 1);
        --normalizedAttrs[source];
        ++normalizedAttrs[destination];
        do {
          destination = selectRandomEnum(Attribute);
        } while (!isFocusedAspect(destination));
        do {
          source = selectRandomEnum(Attribute);
        } while (isFocusedAspect(source) || normalizedAttrs[source] <= 1);
        --normalizedAttrs[source];
        ++normalizedAttrs[destination];
      }
      return model.map((m2, i4) => ({ ...m2, rank: normalizedAttrs[i4] }));
    }
    _generateNPC() {
      if (this._dialog?.returnValue != "confirm") {
        return;
      }
      const params = {
        averageAttributeRank: parseIntOrZero(
          (this.shadowRoot?.querySelector("#rank")).value
        ),
        focusedDomain: parseIntOrZero(
          (this.shadowRoot?.querySelector("#focused-domain")).value
        ),
        focusedAspect: parseIntOrZero(
          (this.shadowRoot?.querySelector("#focused-aspect")).value
        ),
        minMaxFactor: parseFloat(
          (this.shadowRoot?.querySelector("#min-max-factor")).value
        ),
        hasTraits: false
      };
      this.dispatchEvent(
        new CustomEvent("character-change", {
          detail: {
            change: {
              name: this._generateRandomName(),
              age: this._generateRandomAge(),
              player: "NPC",
              archetype: this._pickRandomArchetype(),
              gender: this._pickRandomGender(),
              presentation: this._pickRandomPresentation(),
              primeValue: this._pickRandomPrimeValue(),
              primeFear: this._pickRandomPrimeFear(),
              traits: params.hasTraits ? this._pickRandomTraits() : "",
              attributes: this._generateAttributes(
                {
                  averageRank: params.averageAttributeRank,
                  minMaxFactor: params.minMaxFactor,
                  focusedDomain: params.focusedDomain,
                  focusedAspect: params.focusedAspect
                },
                this.model.attributes
              )
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
  };
  NPCGenerator.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], NPCGenerator.prototype, "model", 2);
  __decorateClass([
    e5("dialog")
  ], NPCGenerator.prototype, "_dialog", 2);
  NPCGenerator = __decorateClass([
    t3("npc-generator")
  ], NPCGenerator);

  // src/specialization-view.ts
  createIcons({ icons: { Plus } });
  var SpecializationView = class extends s3 {
    constructor() {
      super(...arguments);
      this.generalXp = 0;
      this.locked = true;
    }
    render() {
      return x`
      <button
        id="buy-button"
        class="buy-button"
        ?disabled=${!this.canAffordRank || !this.model.name}
        title=${this.canAffordRank ? `Buy a rank of this specialization for ${this.xpCostToRaise} XP` : `Cannot afford a rank of this specialization (need ${this.xpCostToRaise} XP, have ${this.xpAvailable})`}
        @click=${this.onBuyRankButtonClicked}
      >
        <lucide-icon .icon=${Plus} .size=${16}></lucide-icon>
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
        .value=${renderIntOrBlank(this.model.rank)}
        @change=${this.onRankFieldChanged}
      />
      <div id="bonus">${this.model.rank ? `+${this.model.rank}` : ""}</div>
      <input
        type="number"
        id="xp"
        min="0"
        .value=${renderIntOrBlank(this.model.xp)}
        @change=${this.onXpFieldChanged}
      />
    `;
    }
    get xpAvailable() {
      return (this.generalXp ?? 0) + (this.model.xp ?? 0);
    }
    get xpCostToRaise() {
      return (this.model.rank ?? 0) + 1;
    }
    get canAffordRank() {
      return this.xpAvailable >= this.xpCostToRaise;
    }
    onNameFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("specialization-change", {
          detail: {
            id: this.model.id,
            change: { name: event.target.value }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onRankFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("specialization-change", {
          detail: {
            id: this.model.id,
            change: { rank: parseIntOrZero(event.target.value) }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onXpFieldChanged(event) {
      this.dispatchEvent(
        new CustomEvent("specialization-change", {
          detail: {
            id: this.model.id,
            change: { xp: parseIntOrZero(event.target.value) }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
    }
    onBuyRankButtonClicked(event) {
      const generalXpSpent = Math.max(
        0,
        this.xpCostToRaise - (this.model.xp ?? 0)
      );
      this.dispatchEvent(
        new CustomEvent("specialization-change", {
          detail: {
            id: this.model.id,
            change: {
              rank: (this.model.rank ?? 0) + 1,
              xp: Math.max(0, (this.model.xp ?? 0) - this.xpCostToRaise)
            }
          },
          bubbles: true,
          composed: true,
          cancelable: false
        })
      );
      if (generalXpSpent > 0) {
        this.dispatchEvent(
          new CustomEvent("character-change", {
            detail: {
              change: { xp: this.generalXp - generalXpSpent }
            },
            bubbles: true,
            composed: true,
            cancelable: false
          })
        );
      }
    }
  };
  SpecializationView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], SpecializationView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Number })
  ], SpecializationView.prototype, "generalXp", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SpecializationView.prototype, "locked", 2);
  SpecializationView = __decorateClass([
    t3("specialization-view")
  ], SpecializationView);

  // src/specializations-view.ts
  var SpecializationsView = class extends s3 {
    constructor() {
      super(...arguments);
      this.columnCount = 3;
      this.locked = true;
    }
    connectedCallback() {
      super.connectedCallback();
      this.recalculateColumns();
      window.addEventListener("resize", (e6) => this.recalculateColumns());
    }
    render() {
      return x`
      <h2>Specializations</h2>
      <header>
        ${Array.from(Array(this.columnCount).keys()).map(
        () => x`<div class="header-column">
            <div class="text-column"></div>
            <div class="numeric-column">Rank</div>
            <div class="die-code-column">Bonus</div>
            <div class="numeric-column last-column">XP</div>
          </div>`
      )}
      </header>
      <section>
        ${this.model.specializations.map(
        (model) => x`<specialization-view
              .model=${model}
              .generalXp=${this.model.xp}
              .locked=${this.locked}
            ></specialization-view>`
      )}
        ${!this.locked ? this.renderEditUi() : x``}
      </section>
    `;
    }
    renderEditUi() {
      return x`<div id="edit-ui">
      <button @click=${this.onAddButtonClicked}>Add row</button>
    </div>`;
    }
    recalculateColumns() {
      if (window.innerWidth <= 500) {
        this.columnCount = 1;
      } else if (window.innerWidth <= 650) {
        this.columnCount = 2;
      } else {
        this.columnCount = 3;
      }
    }
    onAddButtonClicked(event) {
      this.dispatchEvent(
        new CustomEvent("add-specialization-row", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
  };
  SpecializationsView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], SpecializationsView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Number })
  ], SpecializationsView.prototype, "columnCount", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SpecializationsView.prototype, "locked", 2);
  SpecializationsView = __decorateClass([
    t3("specializations-view")
  ], SpecializationsView);

  // src/wound-level-view.ts
  var WoundLevelView = class extends s3 {
    constructor() {
      super(...arguments);
      this.showHeader = false;
    }
    render() {
      return x`
      ${this.showHeader ? this.renderHeader() : x``}
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
    `;
    }
    renderHeader() {
      return x`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Wounds</span>
        <span id="effects-header">Effects</span>
        <span id="shock-check-header">Shock check</span>
      </header>
    `;
    }
    onCheckedChanged(event) {
      this.dispatchEvent(
        new CustomEvent("wound-level-change", {
          detail: {
            id: this.model.id,
            checked: event.target.checked
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  WoundLevelView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], WoundLevelView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], WoundLevelView.prototype, "showHeader", 2);
  WoundLevelView = __decorateClass([
    t3("wound-level-view")
  ], WoundLevelView);

  // src/fatigue-level-view.ts
  var FatigueLevelView = class extends s3 {
    constructor() {
      super(...arguments);
      this.showHeader = false;
    }
    render() {
      return x`
      ${this.showHeader ? this.renderHeader() : x``}
      <div id="content">
        <input
          type="checkbox"
          .checked=${this.model.checked}
          @change=${this.onCheckedChanged}
        />
        <span id="level">${this.model.level}</span>
        <span id="effects">${this.model.effects}</span>
      </div>
    `;
    }
    renderHeader() {
      return x`
      <header>
        <span id="checkbox-header"></span>
        <span id="level-header">Fatigue</span>
        <span id="effects-header">Effects</span>
      </header>
    `;
    }
    onCheckedChanged(event) {
      this.dispatchEvent(
        new CustomEvent("fatigue-level-change", {
          detail: {
            id: this.model.id,
            checked: event.target.checked
          },
          bubbles: true,
          composed: true
        })
      );
    }
  };
  FatigueLevelView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], FatigueLevelView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], FatigueLevelView.prototype, "showHeader", 2);
  FatigueLevelView = __decorateClass([
    t3("fatigue-level-view")
  ], FatigueLevelView);

  // src/status-view.ts
  var StatusView = class extends s3 {
    constructor() {
      super(...arguments);
      this.locked = true;
    }
    render() {
      return x`
      <h2>Status</h2>
      <section>
        <div id="wound-levels">
          ${this.model.status.woundLevels.map(
        (woundLevel, index) => x`<wound-level-view
                .model=${woundLevel}
                .showHeader=${index === 0}
              ></wound-level-view>`
      )}
          ${!this.locked ? this.renderWoundEditUi() : x``}
        </div>
        <div id="fatigue-levels">
          ${this.model.status.fatigueLevels.map(
        (fatigueLevel, index) => x`<fatigue-level-view
                .model=${fatigueLevel}
                .showHeader=${index === 0}
              ></fatigue-level-view>`
      )}
          ${!this.locked ? this.renderFatigueEditUi() : x``}
        </div>
      </section>
    `;
    }
    renderWoundEditUi() {
      return x`
      <div id="wound-edit-ui">
        <button @click=${this.onAddWoundLevel}>Add wound level</button
        ><button
          .disabled=${this.model.status.woundLevels.length <= 6}
          @click=${this.onRemoveWoundLevel}
        >
          Remove wound level
        </button>
      </div>
    `;
    }
    renderFatigueEditUi() {
      return x`
      <div id="fatigue-edit-ui">
        <button @click=${this.onAddFatigueLevel}>Add fatigue level</button
        ><button @click=${this.onRemoveFatigueLevel}>
          Remove fatigue level
        </button>
      </div>
    `;
    }
    onAddWoundLevel(event) {
      this.dispatchEvent(
        new CustomEvent("add-wound-level", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
    onRemoveWoundLevel(event) {
      this.dispatchEvent(
        new CustomEvent("remove-wound-level", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
    onAddFatigueLevel(event) {
      this.dispatchEvent(
        new CustomEvent("add-fatigue-level", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
    onRemoveFatigueLevel(event) {
      this.dispatchEvent(
        new CustomEvent("remove-fatigue-level", {
          detail: {},
          bubbles: true,
          composed: true
        })
      );
    }
  };
  StatusView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], StatusView.prototype, "model", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], StatusView.prototype, "locked", 2);
  StatusView = __decorateClass([
    t3("status-view")
  ], StatusView);

  // src/wealth-view.ts
  var WealthView = class extends s3 {
    render() {
      return x`
      <h2>Wealth</h2>

      <section>
        <table>
          <tr>
            <th></th>
            <th>Party Wealth</th>
            <th>Individual Wealth</th>
          </tr>
          ${this.model.wealth.map(
        (wealthLevel) => x`
              <tr>
                <td>${wealthLevel.name}</td>
                <td>
                  <input
                    type="radio"
                    .checked=${wealthLevel.selectedForParty}
                    @change=${this.partyWealthLevelChangedHandler(
          wealthLevel.id
        )}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    .checked=${wealthLevel.selectedForIndividual}
                    @change=${this.individualWealthLevelChangedHandler(
          wealthLevel.id
        )}
                  />
                </td>
              </tr>
            `
      )}
        </table>
      </section>
    `;
    }
    partyWealthLevelChangedHandler(id) {
      return (event) => {
        this.dispatchEvent(
          new CustomEvent("party-wealth-level-change", {
            detail: {
              id,
              checked: event.target.checked
            },
            bubbles: true,
            composed: true
          })
        );
      };
    }
    individualWealthLevelChangedHandler(id) {
      return (event) => {
        this.dispatchEvent(
          new CustomEvent(
            "individual-wealth-level-change",
            {
              detail: {
                id,
                checked: event.target.checked
              },
              bubbles: true,
              composed: true
            }
          )
        );
      };
    }
  };
  WealthView.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], WealthView.prototype, "model", 2);
  WealthView = __decorateClass([
    t3("wealth-view")
  ], WealthView);

  // node_modules/lit-html/directives/when.js
  function n5(n6, r6, t4) {
    return n6 ? r6(n6) : t4?.(n6);
  }

  // src/icon-button.ts
  var IconButton = class extends s3 {
    constructor() {
      super(...arguments);
      this.on = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.role = "button";
    }
    render() {
      return x`
      ${n5(
        this.on,
        () => x`<slot name="on" @slotchange=${this.preventFocus}></slot>`,
        () => x`<slot @slotchange=${this.preventFocus}></slot>`
      )}
    `;
    }
    preventFocus(e6) {
      const slot = e6.target;
      for (const element of slot.assignedElements()) {
        element.setAttribute("tabindex", "-1");
      }
    }
  };
  IconButton.styles = [
    themeCss,
    i`
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
    `
  ];
  __decorateClass([
    n4({ type: Boolean })
  ], IconButton.prototype, "on", 2);
  IconButton = __decorateClass([
    t3("icon-button")
  ], IconButton);

  // src/character-sheet.ts
  createIcons({
    icons: {
      FileUp,
      Save,
      Printer,
      Lock,
      LockOpen,
      Dices,
      UserRoundPlus,
      Share2
    }
  });
  function arrayOf(numCopies, ctor) {
    return Array(numCopies).fill(null).map(() => ctor());
  }
  var CharacterSheet = class extends s3 {
    constructor() {
      super();
      this.columnCount = 3;
      this.locked = true;
      this._printDiv = null;
      this.model = {
        name: "",
        archetype: "",
        player: "",
        age: "",
        gender: "",
        presentation: "",
        primeValue: "",
        primeFear: "",
        traits: "",
        description: "",
        notes: "",
        xp: 0,
        connections: arrayOf(21, () => ({
          name: "",
          relationship: "",
          id: CharacterSheet.makeId()
        })),
        status: {
          woundLevels: [
            {
              level: "1",
              effects: "",
              shockCheck: "",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "2",
              effects: "-1",
              shockCheck: "",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "3",
              effects: "-2",
              shockCheck: "5",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "4",
              effects: "-1d",
              shockCheck: "10",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "5",
              effects: "-2d",
              shockCheck: "15",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "6",
              effects: "-3d",
              shockCheck: "30",
              checkable: true,
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "7+",
              effects: "Death",
              shockCheck: "\u{1F571}",
              checkable: false,
              checked: false,
              id: CharacterSheet.makeId()
            }
          ],
          fatigueLevels: [
            {
              level: "1",
              effects: "-1d",
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "2",
              effects: "-2d",
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "3",
              effects: "-3d",
              checked: false,
              id: CharacterSheet.makeId()
            },
            {
              level: "4",
              effects: "-4d",
              checked: false,
              id: CharacterSheet.makeId()
            }
          ]
        },
        attributes: [
          {
            name: "Strength",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Dexterity",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Perception",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Presence",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Grace",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Intuition",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Will",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Wits",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          },
          {
            name: "Awareness",
            id: CharacterSheet.makeId(),
            skills: arrayOf(8, () => ({
              name: "",
              id: CharacterSheet.makeId()
            }))
          }
        ],
        specializations: arrayOf(15, () => ({
          name: "",
          rank: 0,
          xp: 0,
          id: CharacterSheet.makeId()
        })),
        inventory: {
          equipment: arrayOf(12, () => ({
            name: "",
            bonus: "",
            id: CharacterSheet.makeId()
          })),
          items: arrayOf(12, () => ({
            name: "",
            quantity: 0,
            id: CharacterSheet.makeId()
          }))
        },
        wealth: [
          {
            name: "Indebted",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Destitute",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Struggling",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Adequate",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Comfortable",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Prosperous",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Wealthy",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          },
          {
            name: "Opulent",
            selectedForParty: false,
            selectedForIndividual: false,
            id: CharacterSheet.makeId()
          }
        ]
      };
      this.columnCount = 3;
      this.locked = true;
      this._printDiv = null;
    }
    /**
     * Returns a random, very-probably-unique string.
     */
    static makeId() {
      return Math.random().toString(36).slice(2, 11);
    }
    connectedCallback() {
      super.connectedCallback();
      window.addEventListener("beforeprint", (e6) => this.onBeforePrint(e6));
      window.addEventListener("afterprint", (e6) => this.onAfterPrint(e6));
      this.addEventListener("character-change", (e6) => this.onCharacterChange(e6));
      this.addEventListener(
        "connection-change",
        (e6) => this.onConnectionChange(e6)
      );
      this.addEventListener(
        "wound-level-change",
        (e6) => this.onWoundLevelChange(e6)
      );
      this.addEventListener(
        "fatigue-level-change",
        (e6) => this.onFatigueLevelChange(e6)
      );
      this.addEventListener("attribute-change", (e6) => this.onAttributeChange(e6));
      this.addEventListener("skill-change", (e6) => this.onSkillChange(e6));
      this.addEventListener(
        "specialization-change",
        (e6) => this.onSpecializationChange(e6)
      );
      this.addEventListener("equipment-change", (e6) => this.onEquipmentChange(e6));
      this.addEventListener("item-change", (e6) => this.onItemChange(e6));
      this.addEventListener(
        "party-wealth-level-change",
        (e6) => this.onPartyWealthLevelChange(e6)
      );
      this.addEventListener(
        "individual-wealth-level-change",
        (e6) => this.onIndividualWealthLevelChange(e6)
      );
      this.addEventListener(
        "add-connection-row",
        (e6) => this.onAddConnectionRow(e6)
      );
      this.addEventListener("add-wound-level", (e6) => this.onAddWoundLevel(e6));
      this.addEventListener(
        "remove-wound-level",
        (e6) => this.onRemoveWoundLevel(e6)
      );
      this.addEventListener(
        "add-fatigue-level",
        (e6) => this.onAddFatigueLevel(e6)
      );
      this.addEventListener(
        "remove-fatigue-level",
        (e6) => this.onRemoveFatigueLevel(e6)
      );
      this.addEventListener("add-skill-row", (e6) => this.onAddSkillRow(e6));
      this.addEventListener(
        "add-specialization-row",
        (e6) => this.onAddSpecializationRow(e6)
      );
      this.addEventListener(
        "add-equipment-row",
        (e6) => this.onAddEquipmentRow(e6)
      );
      this.addEventListener("add-item-row", (e6) => this.onAddItemRow(e6));
    }
    render() {
      return x`
      <npc-generator id="npc-generator" .model=${this.model}></npc-generator>
      <nav>
        <icon-button
          id="load-button"
          title="Load from file"
          @click=${this.onLoadFromFile}
        >
          <lucide-icon .size=${20} .icon=${FileUp}></lucide-icon>
        </icon-button>
        <icon-button
          id="save-button"
          title="Save to file"
          @click=${this.onSaveToFile}
          ><lucide-icon .size=${20} .icon=${Save}></lucide-icon
        ></icon-button>
        <icon-button
          id="share-button"
          title="Share (mobile only)"
          @click=${this.onMobileShare}
          ><lucide-icon .size=${20} .icon=${Share2}></lucide-icon
        ></icon-button>
        <icon-button id="print-button" title="Print" @click=${this.onPrint}>
          <lucide-icon .size=${20} .icon=${Printer}></lucide-icon>
        </icon-button>
        <icon-button
          id="lock-button"
          title="Lock/unlock"
          .on=${this.locked}
          @click=${this.onToggleLocked}
          ><lucide-icon .size=${20} .icon=${LockOpen}></lucide-icon
          ><lucide-icon slot="on" .size=${20} .icon=${Lock}></lucide-icon
        ></icon-button>
        ${n5(
        true,
        () => x`<icon-button
              id="generate-button"
              title="Generate NPC"
              @click=${() => {
          this.shadowRoot.querySelector(
            "#npc-generator"
          ).configure();
        }}
              ><lucide-icon .size=${20} .icon=${UserRoundPlus}></lucide-icon
            ></icon-button>`
      )}
      </nav>
      <h1>${this.model.name ? this.model.name : "Character Sheet"}</h1>
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
    `;
    }
    onCharacterChange(event) {
      const change = event.detail.change;
      this.model = { ...this.model, ...change };
    }
    onConnectionChange(event) {
      const connectionId = event.detail.id;
      const change = event.detail.change;
      const oldConnectionModel = this.model.connections.find(
        (c4) => c4.id === connectionId
      );
      const newConnectionModel = { ...oldConnectionModel, ...change };
      this.model = {
        ...this.model,
        connections: [
          ...this.model.connections.map(
            (c4) => c4 === oldConnectionModel ? newConnectionModel : c4
          )
        ]
      };
    }
    onWoundLevelChange(event) {
      const woundLevelId = event.detail.id;
      const checked = event.detail.checked;
      let newWoundLevels = [...this.model.status.woundLevels];
      const indexOfChangedLevel = newWoundLevels.findIndex(
        (level) => level.id === woundLevelId
      );
      if (checked) {
        newWoundLevels = newWoundLevels.map((level, index) => ({
          ...level,
          checked: index <= indexOfChangedLevel ? true : false
        }));
      } else {
        newWoundLevels = newWoundLevels.map((level, index) => ({
          ...level,
          checked: index >= indexOfChangedLevel ? false : level.checked
        }));
      }
      this.model = {
        ...this.model,
        status: { ...this.model.status, woundLevels: newWoundLevels }
      };
    }
    onFatigueLevelChange(event) {
      const fatigueLevelId = event.detail.id;
      const checked = event.detail.checked;
      let newFatigueLevels = [...this.model.status.fatigueLevels];
      const indexOfChangedLevel = newFatigueLevels.findIndex(
        (level) => level.id === fatigueLevelId
      );
      if (checked) {
        newFatigueLevels = newFatigueLevels.map((level, index) => ({
          ...level,
          checked: index <= indexOfChangedLevel ? true : false
        }));
      } else {
        newFatigueLevels = newFatigueLevels.map((level, index) => ({
          ...level,
          checked: index >= indexOfChangedLevel ? false : level.checked
        }));
      }
      this.model = {
        ...this.model,
        status: { ...this.model.status, fatigueLevels: newFatigueLevels }
      };
    }
    onAttributeChange(event) {
      const attributeId = event.detail.id;
      const change = event.detail.change;
      const oldAttributeModel = this.model.attributes.find(
        (a3) => a3.id === attributeId
      );
      const newAttributeModel = { ...oldAttributeModel, ...change };
      this.model = {
        ...this.model,
        attributes: [
          ...this.model.attributes.map(
            (a3) => a3 === oldAttributeModel ? newAttributeModel : a3
          )
        ]
      };
    }
    onSkillChange(event) {
      const attributeId = event.detail.attribute;
      const skillId = event.detail.id;
      const change = event.detail.change;
      const oldAttributeModel = this.model.attributes.find(
        (a3) => a3.id === attributeId
      );
      const oldSkillModel = oldAttributeModel.skills.find(
        (s4) => s4.id === skillId
      );
      const newSkillModel = { ...oldSkillModel, ...change };
      const newAttributeModel = {
        ...oldAttributeModel,
        skills: [
          ...oldAttributeModel.skills.map(
            (s4) => s4 === oldSkillModel ? newSkillModel : s4
          )
        ]
      };
      this.model = {
        ...this.model,
        attributes: [
          ...this.model.attributes.map(
            (a3) => a3 === oldAttributeModel ? newAttributeModel : a3
          )
        ]
      };
    }
    onSpecializationChange(event) {
      const specializationId = event.detail.id;
      const change = event.detail.change;
      const oldSpecializationModel = this.model.specializations.find(
        (s4) => s4.id === specializationId
      );
      const newSpecializationModel = { ...oldSpecializationModel, ...change };
      this.model = {
        ...this.model,
        specializations: [
          ...this.model.specializations.map(
            (s4) => s4 === oldSpecializationModel ? newSpecializationModel : s4
          )
        ]
      };
    }
    onEquipmentChange(event) {
      const equipmentId = event.detail.id;
      const change = event.detail.change;
      const oldEquipmentModel = this.model.inventory.equipment.find(
        (e6) => e6.id === equipmentId
      );
      const newEquipmentModel = { ...oldEquipmentModel, ...change };
      this.model = {
        ...this.model,
        inventory: {
          ...this.model.inventory,
          equipment: [
            ...this.model.inventory.equipment.map(
              (e6) => e6 === oldEquipmentModel ? newEquipmentModel : e6
            )
          ]
        }
      };
    }
    onItemChange(event) {
      const itemId = event.detail.id;
      const change = event.detail.change;
      const oldItemModel = this.model.inventory.items.find(
        (i4) => i4.id === itemId
      );
      const newItemModel = { ...oldItemModel, ...change };
      this.model = {
        ...this.model,
        inventory: {
          ...this.model.inventory,
          items: [
            ...this.model.inventory.items.map(
              (i4) => i4 === oldItemModel ? newItemModel : i4
            )
          ]
        }
      };
    }
    onPartyWealthLevelChange(event) {
      const levelId = event.detail.id;
      this.model = {
        ...this.model,
        wealth: [
          ...this.model.wealth.map((wealth) => ({
            ...wealth,
            selectedForParty: wealth.id === levelId
          }))
        ]
      };
    }
    onIndividualWealthLevelChange(event) {
      const levelId = event.detail.id;
      this.model = {
        ...this.model,
        wealth: [
          ...this.model.wealth.map((wealth) => ({
            ...wealth,
            selectedForIndividual: wealth.id === levelId
          }))
        ]
      };
    }
    onAddConnectionRow(event) {
      this.model = {
        ...this.model,
        connections: [
          ...this.model.connections,
          ...arrayOf(3, () => ({
            name: "",
            relationship: "",
            id: CharacterSheet.makeId()
          }))
        ]
      };
    }
    onAddSpecializationRow(event) {
      this.model = {
        ...this.model,
        specializations: [
          ...this.model.specializations,
          ...arrayOf(3, () => ({
            name: "",
            id: CharacterSheet.makeId()
          }))
        ]
      };
    }
    onAddSkillRow(event) {
      const attributeId = event.detail.id;
      this.model = {
        ...this.model,
        attributes: [
          ...this.model.attributes.map(
            (a3) => a3.id === attributeId ? {
              ...a3,
              skills: [
                ...a3.skills,
                { name: "", rank: 0, xp: 0, id: CharacterSheet.makeId() }
              ]
            } : a3
          )
        ]
      };
    }
    onAddWoundLevel(event) {
      this.model = {
        ...this.model,
        status: {
          ...this.model.status,
          woundLevels: this.model.status.woundLevels.flatMap((level, index) => {
            if (index === 0) {
              return [
                {
                  level: "1",
                  effects: "",
                  shockCheck: "",
                  checkable: true,
                  checked: false,
                  id: CharacterSheet.makeId()
                },
                { ...level, level: `${index + 2}` }
              ];
            } else {
              return [{ ...level, level: `${index + 2}` }];
            }
          })
        }
      };
    }
    onRemoveWoundLevel(event) {
      this.model = {
        ...this.model,
        status: {
          ...this.model.status,
          woundLevels: this.model.status.woundLevels.flatMap((level, index) => {
            if (index === 0) {
              return [];
            } else {
              return [{ ...level, level: `${index}` }];
            }
          })
        }
      };
    }
    onAddFatigueLevel(event) {
      const newFatigueLevelCount = this.model.status.fatigueLevels.length + 1;
      this.model = {
        ...this.model,
        status: {
          ...this.model.status,
          fatigueLevels: Array.from(Array(newFatigueLevelCount).keys()).map(
            (index) => ({
              level: `${index + 1}`,
              effects: `-${index + 1}d`,
              checked: this.model.status.fatigueLevels.length > index ? this.model.status.fatigueLevels[index].checked : false,
              id: CharacterSheet.makeId()
            })
          )
        }
      };
    }
    onRemoveFatigueLevel(event) {
      const newFatigueLevelCount = this.model.status.fatigueLevels.length - 1;
      this.model = {
        ...this.model,
        status: {
          ...this.model.status,
          fatigueLevels: Array.from(Array(newFatigueLevelCount).keys()).map(
            (index) => ({
              level: `${index + 1}`,
              effects: `-${index + 1}d`,
              checked: this.model.status.fatigueLevels[index].checked,
              id: CharacterSheet.makeId()
            })
          )
        }
      };
    }
    onAddEquipmentRow(event) {
      this.model = {
        ...this.model,
        inventory: {
          ...this.model.inventory,
          equipment: [
            ...this.model.inventory.equipment,
            {
              name: "",
              bonus: "",
              id: CharacterSheet.makeId()
            }
          ]
        }
      };
    }
    onAddItemRow(event) {
      this.model = {
        ...this.model,
        inventory: {
          ...this.model.inventory,
          items: [
            ...this.model.inventory.items,
            {
              name: "",
              quantity: 0,
              id: CharacterSheet.makeId()
            }
          ]
        }
      };
    }
    onSaveToFile(event) {
      const serializedModel = JSON.stringify(this.model, void 0, 2);
      const a3 = document.createElement("a");
      const file = new Blob([serializedModel], { type: "application/json" });
      a3.href = URL.createObjectURL(file);
      a3.download = `${this._toFileName(this.model.name)}.json`;
      a3.click();
      URL.revokeObjectURL(a3.href);
    }
    async onMobileShare(event) {
      const serializedModel = JSON.stringify(this.model, void 0, 2);
      const blob = new Blob([serializedModel], { type: "application/json" });
      const file = new File([blob], `${this._toFileName(this.model.name)}.json`);
      if (!navigator.canShare({ files: [file] })) {
        alert("Sorry, sharing is not available.  Try saving instead.");
      }
      try {
        await navigator.share({ files: [file] });
      } catch (exc) {
        alert(`Sorry, sharing failed with the following error: ${exc.message}.`);
      }
    }
    onLoadFromFile(event) {
      const i4 = document.createElement("input");
      i4.type = "file";
      i4.accept = "application/json";
      i4.addEventListener(
        "change",
        async () => {
          if (!i4.files)
            return;
          const file = i4.files[0];
          const json = await file.text();
          this.model = JSON.parse(json);
        },
        { once: true }
      );
      i4.click();
    }
    onPrint(event) {
      this.onBeforePrint(null);
      requestAnimationFrame(() => {
        window.print();
      });
    }
    onBeforePrint(event) {
      if (!this._printDiv) {
        this._printDiv = document.createElement("div");
        const rootElement = this.shadowRoot.getRootNode();
        for (const component of rootElement.querySelector("main").children) {
          const clone = component.cloneNode(true);
          if ("model" in clone) {
            clone.model = this.model;
          }
          if ("columnCount" in clone) {
            clone.columnCount = 3;
          }
          this._printDiv.appendChild(clone);
          if ("flushUpdate" in clone && typeof clone.flushUpdate === "function") {
            clone.flushUpdate();
          }
        }
        document.body.appendChild(this._printDiv);
      }
    }
    onAfterPrint(event) {
      this._printDiv?.remove();
      this._printDiv = null;
    }
    onToggleLocked(event) {
      const button = event.target;
      this.locked = !button.on;
    }
    _toFileName(name) {
      return name.replace(/\W+/g, "_").toLowerCase();
    }
  };
  CharacterSheet.styles = [
    themeCss,
    i`
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

      @media print {
        :host {
          display: none;
        }
      }
    `
  ];
  __decorateClass([
    n4({ type: Object })
  ], CharacterSheet.prototype, "model", 2);
  __decorateClass([
    n4({ type: Number })
  ], CharacterSheet.prototype, "columnCount", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], CharacterSheet.prototype, "locked", 2);
  CharacterSheet = __decorateClass([
    t3("character-sheet")
  ], CharacterSheet);

  // src/main.ts
  if (true) {
    new EventSource("/esbuild").addEventListener(
      "change",
      () => location.reload()
    );
  }
})();
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

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=main.js.map
