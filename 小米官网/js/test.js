! function(e) {
	function t(i) {
		if(n[i]) return n[i].exports;
		var r = n[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
	e.exports = n(1)
}, function(e, t, n) {
	window.jQuery = n(2), window.$ = window.jQuery, window.doT = n(3), window.multiline = n(4), n(5), n(6), n(7), n(9), n(10), $.cookie = n(11), n(12), n(13), n(15), n(22), n(23), n(24), n(26), n(30), n(31), n(34)
}, function(e, t, n) {
	var i, r;
	! function(t, n) {
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
			if(!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function(n, o) {
		function a(e) {
			var t = "length" in e && e.length,
				n = ce.type(e);
			return "function" === n || ce.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}

		function s(e, t, n) {
			if(ce.isFunction(t)) return ce.grep(e, function(e, i) {
				return !!t.call(e, i, e) !== n
			});
			if(t.nodeType) return ce.grep(e, function(e) {
				return e === t !== n
			});
			if("string" == typeof t) {
				if(me.test(t)) return ce.filter(t, e, n);
				t = ce.filter(t, e)
			}
			return ce.grep(e, function(e) {
				return ce.inArray(e, t) >= 0 !== n
			})
		}

		function c(e, t) {
			do e = e[t]; while (e && 1 !== e.nodeType);
			return e
		}

		function l(e) {
			var t = ke[e] = {};
			return ce.each(e.match(Te) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function u() {
			ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", d, !1), n.removeEventListener("load", d, !1)) : (ye.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
		}

		function d() {
			(ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (u(), ce.ready())
		}

		function f(e, t, n) {
			if(void 0 === n && 1 === e.nodeType) {
				var i = "data-" + t.replace(Ie, "-$1").toLowerCase();
				if(n = e.getAttribute(i), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? ce.parseJSON(n) : n
					} catch(r) {}
					ce.data(e, t, n)
				} else n = void 0
			}
			return n
		}

		function p(e) {
			var t;
			for(t in e)
				if(("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
			return !0
		}

		function h(e, t, n, i) {
			if(ce.acceptData(e)) {
				var r, o, a = ce.expando,
					s = e.nodeType,
					c = s ? ce.cache : e,
					l = s ? e[a] : e[a] && a;
				if(l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = K.pop() || ce.guid++ : a), c[l] || (c[l] = s ? {} : {
					toJSON: ce.noop
				}), ("object" == typeof t || "function" == typeof t) && (i ? c[l] = ce.extend(c[l], t) : c[l].data = ce.extend(c[l].data, t)), o = c[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ce.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[ce.camelCase(t)])) : r = o, r
			}
		}

		function g(e, t, n) {
			if(ce.acceptData(e)) {
				var i, r, o = e.nodeType,
					a = o ? ce.cache : e,
					s = o ? e[ce.expando] : ce.expando;
				if(a[s]) {
					if(t && (i = n ? a[s] : a[s].data)) {
						ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in i ? t = [t] : (t = ce.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
						for(; r--;) delete i[t[r]];
						if(n ? !p(i) : !ce.isEmptyObject(i)) return
					}(n || (delete a[s].data, p(a[s]))) && (o ? ce.cleanData([e], !0) : ae.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
				}
			}
		}

		function m() {
			return !0
		}

		function v() {
			return !1
		}

		function y() {
			try {
				return ye.activeElement
			} catch(e) {}
		}

		function b(e) {
			var t = He.split("|"),
				n = e.createDocumentFragment();
			if(n.createElement)
				for(; t.length;) n.createElement(t.pop());
			return n
		}

		function w(e, t) {
			var n, i, r = 0,
				o = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
			if(!o)
				for(o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || ce.nodeName(i, t) ? o.push(i) : ce.merge(o, w(i, t));
			return void 0 === t || t && ce.nodeName(e, t) ? ce.merge([e], o) : o
		}

		function x(e) {
			je.test(e.type) && (e.defaultChecked = e.checked)
		}

		function C(e, t) {
			return ce.nodeName(e, "table") && ce.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function T(e) {
			return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
		}

		function k(e) {
			var t = Ve.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function _(e, t) {
			for(var n, i = 0; null != (n = e[i]); i++) ce._data(n, "globalEval", !t || ce._data(t[i], "globalEval"))
		}

		function E(e, t) {
			if(1 === t.nodeType && ce.hasData(e)) {
				var n, i, r, o = ce._data(e),
					a = ce._data(t, o),
					s = o.events;
				if(s) {
					delete a.handle, a.events = {};
					for(n in s)
						for(i = 0, r = s[n].length; r > i; i++) ce.event.add(t, n, s[n][i])
				}
				a.data && (a.data = ce.extend({}, a.data))
			}
		}

		function S(e, t) {
			var n, i, r;
			if(1 === t.nodeType) {
				if(n = t.nodeName.toLowerCase(), !ae.noCloneEvent && t[ce.expando]) {
					r = ce._data(t);
					for(i in r.events) ce.removeEvent(t, i, r.handle);
					t.removeAttribute(ce.expando)
				}
				"script" === n && t.text !== e.text ? (T(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ae.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
			}
		}

		function A(e, t) {
			var i, r = ce(t.createElement(e)).appendTo(t.body),
				o = n.getDefaultComputedStyle && (i = n.getDefaultComputedStyle(r[0])) ? i.display : ce.css(r[0], "display");
			return r.detach(), o
		}

		function I(e) {
			var t = ye,
				n = it[e];
			return n || (n = A(e, t), "none" !== n && n || (nt = (nt || ce("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (nt[0].contentWindow || nt[0].contentDocument).document, t.write(), t.close(), n = A(e, t), nt.detach()), it[e] = n), n
		}

		function M(e, t) {
			return {
				get: function() {
					var n = e();
					if(null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function N(e, t) {
			if(t in e) return t;
			for(var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = mt.length; r--;)
				if(t = mt[r] + n, t in e) return t;
			return i
		}

		function L(e, t) {
			for(var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ce._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (o[a] = ce._data(i, "olddisplay", I(i.nodeName)))) : (r = Le(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
			for(a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
			return e
		}

		function $(e, t, n) {
			var i = ft.exec(t);
			return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
		}

		function j(e, t, n, i, r) {
			for(var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ce.css(e, n + Ne[o], !0, r)), i ? ("content" === n && (a -= ce.css(e, "padding" + Ne[o], !0, r)), "margin" !== n && (a -= ce.css(e, "border" + Ne[o] + "Width", !0, r))) : (a += ce.css(e, "padding" + Ne[o], !0, r), "padding" !== n && (a += ce.css(e, "border" + Ne[o] + "Width", !0, r)));
			return a
		}

		function D(e, t, n) {
			var i = !0,
				r = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = rt(e),
				a = ae.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
			if(0 >= r || null == r) {
				if(r = ot(e, t, o), (0 > r || null == r) && (r = e.style[t]), st.test(r)) return r;
				i = a && (ae.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
			}
			return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
		}

		function R(e, t, n, i, r) {
			return new R.prototype.init(e, t, n, i, r)
		}

		function B() {
			return setTimeout(function() {
				vt = void 0
			}), vt = ce.now()
		}

		function O(e, t) {
			var n, i = {
					height: e
				},
				r = 0;
			for(t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ne[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i
		}

		function P(e, t, n) {
			for(var i, r = (Tt[t] || []).concat(Tt["*"]), o = 0, a = r.length; a > o; o++)
				if(i = r[o].call(n, t, e)) return i
		}

		function H(e, t, n) {
			var i, r, o, a, s, c, l, u, d = this,
				f = {},
				p = e.style,
				h = e.nodeType && Le(e),
				g = ce._data(e, "fxshow");
			n.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
				s.unqueued || c()
			}), s.unqueued++, d.always(function() {
				d.always(function() {
					s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ce.css(e, "display"), u = "none" === l ? ce._data(e, "olddisplay") || I(e.nodeName) : l, "inline" === u && "none" === ce.css(e, "float") && (ae.inlineBlockNeedsLayout && "inline" !== I(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ae.shrinkWrapBlocks() || d.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for(i in t)
				if(r = t[i], bt.exec(r)) {
					if(delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
						if("show" !== r || !g || void 0 === g[i]) continue;
						h = !0
					}
					f[i] = g && g[i] || ce.style(e, i)
				} else l = void 0;
			if(ce.isEmptyObject(f)) "inline" === ("none" === l ? I(e.nodeName) : l) && (p.display = l);
			else {
				g ? "hidden" in g && (h = g.hidden) : g = ce._data(e, "fxshow", {}), o && (g.hidden = !h), h ? ce(e).show() : d.done(function() {
					ce(e).hide()
				}), d.done(function() {
					var t;
					ce._removeData(e, "fxshow");
					for(t in f) ce.style(e, t, f[t])
				});
				for(i in f) a = P(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
			}
		}

		function J(e, t) {
			var n, i, r, o, a;
			for(n in e)
				if(i = ce.camelCase(n), r = t[i], o = e[n], ce.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ce.cssHooks[i], a && "expand" in a) {
					o = a.expand(o), delete e[i];
					for(n in o) n in e || (e[n] = o[n], t[n] = r)
				} else t[i] = r
		}

		function U(e, t, n) {
			var i, r, o = 0,
				a = Ct.length,
				s = ce.Deferred().always(function() {
					delete c.elem
				}),
				c = function() {
					if(r) return !1;
					for(var t = vt || B(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(o);
					return s.notifyWith(e, [l, o, n]), 1 > o && c ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: ce.extend({}, t),
					opts: ce.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: vt || B(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var i = ce.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(i), i
					},
					stop: function(t) {
						var n = 0,
							i = t ? l.tweens.length : 0;
						if(r) return this;
						for(r = !0; i > n; n++) l.tweens[n].run(1);
						return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
					}
				}),
				u = l.props;
			for(J(u, l.opts.specialEasing); a > o; o++)
				if(i = Ct[o].call(l, e, u, l.opts)) return i;
			return ce.map(u, P, l), ce.isFunction(l.opts.start) && l.opts.start.call(e, l), ce.fx.timer(ce.extend(c, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}

		function F(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, r = 0,
					o = t.toLowerCase().match(Te) || [];
				if(ce.isFunction(n))
					for(; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function q(e, t, n, i) {
			function r(s) {
				var c;
				return o[s] = !0, ce.each(e[s] || [], function(e, s) {
					var l = s(t, n, i);
					return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
				}), c
			}
			var o = {},
				a = e === Gt;
			return r(t.dataTypes[0]) || !o["*"] && r("*")
		}

		function z(e, t) {
			var n, i, r = ce.ajaxSettings.flatOptions || {};
			for(i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
			return n && ce.extend(!0, e, n), e
		}

		function W(e, t, n) {
			for(var i, r, o, a, s = e.contents, c = e.dataTypes;
				"*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if(r)
				for(a in s)
					if(s[a] && s[a].test(r)) {
						c.unshift(a);
						break
					}
			if(c[0] in n) o = c[0];
			else {
				for(a in n) {
					if(!c[0] || e.converters[a + " " + c[0]]) {
						o = a;
						break
					}
					i || (i = a)
				}
				o = o || i
			}
			return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
		}

		function G(e, t, n, i) {
			var r, o, a, s, c, l = {},
				u = e.dataTypes.slice();
			if(u[1])
				for(a in e.converters) l[a.toLowerCase()] = e.converters[a];
			for(o = u.shift(); o;)
				if(e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
					if("*" === o) o = c;
					else if("*" !== c && c !== o) {
				if(a = l[c + " " + o] || l["* " + o], !a)
					for(r in l)
						if(s = r.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
							a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], u.unshift(s[1]));
							break
						}
				if(a !== !0)
					if(a && e["throws"]) t = a(t);
					else try {
						t = a(t)
					} catch(d) {
						return {
							state: "parsererror",
							error: a ? d : "No conversion from " + c + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function Y(e, t, n, i) {
			var r;
			if(ce.isArray(t)) ce.each(t, function(t, r) {
				n || Vt.test(e) ? i(e, r) : Y(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
			});
			else if(n || "object" !== ce.type(t)) i(e, t);
			else
				for(r in t) Y(e + "[" + r + "]", t[r], n, i)
		}

		function Q() {
			try {
				return new n.XMLHttpRequest
			} catch(e) {}
		}

		function X() {
			try {
				return new n.ActiveXObject("Microsoft.XMLHTTP")
			} catch(e) {}
		}

		function V(e) {
			return ce.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
		}
		var K = [],
			Z = K.slice,
			ee = K.concat,
			te = K.push,
			ne = K.indexOf,
			ie = {},
			re = ie.toString,
			oe = ie.hasOwnProperty,
			ae = {},
			se = "1.11.3",
			ce = function(e, t) {
				return new ce.fn.init(e, t)
			},
			le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ue = /^-ms-/,
			de = /-([\da-z])/gi,
			fe = function(e, t) {
				return t.toUpperCase()
			};
		ce.fn = ce.prototype = {
			jquery: se,
			constructor: ce,
			selector: "",
			length: 0,
			toArray: function() {
				return Z.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
			},
			pushStack: function(e) {
				var t = ce.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ce.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(ce.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(Z.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: te,
			sort: K.sort,
			splice: K.splice
		}, ce.extend = ce.fn.extend = function() {
			var e, t, n, i, r, o, a = arguments[0] || {},
				s = 1,
				c = arguments.length,
				l = !1;
			for("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ce.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
				if(null != (r = arguments[s]))
					for(i in r) e = a[i], n = r[i], a !== n && (l && n && (ce.isPlainObject(n) || (t = ce.isArray(n))) ? (t ? (t = !1, o = e && ce.isArray(e) ? e : []) : o = e && ce.isPlainObject(e) ? e : {}, a[i] = ce.extend(l, o, n)) : void 0 !== n && (a[i] = n));
			return a
		}, ce.extend({
			expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === ce.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ce.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !ce.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isEmptyObject: function(e) {
				var t;
				for(t in e) return !1;
				return !0
			},
			isPlainObject: function(e) {
				var t;
				if(!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
				try {
					if(e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch(n) {
					return !1
				}
				if(ae.ownLast)
					for(t in e) return oe.call(e, t);
				for(t in e);
				return void 0 === t || oe.call(e, t)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[re.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				e && ce.trim(e) && (n.execScript || function(e) {
					n.eval.call(n, e)
				})(e)
			},
			camelCase: function(e) {
				return e.replace(ue, "ms-").replace(de, fe)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, n) {
				var i, r = 0,
					o = e.length,
					s = a(e);
				if(n) {
					if(s)
						for(; o > r && (i = t.apply(e[r], n), i !== !1); r++);
					else
						for(r in e)
							if(i = t.apply(e[r], n), i === !1) break
				} else if(s)
					for(; o > r && (i = t.call(e[r], r, e[r]), i !== !1); r++);
				else
					for(r in e)
						if(i = t.call(e[r], r, e[r]), i === !1) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(le, "")
			},
			makeArray: function(e, t) {
				var n = t || [];
				return null != e && (a(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
			},
			inArray: function(e, t, n) {
				var i;
				if(t) {
					if(ne) return ne.call(t, e, n);
					for(i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
						if(n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, t) {
				for(var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
				if(n !== n)
					for(; void 0 !== t[i];) e[r++] = t[i++];
				return e.length = r, e
			},
			grep: function(e, t, n) {
				for(var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
				return r
			},
			map: function(e, t, n) {
				var i, r = 0,
					o = e.length,
					s = a(e),
					c = [];
				if(s)
					for(; o > r; r++) i = t(e[r], r, n), null != i && c.push(i);
				else
					for(r in e) i = t(e[r], r, n), null != i && c.push(i);
				return ee.apply([], c)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, i, r;
				return "string" == typeof t && (r = e[t], t = e, e = r), ce.isFunction(e) ? (n = Z.call(arguments, 2), i = function() {
					return e.apply(t || this, n.concat(Z.call(arguments)))
				}, i.guid = e.guid = e.guid || ce.guid++, i) : void 0
			},
			now: function() {
				return +new Date
			},
			support: ae
		}), ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			ie["[object " + t + "]"] = t.toLowerCase()
		});
		var pe = function(e) {
			function t(e, t, n, i) {
				var r, o, a, s, c, l, d, p, h, g;
				if((t ? t.ownerDocument || t : H) !== L && N(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if(!i && j) {
					if(11 !== s && (r = ye.exec(e)))
						if(a = r[1]) {
							if(9 === s) {
								if(o = t.getElementById(a), !o || !o.parentNode) return n;
								if(o.id === a) return n.push(o), n
							} else if(t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
						} else {
							if(r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
							if((a = r[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
						}
					if(x.qsa && (!D || !D.test(e))) {
						if(p = d = P, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for(l = _(e), (d = t.getAttribute("id")) ? p = d.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + f(l[c]);
							h = be.test(e) && u(t.parentNode) || t, g = l.join(",")
						}
						if(g) try {
							return K.apply(n, h.querySelectorAll(g)), n
						} catch(m) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return S(e.replace(ce, "$1"), t, n, i)
			}

			function n() {
				function e(n, i) {
					return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[P] = !0, e
			}

			function r(e) {
				var t = L.createElement("div");
				try {
					return !!e(t)
				} catch(n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function o(e, t) {
				for(var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
			}

			function a(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
				if(i) return i;
				if(n)
					for(; n = n.nextSibling;)
						if(n === t) return -1;
				return e ? 1 : -1
			}

			function s(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function c(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return("input" === n || "button" === n) && t.type === e
				}
			}

			function l(e) {
				return i(function(t) {
					return t = +t, i(function(n, i) {
						for(var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function u(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function d() {}

			function f(e) {
				for(var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
				return i
			}

			function p(e, t, n) {
				var i = t.dir,
					r = n && "parentNode" === i,
					o = U++;
				return t.first ? function(t, n, o) {
					for(; t = t[i];)
						if(1 === t.nodeType || r) return e(t, n, o)
				} : function(t, n, a) {
					var s, c, l = [J, o];
					if(a) {
						for(; t = t[i];)
							if((1 === t.nodeType || r) && e(t, n, a)) return !0
					} else
						for(; t = t[i];)
							if(1 === t.nodeType || r) {
								if(c = t[P] || (t[P] = {}), (s = c[i]) && s[0] === J && s[1] === o) return l[2] = s[2];
								if(c[i] = l, l[2] = e(t, n, a)) return !0
							}
				}
			}

			function h(e) {
				return e.length > 1 ? function(t, n, i) {
					for(var r = e.length; r--;)
						if(!e[r](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function g(e, n, i) {
				for(var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
				return i
			}

			function m(e, t, n, i, r) {
				for(var o, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
				return a
			}

			function v(e, t, n, r, o, a) {
				return r && !r[P] && (r = v(r)), o && !o[P] && (o = v(o, a)), i(function(i, a, s, c) {
					var l, u, d, f = [],
						p = [],
						h = a.length,
						v = i || g(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !i && t ? v : m(v, f, e, s, c),
						b = n ? o || (i ? e : h || r) ? [] : a : y;
					if(n && n(y, b, s, c), r)
						for(l = m(b, p), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (b[p[u]] = !(y[p[u]] = d));
					if(i) {
						if(o || e) {
							if(o) {
								for(l = [], u = b.length; u--;)(d = b[u]) && l.push(y[u] = d);
								o(null, b = [], l, c)
							}
							for(u = b.length; u--;)(d = b[u]) && (l = o ? ee(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
						}
					} else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, c) : K.apply(a, b)
				})
			}

			function y(e) {
				for(var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, c = p(function(e) {
						return e === t
					}, a, !0), l = p(function(e) {
						return ee(t, e) > -1
					}, a, !0), u = [function(e, n, i) {
						var r = !o && (i || n !== A) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
						return t = null, r
					}]; r > s; s++)
					if(n = C.relative[e[s].type]) u = [p(h(u), n)];
					else {
						if(n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
							for(i = ++s; r > i && !C.relative[e[i].type]; i++);
							return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(ce, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
						}
						u.push(n)
					}
				return h(u)
			}

			function b(e, n) {
				var r = n.length > 0,
					o = e.length > 0,
					a = function(i, a, s, c, l) {
						var u, d, f, p = 0,
							h = "0",
							g = i && [],
							v = [],
							y = A,
							b = i || o && C.find.TAG("*", l),
							w = J += null == y ? 1 : Math.random() || .1,
							x = b.length;
						for(l && (A = a !== L && a); h !== x && null != (u = b[h]); h++) {
							if(o && u) {
								for(d = 0; f = e[d++];)
									if(f(u, a, s)) {
										c.push(u);
										break
									}
								l && (J = w)
							}
							r && ((u = !f && u) && p--, i && g.push(u))
						}
						if(p += h, r && h !== p) {
							for(d = 0; f = n[d++];) f(g, v, a, s);
							if(i) {
								if(p > 0)
									for(; h--;) g[h] || v[h] || (v[h] = X.call(c));
								v = m(v)
							}
							K.apply(c, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
						}
						return l && (J = w, A = y), g
					};
				return r ? i(a) : a
			}
			var w, x, C, T, k, _, E, S, A, I, M, N, L, $, j, D, R, B, O, P = "sizzle" + 1 * new Date,
				H = e.document,
				J = 0,
				U = 0,
				F = n(),
				q = n(),
				z = n(),
				W = function(e, t) {
					return e === t && (M = !0), 0
				},
				G = 1 << 31,
				Y = {}.hasOwnProperty,
				Q = [],
				X = Q.pop,
				V = Q.push,
				K = Q.push,
				Z = Q.slice,
				ee = function(e, t) {
					for(var n = 0, i = e.length; i > n; n++)
						if(e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				re = ie.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
				ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
				se = new RegExp(ne + "+", "g"),
				ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				le = new RegExp("^" + ne + "*," + ne + "*"),
				ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				fe = new RegExp(ae),
				pe = new RegExp("^" + re + "$"),
				he = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + ae),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				ge = /^(?:input|select|textarea|button)$/i,
				me = /^h\d$/i,
				ve = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				be = /[+~]/,
				we = /'|\\/g,
				xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				Ce = function(e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				Te = function() {
					N()
				};
			try {
				K.apply(Q = Z.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
			} catch(ke) {
				K = {
					apply: Q.length ? function(e, t) {
						V.apply(e, Z.call(t))
					} : function(e, t) {
						for(var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			x = t.support = {}, k = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, N = t.setDocument = function(e) {
				var t, n, i = e ? e.ownerDocument || e : H;
				return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, $ = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), j = !k(i), x.attributes = r(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = r(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = r(function(e) {
					return $.appendChild(e).id = P, !i.getElementsByName || !i.getElementsByName(P).length
				}), x.getById ? (C.find.ID = function(e, t) {
					if("undefined" != typeof t.getElementById && j) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(xe, Ce);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete C.find.ID, C.filter.ID = function(e) {
					var t = e.replace(xe, Ce);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), C.find.TAG = x.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						r = 0,
						o = t.getElementsByTagName(e);
					if("*" === e) {
						for(; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, C.find.CLASS = x.getElementsByClassName && function(e, t) {
					return j ? t.getElementsByClassName(e) : void 0
				}, R = [], D = [], (x.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
					$.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || D.push(".#.+[+~]")
				}), r(function(e) {
					var t = i.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
				})), (x.matchesSelector = ve.test(B = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function(e) {
					x.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), R.push("!=", ae)
				}), D = D.length && new RegExp(D.join("|")), R = R.length && new RegExp(R.join("|")), t = ve.test($.compareDocumentPosition), O = t || ve.test($.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if(t)
						for(; t = t.parentNode;)
							if(t === e) return !0;
					return !1
				}, W = t ? function(e, t) {
					if(e === t) return M = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && O(H, e) ? -1 : t === i || t.ownerDocument === H && O(H, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if(e === t) return M = !0, 0;
					var n, r = 0,
						o = e.parentNode,
						s = t.parentNode,
						c = [e],
						l = [t];
					if(!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : I ? ee(I, e) - ee(I, t) : 0;
					if(o === s) return a(e, t);
					for(n = e; n = n.parentNode;) c.unshift(n);
					for(n = t; n = n.parentNode;) l.unshift(n);
					for(; c[r] === l[r];) r++;
					return r ? a(c[r], l[r]) : c[r] === H ? -1 : l[r] === H ? 1 : 0
				}, i) : L
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if((e.ownerDocument || e) !== L && N(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !j || R && R.test(n) || D && D.test(n))) try {
					var i = B.call(e, n);
					if(i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch(r) {}
				return t(n, L, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return(e.ownerDocument || e) !== L && N(e), O(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== L && N(e);
				var n = C.attrHandle[t.toLowerCase()],
					i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
				return void 0 !== i ? i : x.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					r = 0;
				if(M = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(W), M) {
					for(; t = e[r++];) t === e[r] && (i = n.push(r));
					for(; i--;) e.splice(n[i], 1)
				}
				return I = null, e
			}, T = t.getText = function(e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if(r) {
					if(1 === r || 9 === r || 11 === r) {
						if("string" == typeof e.textContent) return e.textContent;
						for(e = e.firstChild; e; e = e.nextSibling) n += T(e)
					} else if(3 === r || 4 === r) return e.nodeValue
				} else
					for(; t = e[i++];) n += T(t);
				return n
			}, C = t.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: he,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(xe, Ce).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = F[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && F(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, i) {
						return function(r) {
							var o = t.attr(r, e);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, i, r) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === i && 0 === r ? function(e) {
							return !!e.parentNode
						} : function(t, n, c) {
							var l, u, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !c && !s;
							if(m) {
								if(o) {
									for(; g;) {
										for(d = t; d = d[g];)
											if(s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if(h = [a ? m.firstChild : m.lastChild], a && y) {
									for(u = m[P] || (m[P] = {}), l = u[e] || [], p = l[0] === J && l[1], f = l[0] === J && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
										if(1 === d.nodeType && ++f && d === t) {
											u[e] = [J, p, f];
											break
										}
								} else if(y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === J) f = l[1];
								else
									for(;
										(d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [J, f]), d !== t)););
								return f -= r, f === i || f % i === 0 && f / i >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
							for(var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
						}) : function(e) {
							return o(e, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: i(function(e) {
						var t = [],
							n = [],
							r = E(e.replace(ce, "$1"));
						return r[P] ? i(function(e, t, n, i) {
							for(var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: i(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: i(function(e) {
						return e = e.replace(xe, Ce),
							function(t) {
								return(t.textContent || t.innerText || T(t)).indexOf(e) > -1
							}
					}),
					lang: i(function(e) {
						return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase(),
							function(t) {
								var n;
								do
									if(n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === $
					},
					focus: function(e) {
						return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for(e = e.firstChild; e; e = e.nextSibling)
							if(e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !C.pseudos.empty(e)
					},
					header: function(e) {
						return me.test(e.nodeName)
					},
					input: function(e) {
						return ge.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: l(function() {
						return [0]
					}),
					last: l(function(e, t) {
						return [t - 1]
					}),
					eq: l(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: l(function(e, t) {
						for(var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: l(function(e, t) {
						for(var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: l(function(e, t, n) {
						for(var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: l(function(e, t, n) {
						for(var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}, C.pseudos.nth = C.pseudos.eq;
			for(w in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) C.pseudos[w] = s(w);
			for(w in {
					submit: !0,
					reset: !0
				}) C.pseudos[w] = c(w);
			return d.prototype = C.filters = C.pseudos, C.setFilters = new d, _ = t.tokenize = function(e, n) {
				var i, r, o, a, s, c, l, u = q[e + " "];
				if(u) return n ? 0 : u.slice(0);
				for(s = e, c = [], l = C.preFilter; s;) {
					(!i || (r = le.exec(s))) && (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
						value: i,
						type: r[0].replace(ce, " ")
					}), s = s.slice(i.length));
					for(a in C.filter) !(r = he[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
						value: i,
						type: a,
						matches: r
					}), s = s.slice(i.length));
					if(!i) break
				}
				return n ? s.length : s ? t.error(e) : q(e, c).slice(0)
			}, E = t.compile = function(e, t) {
				var n, i = [],
					r = [],
					o = z[e + " "];
				if(!o) {
					for(t || (t = _(e)), n = t.length; n--;) o = y(t[n]), o[P] ? i.push(o) : r.push(o);
					o = z(e, b(r, i)), o.selector = e
				}
				return o
			}, S = t.select = function(e, t, n, i) {
				var r, o, a, s, c, l = "function" == typeof e && e,
					d = !i && _(e = l.selector || e);
				if(n = n || [], 1 === d.length) {
					if(o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && j && C.relative[o[1].type]) {
						if(t = (C.find.ID(a.matches[0].replace(xe, Ce), t) || [])[0], !t) return n;
						l && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for(r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
						if((c = C.find[s]) && (i = c(a.matches[0].replace(xe, Ce), be.test(o[0].type) && u(t.parentNode) || t))) {
							if(o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
							break
						}
				}
				return(l || E(e, d))(i, t, !j, n, be.test(e) && u(t.parentNode) || t), n
			}, x.sortStable = P.split("").sort(W).join("") === P, x.detectDuplicates = !!M, N(), x.sortDetached = r(function(e) {
				return 1 & e.compareDocumentPosition(L.createElement("div"))
			}), r(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && r(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), r(function(e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function(e, t, n) {
				var i;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), t
		}(n);
		ce.find = pe, ce.expr = pe.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = pe.uniqueSort, ce.text = pe.getText, ce.isXMLDoc = pe.isXML, ce.contains = pe.contains;
		var he = ce.expr.match.needsContext,
			ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			me = /^.[^:#\[\.,]*$/;
		ce.filter = function(e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ce.find.matchesSelector(i, e) ? [i] : [] : ce.find.matches(e, ce.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, ce.fn.extend({
			find: function(e) {
				var t, n = [],
					i = this,
					r = i.length;
				if("string" != typeof e) return this.pushStack(ce(e).filter(function() {
					for(t = 0; r > t; t++)
						if(ce.contains(i[t], this)) return !0
				}));
				for(t = 0; r > t; t++) ce.find(e, i[t], n);
				return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function(e) {
				return this.pushStack(s(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(s(this, e || [], !0))
			},
			is: function(e) {
				return !!s(this, "string" == typeof e && he.test(e) ? ce(e) : e || [], !1).length
			}
		});
		var ve, ye = n.document,
			be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			we = ce.fn.init = function(e, t) {
				var n, i;
				if(!e) return this;
				if("string" == typeof e) {
					if(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : be.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ve).find(e) : this.constructor(t).find(e);
					if(n[1]) {
						if(t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), ge.test(n[1]) && ce.isPlainObject(t))
							for(n in t) ce.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					if(i = ye.getElementById(n[2]), i && i.parentNode) {
						if(i.id !== n[2]) return ve.find(e);
						this.length = 1, this[0] = i
					}
					return this.context = ye, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? "undefined" != typeof ve.ready ? ve.ready(e) : e(ce) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
			};
		we.prototype = ce.fn, ve = ce(ye);
		var xe = /^(?:parents|prev(?:Until|All))/,
			Ce = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ce.extend({
			dir: function(e, t, n) {
				for(var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !ce(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
				return i
			},
			sibling: function(e, t) {
				for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), ce.fn.extend({
			has: function(e) {
				var t, n = ce(e, this),
					i = n.length;
				return this.filter(function() {
					for(t = 0; i > t; t++)
						if(ce.contains(this, n[t])) return !0
				})
			},
			closest: function(e, t) {
				for(var n, i = 0, r = this.length, o = [], a = he.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r > i; i++)
					for(n = this[i]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? ce.unique(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(ce.unique(ce.merge(this.get(), ce(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), ce.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return ce.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return ce.dir(e, "parentNode", n)
			},
			next: function(e) {
				return c(e, "nextSibling")
			},
			prev: function(e) {
				return c(e, "previousSibling")
			},
			nextAll: function(e) {
				return ce.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return ce.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return ce.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return ce.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return ce.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return ce.sibling(e.firstChild)
			},
			contents: function(e) {
				return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
			}
		}, function(e, t) {
			ce.fn[e] = function(n, i) {
				var r = ce.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Ce[e] || (r = ce.unique(r)), xe.test(e) && (r = r.reverse())), this.pushStack(r)
			}
		});
		var Te = /\S+/g,
			ke = {};
		ce.Callbacks = function(e) {
			e = "string" == typeof e ? ke[e] || l(e) : ce.extend({}, e);
			var t, n, i, r, o, a, s = [],
				c = !e.once && [],
				u = function(l) {
					for(n = e.memory && l, i = !0, o = a || 0, a = 0, r = s.length, t = !0; s && r > o; o++)
						if(s[o].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
							n = !1;
							break
						}
					t = !1, s && (c ? c.length && u(c.shift()) : n ? s = [] : d.disable())
				},
				d = {
					add: function() {
						if(s) {
							var i = s.length;
							! function o(t) {
								ce.each(t, function(t, n) {
									var i = ce.type(n);
									"function" === i ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== i && o(n)
								})
							}(arguments), t ? r = s.length : n && (a = i, u(n))
						}
						return this
					},
					remove: function() {
						return s && ce.each(arguments, function(e, n) {
							for(var i;
								(i = ce.inArray(n, s, i)) > -1;) s.splice(i, 1), t && (r >= i && r--, o >= i && o--)
						}), this
					},
					has: function(e) {
						return e ? ce.inArray(e, s) > -1 : !(!s || !s.length)
					},
					empty: function() {
						return s = [], r = 0, this
					},
					disable: function() {
						return s = c = n = void 0, this
					},
					disabled: function() {
						return !s
					},
					lock: function() {
						return c = void 0, n || d.disable(), this
					},
					locked: function() {
						return !c
					},
					fireWith: function(e, n) {
						return !s || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
					},
					fire: function() {
						return d.fireWith(this, arguments), this
					},
					fired: function() {
						return !!i
					}
				};
			return d
		}, ce.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", ce.Callbacks("once memory"), "resolved"],
						["reject", "fail", ce.Callbacks("once memory"), "rejected"],
						["notify", "progress", ce.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function() {
							return n
						},
						always: function() {
							return r.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return ce.Deferred(function(n) {
								ce.each(t, function(t, o) {
									var a = ce.isFunction(e[t]) && e[t];
									r[o[1]](function() {
										var e = a && a.apply(this, arguments);
										e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? ce.extend(e, i) : i
						}
					},
					r = {};
				return i.pipe = i.then, ce.each(t, function(e, o) {
					var a = o[2],
						s = o[3];
					i[o[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
						return r[o[0] + "With"](this === r ? i : this, arguments), this
					}, r[o[0] + "With"] = a.fireWith
				}), i.promise(r), e && e.call(r, r), r
			},
			when: function(e) {
				var t, n, i, r = 0,
					o = Z.call(arguments),
					a = o.length,
					s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0,
					c = 1 === s ? e : ce.Deferred(),
					l = function(e, n, i) {
						return function(r) {
							n[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
						}
					};
				if(a > 1)
					for(t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(c.reject).progress(l(r, n, t)) : --s;
				return s || c.resolveWith(i, o), c.promise()
			}
		});
		var _e;
		ce.fn.ready = function(e) {
			return ce.ready.promise().done(e), this
		}, ce.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ce.readyWait++ : ce.ready(!0)
			},
			ready: function(e) {
				if(e === !0 ? !--ce.readyWait : !ce.isReady) {
					if(!ye.body) return setTimeout(ce.ready);
					ce.isReady = !0, e !== !0 && --ce.readyWait > 0 || (_e.resolveWith(ye, [ce]), ce.fn.triggerHandler && (ce(ye).triggerHandler("ready"), ce(ye).off("ready")))
				}
			}
		}), ce.ready.promise = function(e) {
			if(!_e)
				if(_e = ce.Deferred(), "complete" === ye.readyState) setTimeout(ce.ready);
				else if(ye.addEventListener) ye.addEventListener("DOMContentLoaded", d, !1), n.addEventListener("load", d, !1);
			else {
				ye.attachEvent("onreadystatechange", d), n.attachEvent("onload", d);
				var t = !1;
				try {
					t = null == n.frameElement && ye.documentElement
				} catch(i) {}
				t && t.doScroll && ! function r() {
					if(!ce.isReady) {
						try {
							t.doScroll("left")
						} catch(e) {
							return setTimeout(r, 50)
						}
						u(), ce.ready()
					}
				}()
			}
			return _e.promise(e)
		};
		var Ee, Se = "undefined";
		for(Ee in ce(ae)) break;
		ae.ownLast = "0" !== Ee, ae.inlineBlockNeedsLayout = !1, ce(function() {
				var e, t, n, i;
				n = ye.getElementsByTagName("body")[0], n && n.style && (t = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ae.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
			}),
			function() {
				var e = ye.createElement("div");
				if(null == ae.deleteExpando) {
					ae.deleteExpando = !0;
					try {
						delete e.test
					} catch(t) {
						ae.deleteExpando = !1
					}
				}
				e = null
			}(), ce.acceptData = function(e) {
				var t = ce.noData[(e.nodeName + " ").toLowerCase()],
					n = +e.nodeType || 1;
				return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
			};
		var Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Ie = /([A-Z])/g;
		ce.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				return e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando], !!e && !p(e)
			},
			data: function(e, t, n) {
				return h(e, t, n)
			},
			removeData: function(e, t) {
				return g(e, t)
			},
			_data: function(e, t, n) {
				return h(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return g(e, t, !0)
			}
		}), ce.fn.extend({
			data: function(e, t) {
				var n, i, r, o = this[0],
					a = o && o.attributes;
				if(void 0 === e) {
					if(this.length && (r = ce.data(o), 1 === o.nodeType && !ce._data(o, "parsedAttrs"))) {
						for(n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)), f(o, i, r[i])));
						ce._data(o, "parsedAttrs", !0)
					}
					return r
				}
				return "object" == typeof e ? this.each(function() {
					ce.data(this, e)
				}) : arguments.length > 1 ? this.each(function() {
					ce.data(this, e, t)
				}) : o ? f(o, e, ce.data(o, e)) : void 0
			},
			removeData: function(e) {
				return this.each(function() {
					ce.removeData(this, e)
				})
			}
		}), ce.extend({
			queue: function(e, t, n) {
				var i;
				return e ? (t = (t || "fx") + "queue", i = ce._data(e, t), n && (!i || ce.isArray(n) ? i = ce._data(e, t, ce.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = ce.queue(e, t),
					i = n.length,
					r = n.shift(),
					o = ce._queueHooks(e, t),
					a = function() {
						ce.dequeue(e, t)
					};
				"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return ce._data(e, n) || ce._data(e, n, {
					empty: ce.Callbacks("once memory").add(function() {
						ce._removeData(e, t + "queue"), ce._removeData(e, n)
					})
				})
			}
		}), ce.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ce.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = ce.queue(this, e, t);
					ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ce.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					ce.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, i = 1,
					r = ce.Deferred(),
					o = this,
					a = this.length,
					s = function() {
						--i || r.resolveWith(o, [o])
					};
				for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ce._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
				return s(), r.promise(t)
			}
		});
		var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ne = ["Top", "Right", "Bottom", "Left"],
			Le = function(e, t) {
				return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
			},
			$e = ce.access = function(e, t, n, i, r, o, a) {
				var s = 0,
					c = e.length,
					l = null == n;
				if("object" === ce.type(n)) {
					r = !0;
					for(s in n) ce.access(e, t, s, n[s], !0, o, a)
				} else if(void 0 !== i && (r = !0, ce.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
						return l.call(ce(e), n)
					})), t))
					for(; c > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
				return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
			},
			je = /^(?:checkbox|radio)$/i;
		! function() {
			var e = ye.createElement("input"),
				t = ye.createElement("div"),
				n = ye.createDocumentFragment();
			if(t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ae.leadingWhitespace = 3 === t.firstChild.nodeType, ae.tbody = !t.getElementsByTagName("tbody").length, ae.htmlSerialize = !!t.getElementsByTagName("link").length, ae.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ae.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ae.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
					ae.noCloneEvent = !1
				}), t.cloneNode(!0).click()), null == ae.deleteExpando) {
				ae.deleteExpando = !0;
				try {
					delete t.test
				} catch(i) {
					ae.deleteExpando = !1
				}
			}
		}(),
		function() {
			var e, t, i = ye.createElement("div");
			for(e in {
					submit: !0,
					change: !0,
					focusin: !0
				}) t = "on" + e, (ae[e + "Bubbles"] = t in n) || (i.setAttribute(t, "t"), ae[e + "Bubbles"] = i.attributes[t].expando === !1);
			i = null
		}();
		var De = /^(?:input|select|textarea)$/i,
			Re = /^key/,
			Be = /^(?:mouse|pointer|contextmenu)|click/,
			Oe = /^(?:focusinfocus|focusoutblur)$/,
			Pe = /^([^.]*)(?:\.(.+)|)$/;
		ce.event = {
			global: {},
			add: function(e, t, n, i, r) {
				var o, a, s, c, l, u, d, f, p, h, g, m = ce._data(e);
				if(m) {
					for(n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = ce.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function(e) {
							return typeof ce === Se || e && ce.event.triggered === e.type ? void 0 : ce.event.dispatch.apply(u.elem, arguments)
						}, u.elem = e), t = (t || "").match(Te) || [""], s = t.length; s--;) o = Pe.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = ce.event.special[p] || {}, p = (r ? l.delegateType : l.bindType) || p, l = ce.event.special[p] || {}, d = ce.extend({
						type: p,
						origType: g,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && ce.expr.match.needsContext.test(r),
						namespace: h.join(".")
					}, c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ce.event.global[p] = !0);
					e = null
				}
			},
			remove: function(e, t, n, i, r) {
				var o, a, s, c, l, u, d, f, p, h, g, m = ce.hasData(e) && ce._data(e);
				if(m && (u = m.events)) {
					for(t = (t || "").match(Te) || [""], l = t.length; l--;)
						if(s = Pe.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
							for(d = ce.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = f.length; o--;) a = f[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
							c && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ce.removeEvent(e, p, m.handle), delete u[p])
						} else
							for(p in u) ce.event.remove(e, p + t[l], n, i, !0);
					ce.isEmptyObject(u) && (delete m.handle, ce._removeData(e, "events"))
				}
			},
			trigger: function(e, t, i, r) {
				var o, a, s, c, l, u, d, f = [i || ye],
					p = oe.call(e, "type") ? e.type : e,
					h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
				if(s = u = i = i || ye, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(p + ce.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ce.expando] ? e : new ce.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ce.makeArray(t, [e]), l = ce.event.special[p] || {}, r || !l.trigger || l.trigger.apply(i, t) !== !1)) {
					if(!r && !l.noBubble && !ce.isWindow(i)) {
						for(c = l.delegateType || p, Oe.test(c + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
						u === (i.ownerDocument || ye) && f.push(u.defaultView || u.parentWindow || n)
					}
					for(d = 0;
						(s = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? c : l.bindType || p, o = (ce._data(s, "events") || {})[e.type] && ce._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && o.apply && ce.acceptData(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
					if(e.type = p, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), t) === !1) && ce.acceptData(i) && a && i[p] && !ce.isWindow(i)) {
						u = i[a], u && (i[a] = null), ce.event.triggered = p;
						try {
							i[p]()
						} catch(g) {}
						ce.event.triggered = void 0, u && (i[a] = u)
					}
					return e.result
				}
			},
			dispatch: function(e) {
				e = ce.event.fix(e);
				var t, n, i, r, o, a = [],
					s = Z.call(arguments),
					c = (ce._data(this, "events") || {})[e.type] || [],
					l = ce.event.special[e.type] || {};
				if(s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
					for(a = ce.event.handlers.call(this, e, c), t = 0;
						(r = a[t++]) && !e.isPropagationStopped();)
						for(e.currentTarget = r.elem, o = 0;
							(i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
					return l.postDispatch && l.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, i, r, o, a = [],
					s = t.delegateCount,
					c = e.target;
				if(s && c.nodeType && (!e.button || "click" !== e.type))
					for(; c != this; c = c.parentNode || this)
						if(1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
							for(r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? ce(n, this).index(c) >= 0 : ce.find(n, this, null, [c]).length), r[n] && r.push(i);
							r.length && a.push({
								elem: c,
								handlers: r
							})
						}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			fix: function(e) {
				if(e[ce.expando]) return e;
				var t, n, i, r = e.type,
					o = e,
					a = this.fixHooks[r];
				for(a || (this.fixHooks[r] = a = Be.test(r) ? this.mouseHooks : Re.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
				return e.target || (e.target = o.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, i, r, o = t.button,
						a = t.fromElement;
					return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ye, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if(this !== y() && this.focus) try {
							return this.focus(), !1
						} catch(e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === y() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return ce.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, i) {
				var r = ce.extend(new ce.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				i ? ce.event.trigger(r, null, t) : ce.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
			}
		}, ce.removeEvent = ye.removeEventListener ? function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		} : function(e, t, n) {
			var i = "on" + t;
			e.detachEvent && (typeof e[i] === Se && (e[i] = null), e.detachEvent(i, n))
		}, ce.Event = function(e, t) {
			return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? m : v) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || ce.now(), void(this[ce.expando] = !0)) : new ce.Event(e, t)
		}, ce.Event.prototype = {
			isDefaultPrevented: v,
			isPropagationStopped: v,
			isImmediatePropagationStopped: v,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = m, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = m, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = m, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ce.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			ce.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, i = this,
						r = e.relatedTarget,
						o = e.handleObj;
					return(!r || r !== i && !ce.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), ae.submitBubbles || (ce.event.special.submit = {
			setup: function() {
				return ce.nodeName(this, "form") ? !1 : void ce.event.add(this, "click._submit keypress._submit", function(e) {
					var t = e.target,
						n = ce.nodeName(t, "input") || ce.nodeName(t, "button") ? t.form : void 0;
					n && !ce._data(n, "submitBubbles") && (ce.event.add(n, "submit._submit", function(e) {
						e._submit_bubble = !0
					}), ce._data(n, "submitBubbles", !0))
				})
			},
			postDispatch: function(e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown: function() {
				return ce.nodeName(this, "form") ? !1 : void ce.event.remove(this, "._submit")
			}
		}), ae.changeBubbles || (ce.event.special.change = {
			setup: function() {
				return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
				}), ce.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
				})), !1) : void ce.event.add(this, "beforeactivate._change", function(e) {
					var t = e.target;
					De.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
					}), ce._data(t, "changeBubbles", !0))
				})
			},
			handle: function(e) {
				var t = e.target;
				return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function() {
				return ce.event.remove(this, "._change"), !De.test(this.nodeName)
			}
		}), ae.focusinBubbles || ce.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				ce.event.simulate(t, e.target, ce.event.fix(e), !0)
			};
			ce.event.special[t] = {
				setup: function() {
					var i = this.ownerDocument || this,
						r = ce._data(i, t);
					r || i.addEventListener(e, n, !0), ce._data(i, t, (r || 0) + 1)
				},
				teardown: function() {
					var i = this.ownerDocument || this,
						r = ce._data(i, t) - 1;
					r ? ce._data(i, t, r) : (i.removeEventListener(e, n, !0), ce._removeData(i, t))
				}
			}
		}), ce.fn.extend({
			on: function(e, t, n, i, r) {
				var o, a;
				if("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for(o in e) this.on(o, t, n, e[o], r);
					return this
				}
				if(null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = v;
				else if(!i) return this;
				return 1 === r && (a = i, i = function(e) {
					return ce().off(e), a.apply(this, arguments)
				}, i.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
					ce.event.add(this, e, i, n, t)
				})
			},
			one: function(e, t, n, i) {
				return this.on(e, t, n, i, 1)
			},
			off: function(e, t, n) {
				var i, r;
				if(e && e.preventDefault && e.handleObj) return i = e.handleObj, ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if("object" == typeof e) {
					for(r in e) this.off(r, t, e[r]);
					return this
				}
				return(t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = v), this.each(function() {
					ce.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					ce.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? ce.event.trigger(e, t, n, !0) : void 0
			}
		});
		var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Je = / jQuery\d+="(?:null|\d+)"/g,
			Ue = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
			Fe = /^\s+/,
			qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			ze = /<([\w:]+)/,
			We = /<tbody/i,
			Ge = /<|&#?\w+;/,
			Ye = /<(?:script|style|link)/i,
			Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Xe = /^$|\/(?:java|ecma)script/i,
			Ve = /^true\/(.*)/,
			Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Ze = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: ae.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			et = b(ye),
			tt = et.appendChild(ye.createElement("div"));
		Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, ce.extend({
			clone: function(e, t, n) {
				var i, r, o, a, s, c = ce.contains(e.ownerDocument, e);
				if(ae.html5Clone || ce.isXMLDoc(e) || !Ue.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(o = tt.firstChild)), !(ae.noCloneEvent && ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
					for(i = w(o), s = w(e), a = 0; null != (r = s[a]); ++a) i[a] && S(r, i[a]);
				if(t)
					if(n)
						for(s = s || w(e), i = i || w(o), a = 0; null != (r = s[a]); a++) E(r, i[a]);
					else E(e, o);
				return i = w(o, "script"), i.length > 0 && _(i, !c && w(e, "script")), i = s = r = null, o
			},
			buildFragment: function(e, t, n, i) {
				for(var r, o, a, s, c, l, u, d = e.length, f = b(t), p = [], h = 0; d > h; h++)
					if(o = e[h], o || 0 === o)
						if("object" === ce.type(o)) ce.merge(p, o.nodeType ? [o] : o);
						else if(Ge.test(o)) {
					for(s = s || f.appendChild(t.createElement("div")), c = (ze.exec(o) || ["", ""])[1].toLowerCase(), u = Ze[c] || Ze._default, s.innerHTML = u[1] + o.replace(qe, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
					if(!ae.leadingWhitespace && Fe.test(o) && p.push(t.createTextNode(Fe.exec(o)[0])), !ae.tbody)
						for(o = "table" !== c || We.test(o) ? "<table>" !== u[1] || We.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ce.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
					for(ce.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
					s = f.lastChild
				} else p.push(t.createTextNode(o));
				for(s && f.removeChild(s), ae.appendChecked || ce.grep(w(p, "input"), x), h = 0; o = p[h++];)
					if((!i || -1 === ce.inArray(o, i)) && (a = ce.contains(o.ownerDocument, o), s = w(f.appendChild(o), "script"), a && _(s), n))
						for(r = 0; o = s[r++];) Xe.test(o.type || "") && n.push(o);
				return s = null, f
			},
			cleanData: function(e, t) {
				for(var n, i, r, o, a = 0, s = ce.expando, c = ce.cache, l = ae.deleteExpando, u = ce.event.special; null != (n = e[a]); a++)
					if((t || ce.acceptData(n)) && (r = n[s], o = r && c[r])) {
						if(o.events)
							for(i in o.events) u[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, o.handle);
						c[r] && (delete c[r], l ? delete n[s] : typeof n.removeAttribute !== Se ? n.removeAttribute(s) : n[s] = null, K.push(r))
					}
			}
		}), ce.fn.extend({
			text: function(e) {
				return $e(this, function(e) {
					return void 0 === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = C(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = C(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for(var n, i = e ? ce.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && _(w(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for(var e, t = 0; null != (e = this[t]); t++) {
					for(1 === e.nodeType && ce.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
					e.options && ce.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return ce.clone(this, e, t)
				})
			},
			html: function(e) {
				return $e(this, function(e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if(void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Je, "") : void 0;
					if(!("string" != typeof e || Ye.test(e) || !ae.htmlSerialize && Ue.test(e) || !ae.leadingWhitespace && Fe.test(e) || Ze[(ze.exec(e) || ["", ""])[1].toLowerCase()])) {
						e = e.replace(qe, "<$1></$2>");
						try {
							for(; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ce.cleanData(w(t, !1)), t.innerHTML = e);
							t = 0
						} catch(r) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, ce.cleanData(w(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = ee.apply([], e);
				var n, i, r, o, a, s, c = 0,
					l = this.length,
					u = this,
					d = l - 1,
					f = e[0],
					p = ce.isFunction(f);
				if(p || l > 1 && "string" == typeof f && !ae.checkClone && Qe.test(f)) return this.each(function(n) {
					var i = u.eq(n);
					p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
				});
				if(l && (s = ce.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
					for(o = ce.map(w(s, "script"), T), r = o.length; l > c; c++) i = s, c !== d && (i = ce.clone(i, !0, !0), r && ce.merge(o, w(i, "script"))), t.call(this[c], i, c);
					if(r)
						for(a = o[o.length - 1].ownerDocument, ce.map(o, k), c = 0; r > c; c++) i = o[c], Xe.test(i.type || "") && !ce._data(i, "globalEval") && ce.contains(a, i) && (i.src ? ce._evalUrl && ce._evalUrl(i.src) : ce.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
					s = n = null
				}
				return this
			}
		}), ce.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			ce.fn[e] = function(e) {
				for(var n, i = 0, r = [], o = ce(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ce(o[i])[t](n), te.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var nt, it = {};
		! function() {
			var e;
			ae.shrinkWrapBlocks = function() {
				if(null != e) return e;
				e = !1;
				var t, n, i;
				return n = ye.getElementsByTagName("body")[0], n && n.style ? (t = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ye.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i),
					e) : void 0
			}
		}();
		var rt, ot, at = /^margin/,
			st = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
			ct = /^(top|right|bottom|left)$/;
		n.getComputedStyle ? (rt = function(e) {
				return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
			}, ot = function(e, t, n) {
				var i, r, o, a, s = e.style;
				return n = n || rt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ce.contains(e.ownerDocument, e) || (a = ce.style(e, t)), st.test(a) && at.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
			}) : ye.documentElement.currentStyle && (rt = function(e) {
				return e.currentStyle
			}, ot = function(e, t, n) {
				var i, r, o, a, s = e.style;
				return n = n || rt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), st.test(a) && !ct.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
			}),
			function() {
				function e() {
					var e, t, i, r;
					t = ye.getElementsByTagName("body")[0], t && t.style && (e = ye.createElement("div"), i = ye.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, c = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(e, null) || {}).top, a = "4px" === (n.getComputedStyle(e, null) || {
						width: "4px"
					}).width, r = e.appendChild(ye.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", c = !parseFloat((n.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), t.removeChild(i))
				}
				var t, i, r, o, a, s, c;
				t = ye.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ae.opacity = "0.5" === i.opacity, ae.cssFloat = !!i.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === t.style.backgroundClip, ae.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ce.extend(ae, {
					reliableHiddenOffsets: function() {
						return null == s && e(), s
					},
					boxSizingReliable: function() {
						return null == a && e(), a
					},
					pixelPosition: function() {
						return null == o && e(), o
					},
					reliableMarginRight: function() {
						return null == c && e(), c
					}
				}))
			}(), ce.swap = function(e, t, n, i) {
				var r, o, a = {};
				for(o in t) a[o] = e.style[o], e.style[o] = t[o];
				r = n.apply(e, i || []);
				for(o in t) e.style[o] = a[o];
				return r
			};
		var lt = /alpha\([^)]*\)/i,
			ut = /opacity\s*=\s*([^)]*)/,
			dt = /^(none|table(?!-c[ea]).+)/,
			ft = new RegExp("^(" + Me + ")(.*)$", "i"),
			pt = new RegExp("^([+-])=(" + Me + ")", "i"),
			ht = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			gt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			mt = ["Webkit", "O", "Moz", "ms"];
		ce.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if(t) {
							var n = ot(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ae.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(e, t, n, i) {
				if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var r, o, a, s = ce.camelCase(t),
						c = e.style;
					if(t = ce.cssProps[s] || (ce.cssProps[s] = N(c, s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
					if(o = typeof n, "string" === o && (r = pt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ce.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ce.cssNumber[s] || (n += "px"), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
						c[t] = n
					} catch(l) {}
				}
			},
			css: function(e, t, n, i) {
				var r, o, a, s = ce.camelCase(t);
				return t = ce.cssProps[s] || (ce.cssProps[s] = N(e.style, s)), a = ce.cssHooks[t] || ce.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ot(e, t, i)), "normal" === o && t in gt && (o = gt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || ce.isNumeric(r) ? r || 0 : o) : o
			}
		}), ce.each(["height", "width"], function(e, t) {
			ce.cssHooks[t] = {
				get: function(e, n, i) {
					return n ? dt.test(ce.css(e, "display")) && 0 === e.offsetWidth ? ce.swap(e, ht, function() {
						return D(e, t, i)
					}) : D(e, t, i) : void 0
				},
				set: function(e, n, i) {
					var r = i && rt(e);
					return $(e, n, i ? j(e, t, i, ae.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, r), r) : 0)
				}
			}
		}), ae.opacity || (ce.cssHooks.opacity = {
			get: function(e, t) {
				return ut.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(e, t) {
				var n = e.style,
					i = e.currentStyle,
					r = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					o = i && i.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(o.replace(lt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = lt.test(o) ? o.replace(lt, r) : o + " " + r)
			}
		}), ce.cssHooks.marginRight = M(ae.reliableMarginRight, function(e, t) {
			return t ? ce.swap(e, {
				display: "inline-block"
			}, ot, [e, "marginRight"]) : void 0
		}), ce.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			ce.cssHooks[e + t] = {
				expand: function(n) {
					for(var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ne[i] + t] = o[i] || o[i - 2] || o[0];
					return r
				}
			}, at.test(e) || (ce.cssHooks[e + t].set = $)
		}), ce.fn.extend({
			css: function(e, t) {
				return $e(this, function(e, t, n) {
					var i, r, o = {},
						a = 0;
					if(ce.isArray(t)) {
						for(i = rt(e), r = t.length; r > a; a++) o[t[a]] = ce.css(e, t[a], !1, i);
						return o
					}
					return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return L(this, !0)
			},
			hide: function() {
				return L(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					Le(this) ? ce(this).show() : ce(this).hide()
				})
			}
		}), ce.Tween = R, R.prototype = {
			constructor: R,
			init: function(e, t, n, i, r, o) {
				this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ce.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = R.propHooks[this.prop];
				return e && e.get ? e.get(this) : R.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = R.propHooks[this.prop];
				return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
			}
		}, R.prototype.init.prototype = R.prototype, R.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, ce.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, ce.fx = R.prototype.init, ce.fx.step = {};
		var vt, yt, bt = /^(?:toggle|show|hide)$/,
			wt = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
			xt = /queueHooks$/,
			Ct = [H],
			Tt = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						i = n.cur(),
						r = wt.exec(t),
						o = r && r[3] || (ce.cssNumber[e] ? "" : "px"),
						a = (ce.cssNumber[e] || "px" !== o && +i) && wt.exec(ce.css(n.elem, e)),
						s = 1,
						c = 20;
					if(a && a[3] !== o) {
						o = o || a[3], r = r || [], a = +i || 1;
						do s = s || ".5", a /= s, ce.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --c)
					}
					return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
				}]
			};
		ce.Animation = ce.extend(U, {
				tweener: function(e, t) {
					ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for(var n, i = 0, r = e.length; r > i; i++) n = e[i], Tt[n] = Tt[n] || [], Tt[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? Ct.unshift(e) : Ct.push(e)
				}
			}), ce.speed = function(e, t, n) {
				var i = e && "object" == typeof e ? ce.extend({}, e) : {
					complete: n || !n && t || ce.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !ce.isFunction(t) && t
				};
				return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
					ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
				}, i
			}, ce.fn.extend({
				fadeTo: function(e, t, n, i) {
					return this.filter(Le).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function(e, t, n, i) {
					var r = ce.isEmptyObject(e),
						o = ce.speed(t, n, i),
						a = function() {
							var t = U(this, ce.extend({}, e), o);
							(r || ce._data(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
				},
				stop: function(e, t, n) {
					var i = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							r = null != e && e + "queueHooks",
							o = ce.timers,
							a = ce._data(this);
						if(r) a[r] && a[r].stop && i(a[r]);
						else
							for(r in a) a[r] && a[r].stop && xt.test(r) && i(a[r]);
						for(r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
						(t || !n) && ce.dequeue(this, e)
					})
				},
				finish: function(e) {
					return e !== !1 && (e = e || "fx"), this.each(function() {
						var t, n = ce._data(this),
							i = n[e + "queue"],
							r = n[e + "queueHooks"],
							o = ce.timers,
							a = i ? i.length : 0;
						for(n.finish = !0, ce.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for(t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), ce.each(["toggle", "show", "hide"], function(e, t) {
				var n = ce.fn[t];
				ce.fn[t] = function(e, i, r) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
				}
			}), ce.each({
				slideDown: O("show"),
				slideUp: O("hide"),
				slideToggle: O("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				ce.fn[e] = function(e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), ce.timers = [], ce.fx.tick = function() {
				var e, t = ce.timers,
					n = 0;
				for(vt = ce.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
				t.length || ce.fx.stop(), vt = void 0
			}, ce.fx.timer = function(e) {
				ce.timers.push(e), e() ? ce.fx.start() : ce.timers.pop()
			}, ce.fx.interval = 13, ce.fx.start = function() {
				yt || (yt = setInterval(ce.fx.tick, ce.fx.interval))
			}, ce.fx.stop = function() {
				clearInterval(yt), yt = null
			}, ce.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, ce.fn.delay = function(e, t) {
				return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var i = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(i)
					}
				})
			},
			function() {
				var e, t, n, i, r;
				t = ye.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ye.createElement("select"), r = n.appendChild(ye.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ae.getSetAttribute = "t" !== t.className, ae.style = /top/.test(i.getAttribute("style")), ae.hrefNormalized = "/a" === i.getAttribute("href"), ae.checkOn = !!e.value, ae.optSelected = r.selected, ae.enctype = !!ye.createElement("form").enctype, n.disabled = !0, ae.optDisabled = !r.disabled, e = ye.createElement("input"), e.setAttribute("value", ""), ae.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ae.radioValue = "t" === e.value
			}();
		var kt = /\r/g;
		ce.fn.extend({
			val: function(e) {
				var t, n, i, r = this[0]; {
					if(arguments.length) return i = ce.isFunction(e), this.each(function(n) {
						var r;
						1 === this.nodeType && (r = i ? e.call(this, n, ce(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ce.isArray(r) && (r = ce.map(r, function(e) {
							return null == e ? "" : e + ""
						})), t = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
					});
					if(r) return t = ce.valHooks[r.type] || ce.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n)
				}
			}
		}), ce.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = ce.find.attr(e, "value");
						return null != t ? t : ce.trim(ce.text(e))
					}
				},
				select: {
					get: function(e) {
						for(var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, c = 0 > r ? s : o ? r : 0; s > c; c++)
							if(n = i[c], !(!n.selected && c !== r || (ae.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
								if(t = ce(n).val(), o) return t;
								a.push(t)
							}
						return a
					},
					set: function(e, t) {
						for(var n, i, r = e.options, o = ce.makeArray(t), a = r.length; a--;)
							if(i = r[a], ce.inArray(ce.valHooks.option.get(i), o) >= 0) try {
								i.selected = n = !0
							} catch(s) {
								i.scrollHeight
							} else i.selected = !1;
						return n || (e.selectedIndex = -1), r
					}
				}
			}
		}), ce.each(["radio", "checkbox"], function() {
			ce.valHooks[this] = {
				set: function(e, t) {
					return ce.isArray(t) ? e.checked = ce.inArray(ce(e).val(), t) >= 0 : void 0
				}
			}, ae.checkOn || (ce.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var _t, Et, St = ce.expr.attrHandle,
			At = /^(?:checked|selected)$/i,
			It = ae.getSetAttribute,
			Mt = ae.input;
		ce.fn.extend({
			attr: function(e, t) {
				return $e(this, ce.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					ce.removeAttr(this, e)
				})
			}
		}), ce.extend({
			attr: function(e, t, n) {
				var i, r, o = e.nodeType;
				if(e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (t = t.toLowerCase(), i = ce.attrHooks[t] || (ce.expr.match.bool.test(t) ? Et : _t)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ce.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void ce.removeAttr(e, t))
			},
			removeAttr: function(e, t) {
				var n, i, r = 0,
					o = t && t.match(Te);
				if(o && 1 === e.nodeType)
					for(; n = o[r++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Mt && It || !At.test(n) ? e[i] = !1 : e[ce.camelCase("default-" + n)] = e[i] = !1 : ce.attr(e, n, ""), e.removeAttribute(It ? n : i)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if(!ae.radioValue && "radio" === t && ce.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), Et = {
			set: function(e, t, n) {
				return t === !1 ? ce.removeAttr(e, n) : Mt && It || !At.test(n) ? e.setAttribute(!It && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = St[t] || ce.find.attr;
			St[t] = Mt && It || !At.test(t) ? function(e, t, i) {
				var r, o;
				return i || (o = St[t], St[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, St[t] = o), r
			} : function(e, t, n) {
				return n ? void 0 : e[ce.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Mt && It || (ce.attrHooks.value = {
			set: function(e, t, n) {
				return ce.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
			}
		}), It || (_t = {
			set: function(e, t, n) {
				var i = e.getAttributeNode(n);
				return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
			}
		}, St.id = St.name = St.coords = function(e, t, n) {
			var i;
			return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
		}, ce.valHooks.button = {
			get: function(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : void 0
			},
			set: _t.set
		}, ce.attrHooks.contenteditable = {
			set: function(e, t, n) {
				_t.set(e, "" === t ? !1 : t, n)
			}
		}, ce.each(["width", "height"], function(e, t) {
			ce.attrHooks[t] = {
				set: function(e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			}
		})), ae.style || (ce.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		});
		var Nt = /^(?:input|select|textarea|button|object)$/i,
			Lt = /^(?:a|area)$/i;
		ce.fn.extend({
			prop: function(e, t) {
				return $e(this, ce.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return e = ce.propFix[e] || e, this.each(function() {
					try {
						this[e] = void 0, delete this[e]
					} catch(t) {}
				})
			}
		}), ce.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(e, t, n) {
				var i, r, o, a = e.nodeType;
				if(e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ce.isXMLDoc(e), o && (t = ce.propFix[t] || t, r = ce.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = ce.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Nt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			}
		}), ae.hrefNormalized || ce.each(["href", "src"], function(e, t) {
			ce.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), ae.optSelected || (ce.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		}), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			ce.propFix[this.toLowerCase()] = this
		}), ae.enctype || (ce.propFix.enctype = "encoding");
		var $t = /[\t\r\n\f]/g;
		ce.fn.extend({
			addClass: function(e) {
				var t, n, i, r, o, a, s = 0,
					c = this.length,
					l = "string" == typeof e && e;
				if(ce.isFunction(e)) return this.each(function(t) {
					ce(this).addClass(e.call(this, t, this.className))
				});
				if(l)
					for(t = (e || "").match(Te) || []; c > s; s++)
						if(n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : " ")) {
							for(o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
							a = ce.trim(i), n.className !== a && (n.className = a)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, i, r, o, a, s = 0,
					c = this.length,
					l = 0 === arguments.length || "string" == typeof e && e;
				if(ce.isFunction(e)) return this.each(function(t) {
					ce(this).removeClass(e.call(this, t, this.className))
				});
				if(l)
					for(t = (e || "").match(Te) || []; c > s; s++)
						if(n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : "")) {
							for(o = 0; r = t[o++];)
								for(; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
							a = e ? ce.trim(i) : "", n.className !== a && (n.className = a)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ce.isFunction(e) ? function(n) {
					ce(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if("string" === n)
						for(var t, i = 0, r = ce(this), o = e.match(Te) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
					else(n === Se || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ce._data(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for(var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
					if(1 === this[n].nodeType && (" " + this[n].className + " ").replace($t, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		}), ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			ce.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), ce.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var jt = ce.now(),
			Dt = /\?/,
			Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		ce.parseJSON = function(e) {
			if(n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
			var t, i = null,
				r = ce.trim(e + "");
			return r && !ce.trim(r.replace(Rt, function(e, n, r, o) {
				return t && n && (i = 0), 0 === i ? e : (t = r || n, i += !o - !r, "")
			})) ? Function("return " + r)() : ce.error("Invalid JSON: " + e)
		}, ce.parseXML = function(e) {
			var t, i;
			if(!e || "string" != typeof e) return null;
			try {
				n.DOMParser ? (i = new DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
			} catch(r) {
				t = void 0
			}
			return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + e), t
		};
		var Bt, Ot, Pt = /#.*$/,
			Ht = /([?&])_=[^&]*/,
			Jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Ft = /^(?:GET|HEAD)$/,
			qt = /^\/\//,
			zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Wt = {},
			Gt = {},
			Yt = "*/".concat("*");
		try {
			Ot = location.href
		} catch(Qt) {
			Ot = ye.createElement("a"), Ot.href = "", Ot = Ot.href
		}
		Bt = zt.exec(Ot.toLowerCase()) || [], ce.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ot,
				type: "GET",
				isLocal: Ut.test(Bt[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Yt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": ce.parseJSON,
					"text xml": ce.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? z(z(e, ce.ajaxSettings), t) : z(ce.ajaxSettings, e)
			},
			ajaxPrefilter: F(Wt),
			ajaxTransport: F(Gt),
			ajax: function(e, t) {
				function n(e, t, n, i) {
					var r, u, v, y, w, C = t;
					2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = W(d, x, n)), y = G(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ce.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (ce.etag[o] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, r = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", r ? h.resolveWith(f, [u, C, x]) : h.rejectWith(f, [x, C, v]), x.statusCode(m), m = void 0, c && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? u : v]), g.fireWith(f, [x, C]), c && (p.trigger("ajaxComplete", [x, d]), --ce.active || ce.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var i, r, o, a, s, c, l, u, d = ce.ajaxSetup({}, t),
					f = d.context || d,
					p = d.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
					h = ce.Deferred(),
					g = ce.Callbacks("once memory"),
					m = d.statusCode || {},
					v = {},
					y = {},
					b = 0,
					w = "canceled",
					x = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if(2 === b) {
								if(!u)
									for(u = {}; t = Jt.exec(a);) u[t[1].toLowerCase()] = t[2];
								t = u[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === b ? a : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return b || (e = y[n] = y[n] || e, v[e] = t), this
						},
						overrideMimeType: function(e) {
							return b || (d.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if(e)
								if(2 > b)
									for(t in e) m[t] = [m[t], e[t]];
								else x.always(e[x.status]);
							return this
						},
						abort: function(e) {
							var t = e || w;
							return l && l.abort(t), n(0, t), this
						}
					};
				if(h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ot) + "").replace(Pt, "").replace(qt, Bt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(Te) || [""], null == d.crossDomain && (i = zt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Bt[1] && i[2] === Bt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Bt[3] || ("http:" === Bt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), q(Wt, d, t, x), 2 === b) return x;
				c = ce.event && d.global, c && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ft.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ht.test(o) ? o.replace(Ht, "$1_=" + jt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ce.lastModified[o] && x.setRequestHeader("If-Modified-Since", ce.lastModified[o]), ce.etag[o] && x.setRequestHeader("If-None-Match", ce.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : d.accepts["*"]);
				for(r in d.headers) x.setRequestHeader(r, d.headers[r]);
				if(d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
				w = "abort";
				for(r in {
						success: 1,
						error: 1,
						complete: 1
					}) x[r](d[r]);
				if(l = q(Gt, d, t, x)) {
					x.readyState = 1, c && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
						x.abort("timeout")
					}, d.timeout));
					try {
						b = 1, l.send(v, n)
					} catch(C) {
						if(!(2 > b)) throw C;
						n(-1, C)
					}
				} else n(-1, "No Transport");
				return x
			},
			getJSON: function(e, t, n) {
				return ce.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return ce.get(e, void 0, t, "script")
			}
		}), ce.each(["get", "post"], function(e, t) {
			ce[t] = function(e, n, i, r) {
				return ce.isFunction(n) && (r = r || i, i = n, n = void 0), ce.ajax({
					url: e,
					type: t,
					dataType: r,
					data: n,
					success: i
				})
			}
		}), ce._evalUrl = function(e) {
			return ce.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, ce.fn.extend({
			wrapAll: function(e) {
				if(ce.isFunction(e)) return this.each(function(t) {
					ce(this).wrapAll(e.call(this, t))
				});
				if(this[0]) {
					var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for(var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				return this.each(ce.isFunction(e) ? function(t) {
					ce(this).wrapInner(e.call(this, t))
				} : function() {
					var t = ce(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = ce.isFunction(e);
				return this.each(function(n) {
					ce(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
				}).end()
			}
		}), ce.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ae.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ce.css(e, "display"))
		}, ce.expr.filters.visible = function(e) {
			return !ce.expr.filters.hidden(e)
		};
		var Xt = /%20/g,
			Vt = /\[\]$/,
			Kt = /\r?\n/g,
			Zt = /^(?:submit|button|image|reset|file)$/i,
			en = /^(?:input|select|textarea|keygen)/i;
		ce.param = function(e, t) {
			var n, i = [],
				r = function(e, t) {
					t = ce.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if(void 0 === t && (t = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
				r(this.name, this.value)
			});
			else
				for(n in e) Y(n, e[n], t, r);
			return i.join("&").replace(Xt, "+")
		}, ce.fn.extend({
			serialize: function() {
				return ce.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = ce.prop(this, "elements");
					return e ? ce.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !ce(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !je.test(e))
				}).map(function(e, t) {
					var n = ce(this).val();
					return null == n ? null : ce.isArray(n) ? ce.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Kt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Kt, "\r\n")
					}
				}).get()
			}
		}), ce.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || X()
		} : Q;
		var tn = 0,
			nn = {},
			rn = ce.ajaxSettings.xhr();
		n.attachEvent && n.attachEvent("onunload", function() {
			for(var e in nn) nn[e](void 0, !0)
		}), ae.cors = !!rn && "withCredentials" in rn, rn = ae.ajax = !!rn, rn && ce.ajaxTransport(function(e) {
			if(!e.crossDomain || ae.cors) {
				var t;
				return {
					send: function(n, i) {
						var r, o = e.xhr(),
							a = ++tn;
						if(o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for(r in e.xhrFields) o[r] = e.xhrFields[r];
						e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
						for(r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
						o.send(e.hasContent && e.data || null), t = function(n, r) {
							var s, c, l;
							if(t && (r || 4 === o.readyState))
								if(delete nn[a], t = void 0, o.onreadystatechange = ce.noop, r) 4 !== o.readyState && o.abort();
								else {
									l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
									try {
										c = o.statusText
									} catch(u) {
										c = ""
									}
									s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
								}
							l && i(s, c, l, o.getAllResponseHeaders())
						}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = nn[a] = t : t()
					},
					abort: function() {
						t && t(void 0, !0)
					}
				}
			}
		}), ce.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return ce.globalEval(e), e
				}
			}
		}), ce.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), ce.ajaxTransport("script", function(e) {
			if(e.crossDomain) {
				var t, n = ye.head || ce("head")[0] || ye.documentElement;
				return {
					send: function(i, r) {
						t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function() {
						t && t.onload(void 0, !0)
					}
				}
			}
		});
		var on = [],
			an = /(=)\?(?=&|$)|\?\?/;
		ce.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = on.pop() || ce.expando + "_" + jt++;
				return this[e] = !0, e
			}
		}), ce.ajaxPrefilter("json jsonp", function(e, t, i) {
			var r, o, a, s = e.jsonp !== !1 && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
			return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(an, "$1" + r) : e.jsonp !== !1 && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
				return a || ce.error(r + " was not called"), a[0]
			}, e.dataTypes[0] = "json", o = n[r], n[r] = function() {
				a = arguments
			}, i.always(function() {
				n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, on.push(r)), a && ce.isFunction(o) && o(a[0]), a = o = void 0
			}), "script") : void 0
		}), ce.parseHTML = function(e, t, n) {
			if(!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || ye;
			var i = ge.exec(e),
				r = !n && [];
			return i ? [t.createElement(i[1])] : (i = ce.buildFragment([e], t, r), r && r.length && ce(r).remove(), ce.merge([], i.childNodes))
		};
		var sn = ce.fn.load;
		ce.fn.load = function(e, t, n) {
			if("string" != typeof e && sn) return sn.apply(this, arguments);
			var i, r, o, a = this,
				s = e.indexOf(" ");
			return s >= 0 && (i = ce.trim(e.slice(s, e.length)), e = e.slice(0, s)), ce.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ce.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: t
			}).done(function(e) {
				r = arguments, a.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
			}).complete(n && function(e, t) {
				a.each(n, r || [e.responseText, t, e])
			}), this
		}, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			ce.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), ce.expr.filters.animated = function(e) {
			return ce.grep(ce.timers, function(t) {
				return e === t.elem
			}).length
		};
		var cn = n.document.documentElement;
		ce.offset = {
			setOffset: function(e, t, n) {
				var i, r, o, a, s, c, l, u = ce.css(e, "position"),
					d = ce(e),
					f = {};
				"static" === u && (e.style.position = "relative"), s = d.offset(), o = ce.css(e, "top"), c = ce.css(e, "left"), l = ("absolute" === u || "fixed" === u) && ce.inArray("auto", [o, c]) > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
			}
		}, ce.fn.extend({
			offset: function(e) {
				if(arguments.length) return void 0 === e ? this : this.each(function(t) {
					ce.offset.setOffset(this, e, t)
				});
				var t, n, i = {
						top: 0,
						left: 0
					},
					r = this[0],
					o = r && r.ownerDocument;
				if(o) return t = o.documentElement, ce.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = V(o), {
					top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : i
			},
			position: function() {
				if(this[0]) {
					var e, t, n = {
							top: 0,
							left: 0
						},
						i = this[0];
					return "fixed" === ce.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - ce.css(i, "marginTop", !0),
						left: t.left - n.left - ce.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var e = this.offsetParent || cn; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
					return e || cn
				})
			}
		}), ce.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = /Y/.test(t);
			ce.fn[e] = function(i) {
				return $e(this, function(e, i, r) {
					var o = V(e);
					return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ce(o).scrollLeft() : r, n ? r : ce(o).scrollTop()) : e[i] = r);

				}, e, i, arguments.length, null)
			}
		}), ce.each(["top", "left"], function(e, t) {
			ce.cssHooks[t] = M(ae.pixelPosition, function(e, n) {
				return n ? (n = ot(e, t), st.test(n) ? ce(e).position()[t] + "px" : n) : void 0
			})
		}), ce.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			ce.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, i) {
				ce.fn[i] = function(i, r) {
					var o = arguments.length && (n || "boolean" != typeof i),
						a = n || (i === !0 || r === !0 ? "margin" : "border");
					return $e(this, function(t, n, i) {
						var r;
						return ce.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ce.css(t, n, a) : ce.style(t, n, i, a)
					}, t, o ? i : void 0, o, null)
				}
			})
		}), ce.fn.size = function() {
			return this.length
		}, ce.fn.andSelf = ce.fn.addBack, i = [], r = function() {
			return ce
		}.apply(t, i), !(void 0 !== r && (e.exports = r));
		var ln = n.jQuery,
			un = n.$;
		return ce.noConflict = function(e) {
			return n.$ === ce && (n.$ = un), e && n.jQuery === ce && (n.jQuery = ln), ce
		}, typeof o === Se && (n.jQuery = n.$ = ce), ce
	})
}, function(e, t, n) {
	var i;
	! function() {
		"use strict";

		function r(e, t, n) {
			return("string" == typeof t ? t : t.toString()).replace(e.define || l, function(t, i, r, o) {
				return 0 === i.indexOf("def.") && (i = i.substring(4)), i in n || (":" === r ? (e.defineParams && o.replace(e.defineParams, function(e, t, r) {
					n[i] = {
						arg: t,
						text: r
					}
				}), i in n || (n[i] = o)) : new Function("def", "def['" + i + "']=" + o)(n)), ""
			}).replace(e.use || l, function(t, i) {
				e.useParams && (i = i.replace(e.useParams, function(e, t, i, r) {
					if(n[i] && n[i].arg && r) {
						var o = (i + ":" + r).replace(/'|\\/g, "_");
						return n.__exp = n.__exp || {}, n.__exp[o] = n[i].text.replace(new RegExp("(^|[^\\w$])" + n[i].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + o + "']"
					}
				}));
				var o = new Function("def", "return " + i)(n);
				return o ? r(e, o, n) : o
			})
		}

		function o(e) {
			return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
		}
		var a, s = {
			version: "1.0.3",
			templateSettings: {
				evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
				interpolate: /\{\{=([\s\S]+?)\}\}/g,
				encode: /\{\{!([\s\S]+?)\}\}/g,
				use: /\{\{#([\s\S]+?)\}\}/g,
				useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
				define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
				defineParams: /^\s*([\w$]+):([\s\S]+)/,
				conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
				iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
				varname: "it",
				strip: !0,
				append: !0,
				selfcontained: !1,
				doNotSkipEncoded: !1
			},
			template: void 0,
			compile: void 0
		};
		s.encodeHTMLSource = function(e) {
			var t = {
					"&": "&#38;",
					"<": "&#60;",
					">": "&#62;",
					'"': "&#34;",
					"'": "&#39;",
					"/": "&#47;"
				},
				n = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(e) {
				return e ? e.toString().replace(n, function(e) {
					return t[e] || e
				}) : ""
			}
		}, a = function() {
			return this || (0, eval)("this")
		}(), "undefined" != typeof e && e.exports ? e.exports = s : (i = function() {
			return s
		}.call(t, n, t, e), !(void 0 !== i && (e.exports = i)));
		var c = {
				append: {
					start: "'+(",
					end: ")+'",
					startencode: "'+encodeHTML("
				},
				split: {
					start: "';out+=(",
					end: ");out+='",
					startencode: "';out+=encodeHTML("
				}
			},
			l = /$^/;
		s.template = function(e, t, n) {
			t = t || s.templateSettings;
			var i, u, d = t.append ? c.append : c.split,
				f = 0,
				p = t.use || t.define ? r(t, e, n || {}) : e;
			p = ("var out='" + (t.strip ? p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : p).replace(/'|\\/g, "\\$&").replace(t.interpolate || l, function(e, t) {
				return d.start + o(t) + d.end
			}).replace(t.encode || l, function(e, t) {
				return i = !0, d.startencode + o(t) + d.end
			}).replace(t.conditional || l, function(e, t, n) {
				return t ? n ? "';}else if(" + o(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + o(n) + "){out+='" : "';}out+='"
			}).replace(t.iterate || l, function(e, t, n, i) {
				return t ? (f += 1, u = i || "i" + f, t = o(t), "';var arr" + f + "=" + t + ";if(arr" + f + "){var " + n + "," + u + "=-1,l" + f + "=arr" + f + ".length-1;while(" + u + "<l" + f + "){" + n + "=arr" + f + "[" + u + "+=1];out+='") : "';} } out+='"
			}).replace(t.evaluate || l, function(e, t) {
				return "';" + o(t) + "out+='"
			}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), i && (t.selfcontained || !a || a._encodeHTML || (a._encodeHTML = s.encodeHTMLSource(t.doNotSkipEncoded)), p = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + s.encodeHTMLSource.toString() + "(" + (t.doNotSkipEncoded || "") + "));" + p);
			try {
				return new Function(t.varname, p)
			} catch(h) {
				throw "undefined" != typeof console && console.log("Could not create a template function: " + p), h
			}
		}, s.compile = function(e, t) {
			return s.template(e, null, t)
		}
	}()
}, function(e, t) {
	// var str = multiline(function() {/*!@tpl
	"use strict";
	e.exports = function(e) {
		var t = /\/\*!?(?:\@tpl)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;
		if("function" != typeof e) throw new TypeError("Expected a function");
		var n = t.exec(e.toString());
		if(!n) throw new TypeError("Multiline comment missing.");
		return n[1]
	}
}, function(e, t) {
	+ function(e) {
		"use strict";

		function t() {
			var e = document.createElement("bootstrap"),
				t = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for(var n in t)
				if(void 0 !== e.style[n]) return {
					end: t[n]
				};
			return !1
		}
		e.fn.emulateTransitionEnd = function(t) {
			var n = !1,
				i = this;
			e(this).one(e.support.transition.end, function() {
				n = !0
			});
			var r = function() {
				n || e(i).trigger(e.support.transition.end)
			};
			return setTimeout(r, t), this
		}, e(function() {
			e.support.transition = t()
		})
	}(jQuery)
}, function(e, t) {
	! function(e) {
		"use strict";
		var t = function(t, n) {
			this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
		};
		t.prototype = {
			constructor: t,
			toggle: function() {
				return this[this.isShown ? "hide" : "show"]()
			},
			show: function() {
				var t = this,
					n = e.Event("show");
				this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
					var n = e.support.transition && t.$element.hasClass("fade");
					t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
						t.$element.focus().trigger("shown")
					}) : t.$element.focus().trigger("shown")
				}))
			},
			hide: function(t) {
				t && t.preventDefault();
				t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
			},
			enforceFocus: function() {
				var t = this;
				e(document).on("focusin.modal", function(e) {
					t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
				})
			},
			escape: function() {
				var e = this;
				this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
					27 == t.which && e.hide()
				}) : this.isShown || this.$element.off("keyup.dismiss.modal")
			},
			hideWithTransition: function() {
				var t = this,
					n = setTimeout(function() {
						t.$element.off(e.support.transition.end), t.hideModal()
					}, 500);
				this.$element.one(e.support.transition.end, function() {
					clearTimeout(n), t.hideModal()
				})
			},
			hideModal: function() {
				var e = this;
				this.$element.hide(), this.backdrop(function() {
					e.removeBackdrop(), e.$element.trigger("hidden")
				})
			},
			removeBackdrop: function() {
				this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
			},
			backdrop: function(t) {
				var n = this.$element.hasClass("fade") ? "fade" : "";
				if(this.isShown && this.options.backdrop) {
					var i = e.support.transition && n,
						r = e(document).height(),
						o = "100%";
					if(this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.css({
							width: o,
							height: r
						}).click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
					i ? this.$backdrop.one(e.support.transition.end, t) : t()
				} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
			}
		};
		var n = e.fn.modal;
		e.fn.modal = function(n) {
			return this.each(function() {
				var i = e(this),
					r = i.data("modal"),
					o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
				r || i.data("modal", r = new t(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
			})
		}, e.fn.modal.defaults = {
			backdrop: !0,
			keyboard: !0,
			show: !0
		}, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
			return e.fn.modal = n, this
		}, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
			var n = e(this),
				i = n.attr("href"),
				r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
				o = r.data("modal") ? "toggle" : e.extend({
					remote: !/#/.test(i) && i
				}, r.data(), n.data());
			t.preventDefault(), r.modal(o).one("hide", function() {
				n.focus()
			})
		})
	}(window.jQuery)
}, function(e, t, n) {
	! function() {
		var e = document.all && !document.addEventListener,
			t = n(8);
		e && ($("body").append(t).addClass("lt-IE8"), $("#J_modalUpdateBrowser").modal({
			show: !0,
			backdrop: "static"
		}))
	}()
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="modal fade modal-hide modal-update-browser" id="J_modalUpdateBrowser"> <div class="modal-body"> <p class="tip">您使用的浏览器版本过低，可能有安全风险<br>推荐扫码使用小米商城App</p> <img class="app-code" alt="" src="//c1.mifile.cn/f/i/17/update-browser/app-code.png"   alt="小米商城二维码"> <dl class="download clearfix"> <dt>或者升级您的浏览器，继续访问</dt> <dd> <a class="chrome" href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank">Chrome</a> </dd> <dd> <a class="firefox" href="http://www.mozilla.org/zh-CN/firefox/new/" target="_blank">Firefox</a> </dd> </dl> </div></div>';
		return t
	}
}, function(e, t) {
	! function() {
		document.write = document.writeln = function() {};
		for(var e, t = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--;) e = n[i], r[e] || (r[e] = t)
	}()
}, function(e, t) {
	"undefined" != typeof MI && MI || (window.MI = {}), MI.namespace = function() {
		var e, t, n, i = arguments,
			r = null;
		for(e = 0; e < i.length; e += 1)
			for(n = ("" + i[e]).split("."), r = MI, t = "MI" === n[0] ? 1 : 0; t < n.length; t += 1) r[n[t]] = r[n[t]] || {}, r = r[n[t]];
		return r
	}
}, function(e, t) {
	e.exports = function(e, t, n) {
		if(arguments.length > 1 && "[object Object]" !== String(t)) {
			if(n = jQuery.extend({}, n), (null === t || void 0 === t) && (n.expires = -1), "number" == typeof n.expires) {
				var i = n.expires,
					r = n.expires = new Date;
				r.setDate(r.getDate() + i)
			}
			return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
		}
		n = t || {};
		var o, a = n.raw ? function(e) {
			return e
		} : decodeURIComponent;
		return(o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null
	}
}, function(e, t) {
	MI.form = function() {
		function e() {
			function e() {
				r.each(function() {
					var e = $(this),
						t = e.closest(".form-section"),
						n = e.siblings("label");
					"" !== e.val() && t.addClass("form-section-active"), e.off(".form").on({
						"focus.mi.form": function() {
							t.addClass("form-section-focus form-section-active")
						},
						"blur.mi.form": function() {
							t.removeClass($(this).val() ? "form-section-focus" : "form-section-focus form-section-active")
						},
						"valid.mi.form": function() {
							t.removeClass("form-section-error").addClass("form-section-valid").find(".msg-error").remove()
						},
						"error.mi.form": function(e, n) {
							t.addClass("form-section-error"), n && t.find(".msg-error").remove().end().append('<p class="msg msg-error">' + n + "</p>")
						}
					}), n.off(".form").on("click.mi.form", function() {
						e.trigger("focus.mi.form")
					})
				})
			}

			function n() {
				o.each(function() {
					t && o.addClass("xm-ie-select")
				})
			}
			var i = $(".form-section"),
				r = i.find(".input-text"),
				o = i.find(".xm-select");
			r.length && e(), o.length && n()
		}
		var t = function() {
			return "ActiveXObject" in window
		}();
		return {
			init: e
		}
	}()
}, function(e, t, n) {
	MI.alert = function(e) {
		var t, i, r = {
				msg: "温馨提示",
				isConfirm: !1,
				onCancel: $.noop,
				onConfirm: $.noop
			},
			o = $.extend(r, e),
			a = n(14),
			s = $("#J_miAlert");
		o.msg && (s.length || ($("body").append(a), s = $("#J_miAlert")), t = s.find("#J_miAlertCancel"), i = s.find("#J_miAlertConfirm"), o.isConfirm ? ("function" == typeof o.onCancel && t.on("click", o.onCancel), "function" == typeof o.onConfirm && i.on("click", o.onConfirm)) : t.remove(), s.find("#J_miAlertMsg").html(o.msg), s.modal("show"))
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="modal fade modal-hide  modal-alert" id="J_miAlert" > <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a> <div class="modal-bd"> <div class="text"> <h3 id="J_miAlertMsg"></h3> </div> <div class="actions"> <button class="btn btn-gray" data-dismiss="modal" id="J_miAlertCancel">取消</button> <button class="btn btn-primary"  data-dismiss="modal" id="J_miAlertConfirm">确定</button> </div> </div></div>';
		return t
	}
}, function(e, t, n) {
	var i = n(16);
	MI.setLoginInfo = {
		data: {
			userId: 0,
			userName: "",
			goodsNum: 0
		},
		miid: parseInt($.cookie("userId")),
		miidLink: $.cookie("xm_link_history"),
		defautConfig: {},
		init: function(e) {
			var t = this;
			this.config = $.extend({}, e, this.defautConfig), this.uuidCookie(), this.miid && 0 !== this.miid && this.miidLink ? (this.data.userName = this.miid ? $.cookie("XM_" + this.miid + "_UN") : "", this.data.goodsNum = $.cookie("xm_user_www_num"), this.data.goodsNum = null == this.data.goodsNum ? 0 : this.data.goodsNum, null == this.data.userName || "" === this.data.userName ? t.createScript(this.miid) : this.updateDom(this.miid)) : $.ajax({
				dataType: "jsonp",
				url: "//userid.xiaomi.com/userId",
				jsonpCallback: "userLogincallback",
				success: function(e) {
					if(!e.cUserId) {
						var n = "//order.mi.com/site/login?redirectUrl=" + encodeURI(location.href);
						MI.GLOBAL_CONFIG && MI.GLOBAL_CONFIG.orderSite && (n = MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + encodeURI(location.href)), $("#J_userInfo").find(".link[data-needlogin]").attr("href", n), MI.message.init(!1)
					}
					t.createScript(e.userId)
				}
			})
		},
		escape: function(e) {
			return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
		},
		createScript: function(e) {
			var t = document.createElement("script");
			t.src = "https://account.xiaomi.com/pass/userInfoJsonP?userId=0&callback=setLoginInfo_getAccountInfo", t.type = "text/javascript", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t)
		},
		updateDom: function(e) {
			var t, n, i = this.data.userName || e,
				r = MI.GLOBAL_CONFIG.staticSite || "//static.mi.com",
				o = $("#J_userInfo"),
				a = '<ul class="user-menu"><li><a rel="nofollow"  href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank">个人中心</a></li><li><a rel="nofollow" href="' + MI.GLOBAL_CONFIG.orderSite + '/user/comment" target="_blank">评价晒单</a></li><li><a rel="nofollow" href="' + MI.GLOBAL_CONFIG.orderSite + '/user/favorite" target="_blank">我的喜欢</a></li><li><a rel="nofollow" href="//account.xiaomi.com/" target="_blank">小米账户</a></li><li><a rel="nofollow" href="' + this.config.logoutUrl + '">退出登录</a></li></ul>',
				s = '<span class="user"><a rel="nofollow" class="user-name" href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank"><span class="name">' + this.escape(i) + '</span><i class="iconfont">&#xe61c;</i></a>' + a + '</span><span class="sep">|</span><a rel="nofollow" class="link link-order" href="' + r + '/order/" target="_blank">我的订单</a>',
				c = null;
			o.html(s), t = o.find(".user"), n = o.find(".user-menu"), MI.message.init(!0), t.on({
				mouseenter: function() {
					c && clearTimeout(c), t.addClass("user-active"), n.slideDown("fast")
				},
				mouseleave: function() {
					c = setTimeout(function() {
						t.removeClass("user-active"), n.slideUp("fast")
					}, 200)
				}
			})
		},
		uuidCookie: function() {
			var e = ("xmguest-" + i.v1()).toUpperCase(),
				t = $.cookie("xmuuid");
			if(!t) {
				var n = {
					path: "/",
					domain: ".mi.com",
					expires: 18250
				};
				$.cookie("xmuuid", e, n)
			}
		}
	}, window.setLoginInfo_getAccountInfo = function(e) {
		var t = MI.setLoginInfo;
		if(e.userId) {
			t.data.userName = e.miliaoInfo.nickName ? e.miliaoInfo.nickName : e.userId;
			var n = {
				path: "/",
				domain: ".mi.com"
			};
			$.cookie("XM_" + e.userId + "_UN", t.data.userName, n), t.updateDom(e.userId)
		}
	}
}, function(e, t, n) {
	var i;
	(function(r) {
		(function() {
			function o(e, t, n) {
				var i = t && n || 0,
					r = 0;
				for(t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
						16 > r && (t[i + r++] = g[e])
					}); 16 > r;) t[i + r++] = 0;
				return t
			}

			function a(e, t) {
				var n = t || 0,
					i = h;
				return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
			}

			function s(e, t, n) {
				var i = t && n || 0,
					r = t || [];
				e = e || {};
				var o = null != e.clockseq ? e.clockseq : b,
					s = null != e.msecs ? e.msecs : (new Date).getTime(),
					c = null != e.nsecs ? e.nsecs : x + 1,
					l = s - w + (c - x) / 1e4;
				if(0 > l && null == e.clockseq && (o = o + 1 & 16383), (0 > l || s > w) && null == e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				w = s, x = c, b = o, s += 122192928e5;
				var u = (1e4 * (268435455 & s) + c) % 4294967296;
				r[i++] = u >>> 24 & 255, r[i++] = u >>> 16 & 255, r[i++] = u >>> 8 & 255, r[i++] = 255 & u;
				var d = s / 4294967296 * 1e4 & 268435455;
				r[i++] = d >>> 8 & 255, r[i++] = 255 & d, r[i++] = d >>> 24 & 15 | 16, r[i++] = d >>> 16 & 255, r[i++] = o >>> 8 | 128, r[i++] = 255 & o;
				for(var f = e.node || y, p = 0; 6 > p; p++) r[i + p] = f[p];
				return t ? t : a(r)
			}

			function c(e, t, n) {
				var i = t && n || 0;
				"string" == typeof e && (t = "binary" === e ? new p(16) : null, e = null), e = e || {};
				var r = e.random || (e.rng || l)();
				if(r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
					for(var o = 0; 16 > o; o++) t[i + o] = r[o];
				return t || a(r)
			}
			var l, u = this;
			if(!l && u.crypto && crypto.getRandomValues) {
				var d = new Uint8Array(16);
				l = function() {
					return crypto.getRandomValues(d), d
				}
			}
			if(!l) {
				var f = new Array(16);
				l = function() {
					for(var e, t = 0; 16 > t; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), f[t] = e >>> ((3 & t) << 3) & 255;
					return f
				}
			}
			for(var p = "function" == typeof r ? r : Array, h = [], g = {}, m = 0; 256 > m; m++) h[m] = (m + 256).toString(16).substr(1), g[h[m]] = m;
			var v = l(),
				y = [1 | v[0], v[1], v[2], v[3], v[4], v[5]],
				b = 16383 & (v[6] << 8 | v[7]),
				w = 0,
				x = 0,
				C = c;
			if(C.v1 = s, C.v4 = c, C.parse = o, C.unparse = a, C.BufferClass = p, u.define && n(21)) i = function() {
				return C
			}.call(t, n, t, e), !(void 0 !== i && (e.exports = i));
			else if("undefined" != typeof e && e.exports) e.exports = C;
			else {
				var T = u.uuid;
				C.noConflict = function() {
					return u.uuid = T, C
				}, u.uuid = C
			}
		}).call(this)
	}).call(t, n(17).Buffer)
}, function(e, t, n) {
	(function(e, i) {
		"use strict";

		function r() {
			function e() {}
			try {
				var t = new Uint8Array(1);
				return t.foo = function() {
					return 42
				}, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
			} catch(n) {
				return !1
			}
		}

		function o() {
			return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
		}

		function e(t) {
			return this instanceof e ? (e.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? a(this, t) : "string" == typeof t ? s(this, t, arguments.length > 1 ? arguments[1] : "utf8") : c(this, t)) : arguments.length > 1 ? new e(t, arguments[1]) : new e(t)
		}

		function a(t, n) {
			if(t = g(t, 0 > n ? 0 : 0 | m(n)), !e.TYPED_ARRAY_SUPPORT)
				for(var i = 0; n > i; i++) t[i] = 0;
			return t
		}

		function s(e, t, n) {
			("string" != typeof n || "" === n) && (n = "utf8");
			var i = 0 | y(t, n);
			return e = g(e, i), e.write(t, n), e
		}

		function c(t, n) {
			if(e.isBuffer(n)) return l(t, n);
			if(X(n)) return u(t, n);
			if(null == n) throw new TypeError("must start with number, buffer, array or string");
			if("undefined" != typeof ArrayBuffer) {
				if(n.buffer instanceof ArrayBuffer) return d(t, n);
				if(n instanceof ArrayBuffer) return f(t, n)
			}
			return n.length ? p(t, n) : h(t, n)
		}

		function l(e, t) {
			var n = 0 | m(t.length);
			return e = g(e, n), t.copy(e, 0, 0, n), e
		}

		function u(e, t) {
			var n = 0 | m(t.length);
			e = g(e, n);
			for(var i = 0; n > i; i += 1) e[i] = 255 & t[i];
			return e
		}

		function d(e, t) {
			var n = 0 | m(t.length);
			e = g(e, n);
			for(var i = 0; n > i; i += 1) e[i] = 255 & t[i];
			return e
		}

		function f(t, n) {
			return e.TYPED_ARRAY_SUPPORT ? (n.byteLength, t = e._augment(new Uint8Array(n))) : t = d(t, new Uint8Array(n)), t
		}

		function p(e, t) {
			var n = 0 | m(t.length);
			e = g(e, n);
			for(var i = 0; n > i; i += 1) e[i] = 255 & t[i];
			return e
		}

		function h(e, t) {
			var n, i = 0;
			"Buffer" === t.type && X(t.data) && (n = t.data, i = 0 | m(n.length)), e = g(e, i);
			for(var r = 0; i > r; r += 1) e[r] = 255 & n[r];
			return e
		}

		function g(t, n) {
			e.TYPED_ARRAY_SUPPORT ? (t = e._augment(new Uint8Array(n)), t.__proto__ = e.prototype) : (t.length = n, t._isBuffer = !0);
			var i = 0 !== n && n <= e.poolSize >>> 1;
			return i && (t.parent = V), t
		}

		function m(e) {
			if(e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
			return 0 | e
		}

		function v(t, n) {
			if(!(this instanceof v)) return new v(t, n);
			var i = new e(t, n);
			return delete i.parent, i
		}

		function y(e, t) {
			"string" != typeof e && (e = "" + e);
			var n = e.length;
			if(0 === n) return 0;
			for(var i = !1;;) switch(t) {
				case "ascii":
				case "binary":
				case "raw":
				case "raws":
					return n;
				case "utf8":
				case "utf-8":
					return F(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * n;
				case "hex":
					return n >>> 1;
				case "base64":
					return W(e).length;
				default:
					if(i) return F(e).length;
					t = ("" + t).toLowerCase(), i = !0
			}
		}

		function b(e, t, n) {
			var i = !1;
			if(t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), 0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";
			for(;;) switch(e) {
				case "hex":
					return N(this, t, n);
				case "utf8":
				case "utf-8":
					return S(this, t, n);
				case "ascii":
					return I(this, t, n);
				case "binary":
					return M(this, t, n);
				case "base64":
					return E(this, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return L(this, t, n);
				default:
					if(i) throw new TypeError("Unknown encoding: " + e);
					e = (e + "").toLowerCase(), i = !0
			}
		}

		function w(e, t, n, i) {
			n = Number(n) || 0;
			var r = e.length - n;
			i ? (i = Number(i), i > r && (i = r)) : i = r;
			var o = t.length;
			if(o % 2 !== 0) throw new Error("Invalid hex string");
			i > o / 2 && (i = o / 2);
			for(var a = 0; i > a; a++) {
				var s = parseInt(t.substr(2 * a, 2), 16);
				if(isNaN(s)) throw new Error("Invalid hex string");
				e[n + a] = s
			}
			return a
		}

		function x(e, t, n, i) {
			return G(F(t, e.length - n), e, n, i)
		}

		function C(e, t, n, i) {
			return G(q(t), e, n, i)
		}

		function T(e, t, n, i) {
			return C(e, t, n, i)
		}

		function k(e, t, n, i) {
			return G(W(t), e, n, i)
		}

		function _(e, t, n, i) {
			return G(z(t, e.length - n), e, n, i)
		}

		function E(e, t, n) {
			return Y.fromByteArray(0 === t && n === e.length ? e : e.slice(t, n))
		}

		function S(e, t, n) {
			n = Math.min(e.length, n);
			for(var i = [], r = t; n > r;) {
				var o = e[r],
					a = null,
					s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
				if(n >= r + s) {
					var c, l, u, d;
					switch(s) {
						case 1:
							128 > o && (a = o);
							break;
						case 2:
							c = e[r + 1], 128 === (192 & c) && (d = (31 & o) << 6 | 63 & c, d > 127 && (a = d));
							break;
						case 3:
							c = e[r + 1], l = e[r + 2], 128 === (192 & c) && 128 === (192 & l) && (d = (15 & o) << 12 | (63 & c) << 6 | 63 & l, d > 2047 && (55296 > d || d > 57343) && (a = d));
							break;
						case 4:
							c = e[r + 1], l = e[r + 2], u = e[r + 3], 128 === (192 & c) && 128 === (192 & l) && 128 === (192 & u) && (d = (15 & o) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u, d > 65535 && 1114112 > d && (a = d))
					}
				}
				null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, i.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i.push(a), r += s
			}
			return A(i)
		}

		function A(e) {
			var t = e.length;
			if(K >= t) return String.fromCharCode.apply(String, e);
			for(var n = "", i = 0; t > i;) n += String.fromCharCode.apply(String, e.slice(i, i += K));
			return n
		}

		function I(e, t, n) {
			var i = "";
			n = Math.min(e.length, n);
			for(var r = t; n > r; r++) i += String.fromCharCode(127 & e[r]);
			return i
		}

		function M(e, t, n) {
			var i = "";
			n = Math.min(e.length, n);
			for(var r = t; n > r; r++) i += String.fromCharCode(e[r]);
			return i
		}

		function N(e, t, n) {
			var i = e.length;
			(!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
			for(var r = "", o = t; n > o; o++) r += U(e[o]);
			return r
		}

		function L(e, t, n) {
			for(var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
			return r
		}

		function $(e, t, n) {
			if(e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
			if(e + t > n) throw new RangeError("Trying to access beyond buffer length")
		}

		function j(t, n, i, r, o, a) {
			if(!e.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
			if(n > o || a > n) throw new RangeError("value is out of bounds");
			if(i + r > t.length) throw new RangeError("index out of range")
		}

		function D(e, t, n, i) {
			0 > t && (t = 65535 + t + 1);
			for(var r = 0, o = Math.min(e.length - n, 2); o > r; r++) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
		}

		function R(e, t, n, i) {
			0 > t && (t = 4294967295 + t + 1);
			for(var r = 0, o = Math.min(e.length - n, 4); o > r; r++) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
		}

		function B(e, t, n, i, r, o) {
			if(t > r || o > t) throw new RangeError("value is out of bounds");
			if(n + i > e.length) throw new RangeError("index out of range");
			if(0 > n) throw new RangeError("index out of range")
		}

		function O(e, t, n, i, r) {
			return r || B(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(e, t, n, i, 23, 4), n + 4
		}

		function P(e, t, n, i, r) {
			return r || B(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(e, t, n, i, 52, 8), n + 8
		}

		function H(e) {
			if(e = J(e).replace(ee, ""), e.length < 2) return "";
			for(; e.length % 4 !== 0;) e += "=";
			return e
		}

		function J(e) {
			return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
		}

		function U(e) {
			return 16 > e ? "0" + e.toString(16) : e.toString(16)
		}

		function F(e, t) {
			t = t || 1 / 0;
			for(var n, i = e.length, r = null, o = [], a = 0; i > a; a++) {
				if(n = e.charCodeAt(a), n > 55295 && 57344 > n) {
					if(!r) {
						if(n > 56319) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						if(a + 1 === i) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue
						}
						r = n;
						continue
					}
					if(56320 > n) {
						(t -= 3) > -1 && o.push(239, 191, 189), r = n;
						continue
					}
					n = (r - 55296 << 10 | n - 56320) + 65536
				} else r && (t -= 3) > -1 && o.push(239, 191, 189);
				if(r = null, 128 > n) {
					if((t -= 1) < 0) break;
					o.push(n)
				} else if(2048 > n) {
					if((t -= 2) < 0) break;
					o.push(n >> 6 | 192, 63 & n | 128)
				} else if(65536 > n) {
					if((t -= 3) < 0) break;
					o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
				} else {
					if(!(1114112 > n)) throw new Error("Invalid code point");
					if((t -= 4) < 0) break;
					o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
				}
			}
			return o
		}

		function q(e) {
			for(var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
			return t
		}

		function z(e, t) {
			for(var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
			return o
		}

		function W(e) {
			return Y.toByteArray(H(e))
		}

		function G(e, t, n, i) {
			for(var r = 0; i > r && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
			return r
		}
		var Y = n(18),
			Q = n(19),
			X = n(20);
		t.Buffer = e, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, e.poolSize = 8192;
		var V = {};
		e.TYPED_ARRAY_SUPPORT = void 0 !== i.TYPED_ARRAY_SUPPORT ? i.TYPED_ARRAY_SUPPORT : r(), e.TYPED_ARRAY_SUPPORT ? (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array) : (e.prototype.length = void 0, e.prototype.parent = void 0), e.isBuffer = function(e) {
			return !(null == e || !e._isBuffer)
		}, e.compare = function(t, n) {
			if(!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
			if(t === n) return 0;
			for(var i = t.length, r = n.length, o = 0, a = Math.min(i, r); a > o && t[o] === n[o];) ++o;
			return o !== a && (i = t[o], r = n[o]), r > i ? -1 : i > r ? 1 : 0
		}, e.isEncoding = function(e) {
			switch(String(e).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "binary":
				case "base64":
				case "raw":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;
				default:
					return !1
			}
		}, e.concat = function(t, n) {
			if(!X(t)) throw new TypeError("list argument must be an Array of Buffers.");
			if(0 === t.length) return new e(0);
			var i;
			if(void 0 === n)
				for(n = 0, i = 0; i < t.length; i++) n += t[i].length;
			var r = new e(n),
				o = 0;
			for(i = 0; i < t.length; i++) {
				var a = t[i];
				a.copy(r, o), o += a.length
			}
			return r
		}, e.byteLength = y, e.prototype.toString = function() {
			var e = 0 | this.length;
			return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : b.apply(this, arguments)
		}, e.prototype.equals = function(t) {
			if(!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			return this === t ? !0 : 0 === e.compare(this, t)
		}, e.prototype.inspect = function() {
			var e = "",
				n = t.INSPECT_MAX_BYTES;
			return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
		}, e.prototype.compare = function(t) {
			if(!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			return this === t ? 0 : e.compare(this, t)
		}, e.prototype.indexOf = function(t, n) {
			function i(e, t, n) {
				for(var i = -1, r = 0; n + r < e.length; r++)
					if(e[n + r] === t[-1 === i ? 0 : r - i]) {
						if(-1 === i && (i = r), r - i + 1 === t.length) return n + i
					} else i = -1;
				return -1
			}
			if(n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n >>= 0, 0 === this.length) return -1;
			if(n >= this.length) return -1;
			if(0 > n && (n = Math.max(this.length + n, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, n);
			if(e.isBuffer(t)) return i(this, t, n);
			if("number" == typeof t) return e.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, n) : i(this, [t], n);
			throw new TypeError("val must be string, number or Buffer")
		}, e.prototype.get = function(e) {
			return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
		}, e.prototype.set = function(e, t) {
			return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
		}, e.prototype.write = function(e, t, n, i) {
			if(void 0 === t) i = "utf8", n = this.length, t = 0;
			else if(void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
			else if(isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
			else {
				var r = i;
				i = t, t = 0 | n, n = r
			}
			var o = this.length - t;
			if((void 0 === n || n > o) && (n = o), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
			i || (i = "utf8");
			for(var a = !1;;) switch(i) {
				case "hex":
					return w(this, e, t, n);
				case "utf8":
				case "utf-8":
					return x(this, e, t, n);
				case "ascii":
					return C(this, e, t, n);
				case "binary":
					return T(this, e, t, n);
				case "base64":
					return k(this, e, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return _(this, e, t, n);
				default:
					if(a) throw new TypeError("Unknown encoding: " + i);
					i = ("" + i).toLowerCase(), a = !0
			}
		}, e.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};
		var K = 4096;
		e.prototype.slice = function(t, n) {
			var i = this.length;
			t = ~~t, n = void 0 === n ? i : ~~n, 0 > t ? (t += i, 0 > t && (t = 0)) : t > i && (t = i), 0 > n ? (n += i, 0 > n && (n = 0)) : n > i && (n = i), t > n && (n = t);
			var r;
			if(e.TYPED_ARRAY_SUPPORT) r = e._augment(this.subarray(t, n));
			else {
				var o = n - t;
				r = new e(o, void 0);
				for(var a = 0; o > a; a++) r[a] = this[a + t]
			}
			return r.length && (r.parent = this.parent || this), r
		}, e.prototype.readUIntLE = function(e, t, n) {
			e = 0 | e, t = 0 | t, n || $(e, t, this.length);
			for(var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
			return i
		}, e.prototype.readUIntBE = function(e, t, n) {
			e = 0 | e, t = 0 | t, n || $(e, t, this.length);
			for(var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
			return i
		}, e.prototype.readUInt8 = function(e, t) {
			return t || $(e, 1, this.length), this[e]
		}, e.prototype.readUInt16LE = function(e, t) {
			return t || $(e, 2, this.length), this[e] | this[e + 1] << 8
		}, e.prototype.readUInt16BE = function(e, t) {
			return t || $(e, 2, this.length), this[e] << 8 | this[e + 1]
		}, e.prototype.readUInt32LE = function(e, t) {
			return t || $(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
		}, e.prototype.readUInt32BE = function(e, t) {
			return t || $(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
		}, e.prototype.readIntLE = function(e, t, n) {
			e = 0 | e, t = 0 | t, n || $(e, t, this.length);
			for(var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
			return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
		}, e.prototype.readIntBE = function(e, t, n) {
			e = 0 | e, t = 0 | t, n || $(e, t, this.length);
			for(var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
			return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
		}, e.prototype.readInt8 = function(e, t) {
			return t || $(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
		}, e.prototype.readInt16LE = function(e, t) {
			t || $(e, 2, this.length);
			var n = this[e] | this[e + 1] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, e.prototype.readInt16BE = function(e, t) {
			t || $(e, 2, this.length);
			var n = this[e + 1] | this[e] << 8;
			return 32768 & n ? 4294901760 | n : n
		}, e.prototype.readInt32LE = function(e, t) {
			return t || $(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
		}, e.prototype.readInt32BE = function(e, t) {
			return t || $(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
		}, e.prototype.readFloatLE = function(e, t) {
			return t || $(e, 4, this.length), Q.read(this, e, !0, 23, 4)
		}, e.prototype.readFloatBE = function(e, t) {
			return t || $(e, 4, this.length), Q.read(this, e, !1, 23, 4)
		}, e.prototype.readDoubleLE = function(e, t) {
			return t || $(e, 8, this.length), Q.read(this, e, !0, 52, 8)
		}, e.prototype.readDoubleBE = function(e, t) {
			return t || $(e, 8, this.length), Q.read(this, e, !1, 52, 8)
		}, e.prototype.writeUIntLE = function(e, t, n, i) {
			e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
			var r = 1,
				o = 0;
			for(this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
			return t + n
		}, e.prototype.writeUIntBE = function(e, t, n, i) {
			e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
			var r = n - 1,
				o = 1;
			for(this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
			return t + n
		}, e.prototype.writeUInt8 = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
		}, e.prototype.writeUInt16LE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
		}, e.prototype.writeUInt16BE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
		}, e.prototype.writeUInt32LE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : R(this, t, n, !0), n + 4
		}, e.prototype.writeUInt32BE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : R(this, t, n, !1), n + 4
		}, e.prototype.writeIntLE = function(e, t, n, i) {
			if(e = +e, t = 0 | t, !i) {
				var r = Math.pow(2, 8 * n - 1);
				j(this, e, t, n, r - 1, -r)
			}
			var o = 0,
				a = 1,
				s = 0 > e ? 1 : 0;
			for(this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
			return t + n
		}, e.prototype.writeIntBE = function(e, t, n, i) {
			if(e = +e, t = 0 | t, !i) {
				var r = Math.pow(2, 8 * n - 1);
				j(this, e, t, n, r - 1, -r)
			}
			var o = n - 1,
				a = 1,
				s = 0 > e ? 1 : 0;
			for(this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
			return t + n
		}, e.prototype.writeInt8 = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[n] = 255 & t, n + 1
		}, e.prototype.writeInt16LE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
		}, e.prototype.writeInt16BE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
		}, e.prototype.writeInt32LE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : R(this, t, n, !0), n + 4
		}, e.prototype.writeInt32BE = function(t, n, i) {
			return t = +t, n = 0 | n, i || j(this, t, n, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : R(this, t, n, !1), n + 4
		}, e.prototype.writeFloatLE = function(e, t, n) {
			return O(this, e, t, !0, n)
		}, e.prototype.writeFloatBE = function(e, t, n) {
			return O(this, e, t, !1, n)
		}, e.prototype.writeDoubleLE = function(e, t, n) {
			return P(this, e, t, !0, n)
		}, e.prototype.writeDoubleBE = function(e, t, n) {
			return P(this, e, t, !1, n)
		}, e.prototype.copy = function(t, n, i, r) {
			if(i || (i = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && i > r && (r = i), r === i) return 0;
			if(0 === t.length || 0 === this.length) return 0;
			if(0 > n) throw new RangeError("targetStart out of bounds");
			if(0 > i || i >= this.length) throw new RangeError("sourceStart out of bounds");
			if(0 > r) throw new RangeError("sourceEnd out of bounds");
			r > this.length && (r = this.length), t.length - n < r - i && (r = t.length - n + i);
			var o, a = r - i;
			if(this === t && n > i && r > n)
				for(o = a - 1; o >= 0; o--) t[o + n] = this[o + i];
			else if(1e3 > a || !e.TYPED_ARRAY_SUPPORT)
				for(o = 0; a > o; o++) t[o + n] = this[o + i];
			else t._set(this.subarray(i, i + a), n);
			return a
		}, e.prototype.fill = function(e, t, n) {
			if(e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");
			if(n !== t && 0 !== this.length) {
				if(0 > t || t >= this.length) throw new RangeError("start out of bounds");
				if(0 > n || n > this.length) throw new RangeError("end out of bounds");
				var i;
				if("number" == typeof e)
					for(i = t; n > i; i++) this[i] = e;
				else {
					var r = F(e.toString()),
						o = r.length;
					for(i = t; n > i; i++) this[i] = r[i % o]
				}
				return this
			}
		}, e.prototype.toArrayBuffer = function() {
			if("undefined" != typeof Uint8Array) {
				if(e.TYPED_ARRAY_SUPPORT) return new e(this).buffer;
				for(var t = new Uint8Array(this.length), n = 0, i = t.length; i > n; n += 1) t[n] = this[n];
				return t.buffer
			}
			throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
		};
		var Z = e.prototype;
		e._augment = function(t) {
			return t.constructor = e, t._isBuffer = !0, t._set = t.set, t.get = Z.get, t.set = Z.set, t.write = Z.write, t.toString = Z.toString, t.toLocaleString = Z.toString, t.toJSON = Z.toJSON, t.equals = Z.equals, t.compare = Z.compare, t.indexOf = Z.indexOf, t.copy = Z.copy, t.slice = Z.slice, t.readUIntLE = Z.readUIntLE, t.readUIntBE = Z.readUIntBE, t.readUInt8 = Z.readUInt8, t.readUInt16LE = Z.readUInt16LE, t.readUInt16BE = Z.readUInt16BE, t.readUInt32LE = Z.readUInt32LE, t.readUInt32BE = Z.readUInt32BE, t.readIntLE = Z.readIntLE, t.readIntBE = Z.readIntBE, t.readInt8 = Z.readInt8, t.readInt16LE = Z.readInt16LE, t.readInt16BE = Z.readInt16BE, t.readInt32LE = Z.readInt32LE, t.readInt32BE = Z.readInt32BE, t.readFloatLE = Z.readFloatLE, t.readFloatBE = Z.readFloatBE, t.readDoubleLE = Z.readDoubleLE, t.readDoubleBE = Z.readDoubleBE, t.writeUInt8 = Z.writeUInt8, t.writeUIntLE = Z.writeUIntLE, t.writeUIntBE = Z.writeUIntBE, t.writeUInt16LE = Z.writeUInt16LE, t.writeUInt16BE = Z.writeUInt16BE, t.writeUInt32LE = Z.writeUInt32LE, t.writeUInt32BE = Z.writeUInt32BE, t.writeIntLE = Z.writeIntLE, t.writeIntBE = Z.writeIntBE, t.writeInt8 = Z.writeInt8, t.writeInt16LE = Z.writeInt16LE, t.writeInt16BE = Z.writeInt16BE, t.writeInt32LE = Z.writeInt32LE, t.writeInt32BE = Z.writeInt32BE, t.writeFloatLE = Z.writeFloatLE, t.writeFloatBE = Z.writeFloatBE, t.writeDoubleLE = Z.writeDoubleLE, t.writeDoubleBE = Z.writeDoubleBE, t.fill = Z.fill, t.inspect = Z.inspect, t.toArrayBuffer = Z.toArrayBuffer, t
		};
		var ee = /[^+\/0-9A-Za-z-_]/g
	}).call(t, n(17).Buffer, function() {
		return this
	}())
}, function(e, t, n) {
	var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	! function(e) {
		"use strict";

		function t(e) {
			var t = e.charCodeAt(0);
			return t === a || t === d ? 62 : t === s || t === f ? 63 : c > t ? -1 : c + 10 > t ? t - c + 26 + 26 : u + 26 > t ? t - u : l + 26 > t ? t - l + 26 : void 0
		}

		function n(e) {
			function n(e) {
				l[d++] = e
			}
			var i, r, a, s, c, l;
			if(e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var u = e.length;
			c = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, l = new o(3 * e.length / 4 - c), a = c > 0 ? e.length - 4 : e.length;
			var d = 0;
			for(i = 0, r = 0; a > i; i += 4, r += 3) s = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s);
			return 2 === c ? (s = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & s)) : 1 === c && (s = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), l
		}

		function r(e) {
			function t(e) {
				return i.charAt(e)
			}

			function n(e) {
				return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
			}
			var r, o, a, s = e.length % 3,
				c = "";
			for(r = 0, a = e.length - s; a > r; r += 3) o = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], c += n(o);
			switch(s) {
				case 1:
					o = e[e.length - 1], c += t(o >> 2), c += t(o << 4 & 63), c += "==";
					break;
				case 2:
					o = (e[e.length - 2] << 8) + e[e.length - 1], c += t(o >> 10), c += t(o >> 4 & 63), c += t(o << 2 & 63), c += "="
			}
			return c
		}
		var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
			a = "+".charCodeAt(0),
			s = "/".charCodeAt(0),
			c = "0".charCodeAt(0),
			l = "a".charCodeAt(0),
			u = "A".charCodeAt(0),
			d = "-".charCodeAt(0),
			f = "_".charCodeAt(0);
		e.toByteArray = n, e.fromByteArray = r
	}(t)
}, function(e, t) {
	t.read = function(e, t, n, i, r) {
		var o, a, s = 8 * r - i - 1,
			c = (1 << s) - 1,
			l = c >> 1,
			u = -7,
			d = n ? r - 1 : 0,
			f = n ? -1 : 1,
			p = e[t + d];
		for(d += f, o = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += f, u -= 8);
		for(a = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; a = 256 * a + e[t + d], d += f, u -= 8);
		if(0 === o) o = 1 - l;
		else {
			if(o === c) return a ? 0 / 0 : (p ? -1 : 1) * (1 / 0);
			a += Math.pow(2, i), o -= l
		}
		return(p ? -1 : 1) * a * Math.pow(2, o - i)
	}, t.write = function(e, t, n, i, r, o) {
		var a, s, c, l = 8 * o - r - 1,
			u = (1 << l) - 1,
			d = u >> 1,
			f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			p = i ? 0 : o - 1,
			h = i ? 1 : -1,
			g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
		for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), t += a + d >= 1 ? f / c : f * Math.pow(2, 1 - d), t * c >= 2 && (a++, c /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * c - 1) * Math.pow(2, r), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + p] = 255 & s, p += h, s /= 256, r -= 8);
		for(a = a << r | s, l += r; l > 0; e[n + p] = 255 & a, p += h, a /= 256, l -= 8);
		e[n + p - h] |= 128 * g
	}
}, function(e, t) {
	var n = {}.toString;
	e.exports = Array.isArray || function(e) {
		return "[object Array]" == n.call(e)
	}
}, function(e, t) {
	(function(t) {
		e.exports = t
	}).call(t, {})
}, function(e, t) {
	MI.updateMiniCart = function() {
		var e = $(".J_cartNum"),
			t = $("#J_miniCartTrigger"),
			n = $.cookie("xm_user_www_num");
		return n && parseFloat(n) > 0 ? (e.text("（" + n + "）"), t.addClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60d;"), $(".J_homeRightbarCarNum") && ($(".J_barLMum").hasClass("hidden") && $(".J_barLMum").removeClass("hidden"), $(".J_barSMumicon").hasClass("hidden") && $(".J_barSMumicon").removeClass("hidden"), $(".J_barLMum").html(n), $(".J_barSMum").html(n)), n) : (e.text("（0）"), t.removeClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60c;"), 0)
	}
}, function(e, t) {
	MI.miniCart = function() {
		function e(e) {
			if(e.totalItem > 0) {
				for(var t = MI.GLOBAL_CONFIG.staticSite ? MI.GLOBAL_CONFIG.staticSite : "//static.mi.com", n = e.totalItem > 5 ? '<ul class="cart-list" style="height:445px; overflow-x:hidden; overflow-y:scroll;">' : '<ul class="cart-list">', i = 0, r = e.items.length; r > i; i += 1) {
					var o, a, c, l = '<img alt="" src="' + e.items[i].image_url + '?width=60&height=60">';
					e.items[i].is_cos ? (o = " is-cos", a = "暂时缺货") : (o = "", a = e.items[i].salePrice + "元 × " + e.items[i].num), 0 === i && (o += " first"), 0 === e.items[i].noLink ? (c = MI.GLOBAL_CONFIG.itemSite + "/" + e.items[i].product_id + ".html", n += '<li><div class="cart-item clearfix' + o + '"><a class="thumb" href="' + c + '">' + l + '</a><a class="name" href="' + c + '">' + e.items[i].product_name + '</a><span class="price">' + a + '</span><a class="btn-del J_delItem" href="javascript: void(0);" gid="' + e.items[i].itemId + '" data-isBigtap="' + e.items[i].is_bigtap + '"><i class="iconfont">&#xe602;</i></a></div></li>') : n += '<li><div class="cart-item clearfix' + o + '"><span class="thumb">' + l + '</span><span class="name">' + e.items[i].product_name + '</span><span class="price">' + a + '</span><a class="btn-del J_delItem" href="javascript: void(0);" gid="' + e.items[i].itemId + '" data-isBigtap="' + e.items[i].is_bigtap + '"><i class="iconfont">&#xe602;</i></a></div></li>'
				}
				n += '</ul><div class="cart-total clearfix"><span class="total">共 <em>' + e.total + '</em> 件商品<span class="price"><em>' + e.totalPrice + '</em>元</span></span><a href="' + t + '/cart/"  class="btn btn-primary btn-cart">去购物车结算</a></div>', s.html(n)
			} else s.html('<div class="loading">购物车中还没有商品，赶紧选购吧！</div>')
		}

		function t() {
			$.ajax({
				type: "POST",
				url: MI.GLOBAL_CONFIG.cartSite + "/cart/miniNew",
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				cache: !1,
				success: function(t) {
					0 === t.errorno ? e(t) : s.html('<p class="msg msg-error">' + t.msg + "</p>"), MI.updateMiniCart()
				}
			})
		}

		function n() {
			s.slideDown("fast")
		}

		function i() {
			s.slideUp("fast", function() {
				a.removeClass("topbar-cart-active"), $(this).html(c)
			})
		}

		function r(e) {
			$.ajax({
				type: "POST",
				url: MI.GLOBAL_CONFIG.cartSite + "/cart/delete/" + e,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				cache: "false",
				success: function(e) {
					1 === e.code ? (t(), MI.updateMiniCart()) : alert(e.msg)
				}
			})
		}

		function o() {
			return "undefined" != typeof miniCartDisable && miniCartDisable && "undefined" != typeof MI.GLOBAL_CONFIG.closeMiniCart && "1" === MI.GLOBAL_CONFIG.closeMiniCart ? !1 : (a.on({
				mouseenter: function() {
					clearTimeout(l), $(this).hasClass("topbar-cart-active") || ($(this).addClass("topbar-cart-active"), t(), n())
				},
				mouseleave: function() {
					l = setTimeout(function() {
						i()
					}, 200)
				}
			}), void s.on("click", ".J_delItem", function(e) {
				var t = $(this).attr("gid"),
					n = $(this).attr("data-isbigtap");
				return "true" !== n || confirm("您正在删除开放购买活动商品\n\n删除后您失去本次开放购买资格，无法下单购买此商品。\n确认删除此商品吗？") ? (e.preventDefault(), void r(t)) : !1
			}))
		}
		var a = $("#J_miniCartTrigger"),
			s = $("#J_miniCartMenu"),
			c = '<div class="loading"><div class="loader"></div></div>',
			l = null;
		return {
			init: o
		}
	}()
}, function(e, t, n) {
	MI.message = {
		apiUrl: "//a.huodong.mi.com/msg/pick/",
		loopSpeed: 8e3,
		initDelay: 3e3,
		loopTimer: null,
		login: !1,
		messageTotal: 0,
		loopCount: 0,
		uid: "",
		popTemp: n(25),
		popShow: !1,
		init: function(e) {
			var t = this;
			t.login = e, t.uid = $.cookie($.cookie("axmuid") ? "axmuid" : "userId");
			var n = $(".site-mini-header").length;
			n || (t.updateDom(), t.uid && setTimeout(function() {
				t.getMessage()
			}, t.initDelay))
		},
		getMessage: function() {
			var e = this;
			e.loopCount > 0 && e.loopSpeed <= 3e4 && e.loopCount % 5 === 0 && (e.loopSpeed = 2 * e.loopSpeed), e.loopCount += 1, $.ajax({
				url: e.apiUrl,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					vpage: location.href
				},
				timeout: 1e4,
				error: function() {},
				success: function(t) {
					if(t && 0 === t.code && (e.messageTotal = t.data.count, e.updateMessageNum(), 1 === t.data.loop ? (clearTimeout(e.loopTimer), e.loopTimer = setTimeout(function() {
							e.getMessage()
						}, e.loopSpeed)) : e.stopLoop(), 1 === t.data.hasPop && !e.popShow)) {
						var n = e.popTemp({
							id: t.data.popmsg.batch_id,
							image: t.data.popmsg.adv_img_url,
							link: t.data.popmsg.target,
							autoClose: t.data.popmsg.adv_auto_close
						});
						$("body").append(n);
						var i = $("#J_miMessagePop");
						if(i.modal("show").one("hidden", function() {
								a && clearInterval(a), i.remove()
							}), e.popShow = !0, 1 === t.data.popmsg.adv_auto_close) var r = $("#J_messagePopCdTime"),
							o = 5,
							a = setInterval(function() {
								0 >= o && (clearInterval(a), i.modal("hide")), r.text(o), o -= 1
							}, 1e3)
					}
				}
			})
		},
		updateDom: function() {
			var e = this,
				t = MI.GLOBAL_CONFIG.orderSite + "/message/list",
				n = '<span class="sep">|</span><span class="message"><a rel="nofollow" href="' + t + '">消息通知<i class="J_miMessageTotal"></i></a></span>';
			e.login ? $("#J_userInfo").find(".user").after(n) : $("#J_userInfo").append(n)
		},
		updateMessageNum: function() {
			var e = this;
			$(".J_miMessageTotal").text(e.messageTotal > 0 ? "（" + e.messageTotal + "）" : "")
		},
		stopLoop: function() {
			var e = this;
			e.loopTimer && clearTimeout(e.loopTimer), e.loopSpeed = 3e3, e.loopCount = 0
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="modal fade modal-hide  modal-message-pop" id="J_miMessagePop" > <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a> <div class="message-countdown ';
		return e.autoClose || (t += " hide "), t += '"> <em id="J_messagePopCdTime">5</em> 秒后自动关闭 </div> <a style="background-image:url(' + e.image + ');" class="message-link" href="' + e.link + "\" onclick=\"_msq.push(['trackEvent', '" + e.id + "', '" + e.link + "', 'pcpid']);\"></a></div>"
	}
}, function(e, t, n) {
	n(27), jQuery(function(e) {
		function t() {
			var t = 0,
				n = 0,
				i = e('<div id="J_navMenu" class="header-nav-menu" style="display: none;"><div class="container"></div></div>'),
				r = i.find("> .container");
			i.appendTo(".site-header").on({
				mouseenter: function() {
					t && (clearTimeout(t), t = null)
				},
				mouseleave: function() {
					t = setTimeout(function() {
						a.data("toggled") || i.slideUp()
					}, 200)
				}
			}), a.find(".nav-item").on({
				mouseenter: function() {
					var o, s = e(this);
					return t && (clearTimeout(t), t = null), a.data("toggled", !0), s.addClass("nav-item-active"), e(this).find(".children-list").length ? (o = e(this).find(".children-list").clone(), o.find("img").each(function() {
						e(this).attr("src", e(this).attr("data-src"))
					}), r.html(o), void(a.data("toggled") && (n = setTimeout(function() {
						i.stop(!0, !1).slideDown(200, function() {
							e(this).addClass("header-nav-menu-active")
						})
					}, 200)))) : void i.removeClass("header-nav-menu-active").stop(!0, !1).slideUp(200)
				},
				mouseleave: function() {
					var r = e(this);
					n && (clearTimeout(n), n = null), a.data("toggled", !1), r.removeClass("nav-item-active"), t = setTimeout(function() {
						a.data("toggled") || i.stop(!0, !0).slideUp(200)
					}, 200)
				}
			})
		}

		function i(t) {
			var i = n(29),
				r = e(i(t)),
				a = e("#J_navCategory");
			a.append(r), o(r.find("#J_categoryList")), "undefined" != typeof isCategoryToggled && "toggled" === isCategoryToggled ? r.show() : a.on({
				mouseenter: function() {
					e(this).addClass("nav-item-active"), r.show()
				},
				mouseleave: function() {
					e(this).removeClass("nav-item-active"), r.hide()
				}
			})
		}

		function r() {
			var t;
			"undefined" != typeof categoryTree && categoryTree ? (t = categoryTree, i(t)) : e.ajax({
				url: "//s01.mifile.cn/c/js/ct2015.js",
				cache: !0,
				dataType: "script",
				timeout: 5e3,
				error: function() {
					return !1
				},
				success: function() {
					t = categoryTree, i(t)
				}
			})
		}
		var o = n(28),
			a = e(".J_navMainList");
		a.length && (t(), r());
		var s = e(".site-info").find(".slogan").length;
		s || e(".site-info").append('<div class="slogan ir">探索黑科技，小米为发烧而生</div>')
	})
}, function(e, t) {
	! function(e) {
		function t(t) {
			function n(e) {
				p.push({
					x: e.pageX,
					y: e.pageY
				}), p.length > m && p.shift()
			}

			function i() {
				g && clearTimeout(g), u.exitMenu(this) && (f && u.deactivate(f), f = null)
			}

			function r() {
				g && clearTimeout(g), u.enter(this), s(this)
			}

			function o() {
				u.exit(this)
			}

			function a(e) {
				e !== f && (f && u.deactivate(f), u.activate(e), f = e)
			}

			function s(e) {
				var t = c();
				t ? g = setTimeout(function() {
					s(e)
				}, t) : a(e)
			}

			function c() {
				function t(e, t) {
					return(t.y - e.y) / (t.x - e.x)
				}
				if(!f || !e(f).is(u.submenuSelector)) return 0;
				var n = d.offset(),
					i = {
						x: n.left,
						y: n.top - u.tolerance
					},
					r = {
						x: n.left + d.outerWidth(),
						y: i.y
					},
					o = {
						x: n.left,
						y: n.top + d.outerHeight() + u.tolerance
					},
					a = {
						x: n.left + d.outerWidth(),
						y: o.y
					},
					s = p[p.length - 1],
					c = p[0];
				if(!s) return 0;
				if(c || (c = s), c.x < n.left || c.x > a.x || c.y < n.top || c.y > a.y) return 0;
				if(h && s.x === h.x && s.y === h.y) return 0;
				var l = r,
					g = a;
				"left" === u.submenuDirection ? (l = o, g = i) : "below" === u.submenuDirection ? (l = a, g = o) : "above" === u.submenuDirection && (l = i, g = r);
				var m = t(s, l),
					y = t(s, g),
					b = t(c, l),
					w = t(c, g);
				return b > m && y > w ? (h = s, v) : (h = null, 0)
			}
			var l, u, d = e(this),
				f = null,
				p = [],
				h = null,
				g = null,
				m = 3,
				v = 300;
			l = {
				rowSelector: "> li",
				submenuSelector: "*",
				submenuDirection: "right",
				tolerance: 75,
				enter: e.noop,
				exit: e.noop,
				activate: e.noop,
				deactivate: e.noop,
				exitMenu: e.noop
			}, u = e.extend({}, l, t), d.on("mouseleave", i).find(u.rowSelector).on({
				mouseenter: r,
				mouseleave: o,
				click: function() {
					a(this)
				}
			}), e(document).mousemove(n)
		}
		e.fn.miMenuAim = function(e) {
			return this.each(function() {
				t.call(this, e)
			}), this
		}
	}(jQuery)
}, function(e, t) {
	e.exports = function(e) {
		var t = $(e),
			n = t.find("> li");
		n.each(function() {
			var e, t = $(this).find(".children-list").find("> li");
			$(this).find(".children").addClass("children-col-" + Math.ceil(t.length / 6)), t.length > 6 && (e = $(document.createDocumentFragment()), t.each(function(t) {
				t % 6 === 0 && e.append($('<ul class="children-list children-list-col children-list-col-' + Math.ceil((t + 1) / 6) + '"></ul>')), $(this).appendTo(e.find(".children-list-col-" + Math.ceil((t + 1) / 6)))
			}), $(this).find(".children").html(e))
		}), t.miMenuAim({
			activate: function(e) {
				$(e).addClass("category-item-active").find("img").each(function() {
					$(this).attr("src", $(this).attr("data-src"))
				})
			},
			deactivate: function(e) {
				$(e).removeClass("category-item-active")
			},
			exitMenu: function() {
				return !0
			}
		})
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div class="site-category"> <ul id="J_categoryList" class="site-category-list clearfix"> ',
			n = e;
		if(n)
			for(var i, r = -1, o = n.length - 1; o > r;) {
				i = n[r += 1], t += ' <li class="category-item"> <a class="title" href="' + i.data.url + '">' + i.data.title + '<i class="iconfont">&#xe623;</i></a> <div class="children clearfix"> <ul class="children-list clearfix"> ';
				var a = i.right;
				if(a)
					for(var s, c = -1, l = a.length - 1; l > c;) s = a[c += 1], t += " <li", s.is_buy && (t += ' class="star-goods"'), t += '> <a class="link" href="' + s.url + '"><img class="thumb" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png" data-src="' + s.img + '?width=80&height=80" width="40" height="40" alt="" /><span class="text">' + s.title + "</span></a> ", s.is_buy && (t += '<a class="btn btn-line-primary btn-small btn-buy" href="' + s.buy_url + '">选购</a>'), t += " </li> ";
				t += " </ul> </div> </li> "
			}
		return t += " </ul></div>"
	}
}, function(e, t) {
	! function(e) {
		function t(e) {
			for(var t = "", n = 0, i = e.length; i > n; n += 1) {
				var r, o;
				"object" == typeof e[n] ? (r = e[n].Key.replace(f, '<span class="keyword">' + f + "</span> "), o = e[n].Rst ? '<span class="result">约有' + e[n].Rst + "件</span>" : "", t += '<li data-key="' + e[n].Key + '"><a href="//search.mi.com/search_' + encodeURIComponent(e[n].Key) + '">' + r + o + "</a></li>") : (r = e[n].replace(f, '<span class="keyword">' + f + "</span> "), o = "", t += '<li data-key="' + e[n] + '"><a href="//search.mi.com/search_' + encodeURIComponent(e[n]) + '">' + r + o + "</a></li>")
			}
			s.removeClass("hide").children(".result-list").html(t)
		}

		function n(e) {
			var t = s.find("li"),
				n = s.find(".active").index() || 0,
				i = t.length - 1;
			if(38 === e) {
				if(n -= 1, 0 > n) return n = 0, !1;
				t.eq(n).addClass("active").siblings().removeClass("active"), c.val(t.eq(n).attr("data-key"))
			} else if(40 === e) {
				if(n += 1, n > i) return n = i, !1;
				t.eq(n).addClass("active").siblings().removeClass("active"), c.val(t.eq(n).attr("data-key"))
			}
		}

		function i() {
			s.addClass("hide").children(".result-list").html("")
		}

		function r(n) {
			n && e.ajax({
				type: "GET",
				url: MI.GLOBAL_CONFIG.searchSite + "/search/expand?keyword=" + encodeURIComponent(n),
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				jsonpCallback: "xmsearch",
				cache: !0,
				success: function(e) {
					e.length > 0 ? c.val() && t(e) : i()
				}
			})
		}

		function o() {
			a.on("submit", function() {
				var t = e.trim(c.val());
				return "" !== t && (t = t.replace(/[\-_'=+|\\\/]/g, " "), window.location.href = MI.GLOBAL_CONFIG.searchSite + "/search_" + encodeURIComponent(t)), !1
			})
		}
		var a = e("#J_searchForm"),
			s = e('<div id="J_keywordList" class="keyword-list hide"><ul class="result-list"></ul></div>'),
			c = a.find("#search"),
			l = a.find(".search-hot-words"),
			u = {},
			d = 200,
			f = null,
			p = 0,
			h = 0;
		if(a.length) {
			c = a.find("#search");
			try {
				u = e.parseJSON(c.data("search-config").replace(/'/g, '"'))
			} catch(g) {}
			a.append(s), c.on({
				focus: function() {
					p && clearTimeout(p), l.fadeOut(200), a.addClass("search-form-focus"), !e(this).val() && u.defaultWords && t(u.defaultWords)
				},
				blur: function() {
					"" === e.trim(c.val()) && e(".search-hot-words").fadeIn(200), p = setTimeout(function() {
						a.removeClass("search-form-focus"), s.addClass("hide")
					}, 200)
				},
				keyup: function(i) {
					0 === e.trim(e(this).val()).length && u.defaultWords && (f = null, t(u.defaultWords)), n(i.which), clearTimeout(h), 40 !== i.which && 38 !== i.which && (h = setTimeout(function() {
						f = c.val(), r(f)
					}, d))
				}
			}), o()
		}
	}(jQuery)
}, function(e, t, n) {
	n(32), MI.addShopCart = function(e, t, n, i) {
		if(e && "function" == typeof t) {
			var r = MI.GLOBAL_CONFIG.cartSite + "/cart/add/" + e;
			$.ajax({
				url: r,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: i ? i : "",
				error: function(e, t, n) {
					var o = i ? i : {};
					o.locationHref = window.location.href, o.errorData = e, o.errorType = t, o.error = n, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(r), JSON.stringify(o)])
				},
				success: function(i) {
					var r = function() {
						return n && $(n).removeAttr("data-disabled"), 1 !== i.code ? void MI.alert({
							msg: i.msg
						}) : (t(i, n), void MI.updateMiniCart())
					};
					201 === i.code ? (MI.addCartCaptcha({
						gid: e,
						callback: t,
						elm: n,
						captchaData: i.data
					}), $(n).removeAttr("data-disabled")) : r()
				}
			})
		}
	}, MI.addCartCaptcha = function(e) {
		if(e) {
			var t = $.extend({}, e),
				i = $.noop,
				r = $("#J_modalAddCartCaptcha"),
				o = "",
				a = n(33);
			r.length && r.remove(), "drag" === t.captchaData.captcha_type && (o = a({
				captchaType: "drag"
			}), $("body").append(o), r = $("#J_modalAddCartCaptcha"), i = new MI.miDragCaptcha, i.init({
				captchaWrapper: r.find(".drag-captcha-wrapper"),
				submitCallback: function(e) {
					"success" === e.message && (r.modal("hide"), MI.addShopCart(t.gid, t.callback, t.elm, {
						captcha_type: t.captchaData.captcha_type,
						anti_token: t.captchaData.anti_token,
						captcha_token: e.data.token
					}))
				}
			}), $("#J_addCartCaptchaSubmit").off().on("click", function() {
				i.checkSubmit()
			}), r.modal({
				show: !0,
				backdrop: "static"
			}))
		}
	}, MI.bigtapAddCart = function(e) {
		var t = {
			obj: ".xmAddShopCart",
			modeType: "",
			before: null,
			callback: null,
			overCallback: null,
			beforeQueue: null,
			storage: "000",
			sourceVal: "bigtap"
		};
		$.extend(t, e || {}), $(document).off(".bigtap").on("click.bigtap", t.obj, function() {
			var e = $(this).attr("data-gid"),
				n = $(this).attr("data-disabled") || "false",
				i = $(this).attr("data-package") || "false",
				r = $.cookie("cUserId") || $.cookie("userId"),
				o = $.cookie("xm_order_btauth");
			if("false" === n) {
				if($(this).attr("data-disabled", "true"), "function" == typeof t.before && t.before(), !e || "true" === i || "function" != typeof t.callback) return !0;
				MI.GLOBAL_CONFIG.damiaoGoodsId && $.inArray(e, MI.GLOBAL_CONFIG.damiaoGoodsId) >= 0 ? r && o ? MI.bigtap.init({
					gid: e,
					modeType: t.modeType,
					callback: t.callback,
					obj: $(this),
					overCallback: t.overCallback,
					beforeQueue: t.beforeQueue,
					storage: t.storage,
					sourceVal: t.sourceVal
				}) : window.location.href = r ? MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.addShopCart(e, t.callback, $(this))
			}
			return !1
		})
	}
}, function(e, t) {
	MI.miDragCaptcha = function() {
		this.options = {
			getUrl: "//cap.m.mi.com/api/init",
			authUrl: "//cap.m.mi.com/api/verify",
			captchaWrapper: ".J_dragCaptchaBox",
			line: [],
			x: "",
			captchaData: {},
			captchaBlockTotal: 25,
			captchaSize: {
				w: 250,
				h: 130
			},
			captchaBlockSize: {
				w: 0,
				h: 0
			},
			captchaPieceSize: {
				w: 50,
				h: 56
			},
			checkSucc: !1,
			submitCallback: $.noop
		}
	}, MI.miDragCaptcha.prototype = {
		constructor: MI.miDragCaptcha,
		init: function(e) {
			var t = this;
			"object" == typeof e && (t.options = $.extend(t.options, e), t.options.captchaBlockSize.w = t.options.captchaSize.w / t.options.captchaBlockTotal, t.options.captchaBlockSize.h = t.options.captchaSize.h / 2, t.refresh())
		},
		refresh: function() {
			var e = this;
			$.ajax({
				url: e.options.getUrl,
				dataType: "jsonp",
				jsonp: "callback",
				jsonpCallback: "cb_get",
				success: function(t) {
					t && (e.options.captchaData = t, e.createCaptcha())
				}
			})
		},
		createCaptcha: function() {
			var e = this;
			e.options.posArr = new Function("return " + e.options.captchaData.pos)();
			var t = e.createImg(e.options.captchaData.img1),
				n = e.createImg(e.options.captchaData.img0),
				i = $(e.options.captchaWrapper);
			if(i.length) {
				i.hide();
				var r = '<div class="drag-captcha-box" id="J_dragCaptchaBox">' + t + "</div>";
				r += '<div class="drag-captcha-piece" id="J_dragCaptchaPiece"></div>', r += '<div class="drag-captcha-box drag-captcha-bg-box" id="J_dragCaptchaBg">' + n + "</div>", r += '<i title="刷新验证码" class="iconfont drag-captcha-refresh" id="J_dragCaptchaRefresh">&#xe62a;</i>', r += '<div class="drag-captcha-control" id="J_dragCaptchaControlBox">', r += '<div class="drag-captcha-msg" id="J_dragCaptchaControlMsg">拖动滑块完成上方拼图</div>', r += '<div class="handle" id="J_dragCaptchaHandle"></div></div>', r += '<div class="drag-captcha-loading" id="J_dragCaptchaLoading"><i class="iconfont">&#xe62a;</i>提交中...</div>', r += '<div class="drag-captcha-loading-backdrop" id="J_dragCaptchaLoadingBackdrop"></div>', i.html(r).css({
					position: "relative",
					width: e.options.captchaSize.w + "px",
					overflow: "hidden"
				}), i.find("#J_dragCaptchaBox").css({
					width: e.options.captchaSize.w + "px",
					height: e.options.captchaSize.h + "px"
				}), i.find("#J_dragCaptchaPiece").hide().css({
					top: e.options.captchaData.height + "px",
					width: e.options.captchaPieceSize.w + "px",
					height: e.options.captchaPieceSize.h + "px",
					"background-image": "url(" + e.options.captchaData.img2 + ")"
				}), i.find("#J_dragCaptchaBg").css({
					width: e.options.captchaSize.w + "px",
					height: e.options.captchaSize.h + "px"
				}), i.find("#J_dragCaptchaTipbar").css({
					top: e.options.captchaSize.h - 24 + "px"
				}), i.show(), e.options.checkSucc = !1, e.eventInit(), e.getMouseTrace()
			}
		},
		eventInit: function() {
			var e = this,
				t = $(e.options.captchaWrapper);
			if(t.length) {
				var n = t.find("#J_dragCaptchaHandle"),
					i = t.find("#J_dragCaptchaPiece"),
					r = $("#J_dragCaptchaControlMsg"),
					o = 0,
					a = 0,
					s = 0,
					c = 0,
					l = !1;
				n.on("mousedown", function(n) {
					e.options.checkSucc || (o = $(this).position().left, a = n.pageX, s = n.pageY, c = (new Date).getTime(), l = !0, e.options.line = [], $(this).addClass("handle-active"), t.find("#J_dragCaptchaPiece").fadeIn(300), t.find("#J_dragCaptchaBg").fadeOut(300), r.fadeOut(300))
				});
				var u = 0,
					d = 0,
					f = 0;
				$(document).on("mousemove.dragCaptcha", function(t) {
					l && (u = t.pageX, d = parseInt(u) - parseInt(a), f = parseInt(o) + d, 0 > f && (f = 0), f >= 210 && (f = 210), n.css({
						left: f + "px"
					}), i.css({
						left: f + "px"
					}), e.recordLine(d, s - t.pageY, (new Date).getTime() - c))
				}).on("mouseup.dragCaptcha", function(i) {
					l && (l = !1, u = d = f = 0, t.find("#J_dragCaptchaBg").fadeIn(300), e.options.x = i.pageX - a, n.removeClass("handle-active"), e.checkSubmit())
				}), $("#J_dragCaptchaRefresh").one("click", function() {
					e.refresh()
				})
			}
		},
		getMouseTrace: function() {
			var e = this,
				t = $("#J_dragCaptchaHandle"),
				n = {
					x: t.offset().left,
					y: t.offset().top
				},
				i = {
					x: 0,
					y: 0
				},
				r = (new Date).getTime();
			e.options.mouseTrace = [], $(document).on("mousemove.trace", function(t) {
				i.x = t.pageX, i.y = t.pageY, i.x < n.x && i.y < n.y || e.options.mouseTrace.push(i.x + "," + i.y + "," + ((new Date).getTime() - r))
			})
		},
		checkSubmit: function() {
			var e = this;
			if(e.options.line.length) {
				var t = $(e.options.captchaWrapper).find("#J_dragCaptchaHandle"),
					n = $(e.options.captchaWrapper).find("#J_dragCaptchaPiece"),
					i = $("#J_dragCaptchaControlMsg"),
					r = $("#J_dragCaptchaLoadingBackdrop"),
					o = $("#J_dragCaptchaLoading");
				r.fadeIn(200), o.fadeIn(200), e.options.line.length > 50 && (e.options.line = e.options.line.slice(-50)), e.options.mouseTrace.length > 200 && (e.options.mouseTrace = e.options.mouseTrace.slice(-200));
				var a = {
					x: e.options.x,
					hash: e.options.captchaData.hash,
					line: e.options.line.join(";"),
					trace: e.options.mouseTrace.join(";")
				};
				$.ajax({
					url: e.options.authUrl,
					data: a,
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "cb_verify",
					success: function(a) {
						a && ("function" == typeof e.options.submitCallback && e.options.submitCallback(a), r.hide(), o.hide(), "success" === a.message ? (n.fadeOut(), e.options.checkSucc = !0) : (n.animate({
							left: "0"
						}, 500).fadeOut(), t.animate({
							left: 0
						}, 500), i.fadeIn(300)))
					}
				})
			}
		},
		createImg: function(e) {
			var t = this,
				n = "",
				i = "";
			return $.each(t.options.posArr, function(r) {
				i = "-" + t.options.posArr[r] % t.options.captchaBlockTotal * t.options.captchaBlockSize.w + "px " + (t.options.posArr[r] > t.options.captchaBlockTotal - 1 ? "-" + t.options.captchaSize.h / 2 : 0) + "px", n += '<div style="float:left; width:' + t.options.captchaBlockSize.w + "px; height:" + t.options.captchaBlockSize.h + "px; background: url(" + e + ") no-repeat " + i + ';"></div>'
			}), n
		},
		recordLine: function(e, t, n) {
			var i = this;
			i.options.line.push(Math.round(e) + "," + Math.round(t) + "," + n)
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "";
		return t += "drag" === e.captchaType ? '<div class="modal fade modal-hide modal-addcart-captcha modal-addcart-captcha-drag" id="J_modalAddCartCaptcha">' : '<div class="modal fade modal-hide modal-addcart-captcha" id="J_modalAddCartCaptcha">', t += ' <div class="modal-header"> <span class="title">验证码</span> <a class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></a> </div> <div class="modal-body"> ', "chinese" === e.captchaType && (t += ' <div class="captcha-img"></div> <div class="form-section"> <label class="input-label" for="captcha-code">验证码</label> <input class="input-text" type="text" id="captcha-code" name="captcha-code" autocomplete="off" /> </div> <div class="form-section"> <a href="javascript:void(0);" class="captcha-refresh">看不清，换一张</a> </div> <button class="btn btn-primary" id="J_addCartCaptchaSubmit">提交</button> '), t += " ", "colorfont" === e.captchaType && (t += ' <div class="captcha-question">' + e.question + '</div> <div class="captcha-img"></div> <div class="form-section"> <label class="input-label" for="captcha-code">验证码</label> <input class="input-text" type="text" id="captcha-code" name="captcha-code" autocomplete="off" /> </div> <div class="form-section"> <a href="javascript:void(0);" class="captcha-refresh">看不清，换一张</a> </div> <button class="btn btn-primary" id="J_addCartCaptchaSubmit">提交</button> '), t += " ", "drag" === e.captchaType && (t += ' <div class="drag-captcha-wrapper"></div> '), t += " </div></div>"
	}
}, function(module, exports, __webpack_require__) {
	__webpack_require__(35), MI.bigtap = {
		init: function(e) {
			var t = this;
			t.config = {
				gid: null,
				callback: null,
				obj: null,
				beforeQueue: null,
				overCallback: null,
				sourceVal: "bigtap",
				modalQueue: "#J_bigtapQueue",
				modalError: "#J_bigtapError",
				modalSoldout: "#J_bigtapSoldout",
				showMode: !0,
				modeType: "",
				modeVal: "",
				modeTime: "",
				storage: "",
				jssignUrl: "",
				salt: "",
				jsSignResult: {
					cstr1: "0",
					cstr2: "0",
					event: "",
					b: "",
					r: ""
				}
			}, t.inTheQueue = !1, $.extend(t.config, e), t.getHdInfo(), $("#J_bigtapRetry").off(".bigtapRetry").on("click.bigtapRetry", function() {
				t.startQueue(), t.getHdget()
			}), $("#J_bigtapModeReload").off().on("click", function() {
				$("#J_bigtapModeLoading").find("img").show(), $(this).addClass("hide"), t.getMode()
			}), $("#J_bigtapModeInput").off().on("keyup", function(e) {
				$("#J_bigtapModeSubmit").removeClass("btn-gray").addClass("btn-primary"), 13 === e.which && $("#J_bigtapModeSubmit").trigger("click")
			}), $("#J_bigtapModeSubmit").off().on("click", function() {
				if($(this).hasClass("btn-gray")) return !1;
				var e = $("#J_bigtapModeInput").val().length;
				e > 0 && t.checkMode()
			})
		},
		getHdInfo: function() {
			var e = this;
			$.ajax({
				type: "GET",
				url: MI.GLOBAL_CONFIG.damiaoSite + "hdinfo/cn",
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				jsonpCallback: "hdinfo",
				data: {
					storage: e.config.storage,
					m: 1,
					product: "presales_bigtap" === e.config.sourceVal ? e.config.gid : "",
					source: "presales_bigtap" === e.config.sourceVal ? e.config.sourceVal : ""
				},
				timeout: 1e4,
				error: function(t, n, i) {
					var r = {
						storage: e.config.storage,
						m: 1,
						product: "presales_bigtap" === e.config.sourceVal ? e.config.gid : "",
						source: "presales_bigtap" === e.config.sourceVal ? e.config.sourceVal : ""
					};
					r.locationHref = window.location.href, r.errorData = t, r.errorType = n, r.error = i;
					var o = MI.GLOBAL_CONFIG.damiaoSite + "hdinfo/cn";
					_msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(o), JSON.stringify(r)]), e.getInfoError()
				},
				success: function(t) {
					t ? (e.config.modeType = t.dbe5a2, e.config.salt = t.status[e.config.gid] ? t.status[e.config.gid].salt : "", e.config.jssignUrl = t.jsignurl, e.config.mi6Sign = e.mi6Sign({
						s: t.script,
						w: t.willBeChecked
					}), e.checkShowMode()) : e.getInfoError()
				}
			})
		},
		getInfoError: function() {
			MI.alert({
				msg: "抱歉！网络超时，请重试！"
			})
		},
		checkShowMode: function() {
			var e = this;
			"3" === e.config.modeType && (e.config.showMode = !1), e.config.showMode === !0 ? (e.getMode(), $("#J_bigtapModeBox").modal({
				show: !0,
				backdrop: "static"
			})) : e.beforeHdget()
		},
		getMode: function() {
			var e = this,
				t = MI.GLOBAL_CONFIG.damiaoSite + "getmode/cn";
			if("1" === e.config.modeType) {
				var n = (new Date).getTime();
				$("#J_bigtapModeContent").html('<img src="' + t + "?product=" + e.config.gid + "&_=" + n + '">'), $("#J_bigtapModeAction").removeClass("hide"), $("#J_bigtapModeLoading").addClass("hide")
			} else $.ajax({
				type: "GET",
				url: t,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				jsonpCallback: "getmode",
				data: {
					product: e.config.gid,
					m: 1,
					storage: e.config.storage
				},
				timeout: 1e4,
				error: function(n, i, r) {
					var o = {
						product: e.config.gid,
						m: 1,
						storage: e.config.storage
					};
					o.locationHref = window.location.href, o.errorData = n, o.errorType = i, o.error = r, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(t), JSON.stringify(o)]), e.getmodeError()
				},
				success: function(t) {
					t ? e.formatMode(t) : e.getmodeError()
				}
			})
		},
		getmodeError: function() {
			$("#J_bigtapModeLoading").find("img").hide(), $("#J_bigtapModeReload").removeClass("hide")
		},
		formatMode: function(e) {
			var t = this,
				n = "",
				i = $("#J_bigtapModeContent");
			if(t.config.modeTime = e.T, "0" === t.config.modeType) i.html('<img src="' + e.path + '">');
			else if("2" === t.config.modeType) n = '<p class="q">' + e.Q + '</p><p class="d">' + e.D + "</p>", i.html(n);
			else if("4" === t.config.modeType) n = '<p class="q" >请填写 <span style="color: ' + e.Q.split("_")[1] + '">' + e.Q.split("_")[0] + '</span> 部分的数字</p><p class="d"><img src="data:image/jpeg;base64,' + e.D + '"></p>', n += '<a href="javascript:void(0);" class="refresh" id="J_bigtapModeRefresh">看不清，换一张</a>', i.html(n), $("#J_bigtapModeRefresh").one("click", function() {
				$("#J_bigtapModeAction").addClass("hide"), $("#J_bigtapModeLoading").removeClass("hide"), t.getMode()
			});
			else if("5" === t.config.modeType) {
				var r = e.Q.split("_");
				$("#J_bigtapModeInput, #J_bigtapModeSubmit").hide(), i.html('<div class="img-q clearfix"><span>请点击下图中的</span><span id="J_bigtapModeAnswer"></span><span>汉字</span></div><div class="img-d" id="J_bigtapModeImg"></div><a id="J_bigtapModeRefresh" href="javascript:;">换一张</a>'), t.bigtapCaptcha = new MI.clickImgCaptcha;
				var o = parseInt(r[2]);
				t.bigtapCaptcha.init({
					getUrl: e.D,
					captchaWrapper: "#J_bigtapModeImg",
					captchaAnswerWrapper: "#J_bigtapModeAnswer",
					captchaSize: {
						w: parseInt(r[3].split("x")[0]),
						h: parseInt(r[3].split("x")[1])
					},
					captchaAnswerSize: {
						w: parseInt(r[4].split("x")[0]),
						h: parseInt(r[4].split("x")[1])
					},
					clickMax: o,
					isModal: !0,
					afterClick: function() {
						var e = t.bigtapCaptcha.getAnswerData();
						if(e.length >= o) {
							var n = "";
							$.each(e, function(t, i) {
								n += i.x + "," + i.y, t < e.length - 1 && (n += "_")
							}), t.checkMode(n)
						}
					}
				}), t.bigtapCaptcha.clickEvent(), $("#J_bigtapModeRefresh").one("click", function() {
					$("#J_bigtapModeTip").html(""), t.bigtapCaptcha = null, t.getMode()
				})
			}
			$("#J_bigtapModeAction").removeClass("hide"), $("#J_bigtapModeLoading").addClass("hide")
		},
		checkMode: function(e) {
			var t = this,
				n = $("#J_bigtapModeTip"),
				i = "请输入正确的验证码",
				r = "验证超时，请重新验证",
				o = "正在验证答案，请稍后...",
				a = "",
				s = $("#J_bigtapModeInput"),
				c = $("#J_bigtapModeSubmit");
			a = e ? e : $.trim(s.val());
			var l = MI.GLOBAL_CONFIG.damiaoSite + "getmode/cn",
				u = function(e) {
					c.removeClass("btn-primary"), n.html(e && e > 0 ? r : i), s.focus(), "5" === t.config.modeType && t.getMode()
				};
			a.length > 50 ? u() : (n.html(o), c.addClass("btn-gray"), $.ajax({
				type: "get",
				url: l,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				jsonpCallback: "getmode",
				data: {
					product: t.config.gid,
					vecode: a,
					tsort: t.config.modeTime,
					m: 1,
					storage: t.config.storage
				},
				timeout: 3e4,
				error: function(e, i, o) {
					var s = {
						product: t.config.gid,
						vecode: a,
						tsort: t.config.modeTime,
						m: 1,
						storage: t.config.storage
					};
					s.locationHref = window.location.href, s.errorData = e, s.errorType = i, s.error = o, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(l), JSON.stringify(s)]), n.html(r), "5" === t.config.modeType && t.getMode()
				},
				success: function(e) {
					1 === e.code ? ($("#J_bigtapModeBox").on("hide.bs.modal", function() {
						n.html(""), c.addClass("btn-gray").removeClass("btn-primary"), s.val(""), $("#J_bigtapModeLoading").removeClass("hide").find("img").show(), $("#J_bigtapModeReload").addClass("hide"), $("#J_bigtapModeContent").html("")
					}).modal("hide"), t.config.modeVal = a, t.beforeHdget()) : 0 === e.code ? u(0) : 2 === e.code && (u(2), t.getMode())
				}
			}))
		},
		beforeHdget: function() {
			var e = this;
			"function" == typeof e.config.beforeQueue && e.config.beforeQueue(), e.startQueue(), e.config.salt && e.config.jssignUrl ? $.ajax({
				url: e.config.jssignUrl,
				dataType: "script",
				cache: !0,
				timeout: 1e4,
				error: function(t, n, i) {
					var r = {};
					r.locationHref = window.location.href, r.errorData = t, r.errorType = n, r.error = i, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(e.config.jssignUrl), JSON.stringify(r)]), e.getHdget()
				},
				success: function() {
					"function" == typeof window.jssign && (e.config.jsSignResult = window.jssign(e.config.salt, e.config.gid)), e.getHdget()
				}
			}) : e.getHdget()
		},
		getHdget: function() {
			var e = this,
				t = "cn" + e.config.gid,
				n = MI.GLOBAL_CONFIG.damiaoSite + "hdget/cn";
			$.ajax({
				type: "GET",
				url: n,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					source: e.config.sourceVal,
					product: e.config.gid,
					addcart: 1,
					m: 1,
					fk: e.config.modeVal,
					tsort: e.config.modeTime,
					storage: e.config.storage,
					cstr1: e.config.jsSignResult.cstr1,
					cstr2: e.config.jsSignResult.cstr2,
					event: e.config.jsSignResult.ev,
					r: e.config.jsSignResult.r,
					b: e.config.jsSignResult.b,
					salt: e.config.salt,
					ans: e.config.mi6Sign
				},
				jsonpCallback: t,
				timeout: 3e4,
				error: function(t, i, r) {
					var o = {
						source: e.config.sourceVal,
						product: e.config.gid,
						addcart: 1,
						m: 1,
						fk: e.config.modeVal,
						tsort: e.config.modeTime,
						storage: e.config.storage,
						cstr1: e.config.jsSignResult.cstr1,
						cstr2: e.config.jsSignResult.cstr2,
						event: e.config.jsSignResult.ev,
						r: e.config.jsSignResult.r,
						b: e.config.jsSignResult.b,
						salt: e.config.salt,
						ans: e.config.mi6Sign
					};
					return o.locationHref = window.location.href,
						o.errorData = t, o.errorType = i, o.error = r, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(n), JSON.stringify(o)]), e.inTheQueue ? (e.stopQueue(), void $(e.config.modalError).modal({
							show: !0,
							backdrop: "static"
						}).removeClass("hide")) : !1
				},
				success: function(t) {
					var n = t.status,
						i = n[e.config.gid].hdurl,
						r = n[e.config.gid].hdstart === !1 && n[e.config.gid].hdstop === !0 ? !0 : !1,
						o = t.d22a51 ? 1e3 * t.d22a51 : 5e3,
						a = n[e.config.gid].tips;
					return e.inTheQueue ? (t.login === !1 && (location.href = MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href), r === !0 ? (e.stopQueue(), e.showSoldout(a), "function" == typeof e.config.overCallback && e.config.overCallback(e.config.obj), !1) : (e.getHdgetTimer && clearTimeout(e.getHdgetTimer), void(i ? e.getShopCart(i) : (e.inTheQueue || e.startQueue(), e.getHdgetTimer = setTimeout(function() {
						e.getHdget()
					}, o))))) : !1
				}
			})
		},
		getShopCart: function(e) {
			if(!e) return !1;
			var t = this,
				n = MI.GLOBAL_CONFIG.cartSite + "/cart/add/" + t.config.gid;
			$.ajax({
				type: "GET",
				url: n,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					source: t.config.sourceVal,
					token: e
				},
				error: function(i, r, o) {
					var a = {
						source: t.config.sourceVal,
						token: e
					};
					a.locationHref = window.location.href, a.errorData = i, a.errorType = r, a.error = o, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(n), JSON.stringify(a)])
				},
				success: function(e) {
					return t.stopQueue(), 1 !== e.code ? void MI.alert({
						msg: e.msg
					}) : ("function" == typeof t.config.callback && t.config.callback(e, t.config.obj), void MI.updateMiniCart())
				}
			})
		},
		startQueue: function() {
			var e = this;
			$(e.config.modalError).modal("hide").addClass("hide"), e.modalQueueTimer = setTimeout(function() {
				$(e.config.modalQueue).modal({
					show: !0,
					backdrop: "static"
				}).on("hidden.bs.modal", function() {
					e.stopQueue()
				}), e.queueAnimate(), e.modalQueueTimer && clearTimeout(e.modalQueueTimer)
			}, 1e3), e.inTheQueue = !0
		},
		stopQueue: function() {
			var e = this;
			e.modalQueueTimer && clearTimeout(e.modalQueueTimer), $(e.config.modalQueue).modal("hide"), e.inTheQueue = !1, e.getHdgetTimer && clearTimeout(e.getHdgetTimer), e.bigtapQueueTipTimer && clearTimeout(e.bigtapQueueTipTimer), e.bigtapQueueAnimateTimer && clearInterval(e.bigtapQueueAnimateTimer), e.config.obj.removeAttr("data-disabled")
		},
		showSoldout: function(e) {
			var t = this,
				n = "//rec.www.mi.com/bigtap/get",
				i = __webpack_require__(36),
				r = "",
				o = __webpack_require__(37),
				a = {
					title: "很遗憾，你本次未能买到<br>人真是太多了",
					desc: "别灰心，可以关注小米商城app、微博，或者微信，<br>我们会及时告知你下一轮的开售时间。"
				},
				s = function() {
					$("body").append(o(a)), $(t.config.modalSoldout).modal("show").one("hidden.bs.modal", function() {
						$(this).remove()
					})
				};
			$(t.config.modalSoldout).length && $(t.config.modalSoldout).remove(), e && e.title && e.des && (a.title = e.title, a.desc = e.des), s(), $.ajax({
				url: n,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				data: {
					goods_id: t.config.gid
				},
				timeout: 5e3,
				error: function(e, t, i) {
					var r = {};
					r.locationHref = window.location.href, r.errorData = e, r.errorType = t, r.error = i, _msq.push(["trackEvent", "AJAX_ERROR", encodeURIComponent(n), JSON.stringify(r)]), s()
				},
				success: function(e) {
					e && 0 === e.code && e.data.length && (r = i(e.data), $(t.config.modalSoldout).removeClass("modal-bigtap-soldout-norec"), $("#J_bigtapRecommentList").html(r))
				}
			}), _msq.push(["trackEvent", "大秒流程_商品售罄提示", t.config.gid, "pcpid"])
		},
		queueAnimate: function() {
			var e = this,
				t = 0,
				n = $(e.config.modalQueue).find(".queue-tip"),
				i = $(e.config.modalQueue).find(".poster"),
				r = n.length,
				o = function() {
					1 >= r || (n.hide(), n.eq(t).show(), i.eq(t).addClass("active").siblings().removeClass("active"), t += 1, t >= r && (t = 0), e.bigtapQueueTipTimer && clearTimeout(e.bigtapQueueTipTimer), e.bigtapQueueTipTimer = setTimeout(o, 8e3))
				};
			setTimeout(o, 20)
		},
		mi6Sign: function(d) {
			if(/^eval/.test(d.s)) return eval(d.s), d.w ? eval(d.w) || "" : "";
			if(/^var/.test(d.s)) return eval(d.s), d.w ? eval(d.w) || "" : "";
			if(!d.s || "null" === d.s || "undefined" === d.s) return "";
			if("number" != typeof d.s) {
				if(/^"_/.test(d.s)) {
					var m = eval(d.s);
					return m ? "string" !== d.w && d.w ? m[2] : m[1] : ""
				}
				if(/^\[/.test(d.s)) {
					var arr = eval(d.s);
					if(arr) {
						if(arr[d.w]) return arr[d.w];
						var u = $.cookie("userId").match(/\d/);
						if(u || (u = $.cookie("xmuuid").match(/\d/)), !u) return "";
						switch(u[0]) {
							case "1":
							case "2":
							case "3":
								return arr[0];
							case "4":
							case "5":
							case "6":
								return arr[1];
							case "7":
							case "8":
							case "9":
								return arr[2];
							default:
								return ""
						}
						return arr[0]
					}
					return ""
				}
				return ""
			}
			switch(d.w) {
				case "octal":
					return d.s.toString(8);
				case "hex":
					return d.s.toString(16);
				default:
					return d.s
			}
		}
	}
}, function(e, t) {
	MI.clickImgCaptcha = function() {
		this.options = {
			getUrl: "//captcha.hd.mi.com/captcha?style=clickfont",
			authUrl: "//captcha.hd.mi.com/captcha/auth",
			clickIcon: "//c1.mifile.cn/f/i/16/base/captcha-icon.png",
			captchaWrapper: ".J_clickImgCaptcha",
			captchaAnswerWrapper: ".J_clickImgCaptchaAnswer",
			captchaOffset: {
				x: 0,
				y: 0
			},
			captchaSize: {
				w: 300,
				h: 150
			},
			clickIconSize: {
				w: 40,
				h: 40
			},
			captchaAnswerSize: {
				w: 125,
				h: 50
			},
			clickIndex: 0,
			clickMax: 6,
			clickTotal: 0,
			clickPosData: {},
			isModal: !1,
			$captcha: "",
			submitCallback: $.noop,
			afterClick: $.noop,
			afterCancle: $.noop
		}
	}, MI.clickImgCaptcha.prototype = {
		constructor: MI.clickImgCaptcha,
		init: function(e) {
			var t = this;
			"object" == typeof e && (t.options = $.extend(t.options, e)), t.refresh()
		},
		clickEvent: function() {
			var e = this,
				t = 0,
				n = 0,
				i = {
					x: 0,
					y: 0
				},
				r = "";
			e.options.$captcha.off().on("click", function(o) {
				return e.options.clickTotal >= e.options.clickMax ? !1 : (e.options.captchaOffset.x = e.options.$captcha.offset().left, e.options.captchaOffset.y = e.options.$captcha.offset().top, t = o.pageX, n = o.pageY, i.x = parseInt(t - e.options.captchaOffset.x), i.y = parseInt(n - e.options.captchaOffset.y), e.options.clickPosData[e.options.clickIndex] = {
					x: i.x,
					y: i.y
				}, r = $("<img />").attr({
					"data-index": e.options.clickIndex,
					src: e.options.clickIcon,
					"class": "J_clickImgCaptchaIcon"
				}).css({
					position: "absolute",
					left: i.x - e.options.clickIconSize.w / 2 + "px",
					top: i.y - e.options.clickIconSize.h / 2 + "px",
					width: e.options.clickIconSize.w + "px",
					height: e.options.clickIconSize.h + "px"
				}), $(e.options.captchaWrapper).append(r), e.options.clickIndex += 1, e.options.clickTotal += 1, void("function" == typeof e.options.afterClick && e.options.afterClick()))
			});
			var o = 0;
			$(e.options.captchaWrapper).on("click", ".J_clickImgCaptchaIcon", function() {
				o = $(this).attr("data-index"), $(this).remove(), delete e.options.clickPosData[o], e.options.clickTotal > 0 ? e.options.clickTotal -= 1 : e.options.clickTotal = 0, "function" == typeof e.options.afterCancle && e.options.afterCancle()
			})
		},
		refresh: function() {
			var e = this,
				t = e.options.getUrl,
				n = '<img src="' + t + '" width="' + e.options.captchaSize.w + '" height="' + (e.options.captchaSize.h + e.options.captchaAnswerSize.h) + '">';
			$(e.options.captchaWrapper).css({
				width: e.options.captchaSize.w + "px",
				height: e.options.captchaSize.h + "px",
				position: "relative",
				overflow: "hidden"
			}).html(n), $(e.options.captchaAnswerWrapper).css({
				width: e.options.captchaAnswerSize.w + "px",
				height: e.options.captchaAnswerSize.h + "px",
				position: "relative",
				overflow: "hidden"
			}).html(n).find("img").css({
				position: "absolute",
				left: 0,
				bottom: 0
			}), e.options.$captcha = $(e.options.captchaWrapper).find("img"), e.options.clickIndex = 0, e.options.clickTotal = 0, e.options.clickPosData = {}, e.options.isModal || e.clickEvent()
		},
		getAnswerData: function() {
			var e = this,
				t = [];
			return $.each(e.options.clickPosData, function(e, n) {
				t.push(n)
			}), t
		},
		checkSubmit: function() {
			var e = this,
				t = e.options.authUrl + "?r=" + Math.random();
			if(e.options.clickTotal <= 0) return alert("请按照提示选择图片!"), !1;
			var n = JSON.stringify(e.getAnswerData());
			$.ajax({
				url: t,
				data: {
					answer: n
				},
				dataType: "jsonp",
				jsonp: "callback",
				timeout: 1e4,
				error: function() {
					alert("验证码提交时发生错误，请重试")
				},
				success: function(t) {
					(0 !== t.data.code || t.data.result !== !0) && e.refresh(), "function" == typeof e.options.submitCallback && e.options.submitCallback(t)
				}
			})
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = "",
			n = e;
		if(n)
			for(var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += '<li> <a href="' + i.link + '?form=bigtap" class="pic" onclick="_msq.push([\'trackEvent\', \'' + i.title + "', '" + i.link + "?form=bigtap', 'pcpid']);\"> <img src=\"" + i.image + '" alt="' + i.title + '"> </a> <div class="info"> <h3 class="title">' + i.title + '</h3> <p class="desc">' + i.desc + '</p> <a href="' + i.link + '?form=bigtap" class="link" onclick="_msq.push([\'trackEvent\', \'' + i.title + "', '" + i.link + "?form=bigtap', 'pcpid']);\">立即购买&gt;</a> </div></li>";
		return t
	}
}, function(e, t) {
	e.exports = function(e) {
		var t = '<div id="J_bigtapSoldout" class="modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec"> <span class="close" data-dismiss="modal" ><i class="iconfont">&#xe602;</i></span> <div class="modal-body "> <div class="content clearfix"> <span class="mitu"></span> <p class="title">' + e.title + '</p> <p class="desc">' + e.desc + '</p> </div> <div class="bigtap-recomment-goods" > <div class="hd"><span>这些产品也不错，而且有现货哦！</span></div> <ul class="clearfix" id="J_bigtapRecommentList"> </ul> </div> </div></div>';
		return t
	}
}]);