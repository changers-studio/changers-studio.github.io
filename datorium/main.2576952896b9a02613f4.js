/*! For license information please see main.2576952896b9a02613f4.js.LICENSE.txt */
!(function () {
	var e = {
			385: function (e) {
				'use strict'
				e.exports = function (e, t) {
					return (
						t || (t = {}),
						e
							? ((e = String(e.__esModule ? e.default : e)),
							  t.hash && (e += t.hash),
							  t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e)
							: e
					)
				}
			},
			310: function () {
				!(function (e = 'max') {
					const t = '_dynamic_adapt_',
						i = 'data-da',
						n = (function () {
							const t = []
							return (
								[...document.querySelectorAll(`[${i}]`)].forEach((e) => {
									const n = e.getAttribute(i),
										[s, r, o] = n.split(',').map((e) => e.trim()),
										a = document.querySelector(s)
									var l
									a &&
										t.push({
											parent: e.parentElement,
											element: e,
											to: a,
											breakpoint: r ?? '767',
											order: void 0 !== o ? ((l = o), isNaN(l) ? o : Number(o)) : 'last',
											index: -1,
										})
								}),
								(function (t) {
									const i = 'min' === e ? 1 : 0
									return [...t].sort((e, t) =>
										e.breakpoint === t.breakpoint
											? e.order === t.order
												? 0
												: 'first' === e.order || 'last' === t.order
												? -1 * i
												: 'last' === e.order || 'first' === t.order
												? 1 * i
												: 0
											: (e.breakpoint - t.breakpoint) * i
									)
								})(t)
							)
						})()
					;[...new Set(n.map(({ breakpoint: t }) => `(${e}-width: ${t}px),${t}`))]
						.map((e) => {
							const [t, i] = e.split(',')
							return { query: t, breakpoint: i }
						})
						.forEach((e) => {
							const i = window.matchMedia(e.query),
								s = (function (e, i) {
									return function () {
										e.matches
											? (i.forEach((e) => {
													!(function (e) {
														const { to: i, element: n, order: s } = e
														;(e.index = (function (e, t) {
															return [...t.children].indexOf(e)
														})(e.element, e.element.parentElement)),
															n.classList.add(t),
															'last' === s || s >= i.children.length
																? i.append(n)
																: 'first' !== s
																? i.children[s].before(n)
																: i.prepend(n)
													})(e)
											  }),
											  i.reverse())
											: (i.forEach((e) => {
													e.element.classList.contains(t) &&
														(function (e) {
															const { parent: i, element: n, index: s } = e
															n.classList.remove(t),
																s >= 0 && i.children[s]
																	? i.children[s].before(n)
																	: i.append(n)
														})(e)
											  }),
											  i.reverse())
									}
								})(
									i,
									n.filter(({ breakpoint: t }) => t === e.breakpoint)
								)
							i.addEventListener('change', s), s()
						})
				})()
			},
			515: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/3a9fa473ff9cd252dd23.png'
			},
			352: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/d6416f5b41926e1d6bf6.png'
			},
			618: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/9a06782a8fb8aec6598c.png'
			},
			761: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/e3f996f75cda2d2c9201.png'
			},
			904: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/d1a00b27f1b4537450bb.png'
			},
			33: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/d01e5e0a4a4bde4f602e.png'
			},
			550: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/c3b828eba087202a866f.png'
			},
			47: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/487cdd210642de494894.png'
			},
			735: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/dc2b5dded8839ff599f3.png'
			},
			381: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/c932ddf64c3390ede650.png'
			},
			2: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/4c813e3a82b006b70996.png'
			},
			507: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/667aad9d6ef27e9b5cf8.png'
			},
			690: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/ea31c493021b9d284501.png'
			},
			778: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/2a5b4284edfe6f2f6d1a.png'
			},
			489: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/aa94fbc41d6f1144efc2.png'
			},
			312: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/c444ca16bec8db0d2a39.png'
			},
			821: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/9f07055c6acdd03e87ed.svg'
			},
			81: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/008180c098fbbf3efee5.png'
			},
			898: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/176c266ba63e6a4f8f3a.png'
			},
			27: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/c6016ecd3fac84e29d3b.png'
			},
			116: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/965ab3bcddc81e1fb1dd.png'
			},
			325: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/9e31b338cb20178f3bb4.svg'
			},
			922: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/2ceec7ea0745e4b7cb63.svg'
			},
			670: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/be576c0f3f581d0857f8.svg'
			},
			678: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/22ef0eb39c6230b4d564.svg'
			},
			90: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/e697574508cf586b8e96.svg'
			},
			300: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/4a493338add00ec0dafb.svg'
			},
			971: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/927fa0904974cb8f777b.png'
			},
			472: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/ea7a1b25e58dc7f7c7ab.png'
			},
			377: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/e7cd844378c106639787.png'
			},
			302: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/4f26f965814a84c7182e.png'
			},
			186: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/91137108cb0b93f6993e.png'
			},
			785: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/48252ce58a83a019d124.png'
			},
			337: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/b797456fc8f9e3f40734.svg'
			},
			547: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/17715dbd4951fef5541b.png'
			},
			56: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/c3b59eb7454b665ac2ac.png'
			},
			673: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/301df1ea03de0358a68a.png'
			},
			206: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/7a668808a4f345120afa.png'
			},
			242: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/9bb697a09a8b1f6b8dda.png'
			},
			308: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/b9f33f9292b25ba7f333.png'
			},
			959: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/8e764a3e5ac632fb3eb9.png'
			},
			470: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/4b67629a0de9356a7dff.png'
			},
			561: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/2ece6749afb6e4fedc60.png'
			},
			344: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/4b7b211ba03c0d4cf6c1.png'
			},
			177: function (e, t, i) {
				'use strict'
				e.exports = i.p + 'assets/a06a4dc91abc19eefd20.ico'
			},
		},
		t = {}
	function i(n) {
		var s = t[n]
		if (void 0 !== s) return s.exports
		var r = (t[n] = { exports: {} })
		return e[n](r, r.exports, i), r.exports
	}
	;(i.m = e),
		(i.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default
					  }
					: function () {
							return e
					  }
			return i.d(t, { a: t }), t
		}),
		(i.d = function (e, t) {
			for (var n in t)
				i.o(t, n) &&
					!i.o(e, n) &&
					Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
		}),
		(i.g = (function () {
			if ('object' == typeof globalThis) return globalThis
			try {
				return this || new Function('return this')()
			} catch (e) {
				if ('object' == typeof window) return window
			}
		})()),
		(i.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(function () {
			var e
			i.g.importScripts && (e = i.g.location + '')
			var t = i.g.document
			if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
				var n = t.getElementsByTagName('script')
				if (n.length)
					for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e)); )
						e = n[s--].src
			}
			if (!e) throw new Error('Automatic publicPath is not supported in this browser')
			;(e = e
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(i.p = e)
		})(),
		(i.b = document.baseURI || self.location.href),
		(function () {
			'use strict'
			var e = i(385),
				t = i.n(e),
				n = new URL(i(177), i.b),
				s = new URL(i(337), i.b),
				r = new URL(i(547), i.b),
				o = new URL(i(56), i.b),
				a = new URL(i(673), i.b),
				l = new URL(i(206), i.b),
				c = new URL(i(971), i.b),
				u = new URL(i(959), i.b),
				d = new URL(i(308), i.b),
				h = new URL(i(470), i.b),
				p = new URL(i(561), i.b),
				f = new URL(i(344), i.b),
				g = new URL(i(90), i.b),
				m = new URL(i(670), i.b),
				v = new URL(i(472), i.b),
				b = new URL(i(186), i.b),
				y = new URL(i(785), i.b),
				D = new URL(i(242), i.b),
				w = new URL(i(81), i.b),
				x = new URL(i(898), i.b),
				E = new URL(i(27), i.b),
				_ = new URL(i(116), i.b),
				C =
					(t()(n),
					t()(s),
					t()(r),
					t()(o),
					t()(a),
					t()(l),
					t()(c),
					t()(u),
					t()(d),
					t()(h),
					t()(p),
					t()(f),
					t()(g),
					t()(m),
					t()(v),
					t()(b),
					t()(y),
					t()(D),
					t()(w),
					t()(x),
					t()(E),
					t()(_),
					new URL(i(177), i.b)),
				T = new URL(i(337), i.b),
				S = new URL(i(821), i.b),
				M = new URL(i(325), i.b),
				P = (t()(C), t()(T), t()(S), t()(M), new URL(i(177), i.b)),
				F = new URL(i(337), i.b),
				A = new URL(i(690), i.b),
				O = new URL(i(377), i.b),
				L = new URL(i(302), i.b),
				k = new URL(i(778), i.b),
				z = new URL(i(300), i.b),
				R = new URL(i(489), i.b),
				I = new URL(i(312), i.b),
				B = new URL(i(515), i.b),
				N = new URL(i(904), i.b),
				j = new URL(i(33), i.b),
				H = new URL(i(550), i.b),
				$ = new URL(i(47), i.b),
				q = new URL(i(735), i.b),
				V = new URL(i(381), i.b),
				Y = new URL(i(2), i.b),
				X = new URL(i(507), i.b),
				G = new URL(i(352), i.b),
				W = new URL(i(618), i.b),
				U = new URL(i(761), i.b),
				Z = new URL(i(678), i.b),
				K = new URL(i(922), i.b)
			t()(P), t()(F), t()(A), t()(O), t()(L), t()(k), t()(z)
			function J(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return e
			}
			function Q(e, t) {
				;(e.prototype = Object.create(t.prototype)),
					(e.prototype.constructor = e),
					(e.__proto__ = t)
			}
			t()(R),
				t()(I),
				t()(B),
				t()(N),
				t()(j),
				t()(H),
				t()($),
				t()(q),
				t()(V),
				t()(Y),
				t()(X),
				t()(G),
				t()(W),
				t()(U),
				t()(Z),
				t()(K),
				i(310)
			var ee,
				te,
				ie,
				ne,
				se,
				re,
				oe,
				ae,
				le,
				ce,
				ue,
				de = {
					autoSleep: 120,
					force3D: 'auto',
					nullTargetWarn: 1,
					units: { lineHeight: '' },
				},
				he = { duration: 0.5, overwrite: !1, delay: 0 },
				pe = 1e8,
				fe = 1e-8,
				ge = 2 * Math.PI,
				me = ge / 4,
				ve = 0,
				be = Math.sqrt,
				ye = Math.cos,
				De = Math.sin,
				we = function (e) {
					return 'string' == typeof e
				},
				xe = function (e) {
					return 'function' == typeof e
				},
				Ee = function (e) {
					return 'number' == typeof e
				},
				_e = function (e) {
					return void 0 === e
				},
				Ce = function (e) {
					return 'object' == typeof e
				},
				Te = function (e) {
					return !1 !== e
				},
				Se = function () {
					return 'undefined' != typeof window
				},
				Me = function (e) {
					return xe(e) || we(e)
				},
				Pe = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
				Fe = Array.isArray,
				Ae = /(?:-?\.?\d|\.)+/gi,
				Oe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
				Le = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
				ke = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
				ze = /[+-]=-?[.\d]+/,
				Re = /[^,'"\[\]\s]+/gi,
				Ie = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
				Be = {},
				Ne = {},
				je = function (e) {
					return (Ne = gt(e, Be)) && mn
				},
				He = function (e, t) {
					return console.warn(
						'Invalid property',
						e,
						'set to',
						t,
						'Missing plugin? gsap.registerPlugin()'
					)
				},
				$e = function (e, t) {
					return !t && console.warn(e)
				},
				qe = function (e, t) {
					return (e && (Be[e] = t) && Ne && (Ne[e] = t)) || Be
				},
				Ve = function () {
					return 0
				},
				Ye = { suppressEvents: !0, isStart: !0, kill: !1 },
				Xe = { suppressEvents: !0, kill: !1 },
				Ge = { suppressEvents: !0 },
				We = {},
				Ue = [],
				Ze = {},
				Ke = {},
				Je = {},
				Qe = 30,
				et = [],
				tt = '',
				it = function (e) {
					var t,
						i,
						n = e[0]
					if ((Ce(n) || xe(n) || (e = [e]), !(t = (n._gsap || {}).harness))) {
						for (i = et.length; i-- && !et[i].targetTest(n); );
						t = et[i]
					}
					for (i = e.length; i--; )
						(e[i] && (e[i]._gsap || (e[i]._gsap = new Pi(e[i], t)))) || e.splice(i, 1)
					return e
				},
				nt = function (e) {
					return e._gsap || it(Xt(e))[0]._gsap
				},
				st = function (e, t, i) {
					return (i = e[t]) && xe(i)
						? e[t]()
						: (_e(i) && e.getAttribute && e.getAttribute(t)) || i
				},
				rt = function (e, t) {
					return (e = e.split(',')).forEach(t) || e
				},
				ot = function (e) {
					return Math.round(1e5 * e) / 1e5 || 0
				},
				at = function (e) {
					return Math.round(1e7 * e) / 1e7 || 0
				},
				lt = function (e, t) {
					var i = t.charAt(0),
						n = parseFloat(t.substr(2))
					return (
						(e = parseFloat(e)),
						'+' === i ? e + n : '-' === i ? e - n : '*' === i ? e * n : e / n
					)
				},
				ct = function (e, t) {
					for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
					return n < i
				},
				ut = function () {
					var e,
						t,
						i = Ue.length,
						n = Ue.slice(0)
					for (Ze = {}, Ue.length = 0, e = 0; e < i; e++)
						(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
				},
				dt = function (e, t, i, n) {
					Ue.length && !te && ut(),
						e.render(t, i, n || (te && t < 0 && (e._initted || e._startAt))),
						Ue.length && !te && ut()
				},
				ht = function (e) {
					var t = parseFloat(e)
					return (t || 0 === t) && (e + '').match(Re).length < 2
						? t
						: we(e)
						? e.trim()
						: e
				},
				pt = function (e) {
					return e
				},
				ft = function (e, t) {
					for (var i in t) i in e || (e[i] = t[i])
					return e
				},
				gt = function (e, t) {
					for (var i in t) e[i] = t[i]
					return e
				},
				mt = function e(t, i) {
					for (var n in i)
						'__proto__' !== n &&
							'constructor' !== n &&
							'prototype' !== n &&
							(t[n] = Ce(i[n]) ? e(t[n] || (t[n] = {}), i[n]) : i[n])
					return t
				},
				vt = function (e, t) {
					var i,
						n = {}
					for (i in e) i in t || (n[i] = e[i])
					return n
				},
				bt = function (e) {
					var t,
						i = e.parent || ne,
						n = e.keyframes
							? ((t = Fe(e.keyframes)),
							  function (e, i) {
									for (var n in i)
										n in e || ('duration' === n && t) || 'ease' === n || (e[n] = i[n])
							  })
							: ft
					if (Te(e.inherit)) for (; i; ) n(e, i.vars.defaults), (i = i.parent || i._dp)
					return e
				},
				yt = function (e, t, i, n, s) {
					void 0 === i && (i = '_first'), void 0 === n && (n = '_last')
					var r,
						o = e[n]
					if (s) for (r = t[s]; o && o[s] > r; ) o = o._prev
					return (
						o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
						t._next ? (t._next._prev = t) : (e[n] = t),
						(t._prev = o),
						(t.parent = t._dp = e),
						t
					)
				},
				Dt = function (e, t, i, n) {
					void 0 === i && (i = '_first'), void 0 === n && (n = '_last')
					var s = t._prev,
						r = t._next
					s ? (s._next = r) : e[i] === t && (e[i] = r),
						r ? (r._prev = s) : e[n] === t && (e[n] = s),
						(t._next = t._prev = t.parent = null)
				},
				wt = function (e, t) {
					e.parent &&
						(!t || e.parent.autoRemoveChildren) &&
						e.parent.remove &&
						e.parent.remove(e),
						(e._act = 0)
				},
				xt = function (e, t) {
					if (e && (!t || t._end > e._dur || t._start < 0))
						for (var i = e; i; ) (i._dirty = 1), (i = i.parent)
					return e
				},
				Et = function (e, t, i, n) {
					return (
						e._startAt &&
						(te
							? e._startAt.revert(Xe)
							: (e.vars.immediateRender && !e.vars.autoRevert) ||
							  e._startAt.render(t, !0, n))
					)
				},
				_t = function e(t) {
					return !t || (t._ts && e(t.parent))
				},
				Ct = function (e) {
					return e._repeat ? Tt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
				},
				Tt = function (e, t) {
					var i = Math.floor((e /= t))
					return e && i === e ? i - 1 : i
				},
				St = function (e, t) {
					return (
						(e - t._start) * t._ts +
						(t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
					)
				},
				Mt = function (e) {
					return (e._end = at(
						e._start + (e._tDur / Math.abs(e._ts || e._rts || fe) || 0)
					))
				},
				Pt = function (e, t) {
					var i = e._dp
					return (
						i &&
							i.smoothChildTiming &&
							e._ts &&
							((e._start = at(
								i._time -
									(e._ts > 0
										? t / e._ts
										: ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
							)),
							Mt(e),
							i._dirty || xt(i, e)),
						e
					)
				},
				Ft = function (e, t) {
					var i
					if (
						((t._time ||
							(!t._dur && t._initted) ||
							(t._start < e._time && (t._dur || !t.add))) &&
							((i = St(e.rawTime(), t)),
							(!t._dur || $t(0, t.totalDuration(), i) - t._tTime > fe) &&
								t.render(i, !0)),
						xt(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
					) {
						if (e._dur < e.duration())
							for (i = e; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp)
						e._zTime = -1e-8
					}
				},
				At = function (e, t, i, n) {
					return (
						t.parent && wt(t),
						(t._start = at(
							(Ee(i) ? i : i || e !== ne ? Nt(e, i, t) : e._time) + t._delay
						)),
						(t._end = at(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
						yt(e, t, '_first', '_last', e._sort ? '_start' : 0),
						zt(t) || (e._recent = t),
						n || Ft(e, t),
						e._ts < 0 && Pt(e, e._tTime),
						e
					)
				},
				Ot = function (e, t) {
					return (
						(Be.ScrollTrigger || He('scrollTrigger', t)) && Be.ScrollTrigger.create(t, e)
					)
				},
				Lt = function (e, t, i, n, s) {
					return (
						Ii(e, t, s),
						e._initted
							? !i &&
							  e._pt &&
							  !te &&
							  ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
							  le !== mi.frame
								? (Ue.push(e), (e._lazy = [s, n]), 1)
								: void 0
							: 1
					)
				},
				kt = function e(t) {
					var i = t.parent
					return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e(i))
				},
				zt = function (e) {
					var t = e.data
					return 'isFromStart' === t || 'isStart' === t
				},
				Rt = function (e, t, i, n) {
					var s = e._repeat,
						r = at(t) || 0,
						o = e._tTime / e._tDur
					return (
						o && !n && (e._time *= r / e._dur),
						(e._dur = r),
						(e._tDur = s ? (s < 0 ? 1e10 : at(r * (s + 1) + e._rDelay * s)) : r),
						o > 0 && !n && Pt(e, (e._tTime = e._tDur * o)),
						e.parent && Mt(e),
						i || xt(e.parent, e),
						e
					)
				},
				It = function (e) {
					return e instanceof Ai ? xt(e) : Rt(e, e._dur)
				},
				Bt = { _start: 0, endTime: Ve, totalDuration: Ve },
				Nt = function e(t, i, n) {
					var s,
						r,
						o,
						a = t.labels,
						l = t._recent || Bt,
						c = t.duration() >= pe ? l.endTime(!1) : t._dur
					return we(i) && (isNaN(i) || i in a)
						? ((r = i.charAt(0)),
						  (o = '%' === i.substr(-1)),
						  (s = i.indexOf('=')),
						  '<' === r || '>' === r
								? (s >= 0 && (i = i.replace(/=/, '')),
								  ('<' === r ? l._start : l.endTime(l._repeat >= 0)) +
										(parseFloat(i.substr(1)) || 0) *
											(o ? (s < 0 ? l : n).totalDuration() / 100 : 1))
								: s < 0
								? (i in a || (a[i] = c), a[i])
								: ((r = parseFloat(i.charAt(s - 1) + i.substr(s + 1))),
								  o && n && (r = (r / 100) * (Fe(n) ? n[0] : n).totalDuration()),
								  s > 1 ? e(t, i.substr(0, s - 1), n) + r : c + r))
						: null == i
						? c
						: +i
				},
				jt = function (e, t, i) {
					var n,
						s,
						r = Ee(t[1]),
						o = (r ? 2 : 1) + (e < 2 ? 0 : 1),
						a = t[o]
					if ((r && (a.duration = t[1]), (a.parent = i), e)) {
						for (n = a, s = i; s && !('immediateRender' in n); )
							(n = s.vars.defaults || {}), (s = Te(s.vars.inherit) && s.parent)
						;(a.immediateRender = Te(n.immediateRender)),
							e < 2 ? (a.runBackwards = 1) : (a.startAt = t[o - 1])
					}
					return new $i(t[0], a, t[o + 1])
				},
				Ht = function (e, t) {
					return e || 0 === e ? t(e) : t
				},
				$t = function (e, t, i) {
					return i < e ? e : i > t ? t : i
				},
				qt = function (e, t) {
					return we(e) && (t = Ie.exec(e)) ? t[1] : ''
				},
				Vt = [].slice,
				Yt = function (e, t) {
					return (
						e &&
						Ce(e) &&
						'length' in e &&
						((!t && !e.length) || (e.length - 1 in e && Ce(e[0]))) &&
						!e.nodeType &&
						e !== se
					)
				},
				Xt = function (e, t, i) {
					return ie && !t && ie.selector
						? ie.selector(e)
						: !we(e) || i || (!re && vi())
						? Fe(e)
							? (function (e, t, i) {
									return (
										void 0 === i && (i = []),
										e.forEach(function (e) {
											var n
											return (we(e) && !t) || Yt(e, 1)
												? (n = i).push.apply(n, Xt(e))
												: i.push(e)
										}) || i
									)
							  })(e, i)
							: Yt(e)
							? Vt.call(e, 0)
							: e
							? [e]
							: []
						: Vt.call((t || oe).querySelectorAll(e), 0)
				},
				Gt = function (e) {
					return (
						(e = Xt(e)[0] || $e('Invalid scope') || {}),
						function (t) {
							var i = e.current || e.nativeElement || e
							return Xt(
								t,
								i.querySelectorAll
									? i
									: i === e
									? $e('Invalid scope') || oe.createElement('div')
									: e
							)
						}
					)
				},
				Wt = function (e) {
					return e.sort(function () {
						return 0.5 - Math.random()
					})
				},
				Ut = function (e) {
					if (xe(e)) return e
					var t = Ce(e) ? e : { each: e },
						i = _i(t.ease),
						n = t.from || 0,
						s = parseFloat(t.base) || 0,
						r = {},
						o = n > 0 && n < 1,
						a = isNaN(n) || o,
						l = t.axis,
						c = n,
						u = n
					return (
						we(n)
							? (c = u = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
							: !o && a && ((c = n[0]), (u = n[1])),
						function (e, o, d) {
							var h,
								p,
								f,
								g,
								m,
								v,
								b,
								y,
								D,
								w = (d || t).length,
								x = r[w]
							if (!x) {
								if (!(D = 'auto' === t.grid ? 0 : (t.grid || [1, pe])[1])) {
									for (b = -pe; b < (b = d[D++].getBoundingClientRect().left) && D < w; );
									D < w && D--
								}
								for (
									x = r[w] = [],
										h = a ? Math.min(D, w) * c - 0.5 : n % D,
										p = D === pe ? 0 : a ? (w * u) / D - 0.5 : (n / D) | 0,
										b = 0,
										y = pe,
										v = 0;
									v < w;
									v++
								)
									(f = (v % D) - h),
										(g = p - ((v / D) | 0)),
										(x[v] = m = l ? Math.abs('y' === l ? g : f) : be(f * f + g * g)),
										m > b && (b = m),
										m < y && (y = m)
								'random' === n && Wt(x),
									(x.max = b - y),
									(x.min = y),
									(x.v = w =
										(parseFloat(t.amount) ||
											parseFloat(t.each) *
												(D > w
													? w - 1
													: l
													? 'y' === l
														? w / D
														: D
													: Math.max(D, w / D)) ||
											0) * ('edges' === n ? -1 : 1)),
									(x.b = w < 0 ? s - w : s),
									(x.u = qt(t.amount || t.each) || 0),
									(i = i && w < 0 ? xi(i) : i)
							}
							return (
								(w = (x[e] - x.min) / x.max || 0), at(x.b + (i ? i(w) : w) * x.v) + x.u
							)
						}
					)
				},
				Zt = function (e) {
					var t = Math.pow(10, ((e + '').split('.')[1] || '').length)
					return function (i) {
						var n = at(Math.round(parseFloat(i) / e) * e * t)
						return (n - (n % 1)) / t + (Ee(i) ? 0 : qt(i))
					}
				},
				Kt = function (e, t) {
					var i,
						n,
						s = Fe(e)
					return (
						!s &&
							Ce(e) &&
							((i = s = e.radius || pe),
							e.values
								? ((e = Xt(e.values)), (n = !Ee(e[0])) && (i *= i))
								: (e = Zt(e.increment))),
						Ht(
							t,
							s
								? xe(e)
									? function (t) {
											return (n = e(t)), Math.abs(n - t) <= i ? n : t
									  }
									: function (t) {
											for (
												var s,
													r,
													o = parseFloat(n ? t.x : t),
													a = parseFloat(n ? t.y : 0),
													l = pe,
													c = 0,
													u = e.length;
												u--;

											)
												(s = n
													? (s = e[u].x - o) * s + (r = e[u].y - a) * r
													: Math.abs(e[u] - o)) < l && ((l = s), (c = u))
											return (
												(c = !i || l <= i ? e[c] : t),
												n || c === t || Ee(t) ? c : c + qt(t)
											)
									  }
								: Zt(e)
						)
					)
				},
				Jt = function (e, t, i, n) {
					return Ht(Fe(e) ? !t : !0 === i ? !!(i = 0) : !n, function () {
						return Fe(e)
							? e[~~(Math.random() * e.length)]
							: (i = i || 1e-5) &&
									(n = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
									Math.floor(
										Math.round((e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i) *
											i *
											n
									) / n
					})
				},
				Qt = function (e, t, i) {
					return Ht(i, function (i) {
						return e[~~t(i)]
					})
				},
				ei = function (e) {
					for (var t, i, n, s, r = 0, o = ''; ~(t = e.indexOf('random(', r)); )
						(n = e.indexOf(')', t)),
							(s = '[' === e.charAt(t + 7)),
							(i = e.substr(t + 7, n - t - 7).match(s ? Re : Ae)),
							(o += e.substr(r, t - r) + Jt(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5)),
							(r = n + 1)
					return o + e.substr(r, e.length - r)
				},
				ti = function (e, t, i, n, s) {
					var r = t - e,
						o = n - i
					return Ht(s, function (t) {
						return i + (((t - e) / r) * o || 0)
					})
				},
				ii = function (e, t, i) {
					var n,
						s,
						r,
						o = e.labels,
						a = pe
					for (n in o)
						(s = o[n] - t) < 0 == !!i && s && a > (s = Math.abs(s)) && ((r = n), (a = s))
					return r
				},
				ni = function (e, t, i) {
					var n,
						s,
						r,
						o = e.vars,
						a = o[t],
						l = ie,
						c = e._ctx
					if (a)
						return (
							(n = o[t + 'Params']),
							(s = o.callbackScope || e),
							i && Ue.length && ut(),
							c && (ie = c),
							(r = n ? a.apply(s, n) : a.call(s)),
							(ie = l),
							r
						)
				},
				si = function (e) {
					return (
						wt(e),
						e.scrollTrigger && e.scrollTrigger.kill(!!te),
						e.progress() < 1 && ni(e, 'onInterrupt'),
						e
					)
				},
				ri = [],
				oi = function (e) {
					if (e)
						if (((e = (!e.name && e.default) || e), Se() || e.headless)) {
							var t = e.name,
								i = xe(e),
								n =
									t && !i && e.init
										? function () {
												this._props = []
										  }
										: e,
								s = { init: Ve, render: Ki, add: zi, kill: Qi, modifier: Ji, rawVars: 0 },
								r = { targetTest: 0, get: 0, getSetter: Gi, aliases: {}, register: 0 }
							if ((vi(), e !== n)) {
								if (Ke[t]) return
								ft(n, ft(vt(e, s), r)),
									gt(n.prototype, gt(s, vt(e, r))),
									(Ke[(n.prop = t)] = n),
									e.targetTest && (et.push(n), (We[t] = 1)),
									(t =
										('css' === t ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) +
										'Plugin')
							}
							qe(t, n), e.register && e.register(mn, n, nn)
						} else ri.push(e)
				},
				ai = 255,
				li = {
					aqua: [0, ai, ai],
					lime: [0, ai, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, ai],
					navy: [0, 0, 128],
					white: [ai, ai, ai],
					olive: [128, 128, 0],
					yellow: [ai, ai, 0],
					orange: [ai, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [ai, 0, 0],
					pink: [ai, 192, 203],
					cyan: [0, ai, ai],
					transparent: [ai, ai, ai, 0],
				},
				ci = function (e, t, i) {
					return (
						((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
							? t + (i - t) * e * 6
							: e < 0.5
							? i
							: 3 * e < 2
							? t + (i - t) * (2 / 3 - e) * 6
							: t) *
							ai +
							0.5) |
						0
					)
				},
				ui = function (e, t, i) {
					var n,
						s,
						r,
						o,
						a,
						l,
						c,
						u,
						d,
						h,
						p = e ? (Ee(e) ? [e >> 16, (e >> 8) & ai, e & ai] : 0) : li.black
					if (!p) {
						if ((',' === e.substr(-1) && (e = e.substr(0, e.length - 1)), li[e]))
							p = li[e]
						else if ('#' === e.charAt(0)) {
							if (
								(e.length < 6 &&
									((n = e.charAt(1)),
									(s = e.charAt(2)),
									(r = e.charAt(3)),
									(e =
										'#' +
										n +
										n +
										s +
										s +
										r +
										r +
										(5 === e.length ? e.charAt(4) + e.charAt(4) : ''))),
								9 === e.length)
							)
								return [
									(p = parseInt(e.substr(1, 6), 16)) >> 16,
									(p >> 8) & ai,
									p & ai,
									parseInt(e.substr(7), 16) / 255,
								]
							p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & ai, e & ai]
						} else if ('hsl' === e.substr(0, 3))
							if (((p = h = e.match(Ae)), t)) {
								if (~e.indexOf('='))
									return (p = e.match(Oe)), i && p.length < 4 && (p[3] = 1), p
							} else
								(o = (+p[0] % 360) / 360),
									(a = +p[1] / 100),
									(n =
										2 * (l = +p[2] / 100) - (s = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
									p.length > 3 && (p[3] *= 1),
									(p[0] = ci(o + 1 / 3, n, s)),
									(p[1] = ci(o, n, s)),
									(p[2] = ci(o - 1 / 3, n, s))
						else p = e.match(Ae) || li.transparent
						p = p.map(Number)
					}
					return (
						t &&
							!h &&
							((n = p[0] / ai),
							(s = p[1] / ai),
							(r = p[2] / ai),
							(l = ((c = Math.max(n, s, r)) + (u = Math.min(n, s, r))) / 2),
							c === u
								? (o = a = 0)
								: ((d = c - u),
								  (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
								  (o =
										c === n
											? (s - r) / d + (s < r ? 6 : 0)
											: c === s
											? (r - n) / d + 2
											: (n - s) / d + 4),
								  (o *= 60)),
							(p[0] = ~~(o + 0.5)),
							(p[1] = ~~(100 * a + 0.5)),
							(p[2] = ~~(100 * l + 0.5))),
						i && p.length < 4 && (p[3] = 1),
						p
					)
				},
				di = function (e) {
					var t = [],
						i = [],
						n = -1
					return (
						e.split(pi).forEach(function (e) {
							var s = e.match(Le) || []
							t.push.apply(t, s), i.push((n += s.length + 1))
						}),
						(t.c = i),
						t
					)
				},
				hi = function (e, t, i) {
					var n,
						s,
						r,
						o,
						a = '',
						l = (e + a).match(pi),
						c = t ? 'hsla(' : 'rgba(',
						u = 0
					if (!l) return e
					if (
						((l = l.map(function (e) {
							return (
								(e = ui(e, t, 1)) &&
								c +
									(t ? e[0] + ',' + e[1] + '%,' + e[2] + '%,' + e[3] : e.join(',')) +
									')'
							)
						})),
						i && ((r = di(e)), (n = i.c).join(a) !== r.c.join(a)))
					)
						for (o = (s = e.replace(pi, '1').split(Le)).length - 1; u < o; u++)
							a +=
								s[u] +
								(~n.indexOf(u)
									? l.shift() || c + '0,0,0,0)'
									: (r.length ? r : l.length ? l : i).shift())
					if (!s) for (o = (s = e.split(pi)).length - 1; u < o; u++) a += s[u] + l[u]
					return a + s[o]
				},
				pi = (function () {
					var e,
						t = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b'
					for (e in li) t += '|' + e + '\\b'
					return new RegExp(t + ')', 'gi')
				})(),
				fi = /hsl[a]?\(/,
				gi = function (e) {
					var t,
						i = e.join(' ')
					if (((pi.lastIndex = 0), pi.test(i)))
						return (
							(t = fi.test(i)), (e[1] = hi(e[1], t)), (e[0] = hi(e[0], t, di(e[1]))), !0
						)
				},
				mi = (function () {
					var e,
						t,
						i,
						n,
						s,
						r,
						o = Date.now,
						a = 500,
						l = 33,
						c = o(),
						u = c,
						d = 1e3 / 240,
						h = d,
						p = [],
						f = function i(f) {
							var g,
								m,
								v,
								b,
								y = o() - u,
								D = !0 === f
							if (
								((y > a || y < 0) && (c += y - l),
								((g = (v = (u += y) - c) - h) > 0 || D) &&
									((b = ++n.frame),
									(s = v - 1e3 * n.time),
									(n.time = v /= 1e3),
									(h += g + (g >= d ? 4 : d - g)),
									(m = 1)),
								D || (e = t(i)),
								m)
							)
								for (r = 0; r < p.length; r++) p[r](v, s, b, f)
						}
					return (
						(n = {
							time: 0,
							frame: 0,
							tick: function () {
								f(!0)
							},
							deltaRatio: function (e) {
								return s / (1e3 / (e || 60))
							},
							wake: function () {
								ae &&
									(!re &&
										Se() &&
										((se = re = window),
										(oe = se.document || {}),
										(Be.gsap = mn),
										(se.gsapVersions || (se.gsapVersions = [])).push(mn.version),
										je(Ne || se.GreenSockGlobals || (!se.gsap && se) || {}),
										ri.forEach(oi)),
									(i =
										'undefined' != typeof requestAnimationFrame && requestAnimationFrame),
									e && n.sleep(),
									(t =
										i ||
										function (e) {
											return setTimeout(e, (h - 1e3 * n.time + 1) | 0)
										}),
									(ue = 1),
									f(2))
							},
							sleep: function () {
								;(i ? cancelAnimationFrame : clearTimeout)(e), (ue = 0), (t = Ve)
							},
							lagSmoothing: function (e, t) {
								;(a = e || 1 / 0), (l = Math.min(t || 33, a))
							},
							fps: function (e) {
								;(d = 1e3 / (e || 240)), (h = 1e3 * n.time + d)
							},
							add: function (e, t, i) {
								var s = t
									? function (t, i, r, o) {
											e(t, i, r, o), n.remove(s)
									  }
									: e
								return n.remove(e), p[i ? 'unshift' : 'push'](s), vi(), s
							},
							remove: function (e, t) {
								~(t = p.indexOf(e)) && p.splice(t, 1) && r >= t && r--
							},
							_listeners: p,
						}),
						n
					)
				})(),
				vi = function () {
					return !ue && mi.wake()
				},
				bi = {},
				yi = /^[\d.\-M][\d.\-,\s]/,
				Di = /["']/g,
				wi = function (e) {
					for (
						var t,
							i,
							n,
							s = {},
							r = e.substr(1, e.length - 3).split(':'),
							o = r[0],
							a = 1,
							l = r.length;
						a < l;
						a++
					)
						(i = r[a]),
							(t = a !== l - 1 ? i.lastIndexOf(',') : i.length),
							(n = i.substr(0, t)),
							(s[o] = isNaN(n) ? n.replace(Di, '').trim() : +n),
							(o = i.substr(t + 1).trim())
					return s
				},
				xi = function (e) {
					return function (t) {
						return 1 - e(1 - t)
					}
				},
				Ei = function e(t, i) {
					for (var n, s = t._first; s; )
						s instanceof Ai
							? e(s, i)
							: !s.vars.yoyoEase ||
							  (s._yoyo && s._repeat) ||
							  s._yoyo === i ||
							  (s.timeline
									? e(s.timeline, i)
									: ((n = s._ease), (s._ease = s._yEase), (s._yEase = n), (s._yoyo = i))),
							(s = s._next)
				},
				_i = function (e, t) {
					return (
						(e &&
							(xe(e)
								? e
								: bi[e] ||
								  (function (e) {
										var t,
											i,
											n,
											s,
											r = (e + '').split('('),
											o = bi[r[0]]
										return o && r.length > 1 && o.config
											? o.config.apply(
													null,
													~e.indexOf('{')
														? [wi(r[1])]
														: ((t = e),
														  (i = t.indexOf('(') + 1),
														  (n = t.indexOf(')')),
														  (s = t.indexOf('(', i)),
														  t.substring(i, ~s && s < n ? t.indexOf(')', n + 1) : n))
																.split(',')
																.map(ht)
											  )
											: bi._CE && yi.test(e)
											? bi._CE('', e)
											: o
								  })(e))) ||
						t
					)
				},
				Ci = function (e, t, i, n) {
					void 0 === i &&
						(i = function (e) {
							return 1 - t(1 - e)
						}),
						void 0 === n &&
							(n = function (e) {
								return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
							})
					var s,
						r = { easeIn: t, easeOut: i, easeInOut: n }
					return (
						rt(e, function (e) {
							for (var t in ((bi[e] = Be[e] = r), (bi[(s = e.toLowerCase())] = i), r))
								bi[s + ('easeIn' === t ? '.in' : 'easeOut' === t ? '.out' : '.inOut')] =
									bi[e + '.' + t] = r[t]
						}),
						r
					)
				},
				Ti = function (e) {
					return function (t) {
						return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2
					}
				},
				Si = function e(t, i, n) {
					var s = i >= 1 ? i : 1,
						r = (n || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
						o = (r / ge) * (Math.asin(1 / s) || 0),
						a = function (e) {
							return 1 === e ? 1 : s * Math.pow(2, -10 * e) * De((e - o) * r) + 1
						},
						l =
							'out' === t
								? a
								: 'in' === t
								? function (e) {
										return 1 - a(1 - e)
								  }
								: Ti(a)
					return (
						(r = ge / r),
						(l.config = function (i, n) {
							return e(t, i, n)
						}),
						l
					)
				},
				Mi = function e(t, i) {
					void 0 === i && (i = 1.70158)
					var n = function (e) {
							return e ? --e * e * ((i + 1) * e + i) + 1 : 0
						},
						s =
							'out' === t
								? n
								: 'in' === t
								? function (e) {
										return 1 - n(1 - e)
								  }
								: Ti(n)
					return (
						(s.config = function (i) {
							return e(t, i)
						}),
						s
					)
				}
			rt('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
				var i = t < 5 ? t + 1 : t
				Ci(
					e + ',Power' + (i - 1),
					t
						? function (e) {
								return Math.pow(e, i)
						  }
						: function (e) {
								return e
						  },
					function (e) {
						return 1 - Math.pow(1 - e, i)
					},
					function (e) {
						return e < 0.5 ? Math.pow(2 * e, i) / 2 : 1 - Math.pow(2 * (1 - e), i) / 2
					}
				)
			}),
				(bi.Linear.easeNone = bi.none = bi.Linear.easeIn),
				Ci('Elastic', Si('in'), Si('out'), Si()),
				(function (e, t) {
					var i = 1 / t,
						n = 2 * i,
						s = 2.5 * i,
						r = function (r) {
							return r < i
								? e * r * r
								: r < n
								? e * Math.pow(r - 1.5 / t, 2) + 0.75
								: r < s
								? e * (r -= 2.25 / t) * r + 0.9375
								: e * Math.pow(r - 2.625 / t, 2) + 0.984375
						}
					Ci(
						'Bounce',
						function (e) {
							return 1 - r(1 - e)
						},
						r
					)
				})(7.5625, 2.75),
				Ci('Expo', function (e) {
					return e ? Math.pow(2, 10 * (e - 1)) : 0
				}),
				Ci('Circ', function (e) {
					return -(be(1 - e * e) - 1)
				}),
				Ci('Sine', function (e) {
					return 1 === e ? 1 : 1 - ye(e * me)
				}),
				Ci('Back', Mi('in'), Mi('out'), Mi()),
				(bi.SteppedEase =
					bi.steps =
					Be.SteppedEase =
						{
							config: function (e, t) {
								void 0 === e && (e = 1)
								var i = 1 / e,
									n = e + (t ? 0 : 1),
									s = t ? 1 : 0
								return function (e) {
									return (((n * $t(0, 0.99999999, e)) | 0) + s) * i
								}
							},
						}),
				(he.ease = bi['quad.out']),
				rt(
					'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
					function (e) {
						return (tt += e + ',' + e + 'Params,')
					}
				)
			var Pi = function (e, t) {
					;(this.id = ve++),
						(e._gsap = this),
						(this.target = e),
						(this.harness = t),
						(this.get = t ? t.get : st),
						(this.set = t ? t.getSetter : Gi)
				},
				Fi = (function () {
					function e(e) {
						;(this.vars = e),
							(this._delay = +e.delay || 0),
							(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
								((this._rDelay = e.repeatDelay || 0),
								(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
							(this._ts = 1),
							Rt(this, +e.duration, 1, 1),
							(this.data = e.data),
							ie && ((this._ctx = ie), ie.data.push(this)),
							ue || mi.wake()
					}
					var t = e.prototype
					return (
						(t.delay = function (e) {
							return e || 0 === e
								? (this.parent &&
										this.parent.smoothChildTiming &&
										this.startTime(this._start + e - this._delay),
								  (this._delay = e),
								  this)
								: this._delay
						}),
						(t.duration = function (e) {
							return arguments.length
								? this.totalDuration(
										this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
								  )
								: this.totalDuration() && this._dur
						}),
						(t.totalDuration = function (e) {
							return arguments.length
								? ((this._dirty = 0),
								  Rt(
										this,
										this._repeat < 0
											? e
											: (e - this._repeat * this._rDelay) / (this._repeat + 1)
								  ))
								: this._tDur
						}),
						(t.totalTime = function (e, t) {
							if ((vi(), !arguments.length)) return this._tTime
							var i = this._dp
							if (i && i.smoothChildTiming && this._ts) {
								for (Pt(this, e), !i._dp || i.parent || Ft(i, this); i && i.parent; )
									i.parent._time !==
										i._start +
											(i._ts >= 0
												? i._tTime / i._ts
												: (i.totalDuration() - i._tTime) / -i._ts) &&
										i.totalTime(i._tTime, !0),
										(i = i.parent)
								!this.parent &&
									this._dp.autoRemoveChildren &&
									((this._ts > 0 && e < this._tDur) ||
										(this._ts < 0 && e > 0) ||
										(!this._tDur && !e)) &&
									At(this._dp, this, this._start - this._delay)
							}
							return (
								(this._tTime !== e ||
									(!this._dur && !t) ||
									(this._initted && Math.abs(this._zTime) === fe) ||
									(!e && !this._initted && (this.add || this._ptLookup))) &&
									(this._ts || (this._pTime = e), dt(this, e, t)),
								this
							)
						}),
						(t.time = function (e, t) {
							return arguments.length
								? this.totalTime(
										Math.min(this.totalDuration(), e + Ct(this)) %
											(this._dur + this._rDelay) || (e ? this._dur : 0),
										t
								  )
								: this._time
						}),
						(t.totalProgress = function (e, t) {
							return arguments.length
								? this.totalTime(this.totalDuration() * e, t)
								: this.totalDuration()
								? Math.min(1, this._tTime / this._tDur)
								: this.rawTime() > 0
								? 1
								: 0
						}),
						(t.progress = function (e, t) {
							return arguments.length
								? this.totalTime(
										this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
											Ct(this),
										t
								  )
								: this.duration()
								? Math.min(1, this._time / this._dur)
								: this.rawTime() > 0
								? 1
								: 0
						}),
						(t.iteration = function (e, t) {
							var i = this.duration() + this._rDelay
							return arguments.length
								? this.totalTime(this._time + (e - 1) * i, t)
								: this._repeat
								? Tt(this._tTime, i) + 1
								: 1
						}),
						(t.timeScale = function (e, t) {
							if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts
							if (this._rts === e) return this
							var i = this.parent && this._ts ? St(this.parent._time, this) : this._tTime
							return (
								(this._rts = +e || 0),
								(this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
								this.totalTime($t(-Math.abs(this._delay), this._tDur, i), !1 !== t),
								Mt(this),
								(function (e) {
									for (var t = e.parent; t && t.parent; )
										(t._dirty = 1), t.totalDuration(), (t = t.parent)
									return e
								})(this)
							)
						}),
						(t.paused = function (e) {
							return arguments.length
								? (this._ps !== e &&
										((this._ps = e),
										e
											? ((this._pTime =
													this._tTime || Math.max(-this._delay, this.rawTime())),
											  (this._ts = this._act = 0))
											: (vi(),
											  (this._ts = this._rts),
											  this.totalTime(
													this.parent && !this.parent.smoothChildTiming
														? this.rawTime()
														: this._tTime || this._pTime,
													1 === this.progress() &&
														Math.abs(this._zTime) !== fe &&
														(this._tTime -= fe)
											  ))),
								  this)
								: this._ps
						}),
						(t.startTime = function (e) {
							if (arguments.length) {
								this._start = e
								var t = this.parent || this._dp
								return (
									t && (t._sort || !this.parent) && At(t, this, e - this._delay), this
								)
							}
							return this._start
						}),
						(t.endTime = function (e) {
							return (
								this._start +
								(Te(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
							)
						}),
						(t.rawTime = function (e) {
							var t = this.parent || this._dp
							return t
								? e &&
								  (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
									? this._tTime % (this._dur + this._rDelay)
									: this._ts
									? St(t.rawTime(e), this)
									: this._tTime
								: this._tTime
						}),
						(t.revert = function (e) {
							void 0 === e && (e = Ge)
							var t = te
							return (
								(te = e),
								(this._initted || this._startAt) &&
									(this.timeline && this.timeline.revert(e),
									this.totalTime(-0.01, e.suppressEvents)),
								'nested' !== this.data && !1 !== e.kill && this.kill(),
								(te = t),
								this
							)
						}),
						(t.globalTime = function (e) {
							for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
								(i = t._start + i / (Math.abs(t._ts) || 1)), (t = t._dp)
							return !this.parent && this._sat ? this._sat.globalTime(e) : i
						}),
						(t.repeat = function (e) {
							return arguments.length
								? ((this._repeat = e === 1 / 0 ? -2 : e), It(this))
								: -2 === this._repeat
								? 1 / 0
								: this._repeat
						}),
						(t.repeatDelay = function (e) {
							if (arguments.length) {
								var t = this._time
								return (this._rDelay = e), It(this), t ? this.time(t) : this
							}
							return this._rDelay
						}),
						(t.yoyo = function (e) {
							return arguments.length ? ((this._yoyo = e), this) : this._yoyo
						}),
						(t.seek = function (e, t) {
							return this.totalTime(Nt(this, e), Te(t))
						}),
						(t.restart = function (e, t) {
							return this.play().totalTime(e ? -this._delay : 0, Te(t))
						}),
						(t.play = function (e, t) {
							return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
						}),
						(t.reverse = function (e, t) {
							return (
								null != e && this.seek(e || this.totalDuration(), t),
								this.reversed(!0).paused(!1)
							)
						}),
						(t.pause = function (e, t) {
							return null != e && this.seek(e, t), this.paused(!0)
						}),
						(t.resume = function () {
							return this.paused(!1)
						}),
						(t.reversed = function (e) {
							return arguments.length
								? (!!e !== this.reversed() &&
										this.timeScale(-this._rts || (e ? -1e-8 : 0)),
								  this)
								: this._rts < 0
						}),
						(t.invalidate = function () {
							return (this._initted = this._act = 0), (this._zTime = -1e-8), this
						}),
						(t.isActive = function () {
							var e,
								t = this.parent || this._dp,
								i = this._start
							return !(
								t &&
								!(
									this._ts &&
									this._initted &&
									t.isActive() &&
									(e = t.rawTime(!0)) >= i &&
									e < this.endTime(!0) - fe
								)
							)
						}),
						(t.eventCallback = function (e, t, i) {
							var n = this.vars
							return arguments.length > 1
								? (t
										? ((n[e] = t),
										  i && (n[e + 'Params'] = i),
										  'onUpdate' === e && (this._onUpdate = t))
										: delete n[e],
								  this)
								: n[e]
						}),
						(t.then = function (e) {
							var t = this
							return new Promise(function (i) {
								var n = xe(e) ? e : pt,
									s = function () {
										var e = t.then
										;(t.then = null),
											xe(n) && (n = n(t)) && (n.then || n === t) && (t.then = e),
											i(n),
											(t.then = e)
									}
								;(t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
								(!t._tTime && t._ts < 0)
									? s()
									: (t._prom = s)
							})
						}),
						(t.kill = function () {
							si(this)
						}),
						e
					)
				})()
			ft(Fi.prototype, {
				_time: 0,
				_start: 0,
				_end: 0,
				_tTime: 0,
				_tDur: 0,
				_dirty: 0,
				_repeat: 0,
				_yoyo: !1,
				parent: null,
				_initted: !1,
				_rDelay: 0,
				_ts: 1,
				_dp: 0,
				ratio: 0,
				_zTime: -1e-8,
				_prom: 0,
				_ps: !1,
				_rts: 1,
			})
			var Ai = (function (e) {
				function t(t, i) {
					var n
					return (
						void 0 === t && (t = {}),
						((n = e.call(this, t) || this).labels = {}),
						(n.smoothChildTiming = !!t.smoothChildTiming),
						(n.autoRemoveChildren = !!t.autoRemoveChildren),
						(n._sort = Te(t.sortChildren)),
						ne && At(t.parent || ne, J(n), i),
						t.reversed && n.reverse(),
						t.paused && n.paused(!0),
						t.scrollTrigger && Ot(J(n), t.scrollTrigger),
						n
					)
				}
				Q(t, e)
				var i = t.prototype
				return (
					(i.to = function (e, t, i) {
						return jt(0, arguments, this), this
					}),
					(i.from = function (e, t, i) {
						return jt(1, arguments, this), this
					}),
					(i.fromTo = function (e, t, i, n) {
						return jt(2, arguments, this), this
					}),
					(i.set = function (e, t, i) {
						return (
							(t.duration = 0),
							(t.parent = this),
							bt(t).repeatDelay || (t.repeat = 0),
							(t.immediateRender = !!t.immediateRender),
							new $i(e, t, Nt(this, i), 1),
							this
						)
					}),
					(i.call = function (e, t, i) {
						return At(this, $i.delayedCall(0, e, t), i)
					}),
					(i.staggerTo = function (e, t, i, n, s, r, o) {
						return (
							(i.duration = t),
							(i.stagger = i.stagger || n),
							(i.onComplete = r),
							(i.onCompleteParams = o),
							(i.parent = this),
							new $i(e, i, Nt(this, s)),
							this
						)
					}),
					(i.staggerFrom = function (e, t, i, n, s, r, o) {
						return (
							(i.runBackwards = 1),
							(bt(i).immediateRender = Te(i.immediateRender)),
							this.staggerTo(e, t, i, n, s, r, o)
						)
					}),
					(i.staggerFromTo = function (e, t, i, n, s, r, o, a) {
						return (
							(n.startAt = i),
							(bt(n).immediateRender = Te(n.immediateRender)),
							this.staggerTo(e, t, n, s, r, o, a)
						)
					}),
					(i.render = function (e, t, i) {
						var n,
							s,
							r,
							o,
							a,
							l,
							c,
							u,
							d,
							h,
							p,
							f,
							g = this._time,
							m = this._dirty ? this.totalDuration() : this._tDur,
							v = this._dur,
							b = e <= 0 ? 0 : at(e),
							y = this._zTime < 0 != e < 0 && (this._initted || !v)
						if (
							(this !== ne && b > m && e >= 0 && (b = m), b !== this._tTime || i || y)
						) {
							if (
								(g !== this._time && v && ((b += this._time - g), (e += this._time - g)),
								(n = b),
								(d = this._start),
								(l = !(u = this._ts)),
								y && (v || (g = this._zTime), (e || !t) && (this._zTime = e)),
								this._repeat)
							) {
								if (
									((p = this._yoyo), (a = v + this._rDelay), this._repeat < -1 && e < 0)
								)
									return this.totalTime(100 * a + e, t, i)
								if (
									((n = at(b % a)),
									b === m
										? ((o = this._repeat), (n = v))
										: ((o = ~~(b / a)) && o === b / a && ((n = v), o--),
										  n > v && (n = v)),
									(h = Tt(this._tTime, a)),
									!g &&
										this._tTime &&
										h !== o &&
										this._tTime - h * a - this._dur <= 0 &&
										(h = o),
									p && 1 & o && ((n = v - n), (f = 1)),
									o !== h && !this._lock)
								) {
									var D = p && 1 & h,
										w = D === (p && 1 & o)
									if (
										(o < h && (D = !D),
										(g = D ? 0 : b % v ? v : b),
										(this._lock = 1),
										(this.render(g || (f ? 0 : at(o * a)), t, !v)._lock = 0),
										(this._tTime = b),
										!t && this.parent && ni(this, 'onRepeat'),
										this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
										(g && g !== this._time) ||
											l !== !this._ts ||
											(this.vars.onRepeat && !this.parent && !this._act))
									)
										return this
									if (
										((v = this._dur),
										(m = this._tDur),
										w &&
											((this._lock = 2),
											(g = D ? v : -1e-4),
											this.render(g, !0),
											this.vars.repeatRefresh && !f && this.invalidate()),
										(this._lock = 0),
										!this._ts && !l)
									)
										return this
									Ei(this, f)
								}
							}
							if (
								(this._hasPause &&
									!this._forcing &&
									this._lock < 2 &&
									((c = (function (e, t, i) {
										var n
										if (i > t)
											for (n = e._first; n && n._start <= i; ) {
												if ('isPause' === n.data && n._start > t) return n
												n = n._next
											}
										else
											for (n = e._last; n && n._start >= i; ) {
												if ('isPause' === n.data && n._start < t) return n
												n = n._prev
											}
									})(this, at(g), at(n))),
									c && (b -= n - (n = c._start))),
								(this._tTime = b),
								(this._time = n),
								(this._act = !u),
								this._initted ||
									((this._onUpdate = this.vars.onUpdate),
									(this._initted = 1),
									(this._zTime = e),
									(g = 0)),
								!g && n && !t && !o && (ni(this, 'onStart'), this._tTime !== b))
							)
								return this
							if (n >= g && e >= 0)
								for (s = this._first; s; ) {
									if (((r = s._next), (s._act || n >= s._start) && s._ts && c !== s)) {
										if (s.parent !== this) return this.render(e, t, i)
										if (
											(s.render(
												s._ts > 0
													? (n - s._start) * s._ts
													: (s._dirty ? s.totalDuration() : s._tDur) +
															(n - s._start) * s._ts,
												t,
												i
											),
											n !== this._time || (!this._ts && !l))
										) {
											;(c = 0), r && (b += this._zTime = -1e-8)
											break
										}
									}
									s = r
								}
							else {
								s = this._last
								for (var x = e < 0 ? e : n; s; ) {
									if (((r = s._prev), (s._act || x <= s._end) && s._ts && c !== s)) {
										if (s.parent !== this) return this.render(e, t, i)
										if (
											(s.render(
												s._ts > 0
													? (x - s._start) * s._ts
													: (s._dirty ? s.totalDuration() : s._tDur) +
															(x - s._start) * s._ts,
												t,
												i || (te && (s._initted || s._startAt))
											),
											n !== this._time || (!this._ts && !l))
										) {
											;(c = 0), r && (b += this._zTime = x ? -1e-8 : fe)
											break
										}
									}
									s = r
								}
							}
							if (
								c &&
								!t &&
								(this.pause(),
								(c.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
								this._ts)
							)
								return (this._start = d), Mt(this), this.render(e, t, i)
							this._onUpdate && !t && ni(this, 'onUpdate', !0),
								((b === m && this._tTime >= this.totalDuration()) || (!b && g)) &&
									((d !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
										this._lock ||
										((e || !v) &&
											((b === m && this._ts > 0) || (!b && this._ts < 0)) &&
											wt(this, 1),
										t ||
											(e < 0 && !g) ||
											(!b && !g && m) ||
											(ni(
												this,
												b === m && e >= 0 ? 'onComplete' : 'onReverseComplete',
												!0
											),
											this._prom && !(b < m && this.timeScale() > 0) && this._prom())))
						}
						return this
					}),
					(i.add = function (e, t) {
						var i = this
						if ((Ee(t) || (t = Nt(this, t, e)), !(e instanceof Fi))) {
							if (Fe(e))
								return (
									e.forEach(function (e) {
										return i.add(e, t)
									}),
									this
								)
							if (we(e)) return this.addLabel(e, t)
							if (!xe(e)) return this
							e = $i.delayedCall(0, e)
						}
						return this !== e ? At(this, e, t) : this
					}),
					(i.getChildren = function (e, t, i, n) {
						void 0 === e && (e = !0),
							void 0 === t && (t = !0),
							void 0 === i && (i = !0),
							void 0 === n && (n = -pe)
						for (var s = [], r = this._first; r; )
							r._start >= n &&
								(r instanceof $i
									? t && s.push(r)
									: (i && s.push(r), e && s.push.apply(s, r.getChildren(!0, t, i)))),
								(r = r._next)
						return s
					}),
					(i.getById = function (e) {
						for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
							if (t[i].vars.id === e) return t[i]
					}),
					(i.remove = function (e) {
						return we(e)
							? this.removeLabel(e)
							: xe(e)
							? this.killTweensOf(e)
							: (Dt(this, e), e === this._recent && (this._recent = this._last), xt(this))
					}),
					(i.totalTime = function (t, i) {
						return arguments.length
							? ((this._forcing = 1),
							  !this._dp &&
									this._ts &&
									(this._start = at(
										mi.time -
											(this._ts > 0
												? t / this._ts
												: (this.totalDuration() - t) / -this._ts)
									)),
							  e.prototype.totalTime.call(this, t, i),
							  (this._forcing = 0),
							  this)
							: this._tTime
					}),
					(i.addLabel = function (e, t) {
						return (this.labels[e] = Nt(this, t)), this
					}),
					(i.removeLabel = function (e) {
						return delete this.labels[e], this
					}),
					(i.addPause = function (e, t, i) {
						var n = $i.delayedCall(0, t || Ve, i)
						return (n.data = 'isPause'), (this._hasPause = 1), At(this, n, Nt(this, e))
					}),
					(i.removePause = function (e) {
						var t = this._first
						for (e = Nt(this, e); t; )
							t._start === e && 'isPause' === t.data && wt(t), (t = t._next)
					}),
					(i.killTweensOf = function (e, t, i) {
						for (var n = this.getTweensOf(e, i), s = n.length; s--; )
							Oi !== n[s] && n[s].kill(e, t)
						return this
					}),
					(i.getTweensOf = function (e, t) {
						for (var i, n = [], s = Xt(e), r = this._first, o = Ee(t); r; )
							r instanceof $i
								? ct(r._targets, s) &&
								  (o
										? (!Oi || (r._initted && r._ts)) &&
										  r.globalTime(0) <= t &&
										  r.globalTime(r.totalDuration()) > t
										: !t || r.isActive()) &&
								  n.push(r)
								: (i = r.getTweensOf(s, t)).length && n.push.apply(n, i),
								(r = r._next)
						return n
					}),
					(i.tweenTo = function (e, t) {
						t = t || {}
						var i,
							n = this,
							s = Nt(n, e),
							r = t,
							o = r.startAt,
							a = r.onStart,
							l = r.onStartParams,
							c = r.immediateRender,
							u = $i.to(
								n,
								ft(
									{
										ease: t.ease || 'none',
										lazy: !1,
										immediateRender: !1,
										time: s,
										overwrite: 'auto',
										duration:
											t.duration ||
											Math.abs(
												(s - (o && 'time' in o ? o.time : n._time)) / n.timeScale()
											) ||
											fe,
										onStart: function () {
											if ((n.pause(), !i)) {
												var e =
													t.duration ||
													Math.abs(
														(s - (o && 'time' in o ? o.time : n._time)) / n.timeScale()
													)
												u._dur !== e && Rt(u, e, 0, 1).render(u._time, !0, !0), (i = 1)
											}
											a && a.apply(u, l || [])
										},
									},
									t
								)
							)
						return c ? u.render(0) : u
					}),
					(i.tweenFromTo = function (e, t, i) {
						return this.tweenTo(t, ft({ startAt: { time: Nt(this, e) } }, i))
					}),
					(i.recent = function () {
						return this._recent
					}),
					(i.nextLabel = function (e) {
						return void 0 === e && (e = this._time), ii(this, Nt(this, e))
					}),
					(i.previousLabel = function (e) {
						return void 0 === e && (e = this._time), ii(this, Nt(this, e), 1)
					}),
					(i.currentLabel = function (e) {
						return arguments.length
							? this.seek(e, !0)
							: this.previousLabel(this._time + fe)
					}),
					(i.shiftChildren = function (e, t, i) {
						void 0 === i && (i = 0)
						for (var n, s = this._first, r = this.labels; s; )
							s._start >= i && ((s._start += e), (s._end += e)), (s = s._next)
						if (t) for (n in r) r[n] >= i && (r[n] += e)
						return xt(this)
					}),
					(i.invalidate = function (t) {
						var i = this._first
						for (this._lock = 0; i; ) i.invalidate(t), (i = i._next)
						return e.prototype.invalidate.call(this, t)
					}),
					(i.clear = function (e) {
						void 0 === e && (e = !0)
						for (var t, i = this._first; i; ) (t = i._next), this.remove(i), (i = t)
						return (
							this._dp && (this._time = this._tTime = this._pTime = 0),
							e && (this.labels = {}),
							xt(this)
						)
					}),
					(i.totalDuration = function (e) {
						var t,
							i,
							n,
							s = 0,
							r = this,
							o = r._last,
							a = pe
						if (arguments.length)
							return r.timeScale(
								(r._repeat < 0 ? r.duration() : r.totalDuration()) /
									(r.reversed() ? -e : e)
							)
						if (r._dirty) {
							for (n = r.parent; o; )
								(t = o._prev),
									o._dirty && o.totalDuration(),
									(i = o._start) > a && r._sort && o._ts && !r._lock
										? ((r._lock = 1), (At(r, o, i - o._delay, 1)._lock = 0))
										: (a = i),
									i < 0 &&
										o._ts &&
										((s -= i),
										((!n && !r._dp) || (n && n.smoothChildTiming)) &&
											((r._start += i / r._ts), (r._time -= i), (r._tTime -= i)),
										r.shiftChildren(-i, !1, -Infinity),
										(a = 0)),
									o._end > s && o._ts && (s = o._end),
									(o = t)
							Rt(r, r === ne && r._time > s ? r._time : s, 1, 1), (r._dirty = 0)
						}
						return r._tDur
					}),
					(t.updateRoot = function (e) {
						if ((ne._ts && (dt(ne, St(e, ne)), (le = mi.frame)), mi.frame >= Qe)) {
							Qe += de.autoSleep || 120
							var t = ne._first
							if ((!t || !t._ts) && de.autoSleep && mi._listeners.length < 2) {
								for (; t && !t._ts; ) t = t._next
								t || mi.sleep()
							}
						}
					}),
					t
				)
			})(Fi)
			ft(Ai.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
			var Oi,
				Li,
				ki = function (e, t, i, n, s, r, o) {
					var a,
						l,
						c,
						u,
						d,
						h,
						p,
						f,
						g = new nn(this._pt, e, t, 0, 1, Zi, null, s),
						m = 0,
						v = 0
					for (
						g.b = i,
							g.e = n,
							i += '',
							(p = ~(n += '').indexOf('random(')) && (n = ei(n)),
							r && (r((f = [i, n]), e, t), (i = f[0]), (n = f[1])),
							l = i.match(ke) || [];
						(a = ke.exec(n));

					)
						(u = a[0]),
							(d = n.substring(m, a.index)),
							c ? (c = (c + 1) % 5) : 'rgba(' === d.substr(-5) && (c = 1),
							u !== l[v++] &&
								((h = parseFloat(l[v - 1]) || 0),
								(g._pt = {
									_next: g._pt,
									p: d || 1 === v ? d : ',',
									s: h,
									c: '=' === u.charAt(1) ? lt(h, u) - h : parseFloat(u) - h,
									m: c && c < 4 ? Math.round : 0,
								}),
								(m = ke.lastIndex))
					return (
						(g.c = m < n.length ? n.substring(m, n.length) : ''),
						(g.fp = o),
						(ze.test(n) || p) && (g.e = 0),
						(this._pt = g),
						g
					)
				},
				zi = function (e, t, i, n, s, r, o, a, l, c) {
					xe(n) && (n = n(s || 0, e, r))
					var u,
						d = e[t],
						h =
							'get' !== i
								? i
								: xe(d)
								? l
									? e[
											t.indexOf('set') || !xe(e['get' + t.substr(3)])
												? t
												: 'get' + t.substr(3)
									  ](l)
									: e[t]()
								: d,
						p = xe(d) ? (l ? Yi : Vi) : qi
					if (
						(we(n) &&
							(~n.indexOf('random(') && (n = ei(n)),
							'=' === n.charAt(1) &&
								((u = lt(h, n) + (qt(h) || 0)) || 0 === u) &&
								(n = u)),
						!c || h !== n || Li)
					)
						return isNaN(h * n) || '' === n
							? (!d && !(t in e) && He(t, n),
							  ki.call(this, e, t, h, n, p, a || de.stringFilter, l))
							: ((u = new nn(
									this._pt,
									e,
									t,
									+h || 0,
									n - (h || 0),
									'boolean' == typeof d ? Ui : Wi,
									0,
									p
							  )),
							  l && (u.fp = l),
							  o && u.modifier(o, this, e),
							  (this._pt = u))
				},
				Ri = function (e, t, i, n, s, r) {
					var o, a, l, c
					if (
						Ke[e] &&
						!1 !==
							(o = new Ke[e]()).init(
								s,
								o.rawVars
									? t[e]
									: (function (e, t, i, n, s) {
											if (
												(xe(e) && (e = Ni(e, s, t, i, n)),
												!Ce(e) || (e.style && e.nodeType) || Fe(e) || Pe(e))
											)
												return we(e) ? Ni(e, s, t, i, n) : e
											var r,
												o = {}
											for (r in e) o[r] = Ni(e[r], s, t, i, n)
											return o
									  })(t[e], n, s, r, i),
								i,
								n,
								r
							) &&
						((i._pt = a = new nn(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
						i !== ce)
					)
						for (l = i._ptLookup[i._targets.indexOf(s)], c = o._props.length; c--; )
							l[o._props[c]] = a
					return o
				},
				Ii = function e(t, i, n) {
					var s,
						r,
						o,
						a,
						l,
						c,
						u,
						d,
						h,
						p,
						f,
						g,
						m,
						v = t.vars,
						b = v.ease,
						y = v.startAt,
						D = v.immediateRender,
						w = v.lazy,
						x = v.onUpdate,
						E = v.runBackwards,
						_ = v.yoyoEase,
						C = v.keyframes,
						T = v.autoRevert,
						S = t._dur,
						M = t._startAt,
						P = t._targets,
						F = t.parent,
						A = F && 'nested' === F.data ? F.vars.targets : P,
						O = 'auto' === t._overwrite && !ee,
						L = t.timeline
					if (
						(L && (!C || !b) && (b = 'none'),
						(t._ease = _i(b, he.ease)),
						(t._yEase = _ ? xi(_i(!0 === _ ? b : _, he.ease)) : 0),
						_ &&
							t._yoyo &&
							!t._repeat &&
							((_ = t._yEase), (t._yEase = t._ease), (t._ease = _)),
						(t._from = !L && !!v.runBackwards),
						!L || (C && !v.stagger))
					) {
						if (
							((g = (d = P[0] ? nt(P[0]).harness : 0) && v[d.prop]),
							(s = vt(v, We)),
							M &&
								(M._zTime < 0 && M.progress(1),
								i < 0 && E && D && !T ? M.render(-1, !0) : M.revert(E && S ? Xe : Ye),
								(M._lazy = 0)),
							y)
						) {
							if (
								(wt(
									(t._startAt = $i.set(
										P,
										ft(
											{
												data: 'isStart',
												overwrite: !1,
												parent: F,
												immediateRender: !0,
												lazy: !M && Te(w),
												startAt: null,
												delay: 0,
												onUpdate:
													x &&
													function () {
														return ni(t, 'onUpdate')
													},
												stagger: 0,
											},
											y
										)
									))
								),
								(t._startAt._dp = 0),
								(t._startAt._sat = t),
								i < 0 && (te || (!D && !T)) && t._startAt.revert(Xe),
								D && S && i <= 0 && n <= 0)
							)
								return void (i && (t._zTime = i))
						} else if (E && S && !M)
							if (
								(i && (D = !1),
								(o = ft(
									{
										overwrite: !1,
										data: 'isFromStart',
										lazy: D && !M && Te(w),
										immediateRender: D,
										stagger: 0,
										parent: F,
									},
									s
								)),
								g && (o[d.prop] = g),
								wt((t._startAt = $i.set(P, o))),
								(t._startAt._dp = 0),
								(t._startAt._sat = t),
								i < 0 && (te ? t._startAt.revert(Xe) : t._startAt.render(-1, !0)),
								(t._zTime = i),
								D)
							) {
								if (!i) return
							} else e(t._startAt, fe, fe)
						for (
							t._pt = t._ptCache = 0, w = (S && Te(w)) || (w && !S), r = 0;
							r < P.length;
							r++
						) {
							if (
								((u = (l = P[r])._gsap || it(P)[r]._gsap),
								(t._ptLookup[r] = p = {}),
								Ze[u.id] && Ue.length && ut(),
								(f = A === P ? r : A.indexOf(l)),
								d &&
									!1 !== (h = new d()).init(l, g || s, t, f, A) &&
									((t._pt = a =
										new nn(t._pt, l, h.name, 0, 1, h.render, h, 0, h.priority)),
									h._props.forEach(function (e) {
										p[e] = a
									}),
									h.priority && (c = 1)),
								!d || g)
							)
								for (o in s)
									Ke[o] && (h = Ri(o, s, t, f, l, A))
										? h.priority && (c = 1)
										: (p[o] = a = zi.call(t, l, o, 'get', s[o], f, A, 0, v.stringFilter))
							t._op && t._op[r] && t.kill(l, t._op[r]),
								O &&
									t._pt &&
									((Oi = t),
									ne.killTweensOf(l, p, t.globalTime(i)),
									(m = !t.parent),
									(Oi = 0)),
								t._pt && w && (Ze[u.id] = 1)
						}
						c && tn(t), t._onInit && t._onInit(t)
					}
					;(t._onUpdate = x),
						(t._initted = (!t._op || t._pt) && !m),
						C && i <= 0 && L.render(pe, !0, !0)
				},
				Bi = function (e, t, i, n) {
					var s,
						r,
						o = t.ease || n || 'power1.inOut'
					if (Fe(t))
						(r = i[e] || (i[e] = [])),
							t.forEach(function (e, i) {
								return r.push({ t: (i / (t.length - 1)) * 100, v: e, e: o })
							})
					else
						for (s in t)
							(r = i[s] || (i[s] = [])),
								'ease' === s || r.push({ t: parseFloat(e), v: t[s], e: o })
				},
				Ni = function (e, t, i, n, s) {
					return xe(e) ? e.call(t, i, n, s) : we(e) && ~e.indexOf('random(') ? ei(e) : e
				},
				ji = tt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
				Hi = {}
			rt(ji + ',id,stagger,delay,duration,paused,scrollTrigger', function (e) {
				return (Hi[e] = 1)
			})
			var $i = (function (e) {
				function t(t, i, n, s) {
					var r
					'number' == typeof i && ((n.duration = i), (i = n), (n = null))
					var o,
						a,
						l,
						c,
						u,
						d,
						h,
						p,
						f = (r = e.call(this, s ? i : bt(i)) || this).vars,
						g = f.duration,
						m = f.delay,
						v = f.immediateRender,
						b = f.stagger,
						y = f.overwrite,
						D = f.keyframes,
						w = f.defaults,
						x = f.scrollTrigger,
						E = f.yoyoEase,
						_ = i.parent || ne,
						C = (Fe(t) || Pe(t) ? Ee(t[0]) : 'length' in i) ? [t] : Xt(t)
					if (
						((r._targets = C.length
							? it(C)
							: $e(
									'GSAP target ' + t + ' not found. https://gsap.com',
									!de.nullTargetWarn
							  ) || []),
						(r._ptLookup = []),
						(r._overwrite = y),
						D || b || Me(g) || Me(m))
					) {
						if (
							((i = r.vars),
							(o = r.timeline =
								new Ai({
									data: 'nested',
									defaults: w || {},
									targets: _ && 'nested' === _.data ? _.vars.targets : C,
								})).kill(),
							(o.parent = o._dp = J(r)),
							(o._start = 0),
							b || Me(g) || Me(m))
						) {
							if (((c = C.length), (h = b && Ut(b)), Ce(b)))
								for (u in b) ~ji.indexOf(u) && (p || (p = {}), (p[u] = b[u]))
							for (a = 0; a < c; a++)
								((l = vt(i, Hi)).stagger = 0),
									E && (l.yoyoEase = E),
									p && gt(l, p),
									(d = C[a]),
									(l.duration = +Ni(g, J(r), a, d, C)),
									(l.delay = (+Ni(m, J(r), a, d, C) || 0) - r._delay),
									!b &&
										1 === c &&
										l.delay &&
										((r._delay = m = l.delay), (r._start += m), (l.delay = 0)),
									o.to(d, l, h ? h(a, d, C) : 0),
									(o._ease = bi.none)
							o.duration() ? (g = m = 0) : (r.timeline = 0)
						} else if (D) {
							bt(ft(o.vars.defaults, { ease: 'none' })),
								(o._ease = _i(D.ease || i.ease || 'none'))
							var T,
								S,
								M,
								P = 0
							if (Fe(D))
								D.forEach(function (e) {
									return o.to(C, e, '>')
								}),
									o.duration()
							else {
								for (u in ((l = {}), D))
									'ease' === u || 'easeEach' === u || Bi(u, D[u], l, D.easeEach)
								for (u in l)
									for (
										T = l[u].sort(function (e, t) {
											return e.t - t.t
										}),
											P = 0,
											a = 0;
										a < T.length;
										a++
									)
										((M = {
											ease: (S = T[a]).e,
											duration: ((S.t - (a ? T[a - 1].t : 0)) / 100) * g,
										})[u] = S.v),
											o.to(C, M, P),
											(P += M.duration)
								o.duration() < g && o.to({}, { duration: g - o.duration() })
							}
						}
						g || r.duration((g = o.duration()))
					} else r.timeline = 0
					return (
						!0 !== y || ee || ((Oi = J(r)), ne.killTweensOf(C), (Oi = 0)),
						At(_, J(r), n),
						i.reversed && r.reverse(),
						i.paused && r.paused(!0),
						(v ||
							(!g &&
								!D &&
								r._start === at(_._time) &&
								Te(v) &&
								_t(J(r)) &&
								'nested' !== _.data)) &&
							((r._tTime = -1e-8), r.render(Math.max(0, -m) || 0)),
						x && Ot(J(r), x),
						r
					)
				}
				Q(t, e)
				var i = t.prototype
				return (
					(i.render = function (e, t, i) {
						var n,
							s,
							r,
							o,
							a,
							l,
							c,
							u,
							d,
							h = this._time,
							p = this._tDur,
							f = this._dur,
							g = e < 0,
							m = e > p - fe && !g ? p : e < fe ? 0 : e
						if (f) {
							if (
								m !== this._tTime ||
								!e ||
								i ||
								(!this._initted && this._tTime) ||
								(this._startAt && this._zTime < 0 !== g)
							) {
								if (((n = m), (u = this.timeline), this._repeat)) {
									if (((o = f + this._rDelay), this._repeat < -1 && g))
										return this.totalTime(100 * o + e, t, i)
									if (
										((n = at(m % o)),
										m === p
											? ((r = this._repeat), (n = f))
											: ((r = ~~(m / o)) && r === at(m / o) && ((n = f), r--),
											  n > f && (n = f)),
										(l = this._yoyo && 1 & r) && ((d = this._yEase), (n = f - n)),
										(a = Tt(this._tTime, o)),
										n === h && !i && this._initted && r === a)
									)
										return (this._tTime = m), this
									r !== a &&
										(u && this._yEase && Ei(u, l),
										this.vars.repeatRefresh &&
											!l &&
											!this._lock &&
											this._time !== o &&
											this._initted &&
											((this._lock = i = 1),
											(this.render(at(o * r), !0).invalidate()._lock = 0)))
								}
								if (!this._initted) {
									if (Lt(this, g ? e : n, i, t, m)) return (this._tTime = 0), this
									if (!(h === this._time || (i && this.vars.repeatRefresh && r !== a)))
										return this
									if (f !== this._dur) return this.render(e, t, i)
								}
								if (
									((this._tTime = m),
									(this._time = n),
									!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
									(this.ratio = c = (d || this._ease)(n / f)),
									this._from && (this.ratio = c = 1 - c),
									n && !h && !t && !r && (ni(this, 'onStart'), this._tTime !== m))
								)
									return this
								for (s = this._pt; s; ) s.r(c, s.d), (s = s._next)
								;(u && u.render(e < 0 ? e : u._dur * u._ease(n / this._dur), t, i)) ||
									(this._startAt && (this._zTime = e)),
									this._onUpdate && !t && (g && Et(this, e, 0, i), ni(this, 'onUpdate')),
									this._repeat &&
										r !== a &&
										this.vars.onRepeat &&
										!t &&
										this.parent &&
										ni(this, 'onRepeat'),
									(m !== this._tDur && m) ||
										this._tTime !== m ||
										(g && !this._onUpdate && Et(this, e, 0, !0),
										(e || !f) &&
											((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) &&
											wt(this, 1),
										t ||
											(g && !h) ||
											!(m || h || l) ||
											(ni(this, m === p ? 'onComplete' : 'onReverseComplete', !0),
											this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
							}
						} else
							!(function (e, t, i, n) {
								var s,
									r,
									o,
									a = e.ratio,
									l =
										t < 0 ||
										(!t &&
											((!e._start && kt(e) && (e._initted || !zt(e))) ||
												((e._ts < 0 || e._dp._ts < 0) && !zt(e))))
											? 0
											: 1,
									c = e._rDelay,
									u = 0
								if (
									(c &&
										e._repeat &&
										((u = $t(0, e._tDur, t)),
										(r = Tt(u, c)),
										e._yoyo && 1 & r && (l = 1 - l),
										r !== Tt(e._tTime, c) &&
											((a = 1 - l),
											e.vars.repeatRefresh && e._initted && e.invalidate())),
									l !== a || te || n || e._zTime === fe || (!t && e._zTime))
								) {
									if (!e._initted && Lt(e, t, n, i, u)) return
									for (
										o = e._zTime,
											e._zTime = t || (i ? fe : 0),
											i || (i = t && !o),
											e.ratio = l,
											e._from && (l = 1 - l),
											e._time = 0,
											e._tTime = u,
											s = e._pt;
										s;

									)
										s.r(l, s.d), (s = s._next)
									t < 0 && Et(e, t, 0, !0),
										e._onUpdate && !i && ni(e, 'onUpdate'),
										u && e._repeat && !i && e.parent && ni(e, 'onRepeat'),
										(t >= e._tDur || t < 0) &&
											e.ratio === l &&
											(l && wt(e, 1),
											i ||
												te ||
												(ni(e, l ? 'onComplete' : 'onReverseComplete', !0),
												e._prom && e._prom()))
								} else e._zTime || (e._zTime = t)
							})(this, e, t, i)
						return this
					}),
					(i.targets = function () {
						return this._targets
					}),
					(i.invalidate = function (t) {
						return (
							(!t || !this.vars.runBackwards) && (this._startAt = 0),
							(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
							(this._ptLookup = []),
							this.timeline && this.timeline.invalidate(t),
							e.prototype.invalidate.call(this, t)
						)
					}),
					(i.resetTo = function (e, t, i, n, s) {
						ue || mi.wake(), this._ts || this.play()
						var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts)
						return (
							this._initted || Ii(this, r),
							(function (e, t, i, n, s, r, o, a) {
								var l,
									c,
									u,
									d,
									h = ((e._pt && e._ptCache) || (e._ptCache = {}))[t]
								if (!h)
									for (
										h = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length;
										d--;

									) {
										if ((l = u[d][t]) && l.d && l.d._pt)
											for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next
										if (!l)
											return (
												(Li = 1),
												(e.vars[t] = '+=0'),
												Ii(e, o),
												(Li = 0),
												a ? $e(t + ' not eligible for reset') : 1
											)
										h.push(l)
									}
								for (d = h.length; d--; )
									((l = (c = h[d])._pt || c).s =
										(!n && 0 !== n) || s ? l.s + (n || 0) + r * l.c : n),
										(l.c = i - l.s),
										c.e && (c.e = ot(i) + qt(c.e)),
										c.b && (c.b = l.s + qt(c.b))
							})(this, e, t, i, n, this._ease(r / this._dur), r, s)
								? this.resetTo(e, t, i, n, 1)
								: (Pt(this, 0),
								  this.parent ||
										yt(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
								  this.render(0))
						)
					}),
					(i.kill = function (e, t) {
						if ((void 0 === t && (t = 'all'), !(e || (t && 'all' !== t))))
							return (this._lazy = this._pt = 0), this.parent ? si(this) : this
						if (this.timeline) {
							var i = this.timeline.totalDuration()
							return (
								this.timeline.killTweensOf(e, t, Oi && !0 !== Oi.vars.overwrite)._first ||
									si(this),
								this.parent &&
									i !== this.timeline.totalDuration() &&
									Rt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
								this
							)
						}
						var n,
							s,
							r,
							o,
							a,
							l,
							c,
							u = this._targets,
							d = e ? Xt(e) : u,
							h = this._ptLookup,
							p = this._pt
						if (
							(!t || 'all' === t) &&
							(function (e, t) {
								for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
								return i < 0
							})(u, d)
						)
							return 'all' === t && (this._pt = 0), si(this)
						for (
							n = this._op = this._op || [],
								'all' !== t &&
									(we(t) &&
										((a = {}),
										rt(t, function (e) {
											return (a[e] = 1)
										}),
										(t = a)),
									(t = (function (e, t) {
										var i,
											n,
											s,
											r,
											o = e[0] ? nt(e[0]).harness : 0,
											a = o && o.aliases
										if (!a) return t
										for (n in ((i = gt({}, t)), a))
											if ((n in i))
												for (s = (r = a[n].split(',')).length; s--; ) i[r[s]] = i[n]
										return i
									})(u, t))),
								c = u.length;
							c--;

						)
							if (~d.indexOf(u[c]))
								for (a in ((s = h[c]),
								'all' === t
									? ((n[c] = t), (o = s), (r = {}))
									: ((r = n[c] = n[c] || {}), (o = t)),
								o))
									(l = s && s[a]) &&
										(('kill' in l.d && !0 !== l.d.kill(a)) || Dt(this, l, '_pt'),
										delete s[a]),
										'all' !== r && (r[a] = 1)
						return this._initted && !this._pt && p && si(this), this
					}),
					(t.to = function (e, i) {
						return new t(e, i, arguments[2])
					}),
					(t.from = function (e, t) {
						return jt(1, arguments)
					}),
					(t.delayedCall = function (e, i, n, s) {
						return new t(i, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: e,
							onComplete: i,
							onReverseComplete: i,
							onCompleteParams: n,
							onReverseCompleteParams: n,
							callbackScope: s,
						})
					}),
					(t.fromTo = function (e, t, i) {
						return jt(2, arguments)
					}),
					(t.set = function (e, i) {
						return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new t(e, i)
					}),
					(t.killTweensOf = function (e, t, i) {
						return ne.killTweensOf(e, t, i)
					}),
					t
				)
			})(Fi)
			ft($i.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
				rt('staggerTo,staggerFrom,staggerFromTo', function (e) {
					$i[e] = function () {
						var t = new Ai(),
							i = Vt.call(arguments, 0)
						return i.splice('staggerFromTo' === e ? 5 : 4, 0, 0), t[e].apply(t, i)
					}
				})
			var qi = function (e, t, i) {
					return (e[t] = i)
				},
				Vi = function (e, t, i) {
					return e[t](i)
				},
				Yi = function (e, t, i, n) {
					return e[t](n.fp, i)
				},
				Xi = function (e, t, i) {
					return e.setAttribute(t, i)
				},
				Gi = function (e, t) {
					return xe(e[t]) ? Vi : _e(e[t]) && e.setAttribute ? Xi : qi
				},
				Wi = function (e, t) {
					return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
				},
				Ui = function (e, t) {
					return t.set(t.t, t.p, !!(t.s + t.c * e), t)
				},
				Zi = function (e, t) {
					var i = t._pt,
						n = ''
					if (!e && t.b) n = t.b
					else if (1 === e && t.e) n = t.e
					else {
						for (; i; )
							(n =
								i.p +
								(i.m ? i.m(i.s + i.c * e) : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
								n),
								(i = i._next)
						n += t.c
					}
					t.set(t.t, t.p, n, t)
				},
				Ki = function (e, t) {
					for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next)
				},
				Ji = function (e, t, i, n) {
					for (var s, r = this._pt; r; )
						(s = r._next), r.p === n && r.modifier(e, t, i), (r = s)
				},
				Qi = function (e) {
					for (var t, i, n = this._pt; n; )
						(i = n._next),
							(n.p === e && !n.op) || n.op === e ? Dt(this, n, '_pt') : n.dep || (t = 1),
							(n = i)
					return !t
				},
				en = function (e, t, i, n) {
					n.mSet(e, t, n.m.call(n.tween, i, n.mt), n)
				},
				tn = function (e) {
					for (var t, i, n, s, r = e._pt; r; ) {
						for (t = r._next, i = n; i && i.pr > r.pr; ) i = i._next
						;(r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
							(r._next = i) ? (i._prev = r) : (s = r),
							(r = t)
					}
					e._pt = n
				},
				nn = (function () {
					function e(e, t, i, n, s, r, o, a, l) {
						;(this.t = t),
							(this.s = n),
							(this.c = s),
							(this.p = i),
							(this.r = r || Wi),
							(this.d = o || this),
							(this.set = a || qi),
							(this.pr = l || 0),
							(this._next = e),
							e && (e._prev = this)
					}
					return (
						(e.prototype.modifier = function (e, t, i) {
							;(this.mSet = this.mSet || this.set),
								(this.set = en),
								(this.m = e),
								(this.mt = i),
								(this.tween = t)
						}),
						e
					)
				})()
			rt(
				tt +
					'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
				function (e) {
					return (We[e] = 1)
				}
			),
				(Be.TweenMax = Be.TweenLite = $i),
				(Be.TimelineLite = Be.TimelineMax = Ai),
				(ne = new Ai({
					sortChildren: !1,
					defaults: he,
					autoRemoveChildren: !0,
					id: 'root',
					smoothChildTiming: !0,
				})),
				(de.stringFilter = gi)
			var sn = [],
				rn = {},
				on = [],
				an = 0,
				ln = 0,
				cn = function (e) {
					return (rn[e] || on).map(function (e) {
						return e()
					})
				},
				un = function () {
					var e = Date.now(),
						t = []
					e - an > 2 &&
						(cn('matchMediaInit'),
						sn.forEach(function (e) {
							var i,
								n,
								s,
								r,
								o = e.queries,
								a = e.conditions
							for (n in o)
								(i = se.matchMedia(o[n]).matches) && (s = 1),
									i !== a[n] && ((a[n] = i), (r = 1))
							r && (e.revert(), s && t.push(e))
						}),
						cn('matchMediaRevert'),
						t.forEach(function (e) {
							return e.onMatch(e, function (t) {
								return e.add(null, t)
							})
						}),
						(an = e),
						cn('matchMedia'))
				},
				dn = (function () {
					function e(e, t) {
						;(this.selector = t && Gt(t)),
							(this.data = []),
							(this._r = []),
							(this.isReverted = !1),
							(this.id = ln++),
							e && this.add(e)
					}
					var t = e.prototype
					return (
						(t.add = function (e, t, i) {
							xe(e) && ((i = t), (t = e), (e = xe))
							var n = this,
								s = function () {
									var e,
										s = ie,
										r = n.selector
									return (
										s && s !== n && s.data.push(n),
										i && (n.selector = Gt(i)),
										(ie = n),
										(e = t.apply(n, arguments)),
										xe(e) && n._r.push(e),
										(ie = s),
										(n.selector = r),
										(n.isReverted = !1),
										e
									)
								}
							return (
								(n.last = s),
								e === xe
									? s(n, function (e) {
											return n.add(null, e)
									  })
									: e
									? (n[e] = s)
									: s
							)
						}),
						(t.ignore = function (e) {
							var t = ie
							;(ie = null), e(this), (ie = t)
						}),
						(t.getTweens = function () {
							var t = []
							return (
								this.data.forEach(function (i) {
									return i instanceof e
										? t.push.apply(t, i.getTweens())
										: i instanceof $i &&
												!(i.parent && 'nested' === i.parent.data) &&
												t.push(i)
								}),
								t
							)
						}),
						(t.clear = function () {
							this._r.length = this.data.length = 0
						}),
						(t.kill = function (e, t) {
							var i = this
							if (
								(e
									? (function () {
											for (var t, n = i.getTweens(), s = i.data.length; s--; )
												'isFlip' === (t = i.data[s]).data &&
													(t.revert(),
													t.getChildren(!0, !0, !1).forEach(function (e) {
														return n.splice(n.indexOf(e), 1)
													}))
											for (
												n
													.map(function (e) {
														return {
															g:
																e._dur ||
																e._delay ||
																(e._sat && !e._sat.vars.immediateRender)
																	? e.globalTime(0)
																	: -1 / 0,
															t: e,
														}
													})
													.sort(function (e, t) {
														return t.g - e.g || -1 / 0
													})
													.forEach(function (t) {
														return t.t.revert(e)
													}),
													s = i.data.length;
												s--;

											)
												(t = i.data[s]) instanceof Ai
													? 'nested' !== t.data &&
													  (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
													: !(t instanceof $i) && t.revert && t.revert(e)
											i._r.forEach(function (t) {
												return t(e, i)
											}),
												(i.isReverted = !0)
									  })()
									: this.data.forEach(function (e) {
											return e.kill && e.kill()
									  }),
								this.clear(),
								t)
							)
								for (var n = sn.length; n--; ) sn[n].id === this.id && sn.splice(n, 1)
						}),
						(t.revert = function (e) {
							this.kill(e || {})
						}),
						e
					)
				})(),
				hn = (function () {
					function e(e) {
						;(this.contexts = []), (this.scope = e), ie && ie.data.push(this)
					}
					var t = e.prototype
					return (
						(t.add = function (e, t, i) {
							Ce(e) || (e = { matches: e })
							var n,
								s,
								r,
								o = new dn(0, i || this.scope),
								a = (o.conditions = {})
							for (s in (ie && !o.selector && (o.selector = ie.selector),
							this.contexts.push(o),
							(t = o.add('onMatch', t)),
							(o.queries = e),
							e))
								'all' === s
									? (r = 1)
									: (n = se.matchMedia(e[s])) &&
									  (sn.indexOf(o) < 0 && sn.push(o),
									  (a[s] = n.matches) && (r = 1),
									  n.addListener ? n.addListener(un) : n.addEventListener('change', un))
							return (
								r &&
									t(o, function (e) {
										return o.add(null, e)
									}),
								this
							)
						}),
						(t.revert = function (e) {
							this.kill(e || {})
						}),
						(t.kill = function (e) {
							this.contexts.forEach(function (t) {
								return t.kill(e, !0)
							})
						}),
						e
					)
				})(),
				pn = {
					registerPlugin: function () {
						for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
							t[i] = arguments[i]
						t.forEach(function (e) {
							return oi(e)
						})
					},
					timeline: function (e) {
						return new Ai(e)
					},
					getTweensOf: function (e, t) {
						return ne.getTweensOf(e, t)
					},
					getProperty: function (e, t, i, n) {
						we(e) && (e = Xt(e)[0])
						var s = nt(e || {}).get,
							r = i ? pt : ht
						return (
							'native' === i && (i = ''),
							e
								? t
									? r(((Ke[t] && Ke[t].get) || s)(e, t, i, n))
									: function (t, i, n) {
											return r(((Ke[t] && Ke[t].get) || s)(e, t, i, n))
									  }
								: e
						)
					},
					quickSetter: function (e, t, i) {
						if ((e = Xt(e)).length > 1) {
							var n = e.map(function (e) {
									return mn.quickSetter(e, t, i)
								}),
								s = n.length
							return function (e) {
								for (var t = s; t--; ) n[t](e)
							}
						}
						e = e[0] || {}
						var r = Ke[t],
							o = nt(e),
							a = (o.harness && (o.harness.aliases || {})[t]) || t,
							l = r
								? function (t) {
										var n = new r()
										;(ce._pt = 0),
											n.init(e, i ? t + i : t, ce, 0, [e]),
											n.render(1, n),
											ce._pt && Ki(1, ce)
								  }
								: o.set(e, a)
						return r
							? l
							: function (t) {
									return l(e, a, i ? t + i : t, o, 1)
							  }
					},
					quickTo: function (e, t, i) {
						var n,
							s = mn.to(e, gt((((n = {})[t] = '+=0.1'), (n.paused = !0), n), i || {})),
							r = function (e, i, n) {
								return s.resetTo(t, e, i, n)
							}
						return (r.tween = s), r
					},
					isTweening: function (e) {
						return ne.getTweensOf(e, !0).length > 0
					},
					defaults: function (e) {
						return e && e.ease && (e.ease = _i(e.ease, he.ease)), mt(he, e || {})
					},
					config: function (e) {
						return mt(de, e || {})
					},
					registerEffect: function (e) {
						var t = e.name,
							i = e.effect,
							n = e.plugins,
							s = e.defaults,
							r = e.extendTimeline
						;(n || '').split(',').forEach(function (e) {
							return e && !Ke[e] && !Be[e] && $e(t + ' effect requires ' + e + ' plugin.')
						}),
							(Je[t] = function (e, t, n) {
								return i(Xt(e), ft(t || {}, s), n)
							}),
							r &&
								(Ai.prototype[t] = function (e, i, n) {
									return this.add(Je[t](e, Ce(i) ? i : (n = i) && {}, this), n)
								})
					},
					registerEase: function (e, t) {
						bi[e] = _i(t)
					},
					parseEase: function (e, t) {
						return arguments.length ? _i(e, t) : bi
					},
					getById: function (e) {
						return ne.getById(e)
					},
					exportRoot: function (e, t) {
						void 0 === e && (e = {})
						var i,
							n,
							s = new Ai(e)
						for (
							s.smoothChildTiming = Te(e.smoothChildTiming),
								ne.remove(s),
								s._dp = 0,
								s._time = s._tTime = ne._time,
								i = ne._first;
							i;

						)
							(n = i._next),
								(!t &&
									!i._dur &&
									i instanceof $i &&
									i.vars.onComplete === i._targets[0]) ||
									At(s, i, i._start - i._delay),
								(i = n)
						return At(ne, s, 0), s
					},
					context: function (e, t) {
						return e ? new dn(e, t) : ie
					},
					matchMedia: function (e) {
						return new hn(e)
					},
					matchMediaRefresh: function () {
						return (
							sn.forEach(function (e) {
								var t,
									i,
									n = e.conditions
								for (i in n) n[i] && ((n[i] = !1), (t = 1))
								t && e.revert()
							}) || un()
						)
					},
					addEventListener: function (e, t) {
						var i = rn[e] || (rn[e] = [])
						~i.indexOf(t) || i.push(t)
					},
					removeEventListener: function (e, t) {
						var i = rn[e],
							n = i && i.indexOf(t)
						n >= 0 && i.splice(n, 1)
					},
					utils: {
						wrap: function e(t, i, n) {
							var s = i - t
							return Fe(t)
								? Qt(t, e(0, t.length), i)
								: Ht(n, function (e) {
										return ((s + ((e - t) % s)) % s) + t
								  })
						},
						wrapYoyo: function e(t, i, n) {
							var s = i - t,
								r = 2 * s
							return Fe(t)
								? Qt(t, e(0, t.length - 1), i)
								: Ht(n, function (e) {
										return t + ((e = (r + ((e - t) % r)) % r || 0) > s ? r - e : e)
								  })
						},
						distribute: Ut,
						random: Jt,
						snap: Kt,
						normalize: function (e, t, i) {
							return ti(e, t, 0, 1, i)
						},
						getUnit: qt,
						clamp: function (e, t, i) {
							return Ht(i, function (i) {
								return $t(e, t, i)
							})
						},
						splitColor: ui,
						toArray: Xt,
						selector: Gt,
						mapRange: ti,
						pipe: function () {
							for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
								t[i] = arguments[i]
							return function (e) {
								return t.reduce(function (e, t) {
									return t(e)
								}, e)
							}
						},
						unitize: function (e, t) {
							return function (i) {
								return e(parseFloat(i)) + (t || qt(i))
							}
						},
						interpolate: function e(t, i, n, s) {
							var r = isNaN(t + i)
								? 0
								: function (e) {
										return (1 - e) * t + e * i
								  }
							if (!r) {
								var o,
									a,
									l,
									c,
									u,
									d = we(t),
									h = {}
								if ((!0 === n && (s = 1) && (n = null), d)) (t = { p: t }), (i = { p: i })
								else if (Fe(t) && !Fe(i)) {
									for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
										l.push(e(t[a - 1], t[a]))
									c--,
										(r = function (e) {
											e *= c
											var t = Math.min(u, ~~e)
											return l[t](e - t)
										}),
										(n = i)
								} else s || (t = gt(Fe(t) ? [] : {}, t))
								if (!l) {
									for (o in i) zi.call(h, t, o, 'get', i[o])
									r = function (e) {
										return Ki(e, h) || (d ? t.p : t)
									}
								}
							}
							return Ht(n, r)
						},
						shuffle: Wt,
					},
					install: je,
					effects: Je,
					ticker: mi,
					updateRoot: Ai.updateRoot,
					plugins: Ke,
					globalTimeline: ne,
					core: {
						PropTween: nn,
						globals: qe,
						Tween: $i,
						Timeline: Ai,
						Animation: Fi,
						getCache: nt,
						_removeLinkedListItem: Dt,
						reverting: function () {
							return te
						},
						context: function (e) {
							return e && ie && (ie.data.push(e), (e._ctx = ie)), ie
						},
						suppressOverwrites: function (e) {
							return (ee = e)
						},
					},
				}
			rt('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
				return (pn[e] = $i[e])
			}),
				mi.add(Ai.updateRoot),
				(ce = pn.to({}, { duration: 0 }))
			var fn = function (e, t) {
					for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; ) i = i._next
					return i
				},
				gn = function (e, t) {
					return {
						name: e,
						rawVars: 1,
						init: function (e, i, n) {
							n._onInit = function (e) {
								var n, s
								if (
									(we(i) &&
										((n = {}),
										rt(i, function (e) {
											return (n[e] = 1)
										}),
										(i = n)),
									t)
								) {
									for (s in ((n = {}), i)) n[s] = t(i[s])
									i = n
								}
								!(function (e, t) {
									var i,
										n,
										s,
										r = e._targets
									for (i in t)
										for (n = r.length; n--; )
											(s = e._ptLookup[n][i]) &&
												(s = s.d) &&
												(s._pt && (s = fn(s, i)),
												s && s.modifier && s.modifier(t[i], e, r[n], i))
								})(e, i)
							}
						},
					}
				},
				mn =
					pn.registerPlugin(
						{
							name: 'attr',
							init: function (e, t, i, n, s) {
								var r, o, a
								for (r in ((this.tween = i), t))
									(a = e.getAttribute(r) || ''),
										((o = this.add(
											e,
											'setAttribute',
											(a || 0) + '',
											t[r],
											n,
											s,
											0,
											0,
											r
										)).op = r),
										(o.b = a),
										this._props.push(r)
							},
							render: function (e, t) {
								for (var i = t._pt; i; )
									te ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next)
							},
						},
						{
							name: 'endArray',
							init: function (e, t) {
								for (var i = t.length; i--; )
									this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
							},
						},
						gn('roundProps', Zt),
						gn('modifiers'),
						gn('snap', Kt)
					) || pn
			;($i.version = Ai.version = mn.version = '3.12.5'),
				(ae = 1),
				Se() && vi(),
				bi.Power0,
				bi.Power1,
				bi.Power2,
				bi.Power3,
				bi.Power4,
				bi.Linear,
				bi.Quad,
				bi.Cubic,
				bi.Quart,
				bi.Quint,
				bi.Strong,
				bi.Elastic,
				bi.Back,
				bi.SteppedEase,
				bi.Bounce,
				bi.Sine,
				bi.Expo,
				bi.Circ
			var vn,
				bn,
				yn,
				Dn,
				wn,
				xn,
				En,
				_n,
				Cn = {},
				Tn = 180 / Math.PI,
				Sn = Math.PI / 180,
				Mn = Math.atan2,
				Pn = /([A-Z])/g,
				Fn = /(left|right|width|margin|padding|x)/i,
				An = /[\s,\(]\S/,
				On = {
					autoAlpha: 'opacity,visibility',
					scale: 'scaleX,scaleY',
					alpha: 'opacity',
				},
				Ln = function (e, t) {
					return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
				},
				kn = function (e, t) {
					return t.set(
						t.t,
						t.p,
						1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
						t
					)
				},
				zn = function (e, t) {
					return t.set(
						t.t,
						t.p,
						e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
						t
					)
				},
				Rn = function (e, t) {
					var i = t.s + t.c * e
					t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t)
				},
				In = function (e, t) {
					return t.set(t.t, t.p, e ? t.e : t.b, t)
				},
				Bn = function (e, t) {
					return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
				},
				Nn = function (e, t, i) {
					return (e.style[t] = i)
				},
				jn = function (e, t, i) {
					return e.style.setProperty(t, i)
				},
				Hn = function (e, t, i) {
					return (e._gsap[t] = i)
				},
				$n = function (e, t, i) {
					return (e._gsap.scaleX = e._gsap.scaleY = i)
				},
				qn = function (e, t, i, n, s) {
					var r = e._gsap
					;(r.scaleX = r.scaleY = i), r.renderTransform(s, r)
				},
				Vn = function (e, t, i, n, s) {
					var r = e._gsap
					;(r[t] = i), r.renderTransform(s, r)
				},
				Yn = 'transform',
				Xn = Yn + 'Origin',
				Gn = function e(t, i) {
					var n = this,
						s = this.target,
						r = s.style,
						o = s._gsap
					if (t in Cn && r) {
						if (((this.tfm = this.tfm || {}), 'transform' === t))
							return On.transform.split(',').forEach(function (t) {
								return e.call(n, t, i)
							})
						if (
							(~(t = On[t] || t).indexOf(',')
								? t.split(',').forEach(function (e) {
										return (n.tfm[e] = ds(s, e))
								  })
								: (this.tfm[t] = o.x ? o[t] : ds(s, t)),
							t === Xn && (this.tfm.zOrigin = o.zOrigin),
							this.props.indexOf(Yn) >= 0)
						)
							return
						o.svg &&
							((this.svgo = s.getAttribute('data-svg-origin')),
							this.props.push(Xn, i, '')),
							(t = Yn)
					}
					;(r || i) && this.props.push(t, i, r[t])
				},
				Wn = function (e) {
					e.translate &&
						(e.removeProperty('translate'),
						e.removeProperty('scale'),
						e.removeProperty('rotate'))
				},
				Un = function () {
					var e,
						t,
						i = this.props,
						n = this.target,
						s = n.style,
						r = n._gsap
					for (e = 0; e < i.length; e += 3)
						i[e + 1]
							? (n[i[e]] = i[e + 2])
							: i[e + 2]
							? (s[i[e]] = i[e + 2])
							: s.removeProperty(
									'--' === i[e].substr(0, 2)
										? i[e]
										: i[e].replace(Pn, '-$1').toLowerCase()
							  )
					if (this.tfm) {
						for (t in this.tfm) r[t] = this.tfm[t]
						r.svg &&
							(r.renderTransform(), n.setAttribute('data-svg-origin', this.svgo || '')),
							((e = En()) && e.isStart) ||
								s[Yn] ||
								(Wn(s),
								r.zOrigin &&
									s[Xn] &&
									((s[Xn] += ' ' + r.zOrigin + 'px'),
									(r.zOrigin = 0),
									r.renderTransform()),
								(r.uncache = 1))
					}
				},
				Zn = function (e, t) {
					var i = { target: e, props: [], revert: Un, save: Gn }
					return (
						e._gsap || mn.core.getCache(e),
						t &&
							t.split(',').forEach(function (e) {
								return i.save(e)
							}),
						i
					)
				},
				Kn = function (e, t) {
					var i = bn.createElementNS
						? bn.createElementNS(
								(t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
								e
						  )
						: bn.createElement(e)
					return i && i.style ? i : bn.createElement(e)
				},
				Jn = function e(t, i, n) {
					var s = getComputedStyle(t)
					return (
						s[i] ||
						s.getPropertyValue(i.replace(Pn, '-$1').toLowerCase()) ||
						s.getPropertyValue(i) ||
						(!n && e(t, es(i) || i, 1)) ||
						''
					)
				},
				Qn = 'O,Moz,ms,Ms,Webkit'.split(','),
				es = function (e, t, i) {
					var n = (t || wn).style,
						s = 5
					if (e in n && !i) return e
					for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Qn[s] + e in n); );
					return s < 0 ? null : (3 === s ? 'ms' : s >= 0 ? Qn[s] : '') + e
				},
				ts = function () {
					'undefined' != typeof window &&
						window.document &&
						((vn = window),
						(bn = vn.document),
						(yn = bn.documentElement),
						(wn = Kn('div') || { style: {} }),
						Kn('div'),
						(Yn = es(Yn)),
						(Xn = Yn + 'Origin'),
						(wn.style.cssText =
							'border-width:0;line-height:0;position:absolute;padding:0'),
						(_n = !!es('perspective')),
						(En = mn.core.reverting),
						(Dn = 1))
				},
				is = function e(t) {
					var i,
						n = Kn(
							'svg',
							(this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
								'http://www.w3.org/2000/svg'
						),
						s = this.parentNode,
						r = this.nextSibling,
						o = this.style.cssText
					if ((yn.appendChild(n), n.appendChild(this), (this.style.display = 'block'), t))
						try {
							;(i = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e)
						} catch (e) {}
					else this._gsapBBox && (i = this._gsapBBox())
					return (
						s && (r ? s.insertBefore(this, r) : s.appendChild(this)),
						yn.removeChild(n),
						(this.style.cssText = o),
						i
					)
				},
				ns = function (e, t) {
					for (var i = t.length; i--; )
						if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
				},
				ss = function (e) {
					var t
					try {
						t = e.getBBox()
					} catch (i) {
						t = is.call(e, !0)
					}
					return (
						(t && (t.width || t.height)) || e.getBBox === is || (t = is.call(e, !0)),
						!t || t.width || t.x || t.y
							? t
							: {
									x: +ns(e, ['x', 'cx', 'x1']) || 0,
									y: +ns(e, ['y', 'cy', 'y1']) || 0,
									width: 0,
									height: 0,
							  }
					)
				},
				rs = function (e) {
					return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !ss(e))
				},
				os = function (e, t) {
					if (t) {
						var i,
							n = e.style
						t in Cn && t !== Xn && (t = Yn),
							n.removeProperty
								? (('ms' !== (i = t.substr(0, 2)) && 'webkit' !== t.substr(0, 6)) ||
										(t = '-' + t),
								  n.removeProperty('--' === i ? t : t.replace(Pn, '-$1').toLowerCase()))
								: n.removeAttribute(t)
					}
				},
				as = function (e, t, i, n, s, r) {
					var o = new nn(e._pt, t, i, 0, 1, r ? Bn : In)
					return (e._pt = o), (o.b = n), (o.e = s), e._props.push(i), o
				},
				ls = { deg: 1, rad: 1, turn: 1 },
				cs = { grid: 1, flex: 1 },
				us = function e(t, i, n, s) {
					var r,
						o,
						a,
						l,
						c = parseFloat(n) || 0,
						u = (n + '').trim().substr((c + '').length) || 'px',
						d = wn.style,
						h = Fn.test(i),
						p = 'svg' === t.tagName.toLowerCase(),
						f = (p ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
						g = 100,
						m = 'px' === s,
						v = '%' === s
					if (s === u || !c || ls[s] || ls[u]) return c
					if (
						('px' !== u && !m && (c = e(t, i, n, 'px')),
						(l = t.getCTM && rs(t)),
						(v || '%' === u) && (Cn[i] || ~i.indexOf('adius')))
					)
						return (
							(r = l ? t.getBBox()[h ? 'width' : 'height'] : t[f]),
							ot(v ? (c / r) * g : (c / 100) * r)
						)
					if (
						((d[h ? 'width' : 'height'] = g + (m ? u : s)),
						(o =
							~i.indexOf('adius') || ('em' === s && t.appendChild && !p)
								? t
								: t.parentNode),
						l && (o = (t.ownerSVGElement || {}).parentNode),
						(o && o !== bn && o.appendChild) || (o = bn.body),
						(a = o._gsap) && v && a.width && h && a.time === mi.time && !a.uncache)
					)
						return ot((c / a.width) * g)
					if (!v || ('height' !== i && 'width' !== i))
						(v || '%' === u) && !cs[Jn(o, 'display')] && (d.position = Jn(t, 'position')),
							o === t && (d.position = 'static'),
							o.appendChild(wn),
							(r = wn[f]),
							o.removeChild(wn),
							(d.position = 'absolute')
					else {
						var b = t.style[i]
						;(t.style[i] = g + s), (r = t[f]), b ? (t.style[i] = b) : os(t, i)
					}
					return (
						h && v && (((a = nt(o)).time = mi.time), (a.width = o[f])),
						ot(m ? (r * c) / g : r && c ? (g / r) * c : 0)
					)
				},
				ds = function (e, t, i, n) {
					var s
					return (
						Dn || ts(),
						t in On &&
							'transform' !== t &&
							~(t = On[t]).indexOf(',') &&
							(t = t.split(',')[0]),
						Cn[t] && 'transform' !== t
							? ((s = Es(e, n)),
							  (s =
									'transformOrigin' !== t
										? s[t]
										: s.svg
										? s.origin
										: _s(Jn(e, Xn)) + ' ' + s.zOrigin + 'px'))
							: (!(s = e.style[t]) || 'auto' === s || n || ~(s + '').indexOf('calc(')) &&
							  (s =
									(ms[t] && ms[t](e, t, i)) ||
									Jn(e, t) ||
									st(e, t) ||
									('opacity' === t ? 1 : 0)),
						i && !~(s + '').trim().indexOf(' ') ? us(e, t, s, i) + i : s
					)
				},
				hs = function (e, t, i, n) {
					if (!i || 'none' === i) {
						var s = es(t, e, 1),
							r = s && Jn(e, s, 1)
						r && r !== i
							? ((t = s), (i = r))
							: 'borderColor' === t && (i = Jn(e, 'borderTopColor'))
					}
					var o,
						a,
						l,
						c,
						u,
						d,
						h,
						p,
						f,
						g,
						m,
						v = new nn(this._pt, e.style, t, 0, 1, Zi),
						b = 0,
						y = 0
					if (
						((v.b = i),
						(v.e = n),
						(i += ''),
						'auto' == (n += '') &&
							((d = e.style[t]),
							(e.style[t] = n),
							(n = Jn(e, t) || n),
							d ? (e.style[t] = d) : os(e, t)),
						gi((o = [i, n])),
						(n = o[1]),
						(l = (i = o[0]).match(Le) || []),
						(n.match(Le) || []).length)
					) {
						for (; (a = Le.exec(n)); )
							(h = a[0]),
								(f = n.substring(b, a.index)),
								u
									? (u = (u + 1) % 5)
									: ('rgba(' !== f.substr(-5) && 'hsla(' !== f.substr(-5)) || (u = 1),
								h !== (d = l[y++] || '') &&
									((c = parseFloat(d) || 0),
									(m = d.substr((c + '').length)),
									'=' === h.charAt(1) && (h = lt(c, h) + m),
									(p = parseFloat(h)),
									(g = h.substr((p + '').length)),
									(b = Le.lastIndex - g.length),
									g ||
										((g = g || de.units[t] || m),
										b === n.length && ((n += g), (v.e += g))),
									m !== g && (c = us(e, t, d, g) || 0),
									(v._pt = {
										_next: v._pt,
										p: f || 1 === y ? f : ',',
										s: c,
										c: p - c,
										m: (u && u < 4) || 'zIndex' === t ? Math.round : 0,
									}))
						v.c = b < n.length ? n.substring(b, n.length) : ''
					} else v.r = 'display' === t && 'none' === n ? Bn : In
					return ze.test(n) && (v.e = 0), (this._pt = v), v
				},
				ps = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
				fs = function (e) {
					var t = e.split(' '),
						i = t[0],
						n = t[1] || '50%'
					return (
						('top' !== i && 'bottom' !== i && 'left' !== n && 'right' !== n) ||
							((e = i), (i = n), (n = e)),
						(t[0] = ps[i] || i),
						(t[1] = ps[n] || n),
						t.join(' ')
					)
				},
				gs = function (e, t) {
					if (t.tween && t.tween._time === t.tween._dur) {
						var i,
							n,
							s,
							r = t.t,
							o = r.style,
							a = t.u,
							l = r._gsap
						if ('all' === a || !0 === a) (o.cssText = ''), (n = 1)
						else
							for (s = (a = a.split(',')).length; --s > -1; )
								(i = a[s]),
									Cn[i] && ((n = 1), (i = 'transformOrigin' === i ? Xn : Yn)),
									os(r, i)
						n &&
							(os(r, Yn),
							l &&
								(l.svg && r.removeAttribute('transform'),
								Es(r, 1),
								(l.uncache = 1),
								Wn(o)))
					}
				},
				ms = {
					clearProps: function (e, t, i, n, s) {
						if ('isFromStart' !== s.data) {
							var r = (e._pt = new nn(e._pt, t, i, 0, 0, gs))
							return (r.u = n), (r.pr = -10), (r.tween = s), e._props.push(i), 1
						}
					},
				},
				vs = [1, 0, 0, 1, 0, 0],
				bs = {},
				ys = function (e) {
					return 'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e
				},
				Ds = function (e) {
					var t = Jn(e, Yn)
					return ys(t) ? vs : t.substr(7).match(Oe).map(ot)
				},
				ws = function (e, t) {
					var i,
						n,
						s,
						r,
						o = e._gsap || nt(e),
						a = e.style,
						l = Ds(e)
					return o.svg && e.getAttribute('transform')
						? '1,0,0,1,0,0' ===
						  (l = [
								(s = e.transform.baseVal.consolidate().matrix).a,
								s.b,
								s.c,
								s.d,
								s.e,
								s.f,
						  ]).join(',')
							? vs
							: l
						: (l !== vs ||
								e.offsetParent ||
								e === yn ||
								o.svg ||
								((s = a.display),
								(a.display = 'block'),
								((i = e.parentNode) && e.offsetParent) ||
									((r = 1), (n = e.nextElementSibling), yn.appendChild(e)),
								(l = Ds(e)),
								s ? (a.display = s) : os(e, 'display'),
								r &&
									(n ? i.insertBefore(e, n) : i ? i.appendChild(e) : yn.removeChild(e))),
						  t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
				},
				xs = function (e, t, i, n, s, r) {
					var o,
						a,
						l,
						c = e._gsap,
						u = s || ws(e, !0),
						d = c.xOrigin || 0,
						h = c.yOrigin || 0,
						p = c.xOffset || 0,
						f = c.yOffset || 0,
						g = u[0],
						m = u[1],
						v = u[2],
						b = u[3],
						y = u[4],
						D = u[5],
						w = t.split(' '),
						x = parseFloat(w[0]) || 0,
						E = parseFloat(w[1]) || 0
					i
						? u !== vs &&
						  (a = g * b - m * v) &&
						  ((l = x * (-m / a) + E * (g / a) - (g * D - m * y) / a),
						  (x = x * (b / a) + E * (-v / a) + (v * D - b * y) / a),
						  (E = l))
						: ((x = (o = ss(e)).x + (~w[0].indexOf('%') ? (x / 100) * o.width : x)),
						  (E = o.y + (~(w[1] || w[0]).indexOf('%') ? (E / 100) * o.height : E))),
						n || (!1 !== n && c.smooth)
							? ((y = x - d),
							  (D = E - h),
							  (c.xOffset = p + (y * g + D * v) - y),
							  (c.yOffset = f + (y * m + D * b) - D))
							: (c.xOffset = c.yOffset = 0),
						(c.xOrigin = x),
						(c.yOrigin = E),
						(c.smooth = !!n),
						(c.origin = t),
						(c.originIsAbsolute = !!i),
						(e.style[Xn] = '0px 0px'),
						r &&
							(as(r, c, 'xOrigin', d, x),
							as(r, c, 'yOrigin', h, E),
							as(r, c, 'xOffset', p, c.xOffset),
							as(r, c, 'yOffset', f, c.yOffset)),
						e.setAttribute('data-svg-origin', x + ' ' + E)
				},
				Es = function (e, t) {
					var i = e._gsap || new Pi(e)
					if ('x' in i && !t && !i.uncache) return i
					var n,
						s,
						r,
						o,
						a,
						l,
						c,
						u,
						d,
						h,
						p,
						f,
						g,
						m,
						v,
						b,
						y,
						D,
						w,
						x,
						E,
						_,
						C,
						T,
						S,
						M,
						P,
						F,
						A,
						O,
						L,
						k,
						z = e.style,
						R = i.scaleX < 0,
						I = 'px',
						B = 'deg',
						N = getComputedStyle(e),
						j = Jn(e, Xn) || '0'
					return (
						(n = s = r = l = c = u = d = h = p = 0),
						(o = a = 1),
						(i.svg = !(!e.getCTM || !rs(e))),
						N.translate &&
							(('none' === N.translate && 'none' === N.scale && 'none' === N.rotate) ||
								(z[Yn] =
									('none' !== N.translate
										? 'translate3d(' +
										  (N.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
										  ') '
										: '') +
									('none' !== N.rotate ? 'rotate(' + N.rotate + ') ' : '') +
									('none' !== N.scale
										? 'scale(' + N.scale.split(' ').join(',') + ') '
										: '') +
									('none' !== N[Yn] ? N[Yn] : '')),
							(z.scale = z.rotate = z.translate = 'none')),
						(m = ws(e, i.svg)),
						i.svg &&
							(i.uncache
								? ((S = e.getBBox()),
								  (j = i.xOrigin - S.x + 'px ' + (i.yOrigin - S.y) + 'px'),
								  (T = ''))
								: (T = !t && e.getAttribute('data-svg-origin')),
							xs(e, T || j, !!T || i.originIsAbsolute, !1 !== i.smooth, m)),
						(f = i.xOrigin || 0),
						(g = i.yOrigin || 0),
						m !== vs &&
							((D = m[0]),
							(w = m[1]),
							(x = m[2]),
							(E = m[3]),
							(n = _ = m[4]),
							(s = C = m[5]),
							6 === m.length
								? ((o = Math.sqrt(D * D + w * w)),
								  (a = Math.sqrt(E * E + x * x)),
								  (l = D || w ? Mn(w, D) * Tn : 0),
								  (d = x || E ? Mn(x, E) * Tn + l : 0) &&
										(a *= Math.abs(Math.cos(d * Sn))),
								  i.svg && ((n -= f - (f * D + g * x)), (s -= g - (f * w + g * E))))
								: ((k = m[6]),
								  (O = m[7]),
								  (P = m[8]),
								  (F = m[9]),
								  (A = m[10]),
								  (L = m[11]),
								  (n = m[12]),
								  (s = m[13]),
								  (r = m[14]),
								  (c = (v = Mn(k, A)) * Tn),
								  v &&
										((T = _ * (b = Math.cos(-v)) + P * (y = Math.sin(-v))),
										(S = C * b + F * y),
										(M = k * b + A * y),
										(P = _ * -y + P * b),
										(F = C * -y + F * b),
										(A = k * -y + A * b),
										(L = O * -y + L * b),
										(_ = T),
										(C = S),
										(k = M)),
								  (u = (v = Mn(-x, A)) * Tn),
								  v &&
										((b = Math.cos(-v)),
										(L = E * (y = Math.sin(-v)) + L * b),
										(D = T = D * b - P * y),
										(w = S = w * b - F * y),
										(x = M = x * b - A * y)),
								  (l = (v = Mn(w, D)) * Tn),
								  v &&
										((T = D * (b = Math.cos(v)) + w * (y = Math.sin(v))),
										(S = _ * b + C * y),
										(w = w * b - D * y),
										(C = C * b - _ * y),
										(D = T),
										(_ = S)),
								  c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
								  (o = ot(Math.sqrt(D * D + w * w + x * x))),
								  (a = ot(Math.sqrt(C * C + k * k))),
								  (v = Mn(_, C)),
								  (d = Math.abs(v) > 2e-4 ? v * Tn : 0),
								  (p = L ? 1 / (L < 0 ? -L : L) : 0)),
							i.svg &&
								((T = e.getAttribute('transform')),
								(i.forceCSS = e.setAttribute('transform', '') || !ys(Jn(e, Yn))),
								T && e.setAttribute('transform', T))),
						Math.abs(d) > 90 &&
							Math.abs(d) < 270 &&
							(R
								? ((o *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180))
								: ((a *= -1), (d += d <= 0 ? 180 : -180))),
						(t = t || i.uncache),
						(i.x =
							n -
							((i.xPercent =
								n &&
								((!t && i.xPercent) ||
									(Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
								? (e.offsetWidth * i.xPercent) / 100
								: 0) +
							I),
						(i.y =
							s -
							((i.yPercent =
								s &&
								((!t && i.yPercent) ||
									(Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0)))
								? (e.offsetHeight * i.yPercent) / 100
								: 0) +
							I),
						(i.z = r + I),
						(i.scaleX = ot(o)),
						(i.scaleY = ot(a)),
						(i.rotation = ot(l) + B),
						(i.rotationX = ot(c) + B),
						(i.rotationY = ot(u) + B),
						(i.skewX = d + B),
						(i.skewY = h + B),
						(i.transformPerspective = p + I),
						(i.zOrigin = parseFloat(j.split(' ')[2]) || (!t && i.zOrigin) || 0) &&
							(z[Xn] = _s(j)),
						(i.xOffset = i.yOffset = 0),
						(i.force3D = de.force3D),
						(i.renderTransform = i.svg ? As : _n ? Fs : Ts),
						(i.uncache = 0),
						i
					)
				},
				_s = function (e) {
					return (e = e.split(' '))[0] + ' ' + e[1]
				},
				Cs = function (e, t, i) {
					var n = qt(t)
					return ot(parseFloat(t) + parseFloat(us(e, 'x', i + 'px', n))) + n
				},
				Ts = function (e, t) {
					;(t.z = '0px'), (t.rotationY = t.rotationX = '0deg'), (t.force3D = 0), Fs(e, t)
				},
				Ss = '0deg',
				Ms = '0px',
				Ps = ') ',
				Fs = function (e, t) {
					var i = t || this,
						n = i.xPercent,
						s = i.yPercent,
						r = i.x,
						o = i.y,
						a = i.z,
						l = i.rotation,
						c = i.rotationY,
						u = i.rotationX,
						d = i.skewX,
						h = i.skewY,
						p = i.scaleX,
						f = i.scaleY,
						g = i.transformPerspective,
						m = i.force3D,
						v = i.target,
						b = i.zOrigin,
						y = '',
						D = ('auto' === m && e && 1 !== e) || !0 === m
					if (b && (u !== Ss || c !== Ss)) {
						var w,
							x = parseFloat(c) * Sn,
							E = Math.sin(x),
							_ = Math.cos(x)
						;(x = parseFloat(u) * Sn),
							(w = Math.cos(x)),
							(r = Cs(v, r, E * w * -b)),
							(o = Cs(v, o, -Math.sin(x) * -b)),
							(a = Cs(v, a, _ * w * -b + b))
					}
					g !== Ms && (y += 'perspective(' + g + Ps),
						(n || s) && (y += 'translate(' + n + '%, ' + s + '%) '),
						(D || r !== Ms || o !== Ms || a !== Ms) &&
							(y +=
								a !== Ms || D
									? 'translate3d(' + r + ', ' + o + ', ' + a + ') '
									: 'translate(' + r + ', ' + o + Ps),
						l !== Ss && (y += 'rotate(' + l + Ps),
						c !== Ss && (y += 'rotateY(' + c + Ps),
						u !== Ss && (y += 'rotateX(' + u + Ps),
						(d === Ss && h === Ss) || (y += 'skew(' + d + ', ' + h + Ps),
						(1 === p && 1 === f) || (y += 'scale(' + p + ', ' + f + Ps),
						(v.style[Yn] = y || 'translate(0, 0)')
				},
				As = function (e, t) {
					var i,
						n,
						s,
						r,
						o,
						a = t || this,
						l = a.xPercent,
						c = a.yPercent,
						u = a.x,
						d = a.y,
						h = a.rotation,
						p = a.skewX,
						f = a.skewY,
						g = a.scaleX,
						m = a.scaleY,
						v = a.target,
						b = a.xOrigin,
						y = a.yOrigin,
						D = a.xOffset,
						w = a.yOffset,
						x = a.forceCSS,
						E = parseFloat(u),
						_ = parseFloat(d)
					;(h = parseFloat(h)),
						(p = parseFloat(p)),
						(f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
						h || p
							? ((h *= Sn),
							  (p *= Sn),
							  (i = Math.cos(h) * g),
							  (n = Math.sin(h) * g),
							  (s = Math.sin(h - p) * -m),
							  (r = Math.cos(h - p) * m),
							  p &&
									((f *= Sn),
									(o = Math.tan(p - f)),
									(s *= o = Math.sqrt(1 + o * o)),
									(r *= o),
									f && ((o = Math.tan(f)), (i *= o = Math.sqrt(1 + o * o)), (n *= o))),
							  (i = ot(i)),
							  (n = ot(n)),
							  (s = ot(s)),
							  (r = ot(r)))
							: ((i = g), (r = m), (n = s = 0)),
						((E && !~(u + '').indexOf('px')) || (_ && !~(d + '').indexOf('px'))) &&
							((E = us(v, 'x', u, 'px')), (_ = us(v, 'y', d, 'px'))),
						(b || y || D || w) &&
							((E = ot(E + b - (b * i + y * s) + D)),
							(_ = ot(_ + y - (b * n + y * r) + w))),
						(l || c) &&
							((o = v.getBBox()),
							(E = ot(E + (l / 100) * o.width)),
							(_ = ot(_ + (c / 100) * o.height))),
						(o = 'matrix(' + i + ',' + n + ',' + s + ',' + r + ',' + E + ',' + _ + ')'),
						v.setAttribute('transform', o),
						x && (v.style[Yn] = o)
				},
				Os = function (e, t, i, n, s) {
					var r,
						o,
						a = 360,
						l = we(s),
						c = parseFloat(s) * (l && ~s.indexOf('rad') ? Tn : 1) - n,
						u = n + c + 'deg'
					return (
						l &&
							('short' === (r = s.split('_')[1]) &&
								(c %= a) != c % 180 &&
								(c += c < 0 ? a : -360),
							'cw' === r && c < 0
								? (c = ((c + 36e9) % a) - ~~(c / a) * a)
								: 'ccw' === r && c > 0 && (c = ((c - 36e9) % a) - ~~(c / a) * a)),
						(e._pt = o = new nn(e._pt, t, i, n, c, kn)),
						(o.e = u),
						(o.u = 'deg'),
						e._props.push(i),
						o
					)
				},
				Ls = function (e, t) {
					for (var i in t) e[i] = t[i]
					return e
				},
				ks = function (e, t, i) {
					var n,
						s,
						r,
						o,
						a,
						l,
						c,
						u = Ls({}, i._gsap),
						d = i.style
					for (s in (u.svg
						? ((r = i.getAttribute('transform')),
						  i.setAttribute('transform', ''),
						  (d[Yn] = t),
						  (n = Es(i, 1)),
						  os(i, Yn),
						  i.setAttribute('transform', r))
						: ((r = getComputedStyle(i)[Yn]), (d[Yn] = t), (n = Es(i, 1)), (d[Yn] = r)),
					Cn))
						(r = u[s]) !== (o = n[s]) &&
							'perspective,force3D,transformOrigin,svgOrigin'.indexOf(s) < 0 &&
							((a = qt(r) !== (c = qt(o)) ? us(i, s, r, c) : parseFloat(r)),
							(l = parseFloat(o)),
							(e._pt = new nn(e._pt, n, s, a, l - a, Ln)),
							(e._pt.u = c || 0),
							e._props.push(s))
					Ls(n, u)
				}
			rt('padding,margin,Width,Radius', function (e, t) {
				var i = 'Top',
					n = 'Right',
					s = 'Bottom',
					r = 'Left',
					o = (t < 3 ? [i, n, s, r] : [i + r, i + n, s + n, s + r]).map(function (i) {
						return t < 2 ? e + i : 'border' + i + e
					})
				ms[t > 1 ? 'border' + e : e] = function (e, t, i, n, s) {
					var r, a
					if (arguments.length < 4)
						return (
							(r = o.map(function (t) {
								return ds(e, t, i)
							})),
							5 === (a = r.join(' ')).split(r[0]).length ? r[0] : a
						)
					;(r = (n + '').split(' ')),
						(a = {}),
						o.forEach(function (e, t) {
							return (a[e] = r[t] = r[t] || r[((t - 1) / 2) | 0])
						}),
						e.init(t, a, s)
				}
			})
			var zs,
				Rs,
				Is = {
					name: 'css',
					register: ts,
					targetTest: function (e) {
						return e.style && e.nodeType
					},
					init: function (e, t, i, n, s) {
						var r,
							o,
							a,
							l,
							c,
							u,
							d,
							h,
							p,
							f,
							g,
							m,
							v,
							b,
							y,
							D,
							w = this._props,
							x = e.style,
							E = i.vars.startAt
						for (d in (Dn || ts(),
						(this.styles = this.styles || Zn(e)),
						(D = this.styles.props),
						(this.tween = i),
						t))
							if ('autoRound' !== d && ((o = t[d]), !Ke[d] || !Ri(d, t, i, n, e, s)))
								if (
									((c = typeof o),
									(u = ms[d]),
									'function' === c && (c = typeof (o = o.call(i, n, e, s))),
									'string' === c && ~o.indexOf('random(') && (o = ei(o)),
									u)
								)
									u(this, e, d, o, i) && (y = 1)
								else if ('--' === d.substr(0, 2))
									(r = (getComputedStyle(e).getPropertyValue(d) + '').trim()),
										(o += ''),
										(pi.lastIndex = 0),
										pi.test(r) || ((h = qt(r)), (p = qt(o))),
										p ? h !== p && (r = us(e, d, r, p) + p) : h && (o += h),
										this.add(x, 'setProperty', r, o, n, s, 0, 0, d),
										w.push(d),
										D.push(d, 0, x[d])
								else if ('undefined' !== c) {
									if (
										(E && d in E
											? ((r = 'function' == typeof E[d] ? E[d].call(i, n, e, s) : E[d]),
											  we(r) && ~r.indexOf('random(') && (r = ei(r)),
											  qt(r + '') ||
													'auto' === r ||
													(r += de.units[d] || qt(ds(e, d)) || ''),
											  '=' === (r + '').charAt(1) && (r = ds(e, d)))
											: (r = ds(e, d)),
										(l = parseFloat(r)),
										(f = 'string' === c && '=' === o.charAt(1) && o.substr(0, 2)) &&
											(o = o.substr(2)),
										(a = parseFloat(o)),
										d in On &&
											('autoAlpha' === d &&
												(1 === l && 'hidden' === ds(e, 'visibility') && a && (l = 0),
												D.push('visibility', 0, x.visibility),
												as(
													this,
													x,
													'visibility',
													l ? 'inherit' : 'hidden',
													a ? 'inherit' : 'hidden',
													!a
												)),
											'scale' !== d &&
												'transform' !== d &&
												~(d = On[d]).indexOf(',') &&
												(d = d.split(',')[0])),
										(g = d in Cn))
									)
										if (
											(this.styles.save(d),
											m ||
												(((v = e._gsap).renderTransform && !t.parseTransform) ||
													Es(e, t.parseTransform),
												(b = !1 !== t.smoothOrigin && v.smooth),
												((m = this._pt =
													new nn(
														this._pt,
														x,
														Yn,
														0,
														1,
														v.renderTransform,
														v,
														0,
														-1
													)).dep = 1)),
											'scale' === d)
										)
											(this._pt = new nn(
												this._pt,
												v,
												'scaleY',
												v.scaleY,
												(f ? lt(v.scaleY, f + a) : a) - v.scaleY || 0,
												Ln
											)),
												(this._pt.u = 0),
												w.push('scaleY', d),
												(d += 'X')
										else {
											if ('transformOrigin' === d) {
												D.push(Xn, 0, x[Xn]),
													(o = fs(o)),
													v.svg
														? xs(e, o, 0, b, 0, this)
														: ((p = parseFloat(o.split(' ')[2]) || 0) !== v.zOrigin &&
																as(this, v, 'zOrigin', v.zOrigin, p),
														  as(this, x, d, _s(r), _s(o)))
												continue
											}
											if ('svgOrigin' === d) {
												xs(e, o, 1, b, 0, this)
												continue
											}
											if (d in bs) {
												Os(this, v, d, l, f ? lt(l, f + o) : o)
												continue
											}
											if ('smoothOrigin' === d) {
												as(this, v, 'smooth', v.smooth, o)
												continue
											}
											if ('force3D' === d) {
												v[d] = o
												continue
											}
											if ('transform' === d) {
												ks(this, o, e)
												continue
											}
										}
									else d in x || (d = es(d) || d)
									if (g || ((a || 0 === a) && (l || 0 === l) && !An.test(o) && d in x))
										a || (a = 0),
											(h = (r + '').substr((l + '').length)) !==
												(p = qt(o) || (d in de.units ? de.units[d] : h)) &&
												(l = us(e, d, r, p)),
											(this._pt = new nn(
												this._pt,
												g ? v : x,
												d,
												l,
												(f ? lt(l, f + a) : a) - l,
												g || ('px' !== p && 'zIndex' !== d) || !1 === t.autoRound
													? Ln
													: Rn
											)),
											(this._pt.u = p || 0),
											h !== p && '%' !== p && ((this._pt.b = r), (this._pt.r = zn))
									else if (d in x) hs.call(this, e, d, r, f ? f + o : o)
									else if (d in e) this.add(e, d, r || e[d], f ? f + o : o, n, s)
									else if ('parseTransform' !== d) {
										He(d, o)
										continue
									}
									g || (d in x ? D.push(d, 0, x[d]) : D.push(d, 1, r || e[d])), w.push(d)
								}
						y && tn(this)
					},
					render: function (e, t) {
						if (t.tween._time || !En())
							for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next)
						else t.styles.revert()
					},
					get: ds,
					aliases: On,
					getSetter: function (e, t, i) {
						var n = On[t]
						return (
							n && n.indexOf(',') < 0 && (t = n),
							t in Cn && t !== Xn && (e._gsap.x || ds(e, 'x'))
								? i && xn === i
									? 'scale' === t
										? $n
										: Hn
									: (xn = i || {}) && ('scale' === t ? qn : Vn)
								: e.style && !_e(e.style[t])
								? Nn
								: ~t.indexOf('-')
								? jn
								: Gi(e, t)
						)
					},
					core: { _removeProperty: os, _getMatrix: ws },
				}
			;(mn.utils.checkPrefix = es),
				(mn.core.getStyleSaver = Zn),
				(Rs = rt(
					'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
						',' +
						(zs = 'rotation,rotationX,rotationY,skewX,skewY') +
						',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
					function (e) {
						Cn[e] = 1
					}
				)),
				rt(zs, function (e) {
					;(de.units[e] = 'deg'), (bs[e] = 1)
				}),
				(On[Rs[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + zs),
				rt(
					'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
					function (e) {
						var t = e.split(':')
						On[t[1]] = Rs[t[0]]
					}
				),
				rt(
					'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
					function (e) {
						de.units[e] = 'px'
					}
				),
				mn.registerPlugin(Is)
			var Bs = mn.registerPlugin(Is) || mn
			if ((Bs.core.Tween, document.querySelector('.preloader'))) {
				document.body.classList.add('scroll-disabled')
				const e = window.location.hash
				e ||
					window.addEventListener('load', () => {
						Bs.timeline({ ease: 'power4.out', defaults: { duration: 0.8 } })
							.to('.preloader__slogan-1', { opacity: 1, translateY: 0 }, 0)
							.to('.preloader__slogan-2', { opacity: 1, translateY: 0 }, '>')
							.to('.preloader__slogan-3', { opacity: 1, translateY: 0 }, '>')
							.to(
								'.preloader',
								{
									yPercent: -105,
									ease: 'power4.inOut',
									delay: 0.5,
									duration: 2,
									onComplete: () => {
										document.body.classList.remove('scroll-disabled'),
											document.querySelector('.preloader').remove(),
											(window.location.hash = '#main-page')
									},
								},
								'>'
							)
					}),
					e &&
						(document.body.classList.remove('scroll-disabled'),
						document.querySelector('.preloader').remove())
			}
			function Ns(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i]
					;(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n)
				}
			}
			var js,
				Hs,
				$s,
				qs,
				Vs,
				Ys,
				Xs,
				Gs,
				Ws,
				Us,
				Zs,
				Ks,
				Js,
				Qs,
				er,
				tr = function () {
					return 'undefined' != typeof window
				},
				ir = function () {
					return js || (tr() && (js = window.gsap) && js.registerPlugin && js)
				},
				nr = function (e) {
					return Ws.maxScroll(e || $s)
				},
				sr = (function () {
					function e(t) {
						var i = this
						Hs ||
							e.register(js) ||
							console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
							(t = this.vars = t || {}),
							Us && Us.kill(),
							(Us = this),
							Qs(this)
						var n,
							s,
							r,
							o,
							a,
							l,
							c,
							u,
							d,
							h,
							p,
							f,
							g,
							m,
							v,
							b,
							y = t,
							D = y.smoothTouch,
							w = y.onUpdate,
							x = y.onStop,
							E = y.smooth,
							_ = y.onFocusIn,
							C = y.normalizeScroll,
							T = y.wholePixels,
							S = this,
							M = t.effectsPrefix || '',
							P = Ws.getScrollFunc($s),
							F =
								1 === Ws.isTouch
									? !0 === D
										? 0.8
										: parseFloat(D) || 0
									: 0 === E || !1 === E
									? 0
									: parseFloat(E) || 0.8,
							A = (F && +t.speed) || 1,
							O = 0,
							L = 0,
							k = 1,
							z = Ks(0),
							R = function () {
								return z.update(-O)
							},
							I = { y: 0 },
							B = function () {
								return (n.style.overflow = 'visible')
							},
							N = function (e) {
								e.update()
								var t = e.getTween()
								t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
									(v = !1),
									e.animation.progress(e.progress, !0)
							},
							j = function (t, i) {
								;((t !== O && !h) || i) &&
									(T && (t = Math.round(t)),
									F &&
										((n.style.transform =
											'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + t + ', 0, 1)'),
										(n._gsap.y = t + 'px')),
									(L = t - O),
									(O = t),
									Ws.isUpdating || e.isRefreshing || Ws.update())
							},
							H = function (e) {
								return arguments.length
									? (e < 0 && (e = 0),
									  (I.y = -e),
									  (v = !0),
									  h ? (O = -e) : j(-e),
									  Ws.isRefreshing ? o.update() : P(e / A),
									  this)
									: -O
							},
							$ =
								'undefined' != typeof ResizeObserver &&
								!1 !== t.autoResize &&
								new ResizeObserver(function () {
									if (!Ws.isRefreshing) {
										var e = nr(s) * A
										e < -O && H(e), er.restart(!0)
									}
								}),
							q = function (e) {
								;(s.scrollTop = 0),
									(e.target.contains && e.target.contains(s)) ||
										(_ && !1 === _(i, e)) ||
										(Ws.isInViewport(e.target) ||
											e.target === b ||
											i.scrollTo(e.target, !1, 'center center'),
										(b = e.target))
							},
							V = function (e, t) {
								if (e < t.start) return e
								var i = isNaN(t.ratio) ? 1 : t.ratio,
									n = t.end - t.start,
									s = e - t.start,
									r = t.offset || 0,
									o = t.pins || [],
									a = o.offset || 0,
									l =
										(t._startClamp && t.start <= 0) || (t.pins && t.pins.offset)
											? 0
											: t._endClamp && t.end === nr()
											? 1
											: 0.5
								return (
									o.forEach(function (t) {
										;(n -= t.distance), t.nativeStart <= e && (s -= t.distance)
									}),
									a && (s *= (n - a / i) / n),
									e + (s - r * l) / i - s
								)
							},
							Y = function e(t, i, n) {
								n || (t.pins.length = t.pins.offset = 0)
								var s,
									r,
									o,
									a,
									l,
									c,
									u,
									d,
									h = t.pins,
									p = t.markers
								for (u = 0; u < i.length; u++)
									if (
										((d = i[u]),
										t.trigger &&
											d.trigger &&
											t !== d &&
											(d.trigger === t.trigger ||
												d.pinnedContainer === t.trigger ||
												t.trigger.contains(d.trigger)) &&
											((l = d._startNative || d._startClamp || d.start),
											(c = d._endNative || d._endClamp || d.end),
											(o = V(l, t)),
											(a = d.pin && c > 0 ? o + (c - l) : V(c, t)),
											d.setPositions(o, a, !0, (d._startClamp ? Math.max(0, o) : o) - l),
											d.markerStart &&
												p.push(js.quickSetter([d.markerStart, d.markerEnd], 'y', 'px')),
											d.pin && d.end > 0 && !n))
									) {
										if (((s = d.end - d.start), (r = t._startClamp && d.start < 0))) {
											if (t.start > 0)
												return (
													t.setPositions(0, t.end + (t._startNative - t.start), !0),
													void e(t, i)
												)
											;(s += d.start), (h.offset = -d.start)
										}
										h.push({
											start: d.start,
											nativeStart: l,
											end: d.end,
											distance: s,
											trig: d,
										}),
											t.setPositions(t.start, t.end + (r ? -d.start : s), !0)
									}
							},
							X = function (e, t) {
								a.forEach(function (i) {
									return Y(i, e, t)
								})
							},
							G = function () {
								B(),
									requestAnimationFrame(B),
									a &&
										(Ws.getAll().forEach(function (e) {
											;(e._startNative = e.start), (e._endNative = e.end)
										}),
										a.forEach(function (e) {
											var t = e._startClamp || e.start,
												i = e.autoSpeed
													? Math.min(nr(), e.end)
													: t + Math.abs((e.end - t) / e.ratio),
												n = i - e.end
											if ((t -= n / 2) > (i -= n / 2)) {
												var s = t
												;(t = i), (i = s)
											}
											e._startClamp && t < 0
												? ((n = (i = e.ratio < 0 ? nr() : e.end / e.ratio) - e.end),
												  (t = 0))
												: (e.ratio < 0 || (e._endClamp && i >= nr())) &&
												  (n =
														((i = nr()) -
															(t =
																e.ratio < 0 || e.ratio > 1
																	? 0
																	: i - (i - e.start) / e.ratio)) *
															e.ratio -
														(e.end - e.start)),
												(e.offset = n || 1e-4),
												(e.pins.length = e.pins.offset = 0),
												e.setPositions(t, i, !0)
										}),
										X(Ws.sort())),
									z.reset()
							},
							W = function () {
								return Ws.addEventListener('refresh', G)
							},
							U = function () {
								return (
									a &&
									a.forEach(function (e) {
										return e.vars.onRefresh(e)
									})
								)
							},
							Z = function () {
								return (
									a &&
										a.forEach(function (e) {
											return e.vars.onRefreshInit(e)
										}),
									U
								)
							},
							K = function (e, t, i, n) {
								return function () {
									var s = 'function' == typeof t ? t(i, n) : t
									s ||
										0 === s ||
										(s = n.getAttribute('data-' + M + e) || ('speed' === e ? 1 : 0)),
										n.setAttribute('data-' + M + e, s)
									var r = 'clamp(' === (s + '').substr(0, 6)
									return { clamp: r, value: r ? s.substr(6, s.length - 7) : s }
								}
							},
							J = function (e, t, i, n, r) {
								r = ('function' == typeof r ? r(n, e) : r) || 0
								var o,
									l,
									c,
									u,
									d,
									h,
									p = K('speed', t, n, e),
									f = K('lag', i, n, e),
									g = js.getProperty(e, 'y'),
									m = e._gsap,
									v = [],
									b = function () {
										;(t = p()),
											(i = parseFloat(f().value)),
											(o = parseFloat(t.value) || 1),
											(c = 'auto' === t.value),
											(d =
												c || (l && l._startClamp && l.start <= 0) || v.offset
													? 0
													: l && l._endClamp && l.end === nr()
													? 1
													: 0.5),
											u && u.kill(),
											(u =
												i &&
												js.to(e, { ease: Zs, overwrite: !1, y: '+=0', duration: i })),
											l && ((l.ratio = o), (l.autoSpeed = c))
									},
									y = function () {
										;(m.y = g + 'px'), m.renderTransform(1), b()
									},
									D = [],
									w = 0,
									x = function (t) {
										if (c) {
											y()
											var i = (function (e, t) {
												var i,
													n,
													s = e.parentNode || Vs,
													r = e.getBoundingClientRect(),
													o = s.getBoundingClientRect(),
													a = o.top - r.top,
													l = o.bottom - r.bottom,
													c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
													u = -c * t
												return (
													c > 0 &&
														((n =
															0.5 == (i = o.height / ($s.innerHeight + o.height))
																? 2 * o.height
																: 2 *
																  Math.min(o.height, Math.abs((-c * i) / (2 * i - 1))) *
																  (t || 1)),
														(u += t ? -n * t : -n / 2),
														(c += n)),
													{ change: c, offset: u }
												)
											})(e, Gs(0, 1, -t.start / (t.end - t.start)))
											;(w = i.change), (h = i.offset)
										} else (h = v.offset || 0), (w = (t.end - t.start - h) * (1 - o))
										v.forEach(function (e) {
											return (w -= e.distance * (1 - o))
										}),
											(t.offset = w || 0.001),
											t.vars.onUpdate(t),
											u && u.progress(1)
									}
								return (
									b(),
									(1 !== o || c || u) &&
										((l = Ws.create({
											trigger: c ? e.parentNode : e,
											start: function () {
												return t.clamp
													? 'clamp(top bottom+=' + r + ')'
													: 'top bottom+=' + r
											},
											end: function () {
												return t.value < 0
													? 'max'
													: t.clamp
													? 'clamp(bottom top-=' + r + ')'
													: 'bottom top-=' + r
											},
											scroller: s,
											scrub: !0,
											refreshPriority: -999,
											onRefreshInit: y,
											onRefresh: x,
											onKill: function (e) {
												var t = a.indexOf(e)
												t >= 0 && a.splice(t, 1), y()
											},
											onUpdate: function (e) {
												var t,
													i,
													n,
													s,
													r = g + w * (e.progress - d),
													o = v.length,
													a = 0
												if (e.offset) {
													if (o) {
														for (i = -O, n = e.end; o--; ) {
															if (
																(t = v[o]).trig.isActive ||
																(i >= t.start && i <= t.end)
															)
																return void (
																	u &&
																	((t.trig.progress +=
																		t.trig.direction < 0 ? 0.001 : -0.001),
																	t.trig.update(0, 0, 1),
																	u.resetTo('y', parseFloat(m.y), -L, !0),
																	k && u.progress(1))
																)
															i > t.end && (a += t.distance), (n -= t.distance)
														}
														r =
															g +
															a +
															w *
																((js.utils.clamp(e.start, e.end, i) - e.start - a) /
																	(n - e.start) -
																	d)
													}
													D.length &&
														!c &&
														D.forEach(function (e) {
															return e(r - a)
														}),
														(s = r + h),
														(r = Math.round(1e5 * s) / 1e5 || 0),
														u
															? (u.resetTo('y', r, -L, !0), k && u.progress(1))
															: ((m.y = r + 'px'), m.renderTransform(1))
												}
											},
										})),
										x(l),
										(js.core.getCache(l.trigger).stRevert = Z),
										(l.startY = g),
										(l.pins = v),
										(l.markers = D),
										(l.ratio = o),
										(l.autoSpeed = c),
										(e.style.willChange = 'transform')),
									l
								)
							}
						function Q() {
							return (
								(r = n.clientHeight),
								(n.style.overflow = 'visible'),
								(Ys.style.height = $s.innerHeight + (r - $s.innerHeight) / A + 'px'),
								r - $s.innerHeight
							)
						}
						W(),
							Ws.addEventListener('killAll', W),
							js.delayedCall(0.5, function () {
								return (k = 0)
							}),
							(this.scrollTop = H),
							(this.scrollTo = function (e, t, n) {
								var s = js.utils.clamp(0, nr(), isNaN(e) ? i.offset(e, n, !!t && !h) : +e)
								t
									? h
										? js.to(i, { duration: F, scrollTop: s, overwrite: 'auto', ease: Zs })
										: P(s)
									: H(s)
							}),
							(this.offset = function (e, t, i) {
								var n,
									s = (e = Xs(e)[0]).style.cssText,
									r = Ws.create({ trigger: e, start: t || 'top top' })
								return (
									a && (k ? Ws.refresh() : X([r], !0)),
									(n = r.start / (i ? A : 1)),
									r.kill(!1),
									(e.style.cssText = s),
									(js.core.getCache(e).uncache = 1),
									n
								)
							}),
							(this.content = function (e) {
								if (arguments.length) {
									var t =
										Xs(e || '#smooth-content')[0] ||
										console.warn('ScrollSmoother needs a valid content element.') ||
										Ys.children[0]
									return (
										t !== n &&
											((d = (n = t).getAttribute('style') || ''),
											$ && $.observe(n),
											js.set(n, {
												overflow: 'visible',
												width: '100%',
												boxSizing: 'border-box',
												y: '+=0',
											}),
											F || js.set(n, { clearProps: 'transform' })),
										this
									)
								}
								return n
							}),
							(this.wrapper = function (e) {
								return arguments.length
									? ((s =
											Xs(e || '#smooth-wrapper')[0] ||
											(function (e) {
												var t = qs.querySelector('.ScrollSmoother-wrapper')
												return (
													t ||
														((t = qs.createElement('div')).classList.add(
															'ScrollSmoother-wrapper'
														),
														e.parentNode.insertBefore(t, e),
														t.appendChild(e)),
													t
												)
											})(n)),
									  (u = s.getAttribute('style') || ''),
									  Q(),
									  js.set(
											s,
											F
												? {
														overflow: 'hidden',
														position: 'fixed',
														height: '100%',
														width: '100%',
														top: 0,
														left: 0,
														right: 0,
														bottom: 0,
												  }
												: {
														overflow: 'visible',
														position: 'relative',
														width: '100%',
														height: 'auto',
														top: 'auto',
														bottom: 'auto',
														left: 'auto',
														right: 'auto',
												  }
									  ),
									  this)
									: s
							}),
							(this.effects = function (e, t) {
								var i
								if ((a || (a = []), !e)) return a.slice(0)
								;(e = Xs(e)).forEach(function (e) {
									for (var t = a.length; t--; ) a[t].trigger === e && a[t].kill()
								})
								var n,
									s,
									r = (t = t || {}),
									o = r.speed,
									l = r.lag,
									c = r.effectsPadding,
									u = []
								for (n = 0; n < e.length; n++) (s = J(e[n], o, l, n, c)) && u.push(s)
								return (i = a).push.apply(i, u), !1 !== t.refresh && Ws.refresh(), u
							}),
							(this.sections = function (e, t) {
								var i
								if ((l || (l = []), !e)) return l.slice(0)
								var n = Xs(e).map(function (e) {
									return Ws.create({
										trigger: e,
										start: 'top 120%',
										end: 'bottom -20%',
										onToggle: function (t) {
											;(e.style.opacity = t.isActive ? '1' : '0'),
												(e.style.pointerEvents = t.isActive ? 'all' : 'none')
										},
									})
								})
								return t && t.add ? (i = l).push.apply(i, n) : (l = n.slice(0)), n
							}),
							this.content(t.content),
							this.wrapper(t.wrapper),
							(this.render = function (e) {
								return j(e || 0 === e ? e : O)
							}),
							(this.getVelocity = function () {
								return z.getVelocity(-O)
							}),
							Ws.scrollerProxy(s, {
								scrollTop: H,
								scrollHeight: function () {
									return Q() && Ys.scrollHeight
								},
								fixedMarkers: !1 !== t.fixedMarkers && !!F,
								content: n,
								getBoundingClientRect: function () {
									return { top: 0, left: 0, width: $s.innerWidth, height: $s.innerHeight }
								},
							}),
							Ws.defaults({ scroller: s })
						var ee = Ws.getAll().filter(function (e) {
							return e.scroller === $s || e.scroller === s
						})
						ee.forEach(function (e) {
							return e.revert(!0, !0)
						}),
							(o = Ws.create({
								animation: js.fromTo(
									I,
									{
										y: function () {
											return (m = 0), 0
										},
									},
									{
										y: function () {
											return (m = 1), -Q()
										},
										immediateRender: !1,
										ease: 'none',
										data: 'ScrollSmoother',
										duration: 100,
										onUpdate: function () {
											if (m) {
												var e = v
												e && (N(o), (I.y = O)), j(I.y, e), R(), w && !h && w(S)
											}
										},
									}
								),
								onRefreshInit: function (t) {
									if (!e.isRefreshing) {
										if (((e.isRefreshing = !0), a)) {
											var i = Ws.getAll().filter(function (e) {
												return !!e.pin
											})
											a.forEach(function (e) {
												e.vars.pinnedContainer ||
													i.forEach(function (t) {
														if (t.pin.contains(e.trigger)) {
															var i = e.vars
															;(i.pinnedContainer = t.pin),
																(e.vars = null),
																e.init(i, e.animation)
														}
													})
											})
										}
										var n = t.getTween()
										;(g = n && n._end > n._dp._time),
											(f = O),
											(I.y = 0),
											F &&
												(1 === Ws.isTouch && (s.style.position = 'absolute'),
												(s.scrollTop = 0),
												1 === Ws.isTouch && (s.style.position = 'fixed'))
									}
								},
								onRefresh: function (t) {
									t.animation.invalidate(),
										t.setPositions(t.start, Q() / A),
										g || N(t),
										(I.y = -P() * A),
										j(I.y),
										k ||
											(g && (v = !1),
											t.animation.progress(js.utils.clamp(0, 1, f / A / -t.end))),
										g && ((t.progress -= 0.001), t.update()),
										(e.isRefreshing = !1)
								},
								id: 'ScrollSmoother',
								scroller: $s,
								invalidateOnRefresh: !0,
								start: 0,
								refreshPriority: -9999,
								end: function () {
									return Q() / A
								},
								onScrubComplete: function () {
									z.reset(), x && x(i)
								},
								scrub: F || !0,
							})),
							(this.smooth = function (e) {
								return (
									arguments.length &&
										((A = ((F = e || 0) && +t.speed) || 1), o.scrubDuration(e)),
									o.getTween() ? o.getTween().duration() : 0
								)
							}),
							o.getTween() && (o.getTween().vars.ease = t.ease || Zs),
							(this.scrollTrigger = o),
							t.effects &&
								this.effects(
									!0 === t.effects
										? '[data-' + M + 'speed], [data-' + M + 'lag]'
										: t.effects,
									{ effectsPadding: t.effectsPadding, refresh: !1 }
								),
							t.sections &&
								this.sections(!0 === t.sections ? '[data-section]' : t.sections),
							ee.forEach(function (e) {
								;(e.vars.scroller = s), e.revert(!1, !0), e.init(e.vars, e.animation)
							}),
							(this.paused = function (e, t) {
								return arguments.length
									? (!!h !== e &&
											(e
												? (o.getTween() && o.getTween().pause(),
												  P(-O / A),
												  z.reset(),
												  (p = Ws.normalizeScroll()) && p.disable(),
												  ((h = Ws.observe({
														preventDefault: !0,
														type: 'wheel,touch,scroll',
														debounce: !1,
														allowClicks: !0,
														onChangeY: function () {
															return H(-O)
														},
												  })).nested = Js(Vs, 'wheel,touch,scroll', !0, !1 !== t)))
												: (h.nested.kill(),
												  h.kill(),
												  (h = 0),
												  p && p.enable(),
												  (o.progress = (-O / A - o.start) / (o.end - o.start)),
												  N(o))),
									  this)
									: !!h
							}),
							(this.kill = this.revert =
								function () {
									i.paused(!1), N(o), o.kill()
									for (var e = (a || []).concat(l || []), t = e.length; t--; ) e[t].kill()
									Ws.scrollerProxy(s),
										Ws.removeEventListener('killAll', W),
										Ws.removeEventListener('refresh', G),
										(s.style.cssText = u),
										(n.style.cssText = d)
									var r = Ws.defaults({})
									r && r.scroller === s && Ws.defaults({ scroller: $s }),
										i.normalizer && Ws.normalizeScroll(!1),
										clearInterval(c),
										(Us = null),
										$ && $.disconnect(),
										Ys.style.removeProperty('height'),
										$s.removeEventListener('focusin', q)
								}),
							(this.refresh = function (e, t) {
								return o.refresh(e, t)
							}),
							C &&
								(this.normalizer = Ws.normalizeScroll(
									!0 === C ? { debounce: !0, content: !F && n } : C
								)),
							Ws.config(t),
							'overscrollBehavior' in $s.getComputedStyle(Ys) &&
								js.set([Ys, Vs], { overscrollBehavior: 'none' }),
							'scrollBehavior' in $s.getComputedStyle(Ys) &&
								js.set([Ys, Vs], { scrollBehavior: 'auto' }),
							$s.addEventListener('focusin', q),
							(c = setInterval(R, 250)),
							'loading' === qs.readyState ||
								requestAnimationFrame(function () {
									return Ws.refresh()
								})
					}
					var t, i
					return (
						(e.register = function (t) {
							return (
								Hs ||
									((js = t || ir()),
									tr() &&
										window.document &&
										(($s = window),
										(qs = document),
										(Vs = qs.documentElement),
										(Ys = qs.body)),
									js &&
										((Xs = js.utils.toArray),
										(Gs = js.utils.clamp),
										(Zs = js.parseEase('expo')),
										(Qs = js.core.context || function () {}),
										(Ws = js.core.globals().ScrollTrigger),
										js.core.globals('ScrollSmoother', e),
										Ys &&
											Ws &&
											((er = js
												.delayedCall(0.2, function () {
													return Ws.isRefreshing || (Us && Us.refresh())
												})
												.pause()),
											(Ks = Ws.core._getVelocityProp),
											(Js = Ws.core._inputObserver),
											(e.refresh = Ws.refresh),
											(Hs = 1)))),
								Hs
							)
						}),
						(t = e),
						(i = [
							{
								key: 'progress',
								get: function () {
									return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
								},
							},
						]) && Ns(t.prototype, i),
						e
					)
				})()
			function rr(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i]
					;(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n)
				}
			}
			;(sr.version = '3.12.5'),
				(sr.create = function (e) {
					return Us && e && Us.content() === Xs(e.content)[0] ? Us : new sr(e)
				}),
				(sr.get = function () {
					return Us
				}),
				ir() && js.registerPlugin(sr)
			var or,
				ar,
				lr,
				cr,
				ur,
				dr,
				hr,
				pr,
				fr,
				gr,
				mr,
				vr,
				br,
				yr = function () {
					return (
						or ||
						('undefined' != typeof window &&
							(or = window.gsap) &&
							or.registerPlugin &&
							or)
					)
				},
				Dr = 1,
				wr = [],
				xr = [],
				Er = [],
				_r = Date.now,
				Cr = function (e, t) {
					return t
				},
				Tr = function (e, t) {
					return ~Er.indexOf(e) && Er[Er.indexOf(e) + 1][t]
				},
				Sr = function (e) {
					return !!~gr.indexOf(e)
				},
				Mr = function (e, t, i, n, s) {
					return e.addEventListener(t, i, { passive: !1 !== n, capture: !!s })
				},
				Pr = function (e, t, i, n) {
					return e.removeEventListener(t, i, !!n)
				},
				Fr = 'scrollLeft',
				Ar = 'scrollTop',
				Or = function () {
					return (mr && mr.isPressed) || xr.cache++
				},
				Lr = function (e, t) {
					var i = function i(n) {
						if (n || 0 === n) {
							Dr && (lr.history.scrollRestoration = 'manual')
							var s = mr && mr.isPressed
							;(n = i.v = Math.round(n) || (mr && mr.iOS ? 1 : 0)),
								e(n),
								(i.cacheID = xr.cache),
								s && Cr('ss', n)
						} else
							(t || xr.cache !== i.cacheID || Cr('ref')) &&
								((i.cacheID = xr.cache), (i.v = e()))
						return i.v + i.offset
					}
					return (i.offset = 0), e && i
				},
				kr = {
					s: Fr,
					p: 'left',
					p2: 'Left',
					os: 'right',
					os2: 'Right',
					d: 'width',
					d2: 'Width',
					a: 'x',
					sc: Lr(function (e) {
						return arguments.length
							? lr.scrollTo(e, zr.sc())
							: lr.pageXOffset || cr[Fr] || ur[Fr] || dr[Fr] || 0
					}),
				},
				zr = {
					s: Ar,
					p: 'top',
					p2: 'Top',
					os: 'bottom',
					os2: 'Bottom',
					d: 'height',
					d2: 'Height',
					a: 'y',
					op: kr,
					sc: Lr(function (e) {
						return arguments.length
							? lr.scrollTo(kr.sc(), e)
							: lr.pageYOffset || cr[Ar] || ur[Ar] || dr[Ar] || 0
					}),
				},
				Rr = function (e, t) {
					return (
						((t && t._ctx && t._ctx.selector) || or.utils.toArray)(e)[0] ||
						('string' == typeof e && !1 !== or.config().nullTargetWarn
							? console.warn('Element not found:', e)
							: null)
					)
				},
				Ir = function (e, t) {
					var i = t.s,
						n = t.sc
					Sr(e) && (e = cr.scrollingElement || ur)
					var s = xr.indexOf(e),
						r = n === zr.sc ? 1 : 2
					!~s && (s = xr.push(e) - 1), xr[s + r] || Mr(e, 'scroll', Or)
					var o = xr[s + r],
						a =
							o ||
							(xr[s + r] =
								Lr(Tr(e, i), !0) ||
								(Sr(e)
									? n
									: Lr(function (t) {
											return arguments.length ? (e[i] = t) : e[i]
									  })))
					return (
						(a.target = e),
						o || (a.smooth = 'smooth' === or.getProperty(e, 'scrollBehavior')),
						a
					)
				},
				Br = function (e, t, i) {
					var n = e,
						s = e,
						r = _r(),
						o = r,
						a = t || 50,
						l = Math.max(500, 3 * a),
						c = function (e, t) {
							var l = _r()
							t || l - r > a
								? ((s = n), (n = e), (o = r), (r = l))
								: i
								? (n += e)
								: (n = s + ((e - s) / (l - o)) * (r - o))
						}
					return {
						update: c,
						reset: function () {
							;(s = n = i ? 0 : n), (o = r = 0)
						},
						getVelocity: function (e) {
							var t = o,
								a = s,
								u = _r()
							return (
								(e || 0 === e) && e !== n && c(e),
								r === o || u - o > l ? 0 : ((n + (i ? a : -a)) / ((i ? u : r) - t)) * 1e3
							)
						},
					}
				},
				Nr = function (e, t) {
					return (
						t && !e._gsapAllow && e.preventDefault(),
						e.changedTouches ? e.changedTouches[0] : e
					)
				},
				jr = function (e) {
					var t = Math.max.apply(Math, e),
						i = Math.min.apply(Math, e)
					return Math.abs(t) >= Math.abs(i) ? t : i
				},
				Hr = function () {
					var e, t, i, n
					;(fr = or.core.globals().ScrollTrigger) &&
						fr.core &&
						((e = fr.core),
						(t = e.bridge || {}),
						(i = e._scrollers),
						(n = e._proxies),
						i.push.apply(i, xr),
						n.push.apply(n, Er),
						(xr = i),
						(Er = n),
						(Cr = function (e, i) {
							return t[e](i)
						}))
				},
				$r = function (e) {
					return (
						(or = e || yr()),
						!ar &&
							or &&
							'undefined' != typeof document &&
							document.body &&
							((lr = window),
							(cr = document),
							(ur = cr.documentElement),
							(dr = cr.body),
							(gr = [lr, cr, ur, dr]),
							or.utils.clamp,
							(br = or.core.context || function () {}),
							(pr = 'onpointerenter' in dr ? 'pointer' : 'mouse'),
							(hr = qr.isTouch =
								lr.matchMedia && lr.matchMedia('(hover: none), (pointer: coarse)').matches
									? 1
									: 'ontouchstart' in lr ||
									  navigator.maxTouchPoints > 0 ||
									  navigator.msMaxTouchPoints > 0
									? 2
									: 0),
							(vr = qr.eventTypes =
								(
									'ontouchstart' in ur
										? 'touchstart,touchmove,touchcancel,touchend'
										: 'onpointerdown' in ur
										? 'pointerdown,pointermove,pointercancel,pointerup'
										: 'mousedown,mousemove,mouseup,mouseup'
								).split(',')),
							setTimeout(function () {
								return (Dr = 0)
							}, 500),
							Hr(),
							(ar = 1)),
						ar
					)
				}
			;(kr.op = zr), (xr.cache = 0)
			var qr = (function () {
				function e(e) {
					this.init(e)
				}
				var t, i
				return (
					(e.prototype.init = function (e) {
						ar || $r(or) || console.warn('Please gsap.registerPlugin(Observer)'),
							fr || Hr()
						var t = e.tolerance,
							i = e.dragMinimum,
							n = e.type,
							s = e.target,
							r = e.lineHeight,
							o = e.debounce,
							a = e.preventDefault,
							l = e.onStop,
							c = e.onStopDelay,
							u = e.ignore,
							d = e.wheelSpeed,
							h = e.event,
							p = e.onDragStart,
							f = e.onDragEnd,
							g = e.onDrag,
							m = e.onPress,
							v = e.onRelease,
							b = e.onRight,
							y = e.onLeft,
							D = e.onUp,
							w = e.onDown,
							x = e.onChangeX,
							E = e.onChangeY,
							_ = e.onChange,
							C = e.onToggleX,
							T = e.onToggleY,
							S = e.onHover,
							M = e.onHoverEnd,
							P = e.onMove,
							F = e.ignoreCheck,
							A = e.isNormalizer,
							O = e.onGestureStart,
							L = e.onGestureEnd,
							k = e.onWheel,
							z = e.onEnable,
							R = e.onDisable,
							I = e.onClick,
							B = e.scrollSpeed,
							N = e.capture,
							j = e.allowClicks,
							H = e.lockAxis,
							$ = e.onLockAxis
						;(this.target = s = Rr(s) || ur),
							(this.vars = e),
							u && (u = or.utils.toArray(u)),
							(t = t || 1e-9),
							(i = i || 0),
							(d = d || 1),
							(B = B || 1),
							(n = n || 'wheel,touch,pointer'),
							(o = !1 !== o),
							r || (r = parseFloat(lr.getComputedStyle(dr).lineHeight) || 22)
						var q,
							V,
							Y,
							X,
							G,
							W,
							U,
							Z = this,
							K = 0,
							J = 0,
							Q = e.passive || !a,
							ee = Ir(s, kr),
							te = Ir(s, zr),
							ie = ee(),
							ne = te(),
							se =
								~n.indexOf('touch') && !~n.indexOf('pointer') && 'pointerdown' === vr[0],
							re = Sr(s),
							oe = s.ownerDocument || cr,
							ae = [0, 0, 0],
							le = [0, 0, 0],
							ce = 0,
							ue = function () {
								return (ce = _r())
							},
							de = function (e, t) {
								return (
									((Z.event = e) && u && ~u.indexOf(e.target)) ||
									(t && se && 'touch' !== e.pointerType) ||
									(F && F(e, t))
								)
							},
							he = function () {
								var e = (Z.deltaX = jr(ae)),
									i = (Z.deltaY = jr(le)),
									n = Math.abs(e) >= t,
									s = Math.abs(i) >= t
								_ && (n || s) && _(Z, e, i, ae, le),
									n &&
										(b && Z.deltaX > 0 && b(Z),
										y && Z.deltaX < 0 && y(Z),
										x && x(Z),
										C && Z.deltaX < 0 != K < 0 && C(Z),
										(K = Z.deltaX),
										(ae[0] = ae[1] = ae[2] = 0)),
									s &&
										(w && Z.deltaY > 0 && w(Z),
										D && Z.deltaY < 0 && D(Z),
										E && E(Z),
										T && Z.deltaY < 0 != J < 0 && T(Z),
										(J = Z.deltaY),
										(le[0] = le[1] = le[2] = 0)),
									(X || Y) && (P && P(Z), Y && (g(Z), (Y = !1)), (X = !1)),
									W && !(W = !1) && $ && $(Z),
									G && (k(Z), (G = !1)),
									(q = 0)
							},
							pe = function (e, t, i) {
								;(ae[i] += e),
									(le[i] += t),
									Z._vx.update(e),
									Z._vy.update(t),
									o ? q || (q = requestAnimationFrame(he)) : he()
							},
							fe = function (e, t) {
								H &&
									!U &&
									((Z.axis = U = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (W = !0)),
									'y' !== U && ((ae[2] += e), Z._vx.update(e, !0)),
									'x' !== U && ((le[2] += t), Z._vy.update(t, !0)),
									o ? q || (q = requestAnimationFrame(he)) : he()
							},
							ge = function (e) {
								if (!de(e, 1)) {
									var t = (e = Nr(e, a)).clientX,
										n = e.clientY,
										s = t - Z.x,
										r = n - Z.y,
										o = Z.isDragging
									;(Z.x = t),
										(Z.y = n),
										(o || Math.abs(Z.startX - t) >= i || Math.abs(Z.startY - n) >= i) &&
											(g && (Y = !0),
											o || (Z.isDragging = !0),
											fe(s, r),
											o || (p && p(Z)))
								}
							},
							me = (Z.onPress = function (e) {
								de(e, 1) ||
									(e && e.button) ||
									((Z.axis = U = null),
									V.pause(),
									(Z.isPressed = !0),
									(e = Nr(e)),
									(K = J = 0),
									(Z.startX = Z.x = e.clientX),
									(Z.startY = Z.y = e.clientY),
									Z._vx.reset(),
									Z._vy.reset(),
									Mr(A ? s : oe, vr[1], ge, Q, !0),
									(Z.deltaX = Z.deltaY = 0),
									m && m(Z))
							}),
							ve = (Z.onRelease = function (e) {
								if (!de(e, 1)) {
									Pr(A ? s : oe, vr[1], ge, !0)
									var t = !isNaN(Z.y - Z.startY),
										i = Z.isDragging,
										n =
											i && (Math.abs(Z.x - Z.startX) > 3 || Math.abs(Z.y - Z.startY) > 3),
										r = Nr(e)
									!n &&
										t &&
										(Z._vx.reset(),
										Z._vy.reset(),
										a &&
											j &&
											or.delayedCall(0.08, function () {
												if (_r() - ce > 300 && !e.defaultPrevented)
													if (e.target.click) e.target.click()
													else if (oe.createEvent) {
														var t = oe.createEvent('MouseEvents')
														t.initMouseEvent(
															'click',
															!0,
															!0,
															lr,
															1,
															r.screenX,
															r.screenY,
															r.clientX,
															r.clientY,
															!1,
															!1,
															!1,
															!1,
															0,
															null
														),
															e.target.dispatchEvent(t)
													}
											})),
										(Z.isDragging = Z.isGesturing = Z.isPressed = !1),
										l && i && !A && V.restart(!0),
										f && i && f(Z),
										v && v(Z, n)
								}
							}),
							be = function (e) {
								return (
									e.touches &&
									e.touches.length > 1 &&
									(Z.isGesturing = !0) &&
									O(e, Z.isDragging)
								)
							},
							ye = function () {
								return (Z.isGesturing = !1) || L(Z)
							},
							De = function (e) {
								if (!de(e)) {
									var t = ee(),
										i = te()
									pe((t - ie) * B, (i - ne) * B, 1),
										(ie = t),
										(ne = i),
										l && V.restart(!0)
								}
							},
							we = function (e) {
								if (!de(e)) {
									;(e = Nr(e, a)), k && (G = !0)
									var t =
										(1 === e.deltaMode ? r : 2 === e.deltaMode ? lr.innerHeight : 1) * d
									pe(e.deltaX * t, e.deltaY * t, 0), l && !A && V.restart(!0)
								}
							},
							xe = function (e) {
								if (!de(e)) {
									var t = e.clientX,
										i = e.clientY,
										n = t - Z.x,
										s = i - Z.y
									;(Z.x = t),
										(Z.y = i),
										(X = !0),
										l && V.restart(!0),
										(n || s) && fe(n, s)
								}
							},
							Ee = function (e) {
								;(Z.event = e), S(Z)
							},
							_e = function (e) {
								;(Z.event = e), M(Z)
							},
							Ce = function (e) {
								return de(e) || (Nr(e, a) && I(Z))
							}
						;(V = Z._dc =
							or
								.delayedCall(c || 0.25, function () {
									Z._vx.reset(), Z._vy.reset(), V.pause(), l && l(Z)
								})
								.pause()),
							(Z.deltaX = Z.deltaY = 0),
							(Z._vx = Br(0, 50, !0)),
							(Z._vy = Br(0, 50, !0)),
							(Z.scrollX = ee),
							(Z.scrollY = te),
							(Z.isDragging = Z.isGesturing = Z.isPressed = !1),
							br(this),
							(Z.enable = function (e) {
								return (
									Z.isEnabled ||
										(Mr(re ? oe : s, 'scroll', Or),
										n.indexOf('scroll') >= 0 && Mr(re ? oe : s, 'scroll', De, Q, N),
										n.indexOf('wheel') >= 0 && Mr(s, 'wheel', we, Q, N),
										((n.indexOf('touch') >= 0 && hr) || n.indexOf('pointer') >= 0) &&
											(Mr(s, vr[0], me, Q, N),
											Mr(oe, vr[2], ve),
											Mr(oe, vr[3], ve),
											j && Mr(s, 'click', ue, !0, !0),
											I && Mr(s, 'click', Ce),
											O && Mr(oe, 'gesturestart', be),
											L && Mr(oe, 'gestureend', ye),
											S && Mr(s, pr + 'enter', Ee),
											M && Mr(s, pr + 'leave', _e),
											P && Mr(s, pr + 'move', xe)),
										(Z.isEnabled = !0),
										e && e.type && me(e),
										z && z(Z)),
									Z
								)
							}),
							(Z.disable = function () {
								Z.isEnabled &&
									(wr.filter(function (e) {
										return e !== Z && Sr(e.target)
									}).length || Pr(re ? oe : s, 'scroll', Or),
									Z.isPressed &&
										(Z._vx.reset(), Z._vy.reset(), Pr(A ? s : oe, vr[1], ge, !0)),
									Pr(re ? oe : s, 'scroll', De, N),
									Pr(s, 'wheel', we, N),
									Pr(s, vr[0], me, N),
									Pr(oe, vr[2], ve),
									Pr(oe, vr[3], ve),
									Pr(s, 'click', ue, !0),
									Pr(s, 'click', Ce),
									Pr(oe, 'gesturestart', be),
									Pr(oe, 'gestureend', ye),
									Pr(s, pr + 'enter', Ee),
									Pr(s, pr + 'leave', _e),
									Pr(s, pr + 'move', xe),
									(Z.isEnabled = Z.isPressed = Z.isDragging = !1),
									R && R(Z))
							}),
							(Z.kill = Z.revert =
								function () {
									Z.disable()
									var e = wr.indexOf(Z)
									e >= 0 && wr.splice(e, 1), mr === Z && (mr = 0)
								}),
							wr.push(Z),
							A && Sr(s) && (mr = Z),
							Z.enable(h)
					}),
					(t = e),
					(i = [
						{
							key: 'velocityX',
							get: function () {
								return this._vx.getVelocity()
							},
						},
						{
							key: 'velocityY',
							get: function () {
								return this._vy.getVelocity()
							},
						},
					]) && rr(t.prototype, i),
					e
				)
			})()
			;(qr.version = '3.12.5'),
				(qr.create = function (e) {
					return new qr(e)
				}),
				(qr.register = $r),
				(qr.getAll = function () {
					return wr.slice()
				}),
				(qr.getById = function (e) {
					return wr.filter(function (t) {
						return t.vars.id === e
					})[0]
				}),
				yr() && or.registerPlugin(qr)
			var Vr,
				Yr,
				Xr,
				Gr,
				Wr,
				Ur,
				Zr,
				Kr,
				Jr,
				Qr,
				eo,
				to,
				io,
				no,
				so,
				ro,
				oo,
				ao,
				lo,
				co,
				uo,
				ho,
				po,
				fo,
				go,
				mo,
				vo,
				bo,
				yo,
				Do,
				wo,
				xo,
				Eo,
				_o,
				Co,
				To,
				So,
				Mo,
				Po = 1,
				Fo = Date.now,
				Ao = Fo(),
				Oo = 0,
				Lo = 0,
				ko = function (e, t, i) {
					var n = Wo(e) && ('clamp(' === e.substr(0, 6) || e.indexOf('max') > -1)
					return (i['_' + t + 'Clamp'] = n), n ? e.substr(6, e.length - 7) : e
				},
				zo = function (e, t) {
					return !t || (Wo(e) && 'clamp(' === e.substr(0, 6)) ? e : 'clamp(' + e + ')'
				},
				Ro = function e() {
					return Lo && requestAnimationFrame(e)
				},
				Io = function () {
					return (no = 1)
				},
				Bo = function () {
					return (no = 0)
				},
				No = function (e) {
					return e
				},
				jo = function (e) {
					return Math.round(1e5 * e) / 1e5 || 0
				},
				Ho = function () {
					return 'undefined' != typeof window
				},
				$o = function () {
					return Vr || (Ho() && (Vr = window.gsap) && Vr.registerPlugin && Vr)
				},
				qo = function (e) {
					return !!~Zr.indexOf(e)
				},
				Vo = function (e) {
					return (
						('Height' === e ? wo : Xr['inner' + e]) ||
						Wr['client' + e] ||
						Ur['client' + e]
					)
				},
				Yo = function (e) {
					return (
						Tr(e, 'getBoundingClientRect') ||
						(qo(e)
							? function () {
									return (sl.width = Xr.innerWidth), (sl.height = wo), sl
							  }
							: function () {
									return va(e)
							  })
					)
				},
				Xo = function (e, t) {
					var i = t.s,
						n = t.d2,
						s = t.d,
						r = t.a
					return Math.max(
						0,
						(i = 'scroll' + n) && (r = Tr(e, i))
							? r() - Yo(e)()[s]
							: qo(e)
							? (Wr[i] || Ur[i]) - Vo(n)
							: e[i] - e['offset' + n]
					)
				},
				Go = function (e, t) {
					for (var i = 0; i < lo.length; i += 3)
						(!t || ~t.indexOf(lo[i + 1])) && e(lo[i], lo[i + 1], lo[i + 2])
				},
				Wo = function (e) {
					return 'string' == typeof e
				},
				Uo = function (e) {
					return 'function' == typeof e
				},
				Zo = function (e) {
					return 'number' == typeof e
				},
				Ko = function (e) {
					return 'object' == typeof e
				},
				Jo = function (e, t, i) {
					return e && e.progress(t ? 0 : 1) && i && e.pause()
				},
				Qo = function (e, t) {
					if (e.enabled) {
						var i = e._ctx
							? e._ctx.add(function () {
									return t(e)
							  })
							: t(e)
						i && i.totalTime && (e.callbackAnimation = i)
					}
				},
				ea = Math.abs,
				ta = 'left',
				ia = 'right',
				na = 'bottom',
				sa = 'width',
				ra = 'height',
				oa = 'Right',
				aa = 'Left',
				la = 'Top',
				ca = 'Bottom',
				ua = 'padding',
				da = 'margin',
				ha = 'Width',
				pa = 'Height',
				fa = 'px',
				ga = function (e) {
					return Xr.getComputedStyle(e)
				},
				ma = function (e, t) {
					for (var i in t) i in e || (e[i] = t[i])
					return e
				},
				va = function (e, t) {
					var i =
							t &&
							'matrix(1, 0, 0, 1, 0, 0)' !== ga(e)[so] &&
							Vr.to(e, {
								x: 0,
								y: 0,
								xPercent: 0,
								yPercent: 0,
								rotation: 0,
								rotationX: 0,
								rotationY: 0,
								scale: 1,
								skewX: 0,
								skewY: 0,
							}).progress(1),
						n = e.getBoundingClientRect()
					return i && i.progress(0).kill(), n
				},
				ba = function (e, t) {
					var i = t.d2
					return e['offset' + i] || e['client' + i] || 0
				},
				ya = function (e) {
					var t,
						i = [],
						n = e.labels,
						s = e.duration()
					for (t in n) i.push(n[t] / s)
					return i
				},
				Da = function (e) {
					var t = Vr.utils.snap(e),
						i =
							Array.isArray(e) &&
							e.slice(0).sort(function (e, t) {
								return e - t
							})
					return i
						? function (e, n, s) {
								var r
								if ((void 0 === s && (s = 0.001), !n)) return t(e)
								if (n > 0) {
									for (e -= s, r = 0; r < i.length; r++) if (i[r] >= e) return i[r]
									return i[r - 1]
								}
								for (r = i.length, e += s; r--; ) if (i[r] <= e) return i[r]
								return i[0]
						  }
						: function (i, n, s) {
								void 0 === s && (s = 0.001)
								var r = t(i)
								return !n || Math.abs(r - i) < s || r - i < 0 == n < 0
									? r
									: t(n < 0 ? i - e : i + e)
						  }
				},
				wa = function (e, t, i, n) {
					return i.split(',').forEach(function (i) {
						return e(t, i, n)
					})
				},
				xa = function (e, t, i, n, s) {
					return e.addEventListener(t, i, { passive: !n, capture: !!s })
				},
				Ea = function (e, t, i, n) {
					return e.removeEventListener(t, i, !!n)
				},
				_a = function (e, t, i) {
					;(i = i && i.wheelHandler) && (e(t, 'wheel', i), e(t, 'touchmove', i))
				},
				Ca = {
					startColor: 'green',
					endColor: 'red',
					indent: 0,
					fontSize: '16px',
					fontWeight: 'normal',
				},
				Ta = { toggleActions: 'play', anticipatePin: 0 },
				Sa = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
				Ma = function (e, t) {
					if (Wo(e)) {
						var i = e.indexOf('='),
							n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0
						~i && (e.indexOf('%') > i && (n *= t / 100), (e = e.substr(0, i - 1))),
							(e =
								n +
								(e in Sa
									? Sa[e] * t
									: ~e.indexOf('%')
									? (parseFloat(e) * t) / 100
									: parseFloat(e) || 0))
					}
					return e
				},
				Pa = function (e, t, i, n, s, r, o, a) {
					var l = s.startColor,
						c = s.endColor,
						u = s.fontSize,
						d = s.indent,
						h = s.fontWeight,
						p = Gr.createElement('div'),
						f = qo(i) || 'fixed' === Tr(i, 'pinType'),
						g = -1 !== e.indexOf('scroller'),
						m = f ? Ur : i,
						v = -1 !== e.indexOf('start'),
						b = v ? l : c,
						y =
							'border-color:' +
							b +
							';font-size:' +
							u +
							';color:' +
							b +
							';font-weight:' +
							h +
							';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
					return (
						(y += 'position:' + ((g || a) && f ? 'fixed;' : 'absolute;')),
						(g || a || !f) &&
							(y += (n === zr ? ia : na) + ':' + (r + parseFloat(d)) + 'px;'),
						o &&
							(y +=
								'box-sizing:border-box;text-align:left;width:' + o.offsetWidth + 'px;'),
						(p._isStart = v),
						p.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
						(p.style.cssText = y),
						(p.innerText = t || 0 === t ? e + '-' + t : e),
						m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
						(p._offset = p['offset' + n.op.d2]),
						Fa(p, 0, n, v),
						p
					)
				},
				Fa = function (e, t, i, n) {
					var s = { display: 'block' },
						r = i[n ? 'os2' : 'p2'],
						o = i[n ? 'p2' : 'os2']
					;(e._isFlipped = n),
						(s[i.a + 'Percent'] = n ? -100 : 0),
						(s[i.a] = n ? '1px' : 0),
						(s['border' + r + ha] = 1),
						(s['border' + o + ha] = 0),
						(s[i.p] = t + 'px'),
						Vr.set(e, s)
				},
				Aa = [],
				Oa = {},
				La = function () {
					return Fo() - Oo > 34 && (Co || (Co = requestAnimationFrame(Ka)))
				},
				ka = function () {
					;(!po || !po.isPressed || po.startX > Ur.clientWidth) &&
						(xr.cache++,
						po ? Co || (Co = requestAnimationFrame(Ka)) : Ka(),
						Oo || ja('scrollStart'),
						(Oo = Fo()))
				},
				za = function () {
					;(mo = Xr.innerWidth), (go = Xr.innerHeight)
				},
				Ra = function () {
					xr.cache++,
						!io &&
							!ho &&
							!Gr.fullscreenElement &&
							!Gr.webkitFullscreenElement &&
							(!fo ||
								mo !== Xr.innerWidth ||
								Math.abs(Xr.innerHeight - go) > 0.25 * Xr.innerHeight) &&
							Kr.restart(!0)
				},
				Ia = {},
				Ba = [],
				Na = function e() {
					return Ea(dl, 'scrollEnd', e) || Wa(!0)
				},
				ja = function (e) {
					return (
						(Ia[e] &&
							Ia[e].map(function (e) {
								return e()
							})) ||
						Ba
					)
				},
				Ha = [],
				$a = function (e) {
					for (var t = 0; t < Ha.length; t += 5)
						(!e || (Ha[t + 4] && Ha[t + 4].query === e)) &&
							((Ha[t].style.cssText = Ha[t + 1]),
							Ha[t].getBBox && Ha[t].setAttribute('transform', Ha[t + 2] || ''),
							(Ha[t + 3].uncache = 1))
				},
				qa = function (e, t) {
					var i
					for (ro = 0; ro < Aa.length; ro++)
						!(i = Aa[ro]) || (t && i._ctx !== t) || (e ? i.kill(1) : i.revert(!0, !0))
					;(xo = !0), t && $a(t), t || ja('revert')
				},
				Va = function (e, t) {
					xr.cache++,
						(t || !To) &&
							xr.forEach(function (e) {
								return Uo(e) && e.cacheID++ && (e.rec = 0)
							}),
						Wo(e) && (Xr.history.scrollRestoration = yo = e)
				},
				Ya = 0,
				Xa = function () {
					Ur.appendChild(Do),
						(wo = (!po && Do.offsetHeight) || Xr.innerHeight),
						Ur.removeChild(Do)
				},
				Ga = function (e) {
					return Jr(
						'.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
					).forEach(function (t) {
						return (t.style.display = e ? 'none' : 'block')
					})
				},
				Wa = function (e, t) {
					if (!Oo || e || xo) {
						Xa(),
							(To = dl.isRefreshing = !0),
							xr.forEach(function (e) {
								return Uo(e) && ++e.cacheID && (e.rec = e())
							})
						var i = ja('refreshInit')
						co && dl.sort(),
							t || qa(),
							xr.forEach(function (e) {
								Uo(e) && (e.smooth && (e.target.style.scrollBehavior = 'auto'), e(0))
							}),
							Aa.slice(0).forEach(function (e) {
								return e.refresh()
							}),
							(xo = !1),
							Aa.forEach(function (e) {
								if (e._subPinOffset && e.pin) {
									var t = e.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
										i = e.pin[t]
									e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - i), e.refresh()
								}
							}),
							(Eo = 1),
							Ga(!0),
							Aa.forEach(function (e) {
								var t = Xo(e.scroller, e._dir),
									i = 'max' === e.vars.end || (e._endClamp && e.end > t),
									n = e._startClamp && e.start >= t
								;(i || n) &&
									e.setPositions(
										n ? t - 1 : e.start,
										i ? Math.max(n ? t : e.start + 1, t) : e.end,
										!0
									)
							}),
							Ga(!1),
							(Eo = 0),
							i.forEach(function (e) {
								return e && e.render && e.render(-1)
							}),
							xr.forEach(function (e) {
								Uo(e) &&
									(e.smooth &&
										requestAnimationFrame(function () {
											return (e.target.style.scrollBehavior = 'smooth')
										}),
									e.rec && e(e.rec))
							}),
							Va(yo, 1),
							Kr.pause(),
							Ya++,
							(To = 2),
							Ka(2),
							Aa.forEach(function (e) {
								return Uo(e.vars.onRefresh) && e.vars.onRefresh(e)
							}),
							(To = dl.isRefreshing = !1),
							ja('refresh')
					} else xa(dl, 'scrollEnd', Na)
				},
				Ua = 0,
				Za = 1,
				Ka = function (e) {
					if (2 === e || (!To && !xo)) {
						;(dl.isUpdating = !0), Mo && Mo.update(0)
						var t = Aa.length,
							i = Fo(),
							n = i - Ao >= 50,
							s = t && Aa[0].scroll()
						if (
							((Za = Ua > s ? -1 : 1),
							To || (Ua = s),
							n &&
								(Oo && !no && i - Oo > 200 && ((Oo = 0), ja('scrollEnd')),
								(eo = Ao),
								(Ao = i)),
							Za < 0)
						) {
							for (ro = t; ro-- > 0; ) Aa[ro] && Aa[ro].update(0, n)
							Za = 1
						} else for (ro = 0; ro < t; ro++) Aa[ro] && Aa[ro].update(0, n)
						dl.isUpdating = !1
					}
					Co = 0
				},
				Ja = [
					ta,
					'top',
					na,
					ia,
					da + ca,
					da + oa,
					da + la,
					da + aa,
					'display',
					'flexShrink',
					'float',
					'zIndex',
					'gridColumnStart',
					'gridColumnEnd',
					'gridRowStart',
					'gridRowEnd',
					'gridArea',
					'justifySelf',
					'alignSelf',
					'placeSelf',
					'order',
				],
				Qa = Ja.concat([
					sa,
					ra,
					'boxSizing',
					'max' + ha,
					'max' + pa,
					'position',
					da,
					ua,
					ua + la,
					ua + oa,
					ua + ca,
					ua + aa,
				]),
				el = function (e, t, i, n) {
					if (!e._gsap.swappedIn) {
						for (var s, r = Ja.length, o = t.style, a = e.style; r--; )
							o[(s = Ja[r])] = i[s]
						;(o.position = 'absolute' === i.position ? 'absolute' : 'relative'),
							'inline' === i.display && (o.display = 'inline-block'),
							(a[na] = a[ia] = 'auto'),
							(o.flexBasis = i.flexBasis || 'auto'),
							(o.overflow = 'visible'),
							(o.boxSizing = 'border-box'),
							(o[sa] = ba(e, kr) + fa),
							(o[ra] = ba(e, zr) + fa),
							(o[ua] = a[da] = a.top = a[ta] = '0'),
							il(n),
							(a[sa] = a['max' + ha] = i[sa]),
							(a[ra] = a['max' + pa] = i[ra]),
							(a[ua] = i[ua]),
							e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
							(e._gsap.swappedIn = !0)
					}
				},
				tl = /([A-Z])/g,
				il = function (e) {
					if (e) {
						var t,
							i,
							n = e.t.style,
							s = e.length,
							r = 0
						for ((e.t._gsap || Vr.core.getCache(e.t)).uncache = 1; r < s; r += 2)
							(i = e[r + 1]),
								(t = e[r]),
								i
									? (n[t] = i)
									: n[t] && n.removeProperty(t.replace(tl, '-$1').toLowerCase())
					}
				},
				nl = function (e) {
					for (var t = Qa.length, i = e.style, n = [], s = 0; s < t; s++)
						n.push(Qa[s], i[Qa[s]])
					return (n.t = e), n
				},
				sl = { left: 0, top: 0 },
				rl = function (e, t, i, n, s, r, o, a, l, c, u, d, h, p) {
					Uo(e) && (e = e(a)),
						Wo(e) &&
							'max' === e.substr(0, 3) &&
							(e = d + ('=' === e.charAt(4) ? Ma('0' + e.substr(3), i) : 0))
					var f,
						g,
						m,
						v = h ? h.time() : 0
					if ((h && h.seek(0), isNaN(e) || (e = +e), Zo(e)))
						h &&
							(e = Vr.utils.mapRange(
								h.scrollTrigger.start,
								h.scrollTrigger.end,
								0,
								d,
								e
							)),
							o && Fa(o, i, n, !0)
					else {
						Uo(t) && (t = t(a))
						var b,
							y,
							D,
							w,
							x = (e || '0').split(' ')
						;(m = Rr(t, a) || Ur),
							((b = va(m) || {}) && (b.left || b.top)) ||
								'none' !== ga(m).display ||
								((w = m.style.display),
								(m.style.display = 'block'),
								(b = va(m)),
								w ? (m.style.display = w) : m.style.removeProperty('display')),
							(y = Ma(x[0], b[n.d])),
							(D = Ma(x[1] || '0', i)),
							(e = b[n.p] - l[n.p] - c + y + s - D),
							o && Fa(o, D, n, i - D < 20 || (o._isStart && D > 20)),
							(i -= i - D)
					}
					if ((p && ((a[p] = e || -0.001), e < 0 && (e = 0)), r)) {
						var E = e + i,
							_ = r._isStart
						;(f = 'scroll' + n.d2),
							Fa(
								r,
								E,
								n,
								(_ && E > 20) ||
									(!_ && (u ? Math.max(Ur[f], Wr[f]) : r.parentNode[f]) <= E + 1)
							),
							u &&
								((l = va(o)),
								u && (r.style[n.op.p] = l[n.op.p] - n.op.m - r._offset + fa))
					}
					return (
						h &&
							m &&
							((f = va(m)),
							h.seek(d),
							(g = va(m)),
							(h._caScrollDist = f[n.p] - g[n.p]),
							(e = (e / h._caScrollDist) * d)),
						h && h.seek(v),
						h ? e : Math.round(e)
					)
				},
				ol = /(webkit|moz|length|cssText|inset)/i,
				al = function (e, t, i, n) {
					if (e.parentNode !== t) {
						var s,
							r,
							o = e.style
						if (t === Ur) {
							for (s in ((e._stOrig = o.cssText), (r = ga(e))))
								+s ||
									ol.test(s) ||
									!r[s] ||
									'string' != typeof o[s] ||
									'0' === s ||
									(o[s] = r[s])
							;(o.top = i), (o.left = n)
						} else o.cssText = e._stOrig
						;(Vr.core.getCache(e).uncache = 1), t.appendChild(e)
					}
				},
				ll = function (e, t, i) {
					var n = t,
						s = n
					return function (t) {
						var r = Math.round(e())
						return (
							r !== n &&
								r !== s &&
								Math.abs(r - n) > 3 &&
								Math.abs(r - s) > 3 &&
								((t = r), i && i()),
							(s = n),
							(n = t),
							t
						)
					}
				},
				cl = function (e, t, i) {
					var n = {}
					;(n[t.p] = '+=' + i), Vr.set(e, n)
				},
				ul = function (e, t) {
					var i = Ir(e, t),
						n = '_scroll' + t.p2,
						s = function t(s, r, o, a, l) {
							var c = t.tween,
								u = r.onComplete,
								d = {}
							o = o || i()
							var h = ll(i, o, function () {
								c.kill(), (t.tween = 0)
							})
							return (
								(l = (a && l) || 0),
								(a = a || s - o),
								c && c.kill(),
								(r[n] = s),
								(r.inherit = !1),
								(r.modifiers = d),
								(d[n] = function () {
									return h(o + a * c.ratio + l * c.ratio * c.ratio)
								}),
								(r.onUpdate = function () {
									xr.cache++, t.tween && Ka()
								}),
								(r.onComplete = function () {
									;(t.tween = 0), u && u.call(c)
								}),
								(c = t.tween = Vr.to(e, r))
							)
						}
					return (
						(e[n] = i),
						(i.wheelHandler = function () {
							return s.tween && s.tween.kill() && (s.tween = 0)
						}),
						xa(e, 'wheel', i.wheelHandler),
						dl.isTouch && xa(e, 'touchmove', i.wheelHandler),
						s
					)
				},
				dl = (function () {
					function e(t, i) {
						Yr ||
							e.register(Vr) ||
							console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
							bo(this),
							this.init(t, i)
					}
					return (
						(e.prototype.init = function (t, i) {
							if (
								((this.progress = this.start = 0), this.vars && this.kill(!0, !0), Lo)
							) {
								var n,
									s,
									r,
									o,
									a,
									l,
									c,
									u,
									d,
									h,
									p,
									f,
									g,
									m,
									v,
									b,
									y,
									D,
									w,
									x,
									E,
									_,
									C,
									T,
									S,
									M,
									P,
									F,
									A,
									O,
									L,
									k,
									z,
									R,
									I,
									B,
									N,
									j,
									H,
									$,
									q,
									V,
									Y = (t = ma(Wo(t) || Zo(t) || t.nodeType ? { trigger: t } : t, Ta)),
									X = Y.onUpdate,
									G = Y.toggleClass,
									W = Y.id,
									U = Y.onToggle,
									Z = Y.onRefresh,
									K = Y.scrub,
									J = Y.trigger,
									Q = Y.pin,
									ee = Y.pinSpacing,
									te = Y.invalidateOnRefresh,
									ie = Y.anticipatePin,
									ne = Y.onScrubComplete,
									se = Y.onSnapComplete,
									re = Y.once,
									oe = Y.snap,
									ae = Y.pinReparent,
									le = Y.pinSpacer,
									ce = Y.containerAnimation,
									ue = Y.fastScrollEnd,
									de = Y.preventOverlaps,
									he =
										t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
											? kr
											: zr,
									pe = !K && 0 !== K,
									fe = Rr(t.scroller || Xr),
									ge = Vr.core.getCache(fe),
									me = qo(fe),
									ve =
										'fixed' ===
										('pinType' in t ? t.pinType : Tr(fe, 'pinType') || (me && 'fixed')),
									be = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
									ye = pe && t.toggleActions.split(' '),
									De = 'markers' in t ? t.markers : Ta.markers,
									we = me ? 0 : parseFloat(ga(fe)['border' + he.p2 + ha]) || 0,
									xe = this,
									Ee =
										t.onRefreshInit &&
										function () {
											return t.onRefreshInit(xe)
										},
									_e = (function (e, t, i) {
										var n = i.d,
											s = i.d2,
											r = i.a
										return (r = Tr(e, 'getBoundingClientRect'))
											? function () {
													return r()[n]
											  }
											: function () {
													return (t ? Vo(s) : e['client' + s]) || 0
											  }
									})(fe, me, he),
									Ce = (function (e, t) {
										return !t || ~Er.indexOf(e)
											? Yo(e)
											: function () {
													return sl
											  }
									})(fe, me),
									Te = 0,
									Se = 0,
									Me = 0,
									Pe = Ir(fe, he)
								if (
									((xe._startClamp = xe._endClamp = !1),
									(xe._dir = he),
									(ie *= 45),
									(xe.scroller = fe),
									(xe.scroll = ce ? ce.time.bind(ce) : Pe),
									(o = Pe()),
									(xe.vars = t),
									(i = i || t.animation),
									'refreshPriority' in t &&
										((co = 1), -9999 === t.refreshPriority && (Mo = xe)),
									(ge.tweenScroll = ge.tweenScroll || {
										top: ul(fe, zr),
										left: ul(fe, kr),
									}),
									(xe.tweenTo = n = ge.tweenScroll[he.p]),
									(xe.scrubDuration = function (e) {
										;(z = Zo(e) && e)
											? k
												? k.duration(e)
												: (k = Vr.to(i, {
														ease: 'expo',
														totalProgress: '+=0',
														inherit: !1,
														duration: z,
														paused: !0,
														onComplete: function () {
															return ne && ne(xe)
														},
												  }))
											: (k && k.progress(1).kill(), (k = 0))
									}),
									i &&
										((i.vars.lazy = !1),
										(i._initted && !xe.isReverted) ||
											(!1 !== i.vars.immediateRender &&
												!1 !== t.immediateRender &&
												i.duration() &&
												i.render(0, !0, !0)),
										(xe.animation = i.pause()),
										(i.scrollTrigger = xe),
										xe.scrubDuration(K),
										(O = 0),
										W || (W = i.vars.id)),
									oe &&
										((Ko(oe) && !oe.push) || (oe = { snapTo: oe }),
										'scrollBehavior' in Ur.style &&
											Vr.set(me ? [Ur, Wr] : fe, { scrollBehavior: 'auto' }),
										xr.forEach(function (e) {
											return (
												Uo(e) &&
												e.target === (me ? Gr.scrollingElement || Wr : fe) &&
												(e.smooth = !1)
											)
										}),
										(r = Uo(oe.snapTo)
											? oe.snapTo
											: 'labels' === oe.snapTo
											? (function (e) {
													return function (t) {
														return Vr.utils.snap(ya(e), t)
													}
											  })(i)
											: 'labelsDirectional' === oe.snapTo
											? (($ = i),
											  function (e, t) {
													return Da(ya($))(e, t.direction)
											  })
											: !1 !== oe.directional
											? function (e, t) {
													return Da(oe.snapTo)(e, Fo() - Se < 500 ? 0 : t.direction)
											  }
											: Vr.utils.snap(oe.snapTo)),
										(R = oe.duration || { min: 0.1, max: 2 }),
										(R = Ko(R) ? Qr(R.min, R.max) : Qr(R, R)),
										(I = Vr.delayedCall(oe.delay || z / 2 || 0.1, function () {
											var e = Pe(),
												t = Fo() - Se < 500,
												s = n.tween
											if (!(t || Math.abs(xe.getVelocity()) < 10) || s || no || Te === e)
												xe.isActive && Te !== e && I.restart(!0)
											else {
												var o,
													a,
													u = (e - l) / m,
													d = i && !pe ? i.totalProgress() : u,
													h = t ? 0 : ((d - L) / (Fo() - eo)) * 1e3 || 0,
													p = Vr.utils.clamp(-u, 1 - u, (ea(h / 2) * h) / 0.185),
													f = u + (!1 === oe.inertia ? 0 : p),
													g = oe,
													v = g.onStart,
													b = g.onInterrupt,
													y = g.onComplete
												if (
													((o = r(f, xe)),
													Zo(o) || (o = f),
													(a = Math.round(l + o * m)),
													e <= c && e >= l && a !== e)
												) {
													if (s && !s._initted && s.data <= ea(a - e)) return
													!1 === oe.inertia && (p = o - u),
														n(
															a,
															{
																duration: R(
																	ea(
																		(0.185 * Math.max(ea(f - d), ea(o - d))) / h / 0.05 ||
																			0
																	)
																),
																ease: oe.ease || 'power3',
																data: ea(a - e),
																onInterrupt: function () {
																	return I.restart(!0) && b && b(xe)
																},
																onComplete: function () {
																	xe.update(),
																		(Te = Pe()),
																		i &&
																			(k
																				? k.resetTo(
																						'totalProgress',
																						o,
																						i._tTime / i._tDur
																				  )
																				: i.progress(o)),
																		(O = L = i && !pe ? i.totalProgress() : xe.progress),
																		se && se(xe),
																		y && y(xe)
																},
															},
															e,
															p * m,
															a - e - p * m
														),
														v && v(xe, n.tween)
												}
											}
										}).pause())),
									W && (Oa[W] = xe),
									(H =
										(J = xe.trigger = Rr(J || (!0 !== Q && Q))) &&
										J._gsap &&
										J._gsap.stRevert) && (H = H(xe)),
									(Q = !0 === Q ? J : Rr(Q)),
									Wo(G) && (G = { targets: J, className: G }),
									Q &&
										(!1 === ee ||
											ee === da ||
											(ee =
												!(
													!ee &&
													Q.parentNode &&
													Q.parentNode.style &&
													'flex' === ga(Q.parentNode).display
												) && ua),
										(xe.pin = Q),
										(s = Vr.core.getCache(Q)).spacer
											? (v = s.pinState)
											: (le &&
													((le = Rr(le)) &&
														!le.nodeType &&
														(le = le.current || le.nativeElement),
													(s.spacerIsNative = !!le),
													le && (s.spacerState = nl(le))),
											  (s.spacer = D = le || Gr.createElement('div')),
											  D.classList.add('pin-spacer'),
											  W && D.classList.add('pin-spacer-' + W),
											  (s.pinState = v = nl(Q))),
										!1 !== t.force3D && Vr.set(Q, { force3D: !0 }),
										(xe.spacer = D = s.spacer),
										(A = ga(Q)),
										(T = A[ee + he.os2]),
										(x = Vr.getProperty(Q)),
										(E = Vr.quickSetter(Q, he.a, fa)),
										el(Q, D, A),
										(y = nl(Q))),
									De)
								) {
									;(f = Ko(De) ? ma(De, Ca) : Ca),
										(h = Pa('scroller-start', W, fe, he, f, 0)),
										(p = Pa('scroller-end', W, fe, he, f, 0, h)),
										(w = h['offset' + he.op.d2])
									var Fe = Rr(Tr(fe, 'content') || fe)
									;(u = this.markerStart = Pa('start', W, Fe, he, f, w, 0, ce)),
										(d = this.markerEnd = Pa('end', W, Fe, he, f, w, 0, ce)),
										ce && (j = Vr.quickSetter([u, d], he.a, fa)),
										ve ||
											(Er.length && !0 === Tr(fe, 'fixedMarkers')) ||
											((V = ga((q = me ? Ur : fe)).position),
											(q.style.position =
												'absolute' === V || 'fixed' === V ? V : 'relative'),
											Vr.set([h, p], { force3D: !0 }),
											(M = Vr.quickSetter(h, he.a, fa)),
											(F = Vr.quickSetter(p, he.a, fa)))
								}
								if (ce) {
									var Ae = ce.vars.onUpdate,
										Oe = ce.vars.onUpdateParams
									ce.eventCallback('onUpdate', function () {
										xe.update(0, 0, 1), Ae && Ae.apply(ce, Oe || [])
									})
								}
								if (
									((xe.previous = function () {
										return Aa[Aa.indexOf(xe) - 1]
									}),
									(xe.next = function () {
										return Aa[Aa.indexOf(xe) + 1]
									}),
									(xe.revert = function (e, t) {
										if (!t) return xe.kill(!0)
										var n = !1 !== e || !xe.enabled,
											s = io
										n !== xe.isReverted &&
											(n &&
												((B = Math.max(Pe(), xe.scroll.rec || 0)),
												(Me = xe.progress),
												(N = i && i.progress())),
											u &&
												[u, d, h, p].forEach(function (e) {
													return (e.style.display = n ? 'none' : 'block')
												}),
											n && ((io = xe), xe.update(n)),
											!Q ||
												(ae && xe.isActive) ||
												(n
													? (function (e, t, i) {
															il(i)
															var n = e._gsap
															if (n.spacerIsNative) il(n.spacerState)
															else if (e._gsap.swappedIn) {
																var s = t.parentNode
																s && (s.insertBefore(e, t), s.removeChild(t))
															}
															e._gsap.swappedIn = !1
													  })(Q, D, v)
													: el(Q, D, ga(Q), S)),
											n || xe.update(n),
											(io = s),
											(xe.isReverted = n))
									}),
									(xe.refresh = function (s, r, f, w) {
										if ((!io && xe.enabled) || r)
											if (Q && s && Oo) xa(e, 'scrollEnd', Na)
											else {
												!To && Ee && Ee(xe),
													(io = xe),
													n.tween && !f && (n.tween.kill(), (n.tween = 0)),
													k && k.pause(),
													te && i && i.revert({ kill: !1 }).invalidate(),
													xe.isReverted || xe.revert(!0, !0),
													(xe._subPinOffset = !1)
												var E,
													T,
													M,
													F,
													A,
													O,
													L,
													z,
													R,
													j,
													H,
													$,
													q,
													V = _e(),
													Y = Ce(),
													X = ce ? ce.duration() : Xo(fe, he),
													G = m <= 0.01,
													W = 0,
													U = w || 0,
													K = Ko(f) ? f.end : t.end,
													ie = t.endTrigger || J,
													ne = Ko(f)
														? f.start
														: t.start ||
														  (0 !== t.start && J ? (Q ? '0 0' : '0 100%') : 0),
													se = (xe.pinnedContainer =
														t.pinnedContainer && Rr(t.pinnedContainer, xe)),
													re = (J && Math.max(0, Aa.indexOf(xe))) || 0,
													oe = re
												for (
													De &&
													Ko(f) &&
													(($ = Vr.getProperty(h, he.p)), (q = Vr.getProperty(p, he.p)));
													oe--;

												)
													(O = Aa[oe]).end || O.refresh(0, 1) || (io = xe),
														!(L = O.pin) ||
															(L !== J && L !== Q && L !== se) ||
															O.isReverted ||
															(j || (j = []), j.unshift(O), O.revert(!0, !0)),
														O !== Aa[oe] && (re--, oe--)
												for (
													Uo(ne) && (ne = ne(xe)),
														ne = ko(ne, 'start', xe),
														l =
															rl(
																ne,
																J,
																V,
																he,
																Pe(),
																u,
																h,
																xe,
																Y,
																we,
																ve,
																X,
																ce,
																xe._startClamp && '_startClamp'
															) || (Q ? -0.001 : 0),
														Uo(K) && (K = K(xe)),
														Wo(K) &&
															!K.indexOf('+=') &&
															(~K.indexOf(' ')
																? (K = (Wo(ne) ? ne.split(' ')[0] : '') + K)
																: ((W = Ma(K.substr(2), V)),
																  (K = Wo(ne)
																		? ne
																		: (ce
																				? Vr.utils.mapRange(
																						0,
																						ce.duration(),
																						ce.scrollTrigger.start,
																						ce.scrollTrigger.end,
																						l
																				  )
																				: l) + W),
																  (ie = J))),
														K = ko(K, 'end', xe),
														c =
															Math.max(
																l,
																rl(
																	K || (ie ? '100% 0' : X),
																	ie,
																	V,
																	he,
																	Pe() + W,
																	d,
																	p,
																	xe,
																	Y,
																	we,
																	ve,
																	X,
																	ce,
																	xe._endClamp && '_endClamp'
																)
															) || -0.001,
														W = 0,
														oe = re;
													oe--;

												)
													(L = (O = Aa[oe]).pin) &&
														O.start - O._pinPush <= l &&
														!ce &&
														O.end > 0 &&
														((E =
															O.end - (xe._startClamp ? Math.max(0, O.start) : O.start)),
														((L === J && O.start - O._pinPush < l) || L === se) &&
															isNaN(ne) &&
															(W += E * (1 - O.progress)),
														L === Q && (U += E))
												if (
													((l += W),
													(c += W),
													xe._startClamp && (xe._startClamp += W),
													xe._endClamp &&
														!To &&
														((xe._endClamp = c || -0.001), (c = Math.min(c, Xo(fe, he)))),
													(m = c - l || ((l -= 0.01) && 0.001)),
													G && (Me = Vr.utils.clamp(0, 1, Vr.utils.normalize(l, c, B))),
													(xe._pinPush = U),
													u &&
														W &&
														(((E = {})[he.a] = '+=' + W),
														se && (E[he.p] = '-=' + Pe()),
														Vr.set([u, d], E)),
													!Q || (Eo && xe.end >= Xo(fe, he)))
												) {
													if (J && Pe() && !ce)
														for (T = J.parentNode; T && T !== Ur; )
															T._pinOffset && ((l -= T._pinOffset), (c -= T._pinOffset)),
																(T = T.parentNode)
												} else
													(E = ga(Q)),
														(F = he === zr),
														(M = Pe()),
														(_ = parseFloat(x(he.a)) + U),
														!X &&
															c > 1 &&
															((H = {
																style: (H = (me ? Gr.scrollingElement || Wr : fe).style),
																value: H['overflow' + he.a.toUpperCase()],
															}),
															me &&
																'scroll' !== ga(Ur)['overflow' + he.a.toUpperCase()] &&
																(H.style['overflow' + he.a.toUpperCase()] = 'scroll')),
														el(Q, D, E),
														(y = nl(Q)),
														(T = va(Q, !0)),
														(z = ve && Ir(fe, F ? kr : zr)()),
														ee
															? (((S = [ee + he.os2, m + U + fa]).t = D),
															  (oe = ee === ua ? ba(Q, he) + m + U : 0) &&
																	(S.push(he.d, oe + fa),
																	'auto' !== D.style.flexBasis &&
																		(D.style.flexBasis = oe + fa)),
															  il(S),
															  se &&
																	Aa.forEach(function (e) {
																		e.pin === se &&
																			!1 !== e.vars.pinSpacing &&
																			(e._subPinOffset = !0)
																	}),
															  ve && Pe(B))
															: (oe = ba(Q, he)) &&
															  'auto' !== D.style.flexBasis &&
															  (D.style.flexBasis = oe + fa),
														ve &&
															(((A = {
																top: T.top + (F ? M - l : z) + fa,
																left: T.left + (F ? z : M - l) + fa,
																boxSizing: 'border-box',
																position: 'fixed',
															})[sa] = A['max' + ha] =
																Math.ceil(T.width) + fa),
															(A[ra] = A['max' + pa] = Math.ceil(T.height) + fa),
															(A[da] =
																A[da + la] =
																A[da + oa] =
																A[da + ca] =
																A[da + aa] =
																	'0'),
															(A[ua] = E[ua]),
															(A[ua + la] = E[ua + la]),
															(A[ua + oa] = E[ua + oa]),
															(A[ua + ca] = E[ua + ca]),
															(A[ua + aa] = E[ua + aa]),
															(b = (function (e, t, i) {
																for (
																	var n, s = [], r = e.length, o = i ? 8 : 0;
																	o < r;
																	o += 2
																)
																	(n = e[o]), s.push(n, n in t ? t[n] : e[o + 1])
																return (s.t = e.t), s
															})(v, A, ae)),
															To && Pe(0)),
														i
															? ((R = i._initted),
															  uo(1),
															  i.render(i.duration(), !0, !0),
															  (C = x(he.a) - _ + m + U),
															  (P = Math.abs(m - C) > 1),
															  ve && P && b.splice(b.length - 2, 2),
															  i.render(0, !0, !0),
															  R || i.invalidate(!0),
															  i.parent || i.totalTime(i.totalTime()),
															  uo(0))
															: (C = m),
														H &&
															(H.value
																? (H.style['overflow' + he.a.toUpperCase()] = H.value)
																: H.style.removeProperty('overflow-' + he.a))
												j &&
													j.forEach(function (e) {
														return e.revert(!1, !0)
													}),
													(xe.start = l),
													(xe.end = c),
													(o = a = To ? B : Pe()),
													ce || To || (o < B && Pe(B), (xe.scroll.rec = 0)),
													xe.revert(!1, !0),
													(Se = Fo()),
													I && ((Te = -1), I.restart(!0)),
													(io = 0),
													i &&
														pe &&
														(i._initted || N) &&
														i.progress() !== N &&
														i.progress(N || 0, !0).render(i.time(), !0, !0),
													(G || Me !== xe.progress || ce || te) &&
														(i &&
															!pe &&
															i.totalProgress(
																ce && l < -0.001 && !Me
																	? Vr.utils.normalize(l, c, 0)
																	: Me,
																!0
															),
														(xe.progress = G || (o - l) / m === Me ? 0 : Me)),
													Q && ee && (D._pinOffset = Math.round(xe.progress * C)),
													k && k.invalidate(),
													isNaN($) ||
														(($ -= Vr.getProperty(h, he.p)),
														(q -= Vr.getProperty(p, he.p)),
														cl(h, he, $),
														cl(u, he, $ - (w || 0)),
														cl(p, he, q),
														cl(d, he, q - (w || 0))),
													G && !To && xe.update(),
													!Z || To || g || ((g = !0), Z(xe), (g = !1))
											}
									}),
									(xe.getVelocity = function () {
										return ((Pe() - a) / (Fo() - eo)) * 1e3 || 0
									}),
									(xe.endAnimation = function () {
										Jo(xe.callbackAnimation),
											i &&
												(k
													? k.progress(1)
													: i.paused()
													? pe || Jo(i, xe.direction < 0, 1)
													: Jo(i, i.reversed()))
									}),
									(xe.labelToScroll = function (e) {
										return (
											(i &&
												i.labels &&
												(l || xe.refresh() || l) + (i.labels[e] / i.duration()) * m) ||
											0
										)
									}),
									(xe.getTrailing = function (e) {
										var t = Aa.indexOf(xe),
											i = xe.direction > 0 ? Aa.slice(0, t).reverse() : Aa.slice(t + 1)
										return (
											Wo(e)
												? i.filter(function (t) {
														return t.vars.preventOverlaps === e
												  })
												: i
										).filter(function (e) {
											return xe.direction > 0 ? e.end <= l : e.start >= c
										})
									}),
									(xe.update = function (e, t, s) {
										if (!ce || s || e) {
											var r,
												u,
												d,
												p,
												f,
												g,
												v,
												w = !0 === To ? B : xe.scroll(),
												x = e ? 0 : (w - l) / m,
												S = x < 0 ? 0 : x > 1 ? 1 : x || 0,
												A = xe.progress
											if (
												(t &&
													((a = o),
													(o = ce ? Pe() : w),
													oe && ((L = O), (O = i && !pe ? i.totalProgress() : S))),
												ie &&
													Q &&
													!io &&
													!Po &&
													Oo &&
													(!S && l < w + ((w - a) / (Fo() - eo)) * ie
														? (S = 1e-4)
														: 1 === S &&
														  c > w + ((w - a) / (Fo() - eo)) * ie &&
														  (S = 0.9999)),
												S !== A && xe.enabled)
											) {
												if (
													((p =
														(f = (r = xe.isActive = !!S && S < 1) != (!!A && A < 1)) ||
														!!S != !!A),
													(xe.direction = S > A ? 1 : -1),
													(xe.progress = S),
													p &&
														!io &&
														((u = S && !A ? 0 : 1 === S ? 1 : 1 === A ? 2 : 3),
														pe &&
															((d = (!f && 'none' !== ye[u + 1] && ye[u + 1]) || ye[u]),
															(v = i && ('complete' === d || 'reset' === d || d in i)))),
													de &&
														(f || v) &&
														(v || K || !i) &&
														(Uo(de)
															? de(xe)
															: xe.getTrailing(de).forEach(function (e) {
																	return e.endAnimation()
															  })),
													pe ||
														(!k || io || Po
															? i && i.totalProgress(S, !(!io || (!Se && !e)))
															: (k._dp._time - k._start !== k._time &&
																	k.render(k._dp._time - k._start),
															  k.resetTo
																	? k.resetTo('totalProgress', S, i._tTime / i._tDur)
																	: ((k.vars.totalProgress = S),
																	  k.invalidate().restart()))),
													Q)
												)
													if ((e && ee && (D.style[ee + he.os2] = T), ve)) {
														if (p) {
															if (
																((g = !e && S > A && c + 1 > w && w + 1 >= Xo(fe, he)),
																ae)
															)
																if (e || (!r && !g)) al(Q, D)
																else {
																	var z = va(Q, !0),
																		R = w - l
																	al(
																		Q,
																		Ur,
																		z.top + (he === zr ? R : 0) + fa,
																		z.left + (he === zr ? 0 : R) + fa
																	)
																}
															il(r || g ? b : y),
																(P && S < 1 && r) || E(_ + (1 !== S || g ? 0 : C))
														}
													} else E(jo(_ + C * S))
												oe && !n.tween && !io && !Po && I.restart(!0),
													G &&
														(f || (re && S && (S < 1 || !_o))) &&
														Jr(G.targets).forEach(function (e) {
															return e.classList[r || re ? 'add' : 'remove'](G.className)
														}),
													X && !pe && !e && X(xe),
													p && !io
														? (pe &&
																(v &&
																	('complete' === d
																		? i.pause().totalProgress(1)
																		: 'reset' === d
																		? i.restart(!0).pause()
																		: 'restart' === d
																		? i.restart(!0)
																		: i[d]()),
																X && X(xe)),
														  (!f && _o) ||
																(U && f && Qo(xe, U),
																be[u] && Qo(xe, be[u]),
																re && (1 === S ? xe.kill(!1, 1) : (be[u] = 0)),
																f || (be[(u = 1 === S ? 1 : 3)] && Qo(xe, be[u]))),
														  ue &&
																!r &&
																Math.abs(xe.getVelocity()) > (Zo(ue) ? ue : 2500) &&
																(Jo(xe.callbackAnimation),
																k ? k.progress(1) : Jo(i, 'reverse' === d ? 1 : !S, 1)))
														: pe && X && !io && X(xe)
											}
											if (F) {
												var N = ce ? (w / ce.duration()) * (ce._caScrollDist || 0) : w
												M(N + (h._isFlipped ? 1 : 0)), F(N)
											}
											j && j((-w / ce.duration()) * (ce._caScrollDist || 0))
										}
									}),
									(xe.enable = function (t, i) {
										xe.enabled ||
											((xe.enabled = !0),
											xa(fe, 'resize', Ra),
											me || xa(fe, 'scroll', ka),
											Ee && xa(e, 'refreshInit', Ee),
											!1 !== t && ((xe.progress = Me = 0), (o = a = Te = Pe())),
											!1 !== i && xe.refresh())
									}),
									(xe.getTween = function (e) {
										return e && n ? n.tween : k
									}),
									(xe.setPositions = function (e, t, i, n) {
										if (ce) {
											var s = ce.scrollTrigger,
												r = ce.duration(),
												o = s.end - s.start
											;(e = s.start + (o * e) / r), (t = s.start + (o * t) / r)
										}
										xe.refresh(
											!1,
											!1,
											{
												start: zo(e, i && !!xe._startClamp),
												end: zo(t, i && !!xe._endClamp),
											},
											n
										),
											xe.update()
									}),
									(xe.adjustPinSpacing = function (e) {
										if (S && e) {
											var t = S.indexOf(he.d) + 1
											;(S[t] = parseFloat(S[t]) + e + fa),
												(S[1] = parseFloat(S[1]) + e + fa),
												il(S)
										}
									}),
									(xe.disable = function (t, i) {
										if (
											xe.enabled &&
											(!1 !== t && xe.revert(!0, !0),
											(xe.enabled = xe.isActive = !1),
											i || (k && k.pause()),
											(B = 0),
											s && (s.uncache = 1),
											Ee && Ea(e, 'refreshInit', Ee),
											I && (I.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
											!me)
										) {
											for (var r = Aa.length; r--; )
												if (Aa[r].scroller === fe && Aa[r] !== xe) return
											Ea(fe, 'resize', Ra), me || Ea(fe, 'scroll', ka)
										}
									}),
									(xe.kill = function (e, n) {
										xe.disable(e, n), k && !n && k.kill(), W && delete Oa[W]
										var r = Aa.indexOf(xe)
										r >= 0 && Aa.splice(r, 1),
											r === ro && Za > 0 && ro--,
											(r = 0),
											Aa.forEach(function (e) {
												return e.scroller === xe.scroller && (r = 1)
											}),
											r || To || (xe.scroll.rec = 0),
											i &&
												((i.scrollTrigger = null),
												e && i.revert({ kill: !1 }),
												n || i.kill()),
											u &&
												[u, d, h, p].forEach(function (e) {
													return e.parentNode && e.parentNode.removeChild(e)
												}),
											Mo === xe && (Mo = 0),
											Q &&
												(s && (s.uncache = 1),
												(r = 0),
												Aa.forEach(function (e) {
													return e.pin === Q && r++
												}),
												r || (s.spacer = 0)),
											t.onKill && t.onKill(xe)
									}),
									Aa.push(xe),
									xe.enable(!1, !1),
									H && H(xe),
									i && i.add && !m)
								) {
									var Le = xe.update
									;(xe.update = function () {
										;(xe.update = Le), l || c || xe.refresh()
									}),
										Vr.delayedCall(0.01, xe.update),
										(m = 0.01),
										(l = c = 0)
								} else xe.refresh()
								Q &&
									(function () {
										if (So !== Ya) {
											var e = (So = Ya)
											requestAnimationFrame(function () {
												return e === Ya && Wa(!0)
											})
										}
									})()
							} else this.update = this.refresh = this.kill = No
						}),
						(e.register = function (t) {
							return (
								Yr ||
									((Vr = t || $o()), Ho() && window.document && e.enable(), (Yr = Lo)),
								Yr
							)
						}),
						(e.defaults = function (e) {
							if (e) for (var t in e) Ta[t] = e[t]
							return Ta
						}),
						(e.disable = function (e, t) {
							;(Lo = 0),
								Aa.forEach(function (i) {
									return i[t ? 'kill' : 'disable'](e)
								}),
								Ea(Xr, 'wheel', ka),
								Ea(Gr, 'scroll', ka),
								clearInterval(to),
								Ea(Gr, 'touchcancel', No),
								Ea(Ur, 'touchstart', No),
								wa(Ea, Gr, 'pointerdown,touchstart,mousedown', Io),
								wa(Ea, Gr, 'pointerup,touchend,mouseup', Bo),
								Kr.kill(),
								Go(Ea)
							for (var i = 0; i < xr.length; i += 3)
								_a(Ea, xr[i], xr[i + 1]), _a(Ea, xr[i], xr[i + 2])
						}),
						(e.enable = function () {
							if (
								((Xr = window),
								(Gr = document),
								(Wr = Gr.documentElement),
								(Ur = Gr.body),
								Vr &&
									((Jr = Vr.utils.toArray),
									(Qr = Vr.utils.clamp),
									(bo = Vr.core.context || No),
									(uo = Vr.core.suppressOverwrites || No),
									(yo = Xr.history.scrollRestoration || 'auto'),
									(Ua = Xr.pageYOffset),
									Vr.core.globals('ScrollTrigger', e),
									Ur))
							) {
								;(Lo = 1),
									((Do = document.createElement('div')).style.height = '100vh'),
									(Do.style.position = 'absolute'),
									Xa(),
									Ro(),
									qr.register(Vr),
									(e.isTouch = qr.isTouch),
									(vo =
										qr.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
									(fo = 1 === qr.isTouch),
									xa(Xr, 'wheel', ka),
									(Zr = [Xr, Gr, Wr, Ur]),
									Vr.matchMedia
										? ((e.matchMedia = function (e) {
												var t,
													i = Vr.matchMedia()
												for (t in e) i.add(t, e[t])
												return i
										  }),
										  Vr.addEventListener('matchMediaInit', function () {
												return qa()
										  }),
										  Vr.addEventListener('matchMediaRevert', function () {
												return $a()
										  }),
										  Vr.addEventListener('matchMedia', function () {
												Wa(0, 1), ja('matchMedia')
										  }),
										  Vr.matchMedia('(orientation: portrait)', function () {
												return za(), za
										  }))
										: console.warn('Requires GSAP 3.11.0 or later'),
									za(),
									xa(Gr, 'scroll', ka)
								var t,
									i,
									n = Ur.style,
									s = n.borderTopStyle,
									r = Vr.core.Animation.prototype
								for (
									r.revert ||
										Object.defineProperty(r, 'revert', {
											value: function () {
												return this.time(-0.01, !0)
											},
										}),
										n.borderTopStyle = 'solid',
										t = va(Ur),
										zr.m = Math.round(t.top + zr.sc()) || 0,
										kr.m = Math.round(t.left + kr.sc()) || 0,
										s ? (n.borderTopStyle = s) : n.removeProperty('border-top-style'),
										to = setInterval(La, 250),
										Vr.delayedCall(0.5, function () {
											return (Po = 0)
										}),
										xa(Gr, 'touchcancel', No),
										xa(Ur, 'touchstart', No),
										wa(xa, Gr, 'pointerdown,touchstart,mousedown', Io),
										wa(xa, Gr, 'pointerup,touchend,mouseup', Bo),
										so = Vr.utils.checkPrefix('transform'),
										Qa.push(so),
										Yr = Fo(),
										Kr = Vr.delayedCall(0.2, Wa).pause(),
										lo = [
											Gr,
											'visibilitychange',
											function () {
												var e = Xr.innerWidth,
													t = Xr.innerHeight
												Gr.hidden ? ((oo = e), (ao = t)) : (oo === e && ao === t) || Ra()
											},
											Gr,
											'DOMContentLoaded',
											Wa,
											Xr,
											'load',
											Wa,
											Xr,
											'resize',
											Ra,
										],
										Go(xa),
										Aa.forEach(function (e) {
											return e.enable(0, 1)
										}),
										i = 0;
									i < xr.length;
									i += 3
								)
									_a(Ea, xr[i], xr[i + 1]), _a(Ea, xr[i], xr[i + 2])
							}
						}),
						(e.config = function (t) {
							'limitCallbacks' in t && (_o = !!t.limitCallbacks)
							var i = t.syncInterval
							;(i && clearInterval(to)) || ((to = i) && setInterval(La, i)),
								'ignoreMobileResize' in t &&
									(fo = 1 === e.isTouch && t.ignoreMobileResize),
								'autoRefreshEvents' in t &&
									(Go(Ea) || Go(xa, t.autoRefreshEvents || 'none'),
									(ho = -1 === (t.autoRefreshEvents + '').indexOf('resize')))
						}),
						(e.scrollerProxy = function (e, t) {
							var i = Rr(e),
								n = xr.indexOf(i),
								s = qo(i)
							~n && xr.splice(n, s ? 6 : 2),
								t && (s ? Er.unshift(Xr, t, Ur, t, Wr, t) : Er.unshift(i, t))
						}),
						(e.clearMatchMedia = function (e) {
							Aa.forEach(function (t) {
								return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
							})
						}),
						(e.isInViewport = function (e, t, i) {
							var n = (Wo(e) ? Rr(e) : e).getBoundingClientRect(),
								s = n[i ? sa : ra] * t || 0
							return i
								? n.right - s > 0 && n.left + s < Xr.innerWidth
								: n.bottom - s > 0 && n.top + s < Xr.innerHeight
						}),
						(e.positionInViewport = function (e, t, i) {
							Wo(e) && (e = Rr(e))
							var n = e.getBoundingClientRect(),
								s = n[i ? sa : ra],
								r =
									null == t
										? s / 2
										: t in Sa
										? Sa[t] * s
										: ~t.indexOf('%')
										? (parseFloat(t) * s) / 100
										: parseFloat(t) || 0
							return i ? (n.left + r) / Xr.innerWidth : (n.top + r) / Xr.innerHeight
						}),
						(e.killAll = function (e) {
							if (
								(Aa.slice(0).forEach(function (e) {
									return 'ScrollSmoother' !== e.vars.id && e.kill()
								}),
								!0 !== e)
							) {
								var t = Ia.killAll || []
								;(Ia = {}),
									t.forEach(function (e) {
										return e()
									})
							}
						}),
						e
					)
				})()
			;(dl.version = '3.12.5'),
				(dl.saveStyles = function (e) {
					return e
						? Jr(e).forEach(function (e) {
								if (e && e.style) {
									var t = Ha.indexOf(e)
									t >= 0 && Ha.splice(t, 5),
										Ha.push(
											e,
											e.style.cssText,
											e.getBBox && e.getAttribute('transform'),
											Vr.core.getCache(e),
											bo()
										)
								}
						  })
						: Ha
				}),
				(dl.revert = function (e, t) {
					return qa(!e, t)
				}),
				(dl.create = function (e, t) {
					return new dl(e, t)
				}),
				(dl.refresh = function (e) {
					return e ? Ra() : (Yr || dl.register()) && Wa(!0)
				}),
				(dl.update = function (e) {
					return ++xr.cache && Ka(!0 === e ? 2 : 0)
				}),
				(dl.clearScrollMemory = Va),
				(dl.maxScroll = function (e, t) {
					return Xo(e, t ? kr : zr)
				}),
				(dl.getScrollFunc = function (e, t) {
					return Ir(Rr(e), t ? kr : zr)
				}),
				(dl.getById = function (e) {
					return Oa[e]
				}),
				(dl.getAll = function () {
					return Aa.filter(function (e) {
						return 'ScrollSmoother' !== e.vars.id
					})
				}),
				(dl.isScrolling = function () {
					return !!Oo
				}),
				(dl.snapDirectional = Da),
				(dl.addEventListener = function (e, t) {
					var i = Ia[e] || (Ia[e] = [])
					~i.indexOf(t) || i.push(t)
				}),
				(dl.removeEventListener = function (e, t) {
					var i = Ia[e],
						n = i && i.indexOf(t)
					n >= 0 && i.splice(n, 1)
				}),
				(dl.batch = function (e, t) {
					var i,
						n = [],
						s = {},
						r = t.interval || 0.016,
						o = t.batchMax || 1e9,
						a = function (e, t) {
							var i = [],
								n = [],
								s = Vr.delayedCall(r, function () {
									t(i, n), (i = []), (n = [])
								}).pause()
							return function (e) {
								i.length || s.restart(!0),
									i.push(e.trigger),
									n.push(e),
									o <= i.length && s.progress(1)
							}
						}
					for (i in t)
						s[i] =
							'on' === i.substr(0, 2) && Uo(t[i]) && 'onRefreshInit' !== i
								? a(0, t[i])
								: t[i]
					return (
						Uo(o) &&
							((o = o()),
							xa(dl, 'refresh', function () {
								return (o = t.batchMax())
							})),
						Jr(e).forEach(function (e) {
							var t = {}
							for (i in s) t[i] = s[i]
							;(t.trigger = e), n.push(dl.create(t))
						}),
						n
					)
				})
			var hl,
				pl = function (e, t, i, n) {
					return (
						t > n ? e(n) : t < 0 && e(0),
						i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
					)
				},
				fl = function e(t, i) {
					!0 === i
						? t.style.removeProperty('touch-action')
						: (t.style.touchAction =
								!0 === i
									? 'auto'
									: i
									? 'pan-' + i + (qr.isTouch ? ' pinch-zoom' : '')
									: 'none'),
						t === Wr && e(Ur, i)
				},
				gl = { auto: 1, scroll: 1 },
				ml = function (e) {
					var t,
						i = e.event,
						n = e.target,
						s = e.axis,
						r = (i.changedTouches ? i.changedTouches[0] : i).target,
						o = r._gsap || Vr.core.getCache(r),
						a = Fo()
					if (!o._isScrollT || a - o._isScrollT > 2e3) {
						for (
							;
							r &&
							r !== Ur &&
							((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
								(!gl[(t = ga(r)).overflowY] && !gl[t.overflowX]));

						)
							r = r.parentNode
						;(o._isScroll =
							r && r !== n && !qo(r) && (gl[(t = ga(r)).overflowY] || gl[t.overflowX])),
							(o._isScrollT = a)
					}
					;(o._isScroll || 'x' === s) && (i.stopPropagation(), (i._gsapAllow = !0))
				},
				vl = function (e, t, i, n) {
					return qr.create({
						target: e,
						capture: !0,
						debounce: !1,
						lockAxis: !0,
						type: t,
						onWheel: (n = n && ml),
						onPress: n,
						onDrag: n,
						onScroll: n,
						onEnable: function () {
							return i && xa(Gr, qr.eventTypes[0], yl, !1, !0)
						},
						onDisable: function () {
							return Ea(Gr, qr.eventTypes[0], yl, !0)
						},
					})
				},
				bl = /(input|label|select|textarea)/i,
				yl = function (e) {
					var t = bl.test(e.target.tagName)
					;(t || hl) && ((e._gsapAllow = !0), (hl = t))
				}
			;(dl.sort = function (e) {
				return Aa.sort(
					e ||
						function (e, t) {
							return (
								-1e6 * (e.vars.refreshPriority || 0) +
								e.start -
								(t.start + -1e6 * (t.vars.refreshPriority || 0))
							)
						}
				)
			}),
				(dl.observe = function (e) {
					return new qr(e)
				}),
				(dl.normalizeScroll = function (e) {
					if (void 0 === e) return po
					if (!0 === e && po) return po.enable()
					if (!1 === e) return po && po.kill(), void (po = e)
					var t =
						e instanceof qr
							? e
							: (function (e) {
									Ko(e) || (e = {}),
										(e.preventDefault = e.isNormalizer = e.allowClicks = !0),
										e.type || (e.type = 'wheel,touch'),
										(e.debounce = !!e.debounce),
										(e.id = e.id || 'normalizer')
									var t,
										i,
										n,
										s,
										r,
										o,
										a,
										l,
										c = e,
										u = c.normalizeScrollX,
										d = c.momentum,
										h = c.allowNestedScroll,
										p = c.onRelease,
										f = Rr(e.target) || Wr,
										g = Vr.core.globals().ScrollSmoother,
										m = g && g.get(),
										v =
											vo &&
											((e.content && Rr(e.content)) ||
												(m && !1 !== e.content && !m.smooth() && m.content())),
										b = Ir(f, zr),
										y = Ir(f, kr),
										D = 1,
										w =
											(qr.isTouch && Xr.visualViewport
												? Xr.visualViewport.scale * Xr.visualViewport.width
												: Xr.outerWidth) / Xr.innerWidth,
										x = 0,
										E = Uo(d)
											? function () {
													return d(t)
											  }
											: function () {
													return d || 2.8
											  },
										_ = vl(f, e.type, !0, h),
										C = function () {
											return (s = !1)
										},
										T = No,
										S = No,
										M = function () {
											;(i = Xo(f, zr)),
												(S = Qr(vo ? 1 : 0, i)),
												u && (T = Qr(0, Xo(f, kr))),
												(n = Ya)
										},
										P = function () {
											;(v._gsap.y = jo(parseFloat(v._gsap.y) + b.offset) + 'px'),
												(v.style.transform =
													'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
													parseFloat(v._gsap.y) +
													', 0, 1)'),
												(b.offset = b.cacheID = 0)
										},
										F = function () {
											M(),
												r.isActive() &&
													r.vars.scrollY > i &&
													(b() > i ? r.progress(1) && b(i) : r.resetTo('scrollY', i))
										}
									return (
										v && Vr.set(v, { y: '+=0' }),
										(e.ignoreCheck = function (e) {
											return (
												(vo &&
													'touchmove' === e.type &&
													(function () {
														if (s) {
															requestAnimationFrame(C)
															var e = jo(t.deltaY / 2),
																i = S(b.v - e)
															if (v && i !== b.v + b.offset) {
																b.offset = i - b.v
																var n = jo((parseFloat(v && v._gsap.y) || 0) - b.offset)
																;(v.style.transform =
																	'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
																	n +
																	', 0, 1)'),
																	(v._gsap.y = n + 'px'),
																	(b.cacheID = xr.cache),
																	Ka()
															}
															return !0
														}
														b.offset && P(), (s = !0)
													})()) ||
												(D > 1.05 && 'touchstart' !== e.type) ||
												t.isGesturing ||
												(e.touches && e.touches.length > 1)
											)
										}),
										(e.onPress = function () {
											s = !1
											var e = D
											;(D = jo(
												((Xr.visualViewport && Xr.visualViewport.scale) || 1) / w
											)),
												r.pause(),
												e !== D && fl(f, D > 1.01 || (!u && 'x')),
												(o = y()),
												(a = b()),
												M(),
												(n = Ya)
										}),
										(e.onRelease = e.onGestureStart =
											function (e, t) {
												if ((b.offset && P(), t)) {
													xr.cache++
													var n,
														s,
														o = E()
													u &&
														((s = (n = y()) + (0.05 * o * -e.velocityX) / 0.227),
														(o *= pl(y, n, s, Xo(f, kr))),
														(r.vars.scrollX = T(s))),
														(s = (n = b()) + (0.05 * o * -e.velocityY) / 0.227),
														(o *= pl(b, n, s, Xo(f, zr))),
														(r.vars.scrollY = S(s)),
														r.invalidate().duration(o).play(0.01),
														((vo && r.vars.scrollY >= i) || n >= i - 1) &&
															Vr.to({}, { onUpdate: F, duration: o })
												} else l.restart(!0)
												p && p(e)
											}),
										(e.onWheel = function () {
											r._ts && r.pause(), Fo() - x > 1e3 && ((n = 0), (x = Fo()))
										}),
										(e.onChange = function (e, t, i, s, r) {
											if (
												(Ya !== n && M(),
												t &&
													u &&
													y(T(s[2] === t ? o + (e.startX - e.x) : y() + t - s[1])),
												i)
											) {
												b.offset && P()
												var l = r[2] === i,
													c = l ? a + e.startY - e.y : b() + i - r[1],
													d = S(c)
												l && c !== d && (a += d - c), b(d)
											}
											;(i || t) && Ka()
										}),
										(e.onEnable = function () {
											fl(f, !u && 'x'),
												dl.addEventListener('refresh', F),
												xa(Xr, 'resize', F),
												b.smooth &&
													((b.target.style.scrollBehavior = 'auto'),
													(b.smooth = y.smooth = !1)),
												_.enable()
										}),
										(e.onDisable = function () {
											fl(f, !0),
												Ea(Xr, 'resize', F),
												dl.removeEventListener('refresh', F),
												_.kill()
										}),
										(e.lockAxis = !1 !== e.lockAxis),
										((t = new qr(e)).iOS = vo),
										vo && !b() && b(1),
										vo && Vr.ticker.add(No),
										(l = t._dc),
										(r = Vr.to(t, {
											ease: 'power4',
											paused: !0,
											inherit: !1,
											scrollX: u ? '+=0.1' : '+=0',
											scrollY: '+=0.1',
											modifiers: {
												scrollY: ll(b, b(), function () {
													return r.pause()
												}),
											},
											onUpdate: Ka,
											onComplete: l.vars.onComplete,
										})),
										t
									)
							  })(e)
					return po && po.target === t.target && po.kill(), qo(t.target) && (po = t), t
				}),
				(dl.core = {
					_getVelocityProp: Br,
					_inputObserver: vl,
					_scrollers: xr,
					_proxies: Er,
					bridge: {
						ss: function () {
							Oo || ja('scrollStart'), (Oo = Fo())
						},
						ref: function () {
							return io
						},
					},
				}),
				$o() && Vr.registerPlugin(dl)
			const Dl = window.innerWidth > 960,
				wl = document.querySelector('.home'),
				xl = document.querySelector('.about-page')
			Bs.registerPlugin(dl, sr)
			const El = sr.create({ smooth: 1.5, speed: 0.9, effects: !0 })
			Dl || El.effects().forEach((e) => e.kill())
			const _l = document.querySelector('.header'),
				Cl = document.querySelector('.header__lang')
			document.querySelector('.header-change') &&
				dl.create({
					trigger: '.header-change',
					scrub: !0,
					start: '90% top',
					end: '90% top',
					onEnter() {
						_l.classList.remove('active')
					},
					onLeave() {
						_l.classList.add('active')
					},
					onEnterBack() {
						_l.classList.add('active')
					},
					onLeaveBack() {
						_l.classList.remove('active')
					},
				}),
				dl.create({
					trigger: '.overflow-hidden',
					start: 'top top',
					onUpdate: (e) => {
						;-1 == e.direction
							? _l.classList.remove('hidden')
							: 1 == e.direction &&
							  (_l.classList.add('hidden'),
							  Cl.querySelector('.header__lang-heading').classList.remove('active'),
							  Bs.to('.header__lang-dropdown', {
									duration: 0.7,
									ease: 'power4.out',
									height: 0,
							  }))
					},
				})
			const Tl = document.querySelector('.fixed-nav')
			Tl &&
				(dl.create({
					trigger: '.main',
					scrub: !0,
					start: '102% bottom',
					end: '102% bottom',
					onEnter() {
						Tl.classList.remove('active')
					},
					onLeave() {
						Tl.classList.add('active')
					},
					onEnterBack() {
						Tl.classList.add('active')
					},
					onLeaveBack() {
						Tl.classList.remove('active')
					},
				}),
				Bs.to(Tl, {
					bottom: '-130rem',
					scrollTrigger: {
						trigger: '.footer',
						scrub: !0,
						start: 'top bottom',
						end: 'top bottom',
					},
				}))
			const Sl = document.querySelectorAll('.scroll-to')
			if (
				(Sl &&
					Sl.forEach((e) => {
						e.addEventListener('click', () => {
							let t = e.dataset.scrollTo,
								i = El.offset(`#${t}`, 'top top')
							Bs.to(El, { duration: 3, scrollTop: i })
						})
					}),
				'#main-page' !== window.location.hash && '' !== window.location.hash)
			) {
				let e = window.location.hash,
					t = El.offset(e, 'top top')
				window.addEventListener('load', () => {
					Bs.to(El, { duration: 0, delay: 0.1, scrollTop: t })
				})
			}
			var Ml =
				/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/
			function Pl(e) {
				var t = e.nodeType,
					i = ''
				if (1 === t || 9 === t || 11 === t) {
					if ('string' == typeof e.textContent) return e.textContent
					for (e = e.firstChild; e; e = e.nextSibling) i += Pl(e)
				} else if (3 === t || 4 === t) return e.nodeValue
				return i
			}
			var Fl,
				Al,
				Ol,
				Ll,
				kl,
				zl,
				Rl = /(?:\r|\n|\t\t)/g,
				Il = /(?:\s\s+)/g,
				Bl = String.fromCharCode(160),
				Nl = function (e) {
					;(Fl = document),
						(Al = window),
						(Ll =
							Ll ||
							e ||
							Al.gsap ||
							console.warn('Please gsap.registerPlugin(SplitText)')) &&
							((zl = Ll.utils.toArray),
							(kl = Ll.core.context || function () {}),
							(Ol = 1))
				},
				jl = function (e) {
					return Al.getComputedStyle(e)
				},
				Hl = function (e) {
					return 'absolute' === e.position || !0 === e.absolute
				},
				$l = function (e, t) {
					for (var i, n = t.length; --n > -1; )
						if (((i = t[n]), e.substr(0, i.length) === i)) return i.length
				},
				ql = function (e, t) {
					void 0 === e && (e = '')
					var i = ~e.indexOf('++'),
						n = 1
					return (
						i && (e = e.split('++').join('')),
						function () {
							return (
								'<' +
								t +
								" style='position:relative;display:inline-block;'" +
								(e ? " class='" + e + (i ? n++ : '') + "'>" : '>')
							)
						}
					)
				},
				Vl = function e(t, i, n) {
					var s = t.nodeType
					if (1 === s || 9 === s || 11 === s)
						for (t = t.firstChild; t; t = t.nextSibling) e(t, i, n)
					else (3 !== s && 4 !== s) || (t.nodeValue = t.nodeValue.split(i).join(n))
				},
				Yl = function (e, t) {
					for (var i = t.length; --i > -1; ) e.push(t[i])
				},
				Xl = function (e, t, i) {
					for (var n; e && e !== t; ) {
						if ((n = e._next || e.nextSibling)) return n.textContent.charAt(0) === i
						e = e.parentNode || e._parent
					}
				},
				Gl = function e(t) {
					var i,
						n,
						s = zl(t.childNodes),
						r = s.length
					for (i = 0; i < r; i++)
						(n = s[i])._isSplit
							? e(n)
							: i && n.previousSibling && 3 === n.previousSibling.nodeType
							? ((n.previousSibling.nodeValue +=
									3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue),
							  t.removeChild(n))
							: 3 !== n.nodeType && (t.insertBefore(n.firstChild, n), t.removeChild(n))
				},
				Wl = function (e, t) {
					return parseFloat(t[e]) || 0
				},
				Ul = function (e, t, i, n, s, r, o) {
					var a,
						l,
						c,
						u,
						d,
						h,
						p,
						f,
						g,
						m,
						v,
						b,
						y = jl(e),
						D = Wl('paddingLeft', y),
						w = -999,
						x = Wl('borderBottomWidth', y) + Wl('borderTopWidth', y),
						E = Wl('borderLeftWidth', y) + Wl('borderRightWidth', y),
						_ = Wl('paddingTop', y) + Wl('paddingBottom', y),
						C = Wl('paddingLeft', y) + Wl('paddingRight', y),
						T = Wl('fontSize', y) * (t.lineThreshold || 0.2),
						S = y.textAlign,
						M = [],
						P = [],
						F = [],
						A = t.wordDelimiter || ' ',
						O = t.tag ? t.tag : t.span ? 'span' : 'div',
						L = t.type || t.split || 'chars,words,lines',
						k = s && ~L.indexOf('lines') ? [] : null,
						z = ~L.indexOf('words'),
						R = ~L.indexOf('chars'),
						I = Hl(t),
						B = t.linesClass,
						N = ~(B || '').indexOf('++'),
						j = [],
						H = 'flex' === y.display,
						$ = e.style.display
					for (
						N && (B = B.split('++').join('')),
							H && (e.style.display = 'block'),
							c = (l = e.getElementsByTagName('*')).length,
							d = [],
							a = 0;
						a < c;
						a++
					)
						d[a] = l[a]
					if (k || I)
						for (a = 0; a < c; a++)
							((h = (u = d[a]).parentNode === e) || I || (R && !z)) &&
								((b = u.offsetTop),
								k &&
									h &&
									Math.abs(b - w) > T &&
									('BR' !== u.nodeName || 0 === a) &&
									((p = []), k.push(p), (w = b)),
								I &&
									((u._x = u.offsetLeft),
									(u._y = b),
									(u._w = u.offsetWidth),
									(u._h = u.offsetHeight)),
								k &&
									(((u._isSplit && h) ||
										(!R && h) ||
										(z && h) ||
										(!z && u.parentNode.parentNode === e && !u.parentNode._isSplit)) &&
										(p.push(u), (u._x -= D), Xl(u, e, A) && (u._wordEnd = !0)),
									'BR' === u.nodeName &&
										((u.nextSibling && 'BR' === u.nextSibling.nodeName) || 0 === a) &&
										k.push([])))
					for (a = 0; a < c; a++)
						if (((h = (u = d[a]).parentNode === e), 'BR' !== u.nodeName))
							if (
								(I &&
									((g = u.style),
									z || h || ((u._x += u.parentNode._x), (u._y += u.parentNode._y)),
									(g.left = u._x + 'px'),
									(g.top = u._y + 'px'),
									(g.position = 'absolute'),
									(g.display = 'block'),
									(g.width = u._w + 1 + 'px'),
									(g.height = u._h + 'px')),
								!z && R)
							)
								if (u._isSplit)
									for (
										u._next = l = u.nextSibling, u.parentNode.appendChild(u);
										l && 3 === l.nodeType && ' ' === l.textContent;

									)
										(u._next = l.nextSibling),
											u.parentNode.appendChild(l),
											(l = l.nextSibling)
								else
									u.parentNode._isSplit
										? ((u._parent = u.parentNode),
										  !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0),
										  u.nextSibling &&
												' ' === u.nextSibling.textContent &&
												!u.nextSibling.nextSibling &&
												j.push(u.nextSibling),
										  (u._next =
												u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling),
										  u.parentNode.removeChild(u),
										  d.splice(a--, 1),
										  c--)
										: h ||
										  ((b = !u.nextSibling && Xl(u.parentNode, e, A)),
										  u.parentNode._parent && u.parentNode._parent.appendChild(u),
										  b && u.parentNode.appendChild(Fl.createTextNode(' ')),
										  'span' === O && (u.style.display = 'inline'),
										  M.push(u))
							else
								u.parentNode._isSplit && !u._isSplit && '' !== u.innerHTML
									? P.push(u)
									: R &&
									  !u._isSplit &&
									  ('span' === O && (u.style.display = 'inline'), M.push(u))
						else
							k || I
								? (u.parentNode && u.parentNode.removeChild(u), d.splice(a--, 1), c--)
								: z || e.appendChild(u)
					for (a = j.length; --a > -1; ) j[a].parentNode.removeChild(j[a])
					if (k) {
						for (
							I &&
								((m = Fl.createElement(O)),
								e.appendChild(m),
								(v = m.offsetWidth + 'px'),
								(b = m.offsetParent === e ? 0 : e.offsetLeft),
								e.removeChild(m)),
								g = e.style.cssText,
								e.style.cssText = 'display:none;';
							e.firstChild;

						)
							e.removeChild(e.firstChild)
						for (f = ' ' === A && (!I || (!z && !R)), a = 0; a < k.length; a++) {
							for (
								p = k[a],
									(m = Fl.createElement(O)).style.cssText =
										'display:block;text-align:' +
										S +
										';position:' +
										(I ? 'absolute;' : 'relative;'),
									B && (m.className = B + (N ? a + 1 : '')),
									F.push(m),
									c = p.length,
									l = 0;
								l < c;
								l++
							)
								'BR' !== p[l].nodeName &&
									((u = p[l]),
									m.appendChild(u),
									f && u._wordEnd && m.appendChild(Fl.createTextNode(' ')),
									I &&
										(0 === l &&
											((m.style.top = u._y + 'px'), (m.style.left = D + b + 'px')),
										(u.style.top = '0px'),
										b && (u.style.left = u._x - b + 'px')))
							0 === c
								? (m.innerHTML = '&nbsp;')
								: z || R || (Gl(m), Vl(m, String.fromCharCode(160), ' ')),
								I && ((m.style.width = v), (m.style.height = u._h + 'px')),
								e.appendChild(m)
						}
						e.style.cssText = g
					}
					I &&
						(o > e.clientHeight &&
							((e.style.height = o - _ + 'px'),
							e.clientHeight < o && (e.style.height = o + x + 'px')),
						r > e.clientWidth &&
							((e.style.width = r - C + 'px'),
							e.clientWidth < r && (e.style.width = r + E + 'px'))),
						H && ($ ? (e.style.display = $) : e.style.removeProperty('display')),
						Yl(i, M),
						z && Yl(n, P),
						Yl(s, F)
				},
				Zl = function (e, t, i, n) {
					var s,
						r,
						o,
						a,
						l,
						c,
						u,
						d,
						h = t.tag ? t.tag : t.span ? 'span' : 'div',
						p = ~(t.type || t.split || 'chars,words,lines').indexOf('chars'),
						f = Hl(t),
						g = t.wordDelimiter || ' ',
						m = function (e) {
							return e === g || (e === Bl && ' ' === g)
						},
						v = ' ' !== g ? '' : f ? '&#173; ' : ' ',
						b = '</' + h + '>',
						y = 1,
						D = t.specialChars
							? 'function' == typeof t.specialChars
								? t.specialChars
								: $l
							: null,
						w = Fl.createElement('div'),
						x = e.parentNode
					for (
						x.insertBefore(w, e),
							w.textContent = e.nodeValue,
							x.removeChild(e),
							u = -1 !== (s = Pl((e = w))).indexOf('<'),
							!1 !== t.reduceWhiteSpace && (s = s.replace(Il, ' ').replace(Rl, '')),
							u && (s = s.split('<').join('{{LT}}')),
							l = s.length,
							r = (' ' === s.charAt(0) ? v : '') + i(),
							o = 0;
						o < l;
						o++
					)
						if (((c = s.charAt(o)), D && (d = D(s.substr(o), t.specialChars))))
							(c = s.substr(o, d || 1)),
								(r += p && ' ' !== c ? n() + c + '</' + h + '>' : c),
								(o += d - 1)
						else if (m(c) && !m(s.charAt(o - 1)) && o) {
							for (r += y ? b : '', y = 0; m(s.charAt(o + 1)); ) (r += v), o++
							o === l - 1
								? (r += v)
								: ')' !== s.charAt(o + 1) && ((r += v + i()), (y = 1))
						} else
							'{' === c && '{{LT}}' === s.substr(o, 6)
								? ((r += p ? n() + '{{LT}}</' + h + '>' : '{{LT}}'), (o += 5))
								: (c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319) ||
								  (s.charCodeAt(o + 1) >= 65024 && s.charCodeAt(o + 1) <= 65039)
								? ((a = ((s.substr(o, 12).split(Ml) || [])[1] || '').length || 2),
								  (r +=
										p && ' ' !== c
											? n() + s.substr(o, a) + '</' + h + '>'
											: s.substr(o, a)),
								  (o += a - 1))
								: (r += p && ' ' !== c ? n() + c + '</' + h + '>' : c)
					;(e.outerHTML = r + (y ? b : '')), u && Vl(x, '{{LT}}', '<')
				},
				Kl = function e(t, i, n, s) {
					var r,
						o,
						a = zl(t.childNodes),
						l = a.length,
						c = Hl(i)
					if (3 !== t.nodeType || l > 1) {
						for (i.absolute = !1, r = 0; r < l; r++)
							((o = a[r])._next = o._isFirst = o._parent = o._wordEnd = null),
								(3 !== o.nodeType || /\S+/.test(o.nodeValue)) &&
									(c &&
										3 !== o.nodeType &&
										'inline' === jl(o).display &&
										((o.style.display = 'inline-block'), (o.style.position = 'relative')),
									(o._isSplit = !0),
									e(o, i, n, s))
						return (i.absolute = c), void (t._isSplit = !0)
					}
					Zl(t, i, n, s)
				},
				Jl = (function () {
					function e(e, t) {
						Ol || Nl(),
							(this.elements = zl(e)),
							(this.chars = []),
							(this.words = []),
							(this.lines = []),
							(this._originals = []),
							(this.vars = t || {}),
							kl(this),
							this.split(t)
					}
					var t = e.prototype
					return (
						(t.split = function (e) {
							this.isSplit && this.revert(),
								(this.vars = e = e || this.vars),
								(this._originals.length =
									this.chars.length =
									this.words.length =
									this.lines.length =
										0)
							for (
								var t,
									i,
									n,
									s = this.elements.length,
									r = e.tag ? e.tag : e.span ? 'span' : 'div',
									o = ql(e.wordsClass, r),
									a = ql(e.charsClass, r);
								--s > -1;

							)
								(n = this.elements[s]),
									(this._originals[s] = {
										html: n.innerHTML,
										style: n.getAttribute('style'),
									}),
									(t = n.clientHeight),
									(i = n.clientWidth),
									Kl(n, e, o, a),
									Ul(n, e, this.chars, this.words, this.lines, i, t)
							return (
								this.chars.reverse(),
								this.words.reverse(),
								this.lines.reverse(),
								(this.isSplit = !0),
								this
							)
						}),
						(t.revert = function () {
							var e = this._originals
							if (!e) throw "revert() call wasn't scoped properly."
							return (
								this.elements.forEach(function (t, i) {
									;(t.innerHTML = e[i].html), t.setAttribute('style', e[i].style)
								}),
								(this.chars = []),
								(this.words = []),
								(this.lines = []),
								(this.isSplit = !1),
								this
							)
						}),
						(e.create = function (t, i) {
							return new e(t, i)
						}),
						e
					)
				})()
			if (
				((Jl.version = '3.12.5'),
				(Jl.register = Nl),
				Bs.registerPlugin(dl, Jl),
				document.querySelector('.main__images'))
			) {
				const e = (e, t) =>
					Bs.timeline({ repeat: -1, delay: t, defaults: { duration: 2, ease: 'none' } })
						.to(e, { yPercent: 10 }, 0)
						.to(e, { yPercent: 0 }, '>')
				e('.image-1', 0), e('.image-2', 0.2), e('.image-3', 0.4), e('.image-4', 0.6)
			}
			const Ql = document.querySelectorAll('.info__word')
			Dl &&
				Ql &&
				Ql.forEach((e) => {
					Bs.set(e, { scale: 0 }),
						Bs.to(e, {
							scale: 1,
							duration: 0.4,
							scrollTrigger: { trigger: e, start: 'top 75%' },
						})
				})
			const ec = document.querySelectorAll('.title')
			if (
				(Dl &&
					ec &&
					(new Jl(ec, { type: 'chars, words', charsClass: 'char' }),
					ec.forEach((e) => {
						Bs.to(e.querySelectorAll('.char'), {
							duration: 1,
							translateY: '0%',
							opacity: 1,
							ease: 'power4.out',
							stagger: 0.01,
							scrollTrigger: { trigger: e, start: 'top 75%' },
						})
					})),
				Bs.registerPlugin(dl),
				Dl &&
					wl &&
					dl.create({
						trigger: '.reviews__wrapper',
						endTrigger: '.reviews__container',
						pin: !0,
						scrub: !0,
						start: 'bottom bottom',
						end: 'bottom bottom',
					}),
				wl)
			) {
				const e = document.querySelectorAll('.product__captions-item'),
					t = document.querySelectorAll('.product__content-inner'),
					i = document.querySelectorAll('.product__nav-btn'),
					n = document.querySelector('.product__nav-prev'),
					s = document.querySelector('.product__nav-next'),
					r = e.length - 1,
					o = (e) => {
						e > 0 ? n.classList.remove('disabled') : n.classList.add('disabled'),
							e >= r ? s.classList.add('disabled') : s.classList.remove('disabled')
					}
				e.forEach((i, n) => {
					i.addEventListener('click', () => {
						e.forEach((e) => {
							e.classList.remove('active')
						}),
							t.forEach((e) => {
								e.classList.remove('active')
							}),
							i.classList.add('active'),
							t[n].classList.add('active'),
							o(n)
					})
				}),
					i.forEach((i) => {
						const a = [...e]
						i.addEventListener('click', () => {
							const l = document.querySelector('.product__captions-item.active')
							let c = a.indexOf(l)
							i == s ? c++ : i == n && c--,
								c <= r &&
									c >= 0 &&
									(e.forEach((e) => {
										e.classList.remove('active')
									}),
									t.forEach((e) => {
										e.classList.remove('active')
									}),
									e[c].classList.add('active'),
									t[c].classList.add('active')),
								o(c)
						})
					})
			}
			function tc(e) {
				return (
					null !== e &&
					'object' == typeof e &&
					'constructor' in e &&
					e.constructor === Object
				)
			}
			function ic(e, t) {
				void 0 === e && (e = {}),
					void 0 === t && (t = {}),
					Object.keys(t).forEach((i) => {
						void 0 === e[i]
							? (e[i] = t[i])
							: tc(t[i]) && tc(e[i]) && Object.keys(t[i]).length > 0 && ic(e[i], t[i])
					})
			}
			const nc = {
				body: {},
				addEventListener() {},
				removeEventListener() {},
				activeElement: { blur() {}, nodeName: '' },
				querySelector() {
					return null
				},
				querySelectorAll() {
					return []
				},
				getElementById() {
					return null
				},
				createEvent() {
					return { initEvent() {} }
				},
				createElement() {
					return {
						children: [],
						childNodes: [],
						style: {},
						setAttribute() {},
						getElementsByTagName() {
							return []
						},
					}
				},
				createElementNS() {
					return {}
				},
				importNode() {
					return null
				},
				location: {
					hash: '',
					host: '',
					hostname: '',
					href: '',
					origin: '',
					pathname: '',
					protocol: '',
					search: '',
				},
			}
			function sc() {
				const e = 'undefined' != typeof document ? document : {}
				return ic(e, nc), e
			}
			const rc = {
				document: nc,
				navigator: { userAgent: '' },
				location: {
					hash: '',
					host: '',
					hostname: '',
					href: '',
					origin: '',
					pathname: '',
					protocol: '',
					search: '',
				},
				history: { replaceState() {}, pushState() {}, go() {}, back() {} },
				CustomEvent: function () {
					return this
				},
				addEventListener() {},
				removeEventListener() {},
				getComputedStyle() {
					return {
						getPropertyValue() {
							return ''
						},
					}
				},
				Image() {},
				Date() {},
				screen: {},
				setTimeout() {},
				clearTimeout() {},
				matchMedia() {
					return {}
				},
				requestAnimationFrame(e) {
					return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
				},
				cancelAnimationFrame(e) {
					'undefined' != typeof setTimeout && clearTimeout(e)
				},
			}
			function oc() {
				const e = 'undefined' != typeof window ? window : {}
				return ic(e, rc), e
			}
			function ac(e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			}
			function lc() {
				return Date.now()
			}
			function cc(e) {
				return (
					'object' == typeof e &&
					null !== e &&
					e.constructor &&
					'Object' === Object.prototype.toString.call(e).slice(8, -1)
				)
			}
			function uc() {
				const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
					t = ['__proto__', 'constructor', 'prototype']
				for (let n = 1; n < arguments.length; n += 1) {
					const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
					if (
						null != s &&
						((i = s),
						!('undefined' != typeof window && void 0 !== window.HTMLElement
							? i instanceof HTMLElement
							: i && (1 === i.nodeType || 11 === i.nodeType)))
					) {
						const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0)
						for (let t = 0, n = i.length; t < n; t += 1) {
							const n = i[t],
								r = Object.getOwnPropertyDescriptor(s, n)
							void 0 !== r &&
								r.enumerable &&
								(cc(e[n]) && cc(s[n])
									? s[n].__swiper__
										? (e[n] = s[n])
										: uc(e[n], s[n])
									: !cc(e[n]) && cc(s[n])
									? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : uc(e[n], s[n]))
									: (e[n] = s[n]))
						}
					}
				}
				var i
				return e
			}
			function dc(e, t, i) {
				e.style.setProperty(t, i)
			}
			function hc(e) {
				let { swiper: t, targetPosition: i, side: n } = e
				const s = oc(),
					r = -t.translate
				let o,
					a = null
				const l = t.params.speed
				;(t.wrapperEl.style.scrollSnapType = 'none'),
					s.cancelAnimationFrame(t.cssModeFrameID)
				const c = i > r ? 'next' : 'prev',
					u = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
					d = () => {
						;(o = new Date().getTime()), null === a && (a = o)
						const e = Math.max(Math.min((o - a) / l, 1), 0),
							c = 0.5 - Math.cos(e * Math.PI) / 2
						let h = r + c * (i - r)
						if ((u(h, i) && (h = i), t.wrapperEl.scrollTo({ [n]: h }), u(h, i)))
							return (
								(t.wrapperEl.style.overflow = 'hidden'),
								(t.wrapperEl.style.scrollSnapType = ''),
								setTimeout(() => {
									;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [n]: h })
								}),
								void s.cancelAnimationFrame(t.cssModeFrameID)
							)
						t.cssModeFrameID = s.requestAnimationFrame(d)
					}
				d()
			}
			function pc(e, t) {
				void 0 === t && (t = '')
				const i = [...e.children]
				return (
					e instanceof HTMLSlotElement && i.push(...e.assignedElements()),
					t ? i.filter((e) => e.matches(t)) : i
				)
			}
			function fc(e) {
				try {
					return void console.warn(e)
				} catch (e) {}
			}
			function gc(e, t) {
				void 0 === t && (t = [])
				const i = document.createElement(e)
				return (
					i.classList.add(
						...(Array.isArray(t)
							? t
							: (function (e) {
									return (
										void 0 === e && (e = ''),
										e
											.trim()
											.split(' ')
											.filter((e) => !!e.trim())
									)
							  })(t))
					),
					i
				)
			}
			function mc(e, t) {
				return oc().getComputedStyle(e, null).getPropertyValue(t)
			}
			function vc(e) {
				let t,
					i = e
				if (i) {
					for (t = 0; null !== (i = i.previousSibling); ) 1 === i.nodeType && (t += 1)
					return t
				}
			}
			function bc(e, t) {
				const i = []
				let n = e.parentElement
				for (; n; ) t ? n.matches(t) && i.push(n) : i.push(n), (n = n.parentElement)
				return i
			}
			function yc(e, t, i) {
				const n = oc()
				return i
					? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
							parseFloat(
								n
									.getComputedStyle(e, null)
									.getPropertyValue('width' === t ? 'margin-right' : 'margin-top')
							) +
							parseFloat(
								n
									.getComputedStyle(e, null)
									.getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom')
							)
					: e.offsetWidth
			}
			function Dc(e) {
				return (Array.isArray(e) ? e : [e]).filter((e) => !!e)
			}
			let wc, xc, Ec
			function _c() {
				return (
					wc ||
						(wc = (function () {
							const e = oc(),
								t = sc()
							return {
								smoothScroll:
									t.documentElement &&
									t.documentElement.style &&
									'scrollBehavior' in t.documentElement.style,
								touch: !!(
									'ontouchstart' in e ||
									(e.DocumentTouch && t instanceof e.DocumentTouch)
								),
							}
						})()),
					wc
				)
			}
			function Cc(e) {
				return (
					void 0 === e && (e = {}),
					xc ||
						(xc = (function (e) {
							let { userAgent: t } = void 0 === e ? {} : e
							const i = _c(),
								n = oc(),
								s = n.navigator.platform,
								r = t || n.navigator.userAgent,
								o = { ios: !1, android: !1 },
								a = n.screen.width,
								l = n.screen.height,
								c = r.match(/(Android);?[\s\/]+([\d.]+)?/)
							let u = r.match(/(iPad).*OS\s([\d_]+)/)
							const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
								h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
								p = 'Win32' === s
							let f = 'MacIntel' === s
							return (
								!u &&
									f &&
									i.touch &&
									[
										'1024x1366',
										'1366x1024',
										'834x1194',
										'1194x834',
										'834x1112',
										'1112x834',
										'768x1024',
										'1024x768',
										'820x1180',
										'1180x820',
										'810x1080',
										'1080x810',
									].indexOf(`${a}x${l}`) >= 0 &&
									((u = r.match(/(Version)\/([\d.]+)/)),
									u || (u = [0, 1, '13_0_0']),
									(f = !1)),
								c && !p && ((o.os = 'android'), (o.android = !0)),
								(u || h || d) && ((o.os = 'ios'), (o.ios = !0)),
								o
							)
						})(e)),
					xc
				)
			}
			var Tc = {
				on(e, t, i) {
					const n = this
					if (!n.eventsListeners || n.destroyed) return n
					if ('function' != typeof t) return n
					const s = i ? 'unshift' : 'push'
					return (
						e.split(' ').forEach((e) => {
							n.eventsListeners[e] || (n.eventsListeners[e] = []),
								n.eventsListeners[e][s](t)
						}),
						n
					)
				},
				once(e, t, i) {
					const n = this
					if (!n.eventsListeners || n.destroyed) return n
					if ('function' != typeof t) return n
					function s() {
						n.off(e, s), s.__emitterProxy && delete s.__emitterProxy
						for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
							r[o] = arguments[o]
						t.apply(n, r)
					}
					return (s.__emitterProxy = t), n.on(e, s, i)
				},
				onAny(e, t) {
					const i = this
					if (!i.eventsListeners || i.destroyed) return i
					if ('function' != typeof e) return i
					const n = t ? 'unshift' : 'push'
					return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
				},
				offAny(e) {
					const t = this
					if (!t.eventsListeners || t.destroyed) return t
					if (!t.eventsAnyListeners) return t
					const i = t.eventsAnyListeners.indexOf(e)
					return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
				},
				off(e, t) {
					const i = this
					return !i.eventsListeners || i.destroyed
						? i
						: i.eventsListeners
						? (e.split(' ').forEach((e) => {
								void 0 === t
									? (i.eventsListeners[e] = [])
									: i.eventsListeners[e] &&
									  i.eventsListeners[e].forEach((n, s) => {
											;(n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
												i.eventsListeners[e].splice(s, 1)
									  })
						  }),
						  i)
						: i
				},
				emit() {
					const e = this
					if (!e.eventsListeners || e.destroyed) return e
					if (!e.eventsListeners) return e
					let t, i, n
					for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
						r[o] = arguments[o]
					return (
						'string' == typeof r[0] || Array.isArray(r[0])
							? ((t = r[0]), (i = r.slice(1, r.length)), (n = e))
							: ((t = r[0].events), (i = r[0].data), (n = r[0].context || e)),
						i.unshift(n),
						(Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
							e.eventsAnyListeners &&
								e.eventsAnyListeners.length &&
								e.eventsAnyListeners.forEach((e) => {
									e.apply(n, [t, ...i])
								}),
								e.eventsListeners &&
									e.eventsListeners[t] &&
									e.eventsListeners[t].forEach((e) => {
										e.apply(n, i)
									})
						}),
						e
					)
				},
			}
			const Sc = (e, t, i) => {
					t && !e.classList.contains(i)
						? e.classList.add(i)
						: !t && e.classList.contains(i) && e.classList.remove(i)
				},
				Mc = (e, t, i) => {
					t && !e.classList.contains(i)
						? e.classList.add(i)
						: !t && e.classList.contains(i) && e.classList.remove(i)
				},
				Pc = (e, t) => {
					if (!e || e.destroyed || !e.params) return
					const i = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`)
					if (i) {
						let t = i.querySelector(`.${e.params.lazyPreloaderClass}`)
						!t &&
							e.isElement &&
							(i.shadowRoot
								? (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
								: requestAnimationFrame(() => {
										i.shadowRoot &&
											((t = i.shadowRoot.querySelector(
												`.${e.params.lazyPreloaderClass}`
											)),
											t && t.remove())
								  })),
							t && t.remove()
					}
				},
				Fc = (e, t) => {
					if (!e.slides[t]) return
					const i = e.slides[t].querySelector('[loading="lazy"]')
					i && i.removeAttribute('loading')
				},
				Ac = (e) => {
					if (!e || e.destroyed || !e.params) return
					let t = e.params.lazyPreloadPrevNext
					const i = e.slides.length
					if (!i || !t || t < 0) return
					t = Math.min(t, i)
					const n =
							'auto' === e.params.slidesPerView
								? e.slidesPerViewDynamic()
								: Math.ceil(e.params.slidesPerView),
						s = e.activeIndex
					if (e.params.grid && e.params.grid.rows > 1) {
						const i = s,
							r = [i - t]
						return (
							r.push(...Array.from({ length: t }).map((e, t) => i + n + t)),
							void e.slides.forEach((t, i) => {
								r.includes(t.column) && Fc(e, i)
							})
						)
					}
					const r = s + n - 1
					if (e.params.rewind || e.params.loop)
						for (let n = s - t; n <= r + t; n += 1) {
							const t = ((n % i) + i) % i
							;(t < s || t > r) && Fc(e, t)
						}
					else
						for (let n = Math.max(s - t, 0); n <= Math.min(r + t, i - 1); n += 1)
							n !== s && (n > r || n < s) && Fc(e, n)
				}
			var Oc = {
					updateSize: function () {
						const e = this
						let t, i
						const n = e.el
						;(t =
							void 0 !== e.params.width && null !== e.params.width
								? e.params.width
								: n.clientWidth),
							(i =
								void 0 !== e.params.height && null !== e.params.height
									? e.params.height
									: n.clientHeight),
							(0 === t && e.isHorizontal()) ||
								(0 === i && e.isVertical()) ||
								((t =
									t -
									parseInt(mc(n, 'padding-left') || 0, 10) -
									parseInt(mc(n, 'padding-right') || 0, 10)),
								(i =
									i -
									parseInt(mc(n, 'padding-top') || 0, 10) -
									parseInt(mc(n, 'padding-bottom') || 0, 10)),
								Number.isNaN(t) && (t = 0),
								Number.isNaN(i) && (i = 0),
								Object.assign(e, { width: t, height: i, size: e.isHorizontal() ? t : i }))
					},
					updateSlides: function () {
						const e = this
						function t(t, i) {
							return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0)
						}
						const i = e.params,
							{ wrapperEl: n, slidesEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
							l = e.virtual && i.virtual.enabled,
							c = l ? e.virtual.slides.length : e.slides.length,
							u = pc(s, `.${e.params.slideClass}, swiper-slide`),
							d = l ? e.virtual.slides.length : u.length
						let h = []
						const p = [],
							f = []
						let g = i.slidesOffsetBefore
						'function' == typeof g && (g = i.slidesOffsetBefore.call(e))
						let m = i.slidesOffsetAfter
						'function' == typeof m && (m = i.slidesOffsetAfter.call(e))
						const v = e.snapGrid.length,
							b = e.slidesGrid.length
						let y = i.spaceBetween,
							D = -g,
							w = 0,
							x = 0
						if (void 0 === r) return
						'string' == typeof y && y.indexOf('%') >= 0
							? (y = (parseFloat(y.replace('%', '')) / 100) * r)
							: 'string' == typeof y && (y = parseFloat(y)),
							(e.virtualSize = -y),
							u.forEach((e) => {
								o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
									(e.style.marginBottom = ''),
									(e.style.marginTop = '')
							}),
							i.centeredSlides &&
								i.cssMode &&
								(dc(n, '--swiper-centered-offset-before', ''),
								dc(n, '--swiper-centered-offset-after', ''))
						const E = i.grid && i.grid.rows > 1 && e.grid
						let _
						E ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides()
						const C =
							'auto' === i.slidesPerView &&
							i.breakpoints &&
							Object.keys(i.breakpoints).filter(
								(e) => void 0 !== i.breakpoints[e].slidesPerView
							).length > 0
						for (let n = 0; n < d; n += 1) {
							let s
							if (
								((_ = 0),
								u[n] && (s = u[n]),
								E && e.grid.updateSlide(n, s, u),
								!u[n] || 'none' !== mc(s, 'display'))
							) {
								if ('auto' === i.slidesPerView) {
									C && (u[n].style[e.getDirectionLabel('width')] = '')
									const r = getComputedStyle(s),
										o = s.style.transform,
										a = s.style.webkitTransform
									if (
										(o && (s.style.transform = 'none'),
										a && (s.style.webkitTransform = 'none'),
										i.roundLengths)
									)
										_ = e.isHorizontal() ? yc(s, 'width', !0) : yc(s, 'height', !0)
									else {
										const e = t(r, 'width'),
											i = t(r, 'padding-left'),
											n = t(r, 'padding-right'),
											o = t(r, 'margin-left'),
											a = t(r, 'margin-right'),
											l = r.getPropertyValue('box-sizing')
										if (l && 'border-box' === l) _ = e + o + a
										else {
											const { clientWidth: t, offsetWidth: r } = s
											_ = e + i + n + o + a + (r - t)
										}
									}
									o && (s.style.transform = o),
										a && (s.style.webkitTransform = a),
										i.roundLengths && (_ = Math.floor(_))
								} else
									(_ = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
										i.roundLengths && (_ = Math.floor(_)),
										u[n] && (u[n].style[e.getDirectionLabel('width')] = `${_}px`)
								u[n] && (u[n].swiperSlideSize = _),
									f.push(_),
									i.centeredSlides
										? ((D = D + _ / 2 + w / 2 + y),
										  0 === w && 0 !== n && (D = D - r / 2 - y),
										  0 === n && (D = D - r / 2 - y),
										  Math.abs(D) < 0.001 && (D = 0),
										  i.roundLengths && (D = Math.floor(D)),
										  x % i.slidesPerGroup == 0 && h.push(D),
										  p.push(D))
										: (i.roundLengths && (D = Math.floor(D)),
										  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
												e.params.slidesPerGroup ==
												0 && h.push(D),
										  p.push(D),
										  (D = D + _ + y)),
									(e.virtualSize += _ + y),
									(w = _),
									(x += 1)
							}
						}
						if (
							((e.virtualSize = Math.max(e.virtualSize, r) + m),
							o &&
								a &&
								('slide' === i.effect || 'coverflow' === i.effect) &&
								(n.style.width = `${e.virtualSize + y}px`),
							i.setWrapperSize &&
								(n.style[e.getDirectionLabel('width')] = `${e.virtualSize + y}px`),
							E && e.grid.updateWrapperSize(_, h),
							!i.centeredSlides)
						) {
							const t = []
							for (let n = 0; n < h.length; n += 1) {
								let s = h[n]
								i.roundLengths && (s = Math.floor(s)),
									h[n] <= e.virtualSize - r && t.push(s)
							}
							;(h = t),
								Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
									h.push(e.virtualSize - r)
						}
						if (l && i.loop) {
							const t = f[0] + y
							if (i.slidesPerGroup > 1) {
								const n = Math.ceil(
										(e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup
									),
									s = t * i.slidesPerGroup
								for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + s)
							}
							for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1)
								1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
									p.push(p[p.length - 1] + t),
									(e.virtualSize += t)
						}
						if ((0 === h.length && (h = [0]), 0 !== y)) {
							const t =
								e.isHorizontal() && o ? 'marginLeft' : e.getDirectionLabel('marginRight')
							u.filter((e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1).forEach(
								(e) => {
									e.style[t] = `${y}px`
								}
							)
						}
						if (i.centeredSlides && i.centeredSlidesBounds) {
							let e = 0
							f.forEach((t) => {
								e += t + (y || 0)
							}),
								(e -= y)
							const t = e > r ? e - r : 0
							h = h.map((e) => (e <= 0 ? -g : e > t ? t + m : e))
						}
						if (i.centerInsufficientSlides) {
							let e = 0
							f.forEach((t) => {
								e += t + (y || 0)
							}),
								(e -= y)
							const t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0)
							if (e + t < r) {
								const i = (r - e - t) / 2
								h.forEach((e, t) => {
									h[t] = e - i
								}),
									p.forEach((e, t) => {
										p[t] = e + i
									})
							}
						}
						if (
							(Object.assign(e, {
								slides: u,
								snapGrid: h,
								slidesGrid: p,
								slidesSizesGrid: f,
							}),
							i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
						) {
							dc(n, '--swiper-centered-offset-before', -h[0] + 'px'),
								dc(
									n,
									'--swiper-centered-offset-after',
									e.size / 2 - f[f.length - 1] / 2 + 'px'
								)
							const t = -e.snapGrid[0],
								i = -e.slidesGrid[0]
							;(e.snapGrid = e.snapGrid.map((e) => e + t)),
								(e.slidesGrid = e.slidesGrid.map((e) => e + i))
						}
						if (
							(d !== c && e.emit('slidesLengthChange'),
							h.length !== v &&
								(e.params.watchOverflow && e.checkOverflow(),
								e.emit('snapGridLengthChange')),
							p.length !== b && e.emit('slidesGridLengthChange'),
							i.watchSlidesProgress && e.updateSlidesOffset(),
							e.emit('slidesUpdated'),
							!(l || i.cssMode || ('slide' !== i.effect && 'fade' !== i.effect)))
						) {
							const t = `${i.containerModifierClass}backface-hidden`,
								n = e.el.classList.contains(t)
							d <= i.maxBackfaceHiddenSlides
								? n || e.el.classList.add(t)
								: n && e.el.classList.remove(t)
						}
					},
					updateAutoHeight: function (e) {
						const t = this,
							i = [],
							n = t.virtual && t.params.virtual.enabled
						let s,
							r = 0
						'number' == typeof e
							? t.setTransition(e)
							: !0 === e && t.setTransition(t.params.speed)
						const o = (e) => (n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e])
						if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
							if (t.params.centeredSlides)
								(t.visibleSlides || []).forEach((e) => {
									i.push(e)
								})
							else
								for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
									const e = t.activeIndex + s
									if (e > t.slides.length && !n) break
									i.push(o(e))
								}
						else i.push(o(t.activeIndex))
						for (s = 0; s < i.length; s += 1)
							if (void 0 !== i[s]) {
								const e = i[s].offsetHeight
								r = e > r ? e : r
							}
						;(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
					},
					updateSlidesOffset: function () {
						const e = this,
							t = e.slides,
							i = e.isElement
								? e.isHorizontal()
									? e.wrapperEl.offsetLeft
									: e.wrapperEl.offsetTop
								: 0
						for (let n = 0; n < t.length; n += 1)
							t[n].swiperSlideOffset =
								(e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) -
								i -
								e.cssOverflowAdjustment()
					},
					updateSlidesProgress: function (e) {
						void 0 === e && (e = (this && this.translate) || 0)
						const t = this,
							i = t.params,
							{ slides: n, rtlTranslate: s, snapGrid: r } = t
						if (0 === n.length) return
						void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset()
						let o = -e
						s && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
						let a = i.spaceBetween
						'string' == typeof a && a.indexOf('%') >= 0
							? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
							: 'string' == typeof a && (a = parseFloat(a))
						for (let e = 0; e < n.length; e += 1) {
							const l = n[e]
							let c = l.swiperSlideOffset
							i.cssMode && i.centeredSlides && (c -= n[0].swiperSlideOffset)
							const u =
									(o + (i.centeredSlides ? t.minTranslate() : 0) - c) /
									(l.swiperSlideSize + a),
								d =
									(o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
									(l.swiperSlideSize + a),
								h = -(o - c),
								p = h + t.slidesSizesGrid[e],
								f = h >= 0 && h <= t.size - t.slidesSizesGrid[e],
								g =
									(h >= 0 && h < t.size - 1) ||
									(p > 1 && p <= t.size) ||
									(h <= 0 && p >= t.size)
							g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)),
								Sc(l, g, i.slideVisibleClass),
								Sc(l, f, i.slideFullyVisibleClass),
								(l.progress = s ? -u : u),
								(l.originalProgress = s ? -d : d)
						}
					},
					updateProgress: function (e) {
						const t = this
						if (void 0 === e) {
							const i = t.rtlTranslate ? -1 : 1
							e = (t && t.translate && t.translate * i) || 0
						}
						const i = t.params,
							n = t.maxTranslate() - t.minTranslate()
						let { progress: s, isBeginning: r, isEnd: o, progressLoop: a } = t
						const l = r,
							c = o
						if (0 === n) (s = 0), (r = !0), (o = !0)
						else {
							s = (e - t.minTranslate()) / n
							const i = Math.abs(e - t.minTranslate()) < 1,
								a = Math.abs(e - t.maxTranslate()) < 1
							;(r = i || s <= 0), (o = a || s >= 1), i && (s = 0), a && (s = 1)
						}
						if (i.loop) {
							const i = t.getSlideIndexByData(0),
								n = t.getSlideIndexByData(t.slides.length - 1),
								s = t.slidesGrid[i],
								r = t.slidesGrid[n],
								o = t.slidesGrid[t.slidesGrid.length - 1],
								l = Math.abs(e)
							;(a = l >= s ? (l - s) / o : (l + o - r) / o), a > 1 && (a -= 1)
						}
						Object.assign(t, { progress: s, progressLoop: a, isBeginning: r, isEnd: o }),
							(i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
								t.updateSlidesProgress(e),
							r && !l && t.emit('reachBeginning toEdge'),
							o && !c && t.emit('reachEnd toEdge'),
							((l && !r) || (c && !o)) && t.emit('fromEdge'),
							t.emit('progress', s)
					},
					updateSlidesClasses: function () {
						const e = this,
							{ slides: t, params: i, slidesEl: n, activeIndex: s } = e,
							r = e.virtual && i.virtual.enabled,
							o = e.grid && i.grid && i.grid.rows > 1,
							a = (e) => pc(n, `.${i.slideClass}${e}, swiper-slide${e}`)[0]
						let l, c, u
						if (r)
							if (i.loop) {
								let t = s - e.virtual.slidesBefore
								t < 0 && (t = e.virtual.slides.length + t),
									t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
									(l = a(`[data-swiper-slide-index="${t}"]`))
							} else l = a(`[data-swiper-slide-index="${s}"]`)
						else
							o
								? ((l = t.filter((e) => e.column === s)[0]),
								  (u = t.filter((e) => e.column === s + 1)[0]),
								  (c = t.filter((e) => e.column === s - 1)[0]))
								: (l = t[s])
						l &&
							(o ||
								((u = (function (e, t) {
									const i = []
									for (; e.nextElementSibling; ) {
										const n = e.nextElementSibling
										t ? n.matches(t) && i.push(n) : i.push(n), (e = n)
									}
									return i
								})(l, `.${i.slideClass}, swiper-slide`)[0]),
								i.loop && !u && (u = t[0]),
								(c = (function (e, t) {
									const i = []
									for (; e.previousElementSibling; ) {
										const n = e.previousElementSibling
										t ? n.matches(t) && i.push(n) : i.push(n), (e = n)
									}
									return i
								})(l, `.${i.slideClass}, swiper-slide`)[0]),
								i.loop && 0 === !c && (c = t[t.length - 1]))),
							t.forEach((e) => {
								Mc(e, e === l, i.slideActiveClass),
									Mc(e, e === u, i.slideNextClass),
									Mc(e, e === c, i.slidePrevClass)
							}),
							e.emitSlidesClasses()
					},
					updateActiveIndex: function (e) {
						const t = this,
							i = t.rtlTranslate ? t.translate : -t.translate,
							{ snapGrid: n, params: s, activeIndex: r, realIndex: o, snapIndex: a } = t
						let l,
							c = e
						const u = (e) => {
							let i = e - t.virtual.slidesBefore
							return (
								i < 0 && (i = t.virtual.slides.length + i),
								i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
								i
							)
						}
						if (
							(void 0 === c &&
								(c = (function (e) {
									const { slidesGrid: t, params: i } = e,
										n = e.rtlTranslate ? e.translate : -e.translate
									let s
									for (let e = 0; e < t.length; e += 1)
										void 0 !== t[e + 1]
											? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2
												? (s = e)
												: n >= t[e] && n < t[e + 1] && (s = e + 1)
											: n >= t[e] && (s = e)
									return i.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
								})(t)),
							n.indexOf(i) >= 0)
						)
							l = n.indexOf(i)
						else {
							const e = Math.min(s.slidesPerGroupSkip, c)
							l = e + Math.floor((c - e) / s.slidesPerGroup)
						}
						if ((l >= n.length && (l = n.length - 1), c === r && !t.params.loop))
							return void (l !== a && ((t.snapIndex = l), t.emit('snapIndexChange')))
						if (c === r && t.params.loop && t.virtual && t.params.virtual.enabled)
							return void (t.realIndex = u(c))
						const d = t.grid && s.grid && s.grid.rows > 1
						let h
						if (t.virtual && s.virtual.enabled && s.loop) h = u(c)
						else if (d) {
							const e = t.slides.filter((e) => e.column === c)[0]
							let i = parseInt(e.getAttribute('data-swiper-slide-index'), 10)
							Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)),
								(h = Math.floor(i / s.grid.rows))
						} else if (t.slides[c]) {
							const e = t.slides[c].getAttribute('data-swiper-slide-index')
							h = e ? parseInt(e, 10) : c
						} else h = c
						Object.assign(t, {
							previousSnapIndex: a,
							snapIndex: l,
							previousRealIndex: o,
							realIndex: h,
							previousIndex: r,
							activeIndex: c,
						}),
							t.initialized && Ac(t),
							t.emit('activeIndexChange'),
							t.emit('snapIndexChange'),
							(t.initialized || t.params.runCallbacksOnInit) &&
								(o !== h && t.emit('realIndexChange'), t.emit('slideChange'))
					},
					updateClickedSlide: function (e, t) {
						const i = this,
							n = i.params
						let s = e.closest(`.${n.slideClass}, swiper-slide`)
						!s &&
							i.isElement &&
							t &&
							t.length > 1 &&
							t.includes(e) &&
							[...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
								!s && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (s = e)
							})
						let r,
							o = !1
						if (s)
							for (let e = 0; e < i.slides.length; e += 1)
								if (i.slides[e] === s) {
									;(o = !0), (r = e)
									break
								}
						if (!s || !o) return (i.clickedSlide = void 0), void (i.clickedIndex = void 0)
						;(i.clickedSlide = s),
							i.virtual && i.params.virtual.enabled
								? (i.clickedIndex = parseInt(
										s.getAttribute('data-swiper-slide-index'),
										10
								  ))
								: (i.clickedIndex = r),
							n.slideToClickedSlide &&
								void 0 !== i.clickedIndex &&
								i.clickedIndex !== i.activeIndex &&
								i.slideToClickedSlide()
					},
				},
				Lc = {
					getTranslate: function (e) {
						void 0 === e && (e = this.isHorizontal() ? 'x' : 'y')
						const { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = this
						if (t.virtualTranslate) return i ? -n : n
						if (t.cssMode) return n
						let r = (function (e, t) {
							void 0 === t && (t = 'x')
							const i = oc()
							let n, s, r
							const o = (function (e) {
								const t = oc()
								let i
								return (
									t.getComputedStyle && (i = t.getComputedStyle(e, null)),
									!i && e.currentStyle && (i = e.currentStyle),
									i || (i = e.style),
									i
								)
							})(e)
							return (
								i.WebKitCSSMatrix
									? ((s = o.transform || o.webkitTransform),
									  s.split(',').length > 6 &&
											(s = s
												.split(', ')
												.map((e) => e.replace(',', '.'))
												.join(', ')),
									  (r = new i.WebKitCSSMatrix('none' === s ? '' : s)))
									: ((r =
											o.MozTransform ||
											o.OTransform ||
											o.MsTransform ||
											o.msTransform ||
											o.transform ||
											o
												.getPropertyValue('transform')
												.replace('translate(', 'matrix(1, 0, 0, 1,')),
									  (n = r.toString().split(','))),
								'x' === t &&
									(s = i.WebKitCSSMatrix
										? r.m41
										: 16 === n.length
										? parseFloat(n[12])
										: parseFloat(n[4])),
								'y' === t &&
									(s = i.WebKitCSSMatrix
										? r.m42
										: 16 === n.length
										? parseFloat(n[13])
										: parseFloat(n[5])),
								s || 0
							)
						})(s, e)
						return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0
					},
					setTranslate: function (e, t) {
						const i = this,
							{ rtlTranslate: n, params: s, wrapperEl: r, progress: o } = i
						let a,
							l = 0,
							c = 0
						i.isHorizontal() ? (l = n ? -e : e) : (c = e),
							s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
							(i.previousTranslate = i.translate),
							(i.translate = i.isHorizontal() ? l : c),
							s.cssMode
								? (r[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal()
										? -l
										: -c)
								: s.virtualTranslate ||
								  (i.isHorizontal()
										? (l -= i.cssOverflowAdjustment())
										: (c -= i.cssOverflowAdjustment()),
								  (r.style.transform = `translate3d(${l}px, ${c}px, 0px)`))
						const u = i.maxTranslate() - i.minTranslate()
						;(a = 0 === u ? 0 : (e - i.minTranslate()) / u),
							a !== o && i.updateProgress(e),
							i.emit('setTranslate', i.translate, t)
					},
					minTranslate: function () {
						return -this.snapGrid[0]
					},
					maxTranslate: function () {
						return -this.snapGrid[this.snapGrid.length - 1]
					},
					translateTo: function (e, t, i, n, s) {
						void 0 === e && (e = 0),
							void 0 === t && (t = this.params.speed),
							void 0 === i && (i = !0),
							void 0 === n && (n = !0)
						const r = this,
							{ params: o, wrapperEl: a } = r
						if (r.animating && o.preventInteractionOnTransition) return !1
						const l = r.minTranslate(),
							c = r.maxTranslate()
						let u
						if (
							((u = n && e > l ? l : n && e < c ? c : e), r.updateProgress(u), o.cssMode)
						) {
							const e = r.isHorizontal()
							if (0 === t) a[e ? 'scrollLeft' : 'scrollTop'] = -u
							else {
								if (!r.support.smoothScroll)
									return (
										hc({ swiper: r, targetPosition: -u, side: e ? 'left' : 'top' }), !0
									)
								a.scrollTo({ [e ? 'left' : 'top']: -u, behavior: 'smooth' })
							}
							return !0
						}
						return (
							0 === t
								? (r.setTransition(0),
								  r.setTranslate(u),
								  i && (r.emit('beforeTransitionStart', t, s), r.emit('transitionEnd')))
								: (r.setTransition(t),
								  r.setTranslate(u),
								  i && (r.emit('beforeTransitionStart', t, s), r.emit('transitionStart')),
								  r.animating ||
										((r.animating = !0),
										r.onTranslateToWrapperTransitionEnd ||
											(r.onTranslateToWrapperTransitionEnd = function (e) {
												r &&
													!r.destroyed &&
													e.target === this &&
													(r.wrapperEl.removeEventListener(
														'transitionend',
														r.onTranslateToWrapperTransitionEnd
													),
													(r.onTranslateToWrapperTransitionEnd = null),
													delete r.onTranslateToWrapperTransitionEnd,
													(r.animating = !1),
													i && r.emit('transitionEnd'))
											}),
										r.wrapperEl.addEventListener(
											'transitionend',
											r.onTranslateToWrapperTransitionEnd
										))),
							!0
						)
					},
				}
			function kc(e) {
				let { swiper: t, runCallbacks: i, direction: n, step: s } = e
				const { activeIndex: r, previousIndex: o } = t
				let a = n
				if (
					(a || (a = r > o ? 'next' : r < o ? 'prev' : 'reset'),
					t.emit(`transition${s}`),
					i && r !== o)
				) {
					if ('reset' === a) return void t.emit(`slideResetTransition${s}`)
					t.emit(`slideChangeTransition${s}`),
						'next' === a
							? t.emit(`slideNextTransition${s}`)
							: t.emit(`slidePrevTransition${s}`)
				}
			}
			var zc = {
					slideTo: function (e, t, i, n, s) {
						void 0 === e && (e = 0),
							void 0 === i && (i = !0),
							'string' == typeof e && (e = parseInt(e, 10))
						const r = this
						let o = e
						o < 0 && (o = 0)
						const {
							params: a,
							snapGrid: l,
							slidesGrid: c,
							previousIndex: u,
							activeIndex: d,
							rtlTranslate: h,
							wrapperEl: p,
							enabled: f,
						} = r
						if (
							(!f && !n && !s) ||
							r.destroyed ||
							(r.animating && a.preventInteractionOnTransition)
						)
							return !1
						void 0 === t && (t = r.params.speed)
						const g = Math.min(r.params.slidesPerGroupSkip, o)
						let m = g + Math.floor((o - g) / r.params.slidesPerGroup)
						m >= l.length && (m = l.length - 1)
						const v = -l[m]
						if (a.normalizeSlideIndex)
							for (let e = 0; e < c.length; e += 1) {
								const t = -Math.floor(100 * v),
									i = Math.floor(100 * c[e]),
									n = Math.floor(100 * c[e + 1])
								void 0 !== c[e + 1]
									? t >= i && t < n - (n - i) / 2
										? (o = e)
										: t >= i && t < n && (o = e + 1)
									: t >= i && (o = e)
							}
						if (r.initialized && o !== d) {
							if (
								!r.allowSlideNext &&
								(h
									? v > r.translate && v > r.minTranslate()
									: v < r.translate && v < r.minTranslate())
							)
								return !1
							if (
								!r.allowSlidePrev &&
								v > r.translate &&
								v > r.maxTranslate() &&
								(d || 0) !== o
							)
								return !1
						}
						let b
						o !== (u || 0) && i && r.emit('beforeSlideChangeStart'),
							r.updateProgress(v),
							(b = o > d ? 'next' : o < d ? 'prev' : 'reset')
						const y = r.virtual && r.params.virtual.enabled
						if ((!y || !s) && ((h && -v === r.translate) || (!h && v === r.translate)))
							return (
								r.updateActiveIndex(o),
								a.autoHeight && r.updateAutoHeight(),
								r.updateSlidesClasses(),
								'slide' !== a.effect && r.setTranslate(v),
								'reset' !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
								!1
							)
						if (a.cssMode) {
							const e = r.isHorizontal(),
								i = h ? v : -v
							if (0 === t)
								y &&
									((r.wrapperEl.style.scrollSnapType = 'none'),
									(r._immediateVirtual = !0)),
									y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
										? ((r._cssModeVirtualInitialSet = !0),
										  requestAnimationFrame(() => {
												p[e ? 'scrollLeft' : 'scrollTop'] = i
										  }))
										: (p[e ? 'scrollLeft' : 'scrollTop'] = i),
									y &&
										requestAnimationFrame(() => {
											;(r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1)
										})
							else {
								if (!r.support.smoothScroll)
									return (
										hc({ swiper: r, targetPosition: i, side: e ? 'left' : 'top' }), !0
									)
								p.scrollTo({ [e ? 'left' : 'top']: i, behavior: 'smooth' })
							}
							return !0
						}
						return (
							r.setTransition(t),
							r.setTranslate(v),
							r.updateActiveIndex(o),
							r.updateSlidesClasses(),
							r.emit('beforeTransitionStart', t, n),
							r.transitionStart(i, b),
							0 === t
								? r.transitionEnd(i, b)
								: r.animating ||
								  ((r.animating = !0),
								  r.onSlideToWrapperTransitionEnd ||
										(r.onSlideToWrapperTransitionEnd = function (e) {
											r &&
												!r.destroyed &&
												e.target === this &&
												(r.wrapperEl.removeEventListener(
													'transitionend',
													r.onSlideToWrapperTransitionEnd
												),
												(r.onSlideToWrapperTransitionEnd = null),
												delete r.onSlideToWrapperTransitionEnd,
												r.transitionEnd(i, b))
										}),
								  r.wrapperEl.addEventListener(
										'transitionend',
										r.onSlideToWrapperTransitionEnd
								  )),
							!0
						)
					},
					slideToLoop: function (e, t, i, n) {
						void 0 === e && (e = 0),
							void 0 === i && (i = !0),
							'string' == typeof e && (e = parseInt(e, 10))
						const s = this
						if (s.destroyed) return
						void 0 === t && (t = s.params.speed)
						const r = s.grid && s.params.grid && s.params.grid.rows > 1
						let o = e
						if (s.params.loop)
							if (s.virtual && s.params.virtual.enabled) o += s.virtual.slidesBefore
							else {
								let e
								if (r) {
									const t = o * s.params.grid.rows
									e = s.slides.filter(
										(e) => 1 * e.getAttribute('data-swiper-slide-index') === t
									)[0].column
								} else e = s.getSlideIndexByData(o)
								const t = r
										? Math.ceil(s.slides.length / s.params.grid.rows)
										: s.slides.length,
									{ centeredSlides: i } = s.params
								let a = s.params.slidesPerView
								'auto' === a
									? (a = s.slidesPerViewDynamic())
									: ((a = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
									  i && a % 2 == 0 && (a += 1))
								let l = t - e < a
								if (
									(i && (l = l || e < Math.ceil(a / 2)),
									n && i && 'auto' !== s.params.slidesPerView && !r && (l = !1),
									l)
								) {
									const n = i
										? e < s.activeIndex
											? 'prev'
											: 'next'
										: e - s.activeIndex - 1 < s.params.slidesPerView
										? 'next'
										: 'prev'
									s.loopFix({
										direction: n,
										slideTo: !0,
										activeSlideIndex: 'next' === n ? e + 1 : e - t + 1,
										slideRealIndex: 'next' === n ? s.realIndex : void 0,
									})
								}
								if (r) {
									const e = o * s.params.grid.rows
									o = s.slides.filter(
										(t) => 1 * t.getAttribute('data-swiper-slide-index') === e
									)[0].column
								} else o = s.getSlideIndexByData(o)
							}
						return (
							requestAnimationFrame(() => {
								s.slideTo(o, t, i, n)
							}),
							s
						)
					},
					slideNext: function (e, t, i) {
						void 0 === t && (t = !0)
						const n = this,
							{ enabled: s, params: r, animating: o } = n
						if (!s || n.destroyed) return n
						void 0 === e && (e = n.params.speed)
						let a = r.slidesPerGroup
						'auto' === r.slidesPerView &&
							1 === r.slidesPerGroup &&
							r.slidesPerGroupAuto &&
							(a = Math.max(n.slidesPerViewDynamic('current', !0), 1))
						const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a,
							c = n.virtual && r.virtual.enabled
						if (r.loop) {
							if (o && !c && r.loopPreventsSliding) return !1
							if (
								(n.loopFix({ direction: 'next' }),
								(n._clientLeft = n.wrapperEl.clientLeft),
								n.activeIndex === n.slides.length - 1 && r.cssMode)
							)
								return (
									requestAnimationFrame(() => {
										n.slideTo(n.activeIndex + l, e, t, i)
									}),
									!0
								)
						}
						return r.rewind && n.isEnd
							? n.slideTo(0, e, t, i)
							: n.slideTo(n.activeIndex + l, e, t, i)
					},
					slidePrev: function (e, t, i) {
						void 0 === t && (t = !0)
						const n = this,
							{
								params: s,
								snapGrid: r,
								slidesGrid: o,
								rtlTranslate: a,
								enabled: l,
								animating: c,
							} = n
						if (!l || n.destroyed) return n
						void 0 === e && (e = n.params.speed)
						const u = n.virtual && s.virtual.enabled
						if (s.loop) {
							if (c && !u && s.loopPreventsSliding) return !1
							n.loopFix({ direction: 'prev' }), (n._clientLeft = n.wrapperEl.clientLeft)
						}
						function d(e) {
							return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
						}
						const h = d(a ? n.translate : -n.translate),
							p = r.map((e) => d(e))
						let f = r[p.indexOf(h) - 1]
						if (void 0 === f && s.cssMode) {
							let e
							r.forEach((t, i) => {
								h >= t && (e = i)
							}),
								void 0 !== e && (f = r[e > 0 ? e - 1 : e])
						}
						let g = 0
						if (
							(void 0 !== f &&
								((g = o.indexOf(f)),
								g < 0 && (g = n.activeIndex - 1),
								'auto' === s.slidesPerView &&
									1 === s.slidesPerGroup &&
									s.slidesPerGroupAuto &&
									((g = g - n.slidesPerViewDynamic('previous', !0) + 1),
									(g = Math.max(g, 0)))),
							s.rewind && n.isBeginning)
						) {
							const s =
								n.params.virtual && n.params.virtual.enabled && n.virtual
									? n.virtual.slides.length - 1
									: n.slides.length - 1
							return n.slideTo(s, e, t, i)
						}
						return s.loop && 0 === n.activeIndex && s.cssMode
							? (requestAnimationFrame(() => {
									n.slideTo(g, e, t, i)
							  }),
							  !0)
							: n.slideTo(g, e, t, i)
					},
					slideReset: function (e, t, i) {
						void 0 === t && (t = !0)
						const n = this
						if (!n.destroyed)
							return (
								void 0 === e && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, i)
							)
					},
					slideToClosest: function (e, t, i, n) {
						void 0 === t && (t = !0), void 0 === n && (n = 0.5)
						const s = this
						if (s.destroyed) return
						void 0 === e && (e = s.params.speed)
						let r = s.activeIndex
						const o = Math.min(s.params.slidesPerGroupSkip, r),
							a = o + Math.floor((r - o) / s.params.slidesPerGroup),
							l = s.rtlTranslate ? s.translate : -s.translate
						if (l >= s.snapGrid[a]) {
							const e = s.snapGrid[a]
							l - e > (s.snapGrid[a + 1] - e) * n && (r += s.params.slidesPerGroup)
						} else {
							const e = s.snapGrid[a - 1]
							l - e <= (s.snapGrid[a] - e) * n && (r -= s.params.slidesPerGroup)
						}
						return (
							(r = Math.max(r, 0)),
							(r = Math.min(r, s.slidesGrid.length - 1)),
							s.slideTo(r, e, t, i)
						)
					},
					slideToClickedSlide: function () {
						const e = this
						if (e.destroyed) return
						const { params: t, slidesEl: i } = e,
							n = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView
						let s,
							r = e.clickedIndex
						const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
						if (t.loop) {
							if (e.animating) return
							;(s = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
								t.centeredSlides
									? r < e.loopedSlides - n / 2 ||
									  r > e.slides.length - e.loopedSlides + n / 2
										? (e.loopFix(),
										  (r = e.getSlideIndex(
												pc(i, `${o}[data-swiper-slide-index="${s}"]`)[0]
										  )),
										  ac(() => {
												e.slideTo(r)
										  }))
										: e.slideTo(r)
									: r > e.slides.length - n
									? (e.loopFix(),
									  (r = e.getSlideIndex(
											pc(i, `${o}[data-swiper-slide-index="${s}"]`)[0]
									  )),
									  ac(() => {
											e.slideTo(r)
									  }))
									: e.slideTo(r)
						} else e.slideTo(r)
					},
				},
				Rc = {
					loopCreate: function (e) {
						const t = this,
							{ params: i, slidesEl: n } = t
						if (!i.loop || (t.virtual && t.params.virtual.enabled)) return
						const s = () => {
								pc(n, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
									e.setAttribute('data-swiper-slide-index', t)
								})
							},
							r = t.grid && i.grid && i.grid.rows > 1,
							o = i.slidesPerGroup * (r ? i.grid.rows : 1),
							a = t.slides.length % o != 0,
							l = r && t.slides.length % i.grid.rows != 0,
							c = (e) => {
								for (let n = 0; n < e; n += 1) {
									const e = t.isElement
										? gc('swiper-slide', [i.slideBlankClass])
										: gc('div', [i.slideClass, i.slideBlankClass])
									t.slidesEl.append(e)
								}
							}
						a
							? (i.loopAddBlankSlides
									? (c(o - (t.slides.length % o)), t.recalcSlides(), t.updateSlides())
									: fc(
											'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
									  ),
							  s())
							: l
							? (i.loopAddBlankSlides
									? (c(i.grid.rows - (t.slides.length % i.grid.rows)),
									  t.recalcSlides(),
									  t.updateSlides())
									: fc(
											'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
									  ),
							  s())
							: s(),
							t.loopFix({
								slideRealIndex: e,
								direction: i.centeredSlides ? void 0 : 'next',
							})
					},
					loopFix: function (e) {
						let {
							slideRealIndex: t,
							slideTo: i = !0,
							direction: n,
							setTranslate: s,
							activeSlideIndex: r,
							byController: o,
							byMousewheel: a,
						} = void 0 === e ? {} : e
						const l = this
						if (!l.params.loop) return
						l.emit('beforeLoopFix')
						const {
								slides: c,
								allowSlidePrev: u,
								allowSlideNext: d,
								slidesEl: h,
								params: p,
							} = l,
							{ centeredSlides: f } = p
						if (
							((l.allowSlidePrev = !0),
							(l.allowSlideNext = !0),
							l.virtual && p.virtual.enabled)
						)
							return (
								i &&
									(p.centeredSlides || 0 !== l.snapIndex
										? p.centeredSlides && l.snapIndex < p.slidesPerView
											? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
											: l.snapIndex === l.snapGrid.length - 1 &&
											  l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
										: l.slideTo(l.virtual.slides.length, 0, !1, !0)),
								(l.allowSlidePrev = u),
								(l.allowSlideNext = d),
								void l.emit('loopFix')
							)
						let g = p.slidesPerView
						'auto' === g
							? (g = l.slidesPerViewDynamic())
							: ((g = Math.ceil(parseFloat(p.slidesPerView, 10))),
							  f && g % 2 == 0 && (g += 1))
						const m = p.slidesPerGroupAuto ? g : p.slidesPerGroup
						let v = m
						v % m != 0 && (v += m - (v % m)),
							(v += p.loopAdditionalSlides),
							(l.loopedSlides = v)
						const b = l.grid && p.grid && p.grid.rows > 1
						c.length < g + v
							? fc(
									'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
							  )
							: b &&
							  'row' === p.grid.fill &&
							  fc(
									'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
							  )
						const y = [],
							D = []
						let w = l.activeIndex
						void 0 === r
							? (r = l.getSlideIndex(
									c.filter((e) => e.classList.contains(p.slideActiveClass))[0]
							  ))
							: (w = r)
						const x = 'next' === n || !n,
							E = 'prev' === n || !n
						let _ = 0,
							C = 0
						const T = b ? Math.ceil(c.length / p.grid.rows) : c.length,
							S = (b ? c[r].column : r) + (f && void 0 === s ? -g / 2 + 0.5 : 0)
						if (S < v) {
							_ = Math.max(v - S, m)
							for (let e = 0; e < v - S; e += 1) {
								const t = e - Math.floor(e / T) * T
								if (b) {
									const e = T - t - 1
									for (let t = c.length - 1; t >= 0; t -= 1)
										c[t].column === e && y.push(t)
								} else y.push(T - t - 1)
							}
						} else if (S + g > T - v) {
							C = Math.max(S - (T - 2 * v), m)
							for (let e = 0; e < C; e += 1) {
								const t = e - Math.floor(e / T) * T
								b
									? c.forEach((e, i) => {
											e.column === t && D.push(i)
									  })
									: D.push(t)
							}
						}
						if (
							((l.__preventObserver__ = !0),
							requestAnimationFrame(() => {
								l.__preventObserver__ = !1
							}),
							E &&
								y.forEach((e) => {
									;(c[e].swiperLoopMoveDOM = !0),
										h.prepend(c[e]),
										(c[e].swiperLoopMoveDOM = !1)
								}),
							x &&
								D.forEach((e) => {
									;(c[e].swiperLoopMoveDOM = !0),
										h.append(c[e]),
										(c[e].swiperLoopMoveDOM = !1)
								}),
							l.recalcSlides(),
							'auto' === p.slidesPerView
								? l.updateSlides()
								: b &&
								  ((y.length > 0 && E) || (D.length > 0 && x)) &&
								  l.slides.forEach((e, t) => {
										l.grid.updateSlide(t, e, l.slides)
								  }),
							p.watchSlidesProgress && l.updateSlidesOffset(),
							i)
						)
							if (y.length > 0 && E) {
								if (void 0 === t) {
									const e = l.slidesGrid[w],
										t = l.slidesGrid[w + _] - e
									a
										? l.setTranslate(l.translate - t)
										: (l.slideTo(w + Math.ceil(_), 0, !1, !0),
										  s &&
												((l.touchEventsData.startTranslate =
													l.touchEventsData.startTranslate - t),
												(l.touchEventsData.currentTranslate =
													l.touchEventsData.currentTranslate - t)))
								} else if (s) {
									const e = b ? y.length / p.grid.rows : y.length
									l.slideTo(l.activeIndex + e, 0, !1, !0),
										(l.touchEventsData.currentTranslate = l.translate)
								}
							} else if (D.length > 0 && x)
								if (void 0 === t) {
									const e = l.slidesGrid[w],
										t = l.slidesGrid[w - C] - e
									a
										? l.setTranslate(l.translate - t)
										: (l.slideTo(w - C, 0, !1, !0),
										  s &&
												((l.touchEventsData.startTranslate =
													l.touchEventsData.startTranslate - t),
												(l.touchEventsData.currentTranslate =
													l.touchEventsData.currentTranslate - t)))
								} else {
									const e = b ? D.length / p.grid.rows : D.length
									l.slideTo(l.activeIndex - e, 0, !1, !0)
								}
						if (
							((l.allowSlidePrev = u),
							(l.allowSlideNext = d),
							l.controller && l.controller.control && !o)
						) {
							const e = {
								slideRealIndex: t,
								direction: n,
								setTranslate: s,
								activeSlideIndex: r,
								byController: !0,
							}
							Array.isArray(l.controller.control)
								? l.controller.control.forEach((t) => {
										!t.destroyed &&
											t.params.loop &&
											t.loopFix({
												...e,
												slideTo: t.params.slidesPerView === p.slidesPerView && i,
											})
								  })
								: l.controller.control instanceof l.constructor &&
								  l.controller.control.params.loop &&
								  l.controller.control.loopFix({
										...e,
										slideTo:
											l.controller.control.params.slidesPerView === p.slidesPerView && i,
								  })
						}
						l.emit('loopFix')
					},
					loopDestroy: function () {
						const e = this,
							{ params: t, slidesEl: i } = e
						if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
						e.recalcSlides()
						const n = []
						e.slides.forEach((e) => {
							const t =
								void 0 === e.swiperSlideIndex
									? 1 * e.getAttribute('data-swiper-slide-index')
									: e.swiperSlideIndex
							n[t] = e
						}),
							e.slides.forEach((e) => {
								e.removeAttribute('data-swiper-slide-index')
							}),
							n.forEach((e) => {
								i.append(e)
							}),
							e.recalcSlides(),
							e.slideTo(e.realIndex, 0)
					},
				}
			function Ic(e, t, i) {
				const n = oc(),
					{ params: s } = e,
					r = s.edgeSwipeDetection,
					o = s.edgeSwipeThreshold
				return (
					!r ||
					!(i <= o || i >= n.innerWidth - o) ||
					('prevent' === r && (t.preventDefault(), !0))
				)
			}
			function Bc(e) {
				const t = this,
					i = sc()
				let n = e
				n.originalEvent && (n = n.originalEvent)
				const s = t.touchEventsData
				if ('pointerdown' === n.type) {
					if (null !== s.pointerId && s.pointerId !== n.pointerId) return
					s.pointerId = n.pointerId
				} else
					'touchstart' === n.type &&
						1 === n.targetTouches.length &&
						(s.touchId = n.targetTouches[0].identifier)
				if ('touchstart' === n.type) return void Ic(t, n, n.targetTouches[0].pageX)
				const { params: r, touches: o, enabled: a } = t
				if (!a) return
				if (!r.simulateTouch && 'mouse' === n.pointerType) return
				if (t.animating && r.preventInteractionOnTransition) return
				!t.animating && r.cssMode && r.loop && t.loopFix()
				let l = n.target
				if (
					'wrapper' === r.touchEventsTarget &&
					!(function (e, t) {
						const i = t.contains(e)
						return !i && t instanceof HTMLSlotElement
							? [...t.assignedElements()].includes(e)
							: i
					})(l, t.wrapperEl)
				)
					return
				if ('which' in n && 3 === n.which) return
				if ('button' in n && n.button > 0) return
				if (s.isTouched && s.isMoved) return
				const c = !!r.noSwipingClass && '' !== r.noSwipingClass,
					u = n.composedPath ? n.composedPath() : n.path
				c && n.target && n.target.shadowRoot && u && (l = u[0])
				const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
					h = !(!n.target || !n.target.shadowRoot)
				if (
					r.noSwiping &&
					(h
						? (function (e, t) {
								return (
									void 0 === t && (t = this),
									(function t(i) {
										if (!i || i === sc() || i === oc()) return null
										i.assignedSlot && (i = i.assignedSlot)
										const n = i.closest(e)
										return n || i.getRootNode ? n || t(i.getRootNode().host) : null
									})(t)
								)
						  })(d, l)
						: l.closest(d))
				)
					return void (t.allowClick = !0)
				if (r.swipeHandler && !l.closest(r.swipeHandler)) return
				;(o.currentX = n.pageX), (o.currentY = n.pageY)
				const p = o.currentX,
					f = o.currentY
				if (!Ic(t, n, p)) return
				Object.assign(s, {
					isTouched: !0,
					isMoved: !1,
					allowTouchCallbacks: !0,
					isScrolling: void 0,
					startMoving: void 0,
				}),
					(o.startX = p),
					(o.startY = f),
					(s.touchStartTime = lc()),
					(t.allowClick = !0),
					t.updateSize(),
					(t.swipeDirection = void 0),
					r.threshold > 0 && (s.allowThresholdMove = !1)
				let g = !0
				l.matches(s.focusableElements) &&
					((g = !1), 'SELECT' === l.nodeName && (s.isTouched = !1)),
					i.activeElement &&
						i.activeElement.matches(s.focusableElements) &&
						i.activeElement !== l &&
						('mouse' === n.pointerType ||
							('mouse' !== n.pointerType && !l.matches(s.focusableElements))) &&
						i.activeElement.blur()
				const m = g && t.allowTouchMove && r.touchStartPreventDefault
				;(!r.touchStartForcePreventDefault && !m) ||
					l.isContentEditable ||
					n.preventDefault(),
					r.freeMode &&
						r.freeMode.enabled &&
						t.freeMode &&
						t.animating &&
						!r.cssMode &&
						t.freeMode.onTouchStart(),
					t.emit('touchStart', n)
			}
			function Nc(e) {
				const t = sc(),
					i = this,
					n = i.touchEventsData,
					{ params: s, touches: r, rtlTranslate: o, enabled: a } = i
				if (!a) return
				if (!s.simulateTouch && 'mouse' === e.pointerType) return
				let l,
					c = e
				if ((c.originalEvent && (c = c.originalEvent), 'pointermove' === c.type)) {
					if (null !== n.touchId) return
					if (c.pointerId !== n.pointerId) return
				}
				if ('touchmove' === c.type) {
					if (
						((l = [...c.changedTouches].filter((e) => e.identifier === n.touchId)[0]),
						!l || l.identifier !== n.touchId)
					)
						return
				} else l = c
				if (!n.isTouched)
					return void (n.startMoving && n.isScrolling && i.emit('touchMoveOpposite', c))
				const u = l.pageX,
					d = l.pageY
				if (c.preventedByNestedSwiper) return (r.startX = u), void (r.startY = d)
				if (!i.allowTouchMove)
					return (
						c.target.matches(n.focusableElements) || (i.allowClick = !1),
						void (
							n.isTouched &&
							(Object.assign(r, { startX: u, startY: d, currentX: u, currentY: d }),
							(n.touchStartTime = lc()))
						)
					)
				if (s.touchReleaseOnEdges && !s.loop)
					if (i.isVertical()) {
						if (
							(d < r.startY && i.translate <= i.maxTranslate()) ||
							(d > r.startY && i.translate >= i.minTranslate())
						)
							return (n.isTouched = !1), void (n.isMoved = !1)
					} else if (
						(u < r.startX && i.translate <= i.maxTranslate()) ||
						(u > r.startX && i.translate >= i.minTranslate())
					)
						return
				if (
					(t.activeElement &&
						t.activeElement.matches(n.focusableElements) &&
						t.activeElement !== c.target &&
						'mouse' !== c.pointerType &&
						t.activeElement.blur(),
					t.activeElement &&
						c.target === t.activeElement &&
						c.target.matches(n.focusableElements))
				)
					return (n.isMoved = !0), void (i.allowClick = !1)
				n.allowTouchCallbacks && i.emit('touchMove', c),
					(r.previousX = r.currentX),
					(r.previousY = r.currentY),
					(r.currentX = u),
					(r.currentY = d)
				const h = r.currentX - r.startX,
					p = r.currentY - r.startY
				if (i.params.threshold && Math.sqrt(h ** 2 + p ** 2) < i.params.threshold) return
				if (void 0 === n.isScrolling) {
					let e
					;(i.isHorizontal() && r.currentY === r.startY) ||
					(i.isVertical() && r.currentX === r.startX)
						? (n.isScrolling = !1)
						: h * h + p * p >= 25 &&
						  ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
						  (n.isScrolling = i.isHorizontal()
								? e > s.touchAngle
								: 90 - e > s.touchAngle))
				}
				if (
					(n.isScrolling && i.emit('touchMoveOpposite', c),
					void 0 === n.startMoving &&
						((r.currentX === r.startX && r.currentY === r.startY) ||
							(n.startMoving = !0)),
					n.isScrolling || ('touchmove' === c.type && n.preventTouchMoveFromPointerMove))
				)
					return void (n.isTouched = !1)
				if (!n.startMoving) return
				;(i.allowClick = !1),
					!s.cssMode && c.cancelable && c.preventDefault(),
					s.touchMoveStopPropagation && !s.nested && c.stopPropagation()
				let f = i.isHorizontal() ? h : p,
					g = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
				s.oneWayMovement &&
					((f = Math.abs(f) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
					(r.diff = f),
					(f *= s.touchRatio),
					o && ((f = -f), (g = -g))
				const m = i.touchesDirection
				;(i.swipeDirection = f > 0 ? 'prev' : 'next'),
					(i.touchesDirection = g > 0 ? 'prev' : 'next')
				const v = i.params.loop && !s.cssMode,
					b =
						('next' === i.touchesDirection && i.allowSlideNext) ||
						('prev' === i.touchesDirection && i.allowSlidePrev)
				if (!n.isMoved) {
					if (
						(v && b && i.loopFix({ direction: i.swipeDirection }),
						(n.startTranslate = i.getTranslate()),
						i.setTransition(0),
						i.animating)
					) {
						const e = new window.CustomEvent('transitionend', {
							bubbles: !0,
							cancelable: !0,
							detail: { bySwiperTouchMove: !0 },
						})
						i.wrapperEl.dispatchEvent(e)
					}
					;(n.allowMomentumBounce = !1),
						!s.grabCursor ||
							(!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
							i.setGrabCursor(!0),
						i.emit('sliderFirstMove', c)
				}
				if (
					(new Date().getTime(),
					n.isMoved &&
						n.allowThresholdMove &&
						m !== i.touchesDirection &&
						v &&
						b &&
						Math.abs(f) >= 1)
				)
					return (
						Object.assign(r, {
							startX: u,
							startY: d,
							currentX: u,
							currentY: d,
							startTranslate: n.currentTranslate,
						}),
						(n.loopSwapReset = !0),
						void (n.startTranslate = n.currentTranslate)
					)
				i.emit('sliderMove', c),
					(n.isMoved = !0),
					(n.currentTranslate = f + n.startTranslate)
				let y = !0,
					D = s.resistanceRatio
				if (
					(s.touchReleaseOnEdges && (D = 0),
					f > 0
						? (v &&
								b &&
								n.allowThresholdMove &&
								n.currentTranslate >
									(s.centeredSlides
										? i.minTranslate() -
										  i.slidesSizesGrid[i.activeIndex + 1] -
										  ('auto' !== s.slidesPerView &&
										  i.slides.length - s.slidesPerView >= 2
												? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween
												: 0) -
										  i.params.spaceBetween
										: i.minTranslate()) &&
								i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
						  n.currentTranslate > i.minTranslate() &&
								((y = !1),
								s.resistance &&
									(n.currentTranslate =
										i.minTranslate() -
										1 +
										(-i.minTranslate() + n.startTranslate + f) ** D)))
						: f < 0 &&
						  (v &&
								b &&
								n.allowThresholdMove &&
								n.currentTranslate <
									(s.centeredSlides
										? i.maxTranslate() +
										  i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
										  i.params.spaceBetween +
										  ('auto' !== s.slidesPerView &&
										  i.slides.length - s.slidesPerView >= 2
												? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
												  i.params.spaceBetween
												: 0)
										: i.maxTranslate()) &&
								i.loopFix({
									direction: 'next',
									setTranslate: !0,
									activeSlideIndex:
										i.slides.length -
										('auto' === s.slidesPerView
											? i.slidesPerViewDynamic()
											: Math.ceil(parseFloat(s.slidesPerView, 10))),
								}),
						  n.currentTranslate < i.maxTranslate() &&
								((y = !1),
								s.resistance &&
									(n.currentTranslate =
										i.maxTranslate() +
										1 -
										(i.maxTranslate() - n.startTranslate - f) ** D))),
					y && (c.preventedByNestedSwiper = !0),
					!i.allowSlideNext &&
						'next' === i.swipeDirection &&
						n.currentTranslate < n.startTranslate &&
						(n.currentTranslate = n.startTranslate),
					!i.allowSlidePrev &&
						'prev' === i.swipeDirection &&
						n.currentTranslate > n.startTranslate &&
						(n.currentTranslate = n.startTranslate),
					i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate),
					s.threshold > 0)
				) {
					if (!(Math.abs(f) > s.threshold || n.allowThresholdMove))
						return void (n.currentTranslate = n.startTranslate)
					if (!n.allowThresholdMove)
						return (
							(n.allowThresholdMove = !0),
							(r.startX = r.currentX),
							(r.startY = r.currentY),
							(n.currentTranslate = n.startTranslate),
							void (r.diff = i.isHorizontal()
								? r.currentX - r.startX
								: r.currentY - r.startY)
						)
				}
				s.followFinger &&
					!s.cssMode &&
					(((s.freeMode && s.freeMode.enabled && i.freeMode) || s.watchSlidesProgress) &&
						(i.updateActiveIndex(), i.updateSlidesClasses()),
					s.freeMode && s.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
					i.updateProgress(n.currentTranslate),
					i.setTranslate(n.currentTranslate))
			}
			function jc(e) {
				const t = this,
					i = t.touchEventsData
				let n,
					s = e
				if (
					(s.originalEvent && (s = s.originalEvent),
					'touchend' === s.type || 'touchcancel' === s.type)
				) {
					if (
						((n = [...s.changedTouches].filter((e) => e.identifier === i.touchId)[0]),
						!n || n.identifier !== i.touchId)
					)
						return
				} else {
					if (null !== i.touchId) return
					if (s.pointerId !== i.pointerId) return
					n = s
				}
				if (
					['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
						s.type
					) &&
					(!['pointercancel', 'contextmenu'].includes(s.type) ||
						(!t.browser.isSafari && !t.browser.isWebView))
				)
					return
				;(i.pointerId = null), (i.touchId = null)
				const { params: r, touches: o, rtlTranslate: a, slidesGrid: l, enabled: c } = t
				if (!c) return
				if (!r.simulateTouch && 'mouse' === s.pointerType) return
				if (
					(i.allowTouchCallbacks && t.emit('touchEnd', s),
					(i.allowTouchCallbacks = !1),
					!i.isTouched)
				)
					return (
						i.isMoved && r.grabCursor && t.setGrabCursor(!1),
						(i.isMoved = !1),
						void (i.startMoving = !1)
					)
				r.grabCursor &&
					i.isMoved &&
					i.isTouched &&
					(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
					t.setGrabCursor(!1)
				const u = lc(),
					d = u - i.touchStartTime
				if (t.allowClick) {
					const e = s.path || (s.composedPath && s.composedPath())
					t.updateClickedSlide((e && e[0]) || s.target, e),
						t.emit('tap click', s),
						d < 300 && u - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', s)
				}
				if (
					((i.lastClickTime = lc()),
					ac(() => {
						t.destroyed || (t.allowClick = !0)
					}),
					!i.isTouched ||
						!i.isMoved ||
						!t.swipeDirection ||
						(0 === o.diff && !i.loopSwapReset) ||
						(i.currentTranslate === i.startTranslate && !i.loopSwapReset))
				)
					return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
				let h
				if (
					((i.isTouched = !1),
					(i.isMoved = !1),
					(i.startMoving = !1),
					(h = r.followFinger ? (a ? t.translate : -t.translate) : -i.currentTranslate),
					r.cssMode)
				)
					return
				if (r.freeMode && r.freeMode.enabled)
					return void t.freeMode.onTouchEnd({ currentPos: h })
				const p = h >= -t.maxTranslate() && !t.params.loop
				let f = 0,
					g = t.slidesSizesGrid[0]
				for (
					let e = 0;
					e < l.length;
					e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
				) {
					const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup
					void 0 !== l[e + t]
						? (p || (h >= l[e] && h < l[e + t])) && ((f = e), (g = l[e + t] - l[e]))
						: (p || h >= l[e]) && ((f = e), (g = l[l.length - 1] - l[l.length - 2]))
				}
				let m = null,
					v = null
				r.rewind &&
					(t.isBeginning
						? (v =
								r.virtual && r.virtual.enabled && t.virtual
									? t.virtual.slides.length - 1
									: t.slides.length - 1)
						: t.isEnd && (m = 0))
				const b = (h - l[f]) / g,
					y = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup
				if (d > r.longSwipesMs) {
					if (!r.longSwipes) return void t.slideTo(t.activeIndex)
					'next' === t.swipeDirection &&
						(b >= r.longSwipesRatio
							? t.slideTo(r.rewind && t.isEnd ? m : f + y)
							: t.slideTo(f)),
						'prev' === t.swipeDirection &&
							(b > 1 - r.longSwipesRatio
								? t.slideTo(f + y)
								: null !== v && b < 0 && Math.abs(b) > r.longSwipesRatio
								? t.slideTo(v)
								: t.slideTo(f))
				} else {
					if (!r.shortSwipes) return void t.slideTo(t.activeIndex)
					!t.navigation ||
					(s.target !== t.navigation.nextEl && s.target !== t.navigation.prevEl)
						? ('next' === t.swipeDirection && t.slideTo(null !== m ? m : f + y),
						  'prev' === t.swipeDirection && t.slideTo(null !== v ? v : f))
						: s.target === t.navigation.nextEl
						? t.slideTo(f + y)
						: t.slideTo(f)
				}
			}
			function Hc() {
				const e = this,
					{ params: t, el: i } = e
				if (i && 0 === i.offsetWidth) return
				t.breakpoints && e.setBreakpoint()
				const { allowSlideNext: n, allowSlidePrev: s, snapGrid: r } = e,
					o = e.virtual && e.params.virtual.enabled
				;(e.allowSlideNext = !0),
					(e.allowSlidePrev = !0),
					e.updateSize(),
					e.updateSlides(),
					e.updateSlidesClasses()
				const a = o && t.loop
				!('auto' === t.slidesPerView || t.slidesPerView > 1) ||
				!e.isEnd ||
				e.isBeginning ||
				e.params.centeredSlides ||
				a
					? e.params.loop && !o
						? e.slideToLoop(e.realIndex, 0, !1, !0)
						: e.slideTo(e.activeIndex, 0, !1, !0)
					: e.slideTo(e.slides.length - 1, 0, !1, !0),
					e.autoplay &&
						e.autoplay.running &&
						e.autoplay.paused &&
						(clearTimeout(e.autoplay.resizeTimeout),
						(e.autoplay.resizeTimeout = setTimeout(() => {
							e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
						}, 500))),
					(e.allowSlidePrev = s),
					(e.allowSlideNext = n),
					e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
			}
			function $c(e) {
				const t = this
				t.enabled &&
					(t.allowClick ||
						(t.params.preventClicks && e.preventDefault(),
						t.params.preventClicksPropagation &&
							t.animating &&
							(e.stopPropagation(), e.stopImmediatePropagation())))
			}
			function qc() {
				const e = this,
					{ wrapperEl: t, rtlTranslate: i, enabled: n } = e
				if (!n) return
				let s
				;(e.previousTranslate = e.translate),
					e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
					0 === e.translate && (e.translate = 0),
					e.updateActiveIndex(),
					e.updateSlidesClasses()
				const r = e.maxTranslate() - e.minTranslate()
				;(s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
					s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
					e.emit('setTranslate', e.translate, !1)
			}
			function Vc(e) {
				const t = this
				Pc(t, e.target),
					t.params.cssMode ||
						('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
						t.update()
			}
			function Yc() {
				const e = this
				e.documentTouchHandlerProceeded ||
					((e.documentTouchHandlerProceeded = !0),
					e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
			}
			const Xc = (e, t) => {
					const i = sc(),
						{ params: n, el: s, wrapperEl: r, device: o } = e,
						a = !!n.nested,
						l = 'on' === t ? 'addEventListener' : 'removeEventListener',
						c = t
					s &&
						'string' != typeof s &&
						(i[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
						s[l]('touchstart', e.onTouchStart, { passive: !1 }),
						s[l]('pointerdown', e.onTouchStart, { passive: !1 }),
						i[l]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
						i[l]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
						i[l]('touchend', e.onTouchEnd, { passive: !0 }),
						i[l]('pointerup', e.onTouchEnd, { passive: !0 }),
						i[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
						i[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
						i[l]('pointerout', e.onTouchEnd, { passive: !0 }),
						i[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
						i[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
						(n.preventClicks || n.preventClicksPropagation) &&
							s[l]('click', e.onClick, !0),
						n.cssMode && r[l]('scroll', e.onScroll),
						n.updateOnWindowResize
							? e[c](
									o.ios || o.android
										? 'resize orientationchange observerUpdate'
										: 'resize observerUpdate',
									Hc,
									!0
							  )
							: e[c]('observerUpdate', Hc, !0),
						s[l]('load', e.onLoad, { capture: !0 }))
				},
				Gc = (e, t) => e.grid && t.grid && t.grid.rows > 1
			var Wc = {
					setBreakpoint: function () {
						const e = this,
							{ realIndex: t, initialized: i, params: n, el: s } = e,
							r = n.breakpoints
						if (!r || (r && 0 === Object.keys(r).length)) return
						const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el)
						if (!o || e.currentBreakpoint === o) return
						const a = (o in r ? r[o] : void 0) || e.originalParams,
							l = Gc(e, n),
							c = Gc(e, a),
							u = e.params.grabCursor,
							d = a.grabCursor,
							h = n.enabled
						l && !c
							? (s.classList.remove(
									`${n.containerModifierClass}grid`,
									`${n.containerModifierClass}grid-column`
							  ),
							  e.emitContainerClasses())
							: !l &&
							  c &&
							  (s.classList.add(`${n.containerModifierClass}grid`),
							  ((a.grid.fill && 'column' === a.grid.fill) ||
									(!a.grid.fill && 'column' === n.grid.fill)) &&
									s.classList.add(`${n.containerModifierClass}grid-column`),
							  e.emitContainerClasses()),
							u && !d ? e.unsetGrabCursor() : !u && d && e.setGrabCursor(),
							['navigation', 'pagination', 'scrollbar'].forEach((t) => {
								if (void 0 === a[t]) return
								const i = n[t] && n[t].enabled,
									s = a[t] && a[t].enabled
								i && !s && e[t].disable(), !i && s && e[t].enable()
							})
						const p = a.direction && a.direction !== n.direction,
							f = n.loop && (a.slidesPerView !== n.slidesPerView || p),
							g = n.loop
						p && i && e.changeDirection(), uc(e.params, a)
						const m = e.params.enabled,
							v = e.params.loop
						Object.assign(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev,
						}),
							h && !m ? e.disable() : !h && m && e.enable(),
							(e.currentBreakpoint = o),
							e.emit('_beforeBreakpoint', a),
							i &&
								(f
									? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
									: !g && v
									? (e.loopCreate(t), e.updateSlides())
									: g && !v && e.loopDestroy()),
							e.emit('breakpoint', a)
					},
					getBreakpoint: function (e, t, i) {
						if ((void 0 === t && (t = 'window'), !e || ('container' === t && !i))) return
						let n = !1
						const s = oc(),
							r = 'window' === t ? s.innerHeight : i.clientHeight,
							o = Object.keys(e).map((e) => {
								if ('string' == typeof e && 0 === e.indexOf('@')) {
									const t = parseFloat(e.substr(1))
									return { value: r * t, point: e }
								}
								return { value: e, point: e }
							})
						o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))
						for (let e = 0; e < o.length; e += 1) {
							const { point: r, value: a } = o[e]
							'window' === t
								? s.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
								: a <= i.clientWidth && (n = r)
						}
						return n || 'max'
					},
				},
				Uc = {
					init: !0,
					direction: 'horizontal',
					oneWayMovement: !1,
					swiperElementNodeName: 'SWIPER-CONTAINER',
					touchEventsTarget: 'wrapper',
					initialSlide: 0,
					speed: 300,
					cssMode: !1,
					updateOnWindowResize: !0,
					resizeObserver: !0,
					nested: !1,
					createElements: !1,
					eventsPrefix: 'swiper',
					enabled: !0,
					focusableElements: 'input, select, option, textarea, button, video, label',
					width: null,
					height: null,
					preventInteractionOnTransition: !1,
					userAgent: null,
					url: null,
					edgeSwipeDetection: !1,
					edgeSwipeThreshold: 20,
					autoHeight: !1,
					setWrapperSize: !1,
					virtualTranslate: !1,
					effect: 'slide',
					breakpoints: void 0,
					breakpointsBase: 'window',
					spaceBetween: 0,
					slidesPerView: 1,
					slidesPerGroup: 1,
					slidesPerGroupSkip: 0,
					slidesPerGroupAuto: !1,
					centeredSlides: !1,
					centeredSlidesBounds: !1,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 0,
					normalizeSlideIndex: !0,
					centerInsufficientSlides: !1,
					watchOverflow: !0,
					roundLengths: !1,
					touchRatio: 1,
					touchAngle: 45,
					simulateTouch: !0,
					shortSwipes: !0,
					longSwipes: !0,
					longSwipesRatio: 0.5,
					longSwipesMs: 300,
					followFinger: !0,
					allowTouchMove: !0,
					threshold: 5,
					touchMoveStopPropagation: !1,
					touchStartPreventDefault: !0,
					touchStartForcePreventDefault: !1,
					touchReleaseOnEdges: !1,
					uniqueNavElements: !0,
					resistance: !0,
					resistanceRatio: 0.85,
					watchSlidesProgress: !1,
					grabCursor: !1,
					preventClicks: !0,
					preventClicksPropagation: !0,
					slideToClickedSlide: !1,
					loop: !1,
					loopAddBlankSlides: !0,
					loopAdditionalSlides: 0,
					loopPreventsSliding: !0,
					rewind: !1,
					allowSlidePrev: !0,
					allowSlideNext: !0,
					swipeHandler: null,
					noSwiping: !0,
					noSwipingClass: 'swiper-no-swiping',
					noSwipingSelector: null,
					passiveListeners: !0,
					maxBackfaceHiddenSlides: 10,
					containerModifierClass: 'swiper-',
					slideClass: 'swiper-slide',
					slideBlankClass: 'swiper-slide-blank',
					slideActiveClass: 'swiper-slide-active',
					slideVisibleClass: 'swiper-slide-visible',
					slideFullyVisibleClass: 'swiper-slide-fully-visible',
					slideNextClass: 'swiper-slide-next',
					slidePrevClass: 'swiper-slide-prev',
					wrapperClass: 'swiper-wrapper',
					lazyPreloaderClass: 'swiper-lazy-preloader',
					lazyPreloadPrevNext: 0,
					runCallbacksOnInit: !0,
					_emitClasses: !1,
				}
			function Zc(e, t) {
				return function (i) {
					void 0 === i && (i = {})
					const n = Object.keys(i)[0],
						s = i[n]
					'object' == typeof s && null !== s
						? (!0 === e[n] && (e[n] = { enabled: !0 }),
						  'navigation' === n &&
								e[n] &&
								e[n].enabled &&
								!e[n].prevEl &&
								!e[n].nextEl &&
								(e[n].auto = !0),
						  ['pagination', 'scrollbar'].indexOf(n) >= 0 &&
								e[n] &&
								e[n].enabled &&
								!e[n].el &&
								(e[n].auto = !0),
						  n in e && 'enabled' in s
								? ('object' != typeof e[n] || 'enabled' in e[n] || (e[n].enabled = !0),
								  e[n] || (e[n] = { enabled: !1 }),
								  uc(t, i))
								: uc(t, i))
						: uc(t, i)
				}
			}
			const Kc = {
					eventsEmitter: Tc,
					update: Oc,
					translate: Lc,
					transition: {
						setTransition: function (e, t) {
							const i = this
							i.params.cssMode ||
								((i.wrapperEl.style.transitionDuration = `${e}ms`),
								(i.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
								i.emit('setTransition', e, t)
						},
						transitionStart: function (e, t) {
							void 0 === e && (e = !0)
							const i = this,
								{ params: n } = i
							n.cssMode ||
								(n.autoHeight && i.updateAutoHeight(),
								kc({ swiper: i, runCallbacks: e, direction: t, step: 'Start' }))
						},
						transitionEnd: function (e, t) {
							void 0 === e && (e = !0)
							const i = this,
								{ params: n } = i
							;(i.animating = !1),
								n.cssMode ||
									(i.setTransition(0),
									kc({ swiper: i, runCallbacks: e, direction: t, step: 'End' }))
						},
					},
					slide: zc,
					loop: Rc,
					grabCursor: {
						setGrabCursor: function (e) {
							const t = this
							if (
								!t.params.simulateTouch ||
								(t.params.watchOverflow && t.isLocked) ||
								t.params.cssMode
							)
								return
							const i = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl
							t.isElement && (t.__preventObserver__ = !0),
								(i.style.cursor = 'move'),
								(i.style.cursor = e ? 'grabbing' : 'grab'),
								t.isElement &&
									requestAnimationFrame(() => {
										t.__preventObserver__ = !1
									})
						},
						unsetGrabCursor: function () {
							const e = this
							;(e.params.watchOverflow && e.isLocked) ||
								e.params.cssMode ||
								(e.isElement && (e.__preventObserver__ = !0),
								(e[
									'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
								].style.cursor = ''),
								e.isElement &&
									requestAnimationFrame(() => {
										e.__preventObserver__ = !1
									}))
						},
					},
					events: {
						attachEvents: function () {
							const e = this,
								{ params: t } = e
							;(e.onTouchStart = Bc.bind(e)),
								(e.onTouchMove = Nc.bind(e)),
								(e.onTouchEnd = jc.bind(e)),
								(e.onDocumentTouchStart = Yc.bind(e)),
								t.cssMode && (e.onScroll = qc.bind(e)),
								(e.onClick = $c.bind(e)),
								(e.onLoad = Vc.bind(e)),
								Xc(e, 'on')
						},
						detachEvents: function () {
							Xc(this, 'off')
						},
					},
					breakpoints: Wc,
					checkOverflow: {
						checkOverflow: function () {
							const e = this,
								{ isLocked: t, params: i } = e,
								{ slidesOffsetBefore: n } = i
							if (n) {
								const t = e.slides.length - 1,
									i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n
								e.isLocked = e.size > i
							} else e.isLocked = 1 === e.snapGrid.length
							!0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
								!0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
								t && t !== e.isLocked && (e.isEnd = !1),
								t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
						},
					},
					classes: {
						addClasses: function () {
							const e = this,
								{ classNames: t, params: i, rtl: n, el: s, device: r } = e,
								o = (function (e, t) {
									const i = []
									return (
										e.forEach((e) => {
											'object' == typeof e
												? Object.keys(e).forEach((n) => {
														e[n] && i.push(t + n)
												  })
												: 'string' == typeof e && i.push(t + e)
										}),
										i
									)
								})(
									[
										'initialized',
										i.direction,
										{ 'free-mode': e.params.freeMode && i.freeMode.enabled },
										{ autoheight: i.autoHeight },
										{ rtl: n },
										{ grid: i.grid && i.grid.rows > 1 },
										{
											'grid-column':
												i.grid && i.grid.rows > 1 && 'column' === i.grid.fill,
										},
										{ android: r.android },
										{ ios: r.ios },
										{ 'css-mode': i.cssMode },
										{ centered: i.cssMode && i.centeredSlides },
										{ 'watch-progress': i.watchSlidesProgress },
									],
									i.containerModifierClass
								)
							t.push(...o), s.classList.add(...t), e.emitContainerClasses()
						},
						removeClasses: function () {
							const { el: e, classNames: t } = this
							e &&
								'string' != typeof e &&
								(e.classList.remove(...t), this.emitContainerClasses())
						},
					},
				},
				Jc = {}
			class Qc {
				constructor() {
					let e, t
					for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
						n[s] = arguments[s]
					1 === n.length &&
					n[0].constructor &&
					'Object' === Object.prototype.toString.call(n[0]).slice(8, -1)
						? (t = n[0])
						: ([e, t] = n),
						t || (t = {}),
						(t = uc({}, t)),
						e && !t.el && (t.el = e)
					const r = sc()
					if (t.el && 'string' == typeof t.el && r.querySelectorAll(t.el).length > 1) {
						const e = []
						return (
							r.querySelectorAll(t.el).forEach((i) => {
								const n = uc({}, t, { el: i })
								e.push(new Qc(n))
							}),
							e
						)
					}
					const o = this
					;(o.__swiper__ = !0),
						(o.support = _c()),
						(o.device = Cc({ userAgent: t.userAgent })),
						(o.browser =
							(Ec ||
								(Ec = (function () {
									const e = oc(),
										t = Cc()
									let i = !1
									function n() {
										const t = e.navigator.userAgent.toLowerCase()
										return (
											t.indexOf('safari') >= 0 &&
											t.indexOf('chrome') < 0 &&
											t.indexOf('android') < 0
										)
									}
									if (n()) {
										const t = String(e.navigator.userAgent)
										if (t.includes('Version/')) {
											const [e, n] = t
												.split('Version/')[1]
												.split(' ')[0]
												.split('.')
												.map((e) => Number(e))
											i = e < 16 || (16 === e && n < 2)
										}
									}
									const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
											e.navigator.userAgent
										),
										r = n()
									return {
										isSafari: i || r,
										needPerspectiveFix: i,
										need3dFix: r || (s && t.ios),
										isWebView: s,
									}
								})()),
							Ec)),
						(o.eventsListeners = {}),
						(o.eventsAnyListeners = []),
						(o.modules = [...o.__modules__]),
						t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules)
					const a = {}
					o.modules.forEach((e) => {
						e({
							params: t,
							swiper: o,
							extendParams: Zc(t, a),
							on: o.on.bind(o),
							once: o.once.bind(o),
							off: o.off.bind(o),
							emit: o.emit.bind(o),
						})
					})
					const l = uc({}, Uc, a)
					return (
						(o.params = uc({}, l, Jc, t)),
						(o.originalParams = uc({}, o.params)),
						(o.passedParams = uc({}, t)),
						o.params &&
							o.params.on &&
							Object.keys(o.params.on).forEach((e) => {
								o.on(e, o.params.on[e])
							}),
						o.params && o.params.onAny && o.onAny(o.params.onAny),
						Object.assign(o, {
							enabled: o.params.enabled,
							el: e,
							classNames: [],
							slides: [],
							slidesGrid: [],
							snapGrid: [],
							slidesSizesGrid: [],
							isHorizontal() {
								return 'horizontal' === o.params.direction
							},
							isVertical() {
								return 'vertical' === o.params.direction
							},
							activeIndex: 0,
							realIndex: 0,
							isBeginning: !0,
							isEnd: !1,
							translate: 0,
							previousTranslate: 0,
							progress: 0,
							velocity: 0,
							animating: !1,
							cssOverflowAdjustment() {
								return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
							},
							allowSlideNext: o.params.allowSlideNext,
							allowSlidePrev: o.params.allowSlidePrev,
							touchEventsData: {
								isTouched: void 0,
								isMoved: void 0,
								allowTouchCallbacks: void 0,
								touchStartTime: void 0,
								isScrolling: void 0,
								currentTranslate: void 0,
								startTranslate: void 0,
								allowThresholdMove: void 0,
								focusableElements: o.params.focusableElements,
								lastClickTime: 0,
								clickTimeout: void 0,
								velocities: [],
								allowMomentumBounce: void 0,
								startMoving: void 0,
								pointerId: null,
								touchId: null,
							},
							allowClick: !0,
							allowTouchMove: o.params.allowTouchMove,
							touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
							imagesToLoad: [],
							imagesLoaded: 0,
						}),
						o.emit('_swiper'),
						o.params.init && o.init(),
						o
					)
				}
				getDirectionLabel(e) {
					return this.isHorizontal()
						? e
						: {
								width: 'height',
								'margin-top': 'margin-left',
								'margin-bottom ': 'margin-right',
								'margin-left': 'margin-top',
								'margin-right': 'margin-bottom',
								'padding-left': 'padding-top',
								'padding-right': 'padding-bottom',
								marginRight: 'marginBottom',
						  }[e]
				}
				getSlideIndex(e) {
					const { slidesEl: t, params: i } = this,
						n = vc(pc(t, `.${i.slideClass}, swiper-slide`)[0])
					return vc(e) - n
				}
				getSlideIndexByData(e) {
					return this.getSlideIndex(
						this.slides.filter(
							(t) => 1 * t.getAttribute('data-swiper-slide-index') === e
						)[0]
					)
				}
				recalcSlides() {
					const { slidesEl: e, params: t } = this
					this.slides = pc(e, `.${t.slideClass}, swiper-slide`)
				}
				enable() {
					const e = this
					e.enabled ||
						((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'))
				}
				disable() {
					const e = this
					e.enabled &&
						((e.enabled = !1),
						e.params.grabCursor && e.unsetGrabCursor(),
						e.emit('disable'))
				}
				setProgress(e, t) {
					const i = this
					e = Math.min(Math.max(e, 0), 1)
					const n = i.minTranslate(),
						s = (i.maxTranslate() - n) * e + n
					i.translateTo(s, void 0 === t ? 0 : t),
						i.updateActiveIndex(),
						i.updateSlidesClasses()
				}
				emitContainerClasses() {
					const e = this
					if (!e.params._emitClasses || !e.el) return
					const t = e.el.className
						.split(' ')
						.filter(
							(t) =>
								0 === t.indexOf('swiper') ||
								0 === t.indexOf(e.params.containerModifierClass)
						)
					e.emit('_containerClasses', t.join(' '))
				}
				getSlideClasses(e) {
					const t = this
					return t.destroyed
						? ''
						: e.className
								.split(' ')
								.filter(
									(e) =>
										0 === e.indexOf('swiper-slide') ||
										0 === e.indexOf(t.params.slideClass)
								)
								.join(' ')
				}
				emitSlidesClasses() {
					const e = this
					if (!e.params._emitClasses || !e.el) return
					const t = []
					e.slides.forEach((i) => {
						const n = e.getSlideClasses(i)
						t.push({ slideEl: i, classNames: n }), e.emit('_slideClass', i, n)
					}),
						e.emit('_slideClasses', t)
				}
				slidesPerViewDynamic(e, t) {
					void 0 === e && (e = 'current'), void 0 === t && (t = !1)
					const {
						params: i,
						slides: n,
						slidesGrid: s,
						slidesSizesGrid: r,
						size: o,
						activeIndex: a,
					} = this
					let l = 1
					if ('number' == typeof i.slidesPerView) return i.slidesPerView
					if (i.centeredSlides) {
						let e,
							t = n[a] ? Math.ceil(n[a].swiperSlideSize) : 0
						for (let i = a + 1; i < n.length; i += 1)
							n[i] &&
								!e &&
								((t += Math.ceil(n[i].swiperSlideSize)), (l += 1), t > o && (e = !0))
						for (let i = a - 1; i >= 0; i -= 1)
							n[i] && !e && ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0))
					} else if ('current' === e)
						for (let e = a + 1; e < n.length; e += 1)
							(t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1)
					else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < o && (l += 1)
					return l
				}
				update() {
					const e = this
					if (!e || e.destroyed) return
					const { snapGrid: t, params: i } = e
					function n() {
						const t = e.rtlTranslate ? -1 * e.translate : e.translate,
							i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
						e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
					}
					let s
					if (
						(i.breakpoints && e.setBreakpoint(),
						[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
							t.complete && Pc(e, t)
						}),
						e.updateSize(),
						e.updateSlides(),
						e.updateProgress(),
						e.updateSlidesClasses(),
						i.freeMode && i.freeMode.enabled && !i.cssMode)
					)
						n(), i.autoHeight && e.updateAutoHeight()
					else {
						if (
							('auto' === i.slidesPerView || i.slidesPerView > 1) &&
							e.isEnd &&
							!i.centeredSlides
						) {
							const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides
							s = e.slideTo(t.length - 1, 0, !1, !0)
						} else s = e.slideTo(e.activeIndex, 0, !1, !0)
						s || n()
					}
					i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update')
				}
				changeDirection(e, t) {
					void 0 === t && (t = !0)
					const i = this,
						n = i.params.direction
					return (
						e || (e = 'horizontal' === n ? 'vertical' : 'horizontal'),
						e === n ||
							('horizontal' !== e && 'vertical' !== e) ||
							(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
							i.el.classList.add(`${i.params.containerModifierClass}${e}`),
							i.emitContainerClasses(),
							(i.params.direction = e),
							i.slides.forEach((t) => {
								'vertical' === e ? (t.style.width = '') : (t.style.height = '')
							}),
							i.emit('changeDirection'),
							t && i.update()),
						i
					)
				}
				changeLanguageDirection(e) {
					const t = this
					;(t.rtl && 'rtl' === e) ||
						(!t.rtl && 'ltr' === e) ||
						((t.rtl = 'rtl' === e),
						(t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
						t.rtl
							? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
							  (t.el.dir = 'rtl'))
							: (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
							  (t.el.dir = 'ltr')),
						t.update())
				}
				mount(e) {
					const t = this
					if (t.mounted) return !0
					let i = e || t.params.el
					if (('string' == typeof i && (i = document.querySelector(i)), !i)) return !1
					;(i.swiper = t),
						i.parentNode &&
							i.parentNode.host &&
							i.parentNode.host.nodeName ===
								t.params.swiperElementNodeName.toUpperCase() &&
							(t.isElement = !0)
					const n = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
					let s =
						i && i.shadowRoot && i.shadowRoot.querySelector
							? i.shadowRoot.querySelector(n())
							: pc(i, n())[0]
					return (
						!s &&
							t.params.createElements &&
							((s = gc('div', t.params.wrapperClass)),
							i.append(s),
							pc(i, `.${t.params.slideClass}`).forEach((e) => {
								s.append(e)
							})),
						Object.assign(t, {
							el: i,
							wrapperEl: s,
							slidesEl:
								t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : s,
							hostEl: t.isElement ? i.parentNode.host : i,
							mounted: !0,
							rtl: 'rtl' === i.dir.toLowerCase() || 'rtl' === mc(i, 'direction'),
							rtlTranslate:
								'horizontal' === t.params.direction &&
								('rtl' === i.dir.toLowerCase() || 'rtl' === mc(i, 'direction')),
							wrongRTL: '-webkit-box' === mc(s, 'display'),
						}),
						!0
					)
				}
				init(e) {
					const t = this
					if (t.initialized) return t
					if (!1 === t.mount(e)) return t
					t.emit('beforeInit'),
						t.params.breakpoints && t.setBreakpoint(),
						t.addClasses(),
						t.updateSize(),
						t.updateSlides(),
						t.params.watchOverflow && t.checkOverflow(),
						t.params.grabCursor && t.enabled && t.setGrabCursor(),
						t.params.loop && t.virtual && t.params.virtual.enabled
							? t.slideTo(
									t.params.initialSlide + t.virtual.slidesBefore,
									0,
									t.params.runCallbacksOnInit,
									!1,
									!0
							  )
							: t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
						t.params.loop && t.loopCreate(),
						t.attachEvents()
					const i = [...t.el.querySelectorAll('[loading="lazy"]')]
					return (
						t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
						i.forEach((e) => {
							e.complete
								? Pc(t, e)
								: e.addEventListener('load', (e) => {
										Pc(t, e.target)
								  })
						}),
						Ac(t),
						(t.initialized = !0),
						Ac(t),
						t.emit('init'),
						t.emit('afterInit'),
						t
					)
				}
				destroy(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = !0)
					const i = this,
						{ params: n, el: s, wrapperEl: r, slides: o } = i
					return (
						void 0 === i.params ||
							i.destroyed ||
							(i.emit('beforeDestroy'),
							(i.initialized = !1),
							i.detachEvents(),
							n.loop && i.loopDestroy(),
							t &&
								(i.removeClasses(),
								s && 'string' != typeof s && s.removeAttribute('style'),
								r && r.removeAttribute('style'),
								o &&
									o.length &&
									o.forEach((e) => {
										e.classList.remove(
											n.slideVisibleClass,
											n.slideFullyVisibleClass,
											n.slideActiveClass,
											n.slideNextClass,
											n.slidePrevClass
										),
											e.removeAttribute('style'),
											e.removeAttribute('data-swiper-slide-index')
									})),
							i.emit('destroy'),
							Object.keys(i.eventsListeners).forEach((e) => {
								i.off(e)
							}),
							!1 !== e &&
								(i.el && 'string' != typeof i.el && (i.el.swiper = null),
								(function (e) {
									const t = e
									Object.keys(t).forEach((e) => {
										try {
											t[e] = null
										} catch (e) {}
										try {
											delete t[e]
										} catch (e) {}
									})
								})(i)),
							(i.destroyed = !0)),
						null
					)
				}
				static extendDefaults(e) {
					uc(Jc, e)
				}
				static get extendedDefaults() {
					return Jc
				}
				static get defaults() {
					return Uc
				}
				static installModule(e) {
					Qc.prototype.__modules__ || (Qc.prototype.__modules__ = [])
					const t = Qc.prototype.__modules__
					'function' == typeof e && t.indexOf(e) < 0 && t.push(e)
				}
				static use(e) {
					return Array.isArray(e)
						? (e.forEach((e) => Qc.installModule(e)), Qc)
						: (Qc.installModule(e), Qc)
				}
			}
			function eu(e, t, i, n) {
				return (
					e.params.createElements &&
						Object.keys(n).forEach((s) => {
							if (!i[s] && !0 === i.auto) {
								let r = pc(e.el, `.${n[s]}`)[0]
								r || ((r = gc('div', n[s])), (r.className = n[s]), e.el.append(r)),
									(i[s] = r),
									(t[s] = r)
							}
						}),
					i
				)
			}
			function tu(e) {
				let { swiper: t, extendParams: i, on: n, emit: s } = e
				function r(e) {
					let i
					return e &&
						'string' == typeof e &&
						t.isElement &&
						((i = t.el.querySelector(e) || t.hostEl.querySelector(e)), i)
						? i
						: (e &&
								('string' == typeof e && (i = [...document.querySelectorAll(e)]),
								t.params.uniqueNavElements &&
								'string' == typeof e &&
								i &&
								i.length > 1 &&
								1 === t.el.querySelectorAll(e).length
									? (i = t.el.querySelector(e))
									: i && 1 === i.length && (i = i[0])),
						  e && !i ? e : i)
				}
				function o(e, i) {
					const n = t.params.navigation
					;(e = Dc(e)).forEach((e) => {
						e &&
							(e.classList[i ? 'add' : 'remove'](...n.disabledClass.split(' ')),
							'BUTTON' === e.tagName && (e.disabled = i),
							t.params.watchOverflow &&
								t.enabled &&
								e.classList[t.isLocked ? 'add' : 'remove'](n.lockClass))
					})
				}
				function a() {
					const { nextEl: e, prevEl: i } = t.navigation
					if (t.params.loop) return o(i, !1), void o(e, !1)
					o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
				}
				function l(e) {
					e.preventDefault(),
						(!t.isBeginning || t.params.loop || t.params.rewind) &&
							(t.slidePrev(), s('navigationPrev'))
				}
				function c(e) {
					e.preventDefault(),
						(!t.isEnd || t.params.loop || t.params.rewind) &&
							(t.slideNext(), s('navigationNext'))
				}
				function u() {
					const e = t.params.navigation
					if (
						((t.params.navigation = eu(
							t,
							t.originalParams.navigation,
							t.params.navigation,
							{ nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
						)),
						!e.nextEl && !e.prevEl)
					)
						return
					let i = r(e.nextEl),
						n = r(e.prevEl)
					Object.assign(t.navigation, { nextEl: i, prevEl: n }), (i = Dc(i)), (n = Dc(n))
					const s = (i, n) => {
						i && i.addEventListener('click', 'next' === n ? c : l),
							!t.enabled && i && i.classList.add(...e.lockClass.split(' '))
					}
					i.forEach((e) => s(e, 'next')), n.forEach((e) => s(e, 'prev'))
				}
				function d() {
					let { nextEl: e, prevEl: i } = t.navigation
					;(e = Dc(e)), (i = Dc(i))
					const n = (e, i) => {
						e.removeEventListener('click', 'next' === i ? c : l),
							e.classList.remove(...t.params.navigation.disabledClass.split(' '))
					}
					e.forEach((e) => n(e, 'next')), i.forEach((e) => n(e, 'prev'))
				}
				i({
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: 'swiper-button-disabled',
						hiddenClass: 'swiper-button-hidden',
						lockClass: 'swiper-button-lock',
						navigationDisabledClass: 'swiper-navigation-disabled',
					},
				}),
					(t.navigation = { nextEl: null, prevEl: null }),
					n('init', () => {
						!1 === t.params.navigation.enabled ? h() : (u(), a())
					}),
					n('toEdge fromEdge lock unlock', () => {
						a()
					}),
					n('destroy', () => {
						d()
					}),
					n('enable disable', () => {
						let { nextEl: e, prevEl: i } = t.navigation
						;(e = Dc(e)),
							(i = Dc(i)),
							t.enabled
								? a()
								: [...e, ...i]
										.filter((e) => !!e)
										.forEach((e) => e.classList.add(t.params.navigation.lockClass))
					}),
					n('click', (e, i) => {
						let { nextEl: n, prevEl: r } = t.navigation
						;(n = Dc(n)), (r = Dc(r))
						const o = i.target
						let a = r.includes(o) || n.includes(o)
						if (t.isElement && !a) {
							const e = i.path || (i.composedPath && i.composedPath())
							e && (a = e.find((e) => n.includes(e) || r.includes(e)))
						}
						if (t.params.navigation.hideOnClick && !a) {
							if (
								t.pagination &&
								t.params.pagination &&
								t.params.pagination.clickable &&
								(t.pagination.el === o || t.pagination.el.contains(o))
							)
								return
							let e
							n.length
								? (e = n[0].classList.contains(t.params.navigation.hiddenClass))
								: r.length &&
								  (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
								s(!0 === e ? 'navigationShow' : 'navigationHide'),
								[...n, ...r]
									.filter((e) => !!e)
									.forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass))
						}
					})
				const h = () => {
					t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')),
						d()
				}
				Object.assign(t.navigation, {
					enable: () => {
						t.el.classList.remove(
							...t.params.navigation.navigationDisabledClass.split(' ')
						),
							u(),
							a()
					},
					disable: h,
					update: a,
					init: u,
					destroy: d,
				})
			}
			function iu(e) {
				return (
					void 0 === e && (e = ''),
					`.${e
						.trim()
						.replace(/([\.:!+\/])/g, '\\$1')
						.replace(/ /g, '.')}`
				)
			}
			function nu(e) {
				let { swiper: t, extendParams: i, on: n, emit: s } = e
				const r = 'swiper-pagination'
				let o
				i({
					pagination: {
						el: null,
						bulletElement: 'span',
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: 'bullets',
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: (e) => e,
						formatFractionTotal: (e) => e,
						bulletClass: `${r}-bullet`,
						bulletActiveClass: `${r}-bullet-active`,
						modifierClass: `${r}-`,
						currentClass: `${r}-current`,
						totalClass: `${r}-total`,
						hiddenClass: `${r}-hidden`,
						progressbarFillClass: `${r}-progressbar-fill`,
						progressbarOppositeClass: `${r}-progressbar-opposite`,
						clickableClass: `${r}-clickable`,
						lockClass: `${r}-lock`,
						horizontalClass: `${r}-horizontal`,
						verticalClass: `${r}-vertical`,
						paginationDisabledClass: `${r}-disabled`,
					},
				}),
					(t.pagination = { el: null, bullets: [] })
				let a = 0
				function l() {
					return (
						!t.params.pagination.el ||
						!t.pagination.el ||
						(Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
					)
				}
				function c(e, i) {
					const { bulletActiveClass: n } = t.params.pagination
					e &&
						(e = e[('prev' === i ? 'previous' : 'next') + 'ElementSibling']) &&
						(e.classList.add(`${n}-${i}`),
						(e = e[('prev' === i ? 'previous' : 'next') + 'ElementSibling']) &&
							e.classList.add(`${n}-${i}-${i}`))
				}
				function u(e) {
					const i = e.target.closest(iu(t.params.pagination.bulletClass))
					if (!i) return
					e.preventDefault()
					const n = vc(i) * t.params.slidesPerGroup
					if (t.params.loop) {
						if (t.realIndex === n) return
						const e =
							((s = t.realIndex),
							(r = n),
							(r %= o = t.slides.length) == 1 + (s %= o)
								? 'next'
								: r === s - 1
								? 'previous'
								: void 0)
						'next' === e
							? t.slideNext()
							: 'previous' === e
							? t.slidePrev()
							: t.slideToLoop(n)
					} else t.slideTo(n)
					var s, r, o
				}
				function d() {
					const e = t.rtl,
						i = t.params.pagination
					if (l()) return
					let n,
						r,
						u = t.pagination.el
					u = Dc(u)
					const d =
							t.virtual && t.params.virtual.enabled
								? t.virtual.slides.length
								: t.slides.length,
						h = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length
					if (
						(t.params.loop
							? ((r = t.previousRealIndex || 0),
							  (n =
									t.params.slidesPerGroup > 1
										? Math.floor(t.realIndex / t.params.slidesPerGroup)
										: t.realIndex))
							: void 0 !== t.snapIndex
							? ((n = t.snapIndex), (r = t.previousSnapIndex))
							: ((r = t.previousIndex || 0), (n = t.activeIndex || 0)),
						'bullets' === i.type &&
							t.pagination.bullets &&
							t.pagination.bullets.length > 0)
					) {
						const s = t.pagination.bullets
						let l, d, h
						if (
							(i.dynamicBullets &&
								((o = yc(s[0], t.isHorizontal() ? 'width' : 'height', !0)),
								u.forEach((e) => {
									e.style[t.isHorizontal() ? 'width' : 'height'] =
										o * (i.dynamicMainBullets + 4) + 'px'
								}),
								i.dynamicMainBullets > 1 &&
									void 0 !== r &&
									((a += n - (r || 0)),
									a > i.dynamicMainBullets - 1
										? (a = i.dynamicMainBullets - 1)
										: a < 0 && (a = 0)),
								(l = Math.max(n - a, 0)),
								(d = l + (Math.min(s.length, i.dynamicMainBullets) - 1)),
								(h = (d + l) / 2)),
							s.forEach((e) => {
								const t = [
									...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
										(e) => `${i.bulletActiveClass}${e}`
									),
								]
									.map((e) =>
										'string' == typeof e && e.includes(' ') ? e.split(' ') : e
									)
									.flat()
								e.classList.remove(...t)
							}),
							u.length > 1)
						)
							s.forEach((e) => {
								const s = vc(e)
								s === n
									? e.classList.add(...i.bulletActiveClass.split(' '))
									: t.isElement && e.setAttribute('part', 'bullet'),
									i.dynamicBullets &&
										(s >= l &&
											s <= d &&
											e.classList.add(...`${i.bulletActiveClass}-main`.split(' ')),
										s === l && c(e, 'prev'),
										s === d && c(e, 'next'))
							})
						else {
							const e = s[n]
							if (
								(e && e.classList.add(...i.bulletActiveClass.split(' ')),
								t.isElement &&
									s.forEach((e, t) => {
										e.setAttribute('part', t === n ? 'bullet-active' : 'bullet')
									}),
								i.dynamicBullets)
							) {
								const e = s[l],
									t = s[d]
								for (let e = l; e <= d; e += 1)
									s[e] && s[e].classList.add(...`${i.bulletActiveClass}-main`.split(' '))
								c(e, 'prev'), c(t, 'next')
							}
						}
						if (i.dynamicBullets) {
							const n = Math.min(s.length, i.dynamicMainBullets + 4),
								r = (o * n - o) / 2 - h * o,
								a = e ? 'right' : 'left'
							s.forEach((e) => {
								e.style[t.isHorizontal() ? a : 'top'] = `${r}px`
							})
						}
					}
					u.forEach((e, r) => {
						if (
							('fraction' === i.type &&
								(e.querySelectorAll(iu(i.currentClass)).forEach((e) => {
									e.textContent = i.formatFractionCurrent(n + 1)
								}),
								e.querySelectorAll(iu(i.totalClass)).forEach((e) => {
									e.textContent = i.formatFractionTotal(h)
								})),
							'progressbar' === i.type)
						) {
							let s
							s = i.progressbarOpposite
								? t.isHorizontal()
									? 'vertical'
									: 'horizontal'
								: t.isHorizontal()
								? 'horizontal'
								: 'vertical'
							const r = (n + 1) / h
							let o = 1,
								a = 1
							'horizontal' === s ? (o = r) : (a = r),
								e.querySelectorAll(iu(i.progressbarFillClass)).forEach((e) => {
									;(e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${a})`),
										(e.style.transitionDuration = `${t.params.speed}ms`)
								})
						}
						'custom' === i.type && i.renderCustom
							? ((e.innerHTML = i.renderCustom(t, n + 1, h)),
							  0 === r && s('paginationRender', e))
							: (0 === r && s('paginationRender', e), s('paginationUpdate', e)),
							t.params.watchOverflow &&
								t.enabled &&
								e.classList[t.isLocked ? 'add' : 'remove'](i.lockClass)
					})
				}
				function h() {
					const e = t.params.pagination
					if (l()) return
					const i =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.grid && t.params.grid.rows > 1
							? t.slides.length / Math.ceil(t.params.grid.rows)
							: t.slides.length
					let n = t.pagination.el
					n = Dc(n)
					let r = ''
					if ('bullets' === e.type) {
						let n = t.params.loop
							? Math.ceil(i / t.params.slidesPerGroup)
							: t.snapGrid.length
						t.params.freeMode && t.params.freeMode.enabled && n > i && (n = i)
						for (let i = 0; i < n; i += 1)
							e.renderBullet
								? (r += e.renderBullet.call(t, i, e.bulletClass))
								: (r += `<${e.bulletElement} ${
										t.isElement ? 'part="bullet"' : ''
								  } class="${e.bulletClass}"></${e.bulletElement}>`)
					}
					'fraction' === e.type &&
						(r = e.renderFraction
							? e.renderFraction.call(t, e.currentClass, e.totalClass)
							: `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
						'progressbar' === e.type &&
							(r = e.renderProgressbar
								? e.renderProgressbar.call(t, e.progressbarFillClass)
								: `<span class="${e.progressbarFillClass}"></span>`),
						(t.pagination.bullets = []),
						n.forEach((i) => {
							'custom' !== e.type && (i.innerHTML = r || ''),
								'bullets' === e.type &&
									t.pagination.bullets.push(...i.querySelectorAll(iu(e.bulletClass)))
						}),
						'custom' !== e.type && s('paginationRender', n[0])
				}
				function p() {
					t.params.pagination = eu(t, t.originalParams.pagination, t.params.pagination, {
						el: 'swiper-pagination',
					})
					const e = t.params.pagination
					if (!e.el) return
					let i
					'string' == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)),
						i || 'string' != typeof e.el || (i = [...document.querySelectorAll(e.el)]),
						i || (i = e.el),
						i &&
							0 !== i.length &&
							(t.params.uniqueNavElements &&
								'string' == typeof e.el &&
								Array.isArray(i) &&
								i.length > 1 &&
								((i = [...t.el.querySelectorAll(e.el)]),
								i.length > 1 && (i = i.filter((e) => bc(e, '.swiper')[0] === t.el)[0])),
							Array.isArray(i) && 1 === i.length && (i = i[0]),
							Object.assign(t.pagination, { el: i }),
							(i = Dc(i)),
							i.forEach((i) => {
								'bullets' === e.type &&
									e.clickable &&
									i.classList.add(...(e.clickableClass || '').split(' ')),
									i.classList.add(e.modifierClass + e.type),
									i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
									'bullets' === e.type &&
										e.dynamicBullets &&
										(i.classList.add(`${e.modifierClass}${e.type}-dynamic`),
										(a = 0),
										e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
									'progressbar' === e.type &&
										e.progressbarOpposite &&
										i.classList.add(e.progressbarOppositeClass),
									e.clickable && i.addEventListener('click', u),
									t.enabled || i.classList.add(e.lockClass)
							}))
				}
				function f() {
					const e = t.params.pagination
					if (l()) return
					let i = t.pagination.el
					i &&
						((i = Dc(i)),
						i.forEach((i) => {
							i.classList.remove(e.hiddenClass),
								i.classList.remove(e.modifierClass + e.type),
								i.classList.remove(
									t.isHorizontal() ? e.horizontalClass : e.verticalClass
								),
								e.clickable &&
									(i.classList.remove(...(e.clickableClass || '').split(' ')),
									i.removeEventListener('click', u))
						})),
						t.pagination.bullets &&
							t.pagination.bullets.forEach((t) =>
								t.classList.remove(...e.bulletActiveClass.split(' '))
							)
				}
				n('changeDirection', () => {
					if (!t.pagination || !t.pagination.el) return
					const e = t.params.pagination
					let { el: i } = t.pagination
					;(i = Dc(i)),
						i.forEach((i) => {
							i.classList.remove(e.horizontalClass, e.verticalClass),
								i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
						})
				}),
					n('init', () => {
						!1 === t.params.pagination.enabled ? g() : (p(), h(), d())
					}),
					n('activeIndexChange', () => {
						void 0 === t.snapIndex && d()
					}),
					n('snapIndexChange', () => {
						d()
					}),
					n('snapGridLengthChange', () => {
						h(), d()
					}),
					n('destroy', () => {
						f()
					}),
					n('enable disable', () => {
						let { el: e } = t.pagination
						e &&
							((e = Dc(e)),
							e.forEach((e) =>
								e.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass)
							))
					}),
					n('lock unlock', () => {
						d()
					}),
					n('click', (e, i) => {
						const n = i.target,
							r = Dc(t.pagination.el)
						if (
							t.params.pagination.el &&
							t.params.pagination.hideOnClick &&
							r &&
							r.length > 0 &&
							!n.classList.contains(t.params.pagination.bulletClass)
						) {
							if (
								t.navigation &&
								((t.navigation.nextEl && n === t.navigation.nextEl) ||
									(t.navigation.prevEl && n === t.navigation.prevEl))
							)
								return
							const e = r[0].classList.contains(t.params.pagination.hiddenClass)
							s(!0 === e ? 'paginationShow' : 'paginationHide'),
								r.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass))
						}
					})
				const g = () => {
					t.el.classList.add(t.params.pagination.paginationDisabledClass)
					let { el: e } = t.pagination
					e &&
						((e = Dc(e)),
						e.forEach((e) =>
							e.classList.add(t.params.pagination.paginationDisabledClass)
						)),
						f()
				}
				Object.assign(t.pagination, {
					enable: () => {
						t.el.classList.remove(t.params.pagination.paginationDisabledClass)
						let { el: e } = t.pagination
						e &&
							((e = Dc(e)),
							e.forEach((e) =>
								e.classList.remove(t.params.pagination.paginationDisabledClass)
							)),
							p(),
							h(),
							d()
					},
					disable: g,
					render: h,
					update: d,
					init: p,
					destroy: f,
				})
			}
			var su, ru
			if (
				(Object.keys(Kc).forEach((e) => {
					Object.keys(Kc[e]).forEach((t) => {
						Qc.prototype[t] = Kc[e][t]
					})
				}),
				Qc.use([
					function (e) {
						let { swiper: t, on: i, emit: n } = e
						const s = oc()
						let r = null,
							o = null
						const a = () => {
								t && !t.destroyed && t.initialized && (n('beforeResize'), n('resize'))
							},
							l = () => {
								t && !t.destroyed && t.initialized && n('orientationchange')
							}
						i('init', () => {
							t.params.resizeObserver && void 0 !== s.ResizeObserver
								? t &&
								  !t.destroyed &&
								  t.initialized &&
								  ((r = new ResizeObserver((e) => {
										o = s.requestAnimationFrame(() => {
											const { width: i, height: n } = t
											let s = i,
												r = n
											e.forEach((e) => {
												let { contentBoxSize: i, contentRect: n, target: o } = e
												;(o && o !== t.el) ||
													((s = n ? n.width : (i[0] || i).inlineSize),
													(r = n ? n.height : (i[0] || i).blockSize))
											}),
												(s === i && r === n) || a()
										})
								  })),
								  r.observe(t.el))
								: (s.addEventListener('resize', a),
								  s.addEventListener('orientationchange', l))
						}),
							i('destroy', () => {
								o && s.cancelAnimationFrame(o),
									r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
									s.removeEventListener('resize', a),
									s.removeEventListener('orientationchange', l)
							})
					},
					function (e) {
						let { swiper: t, extendParams: i, on: n, emit: s } = e
						const r = [],
							o = oc(),
							a = function (e, i) {
								void 0 === i && (i = {})
								const n = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
									if (t.__preventObserver__) return
									if (1 === e.length) return void s('observerUpdate', e[0])
									const i = function () {
										s('observerUpdate', e[0])
									}
									o.requestAnimationFrame
										? o.requestAnimationFrame(i)
										: o.setTimeout(i, 0)
								})
								n.observe(e, {
									attributes: void 0 === i.attributes || i.attributes,
									childList: t.isElement || (void 0 === i.childList || i).childList,
									characterData: void 0 === i.characterData || i.characterData,
								}),
									r.push(n)
							}
						i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
							n('init', () => {
								if (t.params.observer) {
									if (t.params.observeParents) {
										const e = bc(t.hostEl)
										for (let t = 0; t < e.length; t += 1) a(e[t])
									}
									a(t.hostEl, { childList: t.params.observeSlideChildren }),
										a(t.wrapperEl, { attributes: !1 })
								}
							}),
							n('destroy', () => {
								r.forEach((e) => {
									e.disconnect()
								}),
									r.splice(0, r.length)
							})
					},
				]),
				!Dl &&
					wl &&
					new Qc('.reviews__slider', {
						modules: [tu, nu],
						allowTouchMove: !0,
						speed: 1e3,
						autoHeight: !0,
						pagination: {
							el: '.swiper-pagination',
							type: 'custom',
							renderCustom: function (e, t, i) {
								return `<span class="reviews__pagination-current">0${t}</span><span class="reviews__pagination-total">/0${i}</span>`
							},
						},
						navigation: { nextEl: '.reviews__nav-next', prevEl: '.reviews__nav-prev' },
					}),
				!Dl &&
					xl &&
					new Qc('.team__slider', {
						modules: [tu, nu],
						allowTouchMove: !0,
						speed: 1e3,
						autoHeight: !0,
						pagination: {
							el: '.swiper-pagination',
							type: 'custom',
							renderCustom: function (e, t, i) {
								return `<span class="team__pagination-current">${t}</span><span class="team__pagination-total">/${i}</span>`
							},
						},
						navigation: { nextEl: '.team__nav-next', prevEl: '.team__nav-prev' },
						on: {
							init: function () {
								;(su = document.querySelector('.team__pagination-current')),
									(ru = su.innerHTML),
									(su.innerHTML = '0' + ru)
							},
							slideChange: function () {
								;(su = document.querySelector('.team__pagination-current')),
									(ru = su.innerHTML) < 10
										? ((ru = '0' + ru), (su.innerHTML = ru))
										: (su.innerHTML = ru)
							},
						},
					}),
				!Dl)
			) {
				const e = document.querySelector('.header__menu'),
					t = document.querySelector('.header__hamburger-btn'),
					i = document.querySelectorAll('.header__hamburger-btn, .header__menu-item'),
					n = document.querySelector('.fixed-nav')
				i.forEach((i) => {
					i.addEventListener('click', () => {
						t.classList.toggle('active'),
							e.classList.toggle('active'),
							document.body.classList.toggle('scroll-disabled')
						let s = i.classList.contains('active')
						wl &&
							(s
								? ((t.innerHTML = 'Close'), n.classList.add('hamburger-active'))
								: ((t.innerHTML = 'Menu'), n.classList.remove('hamburger-active')))
					})
				})
			}
			document.querySelectorAll('input, textarea').forEach((e) => {
				e.addEventListener('focus', function () {
					this.parentElement.classList.add('focus')
				}),
					e.addEventListener('blur', function () {
						0 === this.value.length
							? this.parentElement.classList.remove('focus')
							: this.parentElement.classList.add('focus')
					})
			})
			const ou = document.querySelectorAll('.select')
			ou &&
				ou.forEach((e) => {
					const t = e.querySelector('.select__heading'),
						i = e.querySelector('.select__dropdown'),
						n = e.querySelector('.select__input'),
						s = e.querySelectorAll('.select__item')
					t.addEventListener('click', (e) => {
						t.classList.toggle('active'),
							t.classList.contains('active')
								? Bs.to(i, { duration: 0.7, ease: 'power4.easeIn', height: 'auto' })
								: Bs.to(i, { duration: 0.7, ease: 'power4.out', height: 0 })
					}),
						s.forEach((e) => {
							e.addEventListener('click', () => {
								;(n.value = e.dataset.value),
									t.classList.remove('active'),
									Bs.to(i, { duration: 0.7, ease: 'power4.out', height: 0 }),
									t.classList.add('focus')
							})
						}),
						document.addEventListener('click', (n) => {
							e.contains(n.target) ||
								(t.classList.remove('active'),
								Bs.to(i, { duration: 0.7, ease: 'power4.out', height: 0 }))
						})
				}),
				document.addEventListener('DOMContentLoaded', function () {
					document.querySelectorAll('form').forEach((e) => {
						e.addEventListener('submit', async function (t) {
							t.preventDefault()
							let i = new FormData(e)
							;(await fetch('mail.php', { method: 'POST', body: i })).ok
								? (Fancybox.close(),
								  Fancybox.show([{ src: '#modal-success', type: 'inline' }]),
								  setTimeout(() => {
										e.reset()
								  }, 1e3))
								: alert('Error! Please try again later.')
						})
					})
				}),
				document.querySelectorAll('.dropdown__trigger').forEach((e) => {
					e.addEventListener('click', () => {
						const t = e.closest('.dropdown').querySelector('.dropdown__body')
						e.classList.toggle('active'),
							e.classList.contains('active')
								? Bs.to(t, { duration: 0.7, ease: 'power4.easeIn', height: 'auto' })
								: Bs.to(t, { duration: 0.7, ease: 'power4.out', height: 0 })
					})
				})
			const au = (e, t = 1e4) => (
					(e = parseFloat(e + '') || 0), Math.round((e + Number.EPSILON) * t) / t
				),
				lu = function (e) {
					if (!(e && e instanceof Element && e.offsetParent)) return !1
					const t = e.scrollHeight > e.clientHeight,
						i = window.getComputedStyle(e).overflowY,
						n = -1 !== i.indexOf('hidden'),
						s = -1 !== i.indexOf('visible')
					return t && !n && !s
				},
				cu = function (e, t = void 0) {
					return (
						!(!e || e === document.body || (t && e === t)) &&
						(lu(e) ? e : cu(e.parentElement, t))
					)
				},
				uu = function (e) {
					var t = new DOMParser().parseFromString(e, 'text/html').body
					if (t.childElementCount > 1) {
						for (var i = document.createElement('div'); t.firstChild; )
							i.appendChild(t.firstChild)
						return i
					}
					return t.firstChild
				},
				du = (e) => `${e || ''}`.split(' ').filter((e) => !!e),
				hu = (e, t, i) => {
					e &&
						du(t).forEach((t) => {
							e.classList.toggle(t, i || !1)
						})
				}
			class pu {
				constructor(e) {
					Object.defineProperty(this, 'pageX', {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: void 0,
					}),
						Object.defineProperty(this, 'pageY', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'clientX', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'clientY', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'id', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'time', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'nativePointer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						(this.nativePointer = e),
						(this.pageX = e.pageX),
						(this.pageY = e.pageY),
						(this.clientX = e.clientX),
						(this.clientY = e.clientY),
						(this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
						(this.time = Date.now())
				}
			}
			const fu = { passive: !1 }
			class gu {
				constructor(e, { start: t = () => !0, move: i = () => {}, end: n = () => {} }) {
					Object.defineProperty(this, 'element', {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: void 0,
					}),
						Object.defineProperty(this, 'startCallback', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'moveCallback', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'endCallback', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'currentPointers', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						Object.defineProperty(this, 'startPointers', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						(this.element = e),
						(this.startCallback = t),
						(this.moveCallback = i),
						(this.endCallback = n)
					for (const e of [
						'onPointerStart',
						'onTouchStart',
						'onMove',
						'onTouchEnd',
						'onPointerEnd',
						'onWindowBlur',
					])
						this[e] = this[e].bind(this)
					this.element.addEventListener('mousedown', this.onPointerStart, fu),
						this.element.addEventListener('touchstart', this.onTouchStart, fu),
						this.element.addEventListener('touchmove', this.onMove, fu),
						this.element.addEventListener('touchend', this.onTouchEnd),
						this.element.addEventListener('touchcancel', this.onTouchEnd)
				}
				onPointerStart(e) {
					if (!e.buttons || 0 !== e.button) return
					const t = new pu(e)
					this.currentPointers.some((e) => e.id === t.id) ||
						(this.triggerPointerStart(t, e) &&
							(window.addEventListener('mousemove', this.onMove),
							window.addEventListener('mouseup', this.onPointerEnd),
							window.addEventListener('blur', this.onWindowBlur)))
				}
				onTouchStart(e) {
					for (const t of Array.from(e.changedTouches || []))
						this.triggerPointerStart(new pu(t), e)
					window.addEventListener('blur', this.onWindowBlur)
				}
				onMove(e) {
					const t = this.currentPointers.slice(),
						i =
							'changedTouches' in e
								? Array.from(e.changedTouches || []).map((e) => new pu(e))
								: [new pu(e)],
						n = []
					for (const e of i) {
						const t = this.currentPointers.findIndex((t) => t.id === e.id)
						t < 0 || (n.push(e), (this.currentPointers[t] = e))
					}
					n.length && this.moveCallback(e, this.currentPointers.slice(), t)
				}
				onPointerEnd(e) {
					;(e.buttons > 0 && 0 !== e.button) ||
						(this.triggerPointerEnd(e, new pu(e)),
						window.removeEventListener('mousemove', this.onMove),
						window.removeEventListener('mouseup', this.onPointerEnd),
						window.removeEventListener('blur', this.onWindowBlur))
				}
				onTouchEnd(e) {
					for (const t of Array.from(e.changedTouches || []))
						this.triggerPointerEnd(e, new pu(t))
				}
				triggerPointerStart(e, t) {
					return (
						!!this.startCallback(t, e, this.currentPointers.slice()) &&
						(this.currentPointers.push(e), this.startPointers.push(e), !0)
					)
				}
				triggerPointerEnd(e, t) {
					const i = this.currentPointers.findIndex((e) => e.id === t.id)
					i < 0 ||
						(this.currentPointers.splice(i, 1),
						this.startPointers.splice(i, 1),
						this.endCallback(e, t, this.currentPointers.slice()))
				}
				onWindowBlur() {
					this.clear()
				}
				clear() {
					for (; this.currentPointers.length; ) {
						const e = this.currentPointers[this.currentPointers.length - 1]
						this.currentPointers.splice(this.currentPointers.length - 1, 1),
							this.startPointers.splice(this.currentPointers.length - 1, 1),
							this.endCallback(
								new Event('touchend', {
									bubbles: !0,
									cancelable: !0,
									clientX: e.clientX,
									clientY: e.clientY,
								}),
								e,
								this.currentPointers.slice()
							)
					}
				}
				stop() {
					this.element.removeEventListener('mousedown', this.onPointerStart, fu),
						this.element.removeEventListener('touchstart', this.onTouchStart, fu),
						this.element.removeEventListener('touchmove', this.onMove, fu),
						this.element.removeEventListener('touchend', this.onTouchEnd),
						this.element.removeEventListener('touchcancel', this.onTouchEnd),
						window.removeEventListener('mousemove', this.onMove),
						window.removeEventListener('mouseup', this.onPointerEnd),
						window.removeEventListener('blur', this.onWindowBlur)
				}
			}
			function mu(e, t) {
				return t
					? Math.sqrt(
							Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2)
					  )
					: 0
			}
			function vu(e, t) {
				return t
					? { clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2 }
					: e
			}
			const bu = (e) =>
					'object' == typeof e &&
					null !== e &&
					e.constructor === Object &&
					'[object Object]' === Object.prototype.toString.call(e),
				yu = (e, ...t) => {
					const i = t.length
					for (let n = 0; n < i; n++) {
						const i = t[n] || {}
						Object.entries(i).forEach(([t, i]) => {
							const n = Array.isArray(i) ? [] : {}
							e[t] || Object.assign(e, { [t]: n }),
								bu(i)
									? Object.assign(e[t], yu(n, i))
									: Array.isArray(i)
									? Object.assign(e, { [t]: [...i] })
									: Object.assign(e, { [t]: i })
						})
					}
					return e
				},
				Du = function (e, t) {
					return e.split('.').reduce((e, t) => ('object' == typeof e ? e[t] : void 0), t)
				}
			class wu {
				constructor(e = {}) {
					Object.defineProperty(this, 'options', {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					}),
						Object.defineProperty(this, 'events', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: new Map(),
						}),
						this.setOptions(e)
					for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
						e.startsWith('on') &&
							'function' == typeof this[e] &&
							(this[e] = this[e].bind(this))
				}
				setOptions(e) {
					this.options = e ? yu({}, this.constructor.defaults, e) : {}
					for (const [e, t] of Object.entries(this.option('on') || {})) this.on(e, t)
				}
				option(e, ...t) {
					let i = Du(e, this.options)
					return i && 'function' == typeof i && (i = i.call(this, this, ...t)), i
				}
				optionFor(e, t, i, ...n) {
					let s = Du(t, e)
					var r
					'string' != typeof (r = s) ||
						isNaN(r) ||
						isNaN(parseFloat(r)) ||
						(s = parseFloat(s)),
						'true' === s && (s = !0),
						'false' === s && (s = !1),
						s && 'function' == typeof s && (s = s.call(this, this, e, ...n))
					let o = Du(t, this.options)
					return (
						o && 'function' == typeof o
							? (s = o.call(this, this, e, ...n, s))
							: void 0 === s && (s = o),
						void 0 === s ? i : s
					)
				}
				cn(e) {
					const t = this.options.classes
					return (t && t[e]) || ''
				}
				localize(e, t = []) {
					e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
						let n = ''
						return (
							i
								? (n = this.option(`${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`))
								: t && (n = this.option(`l10n.${t}`)),
							n || (n = e),
							n
						)
					})
					for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1])
					return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t)
				}
				on(e, t) {
					let i = []
					'string' == typeof e ? (i = e.split(' ')) : Array.isArray(e) && (i = e),
						this.events || (this.events = new Map()),
						i.forEach((e) => {
							let i = this.events.get(e)
							i || (this.events.set(e, []), (i = [])),
								i.includes(t) || i.push(t),
								this.events.set(e, i)
						})
				}
				off(e, t) {
					let i = []
					'string' == typeof e ? (i = e.split(' ')) : Array.isArray(e) && (i = e),
						i.forEach((e) => {
							const i = this.events.get(e)
							if (Array.isArray(i)) {
								const e = i.indexOf(t)
								e > -1 && i.splice(e, 1)
							}
						})
				}
				emit(e, ...t) {
					;[...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
						'*' !== e && this.emit('*', e, ...t)
				}
			}
			Object.defineProperty(wu, 'version', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: '5.0.36',
			}),
				Object.defineProperty(wu, 'defaults', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				})
			class xu extends wu {
				constructor(e = {}) {
					super(e),
						Object.defineProperty(this, 'plugins', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: {},
						})
				}
				attachPlugins(e = {}) {
					const t = new Map()
					for (const [i, n] of Object.entries(e)) {
						const e = this.option(i),
							s = this.plugins[i]
						s || !1 === e
							? s && !1 === e && (s.detach(), delete this.plugins[i])
							: t.set(i, new n(this, e || {}))
					}
					for (const [e, i] of t) (this.plugins[e] = i), i.attach()
				}
				detachPlugins(e) {
					e = e || Object.keys(this.plugins)
					for (const t of e) {
						const e = this.plugins[t]
						e && e.detach(), delete this.plugins[t]
					}
					return this.emit('detachPlugins'), this
				}
			}
			var Eu
			!(function (e) {
				;(e[(e.Init = 0)] = 'Init'),
					(e[(e.Error = 1)] = 'Error'),
					(e[(e.Ready = 2)] = 'Ready'),
					(e[(e.Panning = 3)] = 'Panning'),
					(e[(e.Mousemove = 4)] = 'Mousemove'),
					(e[(e.Destroy = 5)] = 'Destroy')
			})(Eu || (Eu = {}))
			const _u = ['a', 'b', 'c', 'd', 'e', 'f'],
				Cu = {
					PANUP: 'Move up',
					PANDOWN: 'Move down',
					PANLEFT: 'Move left',
					PANRIGHT: 'Move right',
					ZOOMIN: 'Zoom in',
					ZOOMOUT: 'Zoom out',
					TOGGLEZOOM: 'Toggle zoom level',
					TOGGLE1TO1: 'Toggle zoom level',
					ITERATEZOOM: 'Toggle zoom level',
					ROTATECCW: 'Rotate counterclockwise',
					ROTATECW: 'Rotate clockwise',
					FLIPX: 'Flip horizontally',
					FLIPY: 'Flip vertically',
					FITX: 'Fit horizontally',
					FITY: 'Fit vertically',
					RESET: 'Reset',
					TOGGLEFS: 'Toggle fullscreen',
				},
				Tu = {
					content: null,
					width: 'auto',
					height: 'auto',
					panMode: 'drag',
					touch: !0,
					dragMinThreshold: 3,
					lockAxis: !1,
					mouseMoveFactor: 1,
					mouseMoveFriction: 0.12,
					zoom: !0,
					pinchToZoom: !0,
					panOnlyZoomed: 'auto',
					minScale: 1,
					maxScale: 2,
					friction: 0.25,
					dragFriction: 0.35,
					decelFriction: 0.05,
					click: 'toggleZoom',
					dblClick: !1,
					wheel: 'zoom',
					wheelLimit: 7,
					spinner: !0,
					bounds: 'auto',
					infinite: !1,
					rubberband: !0,
					bounce: !0,
					maxVelocity: 75,
					transformParent: !1,
					classes: {
						content: 'f-panzoom__content',
						isLoading: 'is-loading',
						canZoomIn: 'can-zoom_in',
						canZoomOut: 'can-zoom_out',
						isDraggable: 'is-draggable',
						isDragging: 'is-dragging',
						inFullscreen: 'in-fullscreen',
						htmlHasFullscreen: 'with-panzoom-in-fullscreen',
					},
					l10n: Cu,
				},
				Su = '<circle cx="25" cy="25" r="20"></circle>',
				Mu =
					'<div class="f-spinner"><svg viewBox="0 0 50 50">' + Su + Su + '</svg></div>',
				Pu = (e) => e && null !== e && e instanceof Element && 'nodeType' in e,
				Fu = (e, t) => {
					e &&
						du(t).forEach((t) => {
							e.classList.remove(t)
						})
				},
				Au = (e, t) => {
					e &&
						du(t).forEach((t) => {
							e.classList.add(t)
						})
				},
				Ou = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
				Lu = 1e4,
				ku = 'mousemove',
				zu = 'drag',
				Ru = 'content',
				Iu = 'auto'
			let Bu = null,
				Nu = null
			class ju extends xu {
				get fits() {
					return (
						this.contentRect.width - this.contentRect.fitWidth < 1 &&
						this.contentRect.height - this.contentRect.fitHeight < 1
					)
				}
				get isTouchDevice() {
					return null === Nu && (Nu = window.matchMedia('(hover: none)').matches), Nu
				}
				get isMobile() {
					return (
						null === Bu && (Bu = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
						Bu
					)
				}
				get panMode() {
					return this.options.panMode !== ku || this.isTouchDevice ? zu : ku
				}
				get panOnlyZoomed() {
					const e = this.options.panOnlyZoomed
					return e === Iu ? this.isTouchDevice : e
				}
				get isInfinite() {
					return this.option('infinite')
				}
				get angle() {
					return (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
				}
				get targetAngle() {
					return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0
				}
				get scale() {
					const { a: e, b: t } = this.current
					return Math.sqrt(e * e + t * t) || 1
				}
				get targetScale() {
					const { a: e, b: t } = this.target
					return Math.sqrt(e * e + t * t) || 1
				}
				get minScale() {
					return this.option('minScale') || 1
				}
				get fullScale() {
					const { contentRect: e } = this
					return e.fullWidth / e.fitWidth || 1
				}
				get maxScale() {
					return this.fullScale * (this.option('maxScale') || 1) || 1
				}
				get coverScale() {
					const { containerRect: e, contentRect: t } = this,
						i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1
					return Math.min(this.fullScale, i)
				}
				get isScaling() {
					return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
				}
				get isContentLoading() {
					const e = this.content
					return !!(e && e instanceof HTMLImageElement) && !e.complete
				}
				get isResting() {
					if (this.isBouncingX || this.isBouncingY) return !1
					for (const e of _u) {
						const t = 'e' == e || 'f' === e ? 1e-4 : 1e-5
						if (Math.abs(this.target[e] - this.current[e]) > t) return !1
					}
					return !(!this.ignoreBounds && !this.checkBounds().inBounds)
				}
				constructor(e, t = {}, i = {}) {
					var n
					if (
						(super(t),
						Object.defineProperty(this, 'pointerTracker', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'resizeObserver', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'updateTimer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'clickTimer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'rAF', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'isTicking', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'ignoreBounds', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'isBouncingX', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'isBouncingY', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'clicks', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'trackingPoints', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						Object.defineProperty(this, 'pwt', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'cwd', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'pmme', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'friction', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: Eu.Init,
						}),
						Object.defineProperty(this, 'isDragging', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'content', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'spinner', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'containerRect', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
						}),
						Object.defineProperty(this, 'contentRect', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								fullWidth: 0,
								fullHeight: 0,
								fitWidth: 0,
								fitHeight: 0,
								width: 0,
								height: 0,
							},
						}),
						Object.defineProperty(this, 'dragStart', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
						}),
						Object.defineProperty(this, 'dragOffset', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: { x: 0, y: 0, time: 0 },
						}),
						Object.defineProperty(this, 'current', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: Object.assign({}, Ou),
						}),
						Object.defineProperty(this, 'target', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: Object.assign({}, Ou),
						}),
						Object.defineProperty(this, 'velocity', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
						}),
						Object.defineProperty(this, 'lockedAxis', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						!e)
					)
						throw new Error('Container Element Not Found')
					;(this.container = e),
						this.initContent(),
						this.attachPlugins(Object.assign(Object.assign({}, ju.Plugins), i)),
						this.emit('attachPlugins'),
						this.emit('init')
					const s = this.content
					if (
						(s.addEventListener('load', this.onLoad),
						s.addEventListener('error', this.onError),
						this.isContentLoading)
					) {
						if (this.option('spinner')) {
							e.classList.add(this.cn('isLoading'))
							const t = uu(Mu)
							!e.contains(s) || s.parentElement instanceof HTMLPictureElement
								? (this.spinner = e.appendChild(t))
								: (this.spinner =
										(null === (n = s.parentElement) || void 0 === n
											? void 0
											: n.insertBefore(t, s)) || null)
						}
						this.emit('beforeLoad')
					} else
						queueMicrotask(() => {
							this.enable()
						})
				}
				initContent() {
					const { container: e } = this,
						t = this.cn(Ru)
					let i = this.option(Ru) || e.querySelector(`.${t}`)
					if (
						(i ||
							((i = e.querySelector('img,picture') || e.firstElementChild),
							i && Au(i, t)),
						i instanceof HTMLPictureElement && (i = i.querySelector('img')),
						!i)
					)
						throw new Error('No content found')
					this.content = i
				}
				onLoad() {
					const { spinner: e, container: t, state: i } = this
					e && (e.remove(), (this.spinner = null)),
						this.option('spinner') && t.classList.remove(this.cn('isLoading')),
						this.emit('afterLoad'),
						i === Eu.Init ? this.enable() : this.updateMetrics()
				}
				onError() {
					this.state !== Eu.Destroy &&
						(this.spinner && (this.spinner.remove(), (this.spinner = null)),
						this.stop(),
						this.detachEvents(),
						(this.state = Eu.Error),
						this.emit('error'))
				}
				getNextScale(e) {
					const {
						fullScale: t,
						targetScale: i,
						coverScale: n,
						maxScale: s,
						minScale: r,
					} = this
					let o = r
					switch (e) {
						case 'toggleMax':
							o = i - r < 0.5 * (s - r) ? s : r
							break
						case 'toggleCover':
							o = i - r < 0.5 * (n - r) ? n : r
							break
						case 'toggleZoom':
							o = i - r < 0.5 * (t - r) ? t : r
							break
						case 'iterateZoom':
							let e = [1, t, s].sort((e, t) => e - t),
								a = e.findIndex((e) => e > i + 1e-5)
							o = e[a] || 1
					}
					return o
				}
				attachObserver() {
					var e
					const t = () => {
						const { container: e, containerRect: t } = this
						return (
							Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
							Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
						)
					}
					this.resizeObserver ||
						void 0 === window.ResizeObserver ||
						(this.resizeObserver = new ResizeObserver(() => {
							this.updateTimer ||
								(t()
									? (this.onResize(),
									  this.isMobile &&
											(this.updateTimer = setTimeout(() => {
												t() && this.onResize(), (this.updateTimer = null)
											}, 500)))
									: this.updateTimer &&
									  (clearTimeout(this.updateTimer), (this.updateTimer = null)))
						})),
						null === (e = this.resizeObserver) ||
							void 0 === e ||
							e.observe(this.container)
				}
				detachObserver() {
					var e
					null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
				}
				attachEvents() {
					const { container: e } = this
					e.addEventListener('click', this.onClick, { passive: !1, capture: !1 }),
						e.addEventListener('wheel', this.onWheel, { passive: !1 }),
						(this.pointerTracker = new gu(e, {
							start: this.onPointerDown,
							move: this.onPointerMove,
							end: this.onPointerUp,
						})),
						document.addEventListener(ku, this.onMouseMove)
				}
				detachEvents() {
					var e
					const { container: t } = this
					t.removeEventListener('click', this.onClick, { passive: !1, capture: !1 }),
						t.removeEventListener('wheel', this.onWheel, { passive: !1 }),
						null === (e = this.pointerTracker) || void 0 === e || e.stop(),
						(this.pointerTracker = null),
						document.removeEventListener(ku, this.onMouseMove),
						document.removeEventListener('keydown', this.onKeydown, !0),
						this.clickTimer && (clearTimeout(this.clickTimer), (this.clickTimer = null)),
						this.updateTimer &&
							(clearTimeout(this.updateTimer), (this.updateTimer = null))
				}
				animate() {
					this.setTargetForce()
					const e = this.friction,
						t = this.option('maxVelocity')
					for (const i of _u)
						e
							? ((this.velocity[i] *= 1 - e),
							  t &&
									!this.isScaling &&
									(this.velocity[i] = Math.max(Math.min(this.velocity[i], t), -1 * t)),
							  (this.current[i] += this.velocity[i]))
							: (this.current[i] = this.target[i])
					this.setTransform(),
						this.setEdgeForce(),
						!this.isResting || this.isDragging
							? (this.rAF = requestAnimationFrame(() => this.animate()))
							: this.stop('current')
				}
				setTargetForce() {
					for (const e of _u)
						('e' === e && this.isBouncingX) ||
							('f' === e && this.isBouncingY) ||
							(this.velocity[e] =
								(1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]))
				}
				checkBounds(e = 0, t = 0) {
					const { current: i } = this,
						n = i.e + e,
						s = i.f + t,
						r = this.getBounds(),
						{ x: o, y: a } = r,
						l = o.min,
						c = o.max,
						u = a.min,
						d = a.max
					let h = 0,
						p = 0
					return (
						l !== 1 / 0 && n < l ? (h = l - n) : c !== 1 / 0 && n > c && (h = c - n),
						u !== 1 / 0 && s < u ? (p = u - s) : d !== 1 / 0 && s > d && (p = d - s),
						Math.abs(h) < 1e-4 && (h = 0),
						Math.abs(p) < 1e-4 && (p = 0),
						Object.assign(Object.assign({}, r), {
							xDiff: h,
							yDiff: p,
							inBounds: !h && !p,
						})
					)
				}
				clampTargetBounds() {
					const { target: e } = this,
						{ x: t, y: i } = this.getBounds()
					t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
						t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
						i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
						i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max))
				}
				calculateContentDim(e = this.current) {
					const { content: t, contentRect: i } = this,
						{ fitWidth: n, fitHeight: s, fullWidth: r, fullHeight: o } = i
					let a = r,
						l = o
					if (this.option('zoom') || 0 !== this.angle) {
						const i = !(
								t instanceof HTMLImageElement ||
								('none' !== window.getComputedStyle(t).maxWidth &&
									'none' !== window.getComputedStyle(t).maxHeight)
							),
							c = i ? r : n,
							u = i ? o : s,
							d = this.getMatrix(e),
							h = new DOMPoint(0, 0).matrixTransform(d),
							p = new DOMPoint(0 + c, 0).matrixTransform(d),
							f = new DOMPoint(0 + c, 0 + u).matrixTransform(d),
							g = new DOMPoint(0, 0 + u).matrixTransform(d),
							m = Math.abs(f.x - h.x),
							v = Math.abs(f.y - h.y),
							b = Math.abs(g.x - p.x),
							y = Math.abs(g.y - p.y)
						;(a = Math.max(m, b)), (l = Math.max(v, y))
					}
					return { contentWidth: a, contentHeight: l }
				}
				setEdgeForce() {
					if (
						this.ignoreBounds ||
						this.isDragging ||
						this.panMode === ku ||
						this.targetScale < this.scale
					)
						return (this.isBouncingX = !1), void (this.isBouncingY = !1)
					const { target: e } = this,
						{ x: t, y: i, xDiff: n, yDiff: s } = this.checkBounds(),
						r = this.option('maxVelocity')
					let o = this.velocity.e,
						a = this.velocity.f
					0 !== n
						? ((this.isBouncingX = !0),
						  n * o <= 0
								? (o += 0.14 * n)
								: ((o = 0.14 * n),
								  t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
								  t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
						  r && (o = Math.max(Math.min(o, r), -1 * r)))
						: (this.isBouncingX = !1),
						0 !== s
							? ((this.isBouncingY = !0),
							  s * a <= 0
									? (a += 0.14 * s)
									: ((a = 0.14 * s),
									  i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
									  i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
							  r && (a = Math.max(Math.min(a, r), -1 * r)))
							: (this.isBouncingY = !1),
						this.isBouncingX && (this.velocity.e = o),
						this.isBouncingY && (this.velocity.f = a)
				}
				enable() {
					const { content: e } = this,
						t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform)
					for (const e of _u) this.current[e] = this.target[e] = t[e]
					this.updateMetrics(),
						this.attachObserver(),
						this.attachEvents(),
						(this.state = Eu.Ready),
						this.emit('ready')
				}
				onClick(e) {
					var t
					'click' === e.type &&
						0 === e.detail &&
						((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
						this.isDragging &&
							(null === (t = this.pointerTracker) || void 0 === t || t.clear(),
							(this.trackingPoints = []),
							this.startDecelAnim())
					const i = e.target
					if (!i || e.defaultPrevented) return
					if (i.hasAttribute('disabled'))
						return e.preventDefault(), void e.stopPropagation()
					if (
						(() => {
							const e = window.getSelection()
							return e && 'Range' === e.type
						})() &&
						!i.closest('button')
					)
						return
					const n = i.closest('[data-panzoom-action]'),
						s = i.closest('[data-panzoom-change]'),
						r = n || s,
						o = r && Pu(r) ? r.dataset : null
					if (o) {
						const t = o.panzoomChange,
							i = o.panzoomAction
						if (((t || i) && e.preventDefault(), t)) {
							let i = {}
							try {
								i = JSON.parse(t)
							} catch (e) {
								console && console.warn('The given data was not valid JSON')
							}
							return void this.applyChange(i)
						}
						if (i) return void (this[i] && this[i]())
					}
					if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
						return e.preventDefault(), void e.stopPropagation()
					if (i.closest('[data-fancybox]')) return
					const a = this.content.getBoundingClientRect(),
						l = this.dragStart
					if (
						l.time &&
						!this.canZoomOut() &&
						(Math.abs(a.x - l.x) > 2 || Math.abs(a.y - l.y) > 2)
					)
						return
					this.dragStart.time = 0
					const c = (t) => {
							this.option('zoom', e) &&
								t &&
								'string' == typeof t &&
								/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
									t
								) &&
								'function' == typeof this[t] &&
								(e.preventDefault(), this[t]({ event: e }))
						},
						u = this.option('click', e),
						d = this.option('dblClick', e)
					d
						? (this.clicks++,
						  1 == this.clicks &&
								(this.clickTimer = setTimeout(() => {
									1 === this.clicks
										? (this.emit('click', e), !e.defaultPrevented && u && c(u))
										: (this.emit('dblClick', e), e.defaultPrevented || c(d)),
										(this.clicks = 0),
										(this.clickTimer = null)
								}, 350)))
						: (this.emit('click', e), !e.defaultPrevented && u && c(u))
				}
				addTrackingPoint(e) {
					const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100)
					t.push(e), (this.trackingPoints = t)
				}
				onPointerDown(e, t, i) {
					var n
					if (!1 === this.option('touch', e)) return !1
					;(this.pwt = 0),
						(this.dragOffset = { x: 0, y: 0, time: 0 }),
						(this.trackingPoints = [])
					const s = this.content.getBoundingClientRect()
					if (
						((this.dragStart = {
							x: s.x,
							y: s.y,
							top: s.top,
							left: s.left,
							time: Date.now(),
						}),
						this.clickTimer)
					)
						return !1
					if (this.panMode === ku && this.targetScale > 1)
						return e.preventDefault(), e.stopPropagation(), !1
					const r = e.composedPath()[0]
					if (!i.length) {
						if (
							['TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO', 'IFRAME'].includes(
								r.nodeName
							) ||
							r.closest(
								'[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]'
							)
						)
							return !1
						null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges()
					}
					if ('mousedown' === e.type)
						['A', 'BUTTON'].includes(r.nodeName) || e.preventDefault()
					else if (Math.abs(this.velocity.a) > 0.3) return !1
					return (
						(this.target.e = this.current.e),
						(this.target.f = this.current.f),
						this.stop(),
						this.isDragging ||
							((this.isDragging = !0),
							this.addTrackingPoint(t),
							this.emit('touchStart', e)),
						!0
					)
				}
				onPointerMove(e, t, i) {
					if (!1 === this.option('touch', e)) return
					if (!this.isDragging) return
					if (
						t.length < 2 &&
						this.panOnlyZoomed &&
						au(this.targetScale) <= au(this.minScale)
					)
						return
					if ((this.emit('touchMove', e), e.defaultPrevented)) return
					this.addTrackingPoint(t[0])
					const { content: n } = this,
						s = vu(i[0], i[1]),
						r = vu(t[0], t[1])
					let o = 0,
						a = 0
					if (t.length > 1) {
						const e = n.getBoundingClientRect()
						;(o = s.clientX - e.left - 0.5 * e.width),
							(a = s.clientY - e.top - 0.5 * e.height)
					}
					const l = mu(i[0], i[1]),
						c = mu(t[0], t[1])
					let u = l ? c / l : 1,
						d = r.clientX - s.clientX,
						h = r.clientY - s.clientY
					;(this.dragOffset.x += d),
						(this.dragOffset.y += h),
						(this.dragOffset.time = Date.now() - this.dragStart.time)
					let p = au(this.targetScale) === au(this.minScale) && this.option('lockAxis')
					if (p && !this.lockedAxis)
						if ('xy' === p || 'y' === p || 'touchmove' === e.type) {
							if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
								return void e.preventDefault()
							const t = Math.abs(
								(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
							)
							;(this.lockedAxis = t > 45 && t < 135 ? 'y' : 'x'),
								(this.dragOffset.x = 0),
								(this.dragOffset.y = 0),
								(d = 0),
								(h = 0)
						} else this.lockedAxis = p
					if (
						(cu(e.target, this.content) && ((p = 'x'), (this.dragOffset.y = 0)),
						p &&
							'xy' !== p &&
							this.lockedAxis !== p &&
							au(this.targetScale) === au(this.minScale))
					)
						return
					e.cancelable && e.preventDefault(),
						this.container.classList.add(this.cn('isDragging'))
					const f = this.checkBounds(d, h)
					this.option('rubberband')
						? ('x' !== this.isInfinite &&
								((f.xDiff > 0 && d < 0) || (f.xDiff < 0 && d > 0)) &&
								(d *= Math.max(
									0,
									0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
								)),
						  'y' !== this.isInfinite &&
								((f.yDiff > 0 && h < 0) || (f.yDiff < 0 && h > 0)) &&
								(h *= Math.max(
									0,
									0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
								)))
						: (f.xDiff && (d = 0), f.yDiff && (h = 0))
					const g = this.targetScale,
						m = this.minScale,
						v = this.maxScale
					g < 0.5 * m && (u = Math.max(u, m)),
						g > 1.5 * v && (u = Math.min(u, v)),
						'y' === this.lockedAxis && au(g) === au(m) && (d = 0),
						'x' === this.lockedAxis && au(g) === au(m) && (h = 0),
						this.applyChange({
							originX: o,
							originY: a,
							panX: d,
							panY: h,
							scale: u,
							friction: this.option('dragFriction'),
							ignoreBounds: !0,
						})
				}
				onPointerUp(e, t, i) {
					if (i.length)
						return (
							(this.dragOffset.x = 0),
							(this.dragOffset.y = 0),
							void (this.trackingPoints = [])
						)
					this.container.classList.remove(this.cn('isDragging')),
						this.isDragging &&
							(this.addTrackingPoint(t),
							this.panOnlyZoomed &&
								this.contentRect.width - this.contentRect.fitWidth < 1 &&
								this.contentRect.height - this.contentRect.fitHeight < 1 &&
								(this.trackingPoints = []),
							cu(e.target, this.content) &&
								'y' === this.lockedAxis &&
								(this.trackingPoints = []),
							this.emit('touchEnd', e),
							(this.isDragging = !1),
							(this.lockedAxis = !1),
							this.state !== Eu.Destroy && (e.defaultPrevented || this.startDecelAnim()))
				}
				startDecelAnim() {
					var e
					const t = this.isScaling
					this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
						(this.isBouncingX = !1),
						(this.isBouncingY = !1)
					for (const e of _u) this.velocity[e] = 0
					;(this.target.e = this.current.e),
						(this.target.f = this.current.f),
						Fu(this.container, 'is-scaling'),
						Fu(this.container, 'is-animating'),
						(this.isTicking = !1)
					const { trackingPoints: i } = this,
						n = i[0],
						s = i[i.length - 1]
					let r = 0,
						o = 0,
						a = 0
					s &&
						n &&
						((r = s.clientX - n.clientX),
						(o = s.clientY - n.clientY),
						(a = s.time - n.time))
					const l =
						(null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1
					1 !== l && ((r *= l), (o *= l))
					let c = 0,
						u = 0,
						d = 0,
						h = 0,
						p = this.option('decelFriction')
					const f = this.targetScale
					if (a > 0) {
						;(d = Math.abs(r) > 3 ? r / (a / 30) : 0),
							(h = Math.abs(o) > 3 ? o / (a / 30) : 0)
						const e = this.option('maxVelocity')
						e &&
							((d = Math.max(Math.min(d, e), -1 * e)),
							(h = Math.max(Math.min(h, e), -1 * e)))
					}
					d && (c = d / (1 / (1 - p) - 1)),
						h && (u = h / (1 / (1 - p) - 1)),
						('y' === this.option('lockAxis') ||
							('xy' === this.option('lockAxis') &&
								'y' === this.lockedAxis &&
								au(f) === this.minScale)) &&
							(c = d = 0),
						('x' === this.option('lockAxis') ||
							('xy' === this.option('lockAxis') &&
								'x' === this.lockedAxis &&
								au(f) === this.minScale)) &&
							(u = h = 0)
					const g = this.dragOffset.x,
						m = this.dragOffset.y,
						v = this.option('dragMinThreshold') || 0
					Math.abs(g) < v && Math.abs(m) < v && ((c = u = 0), (d = h = 0)),
						((this.option('zoom') &&
							(f < this.minScale - 1e-5 || f > this.maxScale + 1e-5)) ||
							(t && !c && !u)) &&
							(p = 0.35),
						this.applyChange({ panX: c, panY: u, friction: p }),
						this.emit('decel', d, h, g, m)
				}
				onWheel(e) {
					var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
						e,
						t
					) {
						return Math.abs(t) > Math.abs(e) ? t : e
					})
					const i = Math.max(-1, Math.min(1, t))
					if ((this.emit('wheel', e, i), this.panMode === ku)) return
					if (e.defaultPrevented) return
					const n = this.option('wheel')
					'pan' === n
						? (e.preventDefault(),
						  (this.panOnlyZoomed && !this.canZoomOut()) ||
								this.applyChange({
									panX: 2 * -e.deltaX,
									panY: 2 * -e.deltaY,
									bounce: !1,
								}))
						: 'zoom' === n && !1 !== this.option('zoom') && this.zoomWithWheel(e)
				}
				onMouseMove(e) {
					this.panWithMouse(e)
				}
				onKeydown(e) {
					'Escape' === e.key && this.toggleFS()
				}
				onResize() {
					this.updateMetrics(), this.checkBounds().inBounds || this.requestTick()
				}
				setTransform() {
					this.emit('beforeTransform')
					const { current: e, target: t, content: i, contentRect: n } = this,
						s = Object.assign({}, Ou)
					for (const i of _u) {
						const n = 'e' == i || 'f' === i ? Lu : 1e5
						;(s[i] = au(e[i], n)),
							Math.abs(t[i] - e[i]) < ('e' == i || 'f' === i ? 0.51 : 0.001) &&
								(e[i] = t[i])
					}
					let { a: r, b: o, c: a, d: l, e: c, f: u } = s,
						d = `matrix(${r}, ${o}, ${a}, ${l}, ${c}, ${u})`,
						h = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i
					if (
						(this.option('transformParent') && (h = h.parentElement || h),
						h.style.transform === d)
					)
						return
					h.style.transform = d
					const { contentWidth: p, contentHeight: f } = this.calculateContentDim()
					;(n.width = p), (n.height = f), this.emit('afterTransform')
				}
				updateMetrics(e = !1) {
					var t
					if (!this || this.state === Eu.Destroy) return
					if (this.isContentLoading) return
					const i = Math.max(
							1,
							(null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) ||
								1
						),
						{ container: n, content: s } = this,
						r = s instanceof HTMLImageElement,
						o = n.getBoundingClientRect(),
						a = getComputedStyle(this.container)
					let l = o.width * i,
						c = o.height * i
					const u = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom),
						d = l - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)),
						h = c - u
					this.containerRect = { width: l, height: c, innerWidth: d, innerHeight: h }
					const p =
							parseFloat(s.dataset.width || '') ||
							((e) => {
								let t = 0
								return (
									(t =
										e instanceof HTMLImageElement
											? e.naturalWidth
											: e instanceof SVGElement
											? e.width.baseVal.value
											: Math.max(e.offsetWidth, e.scrollWidth)),
									t || 0
								)
							})(s),
						f =
							parseFloat(s.dataset.height || '') ||
							((e) => {
								let t = 0
								return (
									(t =
										e instanceof HTMLImageElement
											? e.naturalHeight
											: e instanceof SVGElement
											? e.height.baseVal.value
											: Math.max(e.offsetHeight, e.scrollHeight)),
									t || 0
								)
							})(s)
					let g = this.option('width', p) || Iu,
						m = this.option('height', f) || Iu
					const v = g === Iu,
						b = m === Iu
					'number' != typeof g && (g = p),
						'number' != typeof m && (m = f),
						v && (g = p * (m / f)),
						b && (m = f / (p / g))
					let y = s.parentElement instanceof HTMLPictureElement ? s.parentElement : s
					this.option('transformParent') && (y = y.parentElement || y)
					const D = y.getAttribute('style') || ''
					y.style.setProperty('transform', 'none', 'important'),
						r && ((y.style.width = ''), (y.style.height = '')),
						y.offsetHeight
					const w = s.getBoundingClientRect()
					let x = w.width * i,
						E = w.height * i,
						_ = x,
						C = E
					;(x = Math.min(x, g)),
						(E = Math.min(E, m)),
						r
							? ({ width: x, height: E } = ((e, t, i, n) => {
									const s = i / e,
										r = n / t,
										o = Math.min(s, r)
									return { width: (e *= o), height: (t *= o) }
							  })(g, m, x, E))
							: ((x = Math.min(x, g)), (E = Math.min(E, m)))
					let T = 0.5 * (C - E),
						S = 0.5 * (_ - x)
					;(this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
						top: w.top - o.top + T,
						bottom: o.bottom - w.bottom + T,
						left: w.left - o.left + S,
						right: o.right - w.right + S,
						fitWidth: x,
						fitHeight: E,
						width: x,
						height: E,
						fullWidth: g,
						fullHeight: m,
					})),
						(y.style.cssText = D),
						r && ((y.style.width = `${x}px`), (y.style.height = `${E}px`)),
						this.setTransform(),
						!0 !== e && this.emit('refresh'),
						this.ignoreBounds ||
							(au(this.targetScale) < au(this.minScale)
								? this.zoomTo(this.minScale, { friction: 0 })
								: this.targetScale > this.maxScale
								? this.zoomTo(this.maxScale, { friction: 0 })
								: this.state === Eu.Init ||
								  this.checkBounds().inBounds ||
								  this.requestTick()),
						this.updateControls()
				}
				calculateBounds() {
					const { contentWidth: e, contentHeight: t } = this.calculateContentDim(
							this.target
						),
						{ targetScale: i, lockedAxis: n } = this,
						{ fitWidth: s, fitHeight: r } = this.contentRect
					let o = 0,
						a = 0,
						l = 0,
						c = 0
					const u = this.option('infinite')
					if (!0 === u || (n && u === n))
						(o = -1 / 0), (l = 1 / 0), (a = -1 / 0), (c = 1 / 0)
					else {
						let { containerRect: n, contentRect: u } = this,
							d = au(s * i, Lu),
							h = au(r * i, Lu),
							{ innerWidth: p, innerHeight: f } = n
						if (
							(n.width === d && (p = n.width), n.width === h && (f = n.height), e > p)
						) {
							;(l = 0.5 * (e - p)), (o = -1 * l)
							let t = 0.5 * (u.right - u.left)
							;(o += t), (l += t)
						}
						if ((s > p && e < p && ((o -= 0.5 * (s - p)), (l -= 0.5 * (s - p))), t > f)) {
							;(c = 0.5 * (t - f)), (a = -1 * c)
							let e = 0.5 * (u.bottom - u.top)
							;(a += e), (c += e)
						}
						r > f && t < f && ((o -= 0.5 * (r - f)), (l -= 0.5 * (r - f)))
					}
					return { x: { min: o, max: l }, y: { min: a, max: c } }
				}
				getBounds() {
					const e = this.option('bounds')
					return e !== Iu ? e : this.calculateBounds()
				}
				updateControls() {
					const e = this,
						t = e.container,
						{ panMode: i, contentRect: n, targetScale: s, minScale: r } = e
					let o = r,
						a = e.option('click') || !1
					a && (o = e.getNextScale(a))
					let l = e.canZoomIn(),
						c = e.canZoomOut(),
						u = i === zu && !!this.option('touch'),
						d = c && u
					if (
						(u &&
							(au(s) < au(r) && !this.panOnlyZoomed && (d = !0),
							(au(n.width, 1) > au(n.fitWidth, 1) ||
								au(n.height, 1) > au(n.fitHeight, 1)) &&
								(d = !0)),
						au(n.width * s, 1) < au(n.fitWidth, 1) && (d = !1),
						i === ku && (d = !1),
						hu(t, this.cn('isDraggable'), d),
						!this.option('zoom'))
					)
						return
					let h = l && au(o) > au(s),
						p = !h && !d && c && au(o) < au(s)
					hu(t, this.cn('canZoomIn'), h), hu(t, this.cn('canZoomOut'), p)
					for (const e of t.querySelectorAll('[data-panzoom-action]')) {
						let t = !1,
							i = !1
						switch (e.dataset.panzoomAction) {
							case 'zoomIn':
								l ? (t = !0) : (i = !0)
								break
							case 'zoomOut':
								c ? (t = !0) : (i = !0)
								break
							case 'toggleZoom':
							case 'iterateZoom':
								l || c ? (t = !0) : (i = !0)
								const n = e.querySelector('g')
								n && (n.style.display = l ? '' : 'none')
						}
						t
							? (e.removeAttribute('disabled'), e.removeAttribute('tabindex'))
							: i && (e.setAttribute('disabled', ''), e.setAttribute('tabindex', '-1'))
					}
				}
				panTo({
					x: e = this.target.e,
					y: t = this.target.f,
					scale: i = this.targetScale,
					friction: n = this.option('friction'),
					angle: s = 0,
					originX: r = 0,
					originY: o = 0,
					flipX: a = !1,
					flipY: l = !1,
					ignoreBounds: c = !1,
				}) {
					this.state !== Eu.Destroy &&
						this.applyChange({
							panX: e - this.target.e,
							panY: t - this.target.f,
							scale: i / this.targetScale,
							angle: s,
							originX: r,
							originY: o,
							friction: n,
							flipX: a,
							flipY: l,
							ignoreBounds: c,
						})
				}
				applyChange({
					panX: e = 0,
					panY: t = 0,
					scale: i = 1,
					angle: n = 0,
					originX: s = -this.current.e,
					originY: r = -this.current.f,
					friction: o = this.option('friction'),
					flipX: a = !1,
					flipY: l = !1,
					ignoreBounds: c = !1,
					bounce: u = this.option('bounce'),
				}) {
					const d = this.state
					if (d === Eu.Destroy) return
					this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
						(this.friction = o || 0),
						(this.ignoreBounds = c)
					const { current: h } = this,
						p = h.e,
						f = h.f,
						g = this.getMatrix(this.target)
					let m = new DOMMatrix().translate(p, f).translate(s, r).translate(e, t)
					if (this.option('zoom')) {
						if (!c) {
							const e = this.targetScale,
								t = this.minScale,
								n = this.maxScale
							e * i < t && (i = t / e), e * i > n && (i = n / e)
						}
						m = m.scale(i)
					}
					;(m = m.translate(-s, -r).translate(-p, -f).multiply(g)),
						n && (m = m.rotate(n)),
						a && (m = m.scale(-1, 1)),
						l && (m = m.scale(1, -1))
					for (const e of _u)
						'e' !== e &&
						'f' !== e &&
						(m[e] > this.minScale + 1e-5 || m[e] < this.minScale - 1e-5)
							? (this.target[e] = m[e])
							: (this.target[e] = au(m[e], Lu))
					;(this.targetScale < this.scale ||
						Math.abs(i - 1) > 0.1 ||
						this.panMode === ku ||
						!1 === u) &&
						!c &&
						this.clampTargetBounds(),
						d === Eu.Init
							? this.animate()
							: this.isResting || ((this.state = Eu.Panning), this.requestTick())
				}
				stop(e = !1) {
					if (this.state === Eu.Init || this.state === Eu.Destroy) return
					const t = this.isTicking
					this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
						(this.isBouncingX = !1),
						(this.isBouncingY = !1)
					for (const t of _u)
						(this.velocity[t] = 0),
							'current' === e
								? (this.current[t] = this.target[t])
								: 'target' === e && (this.target[t] = this.current[t])
					this.setTransform(),
						Fu(this.container, 'is-scaling'),
						Fu(this.container, 'is-animating'),
						(this.isTicking = !1),
						(this.state = Eu.Ready),
						t && (this.emit('endAnimation'), this.updateControls())
				}
				requestTick() {
					this.isTicking ||
						(this.emit('startAnimation'),
						this.updateControls(),
						Au(this.container, 'is-animating'),
						this.isScaling && Au(this.container, 'is-scaling')),
						(this.isTicking = !0),
						this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()))
				}
				panWithMouse(e, t = this.option('mouseMoveFriction')) {
					if (((this.pmme = e), this.panMode !== ku || !e)) return
					if (au(this.targetScale) <= au(this.minScale)) return
					this.emit('mouseMove', e)
					const { container: i, containerRect: n, contentRect: s } = this,
						r = n.width,
						o = n.height,
						a = i.getBoundingClientRect(),
						l = (e.clientX || 0) - a.left,
						c = (e.clientY || 0) - a.top
					let { contentWidth: u, contentHeight: d } = this.calculateContentDim(
						this.target
					)
					const h = this.option('mouseMoveFactor')
					h > 1 && (u !== r && (u *= h), d !== o && (d *= h))
					let p = 0.5 * (u - r) - (((l / r) * 100) / 100) * (u - r)
					p += 0.5 * (s.right - s.left)
					let f = 0.5 * (d - o) - (((c / o) * 100) / 100) * (d - o)
					;(f += 0.5 * (s.bottom - s.top)),
						this.applyChange({
							panX: p - this.target.e,
							panY: f - this.target.f,
							friction: t,
						})
				}
				zoomWithWheel(e) {
					if (this.state === Eu.Destroy || this.state === Eu.Init) return
					const t = Date.now()
					if (t - this.pwt < 45) return void e.preventDefault()
					this.pwt = t
					var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
						e,
						t
					) {
						return Math.abs(t) > Math.abs(e) ? t : e
					})
					const n = Math.max(-1, Math.min(1, i)),
						{ targetScale: s, maxScale: r, minScale: o } = this
					let a = (s * (100 + 45 * n)) / 100
					au(a) < au(o) && au(s) <= au(o)
						? ((this.cwd += Math.abs(n)), (a = o))
						: au(a) > au(r) && au(s) >= au(r)
						? ((this.cwd += Math.abs(n)), (a = r))
						: ((this.cwd = 0), (a = Math.max(Math.min(a, r), o))),
						this.cwd > this.option('wheelLimit') ||
							(e.preventDefault(), au(a) !== au(s) && this.zoomTo(a, { event: e }))
				}
				canZoomIn() {
					return (
						this.option('zoom') &&
						(au(this.contentRect.width, 1) < au(this.contentRect.fitWidth, 1) ||
							au(this.targetScale) < au(this.maxScale))
					)
				}
				canZoomOut() {
					return this.option('zoom') && au(this.targetScale) > au(this.minScale)
				}
				zoomIn(e = 1.25, t) {
					this.zoomTo(this.targetScale * e, t)
				}
				zoomOut(e = 0.8, t) {
					this.zoomTo(this.targetScale * e, t)
				}
				zoomToFit(e) {
					this.zoomTo('fit', e)
				}
				zoomToCover(e) {
					this.zoomTo('cover', e)
				}
				zoomToFull(e) {
					this.zoomTo('full', e)
				}
				zoomToMax(e) {
					this.zoomTo('max', e)
				}
				toggleZoom(e) {
					this.zoomTo(this.getNextScale('toggleZoom'), e)
				}
				toggleMax(e) {
					this.zoomTo(this.getNextScale('toggleMax'), e)
				}
				toggleCover(e) {
					this.zoomTo(this.getNextScale('toggleCover'), e)
				}
				iterateZoom(e) {
					this.zoomTo('next', e)
				}
				zoomTo(
					e = 1,
					{ friction: t = Iu, originX: i = Iu, originY: n = Iu, event: s } = {}
				) {
					if (this.isContentLoading || this.state === Eu.Destroy) return
					const { targetScale: r, fullScale: o, maxScale: a, coverScale: l } = this
					if (
						(this.stop(),
						this.panMode === ku && (s = this.pmme || s),
						s || i === Iu || n === Iu)
					) {
						const e = this.content.getBoundingClientRect(),
							t = this.container.getBoundingClientRect(),
							r = s ? s.clientX : t.left + 0.5 * t.width,
							o = s ? s.clientY : t.top + 0.5 * t.height
						;(i = r - e.left - 0.5 * e.width), (n = o - e.top - 0.5 * e.height)
					}
					let c = 1
					'number' == typeof e
						? (c = e)
						: 'full' === e
						? (c = o)
						: 'cover' === e
						? (c = l)
						: 'max' === e
						? (c = a)
						: 'fit' === e
						? (c = 1)
						: 'next' === e && (c = this.getNextScale('iterateZoom')),
						(c = c / r || 1),
						(t = t === Iu ? (c > 1 ? 0.15 : 0.25) : t),
						this.applyChange({ scale: c, originX: i, originY: n, friction: t }),
						s && this.panMode === ku && this.panWithMouse(s, t)
				}
				rotateCCW() {
					this.applyChange({ angle: -90 })
				}
				rotateCW() {
					this.applyChange({ angle: 90 })
				}
				flipX() {
					this.applyChange({ flipX: !0 })
				}
				flipY() {
					this.applyChange({ flipY: !0 })
				}
				fitX() {
					this.stop('target')
					const { containerRect: e, contentRect: t, target: i } = this
					this.applyChange({
						panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
						panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
						scale: e.width / t.fitWidth / this.targetScale,
						originX: 0,
						originY: 0,
						ignoreBounds: !0,
					})
				}
				fitY() {
					this.stop('target')
					const { containerRect: e, contentRect: t, target: i } = this
					this.applyChange({
						panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
						panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
						scale: e.height / t.fitHeight / this.targetScale,
						originX: 0,
						originY: 0,
						ignoreBounds: !0,
					})
				}
				toggleFS() {
					const { container: e } = this,
						t = this.cn('inFullscreen'),
						i = this.cn('htmlHasFullscreen')
					e.classList.toggle(t)
					const n = e.classList.contains(t)
					n
						? (document.documentElement.classList.add(i),
						  document.addEventListener('keydown', this.onKeydown, !0))
						: (document.documentElement.classList.remove(i),
						  document.removeEventListener('keydown', this.onKeydown, !0)),
						this.updateMetrics(),
						this.emit(n ? 'enterFS' : 'exitFS')
				}
				getMatrix(e = this.current) {
					const { a: t, b: i, c: n, d: s, e: r, f: o } = e
					return new DOMMatrix([t, i, n, s, r, o])
				}
				reset(e) {
					if (this.state !== Eu.Init && this.state !== Eu.Destroy) {
						this.stop('current')
						for (const e of _u) this.target[e] = Ou[e]
						;(this.target.a = this.minScale),
							(this.target.d = this.minScale),
							this.clampTargetBounds(),
							this.isResting ||
								((this.friction = void 0 === e ? this.option('friction') : e),
								(this.state = Eu.Panning),
								this.requestTick())
					}
				}
				destroy() {
					this.stop(),
						(this.state = Eu.Destroy),
						this.detachEvents(),
						this.detachObserver()
					const { container: e, content: t } = this,
						i = this.option('classes') || {}
					for (const t of Object.values(i)) e.classList.remove(t + '')
					t &&
						(t.removeEventListener('load', this.onLoad),
						t.removeEventListener('error', this.onError)),
						this.detachPlugins()
				}
			}
			Object.defineProperty(ju, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: Tu,
			}),
				Object.defineProperty(ju, 'Plugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				})
			const Hu = function (e, t) {
					let i = !0
					return (...n) => {
						i &&
							((i = !1),
							e(...n),
							setTimeout(() => {
								i = !0
							}, t))
					}
				},
				$u = (e, t) => {
					let i = []
					return (
						e.childNodes.forEach((e) => {
							e.nodeType !== Node.ELEMENT_NODE || (t && !e.matches(t)) || i.push(e)
						}),
						i
					)
				}
			var qu
			!(function (e) {
				;(e[(e.Init = 0)] = 'Init'),
					(e[(e.Ready = 1)] = 'Ready'),
					(e[(e.Destroy = 2)] = 'Destroy')
			})(qu || (qu = {}))
			const Vu = (e) => {
					if ('string' == typeof e || e instanceof HTMLElement) e = { html: e }
					else {
						const t = e.thumb
						void 0 !== t &&
							('string' == typeof t && (e.thumbSrc = t),
							t instanceof HTMLImageElement &&
								((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
							delete e.thumb)
					}
					return Object.assign(
						{
							html: '',
							el: null,
							isDom: !1,
							class: '',
							customClass: '',
							index: -1,
							dim: 0,
							gap: 0,
							pos: 0,
							transition: !1,
						},
						e
					)
				},
				Yu = (e = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e)
			class Xu extends wu {
				constructor(e, t) {
					super(t),
						Object.defineProperty(this, 'instance', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: e,
						})
				}
				attach() {}
				detach() {}
			}
			class Gu extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'isDynamic', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'list', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						})
				}
				onRefresh() {
					this.refresh()
				}
				build() {
					let e = this.list
					if (!e) {
						;(e = document.createElement('ul')),
							Au(e, this.cn('list')),
							e.setAttribute('role', 'tablist')
						const t = this.instance.container
						t.appendChild(e), Au(t, this.cn('hasDots')), (this.list = e)
					}
					return e
				}
				refresh() {
					var e
					const t = this.instance.pages.length,
						i = Math.min(2, this.option('minCount')),
						n = Math.max(2e3, this.option('maxCount')),
						s = this.option('dynamicFrom')
					if (t < i || t > n) return void this.cleanup()
					const r = 'number' == typeof s && t > 5 && t >= s,
						o = !this.list || this.isDynamic !== r || this.list.children.length !== t
					o && this.cleanup()
					const a = this.build()
					if ((hu(a, this.cn('isDynamic'), !!r), o))
						for (let e = 0; e < t; e++) a.append(this.createItem(e))
					let l,
						c = 0
					for (const t of [...a.children]) {
						const i = c === this.instance.page
						i && (l = t),
							hu(t, this.cn('isCurrent'), i),
							null === (e = t.children[0]) ||
								void 0 === e ||
								e.setAttribute('aria-selected', i ? 'true' : 'false')
						for (const e of ['isBeforePrev', 'isPrev', 'isNext', 'isAfterNext'])
							Fu(t, this.cn(e))
						c++
					}
					if (((l = l || a.firstChild), r && l)) {
						const e = l.previousElementSibling,
							t = e && e.previousElementSibling
						Au(e, this.cn('isPrev')), Au(t, this.cn('isBeforePrev'))
						const i = l.nextElementSibling,
							n = i && i.nextElementSibling
						Au(i, this.cn('isNext')), Au(n, this.cn('isAfterNext'))
					}
					this.isDynamic = r
				}
				createItem(e = 0) {
					var t
					const i = document.createElement('li')
					i.setAttribute('role', 'presentation')
					const n = uu(
						this.instance
							.localize(this.option('dotTpl'), [['%d', e + 1]])
							.replace(/\%i/g, e + '')
					)
					return (
						i.appendChild(n),
						null === (t = i.children[0]) || void 0 === t || t.setAttribute('role', 'tab'),
						i
					)
				}
				cleanup() {
					this.list && (this.list.remove(), (this.list = null)),
						(this.isDynamic = !1),
						Fu(this.instance.container, this.cn('hasDots'))
				}
				attach() {
					this.instance.on(['refresh', 'change'], this.onRefresh)
				}
				detach() {
					this.instance.off(['refresh', 'change'], this.onRefresh), this.cleanup()
				}
			}
			Object.defineProperty(Gu, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					classes: {
						list: 'f-carousel__dots',
						isDynamic: 'is-dynamic',
						hasDots: 'has-dots',
						dot: 'f-carousel__dot',
						isBeforePrev: 'is-before-prev',
						isPrev: 'is-prev',
						isCurrent: 'is-current',
						isNext: 'is-next',
						isAfterNext: 'is-after-next',
					},
					dotTpl:
						'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
					dynamicFrom: 11,
					maxCount: 1 / 0,
					minCount: 2,
				},
			})
			const Wu = 'disabled',
				Uu = 'next',
				Zu = 'prev'
			class Ku extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'prev', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'next', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'isDom', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						})
				}
				onRefresh() {
					const e = this.instance,
						t = e.pages.length,
						i = e.page
					if (t < 2) return void this.cleanup()
					this.build()
					let n = this.prev,
						s = this.next
					n &&
						s &&
						(n.removeAttribute(Wu),
						s.removeAttribute(Wu),
						e.isInfinite ||
							(i <= 0 && n.setAttribute(Wu, ''), i >= t - 1 && s.setAttribute(Wu, '')))
				}
				addBtn(e) {
					var t
					const i = this.instance,
						n = document.createElement('button')
					n.setAttribute('tabindex', '0'),
						n.setAttribute('title', i.localize(`{{${e.toUpperCase()}}}`)),
						Au(n, this.cn('button') + ' ' + this.cn(e === Uu ? 'isNext' : 'isPrev'))
					const s = i.isRTL ? (e === Uu ? Zu : Uu) : e
					var r
					return (
						(n.innerHTML = i.localize(this.option(`${s}Tpl`))),
						(n.dataset[
							`carousel${
								((r = e),
								r
									? r.match('^[a-z]')
										? r.charAt(0).toUpperCase() + r.substring(1)
										: r
									: '')
							}`
						] = 'true'),
						null === (t = this.container) || void 0 === t || t.appendChild(n),
						n
					)
				}
				build() {
					const e = this.instance.container,
						t = this.cn('container')
					let { container: i, prev: n, next: s } = this
					i || ((i = e.querySelector('.' + t)), (this.isDom = !!i)),
						i || ((i = document.createElement('div')), Au(i, t), e.appendChild(i)),
						(this.container = i),
						s || (s = i.querySelector('[data-carousel-next]')),
						s || (s = this.addBtn(Uu)),
						(this.next = s),
						n || (n = i.querySelector('[data-carousel-prev]')),
						n || (n = this.addBtn(Zu)),
						(this.prev = n)
				}
				cleanup() {
					this.isDom ||
						(this.prev && this.prev.remove(),
						this.next && this.next.remove(),
						this.container && this.container.remove()),
						(this.prev = null),
						(this.next = null),
						(this.container = null),
						(this.isDom = !1)
				}
				attach() {
					this.instance.on(['refresh', 'change'], this.onRefresh)
				}
				detach() {
					this.instance.off(['refresh', 'change'], this.onRefresh), this.cleanup()
				}
			}
			Object.defineProperty(Ku, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					classes: {
						container: 'f-carousel__nav',
						button: 'f-button',
						isNext: 'is-next',
						isPrev: 'is-prev',
					},
					nextTpl:
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
					prevTpl:
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
				},
			})
			class Ju extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'selectedIndex', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'target', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'nav', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						})
				}
				addAsTargetFor(e) {
					;(this.target = this.instance), (this.nav = e), this.attachEvents()
				}
				addAsNavFor(e) {
					;(this.nav = this.instance), (this.target = e), this.attachEvents()
				}
				attachEvents() {
					const { nav: e, target: t } = this
					e &&
						t &&
						((e.options.initialSlide = t.options.initialPage),
						e.state === qu.Ready ? this.onNavReady(e) : e.on('ready', this.onNavReady),
						t.state === qu.Ready
							? this.onTargetReady(t)
							: t.on('ready', this.onTargetReady))
				}
				onNavReady(e) {
					e.on('createSlide', this.onNavCreateSlide),
						e.on('Panzoom.click', this.onNavClick),
						e.on('Panzoom.touchEnd', this.onNavTouch),
						this.onTargetChange()
				}
				onTargetReady(e) {
					e.on('change', this.onTargetChange),
						e.on('Panzoom.refresh', this.onTargetChange),
						this.onTargetChange()
				}
				onNavClick(e, t, i) {
					this.onNavTouch(e, e.panzoom, i)
				}
				onNavTouch(e, t, i) {
					var n, s
					if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3) return
					const r = i.target,
						{ nav: o, target: a } = this
					if (!o || !a || !r) return
					const l = r.closest('[data-index]')
					if ((i.stopPropagation(), i.preventDefault(), !l)) return
					const c = parseInt(l.dataset.index || '', 10) || 0,
						u = a.getPageForSlide(c),
						d = o.getPageForSlide(c)
					o.slideTo(d),
						a.slideTo(u, {
							friction:
								(null ===
									(s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) ||
								void 0 === s
									? void 0
									: s.Sync.option('friction')) || 0,
						}),
						this.markSelectedSlide(c)
				}
				onNavCreateSlide(e, t) {
					t.index === this.selectedIndex && this.markSelectedSlide(t.index)
				}
				onTargetChange() {
					var e, t
					const { target: i, nav: n } = this
					if (!i || !n) return
					if (n.state !== qu.Ready || i.state !== qu.Ready) return
					const s =
							null ===
								(t =
									null === (e = i.pages[i.page]) || void 0 === e
										? void 0
										: e.slides[0]) || void 0 === t
								? void 0
								: t.index,
						r = n.getPageForSlide(s)
					this.markSelectedSlide(s),
						n.slideTo(
							r,
							null === n.prevPage && null === i.prevPage ? { friction: 0 } : void 0
						)
				}
				markSelectedSlide(e) {
					const t = this.nav
					t &&
						t.state === qu.Ready &&
						((this.selectedIndex = e),
						[...t.slides].map((t) => {
							t.el && t.el.classList[t.index === e ? 'add' : 'remove']('is-nav-selected')
						}))
				}
				attach() {
					const e = this
					let t = e.options.target,
						i = e.options.nav
					t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i)
				}
				detach() {
					const e = this,
						t = e.nav,
						i = e.target
					t &&
						(t.off('ready', e.onNavReady),
						t.off('createSlide', e.onNavCreateSlide),
						t.off('Panzoom.click', e.onNavClick),
						t.off('Panzoom.touchEnd', e.onNavTouch)),
						(e.nav = null),
						i &&
							(i.off('ready', e.onTargetReady),
							i.off('refresh', e.onTargetChange),
							i.off('change', e.onTargetChange)),
						(e.target = null)
				}
			}
			Object.defineProperty(Ju, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: { friction: 0.35 },
			})
			const Qu = { Navigation: Ku, Dots: Gu, Sync: Ju },
				ed = 'animationend',
				td = 'isSelected',
				id = 'slide'
			class nd extends xu {
				get axis() {
					return this.isHorizontal ? 'e' : 'f'
				}
				get isEnabled() {
					return this.state === qu.Ready
				}
				get isInfinite() {
					let e = !1
					const { contentDim: t, viewportDim: i, pages: n, slides: s } = this,
						r = s[0]
					return n.length >= 2 && r && t + r.dim >= i && (e = this.option('infinite')), e
				}
				get isRTL() {
					return 'rtl' === this.option('direction')
				}
				get isHorizontal() {
					return 'x' === this.option('axis')
				}
				constructor(e, t = {}, i = {}) {
					if (
						(super(),
						Object.defineProperty(this, 'bp', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: '',
						}),
						Object.defineProperty(this, 'lp', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'userOptions', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: {},
						}),
						Object.defineProperty(this, 'userPlugins', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: {},
						}),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: qu.Init,
						}),
						Object.defineProperty(this, 'page', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'prevPage', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						Object.defineProperty(this, 'viewport', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'track', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'slides', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						Object.defineProperty(this, 'pages', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						Object.defineProperty(this, 'panzoom', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'inTransition', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: new Set(),
						}),
						Object.defineProperty(this, 'contentDim', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'viewportDim', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						'string' == typeof e && (e = document.querySelector(e)),
						!e || !Pu(e))
					)
						throw new Error('No Element found')
					;(this.container = e),
						(this.slideNext = Hu(this.slideNext.bind(this), 150)),
						(this.slidePrev = Hu(this.slidePrev.bind(this), 150)),
						(this.userOptions = t),
						(this.userPlugins = i),
						queueMicrotask(() => {
							this.processOptions()
						})
				}
				processOptions() {
					var e, t
					const i = yu({}, nd.defaults, this.userOptions)
					let n = ''
					const s = i.breakpoints
					if (s && bu(s))
						for (const [e, t] of Object.entries(s))
							window.matchMedia(e).matches && bu(t) && ((n += e), yu(i, t))
					;(n === this.bp && this.state !== qu.Init) ||
						((this.bp = n),
						this.state === qu.Ready &&
							(i.initialSlide =
								(null ===
									(t =
										null === (e = this.pages[this.page]) || void 0 === e
											? void 0
											: e.slides[0]) || void 0 === t
									? void 0
									: t.index) || 0),
						this.state !== qu.Init && this.destroy(),
						super.setOptions(i),
						!1 === this.option('enabled')
							? this.attachEvents()
							: setTimeout(() => {
									this.init()
							  }, 0))
				}
				init() {
					;(this.state = qu.Init),
						this.emit('init'),
						this.attachPlugins(
							Object.assign(Object.assign({}, nd.Plugins), this.userPlugins)
						),
						this.emit('attachPlugins'),
						this.initLayout(),
						this.initSlides(),
						this.updateMetrics(),
						this.setInitialPosition(),
						this.initPanzoom(),
						this.attachEvents(),
						(this.state = qu.Ready),
						this.emit('ready')
				}
				initLayout() {
					const { container: e } = this,
						t = this.option('classes')
					Au(e, this.cn('container')),
						hu(e, t.isLTR, !this.isRTL),
						hu(e, t.isRTL, this.isRTL),
						hu(e, t.isVertical, !this.isHorizontal),
						hu(e, t.isHorizontal, this.isHorizontal)
					let i = this.option('viewport') || e.querySelector(`.${t.viewport}`)
					i ||
						((i = document.createElement('div')),
						Au(i, t.viewport),
						i.append(...$u(e, `.${t.slide}`)),
						e.prepend(i)),
						i.addEventListener('scroll', this.onScroll)
					let n = this.option('track') || e.querySelector(`.${t.track}`)
					n ||
						((n = document.createElement('div')),
						Au(n, t.track),
						n.append(...Array.from(i.childNodes))),
						n.setAttribute('aria-live', 'polite'),
						i.contains(n) || i.prepend(n),
						(this.viewport = i),
						(this.track = n),
						this.emit('initLayout')
				}
				initSlides() {
					const { track: e } = this
					if (!e) return
					const t = [...this.slides],
						i = []
					;[...$u(e, `.${this.cn(id)}`)].forEach((e) => {
						if (Pu(e)) {
							const t = Vu({ el: e, isDom: !0, index: this.slides.length })
							i.push(t)
						}
					})
					for (let e of [...(this.option('slides', []) || []), ...t]) i.push(Vu(e))
					this.slides = i
					for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e
					for (const e of i)
						this.emit('beforeInitSlide', e, e.index), this.emit('initSlide', e, e.index)
					this.emit('initSlides')
				}
				setInitialPage() {
					const e = this.option('initialSlide')
					this.page =
						'number' == typeof e
							? this.getPageForSlide(e)
							: parseInt(this.option('initialPage', 0) + '', 10) || 0
				}
				setInitialPosition() {
					const { track: e, pages: t, isHorizontal: i } = this
					if (!e || !t.length) return
					let n = this.page
					t[n] || (this.page = n = 0)
					const s = (t[n].pos || 0) * (this.isRTL && i ? 1 : -1),
						r = i ? `${s}px` : '0',
						o = i ? '0' : `${s}px`
					;(e.style.transform = `translate3d(${r}, ${o}, 0) scale(1)`),
						this.option('adaptiveHeight') && this.setViewportHeight()
				}
				initPanzoom() {
					this.panzoom && (this.panzoom.destroy(), (this.panzoom = null))
					const e = this.option('Panzoom') || {}
					;(this.panzoom = new ju(
						this.viewport,
						yu(
							{},
							{
								content: this.track,
								zoom: !1,
								panOnlyZoomed: !1,
								lockAxis: this.isHorizontal ? 'x' : 'y',
								infinite: this.isInfinite,
								click: !1,
								dblClick: !1,
								touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
								bounds: () => this.getBounds(),
								maxVelocity: (e) =>
									Math.abs(e.target[this.axis] - e.current[this.axis]) <
									2 * this.viewportDim
										? 100
										: 0,
							},
							e
						)
					)),
						this.panzoom.on('*', (e, t, ...i) => {
							this.emit(`Panzoom.${t}`, e, ...i)
						}),
						this.panzoom.on('decel', this.onDecel),
						this.panzoom.on('refresh', this.onRefresh),
						this.panzoom.on('beforeTransform', this.onBeforeTransform),
						this.panzoom.on('endAnimation', this.onEndAnimation)
				}
				attachEvents() {
					const e = this.container
					e &&
						(e.addEventListener('click', this.onClick, { passive: !1, capture: !1 }),
						e.addEventListener('slideTo', this.onSlideTo)),
						window.addEventListener('resize', this.onResize)
				}
				createPages() {
					let e = []
					const { contentDim: t, viewportDim: i } = this
					let n = this.option('slidesPerPage')
					n =
						('auto' === n || t <= i) && !1 !== this.option('fill')
							? 1 / 0
							: parseFloat(n + '')
					let s = 0,
						r = 0,
						o = 0
					for (const t of this.slides)
						(!e.length || r + t.dim - i > 0.05 || o >= n) &&
							(e.push(Yu()), (s = e.length - 1), (r = 0), (o = 0)),
							e[s].slides.push(t),
							(r += t.dim + t.gap),
							o++
					return e
				}
				processPages() {
					const e = this.pages,
						{ contentDim: t, viewportDim: i, isInfinite: n } = this,
						s = this.option('center'),
						r = this.option('fill'),
						o = r && s && t > i && !n
					if (
						(e.forEach((e, n) => {
							var r
							;(e.index = n),
								(e.pos =
									(null === (r = e.slides[0]) || void 0 === r ? void 0 : r.pos) || 0),
								(e.dim = 0)
							for (const [t, i] of e.slides.entries())
								(e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap)
							o && e.pos + 0.5 * e.dim < 0.5 * i
								? (e.pos = 0)
								: o && e.pos + 0.5 * e.dim >= t - 0.5 * i
								? (e.pos = t - i)
								: s && (e.pos += -0.5 * (i - e.dim))
						}),
						e.forEach((e) => {
							r &&
								!n &&
								t > i &&
								((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, t - i))),
								(e.pos = au(e.pos, 1e3)),
								(e.dim = au(e.dim, 1e3)),
								Math.abs(e.pos) <= 0.1 && (e.pos = 0)
						}),
						n)
					)
						return e
					const a = []
					let l
					return (
						e.forEach((e) => {
							const t = Object.assign({}, e)
							l && t.pos === l.pos
								? ((l.dim += t.dim), (l.slides = [...l.slides, ...t.slides]))
								: ((t.index = a.length), (l = t), a.push(t))
						}),
						a
					)
				}
				getPageFromIndex(e = 0) {
					const t = this.pages.length
					let i
					return (
						(e = parseInt((e || 0).toString()) || 0),
						(i = this.isInfinite ? ((e % t) + t) % t : Math.max(Math.min(e, t - 1), 0)),
						i
					)
				}
				getSlideMetrics(e) {
					var t, i
					const n = this.isHorizontal ? 'width' : 'height'
					let s = 0,
						r = 0,
						o = e.el
					const a = !(!o || o.parentNode)
					if (
						(o
							? (s = parseFloat(o.dataset[n] || '') || 0)
							: ((o = document.createElement('div')),
							  (o.style.visibility = 'hidden'),
							  (this.track || document.body).prepend(o)),
						Au(o, this.cn(id) + ' ' + e.class + ' ' + e.customClass),
						s)
					)
						(o.style[n] = `${s}px`), (o.style['width' === n ? 'height' : 'width'] = '')
					else {
						a && (this.track || document.body).prepend(o),
							(s =
								o.getBoundingClientRect()[n] *
								Math.max(
									1,
									(null === (t = window.visualViewport) || void 0 === t
										? void 0
										: t.scale) || 1
								))
						let e = o[this.isHorizontal ? 'offsetWidth' : 'offsetHeight']
						e - 1 > s && (s = e)
					}
					const l = getComputedStyle(o)
					return (
						'content-box' === l.boxSizing &&
							(this.isHorizontal
								? ((s += parseFloat(l.paddingLeft) || 0),
								  (s += parseFloat(l.paddingRight) || 0))
								: ((s += parseFloat(l.paddingTop) || 0),
								  (s += parseFloat(l.paddingBottom) || 0))),
						(r = parseFloat(l[this.isHorizontal ? 'marginRight' : 'marginBottom']) || 0),
						a
							? null === (i = o.parentElement) || void 0 === i || i.removeChild(o)
							: e.el || o.remove(),
						{ dim: au(s, 1e3), gap: au(r, 1e3) }
					)
				}
				getBounds() {
					const { isInfinite: e, isRTL: t, isHorizontal: i, pages: n } = this
					let s = { min: 0, max: 0 }
					if (e) s = { min: -1 / 0, max: 1 / 0 }
					else if (n.length) {
						const e = n[0].pos,
							r = n[n.length - 1].pos
						s = t && i ? { min: e, max: r } : { min: -1 * r, max: -1 * e }
					}
					return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s }
				}
				repositionSlides() {
					let e,
						{
							isHorizontal: t,
							isRTL: i,
							isInfinite: n,
							viewport: s,
							viewportDim: r,
							contentDim: o,
							page: a,
							pages: l,
							slides: c,
							panzoom: u,
						} = this,
						d = 0,
						h = 0,
						p = 0,
						f = 0
					u ? (f = -1 * u.current[this.axis]) : l[a] && (f = l[a].pos || 0),
						(e = t ? (i ? 'right' : 'left') : 'top'),
						i && t && (f *= -1)
					for (const t of c) {
						const i = t.el
						i
							? ('top' === e
									? ((i.style.right = ''), (i.style.left = ''))
									: (i.style.top = ''),
							  t.index !== d
									? (i.style[e] = 0 === h ? '' : `${au(h, 1e3)}px`)
									: (i.style[e] = ''),
							  (p += t.dim + t.gap),
							  d++)
							: (h += t.dim + t.gap)
					}
					if (n && p && s) {
						let i = getComputedStyle(s),
							n = 'padding',
							a = t ? 'Right' : 'Bottom',
							l = parseFloat(i[n + (t ? 'Left' : 'Top')])
						;(f -= l), (r += l), (r += parseFloat(i[n + a]))
						for (const t of c)
							t.el &&
								(au(t.pos) < au(r) &&
									au(t.pos + t.dim + t.gap) < au(f) &&
									au(f) > au(o - r) &&
									(t.el.style[e] = `${au(h + p, 1e3)}px`),
								au(t.pos + t.gap) >= au(o - r) &&
									au(t.pos) > au(f + r) &&
									au(f) < au(r) &&
									(t.el.style[e] = `-${au(p, 1e3)}px`))
					}
					let g,
						m,
						v = [...this.inTransition]
					if ((v.length > 1 && ((g = l[v[0]]), (m = l[v[1]])), g && m)) {
						let t = 0
						for (const i of c)
							i.el
								? this.inTransition.has(i.index) &&
								  g.slides.indexOf(i) < 0 &&
								  (i.el.style[e] = `${au(t + (g.pos - m.pos), 1e3)}px`)
								: (t += i.dim + i.gap)
					}
				}
				createSlideEl(e) {
					const { track: t, slides: i } = this
					if (!t || !e) return
					if (e.el && e.el.parentNode) return
					const n = e.el || document.createElement('div')
					Au(n, this.cn(id)), Au(n, e.class), Au(n, e.customClass)
					const s = e.html
					s && (s instanceof HTMLElement ? n.appendChild(s) : (n.innerHTML = e.html + ''))
					const r = []
					i.forEach((e, t) => {
						e.el && r.push(t)
					})
					const o = e.index
					let a = null
					r.length &&
						(a = i[r.reduce((e, t) => (Math.abs(t - o) < Math.abs(e - o) ? t : e))])
					const l =
						a && a.el && a.el.parentNode
							? a.index < e.index
								? a.el.nextSibling
								: a.el
							: null
					t.insertBefore(n, t.contains(l) ? l : null),
						(e.el = n),
						this.emit('createSlide', e)
				}
				removeSlideEl(e, t = !1) {
					const i = null == e ? void 0 : e.el
					if (!i || !i.parentNode) return
					const n = this.cn(td)
					if (
						(i.classList.contains(n) && (Fu(i, n), this.emit('unselectSlide', e)),
						e.isDom && !t)
					)
						return (
							i.removeAttribute('aria-hidden'),
							i.removeAttribute('data-index'),
							void (i.style.left = '')
						)
					this.emit('removeSlide', e)
					const s = new CustomEvent(ed)
					i.dispatchEvent(s), e.el && (e.el.remove(), (e.el = null))
				}
				transitionTo(e = 0, t = this.option('transition')) {
					var i, n, s, r
					if (!t) return !1
					const o = this.page,
						{ pages: a, panzoom: l } = this
					e = parseInt((e || 0).toString()) || 0
					const c = this.getPageFromIndex(e)
					if (
						!l ||
						!a[c] ||
						a.length < 2 ||
						Math.abs(
							((null ===
								(n = null === (i = a[o]) || void 0 === i ? void 0 : i.slides[0]) ||
							void 0 === n
								? void 0
								: n.dim) || 0) - this.viewportDim
						) > 1
					)
						return !1
					let u = e > o ? 1 : -1
					this.isInfinite &&
						(0 === o && e === a.length - 1 && (u = -1),
						o === a.length - 1 && 0 === e && (u = 1))
					const d = a[c].pos * (this.isRTL ? 1 : -1)
					if (o === c && Math.abs(d - l.target[this.axis]) < 1) return !1
					this.clearTransitions()
					const h = l.isResting
					Au(this.container, this.cn('inTransition'))
					const p = (null === (s = a[o]) || void 0 === s ? void 0 : s.slides[0]) || null,
						f = (null === (r = a[c]) || void 0 === r ? void 0 : r.slides[0]) || null
					this.inTransition.add(f.index), this.createSlideEl(f)
					let g = p.el,
						m = f.el
					h || t === id || ((t = 'fadeFast'), (g = null))
					const v = this.isRTL ? 'next' : 'prev',
						b = this.isRTL ? 'prev' : 'next'
					return (
						g &&
							(this.inTransition.add(p.index),
							(p.transition = t),
							g.addEventListener(ed, this.onAnimationEnd),
							g.classList.add(`f-${t}Out`, `to-${u > 0 ? b : v}`)),
						m &&
							((f.transition = t),
							m.addEventListener(ed, this.onAnimationEnd),
							m.classList.add(`f-${t}In`, `from-${u > 0 ? v : b}`)),
						(l.current[this.axis] = d),
						(l.target[this.axis] = d),
						l.requestTick(),
						this.onChange(c),
						!0
					)
				}
				manageSlideVisiblity() {
					const e = new Set(),
						t = new Set(),
						i = this.getVisibleSlides(parseFloat(this.option('preload', 0) + '') || 0)
					for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n)
					for (const t of this.inTransition) e.add(this.slides[t])
					for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t)
					for (const i of t) e.has(i) || this.removeSlideEl(i)
					this.markSelectedSlides(), this.repositionSlides()
				}
				markSelectedSlides() {
					if (!this.pages[this.page] || !this.pages[this.page].slides) return
					const e = 'aria-hidden'
					let t = this.cn(td)
					if (t)
						for (const i of this.slides) {
							const n = i.el
							n &&
								((n.dataset.index = `${i.index}`),
								n.classList.contains('f-thumbs__slide')
									? this.getVisibleSlides(0).has(i)
										? n.removeAttribute(e)
										: n.setAttribute(e, 'true')
									: this.pages[this.page].slides.includes(i)
									? (n.classList.contains(t) || (Au(n, t), this.emit('selectSlide', i)),
									  n.removeAttribute(e))
									: (n.classList.contains(t) && (Fu(n, t), this.emit('unselectSlide', i)),
									  n.setAttribute(e, 'true')))
						}
				}
				flipInfiniteTrack() {
					const {
							axis: e,
							isHorizontal: t,
							isInfinite: i,
							isRTL: n,
							viewportDim: s,
							contentDim: r,
						} = this,
						o = this.panzoom
					if (!o || !i) return
					let a = o.current[e],
						l = o.target[e] - a,
						c = 0,
						u = 0.5 * s
					n && t
						? (a < -u && ((c = -1), (a += r)), a > r - u && ((c = 1), (a -= r)))
						: (a > u && ((c = 1), (a -= r)), a < -r + u && ((c = -1), (a += r))),
						c && ((o.current[e] = a), (o.target[e] = a + l))
				}
				lazyLoadImg(e, t) {
					const i = this,
						n = 'f-fadeIn',
						s = 'is-preloading'
					let r = !1,
						o = null
					const a = () => {
						r ||
							((r = !0),
							o && (o.remove(), (o = null)),
							Fu(t, s),
							t.complete &&
								(Au(t, n),
								setTimeout(() => {
									Fu(t, n)
								}, 350)),
							this.option('adaptiveHeight') &&
								e.el &&
								this.pages[this.page].slides.indexOf(e) > -1 &&
								(i.updateMetrics(), i.setViewportHeight()),
							this.emit('load', e))
					}
					Au(t, s),
						(t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ''),
						delete t.dataset.lazySrc,
						delete t.dataset.lazySrcset,
						t.addEventListener('error', () => {
							a()
						}),
						t.addEventListener('load', () => {
							a()
						}),
						setTimeout(() => {
							const i = t.parentNode
							i && e.el && (t.complete ? a() : r || ((o = uu(Mu)), i.insertBefore(o, t)))
						}, 300)
				}
				lazyLoadSlide(e) {
					const t = e && e.el
					if (!t) return
					const i = new Set()
					let n = Array.from(t.querySelectorAll('[data-lazy-src],[data-lazy-srcset]'))
					t.dataset.lazySrc && n.push(t),
						n.map((e) => {
							e instanceof HTMLImageElement
								? i.add(e)
								: e instanceof HTMLElement &&
								  e.dataset.lazySrc &&
								  ((e.style.backgroundImage = `url('${e.dataset.lazySrc}')`),
								  delete e.dataset.lazySrc)
						})
					for (const t of i) this.lazyLoadImg(e, t)
				}
				onAnimationEnd(e) {
					var t
					const i = e.target,
						n = i ? parseInt(i.dataset.index || '', 10) || 0 : -1,
						s = this.slides[n],
						r = e.animationName
					if (!i || !s || !r) return
					const o = !!this.inTransition.has(n) && s.transition
					o && r.substring(0, o.length + 2) === `f-${o}` && this.inTransition.delete(n),
						this.inTransition.size || this.clearTransitions(),
						n === this.page &&
							(null === (t = this.panzoom) || void 0 === t ? void 0 : t.isResting) &&
							this.emit('settle')
				}
				onDecel(e, t = 0, i = 0, n = 0, s = 0) {
					if (this.option('dragFree')) return void this.setPageFromPosition()
					const { isRTL: r, isHorizontal: o, axis: a, pages: l } = this,
						c = l.length,
						u = Math.abs(Math.atan2(i, t) / (Math.PI / 180))
					let d = 0
					if (((d = u > 45 && u < 135 ? (o ? 0 : i) : o ? t : 0), !c)) return
					let h = this.page,
						p = r && o ? 1 : -1
					const f = e.current[a] * p
					let { pageIndex: g } = this.getPageFromPosition(f)
					Math.abs(d) > 5
						? (l[h].dim <
								document.documentElement[
									'client' + (this.isHorizontal ? 'Width' : 'Height')
								] -
									1 && (h = g),
						  (h = r && o ? (d < 0 ? h - 1 : h + 1) : d < 0 ? h + 1 : h - 1))
						: (h = 0 === n && 0 === s ? h : g),
						this.slideTo(h, { transition: !1, friction: e.option('decelFriction') })
				}
				onClick(e) {
					const t = e.target,
						i = t && Pu(t) ? t.dataset : null
					let n, s
					i &&
						(void 0 !== i.carouselPage
							? ((s = 'slideTo'), (n = i.carouselPage))
							: void 0 !== i.carouselNext
							? (s = 'slideNext')
							: void 0 !== i.carouselPrev && (s = 'slidePrev')),
						s
							? (e.preventDefault(),
							  e.stopPropagation(),
							  t && !t.hasAttribute('disabled') && this[s](n))
							: this.emit('click', e)
				}
				onSlideTo(e) {
					const t = e.detail || 0
					this.slideTo(this.getPageForSlide(t), { friction: 0 })
				}
				onChange(e, t = 0) {
					const i = this.page
					;(this.prevPage = i),
						(this.page = e),
						this.option('adaptiveHeight') && this.setViewportHeight(),
						e !== i && (this.markSelectedSlides(), this.emit('change', e, i, t))
				}
				onRefresh() {
					let e = this.contentDim,
						t = this.viewportDim
					this.updateMetrics(),
						(this.contentDim === e && this.viewportDim === t) ||
							this.slideTo(this.page, { friction: 0, transition: !1 })
				}
				onScroll() {
					var e
					null === (e = this.viewport) || void 0 === e || e.scroll(0, 0)
				}
				onResize() {
					this.option('breakpoints') && this.processOptions()
				}
				onBeforeTransform(e) {
					this.lp !== e.current[this.axis] &&
						(this.flipInfiniteTrack(), this.manageSlideVisiblity()),
						(this.lp = e.current.e)
				}
				onEndAnimation() {
					this.inTransition.size || this.emit('settle')
				}
				reInit(e = null, t = null) {
					this.destroy(),
						(this.state = qu.Init),
						(this.prevPage = null),
						(this.userOptions = e || this.userOptions),
						(this.userPlugins = t || this.userPlugins),
						this.processOptions()
				}
				slideTo(
					e = 0,
					{
						friction: t = this.option('friction'),
						transition: i = this.option('transition'),
					} = {}
				) {
					if (this.state === qu.Destroy) return
					e = parseInt((e || 0).toString()) || 0
					const n = this.getPageFromIndex(e),
						{ axis: s, isHorizontal: r, isRTL: o, pages: a, panzoom: l } = this,
						c = a.length,
						u = o && r ? 1 : -1
					if (!l || !c) return
					if (this.page !== n) {
						const t = new Event('beforeChange', { bubbles: !0, cancelable: !0 })
						if ((this.emit('beforeChange', t, e), t.defaultPrevented)) return
					}
					if (this.transitionTo(e, i)) return
					let d = a[n].pos
					if (this.isInfinite) {
						const t = this.contentDim,
							i = l.target[s] * u
						2 === c
							? (d += t * Math.floor(parseFloat(e + '') / 2))
							: (d = [d, d - t, d + t].reduce(function (e, t) {
									return Math.abs(t - i) < Math.abs(e - i) ? t : e
							  }))
					}
					;(d *= u),
						Math.abs(l.target[s] - d) < 1 ||
							(l.panTo({ x: r ? d : 0, y: r ? 0 : d, friction: t }), this.onChange(n))
				}
				slideToClosest(e) {
					if (this.panzoom) {
						const { pageIndex: t } = this.getPageFromPosition()
						this.slideTo(t, e)
					}
				}
				slideNext() {
					this.slideTo(this.page + 1)
				}
				slidePrev() {
					this.slideTo(this.page - 1)
				}
				clearTransitions() {
					this.inTransition.clear(), Fu(this.container, this.cn('inTransition'))
					const e = ['to-prev', 'to-next', 'from-prev', 'from-next']
					for (const t of this.slides) {
						const i = t.el
						if (i) {
							i.removeEventListener(ed, this.onAnimationEnd), i.classList.remove(...e)
							const n = t.transition
							n && i.classList.remove(`f-${n}Out`, `f-${n}In`)
						}
					}
					this.manageSlideVisiblity()
				}
				addSlide(e, t) {
					var i, n, s, r
					const o = this.panzoom,
						a =
							(null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) ||
							0,
						l =
							(null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) ||
							0,
						c = this.contentDim < this.viewportDim
					let u = Array.isArray(t) ? t : [t]
					const d = []
					for (const e of u) d.push(Vu(e))
					this.slides.splice(e, 0, ...d)
					for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e
					for (const e of d) this.emit('beforeInitSlide', e, e.index)
					if ((this.page >= e && (this.page += d.length), this.updateMetrics(), o)) {
						const t =
								(null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) ||
								0,
							i =
								(null === (r = this.pages[this.page]) || void 0 === r ? void 0 : r.dim) ||
								0,
							n = this.pages.length || 1,
							u = this.isRTL ? l - i : i - l,
							d = this.isRTL ? a - t : t - a
						c && 1 === n
							? (e <= this.page &&
									((o.current[this.axis] -= u), (o.target[this.axis] -= u)),
							  o.panTo({ [this.isHorizontal ? 'x' : 'y']: -1 * t }))
							: d &&
							  e <= this.page &&
							  ((o.target[this.axis] -= d), (o.current[this.axis] -= d), o.requestTick())
					}
					for (const e of d) this.emit('initSlide', e, e.index)
				}
				prependSlide(e) {
					this.addSlide(0, e)
				}
				appendSlide(e) {
					this.addSlide(this.slides.length, e)
				}
				removeSlide(e) {
					const t = this.slides.length
					e = ((e % t) + t) % t
					const i = this.slides[e]
					if (i) {
						this.removeSlideEl(i, !0), this.slides.splice(e, 1)
						for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e
						this.updateMetrics(),
							this.slideTo(this.page, { friction: 0, transition: !1 }),
							this.emit('destroySlide', i)
					}
				}
				updateMetrics() {
					const {
						panzoom: e,
						viewport: t,
						track: i,
						slides: n,
						isHorizontal: s,
						isInfinite: r,
					} = this
					if (!i) return
					const o = s ? 'width' : 'height',
						a = s ? 'offsetWidth' : 'offsetHeight'
					if (t) {
						let e = Math.max(t[a], au(t.getBoundingClientRect()[o], 1e3)),
							i = getComputedStyle(t),
							n = 'padding',
							r = s ? 'Right' : 'Bottom'
						;(e -= parseFloat(i[n + (s ? 'Left' : 'Top')]) + parseFloat(i[n + r])),
							(this.viewportDim = e)
					}
					let l,
						c = 0
					for (const [e, t] of n.entries()) {
						let i = 0,
							s = 0
						!t.el && l
							? ((i = l.dim), (s = l.gap))
							: (({ dim: i, gap: s } = this.getSlideMetrics(t)), (l = t)),
							(i = au(i, 1e3)),
							(s = au(s, 1e3)),
							(t.dim = i),
							(t.gap = s),
							(t.pos = c),
							(c += i),
							(r || e < n.length - 1) && (c += s)
					}
					;(c = au(c, 1e3)),
						(this.contentDim = c),
						e &&
							((e.contentRect[o] = c),
							(e.contentRect[s ? 'fullWidth' : 'fullHeight'] = c)),
						(this.pages = this.createPages()),
						(this.pages = this.processPages()),
						this.state === qu.Init && this.setInitialPage(),
						(this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
						this.manageSlideVisiblity(),
						this.emit('refresh')
				}
				getProgress(e, t = !1, i = !1) {
					void 0 === e && (e = this.page)
					const n = this,
						s = n.panzoom,
						r = n.contentDim,
						o = n.pages[e] || 0
					if (!o || !s) return e > this.page ? -1 : 1
					let a = -1 * s.current.e,
						l = au((a - o.pos) / (1 * o.dim), 1e3),
						c = l,
						u = l
					this.isInfinite &&
						!0 !== i &&
						((c = au((a - o.pos + r) / (1 * o.dim), 1e3)),
						(u = au((a - o.pos - r) / (1 * o.dim), 1e3)))
					let d = [l, c, u].reduce(function (e, t) {
						return Math.abs(t) < Math.abs(e) ? t : e
					})
					return t ? d : d > 1 ? 1 : d < -1 ? -1 : d
				}
				setViewportHeight() {
					const { page: e, pages: t, viewport: i, isHorizontal: n } = this
					if (!i || !t[e]) return
					let s = 0
					n &&
						this.track &&
						((this.track.style.height = 'auto'),
						t[e].slides.forEach((e) => {
							e.el && (s = Math.max(s, e.el.offsetHeight))
						})),
						(i.style.height = s ? `${s}px` : '')
				}
				getPageForSlide(e) {
					for (const t of this.pages)
						for (const i of t.slides) if (i.index === e) return t.index
					return -1
				}
				getVisibleSlides(e = 0) {
					var t
					const i = new Set()
					let { panzoom: n, contentDim: s, viewportDim: r, pages: o, page: a } = this
					if (r) {
						s =
							s +
								(null === (t = this.slides[this.slides.length - 1]) || void 0 === t
									? void 0
									: t.gap) || 0
						let l = 0
						;(l =
							n && n.state !== Eu.Init && n.state !== Eu.Destroy
								? -1 * n.current[this.axis]
								: (o[a] && o[a].pos) || 0),
							this.isInfinite && (l -= Math.floor(l / s) * s),
							this.isRTL && this.isHorizontal && (l *= -1)
						const c = l - r * e,
							u = l + r * (e + 1),
							d = this.isInfinite ? [-1, 0, 1] : [0]
						for (const e of this.slides)
							for (const t of d) {
								const n = e.pos + t * s,
									r = n + e.dim + e.gap
								n < u && r > c && i.add(e)
							}
					}
					return i
				}
				getPageFromPosition(e) {
					const { viewportDim: t, contentDim: i, slides: n, pages: s, panzoom: r } = this,
						o = s.length,
						a = n.length,
						l = n[0],
						c = n[a - 1],
						u = this.option('center')
					let d = 0,
						h = 0,
						p = 0,
						f = void 0 === e ? -1 * ((null == r ? void 0 : r.target[this.axis]) || 0) : e
					u && (f += 0.5 * t),
						this.isInfinite
							? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
							  f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
							: (f = Math.max(l.pos || 0, Math.min(f, c.pos)))
					let g = c,
						m = n.find((e) => {
							const t = e.pos - 0.5 * g.gap,
								i = e.pos + e.dim + 0.5 * e.gap
							return (g = e), f >= t && f < i
						})
					return (
						m || (m = c),
						(h = this.getPageForSlide(m.index)),
						(d = h + p * o),
						{ page: d, pageIndex: h }
					)
				}
				setPageFromPosition() {
					const { pageIndex: e } = this.getPageFromPosition()
					this.onChange(e)
				}
				destroy() {
					if ([qu.Destroy].includes(this.state)) return
					this.state = qu.Destroy
					const { container: e, viewport: t, track: i, slides: n, panzoom: s } = this,
						r = this.option('classes')
					e.removeEventListener('click', this.onClick, { passive: !1, capture: !1 }),
						e.removeEventListener('slideTo', this.onSlideTo),
						window.removeEventListener('resize', this.onResize),
						s && (s.destroy(), (this.panzoom = null)),
						n &&
							n.forEach((e) => {
								this.removeSlideEl(e)
							}),
						this.detachPlugins(),
						t &&
							(t.removeEventListener('scroll', this.onScroll),
							t.offsetParent && i && i.offsetParent && t.replaceWith(...i.childNodes))
					for (const [t, i] of Object.entries(r))
						'container' !== t && i && e.classList.remove(i)
					;(this.track = null),
						(this.viewport = null),
						(this.page = 0),
						(this.slides = [])
					const o = this.events.get('ready')
					;(this.events = new Map()), o && this.events.set('ready', o)
				}
			}
			Object.defineProperty(nd, 'Panzoom', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: ju,
			}),
				Object.defineProperty(nd, 'defaults', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {
						viewport: null,
						track: null,
						enabled: !0,
						slides: [],
						axis: 'x',
						transition: 'fade',
						preload: 1,
						slidesPerPage: 'auto',
						initialPage: 0,
						friction: 0.12,
						Panzoom: { decelFriction: 0.12 },
						center: !0,
						infinite: !0,
						fill: !0,
						dragFree: !1,
						adaptiveHeight: !1,
						direction: 'ltr',
						classes: {
							container: 'f-carousel',
							viewport: 'f-carousel__viewport',
							track: 'f-carousel__track',
							slide: 'f-carousel__slide',
							isLTR: 'is-ltr',
							isRTL: 'is-rtl',
							isHorizontal: 'is-horizontal',
							isVertical: 'is-vertical',
							inTransition: 'in-transition',
							isSelected: 'is-selected',
						},
						l10n: { NEXT: 'Next slide', PREV: 'Previous slide', GOTO: 'Go to slide #%d' },
					},
				}),
				Object.defineProperty(nd, 'Plugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Qu,
				})
			const sd = function (e) {
					if (!Pu(e)) return 0
					const t = window.scrollY,
						i = window.innerHeight,
						n = t + i,
						s = e.getBoundingClientRect(),
						r = s.y + t,
						o = s.height,
						a = r + o
					if (t > a || n < r) return 0
					if (t < r && n > a) return 100
					if (r < t && a > n) return 100
					let l = o
					r < t && (l -= t - r), a > n && (l -= a - n)
					const c = (l / i) * 100
					return Math.round(c)
				},
				rd = !(
					'undefined' == typeof window ||
					!window.document ||
					!window.document.createElement
				)
			let od
			const ad = [
					'a[href]',
					'area[href]',
					'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
					'select:not([disabled]):not([aria-hidden])',
					'textarea:not([disabled]):not([aria-hidden])',
					'button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)',
					'iframe',
					'object',
					'embed',
					'video',
					'audio',
					'[contenteditable]',
					'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
				].join(','),
				ld = (e) => {
					if (e && rd) {
						void 0 === od &&
							document.createElement('div').focus({
								get preventScroll() {
									return (od = !0), !1
								},
							})
						try {
							if (od) e.focus({ preventScroll: !0 })
							else {
								const t = window.scrollY || document.body.scrollTop,
									i = window.scrollX || document.body.scrollLeft
								e.focus(), document.body.scrollTo({ top: t, left: i, behavior: 'auto' })
							}
						} catch (e) {}
					}
				},
				cd = () => {
					const e = document
					let t,
						i = '',
						n = '',
						s = ''
					return (
						e.fullscreenEnabled
							? ((i = 'requestFullscreen'),
							  (n = 'exitFullscreen'),
							  (s = 'fullscreenElement'))
							: e.webkitFullscreenEnabled &&
							  ((i = 'webkitRequestFullscreen'),
							  (n = 'webkitExitFullscreen'),
							  (s = 'webkitFullscreenElement')),
						i &&
							(t = {
								request: function (t = e.documentElement) {
									return 'webkitRequestFullscreen' === i
										? t[i](Element.ALLOW_KEYBOARD_INPUT)
										: t[i]()
								},
								exit: function () {
									return e[s] && e[n]()
								},
								isFullscreen: function () {
									return e[s]
								},
							}),
						t
					)
				},
				ud = {
					animated: !0,
					autoFocus: !0,
					backdropClick: 'close',
					Carousel: {
						classes: {
							container: 'fancybox__carousel',
							viewport: 'fancybox__viewport',
							track: 'fancybox__track',
							slide: 'fancybox__slide',
						},
					},
					closeButton: 'auto',
					closeExisting: !1,
					commonCaption: !1,
					compact: () =>
						window.matchMedia('(max-width: 578px), (max-height: 578px)').matches,
					contentClick: 'toggleZoom',
					contentDblClick: !1,
					defaultType: 'image',
					defaultDisplay: 'flex',
					dragToClose: !0,
					Fullscreen: { autoStart: !1 },
					groupAll: !1,
					groupAttr: 'data-fancybox',
					hideClass: 'f-fadeOut',
					hideScrollbar: !0,
					idle: 3500,
					keyboard: {
						Escape: 'close',
						Delete: 'close',
						Backspace: 'close',
						PageUp: 'next',
						PageDown: 'prev',
						ArrowUp: 'prev',
						ArrowDown: 'next',
						ArrowRight: 'next',
						ArrowLeft: 'prev',
					},
					l10n: Object.assign(Object.assign({}, Cu), {
						CLOSE: 'Close',
						NEXT: 'Next',
						PREV: 'Previous',
						MODAL: 'You can close this modal content with the ESC key',
						ERROR: 'Something Went Wrong, Please Try Again Later',
						IMAGE_ERROR: 'Image Not Found',
						ELEMENT_NOT_FOUND: 'HTML Element Not Found',
						AJAX_NOT_FOUND: 'Error Loading AJAX : Not Found',
						AJAX_FORBIDDEN: 'Error Loading AJAX : Forbidden',
						IFRAME_ERROR: 'Error Loading Page',
						TOGGLE_ZOOM: 'Toggle zoom level',
						TOGGLE_THUMBS: 'Toggle thumbnails',
						TOGGLE_SLIDESHOW: 'Toggle slideshow',
						TOGGLE_FULLSCREEN: 'Toggle full-screen mode',
						DOWNLOAD: 'Download',
					}),
					parentEl: null,
					placeFocusBack: !0,
					showClass: 'f-zoomInUp',
					startIndex: 0,
					tpl: {
						closeButton:
							'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
						main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
					},
					trapFocus: !0,
					wheel: 'zoom',
				}
			var dd, hd
			!(function (e) {
				;(e[(e.Init = 0)] = 'Init'),
					(e[(e.Ready = 1)] = 'Ready'),
					(e[(e.Closing = 2)] = 'Closing'),
					(e[(e.CustomClosing = 3)] = 'CustomClosing'),
					(e[(e.Destroy = 4)] = 'Destroy')
			})(dd || (dd = {})),
				(function (e) {
					;(e[(e.Loading = 0)] = 'Loading'),
						(e[(e.Opening = 1)] = 'Opening'),
						(e[(e.Ready = 2)] = 'Ready'),
						(e[(e.Closing = 3)] = 'Closing')
				})(hd || (hd = {}))
			let pd = '',
				fd = !1,
				gd = !1,
				md = null
			const vd = () => {
					let e = '',
						t = ''
					const i = Fh.getInstance()
					if (i) {
						const n = i.carousel,
							s = i.getSlide()
						if (n && s) {
							let r = s.slug || void 0,
								o = s.triggerEl || void 0
							;(t = r || i.option('slug') || ''),
								!t && o && o.dataset && (t = o.dataset.fancybox || ''),
								t &&
									'true' !== t &&
									(e = '#' + t + (!r && n.slides.length > 1 ? '-' + (s.index + 1) : ''))
						}
					}
					return { hash: e, slug: t, index: 1 }
				},
				bd = () => {
					const e = new URL(document.URL).hash,
						t = e.slice(1).split('-'),
						i = t[t.length - 1],
						n = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || '1', 10)) || 1
					return { hash: e, slug: t.join('-'), index: n }
				},
				yd = () => {
					const { slug: e, index: t } = bd()
					if (!e) return
					let i = document.querySelector(`[data-slug="${e}"]`)
					if (
						(i &&
							i.dispatchEvent(new CustomEvent('click', { bubbles: !0, cancelable: !0 })),
						Fh.getInstance())
					)
						return
					const n = document.querySelectorAll(`[data-fancybox="${e}"]`)
					n.length &&
						((i = n[t - 1]),
						i &&
							i.dispatchEvent(new CustomEvent('click', { bubbles: !0, cancelable: !0 })))
				},
				Dd = () => {
					if (!1 === Fh.defaults.Hash) return
					const e = Fh.getInstance()
					if (!1 === (null == e ? void 0 : e.options.Hash)) return
					const { slug: t, index: i } = bd(),
						{ slug: n } = vd()
					e && (t === n ? e.jumpTo(i - 1) : ((fd = !0), e.close())), yd()
				},
				wd = () => {
					md && clearTimeout(md),
						queueMicrotask(() => {
							Dd()
						})
				},
				xd = () => {
					window.addEventListener('hashchange', wd, !1),
						setTimeout(() => {
							Dd()
						}, 500)
				}
			rd &&
				(/complete|interactive|loaded/.test(document.readyState)
					? xd()
					: document.addEventListener('DOMContentLoaded', xd))
			const Ed = 'is-zooming-in'
			class _d extends Xu {
				onCreateSlide(e, t, i) {
					const n = this.instance.optionFor(i, 'src') || ''
					i.el && 'image' === i.type && 'string' == typeof n && this.setImage(i, n)
				}
				onRemoveSlide(e, t, i) {
					i.panzoom && i.panzoom.destroy(), (i.panzoom = void 0), (i.imageEl = void 0)
				}
				onChange(e, t, i, n) {
					Fu(this.instance.container, Ed)
					for (const e of t.slides) {
						const t = e.panzoom
						t && e.index !== i && t.reset(0.35)
					}
				}
				onClose() {
					var e
					const t = this.instance,
						i = t.container,
						n = t.getSlide()
					if (!i || !i.parentElement || !n) return
					const { el: s, contentEl: r, panzoom: o, thumbElSrc: a } = n
					if (
						!s ||
						!a ||
						!r ||
						!o ||
						o.isContentLoading ||
						o.state === Eu.Init ||
						o.state === Eu.Destroy
					)
						return
					o.updateMetrics()
					let l = this.getZoomInfo(n)
					if (!l) return
					;(this.instance.state = dd.CustomClosing),
						i.classList.remove(Ed),
						i.classList.add('is-zooming-out'),
						(r.style.backgroundImage = `url('${a}')`)
					const c = i.getBoundingClientRect()
					1 ===
						((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) ||
							1) &&
						Object.assign(i.style, {
							position: 'absolute',
							top: `${i.offsetTop + window.scrollY}px`,
							left: `${i.offsetLeft + window.scrollX}px`,
							bottom: 'auto',
							right: 'auto',
							width: `${c.width}px`,
							height: `${c.height}px`,
							overflow: 'hidden',
						})
					const { x: u, y: d, scale: h, opacity: p } = l
					if (p) {
						const e = ((e, t, i, n) => {
							const s = t - e
							return (t) => 1 + (((t - e) / s) * -1 || 0)
						})(o.scale, h)
						o.on('afterTransform', () => {
							r.style.opacity = e(o.scale) + ''
						})
					}
					o.on('endAnimation', () => {
						t.destroy()
					}),
						(o.target.a = h),
						(o.target.b = 0),
						(o.target.c = 0),
						(o.target.d = h),
						o.panTo({ x: u, y: d, scale: h, friction: p ? 0.2 : 0.33, ignoreBounds: !0 }),
						o.isResting && t.destroy()
				}
				setImage(e, t) {
					const i = this.instance
					;(e.src = t),
						this.process(e, t).then(
							(t) => {
								const { contentEl: n, imageEl: s, thumbElSrc: r, el: o } = e
								if (i.isClosing() || !n || !s) return
								n.offsetHeight
								const a = !!i.isOpeningSlide(e) && this.getZoomInfo(e)
								if (this.option('protected') && o) {
									o.addEventListener('contextmenu', (e) => {
										e.preventDefault()
									})
									const e = document.createElement('div')
									Au(e, 'fancybox-protected'), n.appendChild(e)
								}
								if (r && a) {
									const s = t.contentRect,
										o = Math.max(s.fullWidth, s.fullHeight)
									let c = null
									!a.opacity &&
										o > 1200 &&
										((c = document.createElement('img')),
										Au(c, 'fancybox-ghost'),
										(c.src = r),
										n.appendChild(c))
									const u = () => {
										c &&
											(Au(c, 'f-fadeFastOut'),
											setTimeout(() => {
												c && (c.remove(), (c = null))
											}, 200))
									}
									;((l = r),
									new Promise((e, t) => {
										const i = new Image()
										;(i.onload = e), (i.onerror = t), (i.src = l)
									})).then(
										() => {
											i.hideLoading(e),
												(e.state = hd.Opening),
												this.instance.emit('reveal', e),
												this.zoomIn(e).then(
													() => {
														u(), this.instance.done(e)
													},
													() => {}
												),
												c &&
													setTimeout(
														() => {
															u()
														},
														o > 2500 ? 800 : 200
													)
										},
										() => {
											i.hideLoading(e), i.revealContent(e)
										}
									)
								} else {
									const n = this.optionFor(e, 'initialSize'),
										s = this.optionFor(e, 'zoom'),
										r = {
											event: i.prevMouseMoveEvent || i.options.event,
											friction: s ? 0.12 : 0,
										}
									let o = i.optionFor(e, 'showClass') || void 0,
										a = !0
									i.isOpeningSlide(e) &&
										('full' === n
											? t.zoomToFull(r)
											: 'cover' === n
											? t.zoomToCover(r)
											: 'max' === n
											? t.zoomToMax(r)
											: (a = !1),
										t.stop('current')),
										a && o && (o = t.isDragging ? 'f-fadeIn' : ''),
										i.hideLoading(e),
										i.revealContent(e, o)
								}
								var l
							},
							() => {
								i.setError(e, '{{IMAGE_ERROR}}')
							}
						)
				}
				process(e, t) {
					return new Promise((i, n) => {
						var s
						const r = this.instance,
							o = e.el
						r.clearContent(e), r.showLoading(e)
						let a = this.optionFor(e, 'content')
						if (('string' == typeof a && (a = uu(a)), !a || !Pu(a))) {
							if (((a = document.createElement('img')), a instanceof HTMLImageElement)) {
								let i = '',
									n = e.caption
								;(i =
									'string' == typeof n && n
										? n.replace(/<[^>]+>/gi, '').substring(0, 1e3)
										: `Image ${e.index + 1} of ${
												(null === (s = r.carousel) || void 0 === s
													? void 0
													: s.pages.length) || 1
										  }`),
									(a.src = t || ''),
									(a.alt = i),
									(a.draggable = !1),
									e.srcset && a.setAttribute('srcset', e.srcset),
									this.instance.isOpeningSlide(e) && (a.fetchPriority = 'high')
							}
							e.sizes && a.setAttribute('sizes', e.sizes)
						}
						Au(a, 'fancybox-image'),
							(e.imageEl = a),
							r.setContent(e, a, !1),
							(e.panzoom = new ju(
								o,
								yu({ transformParent: !0 }, this.option('Panzoom') || {}, {
									content: a,
									width: (t, i) => r.optionFor(e, 'width', 'auto', i) || 'auto',
									height: (t, i) => r.optionFor(e, 'height', 'auto', i) || 'auto',
									wheel: () => {
										const e = r.option('wheel')
										return ('zoom' === e || 'pan' == e) && e
									},
									click: (t, i) => {
										var n, s
										if (r.isCompact || r.isClosing()) return !1
										if (
											e.index !==
											(null === (n = r.getSlide()) || void 0 === n ? void 0 : n.index)
										)
											return !1
										if (i) {
											const e = i.composedPath()[0]
											if (
												[
													'A',
													'BUTTON',
													'TEXTAREA',
													'OPTION',
													'INPUT',
													'SELECT',
													'VIDEO',
												].includes(e.nodeName)
											)
												return !1
										}
										let o =
											!i ||
											(i.target &&
												(null === (s = e.contentEl) || void 0 === s
													? void 0
													: s.contains(i.target)))
										return r.option(o ? 'contentClick' : 'backdropClick') || !1
									},
									dblClick: () =>
										r.isCompact ? 'toggleZoom' : r.option('contentDblClick') || !1,
									spinner: !1,
									panOnlyZoomed: !0,
									wheelLimit: 1 / 0,
									on: {
										ready: (e) => {
											i(e)
										},
										error: () => {
											n()
										},
										destroy: () => {
											n()
										},
									},
								})
							))
					})
				}
				zoomIn(e) {
					return new Promise((t, i) => {
						const n = this.instance,
							s = n.container,
							{ panzoom: r, contentEl: o, el: a } = e
						r && r.updateMetrics()
						const l = this.getZoomInfo(e)
						if (!(l && a && o && r && s)) return void i()
						const { x: c, y: u, scale: d, opacity: h } = l,
							p = () => {
								e.state !== hd.Closing &&
									(h &&
										(o.style.opacity =
											Math.max(Math.min(1, 1 - (1 - r.scale) / (1 - d)), 0) + ''),
									r.scale >= 1 && r.scale > r.targetScale - 0.1 && t(r))
							},
							f = (e) => {
								;((e.scale < 0.99 || e.scale > 1.01) && !e.isDragging) ||
									(Fu(s, Ed),
									(o.style.opacity = ''),
									e.off('endAnimation', f),
									e.off('touchStart', f),
									e.off('afterTransform', p),
									t(e))
							}
						r.on('endAnimation', f),
							r.on('touchStart', f),
							r.on('afterTransform', p),
							r.on(['error', 'destroy'], () => {
								i()
							}),
							r.panTo({ x: c, y: u, scale: d, friction: 0, ignoreBounds: !0 }),
							r.stop('current')
						const g = {
								event:
									'mousemove' === r.panMode
										? n.prevMouseMoveEvent || n.options.event
										: void 0,
							},
							m = this.optionFor(e, 'initialSize')
						Au(s, Ed),
							n.hideLoading(e),
							'full' === m
								? r.zoomToFull(g)
								: 'cover' === m
								? r.zoomToCover(g)
								: 'max' === m
								? r.zoomToMax(g)
								: r.reset(0.172)
					})
				}
				getZoomInfo(e) {
					const { el: t, imageEl: i, thumbEl: n, panzoom: s } = e,
						r = this.instance,
						o = r.container
					if (
						!t ||
						!i ||
						!n ||
						!s ||
						sd(n) < 3 ||
						!this.optionFor(e, 'zoom') ||
						!o ||
						r.state === dd.Destroy
					)
						return !1
					if ('0' === getComputedStyle(o).getPropertyValue('--f-images-zoom')) return !1
					const a = window.visualViewport || null
					if (1 !== (a ? a.scale : 1)) return !1
					let { top: l, left: c, width: u, height: d } = n.getBoundingClientRect(),
						{ top: h, left: p, fitWidth: f, fitHeight: g } = s.contentRect
					if (!(u && d && f && g)) return !1
					const m = s.container.getBoundingClientRect()
					;(p += m.left), (h += m.top)
					const v = -1 * (p + 0.5 * f - (c + 0.5 * u)),
						b = -1 * (h + 0.5 * g - (l + 0.5 * d)),
						y = u / f
					let D = this.option('zoomOpacity') || !1
					return (
						'auto' === D && (D = Math.abs(u / d - f / g) > 0.1),
						{ x: v, y: b, scale: y, opacity: D }
					)
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('Carousel.change', e.onChange),
						t.on('Carousel.createSlide', e.onCreateSlide),
						t.on('Carousel.removeSlide', e.onRemoveSlide),
						t.on('close', e.onClose)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('Carousel.change', e.onChange),
						t.off('Carousel.createSlide', e.onCreateSlide),
						t.off('Carousel.removeSlide', e.onRemoveSlide),
						t.off('close', e.onClose)
				}
			}
			Object.defineProperty(_d, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					initialSize: 'fit',
					Panzoom: { maxScale: 1 },
					protected: !1,
					zoom: !0,
					zoomOpacity: 'auto',
				},
			}),
				'function' == typeof SuppressedError && SuppressedError
			const Cd = 'html',
				Td = 'image',
				Sd = 'map',
				Md = 'youtube',
				Pd = 'vimeo',
				Fd = 'html5video',
				Ad = (e, t = {}) => {
					const i = new URL(e),
						n = new URLSearchParams(i.search),
						s = new URLSearchParams()
					for (const [e, i] of [...n, ...Object.entries(t)]) {
						let t = i + ''
						if ('t' === e) {
							let e = t.match(/((\d*)m)?(\d*)s?/)
							e && s.set('start', 60 * parseInt(e[2] || '0') + parseInt(e[3] || '0') + '')
						} else s.set(e, t)
					}
					let r = s + '',
						o = e.match(/#t=((.*)?\d+s)/)
					return o && (r += `#t=${o[1]}`), r
				},
				Od = [
					'image',
					'html',
					'ajax',
					'inline',
					'clone',
					'iframe',
					'map',
					'pdf',
					'html5video',
					'youtube',
					'vimeo',
				]
			class Ld extends Xu {
				onBeforeInitSlide(e, t, i) {
					this.processType(i)
				}
				onCreateSlide(e, t, i) {
					this.setContent(i)
				}
				onClearContent(e, t) {
					t.xhr && (t.xhr.abort(), (t.xhr = null))
					const i = t.iframeEl
					i &&
						((i.onload = i.onerror = null),
						(i.src = '//about:blank'),
						(t.iframeEl = null))
					const n = t.contentEl,
						s = t.placeholderEl
					if ('inline' === t.type && n && s)
						n.classList.remove('fancybox__content'),
							'none' !== getComputedStyle(n).getPropertyValue('display') &&
								(n.style.display = 'none'),
							setTimeout(() => {
								s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove())
							}, 0),
							(t.contentEl = void 0),
							(t.placeholderEl = void 0)
					else for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild)
				}
				onSelectSlide(e, t, i) {
					i.state === hd.Ready && this.playVideo()
				}
				onUnselectSlide(e, t, i) {
					var n, s
					if (i.type === Fd) {
						try {
							null ===
								(s =
									null === (n = i.el) || void 0 === n
										? void 0
										: n.querySelector('video')) ||
								void 0 === s ||
								s.pause()
						} catch (e) {}
						return
					}
					let r
					i.type === Pd
						? (r = { method: 'pause', value: 'true' })
						: i.type === Md && (r = { event: 'command', func: 'pauseVideo' }),
						r &&
							i.iframeEl &&
							i.iframeEl.contentWindow &&
							i.iframeEl.contentWindow.postMessage(JSON.stringify(r), '*'),
						i.poller && clearTimeout(i.poller)
				}
				onDone(e, t) {
					e.isCurrentSlide(t) && !e.isClosing() && this.playVideo()
				}
				onRefresh(e, t) {
					t.slides.forEach((e) => {
						e.el && (this.resizeIframe(e), this.setAspectRatio(e))
					})
				}
				onMessage(e) {
					try {
						let t = JSON.parse(e.data)
						if ('https://player.vimeo.com' === e.origin) {
							if ('ready' === t.event)
								for (let t of Array.from(
									document.getElementsByClassName('fancybox__iframe')
								))
									t instanceof HTMLIFrameElement &&
										t.contentWindow === e.source &&
										(t.dataset.ready = 'true')
						} else if (
							e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
							'onReady' === t.event
						) {
							const e = document.getElementById(t.id)
							e && (e.dataset.ready = 'true')
						}
					} catch (e) {}
				}
				loadAjaxContent(e) {
					const t = this.instance.optionFor(e, 'src') || ''
					this.instance.showLoading(e)
					const i = this.instance,
						n = new XMLHttpRequest()
					i.showLoading(e),
						(n.onreadystatechange = function () {
							n.readyState === XMLHttpRequest.DONE &&
								i.state === dd.Ready &&
								(i.hideLoading(e),
								200 === n.status
									? i.setContent(e, n.responseText)
									: i.setError(
											e,
											404 === n.status ? '{{AJAX_NOT_FOUND}}' : '{{AJAX_FORBIDDEN}}'
									  ))
						})
					const s = e.ajax || null
					n.open(s ? 'POST' : 'GET', t + ''),
						n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
						n.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
						n.send(s),
						(e.xhr = n)
				}
				setInlineContent(e) {
					let t = null
					if (Pu(e.src)) t = e.src
					else if ('string' == typeof e.src) {
						const i = e.src.split('#', 2).pop()
						t = i ? document.getElementById(i) : null
					}
					if (t) {
						if ('clone' === e.type || t.closest('.fancybox__slide')) {
							t = t.cloneNode(!0)
							const i = t.dataset.animationName
							i && (t.classList.remove(i), delete t.dataset.animationName)
							let n = t.getAttribute('id')
							;(n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`),
								t.setAttribute('id', n)
						} else if (t.parentNode) {
							const i = document.createElement('div')
							i.classList.add('fancybox-placeholder'),
								t.parentNode.insertBefore(i, t),
								(e.placeholderEl = i)
						}
						this.instance.setContent(e, t)
					} else this.instance.setError(e, '{{ELEMENT_NOT_FOUND}}')
				}
				setIframeContent(e) {
					const { src: t, el: i } = e
					if (!t || 'string' != typeof t || !i) return
					i.classList.add('is-loading')
					const n = this.instance,
						s = document.createElement('iframe')
					;(s.className = 'fancybox__iframe'),
						s.setAttribute('id', `fancybox__iframe_${n.id}_${e.index}`)
					for (const [t, i] of Object.entries(this.optionFor(e, 'iframeAttr') || {}))
						s.setAttribute(t, i)
					;(s.onerror = () => {
						n.setError(e, '{{IFRAME_ERROR}}')
					}),
						(e.iframeEl = s)
					const r = this.optionFor(e, 'preload')
					if ('iframe' !== e.type || !1 === r)
						return (
							s.setAttribute('src', e.src + ''),
							n.setContent(e, s, !1),
							this.resizeIframe(e),
							void n.revealContent(e)
						)
					n.showLoading(e),
						(s.onload = () => {
							if (!s.src.length) return
							const t = 'true' !== s.dataset.ready
							;(s.dataset.ready = 'true'),
								this.resizeIframe(e),
								t ? n.revealContent(e) : n.hideLoading(e)
						}),
						s.setAttribute('src', t),
						n.setContent(e, s, !1)
				}
				resizeIframe(e) {
					const { type: t, iframeEl: i } = e
					if (t === Md || t === Pd) return
					const n = null == i ? void 0 : i.parentElement
					if (!i || !n) return
					let s = e.autoSize
					void 0 === s && (s = this.optionFor(e, 'autoSize'))
					let r = e.width || 0,
						o = e.height || 0
					r && o && (s = !1)
					const a = n && n.style
					if (!1 !== e.preload && !1 !== s && a)
						try {
							const e = window.getComputedStyle(n),
								t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
								s = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
								l = i.contentWindow
							if (l) {
								const e = l.document,
									i = e.getElementsByTagName(Cd)[0],
									n = e.body
								;(a.width = ''),
									(n.style.overflow = 'hidden'),
									(r = r || i.scrollWidth + t),
									(a.width = `${r}px`),
									(n.style.overflow = ''),
									(a.flex = '0 0 auto'),
									(a.height = `${n.scrollHeight}px`),
									(o = i.scrollHeight + s)
							}
						} catch (e) {}
					if (r || o) {
						const e = { flex: '0 1 auto', width: '', height: '' }
						r && 'auto' !== r && (e.width = `${r}px`),
							o && 'auto' !== o && (e.height = `${o}px`),
							Object.assign(a, e)
					}
				}
				playVideo() {
					const e = this.instance.getSlide()
					if (!e) return
					const { el: t } = e
					if (!t || !t.offsetParent) return
					if (!this.optionFor(e, 'videoAutoplay')) return
					if (e.type === Fd)
						try {
							const e = t.querySelector('video')
							if (e) {
								const t = e.play()
								void 0 !== t &&
									t
										.then(() => {})
										.catch((t) => {
											;(e.muted = !0), e.play()
										})
							}
						} catch (e) {}
					if (e.type !== Md && e.type !== Pd) return
					const i = () => {
						if (e.iframeEl && e.iframeEl.contentWindow) {
							let t
							if ('true' === e.iframeEl.dataset.ready)
								return (
									(t =
										e.type === Md
											? { event: 'command', func: 'playVideo' }
											: { method: 'play', value: 'true' }),
									t && e.iframeEl.contentWindow.postMessage(JSON.stringify(t), '*'),
									void (e.poller = void 0)
								)
							e.type === Md &&
								((t = { event: 'listening', id: e.iframeEl.getAttribute('id') }),
								e.iframeEl.contentWindow.postMessage(JSON.stringify(t), '*'))
						}
						e.poller = setTimeout(i, 250)
					}
					i()
				}
				processType(e) {
					if (e.html) return (e.type = Cd), (e.src = e.html), void (e.html = '')
					const t = this.instance.optionFor(e, 'src', '')
					if (!t || 'string' != typeof t) return
					let i = e.type,
						n = null
					if (
						(n = t.match(
							/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
						))
					) {
						const s = this.optionFor(e, Md),
							{ nocookie: r } = s,
							o = (function (e, t) {
								var i = {}
								for (var n in e)
									Object.prototype.hasOwnProperty.call(e, n) &&
										t.indexOf(n) < 0 &&
										(i[n] = e[n])
								if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
									var s = 0
									for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
										t.indexOf(n[s]) < 0 &&
											Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
											(i[n[s]] = e[n[s]])
								}
								return i
							})(s, ['nocookie']),
							a = `www.youtube${r ? '-nocookie' : ''}.com`,
							l = Ad(t, o),
							c = encodeURIComponent(n[2])
						;(e.videoId = c),
							(e.src = `https://${a}/embed/${c}?${l}`),
							(e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
							(i = Md)
					} else if (
						(n = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/))
					) {
						const s = Ad(t, this.optionFor(e, Pd)),
							r = encodeURIComponent(n[1]),
							o = n[4] || ''
						;(e.videoId = r),
							(e.src = `https://player.vimeo.com/video/${r}?${
								o ? `h=${o}${s ? '&' : ''}` : ''
							}${s}`),
							(i = Pd)
					}
					if (!i && e.triggerEl) {
						const t = e.triggerEl.dataset.type
						Od.includes(t) && (i = t)
					}
					i ||
						('string' == typeof t &&
							('#' === t.charAt(0)
								? (i = 'inline')
								: (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
								? ((i = Fd),
								  (e.videoFormat =
										e.videoFormat || 'video/' + ('ogv' === n[1] ? 'ogg' : n[1])))
								: t.match(
										/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
								  )
								? (i = Td)
								: t.match(/\.(pdf)((\?|#).*)?$/i) && (i = 'pdf'))),
						(n = t.match(
							/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
						))
							? ((e.src = `https://maps.google.${n[1]}/?ll=${(n[2]
									? n[2] +
									  '&z=' +
									  Math.floor(parseFloat(n[3])) +
									  (n[4] ? n[4].replace(/^\//, '&') : '')
									: n[4] + ''
							  ).replace(/\?/, '&')}&output=${
									n[4] && n[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed'
							  }`),
							  (i = Sd))
							: (n = t.match(
									/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
							  )) &&
							  ((e.src = `https://maps.google.${n[1]}/maps?q=${n[2]
									.replace('query=', 'q=')
									.replace('api=1', '')}&output=embed`),
							  (i = Sd)),
						(i = i || this.instance.option('defaultType')),
						(e.type = i),
						i === Td && (e.thumbSrc = e.thumbSrc || e.src)
				}
				setContent(e) {
					const t = this.instance.optionFor(e, 'src') || ''
					if (e && e.type && t) {
						switch (e.type) {
							case Cd:
								this.instance.setContent(e, t)
								break
							case Fd:
								const i = this.option('videoTpl')
								i &&
									this.instance.setContent(
										e,
										i
											.replace(/\{\{src\}\}/gi, t + '')
											.replace(/\{\{format\}\}/gi, this.optionFor(e, 'videoFormat') || '')
											.replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || '')
									)
								break
							case 'inline':
							case 'clone':
								this.setInlineContent(e)
								break
							case 'ajax':
								this.loadAjaxContent(e)
								break
							case 'pdf':
							case Sd:
							case Md:
							case Pd:
								e.preload = !1
							case 'iframe':
								this.setIframeContent(e)
						}
						this.setAspectRatio(e)
					}
				}
				setAspectRatio(e) {
					const t = e.contentEl
					if (!(e.el && t && e.type && [Md, Pd, Fd].includes(e.type))) return
					let i,
						n = e.width || 'auto',
						s = e.height || 'auto'
					if ('auto' === n || 'auto' === s) {
						i = this.optionFor(e, 'videoRatio')
						const t = (i + '').match(/(\d+)\s*\/\s?(\d+)/)
						i =
							t && t.length > 2 ? parseFloat(t[1]) / parseFloat(t[2]) : parseFloat(i + '')
					} else n && s && (i = n / s)
					if (!i) return
					;(t.style.aspectRatio = ''),
						(t.style.width = ''),
						(t.style.height = ''),
						t.offsetHeight
					const r = t.getBoundingClientRect(),
						o = r.width || 1,
						a = r.height || 1
					;(t.style.aspectRatio = i + ''),
						i < o / a
							? ((s = 'auto' === s ? a : Math.min(a, s)),
							  (t.style.width = 'auto'),
							  (t.style.height = `${s}px`))
							: ((n = 'auto' === n ? o : Math.min(o, n)),
							  (t.style.width = `${n}px`),
							  (t.style.height = 'auto'))
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('Carousel.beforeInitSlide', e.onBeforeInitSlide),
						t.on('Carousel.createSlide', e.onCreateSlide),
						t.on('Carousel.selectSlide', e.onSelectSlide),
						t.on('Carousel.unselectSlide', e.onUnselectSlide),
						t.on('Carousel.Panzoom.refresh', e.onRefresh),
						t.on('done', e.onDone),
						t.on('clearContent', e.onClearContent),
						window.addEventListener('message', e.onMessage)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('Carousel.beforeInitSlide', e.onBeforeInitSlide),
						t.off('Carousel.createSlide', e.onCreateSlide),
						t.off('Carousel.selectSlide', e.onSelectSlide),
						t.off('Carousel.unselectSlide', e.onUnselectSlide),
						t.off('Carousel.Panzoom.refresh', e.onRefresh),
						t.off('done', e.onDone),
						t.off('clearContent', e.onClearContent),
						window.removeEventListener('message', e.onMessage)
				}
			}
			Object.defineProperty(Ld, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					ajax: null,
					autoSize: !0,
					iframeAttr: { allow: 'autoplay; fullscreen', scrolling: 'auto' },
					preload: !0,
					videoAutoplay: !0,
					videoRatio: 16 / 9,
					videoTpl:
						'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
					videoFormat: '',
					vimeo: { byline: 1, color: '00adef', controls: 1, dnt: 1, muted: 0 },
					youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
				},
			})
			const kd = 'play',
				zd = 'pause',
				Rd = 'ready'
			class Id extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: Rd,
						}),
						Object.defineProperty(this, 'inHover', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'timer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'progressBar', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						})
				}
				get isActive() {
					return this.state !== Rd
				}
				onReady(e) {
					this.option('autoStart') &&
						(e.isInfinite || e.page < e.pages.length - 1) &&
						this.start()
				}
				onChange() {
					this.removeProgressBar(), this.pause()
				}
				onSettle() {
					this.resume()
				}
				onVisibilityChange() {
					'visible' === document.visibilityState ? this.resume() : this.pause()
				}
				onMouseEnter() {
					;(this.inHover = !0), this.pause()
				}
				onMouseLeave() {
					var e
					;(this.inHover = !1),
						(null === (e = this.instance.panzoom) || void 0 === e
							? void 0
							: e.isResting) && this.resume()
				}
				onTimerEnd() {
					const e = this.instance
					'play' === this.state &&
						(e.isInfinite || e.page !== e.pages.length - 1 ? e.slideNext() : e.slideTo(0))
				}
				removeProgressBar() {
					this.progressBar && (this.progressBar.remove(), (this.progressBar = null))
				}
				createProgressBar() {
					var e
					if (!this.option('showProgress')) return null
					this.removeProgressBar()
					const t = this.instance,
						i = (null === (e = t.pages[t.page]) || void 0 === e ? void 0 : e.slides) || []
					let n = this.option('progressParentEl')
					if ((n || (n = (1 === i.length ? i[0].el : null) || t.viewport), !n))
						return null
					const s = document.createElement('div')
					return (
						Au(s, 'f-progress'), n.prepend(s), (this.progressBar = s), s.offsetHeight, s
					)
				}
				set() {
					const e = this,
						t = e.instance
					if (t.pages.length < 2) return
					if (e.timer) return
					const i = e.option('timeout')
					;(e.state = kd), Au(t.container, 'has-autoplay')
					let n = e.createProgressBar()
					n &&
						((n.style.transitionDuration = `${i}ms`), (n.style.transform = 'scaleX(1)')),
						(e.timer = setTimeout(() => {
							;(e.timer = null), e.inHover || e.onTimerEnd()
						}, i)),
						e.emit('set')
				}
				clear() {
					const e = this
					e.timer && (clearTimeout(e.timer), (e.timer = null)), e.removeProgressBar()
				}
				start() {
					const e = this
					if ((e.set(), e.state !== Rd)) {
						if (e.option('pauseOnHover')) {
							const t = e.instance.container
							t.addEventListener('mouseenter', e.onMouseEnter, !1),
								t.addEventListener('mouseleave', e.onMouseLeave, !1)
						}
						document.addEventListener('visibilitychange', e.onVisibilityChange, !1),
							e.emit('start')
					}
				}
				stop() {
					const e = this,
						t = e.state,
						i = e.instance.container
					e.clear(),
						(e.state = Rd),
						i.removeEventListener('mouseenter', e.onMouseEnter, !1),
						i.removeEventListener('mouseleave', e.onMouseLeave, !1),
						document.removeEventListener('visibilitychange', e.onVisibilityChange, !1),
						Fu(i, 'has-autoplay'),
						t !== Rd && e.emit('stop')
				}
				pause() {
					const e = this
					e.state === kd && ((e.state = zd), e.clear(), e.emit(zd))
				}
				resume() {
					const e = this,
						t = e.instance
					if (t.isInfinite || t.page !== t.pages.length - 1)
						if (e.state !== kd) {
							if (e.state === zd && !e.inHover) {
								const t = new Event('resume', { bubbles: !0, cancelable: !0 })
								e.emit('resume', t), t.defaultPrevented || e.set()
							}
						} else e.set()
					else e.stop()
				}
				toggle() {
					this.state === kd || this.state === zd ? this.stop() : this.start()
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('ready', e.onReady),
						t.on('Panzoom.startAnimation', e.onChange),
						t.on('Panzoom.endAnimation', e.onSettle),
						t.on('Panzoom.touchMove', e.onChange)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('ready', e.onReady),
						t.off('Panzoom.startAnimation', e.onChange),
						t.off('Panzoom.endAnimation', e.onSettle),
						t.off('Panzoom.touchMove', e.onChange),
						e.stop()
				}
			}
			Object.defineProperty(Id, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					autoStart: !0,
					pauseOnHover: !0,
					progressParentEl: null,
					showProgress: !0,
					timeout: 3e3,
				},
			})
			class Bd extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'ref', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						})
				}
				onPrepare(e) {
					const t = e.carousel
					if (!t) return
					const i = e.container
					i &&
						((t.options.Autoplay = yu({ autoStart: !1 }, this.option('Autoplay') || {}, {
							pauseOnHover: !1,
							timeout: this.option('timeout'),
							progressParentEl: () => this.option('progressParentEl') || null,
							on: {
								start: () => {
									e.emit('startSlideshow')
								},
								set: (t) => {
									var n
									i.classList.add('has-slideshow'),
										(null === (n = e.getSlide()) || void 0 === n ? void 0 : n.state) !==
											hd.Ready && t.pause()
								},
								stop: () => {
									i.classList.remove('has-slideshow'),
										e.isCompact || e.endIdle(),
										e.emit('endSlideshow')
								},
								resume: (t, i) => {
									var n, s, r
									!i ||
										!i.cancelable ||
										((null === (n = e.getSlide()) || void 0 === n ? void 0 : n.state) ===
											hd.Ready &&
											(null ===
												(r =
													null === (s = e.carousel) || void 0 === s
														? void 0
														: s.panzoom) || void 0 === r
												? void 0
												: r.isResting)) ||
										i.preventDefault()
								},
							},
						})),
						t.attachPlugins({ Autoplay: Id }),
						(this.ref = t.plugins.Autoplay))
				}
				onReady(e) {
					const t = e.carousel,
						i = this.ref
					i &&
						t &&
						this.option('playOnStart') &&
						(t.isInfinite || t.page < t.pages.length - 1) &&
						i.start()
				}
				onDone(e, t) {
					const i = this.ref,
						n = e.carousel
					if (!i || !n) return
					const s = t.panzoom
					s &&
						s.on('startAnimation', () => {
							e.isCurrentSlide(t) && i.stop()
						}),
						e.isCurrentSlide(t) && i.resume()
				}
				onKeydown(e, t) {
					var i
					const n = this.ref
					n &&
						t === this.option('key') &&
						'BUTTON' !==
							(null === (i = document.activeElement) || void 0 === i
								? void 0
								: i.nodeName) &&
						n.toggle()
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('Carousel.init', e.onPrepare),
						t.on('Carousel.ready', e.onReady),
						t.on('done', e.onDone),
						t.on('keydown', e.onKeydown)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('Carousel.init', e.onPrepare),
						t.off('Carousel.ready', e.onReady),
						t.off('done', e.onDone),
						t.off('keydown', e.onKeydown)
				}
			}
			Object.defineProperty(Bd, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					key: ' ',
					playOnStart: !1,
					progressParentEl: (e) => {
						var t
						return (
							(null === (t = e.instance.container) || void 0 === t
								? void 0
								: t.querySelector(
										'.fancybox__toolbar [data-fancybox-toggle-slideshow]'
								  )) || e.instance.container
						)
					},
					timeout: 3e3,
				},
			})
			const Nd = {
				classes: {
					container: 'f-thumbs f-carousel__thumbs',
					viewport: 'f-thumbs__viewport',
					track: 'f-thumbs__track',
					slide: 'f-thumbs__slide',
					isResting: 'is-resting',
					isSelected: 'is-selected',
					isLoading: 'is-loading',
					hasThumbs: 'has-thumbs',
				},
				minCount: 2,
				parentEl: null,
				thumbTpl:
					'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
				type: 'modern',
			}
			var jd
			!(function (e) {
				;(e[(e.Init = 0)] = 'Init'),
					(e[(e.Ready = 1)] = 'Ready'),
					(e[(e.Hidden = 2)] = 'Hidden')
			})(jd || (jd = {}))
			const Hd = 'isResting',
				$d = 'thumbWidth',
				qd = 'thumbHeight',
				Vd = 'thumbClipWidth'
			let Yd = class extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'type', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 'modern',
						}),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'track', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'carousel', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'thumbWidth', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'thumbClipWidth', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'thumbHeight', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'thumbGap', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'thumbExtraGap', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: jd.Init,
						})
				}
				get isModern() {
					return 'modern' === this.type
				}
				onInitSlide(e, t) {
					const i = t.el ? t.el.dataset : void 0
					i &&
						((t.thumbSrc = i.thumbSrc || t.thumbSrc || ''),
						(t[Vd] = parseFloat(i[Vd] || '') || t[Vd] || 0),
						(t[qd] = parseFloat(i.thumbHeight || '') || t[qd] || 0)),
						this.addSlide(t)
				}
				onInitSlides() {
					this.build()
				}
				onChange() {
					var e
					if (!this.isModern) return
					const t = this.container,
						i = this.instance,
						n = i.panzoom,
						s = this.carousel,
						r = s ? s.panzoom : null,
						o = i.page
					if (n && s && r) {
						if (n.isDragging) {
							Fu(t, this.cn(Hd))
							let n = (null === (e = s.pages[o]) || void 0 === e ? void 0 : e.pos) || 0
							n += i.getProgress(o) * (this[Vd] + this.thumbGap)
							let a = r.getBounds()
							;-1 * n > a.x.min &&
								-1 * n < a.x.max &&
								r.panTo({ x: -1 * n, friction: 0.12 })
						} else hu(t, this.cn(Hd), n.isResting)
						this.shiftModern()
					}
				}
				onRefresh() {
					this.updateProps()
					for (const e of this.instance.slides || []) this.resizeModernSlide(e)
					this.shiftModern()
				}
				isDisabled() {
					const e = this.option('minCount') || 0
					if (e) {
						const t = this.instance
						let i = 0
						for (const e of t.slides || []) e.thumbSrc && i++
						if (i < e) return !0
					}
					const t = this.option('type')
					return ['modern', 'classic'].indexOf(t) < 0
				}
				getThumb(e) {
					const t = this.option('thumbTpl') || ''
					return {
						html: this.instance.localize(t, [
							['%i', e.index],
							['%d', e.index + 1],
							[
								'%s',
								e.thumbSrc ||
									'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
							],
						]),
					}
				}
				addSlide(e) {
					const t = this.carousel
					t && t.addSlide(e.index, this.getThumb(e))
				}
				getSlides() {
					const e = []
					for (const t of this.instance.slides || []) e.push(this.getThumb(t))
					return e
				}
				resizeModernSlide(e) {
					this.isModern &&
						(e[$d] = e[Vd] && e[qd] ? Math.round(this[qd] * (e[Vd] / e[qd])) : this[$d])
				}
				updateProps() {
					const e = this.container
					if (!e) return
					const t = (t) =>
						parseFloat(getComputedStyle(e).getPropertyValue('--f-thumb-' + t)) || 0
					;(this.thumbGap = t('gap')),
						(this.thumbExtraGap = t('extra-gap')),
						(this[$d] = t('width') || 40),
						(this[Vd] = t('clip-width') || 40),
						(this[qd] = t('height') || 40)
				}
				build() {
					const e = this
					if (e.state !== jd.Init) return
					if (e.isDisabled()) return void e.emit('disabled')
					const t = e.instance,
						i = t.container,
						n = e.getSlides(),
						s = e.option('type')
					e.type = s
					const r = e.option('parentEl'),
						o = e.cn('container'),
						a = e.cn('track')
					let l = null == r ? void 0 : r.querySelector('.' + o)
					l ||
						((l = document.createElement('div')),
						Au(l, o),
						r ? r.appendChild(l) : i.after(l)),
						Au(l, `is-${s}`),
						Au(i, e.cn('hasThumbs')),
						(e.container = l),
						e.updateProps()
					let c = l.querySelector('.' + a)
					c ||
						((c = document.createElement('div')), Au(c, e.cn('track')), l.appendChild(c)),
						(e.track = c)
					const u = yu(
							{},
							{
								track: c,
								infinite: !1,
								center: !0,
								fill: 'classic' === s,
								dragFree: !0,
								slidesPerPage: 1,
								transition: !1,
								preload: 0.25,
								friction: 0.12,
								Panzoom: { maxVelocity: 0 },
								Dots: !1,
								Navigation: !1,
								classes: {
									container: 'f-thumbs',
									viewport: 'f-thumbs__viewport',
									track: 'f-thumbs__track',
									slide: 'f-thumbs__slide',
								},
							},
							e.option('Carousel') || {},
							{ Sync: { target: t }, slides: n }
						),
						d = new t.constructor(l, u)
					d.on('createSlide', (t, i) => {
						e.setProps(i.index), e.emit('createSlide', i, i.el)
					}),
						d.on('ready', () => {
							e.shiftModern(), e.emit('ready')
						}),
						d.on('refresh', () => {
							e.shiftModern()
						}),
						d.on('Panzoom.click', (t, i, n) => {
							e.onClick(n)
						}),
						(e.carousel = d),
						(e.state = jd.Ready)
				}
				onClick(e) {
					e.preventDefault(), e.stopPropagation()
					const t = this.instance,
						{ pages: i, page: n } = t,
						s = (e) => {
							if (e) {
								const t = e.closest('[data-carousel-index]')
								if (t) return [parseInt(t.dataset.carouselIndex || '', 10) || 0, t]
							}
							return [-1, void 0]
						},
						r = (e, t) => {
							const i = document.elementFromPoint(e, t)
							return i ? s(i) : [-1, void 0]
						}
					let [o, a] = s(e.target)
					if (o > -1) return
					const l = this[Vd],
						c = e.clientX,
						u = e.clientY
					let [d, h] = r(c - l, u),
						[p, f] = r(c + l, u)
					h && f
						? ((o =
								Math.abs(c - h.getBoundingClientRect().right) <
								Math.abs(c - f.getBoundingClientRect().left)
									? d
									: p),
						  o === n && (o = o === d ? p : d))
						: h
						? (o = d)
						: f && (o = p),
						o > -1 && i[o] && t.slideTo(o)
				}
				getShift(e) {
					var t
					const i = this,
						{ instance: n } = i,
						s = i.carousel
					if (!n || !s) return 0
					const r = i[$d],
						o = i[Vd],
						a = i.thumbGap,
						l = i.thumbExtraGap
					if (!(null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el)) return 0
					const c = 0.5 * (r - o),
						u = n.pages.length - 1
					let d = n.getProgress(0),
						h = n.getProgress(u),
						p = n.getProgress(e, !1, !0),
						f = 0,
						g = c + l + a
					const m = d < 0 && d > -1,
						v = h > 0 && h < 1
					return (
						0 === e
							? ((f = g * Math.abs(d)), v && 1 === d && (f -= g * Math.abs(h)))
							: e === u
							? ((f = g * Math.abs(h) * -1), m && -1 === h && (f += g * Math.abs(d)))
							: m || v
							? ((f = -1 * g), (f += g * Math.abs(d)), (f += g * (1 - Math.abs(h))))
							: (f = g * p),
						f
					)
				}
				setProps(e) {
					var t
					const i = this
					if (!i.isModern) return
					const { instance: n } = i,
						s = i.carousel
					if (n && s) {
						const r = null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el
						if (r && r.childNodes.length) {
							let t = au(1 - Math.abs(n.getProgress(e))),
								s = au(i.getShift(e))
							r.style.setProperty('--progress', t ? t + '' : ''),
								r.style.setProperty('--shift', s + '')
						}
					}
				}
				shiftModern() {
					const e = this
					if (!e.isModern) return
					const { instance: t, track: i } = e,
						n = t.panzoom,
						s = e.carousel
					if (!(t && i && n && s)) return
					if (n.state === Eu.Init || n.state === Eu.Destroy) return
					for (const i of t.slides) e.setProps(i.index)
					let r = (e[Vd] + e.thumbGap) * (s.slides.length || 0)
					i.style.setProperty('--width', r + '')
				}
				cleanup() {
					const e = this
					e.carousel && e.carousel.destroy(),
						(e.carousel = null),
						e.container && e.container.remove(),
						(e.container = null),
						e.track && e.track.remove(),
						(e.track = null),
						(e.state = jd.Init),
						Fu(e.instance.container, e.cn('hasThumbs'))
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('initSlide', e.onInitSlide),
						t.state === qu.Init ? t.on('initSlides', e.onInitSlides) : e.onInitSlides(),
						t.on(['change', 'Panzoom.afterTransform'], e.onChange),
						t.on('Panzoom.refresh', e.onRefresh)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('initSlide', e.onInitSlide),
						t.off('initSlides', e.onInitSlides),
						t.off(['change', 'Panzoom.afterTransform'], e.onChange),
						t.off('Panzoom.refresh', e.onRefresh),
						e.cleanup()
				}
			}
			Object.defineProperty(Yd, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: Nd,
			})
			const Xd = Object.assign(Object.assign({}, Nd), {
					key: 't',
					showOnStart: !0,
					parentEl: null,
				}),
				Gd = 'is-masked',
				Wd = 'aria-hidden'
			class Ud extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'ref', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'hidden', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						})
				}
				get isEnabled() {
					const e = this.ref
					return e && !e.isDisabled()
				}
				get isHidden() {
					return this.hidden
				}
				onClick(e, t) {
					t.stopPropagation()
				}
				onCreateSlide(e, t) {
					var i, n, s
					const r =
							(null ===
								(s =
									null ===
										(n =
											null === (i = this.instance) || void 0 === i
												? void 0
												: i.carousel) || void 0 === n
										? void 0
										: n.slides[t.index]) || void 0 === s
								? void 0
								: s.type) || '',
						o = t.el
					if (o && r) {
						let e = `for-${r}`
						;['video', 'youtube', 'vimeo', 'html5video'].includes(r) &&
							(e += ' for-video'),
							Au(o, e)
					}
				}
				onInit() {
					var e
					const t = this,
						i = t.instance,
						n = i.carousel
					if (t.ref || !n) return
					const s = t.option('parentEl') || i.footer || i.container
					if (!s) return
					const r = yu({}, t.options, {
						parentEl: s,
						classes: { container: 'f-thumbs fancybox__thumbs' },
						Carousel: { Sync: { friction: i.option('Carousel.friction') || 0 } },
						on: {
							ready: (e) => {
								const i = e.container
								i &&
									this.hidden &&
									(t.refresh(),
									(i.style.transition = 'none'),
									t.hide(),
									i.offsetHeight,
									queueMicrotask(() => {
										;(i.style.transition = ''), t.show()
									}))
							},
						},
					})
					;(r.Carousel = r.Carousel || {}),
						(r.Carousel.on = yu(
							(null === (e = t.options.Carousel) || void 0 === e ? void 0 : e.on) || {},
							{ click: this.onClick, createSlide: this.onCreateSlide }
						)),
						(n.options.Thumbs = r),
						n.attachPlugins({ Thumbs: Yd }),
						(t.ref = n.plugins.Thumbs),
						t.option('showOnStart') || ((t.ref.state = jd.Hidden), (t.hidden = !0))
				}
				onResize() {
					var e
					const t = null === (e = this.ref) || void 0 === e ? void 0 : e.container
					t && (t.style.maxHeight = '')
				}
				onKeydown(e, t) {
					const i = this.option('key')
					i && i === t && this.toggle()
				}
				toggle() {
					const e = this.ref
					if (e && !e.isDisabled())
						return e.state === jd.Hidden
							? ((e.state = jd.Init), void e.build())
							: void (this.hidden ? this.show() : this.hide())
				}
				show() {
					const e = this.ref
					if (!e || e.isDisabled()) return
					const t = e.container
					t &&
						(this.refresh(),
						t.offsetHeight,
						t.removeAttribute(Wd),
						t.classList.remove(Gd),
						(this.hidden = !1))
				}
				hide() {
					const e = this.ref,
						t = e && e.container
					t &&
						(this.refresh(),
						t.offsetHeight,
						t.classList.add(Gd),
						t.setAttribute(Wd, 'true')),
						(this.hidden = !0)
				}
				refresh() {
					const e = this.ref
					if (!e || !e.state) return
					const t = e.container,
						i = (null == t ? void 0 : t.firstChild) || null
					t &&
						i &&
						i.childNodes.length &&
						(t.style.maxHeight = `${i.getBoundingClientRect().height}px`)
				}
				attach() {
					const e = this,
						t = e.instance
					t.state === dd.Init ? t.on('Carousel.init', e.onInit) : e.onInit(),
						t.on('resize', e.onResize),
						t.on('keydown', e.onKeydown)
				}
				detach() {
					var e
					const t = this,
						i = t.instance
					i.off('Carousel.init', t.onInit),
						i.off('resize', t.onResize),
						i.off('keydown', t.onKeydown),
						null === (e = i.carousel) || void 0 === e || e.detachPlugins(['Thumbs']),
						(t.ref = null)
				}
			}
			Object.defineProperty(Ud, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: Xd,
			})
			const Zd = {
				panLeft: {
					icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
					change: { panX: -100 },
				},
				panRight: {
					icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
					change: { panX: 100 },
				},
				panUp: {
					icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
					change: { panY: -100 },
				},
				panDown: {
					icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
					change: { panY: 100 },
				},
				zoomIn: {
					icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
					action: 'zoomIn',
				},
				zoomOut: {
					icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
					action: 'zoomOut',
				},
				toggle1to1: {
					icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
					action: 'toggleZoom',
				},
				toggleZoom: {
					icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
					action: 'toggleZoom',
				},
				iterateZoom: {
					icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
					action: 'iterateZoom',
				},
				rotateCCW: {
					icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
					action: 'rotateCCW',
				},
				rotateCW: {
					icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
					action: 'rotateCW',
				},
				flipX: {
					icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
					action: 'flipX',
				},
				flipY: {
					icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
					action: 'flipY',
				},
				fitX: {
					icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
					action: 'fitX',
				},
				fitY: {
					icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
					action: 'fitY',
				},
				reset: {
					icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
					action: 'reset',
				},
				toggleFS: {
					icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
					action: 'toggleFS',
				},
			}
			var Kd
			!(function (e) {
				;(e[(e.Init = 0)] = 'Init'),
					(e[(e.Ready = 1)] = 'Ready'),
					(e[(e.Disabled = 2)] = 'Disabled')
			})(Kd || (Kd = {}))
			const Jd = {
					tabindex: '-1',
					width: '24',
					height: '24',
					viewBox: '0 0 24 24',
					xmlns: 'http://www.w3.org/2000/svg',
				},
				Qd = 'has-toolbar',
				eh = 'fancybox__toolbar'
			class th extends Xu {
				constructor() {
					super(...arguments),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: Kd.Init,
						}),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						})
				}
				onReady(e) {
					var t
					if (!e.carousel) return
					let i = this.option('display'),
						n = this.option('absolute'),
						s = this.option('enabled')
					if ('auto' === s) {
						const e = this.instance.carousel
						let t = 0
						if (e) for (const i of e.slides) (i.panzoom || 'image' === i.type) && t++
						t || (s = !1)
					}
					s || (i = void 0)
					let r = 0
					const o = { left: [], middle: [], right: [] }
					if (i)
						for (const e of ['left', 'middle', 'right'])
							for (const n of i[e]) {
								const i = this.createEl(n)
								i && (null === (t = o[e]) || void 0 === t || t.push(i), r++)
							}
					let a = null
					if ((r && (a = this.createContainer()), a)) {
						for (const [e, t] of Object.entries(o)) {
							const i = document.createElement('div')
							Au(i, eh + '__column is-' + e)
							for (const e of t) i.appendChild(e)
							'auto' !== n || 'middle' !== e || t.length || (n = !0), a.appendChild(i)
						}
						!0 === n && Au(a, 'is-absolute'), (this.state = Kd.Ready), this.onRefresh()
					} else this.state = Kd.Disabled
				}
				onClick(e) {
					var t, i
					const n = this.instance,
						s = n.getSlide(),
						r = null == s ? void 0 : s.panzoom,
						o = e.target,
						a = o && Pu(o) ? o.dataset : null
					if (!a) return
					if (void 0 !== a.fancyboxToggleThumbs)
						return (
							e.preventDefault(),
							e.stopPropagation(),
							void (null === (t = n.plugins.Thumbs) || void 0 === t || t.toggle())
						)
					if (void 0 !== a.fancyboxToggleFullscreen)
						return (
							e.preventDefault(),
							e.stopPropagation(),
							void this.instance.toggleFullscreen()
						)
					if (void 0 !== a.fancyboxToggleSlideshow) {
						e.preventDefault(), e.stopPropagation()
						const t =
							null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay
						let s = t.isActive
						return (
							r && 'mousemove' === r.panMode && !s && r.reset(),
							void (s ? t.stop() : t.start())
						)
					}
					const l = a.panzoomAction,
						c = a.panzoomChange
					if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
						let t = {}
						try {
							t = JSON.parse(c)
						} catch (e) {}
						r && r.applyChange(t)
					} else l && r && r[l] && r[l]()
				}
				onChange() {
					this.onRefresh()
				}
				onRefresh() {
					if (this.instance.isClosing()) return
					const e = this.container
					if (!e) return
					const t = this.instance.getSlide()
					if (!t || t.state !== hd.Ready) return
					const i = t && !t.error && t.panzoom
					for (const t of e.querySelectorAll('[data-panzoom-action]'))
						i
							? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'))
							: (t.setAttribute('disabled', ''), t.setAttribute('tabindex', '-1'))
					let n = i && i.canZoomIn(),
						s = i && i.canZoomOut()
					for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
						n
							? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'))
							: (t.setAttribute('disabled', ''), t.setAttribute('tabindex', '-1'))
					for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
						s
							? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'))
							: (t.setAttribute('disabled', ''), t.setAttribute('tabindex', '-1'))
					for (const t of e.querySelectorAll(
						'[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
					)) {
						s || n
							? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'))
							: (t.setAttribute('disabled', ''), t.setAttribute('tabindex', '-1'))
						const e = t.querySelector('g')
						e && (e.style.display = n ? '' : 'none')
					}
				}
				onDone(e, t) {
					var i
					null === (i = t.panzoom) ||
						void 0 === i ||
						i.on('afterTransform', () => {
							this.instance.isCurrentSlide(t) && this.onRefresh()
						}),
						this.instance.isCurrentSlide(t) && this.onRefresh()
				}
				createContainer() {
					const e = this.instance.container
					if (!e) return null
					const t = this.option('parentEl') || e
					let i = t.querySelector('.' + eh)
					return (
						i || ((i = document.createElement('div')), Au(i, eh), t.prepend(i)),
						i.addEventListener('click', this.onClick, { passive: !1, capture: !0 }),
						e && Au(e, Qd),
						(this.container = i),
						i
					)
				}
				createEl(e) {
					const t = this.instance,
						i = t.carousel
					if (!i) return null
					if ('toggleFS' === e) return null
					if ('fullscreen' === e && !cd()) return null
					let n = null
					const s = i.slides.length || 0
					let r = 0,
						o = 0
					for (const e of i.slides)
						(e.panzoom || 'image' === e.type) && r++,
							('image' === e.type || e.downloadSrc) && o++
					if (s < 2 && ['infobar', 'prev', 'next'].includes(e)) return n
					if (void 0 !== Zd[e] && !r) return null
					if ('download' === e && !o) return null
					if ('thumbs' === e) {
						const e = t.plugins.Thumbs
						if (!e || !e.isEnabled) return null
					}
					if ('slideshow' === e && (!i.plugins.Autoplay || s < 2)) return null
					if (void 0 !== Zd[e]) {
						const t = Zd[e]
						;(n = document.createElement('button')),
							n.setAttribute('title', this.instance.localize(`{{${e.toUpperCase()}}}`)),
							Au(n, 'f-button'),
							t.action && (n.dataset.panzoomAction = t.action),
							t.change && (n.dataset.panzoomChange = JSON.stringify(t.change)),
							n.appendChild(uu(this.instance.localize(t.icon)))
					} else {
						const t = (this.option('items') || [])[e]
						t &&
							((n = uu(this.instance.localize(t.tpl))),
							'function' == typeof t.click &&
								n.addEventListener('click', (e) => {
									e.preventDefault(),
										e.stopPropagation(),
										'function' == typeof t.click && t.click.call(this, this, e)
								}))
					}
					const a = null == n ? void 0 : n.querySelector('svg')
					if (a)
						for (const [e, t] of Object.entries(Jd))
							a.getAttribute(e) || a.setAttribute(e, String(t))
					return n
				}
				removeContainer() {
					const e = this.container
					e && e.remove(), (this.container = null), (this.state = Kd.Disabled)
					const t = this.instance.container
					t && Fu(t, Qd)
				}
				attach() {
					const e = this,
						t = e.instance
					t.on('Carousel.initSlides', e.onReady),
						t.on('done', e.onDone),
						t.on(['reveal', 'Carousel.change'], e.onChange),
						e.onReady(e.instance)
				}
				detach() {
					const e = this,
						t = e.instance
					t.off('Carousel.initSlides', e.onReady),
						t.off('done', e.onDone),
						t.off(['reveal', 'Carousel.change'], e.onChange),
						e.removeContainer()
				}
			}
			Object.defineProperty(th, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: {
					absolute: 'auto',
					display: {
						left: ['infobar'],
						middle: [],
						right: ['iterateZoom', 'slideshow', 'fullscreen', 'thumbs', 'close'],
					},
					enabled: 'auto',
					items: {
						infobar: {
							tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
						},
						download: {
							tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
						},
						prev: {
							tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
						},
						next: {
							tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
						},
						slideshow: {
							tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
						},
						fullscreen: {
							tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
						},
						thumbs: {
							tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
						},
						close: {
							tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
						},
					},
					parentEl: null,
				},
			})
			const ih = {
					Hash: class extends Xu {
						onReady() {
							fd = !1
						}
						onChange(e) {
							md && clearTimeout(md)
							const { hash: t } = vd(),
								{ hash: i } = bd(),
								n = e.isOpeningSlide(e.getSlide())
							n && (pd = i === t ? '' : i),
								t &&
									t !== i &&
									(md = setTimeout(() => {
										try {
											if (e.state === dd.Ready) {
												let e = 'replaceState'
												n && !gd && ((e = 'pushState'), (gd = !0)),
													window.history[e](
														{},
														document.title,
														window.location.pathname + window.location.search + t
													)
											}
										} catch (e) {}
									}, 300))
						}
						onClose(e) {
							if ((md && clearTimeout(md), !fd && gd))
								return (gd = !1), (fd = !1), void window.history.back()
							if (!fd)
								try {
									window.history.replaceState(
										{},
										document.title,
										window.location.pathname + window.location.search + (pd || '')
									)
								} catch (e) {}
						}
						attach() {
							const e = this.instance
							e.on('ready', this.onReady),
								e.on(['Carousel.ready', 'Carousel.change'], this.onChange),
								e.on('close', this.onClose)
						}
						detach() {
							const e = this.instance
							e.off('ready', this.onReady),
								e.off(['Carousel.ready', 'Carousel.change'], this.onChange),
								e.off('close', this.onClose)
						}
						static parseURL() {
							return bd()
						}
						static startFromUrl() {
							yd()
						}
						static destroy() {
							window.removeEventListener('hashchange', wd, !1)
						}
					},
					Html: Ld,
					Images: _d,
					Slideshow: Bd,
					Thumbs: Ud,
					Toolbar: th,
				},
				nh = 'with-fancybox',
				sh = 'hide-scrollbar',
				rh = '--fancybox-scrollbar-compensate',
				oh = '--fancybox-body-margin',
				ah = 'aria-hidden',
				lh = 'is-using-tab',
				ch = 'is-animated',
				uh = 'is-compact',
				dh = 'is-loading',
				hh = 'is-opening',
				ph = 'has-caption',
				fh = 'disabled',
				gh = 'tabindex',
				mh = 'download',
				vh = 'href',
				bh = 'src',
				yh = (e) => 'string' == typeof e,
				Dh = function () {
					var e = window.getSelection()
					return !!e && 'Range' === e.type
				}
			let wh,
				xh = null,
				Eh = null,
				_h = 0,
				Ch = 0,
				Th = 0,
				Sh = 0
			const Mh = new Map()
			let Ph = 0
			class Fh extends xu {
				get isIdle() {
					return this.idle
				}
				get isCompact() {
					return this.option('compact')
				}
				constructor(e = [], t = {}, i = {}) {
					super(t),
						Object.defineProperty(this, 'userSlides', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: [],
						}),
						Object.defineProperty(this, 'userPlugins', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: {},
						}),
						Object.defineProperty(this, 'idle', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'idleTimer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'clickTimer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'pwt', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'ignoreFocusChange', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'startedFs', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: !1,
						}),
						Object.defineProperty(this, 'state', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: dd.Init,
						}),
						Object.defineProperty(this, 'id', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: 0,
						}),
						Object.defineProperty(this, 'container', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'caption', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'footer', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'carousel', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'lastFocus', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: null,
						}),
						Object.defineProperty(this, 'prevMouseMoveEvent', {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: void 0,
						}),
						wh || (wh = cd()),
						(this.id = t.id || ++Ph),
						Mh.set(this.id, this),
						(this.userSlides = e),
						(this.userPlugins = i),
						queueMicrotask(() => {
							this.init()
						})
				}
				init() {
					if (this.state === dd.Destroy) return
					;(this.state = dd.Init),
						this.attachPlugins(
							Object.assign(Object.assign({}, Fh.Plugins), this.userPlugins)
						),
						this.emit('init'),
						this.emit('attachPlugins'),
						!0 === this.option('hideScrollbar') &&
							(() => {
								if (!rd) return
								const e = document,
									t = e.body,
									i = e.documentElement
								if (t.classList.contains(sh)) return
								let n = window.innerWidth - i.getBoundingClientRect().width
								const s = parseFloat(window.getComputedStyle(t).marginRight)
								n < 0 && (n = 0),
									i.style.setProperty(rh, `${n}px`),
									s && t.style.setProperty(oh, `${s}px`),
									t.classList.add(sh)
							})(),
						this.initLayout(),
						this.scale()
					const e = () => {
						this.initCarousel(this.userSlides),
							(this.state = dd.Ready),
							this.attachEvents(),
							this.emit('ready'),
							setTimeout(() => {
								this.container && this.container.setAttribute(ah, 'false')
							}, 16)
					}
					this.option('Fullscreen.autoStart') && wh && !wh.isFullscreen()
						? wh
								.request()
								.then(() => {
									;(this.startedFs = !0), e()
								})
								.catch(() => e())
						: e()
				}
				initLayout() {
					var e, t
					const i = this.option('parentEl') || document.body,
						n = uu(this.localize(this.option('tpl.main') || ''))
					if (n) {
						if (
							(n.setAttribute('id', `fancybox-${this.id}`),
							n.setAttribute('aria-label', this.localize('{{MODAL}}')),
							n.classList.toggle(uh, this.isCompact),
							Au(n, this.option('mainClass') || ''),
							Au(n, hh),
							(this.container = n),
							(this.footer = n.querySelector('.fancybox__footer')),
							i.appendChild(n),
							Au(document.documentElement, nh),
							(xh && Eh) ||
								((xh = document.createElement('span')),
								Au(xh, 'fancybox-focus-guard'),
								xh.setAttribute(gh, '0'),
								xh.setAttribute(ah, 'true'),
								xh.setAttribute('aria-label', 'Focus guard'),
								(Eh = xh.cloneNode()),
								null === (e = n.parentElement) || void 0 === e || e.insertBefore(xh, n),
								null === (t = n.parentElement) || void 0 === t || t.append(Eh)),
							n.addEventListener('mousedown', (e) => {
								;(_h = e.pageX), (Ch = e.pageY), Fu(n, lh)
							}),
							this.option('closeExisting'))
						)
							for (const e of Mh.values()) e.id !== this.id && e.close()
						else
							this.option('animated') &&
								(Au(n, ch),
								setTimeout(() => {
									this.isClosing() || Fu(n, ch)
								}, 350))
						this.emit('initLayout')
					}
				}
				initCarousel(e) {
					const t = this.container
					if (!t) return
					const i = t.querySelector('.fancybox__carousel')
					if (!i) return
					const n = (this.carousel = new nd(
						i,
						yu(
							{},
							{
								slides: e,
								transition: 'fade',
								Panzoom: {
									lockAxis: this.option('dragToClose') ? 'xy' : 'x',
									infinite: !!this.option('dragToClose') && 'y',
								},
								Dots: !1,
								Navigation: {
									classes: {
										container: 'fancybox__nav',
										button: 'f-button',
										isNext: 'is-next',
										isPrev: 'is-prev',
									},
								},
								initialPage: this.option('startIndex'),
								l10n: this.option('l10n'),
							},
							this.option('Carousel') || {}
						)
					))
					n.on('*', (e, t, ...i) => {
						this.emit(`Carousel.${t}`, e, ...i)
					}),
						n.on(['ready', 'change'], () => {
							this.manageCaption()
						}),
						this.on('Carousel.removeSlide', (e, t, i) => {
							this.clearContent(i), (i.state = void 0)
						}),
						n.on('Panzoom.touchStart', () => {
							var e, t
							this.isCompact || this.endIdle(),
								(null === (e = document.activeElement) || void 0 === e
									? void 0
									: e.closest('.f-thumbs')) &&
									(null === (t = this.container) || void 0 === t || t.focus())
						}),
						n.on('settle', () => {
							this.idleTimer || this.isCompact || !this.option('idle') || this.setIdle(),
								this.option('autoFocus') && !this.isClosing && this.checkFocus()
						}),
						this.option('dragToClose') &&
							(n.on('Panzoom.afterTransform', (e, t) => {
								const i = this.getSlide()
								if (i && lu(i.el)) return
								const n = this.container
								if (n) {
									const e = Math.abs(t.current.f),
										i =
											e < 1
												? ''
												: Math.max(
														0.5,
														Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
												  )
									n.style.setProperty('--fancybox-ts', i ? '0s' : ''),
										n.style.setProperty('--fancybox-opacity', i + '')
								}
							}),
							n.on('Panzoom.touchEnd', (e, t, i) => {
								var n
								const s = this.getSlide()
								if (s && lu(s.el)) return
								if (
									t.isMobile &&
									document.activeElement &&
									-1 !==
										['TEXTAREA', 'INPUT'].indexOf(
											null === (n = document.activeElement) || void 0 === n
												? void 0
												: n.nodeName
										)
								)
									return
								const r = Math.abs(t.dragOffset.y)
								'y' === t.lockedAxis &&
									(r >= 200 || (r >= 50 && t.dragOffset.time < 300)) &&
									(i && i.cancelable && i.preventDefault(),
									this.close(i, 'f-throwOut' + (t.current.f < 0 ? 'Up' : 'Down')))
							})),
						n.on('change', (e) => {
							var t
							let i =
								null === (t = this.getSlide()) || void 0 === t ? void 0 : t.triggerEl
							if (i) {
								const t = new CustomEvent('slideTo', {
									bubbles: !0,
									cancelable: !0,
									detail: e.page,
								})
								i.dispatchEvent(t)
							}
						}),
						n.on(['refresh', 'change'], (e) => {
							const t = this.container
							if (!t) return
							for (const i of t.querySelectorAll('[data-fancybox-current-index]'))
								i.innerHTML = e.page + 1
							for (const i of t.querySelectorAll('[data-fancybox-count]'))
								i.innerHTML = e.pages.length
							if (!e.isInfinite) {
								for (const i of t.querySelectorAll('[data-fancybox-next]'))
									e.page < e.pages.length - 1
										? (i.removeAttribute(fh), i.removeAttribute(gh))
										: (i.setAttribute(fh, ''), i.setAttribute(gh, '-1'))
								for (const i of t.querySelectorAll('[data-fancybox-prev]'))
									e.page > 0
										? (i.removeAttribute(fh), i.removeAttribute(gh))
										: (i.setAttribute(fh, ''), i.setAttribute(gh, '-1'))
							}
							const i = this.getSlide()
							if (!i) return
							let n = i.downloadSrc || ''
							n || 'image' !== i.type || i.error || !yh(i[bh]) || (n = i[bh])
							for (const e of t.querySelectorAll('[data-fancybox-download]')) {
								const t = i.downloadFilename
								n
									? (e.removeAttribute(fh),
									  e.removeAttribute(gh),
									  e.setAttribute(vh, n),
									  e.setAttribute(mh, t || n),
									  e.setAttribute('target', '_blank'))
									: (e.setAttribute(fh, ''),
									  e.setAttribute(gh, '-1'),
									  e.removeAttribute(vh),
									  e.removeAttribute(mh))
							}
						}),
						this.emit('initCarousel')
				}
				attachEvents() {
					const e = this,
						t = e.container
					if (!t) return
					t.addEventListener('click', e.onClick, { passive: !1, capture: !1 }),
						t.addEventListener('wheel', e.onWheel, { passive: !1, capture: !1 }),
						document.addEventListener('keydown', e.onKeydown, {
							passive: !1,
							capture: !0,
						}),
						document.addEventListener('visibilitychange', e.onVisibilityChange, !1),
						document.addEventListener('mousemove', e.onMousemove),
						e.option('trapFocus') && document.addEventListener('focus', e.onFocus, !0),
						window.addEventListener('resize', e.onResize)
					const i = window.visualViewport
					i &&
						(i.addEventListener('scroll', e.onResize),
						i.addEventListener('resize', e.onResize))
				}
				detachEvents() {
					const e = this,
						t = e.container
					if (!t) return
					document.removeEventListener('keydown', e.onKeydown, {
						passive: !1,
						capture: !0,
					}),
						t.removeEventListener('wheel', e.onWheel, { passive: !1, capture: !1 }),
						t.removeEventListener('click', e.onClick, { passive: !1, capture: !1 }),
						document.removeEventListener('mousemove', e.onMousemove),
						window.removeEventListener('resize', e.onResize)
					const i = window.visualViewport
					i &&
						(i.removeEventListener('resize', e.onResize),
						i.removeEventListener('scroll', e.onResize)),
						document.removeEventListener('visibilitychange', e.onVisibilityChange, !1),
						document.removeEventListener('focus', e.onFocus, !0)
				}
				scale() {
					const e = this.container
					if (!e) return
					const t = window.visualViewport,
						i = Math.max(1, (null == t ? void 0 : t.scale) || 1)
					let n = '',
						s = '',
						r = ''
					if (t && i > 1) {
						let e = `${t.offsetLeft}px`,
							o = `${t.offsetTop}px`
						;(n = t.width * i + 'px'),
							(s = t.height * i + 'px'),
							(r = `translate3d(${e}, ${o}, 0) scale(${1 / i})`)
					}
					;(e.style.transform = r), (e.style.width = n), (e.style.height = s)
				}
				onClick(e) {
					var t
					const { container: i, isCompact: n } = this
					if (!i || this.isClosing()) return
					!n && this.option('idle') && this.resetIdle()
					const s = e.composedPath()[0]
					if (s.closest('.fancybox-spinner') || s.closest('[data-fancybox-close]'))
						return e.preventDefault(), void this.close(e)
					if (s.closest('[data-fancybox-prev]'))
						return e.preventDefault(), void this.prev()
					if (s.closest('[data-fancybox-next]'))
						return e.preventDefault(), void this.next()
					if ('click' === e.type && 0 === e.detail) return
					if (Math.abs(e.pageX - _h) > 30 || Math.abs(e.pageY - Ch) > 30) return
					const r = document.activeElement
					if (Dh() && r && i.contains(r)) return
					if (
						n &&
						'image' === (null === (t = this.getSlide()) || void 0 === t ? void 0 : t.type)
					)
						return void (this.clickTimer
							? (clearTimeout(this.clickTimer), (this.clickTimer = null))
							: (this.clickTimer = setTimeout(() => {
									this.toggleIdle(), (this.clickTimer = null)
							  }, 350)))
					if ((this.emit('click', e), e.defaultPrevented)) return
					let o = !1
					if (s.closest('.fancybox__content')) {
						if (r) {
							if (r.closest('[contenteditable]')) return
							s.matches(ad) || r.blur()
						}
						if (Dh()) return
						o = this.option('contentClick')
					} else
						s.closest('.fancybox__carousel') &&
							!s.matches(ad) &&
							(o = this.option('backdropClick'))
					'close' === o
						? (e.preventDefault(), this.close(e))
						: 'next' === o
						? (e.preventDefault(), this.next())
						: 'prev' === o && (e.preventDefault(), this.prev())
				}
				onWheel(e) {
					const t = e.target
					let i = this.option('wheel', e)
					t.closest('.fancybox__thumbs') && (i = 'slide')
					const n = 'slide' === i,
						s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (e, t) {
							return Math.abs(t) > Math.abs(e) ? t : e
						}),
						r = Math.max(-1, Math.min(1, s)),
						o = Date.now()
					this.pwt && o - this.pwt < 300
						? n && e.preventDefault()
						: ((this.pwt = o),
						  this.emit('wheel', e, r),
						  e.defaultPrevented ||
								('close' === i
									? (e.preventDefault(), this.close(e))
									: 'slide' === i &&
									  (cu(t) || (e.preventDefault(), this[r > 0 ? 'prev' : 'next']()))))
				}
				onScroll() {
					window.scrollTo(Th, Sh)
				}
				onKeydown(e) {
					if (!this.isTopmost()) return
					this.isCompact || !this.option('idle') || this.isClosing() || this.resetIdle()
					const t = e.key,
						i = this.option('keyboard')
					if (!i) return
					const n = e.composedPath()[0],
						s = document.activeElement && document.activeElement.classList,
						r =
							(s && s.contains('f-button')) ||
							n.dataset.carouselPage ||
							n.dataset.carouselIndex
					if (
						'Escape' !== t &&
						!r &&
						Pu(n) &&
						(n.isContentEditable ||
							-1 !==
								['TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO'].indexOf(n.nodeName))
					)
						return
					if (
						('Tab' === e.key ? Au(this.container, lh) : Fu(this.container, lh),
						e.ctrlKey || e.altKey || e.shiftKey)
					)
						return
					this.emit('keydown', t, e)
					const o = i[t]
					o && 'function' == typeof this[o] && (e.preventDefault(), this[o]())
				}
				onResize() {
					const e = this.container
					if (!e) return
					const t = this.isCompact
					e.classList.toggle(uh, t),
						this.manageCaption(this.getSlide()),
						this.isCompact ? this.clearIdle() : this.endIdle(),
						this.scale(),
						this.emit('resize')
				}
				onFocus(e) {
					this.isTopmost() && this.checkFocus(e)
				}
				onMousemove(e) {
					;(this.prevMouseMoveEvent = e),
						!this.isCompact && this.option('idle') && this.resetIdle()
				}
				onVisibilityChange() {
					'visible' === document.visibilityState ? this.checkFocus() : this.endIdle()
				}
				manageCloseBtn(e) {
					const t = this.optionFor(e, 'closeButton') || !1
					if ('auto' === t) {
						const e = this.plugins.Toolbar
						if (e && e.state === Kd.Ready) return
					}
					if (!t) return
					if (!e.contentEl || e.closeBtnEl) return
					const i = this.option('tpl.closeButton')
					if (i) {
						const t = uu(this.localize(i))
						;(e.closeBtnEl = e.contentEl.appendChild(t)),
							e.el && Au(e.el, 'has-close-btn')
					}
				}
				manageCaption(e = void 0) {
					var t, i
					const n = 'fancybox__caption',
						s = this.container
					if (!s) return
					Fu(s, ph)
					const r = this.isCompact || this.option('commonCaption'),
						o = !r
					if (
						(this.caption && this.stop(this.caption),
						o && this.caption && (this.caption.remove(), (this.caption = null)),
						r && !this.caption)
					)
						for (const e of (null === (t = this.carousel) || void 0 === t
							? void 0
							: t.slides) || [])
							e.captionEl &&
								(e.captionEl.remove(),
								(e.captionEl = void 0),
								Fu(e.el, ph),
								null === (i = e.el) ||
									void 0 === i ||
									i.removeAttribute('aria-labelledby'))
					if ((e || (e = this.getSlide()), !e || (r && !this.isCurrentSlide(e)))) return
					const a = e.el
					let l = this.optionFor(e, 'caption', '')
					if (!l)
						return void (
							r &&
							this.caption &&
							this.animate(this.caption, 'f-fadeOut', () => {
								this.caption && (this.caption.innerHTML = '')
							})
						)
					let c = null
					if (o) {
						if (((c = e.captionEl || null), a && !c)) {
							const t = n + `_${this.id}_${e.index}`
							;(c = document.createElement('div')),
								Au(c, n),
								c.setAttribute('id', t),
								(e.captionEl = a.appendChild(c)),
								Au(a, ph),
								a.setAttribute('aria-labelledby', t)
						}
					} else
						(c = this.caption),
							c || (c = s.querySelector('.' + n)),
							c ||
								((c = document.createElement('div')),
								(c.dataset.fancyboxCaption = ''),
								Au(c, n),
								(this.footer || s).prepend(c)),
							Au(s, ph),
							(this.caption = c)
					c &&
						((c.innerHTML = ''),
						yh(l) || 'number' == typeof l
							? (c.innerHTML = l + '')
							: l instanceof HTMLElement && c.appendChild(l))
				}
				checkFocus(e) {
					this.focus(e)
				}
				focus(e) {
					var t
					if (this.ignoreFocusChange) return
					const i = document.activeElement || null,
						n = (null == e ? void 0 : e.target) || null,
						s = this.container,
						r = null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport
					if (!s || !r) return
					if (!e && i && s.contains(i)) return
					const o = this.getSlide(),
						a = o && o.state === hd.Ready ? o.el : null
					if (!a || a.contains(i) || s === i) return
					e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0)
					const l = Array.from(s.querySelectorAll(ad))
					let c = [],
						u = null
					for (let e of l) {
						const t = !e.offsetParent || !!e.closest('[aria-hidden="true"]'),
							i = a && a.contains(e),
							n = !r.contains(e)
						if (e === s || ((i || n) && !t)) {
							c.push(e)
							const t = e.dataset.origTabindex
							void 0 !== t && t && (e.tabIndex = parseFloat(t)),
								e.removeAttribute('data-orig-tabindex'),
								(!e.hasAttribute('autoFocus') && u) || (u = e)
						} else {
							const t =
								void 0 === e.dataset.origTabindex
									? e.getAttribute('tabindex') || ''
									: e.dataset.origTabindex
							t && (e.dataset.origTabindex = t), (e.tabIndex = -1)
						}
					}
					let d = null
					e
						? (!n || c.indexOf(n) < 0) &&
						  ((d = u || s),
						  c.length &&
								(i === Eh
									? (d = c[0])
									: (this.lastFocus !== s && i !== xh) || (d = c[c.length - 1])))
						: (d = o && 'image' === o.type ? s : u || s),
						d && ld(d),
						(this.lastFocus = document.activeElement),
						(this.ignoreFocusChange = !1)
				}
				next() {
					const e = this.carousel
					e && e.pages.length > 1 && e.slideNext()
				}
				prev() {
					const e = this.carousel
					e && e.pages.length > 1 && e.slidePrev()
				}
				jumpTo(...e) {
					this.carousel && this.carousel.slideTo(...e)
				}
				isTopmost() {
					var e
					return (
						(null === (e = Fh.getInstance()) || void 0 === e ? void 0 : e.id) == this.id
					)
				}
				animate(e = null, t = '', i) {
					if (!e || !t) return void (i && i())
					this.stop(e)
					const n = (s) => {
						s.target === e &&
							e.dataset.animationName &&
							(e.removeEventListener('animationend', n),
							delete e.dataset.animationName,
							i && i(),
							Fu(e, t))
					}
					;(e.dataset.animationName = t), e.addEventListener('animationend', n), Au(e, t)
				}
				stop(e) {
					e &&
						e.dispatchEvent(
							new CustomEvent('animationend', {
								bubbles: !1,
								cancelable: !0,
								currentTarget: e,
							})
						)
				}
				setContent(e, t = '', i = !0) {
					if (this.isClosing()) return
					const n = e.el
					if (!n) return
					let s = null
					if (
						(Pu(t)
							? (s = t)
							: ((s = uu(t + '')),
							  Pu(s) || ((s = document.createElement('div')), (s.innerHTML = t + ''))),
						['img', 'picture', 'iframe', 'video', 'audio'].includes(
							s.nodeName.toLowerCase()
						))
					) {
						const e = document.createElement('div')
						e.appendChild(s), (s = e)
					}
					Pu(s) && e.filter && !e.error && (s = s.querySelector(e.filter)),
						s && Pu(s)
							? (Au(s, 'fancybox__content'),
							  e.id && s.setAttribute('id', e.id),
							  n.classList.add(`has-${e.error ? 'error' : e.type || 'unknown'}`),
							  n.prepend(s),
							  'none' === s.style.display && (s.style.display = ''),
							  'none' === getComputedStyle(s).getPropertyValue('display') &&
									(s.style.display =
										e.display || this.option('defaultDisplay') || 'flex'),
							  (e.contentEl = s),
							  i && this.revealContent(e),
							  this.manageCloseBtn(e),
							  this.manageCaption(e))
							: this.setError(e, '{{ELEMENT_NOT_FOUND}}')
				}
				revealContent(e, t) {
					const i = e.el,
						n = e.contentEl
					i &&
						n &&
						(this.emit('reveal', e),
						this.hideLoading(e),
						(e.state = hd.Opening),
						(t = this.isOpeningSlide(e)
							? void 0 === t
								? this.optionFor(e, 'showClass')
								: t
							: 'f-fadeIn')
							? this.animate(n, t, () => {
									this.done(e)
							  })
							: this.done(e))
				}
				done(e) {
					this.isClosing() ||
						((e.state = hd.Ready),
						this.emit('done', e),
						Au(e.el, 'is-done'),
						this.isCurrentSlide(e) &&
							this.option('autoFocus') &&
							queueMicrotask(() => {
								var t
								null === (t = e.panzoom) || void 0 === t || t.updateControls(),
									this.option('autoFocus') && this.focus()
							}),
						this.isOpeningSlide(e) &&
							(Fu(this.container, hh),
							!this.isCompact && this.option('idle') && this.setIdle()))
				}
				isCurrentSlide(e) {
					const t = this.getSlide()
					return !(!e || !t) && t.index === e.index
				}
				isOpeningSlide(e) {
					var t, i
					return (
						null ===
							(null === (t = this.carousel) || void 0 === t ? void 0 : t.prevPage) &&
						e &&
						e.index ===
							(null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
					)
				}
				showLoading(e) {
					e.state = hd.Loading
					const t = e.el
					t &&
						(Au(t, dh),
						this.emit('loading', e),
						e.spinnerEl ||
							setTimeout(() => {
								if (!this.isClosing() && !e.spinnerEl && e.state === hd.Loading) {
									let i = uu(Mu)
									Au(i, 'fancybox-spinner'),
										(e.spinnerEl = i),
										t.prepend(i),
										this.animate(i, 'f-fadeIn')
								}
							}, 250))
				}
				hideLoading(e) {
					const t = e.el
					if (!t) return
					const i = e.spinnerEl
					this.isClosing()
						? null == i || i.remove()
						: (Fu(t, dh),
						  i &&
								this.animate(i, 'f-fadeOut', () => {
									i.remove()
								}),
						  e.state === hd.Loading && (this.emit('loaded', e), (e.state = hd.Ready)))
				}
				setError(e, t) {
					if (this.isClosing()) return
					const i = new Event('error', { bubbles: !0, cancelable: !0 })
					if ((this.emit('error', i, e), i.defaultPrevented)) return
					;(e.error = t), this.hideLoading(e), this.clearContent(e)
					const n = document.createElement('div')
					n.classList.add('fancybox-error'),
						(n.innerHTML = this.localize(t || '<p>{{ERROR}}</p>')),
						this.setContent(e, n)
				}
				clearContent(e) {
					if (void 0 === e.state) return
					this.emit('clearContent', e),
						e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0))
					const t = e.el
					t &&
						(Fu(t, 'has-error'),
						Fu(t, 'has-unknown'),
						Fu(t, `has-${e.type || 'unknown'}`)),
						e.closeBtnEl && e.closeBtnEl.remove(),
						(e.closeBtnEl = void 0),
						e.captionEl && e.captionEl.remove(),
						(e.captionEl = void 0),
						e.spinnerEl && e.spinnerEl.remove(),
						(e.spinnerEl = void 0)
				}
				getSlide() {
					var e
					const t = this.carousel
					return (
						(null === (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
						void 0 === e
							? void 0
							: e.slides[0]) || void 0
					)
				}
				close(e, t) {
					if (this.isClosing()) return
					const i = new Event('shouldClose', { bubbles: !0, cancelable: !0 })
					if ((this.emit('shouldClose', i, e), i.defaultPrevented)) return
					e && e.cancelable && (e.preventDefault(), e.stopPropagation())
					const n = () => {
						this.proceedClose(e, t)
					}
					this.startedFs && wh && wh.isFullscreen()
						? Promise.resolve(wh.exit()).then(() => n())
						: n()
				}
				clearIdle() {
					this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null)
				}
				setIdle(e = !1) {
					const t = () => {
						this.clearIdle(),
							(this.idle = !0),
							Au(this.container, 'is-idle'),
							this.emit('setIdle')
					}
					if ((this.clearIdle(), !this.isClosing()))
						if (e) t()
						else {
							const e = this.option('idle')
							e && (this.idleTimer = setTimeout(t, e))
						}
				}
				endIdle() {
					this.clearIdle(),
						this.idle &&
							!this.isClosing() &&
							((this.idle = !1), Fu(this.container, 'is-idle'), this.emit('endIdle'))
				}
				resetIdle() {
					this.endIdle(), this.setIdle()
				}
				toggleIdle() {
					this.idle ? this.endIdle() : this.setIdle(!0)
				}
				toggleFullscreen() {
					wh &&
						(wh.isFullscreen()
							? wh.exit()
							: wh.request().then(() => {
									this.startedFs = !0
							  }))
				}
				isClosing() {
					return [dd.Closing, dd.CustomClosing, dd.Destroy].includes(this.state)
				}
				proceedClose(e, t) {
					var i, n
					;(this.state = dd.Closing), this.clearIdle(), this.detachEvents()
					const s = this.container,
						r = this.carousel,
						o = this.getSlide(),
						a =
							o && this.option('placeFocusBack')
								? o.triggerEl || this.option('triggerEl')
								: null
					if (
						(a && (sd(a) ? ld(a) : a.focus()),
						s &&
							(Fu(s, hh),
							Au(s, 'is-closing'),
							s.setAttribute(ah, 'true'),
							this.option('animated') && Au(s, ch),
							(s.style.pointerEvents = 'none')),
						r)
					) {
						r.clearTransitions(),
							null === (i = r.panzoom) || void 0 === i || i.destroy(),
							null === (n = r.plugins.Navigation) || void 0 === n || n.detach()
						for (const e of r.slides) {
							;(e.state = hd.Closing), this.hideLoading(e)
							const t = e.contentEl
							t && this.stop(t)
							const i = null == e ? void 0 : e.panzoom
							i && (i.stop(), i.detachEvents(), i.detachObserver()),
								this.isCurrentSlide(e) || r.emit('removeSlide', e)
						}
					}
					;(Th = window.scrollX),
						(Sh = window.scrollY),
						window.addEventListener('scroll', this.onScroll),
						this.emit('close', e),
						this.state !== dd.CustomClosing
							? (void 0 === t && o && (t = this.optionFor(o, 'hideClass')),
							  t && o
									? (this.animate(o.contentEl, t, () => {
											r && r.emit('removeSlide', o)
									  }),
									  setTimeout(() => {
											this.destroy()
									  }, 500))
									: this.destroy())
							: setTimeout(() => {
									this.destroy()
							  }, 500)
				}
				destroy() {
					var e
					if (this.state === dd.Destroy) return
					window.removeEventListener('scroll', this.onScroll),
						(this.state = dd.Destroy),
						null === (e = this.carousel) || void 0 === e || e.destroy()
					const t = this.container
					t && t.remove(), Mh.delete(this.id)
					const i = Fh.getInstance()
					i
						? i.focus()
						: (xh && (xh.remove(), (xh = null)),
						  Eh && (Eh.remove(), (Eh = null)),
						  Fu(document.documentElement, nh),
						  (() => {
								if (!rd) return
								const e = document,
									t = e.body
								t.classList.remove(sh),
									t.style.setProperty(oh, ''),
									e.documentElement.style.setProperty(rh, '')
						  })(),
						  this.emit('destroy'))
				}
				static bind(e, t, i) {
					if (!rd) return
					let n,
						s = '',
						r = {}
					if (
						(void 0 === e
							? (n = document.body)
							: yh(e)
							? ((n = document.body), (s = e), 'object' == typeof t && (r = t || {}))
							: ((n = e), yh(t) && (s = t), 'object' == typeof i && (r = i || {})),
						!n || !Pu(n))
					)
						return
					s = s || '[data-fancybox]'
					const o = Fh.openers.get(n) || new Map()
					o.set(s, r),
						Fh.openers.set(n, o),
						1 === o.size && n.addEventListener('click', Fh.fromEvent)
				}
				static unbind(e, t) {
					let i,
						n = ''
					if ((yh(e) ? ((i = document.body), (n = e)) : ((i = e), yh(t) && (n = t)), !i))
						return
					const s = Fh.openers.get(i)
					s && n && s.delete(n),
						(n && s) ||
							(Fh.openers.delete(i), i.removeEventListener('click', Fh.fromEvent))
				}
				static destroy() {
					let e
					for (; (e = Fh.getInstance()); ) e.destroy()
					for (const e of Fh.openers.keys()) e.removeEventListener('click', Fh.fromEvent)
					Fh.openers = new Map()
				}
				static fromEvent(e) {
					if (e.defaultPrevented) return
					if (e.button && 0 !== e.button) return
					if (e.ctrlKey || e.metaKey || e.shiftKey) return
					let t = e.composedPath()[0]
					const i = t.closest('[data-fancybox-trigger]')
					if (i) {
						const e = i.dataset.fancyboxTrigger || '',
							n = document.querySelectorAll(`[data-fancybox="${e}"]`),
							s = parseInt(i.dataset.fancyboxIndex || '', 10) || 0
						t = n[s] || t
					}
					if (!(t && t instanceof Element)) return
					let n, s, r, o
					if (
						([...Fh.openers].reverse().find(
							([e, i]) =>
								!(
									!e.contains(t) ||
									![...i].reverse().find(([i, a]) => {
										let l = t.closest(i)
										return !!l && ((n = e), (s = i), (r = l), (o = a), !0)
									})
								)
						),
						!n || !s || !r)
					)
						return
					;(o = o || {}), e.preventDefault(), (t = r)
					let a = [],
						l = yu({}, ud, o)
					;(l.event = e), (l.triggerEl = t), (l.delegate = i)
					const c = l.groupAll,
						u = l.groupAttr,
						d = u && t ? t.getAttribute(`${u}`) : ''
					if (
						((!t || d || c) && (a = [].slice.call(n.querySelectorAll(s))),
						t && !c && (a = d ? a.filter((e) => e.getAttribute(`${u}`) === d) : [t]),
						!a.length)
					)
						return
					const h = Fh.getInstance()
					return h && h.options.triggerEl && a.indexOf(h.options.triggerEl) > -1
						? void 0
						: (t && (l.startIndex = a.indexOf(t)), Fh.fromNodes(a, l))
				}
				static fromSelector(e, t, i) {
					let n = null,
						s = '',
						r = {}
					if (
						(yh(e)
							? ((n = document.body), (s = e), 'object' == typeof t && (r = t || {}))
							: e instanceof HTMLElement &&
							  yh(t) &&
							  ((n = e), (s = t), 'object' == typeof i && (r = i || {})),
						!n || !s)
					)
						return !1
					const o = Fh.openers.get(n)
					return (
						!!o &&
						((r = yu({}, o.get(s) || {}, r)),
						!!r && Fh.fromNodes(Array.from(n.querySelectorAll(s)), r))
					)
				}
				static fromNodes(e, t) {
					t = yu({}, ud, t || {})
					const i = []
					for (const n of e) {
						const e = n.dataset || {},
							s =
								e[bh] ||
								n.getAttribute(vh) ||
								n.getAttribute('currentSrc') ||
								n.getAttribute(bh) ||
								void 0
						let r
						const o = t.delegate
						let a
						o &&
							i.length === t.startIndex &&
							(r =
								o instanceof HTMLImageElement
									? o
									: o.querySelector('img:not([aria-hidden])')),
							r ||
								(r =
									n instanceof HTMLImageElement
										? n
										: n.querySelector('img:not([aria-hidden])')),
							r &&
								((a = r.currentSrc || r[bh] || void 0),
								!a && r.dataset && (a = r.dataset.lazySrc || r.dataset[bh] || void 0))
						const l = { src: s, triggerEl: n, thumbEl: r, thumbElSrc: a, thumbSrc: a }
						for (const t in e) {
							let i = e[t] + ''
							;(i = 'false' !== i && ('true' === i || i)), (l[t] = i)
						}
						i.push(l)
					}
					return new Fh(i, t)
				}
				static getInstance(e) {
					return e
						? Mh.get(e)
						: Array.from(Mh.values())
								.reverse()
								.find((e) => !e.isClosing() && e) || null
				}
				static getSlide() {
					var e
					return (
						(null === (e = Fh.getInstance()) || void 0 === e ? void 0 : e.getSlide()) ||
						null
					)
				}
				static show(e = [], t = {}) {
					return new Fh(e, t)
				}
				static next() {
					const e = Fh.getInstance()
					e && e.next()
				}
				static prev() {
					const e = Fh.getInstance()
					e && e.prev()
				}
				static close(e = !0, ...t) {
					if (e) for (const e of Mh.values()) e.close(...t)
					else {
						const e = Fh.getInstance()
						e && e.close(...t)
					}
				}
			}
			Object.defineProperty(Fh, 'version', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: '5.0.36',
			}),
				Object.defineProperty(Fh, 'defaults', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ud,
				}),
				Object.defineProperty(Fh, 'Plugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ih,
				}),
				Object.defineProperty(Fh, 'openers', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Map(),
				}),
				Fh.bind('[data-fancybox]'),
				document.querySelector('.header__btn').addEventListener('click', () => {
					Fh.show([{ src: '#modal', type: 'inline' }])
				})
		})()
})()
