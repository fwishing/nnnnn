// ==UserScript==
// @name Flight Management Computer for GeoFS
// @description This extension adds an FMC which controls features such as VNAV, LNAV, route, progress information, etc.
// @author Harry Xue and Ethan Shields
// @namespace GeoFS-Plugins
// @match http://www.geo-fs.com/geofs.php
// @match https://www.geo-fs.com/geofs.php
// @run-at document-end
// @version 0.5.5r2
// @grant none
// ==/UserScript==

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.4 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */

/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

/**
 * @license minify Copyright (c) 2016-2017 Harry Xue
 * Licensed under the MIT License (MIT)
 */

/**
 * @license Copyright (c) 2016-2017 Harry Xue, (c) 2016-2017 Ethan Shields
 * Released under the GNU Affero General Public License, v3.0 or later
 * https://github.com/geofs-plugins/fmc-requirejs/blob/master/LICENSE.md
 */

var requirejs, require, define;

!function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || "";
    }
    function isFunction(e) {
        return "[object Function]" === ostring.call(e);
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e);
    }
    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1) ;
        }
    }
    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1) ;
        }
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t);
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t];
    }
    function eachProp(e, t) {
        var n;
        for (n in e) if (hasProp(e, n) && t(e[n], n)) break;
    }
    function mixin(e, t, n, a) {
        return t && eachProp(t, function(t, i) {
            !n && hasProp(e, i) || (!a || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[i] = t : (e[i] || (e[i] = {}),
            mixin(e[i], t, n, a)));
        }), e;
    }
    function bind(e, t) {
        return function() {
            return t.apply(e, arguments);
        };
    }
    function scripts() {
        return document.getElementsByTagName("script");
    }
    function defaultOnError(e) {
        throw e;
    }
    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e];
        }), t;
    }
    function makeError(e, t, n, a) {
        var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return i.requireType = e, i.requireModules = a, n && (i.originalError = n), i;
    }
    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++) if (n = e[t], "." === n) e.splice(t, 1), t -= 1; else if (".." === n) {
                if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2);
            }
        }
        function n(e, n, a) {
            var i, r, o, s, l, c, d, u, f, p, m, h, v = n && n.split("/"), b = k.map, g = b && b["*"];
            if (e && (e = e.split("/"), d = e.length - 1, k.nodeIdCompat && jsSuffixRegExp.test(e[d]) && (e[d] = e[d].replace(jsSuffixRegExp, "")),
            "." === e[0].charAt(0) && v && (h = v.slice(0, v.length - 1), e = h.concat(e)),
            t(e), e = e.join("/")), a && b && (v || g)) {
                o = e.split("/");
                e: for (s = o.length; s > 0; s -= 1) {
                    if (c = o.slice(0, s).join("/"), v) for (l = v.length; l > 0; l -= 1) if (r = getOwn(b, v.slice(0, l).join("/")),
                    r && (r = getOwn(r, c))) {
                        u = r, f = s;
                        break e;
                    }
                    !p && g && getOwn(g, c) && (p = getOwn(g, c), m = s);
                }
                !u && p && (u = p, f = m), u && (o.splice(0, f, u), e = o.join("/"));
            }
            return i = getOwn(k.pkgs, e), i ? i : e;
        }
        function a(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName) return t.parentNode.removeChild(t),
                !0;
            });
        }
        function i(e) {
            var t = getOwn(k.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), x.require.undef(e), x.makeRequire(null, {
                skipMap: !0
            })([ e ]), !0;
        }
        function r(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [ t, e ];
        }
        function o(e, t, a, i) {
            var o, s, l, c, d = null, u = t ? t.name : null, f = e, p = !0, m = "";
            return e || (p = !1, e = "_@r" + (M += 1)), c = r(e), d = c[0], e = c[1], d && (d = n(d, u, i),
            s = getOwn(D, d)), e && (d ? m = a ? e : s && s.normalize ? s.normalize(e, function(e) {
                return n(e, u, i);
            }) : e.indexOf("!") === -1 ? n(e, u, i) : e : (m = n(e, u, i), c = r(m), d = c[0],
            m = c[1], a = !0, o = x.nameToUrl(m))), l = !d || s || a ? "" : "_unnormalized" + (j += 1),
            {
                prefix: d,
                name: m,
                parentMap: t,
                unnormalized: !!l,
                url: o,
                originalName: f,
                isDefine: p,
                id: (d ? d + "!" + m : m) + l
            };
        }
        function s(e) {
            var t = e.id, n = getOwn(E, t);
            return n || (n = E[t] = new x.Module(e)), n;
        }
        function l(e, t, n) {
            var a = e.id, i = getOwn(E, a);
            !hasProp(D, a) || i && !i.defineEmitComplete ? (i = s(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(D[a]);
        }
        function c(e, t) {
            var n = e.requireModules, a = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(E, t);
                n && (n.error = e, n.events.error && (a = !0, n.emit("error", e)));
            }), a || req.onError(e));
        }
        function d() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (x.defQueueMap[t] = !0), C.push(e);
            }), globalDefQueue = []);
        }
        function u(e) {
            delete E[e], delete T[e];
        }
        function f(e, t, n) {
            var a = e.map.id;
            e.error ? e.emit("error", e.error) : (t[a] = !0, each(e.depMaps, function(a, i) {
                var r = a.id, o = getOwn(E, r);
                !o || e.depMatched[i] || n[r] || (getOwn(t, r) ? (e.defineDep(i, D[r]), e.check()) : f(o, t, n));
            }), n[a] = !0);
        }
        function p() {
            var e, t, n = 1e3 * k.waitSeconds, r = n && x.startTime + n < new Date().getTime(), o = [], s = [], l = !1, d = !0;
            if (!g) {
                if (g = !0, eachProp(T, function(e) {
                    var n = e.map, c = n.id;
                    if (e.enabled && (n.isDefine || s.push(e), !e.error)) if (!e.inited && r) i(c) ? (t = !0,
                    l = !0) : (o.push(c), a(c)); else if (!e.inited && e.fetched && n.isDefine && (l = !0,
                    !n.prefix)) return d = !1;
                }), r && o.length) return e = makeError("timeout", "Load timeout for modules: " + o, null, o),
                e.contextName = x.contextName, c(e);
                d && each(s, function(e) {
                    f(e, {}, {});
                }), r && !t || !l || !isBrowser && !isWebWorker || _ || (_ = setTimeout(function() {
                    _ = 0, p();
                }, 50)), g = !1;
            }
        }
        function m(e) {
            hasProp(D, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2]);
        }
        function h(e, t, n, a) {
            e.detachEvent && !isOpera ? a && e.detachEvent(a, t) : e.removeEventListener(n, t, !1);
        }
        function v(e) {
            var t = e.currentTarget || e.srcElement;
            return h(t, x.onScriptLoad, "load", "onreadystatechange"), h(t, x.onScriptError, "error"),
            {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            };
        }
        function b() {
            var e;
            for (d(); C.length; ) {
                if (e = C.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                m(e);
            }
            x.defQueueMap = {};
        }
        var g, y, x, w, _, k = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, E = {}, T = {}, S = {}, C = [], D = {}, A = {}, N = {}, M = 1, j = 1;
        return w = {
            require: function(e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map);
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? D[e.map.id] = e.exports : e.exports = D[e.map.id] = {};
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(k.config, e.map.id) || {};
                    },
                    exports: e.exports || (e.exports = {})
                };
            }
        }, y = function(e) {
            this.events = getOwn(S, e.id) || {}, this.map = e, this.shim = getOwn(k.shim, e.id),
            this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {},
            this.depCount = 0;
        }, y.prototype = {
            init: function(e, t, n, a) {
                a = a || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e);
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = a.ignore,
                a.enabled || this.enabled ? this.enable() : this.check());
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t);
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, x.startTime = new Date().getTime();
                    var e = this.map;
                    return this.shim ? void x.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load();
                    })) : e.prefix ? this.callPlugin() : this.load();
                }
            },
            load: function() {
                var e = this.map.url;
                A[e] || (A[e] = !0, x.load(this.map.id, e));
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id, a = this.depExports, i = this.exports, r = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(r)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        i = x.execCb(n, r, a, i);
                                    } catch (t) {
                                        e = t;
                                    } else i = x.execCb(n, r, a, i);
                                    if (this.map.isDefine && void 0 === i && (t = this.module, t ? i = t.exports : this.usingExports && (i = this.exports)),
                                    e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [ this.map.id ] : null,
                                    e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e);
                                } else i = r;
                                if (this.exports = i, this.map.isDefine && !this.ignore && (D[n] = i, req.onResourceLoad)) {
                                    var o = [];
                                    each(this.depMaps, function(e) {
                                        o.push(e.normalizedMap || e);
                                    }), req.onResourceLoad(x, this.map, o);
                                }
                                u(n), this.defined = !0;
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0,
                            this.emit("defined", this.exports), this.defineEmitComplete = !0);
                        }
                    } else hasProp(x.defQueueMap, n) || this.fetch();
                }
            },
            callPlugin: function() {
                var e = this.map, t = e.id, a = o(e.prefix);
                this.depMaps.push(a), l(a, "defined", bind(this, function(a) {
                    var i, r, d, f = getOwn(N, this.map.id), p = this.map.name, m = this.map.parentMap ? this.map.parentMap.name : null, h = x.makeRequire(e.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (a.normalize && (p = a.normalize(p, function(e) {
                        return n(e, m, !0);
                    }) || ""), r = o(e.prefix + "!" + p, this.map.parentMap, !0), l(r, "defined", bind(this, function(e) {
                        this.map.normalizedMap = r, this.init([], function() {
                            return e;
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        });
                    })), d = getOwn(E, r.id), void (d && (this.depMaps.push(r), this.events.error && d.on("error", bind(this, function(e) {
                        this.emit("error", e);
                    })), d.enable()))) : f ? (this.map.url = x.nameToUrl(f), void this.load()) : (i = bind(this, function(e) {
                        this.init([], function() {
                            return e;
                        }, null, {
                            enabled: !0
                        });
                    }), i.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [ t ], eachProp(E, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && u(e.map.id);
                        }), c(e);
                    }), i.fromText = bind(this, function(n, a) {
                        var r = e.name, l = o(r), d = useInteractive;
                        a && (n = a), d && (useInteractive = !1), s(l), hasProp(k.config, t) && (k.config[r] = k.config[t]);
                        try {
                            req.exec(n);
                        } catch (e) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [ t ]));
                        }
                        d && (useInteractive = !0), this.depMaps.push(l), x.completeLoad(r), h([ r ], i);
                    }), void a.load(e.name, h, i, k));
                })), x.enable(a, this), this.pluginMaps[a.id] = a;
            },
            enable: function() {
                T[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, a, i;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap),
                        this.depMaps[t] = e, i = getOwn(w, e.id)) return void (this.depExports[t] = i(this));
                        this.depCount += 1, l(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e), this.check());
                        })), this.errback ? l(e, "error", bind(this, this.errback)) : this.events.error && l(e, "error", bind(this, function(e) {
                            this.emit("error", e);
                        }));
                    }
                    n = e.id, a = E[n], hasProp(w, n) || !a || a.enabled || x.enable(e, this);
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(E, e.id);
                    t && !t.enabled && x.enable(e, this);
                })), this.enabling = !1, this.check();
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t);
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t);
                }), "error" === e && delete this.events[e];
            }
        }, x = {
            config: k,
            contextName: e,
            registry: E,
            defined: D,
            urlFetched: A,
            defQueue: C,
            defQueueMap: {},
            Module: y,
            makeModuleMap: o,
            nextTick: req.nextTick,
            onError: c,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"),
                "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, n) {
                        return (n.indexOf("?") === -1 ? "?" : "&") + t;
                    };
                }
                var n = k.shim, a = {
                    paths: !0,
                    bundles: !0,
                    config: !0,
                    map: !0
                };
                eachProp(e, function(e, t) {
                    a[t] ? (k[t] || (k[t] = {}), mixin(k[t], e, !0, !0)) : k[t] = e;
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (N[e] = t);
                    });
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = x.makeShimExports(e)),
                    n[t] = e;
                }), k.shim = n), e.packages && each(e.packages, function(e) {
                    var t, n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.name, t = e.location, t && (k.paths[n] = e.location), k.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "");
                }), eachProp(E, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t, null, !0));
                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback);
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports);
                }
                return t;
            },
            makeRequire: function(t, i) {
                function r(n, a, l) {
                    var d, u, f;
                    return i.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0),
                    "string" == typeof n ? isFunction(a) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(w, n) ? w[n](E[t.id]) : req.get ? req.get(x, n, t, r) : (u = o(n, t, !1, !0),
                    d = u.id, hasProp(D, d) ? D[d] : c(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (b(),
                    x.nextTick(function() {
                        b(), f = s(o(null, t)), f.skipMap = i.skipMap, f.init(n, a, l, {
                            enabled: !0
                        }), p();
                    }), r);
                }
                return i = i || {}, mixin(r, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var a, i = e.lastIndexOf("."), r = e.split("/")[0], o = "." === r || ".." === r;
                        return i !== -1 && (!o || i > 1) && (a = e.substring(i, e.length), e = e.substring(0, i)),
                        x.nameToUrl(n(e, t && t.id, !0), a, !0);
                    },
                    defined: function(e) {
                        return hasProp(D, o(e, t, !1, !0).id);
                    },
                    specified: function(e) {
                        return e = o(e, t, !1, !0).id, hasProp(D, e) || hasProp(E, e);
                    }
                }), t || (r.undef = function(e) {
                    d();
                    var n = o(e, t, !0), i = getOwn(E, e);
                    i.undefed = !0, a(e), delete D[e], delete A[n.url], delete S[e], eachReverse(C, function(t, n) {
                        t[0] === e && C.splice(n, 1);
                    }), delete x.defQueueMap[e], i && (i.events.defined && (S[e] = i.events), u(e));
                }), r;
            },
            enable: function(e) {
                var t = getOwn(E, e.id);
                t && s(e).enable();
            },
            completeLoad: function(e) {
                var t, n, a, r = getOwn(k.shim, e) || {}, o = r.exports;
                for (d(); C.length; ) {
                    if (n = C.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0;
                    } else n[0] === e && (t = !0);
                    m(n);
                }
                if (x.defQueueMap = {}, a = getOwn(E, e), !t && !hasProp(D, e) && a && !a.inited) {
                    if (!(!k.enforceDefine || o && getGlobal(o))) return i(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [ e ]));
                    m([ e, r.deps || [], r.exportsFn ]);
                }
                p();
            },
            nameToUrl: function(e, t, n) {
                var a, i, r, o, s, l, c, d = getOwn(k.pkgs, e);
                if (d && (e = d), c = getOwn(N, e)) return x.nameToUrl(c, t, n);
                if (req.jsExtRegExp.test(e)) s = e + (t || ""); else {
                    for (a = k.paths, i = e.split("/"), r = i.length; r > 0; r -= 1) if (o = i.slice(0, r).join("/"),
                    l = getOwn(a, o)) {
                        isArray(l) && (l = l[0]), i.splice(0, r, l);
                        break;
                    }
                    s = i.join("/"), s += t || (/^data\:|^blob\:|\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + s;
                }
                return k.urlArgs && !/^blob\:/.test(s) ? s + k.urlArgs(e, s) : s;
            },
            load: function(e, t) {
                req.load(x, e, t);
            },
            execCb: function(e, t, n, a) {
                return t.apply(a, n);
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = v(e);
                    x.completeLoad(t.id);
                }
            },
            onScriptError: function(e) {
                var t = v(e);
                if (!i(t.id)) {
                    var n = [];
                    return eachProp(E, function(e, a) {
                        0 !== a.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id) return n.push(a), !0;
                        });
                    }), c(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [ t.id ]));
                }
            }
        }, x.require = x.makeRequire(), x;
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e;
        }), interactiveScript);
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.4", commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0;
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0),
        req = requirejs = function(e, t, n, a) {
            var i, r, o = defContextName;
            return isArray(e) || "string" == typeof e || (r = e, isArray(t) ? (e = t, t = n,
            n = a) : e = []), r && r.context && (o = r.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)),
            r && i.configure(r), i.require(e, t, n);
        }, req.config = function(e) {
            return req(e);
        }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4);
        } : function(e) {
            e();
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each([ "toUrl", "undef", "defined", "specified" ], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments);
            };
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0],
        baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError,
        req.createNode = function(e, t, n) {
            var a = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return a.type = e.scriptType || "text/javascript", a.charset = "utf-8", a.async = !0,
            a;
        }, req.load = function(e, t, n) {
            var a, i = e && e.config || {};
            if (isBrowser) return a = req.createNode(i, t, n), a.setAttribute("data-requirecontext", e.contextName),
            a.setAttribute("data-requiremodule", t), !a.attachEvent || a.attachEvent.toString && a.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (a.addEventListener("load", e.onScriptLoad, !1),
            a.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, a.attachEvent("onreadystatechange", e.onScriptLoad)),
            a.src = n, i.onNodeCreated && i.onNodeCreated(a, i, t, n), currentlyAddingScript = a,
            baseElement ? head.insertBefore(a, baseElement) : head.appendChild(a), currentlyAddingScript = null,
            a;
            if (isWebWorker) try {
                setTimeout(function() {}, 0), importScripts(n), e.completeLoad(t);
            } catch (a) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, a, [ t ]));
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain,
            cfg.baseUrl || mainScript.indexOf("!") !== -1 || (src = mainScript.split("/"), mainScript = src.pop(),
            subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""),
            req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [ mainScript ],
            !0;
        }), define = function(e, t, n) {
            var a, i;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null),
            !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, n) {
                t.push(n);
            }), t = (1 === n.length ? [ "require" ] : [ "require", "exports", "module" ]).concat(t))),
            useInteractive && (a = currentlyAddingScript || getInteractiveScript(), a && (e || (e = a.getAttribute("data-requiremodule")),
            i = contexts[a.getAttribute("data-requirecontext")])), i ? (i.defQueue.push([ e, t, n ]),
            i.defQueueMap[e] = !0) : globalDefQueue.push([ e, t, n ]);
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text);
        }, req(cfg);
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout), define("../node_modules/requirejs/require", function() {}),
function() {
    !function(e) {
        var t = this || (0, eval)("this"), n = t.document, a = t.navigator, i = t.jQuery, r = t.JSON;
        !function(e) {
            "function" == typeof define && define.amd ? define("knockout", [ "exports", "require" ], e) : e("object" == typeof exports && "object" == typeof module ? module.exports || exports : t.ko = {});
        }(function(o, s) {
            function l(e, t) {
                return (null === e || typeof e in v) && e === t;
            }
            function c(t, n) {
                var a;
                return function() {
                    a || (a = h.a.setTimeout(function() {
                        a = e, t();
                    }, n));
                };
            }
            function d(e, t) {
                var n;
                return function() {
                    clearTimeout(n), n = h.a.setTimeout(e, t);
                };
            }
            function u(e, t) {
                t && t !== b ? "beforeChange" === t ? this.Ob(e) : this.Ja(e, t) : this.Pb(e);
            }
            function f(e, t) {
                null !== t && t.k && t.k();
            }
            function p(e, t) {
                var n = this.Mc, a = n[_];
                a.T || (this.ob && this.Oa[t] ? (n.Sb(t, e, this.Oa[t]), this.Oa[t] = null, --this.ob) : a.s[t] || n.Sb(t, e, a.t ? {
                    $: e
                } : n.yc(e)), e.Ha && e.Hc());
            }
            function m(e, t, n, a) {
                h.d[e] = {
                    init: function(e, i, r, o, s) {
                        var l, c;
                        return h.m(function() {
                            var r = i(), o = h.a.c(r), o = !n != !o, d = !c;
                            (d || t || o !== l) && (d && h.xa.Ca() && (c = h.a.wa(h.f.childNodes(e), !0)), o ? (d || h.f.fa(e, h.a.wa(c)),
                            h.hb(a ? a(s, r) : s, e)) : h.f.za(e), l = o);
                        }, null, {
                            i: e
                        }), {
                            controlsDescendantBindings: !0
                        };
                    }
                }, h.h.va[e] = !1, h.f.aa[e] = !0;
            }
            var h = "undefined" != typeof o ? o : {};
            h.b = function(e, t) {
                for (var n = e.split("."), a = h, i = 0; i < n.length - 1; i++) a = a[n[i]];
                a[n[n.length - 1]] = t;
            }, h.H = function(e, t, n) {
                e[t] = n;
            }, h.version = "3.4.2", h.b("version", h.version), h.options = {
                deferUpdates: !1,
                useOnlyNativeEvents: !1
            }, h.a = function() {
                function o(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
                }
                function s(e, t) {
                    if (t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e;
                }
                function l(e, t) {
                    return e.__proto__ = t, e;
                }
                function c(e, t, n, a) {
                    var i = e[t].match(b) || [];
                    h.a.r(n.match(b), function(e) {
                        h.a.ra(i, e, a);
                    }), e[t] = i.join(" ");
                }
                var d = {
                    __proto__: []
                } instanceof Array, u = "function" == typeof Symbol, f = {}, p = {};
                f[a && /Firefox\/2/i.test(a.userAgent) ? "KeyboardEvent" : "UIEvents"] = [ "keyup", "keydown", "keypress" ],
                f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "),
                o(f, function(e, t) {
                    if (t.length) for (var n = 0, a = t.length; n < a; n++) p[t[n]] = e;
                });
                var m = {
                    propertychange: !0
                }, v = n && function() {
                    for (var t = 3, a = n.createElement("div"), i = a.getElementsByTagName("i"); a.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e",
                    i[0]; ) ;
                    return 4 < t ? t : e;
                }(), b = /\S+/g;
                return {
                    gc: [ "authenticity_token", /^__RequestVerificationToken(_.*)?$/ ],
                    r: function(e, t) {
                        for (var n = 0, a = e.length; n < a; n++) t(e[n], n);
                    },
                    o: function(e, t) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
                        for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    Vb: function(e, t, n) {
                        for (var a = 0, i = e.length; a < i; a++) if (t.call(n, e[a], a)) return e[a];
                        return null;
                    },
                    Na: function(e, t) {
                        var n = h.a.o(e, t);
                        0 < n ? e.splice(n, 1) : 0 === n && e.shift();
                    },
                    Wb: function(e) {
                        e = e || [];
                        for (var t = [], n = 0, a = e.length; n < a; n++) 0 > h.a.o(t, e[n]) && t.push(e[n]);
                        return t;
                    },
                    ib: function(e, t) {
                        e = e || [];
                        for (var n = [], a = 0, i = e.length; a < i; a++) n.push(t(e[a], a));
                        return n;
                    },
                    Ma: function(e, t) {
                        e = e || [];
                        for (var n = [], a = 0, i = e.length; a < i; a++) t(e[a], a) && n.push(e[a]);
                        return n;
                    },
                    ta: function(e, t) {
                        if (t instanceof Array) e.push.apply(e, t); else for (var n = 0, a = t.length; n < a; n++) e.push(t[n]);
                        return e;
                    },
                    ra: function(e, t, n) {
                        var a = h.a.o(h.a.Bb(e), t);
                        0 > a ? n && e.push(t) : n || e.splice(a, 1);
                    },
                    la: d,
                    extend: s,
                    $a: l,
                    ab: d ? l : s,
                    D: o,
                    Ea: function(e, t) {
                        if (!e) return e;
                        var n, a = {};
                        for (n in e) e.hasOwnProperty(n) && (a[n] = t(e[n], n, e));
                        return a;
                    },
                    rb: function(e) {
                        for (;e.firstChild; ) h.removeNode(e.firstChild);
                    },
                    nc: function(e) {
                        e = h.a.W(e);
                        for (var t = (e[0] && e[0].ownerDocument || n).createElement("div"), a = 0, i = e.length; a < i; a++) t.appendChild(h.ba(e[a]));
                        return t;
                    },
                    wa: function(e, t) {
                        for (var n = 0, a = e.length, i = []; n < a; n++) {
                            var r = e[n].cloneNode(!0);
                            i.push(t ? h.ba(r) : r);
                        }
                        return i;
                    },
                    fa: function(e, t) {
                        if (h.a.rb(e), t) for (var n = 0, a = t.length; n < a; n++) e.appendChild(t[n]);
                    },
                    uc: function(e, t) {
                        var n = e.nodeType ? [ e ] : e;
                        if (0 < n.length) {
                            for (var a = n[0], i = a.parentNode, r = 0, o = t.length; r < o; r++) i.insertBefore(t[r], a);
                            for (r = 0, o = n.length; r < o; r++) h.removeNode(n[r]);
                        }
                    },
                    Ba: function(e, t) {
                        if (e.length) {
                            for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t; ) e.splice(0, 1);
                            for (;1 < e.length && e[e.length - 1].parentNode !== t; ) e.length--;
                            if (1 < e.length) {
                                var n = e[0], a = e[e.length - 1];
                                for (e.length = 0; n !== a; ) e.push(n), n = n.nextSibling;
                                e.push(a);
                            }
                        }
                        return e;
                    },
                    wc: function(e, t) {
                        7 > v ? e.setAttribute("selected", t) : e.selected = t;
                    },
                    cb: function(t) {
                        return null === t || t === e ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                    },
                    sd: function(e, t) {
                        return e = e || "", !(t.length > e.length) && e.substring(0, t.length) === t;
                    },
                    Rc: function(e, t) {
                        if (e === t) return !0;
                        if (11 === e.nodeType) return !1;
                        if (t.contains) return t.contains(3 === e.nodeType ? e.parentNode : e);
                        if (t.compareDocumentPosition) return 16 == (16 & t.compareDocumentPosition(e));
                        for (;e && e != t; ) e = e.parentNode;
                        return !!e;
                    },
                    qb: function(e) {
                        return h.a.Rc(e, e.ownerDocument.documentElement);
                    },
                    Tb: function(e) {
                        return !!h.a.Vb(e, h.a.qb);
                    },
                    A: function(e) {
                        return e && e.tagName && e.tagName.toLowerCase();
                    },
                    Zb: function(e) {
                        return h.onError ? function() {
                            try {
                                return e.apply(this, arguments);
                            } catch (e) {
                                throw h.onError && h.onError(e), e;
                            }
                        } : e;
                    },
                    setTimeout: function(e, t) {
                        return setTimeout(h.a.Zb(e), t);
                    },
                    dc: function(e) {
                        setTimeout(function() {
                            throw h.onError && h.onError(e), e;
                        }, 0);
                    },
                    q: function(e, t, n) {
                        var a = h.a.Zb(n);
                        if (n = v && m[t], h.options.useOnlyNativeEvents || n || !i) if (n || "function" != typeof e.addEventListener) {
                            if ("undefined" == typeof e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                            var r = function(t) {
                                a.call(e, t);
                            }, o = "on" + t;
                            e.attachEvent(o, r), h.a.G.qa(e, function() {
                                e.detachEvent(o, r);
                            });
                        } else e.addEventListener(t, a, !1); else i(e).bind(t, a);
                    },
                    Fa: function(e, a) {
                        if (!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var r;
                        if ("input" === h.a.A(e) && e.type && "click" == a.toLowerCase() ? (r = e.type,
                        r = "checkbox" == r || "radio" == r) : r = !1, h.options.useOnlyNativeEvents || !i || r) if ("function" == typeof n.createEvent) {
                            if ("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                            r = n.createEvent(p[a] || "HTMLEvents"), r.initEvent(a, !0, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e),
                            e.dispatchEvent(r);
                        } else if (r && e.click) e.click(); else {
                            if ("undefined" == typeof e.fireEvent) throw Error("Browser doesn't support triggering events");
                            e.fireEvent("on" + a);
                        } else i(e).trigger(a);
                    },
                    c: function(e) {
                        return h.I(e) ? e() : e;
                    },
                    Bb: function(e) {
                        return h.I(e) ? e.p() : e;
                    },
                    fb: function(e, t, n) {
                        var a;
                        t && ("object" == typeof e.classList ? (a = e.classList[n ? "add" : "remove"], h.a.r(t.match(b), function(t) {
                            a.call(e.classList, t);
                        })) : "string" == typeof e.className.baseVal ? c(e.className, "baseVal", t, n) : c(e, "className", t, n));
                    },
                    bb: function(t, n) {
                        var a = h.a.c(n);
                        null !== a && a !== e || (a = "");
                        var i = h.f.firstChild(t);
                        !i || 3 != i.nodeType || h.f.nextSibling(i) ? h.f.fa(t, [ t.ownerDocument.createTextNode(a) ]) : i.data = a,
                        h.a.Wc(t);
                    },
                    vc: function(e, t) {
                        if (e.name = t, 7 >= v) try {
                            e.mergeAttributes(n.createElement("<input name='" + e.name + "'/>"), !1);
                        } catch (e) {}
                    },
                    Wc: function(e) {
                        9 <= v && (e = 1 == e.nodeType ? e : e.parentNode, e.style && (e.style.zoom = e.style.zoom));
                    },
                    Sc: function(e) {
                        if (v) {
                            var t = e.style.width;
                            e.style.width = 0, e.style.width = t;
                        }
                    },
                    nd: function(e, t) {
                        e = h.a.c(e), t = h.a.c(t);
                        for (var n = [], a = e; a <= t; a++) n.push(a);
                        return n;
                    },
                    W: function(e) {
                        for (var t = [], n = 0, a = e.length; n < a; n++) t.push(e[n]);
                        return t;
                    },
                    bc: function(e) {
                        return u ? Symbol(e) : e;
                    },
                    xd: 6 === v,
                    yd: 7 === v,
                    C: v,
                    ic: function(e, t) {
                        for (var n = h.a.W(e.getElementsByTagName("input")).concat(h.a.W(e.getElementsByTagName("textarea"))), a = "string" == typeof t ? function(e) {
                            return e.name === t;
                        } : function(e) {
                            return t.test(e.name);
                        }, i = [], r = n.length - 1; 0 <= r; r--) a(n[r]) && i.push(n[r]);
                        return i;
                    },
                    kd: function(e) {
                        return "string" == typeof e && (e = h.a.cb(e)) ? r && r.parse ? r.parse(e) : new Function("return " + e)() : null;
                    },
                    Gb: function(e, t, n) {
                        if (!r || !r.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return r.stringify(h.a.c(e), t, n);
                    },
                    ld: function(e, t, a) {
                        a = a || {};
                        var i = a.params || {}, r = a.includeFields || this.gc, s = e;
                        if ("object" == typeof e && "form" === h.a.A(e)) for (var s = e.action, l = r.length - 1; 0 <= l; l--) for (var c = h.a.ic(e, r[l]), d = c.length - 1; 0 <= d; d--) i[c[d].name] = c[d].value;
                        t = h.a.c(t);
                        var u = n.createElement("form");
                        u.style.display = "none", u.action = s, u.method = "post";
                        for (var f in t) e = n.createElement("input"), e.type = "hidden", e.name = f, e.value = h.a.Gb(h.a.c(t[f])),
                        u.appendChild(e);
                        o(i, function(e, t) {
                            var a = n.createElement("input");
                            a.type = "hidden", a.name = e, a.value = t, u.appendChild(a);
                        }), n.body.appendChild(u), a.submitter ? a.submitter(u) : u.submit(), setTimeout(function() {
                            u.parentNode.removeChild(u);
                        }, 0);
                    }
                };
            }(), h.b("utils", h.a), h.b("utils.arrayForEach", h.a.r), h.b("utils.arrayFirst", h.a.Vb),
            h.b("utils.arrayFilter", h.a.Ma), h.b("utils.arrayGetDistinctValues", h.a.Wb), h.b("utils.arrayIndexOf", h.a.o),
            h.b("utils.arrayMap", h.a.ib), h.b("utils.arrayPushAll", h.a.ta), h.b("utils.arrayRemoveItem", h.a.Na),
            h.b("utils.extend", h.a.extend), h.b("utils.fieldsIncludedWithJsonPost", h.a.gc),
            h.b("utils.getFormFields", h.a.ic), h.b("utils.peekObservable", h.a.Bb), h.b("utils.postJson", h.a.ld),
            h.b("utils.parseJson", h.a.kd), h.b("utils.registerEventHandler", h.a.q), h.b("utils.stringifyJson", h.a.Gb),
            h.b("utils.range", h.a.nd), h.b("utils.toggleDomNodeCssClass", h.a.fb), h.b("utils.triggerEvent", h.a.Fa),
            h.b("utils.unwrapObservable", h.a.c), h.b("utils.objectForEach", h.a.D), h.b("utils.addOrRemoveItem", h.a.ra),
            h.b("utils.setTextContent", h.a.bb), h.b("unwrap", h.a.c), Function.prototype.bind || (Function.prototype.bind = function(e) {
                var t = this;
                if (1 === arguments.length) return function() {
                    return t.apply(e, arguments);
                };
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var a = n.slice(0);
                    return a.push.apply(a, arguments), t.apply(e, a);
                };
            }), h.a.e = new function() {
                function t(t, r) {
                    var o = t[a];
                    if (!o || "null" === o || !i[o]) {
                        if (!r) return e;
                        o = t[a] = "ko" + n++, i[o] = {};
                    }
                    return i[o];
                }
                var n = 0, a = "__ko__" + new Date().getTime(), i = {};
                return {
                    get: function(n, a) {
                        var i = t(n, !1);
                        return i === e ? e : i[a];
                    },
                    set: function(n, a, i) {
                        i === e && t(n, !1) === e || (t(n, !0)[a] = i);
                    },
                    clear: function(e) {
                        var t = e[a];
                        return !!t && (delete i[t], e[a] = null, !0);
                    },
                    J: function() {
                        return n++ + a;
                    }
                };
            }(), h.b("utils.domData", h.a.e), h.b("utils.domData.clear", h.a.e.clear), h.a.G = new function() {
                function t(t, n) {
                    var i = h.a.e.get(t, a);
                    return i === e && n && (i = [], h.a.e.set(t, a, i)), i;
                }
                function n(e) {
                    var a = t(e, !1);
                    if (a) for (var a = a.slice(0), i = 0; i < a.length; i++) a[i](e);
                    if (h.a.e.clear(e), h.a.G.cleanExternalData(e), o[e.nodeType]) for (a = e.firstChild; e = a; ) a = e.nextSibling,
                    8 === e.nodeType && n(e);
                }
                var a = h.a.e.J(), r = {
                    1: !0,
                    8: !0,
                    9: !0
                }, o = {
                    1: !0,
                    9: !0
                };
                return {
                    qa: function(e, n) {
                        if ("function" != typeof n) throw Error("Callback must be a function");
                        t(e, !0).push(n);
                    },
                    tc: function(n, i) {
                        var r = t(n, !1);
                        r && (h.a.Na(r, i), 0 == r.length && h.a.e.set(n, a, e));
                    },
                    ba: function(e) {
                        if (r[e.nodeType] && (n(e), o[e.nodeType])) {
                            var t = [];
                            h.a.ta(t, e.getElementsByTagName("*"));
                            for (var a = 0, i = t.length; a < i; a++) n(t[a]);
                        }
                        return e;
                    },
                    removeNode: function(e) {
                        h.ba(e), e.parentNode && e.parentNode.removeChild(e);
                    },
                    cleanExternalData: function(e) {
                        i && "function" == typeof i.cleanData && i.cleanData([ e ]);
                    }
                };
            }(), h.ba = h.a.G.ba, h.removeNode = h.a.G.removeNode, h.b("cleanNode", h.ba), h.b("removeNode", h.removeNode),
            h.b("utils.domNodeDisposal", h.a.G), h.b("utils.domNodeDisposal.addDisposeCallback", h.a.G.qa),
            h.b("utils.domNodeDisposal.removeDisposeCallback", h.a.G.tc), function() {
                var a = [ 0, "", "" ], r = [ 1, "<table>", "</table>" ], o = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ], s = [ 1, "<select multiple='multiple'>", "</select>" ], l = {
                    thead: r,
                    tbody: r,
                    tfoot: r,
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: o,
                    th: o,
                    option: s,
                    optgroup: s
                }, c = 8 >= h.a.C;
                h.a.na = function(e, r) {
                    var o;
                    if (i) {
                        if (i.parseHTML) o = i.parseHTML(e, r) || []; else if ((o = i.clean([ e ], r)) && o[0]) {
                            for (var s = o[0]; s.parentNode && 11 !== s.parentNode.nodeType; ) s = s.parentNode;
                            s.parentNode && s.parentNode.removeChild(s);
                        }
                    } else {
                        (o = r) || (o = n);
                        var d, s = o.parentWindow || o.defaultView || t, u = h.a.cb(e).toLowerCase(), f = o.createElement("div");
                        for (d = (u = u.match(/^<([a-z]+)[ >]/)) && l[u[1]] || a, u = d[0], d = "ignored<div>" + d[1] + e + d[2] + "</div>",
                        "function" == typeof s.innerShiv ? f.appendChild(s.innerShiv(d)) : (c && o.appendChild(f),
                        f.innerHTML = d, c && f.parentNode.removeChild(f)); u--; ) f = f.lastChild;
                        o = h.a.W(f.lastChild.childNodes);
                    }
                    return o;
                }, h.a.Eb = function(t, n) {
                    if (h.a.rb(t), n = h.a.c(n), null !== n && n !== e) if ("string" != typeof n && (n = n.toString()),
                    i) i(t).html(n); else for (var a = h.a.na(n, t.ownerDocument), r = 0; r < a.length; r++) t.appendChild(a[r]);
                };
            }(), h.b("utils.parseHtmlFragment", h.a.na), h.b("utils.setHtml", h.a.Eb), h.N = function() {
                function t(e, n) {
                    if (e) if (8 == e.nodeType) {
                        var a = h.N.pc(e.nodeValue);
                        null != a && n.push({
                            Qc: e,
                            hd: a
                        });
                    } else if (1 == e.nodeType) for (var a = 0, i = e.childNodes, r = i.length; a < r; a++) t(i[a], n);
                }
                var n = {};
                return {
                    yb: function(e) {
                        if ("function" != typeof e) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var t = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        return n[t] = e, "\x3c!--[ko_memo:" + t + "]--\x3e";
                    },
                    Bc: function(t, a) {
                        var i = n[t];
                        if (i === e) throw Error("Couldn't find any memo with ID " + t + ". Perhaps it's already been unmemoized.");
                        try {
                            return i.apply(null, a || []), !0;
                        } finally {
                            delete n[t];
                        }
                    },
                    Cc: function(e, n) {
                        var a = [];
                        t(e, a);
                        for (var i = 0, r = a.length; i < r; i++) {
                            var o = a[i].Qc, s = [ o ];
                            n && h.a.ta(s, n), h.N.Bc(a[i].hd, s), o.nodeValue = "", o.parentNode && o.parentNode.removeChild(o);
                        }
                    },
                    pc: function(e) {
                        return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
                    }
                };
            }(), h.b("memoization", h.N), h.b("memoization.memoize", h.N.yb), h.b("memoization.unmemoize", h.N.Bc),
            h.b("memoization.parseMemoText", h.N.pc), h.b("memoization.unmemoizeDomNodeAndDescendants", h.N.Cc),
            h.Z = function() {
                function e() {
                    if (r) for (var e, t = r, n = 0; s < r; ) if (e = i[s++]) {
                        if (s > t) {
                            if (5e3 <= ++n) {
                                s = r, h.a.dc(Error("'Too much recursion' after processing " + n + " task groups."));
                                break;
                            }
                            t = r;
                        }
                        try {
                            e();
                        } catch (e) {
                            h.a.dc(e);
                        }
                    }
                }
                function a() {
                    e(), s = r = i.length = 0;
                }
                var i = [], r = 0, o = 1, s = 0;
                return {
                    scheduler: t.MutationObserver ? function(e) {
                        var t = n.createElement("div");
                        return new MutationObserver(e).observe(t, {
                            attributes: !0
                        }), function() {
                            t.classList.toggle("foo");
                        };
                    }(a) : n && "onreadystatechange" in n.createElement("script") ? function(e) {
                        var t = n.createElement("script");
                        t.onreadystatechange = function() {
                            t.onreadystatechange = null, n.documentElement.removeChild(t), t = null, e();
                        }, n.documentElement.appendChild(t);
                    } : function(e) {
                        setTimeout(e, 0);
                    },
                    Za: function(e) {
                        return r || h.Z.scheduler(a), i[r++] = e, o++;
                    },
                    cancel: function(e) {
                        e -= o - r, e >= s && e < r && (i[e] = null);
                    },
                    resetForTesting: function() {
                        var e = r - s;
                        return s = r = i.length = 0, e;
                    },
                    rd: e
                };
            }(), h.b("tasks", h.Z), h.b("tasks.schedule", h.Z.Za), h.b("tasks.runEarly", h.Z.rd),
            h.Aa = {
                throttle: function(e, t) {
                    e.throttleEvaluation = t;
                    var n = null;
                    return h.B({
                        read: e,
                        write: function(a) {
                            clearTimeout(n), n = h.a.setTimeout(function() {
                                e(a);
                            }, t);
                        }
                    });
                },
                rateLimit: function(e, t) {
                    var n, a, i;
                    "number" == typeof t ? n = t : (n = t.timeout, a = t.method), e.gb = !1, i = "notifyWhenChangesStop" == a ? d : c,
                    e.Wa(function(e) {
                        return i(e, n);
                    });
                },
                deferred: function(t, n) {
                    if (!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                    t.gb || (t.gb = !0, t.Wa(function(n) {
                        var a, i = !1;
                        return function() {
                            if (!i) {
                                h.Z.cancel(a), a = h.Z.Za(n);
                                try {
                                    i = !0, t.notifySubscribers(e, "dirty");
                                } finally {
                                    i = !1;
                                }
                            }
                        };
                    }));
                },
                notify: function(e, t) {
                    e.equalityComparer = "always" == t ? null : l;
                }
            };
            var v = {
                undefined: 1,
                boolean: 1,
                number: 1,
                string: 1
            };
            h.b("extenders", h.Aa), h.zc = function(e, t, n) {
                this.$ = e, this.jb = t, this.Pc = n, this.T = !1, h.H(this, "dispose", this.k);
            }, h.zc.prototype.k = function() {
                this.T = !0, this.Pc();
            }, h.K = function() {
                h.a.ab(this, g), g.ub(this);
            };
            var b = "change", g = {
                ub: function(e) {
                    e.F = {
                        change: []
                    }, e.Qb = 1;
                },
                Y: function(e, t, n) {
                    var a = this;
                    n = n || b;
                    var i = new h.zc(a, t ? e.bind(t) : e, function() {
                        h.a.Na(a.F[n], i), a.Ka && a.Ka(n);
                    });
                    return a.ua && a.ua(n), a.F[n] || (a.F[n] = []), a.F[n].push(i), i;
                },
                notifySubscribers: function(e, t) {
                    if (t = t || b, t === b && this.Kb(), this.Ra(t)) {
                        var n = t === b && this.Fc || this.F[t].slice(0);
                        try {
                            h.l.Xb();
                            for (var a, i = 0; a = n[i]; ++i) a.T || a.jb(e);
                        } finally {
                            h.l.end();
                        }
                    }
                },
                Pa: function() {
                    return this.Qb;
                },
                Zc: function(e) {
                    return this.Pa() !== e;
                },
                Kb: function() {
                    ++this.Qb;
                },
                Wa: function(e) {
                    var t, n, a, i, r = this, o = h.I(r);
                    r.Ja || (r.Ja = r.notifySubscribers, r.notifySubscribers = u);
                    var s = e(function() {
                        r.Ha = !1, o && i === r && (i = r.Mb ? r.Mb() : r());
                        var e = n || r.Ua(a, i);
                        n = t = !1, e && r.Ja(a = i);
                    });
                    r.Pb = function(e) {
                        r.Fc = r.F[b].slice(0), r.Ha = t = !0, i = e, s();
                    }, r.Ob = function(e) {
                        t || (a = e, r.Ja(e, "beforeChange"));
                    }, r.Hc = function() {
                        r.Ua(a, r.p(!0)) && (n = !0);
                    };
                },
                Ra: function(e) {
                    return this.F[e] && this.F[e].length;
                },
                Xc: function(e) {
                    if (e) return this.F[e] && this.F[e].length || 0;
                    var t = 0;
                    return h.a.D(this.F, function(e, n) {
                        "dirty" !== e && (t += n.length);
                    }), t;
                },
                Ua: function(e, t) {
                    return !this.equalityComparer || !this.equalityComparer(e, t);
                },
                extend: function(e) {
                    var t = this;
                    return e && h.a.D(e, function(e, n) {
                        var a = h.Aa[e];
                        "function" == typeof a && (t = a(t, n) || t);
                    }), t;
                }
            };
            h.H(g, "subscribe", g.Y), h.H(g, "extend", g.extend), h.H(g, "getSubscriptionsCount", g.Xc),
            h.a.la && h.a.$a(g, Function.prototype), h.K.fn = g, h.lc = function(e) {
                return null != e && "function" == typeof e.Y && "function" == typeof e.notifySubscribers;
            }, h.b("subscribable", h.K), h.b("isSubscribable", h.lc), h.xa = h.l = function() {
                function e(e) {
                    a.push(n), n = e;
                }
                function t() {
                    n = a.pop();
                }
                var n, a = [], i = 0;
                return {
                    Xb: e,
                    end: t,
                    sc: function(e) {
                        if (n) {
                            if (!h.lc(e)) throw Error("Only subscribable things can act as dependencies");
                            n.jb.call(n.Lc, e, e.Gc || (e.Gc = ++i));
                        }
                    },
                    w: function(n, a, i) {
                        try {
                            return e(), n.apply(a, i || []);
                        } finally {
                            t();
                        }
                    },
                    Ca: function() {
                        if (n) return n.m.Ca();
                    },
                    Va: function() {
                        if (n) return n.Va;
                    }
                };
            }(), h.b("computedContext", h.xa), h.b("computedContext.getDependenciesCount", h.xa.Ca),
            h.b("computedContext.isInitial", h.xa.Va), h.b("ignoreDependencies", h.wd = h.l.w);
            var y = h.a.bc("_latestValue");
            h.O = function(e) {
                function t() {
                    return 0 < arguments.length ? (t.Ua(t[y], arguments[0]) && (t.ia(), t[y] = arguments[0],
                    t.ha()), this) : (h.l.sc(t), t[y]);
                }
                return t[y] = e, h.a.la || h.a.extend(t, h.K.fn), h.K.fn.ub(t), h.a.ab(t, x), h.options.deferUpdates && h.Aa.deferred(t, !0),
                t;
            };
            var x = {
                equalityComparer: l,
                p: function() {
                    return this[y];
                },
                ha: function() {
                    this.notifySubscribers(this[y]);
                },
                ia: function() {
                    this.notifySubscribers(this[y], "beforeChange");
                }
            };
            h.a.la && h.a.$a(x, h.K.fn);
            var w = h.O.md = "__ko_proto__";
            x[w] = h.O, h.Qa = function(t, n) {
                return null !== t && t !== e && t[w] !== e && (t[w] === n || h.Qa(t[w], n));
            }, h.I = function(e) {
                return h.Qa(e, h.O);
            }, h.Da = function(e) {
                return !!("function" == typeof e && e[w] === h.O || "function" == typeof e && e[w] === h.B && e.$c);
            }, h.b("observable", h.O), h.b("isObservable", h.I), h.b("isWriteableObservable", h.Da),
            h.b("isWritableObservable", h.Da), h.b("observable.fn", x), h.H(x, "peek", x.p),
            h.H(x, "valueHasMutated", x.ha), h.H(x, "valueWillMutate", x.ia), h.ma = function(e) {
                if (e = e || [], "object" != typeof e || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                return e = h.O(e), h.a.ab(e, h.ma.fn), e.extend({
                    trackArrayChanges: !0
                });
            }, h.ma.fn = {
                remove: function(e) {
                    for (var t = this.p(), n = [], a = "function" != typeof e || h.I(e) ? function(t) {
                        return t === e;
                    } : e, i = 0; i < t.length; i++) {
                        var r = t[i];
                        a(r) && (0 === n.length && this.ia(), n.push(r), t.splice(i, 1), i--);
                    }
                    return n.length && this.ha(), n;
                },
                removeAll: function(t) {
                    if (t === e) {
                        var n = this.p(), a = n.slice(0);
                        return this.ia(), n.splice(0, n.length), this.ha(), a;
                    }
                    return t ? this.remove(function(e) {
                        return 0 <= h.a.o(t, e);
                    }) : [];
                },
                destroy: function(e) {
                    var t = this.p(), n = "function" != typeof e || h.I(e) ? function(t) {
                        return t === e;
                    } : e;
                    this.ia();
                    for (var a = t.length - 1; 0 <= a; a--) n(t[a]) && (t[a]._destroy = !0);
                    this.ha();
                },
                destroyAll: function(t) {
                    return t === e ? this.destroy(function() {
                        return !0;
                    }) : t ? this.destroy(function(e) {
                        return 0 <= h.a.o(t, e);
                    }) : [];
                },
                indexOf: function(e) {
                    var t = this();
                    return h.a.o(t, e);
                },
                replace: function(e, t) {
                    var n = this.indexOf(e);
                    0 <= n && (this.ia(), this.p()[n] = t, this.ha());
                }
            }, h.a.la && h.a.$a(h.ma.fn, h.O.fn), h.a.r("pop push reverse shift sort splice unshift".split(" "), function(e) {
                h.ma.fn[e] = function() {
                    var t = this.p();
                    this.ia(), this.Yb(t, e, arguments);
                    var n = t[e].apply(t, arguments);
                    return this.ha(), n === t ? this : n;
                };
            }), h.a.r([ "slice" ], function(e) {
                h.ma.fn[e] = function() {
                    var t = this();
                    return t[e].apply(t, arguments);
                };
            }), h.b("observableArray", h.ma), h.Aa.trackArrayChanges = function(t, n) {
                function a() {
                    if (!o) {
                        o = !0, r = t.notifySubscribers, t.notifySubscribers = function(e, t) {
                            return t && t !== b || ++l, r.apply(this, arguments);
                        };
                        var e = [].concat(t.p() || []);
                        s = null, i = t.Y(function(n) {
                            if (n = [].concat(n || []), t.Ra("arrayChange")) {
                                var a;
                                (!s || 1 < l) && (s = h.a.lb(e, n, t.kb)), a = s;
                            }
                            e = n, s = null, l = 0, a && a.length && t.notifySubscribers(a, "arrayChange");
                        });
                    }
                }
                if (t.kb = {}, n && "object" == typeof n && h.a.extend(t.kb, n), t.kb.sparse = !0,
                !t.Yb) {
                    var i, r, o = !1, s = null, l = 0, c = t.ua, d = t.Ka;
                    t.ua = function(e) {
                        c && c.call(t, e), "arrayChange" === e && a();
                    }, t.Ka = function(n) {
                        d && d.call(t, n), "arrayChange" !== n || t.Ra("arrayChange") || (r && (t.notifySubscribers = r,
                        r = e), i.k(), o = !1);
                    }, t.Yb = function(e, t, n) {
                        function a(e, t, n) {
                            return i[i.length] = {
                                status: e,
                                value: t,
                                index: n
                            };
                        }
                        if (o && !l) {
                            var i = [], r = e.length, c = n.length, d = 0;
                            switch (t) {
                              case "push":
                                d = r;

                              case "unshift":
                                for (t = 0; t < c; t++) a("added", n[t], d + t);
                                break;

                              case "pop":
                                d = r - 1;

                              case "shift":
                                r && a("deleted", e[d], d);
                                break;

                              case "splice":
                                t = Math.min(Math.max(0, 0 > n[0] ? r + n[0] : n[0]), r);
                                for (var r = 1 === c ? r : Math.min(t + (n[1] || 0), r), c = t + c - 2, d = Math.max(r, c), u = [], f = [], p = 2; t < d; ++t,
                                ++p) t < r && f.push(a("deleted", e[t], t)), t < c && u.push(a("added", n[p], t));
                                h.a.hc(f, u);
                                break;

                              default:
                                return;
                            }
                            s = i;
                        }
                    };
                }
            };
            var _ = h.a.bc("_state");
            h.m = h.B = function(t, n, a) {
                function i() {
                    if (0 < arguments.length) {
                        if ("function" != typeof r) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return r.apply(o.sb, arguments), this;
                    }
                    return h.l.sc(i), (o.V || o.t && i.Sa()) && i.U(), o.M;
                }
                if ("object" == typeof t ? a = t : (a = a || {}, t && (a.read = t)), "function" != typeof a.read) throw Error("Pass a function that returns the value of the ko.computed");
                var r = a.write, o = {
                    M: e,
                    da: !0,
                    V: !0,
                    Ta: !1,
                    Hb: !1,
                    T: !1,
                    Ya: !1,
                    t: !1,
                    od: a.read,
                    sb: n || a.owner,
                    i: a.disposeWhenNodeIsRemoved || a.i || null,
                    ya: a.disposeWhen || a.ya,
                    pb: null,
                    s: {},
                    L: 0,
                    fc: null
                };
                return i[_] = o, i.$c = "function" == typeof r, h.a.la || h.a.extend(i, h.K.fn),
                h.K.fn.ub(i), h.a.ab(i, k), a.pure ? (o.Ya = !0, o.t = !0, h.a.extend(i, E)) : a.deferEvaluation && h.a.extend(i, T),
                h.options.deferUpdates && h.Aa.deferred(i, !0), o.i && (o.Hb = !0, o.i.nodeType || (o.i = null)),
                o.t || a.deferEvaluation || i.U(), o.i && i.ca() && h.a.G.qa(o.i, o.pb = function() {
                    i.k();
                }), i;
            };
            var k = {
                equalityComparer: l,
                Ca: function() {
                    return this[_].L;
                },
                Sb: function(e, t, n) {
                    if (this[_].Ya && t === this) throw Error("A 'pure' computed must not be called recursively");
                    this[_].s[e] = n, n.Ia = this[_].L++, n.pa = t.Pa();
                },
                Sa: function() {
                    var e, t, n = this[_].s;
                    for (e in n) if (n.hasOwnProperty(e) && (t = n[e], this.oa && t.$.Ha || t.$.Zc(t.pa))) return !0;
                },
                gd: function() {
                    this.oa && !this[_].Ta && this.oa(!1);
                },
                ca: function() {
                    var e = this[_];
                    return e.V || 0 < e.L;
                },
                qd: function() {
                    this.Ha ? this[_].V && (this[_].da = !0) : this.ec();
                },
                yc: function(e) {
                    if (e.gb && !this[_].i) {
                        var t = e.Y(this.gd, this, "dirty"), n = e.Y(this.qd, this);
                        return {
                            $: e,
                            k: function() {
                                t.k(), n.k();
                            }
                        };
                    }
                    return e.Y(this.ec, this);
                },
                ec: function() {
                    var e = this, t = e.throttleEvaluation;
                    t && 0 <= t ? (clearTimeout(this[_].fc), this[_].fc = h.a.setTimeout(function() {
                        e.U(!0);
                    }, t)) : e.oa ? e.oa(!0) : e.U(!0);
                },
                U: function(e) {
                    var t = this[_], n = t.ya, a = !1;
                    if (!t.Ta && !t.T) {
                        if (t.i && !h.a.qb(t.i) || n && n()) {
                            if (!t.Hb) return void this.k();
                        } else t.Hb = !1;
                        t.Ta = !0;
                        try {
                            a = this.Vc(e);
                        } finally {
                            t.Ta = !1;
                        }
                        return t.L || this.k(), a;
                    }
                },
                Vc: function(t) {
                    var n = this[_], a = !1, i = n.Ya ? e : !n.L, r = {
                        Mc: this,
                        Oa: n.s,
                        ob: n.L
                    };
                    return h.l.Xb({
                        Lc: r,
                        jb: p,
                        m: this,
                        Va: i
                    }), n.s = {}, n.L = 0, r = this.Uc(n, r), this.Ua(n.M, r) && (n.t || this.notifySubscribers(n.M, "beforeChange"),
                    n.M = r, n.t ? this.Kb() : t && this.notifySubscribers(n.M), a = !0), i && this.notifySubscribers(n.M, "awake"),
                    a;
                },
                Uc: function(e, t) {
                    try {
                        var n = e.od;
                        return e.sb ? n.call(e.sb) : n();
                    } finally {
                        h.l.end(), t.ob && !e.t && h.a.D(t.Oa, f), e.da = e.V = !1;
                    }
                },
                p: function(e) {
                    var t = this[_];
                    return (t.V && (e || !t.L) || t.t && this.Sa()) && this.U(), t.M;
                },
                Wa: function(e) {
                    h.K.fn.Wa.call(this, e), this.Mb = function() {
                        return this[_].da ? this.U() : this[_].V = !1, this[_].M;
                    }, this.oa = function(e) {
                        this.Ob(this[_].M), this[_].V = !0, e && (this[_].da = !0), this.Pb(this);
                    };
                },
                k: function() {
                    var e = this[_];
                    !e.t && e.s && h.a.D(e.s, function(e, t) {
                        t.k && t.k();
                    }), e.i && e.pb && h.a.G.tc(e.i, e.pb), e.s = null, e.L = 0, e.T = !0, e.da = !1,
                    e.V = !1, e.t = !1, e.i = null;
                }
            }, E = {
                ua: function(e) {
                    var t = this, n = t[_];
                    if (!n.T && n.t && "change" == e) {
                        if (n.t = !1, n.da || t.Sa()) n.s = null, n.L = 0, t.U() && t.Kb(); else {
                            var a = [];
                            h.a.D(n.s, function(e, t) {
                                a[t.Ia] = e;
                            }), h.a.r(a, function(e, a) {
                                var i = n.s[e], r = t.yc(i.$);
                                r.Ia = a, r.pa = i.pa, n.s[e] = r;
                            });
                        }
                        n.T || t.notifySubscribers(n.M, "awake");
                    }
                },
                Ka: function(t) {
                    var n = this[_];
                    n.T || "change" != t || this.Ra("change") || (h.a.D(n.s, function(e, t) {
                        t.k && (n.s[e] = {
                            $: t.$,
                            Ia: t.Ia,
                            pa: t.pa
                        }, t.k());
                    }), n.t = !0, this.notifySubscribers(e, "asleep"));
                },
                Pa: function() {
                    var e = this[_];
                    return e.t && (e.da || this.Sa()) && this.U(), h.K.fn.Pa.call(this);
                }
            }, T = {
                ua: function(e) {
                    "change" != e && "beforeChange" != e || this.p();
                }
            };
            h.a.la && h.a.$a(k, h.K.fn);
            var S = h.O.md;
            h.m[S] = h.O, k[S] = h.m, h.bd = function(e) {
                return h.Qa(e, h.m);
            }, h.cd = function(e) {
                return h.Qa(e, h.m) && e[_] && e[_].Ya;
            }, h.b("computed", h.m), h.b("dependentObservable", h.m), h.b("isComputed", h.bd),
            h.b("isPureComputed", h.cd), h.b("computed.fn", k), h.H(k, "peek", k.p), h.H(k, "dispose", k.k),
            h.H(k, "isActive", k.ca), h.H(k, "getDependenciesCount", k.Ca), h.rc = function(e, t) {
                return "function" == typeof e ? h.m(e, t, {
                    pure: !0
                }) : (e = h.a.extend({}, e), e.pure = !0, h.m(e, t));
            }, h.b("pureComputed", h.rc), function() {
                function t(i, r, o) {
                    if (o = o || new a(), i = r(i), "object" != typeof i || null === i || i === e || i instanceof RegExp || i instanceof Date || i instanceof String || i instanceof Number || i instanceof Boolean) return i;
                    var s = i instanceof Array ? [] : {};
                    return o.save(i, s), n(i, function(n) {
                        var a = r(i[n]);
                        switch (typeof a) {
                          case "boolean":
                          case "number":
                          case "string":
                          case "function":
                            s[n] = a;
                            break;

                          case "object":
                          case "undefined":
                            var l = o.get(a);
                            s[n] = l !== e ? l : t(a, r, o);
                        }
                    }), s;
                }
                function n(e, t) {
                    if (e instanceof Array) {
                        for (var n = 0; n < e.length; n++) t(n);
                        "function" == typeof e.toJSON && t("toJSON");
                    } else for (n in e) t(n);
                }
                function a() {
                    this.keys = [], this.Lb = [];
                }
                h.Ac = function(e) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return t(e, function(e) {
                        for (var t = 0; h.I(e) && 10 > t; t++) e = e();
                        return e;
                    });
                }, h.toJSON = function(e, t, n) {
                    return e = h.Ac(e), h.a.Gb(e, t, n);
                }, a.prototype = {
                    save: function(e, t) {
                        var n = h.a.o(this.keys, e);
                        0 <= n ? this.Lb[n] = t : (this.keys.push(e), this.Lb.push(t));
                    },
                    get: function(t) {
                        return t = h.a.o(this.keys, t), 0 <= t ? this.Lb[t] : e;
                    }
                };
            }(), h.b("toJS", h.Ac), h.b("toJSON", h.toJSON), function() {
                h.j = {
                    u: function(t) {
                        switch (h.a.A(t)) {
                          case "option":
                            return !0 === t.__ko__hasDomDataOptionValue__ ? h.a.e.get(t, h.d.options.zb) : 7 >= h.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;

                          case "select":
                            return 0 <= t.selectedIndex ? h.j.u(t.options[t.selectedIndex]) : e;

                          default:
                            return t.value;
                        }
                    },
                    ja: function(t, n, a) {
                        switch (h.a.A(t)) {
                          case "option":
                            switch (typeof n) {
                              case "string":
                                h.a.e.set(t, h.d.options.zb, e), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__,
                                t.value = n;
                                break;

                              default:
                                h.a.e.set(t, h.d.options.zb, n), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof n ? n : "";
                            }
                            break;

                          case "select":
                            "" !== n && null !== n || (n = e);
                            for (var i, r = -1, o = 0, s = t.options.length; o < s; ++o) if (i = h.j.u(t.options[o]),
                            i == n || "" == i && n === e) {
                                r = o;
                                break;
                            }
                            (a || 0 <= r || n === e && 1 < t.size) && (t.selectedIndex = r);
                            break;

                          default:
                            null !== n && n !== e || (n = ""), t.value = n;
                        }
                    }
                };
            }(), h.b("selectExtensions", h.j), h.b("selectExtensions.readValue", h.j.u), h.b("selectExtensions.writeValue", h.j.ja),
            h.h = function() {
                function e(e) {
                    e = h.a.cb(e), 123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                    var t, n = [], o = e.match(a), s = [], l = 0;
                    if (o) {
                        o.push(",");
                        for (var c, d = 0; c = o[d]; ++d) {
                            var u = c.charCodeAt(0);
                            if (44 === u) {
                                if (0 >= l) {
                                    n.push(t && s.length ? {
                                        key: t,
                                        value: s.join("")
                                    } : {
                                        unknown: t || s.join("")
                                    }), t = l = 0, s = [];
                                    continue;
                                }
                            } else if (58 === u) {
                                if (!l && !t && 1 === s.length) {
                                    t = s.pop();
                                    continue;
                                }
                            } else 47 === u && d && 1 < c.length ? (u = o[d - 1].match(i)) && !r[u[0]] && (e = e.substr(e.indexOf(c) + 1),
                            o = e.match(a), o.push(","), d = -1, c = "/") : 40 === u || 123 === u || 91 === u ? ++l : 41 === u || 125 === u || 93 === u ? --l : t || s.length || 34 !== u && 39 !== u || (c = c.slice(1, -1));
                            s.push(c);
                        }
                    }
                    return n;
                }
                var t = [ "true", "false", "null", "undefined" ], n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, a = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), i = /[\])"'A-Za-z0-9_$]+$/, r = {
                    in: 1,
                    return: 1,
                    typeof: 1
                }, o = {};
                return {
                    va: [],
                    ga: o,
                    Ab: e,
                    Xa: function(a, i) {
                        function r(e, a) {
                            var i;
                            if (!d) {
                                var u = h.getBindingHandler(e);
                                if (u && u.preprocess && !(a = u.preprocess(a, e, r))) return;
                                (u = o[e]) && (i = a, 0 <= h.a.o(t, i) ? i = !1 : (u = i.match(n), i = null !== u && (u[1] ? "Object(" + u[1] + ")" + u[2] : i)),
                                u = i), u && l.push("'" + e + "':function(_z){" + i + "=_z}");
                            }
                            c && (a = "function(){return " + a + " }"), s.push("'" + e + "':" + a);
                        }
                        i = i || {};
                        var s = [], l = [], c = i.valueAccessors, d = i.bindingParams, u = "string" == typeof a ? e(a) : a;
                        return h.a.r(u, function(e) {
                            r(e.key || e.unknown, e.value);
                        }), l.length && r("_ko_property_writers", "{" + l.join(",") + " }"), s.join(",");
                    },
                    fd: function(e, t) {
                        for (var n = 0; n < e.length; n++) if (e[n].key == t) return !0;
                        return !1;
                    },
                    Ga: function(e, t, n, a, i) {
                        e && h.I(e) ? !h.Da(e) || i && e.p() === a || e(a) : (e = t.get("_ko_property_writers")) && e[n] && e[n](a);
                    }
                };
            }(), h.b("expressionRewriting", h.h), h.b("expressionRewriting.bindingRewriteValidators", h.h.va),
            h.b("expressionRewriting.parseObjectLiteral", h.h.Ab), h.b("expressionRewriting.preProcessBindings", h.h.Xa),
            h.b("expressionRewriting._twoWayBindings", h.h.ga), h.b("jsonExpressionRewriting", h.h),
            h.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", h.h.Xa), function() {
                function e(e) {
                    return 8 == e.nodeType && o.test(r ? e.text : e.nodeValue);
                }
                function t(e) {
                    return 8 == e.nodeType && s.test(r ? e.text : e.nodeValue);
                }
                function a(n, a) {
                    for (var i = n, r = 1, o = []; i = i.nextSibling; ) {
                        if (t(i) && (r--, 0 === r)) return o;
                        o.push(i), e(i) && r++;
                    }
                    if (!a) throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
                    return null;
                }
                function i(e, t) {
                    var n = a(e, t);
                    return n ? 0 < n.length ? n[n.length - 1].nextSibling : e.nextSibling : null;
                }
                var r = n && "\x3c!--test--\x3e" === n.createComment("test").text, o = r ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, s = r ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, l = {
                    ul: !0,
                    ol: !0
                };
                h.f = {
                    aa: {},
                    childNodes: function(t) {
                        return e(t) ? a(t) : t.childNodes;
                    },
                    za: function(t) {
                        if (e(t)) {
                            t = h.f.childNodes(t);
                            for (var n = 0, a = t.length; n < a; n++) h.removeNode(t[n]);
                        } else h.a.rb(t);
                    },
                    fa: function(t, n) {
                        if (e(t)) {
                            h.f.za(t);
                            for (var a = t.nextSibling, i = 0, r = n.length; i < r; i++) a.parentNode.insertBefore(n[i], a);
                        } else h.a.fa(t, n);
                    },
                    qc: function(t, n) {
                        e(t) ? t.parentNode.insertBefore(n, t.nextSibling) : t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
                    },
                    kc: function(t, n, a) {
                        a ? e(t) ? t.parentNode.insertBefore(n, a.nextSibling) : a.nextSibling ? t.insertBefore(n, a.nextSibling) : t.appendChild(n) : h.f.qc(t, n);
                    },
                    firstChild: function(n) {
                        return e(n) ? !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling : n.firstChild;
                    },
                    nextSibling: function(n) {
                        return e(n) && (n = i(n)), n.nextSibling && t(n.nextSibling) ? null : n.nextSibling;
                    },
                    Yc: e,
                    vd: function(e) {
                        return (e = (r ? e.text : e.nodeValue).match(o)) ? e[1] : null;
                    },
                    oc: function(n) {
                        if (l[h.a.A(n)]) {
                            var a = n.firstChild;
                            if (a) do {
                                if (1 === a.nodeType) {
                                    var r;
                                    r = a.firstChild;
                                    var o = null;
                                    if (r) do {
                                        if (o) o.push(r); else if (e(r)) {
                                            var s = i(r, !0);
                                            s ? r = s : o = [ r ];
                                        } else t(r) && (o = [ r ]);
                                    } while (r = r.nextSibling);
                                    if (r = o) for (o = a.nextSibling, s = 0; s < r.length; s++) o ? n.insertBefore(r[s], o) : n.appendChild(r[s]);
                                }
                            } while (a = a.nextSibling);
                        }
                    }
                };
            }(), h.b("virtualElements", h.f), h.b("virtualElements.allowedBindings", h.f.aa),
            h.b("virtualElements.emptyNode", h.f.za), h.b("virtualElements.insertAfter", h.f.kc),
            h.b("virtualElements.prepend", h.f.qc), h.b("virtualElements.setDomNodeChildren", h.f.fa),
            function() {
                h.S = function() {
                    this.Kc = {};
                }, h.a.extend(h.S.prototype, {
                    nodeHasBindings: function(e) {
                        switch (e.nodeType) {
                          case 1:
                            return null != e.getAttribute("data-bind") || h.g.getComponentNameForNode(e);

                          case 8:
                            return h.f.Yc(e);

                          default:
                            return !1;
                        }
                    },
                    getBindings: function(e, t) {
                        var n = this.getBindingsString(e, t), n = n ? this.parseBindingsString(n, t, e) : null;
                        return h.g.Rb(n, e, t, !1);
                    },
                    getBindingAccessors: function(e, t) {
                        var n = this.getBindingsString(e, t), n = n ? this.parseBindingsString(n, t, e, {
                            valueAccessors: !0
                        }) : null;
                        return h.g.Rb(n, e, t, !0);
                    },
                    getBindingsString: function(e) {
                        switch (e.nodeType) {
                          case 1:
                            return e.getAttribute("data-bind");

                          case 8:
                            return h.f.vd(e);

                          default:
                            return null;
                        }
                    },
                    parseBindingsString: function(e, t, n, a) {
                        try {
                            var i, r = this.Kc, o = e + (a && a.valueAccessors || "");
                            if (!(i = r[o])) {
                                var s, l = "with($context){with($data||{}){return{" + h.h.Xa(e, a) + "}}}";
                                s = new Function("$context", "$element", l), i = r[o] = s;
                            }
                            return i(t, n);
                        } catch (t) {
                            throw t.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + t.message,
                            t;
                        }
                    }
                }), h.S.instance = new h.S();
            }(), h.b("bindingProvider", h.S), function() {
                function n(e) {
                    return function() {
                        return e;
                    };
                }
                function a(e) {
                    return e();
                }
                function r(e) {
                    return h.a.Ea(h.l.w(e), function(t, n) {
                        return function() {
                            return e()[n];
                        };
                    });
                }
                function o(e, t, a) {
                    return "function" == typeof e ? r(e.bind(null, t, a)) : h.a.Ea(e, n);
                }
                function s(e, t) {
                    return r(this.getBindings.bind(this, e, t));
                }
                function l(e, t, n) {
                    var a, i = h.f.firstChild(t), r = h.S.instance, o = r.preprocessNode;
                    if (o) {
                        for (;a = i; ) i = h.f.nextSibling(a), o.call(r, a);
                        i = h.f.firstChild(t);
                    }
                    for (;a = i; ) i = h.f.nextSibling(a), c(e, a, n);
                }
                function c(e, t, n) {
                    var a = !0, i = 1 === t.nodeType;
                    i && h.f.oc(t), (i && n || h.S.instance.nodeHasBindings(t)) && (a = u(t, null, e, n).shouldBindDescendants),
                    a && !p[h.a.A(t)] && l(e, t, !i);
                }
                function d(e) {
                    var t = [], n = {}, a = [];
                    return h.a.D(e, function i(r) {
                        if (!n[r]) {
                            var o = h.getBindingHandler(r);
                            o && (o.after && (a.push(r), h.a.r(o.after, function(t) {
                                if (e[t]) {
                                    if (-1 !== h.a.o(a, t)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + a.join(", "));
                                    i(t);
                                }
                            }), a.length--), t.push({
                                key: r,
                                jc: o
                            })), n[r] = !0;
                        }
                    }), t;
                }
                function u(t, n, i, r) {
                    var o = h.a.e.get(t, m);
                    if (!n) {
                        if (o) throw Error("You cannot apply bindings multiple times to the same element.");
                        h.a.e.set(t, m, !0);
                    }
                    !o && r && h.xc(t, i);
                    var l;
                    if (n && "function" != typeof n) l = n; else {
                        var c = h.S.instance, u = c.getBindingAccessors || s, f = h.B(function() {
                            return (l = n ? n(i, t) : u.call(c, t, i)) && i.Q && i.Q(), l;
                        }, null, {
                            i: t
                        });
                        l && f.ca() || (f = null);
                    }
                    var p;
                    if (l) {
                        var v = f ? function(e) {
                            return function() {
                                return a(f()[e]);
                            };
                        } : function(e) {
                            return l[e];
                        }, b = function() {
                            return h.a.Ea(f ? f() : l, a);
                        };
                        b.get = function(e) {
                            return l[e] && a(v(e));
                        }, b.has = function(e) {
                            return e in l;
                        }, r = d(l), h.a.r(r, function(n) {
                            var a = n.jc.init, r = n.jc.update, o = n.key;
                            if (8 === t.nodeType && !h.f.aa[o]) throw Error("The binding '" + o + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof a && h.l.w(function() {
                                    var n = a(t, v(o), b, i.$data, i);
                                    if (n && n.controlsDescendantBindings) {
                                        if (p !== e) throw Error("Multiple bindings (" + p + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        p = o;
                                    }
                                }), "function" == typeof r && h.B(function() {
                                    r(t, v(o), b, i.$data, i);
                                }, null, {
                                    i: t
                                });
                            } catch (e) {
                                throw e.message = 'Unable to process binding "' + o + ": " + l[o] + '"\nMessage: ' + e.message,
                                e;
                            }
                        });
                    }
                    return {
                        shouldBindDescendants: p === e
                    };
                }
                function f(e) {
                    return e && e instanceof h.R ? e : new h.R(e);
                }
                h.d = {};
                var p = {
                    script: !0,
                    textarea: !0,
                    template: !0
                };
                h.getBindingHandler = function(e) {
                    return h.d[e];
                }, h.R = function(t, n, a, i, r) {
                    function o() {
                        var e = u ? t() : t, r = h.a.c(e);
                        return n ? (n.Q && n.Q(), h.a.extend(d, n), d.Q = c) : (d.$parents = [], d.$root = r,
                        d.ko = h), d.$rawData = e, d.$data = r, a && (d[a] = r), i && i(d, n, r), d.$data;
                    }
                    function s() {
                        return l && !h.a.Tb(l);
                    }
                    var l, c, d = this, u = "function" == typeof t && !h.I(t);
                    r && r.exportDependencies ? o() : (c = h.B(o, null, {
                        ya: s,
                        i: !0
                    }), c.ca() && (d.Q = c, c.equalityComparer = null, l = [], c.Dc = function(t) {
                        l.push(t), h.a.G.qa(t, function(t) {
                            h.a.Na(l, t), l.length || (c.k(), d.Q = c = e);
                        });
                    }));
                }, h.R.prototype.createChildContext = function(e, t, n, a) {
                    return new h.R(e, this, t, function(e, t) {
                        e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0),
                        e.$parents.unshift(e.$parent), n && n(e);
                    }, a);
                }, h.R.prototype.extend = function(e) {
                    return new h.R(this.Q || this.$data, this, null, function(t, n) {
                        t.$rawData = n.$rawData, h.a.extend(t, "function" == typeof e ? e() : e);
                    });
                }, h.R.prototype.ac = function(e, t) {
                    return this.createChildContext(e, t, null, {
                        exportDependencies: !0
                    });
                };
                var m = h.a.e.J(), v = h.a.e.J();
                h.xc = function(e, t) {
                    return 2 != arguments.length ? h.a.e.get(e, v) : (h.a.e.set(e, v, t), void (t.Q && t.Q.Dc(e)));
                }, h.La = function(e, t, n) {
                    return 1 === e.nodeType && h.f.oc(e), u(e, t, f(n), !0);
                }, h.Ic = function(e, t, n) {
                    return n = f(n), h.La(e, o(t, n, e), n);
                }, h.hb = function(e, t) {
                    1 !== t.nodeType && 8 !== t.nodeType || l(f(e), t, !0);
                }, h.Ub = function(e, n) {
                    if (!i && t.jQuery && (i = t.jQuery), n && 1 !== n.nodeType && 8 !== n.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    n = n || t.document.body, c(f(e), n, !0);
                }, h.nb = function(t) {
                    switch (t.nodeType) {
                      case 1:
                      case 8:
                        var n = h.xc(t);
                        if (n) return n;
                        if (t.parentNode) return h.nb(t.parentNode);
                    }
                    return e;
                }, h.Oc = function(t) {
                    return (t = h.nb(t)) ? t.$data : e;
                }, h.b("bindingHandlers", h.d), h.b("applyBindings", h.Ub), h.b("applyBindingsToDescendants", h.hb),
                h.b("applyBindingAccessorsToNode", h.La), h.b("applyBindingsToNode", h.Ic), h.b("contextFor", h.nb),
                h.b("dataFor", h.Oc);
            }(), function(e) {
                function t(t, a) {
                    var o, s = i.hasOwnProperty(t) ? i[t] : e;
                    s ? s.Y(a) : (s = i[t] = new h.K(), s.Y(a), n(t, function(e, n) {
                        var a = !(!n || !n.synchronous);
                        r[t] = {
                            definition: e,
                            dd: a
                        }, delete i[t], o || a ? s.notifySubscribers(e) : h.Z.Za(function() {
                            s.notifySubscribers(e);
                        });
                    }), o = !0);
                }
                function n(e, t) {
                    a("getConfig", [ e ], function(n) {
                        n ? a("loadComponent", [ e, n ], function(e) {
                            t(e, n);
                        }) : t(null, null);
                    });
                }
                function a(t, n, i, r) {
                    r || (r = h.g.loaders.slice(0));
                    var o = r.shift();
                    if (o) {
                        var s = o[t];
                        if (s) {
                            var l = !1;
                            if (s.apply(o, n.concat(function(e) {
                                l ? i(null) : null !== e ? i(e) : a(t, n, i, r);
                            })) !== e && (l = !0, !o.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else a(t, n, i, r);
                    } else i(null);
                }
                var i = {}, r = {};
                h.g = {
                    get: function(n, a) {
                        var i = r.hasOwnProperty(n) ? r[n] : e;
                        i ? i.dd ? h.l.w(function() {
                            a(i.definition);
                        }) : h.Z.Za(function() {
                            a(i.definition);
                        }) : t(n, a);
                    },
                    $b: function(e) {
                        delete r[e];
                    },
                    Nb: a
                }, h.g.loaders = [], h.b("components", h.g), h.b("components.get", h.g.get), h.b("components.clearCachedDefinition", h.g.$b);
            }(), function() {
                function e(e, t, n, a) {
                    function i() {
                        0 === --s && a(r);
                    }
                    var r = {}, s = 2, l = n.template;
                    n = n.viewModel, l ? o(t, l, function(t) {
                        h.g.Nb("loadTemplate", [ e, t ], function(e) {
                            r.template = e, i();
                        });
                    }) : i(), n ? o(t, n, function(t) {
                        h.g.Nb("loadViewModel", [ e, t ], function(e) {
                            r[d] = e, i();
                        });
                    }) : i();
                }
                function a(e, t, n) {
                    if ("function" == typeof t) n(function(e) {
                        return new t(e);
                    }); else if ("function" == typeof t[d]) n(t[d]); else if ("instance" in t) {
                        var i = t.instance;
                        n(function() {
                            return i;
                        });
                    } else "viewModel" in t ? a(e, t.viewModel, n) : e("Unknown viewModel value: " + t);
                }
                function i(e) {
                    switch (h.a.A(e)) {
                      case "script":
                        return h.a.na(e.text);

                      case "textarea":
                        return h.a.na(e.value);

                      case "template":
                        if (r(e.content)) return h.a.wa(e.content.childNodes);
                    }
                    return h.a.wa(e.childNodes);
                }
                function r(e) {
                    return t.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType;
                }
                function o(e, n, a) {
                    "string" == typeof n.require ? s || t.require ? (s || t.require)([ n.require ], a) : e("Uses require, but no AMD loader is present") : a(n);
                }
                function l(e) {
                    return function(t) {
                        throw Error("Component '" + e + "': " + t);
                    };
                }
                var c = {};
                h.g.register = function(e, t) {
                    if (!t) throw Error("Invalid configuration for " + e);
                    if (h.g.wb(e)) throw Error("Component " + e + " is already registered");
                    c[e] = t;
                }, h.g.wb = function(e) {
                    return c.hasOwnProperty(e);
                }, h.g.ud = function(e) {
                    delete c[e], h.g.$b(e);
                }, h.g.cc = {
                    getConfig: function(e, t) {
                        t(c.hasOwnProperty(e) ? c[e] : null);
                    },
                    loadComponent: function(t, n, a) {
                        var i = l(t);
                        o(i, n, function(n) {
                            e(t, i, n, a);
                        });
                    },
                    loadTemplate: function(e, a, o) {
                        if (e = l(e), "string" == typeof a) o(h.a.na(a)); else if (a instanceof Array) o(a); else if (r(a)) o(h.a.W(a.childNodes)); else if (a.element) if (a = a.element,
                        t.HTMLElement ? a instanceof HTMLElement : a && a.tagName && 1 === a.nodeType) o(i(a)); else if ("string" == typeof a) {
                            var s = n.getElementById(a);
                            s ? o(i(s)) : e("Cannot find element with ID " + a);
                        } else e("Unknown element type: " + a); else e("Unknown template value: " + a);
                    },
                    loadViewModel: function(e, t, n) {
                        a(l(e), t, n);
                    }
                };
                var d = "createViewModel";
                h.b("components.register", h.g.register), h.b("components.isRegistered", h.g.wb),
                h.b("components.unregister", h.g.ud), h.b("components.defaultLoader", h.g.cc), h.g.loaders.push(h.g.cc),
                h.g.Ec = c;
            }(), function() {
                function e(e, n) {
                    var a = e.getAttribute("params");
                    if (a) {
                        var a = t.parseBindingsString(a, n, e, {
                            valueAccessors: !0,
                            bindingParams: !0
                        }), a = h.a.Ea(a, function(t) {
                            return h.m(t, null, {
                                i: e
                            });
                        }), i = h.a.Ea(a, function(t) {
                            var n = t.p();
                            return t.ca() ? h.m({
                                read: function() {
                                    return h.a.c(t());
                                },
                                write: h.Da(n) && function(e) {
                                    t()(e);
                                },
                                i: e
                            }) : n;
                        });
                        return i.hasOwnProperty("$raw") || (i.$raw = a), i;
                    }
                    return {
                        $raw: {}
                    };
                }
                h.g.getComponentNameForNode = function(e) {
                    var t = h.a.A(e);
                    if (h.g.wb(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= h.a.C && e.tagName === t)) return t;
                }, h.g.Rb = function(t, n, a, i) {
                    if (1 === n.nodeType) {
                        var r = h.g.getComponentNameForNode(n);
                        if (r) {
                            if (t = t || {}, t.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var o = {
                                name: r,
                                params: e(n, a)
                            };
                            t.component = i ? function() {
                                return o;
                            } : o;
                        }
                    }
                    return t;
                };
                var t = new h.S();
                9 > h.a.C && (h.g.register = function(e) {
                    return function(t) {
                        return n.createElement(t), e.apply(this, arguments);
                    };
                }(h.g.register), n.createDocumentFragment = function(e) {
                    return function() {
                        var t, n = e(), a = h.g.Ec;
                        for (t in a) a.hasOwnProperty(t) && n.createElement(t);
                        return n;
                    };
                }(n.createDocumentFragment));
            }(), function(e) {
                function t(e, t, n) {
                    if (t = t.template, !t) throw Error("Component '" + e + "' has no template");
                    e = h.a.wa(t), h.f.fa(n, e);
                }
                function n(e, t, n, a) {
                    var i = e.createViewModel;
                    return i ? i.call(e, a, {
                        element: t,
                        templateNodes: n
                    }) : a;
                }
                var a = 0;
                h.d.component = {
                    init: function(i, r, o, s, l) {
                        function c() {
                            var e = d && d.dispose;
                            "function" == typeof e && e.call(d), u = d = null;
                        }
                        var d, u, f = h.a.W(h.f.childNodes(i));
                        return h.a.G.qa(i, c), h.m(function() {
                            var o, s, p = h.a.c(r());
                            if ("string" == typeof p ? o = p : (o = h.a.c(p.name), s = h.a.c(p.params)), !o) throw Error("No component name specified");
                            var m = u = ++a;
                            h.g.get(o, function(a) {
                                if (u === m) {
                                    if (c(), !a) throw Error("Unknown component '" + o + "'");
                                    t(o, a, i);
                                    var r = n(a, i, f, s);
                                    a = l.createChildContext(r, e, function(e) {
                                        e.$component = r, e.$componentTemplateNodes = f;
                                    }), d = r, h.hb(a, i);
                                }
                            });
                        }, null, {
                            i: i
                        }), {
                            controlsDescendantBindings: !0
                        };
                    }
                }, h.f.aa.component = !0;
            }();
            var C = {
                class: "className",
                for: "htmlFor"
            };
            h.d.attr = {
                update: function(t, n) {
                    var a = h.a.c(n()) || {};
                    h.a.D(a, function(n, a) {
                        a = h.a.c(a);
                        var i = !1 === a || null === a || a === e;
                        i && t.removeAttribute(n), 8 >= h.a.C && n in C ? (n = C[n], i ? t.removeAttribute(n) : t[n] = a) : i || t.setAttribute(n, a.toString()),
                        "name" === n && h.a.vc(t, i ? "" : a.toString());
                    });
                }
            }, function() {
                h.d.checked = {
                    after: [ "value", "attr" ],
                    init: function(t, n, a) {
                        function i() {
                            var e = t.checked, i = p ? o() : e;
                            if (!h.xa.Va() && (!l || e)) {
                                var r = h.l.w(n);
                                if (d) {
                                    var s = u ? r.p() : r;
                                    f !== i ? (e && (h.a.ra(s, i, !0), h.a.ra(s, f, !1)), f = i) : h.a.ra(s, i, e),
                                    u && h.Da(r) && r(s);
                                } else h.h.Ga(r, a, "checked", i, !0);
                            }
                        }
                        function r() {
                            var e = h.a.c(n());
                            t.checked = d ? 0 <= h.a.o(e, o()) : s ? e : o() === e;
                        }
                        var o = h.rc(function() {
                            return a.has("checkedValue") ? h.a.c(a.get("checkedValue")) : a.has("value") ? h.a.c(a.get("value")) : t.value;
                        }), s = "checkbox" == t.type, l = "radio" == t.type;
                        if (s || l) {
                            var c = n(), d = s && h.a.c(c) instanceof Array, u = !(d && c.push && c.splice), f = d ? o() : e, p = l || d;
                            l && !t.name && h.d.uniqueName.init(t, function() {
                                return !0;
                            }), h.m(i, null, {
                                i: t
                            }), h.a.q(t, "click", i), h.m(r, null, {
                                i: t
                            }), c = e;
                        }
                    }
                }, h.h.ga.checked = !0, h.d.checkedValue = {
                    update: function(e, t) {
                        e.value = h.a.c(t());
                    }
                };
            }(), h.d.css = {
                update: function(e, t) {
                    var n = h.a.c(t());
                    null !== n && "object" == typeof n ? h.a.D(n, function(t, n) {
                        n = h.a.c(n), h.a.fb(e, t, n);
                    }) : (n = h.a.cb(String(n || "")), h.a.fb(e, e.__ko__cssValue, !1), e.__ko__cssValue = n,
                    h.a.fb(e, n, !0));
                }
            }, h.d.enable = {
                update: function(e, t) {
                    var n = h.a.c(t());
                    n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0);
                }
            }, h.d.disable = {
                update: function(e, t) {
                    h.d.enable.update(e, function() {
                        return !h.a.c(t());
                    });
                }
            }, h.d.event = {
                init: function(e, t, n, a, i) {
                    var r = t() || {};
                    h.a.D(r, function(r) {
                        "string" == typeof r && h.a.q(e, r, function(e) {
                            var o, s = t()[r];
                            if (s) {
                                try {
                                    var l = h.a.W(arguments);
                                    a = i.$data, l.unshift(a), o = s.apply(a, l);
                                } finally {
                                    !0 !== o && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                                }
                                !1 === n.get(r + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation());
                            }
                        });
                    });
                }
            }, h.d.foreach = {
                mc: function(e) {
                    return function() {
                        var t = e(), n = h.a.Bb(t);
                        return n && "number" != typeof n.length ? (h.a.c(t), {
                            foreach: n.data,
                            as: n.as,
                            includeDestroyed: n.includeDestroyed,
                            afterAdd: n.afterAdd,
                            beforeRemove: n.beforeRemove,
                            afterRender: n.afterRender,
                            beforeMove: n.beforeMove,
                            afterMove: n.afterMove,
                            templateEngine: h.X.vb
                        }) : {
                            foreach: t,
                            templateEngine: h.X.vb
                        };
                    };
                },
                init: function(e, t) {
                    return h.d.template.init(e, h.d.foreach.mc(t));
                },
                update: function(e, t, n, a, i) {
                    return h.d.template.update(e, h.d.foreach.mc(t), n, a, i);
                }
            }, h.h.va.foreach = !1, h.f.aa.foreach = !0, h.d.hasfocus = {
                init: function(e, t, n) {
                    function a(a) {
                        e.__ko_hasfocusUpdating = !0;
                        var i = e.ownerDocument;
                        if ("activeElement" in i) {
                            var r;
                            try {
                                r = i.activeElement;
                            } catch (e) {
                                r = i.body;
                            }
                            a = r === e;
                        }
                        i = t(), h.h.Ga(i, n, "hasfocus", a, !0), e.__ko_hasfocusLastValue = a, e.__ko_hasfocusUpdating = !1;
                    }
                    var i = a.bind(null, !0), r = a.bind(null, !1);
                    h.a.q(e, "focus", i), h.a.q(e, "focusin", i), h.a.q(e, "blur", r), h.a.q(e, "focusout", r);
                },
                update: function(e, t) {
                    var n = !!h.a.c(t());
                    e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(),
                    !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), h.l.w(h.a.Fa, null, [ e, n ? "focusin" : "focusout" ]));
                }
            }, h.h.ga.hasfocus = !0, h.d.hasFocus = h.d.hasfocus, h.h.ga.hasFocus = !0, h.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(e, t) {
                    h.a.Eb(e, t());
                }
            }, m("if"), m("ifnot", !1, !0), m("with", !0, !1, function(e, t) {
                return e.ac(t);
            });
            var D = {};
            h.d.options = {
                init: function(e) {
                    if ("select" !== h.a.A(e)) throw Error("options binding applies only to SELECT elements");
                    for (;0 < e.length; ) e.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(t, n, a) {
                    function i() {
                        return h.a.Ma(t.options, function(e) {
                            return e.selected;
                        });
                    }
                    function r(e, t, n) {
                        var a = typeof t;
                        return "function" == a ? t(e) : "string" == a ? e[t] : n;
                    }
                    function o(e, n) {
                        if (m && d) h.j.ja(t, h.a.c(a.get("value")), !0); else if (p.length) {
                            var i = 0 <= h.a.o(p, h.j.u(n[0]));
                            h.a.wc(n[0], i), m && !i && h.l.w(h.a.Fa, null, [ t, "change" ]);
                        }
                    }
                    var s = t.multiple, l = 0 != t.length && s ? t.scrollTop : null, c = h.a.c(n()), d = a.get("valueAllowUnset") && a.has("value"), u = a.get("optionsIncludeDestroyed");
                    n = {};
                    var f, p = [];
                    d || (s ? p = h.a.ib(i(), h.j.u) : 0 <= t.selectedIndex && p.push(h.j.u(t.options[t.selectedIndex]))),
                    c && ("undefined" == typeof c.length && (c = [ c ]), f = h.a.Ma(c, function(t) {
                        return u || t === e || null === t || !h.a.c(t._destroy);
                    }), a.has("optionsCaption") && (c = h.a.c(a.get("optionsCaption")), null !== c && c !== e && f.unshift(D)));
                    var m = !1;
                    n.beforeRemove = function(e) {
                        t.removeChild(e);
                    }, c = o, a.has("optionsAfterRender") && "function" == typeof a.get("optionsAfterRender") && (c = function(t, n) {
                        o(0, n), h.l.w(a.get("optionsAfterRender"), null, [ n[0], t !== D ? t : e ]);
                    }), h.a.Db(t, f, function(n, i, o) {
                        return o.length && (p = !d && o[0].selected ? [ h.j.u(o[0]) ] : [], m = !0), i = t.ownerDocument.createElement("option"),
                        n === D ? (h.a.bb(i, a.get("optionsCaption")), h.j.ja(i, e)) : (o = r(n, a.get("optionsValue"), n),
                        h.j.ja(i, h.a.c(o)), n = r(n, a.get("optionsText"), o), h.a.bb(i, n)), [ i ];
                    }, n, c), h.l.w(function() {
                        d ? h.j.ja(t, h.a.c(a.get("value")), !0) : (s ? p.length && i().length < p.length : p.length && 0 <= t.selectedIndex ? h.j.u(t.options[t.selectedIndex]) !== p[0] : p.length || 0 <= t.selectedIndex) && h.a.Fa(t, "change");
                    }), h.a.Sc(t), l && 20 < Math.abs(l - t.scrollTop) && (t.scrollTop = l);
                }
            }, h.d.options.zb = h.a.e.J(), h.d.selectedOptions = {
                after: [ "options", "foreach" ],
                init: function(e, t, n) {
                    h.a.q(e, "change", function() {
                        var a = t(), i = [];
                        h.a.r(e.getElementsByTagName("option"), function(e) {
                            e.selected && i.push(h.j.u(e));
                        }), h.h.Ga(a, n, "selectedOptions", i);
                    });
                },
                update: function(e, t) {
                    if ("select" != h.a.A(e)) throw Error("values binding applies only to SELECT elements");
                    var n = h.a.c(t()), a = e.scrollTop;
                    n && "number" == typeof n.length && h.a.r(e.getElementsByTagName("option"), function(e) {
                        var t = 0 <= h.a.o(n, h.j.u(e));
                        e.selected != t && h.a.wc(e, t);
                    }), e.scrollTop = a;
                }
            }, h.h.ga.selectedOptions = !0, h.d.style = {
                update: function(t, n) {
                    var a = h.a.c(n() || {});
                    h.a.D(a, function(n, a) {
                        a = h.a.c(a), null !== a && a !== e && !1 !== a || (a = ""), t.style[n] = a;
                    });
                }
            }, h.d.submit = {
                init: function(e, t, n, a, i) {
                    if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                    h.a.q(e, "submit", function(n) {
                        var a, r = t();
                        try {
                            a = r.call(i.$data, e);
                        } finally {
                            !0 !== a && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                        }
                    });
                }
            }, h.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(e, t) {
                    h.a.bb(e, t());
                }
            }, h.f.aa.text = !0, function() {
                if (t && t.navigator) var n = function(e) {
                    if (e) return parseFloat(e[1]);
                }, a = t.opera && t.opera.version && parseInt(t.opera.version()), i = t.navigator.userAgent, r = n(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), o = n(i.match(/Firefox\/([^ ]*)/));
                if (10 > h.a.C) var s = h.a.e.J(), l = h.a.e.J(), c = function(e) {
                    var t = this.activeElement;
                    (t = t && h.a.e.get(t, l)) && t(e);
                }, d = function(e, t) {
                    var n = e.ownerDocument;
                    h.a.e.get(n, s) || (h.a.e.set(n, s, !0), h.a.q(n, "selectionchange", c)), h.a.e.set(e, l, t);
                };
                h.d.textInput = {
                    init: function(t, n, i) {
                        function s(e, n) {
                            h.a.q(t, e, n);
                        }
                        function l() {
                            var a = h.a.c(n());
                            null !== a && a !== e || (a = ""), p !== e && a === p ? h.a.setTimeout(l, 4) : t.value !== a && (m = a,
                            t.value = a);
                        }
                        function c() {
                            f || (p = t.value, f = h.a.setTimeout(u, 4));
                        }
                        function u() {
                            clearTimeout(f), p = f = e;
                            var a = t.value;
                            m !== a && (m = a, h.h.Ga(n(), i, "textInput", a));
                        }
                        var f, p, m = t.value, v = 9 == h.a.C ? c : u;
                        10 > h.a.C ? (s("propertychange", function(e) {
                            "value" === e.propertyName && v(e);
                        }), 8 == h.a.C && (s("keyup", u), s("keydown", u)), 8 <= h.a.C && (d(t, v), s("dragend", c))) : (s("input", u),
                        5 > r && "textarea" === h.a.A(t) ? (s("keydown", c), s("paste", c), s("cut", c)) : 11 > a ? s("keydown", c) : 4 > o && (s("DOMAutoComplete", u),
                        s("dragdrop", u), s("drop", u))), s("change", u), h.m(l, null, {
                            i: t
                        });
                    }
                }, h.h.ga.textInput = !0, h.d.textinput = {
                    preprocess: function(e, t, n) {
                        n("textInput", e);
                    }
                };
            }(), h.d.uniqueName = {
                init: function(e, t) {
                    if (t()) {
                        var n = "ko_unique_" + ++h.d.uniqueName.Nc;
                        h.a.vc(e, n);
                    }
                }
            }, h.d.uniqueName.Nc = 0, h.d.value = {
                after: [ "options", "foreach" ],
                init: function(e, t, n) {
                    if ("input" != e.tagName.toLowerCase() || "checkbox" != e.type && "radio" != e.type) {
                        var a = [ "change" ], i = n.get("valueUpdate"), r = !1, o = null;
                        i && ("string" == typeof i && (i = [ i ]), h.a.ta(a, i), a = h.a.Wb(a));
                        var s = function() {
                            o = null, r = !1;
                            var a = t(), i = h.j.u(e);
                            h.h.Ga(a, n, "value", i);
                        };
                        !h.a.C || "input" != e.tagName.toLowerCase() || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != h.a.o(a, "propertychange") || (h.a.q(e, "propertychange", function() {
                            r = !0;
                        }), h.a.q(e, "focus", function() {
                            r = !1;
                        }), h.a.q(e, "blur", function() {
                            r && s();
                        })), h.a.r(a, function(t) {
                            var n = s;
                            h.a.sd(t, "after") && (n = function() {
                                o = h.j.u(e), h.a.setTimeout(s, 0);
                            }, t = t.substring(5)), h.a.q(e, t, n);
                        });
                        var l = function() {
                            var a = h.a.c(t()), i = h.j.u(e);
                            if (null !== o && a === o) h.a.setTimeout(l, 0); else if (a !== i) if ("select" === h.a.A(e)) {
                                var r = n.get("valueAllowUnset"), i = function() {
                                    h.j.ja(e, a, r);
                                };
                                i(), r || a === h.j.u(e) ? h.a.setTimeout(i, 0) : h.l.w(h.a.Fa, null, [ e, "change" ]);
                            } else h.j.ja(e, a);
                        };
                        h.m(l, null, {
                            i: e
                        });
                    } else h.La(e, {
                        checkedValue: t
                    });
                },
                update: function() {}
            }, h.h.ga.value = !0, h.d.visible = {
                update: function(e, t) {
                    var n = h.a.c(t()), a = "none" != e.style.display;
                    n && !a ? e.style.display = "" : !n && a && (e.style.display = "none");
                }
            }, function(e) {
                h.d[e] = {
                    init: function(t, n, a, i, r) {
                        return h.d.event.init.call(this, t, function() {
                            var t = {};
                            return t[e] = n(), t;
                        }, a, i, r);
                    }
                };
            }("click"), h.P = function() {}, h.P.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            }, h.P.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            }, h.P.prototype.makeTemplateSource = function(e, t) {
                if ("string" == typeof e) {
                    t = t || n;
                    var a = t.getElementById(e);
                    if (!a) throw Error("Cannot find template with ID " + e);
                    return new h.v.n(a);
                }
                if (1 == e.nodeType || 8 == e.nodeType) return new h.v.sa(e);
                throw Error("Unknown template type: " + e);
            }, h.P.prototype.renderTemplate = function(e, t, n, a) {
                return e = this.makeTemplateSource(e, a), this.renderTemplateSource(e, t, n, a);
            }, h.P.prototype.isTemplateRewritten = function(e, t) {
                return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten");
            }, h.P.prototype.rewriteTemplate = function(e, t, n) {
                e = this.makeTemplateSource(e, n), t = t(e.text()), e.text(t), e.data("isRewritten", !0);
            }, h.b("templateEngine", h.P), h.Ib = function() {
                function e(e, t, n, a) {
                    e = h.h.Ab(e);
                    for (var i = h.h.va, r = 0; r < e.length; r++) {
                        var o = e[r].key;
                        if (i.hasOwnProperty(o)) {
                            var s = i[o];
                            if ("function" == typeof s) {
                                if (o = s(e[r].value)) throw Error(o);
                            } else if (!s) throw Error("This template engine does not support the '" + o + "' binding within its templates");
                        }
                    }
                    return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + h.h.Xa(e, {
                        valueAccessors: !0
                    }) + " } })()},'" + n.toLowerCase() + "')", a.createJavaScriptEvaluatorBlock(n) + t;
                }
                var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    Tc: function(e, t, n) {
                        t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                            return h.Ib.jd(e, t);
                        }, n);
                    },
                    jd: function(a, i) {
                        return a.replace(t, function(t, n, a, r, o) {
                            return e(o, n, a, i);
                        }).replace(n, function(t, n) {
                            return e(n, "\x3c!-- ko --\x3e", "#comment", i);
                        });
                    },
                    Jc: function(e, t) {
                        return h.N.yb(function(n, a) {
                            var i = n.nextSibling;
                            i && i.nodeName.toLowerCase() === t && h.La(i, e, a);
                        });
                    }
                };
            }(), h.b("__tr_ambtns", h.Ib.Jc), function() {
                h.v = {}, h.v.n = function(e) {
                    if (this.n = e) {
                        var t = h.a.A(e);
                        this.eb = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4;
                    }
                }, h.v.n.prototype.text = function() {
                    var e = 1 === this.eb ? "text" : 2 === this.eb ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.n[e];
                    var t = arguments[0];
                    "innerHTML" === e ? h.a.Eb(this.n, t) : this.n[e] = t;
                };
                var t = h.a.e.J() + "_";
                h.v.n.prototype.data = function(e) {
                    return 1 === arguments.length ? h.a.e.get(this.n, t + e) : void h.a.e.set(this.n, t + e, arguments[1]);
                };
                var n = h.a.e.J();
                h.v.n.prototype.nodes = function() {
                    var t = this.n;
                    return 0 == arguments.length ? (h.a.e.get(t, n) || {}).mb || (3 === this.eb ? t.content : 4 === this.eb ? t : e) : void h.a.e.set(t, n, {
                        mb: arguments[0]
                    });
                }, h.v.sa = function(e) {
                    this.n = e;
                }, h.v.sa.prototype = new h.v.n(), h.v.sa.prototype.text = function() {
                    if (0 == arguments.length) {
                        var t = h.a.e.get(this.n, n) || {};
                        return t.Jb === e && t.mb && (t.Jb = t.mb.innerHTML), t.Jb;
                    }
                    h.a.e.set(this.n, n, {
                        Jb: arguments[0]
                    });
                }, h.b("templateSources", h.v), h.b("templateSources.domElement", h.v.n), h.b("templateSources.anonymousTemplate", h.v.sa);
            }(), function() {
                function t(e, t, n) {
                    var a;
                    for (t = h.f.nextSibling(t); e && (a = e) !== t; ) e = h.f.nextSibling(a), n(a, e);
                }
                function n(e, n) {
                    if (e.length) {
                        var a = e[0], i = e[e.length - 1], r = a.parentNode, o = h.S.instance, s = o.preprocessNode;
                        if (s) {
                            if (t(a, i, function(e, t) {
                                var n = e.previousSibling, r = s.call(o, e);
                                r && (e === a && (a = r[0] || t), e === i && (i = r[r.length - 1] || n));
                            }), e.length = 0, !a) return;
                            a === i ? e.push(a) : (e.push(a, i), h.a.Ba(e, r));
                        }
                        t(a, i, function(e) {
                            1 !== e.nodeType && 8 !== e.nodeType || h.Ub(n, e);
                        }), t(a, i, function(e) {
                            1 !== e.nodeType && 8 !== e.nodeType || h.N.Cc(e, [ n ]);
                        }), h.a.Ba(e, r);
                    }
                }
                function a(e) {
                    return e.nodeType ? e : 0 < e.length ? e[0] : null;
                }
                function i(e, t, i, r, s) {
                    s = s || {};
                    var l = (e && a(e) || i || {}).ownerDocument, c = s.templateEngine || o;
                    if (h.Ib.Tc(i, c, l), i = c.renderTemplate(i, r, s, l), "number" != typeof i.length || 0 < i.length && "number" != typeof i[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    switch (l = !1, t) {
                      case "replaceChildren":
                        h.f.fa(e, i), l = !0;
                        break;

                      case "replaceNode":
                        h.a.uc(e, i), l = !0;
                        break;

                      case "ignoreTargetNode":
                        break;

                      default:
                        throw Error("Unknown renderMode: " + t);
                    }
                    return l && (n(i, r), s.afterRender && h.l.w(s.afterRender, null, [ i, r.$data ])),
                    i;
                }
                function r(e, t, n) {
                    return h.I(e) ? e() : "function" == typeof e ? e(t, n) : e;
                }
                var o;
                h.Fb = function(t) {
                    if (t != e && !(t instanceof h.P)) throw Error("templateEngine must inherit from ko.templateEngine");
                    o = t;
                }, h.Cb = function(t, n, s, l, c) {
                    if (s = s || {}, (s.templateEngine || o) == e) throw Error("Set a template engine before calling renderTemplate");
                    if (c = c || "replaceChildren", l) {
                        var d = a(l);
                        return h.B(function() {
                            var e = n && n instanceof h.R ? n : new h.R(n, null, null, null, {
                                exportDependencies: !0
                            }), o = r(t, e.$data, e), e = i(l, c, o, e, s);
                            "replaceNode" == c && (l = e, d = a(l));
                        }, null, {
                            ya: function() {
                                return !d || !h.a.qb(d);
                            },
                            i: d && "replaceNode" == c ? d.parentNode : d
                        });
                    }
                    return h.N.yb(function(e) {
                        h.Cb(t, n, s, e, "replaceNode");
                    });
                }, h.pd = function(t, a, o, s, l) {
                    function c(e, t) {
                        n(t, u), o.afterRender && o.afterRender(t, e), u = null;
                    }
                    function d(e, n) {
                        u = l.createChildContext(e, o.as, function(e) {
                            e.$index = n;
                        });
                        var a = r(t, e, u);
                        return i(null, "ignoreTargetNode", a, u, o);
                    }
                    var u;
                    return h.B(function() {
                        var t = h.a.c(a) || [];
                        "undefined" == typeof t.length && (t = [ t ]), t = h.a.Ma(t, function(t) {
                            return o.includeDestroyed || t === e || null === t || !h.a.c(t._destroy);
                        }), h.l.w(h.a.Db, null, [ s, t, d, o, c ]);
                    }, null, {
                        i: s
                    });
                };
                var s = h.a.e.J();
                h.d.template = {
                    init: function(e, t) {
                        var n = h.a.c(t());
                        if ("string" == typeof n || n.name) h.f.za(e); else {
                            if ("nodes" in n) {
                                if (n = n.nodes || [], h.I(n)) throw Error('The "nodes" option must be a plain, non-observable array.');
                            } else n = h.f.childNodes(e);
                            n = h.a.nc(n), new h.v.sa(e).nodes(n);
                        }
                        return {
                            controlsDescendantBindings: !0
                        };
                    },
                    update: function(t, n, a, i, r) {
                        var o = n();
                        n = h.a.c(o), a = !0, i = null, "string" == typeof n ? n = {} : (o = n.name, "if" in n && (a = h.a.c(n.if)),
                        a && "ifnot" in n && (a = !h.a.c(n.ifnot))), "foreach" in n ? i = h.pd(o || t, a && n.foreach || [], n, t, r) : a ? (r = "data" in n ? r.ac(n.data, n.as) : r,
                        i = h.Cb(o || t, r, n, t)) : h.f.za(t), r = i, (n = h.a.e.get(t, s)) && "function" == typeof n.k && n.k(),
                        h.a.e.set(t, s, r && r.ca() ? r : e);
                    }
                }, h.h.va.template = function(e) {
                    return e = h.h.Ab(e), 1 == e.length && e[0].unknown || h.h.fd(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
                }, h.f.aa.template = !0;
            }(), h.b("setTemplateEngine", h.Fb), h.b("renderTemplate", h.Cb), h.a.hc = function(e, t, n) {
                if (e.length && t.length) {
                    var a, i, r, o, s;
                    for (a = i = 0; (!n || a < n) && (o = e[i]); ++i) {
                        for (r = 0; s = t[r]; ++r) if (o.value === s.value) {
                            o.moved = s.index, s.moved = o.index, t.splice(r, 1), a = r = 0;
                            break;
                        }
                        a += r;
                    }
                }
            }, h.a.lb = function() {
                function e(e, t, n, a, i) {
                    var r, o, s, l, c, d = Math.min, u = Math.max, f = [], p = e.length, m = t.length, v = m - p || 1, b = p + m + 1;
                    for (r = 0; r <= p; r++) for (l = s, f.push(s = []), c = d(m, r + v), o = u(0, r - 1); o <= c; o++) s[o] = o ? r ? e[r - 1] === t[o - 1] ? l[o - 1] : d(l[o] || b, s[o - 1] || b) + 1 : o + 1 : r + 1;
                    for (d = [], u = [], v = [], r = p, o = m; r || o; ) m = f[r][o] - 1, o && m === f[r][o - 1] ? u.push(d[d.length] = {
                        status: n,
                        value: t[--o],
                        index: o
                    }) : r && m === f[r - 1][o] ? v.push(d[d.length] = {
                        status: a,
                        value: e[--r],
                        index: r
                    }) : (--o, --r, i.sparse || d.push({
                        status: "retained",
                        value: t[o]
                    }));
                    return h.a.hc(v, u, !i.dontLimitMoves && 10 * p), d.reverse();
                }
                return function(t, n, a) {
                    return a = "boolean" == typeof a ? {
                        dontLimitMoves: a
                    } : a || {}, t = t || [], n = n || [], t.length < n.length ? e(t, n, "added", "deleted", a) : e(n, t, "deleted", "added", a);
                };
            }(), h.b("utils.compareArrays", h.a.lb), function() {
                function t(t, n, a, i, r) {
                    var o = [], s = h.B(function() {
                        var e = n(a, r, h.a.Ba(o, t)) || [];
                        0 < o.length && (h.a.uc(o, e), i && h.l.w(i, null, [ a, e, r ])), o.length = 0,
                        h.a.ta(o, e);
                    }, null, {
                        i: t,
                        ya: function() {
                            return !h.a.Tb(o);
                        }
                    });
                    return {
                        ea: o,
                        B: s.ca() ? s : e
                    };
                }
                var n = h.a.e.J(), a = h.a.e.J();
                h.a.Db = function(i, r, o, s, l) {
                    function c(e, t) {
                        w = f[t], g !== t && (E[e] = w), w.tb(g++), h.a.Ba(w.ea, i), v.push(w), x.push(w);
                    }
                    function d(e, t) {
                        if (e) for (var n = 0, a = t.length; n < a; n++) t[n] && h.a.r(t[n].ea, function(a) {
                            e(a, n, t[n].ka);
                        });
                    }
                    r = r || [], s = s || {};
                    var u = h.a.e.get(i, n) === e, f = h.a.e.get(i, n) || [], p = h.a.ib(f, function(e) {
                        return e.ka;
                    }), m = h.a.lb(p, r, s.dontLimitMoves), v = [], b = 0, g = 0, y = [], x = [];
                    r = [];
                    for (var w, _, k, E = [], p = [], T = 0; _ = m[T]; T++) switch (k = _.moved, _.status) {
                      case "deleted":
                        k === e && (w = f[b], w.B && (w.B.k(), w.B = e), h.a.Ba(w.ea, i).length && (s.beforeRemove && (v.push(w),
                        x.push(w), w.ka === a ? w = null : r[T] = w), w && y.push.apply(y, w.ea))), b++;
                        break;

                      case "retained":
                        c(T, b++);
                        break;

                      case "added":
                        k !== e ? c(T, k) : (w = {
                            ka: _.value,
                            tb: h.O(g++)
                        }, v.push(w), x.push(w), u || (p[T] = w));
                    }
                    h.a.e.set(i, n, v), d(s.beforeMove, E), h.a.r(y, s.beforeRemove ? h.ba : h.removeNode);
                    for (var S, T = 0, u = h.f.firstChild(i); w = x[T]; T++) {
                        for (w.ea || h.a.extend(w, t(i, o, w.ka, l, w.tb)), b = 0; m = w.ea[b]; u = m.nextSibling,
                        S = m, b++) m !== u && h.f.kc(i, m, S);
                        !w.ad && l && (l(w.ka, w.ea, w.tb), w.ad = !0);
                    }
                    for (d(s.beforeRemove, r), T = 0; T < r.length; ++T) r[T] && (r[T].ka = a);
                    d(s.afterMove, E), d(s.afterAdd, p);
                };
            }(), h.b("utils.setDomNodeChildrenFromArrayMapping", h.a.Db), h.X = function() {
                this.allowTemplateRewriting = !1;
            }, h.X.prototype = new h.P(), h.X.prototype.renderTemplateSource = function(e, t, n, a) {
                return (t = (9 > h.a.C ? 0 : e.nodes) ? e.nodes() : null) ? h.a.W(t.cloneNode(!0).childNodes) : (e = e.text(),
                h.a.na(e, a));
            }, h.X.vb = new h.X(), h.Fb(h.X.vb), h.b("nativeTemplateEngine", h.X), function() {
                h.xb = function() {
                    var e = this.ed = function() {
                        if (!i || !i.tmpl) return 0;
                        try {
                            if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                        } catch (e) {}
                        return 1;
                    }();
                    this.renderTemplateSource = function(t, a, r, o) {
                        if (o = o || n, r = r || {}, 2 > e) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var s = t.data("precompiled");
                        return s || (s = t.text() || "", s = i.template(null, "{{ko_with $item.koBindingContext}}" + s + "{{/ko_with}}"),
                        t.data("precompiled", s)), t = [ a.$data ], a = i.extend({
                            koBindingContext: a
                        }, r.templateOptions), a = i.tmpl(s, t, a), a.appendTo(o.createElement("div")),
                        i.fragments = {}, a;
                    }, this.createJavaScriptEvaluatorBlock = function(e) {
                        return "{{ko_code ((function() { return " + e + " })()) }}";
                    }, this.addTemplate = function(e, t) {
                        n.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>");
                    }, 0 < e && (i.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, i.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    });
                }, h.xb.prototype = new h.P();
                var e = new h.xb();
                0 < e.ed && h.Fb(e), h.b("jqueryTmplTemplateEngine", h.xb);
            }();
        });
    }();
}(), define("get/waypoint", [], function() {
    return autopilot_pp.require("getwaypoint");
}), define("data", [ "exports" ], function(e) {
    var t = PAGE_PATH + "fmc/compile/compiled-data/";
    e.waypoints = [], e.navaids = [], e.SID = [], e.STAR = [], e.ATS = [], e.runways = [],
    $.get(t + "waypoints.json", function(t) {
        e.waypoints = t;
    }), $.get(t + "navaids.json", function(t) {
        e.navaids = t;
    }), $.get(t + "SID.json", function(t) {
        e.SID = t;
    }), $.get(t + "STAR.json", function(t) {
        e.STAR = t;
    }), $.get(t + "ATS.json", function(t) {
        e.ATS = t;
    }), $.get(t + "runways.json", function(t) {
        e.runways = t;
    });
}), define("ui/elements", {
    modal: ".fmc-modal",
    container: {
        tabBar: ".fmc-modal .fmc-modal__tab-bar",
        modalContent: ".fmc-modal .fmc-modal__content main",
        uiBottomProgInfo: ".geofs-ui-bottom .fmc-prog-info"
    },
    btn: {
        fmcBtn: "button.fmc-btn",
        interactive: ".interactive"
    }
}), define("debug", [ "ui/elements" ], function(e) {
    function t(e) {
        e.stopImmediatePropagation();
    }
    var n = !0;
    return {
        stopPropagation: function() {
            $(e.modal).keyup(t).keydown(t).keypress(t);
        },
        log: function(e) {
            n || console.log(e);
        }
    };
}), define("utils", [ "debug", "exports" ], function(e, t) {
    function n(e) {
        return e * Math.PI / 180;
    }
    function a(e) {
        return 180 * e / Math.PI;
    }
    function i() {
        var t = geofs.aircraft.instance.animationValue.ktas, n = 60 * geofs.aircraft.instance.animationValue.climbrate * m;
        return e.log("tas: " + t + ", vs: " + n), Math.sqrt(t * t - n * n);
    }
    function r(e, t, a, i) {
        var r = n(a - e), o = n(i - t);
        e = n(e), a = n(a);
        var s = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(e) * Math.cos(a) * Math.sin(o / 2) * Math.sin(o / 2), l = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
        return p * l;
    }
    function o(e, t, i, r) {
        e = n(e), i = n(i), t = n(t), r = n(r);
        var o = Math.sin(r - t) * Math.cos(i), s = Math.cos(e) * Math.sin(i) - Math.sin(e) * Math.cos(i) * Math.cos(r - t), l = a(Math.atan2(o, s));
        return l <= 0 ? l + 360 : l;
    }
    function s(e, t) {
        var n = i(), a = 100 * Math.round(n * (e / (t * h)) * h / 60 / 100);
        return a;
    }
    function l(e) {
        return isNaN(e[0]) || isNaN(e[1]) ? "--:--" : (e[1] = f(e[1]), e[0] + ":" + e[1]);
    }
    function c(e, t) {
        return t >= 60 && (t -= 60, e++), e >= 24 && (e -= 24), [ e, t ];
    }
    function d(e, t) {
        var n = e / geofs.aircraft.instance.animationValue.ktas, a = parseInt(n), i = Math.round(60 * (n - a));
        return t && (i += Math.round(geofs.aircraft.instance.animationValue.altitude / 4e3)),
        c(a, i);
    }
    function u(e, t) {
        var n = new Date(), a = n.getHours(), i = n.getMinutes();
        return a += e, i += Number(t), c(a, i);
    }
    function f(e) {
        return e < 10 && (e = "0" + e), e;
    }
    var p = 3440.06, m = 1 / 6076, h = 6076;
    t.EARTH_RADIUS_NM = p, t.FEET_TO_NM = m, t.NM_TO_FEET = h, t.toRadians = n, t.toDegress = a,
    t.getGroundSpeed = i, t.getDistance = r, t.getBearing = o, t.getClimbrate = s, t.formatTime = l,
    t.timeCheck = c, t.getETE = d, t.getETA = u;
}), define("log", [ "knockout", "utils", "exports" ], function(e, t, n) {
    var a = geofs.aircraft.instance.animationValue;
    n.mainTimer = null, n.speedTimer = null, n.data = e.observableArray(), n.update = function(e) {
        if (!geofs.pause && !window.flight.recorder.playing && !window.flight.recorder.paused) {
            var i = Math.round(a.ktas), r = Math.round(a.heading360), o = Math.round(a.altitude), s = +geofs.debug.fps, l = Math.round(1e4 * geofs.aircraft.instance.llaLocation[0]) / 1e4, c = Math.round(1e4 * geofs.aircraft.instance.llaLocation[1]) / 1e4, d = new Date(), u = d.getUTCHours(), f = d.getUTCMinutes(), p = t.formatTime(t.timeCheck(u, f));
            e = e || "--";
            var m = [ p, i, r, o, l, c, s, e ];
            n.data.push(m);
        }
        clearInterval(n.mainTimer), a.altitude > 18e3 ? n.mainTimer = setInterval(n.update, 12e4) : n.mainTimer = setInterval(n.update, 3e4);
    }, n.speed = function() {
        var e = a.kcas, t = a.altitude + geofs.groundElevation * METERS_TO_FEET;
        e > 255 && t < 1e4 && n.update("Overspeed"), clearInterval(n.speedTimer), t < 1e4 ? n.speedTimer = setInterval(n.speed, 15e3) : n.speedTimer = setInterval(n.speed, 3e4);
    }, n.removeData = function() {
        n.data.removeAll();
    };
}), define("get/ATS", [ "data", "log" ], function(e, t) {
    function n(n, a, i) {
        n && i || t.warn("There must be one waypoint before and after the airway.");
        e.ATS[a];
    }
    return function(e, t, a) {
        return n(e, t, a);
    };
}), define("get/SID", [ "data" ], function(e) {
    return function(t, n, a) {
        if (!t) return [];
        var i = e.SID[t] || [], r = [];
        if (a) if (n) i.forEach(function(e) {
            e.name === a && e.runway === n && r.push(e);
        }); else {
            var o = [];
            i.forEach(function(e) {
                e.name === a && o.push(e.runway);
            }), r.push({
                name: a,
                availableRunways: o
            });
        } else if (n) i.forEach(function(e) {
            e.runway === n && r.push(e);
        }); else {
            var s = [];
            i.forEach(function(e) {
                s.indexOf(e.name) === -1 && s.push(e.name);
            }), s.forEach(function(e) {
                r.push({
                    name: e
                });
            });
        }
        return r;
    };
}), define("get/STAR", [ "data" ], function(e) {
    return function(t, n) {
        if (!t || !n) return [];
        var a = e.STAR[t], i = [];
        return Array.isArray(a) && a.forEach(function(e) {
            e.runway === n && i.push(e);
        }), i;
    };
}), define("get/runway", [ "data", "./SID" ], function(e, t) {
    return function(n, a, i) {
        if (!n) return [];
        var r = e.runways[n], o = [];
        if (i) if (a) t(n, void 0, a)[0].availableRunways.forEach(function(e) {
            o.push({
                runway: e
            });
        }); else for (var s in r) o.push({
            runway: s
        });
        return o;
    };
}), define("get", [ "get/waypoint", "get/ATS", "get/SID", "get/STAR", "get/runway", "exports" ], function(e, t, n, a, i, r) {
    r.waypoint = e, r.ATS = t, r.SID = n, r.STAR = a, r.runway = i;
}), define("nav/progress", [ "knockout", "distance", "flight", "utils", "waypoints", "exports" ], function(e, t, n, a, i, r) {
    r.timer = null, r.info = {
        flightETE: e.observable("--:--"),
        flightETA: e.observable("--:--"),
        todETE: e.observable("--:--"),
        todETA: e.observable("--:--"),
        flightDist: e.observable("--"),
        todDist: e.observable("--"),
        nextDist: e.observable("--"),
        nextETE: e.observable("--:--")
    }, r.update = function() {
        for (var e, o = i.route(), s = i.nextWaypoint(), l = geofs.aircraft.instance.llaLocation[0], c = geofs.aircraft.instance.llaLocation[1], d = n.arrival.coords()[0], u = n.arrival.coords()[1], f = [ [], [], [], [], [] ], p = null === s ? 0 : o[s].distFromPrev(), m = 0, h = !0; m < o.length; m++) o[m].lat() && o[m].lon() || (h = !1);
        e = h ? t.route(o.length) : a.getDistance(l, c, d, u), !geofs.aircraft.instance.groundContact && n.arrival.airport() && (f[0] = a.getETE(e, !0),
        f[1] = a.getETA(f[0][0], f[0][1]), f[4] = a.getETE(p, !1), e - n.todDist() > 0 && (f[2] = a.getETE(e - n.todDist(), !1),
        f[3] = a.getETA(f[2][0], f[2][1]))), r.print(e, p, f);
    }, r.print = function(e, t, i) {
        for (var o = 0; o < i.length; o++) i[o] = a.formatTime(i[o]);
        e = e < 10 ? Math.round(10 * e) / 10 : Math.round(e);
        var s;
        n.todDist() && n.todDist() < e && (s = e - n.todDist()), t = t < 10 ? Math.round(10 * t) / 10 : Math.round(t);
        var l = "--";
        r.info.flightETE(i[0]), r.info.flightETA(i[1]), r.info.todETE(i[2]), r.info.todETA(i[3]),
        r.info.flightDist(e || l), r.info.todDist(s || l), r.info.nextDist(t || l), r.info.nextETE(i[4]);
    };
}), define("waypoints", [ "knockout", "debug", "get", "flight", "log", "utils", "nav/LNAV", "nav/progress", "exports" ], function(e, t, n, a, i, r, o, s, l) {
    function c(e) {
        var t, n, a = d(e);
        if (0 === a || a === N()) {
            var i = j() || [];
            t = r.getDistance(i[0], i[1], e.lat(), e.lon()), n = r.getBearing(i[0], i[1], e.lat(), e.lon());
        } else if (a) {
            var o = A()[a - 1];
            t = r.getDistance(o.lat(), o.lon(), e.lat(), e.lon()), n = r.getBearing(o.lat(), o.lon(), e.lat(), e.lon());
        }
        return [ Math.round(10 * t) / 10 || null, Math.round(n) || null ];
    }
    function d(e) {
        for (var t = 0; t < A().length && e !== A()[t]; t++) ;
        return t;
    }
    function u(e, t) {
        var n = A();
        if (t >= n.length) for (var a = t - n.length; a-- + 1; ) n.push(void 0);
        n.splice(t, 0, n.splice(e, 1)[0]), A(n);
    }
    function f() {
        var e = [], t = a.departure.airport();
        t && e.push(t), A().forEach(function(t) {
            e.push(t.wpt());
        });
        var n = a.arrival.airport();
        return n && e.push(n), e;
    }
    function p() {
        return f().join(" ");
    }
    function m() {
        for (var e = [], t = 0; t < A().length; t++) e.push([ A()[t].wpt(), A()[t].lat(), A()[t].lon(), A()[t].alt(), A()[t].valid(), A()[t].info() ]);
        return JSON.stringify([ a.departure.airport() || "", a.arrival.airport() || "", a.number() || "", e ]);
    }
    function h(e) {
        if (e = String(e), e.indexOf(" ") > -1) {
            var t, n = e.split(" "), a = Number(n[0]), i = Number(n[1]) / 60;
            return t = a < 0 ? a - i : a + i, +t.toFixed(6);
        }
        return "" === e ? NaN : Number(e);
    }
    function v(e) {
        if (!e) return void i.warn("Please enter waypoints separated by spaces or a generated route");
        if (e = e.trim(), 0 === e.indexOf('["')) return void k(e);
        var t, n, r = !0, o = [];
        o = e.toUpperCase().split(" ");
        for (var s = 0; s < o.length; s++) (o[s].length > 5 || o[s].length < 1 || !/^\w+$/.test(o[s])) && (r = !1);
        var l = !!D[o[0]], c = !!D[o[o.length - 1]];
        if (!r) return void i.warn("Invalid Waypoints Input");
        if (g(!0), l) {
            var d = o[0];
            a.departure.airport(d), t = 1;
        } else t = 0, a.departure.airport(void 0);
        if (c) {
            var d = o[o.length - 1];
            a.arrival.airport(d), n = 1;
        } else n = 0, a.arrival.airport(void 0);
        for (var s = t; s < o.length - n; s++) b(), A()[s - t].wpt(o[s]);
    }
    function b() {
        A.push(new M()), "object" == typeof componentHandler && componentHandler.upgradeDom(),
        t.stopPropagation();
    }
    function g(e, t, n) {
        var a = n && n.shiftKey || "boolean" == typeof e;
        a ? A.removeAll() : A.splice(e, 1), N() === e || a ? y(!1) : N() === e + 1 ? y(e) : N() > e && N(N() - 1);
    }
    function y(e) {
        if (e !== !1 && N() !== e) if (e < A().length) {
            N(e);
            var n = A()[N()];
            C.latitude(n.lat()), C.longitude(n.lon()), T.currentMode(1), t.log("Waypoint # " + Number(e + 1) + " activated | index: " + e);
        } else a.arrival.coords()[1] && (C.latitude(a.arrival.coords()[1]), C.longitude(a.arrival.coords()[2])),
        N(null); else N(null), C.latitude(void 0), C.longitude(void 0), T.currentMode(0);
        o.update(), s.update();
    }
    function x(e, t) {
        t || (t = ""), A()[e].info(t);
    }
    function w() {
        if (null === N()) return -1;
        for (var e = N(); e < A().length; e++) if (A()[e] && A()[e].alt()) return e;
        return -1;
    }
    function _() {
        A().length < 1 || !A()[0].wpt() ? i.warn("There is no route to save") : (localStorage.removeItem("fmcWaypoints"),
        localStorage.setItem("fmcWaypoints", m()));
    }
    function k(e) {
        e = e || localStorage.getItem("fmcWaypoints");
        var t = JSON.parse(e);
        if (localStorage.removeItem("fmcWaypoints"), t) {
            g(!0);
            for (var n = t[3], r = 0; r < n.length; r++) for (var o = 0; o < n[r].length; o++) null === n[r][o] && (n[r][o] = void 0);
            a.departure.airport(t[0]), a.arrival.airport(t[1]), a.number(t[2]);
            for (var r = 0; r < n.length; r++) b(), n[r][0] && A()[r].wpt(n[r][0]), n[r][4] && A()[r].lat() || (A()[r].lat(n[r][1]),
            A()[r].lon(n[r][2])), A()[r].alt(n[r][3]), A()[r].info() || A()[r].info(n[r][5]);
            _();
        } else i.warn("You did not save the waypoints or you cleared the browser's cache");
    }
    function E(e, n) {
        t.log("Waypoint #" + (e + 1) + "(index=" + e + ") shifted " + n);
        var a = e + n;
        (n < 0 && a >= 0 || n > 0 && a <= A().length - 1) && (u(e, a), N() === a ? y(e) : N() === e && y(a));
    }
    var T = autopilot_pp.require("autopilot"), S = autopilot_pp.require("getwaypoint"), C = autopilot_pp.require("greatcircle"), D = autopilot_pp.require("json!data/icaoairports.json"), A = e.observableArray(), N = e.observable(null), M = function() {
        var t = this, a = e.observable();
        t.wpt = e.pureComputed({
            read: a,
            write: function(e) {
                a(e);
                var i = n.waypoint(e, d(t)), r = i && i[0] && i[1];
                t.lat(r ? i[0] : t.lat(), r), t.lon(r ? i[1] : t.lon(), r), t.info(r ? i[2] : void 0);
            }
        });
        var i = e.observable();
        t.lat = e.pureComputed({
            read: i,
            write: function(e, n) {
                e = h(e), i(isNaN(e) ? void 0 : e), t.valid(Boolean(n));
            }
        });
        var r = e.observable();
        t.lon = e.pureComputed({
            read: r,
            write: function(e, n) {
                e = h(e), r(isNaN(e) ? void 0 : e), t.valid(Boolean(n));
            }
        }), t.alt = e.observable(), t.valid = e.observable(!1), t.info = e.observable(),
        t.distFromPrev = e.pureComputed(function() {
            return c(t)[0];
        }), t.brngFromPrev = e.pureComputed(function() {
            return c(t)[1];
        });
    }, j = e.observable();
    setInterval(function() {
        j(geofs.aircraft.instance.llaLocation);
    }, 1e3), l.route = A, l.nextWaypoint = N, l.makeFixesArray = f, l.toFixesString = p,
    l.toRouteString = m, l.getCoords = S, l.formatCoords = h, l.toRoute = v, l.addWaypoint = b,
    l.removeWaypoint = g, l.activateWaypoint = y, l.printWaypointInfo = x, l.nextWptAltRes = w,
    l.saveData = _, l.loadFromSave = k, l.shiftWaypoint = E;
}), define("distance", [ "flight", "utils", "waypoints", "exports" ], function(e, t, n, a) {
    a.route = function(a) {
        var i = e.departure.coords(), r = e.arrival.coords(), o = n.nextWaypoint() || 0, s = n.route(), l = geofs.aircraft.instance.llaLocation;
        if (0 === s.length) return e.departure.airport() && e.arrival.airport() ? t.getDistance(i[0], i[1], r[0], r[1]) : 0;
        if (null === n.nextWaypoint()) return e.arrival.airport() && l[0] ? t.getDistance(l[0], l[1], r[0], r[1]) : l[0] ? t.getDistance(l[0], l[1], s[s.length - 1].lat(), s[s.length - 1].lon()) : t.getDistance(s[0].lat(), s[0].lon(), s[s.length - 1].lat(), s[s.length - 1].lon());
        for (var c = 0, d = o; d < a && d < s.length; d++) c += s[d].distFromPrev();
        return a === s.length && e.arrival.airport() && (c += t.getDistance(s[a - 1].lat(), s[a - 1].lon(), r[0], r[1])),
        c;
    }, a.target = function(e) {
        var t;
        return t = e < 0 ? e / -1e3 * 3.4 : e / 1e3 * 2.5;
    }, a.turn = function(e) {
        var n = geofs.aircraft.instance.animationValue.kcas, a = .107917 * Math.pow(Math.E, .0128693 * n), i = t.toRadians(e);
        return a * Math.tan(i / 2) + .2;
    };
}), define("nav/LNAV", [ "distance", "flight", "waypoints", "exports" ], function(e, t, n, a) {
    a.timer = null, a.update = function() {
        if (null === n.nextWaypoint() || !t.arrival.airport()) return clearInterval(a.timer),
        void (a.timer = null);
        var i = e.route(n.nextWaypoint() + 1);
        i <= e.turn(60) && n.activateWaypoint(n.nextWaypoint() + 1), clearInterval(a.timer),
        i < geofs.aircraft.instance.animationValue.ktas / 60 ? a.timer = setInterval(a.update, 500) : a.timer = setInterval(a.update, 5e3);
    };
}), define("vnav-profile", {
    DEFAULT: {
        climb: [[-100,5e3,210,2400],[5e3,1e4,250,2400],[1e4,18e3,270,2200],[18e3,25e3,280,1800],[25e3,3e4,280,1500],[3e4,99e4,.74,1000]],
        descent: [[3e4,99e4,290,-2400],[25e3,3e4,280,-2200],[18e3,25e3,270,-2200],[12e3,18e3,270,-1800],[1e4,12e3,250,-1800],[7e3,1e4,240,-1800],[5e3,7e3,230,-1500],[4e3,5e3,210,-1500],[3e3,4e3,190,-750],[2500,3e3,170,-750],[-100,2500,150,-750]]
    }
}), define("nav/VNAV", [ "debug", "distance", "flight", "utils", "waypoints", "vnav-profile" ], function(e, t, n, a, i, r) {
    function o() {
        var e, t, a = geofs.aircraft.instance.animationValue.altitude;
        if (0 === n.phase()) {
            for (var i, r = s().climb, o = 0; o < r.length; o++) if (a > r[o][0] && a <= r[o][1]) {
                i = o;
                break;
            }
            var c = void 0 === i;
            n.spdControl() && !c && (e = r[i][2], i < r.length - 1 && (t = r[i][3]), l(e));
        } else if (2 === n.phase()) {
            for (var i, r = s().descent, o = 0; o < r.length; o++) if (a > r[o][0] && a <= r[o][1]) {
                i = o;
                break;
            }
            var d = void 0 === i;
            n.spdControl() && !d && (e = r[i][2], t = r[i][3], l(e));
        }
        return [ e, t ];
    }
    function s() {
        return geofs.aircraft.instance.setup.fmc || r[geofs.aircraft.instance.id] || r.DEFAULT;
    }
    function l(e) {
        e && (e <= 10 ? c.speed.isMach(!0) : c.speed.isMach(!1));
    }
    var c = autopilot_pp.require("autopilot").modes;
    return {
        timer: null,
        update: function() {
            if (n.vnavEnabled()) {
                var r, s, l, d, u = i.route(), f = o(), p = i.nextWptAltRes(), m = p !== -1, h = n.todDist(), v = n.cruiseAlt(), b = n.fieldElev(), g = n.todCalc(), y = geofs.aircraft.instance.animationValue.altitude;
                m && (r = u[p].alt(), s = r - y, l = t.route(p + 1), d = t.target(s), e.log("targetAlt: " + r + ", deltaAlt: " + s + ", nextDist: " + l + ", targetDist: " + d));
                for (var x, w, _, k = f[0], E = geofs.aircraft.instance.llaLocation[0] || null, T = geofs.aircraft.instance.llaLocation[1] || null, S = n.arrival.coords()[0] || null, C = n.arrival.coords()[1] || null, D = 0, A = !0; D < u.length; D++) u[D].lat() && u[D].lon() || (A = !1);
                if (_ = A ? t.route(u.length) : a.getDistance(E, T, S, C), isNaN(_) ? n.phase(0) : _ < h ? n.phase(2) : Math.abs(v - y) <= 100 ? n.phase(1) : y < v ? n.phase(0) : y > v ? (n.phase(1),
                x = -1e3) : n.phase(0), 0 === n.phase()) if (m) {
                    var N = t.target(v - y) + t.target(r - v);
                    e.log("totalDist: " + N), l < N ? (x = l < d ? a.getClimbrate(s, l) : f[1], w = r) : (x = f[1],
                    w = v);
                } else x = f[1], w = v; else 2 === n.phase() && (m ? l < d && (x = a.getClimbrate(s, l),
                w = r) : (x = f[1], y > 12e3 + b && (w = 100 * Math.round((12e3 + b) / 100))));
                1 !== n.phase() || !g && h || (m ? (h = t.route(u.length) - l, h += t.target(r - v)) : h = t.target(b - v),
                h = Math.round(h), n.todDist(h), e.log("TOD changed to " + h)), void 0 !== k && c.speed.value(k),
                void 0 !== x && c.vs.value(x), void 0 !== w && c.altitude.value(w);
            }
        }
    };
}), define("flight", [ "knockout", "get", "nav/LNAV", "nav/VNAV", "exports" ], function(e, t, n, a, i) {
    var r = autopilot_pp.require("json!data/icaoairports.json"), o = e.observable(), s = e.observable(!1), l = e.pureComputed({
        read: s,
        write: function(e) {
            var t = s;
            S() ? e ? (a.timer = setInterval(function() {
                a.update();
            }, 5e3), t(!0)) : (clearInterval(a.timer), a.timer = null, t(!1)) : t(!1);
        }
    }), c = e.observable(!0), d = e.observable(), u = e.observable([]), f = e.observable(), p = e.observable(), m = e.pureComputed(function() {
        var e = v.airport(), n = v.SID() ? v.SID().name : void 0;
        return t.runway(e, n, !0);
    }), h = e.pureComputed(function() {
        var e = v.airport(), n = v.runway() ? v.runway().runway : void 0, a = v.SID() ? v.SID().name : void 0;
        return t.SID(e, n, a);
    }), v = {
        airport: e.pureComputed({
            read: d,
            write: function(e) {
                var t = d(), a = r[e];
                e !== t && v.runway(void 0), a ? (d(e), u(a)) : (d(void 0), u([])), n.update();
            }
        }),
        coords: e.pureComputed(function() {
            return u();
        }),
        runway: e.pureComputed({
            read: f,
            write: function(e) {
                var t = m()[e];
                t ? f(t) : (f(void 0), v.SID(void 0));
            }
        }),
        SID: e.pureComputed({
            read: p,
            write: function(e) {
                var t = h()[e];
                p(t);
            }
        })
    }, b = e.observable(), g = e.observable([]), y = e.observable(), x = e.observable(), w = e.pureComputed(function() {
        return t.runway(k.airport());
    }), _ = e.pureComputed(function() {
        return t.SID(k.airport(), !!k.runway() && k.runway().runway);
    }), k = {
        airport: e.pureComputed({
            read: b,
            write: function(e) {
                var t = b(), a = r[e];
                e !== t && k.runway(void 0), a ? (b(e), g(a)) : (b(void 0), g([])), n.update();
            }
        }),
        coords: e.pureComputed(function() {
            return g();
        }),
        runway: e.pureComputed({
            read: y,
            write: function(e) {
                var t = w()[e];
                t ? y(t) : (y(void 0), k.STAR(void 0));
            }
        }),
        STAR: e.pureComputed({
            read: x,
            write: function(e) {
                var t = _()[e];
                x(t);
            }
        })
    }, E = e.observable(), T = e.observable(), S = e.pureComputed({
        read: T,
        write: function(e) {
            var t = T;
            e ? t(+e) : (t(void 0), l(!1));
        }
    }), C = e.observable(0), D = e.pureComputed({
        read: C,
        write: function(e) {
            N() || e > 3 || C(e);
        }
    }), A = e.observable(!1), N = e.pureComputed({
        read: A,
        write: function(e, t) {
            A(e);
        }
    }), M = e.observable(!1), j = e.observable();
    i.todDist = o, i.vnavEnabled = l, i.spdControl = c, i.departure = v, i.arrival = k,
    i.number = E, i.cruiseAlt = S, i.phase = D, i.phaseLocked = N, i.todCalc = M, i.fieldElev = j;
}), define("ui/ViewModel", [ "knockout", "flight", "get", "log", "waypoints", "nav/progress" ], function(e, t, n, a, i, r) {
    function o() {
        var o = this, s = e.observable(!1);
        o.opened = e.pureComputed({
            read: s,
            write: function(e, t) {
                s(e);
            }
        }), o.modalWarning = e.observable(), a.warn = e.pureComputed({
            read: o.modalWarning,
            write: function(e) {
                o.modalWarning(e), setTimeout(function() {
                    o.modalWarning(void 0);
                }, 5e3);
            }
        }), o.departureAirport = t.departure.airport, o.arrivalAirport = t.arrival.airport,
        o.flightNumber = t.number, o.route = i.route, o.nextWaypoint = i.nextWaypoint, o.saveWaypoints = i.saveData,
        o.retrieveWaypoints = i.loadFromSave, o.addWaypoint = i.addWaypoint, o.activateWaypoint = i.activateWaypoint,
        o.shiftWaypoint = i.shiftWaypoint, o.removeWaypoint = i.removeWaypoint, o.fieldElev = t.fieldElev,
        o.todDist = t.todDist, o.todCalc = t.todCalc, o.departureRwyList = e.pureComputed(function() {
            return o.SIDName() ? n.SID(o.departureAirport(), o.departureRwyName(), o.SIDName()).availableRunways : n.runway(o.departureAirport(), o.SIDName(), !0);
        }), o.departureRunway = t.departure.runway, o.departureRwyName = e.pureComputed(function() {
            return o.departureRunway() ? o.departureRunway().runway : void 0;
        }), o.SIDList = e.pureComputed(function() {
            return n.SID(o.departureAirport(), o.departureRwyName());
        }), o.SID = t.departure.SID, o.SIDName = e.pureComputed(function() {
            return o.SID() ? o.SID().name : void 0;
        }), o.arrivalRwyList = e.pureComputed(function() {
            return n.runway(o.arrivalAirport());
        }), o.arrivalRunway = t.arrival.runway, o.arrivalRunwayName = e.pureComputed(function() {
            return o.arrivalRunway() ? o.arrivalRunway().runway : void 0;
        }), o.STARs = e.pureComputed(function() {
            return n.STAR(o.arrivalAirport(), o.arrivalRunwayName());
        }), o.STAR = t.arrival.STAR, o.STARName = e.pureComputed(function() {
            return o.STAR() ? o.STAR().name : void 0;
        }), o.vnavEnabled = t.vnavEnabled, o.cruiseAlt = t.cruiseAlt, o.spdControl = t.spdControl,
        o.phase = t.phase, o.phaseLocked = t.phaseLocked;
        var l = [ "climb", "cruise", "descent" ];
        o.currentPhaseText = e.pureComputed(function() {
            return l[t.phase()];
        }), o.nextPhase = function() {
            var e = t.phase();
            t.phase(e === l.length - 1 ? 0 : e + 1);
        }, o.progInfo = r.info, o.loadRouteText = e.observable(), o.loadRoute = function() {
            i.toRoute(o.loadRouteText()), o.loadRouteText(void 0);
        };
        var c = e.observable();
        o.generateRoute = e.pureComputed({
            read: c,
            write: function(e, t) {
                var n = e ? i.toRouteString() : void 0;
                c(n);
            }
        }), o.logData = a.data, o.removeLogData = a.removeData;
    }
    return e.bindingHandlers.mdlSwitch = {
        update: function(e, t, n) {
            var a = n.get("checked");
            a && a(), n.get("disable");
            var i = e.parentNode.MaterialSwitch;
            i && (i.checkDisabled(), i.checkToggleState());
        }
    }, e.bindingHandlers.mdlTextfield = {
        update: function(e, t, n) {
            var a = n.get("value");
            a && a();
            var i = e.parentNode.MaterialTextfield;
            i && (i.checkDirty(), i.checkDisabled(), i.checkFocus(), i.checkValidity());
        }
    }, o;
}), define("text", [ "module" ], function(e) {
    "use strict";
    function t(e, t) {
        return void 0 === e || "" === e ? t : e;
    }
    function n(e, n, a, i) {
        if (n === i) return !0;
        if (e === a) {
            if ("http" === e) return t(n, "80") === t(i, "80");
            if ("https" === e) return t(n, "443") === t(i, "443");
        }
        return !1;
    }
    var a, i, r, o, s, l = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0" ], c = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, d = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, u = "undefined" != typeof location && location.href, f = u && location.protocol && location.protocol.replace(/\:/, ""), p = u && location.hostname, m = u && (location.port || void 0), h = {}, v = e.config && e.config() || {};
    return a = {
        version: "2.0.15",
        strip: function(e) {
            if (e) {
                e = e.replace(c, "");
                var t = e.match(d);
                t && (e = t[1]);
            } else e = "";
            return e;
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029");
        },
        createXhr: v.createXhr || function() {
            var e, t, n;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
            if ("undefined" != typeof ActiveXObject) for (t = 0; t < 3; t += 1) {
                n = l[t];
                try {
                    e = new ActiveXObject(n);
                } catch (e) {}
                if (e) {
                    l = [ n ];
                    break;
                }
            }
            return e;
        },
        parseName: function(e) {
            var t, n, a, i = !1, r = e.lastIndexOf("."), o = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return r !== -1 && (!o || r > 1) ? (t = e.substring(0, r), n = e.substring(r + 1)) : t = e,
            a = n || t, r = a.indexOf("!"), r !== -1 && (i = "strip" === a.substring(r + 1),
            a = a.substring(0, r), n ? n = a : t = a), {
                moduleName: t,
                ext: n,
                strip: i
            };
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, t, i, r) {
            var o, s, l, c = a.xdRegExp.exec(e);
            return !c || (o = c[2], s = c[3], s = s.split(":"), l = s[1], s = s[0], (!o || o === t) && (!s || s.toLowerCase() === i.toLowerCase()) && (!l && !s || n(o, l, t, r)));
        },
        finishLoad: function(e, t, n, i) {
            n = t ? a.strip(n) : n, v.isBuild && (h[e] = n), i(n);
        },
        load: function(e, t, n, i) {
            if (i && i.isBuild && !i.inlineText) return void n();
            v.isBuild = i && i.isBuild;
            var r = a.parseName(e), o = r.moduleName + (r.ext ? "." + r.ext : ""), s = t.toUrl(o), l = v.useXhr || a.useXhr;
            return 0 === s.indexOf("empty:") ? void n() : void (!u || l(s, f, p, m) ? a.get(s, function(t) {
                a.finishLoad(e, r.strip, t, n);
            }, function(e) {
                n.error && n.error(e);
            }) : t([ o ], function(e) {
                a.finishLoad(r.moduleName + "." + r.ext, r.strip, e, n);
            }));
        },
        write: function(e, t, n, i) {
            if (h.hasOwnProperty(t)) {
                var r = a.jsEscape(h[t]);
                n.asModule(e + "!" + t, "define(function () { return '" + r + "';});\n");
            }
        },
        writeFile: function(e, t, n, i, r) {
            var o = a.parseName(t), s = o.ext ? "." + o.ext : "", l = o.moduleName + s, c = n.toUrl(o.moduleName + s) + ".js";
            a.load(l, n, function(t) {
                var n = function(e) {
                    return i(c, e);
                };
                n.asModule = function(e, t) {
                    return i.asModule(e, c, t);
                }, a.write(e, l, n, r);
            }, r);
        }
    }, "node" === v.env || !v.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (i = require.nodeRequire("fs"),
    a.get = function(e, t, n) {
        try {
            var a = i.readFileSync(e, "utf8");
            "\ufeff" === a[0] && (a = a.substring(1)), t(a);
        } catch (e) {
            n && n(e);
        }
    }) : "xhr" === v.env || !v.env && a.createXhr() ? a.get = function(e, t, n, i) {
        var r, o = a.createXhr();
        if (o.open("GET", e, !0), i) for (r in i) i.hasOwnProperty(r) && o.setRequestHeader(r.toLowerCase(), i[r]);
        v.onXhr && v.onXhr(o, e), o.onreadystatechange = function(a) {
            var i, r;
            4 === o.readyState && (i = o.status || 0, i > 399 && i < 600 ? (r = new Error(e + " HTTP status: " + i),
            r.xhr = o, n && n(r)) : t(o.responseText), v.onXhrComplete && v.onXhrComplete(o, e));
        }, o.send(null);
    } : "rhino" === v.env || !v.env && "undefined" != typeof Packages && "undefined" != typeof java ? a.get = function(e, t) {
        var n, a, i = "utf-8", r = new java.io.File(e), o = java.lang.System.getProperty("line.separator"), s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), i)), l = "";
        try {
            for (n = new java.lang.StringBuffer(), a = s.readLine(), a && a.length() && 65279 === a.charAt(0) && (a = a.substring(1)),
            null !== a && n.append(a); null !== (a = s.readLine()); ) n.append(o), n.append(a);
            l = String(n.toString());
        } finally {
            s.close();
        }
        t(l);
    } : ("xpconnect" === v.env || !v.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes,
    o = Components.interfaces, Components.utils.import("resource://gre/modules/FileUtils.jsm"),
    s = "@mozilla.org/windows-registry-key;1" in r, a.get = function(e, t) {
        var n, a, i, l = {};
        s && (e = e.replace(/\//g, "\\")), i = new FileUtils.File(e);
        try {
            n = r["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream),
            n.init(i, 1, 0, !1), a = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream),
            a.init(n, "utf-8", n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            a.readString(n.available(), l), a.close(), n.close(), t(l.value);
        } catch (e) {
            throw new Error((i && i.path || "") + ": " + e);
        }
    }), a;
}), define("minify", [ "text" ], function(e) {
    function t(e) {
        return e.replace(/\r/g, "").replace(/\n\s+/g, "").replace(/\n/g, "").replace(/\t/g, "").replace(/\s*{/g, "{").replace(/\s*\:\s*/g, ":").replace(/\s*;\s*/g, ";").replace(/\s*\/\*[^]*?\*\/\s*/g, "").replace(/\s*<!--[^]*?-->\s*/g, "");
    }
    function n(e) {
        return e.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    }
    var a = {};
    return {
        load: function(n, i, r, o) {
            o && o.isBuild && !o.inlineText ? r(null) : e.get(i.toUrl(n), function(e) {
                a[n] = t(e), r(a[n]);
            });
        },
        write: function(e, t, i) {
            if (t in a) {
                var r = n(a[t]);
                i("define('" + e + "!" + t + "', function () { return '" + r + "';});\n");
            }
        }
    };
}), define("minify!html/button.html", function() {
    return '<button class="fmc-btn fmc-btn__fade mdl-button mdl-js-button gefs-f-standard-ui" data-bind="click:opened.bind($data, !opened())">FMC<i class="material-icons">view_list</i></button>';
}), define("minify!html/externaldist.html", function() {
    return '<div class="fmc-prog-info dest-info geofs-f-standard-ui"><span class="mdl-chip mdl-chip--contact"><span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">Dest</span><span class="mdl-chip__text distance-info"><span data-bind="text:progInfo.flightDist"></span>&nbsp;nm</span></span></div>';
}), define("minify!html/modal.html", function() {
    return '<div class="fmc-modal mdl-dialog" data-bind="css:{ opened:opened }"><div class="fmc-modal__close"><button class="mdl-button mdl-js-button mdl-button--icon close" data-bind="click:opened.bind($data, false)"><i class="material-icons">clear</i></button></div><div class="fmc-modal__title"><h4><strong>Flight Management Computer</strong></h4></div><div class="fmc-modal__warning" data-bind="text:modalWarning"></div><div class="fmc-modal__layout-container"><div class="fmc-modal__layout mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs"><div class="fmc-modal__header"><header class="mdl-layout__header fmc-modal__no-shadow"><div class="mdl-layout__tab-bar fmc-modal__tab-bar"><a to=".fmc-rte" class="mdl-layout__tab fmc-btn__fade is-active" interactive=".wpt-tab">RTE</a><a to=".fmc-arr" class="mdl-layout__tab fmc-btn__fade" interactive=".arr-tab">ARR</a><a to=".fmc-legs" class="mdl-layout__tab fmc-btn__fade">LEGS</a><a to=".fmc-vnav" class="mdl-layout__tab fmc-btn__fade" interactive=".vnav-tab">VNAV</a><a to=".fmc-ils" class="mdl-layout__tab fmc-btn__fade" style="display:none;">ILS</a><a to=".fmc-prog" class="mdl-layout__tab fmc-btn__fade">PROG</a><a to=".fmc-map" class="mdl-layout__tab fmc-btn__fade" style="display:none;">MAP</a><a to=".fmc-load" class="mdl-layout__tab fmc-btn__fade" interactive=".load-tab">LOAD</a><a to=".fmc-log" class="mdl-layout__tab fmc-btn__fade" interactive=".log-tab">LOG</a></div></header></div><div class="fmc-modal__divider"></div><div class="fmc-modal__content"><main class="mdl-layout__content"></main></div></div></div><div class="fmc-modal__actions"><button class="mdl-button mdl-js-button mdl-button--raised interactive save-wpt-data wpt-tab is-active" data-bind="click:saveWaypoints">Save Waypoints</button><button class="mdl-button mdl-js-button mdl-button--raised interactive retrieve-wpt wpt-tab is-active" data-bind="click:retrieveWaypoints.bind($data,undefined)">Retrieve Waypoints</button><button action="add-wpt" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored interactive wpt-tab is-active" data-bind="click:addWaypoint"><i class="material-icons">add</i></button><div class="fmc-auto-tod-container interactive arr-tab"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="auto-tod"><input type="checkbox" id="auto-tod" class="mdl-switch__input" data-bind="checked:todCalc, mdlSwitch:true"><span class="mdl-switch__label">Automatically Calculate T/D</span></label></div><div class="fmc-vnav-phase-container interactive vnav-tab"><span>Phase</span><button class="mdl-button mdl-js-button mdl-button--raised toggle-phase" data-bind="text:currentPhaseText, click:nextPhase"></button><button class="mdl-button mdl-js-button mdl-button--raised lock-phase" data-bind="click:phaseLocked.bind($data, !phaseLocked()), css:{locked:phaseLocked}"><i class="material-icons">lock</i></button></div><button class="mdl-button mdl-js-button mdl-button--raised interactive clear-rte load-tab" data-bind="click:generateRoute.bind($data,false)">Clear</button><button class="mdl-button mdl-js-button mdl-button--raised interactive generate-rte load-tab" data-bind="click:generateRoute.bind($data,true)">Generate Route</button><button class="mdl-button mdl-js-button mdl-button--raised interactive remove-log-data log-tab" data-bind="click:removeLogData">Remove Log Data</button></div></div>';
}), define("minify!html/tab-contents/route.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-rte is-active"><div class="page-content"><div class="fmc-dep-arr-table-container"><table><tr><td><i class="material-icons">flight_takeoff</i><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input dep" data-bind="value:departureAirport, mdlTextfield:true"><label class="mdl-textfield__label">Departure</label></div></td><td><i class="material-icons">flight_land</i><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input arr" data-bind="value:arrivalAirport, mdlTextfield:true"><label class="mdl-textfield__label">Arrival</label></div></td><td><i class="material-icons">local_airport</i><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input fn" data-bind="value:flightNumber, mdlTextfield:true"><label class="mdl-textfield__label">Flight #</label></div></td></tr></table></div><div class="fmc-wpt-list-container"><table class="mdl-data-table mdl-js-data-table"><thead><tr class="wpt-header"><th class="wpt-col">Waypoints</th><th class="lat-col">Position</th><th class="lon-col"></th><th class="alt-col">Altitude</th><th class="actions-col">Actions</th></tr></thead><tbody data-bind="foreach:route"><tr class="wpt-row"><td><span class="fmc-wpt-info" data-bind="text:info"></span><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input wpt" data-bind="value:wpt, mdlTextfield:true"><label class="mdl-textfield__label">Fix, VOR, ICAO</label></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input lat" data-bind="value:lat, mdlTextfield:true" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lat.</label><span class="mdl-textfield__error">Invalid Latitude</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input lon" data-bind="value:lon, mdlTextfield:true" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lon.</label><span class="mdl-textfield__error">Invalid Longitude</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input alt" type="number" max=3280000 step=10 data-bind="value:alt, mdlTextfield:true"><label class="mdl-textfield__label">Ft.</label><span class="mdl-textfield__error">Invalid Altitude</span></div></td><td><button data-bind="click:function(){ $parent.activateWaypoint($index()) }" class="mdl-button mdl-js-button mdl-button--icon mdl-button--accent"><i class="material-icons" data-bind="text:$parent.nextWaypoint() === $index() ? \'check_circle\':\'check\'"></i></button><button data-bind="click:function(){ $parent.shiftWaypoint($index(), -1) }" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">arrow_upward</i></button><button data-bind="click:function(){ $parent.shiftWaypoint($index(), 1) }" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">arrow_downward</i></button><button data-bind="click:function(data,event){ $parent.removeWaypoint($index(),data,event) }" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">delete_forever</i></button></td></tr></tbody></table></div></div></section>';
}), define("minify!html/tab-contents/dep-arr.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-arr"><div class="page-content"><div class="fmc-dep-arr-container"><table><tr><td><span class="fmc-dep-arr__input-label">T/D Dist.</span><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label tod-dist-container"><input class="mdl-textfield__input tod-dist" type="number" data-bind="value:todDist, mdlTextfield:true" pattern="\\d*"><label class="mdl-textfield__label">Nautical Miles (nm)</label><span class="mdl-textfield__error">Invalid T/D Distance</span></div></td><td><span class="fmc-dep-arr__input-label">Arrival Field Elev.</span><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input field-elev" type="number" data-bind="value:fieldElev, mdlTextfield:true" pattern="-?\\d*"><label class="mdl-textfield__label">Feet (ft.)</label><span class="mdl-textfield__error">Invalid Field Elevation</span></div></td></tr></table></div></div></section>';
}), define("minify!html/tab-contents/legs.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-legs"><div class="page-content"><div class="fmc-legs-container"><table class="fmc-legs-data-table"><thead><th class="brng-and-wpt"></th><th class="dist-and-info"></th><th class="altitude"></th></thead><tbody data-bind="foreach:route"><tr data-bind="visible:$parent.nextWaypoint() == null || $index() >= $parent.nextWaypoint(), css:{activated:$parent.nextWaypoint() === $index()}"><td><div class="brng-from-prev" data-bind="text:brngFromPrev() == null ? \'\':brngFromPrev()+\'\\xB0\'"></div><div class="wpt-name" data-bind="text:wpt"></div></td><td><div class="dist-from-prev" data-bind="text:distFromPrev() == null ? \'\':distFromPrev()+\' NM\'"></div><div class="wpt-info" data-bind="text:info() ? \'(\'+info()+\')\':\'\'"></div></td><td><div class="alt-target" data-bind="text:!alt() ? (wpt() ? \'-----\':\'\'):(alt() >= 18000 ? \'FL\'+Math.round(alt()/100):alt()+\' FT\')"></div></td></tr></tbody></table></div></div></section>';
}), define("minify!html/tab-contents/vnav.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-vnav"><div class="page-content"><div class="fmc-vnav-container"><table><tr><td><div class="fmc-vnav-toggle-container"><div><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="vnav-toggle"><input type="checkbox" id="vnav-toggle" class="mdl-switch__input" data-bind="checked:vnavEnabled, disable:cruiseAlt() == undefined, mdlSwitch:true"><span class="mdl-switch__label">VNAV</span></label><i class="material-icons">unfold_more_horizontal</i></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input cruise-alt" type="number" data-bind="value:cruiseAlt, mdlTextfield:true" pattern="\\d*"><label class="mdl-textfield__label">Cruise Altitude (ft.)</label><span class="mdl-textfield__error">Invalid Cruise Altitude</span></div></div></td><td><div class="fmc-spd-toggle-container"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="spd-toggle"><input type="checkbox" id="spd-toggle" class="mdl-switch__input" data-bind="checked:spdControl, mdlSwitch:true"><span class="mdl-switch__label">SPD Control</span></label></div></td></tr></table></div></div></section>';
}), define("minify!html/tab-contents/ils.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-ils"><div class="page-content"><div class="fmc-ils-container"><table class="mdl-data-table mdl-js-data-table"><tr><th>Glideslope</th><th>Runway Threshold</th><th></th><th>Opposite Threshold</th><th></th></tr><tr><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input glideslope"><label class="mdl-textfield__label">Degrees</label><span class="mdl-textfield__error">Invalid Glideslope</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input threshold-lat" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lat.</label><span class="mdl-textfield__error">Invalid Latitude</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input threshold-lon" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lon.</label><span class="mdl-textfield__error">Invalid Longitude</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input opposite-lat" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lat.</label><span class="mdl-textfield__error">Invalid Latitude</span></div></td><td><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input opposite-lon" pattern="-?(\\d*(\\.\\d+)?|\\d*\\s\\d+(\\.\\d+)?)"><label class="mdl-textfield__label">Lon.</label><span class="mdl-textfield__error">Invalid Longitude</span></div></td></tr></table></div></div></section>';
}), define("minify!html/tab-contents/progress.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-prog"><div class="page-content"><div class="fmc-prog-container"><div class="fmc-prog-info dest-info"><span class="mdl-chip mdl-chip--contact"><span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">Dest</span><span class="mdl-chip__text distance-info"><span data-bind="text:progInfo.flightDist"></span>&nbsp;nm</span><span class="mdl-chip__contact time-info"><div>ETE:&nbsp;<span class="ete" data-bind="text:progInfo.flightETE"></span></div><div>ETA:&nbsp;<span class="eta" data-bind="text:progInfo.flightETA"></span></div></span></span></div><div class="fmc-prog-info tod-info"><span class="mdl-chip mdl-chip--contact"><span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">T/D</span><span class="mdl-chip__text distance-info"><span data-bind="text:progInfo.todDist"></span>&nbsp;nm</span><span class="mdl-chip__contact time-info"><div>ETE:&nbsp;<span class="ete" data-bind="text:progInfo.todETE"></span></div><div>ETA:&nbsp;<span class="eta" data-bind="text:progInfo.todETA"></span></div></span></span></div><div class="fmc-prog-info next-wpt-info" data-bind="visible:nextWaypoint() !== null"><span class="mdl-chip mdl-chip--contact"><span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">Next Waypoint<i class="material-icons">room</i></span><span class="mdl-chip__text distance-info"><span data-bind="text:progInfo.nextDist"></span>&nbsp;nm</span><span class="mdl-chip__contact time-info" data-bind="text:progInfo.nextETE"></span></span></div></div></div></section>';
}), define("minify!html/tab-contents/map.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-map"><div class="page-content"><div class="fmc-map-container"></div></div></section>';
}), define("minify!html/tab-contents/load.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-load"><div class="page-content"><div class="fmc-load-container"><div class="fmc-load-wpt__label"><span>Waypoints / Route</span><i class="material-icons">mode_edit</i></div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input class="mdl-textfield__input load-wpt" data-bind="value:loadRouteText, mdlTextfield:true"><label class="mdl-textfield__label">Enter waypoints separated by spaces or a generated route</label></div><button class="mdl-button mdl-js-button mdl-button--icon load-wpt" data-bind="click:loadRoute"><i class="material-icons">keyboard_return</i></button><div class="mdl-textfield mdl-js-textfield fmc-generate-rte-container"><textarea class="mdl-textfield__input generate-rte" readonly rows="6" maxrows="6" data-bind="value:generateRoute, mdlTextfield:true"></textarea><label class="mdl-textfield__label">Generated Route</label></div></div></div></section>';
}), define("minify!html/tab-contents/log.html", function() {
    return '<section class="mdl-layout__tab-panel fmc-log"><div class="page-content"><div class="fmc-log-container"><table class="mdl-data-table mdl-js-data-table"><thead><tr class="log-header"><th class="time-col">Time</th><th class="spd-col">Spd.</th><th class="hdg-col">Hdg.</th><th class="alt-col">Alt.</th><th class="lat-col">Lat.</th><th class="lon-col">Lon.</th><th class="fps-col">FPS</th><th class="oth-col">Other</th></tr></thead><tbody data-bind="foreach:logData"><tr class="log-data"><td data-bind="text:$data[0]"></td><td data-bind="text:$data[1]"></td><td data-bind="text:$data[2]"></td><td data-bind="text:$data[3]"></td><td data-bind="text:$data[4]"></td><td data-bind="text:$data[5]"></td><td data-bind="text:$data[6]"></td><td data-bind="text:$data[7]"></td></tr></tbody></table></div></div></section>';
}), define("html/tab-contents/main", [ "minify!./route.html", "minify!./dep-arr.html", "minify!./legs.html", "minify!./vnav.html", "minify!./ils.html", "minify!./progress.html", "minify!./map.html", "minify!./load.html", "minify!./log.html" ], function(e, t, n, a, i, r, o, s, l) {
    return [ e, t, n, a, i, r, o, s, l ].join("");
}), define("minify!style/button.css", function() {
    return "button.fmc-btn,button.fmc-btn:hover,button.fmc-btn:active,button.fmc-btn:focus:not(:active){color:white;background:green;}button.fmc-btn__fade{transition:opacity 0.2s ease-in-out;-moz-transition:opacity 0.2s ease-in-out;-webkit-transition:opacity 0.2s ease-in-out;}button.fmc-btn__fade:hover{opacity:0.8;}";
}), define("minify!style/externaldist.css", function() {
    return "div.fmc-prog-info.geofs-f-standard-ui{position:absolute;margin-left:5px;margin-top:-2px;}div.fmc-prog-info.geofs-f-standard-ui span.mdl-chip.mdl-chip--contact{padding-right:12px;}";
}), define("minify!style/modal.css", function() {
    return "a.fmc-btn__fade{transition:font-size 0.3s ease-in-out,font-weight 0.3s ease-in-out,color 0.3s ease-in-out;-moz-transition:font-size 0.3s ease-in-out,font-weight 0.3s ease-in-out,color 0.3s ease-in-out;-webkit-transition:font-size 0.3s ease-in-out,font-weight 0.3s ease-in-out,color 0.3s ease-in-out;}a.fmc-btn__fade:hover:not(.is-active){font-weight:bold;color:black;}a.fmc-btn__fade.is-active{font-size:15px;font-weight:bold;color:rgb(83, 109, 254) !important;}div.fmc-modal{display:none;width:665px;padding:14px 14px;border:none;border-radius:7px;position:fixed;top:10%;left:0px;right:0px;height:fit-content;height:-moz-fit-content;height:-webkit-fit-content;color:black;margin:auto;background:white;}div.fmc-modal.opened{display:block;}div.fmc-modal::backdrop{background:none;}div.fmc-modal .fmc-modal__close{height:25px;margin:-13px 0;float:right;}div.fmc-modal h4{text-align:center;margin-top:10px !important;margin-bottom:0px !important;}div.fmc-modal .fmc-modal__warning{height:20px;text-align:center;color:#d50000;}div.fmc-modal .fmc-modal__no-shadow{box-shadow:none !important;background:white !important;min-height:inherit;height:inherit;position:static !important;}@media screen and (max-width:1024px){div.fmc-modal .fmc-modal__no-shadow{display:block !important;}}div.fmc-modal .fmc-modal__content main{padding-top:0px !important;}div.fmc-modal__layout-container{position:relative;height:auto;margin-top:-2px;}div.fmc-modal__layout-container .mdl-layout__container{position:relative !important;}div.fmc-modal__header{height:48px;}div.fmc-modal__header a{cursor:pointer;}div.fmc-modal__tab-bar{background:inherit !important;}div.fmc-modal__divider{height:2px;margin-top:-2px;background:rgba(66, 66, 66, 0.2);}div.fmc-modal__content{padding-top:15px;}div.fmc-modal__actions .close{display:none;}div.fmc-modal__actions .interactive{display:none;}div.fmc-modal__actions .interactive.is-active{display:inline-block;}";
}), define("minify!style/route.css", function() {
    return 'div.fmc-dep-arr-table-container{margin-top:-10px;}div.fmc-dep-arr-table-container table{width:100%;}div.fmc-dep-arr-table-container .material-icons{vertical-align:middle;margin-right:5px;}div.fmc-dep-arr-table-container div{width:80%;}div.fmc-wpt-add-container{float:right;}div.fmc-modal__actions button[action="add-wpt"]{min-width:35px;width:35px;height:35px;float:right;}';
}), define("minify!style/waypoints.css", function() {
    return 'div.fmc-wpt-list-container{padding-bottom:9px;margin-top:-23px;max-height:277px;overflow:auto;}div.fmc-wpt-list-container table{border:none;}div.fmc-wpt-list-container tr:hover{background-color:initial !important;}div.fmc-wpt-list-container th{text-align:left;cursor:default;}div.fmc-wpt-list-container td{border:none;}div.fmc-wpt-list-container .wpt-col{width:12%;}div.fmc-wpt-list-container .lat-col{width:11.8%;}div.fmc-wpt-list-container .lon-col{width:12.4%;}div.fmc-wpt-list-container .alt-col{width:3%;}div.fmc-wpt-list-container .actions-col{width:10%;}tr.wpt-row td{padding-top:0px !important;padding-bottom:0px !important;}tr.wpt-row .mdl-textfield{width:initial;padding:14px 0;}tr.wpt-row .mdl-textfield__label{top:18px;}tr.wpt-row .mdl-textfield__label::after{bottom:14px;}tr.wpt-row .fmc-wpt-info{color:rgb(83, 109, 254);position:absolute;top:-4px;font-size:12px;}tr.wpt-row button{float:left;min-width:22px !important;width:22px !important;height:22px !important;}button[action="activate-wpt"] .material-icons{color:blue;}';
}), define("minify!style/dep-arr.css", function() {
    return "div.fmc-dep-arr-container{overflow:hidden;}div.fmc-dep-arr-container .fmc-dep-arr__input-label{margin-left:50px;font-size:16px;font-weight:bold;color:rgba(0, 0, 0, 0.26);cursor:default;}div.fmc-dep-arr-container td div{width:140px;margin-left:10px;position:relative;}div.fmc-dep-arr-container .mdl-textfield__input,div.fmc-dep-arr-container label{width:137px;}div.fmc-auto-tod-container{position:relative;left:28%;}div.fmc-auto-tod-container .mdl-switch{width:280px;}div.fmc-auto-tod-container .mdl-switch__label{font-weight:bold;cursor:default !important;}";
}), define("minify!style/legs.css", function() {
    return "div.fmc-legs-container{max-height:340px;min-height:70px;width:665px;overflow:auto;font-family:monospace;}table.fmc-legs-data-table{margin-left:60px;}table.fmc-legs-data-table tr.activated{color:rgb(83, 109, 254);}table.fmc-legs-data-table tr.activated .wpt-name{font-weight:bold;}table.fmc-legs-data-table th{text-align:left;cursor:default;}table.fmc-legs-data-table td{padding:10px;}table.fmc-legs-data-table .brng-and-wpt{width:100px;}table.fmc-legs-data-table .dist-and-info{width:300px;}table.fmc-legs-data-table .altitude{width:120px;}table.fmc-legs-data-table .brng-from-prev{height:20px;font-size:18px;margin-bottom:4px;}table.fmc-legs-data-table .wpt-name{font-size:30px;}table.fmc-legs-data-table .dist-from-prev{height:20px;font-size:18px;margin-bottom:4px;}table.fmc-legs-data-table .wpt-info{height:20px;font-size:20px;}table.fmc-legs-data-table .alt-target{font-size:20px;margin-top:20px;}";
}), define("minify!style/vnav.css", function() {
    return 'div.fmc-vnav-toggle-container{margin-left:60px;}div.fmc-vnav-toggle-container div:first-of-type{float:left;padding:15px 0 25px;}div.fmc-vnav-toggle-container .mdl-switch__track{padding:0 !important;}div.fmc-vnav-toggle-container .material-icons{vertical-align:bottom;margin-left:-15px;width:25px;}div.fmc-vnav-toggle-container .mdl-textfield{margin:-5px 0 -30px;}div.fmc-vnav-toggle-container input{width:133px;}div.fmc-vnav-toggle-container label{width:133px;}div.fmc-vnav-toggle-container label[for="vnav-toggle"]{width:110px;}div.fmc-vnav-toggle-container .mdl-textfield--floating-label{width:140px;}div.fmc-spd-toggle-container{padding:15px 0 25px;margin-left:110px;width:140px;}div.fmc-vnav-phase-container{position:relative;left:35%;background:rgba(158, 158, 158, .2);margin-top:-10px;}div.fmc-vnav-phase-container span{font-family:"Roboto", "Helvetica", "Arial", sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;margin:0 10px;}div.fmc-vnav-phase-container .toggle-phase{background:rgb(83, 109, 254);color:white;}div.fmc-vnav-phase-container .toggle-phase:hover{background:rgb(83, 109, 254);}div.fmc-vnav-phase-container .toggle-phase:active{background:rgba(83, 109, 254, 0.4);}div.fmc-vnav-phase-container .lock-phase{min-width:36px;width:36px;}div.fmc-vnav-phase-container .lock-phase .material-icons{margin-left:-10px;}div.fmc-vnav-phase-container .lock-phase.locked{background:red;color:white;}div.fmc-vnav-phase-container .lock-phase.locked:hover{background:red;}div.fmc-vnav-phase-container .lock-phase.locked:active{background:rgba(255, 0, 0, 0.4);}';
}), define("minify!style/ils.css", function() {
    return "";
}), define("minify!style/progress.css", function() {
    return "div.fmc-prog-info{display:inline-block;}div.fmc-prog-info .material-icons{vertical-align:middle;}div.fmc-prog-container .fmc-prog-info{padding:8px;}div.fmc-prog-container .fmc-prog-info.dest-info{margin:0 70px;}div.fmc-prog-info.next-wpt-info{margin-left:180px;}div.fmc-prog-info span.mdl-chip.mdl-chip--contact{padding:0;height:auto;}div.fmc-prog-info .distance-info{height:36px;line-height:36px;font-size:18px;text-align:center;width:70px;}div.fmc-prog-info .mdl-chip__contact{font-size:14px;height:36px;line-height:36px;width:auto;padding:0 8px;}div.fmc-prog-info .time-info{background:tan;margin-left:8px;margin-right:0px;text-align:left;}div.fmc-prog-info .time-info div{line-height:18px;font-size:12px;width:55px;}div.fmc-prog-info.next-wpt-info .time-info{width:50px;text-align:center;}";
}), define("minify!style/map.css", function() {
    return "div.fmc-map-container{height:405px;width:700px;}";
}), define("minify!style/load.css", function() {
    return 'div.fmc-load-container .mdl-textfield{width:420px;overflow:hidden;}div.fmc-load-container .fmc-load-wpt__label{font-size:16px;font-family:"Helvetica", "Arial", sans-serif;float:left;padding:21px 10px;}div.fmc-load-container .fmc-load-wpt__label .material-icons{vertical-align:middle;}div.fmc-load-container button.load-wpt{margin-top:-60px;}div.fmc-load-container .fmc-generate-rte-container{margin-left:10px;}div.fmc-load-container .fmc-generate-rte-container textarea{resize:none;font-family:monospace;}button.interactive.load-tab{float:right;}';
}), define("minify!style/log.css", function() {
    return "div.fmc-log-container{max-height:265px;overflow:auto;}div.fmc-log-container table{border:none;}div.fmc-log-container tr:hover{background-color:initial !important;}div.fmc-log-container th{text-align:left;}div.fmc-log-container td{text-align:left;border:none;padding:0 18px;height:22px;}div.fmc-log-container .log-data{height:22px;}div.fmc-log-container .time-col,div.fmc-log-container .spd-col,div.fmc-log-container .hdg-col,div.fmc-log-container .alt-col{width:75px;}div.fmc-log-container .lat-col,div.fmc-log-container .lon-col{width:90px;}div.fmc-log-container .fps-col{width:60px}div.fmc-log-container .oth-col{width:130px;}";
}), define("style/main", [ "minify!./button.css", "minify!./externaldist.css", "minify!./modal.css", "minify!./route.css", "minify!./waypoints.css", "minify!./dep-arr.css", "minify!./legs.css", "minify!./vnav.css", "minify!./ils.css", "minify!./progress.css", "minify!./map.css", "minify!./load.css", "minify!./log.css" ], function(e, t, n, a, i, r, o, s, l, c, d, u, f) {
    return [ e, t, n, a, i, r, o, s, l, c, d, u, f ].join("");
}), define("ui/position", [ "./elements", "minify!html/button.html", "minify!html/externaldist.html", "minify!html/modal.html", "html/tab-contents/main", "style/main" ], function(e, t, n, a, i, r) {
    return new Promise(function(o) {
        $("<style>").addClass("fmc-stylesheet").text(r).appendTo("head"), $(a).appendTo("body"),
        $(i).appendTo(e.container.modalContent), $(t).insertAfter('button.geofs-f-standard-ui[data-toggle-panel=".geofs-map-list"]'),
        $(n).appendTo(".geofs-ui-bottom"), o();
    });
}), define("redefine", [ "debug", "log" ], function(e, t) {
    geofs.resetFlight = function() {
        window.confirm("Reset Flight?") && geofs.lastFlightCoordinates && (geofs.flyTo(geofs.lastFlightCoordinates, !0),
        t.update("Flight reset"));
    }, geofs.togglePause = function() {
        geofs.pause ? (geofs.undoPause(), t.update("Flight resumed")) : (t.update("Flight paused"),
        geofs.doPause());
    }, controls.setters.setGear.set = function() {
        geofs.aircraft.instance.groundContact && !geofs.debug.on || (0 === controls.gear.target ? (controls.gear.target = 1,
        t.update("Gear up")) : (controls.gear.target = 0, t.update("Gear down")), controls.setPartAnimationDelta(controls.gear));
    }, controls.setters.setFlapsUp.set = function() {
        controls.flaps.target > 0 && (controls.flaps.target--, geofs.aircraft.instance.setup.flapsPositions ? (controls.flaps.positionTarget = geofs.aircraft.instance.setup.flapsPositions[controls.flaps.target],
        t.update("Flaps raised to " + controls.flaps.positionTarget)) : t.update("Flaps raised to " + controls.flaps.target),
        controls.setPartAnimationDelta(controls.flaps));
    }, controls.setters.setFlapsDown.set = function() {
        controls.flaps.target < geofs.aircraft.instance.setup.flapsSteps && (controls.flaps.target++,
        geofs.aircraft.instance.setup.flapsPositions ? (controls.flaps.positionTarget = geofs.aircraft.instance.setup.flapsPositions[controls.flaps.target],
        t.update("Flaps lowered to " + controls.flaps.positionTarget)) : t.update("Flaps lowered to " + controls.flaps.target),
        controls.setPartAnimationDelta(controls.flaps));
    };
}), define("ui/main", [ "knockout", "./ViewModel", "./position", "debug", "log", "waypoints", "nav/progress", "./elements", "redefine" ], function(e, t, n, a, i, r, o, s) {
    function l() {
        var n = s.modal, a = s.container, l = s.btn, c = new t();
        e.applyBindings(c, $(n)[0]), e.applyBindings(c, $(l.fmcBtn)[1]), e.applyBindings(c, $(a.uiBottomProgInfo)[0]),
        r.addWaypoint(), $(n).keydown(function(e) {
            27 !== e.which && 27 !== e.keyCode || !$(this).is(":visible") || $(n).removeClass("opened");
        }), $(a.tabBar).on("click", "a", function(e) {
            e.preventDefault();
            var t = "is-active", n = $(this), i = $(a.tabBar).find("." + t), r = n.attr("interactive");
            $(l.interactive).removeClass(t), r && $(r).addClass(t), $(a.modalContent).find(i.attr("to")).removeClass(t),
            $(a.modalContent).find(n.attr("to")).addClass(t), i.removeClass(t), n.addClass(t);
        }), o.timer = setInterval(function() {
            o.update();
        }, 5e3), i.mainTimer = setInterval(function() {
            i.update();
        }, 3e4), i.speedTimer = setInterval(function() {
            i.speed();
        }, 15e3);
    }
    n.then(l);
}), function() {
    function e() {
        console.error("Incompatible: You must have Autopilot++ {>= %s} installed in order to use FMC.", n);
    }
    function t() {
        if (window.autopilot_pp) {
            var e = autopilot_pp.version.split("."), t = n.substring(1).split(".");
            if (e[0] === t[0] && e[1] === t[1] && e[2] >= t[2] || e[0] > t[0] || e[1] > t[1]) return !0;
        }
        return !1;
    }
    if (!window.Promise) throw new Error("Browser is outdated.");
    var n = "v0.11.0", a = setInterval(function() {
        window.L && window.geofs && geofs.aircraft && geofs.aircraft.instance && geofs.aircraft.instance.object3d && (clearInterval(a),
        t() ? require([ "ui/main" ]) : e());
    }, 250);
}(), define("init", function() {});