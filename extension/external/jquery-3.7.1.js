/*! jQuery v3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat
            ? function (e) {
                  return oe.flat.call(e);
              }
            : function (e) {
                  return oe.concat.apply([], e);
              },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        y = function (e) {
            return null != e && e === e.window;
        },
        m = ie.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || m).createElement("script");
        if (((o.text = e), t)) for (r in u) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
    }
    var t = "3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",
        l = /HTML$/i,
        ce = function (e, t) {
            return new ce.fn.init(e, t);
        };
    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    (ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function () {
            return ae.call(this);
        },
        get: function (e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = ce.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return ce.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                ce.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(ae.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                ce.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                ce.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice,
    }),
        (ce.extend = ce.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || v(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            "__proto__" !== t &&
                                a !== r &&
                                (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}), (i = !1), (a[t] = ce.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        ce.extend({
            expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || ("function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (c(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            text: function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) while ((t = e[r++])) n += ce.text(t);
                return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : se.call(t, e, n);
            },
            isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !l.test(t || (n && n.nodeName) || "HTML");
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: le,
        }),
        "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
        ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var de = oe.pop,
        pe = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function (e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function d(e, t) {
        return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
    }
    ce.escapeSelector = function (e) {
        return (e + "").replace(f, d);
    };
    var ye = m,
        me = s;
    !(function () {
        var e,
            x,
            w,
            o,
            a,
            C,
            r,
            T,
            p,
            i,
            E = me,
            k = ce.expando,
            S = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function (e, t) {
                return e === t && (a = !0), 0;
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            d = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + d + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            b = new RegExp(ge + "|>"),
            A = new RegExp(g),
            D = new RegExp("^" + t + "$"),
            N = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + d),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i"),
            },
            L = /^(?:input|select|textarea|button)$/i,
            j = /^h\d$/i,
            O = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            P = /[+~]/,
            H = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            q = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            R = function () {
                V();
            },
            M = K(
                function (e) {
                    return !0 === e.disabled && fe(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            E.apply((oe = ae.call(ye.childNodes)), ye.childNodes), oe[ye.childNodes.length].nodeType;
        } catch (e) {
            E = {
                apply: function (e, t) {
                    me.apply(e, ae.call(t));
                },
                call: function (e) {
                    me.apply(e, ae.call(arguments, 1));
                },
            };
        }
        function I(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))) return n;
            if (!r && (V(e), (e = e || C), T)) {
                if (11 !== d && (u = O.exec(t)))
                    if ((i = u[1])) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return E.call(n, a), n;
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return E.call(n, a), n;
                    } else {
                        if (u[2]) return E.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return E.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (!(h[t + " "] || (p && p.test(t)))) {
                    if (((c = t), (f = e), 1 === d && (b.test(t) || m.test(t)))) {
                        ((f = (P.test(t) && X(e.parentNode)) || e) == e && le.scope) || ((s = e.getAttribute("id")) ? (s = ce.escapeSelector(s)) : e.setAttribute("id", (s = k))), (o = (l = Y(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + G(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return E.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        h(t, !0);
                    } finally {
                        s === k && e.removeAttribute("id");
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r);
        }
        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }
        function B(e) {
            return (e[k] = !0), e;
        }
        function F(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function $(t) {
            return function (e) {
                return fe(e, "input") && e.type === t;
            };
        }
        function _(t) {
            return function (e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t;
            };
        }
        function z(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && M(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function U(a) {
            return B(function (o) {
                return (
                    (o = +o),
                    B(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function X(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function V(e) {
            var t,
                n = e ? e.ownerDocument || e : ye;
            return (
                n != C &&
                    9 === n.nodeType &&
                    n.documentElement &&
                    ((r = (C = n).documentElement),
                    (T = !ce.isXMLDoc(C)),
                    (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
                    r.msMatchesSelector && ye != C && (t = C.defaultView) && t.top !== t && t.addEventListener("unload", R),
                    (le.getById = F(function (e) {
                        return (r.appendChild(e).id = ce.expando), !C.getElementsByName || !C.getElementsByName(ce.expando).length;
                    })),
                    (le.disconnectedMatch = F(function (e) {
                        return i.call(e, "*");
                    })),
                    (le.scope = F(function () {
                        return C.querySelectorAll(":scope");
                    })),
                    (le.cssHas = F(function () {
                        try {
                            return C.querySelector(":has(*,:jqfake)"), !1;
                        } catch (e) {
                            return !0;
                        }
                    })),
                    le.getById
                        ? ((x.filter.ID = function (e) {
                              var t = e.replace(H, q);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && T) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((x.filter.ID = function (e) {
                              var n = e.replace(H, q);
                              return function (e) {
                                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return t && t.value === n;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && T) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (x.find.TAG = function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                    }),
                    (x.find.CLASS = function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && T) return t.getElementsByClassName(e);
                    }),
                    (p = []),
                    F(function (e) {
                        var t;
                        (r.appendChild(e).innerHTML = "<a id='" + k + "' href='' disabled='disabled'></a><select id='" + k + "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                            e.querySelectorAll("[selected]").length || p.push("\\[" + ge + "*(?:value|" + f + ")"),
                            e.querySelectorAll("[id~=" + k + "-]").length || p.push("~="),
                            e.querySelectorAll("a#" + k + "+*").length || p.push(".#.+[+~]"),
                            e.querySelectorAll(":checked").length || p.push(":checked"),
                            (t = C.createElement("input")).setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            (r.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                            (t = C.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || p.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
                    }),
                    le.cssHas || p.push(":has"),
                    (p = p.length && new RegExp(p.join("|"))),
                    (l = function (e, t) {
                        if (e === t) return (a = !0), 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                            n ||
                            (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!le.sortDetached && t.compareDocumentPosition(e) === n)
                                ? e === C || (e.ownerDocument == ye && I.contains(ye, e))
                                    ? -1
                                    : t === C || (t.ownerDocument == ye && I.contains(ye, t))
                                    ? 1
                                    : o
                                    ? se.call(o, e) - se.call(o, t)
                                    : 0
                                : 4 & n
                                ? -1
                                : 1)
                        );
                    })),
                C
            );
        }
        for (e in ((I.matches = function (e, t) {
            return I(e, null, null, t);
        }),
        (I.matchesSelector = function (e, t) {
            if ((V(e), T && !h[t + " "] && (!p || !p.test(t))))
                try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    h(t, !0);
                }
            return 0 < I(t, C, null, [e]).length;
        }),
        (I.contains = function (e, t) {
            return (e.ownerDocument || e) != C && V(e), ce.contains(e, t);
        }),
        (I.attr = function (e, t) {
            (e.ownerDocument || e) != C && V(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && ue.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== r ? r : e.getAttribute(t);
        }),
        (I.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ce.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((a = !le.sortStable), (o = !le.sortStable && ae.call(e, 0)), pe.call(e, l), a)) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) he.call(e, n[r], 1);
            }
            return (o = null), e;
        }),
        (ce.fn.uniqueSort = function () {
            return this.pushStack(ce.uniqueSort(ae.apply(this)));
        }),
        ((x = ce.expr = {
            cacheLength: 50,
            createPseudo: B,
            match: N,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(H, q)), (e[3] = (e[3] || e[4] || e[5] || "").replace(H, q)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && I.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return N.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && A.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(H, q).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return fe(e, t);
                          };
                },
                CLASS: function (e) {
                    var t = s[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                            s(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, i) {
                    return function (e) {
                        var t = I.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === i
                                      : "!=" === r
                                      ? t !== i
                                      : "^=" === r
                                      ? i && 0 === t.indexOf(i)
                                      : "*=" === r
                                      ? i && -1 < t.indexOf(i)
                                      : "$=" === r
                                      ? i && t.slice(-i.length) === i
                                      : "~=" === r
                                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (p, e, t, h, g) {
                    var v = "nth" !== p.slice(0, 3),
                        y = "last" !== p.slice(-4),
                        m = "of-type" === e;
                    return 1 === h && 0 === g
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u = v !== y ? "nextSibling" : "previousSibling",
                                  l = e.parentNode,
                                  c = m && e.nodeName.toLowerCase(),
                                  f = !n && !m,
                                  d = !1;
                              if (l) {
                                  if (v) {
                                      while (u) {
                                          o = e;
                                          while ((o = o[u])) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                          s = u = "only" === p && !s && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                                      (d = (a = (r = (i = l[k] || (l[k] = {}))[p] || [])[0] === S && r[1]) && r[2]), (o = a && l.childNodes[a]);
                                      while ((o = (++a && o && o[u]) || (d = a = 0) || s.pop()))
                                          if (1 === o.nodeType && ++d && o === e) {
                                              i[p] = [S, a, d];
                                              break;
                                          }
                                  } else if ((f && (d = a = (r = (i = e[k] || (e[k] = {}))[p] || [])[0] === S && r[1]), !1 === d))
                                      while ((o = (++a && o && o[u]) || (d = a = 0) || s.pop())) if ((m ? fe(o, c) : 1 === o.nodeType) && ++d && (f && ((i = o[k] || (o[k] = {}))[p] = [S, d]), o === e)) break;
                                  return (d -= g) === h || (d % h == 0 && 0 <= d / h);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[k]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          x.setFilters.hasOwnProperty(e.toLowerCase())
                              ? B(function (e, t) {
                                    var n,
                                        r = a(e, o),
                                        i = r.length;
                                    while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: B(function (e) {
                    var r = [],
                        i = [],
                        s = ne(e.replace(ve, "$1"));
                    return s[k]
                        ? B(function (e, t, n, r) {
                              var i,
                                  o = s(e, null, r, []),
                                  a = e.length;
                              while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: B(function (t) {
                    return function (e) {
                        return 0 < I(t, e).length;
                    };
                }),
                contains: B(function (t) {
                    return (
                        (t = t.replace(H, q)),
                        function (e) {
                            return -1 < (e.textContent || ce.text(e)).indexOf(t);
                        }
                    );
                }),
                lang: B(function (n) {
                    return (
                        D.test(n || "") || I.error("unsupported lang: " + n),
                        (n = n.replace(H, q).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === r;
                },
                focus: function (e) {
                    return (
                        e ===
                            (function () {
                                try {
                                    return C.activeElement;
                                } catch (e) {}
                            })() &&
                        C.hasFocus() &&
                        !!(e.type || e.href || ~e.tabIndex)
                    );
                },
                enabled: z(!1),
                disabled: z(!0),
                checked: function (e) {
                    return (fe(e, "input") && !!e.checked) || (fe(e, "option") && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !x.pseudos.empty(e);
                },
                header: function (e) {
                    return j.test(e.nodeName);
                },
                input: function (e) {
                    return L.test(e.nodeName);
                },
                button: function (e) {
                    return (fe(e, "input") && "button" === e.type) || fe(e, "button");
                },
                text: function (e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: U(function () {
                    return [0];
                }),
                last: U(function (e, t) {
                    return [t - 1];
                }),
                eq: U(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: U(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: U(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: U(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: U(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = x.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            x.pseudos[e] = $(e);
        for (e in { submit: !0, reset: !0 }) x.pseudos[e] = _(e);
        function Q() {}
        function Y(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = x.preFilter);
            while (a) {
                for (o in ((n && !(r = y.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                (n = !1),
                (r = m.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(ve, " ") }), (a = a.slice(n.length))),
                x.filter))
                    !(r = N[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                if (!n) break;
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
        }
        function G(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function K(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o = [S, f];
                      if (n) {
                          while ((e = e[s])) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                      } else
                          while ((e = e[s]))
                              if (1 === e.nodeType || c)
                                  if (((i = e[k] || (e[k] = {})), u && fe(e, u))) e = e[s] || e;
                                  else {
                                      if ((r = i[l]) && r[0] === S && r[1] === f) return (o[2] = r[2]);
                                      if (((i[l] = o)[2] = a(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function J(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function ee(p, h, g, v, y, e) {
            return (
                v && !v[k] && (v = ee(v)),
                y && !y[k] && (y = ee(y, e)),
                B(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u = [],
                        l = [],
                        c = t.length,
                        f =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        d = !p || (!e && h) ? f : Z(f, u, p, n, r);
                    if ((g ? g(d, (s = y || (e ? p : c || v) ? [] : t), n, r) : (s = d), v)) {
                        (i = Z(s, l)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (s[l[o]] = !(d[l[o]] = a));
                    }
                    if (e) {
                        if (y || p) {
                            if (y) {
                                (i = []), (o = s.length);
                                while (o--) (a = s[o]) && i.push((d[o] = a));
                                y(null, (s = []), i, r);
                            }
                            o = s.length;
                            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
                        }
                    } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : E.apply(t, s);
                })
            );
        }
        function te(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = x.relative[e[0].type],
                    a = o || x.relative[" "],
                    s = o ? 1 : 0,
                    u = K(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = K(
                        function (e) {
                            return -1 < se.call(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r = (!o && (n || t != w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = x.relative[e[s].type])) c = [K(J(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;
                        return ee(1 < s && J(c), 1 < s && G(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te((e = e.slice(n))), n < r && G(e));
                    }
                    c.push(t);
                }
            return J(c);
        }
        function ne(e, t) {
            var n,
                v,
                y,
                m,
                b,
                r,
                i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), (n = t.length);
                while (n--) (a = te(t[n]))[k] ? i.push(a) : o.push(a);
                (a = u(
                    e,
                    ((v = o),
                    (m = 0 < (y = i).length),
                    (b = 0 < v.length),
                    (r = function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || (b && x.find.TAG("*", i)),
                            h = (S += null == d ? 1 : Math.random() || 0.1),
                            g = p.length;
                        for (i && (w = t == C || t || i); l !== g && null != (o = p[l]); l++) {
                            if (b && o) {
                                (a = 0), t || o.ownerDocument == C || (V(o), (n = !T));
                                while ((s = v[a++]))
                                    if (s(o, t || C, n)) {
                                        E.call(r, o);
                                        break;
                                    }
                                i && (S = h);
                            }
                            m && ((o = !s && o) && u--, e && c.push(o));
                        }
                        if (((u += l), m && l !== u)) {
                            a = 0;
                            while ((s = y[a++])) s(c, f, t, n);
                            if (e) {
                                if (0 < u) while (l--) c[l] || f[l] || (f[l] = de.call(r));
                                f = Z(f);
                            }
                            E.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
                        }
                        return i && ((S = h), (w = d)), c;
                    }),
                    m ? B(r) : r)
                )).selector = e;
            }
            return a;
        }
        function re(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = "function" == typeof e && e,
                c = !r && Y((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(H, q), t) || [])[0])) return n;
                    l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                }
                i = N.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (((a = o[i]), x.relative[(s = a.type)])) break;
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(H, q), (P.test(o[0].type) && X(t.parentNode)) || t))) {
                        if ((o.splice(i, 1), !(e = r.length && G(o)))) return E.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || ne(e, c))(r, t, !T, n, !t || (P.test(e) && X(t.parentNode)) || t), n;
        }
        (Q.prototype = x.filters = x.pseudos),
            (x.setFilters = new Q()),
            (le.sortStable = k.split("").sort(l).join("") === k),
            V(),
            (le.sortDetached = F(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            (ce.find = I),
            (ce.expr[":"] = ce.expr.pseudos),
            (ce.unique = ce.uniqueSort),
            (I.compile = ne),
            (I.select = re),
            (I.setDocument = V),
            (I.tokenize = Y),
            (I.escape = ce.escapeSelector),
            (I.getText = ce.text),
            (I.isXML = ce.isXMLDoc),
            (I.selectors = ce.expr),
            (I.support = ce.support),
            (I.uniqueSort = ce.uniqueSort);
    })();
    var p = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        h = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        w = ce.expr.match.needsContext,
        C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(e, n, r) {
        return v(n)
            ? ce.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? ce.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? ce.grep(e, function (e) {
                  return -1 < se.call(n, e) !== r;
              })
            : ce.filter(n, e, r);
    }
    (ce.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? ce.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : ce.find.matches(
                      e,
                      ce.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        ce.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        ce(e).filter(function () {
                            for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
                return 1 < r ? ce.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(T(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(T(this, e || [], !0));
            },
            is: function (e) {
                return !!T(this, "string" == typeof e && w.test(e) ? ce(e) : e || [], !1).length;
            },
        });
    var E,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((ce.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || E), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof ce ? t[0] : t), ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), C.test(r[1]) && ce.isPlainObject(t))) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = m.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(ce)) : ce.makeArray(e, this);
    }).prototype = ce.fn),
        (E = ce(m));
    var S = /^(?:parents|prev(?:Until|All))/,
        A = { children: !0, contents: !0, next: !0, prev: !0 };
    function D(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    ce.fn.extend({
        has: function (e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!w.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        ce.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return p(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return p(e, "parentNode", n);
                },
                next: function (e) {
                    return D(e, "nextSibling");
                },
                prev: function (e) {
                    return D(e, "previousSibling");
                },
                nextAll: function (e) {
                    return p(e, "nextSibling");
                },
                prevAll: function (e) {
                    return p(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return p(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return p(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return h((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return h(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
                },
            },
            function (r, i) {
                ce.fn[r] = function (e, t) {
                    var n = ce.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (A[r] || ce.uniqueSort(n), S.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var N = /[^\x20\t\r\n\f]+/g;
    function L(e) {
        return e;
    }
    function j(e) {
        throw e;
    }
    function O(e, t, n, r) {
        var i;
        try {
            e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (ce.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  ce.each(e.match(N) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : ce.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                ce.each(e, function (e, t) {
                                    v(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        ce.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        ce.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                        ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return ce
                                .Deferred(function (r) {
                                    ce.each(o, function (e, t) {
                                        var n = v(i[t[4]]) && i[t[4]];
                                        s[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                        });
                                    }),
                                        (i = null);
                                })
                                .promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    v(t)
                                                        ? s
                                                            ? t.call(e, l(u, o, L, s), l(u, o, j, s))
                                                            : (u++, t.call(e, l(u, o, L, s), l(u, o, j, s), l(u, o, L, o.notifyWith)))
                                                        : (a !== L && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== j && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (ce.Deferred.getErrorHook ? (t.error = ce.Deferred.getErrorHook()) : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
                                };
                            }
                            return ce
                                .Deferred(function (e) {
                                    o[0][3].add(l(0, e, v(r) ? r : L, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : L)), o[2][3].add(l(0, e, v(n) ? n : j));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? ce.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    ce.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = ae.call(arguments),
                    o = ce.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this), (i[t] = 1 < arguments.length ? ae.call(arguments) : e), --n || o.resolveWith(r, i);
                        };
                    };
                if (n <= 1 && (O(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
                while (t--) O(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (ce.Deferred.exceptionHook = function (e, t) {
        ie.console && ie.console.warn && e && P.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (ce.readyException = function (e) {
            ie.setTimeout(function () {
                throw e;
            });
        });
    var H = ce.Deferred();
    function q() {
        m.removeEventListener("DOMContentLoaded", q), ie.removeEventListener("load", q), ce.ready();
    }
    (ce.fn.ready = function (e) {
        return (
            H.then(e)["catch"](function (e) {
                ce.readyException(e);
            }),
            this
        );
    }),
        ce.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --ce.readyWait : ce.isReady) || ((ce.isReady = !0) !== e && 0 < --ce.readyWait) || H.resolveWith(m, [ce]);
            },
        }),
        (ce.ready.then = H.then),
        "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll) ? ie.setTimeout(ce.ready) : (m.addEventListener("DOMContentLoaded", q), ie.addEventListener("load", q));
    var R = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) for (s in ((i = !0), n)) R(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(ce(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        M = /^-ms-/,
        I = /-([a-z])/g;
    function W(e, t) {
        return t.toUpperCase();
    }
    function B(e) {
        return e.replace(M, "ms-").replace(I, W);
    }
    var F = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function $() {
        this.expando = ce.expando + $.uid++;
    }
    ($.uid = 1),
        ($.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), F(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[B(t)] = n;
                else for (r in t) i[B(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][B(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(B) : (t = B(t)) in r ? [t] : t.match(N) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !ce.isEmptyObject(t);
            },
        });
    var _ = new $(),
        z = new $(),
        U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        X = /[A-Z]/g;
    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(X, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                z.set(e, t, n);
            } else n = void 0;
        return n;
    }
    ce.extend({
        hasData: function (e) {
            return z.hasData(e) || _.hasData(e);
        },
        data: function (e, t, n) {
            return z.access(e, t, n);
        },
        removeData: function (e, t) {
            z.remove(e, t);
        },
        _data: function (e, t, n) {
            return _.access(e, t, n);
        },
        _removeData: function (e, t) {
            _.remove(e, t);
        },
    }),
        ce.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = B(r.slice(5))), V(o, r, i[r]));
                        _.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          z.set(this, n);
                      })
                    : R(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                              this.each(function () {
                                  z.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    z.remove(this, e);
                });
            },
        }),
        ce.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = _.get(e, t)), n && (!r || Array.isArray(n) ? (r = _.access(e, t, ce.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ce.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = ce._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                ce.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    _.get(e, n) ||
                    _.access(e, n, {
                        empty: ce.Callbacks("once memory").add(function () {
                            _.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        ce.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? ce.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = ce.queue(this, t, n);
                              ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    ce.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = ce.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        G = ["Top", "Right", "Bottom", "Left"],
        K = m.documentElement,
        J = function (e) {
            return ce.contains(e.ownerDocument, e);
        },
        Z = { composed: !0 };
    K.getRootNode &&
        (J = function (e) {
            return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
        });
    var ee = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && J(e) && "none" === ce.css(e, "display"));
    };
    var te = {};
    function ne(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((l[c] = _.get(r, "display") || null), l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ee(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = te[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = ce.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (te[s] = u)))))
                    : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    ce.fn.extend({
        show: function () {
            return ne(this, !0);
        },
        hide: function () {
            return ne(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ee(this) ? ce(this).show() : ce(this).hide();
                  });
        },
    });
    var re,
        be,
        xe = /^(?:checkbox|radio)$/i,
        we = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    (re = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (be = m.createElement("input")).setAttribute("type", "radio"),
        be.setAttribute("checked", "checked"),
        be.setAttribute("name", "t"),
        re.appendChild(be),
        (le.checkClone = re.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (re.innerHTML = "<textarea>x</textarea>"),
        (le.noCloneChecked = !!re.cloneNode(!0).lastChild.defaultValue),
        (re.innerHTML = "<option></option>"),
        (le.option = !!re.lastChild);
    var Te = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function Ee(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n;
    }
    function ke(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
    }
    (Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead), (Te.th = Te.td), le.option || (Te.optgroup = Te.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;
    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === x(o)) ce.merge(d, o.nodeType ? [o] : o);
                else if (Se.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (we.exec(o) || ["", ""])[1].toLowerCase()), (u = Te[s] || Te._default), (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    ce.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
        (f.textContent = ""), (p = 0);
        while ((o = d[p++]))
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (((l = J(o)), (a = Ee(f.appendChild(o), "script")), l && ke(a), n)) {
                c = 0;
                while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var De = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return !0;
    }
    function Le() {
        return !1;
    }
    function je(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) je(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Le;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return ce().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = ce.guid++))),
            e.each(function () {
                ce.event.add(this, t, i, r, n);
            })
        );
    }
    function Oe(e, r, t) {
        t
            ? (_.set(e, r, !1),
              ce.event.add(e, r, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n = _.get(this, r);
                      if (1 & e.isTrigger && this[r]) {
                          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();
                          else if (((n = ae.call(arguments)), _.set(this, r, n), this[r](), (t = _.get(this, r)), _.set(this, r, !1), n !== t)) return e.stopImmediatePropagation(), e.preventDefault(), t;
                      } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), (e.isImmediatePropagationStopped = Ne));
                  },
              }))
            : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
    }
    (ce.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                v = _.get(t);
            if (F(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && ce.find.matchesSelector(K, i),
                    n.guid || (n.guid = ce.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle = function (e) {
                            return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
                        }),
                    (l = (e = (e || "").match(N) || [""]).length);
                while (l--)
                    (p = g = (s = De.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        p &&
                            ((f = ce.event.special[p] || {}),
                            (p = (i ? f.delegateType : f.bindType) || p),
                            (f = ce.event.special[p] || {}),
                            (c = ce.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (d = u[p]) || (((d = u[p] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(p, a))),
                            f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                            (ce.event.global[p] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(N) || [""]).length;
                while (l--)
                    if (((p = g = (s = De.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                        (f = ce.event.special[p] || {}), (d = u[(p = (r ? f.delegateType : f.bindType) || p)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = d.length);
                        while (o--)
                            (c = d[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || ce.removeEvent(e, p, v.handle), delete u[p]);
                    } else for (p in u) ce.event.remove(e, p + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                (a = ce.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[ce.expando] ? e : new ce.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return xe.test(t.type) && t.click && fe(t, "input") && Oe(t, "click", !0), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return xe.test(t.type) && t.click && fe(t, "input") && Oe(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (xe.test(t.type) && t.click && fe(t, "input") && _.get(t, "click")) || fe(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (ce.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (ce.Event = function (e, t) {
            if (!(this instanceof ce.Event)) return new ce.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ne : Le),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && ce.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[ce.expando] = !0);
        }),
        (ce.Event.prototype = {
            constructor: ce.Event,
            isDefaultPrevented: Le,
            isPropagationStopped: Le,
            isImmediatePropagationStopped: Le,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ne), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ne), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ne), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        ce.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            ce.event.addProp
        ),
        ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
            function o(e) {
                if (m.documentMode) {
                    var t = _.get(this, "handle"),
                        n = ce.event.fix(e);
                    (n.type = "focusin" === e.type ? "focus" : "blur"), (n.isSimulated = !0), t(e), n.target === n.currentTarget && t(n);
                } else ce.event.simulate(i, e.target, ce.event.fix(e));
            }
            (ce.event.special[r] = {
                setup: function () {
                    var e;
                    if ((Oe(this, r, !0), !m.documentMode)) return !1;
                    (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
                },
                trigger: function () {
                    return Oe(this, r), !0;
                },
                teardown: function () {
                    var e;
                    if (!m.documentMode) return !1;
                    (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
                },
                _default: function (e) {
                    return _.get(e.target, r);
                },
                delegateType: i,
            }),
                (ce.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = m.documentMode ? this : e,
                            n = _.get(t, i);
                        n || (m.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = m.documentMode ? this : e,
                            n = _.get(t, i) - 1;
                        n ? _.set(t, i, n) : (m.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
                    },
                });
        }),
        ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            ce.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || ce.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        ce.fn.extend({
            on: function (e, t, n, r) {
                return je(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Le),
                    this.each(function () {
                        ce.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Pe = /<script|<style|<link/i,
        He = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Re(e, t) {
        return (fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0]) || e;
    }
    function Me(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function We(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events)) for (i in (_.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
        }
    }
    function Be(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = v(p);
        if (h || (1 < f && "string" == typeof p && !le.checkClone && He.test(p)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())), Be(t, r, i, o);
            });
        if (f && ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Ee(e, "script"), Me)).length; c < f; c++) (u = e), c !== d && ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Ee(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, Ie), c = 0; c < s; c++)
                    (u = a[c]),
                        Ce.test(u.type || "") &&
                            !_.access(u, "globalEval") &&
                            ce.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(qe, ""), u, l));
        }
        return n;
    }
    function Fe(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Ee(r)), r.parentNode && (n && J(r) && ke(Ee(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    ce.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = J(e);
            if (!(le.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ce.isXMLDoc(e)))
                for (a = Ee(c), r = 0, i = (o = Ee(e)).length; r < i; r++)
                    (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && xe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || Ee(e), a = a || Ee(c), r = 0, i = o.length; r < i; r++) We(o[r], a[r]);
                else We(e, c);
            return 0 < (a = Ee(c, "script")).length && ke(a, !f && Ee(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if ((t = n[_.expando])) {
                        if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0;
                    }
                    n[z.expando] && (n[z.expando] = void 0);
                }
        },
    }),
        ce.fn.extend({
            detach: function (e) {
                return Fe(this, e, !0);
            },
            remove: function (e) {
                return Fe(this, e);
            },
            text: function (e) {
                return R(
                    this,
                    function (e) {
                        return void 0 === e
                            ? ce.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Be(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Re(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Be(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Re(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Be(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Be(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Ee(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return ce.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return R(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Pe.test(e) && !Te[(we.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ce.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Ee(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Be(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        ce.inArray(this, n) < 0 && (ce.cleanData(Ee(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            ce.fn[e] = function (e) {
                for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), ce(r[o])[a](t), s.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var $e = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        _e = /^--/,
        ze = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = ie), t.getComputedStyle(e);
        },
        Ue = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Xe = new RegExp(G.join("|"), "i");
    function Ve(e, t, n) {
        var r,
            i,
            o,
            a,
            s = _e.test(t),
            u = e.style;
        return (
            (n = n || ze(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(ve, "$1") || void 0),
                "" !== a || J(e) || (a = ce.style(e, t)),
                !le.pixelBoxStyles() && $e.test(a) && Xe.test(t) && ((r = u.width), (i = u.minWidth), (o = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function Qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    K.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                (n = "1%" !== e.top), (s = 12 === t(e.marginLeft)), (l.style.right = "60%"), (o = 36 === t(e.right)), (r = 36 === t(e.width)), (l.style.position = "absolute"), (i = 12 === t(l.offsetWidth / 3)), K.removeChild(u), (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = m.createElement("div"),
            l = m.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
            ce.extend(le, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = m.createElement("table")),
                            (t = m.createElement("tr")),
                            (n = m.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            K.appendChild(e).appendChild(t).appendChild(n),
                            (r = ie.getComputedStyle(t)),
                            (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                            K.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var Ye = ["Webkit", "Moz", "ms"],
        Ge = m.createElement("div").style,
        Ke = {};
    function Je(e) {
        var t = ce.cssProps[e] || Ke[e];
        return (
            t ||
            (e in Ge
                ? e
                : (Ke[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = Ye.length;
                          while (n--) if ((e = Ye[n] + t) in Ge) return e;
                      })(e) || e))
        );
    }
    var Ze,
        et,
        tt = /^(none|table(?!-c[ea]).+)/,
        nt = { position: "absolute", visibility: "hidden", display: "block" },
        rt = { letterSpacing: "0", fontWeight: "400" };
    function it(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function ot(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ce.css(e, n + G[a], !0, i)),
                r
                    ? ("content" === n && (u -= ce.css(e, "padding" + G[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + G[a] + "Width", !0, i)))
                    : ((u += ce.css(e, "padding" + G[a], !0, i)), "padding" !== n ? (u += ce.css(e, "border" + G[a] + "Width", !0, i)) : (s += ce.css(e, "border" + G[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u + l;
    }
    function at(e, t, n) {
        var r = ze(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ve(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!le.boxSizingReliable() && i) || (!le.reliableTrDimensions() && fe(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === ce.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + ot(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ve(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = B(t),
                    u = _e.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) &&
                    (i = Y.exec(n)) &&
                    i[1] &&
                    ((n = (function (e, t, n, r) {
                        var i,
                            o,
                            a = 20,
                            s = r
                                ? function () {
                                      return r.cur();
                                  }
                                : function () {
                                      return ce.css(e, t, "");
                                  },
                            u = s(),
                            l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (ce.cssNumber[t] || ("px" !== l && +u)) && Y.exec(ce.css(e, t));
                        if (c && c[3] !== l) {
                            (u /= 2), (l = l || c[3]), (c = +u || 1);
                            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
                            (c *= 2), ce.style(e, t, c + l), (n = n || []);
                        }
                        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
                    })(e, t, i)),
                    (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
                        le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = B(t);
            return (
                _e.test(t) || (t = Je(s)),
                (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Ve(e, t, r)),
                "normal" === i && t in rt && (i = rt[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        ce.each(["height", "width"], function (e, u) {
            ce.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !tt.test(ce.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? at(e, u, n)
                            : Ue(e, nt, function () {
                                  return at(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = ze(e),
                        o = !le.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                        s = n ? ot(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - ot(e, u, "border", !1, i) - 0.5)),
                        s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = ce.css(e, u))),
                        it(0, t, s)
                    );
                },
            };
        }),
        (ce.cssHooks.marginLeft = Qe(le.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ve(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ue(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (ce.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + G[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (ce.cssHooks[i + o].set = it);
        }),
        ce.fn.extend({
            css: function (e, t) {
                return R(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = ze(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (ce.fn.delay = function (r, e) {
            return (
                (r = (ce.fx && ce.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = ie.setTimeout(e, r);
                    t.stop = function () {
                        ie.clearTimeout(n);
                    };
                })
            );
        }),
        (Ze = m.createElement("input")),
        (et = m.createElement("select").appendChild(m.createElement("option"))),
        (Ze.type = "checkbox"),
        (le.checkOn = "" !== Ze.value),
        (le.optSelected = et.selected),
        ((Ze = m.createElement("input")).value = "t"),
        (Ze.type = "radio"),
        (le.radioValue = "t" === Ze.value);
    var st,
        ut = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function (e, t) {
            return R(this, ce.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                ce.removeAttr(this, e);
            });
        },
    }),
        ce.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? ce.prop(e, t, n)
                        : ((1 === o && ce.isXMLDoc(e)) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? st : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void ce.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = ce.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!le.radioValue && "radio" === t && fe(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(N);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (st = {
            set: function (e, t, n) {
                return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = ut[t] || ce.find.attr;
            ut[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = ut[o]), (ut[o] = r), (r = null != a(e, t, n) ? o : null), (ut[o] = i)), r;
            };
        });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    function ft(e) {
        return (e.match(N) || []).join(" ");
    }
    function dt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function pt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || [];
    }
    ce.fn.extend({
        prop: function (e, t) {
            return R(this, ce.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ce.propFix[e] || e];
            });
        },
    }),
        ce.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && ce.isXMLDoc(e)) || ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ce.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : lt.test(e.nodeName) || (ct.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        le.optSelected ||
            (ce.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ce.propFix[this.toLowerCase()] = this;
        }),
        ce.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a;
                return v(t)
                    ? this.each(function (e) {
                          ce(this).addClass(t.call(this, e, dt(this)));
                      })
                    : (e = pt(t)).length
                    ? this.each(function () {
                          if (((r = dt(this)), (n = 1 === this.nodeType && " " + ft(r) + " "))) {
                              for (o = 0; o < e.length; o++) (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                              (a = ft(n)), r !== a && this.setAttribute("class", a);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, r, i, o, a;
                return v(t)
                    ? this.each(function (e) {
                          ce(this).removeClass(t.call(this, e, dt(this)));
                      })
                    : arguments.length
                    ? (e = pt(t)).length
                        ? this.each(function () {
                              if (((r = dt(this)), (n = 1 === this.nodeType && " " + ft(r) + " "))) {
                                  for (o = 0; o < e.length; o++) {
                                      i = e[o];
                                      while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
                                  }
                                  (a = ft(n)), r !== a && this.setAttribute("class", a);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, n) {
                var e,
                    r,
                    i,
                    o,
                    a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return v(t)
                    ? this.each(function (e) {
                          ce(this).toggleClass(t.call(this, e, dt(this), n), n);
                      })
                    : "boolean" == typeof n && s
                    ? n
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((e = pt(t)),
                      this.each(function () {
                          if (s) for (o = ce(this), i = 0; i < e.length; i++) (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                          else (void 0 !== t && "boolean" !== a) || ((r = dt(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
                      }));
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + ft(dt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var ht = /\r/g;
    ce.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = v(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = ce.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(ht, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        ce.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ce.find.attr(e, "value");
                        return null != t ? t : ft(ce.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                                if (((t = ce(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = ce.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        ce.each(["radio", "checkbox"], function () {
            (ce.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < ce.inArray(ce(e).val(), t));
                },
            }),
                le.checkOn ||
                    (ce.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (ce.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = new ie.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
                (n = t && t.getElementsByTagName("parsererror")[0]),
                (t && !n) ||
                    ce.error(
                        "Invalid XML: " +
                            (n
                                ? ce
                                      .map(n.childNodes, function (e) {
                                          return e.textContent;
                                      })
                                      .join("\n")
                                : e)
                    ),
                t
            );
        });
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function (e) {
            e.stopPropagation();
        };
    ce.extend(ce.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                d = [n || m],
                p = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || m),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !gt.test(p + ce.event.triggered) &&
                    (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
                    (u = p.indexOf(":") < 0 && "on" + p),
                    ((e = e[ce.expando] ? e : new ce.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : ce.makeArray(t, [e])),
                    (c = ce.event.special[p] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || p, gt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), (a = o);
                    a === (n.ownerDocument || m) && d.push(a.defaultView || a.parentWindow || ie);
                }
                i = 0;
                while ((o = d[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || p),
                        (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && F(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = p),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                        !F(n) ||
                        (u &&
                            v(n[p]) &&
                            !y(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (ce.event.triggered = p),
                            e.isPropagationStopped() && f.addEventListener(p, vt),
                            n[p](),
                            e.isPropagationStopped() && f.removeEventListener(p, vt),
                            (ce.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
            ce.event.trigger(r, null, t);
        },
    }),
        ce.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    ce.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ce.event.trigger(e, t, n, !0);
            },
        });
    var yt,
        mt = /\[\]$/,
        bt = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        wt = /^(?:input|select|textarea|keygen)/i;
    function Ct(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            ce.each(e, function (e, t) {
                r || mt.test(n) ? i(n, t) : Ct(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== x(e)) i(n, e);
        else for (t in e) Ct(n + "[" + t + "]", e[t], r, i);
    }
    (ce.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
            ce.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Ct(n, e[n], t, i);
        return r.join("&");
    }),
        ce.fn.extend({
            serialize: function () {
                return ce.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !ce(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e) && (this.checked || !xe.test(e));
                    })
                    .map(function (e, t) {
                        var n = ce(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? ce.map(n, function (e) {
                                  return { name: t.name, value: e.replace(bt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(bt, "\r\n") };
                    })
                    .get();
            },
        }),
        ce.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (v(e) && (e = e.call(this[0])),
                        (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return v(n)
                    ? this.each(function (e) {
                          ce(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = ce(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = v(t);
                return this.each(function (e) {
                    ce(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            ce(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (ce.expr.pseudos.hidden = function (e) {
            return !ce.expr.pseudos.visible(e);
        }),
        (ce.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (le.createHTMLDocument = (((yt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === yt.childNodes.length)),
        (ce.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (le.createHTMLDocument ? (((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href), t.head.appendChild(r)) : (t = m)),
                  (o = !n && []),
                  (i = C.exec(e)) ? [t.createElement(i[1])] : ((i = Ae([e], t, o)), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
            var r, i, o;
        }),
        (ce.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = ce.css(e, "position"),
                    c = ce(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = ce.css(e, "top")),
                    (u = ce.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    v(t) && (t = t.call(e, n, ce.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        ce.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              ce.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)), (i.left += ce.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                    return e || K;
                });
            },
        }),
        ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
            var o = "pageYOffset" === i;
            ce.fn[t] = function (e) {
                return R(
                    this,
                    function (e, t, n) {
                        var r;
                        if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        ce.each(["top", "left"], function (e, n) {
            ce.cssHooks[n] = Qe(le.pixelPosition, function (e, t) {
                if (t) return (t = Ve(e, n)), $e.test(t) ? ce(e).position()[n] + "px" : t;
            });
        }),
        ce.each({ Height: "height", Width: "width" }, function (a, s) {
            ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                ce.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return R(
                        this,
                        function (e, t, n) {
                            var r;
                            return y(e)
                                ? 0 === o.indexOf("outer")
                                    ? e["inner" + a]
                                    : e.document.documentElement["client" + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                : void 0 === n
                                ? ce.css(e, t, i)
                                : ce.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        ce.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
            },
        }),
        ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            ce.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Tt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (ce.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
                (r = ae.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(ae.call(arguments)));
                }).guid = e.guid = e.guid || ce.guid++),
                i
            );
    }),
        (ce.holdReady = function (e) {
            e ? ce.readyWait++ : ce.ready(!0);
        }),
        (ce.isArray = Array.isArray),
        (ce.parseJSON = JSON.parse),
        (ce.nodeName = fe),
        (ce.isFunction = v),
        (ce.isWindow = y),
        (ce.camelCase = B),
        (ce.type = x),
        (ce.now = Date.now),
        (ce.isNumeric = function (e) {
            var t = ce.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (ce.trim = function (e) {
            return null == e ? "" : (e + "").replace(Tt, "$1");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return ce;
            });
    var Et = ie.jQuery,
        kt = ie.$;
    return (
        (ce.noConflict = function (e) {
            return ie.$ === ce && (ie.$ = kt), e && ie.jQuery === ce && (ie.jQuery = Et), ce;
        }),
        "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
        ce
    );
});
