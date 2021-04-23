(function () {
  var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
  function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
  }
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $13817536fa1cc06aff3f324852e841b3$exports = {};
  var $2dfff19d9cd9948e3cd060b6f19e7e0e$var$mapping = {};
  function $2dfff19d9cd9948e3cd060b6f19e7e0e$var$register(pairs) {
    var keys = Object.keys(pairs);
    for (var i = 0; i < keys.length; i++) {
      $2dfff19d9cd9948e3cd060b6f19e7e0e$var$mapping[keys[i]] = pairs[keys[i]];
    }
  }
  function $2dfff19d9cd9948e3cd060b6f19e7e0e$var$resolve(id) {
    var resolved = $2dfff19d9cd9948e3cd060b6f19e7e0e$var$mapping[id];
    if (resolved == null) {
      throw new Error('Could not resolve bundle with id ' + id);
    }
    return resolved;
  }
  var $2dfff19d9cd9948e3cd060b6f19e7e0e$export$register = $2dfff19d9cd9948e3cd060b6f19e7e0e$var$register;
  var $2dfff19d9cd9948e3cd060b6f19e7e0e$export$resolve = $2dfff19d9cd9948e3cd060b6f19e7e0e$var$resolve;
  $2dfff19d9cd9948e3cd060b6f19e7e0e$export$register(JSON.parse("{\"59UkT\":\"index.3d3dd288.js\",\"6pX4R\":\"dram.c70e5f79.png\"}"));
  // ASSET: node_modules/object-assign/index.js
  var $a97fdf3f34f3143396c5badd00ea054d$exports, $a97fdf3f34f3143396c5badd00ea054d$var$getOwnPropertySymbols, $a97fdf3f34f3143396c5badd00ea054d$var$hasOwnProperty, $a97fdf3f34f3143396c5badd00ea054d$var$propIsEnumerable, $a97fdf3f34f3143396c5badd00ea054d$executed = false;
  function $a97fdf3f34f3143396c5badd00ea054d$var$toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function $a97fdf3f34f3143396c5badd00ea054d$var$shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');
      // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      ('abcdefghijklmnopqrst').split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  function $a97fdf3f34f3143396c5badd00ea054d$exec() {
    $a97fdf3f34f3143396c5badd00ea054d$exports = {};
    $a97fdf3f34f3143396c5badd00ea054d$var$getOwnPropertySymbols = Object.getOwnPropertySymbols;
    $a97fdf3f34f3143396c5badd00ea054d$var$hasOwnProperty = Object.prototype.hasOwnProperty;
    $a97fdf3f34f3143396c5badd00ea054d$var$propIsEnumerable = Object.prototype.propertyIsEnumerable;
    $a97fdf3f34f3143396c5badd00ea054d$exports = $a97fdf3f34f3143396c5badd00ea054d$var$shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = $a97fdf3f34f3143396c5badd00ea054d$var$toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if ($a97fdf3f34f3143396c5badd00ea054d$var$hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if ($a97fdf3f34f3143396c5badd00ea054d$var$getOwnPropertySymbols) {
          symbols = $a97fdf3f34f3143396c5badd00ea054d$var$getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if ($a97fdf3f34f3143396c5badd00ea054d$var$propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
  function $a97fdf3f34f3143396c5badd00ea054d$init() {
    if (!$a97fdf3f34f3143396c5badd00ea054d$executed) {
      $a97fdf3f34f3143396c5badd00ea054d$executed = true;
      $a97fdf3f34f3143396c5badd00ea054d$exec();
    }
    return $a97fdf3f34f3143396c5badd00ea054d$exports;
  }
  // ASSET: node_modules/react/cjs/react.production.min.js
  var $865e6544ee001429c8dc8aa5c2ce45b0$exports, $865e6544ee001429c8dc8aa5c2ce45b0$var$l, $865e6544ee001429c8dc8aa5c2ce45b0$var$n, $865e6544ee001429c8dc8aa5c2ce45b0$var$p, $865e6544ee001429c8dc8aa5c2ce45b0$export$Fragment, $865e6544ee001429c8dc8aa5c2ce45b0$export$StrictMode, $865e6544ee001429c8dc8aa5c2ce45b0$export$Profiler, $865e6544ee001429c8dc8aa5c2ce45b0$var$q, $865e6544ee001429c8dc8aa5c2ce45b0$var$r, $865e6544ee001429c8dc8aa5c2ce45b0$var$t, $865e6544ee001429c8dc8aa5c2ce45b0$export$Suspense, $865e6544ee001429c8dc8aa5c2ce45b0$var$u, $865e6544ee001429c8dc8aa5c2ce45b0$var$v, $865e6544ee001429c8dc8aa5c2ce45b0$var$w, $865e6544ee001429c8dc8aa5c2ce45b0$var$x, $865e6544ee001429c8dc8aa5c2ce45b0$var$A, $865e6544ee001429c8dc8aa5c2ce45b0$var$B, $865e6544ee001429c8dc8aa5c2ce45b0$var$F, $865e6544ee001429c8dc8aa5c2ce45b0$var$G, $865e6544ee001429c8dc8aa5c2ce45b0$var$H, $865e6544ee001429c8dc8aa5c2ce45b0$var$I, $865e6544ee001429c8dc8aa5c2ce45b0$var$M, $865e6544ee001429c8dc8aa5c2ce45b0$var$R, $865e6544ee001429c8dc8aa5c2ce45b0$var$T, $865e6544ee001429c8dc8aa5c2ce45b0$export$Children, $865e6544ee001429c8dc8aa5c2ce45b0$export$Component, $865e6544ee001429c8dc8aa5c2ce45b0$export$PureComponent, $865e6544ee001429c8dc8aa5c2ce45b0$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $865e6544ee001429c8dc8aa5c2ce45b0$export$cloneElement, $865e6544ee001429c8dc8aa5c2ce45b0$export$createContext, $865e6544ee001429c8dc8aa5c2ce45b0$export$createElement, $865e6544ee001429c8dc8aa5c2ce45b0$export$createFactory, $865e6544ee001429c8dc8aa5c2ce45b0$export$createRef, $865e6544ee001429c8dc8aa5c2ce45b0$export$forwardRef, $865e6544ee001429c8dc8aa5c2ce45b0$export$isValidElement, $865e6544ee001429c8dc8aa5c2ce45b0$export$lazy, $865e6544ee001429c8dc8aa5c2ce45b0$export$memo, $865e6544ee001429c8dc8aa5c2ce45b0$export$useCallback, $865e6544ee001429c8dc8aa5c2ce45b0$export$useContext, $865e6544ee001429c8dc8aa5c2ce45b0$export$useDebugValue, $865e6544ee001429c8dc8aa5c2ce45b0$export$useEffect, $865e6544ee001429c8dc8aa5c2ce45b0$export$useImperativeHandle, $865e6544ee001429c8dc8aa5c2ce45b0$export$useLayoutEffect, $865e6544ee001429c8dc8aa5c2ce45b0$export$useMemo, $865e6544ee001429c8dc8aa5c2ce45b0$export$useReducer, $865e6544ee001429c8dc8aa5c2ce45b0$export$useRef, $865e6544ee001429c8dc8aa5c2ce45b0$export$useState, $865e6544ee001429c8dc8aa5c2ce45b0$export$version, $865e6544ee001429c8dc8aa5c2ce45b0$executed = false;
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$y(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $865e6544ee001429c8dc8aa5c2ce45b0$var$x && a[$865e6544ee001429c8dc8aa5c2ce45b0$var$x] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = $865e6544ee001429c8dc8aa5c2ce45b0$var$B;
    this.updater = c || $865e6544ee001429c8dc8aa5c2ce45b0$var$A;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$D() {}
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = $865e6544ee001429c8dc8aa5c2ce45b0$var$B;
    this.updater = c || $865e6544ee001429c8dc8aa5c2ce45b0$var$A;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (null != b) for (e in (void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)) $865e6544ee001429c8dc8aa5c2ce45b0$var$H.call(b, e) && !$865e6544ee001429c8dc8aa5c2ce45b0$var$I.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (1 === g) d.children = c; else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps) for (e in (g = a.defaultProps, g)) void 0 === d[e] && (d[e] = g[e]);
    return {
      $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$n,
      type: a,
      key: k,
      ref: h,
      props: d,
      _owner: $865e6544ee001429c8dc8aa5c2ce45b0$var$G.current
    };
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$K(a, b) {
    return {
      $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$n,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$L(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $865e6544ee001429c8dc8aa5c2ce45b0$var$n;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$N(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $865e6544ee001429c8dc8aa5c2ce45b0$var$escape("" + a.key) : b.toString(36);
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$O(a, b, c, e, d) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0; else switch (k) {
      case "string":
      case "number":
        h = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case $865e6544ee001429c8dc8aa5c2ce45b0$var$n:
          case $865e6544ee001429c8dc8aa5c2ce45b0$var$p:
            h = !0;
        }
    }
    if (h) return (h = a, d = d(h), a = "" === e ? "." + $865e6544ee001429c8dc8aa5c2ce45b0$var$N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace($865e6544ee001429c8dc8aa5c2ce45b0$var$M, "$&/") + "/"), $865e6544ee001429c8dc8aa5c2ce45b0$var$O(d, b, c, "", function (a) {
      return a;
    })) : null != d && ($865e6544ee001429c8dc8aa5c2ce45b0$var$L(d) && (d = $865e6544ee001429c8dc8aa5c2ce45b0$var$K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace($865e6544ee001429c8dc8aa5c2ce45b0$var$M, "$&/") + "/") + a)), b.push(d)), 1);
    h = 0;
    e = "" === e ? "." : e + ":";
    if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + $865e6544ee001429c8dc8aa5c2ce45b0$var$N(k, g);
      h += $865e6544ee001429c8dc8aa5c2ce45b0$var$O(k, b, c, f, d);
    } else if ((f = $865e6544ee001429c8dc8aa5c2ce45b0$var$y(a), "function" === typeof f)) for ((a = f.call(a), g = 0); !(k = a.next()).done; ) (k = k.value, f = e + $865e6544ee001429c8dc8aa5c2ce45b0$var$N(k, g++), h += $865e6544ee001429c8dc8aa5c2ce45b0$var$O(k, b, c, f, d)); else if ("object" === k) throw (b = "" + a, Error($865e6544ee001429c8dc8aa5c2ce45b0$var$z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b)));
    return h;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$P(a, b, c) {
    if (null == a) return a;
    var e = [], d = 0;
    $865e6544ee001429c8dc8aa5c2ce45b0$var$O(a, e, "", "", function (a) {
      return b.call(c, a, d++);
    });
    return e;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$Q(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }
    if (1 === a._status) return a._result;
    throw a._result;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$var$S() {
    var a = $865e6544ee001429c8dc8aa5c2ce45b0$var$R.current;
    if (null === a) throw Error($865e6544ee001429c8dc8aa5c2ce45b0$var$z(321));
    return a;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$exec() {
    $865e6544ee001429c8dc8aa5c2ce45b0$exports = {};
    ($865e6544ee001429c8dc8aa5c2ce45b0$var$l = $a97fdf3f34f3143396c5badd00ea054d$init(), $865e6544ee001429c8dc8aa5c2ce45b0$var$n = 60103, $865e6544ee001429c8dc8aa5c2ce45b0$var$p = 60106);
    $865e6544ee001429c8dc8aa5c2ce45b0$export$Fragment = 60107;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.Fragment = $865e6544ee001429c8dc8aa5c2ce45b0$export$Fragment;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$StrictMode = 60108;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.StrictMode = $865e6544ee001429c8dc8aa5c2ce45b0$export$StrictMode;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$Profiler = 60114;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.Profiler = $865e6544ee001429c8dc8aa5c2ce45b0$export$Profiler;
    ($865e6544ee001429c8dc8aa5c2ce45b0$var$q = 60109, $865e6544ee001429c8dc8aa5c2ce45b0$var$r = 60110, $865e6544ee001429c8dc8aa5c2ce45b0$var$t = 60112);
    $865e6544ee001429c8dc8aa5c2ce45b0$export$Suspense = 60113;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.Suspense = $865e6544ee001429c8dc8aa5c2ce45b0$export$Suspense;
    ($865e6544ee001429c8dc8aa5c2ce45b0$var$u = 60115, $865e6544ee001429c8dc8aa5c2ce45b0$var$v = 60116);
    if ("function" === typeof Symbol && Symbol.for) {
      $865e6544ee001429c8dc8aa5c2ce45b0$var$w = Symbol.for;
      $865e6544ee001429c8dc8aa5c2ce45b0$var$n = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.element");
      $865e6544ee001429c8dc8aa5c2ce45b0$var$p = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.portal");
      $865e6544ee001429c8dc8aa5c2ce45b0$export$Fragment = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.fragment");
      $865e6544ee001429c8dc8aa5c2ce45b0$exports.Fragment = $865e6544ee001429c8dc8aa5c2ce45b0$export$Fragment;
      $865e6544ee001429c8dc8aa5c2ce45b0$export$StrictMode = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.strict_mode");
      $865e6544ee001429c8dc8aa5c2ce45b0$exports.StrictMode = $865e6544ee001429c8dc8aa5c2ce45b0$export$StrictMode;
      $865e6544ee001429c8dc8aa5c2ce45b0$export$Profiler = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.profiler");
      $865e6544ee001429c8dc8aa5c2ce45b0$exports.Profiler = $865e6544ee001429c8dc8aa5c2ce45b0$export$Profiler;
      $865e6544ee001429c8dc8aa5c2ce45b0$var$q = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.provider");
      $865e6544ee001429c8dc8aa5c2ce45b0$var$r = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.context");
      $865e6544ee001429c8dc8aa5c2ce45b0$var$t = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.forward_ref");
      $865e6544ee001429c8dc8aa5c2ce45b0$export$Suspense = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.suspense");
      $865e6544ee001429c8dc8aa5c2ce45b0$exports.Suspense = $865e6544ee001429c8dc8aa5c2ce45b0$export$Suspense;
      $865e6544ee001429c8dc8aa5c2ce45b0$var$u = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.memo");
      $865e6544ee001429c8dc8aa5c2ce45b0$var$v = $865e6544ee001429c8dc8aa5c2ce45b0$var$w("react.lazy");
    }
    $865e6544ee001429c8dc8aa5c2ce45b0$var$x = "function" === typeof Symbol && Symbol.iterator;
    ($865e6544ee001429c8dc8aa5c2ce45b0$var$A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    }, $865e6544ee001429c8dc8aa5c2ce45b0$var$B = {});
    $865e6544ee001429c8dc8aa5c2ce45b0$var$C.prototype.isReactComponent = {};
    $865e6544ee001429c8dc8aa5c2ce45b0$var$C.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error($865e6544ee001429c8dc8aa5c2ce45b0$var$z(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$var$C.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$var$D.prototype = $865e6544ee001429c8dc8aa5c2ce45b0$var$C.prototype;
    $865e6544ee001429c8dc8aa5c2ce45b0$var$F = $865e6544ee001429c8dc8aa5c2ce45b0$var$E.prototype = new $865e6544ee001429c8dc8aa5c2ce45b0$var$D();
    $865e6544ee001429c8dc8aa5c2ce45b0$var$F.constructor = $865e6544ee001429c8dc8aa5c2ce45b0$var$E;
    $865e6544ee001429c8dc8aa5c2ce45b0$var$l($865e6544ee001429c8dc8aa5c2ce45b0$var$F, $865e6544ee001429c8dc8aa5c2ce45b0$var$C.prototype);
    $865e6544ee001429c8dc8aa5c2ce45b0$var$F.isPureReactComponent = !0;
    ($865e6544ee001429c8dc8aa5c2ce45b0$var$G = {
      current: null
    }, $865e6544ee001429c8dc8aa5c2ce45b0$var$H = Object.prototype.hasOwnProperty, $865e6544ee001429c8dc8aa5c2ce45b0$var$I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    });
    $865e6544ee001429c8dc8aa5c2ce45b0$var$M = /\/+/g;
    $865e6544ee001429c8dc8aa5c2ce45b0$var$R = {
      current: null
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$var$T = {
      ReactCurrentDispatcher: $865e6544ee001429c8dc8aa5c2ce45b0$var$R,
      ReactCurrentBatchConfig: {
        transition: 0
      },
      ReactCurrentOwner: $865e6544ee001429c8dc8aa5c2ce45b0$var$G,
      IsSomeRendererActing: {
        current: !1
      },
      assign: $865e6544ee001429c8dc8aa5c2ce45b0$var$l
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$export$Children = {
      map: $865e6544ee001429c8dc8aa5c2ce45b0$var$P,
      forEach: function (a, b, c) {
        $865e6544ee001429c8dc8aa5c2ce45b0$var$P(a, function () {
          b.apply(this, arguments);
        }, c);
      },
      count: function (a) {
        var b = 0;
        $865e6544ee001429c8dc8aa5c2ce45b0$var$P(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return $865e6544ee001429c8dc8aa5c2ce45b0$var$P(a, function (a) {
          return a;
        }) || [];
      },
      only: function (a) {
        if (!$865e6544ee001429c8dc8aa5c2ce45b0$var$L(a)) throw Error($865e6544ee001429c8dc8aa5c2ce45b0$var$z(143));
        return a;
      }
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.Children = $865e6544ee001429c8dc8aa5c2ce45b0$export$Children;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$Component = $865e6544ee001429c8dc8aa5c2ce45b0$var$C;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.Component = $865e6544ee001429c8dc8aa5c2ce45b0$export$Component;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$PureComponent = $865e6544ee001429c8dc8aa5c2ce45b0$var$E;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.PureComponent = $865e6544ee001429c8dc8aa5c2ce45b0$export$PureComponent;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $865e6544ee001429c8dc8aa5c2ce45b0$var$T;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $865e6544ee001429c8dc8aa5c2ce45b0$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$cloneElement = function (a, b, c) {
      if (null === a || void 0 === a) throw Error($865e6544ee001429c8dc8aa5c2ce45b0$var$z(267, a));
      var e = $865e6544ee001429c8dc8aa5c2ce45b0$var$l({}, a.props), d = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $865e6544ee001429c8dc8aa5c2ce45b0$var$G.current);
        void 0 !== b.key && (d = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) $865e6544ee001429c8dc8aa5c2ce45b0$var$H.call(b, f) && !$865e6544ee001429c8dc8aa5c2ce45b0$var$I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) e.children = c; else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$n,
        type: a.type,
        key: d,
        ref: k,
        props: e,
        _owner: h
      };
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.cloneElement = $865e6544ee001429c8dc8aa5c2ce45b0$export$cloneElement;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$createContext = function (a, b) {
      void 0 === b && (b = null);
      a = {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$r,
        _calculateChangedBits: b,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      a.Provider = {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$q,
        _context: a
      };
      return a.Consumer = a;
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.createContext = $865e6544ee001429c8dc8aa5c2ce45b0$export$createContext;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$createElement = $865e6544ee001429c8dc8aa5c2ce45b0$var$J;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.createElement = $865e6544ee001429c8dc8aa5c2ce45b0$export$createElement;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$createFactory = function (a) {
      var b = $865e6544ee001429c8dc8aa5c2ce45b0$var$J.bind(null, a);
      b.type = a;
      return b;
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.createFactory = $865e6544ee001429c8dc8aa5c2ce45b0$export$createFactory;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$createRef = function () {
      return {
        current: null
      };
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.createRef = $865e6544ee001429c8dc8aa5c2ce45b0$export$createRef;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$forwardRef = function (a) {
      return {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$t,
        render: a
      };
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.forwardRef = $865e6544ee001429c8dc8aa5c2ce45b0$export$forwardRef;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$isValidElement = $865e6544ee001429c8dc8aa5c2ce45b0$var$L;
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.isValidElement = $865e6544ee001429c8dc8aa5c2ce45b0$export$isValidElement;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$lazy = function (a) {
      return {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$v,
        _payload: {
          _status: -1,
          _result: a
        },
        _init: $865e6544ee001429c8dc8aa5c2ce45b0$var$Q
      };
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.lazy = $865e6544ee001429c8dc8aa5c2ce45b0$export$lazy;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$memo = function (a, b) {
      return {
        $$typeof: $865e6544ee001429c8dc8aa5c2ce45b0$var$u,
        type: a,
        compare: void 0 === b ? null : b
      };
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.memo = $865e6544ee001429c8dc8aa5c2ce45b0$export$memo;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useCallback = function (a, b) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useCallback(a, b);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useCallback = $865e6544ee001429c8dc8aa5c2ce45b0$export$useCallback;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useContext = function (a, b) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useContext(a, b);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useContext = $865e6544ee001429c8dc8aa5c2ce45b0$export$useContext;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useDebugValue = function () {};
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useDebugValue = $865e6544ee001429c8dc8aa5c2ce45b0$export$useDebugValue;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useEffect = function (a, b) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useEffect(a, b);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useEffect = $865e6544ee001429c8dc8aa5c2ce45b0$export$useEffect;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useImperativeHandle = function (a, b, c) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useImperativeHandle(a, b, c);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useImperativeHandle = $865e6544ee001429c8dc8aa5c2ce45b0$export$useImperativeHandle;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useLayoutEffect = function (a, b) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useLayoutEffect(a, b);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useLayoutEffect = $865e6544ee001429c8dc8aa5c2ce45b0$export$useLayoutEffect;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useMemo = function (a, b) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useMemo(a, b);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useMemo = $865e6544ee001429c8dc8aa5c2ce45b0$export$useMemo;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useReducer = function (a, b, c) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useReducer(a, b, c);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useReducer = $865e6544ee001429c8dc8aa5c2ce45b0$export$useReducer;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useRef = function (a) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useRef(a);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useRef = $865e6544ee001429c8dc8aa5c2ce45b0$export$useRef;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$useState = function (a) {
      return $865e6544ee001429c8dc8aa5c2ce45b0$var$S().useState(a);
    };
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.useState = $865e6544ee001429c8dc8aa5c2ce45b0$export$useState;
    $865e6544ee001429c8dc8aa5c2ce45b0$export$version = "17.0.1";
    $865e6544ee001429c8dc8aa5c2ce45b0$exports.version = $865e6544ee001429c8dc8aa5c2ce45b0$export$version;
  }
  function $865e6544ee001429c8dc8aa5c2ce45b0$init() {
    if (!$865e6544ee001429c8dc8aa5c2ce45b0$executed) {
      $865e6544ee001429c8dc8aa5c2ce45b0$executed = true;
      $865e6544ee001429c8dc8aa5c2ce45b0$exec();
    }
    return $865e6544ee001429c8dc8aa5c2ce45b0$exports;
  }
  // ASSET: node_modules/react/index.js
  var $6cebeac97b4ebedf27e6f4c716f2d918$exports, $6cebeac97b4ebedf27e6f4c716f2d918$$interop$default, $6cebeac97b4ebedf27e6f4c716f2d918$executed = false;
  function $6cebeac97b4ebedf27e6f4c716f2d918$exec() {
    $6cebeac97b4ebedf27e6f4c716f2d918$exports = {};
    if ("production" === 'production') {
      $6cebeac97b4ebedf27e6f4c716f2d918$exports = $865e6544ee001429c8dc8aa5c2ce45b0$init();
    } else {
      $6cebeac97b4ebedf27e6f4c716f2d918$exports = require('./cjs/react.development.js');
    }
    $6cebeac97b4ebedf27e6f4c716f2d918$$interop$default = /*@__PURE__*/$parcel$interopDefault($6cebeac97b4ebedf27e6f4c716f2d918$exports);
  }
  function $6cebeac97b4ebedf27e6f4c716f2d918$init() {
    if (!$6cebeac97b4ebedf27e6f4c716f2d918$executed) {
      $6cebeac97b4ebedf27e6f4c716f2d918$executed = true;
      $6cebeac97b4ebedf27e6f4c716f2d918$exec();
    }
    return $6cebeac97b4ebedf27e6f4c716f2d918$exports;
  }
  $6cebeac97b4ebedf27e6f4c716f2d918$init();
  // ASSET: node_modules/scheduler/cjs/scheduler.production.min.js
  var $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_forceFrameRate, $a5b5401efc0645007ee33c3f0afcf771$exports, $a5b5401efc0645007ee33c3f0afcf771$var$f, $a5b5401efc0645007ee33c3f0afcf771$var$g, $a5b5401efc0645007ee33c3f0afcf771$var$h, $a5b5401efc0645007ee33c3f0afcf771$var$k, $a5b5401efc0645007ee33c3f0afcf771$var$l, $a5b5401efc0645007ee33c3f0afcf771$var$p, $a5b5401efc0645007ee33c3f0afcf771$var$q, $a5b5401efc0645007ee33c3f0afcf771$var$t, $a5b5401efc0645007ee33c3f0afcf771$var$u, $a5b5401efc0645007ee33c3f0afcf771$var$w, $a5b5401efc0645007ee33c3f0afcf771$var$x, $a5b5401efc0645007ee33c3f0afcf771$var$y, $a5b5401efc0645007ee33c3f0afcf771$var$z, $a5b5401efc0645007ee33c3f0afcf771$var$A, $a5b5401efc0645007ee33c3f0afcf771$var$B, $a5b5401efc0645007ee33c3f0afcf771$var$C, $a5b5401efc0645007ee33c3f0afcf771$var$D, $a5b5401efc0645007ee33c3f0afcf771$var$E, $a5b5401efc0645007ee33c3f0afcf771$var$F, $a5b5401efc0645007ee33c3f0afcf771$var$G, $a5b5401efc0645007ee33c3f0afcf771$var$L, $a5b5401efc0645007ee33c3f0afcf771$var$M, $a5b5401efc0645007ee33c3f0afcf771$var$N, $a5b5401efc0645007ee33c3f0afcf771$var$O, $a5b5401efc0645007ee33c3f0afcf771$var$P, $a5b5401efc0645007ee33c3f0afcf771$var$Q, $a5b5401efc0645007ee33c3f0afcf771$var$R, $a5b5401efc0645007ee33c3f0afcf771$var$S, $a5b5401efc0645007ee33c3f0afcf771$var$W, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_IdlePriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_ImmediatePriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_LowPriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_NormalPriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_Profiling, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_UserBlockingPriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_cancelCallback, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_continueExecution, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getCurrentPriorityLevel, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getFirstCallbackNode, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_next, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_pauseExecution, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_requestPaint, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_runWithPriority, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_scheduleCallback, $a5b5401efc0645007ee33c3f0afcf771$export$unstable_wrapCallback, $a5b5401efc0645007ee33c3f0afcf771$executed = false;
  function $a5b5401efc0645007ee33c3f0afcf771$var$H(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; ; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (void 0 !== e && 0 < $a5b5401efc0645007ee33c3f0afcf771$var$I(e, b)) (a[d] = b, a[c] = e, c = d); else break a;
    }
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$J(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$K(a) {
    var b = a[0];
    if (void 0 !== b) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length; d < e; ) {
          var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
          if (void 0 !== n && 0 > $a5b5401efc0645007ee33c3f0afcf771$var$I(n, c)) void 0 !== r && 0 > $a5b5401efc0645007ee33c3f0afcf771$var$I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m); else if (void 0 !== r && 0 > $a5b5401efc0645007ee33c3f0afcf771$var$I(r, c)) (a[d] = r, a[v] = c, d = v); else break a;
        }
      }
      return b;
    }
    return null;
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$I(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$T(a) {
    for (var b = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$M); null !== b; ) {
      if (null === b.callback) $a5b5401efc0645007ee33c3f0afcf771$var$K($a5b5401efc0645007ee33c3f0afcf771$var$M); else if (b.startTime <= a) ($a5b5401efc0645007ee33c3f0afcf771$var$K($a5b5401efc0645007ee33c3f0afcf771$var$M), b.sortIndex = b.expirationTime, $a5b5401efc0645007ee33c3f0afcf771$var$H($a5b5401efc0645007ee33c3f0afcf771$var$L, b)); else break;
      b = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$M);
    }
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$U(a) {
    $a5b5401efc0645007ee33c3f0afcf771$var$S = !1;
    $a5b5401efc0645007ee33c3f0afcf771$var$T(a);
    if (!$a5b5401efc0645007ee33c3f0afcf771$var$R) if (null !== $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L)) ($a5b5401efc0645007ee33c3f0afcf771$var$R = !0, $a5b5401efc0645007ee33c3f0afcf771$var$f($a5b5401efc0645007ee33c3f0afcf771$var$V)); else {
      var b = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$M);
      null !== b && $a5b5401efc0645007ee33c3f0afcf771$var$g($a5b5401efc0645007ee33c3f0afcf771$var$U, b.startTime - a);
    }
  }
  function $a5b5401efc0645007ee33c3f0afcf771$var$V(a, b) {
    $a5b5401efc0645007ee33c3f0afcf771$var$R = !1;
    $a5b5401efc0645007ee33c3f0afcf771$var$S && ($a5b5401efc0645007ee33c3f0afcf771$var$S = !1, $a5b5401efc0645007ee33c3f0afcf771$var$h());
    $a5b5401efc0645007ee33c3f0afcf771$var$Q = !0;
    var c = $a5b5401efc0645007ee33c3f0afcf771$var$P;
    try {
      $a5b5401efc0645007ee33c3f0afcf771$var$T(b);
      for ($a5b5401efc0645007ee33c3f0afcf771$var$O = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L); null !== $a5b5401efc0645007ee33c3f0afcf771$var$O && (!($a5b5401efc0645007ee33c3f0afcf771$var$O.expirationTime > b) || a && !$a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield()); ) {
        var d = $a5b5401efc0645007ee33c3f0afcf771$var$O.callback;
        if ("function" === typeof d) {
          $a5b5401efc0645007ee33c3f0afcf771$var$O.callback = null;
          $a5b5401efc0645007ee33c3f0afcf771$var$P = $a5b5401efc0645007ee33c3f0afcf771$var$O.priorityLevel;
          var e = d($a5b5401efc0645007ee33c3f0afcf771$var$O.expirationTime <= b);
          b = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now();
          "function" === typeof e ? $a5b5401efc0645007ee33c3f0afcf771$var$O.callback = e : $a5b5401efc0645007ee33c3f0afcf771$var$O === $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L) && $a5b5401efc0645007ee33c3f0afcf771$var$K($a5b5401efc0645007ee33c3f0afcf771$var$L);
          $a5b5401efc0645007ee33c3f0afcf771$var$T(b);
        } else $a5b5401efc0645007ee33c3f0afcf771$var$K($a5b5401efc0645007ee33c3f0afcf771$var$L);
        $a5b5401efc0645007ee33c3f0afcf771$var$O = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L);
      }
      if (null !== $a5b5401efc0645007ee33c3f0afcf771$var$O) var m = !0; else {
        var n = $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$M);
        null !== n && $a5b5401efc0645007ee33c3f0afcf771$var$g($a5b5401efc0645007ee33c3f0afcf771$var$U, n.startTime - b);
        m = !1;
      }
      return m;
    } finally {
      ($a5b5401efc0645007ee33c3f0afcf771$var$O = null, $a5b5401efc0645007ee33c3f0afcf771$var$P = c, $a5b5401efc0645007ee33c3f0afcf771$var$Q = !1);
    }
  }
  function $a5b5401efc0645007ee33c3f0afcf771$exec() {
    $a5b5401efc0645007ee33c3f0afcf771$exports = {};
    if ("object" === typeof performance && "function" === typeof performance.now) {
      $a5b5401efc0645007ee33c3f0afcf771$var$l = performance;
      $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now = function () {
        return $a5b5401efc0645007ee33c3f0afcf771$var$l.now();
      };
      $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_now = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now;
    } else {
      ($a5b5401efc0645007ee33c3f0afcf771$var$p = Date, $a5b5401efc0645007ee33c3f0afcf771$var$q = $a5b5401efc0645007ee33c3f0afcf771$var$p.now());
      $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now = function () {
        return $a5b5401efc0645007ee33c3f0afcf771$var$p.now() - $a5b5401efc0645007ee33c3f0afcf771$var$q;
      };
      $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_now = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now;
    }
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
      ($a5b5401efc0645007ee33c3f0afcf771$var$t = null, $a5b5401efc0645007ee33c3f0afcf771$var$u = null, $a5b5401efc0645007ee33c3f0afcf771$var$w = function () {
        if (null !== $a5b5401efc0645007ee33c3f0afcf771$var$t) try {
          var a = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now();
          $a5b5401efc0645007ee33c3f0afcf771$var$t(!0, a);
          $a5b5401efc0645007ee33c3f0afcf771$var$t = null;
        } catch (b) {
          throw (setTimeout($a5b5401efc0645007ee33c3f0afcf771$var$w, 0), b);
        }
      });
      $a5b5401efc0645007ee33c3f0afcf771$var$f = function (a) {
        null !== $a5b5401efc0645007ee33c3f0afcf771$var$t ? setTimeout($a5b5401efc0645007ee33c3f0afcf771$var$f, 0, a) : ($a5b5401efc0645007ee33c3f0afcf771$var$t = a, setTimeout($a5b5401efc0645007ee33c3f0afcf771$var$w, 0));
      };
      $a5b5401efc0645007ee33c3f0afcf771$var$g = function (a, b) {
        $a5b5401efc0645007ee33c3f0afcf771$var$u = setTimeout(a, b);
      };
      $a5b5401efc0645007ee33c3f0afcf771$var$h = function () {
        clearTimeout($a5b5401efc0645007ee33c3f0afcf771$var$u);
      };
      $a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield = function () {
        return !1;
      };
      $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_shouldYield = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield;
      $a5b5401efc0645007ee33c3f0afcf771$var$k = ($a5b5401efc0645007ee33c3f0afcf771$export$unstable_forceFrameRate = function () {}, $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_forceFrameRate = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_forceFrameRate);
    } else {
      ($a5b5401efc0645007ee33c3f0afcf771$var$x = window.setTimeout, $a5b5401efc0645007ee33c3f0afcf771$var$y = window.clearTimeout);
      if ("undefined" !== typeof console) {
        $a5b5401efc0645007ee33c3f0afcf771$var$z = window.cancelAnimationFrame;
        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        "function" !== typeof $a5b5401efc0645007ee33c3f0afcf771$var$z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      ($a5b5401efc0645007ee33c3f0afcf771$var$A = !1, $a5b5401efc0645007ee33c3f0afcf771$var$B = null, $a5b5401efc0645007ee33c3f0afcf771$var$C = -1, $a5b5401efc0645007ee33c3f0afcf771$var$D = 5, $a5b5401efc0645007ee33c3f0afcf771$var$E = 0);
      $a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield = function () {
        return $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now() >= $a5b5401efc0645007ee33c3f0afcf771$var$E;
      };
      $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_shouldYield = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_shouldYield;
      $a5b5401efc0645007ee33c3f0afcf771$var$k = function () {};
      $a5b5401efc0645007ee33c3f0afcf771$export$unstable_forceFrameRate = function (a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $a5b5401efc0645007ee33c3f0afcf771$var$D = 0 < a ? Math.floor(1E3 / a) : 5;
      };
      $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_forceFrameRate = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_forceFrameRate;
      ($a5b5401efc0645007ee33c3f0afcf771$var$F = new MessageChannel(), $a5b5401efc0645007ee33c3f0afcf771$var$G = $a5b5401efc0645007ee33c3f0afcf771$var$F.port2);
      $a5b5401efc0645007ee33c3f0afcf771$var$F.port1.onmessage = function () {
        if (null !== $a5b5401efc0645007ee33c3f0afcf771$var$B) {
          var a = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now();
          $a5b5401efc0645007ee33c3f0afcf771$var$E = a + $a5b5401efc0645007ee33c3f0afcf771$var$D;
          try {
            $a5b5401efc0645007ee33c3f0afcf771$var$B(!0, a) ? $a5b5401efc0645007ee33c3f0afcf771$var$G.postMessage(null) : ($a5b5401efc0645007ee33c3f0afcf771$var$A = !1, $a5b5401efc0645007ee33c3f0afcf771$var$B = null);
          } catch (b) {
            throw ($a5b5401efc0645007ee33c3f0afcf771$var$G.postMessage(null), b);
          }
        } else $a5b5401efc0645007ee33c3f0afcf771$var$A = !1;
      };
      $a5b5401efc0645007ee33c3f0afcf771$var$f = function (a) {
        $a5b5401efc0645007ee33c3f0afcf771$var$B = a;
        $a5b5401efc0645007ee33c3f0afcf771$var$A || ($a5b5401efc0645007ee33c3f0afcf771$var$A = !0, $a5b5401efc0645007ee33c3f0afcf771$var$G.postMessage(null));
      };
      $a5b5401efc0645007ee33c3f0afcf771$var$g = function (a, b) {
        $a5b5401efc0645007ee33c3f0afcf771$var$C = $a5b5401efc0645007ee33c3f0afcf771$var$x(function () {
          a($a5b5401efc0645007ee33c3f0afcf771$export$unstable_now());
        }, b);
      };
      $a5b5401efc0645007ee33c3f0afcf771$var$h = function () {
        $a5b5401efc0645007ee33c3f0afcf771$var$y($a5b5401efc0645007ee33c3f0afcf771$var$C);
        $a5b5401efc0645007ee33c3f0afcf771$var$C = -1;
      };
    }
    ($a5b5401efc0645007ee33c3f0afcf771$var$L = [], $a5b5401efc0645007ee33c3f0afcf771$var$M = [], $a5b5401efc0645007ee33c3f0afcf771$var$N = 1, $a5b5401efc0645007ee33c3f0afcf771$var$O = null, $a5b5401efc0645007ee33c3f0afcf771$var$P = 3, $a5b5401efc0645007ee33c3f0afcf771$var$Q = !1, $a5b5401efc0645007ee33c3f0afcf771$var$R = !1, $a5b5401efc0645007ee33c3f0afcf771$var$S = !1);
    $a5b5401efc0645007ee33c3f0afcf771$var$W = $a5b5401efc0645007ee33c3f0afcf771$var$k;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_IdlePriority = 5;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_IdlePriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_IdlePriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_ImmediatePriority = 1;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_ImmediatePriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_ImmediatePriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_LowPriority = 4;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_LowPriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_LowPriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_NormalPriority = 3;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_NormalPriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_NormalPriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_Profiling = null;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_Profiling = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_Profiling;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_UserBlockingPriority = 2;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_UserBlockingPriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_UserBlockingPriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_cancelCallback = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_cancelCallback;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_continueExecution = function () {
      $a5b5401efc0645007ee33c3f0afcf771$var$R || $a5b5401efc0645007ee33c3f0afcf771$var$Q || ($a5b5401efc0645007ee33c3f0afcf771$var$R = !0, $a5b5401efc0645007ee33c3f0afcf771$var$f($a5b5401efc0645007ee33c3f0afcf771$var$V));
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_continueExecution = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_continueExecution;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getCurrentPriorityLevel = function () {
      return $a5b5401efc0645007ee33c3f0afcf771$var$P;
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_getCurrentPriorityLevel = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getCurrentPriorityLevel;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getFirstCallbackNode = function () {
      return $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L);
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_getFirstCallbackNode = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_getFirstCallbackNode;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_next = function (a) {
      switch ($a5b5401efc0645007ee33c3f0afcf771$var$P) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = $a5b5401efc0645007ee33c3f0afcf771$var$P;
      }
      var c = $a5b5401efc0645007ee33c3f0afcf771$var$P;
      $a5b5401efc0645007ee33c3f0afcf771$var$P = b;
      try {
        return a();
      } finally {
        $a5b5401efc0645007ee33c3f0afcf771$var$P = c;
      }
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_next = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_next;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_pauseExecution = function () {};
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_pauseExecution = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_pauseExecution;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_requestPaint = $a5b5401efc0645007ee33c3f0afcf771$var$W;
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_requestPaint = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_requestPaint;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_runWithPriority = function (a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = $a5b5401efc0645007ee33c3f0afcf771$var$P;
      $a5b5401efc0645007ee33c3f0afcf771$var$P = a;
      try {
        return b();
      } finally {
        $a5b5401efc0645007ee33c3f0afcf771$var$P = c;
      }
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_runWithPriority = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_runWithPriority;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_scheduleCallback = function (a, b, c) {
      var d = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1E4;
          break;
        default:
          e = 5E3;
      }
      e = c + e;
      a = {
        id: $a5b5401efc0645007ee33c3f0afcf771$var$N++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
      };
      c > d ? (a.sortIndex = c, $a5b5401efc0645007ee33c3f0afcf771$var$H($a5b5401efc0645007ee33c3f0afcf771$var$M, a), null === $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$L) && a === $a5b5401efc0645007ee33c3f0afcf771$var$J($a5b5401efc0645007ee33c3f0afcf771$var$M) && ($a5b5401efc0645007ee33c3f0afcf771$var$S ? $a5b5401efc0645007ee33c3f0afcf771$var$h() : $a5b5401efc0645007ee33c3f0afcf771$var$S = !0, $a5b5401efc0645007ee33c3f0afcf771$var$g($a5b5401efc0645007ee33c3f0afcf771$var$U, c - d))) : (a.sortIndex = e, $a5b5401efc0645007ee33c3f0afcf771$var$H($a5b5401efc0645007ee33c3f0afcf771$var$L, a), $a5b5401efc0645007ee33c3f0afcf771$var$R || $a5b5401efc0645007ee33c3f0afcf771$var$Q || ($a5b5401efc0645007ee33c3f0afcf771$var$R = !0, $a5b5401efc0645007ee33c3f0afcf771$var$f($a5b5401efc0645007ee33c3f0afcf771$var$V)));
      return a;
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_scheduleCallback = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_scheduleCallback;
    $a5b5401efc0645007ee33c3f0afcf771$export$unstable_wrapCallback = function (a) {
      var b = $a5b5401efc0645007ee33c3f0afcf771$var$P;
      return function () {
        var c = $a5b5401efc0645007ee33c3f0afcf771$var$P;
        $a5b5401efc0645007ee33c3f0afcf771$var$P = b;
        try {
          return a.apply(this, arguments);
        } finally {
          $a5b5401efc0645007ee33c3f0afcf771$var$P = c;
        }
      };
    };
    $a5b5401efc0645007ee33c3f0afcf771$exports.unstable_wrapCallback = $a5b5401efc0645007ee33c3f0afcf771$export$unstable_wrapCallback;
  }
  function $a5b5401efc0645007ee33c3f0afcf771$init() {
    if (!$a5b5401efc0645007ee33c3f0afcf771$executed) {
      $a5b5401efc0645007ee33c3f0afcf771$executed = true;
      $a5b5401efc0645007ee33c3f0afcf771$exec();
    }
    return $a5b5401efc0645007ee33c3f0afcf771$exports;
  }
  // ASSET: node_modules/scheduler/index.js
  var $e7b0987460780cecc7357948dd79a996$exports, $e7b0987460780cecc7357948dd79a996$executed = false;
  function $e7b0987460780cecc7357948dd79a996$exec() {
    $e7b0987460780cecc7357948dd79a996$exports = {};
    if ("production" === 'production') {
      $e7b0987460780cecc7357948dd79a996$exports = $a5b5401efc0645007ee33c3f0afcf771$init();
    } else {
      $e7b0987460780cecc7357948dd79a996$exports = require('./cjs/scheduler.development.js');
    }
  }
  function $e7b0987460780cecc7357948dd79a996$init() {
    if (!$e7b0987460780cecc7357948dd79a996$executed) {
      $e7b0987460780cecc7357948dd79a996$executed = true;
      $e7b0987460780cecc7357948dd79a996$exec();
    }
    return $e7b0987460780cecc7357948dd79a996$exports;
  }
  // ASSET: node_modules/react-dom/cjs/react-dom.production.min.js
  var $0fe3ed5fa0b6906a4118024a9033485f$exports, $0fe3ed5fa0b6906a4118024a9033485f$var$aa, $0fe3ed5fa0b6906a4118024a9033485f$var$m, $0fe3ed5fa0b6906a4118024a9033485f$var$ba, $0fe3ed5fa0b6906a4118024a9033485f$var$ca, $0fe3ed5fa0b6906a4118024a9033485f$var$fa, $0fe3ed5fa0b6906a4118024a9033485f$var$ha, $0fe3ed5fa0b6906a4118024a9033485f$var$ia, $0fe3ed5fa0b6906a4118024a9033485f$var$ja, $0fe3ed5fa0b6906a4118024a9033485f$var$ka, $0fe3ed5fa0b6906a4118024a9033485f$var$D, $0fe3ed5fa0b6906a4118024a9033485f$var$oa, $0fe3ed5fa0b6906a4118024a9033485f$var$ra, $0fe3ed5fa0b6906a4118024a9033485f$var$sa, $0fe3ed5fa0b6906a4118024a9033485f$var$ta, $0fe3ed5fa0b6906a4118024a9033485f$var$ua, $0fe3ed5fa0b6906a4118024a9033485f$var$wa, $0fe3ed5fa0b6906a4118024a9033485f$var$xa, $0fe3ed5fa0b6906a4118024a9033485f$var$ya, $0fe3ed5fa0b6906a4118024a9033485f$var$za, $0fe3ed5fa0b6906a4118024a9033485f$var$Aa, $0fe3ed5fa0b6906a4118024a9033485f$var$Ba, $0fe3ed5fa0b6906a4118024a9033485f$var$Ca, $0fe3ed5fa0b6906a4118024a9033485f$var$Da, $0fe3ed5fa0b6906a4118024a9033485f$var$Ea, $0fe3ed5fa0b6906a4118024a9033485f$var$Fa, $0fe3ed5fa0b6906a4118024a9033485f$var$Ga, $0fe3ed5fa0b6906a4118024a9033485f$var$Ha, $0fe3ed5fa0b6906a4118024a9033485f$var$Ia, $0fe3ed5fa0b6906a4118024a9033485f$var$Ja, $0fe3ed5fa0b6906a4118024a9033485f$var$E, $0fe3ed5fa0b6906a4118024a9033485f$var$Ka, $0fe3ed5fa0b6906a4118024a9033485f$var$Ma, $0fe3ed5fa0b6906a4118024a9033485f$var$Oa, $0fe3ed5fa0b6906a4118024a9033485f$var$kb, $0fe3ed5fa0b6906a4118024a9033485f$var$nb, $0fe3ed5fa0b6906a4118024a9033485f$var$ob, $0fe3ed5fa0b6906a4118024a9033485f$var$qb, $0fe3ed5fa0b6906a4118024a9033485f$var$rb, $0fe3ed5fa0b6906a4118024a9033485f$var$ub, $0fe3ed5fa0b6906a4118024a9033485f$var$yb, $0fe3ed5fa0b6906a4118024a9033485f$var$zb, $0fe3ed5fa0b6906a4118024a9033485f$var$Ab, $0fe3ed5fa0b6906a4118024a9033485f$var$Jb, $0fe3ed5fa0b6906a4118024a9033485f$var$Kb, $0fe3ed5fa0b6906a4118024a9033485f$var$Lb, $0fe3ed5fa0b6906a4118024a9033485f$var$Pb, $0fe3ed5fa0b6906a4118024a9033485f$var$Qb, $0fe3ed5fa0b6906a4118024a9033485f$var$Sb, $0fe3ed5fa0b6906a4118024a9033485f$var$Tb, $0fe3ed5fa0b6906a4118024a9033485f$var$Ub, $0fe3ed5fa0b6906a4118024a9033485f$var$Vb, $0fe3ed5fa0b6906a4118024a9033485f$var$Wb, $0fe3ed5fa0b6906a4118024a9033485f$var$ec, $0fe3ed5fa0b6906a4118024a9033485f$var$fc, $0fe3ed5fa0b6906a4118024a9033485f$var$gc, $0fe3ed5fa0b6906a4118024a9033485f$var$hc, $0fe3ed5fa0b6906a4118024a9033485f$var$ic, $0fe3ed5fa0b6906a4118024a9033485f$var$jc, $0fe3ed5fa0b6906a4118024a9033485f$var$kc, $0fe3ed5fa0b6906a4118024a9033485f$var$lc, $0fe3ed5fa0b6906a4118024a9033485f$var$mc, $0fe3ed5fa0b6906a4118024a9033485f$var$nc, $0fe3ed5fa0b6906a4118024a9033485f$var$oc, $0fe3ed5fa0b6906a4118024a9033485f$var$pc, $0fe3ed5fa0b6906a4118024a9033485f$var$qc, $0fe3ed5fa0b6906a4118024a9033485f$var$Ec, $0fe3ed5fa0b6906a4118024a9033485f$var$Fc, $0fe3ed5fa0b6906a4118024a9033485f$var$Gc, $0fe3ed5fa0b6906a4118024a9033485f$var$Ic, $0fe3ed5fa0b6906a4118024a9033485f$var$Jc, $0fe3ed5fa0b6906a4118024a9033485f$var$Kc, $0fe3ed5fa0b6906a4118024a9033485f$var$Lc, $0fe3ed5fa0b6906a4118024a9033485f$var$Mc, $0fe3ed5fa0b6906a4118024a9033485f$var$Nc, $0fe3ed5fa0b6906a4118024a9033485f$var$Oc, $0fe3ed5fa0b6906a4118024a9033485f$var$Qc, $0fe3ed5fa0b6906a4118024a9033485f$var$F, $0fe3ed5fa0b6906a4118024a9033485f$var$Vc, $0fe3ed5fa0b6906a4118024a9033485f$var$bd, $0fe3ed5fa0b6906a4118024a9033485f$var$cd, $0fe3ed5fa0b6906a4118024a9033485f$var$dd, $0fe3ed5fa0b6906a4118024a9033485f$var$ed, $0fe3ed5fa0b6906a4118024a9033485f$var$fd, $0fe3ed5fa0b6906a4118024a9033485f$var$kd, $0fe3ed5fa0b6906a4118024a9033485f$var$ld, $0fe3ed5fa0b6906a4118024a9033485f$var$md, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, $0fe3ed5fa0b6906a4118024a9033485f$var$td, $0fe3ed5fa0b6906a4118024a9033485f$var$ud, $0fe3ed5fa0b6906a4118024a9033485f$var$vd, $0fe3ed5fa0b6906a4118024a9033485f$var$wd, $0fe3ed5fa0b6906a4118024a9033485f$var$xd, $0fe3ed5fa0b6906a4118024a9033485f$var$yd, $0fe3ed5fa0b6906a4118024a9033485f$var$Ad, $0fe3ed5fa0b6906a4118024a9033485f$var$Bd, $0fe3ed5fa0b6906a4118024a9033485f$var$Cd, $0fe3ed5fa0b6906a4118024a9033485f$var$Dd, $0fe3ed5fa0b6906a4118024a9033485f$var$Ed, $0fe3ed5fa0b6906a4118024a9033485f$var$Fd, $0fe3ed5fa0b6906a4118024a9033485f$var$Gd, $0fe3ed5fa0b6906a4118024a9033485f$var$Hd, $0fe3ed5fa0b6906a4118024a9033485f$var$Id, $0fe3ed5fa0b6906a4118024a9033485f$var$Jd, $0fe3ed5fa0b6906a4118024a9033485f$var$Kd, $0fe3ed5fa0b6906a4118024a9033485f$var$Ld, $0fe3ed5fa0b6906a4118024a9033485f$var$Md, $0fe3ed5fa0b6906a4118024a9033485f$var$Nd, $0fe3ed5fa0b6906a4118024a9033485f$var$Od, $0fe3ed5fa0b6906a4118024a9033485f$var$Qd, $0fe3ed5fa0b6906a4118024a9033485f$var$Rd, $0fe3ed5fa0b6906a4118024a9033485f$var$Sd, $0fe3ed5fa0b6906a4118024a9033485f$var$Td, $0fe3ed5fa0b6906a4118024a9033485f$var$Ud, $0fe3ed5fa0b6906a4118024a9033485f$var$Vd, $0fe3ed5fa0b6906a4118024a9033485f$var$Wd, $0fe3ed5fa0b6906a4118024a9033485f$var$Xd, $0fe3ed5fa0b6906a4118024a9033485f$var$Yd, $0fe3ed5fa0b6906a4118024a9033485f$var$Zd, $0fe3ed5fa0b6906a4118024a9033485f$var$$d, $0fe3ed5fa0b6906a4118024a9033485f$var$ae, $0fe3ed5fa0b6906a4118024a9033485f$var$be, $0fe3ed5fa0b6906a4118024a9033485f$var$ce, $0fe3ed5fa0b6906a4118024a9033485f$var$de, $0fe3ed5fa0b6906a4118024a9033485f$var$ee, $0fe3ed5fa0b6906a4118024a9033485f$var$fe, $0fe3ed5fa0b6906a4118024a9033485f$var$ie, $0fe3ed5fa0b6906a4118024a9033485f$var$le, $0fe3ed5fa0b6906a4118024a9033485f$var$pe, $0fe3ed5fa0b6906a4118024a9033485f$var$qe, $0fe3ed5fa0b6906a4118024a9033485f$var$we, $0fe3ed5fa0b6906a4118024a9033485f$var$xe, $0fe3ed5fa0b6906a4118024a9033485f$var$ye, $0fe3ed5fa0b6906a4118024a9033485f$var$ze, $0fe3ed5fa0b6906a4118024a9033485f$var$He, $0fe3ed5fa0b6906a4118024a9033485f$var$Ie, $0fe3ed5fa0b6906a4118024a9033485f$var$Pe, $0fe3ed5fa0b6906a4118024a9033485f$var$Qe, $0fe3ed5fa0b6906a4118024a9033485f$var$Re, $0fe3ed5fa0b6906a4118024a9033485f$var$Se, $0fe3ed5fa0b6906a4118024a9033485f$var$Te, $0fe3ed5fa0b6906a4118024a9033485f$var$Ve, $0fe3ed5fa0b6906a4118024a9033485f$var$We, $0fe3ed5fa0b6906a4118024a9033485f$var$Xe, $0fe3ed5fa0b6906a4118024a9033485f$var$Ye, $0fe3ed5fa0b6906a4118024a9033485f$var$bf, $0fe3ed5fa0b6906a4118024a9033485f$var$kf, $0fe3ed5fa0b6906a4118024a9033485f$var$lf, $0fe3ed5fa0b6906a4118024a9033485f$var$of, $0fe3ed5fa0b6906a4118024a9033485f$var$pf, $0fe3ed5fa0b6906a4118024a9033485f$var$tf, $0fe3ed5fa0b6906a4118024a9033485f$var$vf, $0fe3ed5fa0b6906a4118024a9033485f$var$wf, $0fe3ed5fa0b6906a4118024a9033485f$var$xf, $0fe3ed5fa0b6906a4118024a9033485f$var$ff, $0fe3ed5fa0b6906a4118024a9033485f$var$yf, $0fe3ed5fa0b6906a4118024a9033485f$var$zf, $0fe3ed5fa0b6906a4118024a9033485f$var$Af, $0fe3ed5fa0b6906a4118024a9033485f$var$Cf, $0fe3ed5fa0b6906a4118024a9033485f$var$M, $0fe3ed5fa0b6906a4118024a9033485f$var$N, $0fe3ed5fa0b6906a4118024a9033485f$var$Df, $0fe3ed5fa0b6906a4118024a9033485f$var$Lf, $0fe3ed5fa0b6906a4118024a9033485f$var$Mf, $0fe3ed5fa0b6906a4118024a9033485f$var$Nf, $0fe3ed5fa0b6906a4118024a9033485f$var$Of, $0fe3ed5fa0b6906a4118024a9033485f$var$Pf, $0fe3ed5fa0b6906a4118024a9033485f$var$Qf, $0fe3ed5fa0b6906a4118024a9033485f$var$Rf, $0fe3ed5fa0b6906a4118024a9033485f$var$Sf, $0fe3ed5fa0b6906a4118024a9033485f$var$Tf, $0fe3ed5fa0b6906a4118024a9033485f$var$Uf, $0fe3ed5fa0b6906a4118024a9033485f$var$Vf, $0fe3ed5fa0b6906a4118024a9033485f$var$Wf, $0fe3ed5fa0b6906a4118024a9033485f$var$Xf, $0fe3ed5fa0b6906a4118024a9033485f$var$Yf, $0fe3ed5fa0b6906a4118024a9033485f$var$Zf, $0fe3ed5fa0b6906a4118024a9033485f$var$$f, $0fe3ed5fa0b6906a4118024a9033485f$var$ag, $0fe3ed5fa0b6906a4118024a9033485f$var$bg, $0fe3ed5fa0b6906a4118024a9033485f$var$cg, $0fe3ed5fa0b6906a4118024a9033485f$var$dg, $0fe3ed5fa0b6906a4118024a9033485f$var$O, $0fe3ed5fa0b6906a4118024a9033485f$var$kg, $0fe3ed5fa0b6906a4118024a9033485f$var$mg, $0fe3ed5fa0b6906a4118024a9033485f$var$ng, $0fe3ed5fa0b6906a4118024a9033485f$var$og, $0fe3ed5fa0b6906a4118024a9033485f$var$pg, $0fe3ed5fa0b6906a4118024a9033485f$var$wg, $0fe3ed5fa0b6906a4118024a9033485f$var$Fg, $0fe3ed5fa0b6906a4118024a9033485f$var$Kg, $0fe3ed5fa0b6906a4118024a9033485f$var$Pg, $0fe3ed5fa0b6906a4118024a9033485f$var$Yg, $0fe3ed5fa0b6906a4118024a9033485f$var$Zg, $0fe3ed5fa0b6906a4118024a9033485f$var$$g, $0fe3ed5fa0b6906a4118024a9033485f$var$ah, $0fe3ed5fa0b6906a4118024a9033485f$var$bh, $0fe3ed5fa0b6906a4118024a9033485f$var$ch, $0fe3ed5fa0b6906a4118024a9033485f$var$P, $0fe3ed5fa0b6906a4118024a9033485f$var$jh, $0fe3ed5fa0b6906a4118024a9033485f$var$kh, $0fe3ed5fa0b6906a4118024a9033485f$var$lh, $0fe3ed5fa0b6906a4118024a9033485f$var$th, $0fe3ed5fa0b6906a4118024a9033485f$var$vh, $0fe3ed5fa0b6906a4118024a9033485f$var$wh, $0fe3ed5fa0b6906a4118024a9033485f$var$xh, $0fe3ed5fa0b6906a4118024a9033485f$var$R, $0fe3ed5fa0b6906a4118024a9033485f$var$S, $0fe3ed5fa0b6906a4118024a9033485f$var$T, $0fe3ed5fa0b6906a4118024a9033485f$var$yh, $0fe3ed5fa0b6906a4118024a9033485f$var$zh, $0fe3ed5fa0b6906a4118024a9033485f$var$Gh, $0fe3ed5fa0b6906a4118024a9033485f$var$Dh, $0fe3ed5fa0b6906a4118024a9033485f$var$Eh, $0fe3ed5fa0b6906a4118024a9033485f$var$Fh, $0fe3ed5fa0b6906a4118024a9033485f$var$ei, $0fe3ed5fa0b6906a4118024a9033485f$var$ug, $0fe3ed5fa0b6906a4118024a9033485f$var$si, $0fe3ed5fa0b6906a4118024a9033485f$var$Bi, $0fe3ed5fa0b6906a4118024a9033485f$var$Ci, $0fe3ed5fa0b6906a4118024a9033485f$var$Di, $0fe3ed5fa0b6906a4118024a9033485f$var$Ei, $0fe3ed5fa0b6906a4118024a9033485f$var$Oi, $0fe3ed5fa0b6906a4118024a9033485f$var$Ui, $0fe3ed5fa0b6906a4118024a9033485f$var$nj, $0fe3ed5fa0b6906a4118024a9033485f$var$oj, $0fe3ed5fa0b6906a4118024a9033485f$var$pj, $0fe3ed5fa0b6906a4118024a9033485f$var$X, $0fe3ed5fa0b6906a4118024a9033485f$var$U, $0fe3ed5fa0b6906a4118024a9033485f$var$Y, $0fe3ed5fa0b6906a4118024a9033485f$var$W, $0fe3ed5fa0b6906a4118024a9033485f$var$qj, $0fe3ed5fa0b6906a4118024a9033485f$var$rj, $0fe3ed5fa0b6906a4118024a9033485f$var$V, $0fe3ed5fa0b6906a4118024a9033485f$var$sj, $0fe3ed5fa0b6906a4118024a9033485f$var$tj, $0fe3ed5fa0b6906a4118024a9033485f$var$Dg, $0fe3ed5fa0b6906a4118024a9033485f$var$Hi, $0fe3ed5fa0b6906a4118024a9033485f$var$uj, $0fe3ed5fa0b6906a4118024a9033485f$var$vj, $0fe3ed5fa0b6906a4118024a9033485f$var$jj, $0fe3ed5fa0b6906a4118024a9033485f$var$Ji, $0fe3ed5fa0b6906a4118024a9033485f$var$Z, $0fe3ed5fa0b6906a4118024a9033485f$var$Qi, $0fe3ed5fa0b6906a4118024a9033485f$var$Ri, $0fe3ed5fa0b6906a4118024a9033485f$var$Ti, $0fe3ed5fa0b6906a4118024a9033485f$var$xj, $0fe3ed5fa0b6906a4118024a9033485f$var$yj, $0fe3ed5fa0b6906a4118024a9033485f$var$zj, $0fe3ed5fa0b6906a4118024a9033485f$var$Aj, $0fe3ed5fa0b6906a4118024a9033485f$var$Bj, $0fe3ed5fa0b6906a4118024a9033485f$var$Cj, $0fe3ed5fa0b6906a4118024a9033485f$var$Dj, $0fe3ed5fa0b6906a4118024a9033485f$var$Ej, $0fe3ed5fa0b6906a4118024a9033485f$var$Fj, $0fe3ed5fa0b6906a4118024a9033485f$var$Gj, $0fe3ed5fa0b6906a4118024a9033485f$var$Hj, $0fe3ed5fa0b6906a4118024a9033485f$var$Ij, $0fe3ed5fa0b6906a4118024a9033485f$var$Jj, $0fe3ed5fa0b6906a4118024a9033485f$var$ck, $0fe3ed5fa0b6906a4118024a9033485f$var$vk, $0fe3ed5fa0b6906a4118024a9033485f$var$wk, $0fe3ed5fa0b6906a4118024a9033485f$var$xk, $0fe3ed5fa0b6906a4118024a9033485f$var$yk, $0fe3ed5fa0b6906a4118024a9033485f$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $0fe3ed5fa0b6906a4118024a9033485f$export$createPortal, $0fe3ed5fa0b6906a4118024a9033485f$export$findDOMNode, $0fe3ed5fa0b6906a4118024a9033485f$export$flushSync, $0fe3ed5fa0b6906a4118024a9033485f$export$hydrate, $0fe3ed5fa0b6906a4118024a9033485f$export$render, $0fe3ed5fa0b6906a4118024a9033485f$export$unmountComponentAtNode, $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_batchedUpdates, $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_createPortal, $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_renderSubtreeIntoContainer, $0fe3ed5fa0b6906a4118024a9033485f$export$version, $0fe3ed5fa0b6906a4118024a9033485f$executed = false;
  function $0fe3ed5fa0b6906a4118024a9033485f$var$y(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$da(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea(a, b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea(a + "Capture", b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ea(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$ca[a] = b;
    for (a = 0; a < b.length; a++) $0fe3ed5fa0b6906a4118024a9033485f$var$ba.add(b[a]);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$la(a) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$ia.call($0fe3ed5fa0b6906a4118024a9033485f$var$ka, a)) return !0;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$ia.call($0fe3ed5fa0b6906a4118024a9033485f$var$ja, a)) return !1;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$ha.test(a)) return $0fe3ed5fa0b6906a4118024a9033485f$var$ka[a] = !0;
    $0fe3ed5fa0b6906a4118024a9033485f$var$ja[a] = !0;
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ma(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch (typeof b) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        if (d) return !1;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return !1;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$na(a, b, c, d) {
    if (null === b || "undefined" === typeof b || $0fe3ed5fa0b6906a4118024a9033485f$var$ma(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return !1 === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$pa(a) {
    return a[1].toUpperCase();
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qa(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$D.hasOwnProperty(b) ? $0fe3ed5fa0b6906a4118024a9033485f$var$D[b] : null;
    var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
    f || ($0fe3ed5fa0b6906a4118024a9033485f$var$na(b, c, e, d) && (c = null), d || null === e ? $0fe3ed5fa0b6906a4118024a9033485f$var$la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$La(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$Ka && a[$0fe3ed5fa0b6906a4118024a9033485f$var$Ka] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Na(a) {
    if (void 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$Ma) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ma = b && b[1] || "";
    }
    return "\n" + $0fe3ed5fa0b6906a4118024a9033485f$var$Ma + a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Pa(a, b) {
    if (!a || $0fe3ed5fa0b6906a4118024a9033485f$var$Oa) return "";
    $0fe3ed5fa0b6906a4118024a9033485f$var$Oa = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if ((b = function () {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), "object" === typeof Reflect && Reflect.construct)) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }
        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; (g--, h--)) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do if ((g--, h--, 0 > h || e[g] !== f[h])) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      ($0fe3ed5fa0b6906a4118024a9033485f$var$Oa = !1, Error.prepareStackTrace = c);
    }
    return (a = a ? a.displayName || a.name : "") ? $0fe3ed5fa0b6906a4118024a9033485f$var$Na(a) : "";
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Qa(a) {
    switch (a.tag) {
      case 5:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Na(a.type);
      case 16:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Na("Lazy");
      case 13:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Na("Suspense");
      case 19:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Na("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Pa(a.type, !1), a);
      case 11:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Pa(a.type.render, !1), a);
      case 22:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Pa(a.type._render, !1), a);
      case 1:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Pa(a.type, !0), a);
      default:
        return "";
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case $0fe3ed5fa0b6906a4118024a9033485f$var$ua:
        return "Fragment";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$ta:
        return "Portal";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$xa:
        return "Profiler";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$wa:
        return "StrictMode";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ba:
        return "Suspense";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ca:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case $0fe3ed5fa0b6906a4118024a9033485f$var$za:
        return (a.displayName || "Context") + ".Consumer";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$ya:
        return (a._context.displayName || "Context") + ".Provider";
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Da:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(a.type);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Fa:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(a._render);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ea:
        b = a._payload;
        a = a._init;
        try {
          return $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(a(b));
        } catch (c) {}
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a;
      default:
        return "";
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ua(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, {
        configurable: !0,
        get: function () {
          return e.call(this);
        },
        set: function (a) {
          d = "" + a;
          f.call(this, a);
        }
      });
      Object.defineProperty(a, b, {
        enumerable: c.enumerable
      });
      return {
        getValue: function () {
          return d;
        },
        setValue: function (a) {
          d = "" + a;
        },
        stopTracking: function () {
          a._valueTracker = null;
          delete a[b];
        }
      };
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Va(a) {
    a._valueTracker || (a._valueTracker = $0fe3ed5fa0b6906a4118024a9033485f$var$Ua(a));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ya(a, b) {
    var c = b.checked;
    return $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, b, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != c ? c : a._wrapperState.initialChecked
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(null != b.value ? b.value : c);
    a._wrapperState = {
      initialChecked: d,
      initialValue: c,
      controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$a(a, b) {
    b = b.checked;
    null != b && $0fe3ed5fa0b6906a4118024a9033485f$var$qa(a, "checked", b, !1);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ab(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$$a(a, b);
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? $0fe3ed5fa0b6906a4118024a9033485f$var$bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && $0fe3ed5fa0b6906a4118024a9033485f$var$bb(a, b.type, $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$cb(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$bb(a, b, c) {
    if ("number" !== b || $0fe3ed5fa0b6906a4118024a9033485f$var$Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$db(a) {
    var b = "";
    $0fe3ed5fa0b6906a4118024a9033485f$var$aa.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$eb(a, b) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$m({
      children: void 0
    }, b);
    if (b = $0fe3ed5fa0b6906a4118024a9033485f$var$db(b.children)) a.children = b;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
      for (c = 0; c < a.length; c++) (e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0));
    } else {
      c = "" + $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = !0;
          d && (a[e].defaultSelected = !0);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = !0);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(91));
    return $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, b, {
      value: void 0,
      defaultValue: void 0,
      children: "" + a._wrapperState.initialValue
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = {
      initialValue: $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(c)
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ib(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(b.value), d = $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$lb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? $0fe3ed5fa0b6906a4118024a9033485f$var$lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$pb(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || $0fe3ed5fa0b6906a4118024a9033485f$var$qb.hasOwnProperty(a) && $0fe3ed5fa0b6906a4118024a9033485f$var$qb[a] ? ("" + b).trim() : b + "px";
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$tb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = $0fe3ed5fa0b6906a4118024a9033485f$var$sb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$vb(a, b) {
    if (b) {
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(60));
        if (!("object" === typeof b.dangerouslySetInnerHTML && ("__html" in b.dangerouslySetInnerHTML))) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(62));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$wb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Bb(a) {
    if (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Cb(a)) {
      if ("function" !== typeof $0fe3ed5fa0b6906a4118024a9033485f$var$yb) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(280));
      var b = a.stateNode;
      b && (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Db(b), $0fe3ed5fa0b6906a4118024a9033485f$var$yb(a.stateNode, a.type, b));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Eb(a) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$zb ? $0fe3ed5fa0b6906a4118024a9033485f$var$Ab ? $0fe3ed5fa0b6906a4118024a9033485f$var$Ab.push(a) : $0fe3ed5fa0b6906a4118024a9033485f$var$Ab = [a] : $0fe3ed5fa0b6906a4118024a9033485f$var$zb = a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Fb() {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$zb) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$zb, b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ab;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ab = $0fe3ed5fa0b6906a4118024a9033485f$var$zb = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Bb(a);
      if (b) for (a = 0; a < b.length; a++) $0fe3ed5fa0b6906a4118024a9033485f$var$Bb(b[a]);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Gb(a, b) {
    return a(b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Hb(a, b, c, d, e) {
    return a(b, c, d, e);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ib() {}
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Mb() {
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$zb || null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Ab) ($0fe3ed5fa0b6906a4118024a9033485f$var$Ib(), $0fe3ed5fa0b6906a4118024a9033485f$var$Fb());
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Nb(a, b, c) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Lb) return a(b, c);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Lb = !0;
    try {
      return $0fe3ed5fa0b6906a4118024a9033485f$var$Jb(a, b, c);
    } finally {
      ($0fe3ed5fa0b6906a4118024a9033485f$var$Lb = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Mb());
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(231, b, typeof c));
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Rb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (n) {
      this.onError(n);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xb(a, b, c, d, e, f, g, h, k) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Sb = !1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Tb = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Rb.apply($0fe3ed5fa0b6906a4118024a9033485f$var$Wb, arguments);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Yb(a, b, c, d, e, f, g, h, k) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Xb.apply(this, arguments);
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Sb) {
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$Sb) {
        var l = $0fe3ed5fa0b6906a4118024a9033485f$var$Tb;
        $0fe3ed5fa0b6906a4118024a9033485f$var$Sb = !1;
        $0fe3ed5fa0b6906a4118024a9033485f$var$Tb = null;
      } else throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(198));
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ub || ($0fe3ed5fa0b6906a4118024a9033485f$var$Ub = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$Vb = l);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return; else {
      a = b;
      do (b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return); while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$b(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ac(a) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Zb(a) !== a) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(188));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$bc(a) {
    var b = a.alternate;
    if (!b) {
      b = $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(a);
      if (null === b) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return ($0fe3ed5fa0b6906a4118024a9033485f$var$ac(e), a);
          if (f === d) return ($0fe3ed5fa0b6906a4118024a9033485f$var$ac(e), b);
          f = f.sibling;
        }
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(188));
      }
      if (c.return !== d.return) (c = e, d = f); else {
        for (var g = !1, h = e.child; h; ) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(189));
        }
      }
      if (c.alternate !== d) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(190));
    }
    if (3 !== c.tag) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(188));
    return c.stateNode.current === c ? a : b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$cc(a) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$bc(a);
    if (!a) return null;
    for (var b = a; ; ) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) (b.child.return = b, b = b.child); else {
        if (b === a) break;
        for (; !b.sibling; ) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$dc(a, b) {
    for (var c = a.alternate; null !== b; ) {
      if (b === a || b === c) return !0;
      b = b.return;
    }
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rc(a, b, c, d, e) {
    return {
      blockedOn: a,
      domEventName: b,
      eventSystemFlags: c | 16,
      nativeEvent: e,
      targetContainers: [d]
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        $0fe3ed5fa0b6906a4118024a9033485f$var$kc = null;
        break;
      case "dragenter":
      case "dragleave":
        $0fe3ed5fa0b6906a4118024a9033485f$var$lc = null;
        break;
      case "mouseover":
      case "mouseout":
        $0fe3ed5fa0b6906a4118024a9033485f$var$mc = null;
        break;
      case "pointerover":
      case "pointerout":
        $0fe3ed5fa0b6906a4118024a9033485f$var$nc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $0fe3ed5fa0b6906a4118024a9033485f$var$oc.delete(b.pointerId);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$rc(b, c, d, e, f), null !== b && (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Cb(b), null !== b && $0fe3ed5fa0b6906a4118024a9033485f$var$fc(b)), a);
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$kc = $0fe3ed5fa0b6906a4118024a9033485f$var$tc($0fe3ed5fa0b6906a4118024a9033485f$var$kc, a, b, c, d, e), !0);
      case "dragenter":
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$lc = $0fe3ed5fa0b6906a4118024a9033485f$var$tc($0fe3ed5fa0b6906a4118024a9033485f$var$lc, a, b, c, d, e), !0);
      case "mouseover":
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$mc = $0fe3ed5fa0b6906a4118024a9033485f$var$tc($0fe3ed5fa0b6906a4118024a9033485f$var$mc, a, b, c, d, e), !0);
      case "pointerover":
        var f = e.pointerId;
        $0fe3ed5fa0b6906a4118024a9033485f$var$nc.set(f, $0fe3ed5fa0b6906a4118024a9033485f$var$tc($0fe3ed5fa0b6906a4118024a9033485f$var$nc.get(f) || null, a, b, c, d, e));
        return !0;
      case "gotpointercapture":
        return (f = e.pointerId, $0fe3ed5fa0b6906a4118024a9033485f$var$oc.set(f, $0fe3ed5fa0b6906a4118024a9033485f$var$tc($0fe3ed5fa0b6906a4118024a9033485f$var$oc.get(f) || null, a, b, c, d, e)), !0);
    }
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$vc(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$wc(a.target);
    if (null !== b) {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(b);
      if (null !== c) if ((b = c.tag, 13 === b)) {
        if ((b = $0fe3ed5fa0b6906a4118024a9033485f$var$$b(c), null !== b)) {
          a.blockedOn = b;
          $0fe3ed5fa0b6906a4118024a9033485f$var$hc(a.lanePriority, function () {
            $e7b0987460780cecc7357948dd79a996$init().unstable_runWithPriority(a.priority, function () {
              $0fe3ed5fa0b6906a4118024a9033485f$var$gc(c);
            });
          });
          return;
        }
      } else if (3 === b && c.stateNode.hydrate) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
    a.blockedOn = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$xc(a) {
    if (null !== a.blockedOn) return !1;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null !== c) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Cb(c), null !== b && $0fe3ed5fa0b6906a4118024a9033485f$var$fc(b), a.blockedOn = c, !1);
      b.shift();
    }
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$zc(a, b, c) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$xc(a) && c.delete(b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ac() {
    for ($0fe3ed5fa0b6906a4118024a9033485f$var$ic = !1; 0 < $0fe3ed5fa0b6906a4118024a9033485f$var$jc.length; ) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$jc[0];
      if (null !== a.blockedOn) {
        a = $0fe3ed5fa0b6906a4118024a9033485f$var$Cb(a.blockedOn);
        null !== a && $0fe3ed5fa0b6906a4118024a9033485f$var$ec(a);
        break;
      }
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = $0fe3ed5fa0b6906a4118024a9033485f$var$yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null !== c) {
          a.blockedOn = c;
          break;
        }
        b.shift();
      }
      null === a.blockedOn && $0fe3ed5fa0b6906a4118024a9033485f$var$jc.shift();
    }
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$kc && $0fe3ed5fa0b6906a4118024a9033485f$var$xc($0fe3ed5fa0b6906a4118024a9033485f$var$kc) && ($0fe3ed5fa0b6906a4118024a9033485f$var$kc = null);
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$lc && $0fe3ed5fa0b6906a4118024a9033485f$var$xc($0fe3ed5fa0b6906a4118024a9033485f$var$lc) && ($0fe3ed5fa0b6906a4118024a9033485f$var$lc = null);
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$mc && $0fe3ed5fa0b6906a4118024a9033485f$var$xc($0fe3ed5fa0b6906a4118024a9033485f$var$mc) && ($0fe3ed5fa0b6906a4118024a9033485f$var$mc = null);
    $0fe3ed5fa0b6906a4118024a9033485f$var$nc.forEach($0fe3ed5fa0b6906a4118024a9033485f$var$zc);
    $0fe3ed5fa0b6906a4118024a9033485f$var$oc.forEach($0fe3ed5fa0b6906a4118024a9033485f$var$zc);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Bc(a, b) {
    a.blockedOn === b && (a.blockedOn = null, $0fe3ed5fa0b6906a4118024a9033485f$var$ic || ($0fe3ed5fa0b6906a4118024a9033485f$var$ic = !0, $e7b0987460780cecc7357948dd79a996$init().unstable_scheduleCallback($e7b0987460780cecc7357948dd79a996$init().unstable_NormalPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Ac)));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Cc(a) {
    function b(b) {
      return $0fe3ed5fa0b6906a4118024a9033485f$var$Bc(b, a);
    }
    if (0 < $0fe3ed5fa0b6906a4118024a9033485f$var$jc.length) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Bc($0fe3ed5fa0b6906a4118024a9033485f$var$jc[0], a);
      for (var c = 1; c < $0fe3ed5fa0b6906a4118024a9033485f$var$jc.length; c++) {
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$jc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$kc && $0fe3ed5fa0b6906a4118024a9033485f$var$Bc($0fe3ed5fa0b6906a4118024a9033485f$var$kc, a);
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$lc && $0fe3ed5fa0b6906a4118024a9033485f$var$Bc($0fe3ed5fa0b6906a4118024a9033485f$var$lc, a);
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$mc && $0fe3ed5fa0b6906a4118024a9033485f$var$Bc($0fe3ed5fa0b6906a4118024a9033485f$var$mc, a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$nc.forEach(b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$oc.forEach(b);
    for (c = 0; c < $0fe3ed5fa0b6906a4118024a9033485f$var$pc.length; c++) (d = $0fe3ed5fa0b6906a4118024a9033485f$var$pc[c], d.blockedOn === a && (d.blockedOn = null));
    for (; 0 < $0fe3ed5fa0b6906a4118024a9033485f$var$pc.length && (c = $0fe3ed5fa0b6906a4118024a9033485f$var$pc[0], null === c.blockedOn); ) ($0fe3ed5fa0b6906a4118024a9033485f$var$vc(c), null === c.blockedOn && $0fe3ed5fa0b6906a4118024a9033485f$var$pc.shift());
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Dc(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Hc(a) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Fc[a]) return $0fe3ed5fa0b6906a4118024a9033485f$var$Fc[a];
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$Ec[a]) return a;
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ec[a], c;
    for (c in b) if (b.hasOwnProperty(c) && (c in $0fe3ed5fa0b6906a4118024a9033485f$var$Gc)) return $0fe3ed5fa0b6906a4118024a9033485f$var$Fc[a] = b[c];
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Pc(a, b) {
    for (var c = 0; c < a.length; c += 2) {
      var d = a[c], e = a[c + 1];
      e = "on" + (e[0].toUpperCase() + e.slice(1));
      $0fe3ed5fa0b6906a4118024a9033485f$var$Nc.set(d, b);
      $0fe3ed5fa0b6906a4118024a9033485f$var$Mc.set(d, e);
      $0fe3ed5fa0b6906a4118024a9033485f$var$da(e, [d]);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(a) {
    if (0 !== (1 & a)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 15, 1);
    if (0 !== (2 & a)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 14, 2);
    if (0 !== (4 & a)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 13, 4);
    var b = 24 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 12, b);
    if (0 !== (a & 32)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 11, 32);
    b = 192 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 10, b);
    if (0 !== (a & 256)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 9, 256);
    b = 3584 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 8, b);
    if (0 !== (a & 4096)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 7, 4096);
    b = 4186112 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 6, b);
    b = 62914560 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 5, b);
    if (a & 67108864) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 4, 67108864);
    if (0 !== (a & 134217728)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 3, 134217728);
    b = 805306368 & a;
    if (0 !== b) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 2, b);
    if (0 !== (1073741824 & a)) return ($0fe3ed5fa0b6906a4118024a9033485f$var$F = 1, 1073741824);
    $0fe3ed5fa0b6906a4118024a9033485f$var$F = 8;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Sc(a) {
    switch (a) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Tc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(358, a));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return $0fe3ed5fa0b6906a4118024a9033485f$var$F = 0;
    var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
    if (0 !== f) (d = f, e = $0fe3ed5fa0b6906a4118024a9033485f$var$F = 15); else if ((f = c & 134217727, 0 !== f)) {
      var k = f & ~g;
      0 !== k ? (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(k), e = $0fe3ed5fa0b6906a4118024a9033485f$var$F) : (h &= f, 0 !== h && (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(h), e = $0fe3ed5fa0b6906a4118024a9033485f$var$F));
    } else (f = c & ~g, 0 !== f ? (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(f), e = $0fe3ed5fa0b6906a4118024a9033485f$var$F) : 0 !== h && (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(h), e = $0fe3ed5fa0b6906a4118024a9033485f$var$F));
    if (0 === d) return 0;
    d = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
    if (0 !== b && b !== d && 0 === (b & g)) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(b);
      if (e <= $0fe3ed5fa0b6906a4118024a9033485f$var$F) return b;
      $0fe3ed5fa0b6906a4118024a9033485f$var$F = e;
    }
    b = a.entangledLanes;
    if (0 !== b) for ((a = a.entanglements, b &= d); 0 < b; ) (c = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(b), e = 1 << c, d |= a[c], b &= ~e);
    return d;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xc(a, b) {
    switch (a) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(24 & ~b), 0 === a ? $0fe3ed5fa0b6906a4118024a9033485f$var$Xc(10, b) : a);
      case 10:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(192 & ~b), 0 === a ? $0fe3ed5fa0b6906a4118024a9033485f$var$Xc(8, b) : a);
      case 8:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(3584 & ~b), 0 === a && (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(4186112 & ~b), 0 === a && (a = 512)), a);
      case 2:
        return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(805306368 & ~b), 0 === b && (b = 268435456), b);
    }
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(358, a));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(a) {
    return a & -a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$c(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(b);
    a[b] = c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ad(a) {
    return 0 === a ? 32 : 31 - ($0fe3ed5fa0b6906a4118024a9033485f$var$bd(a) / $0fe3ed5fa0b6906a4118024a9033485f$var$cd | 0) | 0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gd(a, b, c, d) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Kb || $0fe3ed5fa0b6906a4118024a9033485f$var$Ib();
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$hd, f = $0fe3ed5fa0b6906a4118024a9033485f$var$Kb;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Kb = !0;
    try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Hb(e, a, b, c, d);
    } finally {
      ($0fe3ed5fa0b6906a4118024a9033485f$var$Kb = f) || $0fe3ed5fa0b6906a4118024a9033485f$var$Mb();
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$id(a, b, c, d) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$ed($0fe3ed5fa0b6906a4118024a9033485f$var$dd, $0fe3ed5fa0b6906a4118024a9033485f$var$hd.bind(null, a, b, c, d));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hd(a, b, c, d) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$fd) {
      var e;
      if ((e = 0 === (b & 4)) && 0 < $0fe3ed5fa0b6906a4118024a9033485f$var$jc.length && -1 < $0fe3ed5fa0b6906a4118024a9033485f$var$qc.indexOf(a)) (a = $0fe3ed5fa0b6906a4118024a9033485f$var$rc(null, a, b, c, d), $0fe3ed5fa0b6906a4118024a9033485f$var$jc.push(a)); else {
        var f = $0fe3ed5fa0b6906a4118024a9033485f$var$yc(a, b, c, d);
        if (null === f) e && $0fe3ed5fa0b6906a4118024a9033485f$var$sc(a, d); else {
          if (e) {
            if (-1 < $0fe3ed5fa0b6906a4118024a9033485f$var$qc.indexOf(a)) {
              a = $0fe3ed5fa0b6906a4118024a9033485f$var$rc(f, a, b, c, d);
              $0fe3ed5fa0b6906a4118024a9033485f$var$jc.push(a);
              return;
            }
            if ($0fe3ed5fa0b6906a4118024a9033485f$var$uc(f, a, b, c, d)) return;
            $0fe3ed5fa0b6906a4118024a9033485f$var$sc(a, d);
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$jd(a, b, d, null, c);
        }
      }
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$yc(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$xb(d);
    e = $0fe3ed5fa0b6906a4118024a9033485f$var$wc(e);
    if (null !== e) {
      var f = $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(e);
      if (null === f) e = null; else {
        var g = f.tag;
        if (13 === g) {
          e = $0fe3ed5fa0b6906a4118024a9033485f$var$$b(f);
          if (null !== e) return e;
          e = null;
        } else if (3 === g) {
          if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
          e = null;
        } else f !== e && (e = null);
      }
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$jd(a, b, d, e, c);
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$nd() {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$md) return $0fe3ed5fa0b6906a4118024a9033485f$var$md;
    var a, b = $0fe3ed5fa0b6906a4118024a9033485f$var$ld, c = b.length, d, e = ("value" in $0fe3ed5fa0b6906a4118024a9033485f$var$kd) ? $0fe3ed5fa0b6906a4118024a9033485f$var$kd.value : $0fe3ed5fa0b6906a4118024a9033485f$var$kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return $0fe3ed5fa0b6906a4118024a9033485f$var$md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$od(a) {
    var b = a.keyCode;
    ("charCode" in a) ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$pd() {
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qd() {
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rd(a) {
    function b(b, d, e, f, g) {
      this._reactName = b;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? $0fe3ed5fa0b6906a4118024a9033485f$var$pd : $0fe3ed5fa0b6906a4118024a9033485f$var$qd;
      this.isPropagationStopped = $0fe3ed5fa0b6906a4118024a9033485f$var$qd;
      return this;
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$m(b.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = $0fe3ed5fa0b6906a4118024a9033485f$var$pd);
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = $0fe3ed5fa0b6906a4118024a9033485f$var$pd);
      },
      persist: function () {},
      isPersistent: $0fe3ed5fa0b6906a4118024a9033485f$var$pd
    });
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Od[a]) ? !!b[a] : !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$zd() {
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Pd;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $0fe3ed5fa0b6906a4118024a9033485f$var$$d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$he(a) {
    a = a.detail;
    return "object" === typeof a && ("data" in a) ? a.data : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$je(a, b) {
    switch (a) {
      case "compositionend":
        return $0fe3ed5fa0b6906a4118024a9033485f$var$he(b);
      case "keypress":
        if (32 !== b.which) return null;
        $0fe3ed5fa0b6906a4118024a9033485f$var$fe = !0;
        return $0fe3ed5fa0b6906a4118024a9033485f$var$ee;
      case "textInput":
        return (a = b.data, a === $0fe3ed5fa0b6906a4118024a9033485f$var$ee && $0fe3ed5fa0b6906a4118024a9033485f$var$fe ? null : a);
      default:
        return null;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ke(a, b) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$ie) return "compositionend" === a || !$0fe3ed5fa0b6906a4118024a9033485f$var$ae && $0fe3ed5fa0b6906a4118024a9033485f$var$ge(a, b) ? (a = $0fe3ed5fa0b6906a4118024a9033485f$var$nd(), $0fe3ed5fa0b6906a4118024a9033485f$var$md = $0fe3ed5fa0b6906a4118024a9033485f$var$ld = $0fe3ed5fa0b6906a4118024a9033485f$var$kd = null, $0fe3ed5fa0b6906a4118024a9033485f$var$ie = !1, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return $0fe3ed5fa0b6906a4118024a9033485f$var$de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!$0fe3ed5fa0b6906a4118024a9033485f$var$le[a.type] : "textarea" === b ? !0 : !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ne(a, b, c, d) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Eb(d);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$oe(b, "onChange");
    0 < b.length && (c = new $0fe3ed5fa0b6906a4118024a9033485f$var$td("onChange", "change", null, c, d), a.push({
      event: c,
      listeners: b
    }));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$re(a) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$se(a, 0);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$te(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$ue(a);
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Wa(b)) return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ve(a, b) {
    if ("change" === a) return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ae() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$pe && ($0fe3ed5fa0b6906a4118024a9033485f$var$pe.detachEvent("onpropertychange", $0fe3ed5fa0b6906a4118024a9033485f$var$Be), $0fe3ed5fa0b6906a4118024a9033485f$var$qe = $0fe3ed5fa0b6906a4118024a9033485f$var$pe = null);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Be(a) {
    if ("value" === a.propertyName && $0fe3ed5fa0b6906a4118024a9033485f$var$te($0fe3ed5fa0b6906a4118024a9033485f$var$qe)) {
      var b = [];
      $0fe3ed5fa0b6906a4118024a9033485f$var$ne(b, $0fe3ed5fa0b6906a4118024a9033485f$var$qe, a, $0fe3ed5fa0b6906a4118024a9033485f$var$xb(a));
      a = $0fe3ed5fa0b6906a4118024a9033485f$var$re;
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$Kb) a(b); else {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Kb = !0;
        try {
          $0fe3ed5fa0b6906a4118024a9033485f$var$Gb(a, b);
        } finally {
          ($0fe3ed5fa0b6906a4118024a9033485f$var$Kb = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Mb());
        }
      }
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ce(a, b, c) {
    "focusin" === a ? ($0fe3ed5fa0b6906a4118024a9033485f$var$Ae(), $0fe3ed5fa0b6906a4118024a9033485f$var$pe = b, $0fe3ed5fa0b6906a4118024a9033485f$var$qe = c, $0fe3ed5fa0b6906a4118024a9033485f$var$pe.attachEvent("onpropertychange", $0fe3ed5fa0b6906a4118024a9033485f$var$Be)) : "focusout" === a && $0fe3ed5fa0b6906a4118024a9033485f$var$Ae();
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return $0fe3ed5fa0b6906a4118024a9033485f$var$te($0fe3ed5fa0b6906a4118024a9033485f$var$qe);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ee(a, b) {
    if ("click" === a) return $0fe3ed5fa0b6906a4118024a9033485f$var$te(b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Fe(a, b) {
    if ("input" === a || "change" === a) return $0fe3ed5fa0b6906a4118024a9033485f$var$te(b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Je(a, b) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++) if (!$0fe3ed5fa0b6906a4118024a9033485f$var$Ie.call(b, c[d]) || !$0fe3ed5fa0b6906a4118024a9033485f$var$He(a[c[d]], b[c[d]])) return !1;
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ke(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Le(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ke(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return {
          node: c,
          offset: b - a
        };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ke(c);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Me(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $0fe3ed5fa0b6906a4118024a9033485f$var$Me(a, b.parentNode) : ("contains" in a) ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ne() {
    for (var a = window, b = $0fe3ed5fa0b6906a4118024a9033485f$var$Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = !1;
      }
      if (c) a = b.contentWindow; else break;
      b = $0fe3ed5fa0b6906a4118024a9033485f$var$Xa(a.document);
    }
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Oe(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Te || null == $0fe3ed5fa0b6906a4118024a9033485f$var$Qe || $0fe3ed5fa0b6906a4118024a9033485f$var$Qe !== $0fe3ed5fa0b6906a4118024a9033485f$var$Xa(d) || (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Qe, ("selectionStart" in d) && $0fe3ed5fa0b6906a4118024a9033485f$var$Oe(d) ? d = {
      start: d.selectionStart,
      end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
      anchorNode: d.anchorNode,
      anchorOffset: d.anchorOffset,
      focusNode: d.focusNode,
      focusOffset: d.focusOffset
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Se && $0fe3ed5fa0b6906a4118024a9033485f$var$Je($0fe3ed5fa0b6906a4118024a9033485f$var$Se, d) || ($0fe3ed5fa0b6906a4118024a9033485f$var$Se = d, d = $0fe3ed5fa0b6906a4118024a9033485f$var$oe($0fe3ed5fa0b6906a4118024a9033485f$var$Re, "onSelect"), 0 < d.length && (b = new $0fe3ed5fa0b6906a4118024a9033485f$var$td("onSelect", "select", null, b, c), a.push({
      event: b,
      listeners: d
    }), b.target = $0fe3ed5fa0b6906a4118024a9033485f$var$Qe)));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ze(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Yb(d, b, void 0, a);
    a.currentTarget = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ze(e, h, l);
          f = k;
        } else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ze(e, h, l);
          f = k;
        }
      }
    }
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Ub) throw (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Vb, $0fe3ed5fa0b6906a4118024a9033485f$var$Ub = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Vb = null, a);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$G(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$$e(b), d = a + "__bubble";
    c.has(d) || ($0fe3ed5fa0b6906a4118024a9033485f$var$af(b, a, 2, !1), c.add(d));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$cf(a) {
    a[$0fe3ed5fa0b6906a4118024a9033485f$var$bf] || (a[$0fe3ed5fa0b6906a4118024a9033485f$var$bf] = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$ba.forEach(function (b) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ye.has(b) || $0fe3ed5fa0b6906a4118024a9033485f$var$df(b, !1, a, null);
      $0fe3ed5fa0b6906a4118024a9033485f$var$df(b, !0, a, null);
    }));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$df(a, b, c, d) {
    var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f = c;
    "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);
    if (null !== d && !b && $0fe3ed5fa0b6906a4118024a9033485f$var$Ye.has(a)) {
      if ("scroll" !== a) return;
      e |= 2;
      f = d;
    }
    var g = $0fe3ed5fa0b6906a4118024a9033485f$var$$e(f), h = a + "__" + (b ? "capture" : "bubble");
    g.has(h) || (b && (e |= 4), $0fe3ed5fa0b6906a4118024a9033485f$var$af(f, a, e, b), g.add(h));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$af(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$Nc.get(b);
    switch (void 0 === e ? 2 : e) {
      case 0:
        e = $0fe3ed5fa0b6906a4118024a9033485f$var$gd;
        break;
      case 1:
        e = $0fe3ed5fa0b6906a4118024a9033485f$var$id;
        break;
      default:
        e = $0fe3ed5fa0b6906a4118024a9033485f$var$hd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !$0fe3ed5fa0b6906a4118024a9033485f$var$Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
      capture: !0,
      passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
      passive: e
    }) : a.addEventListener(b, c, !1);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$jd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) if ((k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)) return;
          g = g.return;
        }
        for (; null !== h; ) {
          g = $0fe3ed5fa0b6906a4118024a9033485f$var$wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$Nb(function () {
      var d = f, e = $0fe3ed5fa0b6906a4118024a9033485f$var$xb(c), g = [];
      a: {
        var h = $0fe3ed5fa0b6906a4118024a9033485f$var$Mc.get(a);
        if (void 0 !== h) {
          var k = $0fe3ed5fa0b6906a4118024a9033485f$var$td, x = a;
          switch (a) {
            case "keypress":
              if (0 === $0fe3ed5fa0b6906a4118024a9033485f$var$od(c)) break a;
            case "keydown":
            case "keyup":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Rd;
              break;
            case "focusin":
              x = "focus";
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Fd;
              break;
            case "focusout":
              x = "blur";
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Fd;
              break;
            case "click":
              if (2 === c.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Vd;
              break;
            case $0fe3ed5fa0b6906a4118024a9033485f$var$Ic:
            case $0fe3ed5fa0b6906a4118024a9033485f$var$Jc:
            case $0fe3ed5fa0b6906a4118024a9033485f$var$Kc:
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Hd;
              break;
            case $0fe3ed5fa0b6906a4118024a9033485f$var$Lc:
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Xd;
              break;
            case "scroll":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$vd;
              break;
            case "wheel":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = $0fe3ed5fa0b6906a4118024a9033485f$var$Td;
          }
          var w = 0 !== (b & 4), z = !w && "scroll" === a, u = w ? null !== h ? h + "Capture" : null : h;
          w = [];
          for (var t = d, q; null !== t; ) {
            q = t;
            var v = q.stateNode;
            5 === q.tag && null !== v && (q = v, null !== u && (v = $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(t, u), null != v && w.push($0fe3ed5fa0b6906a4118024a9033485f$var$ef(t, v, q))));
            if (z) break;
            t = t.return;
          }
          0 < w.length && (h = new k(h, x, null, c, e), g.push({
            event: h,
            listeners: w
          }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h = "mouseover" === a || "pointerover" === a;
          k = "mouseout" === a || "pointerout" === a;
          if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && ($0fe3ed5fa0b6906a4118024a9033485f$var$wc(x) || x[$0fe3ed5fa0b6906a4118024a9033485f$var$ff])) break a;
          if (k || h) {
            h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
            if (k) {
              if ((x = c.relatedTarget || c.toElement, k = d, x = x ? $0fe3ed5fa0b6906a4118024a9033485f$var$wc(x) : null, null !== x && (z = $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag))) x = null;
            } else (k = null, x = d);
            if (k !== x) {
              w = $0fe3ed5fa0b6906a4118024a9033485f$var$Bd;
              v = "onMouseLeave";
              u = "onMouseEnter";
              t = "mouse";
              if ("pointerout" === a || "pointerover" === a) (w = $0fe3ed5fa0b6906a4118024a9033485f$var$Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer");
              z = null == k ? h : $0fe3ed5fa0b6906a4118024a9033485f$var$ue(k);
              q = null == x ? h : $0fe3ed5fa0b6906a4118024a9033485f$var$ue(x);
              h = new w(v, t + "leave", k, c, e);
              h.target = z;
              h.relatedTarget = q;
              v = null;
              $0fe3ed5fa0b6906a4118024a9033485f$var$wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
              z = v;
              if (k && x) b: {
                w = k;
                u = x;
                t = 0;
                for (q = w; q; q = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(q)) t++;
                q = 0;
                for (v = u; v; v = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(v)) q++;
                for (; 0 < t - q; ) (w = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(w), t--);
                for (; 0 < q - t; ) (u = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(u), q--);
                for (; t--; ) {
                  if (w === u || null !== u && w === u.alternate) break b;
                  w = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(w);
                  u = $0fe3ed5fa0b6906a4118024a9033485f$var$gf(u);
                }
                w = null;
              } else w = null;
              null !== k && $0fe3ed5fa0b6906a4118024a9033485f$var$hf(g, h, k, w, !1);
              null !== x && null !== z && $0fe3ed5fa0b6906a4118024a9033485f$var$hf(g, z, x, w, !0);
            }
          }
        }
        a: {
          h = d ? $0fe3ed5fa0b6906a4118024a9033485f$var$ue(d) : window;
          k = h.nodeName && h.nodeName.toLowerCase();
          if ("select" === k || "input" === k && "file" === h.type) var J = $0fe3ed5fa0b6906a4118024a9033485f$var$ve; else if ($0fe3ed5fa0b6906a4118024a9033485f$var$me(h)) if ($0fe3ed5fa0b6906a4118024a9033485f$var$we) J = $0fe3ed5fa0b6906a4118024a9033485f$var$Fe; else {
            J = $0fe3ed5fa0b6906a4118024a9033485f$var$De;
            var K = $0fe3ed5fa0b6906a4118024a9033485f$var$Ce;
          } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = $0fe3ed5fa0b6906a4118024a9033485f$var$Ee);
          if (J && (J = J(a, d))) {
            $0fe3ed5fa0b6906a4118024a9033485f$var$ne(g, J, c, e);
            break a;
          }
          K && K(a, h, d);
          "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && $0fe3ed5fa0b6906a4118024a9033485f$var$bb(h, "number", h.value);
        }
        K = d ? $0fe3ed5fa0b6906a4118024a9033485f$var$ue(d) : window;
        switch (a) {
          case "focusin":
            if ($0fe3ed5fa0b6906a4118024a9033485f$var$me(K) || "true" === K.contentEditable) ($0fe3ed5fa0b6906a4118024a9033485f$var$Qe = K, $0fe3ed5fa0b6906a4118024a9033485f$var$Re = d, $0fe3ed5fa0b6906a4118024a9033485f$var$Se = null);
            break;
          case "focusout":
            $0fe3ed5fa0b6906a4118024a9033485f$var$Se = $0fe3ed5fa0b6906a4118024a9033485f$var$Re = $0fe3ed5fa0b6906a4118024a9033485f$var$Qe = null;
            break;
          case "mousedown":
            $0fe3ed5fa0b6906a4118024a9033485f$var$Te = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $0fe3ed5fa0b6906a4118024a9033485f$var$Te = !1;
            $0fe3ed5fa0b6906a4118024a9033485f$var$Ue(g, c, e);
            break;
          case "selectionchange":
            if ($0fe3ed5fa0b6906a4118024a9033485f$var$Pe) break;
          case "keydown":
          case "keyup":
            $0fe3ed5fa0b6906a4118024a9033485f$var$Ue(g, c, e);
        }
        var Q;
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$ae) b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        } else $0fe3ed5fa0b6906a4118024a9033485f$var$ie ? $0fe3ed5fa0b6906a4118024a9033485f$var$ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
        L && ($0fe3ed5fa0b6906a4118024a9033485f$var$de && "ko" !== c.locale && ($0fe3ed5fa0b6906a4118024a9033485f$var$ie || "onCompositionStart" !== L ? "onCompositionEnd" === L && $0fe3ed5fa0b6906a4118024a9033485f$var$ie && (Q = $0fe3ed5fa0b6906a4118024a9033485f$var$nd()) : ($0fe3ed5fa0b6906a4118024a9033485f$var$kd = e, $0fe3ed5fa0b6906a4118024a9033485f$var$ld = ("value" in $0fe3ed5fa0b6906a4118024a9033485f$var$kd) ? $0fe3ed5fa0b6906a4118024a9033485f$var$kd.value : $0fe3ed5fa0b6906a4118024a9033485f$var$kd.textContent, $0fe3ed5fa0b6906a4118024a9033485f$var$ie = !0)), K = $0fe3ed5fa0b6906a4118024a9033485f$var$oe(d, L), 0 < K.length && (L = new $0fe3ed5fa0b6906a4118024a9033485f$var$Ld(L, a, null, c, e), g.push({
          event: L,
          listeners: K
        }), Q ? L.data = Q : (Q = $0fe3ed5fa0b6906a4118024a9033485f$var$he(c), null !== Q && (L.data = Q))));
        if (Q = $0fe3ed5fa0b6906a4118024a9033485f$var$ce ? $0fe3ed5fa0b6906a4118024a9033485f$var$je(a, c) : $0fe3ed5fa0b6906a4118024a9033485f$var$ke(a, c)) (d = $0fe3ed5fa0b6906a4118024a9033485f$var$oe(d, "onBeforeInput"), 0 < d.length && (e = new $0fe3ed5fa0b6906a4118024a9033485f$var$Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
          event: e,
          listeners: d
        }), e.data = Q));
      }
      $0fe3ed5fa0b6906a4118024a9033485f$var$se(g, b);
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ef(a, b, c) {
    return {
      instance: a,
      listener: b,
      currentTarget: c
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(a, c), null != f && d.unshift($0fe3ed5fa0b6906a4118024a9033485f$var$ef(a, f, e)), f = $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(a, b), null != f && d.push($0fe3ed5fa0b6906a4118024a9033485f$var$ef(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gf(a) {
    if (null === a) return null;
    do a = a.return; while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(c, f), null != k && g.unshift($0fe3ed5fa0b6906a4118024a9033485f$var$ef(c, k, h))) : e || (k = $0fe3ed5fa0b6906a4118024a9033485f$var$Ob(c, f), null != k && g.push($0fe3ed5fa0b6906a4118024a9033485f$var$ef(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({
      event: b,
      listeners: g
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$jf() {}
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mf(a, b) {
    switch (a) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b.autoFocus;
    }
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$nf(a, b) {
    return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qf(a) {
    1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
    }
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$uf(a) {
    return {
      $$typeof: $0fe3ed5fa0b6906a4118024a9033485f$var$Ga,
      toString: a,
      valueOf: a
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$wc(a) {
    var b = a[$0fe3ed5fa0b6906a4118024a9033485f$var$wf];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[$0fe3ed5fa0b6906a4118024a9033485f$var$ff] || c[$0fe3ed5fa0b6906a4118024a9033485f$var$wf]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = $0fe3ed5fa0b6906a4118024a9033485f$var$sf(a); null !== a; ) {
          if (c = a[$0fe3ed5fa0b6906a4118024a9033485f$var$wf]) return c;
          a = $0fe3ed5fa0b6906a4118024a9033485f$var$sf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Cb(a) {
    a = a[$0fe3ed5fa0b6906a4118024a9033485f$var$wf] || a[$0fe3ed5fa0b6906a4118024a9033485f$var$ff];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(33));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Db(a) {
    return a[$0fe3ed5fa0b6906a4118024a9033485f$var$xf] || null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$e(a) {
    var b = a[$0fe3ed5fa0b6906a4118024a9033485f$var$yf];
    void 0 === b && (b = a[$0fe3ed5fa0b6906a4118024a9033485f$var$yf] = new Set());
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Bf(a) {
    return {
      current: a
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$H(a) {
    0 > $0fe3ed5fa0b6906a4118024a9033485f$var$Af || (a.current = $0fe3ed5fa0b6906a4118024a9033485f$var$zf[$0fe3ed5fa0b6906a4118024a9033485f$var$Af], $0fe3ed5fa0b6906a4118024a9033485f$var$zf[$0fe3ed5fa0b6906a4118024a9033485f$var$Af] = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Af--);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$I(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Af++;
    $0fe3ed5fa0b6906a4118024a9033485f$var$zf[$0fe3ed5fa0b6906a4118024a9033485f$var$Af] = a.current;
    a.current = b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(a, b) {
    var c = a.type.contextTypes;
    if (!c) return $0fe3ed5fa0b6906a4118024a9033485f$var$Cf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Gf() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N);
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$M);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Hf(a, b, c) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$M.current !== $0fe3ed5fa0b6906a4118024a9033485f$var$Cf) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(168));
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$M, b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$N, c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$If(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!((e in a))) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(108, $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(b) || "Unknown", e));
    return $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, c, d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Jf(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || $0fe3ed5fa0b6906a4118024a9033485f$var$Cf;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Df = $0fe3ed5fa0b6906a4118024a9033485f$var$M.current;
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$M, a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$N, $0fe3ed5fa0b6906a4118024a9033485f$var$N.current);
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Kf(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(169));
    c ? (a = $0fe3ed5fa0b6906a4118024a9033485f$var$If(a, b, $0fe3ed5fa0b6906a4118024a9033485f$var$Df), d.__reactInternalMemoizedMergedChildContext = a, $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N), $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$M), $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$M, a)) : $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$N, c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$eg() {
    switch ($0fe3ed5fa0b6906a4118024a9033485f$var$Tf()) {
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Uf:
        return 99;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Vf:
        return 98;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Wf:
        return 97;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Xf:
        return 96;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Yf:
        return 95;
      default:
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(332));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fg(a) {
    switch (a) {
      case 99:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Uf;
      case 98:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Vf;
      case 97:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Wf;
      case 96:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Xf;
      case 95:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Yf;
      default:
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(332));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gg(a, b) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$fg(a);
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Nf(a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hg(a, b, c) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$fg(a);
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Of(a, b, c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ig() {
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$bg) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$bg;
      $0fe3ed5fa0b6906a4118024a9033485f$var$bg = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Pf(a);
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$jg();
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$jg() {
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$cg && null !== $0fe3ed5fa0b6906a4118024a9033485f$var$ag) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$cg = !0;
      var a = 0;
      try {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$ag;
        $0fe3ed5fa0b6906a4118024a9033485f$var$gg(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];
            do c = c(!0); while (null !== c);
          }
        });
        $0fe3ed5fa0b6906a4118024a9033485f$var$ag = null;
      } catch (c) {
        throw (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$ag && ($0fe3ed5fa0b6906a4118024a9033485f$var$ag = $0fe3ed5fa0b6906a4118024a9033485f$var$ag.slice(a + 1)), $0fe3ed5fa0b6906a4118024a9033485f$var$Of($0fe3ed5fa0b6906a4118024a9033485f$var$Uf, $0fe3ed5fa0b6906a4118024a9033485f$var$ig), c);
      } finally {
        $0fe3ed5fa0b6906a4118024a9033485f$var$cg = !1;
      }
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$lg(a, b) {
    if (a && a.defaultProps) {
      b = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qg() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$pg = $0fe3ed5fa0b6906a4118024a9033485f$var$og = $0fe3ed5fa0b6906a4118024a9033485f$var$ng = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rg(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$mg.current;
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$mg);
    a.type._context._currentValue = b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sg(a, b) {
    for (; null !== a; ) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) if (null === c || (c.childLanes & b) === b) break; else c.childLanes |= b; else (a.childLanes |= b, null !== c && (c.childLanes |= b));
      a = a.return;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$tg(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$ng = a;
    $0fe3ed5fa0b6906a4118024a9033485f$var$pg = $0fe3ed5fa0b6906a4118024a9033485f$var$og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && ($0fe3ed5fa0b6906a4118024a9033485f$var$ug = !0), a.firstContext = null);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$vg(a, b) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$pg !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) ($0fe3ed5fa0b6906a4118024a9033485f$var$pg = a, b = 1073741823);
      b = {
        context: a,
        observedBits: b,
        next: null
      };
      if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$og) {
        if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$ng) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(308));
        $0fe3ed5fa0b6906a4118024a9033485f$var$og = b;
        $0fe3ed5fa0b6906a4118024a9033485f$var$ng.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else $0fe3ed5fa0b6906a4118024a9033485f$var$og = $0fe3ed5fa0b6906a4118024a9033485f$var$og.next = b;
    }
    return a._currentValue;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$xg(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$yg(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$zg(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(a, b) {
    a = a.updateQueue;
    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Bg(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(a, b, c, d) {
    var e = a.updateQueue;
    $0fe3ed5fa0b6906a4118024a9033485f$var$wg = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;
      if (null !== n) {
        n = n.updateQueue;
        var A = n.lastBaseUpdate;
        A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
      }
    }
    if (null !== f) {
      A = e.baseState;
      g = 0;
      n = l = k = null;
      do {
        h = f.lane;
        var p = f.eventTime;
        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          a: {
            var C = a, x = f;
            h = b;
            p = c;
            switch (x.tag) {
              case 1:
                C = x.payload;
                if ("function" === typeof C) {
                  A = C.call(p, A, h);
                  break a;
                }
                A = C;
                break a;
              case 3:
                C.flags = C.flags & -4097 | 64;
              case 0:
                C = x.payload;
                h = "function" === typeof C ? C.call(p, A, h) : C;
                if (null === h || void 0 === h) break a;
                A = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, A, h);
                break a;
              case 2:
                $0fe3ed5fa0b6906a4118024a9033485f$var$wg = !0;
            }
          }
          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else (p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h);
        f = f.next;
        if (null === f) if ((h = e.shared.pending, null === h)) break; else (f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null);
      } while (1);
      null === n && (k = A);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Dg |= g;
      a.lanes = g;
      a.memoizedState = A;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Eg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(191, e));
        e.call(d);
      }
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Gg(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Lg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !$0fe3ed5fa0b6906a4118024a9033485f$var$Je(c, d) || !$0fe3ed5fa0b6906a4118024a9033485f$var$Je(e, f) : !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Mg(a, b, c) {
    var d = !1, e = $0fe3ed5fa0b6906a4118024a9033485f$var$Cf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = $0fe3ed5fa0b6906a4118024a9033485f$var$vg(f) : (e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(b) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Df : $0fe3ed5fa0b6906a4118024a9033485f$var$M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(a, e) : $0fe3ed5fa0b6906a4118024a9033485f$var$Cf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = $0fe3ed5fa0b6906a4118024a9033485f$var$Kg;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ng(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && $0fe3ed5fa0b6906a4118024a9033485f$var$Kg.enqueueReplaceState(b, b.state, null);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Og(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = $0fe3ed5fa0b6906a4118024a9033485f$var$Fg;
    $0fe3ed5fa0b6906a4118024a9033485f$var$xg(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = $0fe3ed5fa0b6906a4118024a9033485f$var$vg(f) : (f = $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(b) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Df : $0fe3ed5fa0b6906a4118024a9033485f$var$M.current, e.context = $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(a, f));
    $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gg(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && $0fe3ed5fa0b6906a4118024a9033485f$var$Kg.enqueueReplaceState(e, e.state, null), $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(309));
          var d = c.stateNode;
        }
        if (!d) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
        b = function (a) {
          var b = d.refs;
          b === $0fe3ed5fa0b6906a4118024a9033485f$var$Fg && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };
        b._stringRef = e;
        return b;
      }
      if ("string" !== typeof a) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(284));
      if (!c._owner) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(290, a));
    }
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Rg(a, b) {
    if ("textarea" !== a.type) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Sg(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d; ) (b(c, d), d = d.sibling);
      return null;
    }
    function d(a, b) {
      for (a = new Map(); null !== b; ) (null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling);
      return a;
    }
    function e(a, b) {
      a = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }
    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return (d = d.index, d < c ? (b.flags = 2, c) : d);
      b.flags = 2;
      return c;
    }
    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }
    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ug(c, a.mode, d), b.return = a, b);
      b = e(b, c);
      b.return = a;
      return b;
    }
    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return (d = e(b, c.props), d.ref = $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, b, c), d.return = a, d);
      d = $0fe3ed5fa0b6906a4118024a9033485f$var$Vg(c.type, c.key, c.props, null, a.mode, d);
      d.ref = $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, b, c);
      d.return = a;
      return d;
    }
    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Wg(c, a.mode, d), b.return = a, b);
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }
    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(c, a.mode, d, f), b.return = a, b);
      b = e(b, c);
      b.return = a;
      return b;
    }
    function A(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ug("" + b, a.mode, c), b.return = a, b);
      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case $0fe3ed5fa0b6906a4118024a9033485f$var$sa:
            return (c = $0fe3ed5fa0b6906a4118024a9033485f$var$Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, null, b), c.return = a, c);
          case $0fe3ed5fa0b6906a4118024a9033485f$var$ta:
            return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Wg(b, a.mode, c), b.return = a, b);
        }
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$Pg(b) || $0fe3ed5fa0b6906a4118024a9033485f$var$La(b)) return (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(b, a.mode, c, null), b.return = a, b);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Rg(a, b);
      }
      return null;
    }
    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case $0fe3ed5fa0b6906a4118024a9033485f$var$sa:
            return c.key === e ? c.type === $0fe3ed5fa0b6906a4118024a9033485f$var$ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$ta:
            return c.key === e ? l(a, b, c, d) : null;
        }
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$Pg(c) || $0fe3ed5fa0b6906a4118024a9033485f$var$La(c)) return null !== e ? null : n(a, b, c, d, null);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Rg(a, c);
      }
      return null;
    }
    function C(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return (a = a.get(c) || null, h(b, a, "" + d, e));
      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case $0fe3ed5fa0b6906a4118024a9033485f$var$sa:
            return (a = a.get(null === d.key ? c : d.key) || null, d.type === $0fe3ed5fa0b6906a4118024a9033485f$var$ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e));
          case $0fe3ed5fa0b6906a4118024a9033485f$var$ta:
            return (a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e));
        }
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$Pg(d) || $0fe3ed5fa0b6906a4118024a9033485f$var$La(d)) return (a = a.get(c) || null, n(b, a, d, e, null));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Rg(b, d);
      }
      return null;
    }
    function x(e, g, h, k) {
      for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var n = p(e, u, h[z], k);
        if (null === n) {
          null === u && (u = q);
          break;
        }
        a && u && null === n.alternate && b(e, u);
        g = f(n, g, z);
        null === t ? l = n : t.sibling = n;
        t = n;
        u = q;
      }
      if (z === h.length) return (c(e, u), l);
      if (null === u) {
        for (; z < h.length; z++) (u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u));
        return l;
      }
      for (u = d(e, u); z < h.length; z++) (q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q));
      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }
    function w(e, g, h, k) {
      var l = $0fe3ed5fa0b6906a4118024a9033485f$var$La(h);
      if ("function" !== typeof l) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(150));
      h = l.call(h);
      if (null == h) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(151));
      for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; (z++, n = h.next())) {
        u.index > z ? (q = u, u = null) : q = u.sibling;
        var w = p(e, u, n.value, k);
        if (null === w) {
          null === u && (u = q);
          break;
        }
        a && u && null === w.alternate && b(e, u);
        g = f(w, g, z);
        null === t ? l = w : t.sibling = w;
        t = w;
        u = q;
      }
      if (n.done) return (c(e, u), l);
      if (null === u) {
        for (; !n.done; (z++, n = h.next())) (n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n));
        return l;
      }
      for (u = d(e, u); !n.done; (z++, n = h.next())) (n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n));
      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }
    return function (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === $0fe3ed5fa0b6906a4118024a9033485f$var$ua && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case $0fe3ed5fa0b6906a4118024a9033485f$var$sa:
          a: {
            l = f.key;
            for (k = d; null !== k; ) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === $0fe3ed5fa0b6906a4118024a9033485f$var$ua) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }
                    break;
                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }
                }
                c(a, k);
                break;
              } else b(a, k);
              k = k.sibling;
            }
            f.type === $0fe3ed5fa0b6906a4118024a9033485f$var$ua ? (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $0fe3ed5fa0b6906a4118024a9033485f$var$Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = $0fe3ed5fa0b6906a4118024a9033485f$var$Qg(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case $0fe3ed5fa0b6906a4118024a9033485f$var$ta:
          a: {
            for (k = f.key; null !== d; ) {
              if (d.key === k) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || []);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              } else b(a, d);
              d = d.sibling;
            }
            d = $0fe3ed5fa0b6906a4118024a9033485f$var$Wg(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ug(f, a.mode, h), d.return = a, a = d), g(a));
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$Pg(f)) return x(a, d, f, h);
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$La(f)) return w(a, d, f, h);
      l && $0fe3ed5fa0b6906a4118024a9033485f$var$Rg(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(152, $0fe3ed5fa0b6906a4118024a9033485f$var$Ra(a.type) || "Component"));
      }
      return c(a, d);
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$dh(a) {
    if (a === $0fe3ed5fa0b6906a4118024a9033485f$var$$g) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(174));
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$eh(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$ch, b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$bh, a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$ah, $0fe3ed5fa0b6906a4118024a9033485f$var$$g);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : $0fe3ed5fa0b6906a4118024a9033485f$var$mb(null, "");
        break;
      default:
        (a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = $0fe3ed5fa0b6906a4118024a9033485f$var$mb(b, a));
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$ah);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$ah, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fh() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$ah);
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$bh);
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$ch);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gh(a) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ch.current);
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ah.current);
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$mb(b, a.type);
    b !== c && ($0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$bh, a), $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$ah, c));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hh(a) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$bh.current === a && ($0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$ah), $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$bh));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ih(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mh(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$oh(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, !0) : !1;
      case 6:
        return (b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1);
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ph(a) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$lh) {
      var b = $0fe3ed5fa0b6906a4118024a9033485f$var$kh;
      if (b) {
        var c = b;
        if (!$0fe3ed5fa0b6906a4118024a9033485f$var$oh(a, b)) {
          b = $0fe3ed5fa0b6906a4118024a9033485f$var$rf(c.nextSibling);
          if (!b || !$0fe3ed5fa0b6906a4118024a9033485f$var$oh(a, b)) {
            a.flags = a.flags & -1025 | 2;
            $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !1;
            $0fe3ed5fa0b6906a4118024a9033485f$var$jh = a;
            return;
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$mh($0fe3ed5fa0b6906a4118024a9033485f$var$jh, c);
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$jh = a;
        $0fe3ed5fa0b6906a4118024a9033485f$var$kh = $0fe3ed5fa0b6906a4118024a9033485f$var$rf(b.firstChild);
      } else (a.flags = a.flags & -1025 | 2, $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$jh = a);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qh(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    $0fe3ed5fa0b6906a4118024a9033485f$var$jh = a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rh(a) {
    if (a !== $0fe3ed5fa0b6906a4118024a9033485f$var$jh) return !1;
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$lh) return ($0fe3ed5fa0b6906a4118024a9033485f$var$qh(a), $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !0, !1);
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !$0fe3ed5fa0b6906a4118024a9033485f$var$nf(b, a.memoizedProps)) for (b = $0fe3ed5fa0b6906a4118024a9033485f$var$kh; b; ) ($0fe3ed5fa0b6906a4118024a9033485f$var$mh(a, b), b = $0fe3ed5fa0b6906a4118024a9033485f$var$rf(b.nextSibling));
    $0fe3ed5fa0b6906a4118024a9033485f$var$qh(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                $0fe3ed5fa0b6906a4118024a9033485f$var$kh = $0fe3ed5fa0b6906a4118024a9033485f$var$rf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$kh = null;
      }
    } else $0fe3ed5fa0b6906a4118024a9033485f$var$kh = $0fe3ed5fa0b6906a4118024a9033485f$var$jh ? $0fe3ed5fa0b6906a4118024a9033485f$var$rf(a.stateNode.nextSibling) : null;
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sh() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$kh = $0fe3ed5fa0b6906a4118024a9033485f$var$jh = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$uh() {
    for (var a = 0; a < $0fe3ed5fa0b6906a4118024a9033485f$var$th.length; a++) $0fe3ed5fa0b6906a4118024a9033485f$var$th[a]._workInProgressVersionPrimary = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$th.length = 0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ah() {
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(321));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Bh(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++) if (!$0fe3ed5fa0b6906a4118024a9033485f$var$He(a[c], b[c])) return !1;
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ch(a, b, c, d, e, f) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$xh = f;
    $0fe3ed5fa0b6906a4118024a9033485f$var$R = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    $0fe3ed5fa0b6906a4118024a9033485f$var$vh.current = null === a || null === a.memoizedState ? $0fe3ed5fa0b6906a4118024a9033485f$var$Dh : $0fe3ed5fa0b6906a4118024a9033485f$var$Eh;
    a = c(d, e);
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$zh) {
      f = 0;
      do {
        $0fe3ed5fa0b6906a4118024a9033485f$var$zh = !1;
        if (!(25 > f)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(301));
        f += 1;
        $0fe3ed5fa0b6906a4118024a9033485f$var$T = $0fe3ed5fa0b6906a4118024a9033485f$var$S = null;
        b.updateQueue = null;
        $0fe3ed5fa0b6906a4118024a9033485f$var$vh.current = $0fe3ed5fa0b6906a4118024a9033485f$var$Fh;
        a = c(d, e);
      } while ($0fe3ed5fa0b6906a4118024a9033485f$var$zh);
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$vh.current = $0fe3ed5fa0b6906a4118024a9033485f$var$Gh;
    b = null !== $0fe3ed5fa0b6906a4118024a9033485f$var$S && null !== $0fe3ed5fa0b6906a4118024a9033485f$var$S.next;
    $0fe3ed5fa0b6906a4118024a9033485f$var$xh = 0;
    $0fe3ed5fa0b6906a4118024a9033485f$var$T = $0fe3ed5fa0b6906a4118024a9033485f$var$S = $0fe3ed5fa0b6906a4118024a9033485f$var$R = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$yh = !1;
    if (b) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(300));
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Hh() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === $0fe3ed5fa0b6906a4118024a9033485f$var$T ? $0fe3ed5fa0b6906a4118024a9033485f$var$R.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$T = a : $0fe3ed5fa0b6906a4118024a9033485f$var$T = $0fe3ed5fa0b6906a4118024a9033485f$var$T.next = a;
    return $0fe3ed5fa0b6906a4118024a9033485f$var$T;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ih() {
    if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$S) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$R.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = $0fe3ed5fa0b6906a4118024a9033485f$var$S.next;
    var b = null === $0fe3ed5fa0b6906a4118024a9033485f$var$T ? $0fe3ed5fa0b6906a4118024a9033485f$var$R.memoizedState : $0fe3ed5fa0b6906a4118024a9033485f$var$T.next;
    if (null !== b) ($0fe3ed5fa0b6906a4118024a9033485f$var$T = b, $0fe3ed5fa0b6906a4118024a9033485f$var$S = a); else {
      if (null === a) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(310));
      $0fe3ed5fa0b6906a4118024a9033485f$var$S = a;
      a = {
        memoizedState: $0fe3ed5fa0b6906a4118024a9033485f$var$S.memoizedState,
        baseState: $0fe3ed5fa0b6906a4118024a9033485f$var$S.baseState,
        baseQueue: $0fe3ed5fa0b6906a4118024a9033485f$var$S.baseQueue,
        queue: $0fe3ed5fa0b6906a4118024a9033485f$var$S.queue,
        next: null
      };
      null === $0fe3ed5fa0b6906a4118024a9033485f$var$T ? $0fe3ed5fa0b6906a4118024a9033485f$var$R.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$T = a : $0fe3ed5fa0b6906a4118024a9033485f$var$T = $0fe3ed5fa0b6906a4118024a9033485f$var$T.next = a;
    }
    return $0fe3ed5fa0b6906a4118024a9033485f$var$T;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Jh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Kh(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih(), c = b.queue;
    if (null === c) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(311));
    c.lastRenderedReducer = a;
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$S, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null, k = e;
      do {
        var l = k.lane;
        if (($0fe3ed5fa0b6906a4118024a9033485f$var$xh & l) === l) (null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action)); else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          $0fe3ed5fa0b6906a4118024a9033485f$var$R.lanes |= l;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Dg |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);
      null === h ? f = d : h.next = g;
      $0fe3ed5fa0b6906a4118024a9033485f$var$He(d, b.memoizedState) || ($0fe3ed5fa0b6906a4118024a9033485f$var$ug = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Lh(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih(), c = b.queue;
    if (null === c) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do (f = a(f, g.action), g = g.next); while (g !== e);
      $0fe3ed5fa0b6906a4118024a9033485f$var$He(f, b.memoizedState) || ($0fe3ed5fa0b6906a4118024a9033485f$var$ug = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Mh(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = b._workInProgressVersionPrimary;
    if (null !== e) a = e === d; else if ((a = a.mutableReadLanes, a = ($0fe3ed5fa0b6906a4118024a9033485f$var$xh & a) === a)) (b._workInProgressVersionPrimary = d, $0fe3ed5fa0b6906a4118024a9033485f$var$th.push(b));
    if (a) return c(b._source);
    $0fe3ed5fa0b6906a4118024a9033485f$var$th.push(b);
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(350));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Nh(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$U;
    if (null === e) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(349));
    var f = b._getVersion, g = f(b._source), h = $0fe3ed5fa0b6906a4118024a9033485f$var$vh.current, k = h.useState(function () {
      return $0fe3ed5fa0b6906a4118024a9033485f$var$Mh(e, b, c);
    }), l = k[1], n = k[0];
    k = $0fe3ed5fa0b6906a4118024a9033485f$var$T;
    var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
    A = A.subscribe;
    var w = $0fe3ed5fa0b6906a4118024a9033485f$var$R;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$He(g, a)) {
        a = c(b._source);
        $0fe3ed5fa0b6906a4118024a9033485f$var$He(n, a) || (l(a), a = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;
        for (var d = e.entanglements, h = a; 0 < h; ) {
          var k = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(h), v = 1 << k;
          d[k] |= a;
          h &= ~v;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot, c = p.setSnapshot;
        try {
          c(a(b._source));
          var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(w);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (q) {
          c(function () {
            throw q;
          });
        }
      });
    }, [b, d]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$He(C, c) && $0fe3ed5fa0b6906a4118024a9033485f$var$He(x, b) && $0fe3ed5fa0b6906a4118024a9033485f$var$He(A, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: $0fe3ed5fa0b6906a4118024a9033485f$var$Jh,
      lastRenderedState: n
    }, a.dispatch = l = $0fe3ed5fa0b6906a4118024a9033485f$var$Oh.bind(null, $0fe3ed5fa0b6906a4118024a9033485f$var$R, a), k.queue = a, k.baseQueue = null, n = $0fe3ed5fa0b6906a4118024a9033485f$var$Mh(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ph(a, b, c) {
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih();
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Nh(d, a, b, c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Qh(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: $0fe3ed5fa0b6906a4118024a9033485f$var$Jh,
      lastRenderedState: a
    };
    a = a.dispatch = $0fe3ed5fa0b6906a4118024a9033485f$var$Oh.bind(null, $0fe3ed5fa0b6906a4118024a9033485f$var$R, a);
    return [b.memoizedState, a];
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Rh(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$R.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Sh(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Th() {
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Ih().memoizedState;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Uh(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
    $0fe3ed5fa0b6906a4118024a9033485f$var$R.flags |= a;
    e.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$Rh(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Vh(a, b, c, d) {
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$S) {
      var g = $0fe3ed5fa0b6906a4118024a9033485f$var$S.memoizedState;
      f = g.destroy;
      if (null !== d && $0fe3ed5fa0b6906a4118024a9033485f$var$Bh(d, g.deps)) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Rh(b, c, f, d);
        return;
      }
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$R.flags |= a;
    e.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$Rh(1 | b, c, f, d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wh(a, b) {
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Uh(516, 4, a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xh(a, b) {
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Vh(516, 4, a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Yh(a, b) {
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Vh(4, 2, a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Zh(a, b) {
    if ("function" === typeof b) return (a = a(), b(a), function () {
      b(null);
    });
    if (null !== b && void 0 !== b) return (a = a(), b.current = a, function () {
      b.current = null;
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$h(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return $0fe3ed5fa0b6906a4118024a9033485f$var$Vh(4, 2, $0fe3ed5fa0b6906a4118024a9033485f$var$Zh.bind(null, b, a), c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ai() {}
  function $0fe3ed5fa0b6906a4118024a9033485f$var$bi(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $0fe3ed5fa0b6906a4118024a9033485f$var$Bh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ci(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $0fe3ed5fa0b6906a4118024a9033485f$var$Bh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$di(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$eg();
    $0fe3ed5fa0b6906a4118024a9033485f$var$gg(98 > c ? 98 : c, function () {
      a(!0);
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$gg(97 < c ? 97 : c, function () {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition;
      $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = 1;
      try {
        (a(!1), b());
      } finally {
        $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = c;
      }
    });
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Oh(a, b, c) {
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a), f = {
      lane: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === $0fe3ed5fa0b6906a4118024a9033485f$var$R || null !== g && g === $0fe3ed5fa0b6906a4118024a9033485f$var$R) $0fe3ed5fa0b6906a4118024a9033485f$var$zh = $0fe3ed5fa0b6906a4118024a9033485f$var$yh = !0; else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$He(k, h)) return;
      } catch (l) {} finally {}
      $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, e, d);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, c, d) {
    b.child = null === a ? $0fe3ed5fa0b6906a4118024a9033485f$var$Zg(b, null, c, d) : $0fe3ed5fa0b6906a4118024a9033485f$var$Yg(b, a.child, c, d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, e);
    d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ch(a, b, c, d, f, e);
    if (null !== a && !$0fe3ed5fa0b6906a4118024a9033485f$var$ug) return (b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, e));
    b.flags |= 1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, d, e);
    return b.child;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ii(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !$0fe3ed5fa0b6906a4118024a9033485f$var$ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return (b.tag = 15, b.type = g, $0fe3ed5fa0b6906a4118024a9033485f$var$ki(a, b, g, d, e, f));
      a = $0fe3ed5fa0b6906a4118024a9033485f$var$Vg(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : $0fe3ed5fa0b6906a4118024a9033485f$var$Je, c(e, d) && a.ref === b.ref)) return $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, f);
    b.flags |= 1;
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ki(a, b, c, d, e, f) {
    if (null !== a && $0fe3ed5fa0b6906a4118024a9033485f$var$Je(a.memoizedProps, d) && a.ref === b.ref) if (($0fe3ed5fa0b6906a4118024a9033485f$var$ug = !1, 0 !== (f & e))) 0 !== (a.flags & 16384) && ($0fe3ed5fa0b6906a4118024a9033485f$var$ug = !0); else return (b.lanes = a.lanes, $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, f));
    return $0fe3ed5fa0b6906a4118024a9033485f$var$li(a, b, c, d, f);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mi(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) if (0 === (b.mode & 4)) (b.memoizedState = {
      baseLanes: 0
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$ni(b, c)); else if (0 !== (c & 1073741824)) (b.memoizedState = {
      baseLanes: 0
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$ni(b, null !== f ? f.baseLanes : c)); else return (a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
      baseLanes: a
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$ni(b, a), null); else (null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, $0fe3ed5fa0b6906a4118024a9033485f$var$ni(b, d));
    $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, e, c);
    return b.child;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$oi(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$li(a, b, c, d, e) {
    var f = $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(c) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Df : $0fe3ed5fa0b6906a4118024a9033485f$var$M.current;
    f = $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(b, f);
    $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, e);
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ch(a, b, c, d, f, e);
    if (null !== a && !$0fe3ed5fa0b6906a4118024a9033485f$var$ug) return (b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, e));
    b.flags |= 1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, c, e);
    return b.child;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$pi(a, b, c, d, e) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(c)) {
      var f = !0;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Jf(b);
    } else f = !1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, e);
    if (null === b.stateNode) (null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), $0fe3ed5fa0b6906a4118024a9033485f$var$Mg(b, c, d), $0fe3ed5fa0b6906a4118024a9033485f$var$Og(b, c, d, e), d = !0); else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = $0fe3ed5fa0b6906a4118024a9033485f$var$vg(l) : (l = $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(c) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Df : $0fe3ed5fa0b6906a4118024a9033485f$var$M.current, l = $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(b, l));
      var n = c.getDerivedStateFromProps, A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && $0fe3ed5fa0b6906a4118024a9033485f$var$Ng(b, g, d, l);
      $0fe3ed5fa0b6906a4118024a9033485f$var$wg = !1;
      var p = b.memoizedState;
      g.state = p;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || $0fe3ed5fa0b6906a4118024a9033485f$var$N.current || $0fe3ed5fa0b6906a4118024a9033485f$var$wg ? ("function" === typeof n && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gg(b, c, n, d), k = b.memoizedState), (h = $0fe3ed5fa0b6906a4118024a9033485f$var$wg || $0fe3ed5fa0b6906a4118024a9033485f$var$Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      $0fe3ed5fa0b6906a4118024a9033485f$var$yg(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(b.type, h);
      g.props = l;
      A = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = $0fe3ed5fa0b6906a4118024a9033485f$var$vg(k) : (k = $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(c) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Df : $0fe3ed5fa0b6906a4118024a9033485f$var$M.current, k = $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(b, k));
      var C = c.getDerivedStateFromProps;
      (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && $0fe3ed5fa0b6906a4118024a9033485f$var$Ng(b, g, d, k);
      $0fe3ed5fa0b6906a4118024a9033485f$var$wg = !1;
      p = b.memoizedState;
      g.state = p;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(b, d, g, e);
      var x = b.memoizedState;
      h !== A || p !== x || $0fe3ed5fa0b6906a4118024a9033485f$var$N.current || $0fe3ed5fa0b6906a4118024a9033485f$var$wg ? ("function" === typeof C && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gg(b, c, C, d), x = b.memoizedState), (l = $0fe3ed5fa0b6906a4118024a9033485f$var$wg || $0fe3ed5fa0b6906a4118024a9033485f$var$Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return $0fe3ed5fa0b6906a4118024a9033485f$var$qi(a, b, c, d, f, e);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qi(a, b, c, d, e, f) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$oi(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return (e && $0fe3ed5fa0b6906a4118024a9033485f$var$Kf(b, c, !1), $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, f));
    d = b.stateNode;
    $0fe3ed5fa0b6906a4118024a9033485f$var$ei.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = $0fe3ed5fa0b6906a4118024a9033485f$var$Yg(b, a.child, null, f), b.child = $0fe3ed5fa0b6906a4118024a9033485f$var$Yg(b, null, h, f)) : $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, h, f);
    b.memoizedState = d.state;
    e && $0fe3ed5fa0b6906a4118024a9033485f$var$Kf(b, c, !0);
    return b.child;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ri(a) {
    var b = a.stateNode;
    b.pendingContext ? $0fe3ed5fa0b6906a4118024a9033485f$var$Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $0fe3ed5fa0b6906a4118024a9033485f$var$Hf(a, b.context, !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$eh(a, b.containerInfo);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ti(a, b, c) {
    var d = b.pendingProps, e = $0fe3ed5fa0b6906a4118024a9033485f$var$P.current, f = !1, g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, e & 1);
    if (null === a) {
      void 0 !== d.fallback && $0fe3ed5fa0b6906a4118024a9033485f$var$ph(b);
      a = d.children;
      e = d.fallback;
      if (f) return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$si, a);
      if ("number" === typeof d.unstable_expectedLoadTime) return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$ui(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$si, b.lanes = 33554432, a);
      c = $0fe3ed5fa0b6906a4118024a9033485f$var$vi({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }
    if (null !== a.memoizedState) {
      if (f) return (d = $0fe3ed5fa0b6906a4118024a9033485f$var$wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$si, d);
      c = $0fe3ed5fa0b6906a4118024a9033485f$var$xi(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    if (f) return (d = $0fe3ed5fa0b6906a4118024a9033485f$var$wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = $0fe3ed5fa0b6906a4118024a9033485f$var$si, d);
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ui(a, b, c, d) {
    var e = a.mode, f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = $0fe3ed5fa0b6906a4118024a9033485f$var$vi(b, e, 0, null);
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$xi(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$wi(a, b, c, d, e) {
    var f = b.mode, g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(g, h);
    null !== a ? d = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a, d) : (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$yi(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$sg(a.return, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$zi(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ai(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, d.children, c);
    d = $0fe3ed5fa0b6906a4118024a9033485f$var$P.current;
    if (0 !== (d & 2)) (d = d & 1 | 2, b.flags |= 64); else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && $0fe3ed5fa0b6906a4118024a9033485f$var$yi(a, c); else if (19 === a.tag) $0fe3ed5fa0b6906a4118024a9033485f$var$yi(a, c); else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, d);
    if (0 === (b.mode & 2)) b.memoizedState = null; else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) (a = c.alternate, null !== a && null === $0fe3ed5fa0b6906a4118024a9033485f$var$ih(a) && (e = c), c = c.sibling);
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        $0fe3ed5fa0b6906a4118024a9033485f$var$zi(b, !1, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === $0fe3ed5fa0b6906a4118024a9033485f$var$ih(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$zi(b, !0, c, null, f, b.lastEffect);
        break;
      case "together":
        $0fe3ed5fa0b6906a4118024a9033485f$var$zi(b, !1, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Dg |= b.lanes;
    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(153));
      if (null !== b.child) {
        a = b.child;
        c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) (a = a.sibling, c = c.sibling = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a, a.pendingProps), c.return = b);
        c.sibling = null;
      }
      return b.child;
    }
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(a, b) {
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$lh) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) (null !== b.alternate && (c = b), b = b.sibling);
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) (null !== c.alternate && (d = c), c = c.sibling);
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Gi(a, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(b.type) && $0fe3ed5fa0b6906a4118024a9033485f$var$Gf(), null);
      case 3:
        $0fe3ed5fa0b6906a4118024a9033485f$var$fh();
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N);
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$M);
        $0fe3ed5fa0b6906a4118024a9033485f$var$uh();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) $0fe3ed5fa0b6906a4118024a9033485f$var$rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ci(b);
        return null;
      case 5:
        $0fe3ed5fa0b6906a4118024a9033485f$var$hh(b);
        var e = $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ch.current);
        c = b.type;
        if (null !== a && null != b.stateNode) ($0fe3ed5fa0b6906a4118024a9033485f$var$Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128)); else {
          if (!d) {
            if (null === b.stateNode) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(166));
            return null;
          }
          a = $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ah.current);
          if ($0fe3ed5fa0b6906a4118024a9033485f$var$rh(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[$0fe3ed5fa0b6906a4118024a9033485f$var$wf] = b;
            d[$0fe3ed5fa0b6906a4118024a9033485f$var$xf] = f;
            switch (c) {
              case "dialog":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("cancel", d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("load", d);
                break;
              case "video":
              case "audio":
                for (a = 0; a < $0fe3ed5fa0b6906a4118024a9033485f$var$Xe.length; a++) $0fe3ed5fa0b6906a4118024a9033485f$var$G($0fe3ed5fa0b6906a4118024a9033485f$var$Xe[a], d);
                break;
              case "source":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("error", d);
                break;
              case "img":
              case "image":
              case "link":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("error", d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("load", d);
                break;
              case "details":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("toggle", d);
                break;
              case "input":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Za(d, f);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", d);
                break;
              case "select":
                d._wrapperState = {
                  wasMultiple: !!f.multiple
                };
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", d);
                break;
              case "textarea":
                ($0fe3ed5fa0b6906a4118024a9033485f$var$hb(d, f), $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", d));
            }
            $0fe3ed5fa0b6906a4118024a9033485f$var$vb(c, f);
            a = null;
            for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : $0fe3ed5fa0b6906a4118024a9033485f$var$ca.hasOwnProperty(g) && null != e && "onScroll" === g && $0fe3ed5fa0b6906a4118024a9033485f$var$G("scroll", d));
            switch (c) {
              case "input":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Va(d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$cb(d, f, !0);
                break;
              case "textarea":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Va(d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = $0fe3ed5fa0b6906a4118024a9033485f$var$jf);
            }
            d = a;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            a === $0fe3ed5fa0b6906a4118024a9033485f$var$kb.html && (a = $0fe3ed5fa0b6906a4118024a9033485f$var$lb(c));
            a === $0fe3ed5fa0b6906a4118024a9033485f$var$kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
              is: d.is
            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[$0fe3ed5fa0b6906a4118024a9033485f$var$wf] = b;
            a[$0fe3ed5fa0b6906a4118024a9033485f$var$xf] = d;
            $0fe3ed5fa0b6906a4118024a9033485f$var$Bi(a, b, !1, !1);
            b.stateNode = a;
            g = $0fe3ed5fa0b6906a4118024a9033485f$var$wb(c, d);
            switch (c) {
              case "dialog":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("cancel", a);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < $0fe3ed5fa0b6906a4118024a9033485f$var$Xe.length; e++) $0fe3ed5fa0b6906a4118024a9033485f$var$G($0fe3ed5fa0b6906a4118024a9033485f$var$Xe[e], a);
                e = d;
                break;
              case "source":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("error", a);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("load", a);
                e = d;
                break;
              case "details":
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("toggle", a);
                e = d;
                break;
              case "input":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Za(a, d);
                e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ya(a, d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", a);
                break;
              case "option":
                e = $0fe3ed5fa0b6906a4118024a9033485f$var$eb(a, d);
                break;
              case "select":
                a._wrapperState = {
                  wasMultiple: !!d.multiple
                };
                e = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, d, {
                  value: void 0
                });
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", a);
                break;
              case "textarea":
                $0fe3ed5fa0b6906a4118024a9033485f$var$hb(a, d);
                e = $0fe3ed5fa0b6906a4118024a9033485f$var$gb(a, d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$G("invalid", a);
                break;
              default:
                e = d;
            }
            $0fe3ed5fa0b6906a4118024a9033485f$var$vb(c, e);
            var h = e;
            for (f in h) if (h.hasOwnProperty(f)) {
              var k = h[f];
              "style" === f ? $0fe3ed5fa0b6906a4118024a9033485f$var$tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && $0fe3ed5fa0b6906a4118024a9033485f$var$ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && $0fe3ed5fa0b6906a4118024a9033485f$var$pb(a, k) : "number" === typeof k && $0fe3ed5fa0b6906a4118024a9033485f$var$pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && ($0fe3ed5fa0b6906a4118024a9033485f$var$ca.hasOwnProperty(f) ? null != k && "onScroll" === f && $0fe3ed5fa0b6906a4118024a9033485f$var$G("scroll", a) : null != k && $0fe3ed5fa0b6906a4118024a9033485f$var$qa(a, f, k, g));
            }
            switch (c) {
              case "input":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Va(a);
                $0fe3ed5fa0b6906a4118024a9033485f$var$cb(a, d, !1);
                break;
              case "textarea":
                $0fe3ed5fa0b6906a4118024a9033485f$var$Va(a);
                $0fe3ed5fa0b6906a4118024a9033485f$var$jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + $0fe3ed5fa0b6906a4118024a9033485f$var$Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? $0fe3ed5fa0b6906a4118024a9033485f$var$fb(a, !!d.multiple, f, !1) : null != d.defaultValue && $0fe3ed5fa0b6906a4118024a9033485f$var$fb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = $0fe3ed5fa0b6906a4118024a9033485f$var$jf);
            }
            $0fe3ed5fa0b6906a4118024a9033485f$var$mf(c, d) && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 128);
        }
        return null;
      case 6:
        if (a && null != b.stateNode) $0fe3ed5fa0b6906a4118024a9033485f$var$Ei(a, b, a.memoizedProps, d); else {
          if ("string" !== typeof d && null === b.stateNode) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(166));
          c = $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ch.current);
          $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ah.current);
          $0fe3ed5fa0b6906a4118024a9033485f$var$rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[$0fe3ed5fa0b6906a4118024a9033485f$var$wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[$0fe3ed5fa0b6906a4118024a9033485f$var$wf] = b, b.stateNode = d);
        }
        return null;
      case 13:
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return (b.lanes = c, b);
        d = null !== d;
        c = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && $0fe3ed5fa0b6906a4118024a9033485f$var$rh(b) : c = null !== a.memoizedState;
        if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$P.current & 1)) 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$V && ($0fe3ed5fa0b6906a4118024a9033485f$var$V = 3); else {
          if (0 === $0fe3ed5fa0b6906a4118024a9033485f$var$V || 3 === $0fe3ed5fa0b6906a4118024a9033485f$var$V) $0fe3ed5fa0b6906a4118024a9033485f$var$V = 4;
          null === $0fe3ed5fa0b6906a4118024a9033485f$var$U || 0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$Dg & 134217727) && 0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$Hi & 134217727) || $0fe3ed5fa0b6906a4118024a9033485f$var$Ii($0fe3ed5fa0b6906a4118024a9033485f$var$U, $0fe3ed5fa0b6906a4118024a9033485f$var$W);
        }
        if (d || c) b.flags |= 4;
        return null;
      case 4:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$fh(), $0fe3ed5fa0b6906a4118024a9033485f$var$Ci(b), null === a && $0fe3ed5fa0b6906a4118024a9033485f$var$cf(b.stateNode.containerInfo), null);
      case 10:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$rg(b), null);
      case 17:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(b.type) && $0fe3ed5fa0b6906a4118024a9033485f$var$Gf(), null);
      case 19:
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P);
        d = b.memoizedState;
        if (null === d) return null;
        f = 0 !== (b.flags & 64);
        g = d.rendering;
        if (null === g) if (f) $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(d, !1); else {
          if (0 !== $0fe3ed5fa0b6906a4118024a9033485f$var$V || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a; ) {
            g = $0fe3ed5fa0b6906a4118024a9033485f$var$ih(a);
            if (null !== g) {
              b.flags |= 64;
              $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(d, !1);
              f = g.updateQueue;
              null !== f && (b.updateQueue = f, b.flags |= 4);
              null === d.lastEffect && (b.firstEffect = null);
              b.lastEffect = d.lastEffect;
              d = c;
              for (c = b.child; null !== c; ) (f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                lanes: a.lanes,
                firstContext: a.firstContext
              }), c = c.sibling);
              $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, $0fe3ed5fa0b6906a4118024a9033485f$var$P.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== d.tail && $0fe3ed5fa0b6906a4118024a9033485f$var$O() > $0fe3ed5fa0b6906a4118024a9033485f$var$Ji && (b.flags |= 64, f = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(d, !1), b.lanes = 33554432);
        } else {
          if (!f) if ((a = $0fe3ed5fa0b6906a4118024a9033485f$var$ih(g), null !== a)) {
            if ((b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !$0fe3ed5fa0b6906a4118024a9033485f$var$lh)) return (b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null);
          } else 2 * $0fe3ed5fa0b6906a4118024a9033485f$var$O() - d.renderingStartTime > $0fe3ed5fa0b6906a4118024a9033485f$var$Ji && 1073741824 !== c && (b.flags |= 64, f = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$Fi(d, !1), b.lanes = 33554432);
          d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
        }
        return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $0fe3ed5fa0b6906a4118024a9033485f$var$O(), c.sibling = null, b = $0fe3ed5fa0b6906a4118024a9033485f$var$P.current, $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, f ? b & 1 | 2 : b & 1), c) : null;
      case 23:
      case 24:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null);
    }
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(156, b.tag));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Li(a) {
    switch (a.tag) {
      case 1:
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(a.type) && $0fe3ed5fa0b6906a4118024a9033485f$var$Gf();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
      case 3:
        $0fe3ed5fa0b6906a4118024a9033485f$var$fh();
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N);
        $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$M);
        $0fe3ed5fa0b6906a4118024a9033485f$var$uh();
        b = a.flags;
        if (0 !== (b & 64)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(285));
        a.flags = b & -4097 | 64;
        return a;
      case 5:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$hh(a), null);
      case 13:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null);
      case 19:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P), null);
      case 4:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$fh(), null);
      case 10:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$rg(a), null);
      case 23:
      case 24:
        return ($0fe3ed5fa0b6906a4118024a9033485f$var$Ki(), null);
      default:
        return null;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Mi(a, b) {
    try {
      var c = "", d = b;
      do (c += $0fe3ed5fa0b6906a4118024a9033485f$var$Qa(d), d = d.return); while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
      value: a,
      source: b,
      stack: e
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ni(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Pi(a, b, c) {
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;
    c.callback = function () {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Qi || ($0fe3ed5fa0b6906a4118024a9033485f$var$Qi = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ri = d);
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ni(a, b);
    };
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Si(a, b, c) {
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ni(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Ti ? $0fe3ed5fa0b6906a4118024a9033485f$var$Ti = new Set([this]) : $0fe3ed5fa0b6906a4118024a9033485f$var$Ti.add(this), $0fe3ed5fa0b6906a4118024a9033485f$var$Ni(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Vi(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(a, c);
    } else b.current = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xi(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps, d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
        b.flags & 256 && $0fe3ed5fa0b6906a4118024a9033485f$var$qf(b.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(163));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Yi(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }
            a = a.next;
          } while (a !== b);
        }
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && ($0fe3ed5fa0b6906a4118024a9033485f$var$Zi(c, a), $0fe3ed5fa0b6906a4118024a9033485f$var$$i(c, a));
            a = d;
          } while (a !== b);
        }
        return;
      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && $0fe3ed5fa0b6906a4118024a9033485f$var$Eg(c, b, a);
        return;
      case 3:
        b = c.updateQueue;
        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$Eg(c, b, a);
        }
        return;
      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && $0fe3ed5fa0b6906a4118024a9033485f$var$mf(c.type, c.memoizedProps) && a.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && $0fe3ed5fa0b6906a4118024a9033485f$var$Cc(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(163));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$aj(a, b) {
    for (var c = a; ; ) {
      if (5 === c.tag) {
        var d = c.stateNode;
        if (b) (d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none"); else {
          d = c.stateNode;
          var e = c.memoizedProps.style;
          e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
          d.style.display = $0fe3ed5fa0b6906a4118024a9033485f$var$sb("display", e);
        }
      } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps; else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$bj(a, b) {
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Mf && "function" === typeof $0fe3ed5fa0b6906a4118024a9033485f$var$Mf.onCommitFiberUnmount) try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Mf.onCommitFiberUnmount($0fe3ed5fa0b6906a4118024a9033485f$var$Lf, b);
    } catch (f) {}
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;
        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;
          do {
            var d = c, e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) $0fe3ed5fa0b6906a4118024a9033485f$var$Zi(b, c); else {
              d = b;
              try {
                e();
              } catch (f) {
                $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }
        break;
      case 1:
        $0fe3ed5fa0b6906a4118024a9033485f$var$Vi(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          (a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount());
        } catch (f) {
          $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(b, f);
        }
        break;
      case 5:
        $0fe3ed5fa0b6906a4118024a9033485f$var$Vi(b);
        break;
      case 4:
        $0fe3ed5fa0b6906a4118024a9033485f$var$cj(a, b);
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$dj(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ej(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fj(a) {
    a: {
      for (var b = a.return; null !== b; ) {
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$ej(b)) break a;
        b = b.return;
      }
      throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(160));
    }
    var c = b;
    b = c.stateNode;
    switch (c.tag) {
      case 5:
        var d = !1;
        break;
      case 3:
        b = b.containerInfo;
        d = !0;
        break;
      case 4:
        b = b.containerInfo;
        d = !0;
        break;
      default:
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(161));
    }
    c.flags & 16 && ($0fe3ed5fa0b6906a4118024a9033485f$var$pb(b, ""), c.flags &= -17);
    a: b: for (c = a; ; ) {
      for (; null === c.sibling; ) {
        if (null === c.return || $0fe3ed5fa0b6906a4118024a9033485f$var$ej(c.return)) {
          c = null;
          break a;
        }
        c = c.return;
      }
      c.sibling.return = c.return;
      for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
        if (c.flags & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b; else (c.child.return = c, c = c.child);
      }
      if (!(c.flags & 2)) {
        c = c.stateNode;
        break a;
      }
    }
    d ? $0fe3ed5fa0b6906a4118024a9033485f$var$gj(a, c, b) : $0fe3ed5fa0b6906a4118024a9033485f$var$hj(a, c, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gj(a, b, c) {
    var d = a.tag, e = 5 === d || 6 === d;
    if (e) (a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = $0fe3ed5fa0b6906a4118024a9033485f$var$jf))); else if (4 !== d && (a = a.child, null !== a)) for (($0fe3ed5fa0b6906a4118024a9033485f$var$gj(a, b, c), a = a.sibling); null !== a; ) ($0fe3ed5fa0b6906a4118024a9033485f$var$gj(a, b, c), a = a.sibling);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hj(a, b, c) {
    var d = a.tag, e = 5 === d || 6 === d;
    if (e) (a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a)); else if (4 !== d && (a = a.child, null !== a)) for (($0fe3ed5fa0b6906a4118024a9033485f$var$hj(a, b, c), a = a.sibling); null !== a; ) ($0fe3ed5fa0b6906a4118024a9033485f$var$hj(a, b, c), a = a.sibling);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$cj(a, b) {
    for (var c = b, d = !1, e, f; ; ) {
      if (!d) {
        d = c.return;
        a: for (; ; ) {
          if (null === d) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = !1;
              break a;
            case 3:
              e = e.containerInfo;
              f = !0;
              break a;
            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }
          d = d.return;
        }
        d = !0;
      }
      if (5 === c.tag || 6 === c.tag) {
        a: for (var g = a, h = c, k = h; ; ) if (($0fe3ed5fa0b6906a4118024a9033485f$var$bj(g, k), null !== k.child && 4 !== k.tag)) (k.child.return = k, k = k.child); else {
          if (k === h) break a;
          for (; null === k.sibling; ) {
            if (null === k.return || k.return === h) break a;
            k = k.return;
          }
          k.sibling.return = k.return;
          k = k.sibling;
        }
        f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
      } else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (($0fe3ed5fa0b6906a4118024a9033485f$var$bj(a, c), null !== c.child)) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ij(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var c = b.updateQueue;
        c = null !== c ? c.lastEffect : null;
        if (null !== c) {
          var d = c = c.next;
          do (3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next); while (d !== c);
        }
        return;
      case 1:
        return;
      case 5:
        c = b.stateNode;
        if (null != c) {
          d = b.memoizedProps;
          var e = null !== a ? a.memoizedProps : d;
          a = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;
          if (null !== f) {
            c[$0fe3ed5fa0b6906a4118024a9033485f$var$xf] = d;
            "input" === a && "radio" === d.type && null != d.name && $0fe3ed5fa0b6906a4118024a9033485f$var$$a(c, d);
            $0fe3ed5fa0b6906a4118024a9033485f$var$wb(a, e);
            b = $0fe3ed5fa0b6906a4118024a9033485f$var$wb(a, d);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e], h = f[e + 1];
              "style" === g ? $0fe3ed5fa0b6906a4118024a9033485f$var$tb(c, h) : "dangerouslySetInnerHTML" === g ? $0fe3ed5fa0b6906a4118024a9033485f$var$ob(c, h) : "children" === g ? $0fe3ed5fa0b6906a4118024a9033485f$var$pb(c, h) : $0fe3ed5fa0b6906a4118024a9033485f$var$qa(c, g, h, b);
            }
            switch (a) {
              case "input":
                $0fe3ed5fa0b6906a4118024a9033485f$var$ab(c, d);
                break;
              case "textarea":
                $0fe3ed5fa0b6906a4118024a9033485f$var$ib(c, d);
                break;
              case "select":
                (a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? $0fe3ed5fa0b6906a4118024a9033485f$var$fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? $0fe3ed5fa0b6906a4118024a9033485f$var$fb(c, !!d.multiple, d.defaultValue, !0) : $0fe3ed5fa0b6906a4118024a9033485f$var$fb(c, !!d.multiple, d.multiple ? [] : "", !1)));
            }
          }
        }
        return;
      case 6:
        if (null === b.stateNode) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;
      case 3:
        c = b.stateNode;
        c.hydrate && (c.hydrate = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Cc(c.containerInfo));
        return;
      case 12:
        return;
      case 13:
        null !== b.memoizedState && ($0fe3ed5fa0b6906a4118024a9033485f$var$jj = $0fe3ed5fa0b6906a4118024a9033485f$var$O(), $0fe3ed5fa0b6906a4118024a9033485f$var$aj(b.child, !0));
        $0fe3ed5fa0b6906a4118024a9033485f$var$kj(b);
        return;
      case 19:
        $0fe3ed5fa0b6906a4118024a9033485f$var$kj(b);
        return;
      case 17:
        return;
      case 23:
      case 24:
        $0fe3ed5fa0b6906a4118024a9033485f$var$aj(b, null !== b.memoizedState);
        return;
    }
    throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(163));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$kj(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new $0fe3ed5fa0b6906a4118024a9033485f$var$Ui());
      b.forEach(function (b) {
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$lj.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mj(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$wj() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ji = $0fe3ed5fa0b6906a4118024a9033485f$var$O() + 500;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Hg() {
    return 0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48) ? $0fe3ed5fa0b6906a4118024a9033485f$var$O() : -1 !== $0fe3ed5fa0b6906a4118024a9033485f$var$Fj ? $0fe3ed5fa0b6906a4118024a9033485f$var$Fj : $0fe3ed5fa0b6906a4118024a9033485f$var$Fj = $0fe3ed5fa0b6906a4118024a9033485f$var$O();
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === $0fe3ed5fa0b6906a4118024a9033485f$var$eg() ? 1 : 2;
    0 === $0fe3ed5fa0b6906a4118024a9033485f$var$Gj && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gj = $0fe3ed5fa0b6906a4118024a9033485f$var$tj);
    if (0 !== $0fe3ed5fa0b6906a4118024a9033485f$var$kg.transition) {
      0 !== $0fe3ed5fa0b6906a4118024a9033485f$var$Hj && ($0fe3ed5fa0b6906a4118024a9033485f$var$Hj = null !== $0fe3ed5fa0b6906a4118024a9033485f$var$vj ? $0fe3ed5fa0b6906a4118024a9033485f$var$vj.pendingLanes : 0);
      a = $0fe3ed5fa0b6906a4118024a9033485f$var$Gj;
      var b = 4186112 & ~$0fe3ed5fa0b6906a4118024a9033485f$var$Hj;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$eg();
    0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 4) && 98 === a ? a = $0fe3ed5fa0b6906a4118024a9033485f$var$Xc(12, $0fe3ed5fa0b6906a4118024a9033485f$var$Gj) : (a = $0fe3ed5fa0b6906a4118024a9033485f$var$Sc(a), a = $0fe3ed5fa0b6906a4118024a9033485f$var$Xc(a, $0fe3ed5fa0b6906a4118024a9033485f$var$Gj));
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, b, c) {
    if (50 < $0fe3ed5fa0b6906a4118024a9033485f$var$Dj) throw ($0fe3ed5fa0b6906a4118024a9033485f$var$Dj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ej = null, Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(185)));
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$Kj(a, b);
    if (null === a) return null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$$c(a, b, c);
    a === $0fe3ed5fa0b6906a4118024a9033485f$var$U && ($0fe3ed5fa0b6906a4118024a9033485f$var$Hi |= b, 4 === $0fe3ed5fa0b6906a4118024a9033485f$var$V && $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, $0fe3ed5fa0b6906a4118024a9033485f$var$W));
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$eg();
    1 === b ? 0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 8) && 0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Lj(a) : ($0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, c), 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$X && ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$ig())) : (0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 4) || 98 !== d && 99 !== d || (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Cj ? $0fe3ed5fa0b6906a4118024a9033485f$var$Cj = new Set([a]) : $0fe3ed5fa0b6906a4118024a9033485f$var$Cj.add(a)), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, c));
    $0fe3ed5fa0b6906a4118024a9033485f$var$vj = a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Kj(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) (a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return);
    return 3 === c.tag ? c.stateNode : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
      var h = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(g), k = 1 << h, l = f[h];
      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Rc(k);
          var n = $0fe3ed5fa0b6906a4118024a9033485f$var$F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);
      g &= ~k;
    }
    d = $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, a === $0fe3ed5fa0b6906a4118024a9033485f$var$U ? $0fe3ed5fa0b6906a4118024a9033485f$var$W : 0);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$F;
    if (0 === d) null !== c && (c !== $0fe3ed5fa0b6906a4118024a9033485f$var$Zf && $0fe3ed5fa0b6906a4118024a9033485f$var$Pf(c), a.callbackNode = null, a.callbackPriority = 0); else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== $0fe3ed5fa0b6906a4118024a9033485f$var$Zf && $0fe3ed5fa0b6906a4118024a9033485f$var$Pf(c);
      }
      15 === b ? (c = $0fe3ed5fa0b6906a4118024a9033485f$var$Lj.bind(null, a), null === $0fe3ed5fa0b6906a4118024a9033485f$var$ag ? ($0fe3ed5fa0b6906a4118024a9033485f$var$ag = [c], $0fe3ed5fa0b6906a4118024a9033485f$var$bg = $0fe3ed5fa0b6906a4118024a9033485f$var$Of($0fe3ed5fa0b6906a4118024a9033485f$var$Uf, $0fe3ed5fa0b6906a4118024a9033485f$var$jg)) : $0fe3ed5fa0b6906a4118024a9033485f$var$ag.push(c), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Zf) : 14 === b ? c = $0fe3ed5fa0b6906a4118024a9033485f$var$hg(99, $0fe3ed5fa0b6906a4118024a9033485f$var$Lj.bind(null, a)) : (c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tc(b), c = $0fe3ed5fa0b6906a4118024a9033485f$var$hg(c, $0fe3ed5fa0b6906a4118024a9033485f$var$Nj.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Nj(a) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Fj = -1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Hj = $0fe3ed5fa0b6906a4118024a9033485f$var$Gj = 0;
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(327));
    var b = a.callbackNode;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Oj() && a.callbackNode !== b) return null;
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, a === $0fe3ed5fa0b6906a4118024a9033485f$var$U ? $0fe3ed5fa0b6906a4118024a9033485f$var$W : 0);
    if (0 === c) return null;
    var d = c;
    var e = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 16;
    var f = $0fe3ed5fa0b6906a4118024a9033485f$var$Pj();
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$U !== a || $0fe3ed5fa0b6906a4118024a9033485f$var$W !== d) ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, d));
    do try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Rj();
      break;
    } catch (h) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Sj(a, h);
    } while (1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$qg();
    $0fe3ed5fa0b6906a4118024a9033485f$var$oj.current = f;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X = e;
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Y ? d = 0 : ($0fe3ed5fa0b6906a4118024a9033485f$var$U = null, $0fe3ed5fa0b6906a4118024a9033485f$var$W = 0, d = $0fe3ed5fa0b6906a4118024a9033485f$var$V);
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$tj & $0fe3ed5fa0b6906a4118024a9033485f$var$Hi)) $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, 0); else if (0 !== d) {
      2 === d && ($0fe3ed5fa0b6906a4118024a9033485f$var$X |= 64, a.hydrate && (a.hydrate = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$qf(a.containerInfo)), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Wc(a), 0 !== c && (d = $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, c)));
      if (1 === d) throw (b = $0fe3ed5fa0b6906a4118024a9033485f$var$sj, $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, 0), $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, c), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O()), b);
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;
      switch (d) {
        case 0:
        case 1:
          throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(345));
        case 2:
          $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a);
          break;
        case 3:
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, c);
          if ((c & 62914560) === c && (d = $0fe3ed5fa0b6906a4118024a9033485f$var$jj + 500 - $0fe3ed5fa0b6906a4118024a9033485f$var$O(), 10 < d)) {
            if (0 !== $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & c) !== c) {
              $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = $0fe3ed5fa0b6906a4118024a9033485f$var$of($0fe3ed5fa0b6906a4118024a9033485f$var$Uj.bind(null, a), d);
            break;
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a);
          break;
        case 4:
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;
          for (e = -1; 0 < c; ) {
            var g = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }
          c = e;
          c = $0fe3ed5fa0b6906a4118024a9033485f$var$O() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * $0fe3ed5fa0b6906a4118024a9033485f$var$nj(c / 1960)) - c;
          if (10 < c) {
            a.timeoutHandle = $0fe3ed5fa0b6906a4118024a9033485f$var$of($0fe3ed5fa0b6906a4118024a9033485f$var$Uj.bind(null, a), c);
            break;
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a);
          break;
        case 5:
          $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a);
          break;
        default:
          throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(329));
      }
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O());
    return a.callbackNode === b ? $0fe3ed5fa0b6906a4118024a9033485f$var$Nj.bind(null, a) : null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, b) {
    b &= ~$0fe3ed5fa0b6906a4118024a9033485f$var$uj;
    b &= ~$0fe3ed5fa0b6906a4118024a9033485f$var$Hi;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Lj(a) {
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(327));
    $0fe3ed5fa0b6906a4118024a9033485f$var$Oj();
    if (a === $0fe3ed5fa0b6906a4118024a9033485f$var$U && 0 !== (a.expiredLanes & $0fe3ed5fa0b6906a4118024a9033485f$var$W)) {
      var b = $0fe3ed5fa0b6906a4118024a9033485f$var$W;
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, b);
      0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$tj & $0fe3ed5fa0b6906a4118024a9033485f$var$Hi) && (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, b), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, b));
    } else (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Uc(a, 0), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, b));
    0 !== a.tag && 2 === c && ($0fe3ed5fa0b6906a4118024a9033485f$var$X |= 64, a.hydrate && (a.hydrate = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$qf(a.containerInfo)), b = $0fe3ed5fa0b6906a4118024a9033485f$var$Wc(a), 0 !== b && (c = $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, b)));
    if (1 === c) throw (c = $0fe3ed5fa0b6906a4118024a9033485f$var$sj, $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, 0), $0fe3ed5fa0b6906a4118024a9033485f$var$Ii(a, b), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O()), c);
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O());
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Vj() {
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Cj) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$Cj;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Cj = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O());
      });
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$ig();
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wj(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 1;
    try {
      return a(b);
    } finally {
      ($0fe3ed5fa0b6906a4118024a9033485f$var$X = c, 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$X && ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$ig()));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xj(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X &= -2;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 8;
    try {
      return a(b);
    } finally {
      ($0fe3ed5fa0b6906a4118024a9033485f$var$X = c, 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$X && ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$ig()));
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ni(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$rj, $0fe3ed5fa0b6906a4118024a9033485f$var$qj);
    $0fe3ed5fa0b6906a4118024a9033485f$var$qj |= b;
    $0fe3ed5fa0b6906a4118024a9033485f$var$tj |= b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ki() {
    $0fe3ed5fa0b6906a4118024a9033485f$var$qj = $0fe3ed5fa0b6906a4118024a9033485f$var$rj.current;
    $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$rj);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, $0fe3ed5fa0b6906a4118024a9033485f$var$pf(c));
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Y) for (c = $0fe3ed5fa0b6906a4118024a9033485f$var$Y.return; null !== c; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $0fe3ed5fa0b6906a4118024a9033485f$var$Gf();
          break;
        case 3:
          $0fe3ed5fa0b6906a4118024a9033485f$var$fh();
          $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$N);
          $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$M);
          $0fe3ed5fa0b6906a4118024a9033485f$var$uh();
          break;
        case 5:
          $0fe3ed5fa0b6906a4118024a9033485f$var$hh(d);
          break;
        case 4:
          $0fe3ed5fa0b6906a4118024a9033485f$var$fh();
          break;
        case 13:
          $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P);
          break;
        case 19:
          $0fe3ed5fa0b6906a4118024a9033485f$var$H($0fe3ed5fa0b6906a4118024a9033485f$var$P);
          break;
        case 10:
          $0fe3ed5fa0b6906a4118024a9033485f$var$rg(d);
          break;
        case 23:
        case 24:
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ki();
      }
      c = c.return;
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$U = a;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Y = $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a.current, null);
    $0fe3ed5fa0b6906a4118024a9033485f$var$W = $0fe3ed5fa0b6906a4118024a9033485f$var$qj = $0fe3ed5fa0b6906a4118024a9033485f$var$tj = b;
    $0fe3ed5fa0b6906a4118024a9033485f$var$V = 0;
    $0fe3ed5fa0b6906a4118024a9033485f$var$sj = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$uj = $0fe3ed5fa0b6906a4118024a9033485f$var$Hi = $0fe3ed5fa0b6906a4118024a9033485f$var$Dg = 0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Sj(a, b) {
    do {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Y;
      try {
        $0fe3ed5fa0b6906a4118024a9033485f$var$qg();
        $0fe3ed5fa0b6906a4118024a9033485f$var$vh.current = $0fe3ed5fa0b6906a4118024a9033485f$var$Gh;
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$yh) {
          for (var d = $0fe3ed5fa0b6906a4118024a9033485f$var$R.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$yh = !1;
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$xh = 0;
        $0fe3ed5fa0b6906a4118024a9033485f$var$T = $0fe3ed5fa0b6906a4118024a9033485f$var$S = $0fe3ed5fa0b6906a4118024a9033485f$var$R = null;
        $0fe3ed5fa0b6906a4118024a9033485f$var$zh = !1;
        $0fe3ed5fa0b6906a4118024a9033485f$var$pj.current = null;
        if (null === c || null === c.return) {
          $0fe3ed5fa0b6906a4118024a9033485f$var$V = 1;
          $0fe3ed5fa0b6906a4118024a9033485f$var$sj = b;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = $0fe3ed5fa0b6906a4118024a9033485f$var$W;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k;
            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }
            var A = 0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$P.current & 1), p = g;
            do {
              var C;
              if (C = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) C = null !== x.dehydrated ? !0 : !1; else {
                  var w = p.memoizedProps;
                  C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
                }
              }
              if (C) {
                var z = p.updateQueue;
                if (null === z) {
                  var u = new Set();
                  u.add(l);
                  p.updateQueue = u;
                } else z.add(l);
                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17; else {
                    var t = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(-1, 1);
                    t.tag = 2;
                    $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(h, t);
                  }
                  h.lanes |= 1;
                  break a;
                }
                k = void 0;
                h = b;
                var q = f.pingCache;
                null === q ? (q = f.pingCache = new $0fe3ed5fa0b6906a4118024a9033485f$var$Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));
                if (!k.has(h)) {
                  k.add(h);
                  var v = $0fe3ed5fa0b6906a4118024a9033485f$var$Yj.bind(null, f, l, h);
                  l.then(v, v);
                }
                p.flags |= 4096;
                p.lanes = b;
                break a;
              }
              p = p.return;
            } while (null !== p);
            k = Error(($0fe3ed5fa0b6906a4118024a9033485f$var$Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }
          5 !== $0fe3ed5fa0b6906a4118024a9033485f$var$V && ($0fe3ed5fa0b6906a4118024a9033485f$var$V = 2);
          k = $0fe3ed5fa0b6906a4118024a9033485f$var$Mi(k, h);
          p = g;
          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var J = $0fe3ed5fa0b6906a4118024a9033485f$var$Pi(p, f, b);
                $0fe3ed5fa0b6906a4118024a9033485f$var$Bg(p, J);
                break a;
              case 1:
                f = k;
                var K = p.type, Q = p.stateNode;
                if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Ti || !$0fe3ed5fa0b6906a4118024a9033485f$var$Ti.has(Q)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var L = $0fe3ed5fa0b6906a4118024a9033485f$var$Si(p, f, b);
                  $0fe3ed5fa0b6906a4118024a9033485f$var$Bg(p, L);
                  break a;
                }
            }
            p = p.return;
          } while (null !== p);
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$Zj(c);
      } catch (va) {
        b = va;
        $0fe3ed5fa0b6906a4118024a9033485f$var$Y === c && null !== c && ($0fe3ed5fa0b6906a4118024a9033485f$var$Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Pj() {
    var a = $0fe3ed5fa0b6906a4118024a9033485f$var$oj.current;
    $0fe3ed5fa0b6906a4118024a9033485f$var$oj.current = $0fe3ed5fa0b6906a4118024a9033485f$var$Gh;
    return null === a ? $0fe3ed5fa0b6906a4118024a9033485f$var$Gh : a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Tj(a, b) {
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 16;
    var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Pj();
    $0fe3ed5fa0b6906a4118024a9033485f$var$U === a && $0fe3ed5fa0b6906a4118024a9033485f$var$W === b || $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, b);
    do try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$ak();
      break;
    } catch (e) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Sj(a, e);
    } while (1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$qg();
    $0fe3ed5fa0b6906a4118024a9033485f$var$X = c;
    $0fe3ed5fa0b6906a4118024a9033485f$var$oj.current = d;
    if (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Y) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(261));
    $0fe3ed5fa0b6906a4118024a9033485f$var$U = null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$W = 0;
    return $0fe3ed5fa0b6906a4118024a9033485f$var$V;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ak() {
    for (; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Y; ) $0fe3ed5fa0b6906a4118024a9033485f$var$bk($0fe3ed5fa0b6906a4118024a9033485f$var$Y);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Rj() {
    for (; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Y && !$0fe3ed5fa0b6906a4118024a9033485f$var$Qf(); ) $0fe3ed5fa0b6906a4118024a9033485f$var$bk($0fe3ed5fa0b6906a4118024a9033485f$var$Y);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$bk(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$ck(a.alternate, a, $0fe3ed5fa0b6906a4118024a9033485f$var$qj);
    a.memoizedProps = a.pendingProps;
    null === b ? $0fe3ed5fa0b6906a4118024a9033485f$var$Zj(a) : $0fe3ed5fa0b6906a4118024a9033485f$var$Y = b;
    $0fe3ed5fa0b6906a4118024a9033485f$var$pj.current = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Zj(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 2048)) {
        c = $0fe3ed5fa0b6906a4118024a9033485f$var$Gi(c, b, $0fe3ed5fa0b6906a4118024a9033485f$var$qj);
        if (null !== c) {
          $0fe3ed5fa0b6906a4118024a9033485f$var$Y = c;
          return;
        }
        c = b;
        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$qj & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e; ) (d |= e.lanes | e.childLanes, e = e.sibling);
          c.childLanes = d;
        }
        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = $0fe3ed5fa0b6906a4118024a9033485f$var$Li(b);
        if (null !== c) {
          c.flags &= 2047;
          $0fe3ed5fa0b6906a4118024a9033485f$var$Y = c;
          return;
        }
        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }
      b = b.sibling;
      if (null !== b) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Y = b;
        return;
      }
      $0fe3ed5fa0b6906a4118024a9033485f$var$Y = b = a;
    } while (null !== b);
    0 === $0fe3ed5fa0b6906a4118024a9033485f$var$V && ($0fe3ed5fa0b6906a4118024a9033485f$var$V = 5);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Uj(a) {
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$eg();
    $0fe3ed5fa0b6906a4118024a9033485f$var$gg(99, $0fe3ed5fa0b6906a4118024a9033485f$var$dk.bind(null, a, b));
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$dk(a, b) {
    do $0fe3ed5fa0b6906a4118024a9033485f$var$Oj(); while (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$yj);
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;
    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
      var k = 31 - $0fe3ed5fa0b6906a4118024a9033485f$var$Vc(f), l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }
    null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Cj && 0 === (d & 24) && $0fe3ed5fa0b6906a4118024a9033485f$var$Cj.has(a) && $0fe3ed5fa0b6906a4118024a9033485f$var$Cj.delete(a);
    a === $0fe3ed5fa0b6906a4118024a9033485f$var$U && ($0fe3ed5fa0b6906a4118024a9033485f$var$Y = $0fe3ed5fa0b6906a4118024a9033485f$var$U = null, $0fe3ed5fa0b6906a4118024a9033485f$var$W = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
    if (null !== d) {
      e = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
      $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 32;
      $0fe3ed5fa0b6906a4118024a9033485f$var$pj.current = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$kf = $0fe3ed5fa0b6906a4118024a9033485f$var$fd;
      g = $0fe3ed5fa0b6906a4118024a9033485f$var$Ne();
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$Oe(g)) {
        if (("selectionStart" in g)) h = {
          start: g.selectionStart,
          end: g.selectionEnd
        }; else a: if ((h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount)) {
          h = l.anchorNode;
          f = l.anchorOffset;
          k = l.focusNode;
          l = l.focusOffset;
          try {
            (h.nodeType, k.nodeType);
          } catch (va) {
            h = null;
            break a;
          }
          var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
          b: for (; ; ) {
            for (var u; ; ) {
              w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
              w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
              3 === w.nodeType && (n += w.nodeValue.length);
              if (null === (u = w.firstChild)) break;
              z = w;
              w = u;
            }
            for (; ; ) {
              if (w === g) break b;
              z === h && ++C === f && (A = n);
              z === k && ++x === l && (p = n);
              if (null !== (u = w.nextSibling)) break;
              w = z;
              z = w.parentNode;
            }
            w = u;
          }
          h = -1 === A || -1 === p ? null : {
            start: A,
            end: p
          };
        } else h = null;
        h = h || ({
          start: 0,
          end: 0
        });
      } else h = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$lf = {
        focusedElem: g,
        selectionRange: h
      };
      $0fe3ed5fa0b6906a4118024a9033485f$var$fd = !1;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ij = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Jj = !1;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Z = d;
      do try {
        $0fe3ed5fa0b6906a4118024a9033485f$var$ek();
      } catch (va) {
        if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Z) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(330));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wi($0fe3ed5fa0b6906a4118024a9033485f$var$Z, va);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
      } while (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ij = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Z = d;
      do try {
        for (g = a; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z; ) {
          var t = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags;
          t & 16 && $0fe3ed5fa0b6906a4118024a9033485f$var$pb($0fe3ed5fa0b6906a4118024a9033485f$var$Z.stateNode, "");
          if (t & 128) {
            var q = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate;
            if (null !== q) {
              var v = q.ref;
              null !== v && ("function" === typeof v ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              $0fe3ed5fa0b6906a4118024a9033485f$var$fj($0fe3ed5fa0b6906a4118024a9033485f$var$Z);
              $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags &= -3;
              break;
            case 6:
              $0fe3ed5fa0b6906a4118024a9033485f$var$fj($0fe3ed5fa0b6906a4118024a9033485f$var$Z);
              $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags &= -3;
              $0fe3ed5fa0b6906a4118024a9033485f$var$ij($0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate, $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
              break;
            case 1024:
              $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags &= -1025;
              break;
            case 1028:
              $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags &= -1025;
              $0fe3ed5fa0b6906a4118024a9033485f$var$ij($0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate, $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
              break;
            case 4:
              $0fe3ed5fa0b6906a4118024a9033485f$var$ij($0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate, $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
              break;
            case 8:
              h = $0fe3ed5fa0b6906a4118024a9033485f$var$Z;
              $0fe3ed5fa0b6906a4118024a9033485f$var$cj(g, h);
              var J = h.alternate;
              $0fe3ed5fa0b6906a4118024a9033485f$var$dj(h);
              null !== J && $0fe3ed5fa0b6906a4118024a9033485f$var$dj(J);
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
        }
      } catch (va) {
        if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Z) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(330));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wi($0fe3ed5fa0b6906a4118024a9033485f$var$Z, va);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
      } while (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
      v = $0fe3ed5fa0b6906a4118024a9033485f$var$lf;
      q = $0fe3ed5fa0b6906a4118024a9033485f$var$Ne();
      t = v.focusedElem;
      g = v.selectionRange;
      if (q !== t && t && t.ownerDocument && $0fe3ed5fa0b6906a4118024a9033485f$var$Me(t.ownerDocument.documentElement, t)) {
        null !== g && $0fe3ed5fa0b6906a4118024a9033485f$var$Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), ("selectionStart" in t) ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = $0fe3ed5fa0b6906a4118024a9033485f$var$Le(t, J), f = $0fe3ed5fa0b6906a4118024a9033485f$var$Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
        q = [];
        for (v = t; v = v.parentNode; ) 1 === v.nodeType && q.push({
          element: v,
          left: v.scrollLeft,
          top: v.scrollTop
        });
        "function" === typeof t.focus && t.focus();
        for (t = 0; t < q.length; t++) (v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top);
      }
      $0fe3ed5fa0b6906a4118024a9033485f$var$fd = !!$0fe3ed5fa0b6906a4118024a9033485f$var$kf;
      $0fe3ed5fa0b6906a4118024a9033485f$var$lf = $0fe3ed5fa0b6906a4118024a9033485f$var$kf = null;
      a.current = c;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Z = d;
      do try {
        for (t = a; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z; ) {
          var K = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags;
          K & 36 && $0fe3ed5fa0b6906a4118024a9033485f$var$Yi(t, $0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate, $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
          if (K & 128) {
            q = void 0;
            var Q = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.ref;
            if (null !== Q) {
              var L = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.stateNode;
              switch ($0fe3ed5fa0b6906a4118024a9033485f$var$Z.tag) {
                case 5:
                  q = L;
                  break;
                default:
                  q = L;
              }
              "function" === typeof Q ? Q(q) : Q.current = q;
            }
          }
          $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
        }
      } catch (va) {
        if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Z) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(330));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wi($0fe3ed5fa0b6906a4118024a9033485f$var$Z, va);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
      } while (null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
      $0fe3ed5fa0b6906a4118024a9033485f$var$Z = null;
      $0fe3ed5fa0b6906a4118024a9033485f$var$$f();
      $0fe3ed5fa0b6906a4118024a9033485f$var$X = e;
    } else a.current = c;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$xj) ($0fe3ed5fa0b6906a4118024a9033485f$var$xj = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$yj = a, $0fe3ed5fa0b6906a4118024a9033485f$var$zj = b); else for ($0fe3ed5fa0b6906a4118024a9033485f$var$Z = d; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z; ) (b = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect, $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags & 8 && (K = $0fe3ed5fa0b6906a4118024a9033485f$var$Z, K.sibling = null, K.stateNode = null), $0fe3ed5fa0b6906a4118024a9033485f$var$Z = b);
    d = a.pendingLanes;
    0 === d && ($0fe3ed5fa0b6906a4118024a9033485f$var$Ti = null);
    1 === d ? a === $0fe3ed5fa0b6906a4118024a9033485f$var$Ej ? $0fe3ed5fa0b6906a4118024a9033485f$var$Dj++ : ($0fe3ed5fa0b6906a4118024a9033485f$var$Dj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ej = a) : $0fe3ed5fa0b6906a4118024a9033485f$var$Dj = 0;
    c = c.stateNode;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Mf && "function" === typeof $0fe3ed5fa0b6906a4118024a9033485f$var$Mf.onCommitFiberRoot) try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Mf.onCommitFiberRoot($0fe3ed5fa0b6906a4118024a9033485f$var$Lf, c, void 0, 64 === (c.current.flags & 64));
    } catch (va) {}
    $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$O());
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$Qi) throw ($0fe3ed5fa0b6906a4118024a9033485f$var$Qi = !1, a = $0fe3ed5fa0b6906a4118024a9033485f$var$Ri, $0fe3ed5fa0b6906a4118024a9033485f$var$Ri = null, a);
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 8)) return null;
    $0fe3ed5fa0b6906a4118024a9033485f$var$ig();
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ek() {
    for (; null !== $0fe3ed5fa0b6906a4118024a9033485f$var$Z; ) {
      var a = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.alternate;
      $0fe3ed5fa0b6906a4118024a9033485f$var$Jj || null === $0fe3ed5fa0b6906a4118024a9033485f$var$Ij || (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags & 8) ? $0fe3ed5fa0b6906a4118024a9033485f$var$dc($0fe3ed5fa0b6906a4118024a9033485f$var$Z, $0fe3ed5fa0b6906a4118024a9033485f$var$Ij) && ($0fe3ed5fa0b6906a4118024a9033485f$var$Jj = !0) : 13 === $0fe3ed5fa0b6906a4118024a9033485f$var$Z.tag && $0fe3ed5fa0b6906a4118024a9033485f$var$mj(a, $0fe3ed5fa0b6906a4118024a9033485f$var$Z) && $0fe3ed5fa0b6906a4118024a9033485f$var$dc($0fe3ed5fa0b6906a4118024a9033485f$var$Z, $0fe3ed5fa0b6906a4118024a9033485f$var$Ij) && ($0fe3ed5fa0b6906a4118024a9033485f$var$Jj = !0));
      var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.flags;
      0 !== (b & 256) && $0fe3ed5fa0b6906a4118024a9033485f$var$Xi(a, $0fe3ed5fa0b6906a4118024a9033485f$var$Z);
      0 === (b & 512) || $0fe3ed5fa0b6906a4118024a9033485f$var$xj || ($0fe3ed5fa0b6906a4118024a9033485f$var$xj = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$hg(97, function () {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Oj();
        return null;
      }));
      $0fe3ed5fa0b6906a4118024a9033485f$var$Z = $0fe3ed5fa0b6906a4118024a9033485f$var$Z.nextEffect;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Oj() {
    if (90 !== $0fe3ed5fa0b6906a4118024a9033485f$var$zj) {
      var a = 97 < $0fe3ed5fa0b6906a4118024a9033485f$var$zj ? 97 : $0fe3ed5fa0b6906a4118024a9033485f$var$zj;
      $0fe3ed5fa0b6906a4118024a9033485f$var$zj = 90;
      return $0fe3ed5fa0b6906a4118024a9033485f$var$gg(a, $0fe3ed5fa0b6906a4118024a9033485f$var$fk);
    }
    return !1;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$$i(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Aj.push(b, a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$xj || ($0fe3ed5fa0b6906a4118024a9033485f$var$xj = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$hg(97, function () {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Oj();
      return null;
    }));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Zi(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$Bj.push(b, a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$xj || ($0fe3ed5fa0b6906a4118024a9033485f$var$xj = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$hg(97, function () {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Oj();
      return null;
    }));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$fk() {
    if (null === $0fe3ed5fa0b6906a4118024a9033485f$var$yj) return !1;
    var a = $0fe3ed5fa0b6906a4118024a9033485f$var$yj;
    $0fe3ed5fa0b6906a4118024a9033485f$var$yj = null;
    if (0 !== ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 48)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(331));
    var b = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
    $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 32;
    var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Bj;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Bj = [];
    for (var d = 0; d < c.length; d += 2) {
      var e = c[d], f = c[d + 1], g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(330));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(f, k);
      }
    }
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Aj;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Aj = [];
    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];
      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(330));
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(f, k);
      }
    }
    for (h = a.current.firstEffect; null !== h; ) (a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a);
    $0fe3ed5fa0b6906a4118024a9033485f$var$X = b;
    $0fe3ed5fa0b6906a4118024a9033485f$var$ig();
    return !0;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$gk(a, b, c) {
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$Mi(c, b);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$Pi(a, b, 1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(a, b);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$Kj(a, 1);
    null !== a && ($0fe3ed5fa0b6906a4118024a9033485f$var$$c(a, 1, b), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, b));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wi(a, b) {
    if (3 === a.tag) $0fe3ed5fa0b6906a4118024a9033485f$var$gk(a, a, b); else for (var c = a.return; null !== c; ) {
      if (3 === c.tag) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$gk(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;
        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Ti || !$0fe3ed5fa0b6906a4118024a9033485f$var$Ti.has(d))) {
          a = $0fe3ed5fa0b6906a4118024a9033485f$var$Mi(b, a);
          var e = $0fe3ed5fa0b6906a4118024a9033485f$var$Si(c, a, 1);
          $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(c, e);
          e = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
          c = $0fe3ed5fa0b6906a4118024a9033485f$var$Kj(c, 1);
          if (null !== c) ($0fe3ed5fa0b6906a4118024a9033485f$var$$c(c, 1, e), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(c, e)); else if ("function" === typeof d.componentDidCatch && (null === $0fe3ed5fa0b6906a4118024a9033485f$var$Ti || !$0fe3ed5fa0b6906a4118024a9033485f$var$Ti.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }
      c = c.return;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Yj(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
    a.pingedLanes |= a.suspendedLanes & c;
    $0fe3ed5fa0b6906a4118024a9033485f$var$U === a && ($0fe3ed5fa0b6906a4118024a9033485f$var$W & c) === c && (4 === $0fe3ed5fa0b6906a4118024a9033485f$var$V || 3 === $0fe3ed5fa0b6906a4118024a9033485f$var$V && ($0fe3ed5fa0b6906a4118024a9033485f$var$W & 62914560) === $0fe3ed5fa0b6906a4118024a9033485f$var$W && 500 > $0fe3ed5fa0b6906a4118024a9033485f$var$O() - $0fe3ed5fa0b6906a4118024a9033485f$var$jj ? $0fe3ed5fa0b6906a4118024a9033485f$var$Qj(a, 0) : $0fe3ed5fa0b6906a4118024a9033485f$var$uj |= c);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$lj(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === $0fe3ed5fa0b6906a4118024a9033485f$var$eg() ? 1 : 2 : (0 === $0fe3ed5fa0b6906a4118024a9033485f$var$Gj && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gj = $0fe3ed5fa0b6906a4118024a9033485f$var$tj), b = $0fe3ed5fa0b6906a4118024a9033485f$var$Yc(62914560 & ~$0fe3ed5fa0b6906a4118024a9033485f$var$Gj), 0 === b && (b = 4194304)));
    c = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$Kj(a, b);
    null !== a && ($0fe3ed5fa0b6906a4118024a9033485f$var$$c(a, b, c), $0fe3ed5fa0b6906a4118024a9033485f$var$Mj(a, c));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ik(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$nh(a, b, c, d) {
    return new $0fe3ed5fa0b6906a4118024a9033485f$var$ik(a, b, c, d);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ji(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$hk(a) {
    if ("function" === typeof a) return $0fe3ed5fa0b6906a4118024a9033485f$var$ji(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === $0fe3ed5fa0b6906a4118024a9033485f$var$Aa) return 11;
      if (a === $0fe3ed5fa0b6906a4118024a9033485f$var$Da) return 14;
    }
    return 2;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Tg(a, b) {
    var c = a.alternate;
    null === c ? (c = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Vg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) $0fe3ed5fa0b6906a4118024a9033485f$var$ji(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
      case $0fe3ed5fa0b6906a4118024a9033485f$var$ua:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(c.children, e, f, b);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ha:
        g = 8;
        e |= 16;
        break;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$wa:
        g = 8;
        e |= 1;
        break;
      case $0fe3ed5fa0b6906a4118024a9033485f$var$xa:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(12, c, b, e | 8), a.elementType = $0fe3ed5fa0b6906a4118024a9033485f$var$xa, a.type = $0fe3ed5fa0b6906a4118024a9033485f$var$xa, a.lanes = f, a);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ba:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(13, c, b, e), a.type = $0fe3ed5fa0b6906a4118024a9033485f$var$Ba, a.elementType = $0fe3ed5fa0b6906a4118024a9033485f$var$Ba, a.lanes = f, a);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ca:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(19, c, b, e), a.elementType = $0fe3ed5fa0b6906a4118024a9033485f$var$Ca, a.lanes = f, a);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ia:
        return $0fe3ed5fa0b6906a4118024a9033485f$var$vi(c, e, f, b);
      case $0fe3ed5fa0b6906a4118024a9033485f$var$Ja:
        return (a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(24, c, b, e), a.elementType = $0fe3ed5fa0b6906a4118024a9033485f$var$Ja, a.lanes = f, a);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case $0fe3ed5fa0b6906a4118024a9033485f$var$ya:
            g = 10;
            break a;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$za:
            g = 9;
            break a;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$Aa:
            g = 11;
            break a;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$Da:
            g = 14;
            break a;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$Ea:
            g = 16;
            d = null;
            break a;
          case $0fe3ed5fa0b6906a4118024a9033485f$var$Fa:
            g = 22;
            break a;
        }
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(130, null == a ? a : typeof a, ""));
    }
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Xg(a, b, c, d) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$vi(a, b, c, d) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(23, a, d, b);
    a.elementType = $0fe3ed5fa0b6906a4118024a9033485f$var$Ia;
    a.lanes = c;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Ug(a, b, c) {
    a = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$Wg(a, b, c) {
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$jk(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = $0fe3ed5fa0b6906a4118024a9033485f$var$Zc(0);
    this.expirationTimes = $0fe3ed5fa0b6906a4118024a9033485f$var$Zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = $0fe3ed5fa0b6906a4118024a9033485f$var$Zc(0);
    this.mutableSourceEagerHydrationData = null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$kk(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: $0fe3ed5fa0b6906a4118024a9033485f$var$ta,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$lk(a, b, c, d) {
    var e = b.current, f = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), g = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(e);
    a: if (c) {
      c = c._reactInternals;
      b: {
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$Zb(c) !== c || 1 !== c.tag) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(171));
      }
      if (1 === c.tag) {
        var k = c.type;
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(k)) {
          c = $0fe3ed5fa0b6906a4118024a9033485f$var$If(c, k, h);
          break a;
        }
      }
      c = h;
    } else c = $0fe3ed5fa0b6906a4118024a9033485f$var$Cf;
    null === b.context ? b.context = c : b.pendingContext = c;
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(e, b);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(e, g, f);
    return g;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$mk(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$nk(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$ok(a, b) {
    $0fe3ed5fa0b6906a4118024a9033485f$var$nk(a, b);
    (a = a.alternate) && $0fe3ed5fa0b6906a4118024a9033485f$var$nk(a, b);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$pk() {
    return null;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$qk(a, b, c) {
    var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
    c = new $0fe3ed5fa0b6906a4118024a9033485f$var$jk(a, b, null != c && !0 === c.hydrate);
    b = $0fe3ed5fa0b6906a4118024a9033485f$var$nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    c.current = b;
    b.stateNode = c;
    $0fe3ed5fa0b6906a4118024a9033485f$var$xg(b);
    a[$0fe3ed5fa0b6906a4118024a9033485f$var$ff] = c.current;
    $0fe3ed5fa0b6906a4118024a9033485f$var$cf(8 === a.nodeType ? a.parentNode : a);
    if (d) for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
    this._internalRoot = c;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$rk(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$sk(a, b) {
    b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
    if (!b) for (var c; c = a.lastChild; ) a.removeChild(c);
    return new $0fe3ed5fa0b6906a4118024a9033485f$var$qk(a, 0, b ? {
      hydrate: !0
    } : void 0);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$tk(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if ("function" === typeof e) {
        var h = e;
        e = function () {
          var a = $0fe3ed5fa0b6906a4118024a9033485f$var$mk(g);
          h.call(a);
        };
      }
      $0fe3ed5fa0b6906a4118024a9033485f$var$lk(b, g, a, e);
    } else {
      f = c._reactRootContainer = $0fe3ed5fa0b6906a4118024a9033485f$var$sk(c, d);
      g = f._internalRoot;
      if ("function" === typeof e) {
        var k = e;
        e = function () {
          var a = $0fe3ed5fa0b6906a4118024a9033485f$var$mk(g);
          k.call(a);
        };
      }
      $0fe3ed5fa0b6906a4118024a9033485f$var$Xj(function () {
        $0fe3ed5fa0b6906a4118024a9033485f$var$lk(b, g, a, e);
      });
    }
    return $0fe3ed5fa0b6906a4118024a9033485f$var$mk(g);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$var$uk(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$rk(b)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(200));
    return $0fe3ed5fa0b6906a4118024a9033485f$var$kk(a, b, null, c);
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$exec() {
    $0fe3ed5fa0b6906a4118024a9033485f$exports = {};
    ($0fe3ed5fa0b6906a4118024a9033485f$var$aa = $6cebeac97b4ebedf27e6f4c716f2d918$init(), $0fe3ed5fa0b6906a4118024a9033485f$var$m = $a97fdf3f34f3143396c5badd00ea054d$init());
    $e7b0987460780cecc7357948dd79a996$init();
    if (!$0fe3ed5fa0b6906a4118024a9033485f$var$aa) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(227));
    ($0fe3ed5fa0b6906a4118024a9033485f$var$ba = new Set(), $0fe3ed5fa0b6906a4118024a9033485f$var$ca = {});
    ($0fe3ed5fa0b6906a4118024a9033485f$var$fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), $0fe3ed5fa0b6906a4118024a9033485f$var$ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $0fe3ed5fa0b6906a4118024a9033485f$var$ia = Object.prototype.hasOwnProperty, $0fe3ed5fa0b6906a4118024a9033485f$var$ja = {}, $0fe3ed5fa0b6906a4118024a9033485f$var$ka = {});
    $0fe3ed5fa0b6906a4118024a9033485f$var$D = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style").split(" ").forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 0, !1, a, null, !1, !1);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
      var b = a[0];
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[b] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(b, 1, !1, a[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 2, !1, a.toLowerCase(), null, !1, !1);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 2, !1, a, null, !1, !1);
    });
    ("allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope").split(" ").forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 3, !1, a.toLowerCase(), null, !1, !1);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 3, !0, a, null, !1, !1);
    });
    ["capture", "download"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 4, !1, a, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 6, !1, a, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 5, !1, a.toLowerCase(), null, !1, !1);
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$oa = /[\-:]([a-z])/g;
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height").split(" ").forEach(function (a) {
      var b = a.replace($0fe3ed5fa0b6906a4118024a9033485f$var$oa, $0fe3ed5fa0b6906a4118024a9033485f$var$pa);
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[b] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(b, 1, !1, a, null, !1, !1);
    });
    ("xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type").split(" ").forEach(function (a) {
      var b = a.replace($0fe3ed5fa0b6906a4118024a9033485f$var$oa, $0fe3ed5fa0b6906a4118024a9033485f$var$pa);
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[b] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
      var b = a.replace($0fe3ed5fa0b6906a4118024a9033485f$var$oa, $0fe3ed5fa0b6906a4118024a9033485f$var$pa);
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[b] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    ["tabIndex", "crossOrigin"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 1, !1, a.toLowerCase(), null, !1, !1);
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$D.xlinkHref = new $0fe3ed5fa0b6906a4118024a9033485f$var$B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$D[a] = new $0fe3ed5fa0b6906a4118024a9033485f$var$B(a, 1, !1, a.toLowerCase(), null, !0, !0);
    });
    ($0fe3ed5fa0b6906a4118024a9033485f$var$ra = $0fe3ed5fa0b6906a4118024a9033485f$var$aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $0fe3ed5fa0b6906a4118024a9033485f$var$sa = 60103, $0fe3ed5fa0b6906a4118024a9033485f$var$ta = 60106, $0fe3ed5fa0b6906a4118024a9033485f$var$ua = 60107, $0fe3ed5fa0b6906a4118024a9033485f$var$wa = 60108, $0fe3ed5fa0b6906a4118024a9033485f$var$xa = 60114, $0fe3ed5fa0b6906a4118024a9033485f$var$ya = 60109, $0fe3ed5fa0b6906a4118024a9033485f$var$za = 60110, $0fe3ed5fa0b6906a4118024a9033485f$var$Aa = 60112, $0fe3ed5fa0b6906a4118024a9033485f$var$Ba = 60113, $0fe3ed5fa0b6906a4118024a9033485f$var$Ca = 60120, $0fe3ed5fa0b6906a4118024a9033485f$var$Da = 60115, $0fe3ed5fa0b6906a4118024a9033485f$var$Ea = 60116, $0fe3ed5fa0b6906a4118024a9033485f$var$Fa = 60121, $0fe3ed5fa0b6906a4118024a9033485f$var$Ga = 60128, $0fe3ed5fa0b6906a4118024a9033485f$var$Ha = 60129, $0fe3ed5fa0b6906a4118024a9033485f$var$Ia = 60130, $0fe3ed5fa0b6906a4118024a9033485f$var$Ja = 60131);
    if ("function" === typeof Symbol && Symbol.for) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$E = Symbol.for;
      $0fe3ed5fa0b6906a4118024a9033485f$var$sa = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.element");
      $0fe3ed5fa0b6906a4118024a9033485f$var$ta = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.portal");
      $0fe3ed5fa0b6906a4118024a9033485f$var$ua = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.fragment");
      $0fe3ed5fa0b6906a4118024a9033485f$var$wa = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.strict_mode");
      $0fe3ed5fa0b6906a4118024a9033485f$var$xa = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.profiler");
      $0fe3ed5fa0b6906a4118024a9033485f$var$ya = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.provider");
      $0fe3ed5fa0b6906a4118024a9033485f$var$za = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.context");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Aa = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.forward_ref");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ba = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.suspense");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ca = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.suspense_list");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Da = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.memo");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ea = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.lazy");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Fa = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.block");
      $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.scope");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ga = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.opaque.id");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ha = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.debug_trace_mode");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ia = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.offscreen");
      $0fe3ed5fa0b6906a4118024a9033485f$var$Ja = $0fe3ed5fa0b6906a4118024a9033485f$var$E("react.legacy_hidden");
    }
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ka = "function" === typeof Symbol && Symbol.iterator;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Oa = !1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$kb = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$ob = (function (a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function () {
          return a(b, c, d, e);
        });
      } : a;
    })(function (a, b) {
      if (a.namespaceURI !== $0fe3ed5fa0b6906a4118024a9033485f$var$kb.svg || ("innerHTML" in a)) a.innerHTML = b; else {
        $0fe3ed5fa0b6906a4118024a9033485f$var$nb = $0fe3ed5fa0b6906a4118024a9033485f$var$nb || document.createElement("div");
        $0fe3ed5fa0b6906a4118024a9033485f$var$nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = $0fe3ed5fa0b6906a4118024a9033485f$var$nb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    ($0fe3ed5fa0b6906a4118024a9033485f$var$qb = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$rb = ["Webkit", "ms", "Moz", "O"]);
    Object.keys($0fe3ed5fa0b6906a4118024a9033485f$var$qb).forEach(function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$rb.forEach(function (b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        $0fe3ed5fa0b6906a4118024a9033485f$var$qb[b] = $0fe3ed5fa0b6906a4118024a9033485f$var$qb[a];
      });
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$ub = $0fe3ed5fa0b6906a4118024a9033485f$var$m({
      menuitem: !0
    }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    });
    ($0fe3ed5fa0b6906a4118024a9033485f$var$yb = null, $0fe3ed5fa0b6906a4118024a9033485f$var$zb = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Ab = null);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Jb = $0fe3ed5fa0b6906a4118024a9033485f$var$Gb, $0fe3ed5fa0b6906a4118024a9033485f$var$Kb = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Lb = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Pb = !1;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$fa) try {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Qb = {};
      Object.defineProperty($0fe3ed5fa0b6906a4118024a9033485f$var$Qb, "passive", {
        get: function () {
          $0fe3ed5fa0b6906a4118024a9033485f$var$Pb = !0;
        }
      });
      window.addEventListener("test", $0fe3ed5fa0b6906a4118024a9033485f$var$Qb, $0fe3ed5fa0b6906a4118024a9033485f$var$Qb);
      window.removeEventListener("test", $0fe3ed5fa0b6906a4118024a9033485f$var$Qb, $0fe3ed5fa0b6906a4118024a9033485f$var$Qb);
    } catch (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$Pb = !1;
    }
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Sb = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Tb = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Ub = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Vb = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Wb = {
      onError: function (a) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Sb = !0;
        $0fe3ed5fa0b6906a4118024a9033485f$var$Tb = a;
      }
    });
    ($0fe3ed5fa0b6906a4118024a9033485f$var$ic = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$jc = [], $0fe3ed5fa0b6906a4118024a9033485f$var$kc = null, $0fe3ed5fa0b6906a4118024a9033485f$var$lc = null, $0fe3ed5fa0b6906a4118024a9033485f$var$mc = null, $0fe3ed5fa0b6906a4118024a9033485f$var$nc = new Map(), $0fe3ed5fa0b6906a4118024a9033485f$var$oc = new Map(), $0fe3ed5fa0b6906a4118024a9033485f$var$pc = [], $0fe3ed5fa0b6906a4118024a9033485f$var$qc = ("mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit").split(" "));
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Ec = {
      animationend: $0fe3ed5fa0b6906a4118024a9033485f$var$Dc("Animation", "AnimationEnd"),
      animationiteration: $0fe3ed5fa0b6906a4118024a9033485f$var$Dc("Animation", "AnimationIteration"),
      animationstart: $0fe3ed5fa0b6906a4118024a9033485f$var$Dc("Animation", "AnimationStart"),
      transitionend: $0fe3ed5fa0b6906a4118024a9033485f$var$Dc("Transition", "TransitionEnd")
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Fc = {}, $0fe3ed5fa0b6906a4118024a9033485f$var$Gc = {});
    $0fe3ed5fa0b6906a4118024a9033485f$var$fa && ($0fe3ed5fa0b6906a4118024a9033485f$var$Gc = document.createElement("div").style, ("AnimationEvent" in window) || (delete $0fe3ed5fa0b6906a4118024a9033485f$var$Ec.animationend.animation, delete $0fe3ed5fa0b6906a4118024a9033485f$var$Ec.animationiteration.animation, delete $0fe3ed5fa0b6906a4118024a9033485f$var$Ec.animationstart.animation), ("TransitionEvent" in window) || delete $0fe3ed5fa0b6906a4118024a9033485f$var$Ec.transitionend.transition);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Ic = $0fe3ed5fa0b6906a4118024a9033485f$var$Hc("animationend"), $0fe3ed5fa0b6906a4118024a9033485f$var$Jc = $0fe3ed5fa0b6906a4118024a9033485f$var$Hc("animationiteration"), $0fe3ed5fa0b6906a4118024a9033485f$var$Kc = $0fe3ed5fa0b6906a4118024a9033485f$var$Hc("animationstart"), $0fe3ed5fa0b6906a4118024a9033485f$var$Lc = $0fe3ed5fa0b6906a4118024a9033485f$var$Hc("transitionend"), $0fe3ed5fa0b6906a4118024a9033485f$var$Mc = new Map(), $0fe3ed5fa0b6906a4118024a9033485f$var$Nc = new Map(), $0fe3ed5fa0b6906a4118024a9033485f$var$Oc = ["abort", "abort", $0fe3ed5fa0b6906a4118024a9033485f$var$Ic, "animationEnd", $0fe3ed5fa0b6906a4118024a9033485f$var$Jc, "animationIteration", $0fe3ed5fa0b6906a4118024a9033485f$var$Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $0fe3ed5fa0b6906a4118024a9033485f$var$Lc, "transitionEnd", "waiting", "waiting"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Qc = $e7b0987460780cecc7357948dd79a996$init().unstable_now;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Qc();
    $0fe3ed5fa0b6906a4118024a9033485f$var$F = 8;
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Vc = Math.clz32 ? Math.clz32 : $0fe3ed5fa0b6906a4118024a9033485f$var$ad, $0fe3ed5fa0b6906a4118024a9033485f$var$bd = Math.log, $0fe3ed5fa0b6906a4118024a9033485f$var$cd = Math.LN2);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$dd = $e7b0987460780cecc7357948dd79a996$init().unstable_UserBlockingPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$ed = $e7b0987460780cecc7357948dd79a996$init().unstable_runWithPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$fd = !0);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$kd = null, $0fe3ed5fa0b6906a4118024a9033485f$var$ld = null, $0fe3ed5fa0b6906a4118024a9033485f$var$md = null);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$sd = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (a) {
        return a.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$td = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$sd), $0fe3ed5fa0b6906a4118024a9033485f$var$ud = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, {
      view: 0,
      detail: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$vd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$ud), $0fe3ed5fa0b6906a4118024a9033485f$var$Ad = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$ud, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $0fe3ed5fa0b6906a4118024a9033485f$var$zd,
      button: 0,
      buttons: 0,
      relatedTarget: function (a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      },
      movementX: function (a) {
        if (("movementX" in a)) return a.movementX;
        a !== $0fe3ed5fa0b6906a4118024a9033485f$var$yd && ($0fe3ed5fa0b6906a4118024a9033485f$var$yd && "mousemove" === a.type ? ($0fe3ed5fa0b6906a4118024a9033485f$var$wd = a.screenX - $0fe3ed5fa0b6906a4118024a9033485f$var$yd.screenX, $0fe3ed5fa0b6906a4118024a9033485f$var$xd = a.screenY - $0fe3ed5fa0b6906a4118024a9033485f$var$yd.screenY) : $0fe3ed5fa0b6906a4118024a9033485f$var$xd = $0fe3ed5fa0b6906a4118024a9033485f$var$wd = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$yd = a);
        return $0fe3ed5fa0b6906a4118024a9033485f$var$wd;
      },
      movementY: function (a) {
        return ("movementY" in a) ? a.movementY : $0fe3ed5fa0b6906a4118024a9033485f$var$xd;
      }
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Bd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Ad), $0fe3ed5fa0b6906a4118024a9033485f$var$Cd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$Ad, {
      dataTransfer: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Dd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Cd), $0fe3ed5fa0b6906a4118024a9033485f$var$Ed = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$ud, {
      relatedTarget: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Fd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Ed), $0fe3ed5fa0b6906a4118024a9033485f$var$Gd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Hd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Gd), $0fe3ed5fa0b6906a4118024a9033485f$var$Id = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, {
      clipboardData: function (a) {
        return ("clipboardData" in a) ? a.clipboardData : window.clipboardData;
      }
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Jd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Id), $0fe3ed5fa0b6906a4118024a9033485f$var$Kd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, {
      data: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Ld = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Kd), $0fe3ed5fa0b6906a4118024a9033485f$var$Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Od = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    });
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Qd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$ud, {
      key: function (a) {
        if (a.key) {
          var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = $0fe3ed5fa0b6906a4118024a9033485f$var$od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? $0fe3ed5fa0b6906a4118024a9033485f$var$Nd[a.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $0fe3ed5fa0b6906a4118024a9033485f$var$zd,
      charCode: function (a) {
        return "keypress" === a.type ? $0fe3ed5fa0b6906a4118024a9033485f$var$od(a) : 0;
      },
      keyCode: function (a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      },
      which: function (a) {
        return "keypress" === a.type ? $0fe3ed5fa0b6906a4118024a9033485f$var$od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Rd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Qd), $0fe3ed5fa0b6906a4118024a9033485f$var$Sd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$Ad, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Td = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Sd), $0fe3ed5fa0b6906a4118024a9033485f$var$Ud = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$ud, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $0fe3ed5fa0b6906a4118024a9033485f$var$zd
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Vd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Ud), $0fe3ed5fa0b6906a4118024a9033485f$var$Wd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$sd, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Xd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Wd), $0fe3ed5fa0b6906a4118024a9033485f$var$Yd = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, $0fe3ed5fa0b6906a4118024a9033485f$var$Ad, {
      deltaX: function (a) {
        return ("deltaX" in a) ? a.deltaX : ("wheelDeltaX" in a) ? -a.wheelDeltaX : 0;
      },
      deltaY: function (a) {
        return ("deltaY" in a) ? a.deltaY : ("wheelDeltaY" in a) ? -a.wheelDeltaY : ("wheelDelta" in a) ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), $0fe3ed5fa0b6906a4118024a9033485f$var$Zd = $0fe3ed5fa0b6906a4118024a9033485f$var$rd($0fe3ed5fa0b6906a4118024a9033485f$var$Yd), $0fe3ed5fa0b6906a4118024a9033485f$var$$d = [9, 13, 27, 32], $0fe3ed5fa0b6906a4118024a9033485f$var$ae = $0fe3ed5fa0b6906a4118024a9033485f$var$fa && ("CompositionEvent" in window), $0fe3ed5fa0b6906a4118024a9033485f$var$be = null);
    $0fe3ed5fa0b6906a4118024a9033485f$var$fa && ("documentMode" in document) && ($0fe3ed5fa0b6906a4118024a9033485f$var$be = document.documentMode);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$ce = $0fe3ed5fa0b6906a4118024a9033485f$var$fa && ("TextEvent" in window) && !$0fe3ed5fa0b6906a4118024a9033485f$var$be, $0fe3ed5fa0b6906a4118024a9033485f$var$de = $0fe3ed5fa0b6906a4118024a9033485f$var$fa && (!$0fe3ed5fa0b6906a4118024a9033485f$var$ae || $0fe3ed5fa0b6906a4118024a9033485f$var$be && 8 < $0fe3ed5fa0b6906a4118024a9033485f$var$be && 11 >= $0fe3ed5fa0b6906a4118024a9033485f$var$be), $0fe3ed5fa0b6906a4118024a9033485f$var$ee = String.fromCharCode(32), $0fe3ed5fa0b6906a4118024a9033485f$var$fe = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ie = !1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$le = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    ($0fe3ed5fa0b6906a4118024a9033485f$var$pe = null, $0fe3ed5fa0b6906a4118024a9033485f$var$qe = null);
    $0fe3ed5fa0b6906a4118024a9033485f$var$we = !1;
    if ($0fe3ed5fa0b6906a4118024a9033485f$var$fa) {
      if ($0fe3ed5fa0b6906a4118024a9033485f$var$fa) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$ye = ("oninput" in document);
        if (!$0fe3ed5fa0b6906a4118024a9033485f$var$ye) {
          $0fe3ed5fa0b6906a4118024a9033485f$var$ze = document.createElement("div");
          $0fe3ed5fa0b6906a4118024a9033485f$var$ze.setAttribute("oninput", "return;");
          $0fe3ed5fa0b6906a4118024a9033485f$var$ye = "function" === typeof $0fe3ed5fa0b6906a4118024a9033485f$var$ze.oninput;
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$xe = $0fe3ed5fa0b6906a4118024a9033485f$var$ye;
      } else $0fe3ed5fa0b6906a4118024a9033485f$var$xe = !1;
      $0fe3ed5fa0b6906a4118024a9033485f$var$we = $0fe3ed5fa0b6906a4118024a9033485f$var$xe && (!document.documentMode || 9 < document.documentMode);
    }
    ($0fe3ed5fa0b6906a4118024a9033485f$var$He = "function" === typeof Object.is ? Object.is : $0fe3ed5fa0b6906a4118024a9033485f$var$Ge, $0fe3ed5fa0b6906a4118024a9033485f$var$Ie = Object.prototype.hasOwnProperty);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Pe = $0fe3ed5fa0b6906a4118024a9033485f$var$fa && ("documentMode" in document) && 11 >= document.documentMode, $0fe3ed5fa0b6906a4118024a9033485f$var$Qe = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Re = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Se = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Te = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Pc(("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange").split(" "), 0);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Pc(("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel").split(" "), 1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$Pc($0fe3ed5fa0b6906a4118024a9033485f$var$Oc, 2);
    for (($0fe3ed5fa0b6906a4118024a9033485f$var$Ve = ("change selectionchange textInput compositionstart compositionend compositionupdate").split(" "), $0fe3ed5fa0b6906a4118024a9033485f$var$We = 0); $0fe3ed5fa0b6906a4118024a9033485f$var$We < $0fe3ed5fa0b6906a4118024a9033485f$var$Ve.length; $0fe3ed5fa0b6906a4118024a9033485f$var$We++) $0fe3ed5fa0b6906a4118024a9033485f$var$Nc.set($0fe3ed5fa0b6906a4118024a9033485f$var$Ve[$0fe3ed5fa0b6906a4118024a9033485f$var$We], 0);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea("onMouseEnter", ["mouseout", "mouseover"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea("onMouseLeave", ["mouseout", "mouseover"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea("onPointerEnter", ["pointerout", "pointerover"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ea("onPointerLeave", ["pointerout", "pointerover"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onChange", ("change click focusin focusout input keydown keyup selectionchange").split(" "));
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onSelect", ("focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange").split(" "));
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onCompositionEnd", ("compositionend focusout keydown keypress keyup mousedown").split(" "));
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onCompositionStart", ("compositionstart focusout keydown keypress keyup mousedown").split(" "));
    $0fe3ed5fa0b6906a4118024a9033485f$var$da("onCompositionUpdate", ("compositionupdate focusout keydown keypress keyup mousedown").split(" "));
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Xe = ("abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting").split(" "), $0fe3ed5fa0b6906a4118024a9033485f$var$Ye = new Set(("cancel close invalid load scroll toggle").split(" ").concat($0fe3ed5fa0b6906a4118024a9033485f$var$Xe)));
    $0fe3ed5fa0b6906a4118024a9033485f$var$bf = "_reactListening" + Math.random().toString(36).slice(2);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$kf = null, $0fe3ed5fa0b6906a4118024a9033485f$var$lf = null);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$of = "function" === typeof setTimeout ? setTimeout : void 0, $0fe3ed5fa0b6906a4118024a9033485f$var$pf = "function" === typeof clearTimeout ? clearTimeout : void 0);
    $0fe3ed5fa0b6906a4118024a9033485f$var$tf = 0;
    ($0fe3ed5fa0b6906a4118024a9033485f$var$vf = Math.random().toString(36).slice(2), $0fe3ed5fa0b6906a4118024a9033485f$var$wf = "__reactFiber$" + $0fe3ed5fa0b6906a4118024a9033485f$var$vf, $0fe3ed5fa0b6906a4118024a9033485f$var$xf = "__reactProps$" + $0fe3ed5fa0b6906a4118024a9033485f$var$vf, $0fe3ed5fa0b6906a4118024a9033485f$var$ff = "__reactContainer$" + $0fe3ed5fa0b6906a4118024a9033485f$var$vf, $0fe3ed5fa0b6906a4118024a9033485f$var$yf = "__reactEvents$" + $0fe3ed5fa0b6906a4118024a9033485f$var$vf);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$zf = [], $0fe3ed5fa0b6906a4118024a9033485f$var$Af = -1);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Cf = {}, $0fe3ed5fa0b6906a4118024a9033485f$var$M = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf($0fe3ed5fa0b6906a4118024a9033485f$var$Cf), $0fe3ed5fa0b6906a4118024a9033485f$var$N = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf(!1), $0fe3ed5fa0b6906a4118024a9033485f$var$Df = $0fe3ed5fa0b6906a4118024a9033485f$var$Cf);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Lf = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Mf = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Nf = $e7b0987460780cecc7357948dd79a996$init().unstable_runWithPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Of = $e7b0987460780cecc7357948dd79a996$init().unstable_scheduleCallback, $0fe3ed5fa0b6906a4118024a9033485f$var$Pf = $e7b0987460780cecc7357948dd79a996$init().unstable_cancelCallback, $0fe3ed5fa0b6906a4118024a9033485f$var$Qf = $e7b0987460780cecc7357948dd79a996$init().unstable_shouldYield, $0fe3ed5fa0b6906a4118024a9033485f$var$Rf = $e7b0987460780cecc7357948dd79a996$init().unstable_requestPaint, $0fe3ed5fa0b6906a4118024a9033485f$var$Sf = $e7b0987460780cecc7357948dd79a996$init().unstable_now, $0fe3ed5fa0b6906a4118024a9033485f$var$Tf = $e7b0987460780cecc7357948dd79a996$init().unstable_getCurrentPriorityLevel, $0fe3ed5fa0b6906a4118024a9033485f$var$Uf = $e7b0987460780cecc7357948dd79a996$init().unstable_ImmediatePriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Vf = $e7b0987460780cecc7357948dd79a996$init().unstable_UserBlockingPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Wf = $e7b0987460780cecc7357948dd79a996$init().unstable_NormalPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Xf = $e7b0987460780cecc7357948dd79a996$init().unstable_LowPriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Yf = $e7b0987460780cecc7357948dd79a996$init().unstable_IdlePriority, $0fe3ed5fa0b6906a4118024a9033485f$var$Zf = {}, $0fe3ed5fa0b6906a4118024a9033485f$var$$f = void 0 !== $0fe3ed5fa0b6906a4118024a9033485f$var$Rf ? $0fe3ed5fa0b6906a4118024a9033485f$var$Rf : function () {}, $0fe3ed5fa0b6906a4118024a9033485f$var$ag = null, $0fe3ed5fa0b6906a4118024a9033485f$var$bg = null, $0fe3ed5fa0b6906a4118024a9033485f$var$cg = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$dg = $0fe3ed5fa0b6906a4118024a9033485f$var$Sf(), $0fe3ed5fa0b6906a4118024a9033485f$var$O = 1E4 > $0fe3ed5fa0b6906a4118024a9033485f$var$dg ? $0fe3ed5fa0b6906a4118024a9033485f$var$Sf : function () {
      return $0fe3ed5fa0b6906a4118024a9033485f$var$Sf() - $0fe3ed5fa0b6906a4118024a9033485f$var$dg;
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$kg = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentBatchConfig;
    ($0fe3ed5fa0b6906a4118024a9033485f$var$mg = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf(null), $0fe3ed5fa0b6906a4118024a9033485f$var$ng = null, $0fe3ed5fa0b6906a4118024a9033485f$var$og = null, $0fe3ed5fa0b6906a4118024a9033485f$var$pg = null);
    $0fe3ed5fa0b6906a4118024a9033485f$var$wg = !1;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Fg = new $0fe3ed5fa0b6906a4118024a9033485f$var$aa.Component().refs;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Kg = {
      isMounted: function (a) {
        return (a = a._reactInternals) ? $0fe3ed5fa0b6906a4118024a9033485f$var$Zb(a) === a : !1;
      },
      enqueueSetState: function (a, b, c) {
        a = a._reactInternals;
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a), f = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(a, f);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, e, d);
      },
      enqueueReplaceState: function (a, b, c) {
        a = a._reactInternals;
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a), f = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(a, f);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, e, d);
      },
      enqueueForceUpdate: function (a, b) {
        a = a._reactInternals;
        var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a), e = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(a, e);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, d, c);
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Pg = Array.isArray;
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Yg = $0fe3ed5fa0b6906a4118024a9033485f$var$Sg(!0), $0fe3ed5fa0b6906a4118024a9033485f$var$Zg = $0fe3ed5fa0b6906a4118024a9033485f$var$Sg(!1), $0fe3ed5fa0b6906a4118024a9033485f$var$$g = {}, $0fe3ed5fa0b6906a4118024a9033485f$var$ah = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf($0fe3ed5fa0b6906a4118024a9033485f$var$$g), $0fe3ed5fa0b6906a4118024a9033485f$var$bh = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf($0fe3ed5fa0b6906a4118024a9033485f$var$$g), $0fe3ed5fa0b6906a4118024a9033485f$var$ch = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf($0fe3ed5fa0b6906a4118024a9033485f$var$$g));
    $0fe3ed5fa0b6906a4118024a9033485f$var$P = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf(0);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$jh = null, $0fe3ed5fa0b6906a4118024a9033485f$var$kh = null, $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$th = [];
    ($0fe3ed5fa0b6906a4118024a9033485f$var$vh = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentDispatcher, $0fe3ed5fa0b6906a4118024a9033485f$var$wh = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentBatchConfig, $0fe3ed5fa0b6906a4118024a9033485f$var$xh = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$R = null, $0fe3ed5fa0b6906a4118024a9033485f$var$S = null, $0fe3ed5fa0b6906a4118024a9033485f$var$T = null, $0fe3ed5fa0b6906a4118024a9033485f$var$yh = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$zh = !1);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Gh = {
      readContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useCallback: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useContext: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useImperativeHandle: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useLayoutEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useMemo: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useReducer: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useRef: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useState: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useDebugValue: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useDeferredValue: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useTransition: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useMutableSource: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      useOpaqueIdentifier: $0fe3ed5fa0b6906a4118024a9033485f$var$Ah,
      unstable_isNewReconciler: !1
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Dh = {
      readContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useCallback: function (a, b) {
        $0fe3ed5fa0b6906a4118024a9033485f$var$Hh().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Wh,
      useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Uh(4, 2, $0fe3ed5fa0b6906a4118024a9033485f$var$Zh.bind(null, b, a), c);
      },
      useLayoutEffect: function (a, b) {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Uh(4, 2, a, b);
      },
      useMemo: function (a, b) {
        var c = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function (a, b, c) {
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b
        };
        a = a.dispatch = $0fe3ed5fa0b6906a4118024a9033485f$var$Oh.bind(null, $0fe3ed5fa0b6906a4118024a9033485f$var$R, a);
        return [d.memoizedState, a];
      },
      useRef: $0fe3ed5fa0b6906a4118024a9033485f$var$Sh,
      useState: $0fe3ed5fa0b6906a4118024a9033485f$var$Qh,
      useDebugValue: $0fe3ed5fa0b6906a4118024a9033485f$var$ai,
      useDeferredValue: function (a) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Qh(a), c = b[0], d = b[1];
        $0fe3ed5fa0b6906a4118024a9033485f$var$Wh(function () {
          var b = $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition;
          $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = 1;
          try {
            d(a);
          } finally {
            $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = $0fe3ed5fa0b6906a4118024a9033485f$var$Qh(!1), b = a[0];
        a = $0fe3ed5fa0b6906a4118024a9033485f$var$di.bind(null, a[1]);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Sh(a);
        return [a, b];
      },
      useMutableSource: function (a, b, c) {
        var d = $0fe3ed5fa0b6906a4118024a9033485f$var$Hh();
        d.memoizedState = {
          refs: {
            getSnapshot: b,
            setSnapshot: null
          },
          source: a,
          subscribe: c
        };
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Nh(d, a, b, c);
      },
      useOpaqueIdentifier: function () {
        if ($0fe3ed5fa0b6906a4118024a9033485f$var$lh) {
          var a = !1, b = $0fe3ed5fa0b6906a4118024a9033485f$var$uf(function () {
            a || (a = !0, c("r:" + ($0fe3ed5fa0b6906a4118024a9033485f$var$tf++).toString(36)));
            throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(355));
          }), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Qh(b)[1];
          0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$R.mode & 2) && ($0fe3ed5fa0b6906a4118024a9033485f$var$R.flags |= 516, $0fe3ed5fa0b6906a4118024a9033485f$var$Rh(5, function () {
            c("r:" + ($0fe3ed5fa0b6906a4118024a9033485f$var$tf++).toString(36));
          }, void 0, null));
          return b;
        }
        b = "r:" + ($0fe3ed5fa0b6906a4118024a9033485f$var$tf++).toString(36);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Qh(b);
        return b;
      },
      unstable_isNewReconciler: !1
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Eh = {
      readContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useCallback: $0fe3ed5fa0b6906a4118024a9033485f$var$bi,
      useContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Xh,
      useImperativeHandle: $0fe3ed5fa0b6906a4118024a9033485f$var$$h,
      useLayoutEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Yh,
      useMemo: $0fe3ed5fa0b6906a4118024a9033485f$var$ci,
      useReducer: $0fe3ed5fa0b6906a4118024a9033485f$var$Kh,
      useRef: $0fe3ed5fa0b6906a4118024a9033485f$var$Th,
      useState: function () {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Kh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh);
      },
      useDebugValue: $0fe3ed5fa0b6906a4118024a9033485f$var$ai,
      useDeferredValue: function (a) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Kh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh), c = b[0], d = b[1];
        $0fe3ed5fa0b6906a4118024a9033485f$var$Xh(function () {
          var b = $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition;
          $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = 1;
          try {
            d(a);
          } finally {
            $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = $0fe3ed5fa0b6906a4118024a9033485f$var$Kh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh)[0];
        return [$0fe3ed5fa0b6906a4118024a9033485f$var$Th().current, a];
      },
      useMutableSource: $0fe3ed5fa0b6906a4118024a9033485f$var$Ph,
      useOpaqueIdentifier: function () {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Kh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh)[0];
      },
      unstable_isNewReconciler: !1
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$Fh = {
      readContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useCallback: $0fe3ed5fa0b6906a4118024a9033485f$var$bi,
      useContext: $0fe3ed5fa0b6906a4118024a9033485f$var$vg,
      useEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Xh,
      useImperativeHandle: $0fe3ed5fa0b6906a4118024a9033485f$var$$h,
      useLayoutEffect: $0fe3ed5fa0b6906a4118024a9033485f$var$Yh,
      useMemo: $0fe3ed5fa0b6906a4118024a9033485f$var$ci,
      useReducer: $0fe3ed5fa0b6906a4118024a9033485f$var$Lh,
      useRef: $0fe3ed5fa0b6906a4118024a9033485f$var$Th,
      useState: function () {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Lh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh);
      },
      useDebugValue: $0fe3ed5fa0b6906a4118024a9033485f$var$ai,
      useDeferredValue: function (a) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Lh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh), c = b[0], d = b[1];
        $0fe3ed5fa0b6906a4118024a9033485f$var$Xh(function () {
          var b = $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition;
          $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = 1;
          try {
            d(a);
          } finally {
            $0fe3ed5fa0b6906a4118024a9033485f$var$wh.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = $0fe3ed5fa0b6906a4118024a9033485f$var$Lh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh)[0];
        return [$0fe3ed5fa0b6906a4118024a9033485f$var$Th().current, a];
      },
      useMutableSource: $0fe3ed5fa0b6906a4118024a9033485f$var$Ph,
      useOpaqueIdentifier: function () {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$Lh($0fe3ed5fa0b6906a4118024a9033485f$var$Jh)[0];
      },
      unstable_isNewReconciler: !1
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$ei = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentOwner, $0fe3ed5fa0b6906a4118024a9033485f$var$ug = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$si = {
      dehydrated: null,
      retryLane: 0
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Bi = function (a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ci = function () {};
    $0fe3ed5fa0b6906a4118024a9033485f$var$Di = function (a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        $0fe3ed5fa0b6906a4118024a9033485f$var$dh($0fe3ed5fa0b6906a4118024a9033485f$var$ah.current);
        var f = null;
        switch (c) {
          case "input":
            e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ya(a, e);
            d = $0fe3ed5fa0b6906a4118024a9033485f$var$Ya(a, d);
            f = [];
            break;
          case "option":
            e = $0fe3ed5fa0b6906a4118024a9033485f$var$eb(a, e);
            d = $0fe3ed5fa0b6906a4118024a9033485f$var$eb(a, d);
            f = [];
            break;
          case "select":
            e = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, e, {
              value: void 0
            });
            d = $0fe3ed5fa0b6906a4118024a9033485f$var$m({}, d, {
              value: void 0
            });
            f = [];
            break;
          case "textarea":
            e = $0fe3ed5fa0b6906a4118024a9033485f$var$gb(a, e);
            d = $0fe3ed5fa0b6906a4118024a9033485f$var$gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = $0fe3ed5fa0b6906a4118024a9033485f$var$jf);
        }
        $0fe3ed5fa0b6906a4118024a9033485f$var$vb(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && ($0fe3ed5fa0b6906a4118024a9033485f$var$ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else (c || (f || (f = []), f.push(l, c)), c = k); else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && ($0fe3ed5fa0b6906a4118024a9033485f$var$ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && $0fe3ed5fa0b6906a4118024a9033485f$var$G("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === $0fe3ed5fa0b6906a4118024a9033485f$var$Ga ? k.toString() : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ei = function (a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Oi = "function" === typeof WeakMap ? WeakMap : Map;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ui = "function" === typeof WeakSet ? WeakSet : Set;
    ($0fe3ed5fa0b6906a4118024a9033485f$var$nj = Math.ceil, $0fe3ed5fa0b6906a4118024a9033485f$var$oj = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentDispatcher, $0fe3ed5fa0b6906a4118024a9033485f$var$pj = $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentOwner, $0fe3ed5fa0b6906a4118024a9033485f$var$X = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$U = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Y = null, $0fe3ed5fa0b6906a4118024a9033485f$var$W = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$qj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$rj = $0fe3ed5fa0b6906a4118024a9033485f$var$Bf(0), $0fe3ed5fa0b6906a4118024a9033485f$var$V = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$sj = null, $0fe3ed5fa0b6906a4118024a9033485f$var$tj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Dg = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Hi = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$uj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$vj = null, $0fe3ed5fa0b6906a4118024a9033485f$var$jj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ji = Infinity);
    ($0fe3ed5fa0b6906a4118024a9033485f$var$Z = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Qi = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$Ri = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Ti = null, $0fe3ed5fa0b6906a4118024a9033485f$var$xj = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$yj = null, $0fe3ed5fa0b6906a4118024a9033485f$var$zj = 90, $0fe3ed5fa0b6906a4118024a9033485f$var$Aj = [], $0fe3ed5fa0b6906a4118024a9033485f$var$Bj = [], $0fe3ed5fa0b6906a4118024a9033485f$var$Cj = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Dj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ej = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Fj = -1, $0fe3ed5fa0b6906a4118024a9033485f$var$Gj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Hj = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$Ij = null, $0fe3ed5fa0b6906a4118024a9033485f$var$Jj = !1);
    $0fe3ed5fa0b6906a4118024a9033485f$var$ck = function (a, b, c) {
      var d = b.lanes;
      if (null !== a) if (a.memoizedProps !== b.pendingProps || $0fe3ed5fa0b6906a4118024a9033485f$var$N.current) $0fe3ed5fa0b6906a4118024a9033485f$var$ug = !0; else if (0 !== (c & d)) $0fe3ed5fa0b6906a4118024a9033485f$var$ug = 0 !== (a.flags & 16384) ? !0 : !1; else {
        $0fe3ed5fa0b6906a4118024a9033485f$var$ug = !1;
        switch (b.tag) {
          case 3:
            $0fe3ed5fa0b6906a4118024a9033485f$var$ri(b);
            $0fe3ed5fa0b6906a4118024a9033485f$var$sh();
            break;
          case 5:
            $0fe3ed5fa0b6906a4118024a9033485f$var$gh(b);
            break;
          case 1:
            $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(b.type) && $0fe3ed5fa0b6906a4118024a9033485f$var$Jf(b);
            break;
          case 4:
            $0fe3ed5fa0b6906a4118024a9033485f$var$eh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            var e = b.type._context;
            $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$mg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return $0fe3ed5fa0b6906a4118024a9033485f$var$ti(a, b, c);
              $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, $0fe3ed5fa0b6906a4118024a9033485f$var$P.current & 1);
              b = $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, c);
              return null !== b ? b.sibling : null;
            }
            $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, $0fe3ed5fa0b6906a4118024a9033485f$var$P.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 64)) {
              if (d) return $0fe3ed5fa0b6906a4118024a9033485f$var$Ai(a, b, c);
              b.flags |= 64;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$P, $0fe3ed5fa0b6906a4118024a9033485f$var$P.current);
            if (d) break; else return null;
          case 23:
          case 24:
            return (b.lanes = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$mi(a, b, c));
        }
        return $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, c);
      } else $0fe3ed5fa0b6906a4118024a9033485f$var$ug = !1;
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          d = b.type;
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ef(b, $0fe3ed5fa0b6906a4118024a9033485f$var$M.current);
          $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, c);
          e = $0fe3ed5fa0b6906a4118024a9033485f$var$Ch(null, b, d, a, e, c);
          b.flags |= 1;
          if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
            b.tag = 1;
            b.memoizedState = null;
            b.updateQueue = null;
            if ($0fe3ed5fa0b6906a4118024a9033485f$var$Ff(d)) {
              var f = !0;
              $0fe3ed5fa0b6906a4118024a9033485f$var$Jf(b);
            } else f = !1;
            b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
            $0fe3ed5fa0b6906a4118024a9033485f$var$xg(b);
            var g = d.getDerivedStateFromProps;
            "function" === typeof g && $0fe3ed5fa0b6906a4118024a9033485f$var$Gg(b, d, g, a);
            e.updater = $0fe3ed5fa0b6906a4118024a9033485f$var$Kg;
            b.stateNode = e;
            e._reactInternals = b;
            $0fe3ed5fa0b6906a4118024a9033485f$var$Og(b, d, a, c);
            b = $0fe3ed5fa0b6906a4118024a9033485f$var$qi(null, b, d, !0, f, c);
          } else (b.tag = 0, $0fe3ed5fa0b6906a4118024a9033485f$var$fi(null, b, e, c), b = b.child);
          return b;
        case 16:
          e = b.elementType;
          a: {
            null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            f = e._init;
            e = f(e._payload);
            b.type = e;
            f = b.tag = $0fe3ed5fa0b6906a4118024a9033485f$var$hk(e);
            a = $0fe3ed5fa0b6906a4118024a9033485f$var$lg(e, a);
            switch (f) {
              case 0:
                b = $0fe3ed5fa0b6906a4118024a9033485f$var$li(null, b, e, a, c);
                break a;
              case 1:
                b = $0fe3ed5fa0b6906a4118024a9033485f$var$pi(null, b, e, a, c);
                break a;
              case 11:
                b = $0fe3ed5fa0b6906a4118024a9033485f$var$gi(null, b, e, a, c);
                break a;
              case 14:
                b = $0fe3ed5fa0b6906a4118024a9033485f$var$ii(null, b, e, $0fe3ed5fa0b6906a4118024a9033485f$var$lg(e.type, a), d, c);
                break a;
            }
            throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(306, e, ""));
          }
          return b;
        case 0:
          return (d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(d, e), $0fe3ed5fa0b6906a4118024a9033485f$var$li(a, b, d, e, c));
        case 1:
          return (d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(d, e), $0fe3ed5fa0b6906a4118024a9033485f$var$pi(a, b, d, e, c));
        case 3:
          $0fe3ed5fa0b6906a4118024a9033485f$var$ri(b);
          d = b.updateQueue;
          if (null === a || null === d) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(282));
          d = b.pendingProps;
          e = b.memoizedState;
          e = null !== e ? e.element : null;
          $0fe3ed5fa0b6906a4118024a9033485f$var$yg(a, b);
          $0fe3ed5fa0b6906a4118024a9033485f$var$Cg(b, d, null, c);
          d = b.memoizedState.element;
          if (d === e) ($0fe3ed5fa0b6906a4118024a9033485f$var$sh(), b = $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, c)); else {
            e = b.stateNode;
            if (f = e.hydrate) ($0fe3ed5fa0b6906a4118024a9033485f$var$kh = $0fe3ed5fa0b6906a4118024a9033485f$var$rf(b.stateNode.containerInfo.firstChild), $0fe3ed5fa0b6906a4118024a9033485f$var$jh = b, f = $0fe3ed5fa0b6906a4118024a9033485f$var$lh = !0);
            if (f) {
              a = e.mutableSourceEagerHydrationData;
              if (null != a) for (e = 0; e < a.length; e += 2) (f = a[e], f._workInProgressVersionPrimary = a[e + 1], $0fe3ed5fa0b6906a4118024a9033485f$var$th.push(f));
              c = $0fe3ed5fa0b6906a4118024a9033485f$var$Zg(b, null, d, c);
              for (b.child = c; c; ) (c.flags = c.flags & -3 | 1024, c = c.sibling);
            } else ($0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, d, c), $0fe3ed5fa0b6906a4118024a9033485f$var$sh());
            b = b.child;
          }
          return b;
        case 5:
          return ($0fe3ed5fa0b6906a4118024a9033485f$var$gh(b), null === a && $0fe3ed5fa0b6906a4118024a9033485f$var$ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, $0fe3ed5fa0b6906a4118024a9033485f$var$nf(d, e) ? g = null : null !== f && $0fe3ed5fa0b6906a4118024a9033485f$var$nf(d, f) && (b.flags |= 16), $0fe3ed5fa0b6906a4118024a9033485f$var$oi(a, b), $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, g, c), b.child);
        case 6:
          return (null === a && $0fe3ed5fa0b6906a4118024a9033485f$var$ph(b), null);
        case 13:
          return $0fe3ed5fa0b6906a4118024a9033485f$var$ti(a, b, c);
        case 4:
          return ($0fe3ed5fa0b6906a4118024a9033485f$var$eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = $0fe3ed5fa0b6906a4118024a9033485f$var$Yg(b, null, d, c) : $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, d, c), b.child);
        case 11:
          return (d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(d, e), $0fe3ed5fa0b6906a4118024a9033485f$var$gi(a, b, d, e, c));
        case 7:
          return ($0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, b.pendingProps, c), b.child);
        case 8:
          return ($0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, b.pendingProps.children, c), b.child);
        case 12:
          return ($0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, b.pendingProps.children, c), b.child);
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            g = b.memoizedProps;
            f = e.value;
            var h = b.type._context;
            $0fe3ed5fa0b6906a4118024a9033485f$var$I($0fe3ed5fa0b6906a4118024a9033485f$var$mg, h._currentValue);
            h._currentValue = f;
            if (null !== g) if ((h = g.value, f = $0fe3ed5fa0b6906a4118024a9033485f$var$He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f)) {
              if (g.children === e.children && !$0fe3ed5fa0b6906a4118024a9033485f$var$N.current) {
                b = $0fe3ed5fa0b6906a4118024a9033485f$var$hi(a, b, c);
                break a;
              }
            } else for ((h = b.child, null !== h && (h.return = b)); null !== h; ) {
              var k = h.dependencies;
              if (null !== k) {
                g = h.child;
                for (var l = k.firstContext; null !== l; ) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = $0fe3ed5fa0b6906a4118024a9033485f$var$zg(-1, c & -c), l.tag = 2, $0fe3ed5fa0b6906a4118024a9033485f$var$Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    null !== l && (l.lanes |= c);
                    $0fe3ed5fa0b6906a4118024a9033485f$var$sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
              if (null !== g) g.return = h; else for (g = h; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                h = g.sibling;
                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }
                g = g.return;
              }
              h = g;
            }
            $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return (e = b.type, f = b.pendingProps, d = f.children, $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, c), e = $0fe3ed5fa0b6906a4118024a9033485f$var$vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, $0fe3ed5fa0b6906a4118024a9033485f$var$fi(a, b, d, c), b.child);
        case 14:
          return (e = b.type, f = $0fe3ed5fa0b6906a4118024a9033485f$var$lg(e, b.pendingProps), f = $0fe3ed5fa0b6906a4118024a9033485f$var$lg(e.type, f), $0fe3ed5fa0b6906a4118024a9033485f$var$ii(a, b, e, f, d, c));
        case 15:
          return $0fe3ed5fa0b6906a4118024a9033485f$var$ki(a, b, b.type, b.pendingProps, d, c);
        case 17:
          return (d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $0fe3ed5fa0b6906a4118024a9033485f$var$lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, $0fe3ed5fa0b6906a4118024a9033485f$var$Ff(d) ? (a = !0, $0fe3ed5fa0b6906a4118024a9033485f$var$Jf(b)) : a = !1, $0fe3ed5fa0b6906a4118024a9033485f$var$tg(b, c), $0fe3ed5fa0b6906a4118024a9033485f$var$Mg(b, d, e), $0fe3ed5fa0b6906a4118024a9033485f$var$Og(b, d, e, c), $0fe3ed5fa0b6906a4118024a9033485f$var$qi(null, b, d, !0, a, c));
        case 19:
          return $0fe3ed5fa0b6906a4118024a9033485f$var$Ai(a, b, c);
        case 23:
          return $0fe3ed5fa0b6906a4118024a9033485f$var$mi(a, b, c);
        case 24:
          return $0fe3ed5fa0b6906a4118024a9033485f$var$mi(a, b, c);
      }
      throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(156, b.tag));
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$qk.prototype.render = function (a) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$lk(a, this._internalRoot, null, null);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$qk.prototype.unmount = function () {
      var a = this._internalRoot, b = a.containerInfo;
      $0fe3ed5fa0b6906a4118024a9033485f$var$lk(null, a, null, function () {
        b[$0fe3ed5fa0b6906a4118024a9033485f$var$ff] = null;
      });
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$ec = function (a) {
      if (13 === a.tag) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, 4, b);
        $0fe3ed5fa0b6906a4118024a9033485f$var$ok(a, 4);
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$fc = function (a) {
      if (13 === a.tag) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg();
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, 67108864, b);
        $0fe3ed5fa0b6906a4118024a9033485f$var$ok(a, 67108864);
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$gc = function (a) {
      if (13 === a.tag) {
        var b = $0fe3ed5fa0b6906a4118024a9033485f$var$Hg(), c = $0fe3ed5fa0b6906a4118024a9033485f$var$Ig(a);
        $0fe3ed5fa0b6906a4118024a9033485f$var$Jg(a, c, b);
        $0fe3ed5fa0b6906a4118024a9033485f$var$ok(a, c);
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$hc = function (a, b) {
      return b();
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$yb = function (a, b, c) {
      switch (b) {
        case "input":
          $0fe3ed5fa0b6906a4118024a9033485f$var$ab(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = $0fe3ed5fa0b6906a4118024a9033485f$var$Db(d);
                if (!e) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(90));
                $0fe3ed5fa0b6906a4118024a9033485f$var$Wa(d);
                $0fe3ed5fa0b6906a4118024a9033485f$var$ab(d, e);
              }
            }
          }
          break;
        case "textarea":
          $0fe3ed5fa0b6906a4118024a9033485f$var$ib(a, c);
          break;
        case "select":
          (b = c.value, null != b && $0fe3ed5fa0b6906a4118024a9033485f$var$fb(a, !!c.multiple, b, !1));
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Gb = $0fe3ed5fa0b6906a4118024a9033485f$var$Wj;
    $0fe3ed5fa0b6906a4118024a9033485f$var$Hb = function (a, b, c, d, e) {
      var f = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
      $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 4;
      try {
        return $0fe3ed5fa0b6906a4118024a9033485f$var$gg(98, a.bind(null, b, c, d, e));
      } finally {
        ($0fe3ed5fa0b6906a4118024a9033485f$var$X = f, 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$X && ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$ig()));
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Ib = function () {
      0 === ($0fe3ed5fa0b6906a4118024a9033485f$var$X & 49) && ($0fe3ed5fa0b6906a4118024a9033485f$var$Vj(), $0fe3ed5fa0b6906a4118024a9033485f$var$Oj());
    };
    $0fe3ed5fa0b6906a4118024a9033485f$var$Jb = function (a, b) {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
      $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 2;
      try {
        return a(b);
      } finally {
        ($0fe3ed5fa0b6906a4118024a9033485f$var$X = c, 0 === $0fe3ed5fa0b6906a4118024a9033485f$var$X && ($0fe3ed5fa0b6906a4118024a9033485f$var$wj(), $0fe3ed5fa0b6906a4118024a9033485f$var$ig()));
      }
    };
    ($0fe3ed5fa0b6906a4118024a9033485f$var$vk = {
      Events: [$0fe3ed5fa0b6906a4118024a9033485f$var$Cb, $0fe3ed5fa0b6906a4118024a9033485f$var$ue, $0fe3ed5fa0b6906a4118024a9033485f$var$Db, $0fe3ed5fa0b6906a4118024a9033485f$var$Eb, $0fe3ed5fa0b6906a4118024a9033485f$var$Fb, $0fe3ed5fa0b6906a4118024a9033485f$var$Oj, {
        current: !1
      }]
    }, $0fe3ed5fa0b6906a4118024a9033485f$var$wk = {
      findFiberByHostInstance: $0fe3ed5fa0b6906a4118024a9033485f$var$wc,
      bundleType: 0,
      version: "17.0.2",
      rendererPackageName: "react-dom"
    });
    $0fe3ed5fa0b6906a4118024a9033485f$var$xk = {
      bundleType: $0fe3ed5fa0b6906a4118024a9033485f$var$wk.bundleType,
      version: $0fe3ed5fa0b6906a4118024a9033485f$var$wk.version,
      rendererPackageName: $0fe3ed5fa0b6906a4118024a9033485f$var$wk.rendererPackageName,
      rendererConfig: $0fe3ed5fa0b6906a4118024a9033485f$var$wk.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $0fe3ed5fa0b6906a4118024a9033485f$var$ra.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (a) {
        a = $0fe3ed5fa0b6906a4118024a9033485f$var$cc(a);
        return null === a ? null : a.stateNode;
      },
      findFiberByHostInstance: $0fe3ed5fa0b6906a4118024a9033485f$var$wk.findFiberByHostInstance || $0fe3ed5fa0b6906a4118024a9033485f$var$pk,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      $0fe3ed5fa0b6906a4118024a9033485f$var$yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$yk.isDisabled && $0fe3ed5fa0b6906a4118024a9033485f$var$yk.supportsFiber) try {
        ($0fe3ed5fa0b6906a4118024a9033485f$var$Lf = $0fe3ed5fa0b6906a4118024a9033485f$var$yk.inject($0fe3ed5fa0b6906a4118024a9033485f$var$xk), $0fe3ed5fa0b6906a4118024a9033485f$var$Mf = $0fe3ed5fa0b6906a4118024a9033485f$var$yk);
      } catch (a) {}
    }
    $0fe3ed5fa0b6906a4118024a9033485f$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0fe3ed5fa0b6906a4118024a9033485f$var$vk;
    $0fe3ed5fa0b6906a4118024a9033485f$exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0fe3ed5fa0b6906a4118024a9033485f$export$__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    $0fe3ed5fa0b6906a4118024a9033485f$export$createPortal = $0fe3ed5fa0b6906a4118024a9033485f$var$uk;
    $0fe3ed5fa0b6906a4118024a9033485f$exports.createPortal = $0fe3ed5fa0b6906a4118024a9033485f$export$createPortal;
    $0fe3ed5fa0b6906a4118024a9033485f$export$findDOMNode = function (a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(188));
        throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(268, Object.keys(a)));
      }
      a = $0fe3ed5fa0b6906a4118024a9033485f$var$cc(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.findDOMNode = $0fe3ed5fa0b6906a4118024a9033485f$export$findDOMNode;
    $0fe3ed5fa0b6906a4118024a9033485f$export$flushSync = function (a, b) {
      var c = $0fe3ed5fa0b6906a4118024a9033485f$var$X;
      if (0 !== (c & 48)) return a(b);
      $0fe3ed5fa0b6906a4118024a9033485f$var$X |= 1;
      try {
        if (a) return $0fe3ed5fa0b6906a4118024a9033485f$var$gg(99, a.bind(null, b));
      } finally {
        ($0fe3ed5fa0b6906a4118024a9033485f$var$X = c, $0fe3ed5fa0b6906a4118024a9033485f$var$ig());
      }
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.flushSync = $0fe3ed5fa0b6906a4118024a9033485f$export$flushSync;
    $0fe3ed5fa0b6906a4118024a9033485f$export$hydrate = function (a, b, c) {
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$rk(b)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(200));
      return $0fe3ed5fa0b6906a4118024a9033485f$var$tk(null, a, b, !0, c);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.hydrate = $0fe3ed5fa0b6906a4118024a9033485f$export$hydrate;
    $0fe3ed5fa0b6906a4118024a9033485f$export$render = function (a, b, c) {
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$rk(b)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(200));
      return $0fe3ed5fa0b6906a4118024a9033485f$var$tk(null, a, b, !1, c);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.render = $0fe3ed5fa0b6906a4118024a9033485f$export$render;
    $0fe3ed5fa0b6906a4118024a9033485f$export$unmountComponentAtNode = function (a) {
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$rk(a)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(40));
      return a._reactRootContainer ? ($0fe3ed5fa0b6906a4118024a9033485f$var$Xj(function () {
        $0fe3ed5fa0b6906a4118024a9033485f$var$tk(null, null, a, !1, function () {
          a._reactRootContainer = null;
          a[$0fe3ed5fa0b6906a4118024a9033485f$var$ff] = null;
        });
      }), !0) : !1;
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.unmountComponentAtNode = $0fe3ed5fa0b6906a4118024a9033485f$export$unmountComponentAtNode;
    $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_batchedUpdates = $0fe3ed5fa0b6906a4118024a9033485f$var$Wj;
    $0fe3ed5fa0b6906a4118024a9033485f$exports.unstable_batchedUpdates = $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_batchedUpdates;
    $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_createPortal = function (a, b) {
      return $0fe3ed5fa0b6906a4118024a9033485f$var$uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.unstable_createPortal = $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_createPortal;
    $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
      if (!$0fe3ed5fa0b6906a4118024a9033485f$var$rk(c)) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(200));
      if (null == a || void 0 === a._reactInternals) throw Error($0fe3ed5fa0b6906a4118024a9033485f$var$y(38));
      return $0fe3ed5fa0b6906a4118024a9033485f$var$tk(a, b, c, !1, d);
    };
    $0fe3ed5fa0b6906a4118024a9033485f$exports.unstable_renderSubtreeIntoContainer = $0fe3ed5fa0b6906a4118024a9033485f$export$unstable_renderSubtreeIntoContainer;
    $0fe3ed5fa0b6906a4118024a9033485f$export$version = "17.0.2";
    $0fe3ed5fa0b6906a4118024a9033485f$exports.version = $0fe3ed5fa0b6906a4118024a9033485f$export$version;
  }
  function $0fe3ed5fa0b6906a4118024a9033485f$init() {
    if (!$0fe3ed5fa0b6906a4118024a9033485f$executed) {
      $0fe3ed5fa0b6906a4118024a9033485f$executed = true;
      $0fe3ed5fa0b6906a4118024a9033485f$exec();
    }
    return $0fe3ed5fa0b6906a4118024a9033485f$exports;
  }
  // ASSET: node_modules/react-dom/index.js
  var $008ae6230b404256eda73aa4f5097092$exports = {};
  function $008ae6230b404256eda73aa4f5097092$var$checkDCE() {
    /*global __REACT_DEVTOOLS_GLOBAL_HOOK__*/
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
      return;
    }
    if ("production" !== 'production') {
      // This branch is unreachable because this function is only called
      // in production, but the condition is true only in development.
      // Therefore if the branch is still here, dead code elimination wasn't
      // properly applied.
      // Don't change the message. React DevTools relies on it. Also make sure
      // this message doesn't occur elsewhere in this function, or it will cause
      // a false positive.
      throw new Error('^_^');
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($008ae6230b404256eda73aa4f5097092$var$checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }
  if ("production" === 'production') {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    $008ae6230b404256eda73aa4f5097092$var$checkDCE();
    $008ae6230b404256eda73aa4f5097092$exports = $0fe3ed5fa0b6906a4118024a9033485f$init();
  } else {
    $008ae6230b404256eda73aa4f5097092$exports = require('./cjs/react-dom.development.js');
  }
  var $008ae6230b404256eda73aa4f5097092$$interop$default = /*@__PURE__*/$parcel$interopDefault($008ae6230b404256eda73aa4f5097092$exports);
  $6cebeac97b4ebedf27e6f4c716f2d918$init();
  // ASSET: node_modules/distance-transform/dt.js
  var $e8ae97f6472f3746f501d0b1d2732b57$exports = {};
  // ASSET: node_modules/ndarray/ndarray.js
  var $c819e6fc7d8c020cdc7adf1b889fd7da$exports = {};
  // ASSET: node_modules/iota-array/iota.js
  var $9a91bb48a41602f78102b8ac350b9a72$exports = {};
  function $9a91bb48a41602f78102b8ac350b9a72$var$iota(n) {
    var result = new Array(n);
    for (var i = 0; i < n; ++i) {
      result[i] = i;
    }
    return result;
  }
  $9a91bb48a41602f78102b8ac350b9a72$exports = $9a91bb48a41602f78102b8ac350b9a72$var$iota;
  var $c819e6fc7d8c020cdc7adf1b889fd7da$var$iota = $9a91bb48a41602f78102b8ac350b9a72$exports;
  // ASSET: node_modules/is-buffer/index.js
  var $4f2bbaea5bcccd02a90f04a3b912b71e$exports = {};
  /*!
  * Determine if an object is a Buffer
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  */
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  $4f2bbaea5bcccd02a90f04a3b912b71e$exports = function (obj) {
    return obj != null && ($4f2bbaea5bcccd02a90f04a3b912b71e$var$isBuffer(obj) || $4f2bbaea5bcccd02a90f04a3b912b71e$var$isSlowBuffer(obj) || !!obj._isBuffer);
  };
  function $4f2bbaea5bcccd02a90f04a3b912b71e$var$isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  }
  // For Node v0.10 support. Remove this eventually.
  function $4f2bbaea5bcccd02a90f04a3b912b71e$var$isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && $4f2bbaea5bcccd02a90f04a3b912b71e$var$isBuffer(obj.slice(0, 0));
  }
  var $c819e6fc7d8c020cdc7adf1b889fd7da$var$isBuffer = $4f2bbaea5bcccd02a90f04a3b912b71e$exports;
  var $c819e6fc7d8c020cdc7adf1b889fd7da$var$hasTypedArrays = typeof Float64Array !== "undefined";
  function $c819e6fc7d8c020cdc7adf1b889fd7da$var$compare1st(a, b) {
    return a[0] - b[0];
  }
  function $c819e6fc7d8c020cdc7adf1b889fd7da$var$order() {
    var stride = this.stride;
    var terms = new Array(stride.length);
    var i;
    for (i = 0; i < terms.length; ++i) {
      terms[i] = [Math.abs(stride[i]), i];
    }
    terms.sort($c819e6fc7d8c020cdc7adf1b889fd7da$var$compare1st);
    var result = new Array(terms.length);
    for (i = 0; i < result.length; ++i) {
      result[i] = terms[i][1];
    }
    return result;
  }
  function $c819e6fc7d8c020cdc7adf1b889fd7da$var$compileConstructor(dtype, dimension) {
    var className = ["View", dimension, "d", dtype].join("");
    if (dimension < 0) {
      className = "View_Nil" + dtype;
    }
    var useGetters = dtype === "generic";
    if (dimension === -1) {
      // Special case for trivial arrays
      var code = "function " + className + "(a){this.data=a;};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new " + className + "(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_" + className + "(a){return new " + className + "(a);}";
      var procedure = new Function(code);
      return procedure();
    } else if (dimension === 0) {
      // Special case for 0d arrays
      var code = "function " + className + "(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function " + className + "_copy() {\
return new " + className + "(this.data,this.offset)\
};\
proto.pick=function " + className + "_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function " + className + "_get(){\
return " + (useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};\
proto.set=function " + className + "_set(v){\
return " + (useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "\
};\
return function construct_" + className + "(a,b,c,d){return new " + className + "(a,d)}";
      var procedure = new Function("TrivialArray", code);
      return procedure($c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS[dtype][0]);
    }
    var code = ["'use strict'"];
    // Create constructor for view
    var indices = $c819e6fc7d8c020cdc7adf1b889fd7da$var$iota(dimension);
    var args = indices.map(function (i) {
      return "i" + i;
    });
    var index_str = "this.offset+" + indices.map(function (i) {
      return "this.stride[" + i + "]*i" + i;
    }).join("+");
    var shapeArg = indices.map(function (i) {
      return "b" + i;
    }).join(",");
    var strideArg = indices.map(function (i) {
      return "c" + i;
    }).join(",");
    code.push("function " + className + "(a," + shapeArg + "," + strideArg + ",d){this.data=a", "this.shape=[" + shapeArg + "]", "this.stride=[" + strideArg + "]", "this.offset=d|0}", "var proto=" + className + ".prototype", "proto.dtype='" + dtype + "'", "proto.dimension=" + dimension);
    // view.size:
    code.push("Object.defineProperty(proto,'size',{get:function " + className + "_size(){\
return " + indices.map(function (i) {
      return "this.shape[" + i + "]";
    }).join("*"), "}})");
    // view.order:
    if (dimension === 1) {
      code.push("proto.order=[0]");
    } else {
      code.push("Object.defineProperty(proto,'order',{get:");
      if (dimension < 4) {
        code.push("function " + className + "_order(){");
        if (dimension === 2) {
          code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
        } else if (dimension === 3) {
          code.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})");
        }
      } else {
        code.push("ORDER})");
      }
    }
    // view.set(i0, ..., v):
    code.push("proto.set=function " + className + "_set(" + args.join(",") + ",v){");
    if (useGetters) {
      code.push("return this.data.set(" + index_str + ",v)}");
    } else {
      code.push("return this.data[" + index_str + "]=v}");
    }
    // view.get(i0, ...):
    code.push("proto.get=function " + className + "_get(" + args.join(",") + "){");
    if (useGetters) {
      code.push("return this.data.get(" + index_str + ")}");
    } else {
      code.push("return this.data[" + index_str + "]}");
    }
    // view.index:
    code.push("proto.index=function " + className + "_index(", args.join(), "){return " + index_str + "}");
    // view.hi():
    code.push("proto.hi=function " + className + "_hi(" + args.join(",") + "){return new " + className + "(this.data," + indices.map(function (i) {
      return ["(typeof i", i, "!=='number'||i", i, "<0)?this.shape[", i, "]:i", i, "|0"].join("");
    }).join(",") + "," + indices.map(function (i) {
      return "this.stride[" + i + "]";
    }).join(",") + ",this.offset)}");
    // view.lo():
    var a_vars = indices.map(function (i) {
      return "a" + i + "=this.shape[" + i + "]";
    });
    var c_vars = indices.map(function (i) {
      return "c" + i + "=this.stride[" + i + "]";
    });
    code.push("proto.lo=function " + className + "_lo(" + args.join(",") + "){var b=this.offset,d=0," + a_vars.join(",") + "," + c_vars.join(","));
    for (var i = 0; i < dimension; ++i) {
      code.push("if(typeof i" + i + "==='number'&&i" + i + ">=0){\
d=i" + i + "|0;\
b+=c" + i + "*d;\
a" + i + "-=d}");
    }
    code.push("return new " + className + "(this.data," + indices.map(function (i) {
      return "a" + i;
    }).join(",") + "," + indices.map(function (i) {
      return "c" + i;
    }).join(",") + ",b)}");
    // view.step():
    code.push("proto.step=function " + className + "_step(" + args.join(",") + "){var " + indices.map(function (i) {
      return "a" + i + "=this.shape[" + i + "]";
    }).join(",") + "," + indices.map(function (i) {
      return "b" + i + "=this.stride[" + i + "]";
    }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
    for (var i = 0; i < dimension; ++i) {
      code.push("if(typeof i" + i + "==='number'){\
d=i" + i + "|0;\
if(d<0){\
c+=b" + i + "*(a" + i + "-1);\
a" + i + "=ceil(-a" + i + "/d)\
}else{\
a" + i + "=ceil(a" + i + "/d)\
}\
b" + i + "*=d\
}");
    }
    code.push("return new " + className + "(this.data," + indices.map(function (i) {
      return "a" + i;
    }).join(",") + "," + indices.map(function (i) {
      return "b" + i;
    }).join(",") + ",c)}");
    // view.transpose():
    var tShape = new Array(dimension);
    var tStride = new Array(dimension);
    for (var i = 0; i < dimension; ++i) {
      tShape[i] = "a[i" + i + "]";
      tStride[i] = "b[i" + i + "]";
    }
    code.push("proto.transpose=function " + className + "_transpose(" + args + "){" + args.map(function (n, idx) {
      return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)";
    }).join(";"), "var a=this.shape,b=this.stride;return new " + className + "(this.data," + tShape.join(",") + "," + tStride.join(",") + ",this.offset)}");
    // view.pick():
    code.push("proto.pick=function " + className + "_pick(" + args + "){var a=[],b=[],c=this.offset");
    for (var i = 0; i < dimension; ++i) {
      code.push("if(typeof i" + i + "==='number'&&i" + i + ">=0){c=(c+this.stride[" + i + "]*i" + i + ")|0}else{a.push(this.shape[" + i + "]);b.push(this.stride[" + i + "])}");
    }
    code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");
    // Add return statement
    code.push("return function construct_" + className + "(data,shape,stride,offset){return new " + className + "(data," + indices.map(function (i) {
      return "shape[" + i + "]";
    }).join(",") + "," + indices.map(function (i) {
      return "stride[" + i + "]";
    }).join(",") + ",offset)}");
    // Compile procedure
    var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"));
    return procedure($c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS[dtype], $c819e6fc7d8c020cdc7adf1b889fd7da$var$order);
  }
  function $c819e6fc7d8c020cdc7adf1b889fd7da$var$arrayDType(data) {
    if ($c819e6fc7d8c020cdc7adf1b889fd7da$var$isBuffer(data)) {
      return "buffer";
    }
    if ($c819e6fc7d8c020cdc7adf1b889fd7da$var$hasTypedArrays) {
      switch (Object.prototype.toString.call(data)) {
        case "[object Float64Array]":
          return "float64";
        case "[object Float32Array]":
          return "float32";
        case "[object Int8Array]":
          return "int8";
        case "[object Int16Array]":
          return "int16";
        case "[object Int32Array]":
          return "int32";
        case "[object Uint8Array]":
          return "uint8";
        case "[object Uint16Array]":
          return "uint16";
        case "[object Uint32Array]":
          return "uint32";
        case "[object Uint8ClampedArray]":
          return "uint8_clamped";
        case "[object BigInt64Array]":
          return "bigint64";
        case "[object BigUint64Array]":
          return "biguint64";
      }
    }
    if (Array.isArray(data)) {
      return "array";
    }
    return "generic";
  }
  var $c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS = {
    "float32": [],
    "float64": [],
    "int8": [],
    "int16": [],
    "int32": [],
    "uint8": [],
    "uint16": [],
    "uint32": [],
    "array": [],
    "uint8_clamped": [],
    "bigint64": [],
    "biguint64": [],
    "buffer": [],
    "generic": []
  };
  (function () {
    for (var id in $c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS) {
      $c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS[id].push($c819e6fc7d8c020cdc7adf1b889fd7da$var$compileConstructor(id, -1));
    }
  });
  function $c819e6fc7d8c020cdc7adf1b889fd7da$var$wrappedNDArrayCtor(data, shape, stride, offset) {
    if (data === undefined) {
      var ctor = $c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS.array[0];
      return ctor([]);
    } else if (typeof data === "number") {
      data = [data];
    }
    if (shape === undefined) {
      shape = [data.length];
    }
    var d = shape.length;
    if (stride === undefined) {
      stride = new Array(d);
      for (var i = d - 1, sz = 1; i >= 0; --i) {
        stride[i] = sz;
        sz *= shape[i];
      }
    }
    if (offset === undefined) {
      offset = 0;
      for (var i = 0; i < d; ++i) {
        if (stride[i] < 0) {
          offset -= (shape[i] - 1) * stride[i];
        }
      }
    }
    var dtype = $c819e6fc7d8c020cdc7adf1b889fd7da$var$arrayDType(data);
    var ctor_list = $c819e6fc7d8c020cdc7adf1b889fd7da$var$CACHED_CONSTRUCTORS[dtype];
    while (ctor_list.length <= d + 1) {
      ctor_list.push($c819e6fc7d8c020cdc7adf1b889fd7da$var$compileConstructor(dtype, ctor_list.length - 1));
    }
    var ctor = ctor_list[d + 1];
    return ctor(data, shape, stride, offset);
  }
  $c819e6fc7d8c020cdc7adf1b889fd7da$exports = $c819e6fc7d8c020cdc7adf1b889fd7da$var$wrappedNDArrayCtor;
  var $c819e6fc7d8c020cdc7adf1b889fd7da$$interop$default = /*@__PURE__*/$parcel$interopDefault($c819e6fc7d8c020cdc7adf1b889fd7da$exports);
  var $e8ae97f6472f3746f501d0b1d2732b57$var$ndarray = $c819e6fc7d8c020cdc7adf1b889fd7da$exports;
  // ASSET: node_modules/cwise/lib/cwise-esprima.js
  var $5cdfa2968ca2b18245a258efa5e0b0df$exports = {};
  // ASSET: node_modules/cwise-parser/index.js
  var $5ab7d1482fb0d051f7560e4ebf06e739$exports = {};
  // ASSET: node_modules/cwise-parser/node_modules/esprima/esprima.js
  var $dbace9392e5246e8c113131bf637212e$exports = {};
  var $dbace9392e5246e8c113131bf637212e$var$define;
  /*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>
  
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:
  
  * Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.
  
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  /*jslint bitwise:true plusplus:true*/
  /*global esprima:true, define:true, exports:true, window: true,
  throwErrorTolerant: true,
  throwError: true, generateStatement: true, peek: true,
  parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
  parseFunctionDeclaration: true, parseFunctionExpression: true,
  parseFunctionSourceElements: true, parseVariableIdentifier: true,
  parseLeftHandSideExpression: true,
  parseUnaryExpression: true,
  parseStatement: true, parseSourceElement: true*/
  (function (root, factory) {
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.
    /*istanbul ignore next*/
    if (typeof $dbace9392e5246e8c113131bf637212e$var$define === 'function' && $dbace9392e5246e8c113131bf637212e$var$define.amd) {
      $dbace9392e5246e8c113131bf637212e$var$define(['exports'], factory);
    } else if (typeof $dbace9392e5246e8c113131bf637212e$exports !== 'undefined') {
      factory($dbace9392e5246e8c113131bf637212e$exports);
    } else {
      factory(root.esprima = {});
    }
  })($dbace9392e5246e8c113131bf637212e$exports, function (exports) {
    var Token, TokenName, FnExprTokens, Syntax, PropertyKind, Messages, Regex, SyntaxTreeDelegate, source, strict, index, lineNumber, lineStart, length, delegate, lookahead, state, extra;
    Token = {
      BooleanLiteral: 1,
      EOF: 2,
      Identifier: 3,
      Keyword: 4,
      NullLiteral: 5,
      NumericLiteral: 6,
      Punctuator: 7,
      StringLiteral: 8,
      RegularExpression: 9
    };
    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.RegularExpression] = 'RegularExpression';
    // A function following one of those tokens is an expression.
    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new', 'return', 'case', 'delete', 'throw', 'void', // assignment operators
    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', ',', // binary/unary operators
    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=', '<=', '<', '>', '!=', '!=='];
    Syntax = {
      AssignmentExpression: 'AssignmentExpression',
      ArrayExpression: 'ArrayExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DoWhileStatement: 'DoWhileStatement',
      DebuggerStatement: 'DebuggerStatement',
      EmptyStatement: 'EmptyStatement',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForInStatement: 'ForInStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      Program: 'Program',
      Property: 'Property',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SwitchStatement: 'SwitchStatement',
      SwitchCase: 'SwitchCase',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement'
    };
    PropertyKind = {
      Data: 1,
      Get: 2,
      Set: 4
    };
    // Error messages should be identical to V8.
    Messages = {
      UnexpectedToken: 'Unexpected token %0',
      UnexpectedNumber: 'Unexpected number',
      UnexpectedString: 'Unexpected string',
      UnexpectedIdentifier: 'Unexpected identifier',
      UnexpectedReserved: 'Unexpected reserved word',
      UnexpectedEOS: 'Unexpected end of input',
      NewlineAfterThrow: 'Illegal newline after throw',
      InvalidRegExp: 'Invalid regular expression',
      UnterminatedRegExp: 'Invalid regular expression: missing /',
      InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
      InvalidLHSInForIn: 'Invalid left-hand side in for-in',
      MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
      NoCatchOrFinally: 'Missing catch or finally after try',
      UnknownLabel: 'Undefined label \'%0\'',
      Redeclaration: '%0 \'%1\' has already been declared',
      IllegalContinue: 'Illegal continue statement',
      IllegalBreak: 'Illegal break statement',
      IllegalReturn: 'Illegal return statement',
      StrictModeWith: 'Strict mode code may not include a with statement',
      StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
      StrictVarName: 'Variable name may not be eval or arguments in strict mode',
      StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
      StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
      StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
      StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
      StrictDelete: 'Delete of an unqualified identifier in strict mode.',
      StrictDuplicateProperty: 'Duplicate data property in object literal not allowed in strict mode',
      AccessorDataProperty: 'Object literal may not have data and accessor property with the same name',
      AccessorGetSet: 'Object literal may not have multiple get/set accessors with the same name',
      StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
      StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
      StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
      StrictReservedWord: 'Use of future reserved word in strict mode'
    };
    // See also tools/generate-unicode-regex.py.
    Regex = {
      NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
      NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
    };
    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.
    function assert(condition, message) {
      /*istanbul ignore if*/
      if (!condition) {
        throw new Error('ASSERT: ' + message);
      }
    }
    function isDecimalDigit(ch) {
      return ch >= 48 && ch <= 57;
    }
    function isHexDigit(ch) {
      return ('0123456789abcdefABCDEF').indexOf(ch) >= 0;
    }
    function isOctalDigit(ch) {
      return ('01234567').indexOf(ch) >= 0;
    }
    // 7.2 White Space
    function isWhiteSpace(ch) {
      return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0;
    }
    // 7.3 Line Terminators
    function isLineTerminator(ch) {
      return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }
    // 7.6 Identifier Names and Identifiers
    function isIdentifierStart(ch) {
      return ch === 0x24 || ch === 0x5F || // $ (dollar) and _ (underscore)
      ch >= 0x41 && ch <= 0x5A || // A..Z
      ch >= 0x61 && ch <= 0x7A || // a..z
      ch === 0x5C || // \ (backslash)
      ch >= 0x80 && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
    }
    function isIdentifierPart(ch) {
      return ch === 0x24 || ch === 0x5F || // $ (dollar) and _ (underscore)
      ch >= 0x41 && ch <= 0x5A || // A..Z
      ch >= 0x61 && ch <= 0x7A || // a..z
      ch >= 0x30 && ch <= 0x39 || // 0..9
      ch === 0x5C || // \ (backslash)
      ch >= 0x80 && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
    }
    // 7.6.1.2 Future Reserved Words
    function isFutureReservedWord(id) {
      switch (id) {
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
          return true;
        default:
          return false;
      }
    }
    function isStrictModeReservedWord(id) {
      switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
          return true;
        default:
          return false;
      }
    }
    function isRestrictedWord(id) {
      return id === 'eval' || id === 'arguments';
    }
    // 7.6.1.1 Keywords
    function isKeyword(id) {
      if (strict && isStrictModeReservedWord(id)) {
        return true;
      }
      // 'const' is specialized as Keyword in V8.
      // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
      // Some others are from future reserved words.
      switch (id.length) {
        case 2:
          return id === 'if' || id === 'in' || id === 'do';
        case 3:
          return id === 'var' || id === 'for' || id === 'new' || id === 'try' || id === 'let';
        case 4:
          return id === 'this' || id === 'else' || id === 'case' || id === 'void' || id === 'with' || id === 'enum';
        case 5:
          return id === 'while' || id === 'break' || id === 'catch' || id === 'throw' || id === 'const' || id === 'yield' || id === 'class' || id === 'super';
        case 6:
          return id === 'return' || id === 'typeof' || id === 'delete' || id === 'switch' || id === 'export' || id === 'import';
        case 7:
          return id === 'default' || id === 'finally' || id === 'extends';
        case 8:
          return id === 'function' || id === 'continue' || id === 'debugger';
        case 10:
          return id === 'instanceof';
        default:
          return false;
      }
    }
    // 7.4 Comments
    function addComment(type, value, start, end, loc) {
      var comment, attacher;
      assert(typeof start === 'number', 'Comment must have valid position');
      // Because the way the actual token is scanned, often the comments
      // (if any) are skipped twice during the lexical analysis.
      // Thus, we need to skip adding a comment if the comment array already
      // handled it.
      if (state.lastCommentStart >= start) {
        return;
      }
      state.lastCommentStart = start;
      comment = {
        type: type,
        value: value
      };
      if (extra.range) {
        comment.range = [start, end];
      }
      if (extra.loc) {
        comment.loc = loc;
      }
      extra.comments.push(comment);
      if (extra.attachComment) {
        extra.leadingComments.push(comment);
        extra.trailingComments.push(comment);
      }
    }
    function skipSingleLineComment(offset) {
      var start, loc, ch, comment;
      start = index - offset;
      loc = {
        start: {
          line: lineNumber,
          column: index - lineStart - offset
        }
      };
      while (index < length) {
        ch = source.charCodeAt(index);
        ++index;
        if (isLineTerminator(ch)) {
          if (extra.comments) {
            comment = source.slice(start + offset, index - 1);
            loc.end = {
              line: lineNumber,
              column: index - lineStart - 1
            };
            addComment('Line', comment, start, index - 1, loc);
          }
          if (ch === 13 && source.charCodeAt(index) === 10) {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
          return;
        }
      }
      if (extra.comments) {
        comment = source.slice(start + offset, index);
        loc.end = {
          line: lineNumber,
          column: index - lineStart
        };
        addComment('Line', comment, start, index, loc);
      }
    }
    function skipMultiLineComment() {
      var start, loc, ch, comment;
      if (extra.comments) {
        start = index - 2;
        loc = {
          start: {
            line: lineNumber,
            column: index - lineStart - 2
          }
        };
      }
      while (index < length) {
        ch = source.charCodeAt(index);
        if (isLineTerminator(ch)) {
          if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
            ++index;
          }
          ++lineNumber;
          ++index;
          lineStart = index;
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else if (ch === 0x2A) {
          // Block comment ends with '*/'.
          if (source.charCodeAt(index + 1) === 0x2F) {
            ++index;
            ++index;
            if (extra.comments) {
              comment = source.slice(start + 2, index - 2);
              loc.end = {
                line: lineNumber,
                column: index - lineStart
              };
              addComment('Block', comment, start, index, loc);
            }
            return;
          }
          ++index;
        } else {
          ++index;
        }
      }
      throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }
    function skipComment() {
      var ch, start;
      start = index === 0;
      while (index < length) {
        ch = source.charCodeAt(index);
        if (isWhiteSpace(ch)) {
          ++index;
        } else if (isLineTerminator(ch)) {
          ++index;
          if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
          start = true;
        } else if (ch === 0x2F) {
          // U+002F is '/'
          ch = source.charCodeAt(index + 1);
          if (ch === 0x2F) {
            ++index;
            ++index;
            skipSingleLineComment(2);
            start = true;
          } else if (ch === 0x2A) {
            // U+002A is '*'
            ++index;
            ++index;
            skipMultiLineComment();
          } else {
            break;
          }
        } else if (start && ch === 0x2D) {
          // U+002D is '-'
          // U+003E is '>'
          if (source.charCodeAt(index + 1) === 0x2D && source.charCodeAt(index + 2) === 0x3E) {
            // '-->' is a single-line comment
            index += 3;
            skipSingleLineComment(3);
          } else {
            break;
          }
        } else if (ch === 0x3C) {
          // U+003C is '<'
          if (source.slice(index + 1, index + 4) === '!--') {
            ++index;
            // `<`
            ++index;
            // `!`
            ++index;
            // `-`
            ++index;
            // `-`
            skipSingleLineComment(4);
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
    function scanHexEscape(prefix) {
      var i, len, ch, code = 0;
      len = prefix === 'u' ? 4 : 2;
      for (i = 0; i < len; ++i) {
        if (index < length && isHexDigit(source[index])) {
          ch = source[index++];
          code = code * 16 + ('0123456789abcdef').indexOf(ch.toLowerCase());
        } else {
          return '';
        }
      }
      return String.fromCharCode(code);
    }
    function getEscapedIdentifier() {
      var ch, id;
      ch = source.charCodeAt(index++);
      id = String.fromCharCode(ch);
      // '\u' (U+005C, U+0075) denotes an escaped character.
      if (ch === 0x5C) {
        if (source.charCodeAt(index) !== 0x75) {
          throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }
        ++index;
        ch = scanHexEscape('u');
        if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
          throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }
        id = ch;
      }
      while (index < length) {
        ch = source.charCodeAt(index);
        if (!isIdentifierPart(ch)) {
          break;
        }
        ++index;
        id += String.fromCharCode(ch);
        // '\u' (U+005C, U+0075) denotes an escaped character.
        if (ch === 0x5C) {
          id = id.substr(0, id.length - 1);
          if (source.charCodeAt(index) !== 0x75) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
          ++index;
          ch = scanHexEscape('u');
          if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
          id += ch;
        }
      }
      return id;
    }
    function getIdentifier() {
      var start, ch;
      start = index++;
      while (index < length) {
        ch = source.charCodeAt(index);
        if (ch === 0x5C) {
          // Blackslash (U+005C) marks Unicode escape sequence.
          index = start;
          return getEscapedIdentifier();
        }
        if (isIdentifierPart(ch)) {
          ++index;
        } else {
          break;
        }
      }
      return source.slice(start, index);
    }
    function scanIdentifier() {
      var start, id, type;
      start = index;
      // Backslash (U+005C) starts an escaped character.
      id = source.charCodeAt(index) === 0x5C ? getEscapedIdentifier() : getIdentifier();
      // There is no keyword or literal with only one character.
      // Thus, it must be an identifier.
      if (id.length === 1) {
        type = Token.Identifier;
      } else if (isKeyword(id)) {
        type = Token.Keyword;
      } else if (id === 'null') {
        type = Token.NullLiteral;
      } else if (id === 'true' || id === 'false') {
        type = Token.BooleanLiteral;
      } else {
        type = Token.Identifier;
      }
      return {
        type: type,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    // 7.7 Punctuators
    function scanPunctuator() {
      var start = index, code = source.charCodeAt(index), code2, ch1 = source[index], ch2, ch3, ch4;
      switch (code) {
        case 0x2E:
        case 0x28:
        case 0x29:
        case 0x3B:
        case 0x2C:
        case 0x7B:
        case 0x7D:
        case 0x5B:
        case 0x5D:
        case 0x3A:
        case 0x3F:
        case 0x7E:
          // ~
          ++index;
          if (extra.tokenize) {
            if (code === 0x28) {
              extra.openParenToken = extra.tokens.length;
            } else if (code === 0x7B) {
              extra.openCurlyToken = extra.tokens.length;
            }
          }
          return {
            type: Token.Punctuator,
            value: String.fromCharCode(code),
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        default:
          code2 = source.charCodeAt(index + 1);
          // '=' (U+003D) marks an assignment or comparison operator.
          if (code2 === 0x3D) {
            switch (code) {
              case 0x2B:
              case 0x2D:
              case 0x2F:
              case 0x3C:
              case 0x3E:
              case 0x5E:
              case 0x7C:
              case 0x25:
              case 0x26:
              case 0x2A:
                // *
                index += 2;
                return {
                  type: Token.Punctuator,
                  value: String.fromCharCode(code) + String.fromCharCode(code2),
                  lineNumber: lineNumber,
                  lineStart: lineStart,
                  start: start,
                  end: index
                };
              case 0x21:
              case 0x3D:
                // =
                index += 2;
                // !== and ===
                if (source.charCodeAt(index) === 0x3D) {
                  ++index;
                }
                return {
                  type: Token.Punctuator,
                  value: source.slice(start, index),
                  lineNumber: lineNumber,
                  lineStart: lineStart,
                  start: start,
                  end: index
                };
            }
          }
      }
      // 4-character punctuator: >>>=
      ch4 = source.substr(index, 4);
      if (ch4 === '>>>=') {
        index += 4;
        return {
          type: Token.Punctuator,
          value: ch4,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      // 3-character punctuators: === !== >>> <<= >>=
      ch3 = ch4.substr(0, 3);
      if (ch3 === '>>>' || ch3 === '<<=' || ch3 === '>>=') {
        index += 3;
        return {
          type: Token.Punctuator,
          value: ch3,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      // Other 2-character punctuators: ++ -- << >> && ||
      ch2 = ch3.substr(0, 2);
      if (ch1 === ch2[1] && ('+-<>&|').indexOf(ch1) >= 0 || ch2 === '=>') {
        index += 2;
        return {
          type: Token.Punctuator,
          value: ch2,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      // 1-character punctuators: < > = ! + - * % & | ^ /
      if (('<>=!+-*%&|^/').indexOf(ch1) >= 0) {
        ++index;
        return {
          type: Token.Punctuator,
          value: ch1,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }
    // 7.8.3 Numeric Literals
    function scanHexLiteral(start) {
      var number = '';
      while (index < length) {
        if (!isHexDigit(source[index])) {
          break;
        }
        number += source[index++];
      }
      if (number.length === 0) {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
      if (isIdentifierStart(source.charCodeAt(index))) {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
      return {
        type: Token.NumericLiteral,
        value: parseInt('0x' + number, 16),
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function scanOctalLiteral(start) {
      var number = '0' + source[index++];
      while (index < length) {
        if (!isOctalDigit(source[index])) {
          break;
        }
        number += source[index++];
      }
      if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
      return {
        type: Token.NumericLiteral,
        value: parseInt(number, 8),
        octal: true,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function isImplicitOctalLiteral() {
      var i, ch;
      // Implicit octal, unless there is a non-octal digit.
      // (Annex B.1.1 on Numeric Literals)
      for (i = index + 1; i < length; ++i) {
        ch = source[i];
        if (ch === '8' || ch === '9') {
          return false;
        }
        if (!isOctalDigit(ch)) {
          return true;
        }
      }
      return true;
    }
    function scanNumericLiteral() {
      var number, start, ch;
      ch = source[index];
      assert(isDecimalDigit(ch.charCodeAt(0)) || ch === '.', 'Numeric literal must start with a decimal digit or a decimal point');
      start = index;
      number = '';
      if (ch !== '.') {
        number = source[index++];
        ch = source[index];
        // Hex number starts with '0x'.
        // Octal number starts with '0'.
        if (number === '0') {
          if (ch === 'x' || ch === 'X') {
            ++index;
            return scanHexLiteral(start);
          }
          if (isOctalDigit(ch)) {
            if (isImplicitOctalLiteral()) {
              return scanOctalLiteral(start);
            }
          }
        }
        while (isDecimalDigit(source.charCodeAt(index))) {
          number += source[index++];
        }
        ch = source[index];
      }
      if (ch === '.') {
        number += source[index++];
        while (isDecimalDigit(source.charCodeAt(index))) {
          number += source[index++];
        }
        ch = source[index];
      }
      if (ch === 'e' || ch === 'E') {
        number += source[index++];
        ch = source[index];
        if (ch === '+' || ch === '-') {
          number += source[index++];
        }
        if (isDecimalDigit(source.charCodeAt(index))) {
          while (isDecimalDigit(source.charCodeAt(index))) {
            number += source[index++];
          }
        } else {
          throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }
      }
      if (isIdentifierStart(source.charCodeAt(index))) {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
      return {
        type: Token.NumericLiteral,
        value: parseFloat(number),
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    // 7.8.4 String Literals
    function scanStringLiteral() {
      var str = '', quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
      startLineNumber = lineNumber;
      startLineStart = lineStart;
      quote = source[index];
      assert(quote === '\'' || quote === '"', 'String literal must starts with a quote');
      start = index;
      ++index;
      while (index < length) {
        ch = source[index++];
        if (ch === quote) {
          quote = '';
          break;
        } else if (ch === '\\') {
          ch = source[index++];
          if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
            switch (ch) {
              case 'u':
              case 'x':
                restore = index;
                unescaped = scanHexEscape(ch);
                if (unescaped) {
                  str += unescaped;
                } else {
                  index = restore;
                  str += ch;
                }
                break;
              case 'n':
                str += '\n';
                break;
              case 'r':
                str += '\r';
                break;
              case 't':
                str += '\t';
                break;
              case 'b':
                str += '\b';
                break;
              case 'f':
                str += '\f';
                break;
              case 'v':
                str += '\x0B';
                break;
              default:
                if (isOctalDigit(ch)) {
                  code = ('01234567').indexOf(ch);
                  // \0 is not octal escape sequence
                  if (code !== 0) {
                    octal = true;
                  }
                  if (index < length && isOctalDigit(source[index])) {
                    octal = true;
                    code = code * 8 + ('01234567').indexOf(source[index++]);
                    // 3 digits are only allowed when string starts
                    // with 0, 1, 2, 3
                    if (('0123').indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
                      code = code * 8 + ('01234567').indexOf(source[index++]);
                    }
                  }
                  str += String.fromCharCode(code);
                } else {
                  str += ch;
                }
                break;
            }
          } else {
            ++lineNumber;
            if (ch === '\r' && source[index] === '\n') {
              ++index;
            }
            lineStart = index;
          }
        } else if (isLineTerminator(ch.charCodeAt(0))) {
          break;
        } else {
          str += ch;
        }
      }
      if (quote !== '') {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
      return {
        type: Token.StringLiteral,
        value: str,
        octal: octal,
        startLineNumber: startLineNumber,
        startLineStart: startLineStart,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    function testRegExp(pattern, flags) {
      var value;
      try {
        value = new RegExp(pattern, flags);
      } catch (e) {
        throwError({}, Messages.InvalidRegExp);
      }
      return value;
    }
    function scanRegExpBody() {
      var ch, str, classMarker, terminated, body;
      ch = source[index];
      assert(ch === '/', 'Regular expression literal must start with a slash');
      str = source[index++];
      classMarker = false;
      terminated = false;
      while (index < length) {
        ch = source[index++];
        str += ch;
        if (ch === '\\') {
          ch = source[index++];
          // ECMA-262 7.8.5
          if (isLineTerminator(ch.charCodeAt(0))) {
            throwError({}, Messages.UnterminatedRegExp);
          }
          str += ch;
        } else if (isLineTerminator(ch.charCodeAt(0))) {
          throwError({}, Messages.UnterminatedRegExp);
        } else if (classMarker) {
          if (ch === ']') {
            classMarker = false;
          }
        } else {
          if (ch === '/') {
            terminated = true;
            break;
          } else if (ch === '[') {
            classMarker = true;
          }
        }
      }
      if (!terminated) {
        throwError({}, Messages.UnterminatedRegExp);
      }
      // Exclude leading and trailing slash.
      body = str.substr(1, str.length - 2);
      return {
        value: body,
        literal: str
      };
    }
    function scanRegExpFlags() {
      var ch, str, flags, restore;
      str = '';
      flags = '';
      while (index < length) {
        ch = source[index];
        if (!isIdentifierPart(ch.charCodeAt(0))) {
          break;
        }
        ++index;
        if (ch === '\\' && index < length) {
          ch = source[index];
          if (ch === 'u') {
            ++index;
            restore = index;
            ch = scanHexEscape('u');
            if (ch) {
              flags += ch;
              for (str += '\\u'; restore < index; ++restore) {
                str += source[restore];
              }
            } else {
              index = restore;
              flags += 'u';
              str += '\\u';
            }
            throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
          } else {
            str += '\\';
            throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else {
          flags += ch;
          str += ch;
        }
      }
      return {
        value: flags,
        literal: str
      };
    }
    function scanRegExp() {
      var start, body, flags, pattern, value;
      lookahead = null;
      skipComment();
      start = index;
      body = scanRegExpBody();
      flags = scanRegExpFlags();
      value = testRegExp(body.value, flags.value);
      if (extra.tokenize) {
        return {
          type: Token.RegularExpression,
          value: value,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      return {
        literal: body.literal + flags.literal,
        value: value,
        start: start,
        end: index
      };
    }
    function collectRegex() {
      var pos, loc, regex, token;
      skipComment();
      pos = index;
      loc = {
        start: {
          line: lineNumber,
          column: index - lineStart
        }
      };
      regex = scanRegExp();
      loc.end = {
        line: lineNumber,
        column: index - lineStart
      };
      /*istanbul ignore next*/
      if (!extra.tokenize) {
        // Pop the previous token, which is likely '/' or '/='
        if (extra.tokens.length > 0) {
          token = extra.tokens[extra.tokens.length - 1];
          if (token.range[0] === pos && token.type === 'Punctuator') {
            if (token.value === '/' || token.value === '/=') {
              extra.tokens.pop();
            }
          }
        }
        extra.tokens.push({
          type: 'RegularExpression',
          value: regex.literal,
          range: [pos, index],
          loc: loc
        });
      }
      return regex;
    }
    function isIdentifierName(token) {
      return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
    }
    function advanceSlash() {
      var prevToken, checkToken;
      // Using the following algorithm:
      // https://github.com/mozilla/sweet.js/wiki/design
      prevToken = extra.tokens[extra.tokens.length - 1];
      if (!prevToken) {
        // Nothing before that: it cannot be a division.
        return collectRegex();
      }
      if (prevToken.type === 'Punctuator') {
        if (prevToken.value === ']') {
          return scanPunctuator();
        }
        if (prevToken.value === ')') {
          checkToken = extra.tokens[extra.openParenToken - 1];
          if (checkToken && checkToken.type === 'Keyword' && (checkToken.value === 'if' || checkToken.value === 'while' || checkToken.value === 'for' || checkToken.value === 'with')) {
            return collectRegex();
          }
          return scanPunctuator();
        }
        if (prevToken.value === '}') {
          // Dividing a function by anything makes little sense,
          // but we have to check for that.
          if (extra.tokens[extra.openCurlyToken - 3] && extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
            // Anonymous function.
            checkToken = extra.tokens[extra.openCurlyToken - 4];
            if (!checkToken) {
              return scanPunctuator();
            }
          } else if (extra.tokens[extra.openCurlyToken - 4] && extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
            // Named function.
            checkToken = extra.tokens[extra.openCurlyToken - 5];
            if (!checkToken) {
              return collectRegex();
            }
          } else {
            return scanPunctuator();
          }
          // checkToken determines whether the function is
          // a declaration or an expression.
          if (FnExprTokens.indexOf(checkToken.value) >= 0) {
            // It is an expression.
            return scanPunctuator();
          }
          // It is a declaration.
          return collectRegex();
        }
        return collectRegex();
      }
      if (prevToken.type === 'Keyword' && prevToken.value !== 'this') {
        return collectRegex();
      }
      return scanPunctuator();
    }
    function advance() {
      var ch;
      skipComment();
      if (index >= length) {
        return {
          type: Token.EOF,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: index,
          end: index
        };
      }
      ch = source.charCodeAt(index);
      if (isIdentifierStart(ch)) {
        return scanIdentifier();
      }
      // Very common: ( and ) and ;
      if (ch === 0x28 || ch === 0x29 || ch === 0x3B) {
        return scanPunctuator();
      }
      // String literal starts with single quote (U+0027) or double quote (U+0022).
      if (ch === 0x27 || ch === 0x22) {
        return scanStringLiteral();
      }
      // Dot (.) U+002E can also start a floating-point number, hence the need
      // to check the next character.
      if (ch === 0x2E) {
        if (isDecimalDigit(source.charCodeAt(index + 1))) {
          return scanNumericLiteral();
        }
        return scanPunctuator();
      }
      if (isDecimalDigit(ch)) {
        return scanNumericLiteral();
      }
      // Slash (/) U+002F can also start a regex.
      if (extra.tokenize && ch === 0x2F) {
        return advanceSlash();
      }
      return scanPunctuator();
    }
    function collectToken() {
      var loc, token, range, value;
      skipComment();
      loc = {
        start: {
          line: lineNumber,
          column: index - lineStart
        }
      };
      token = advance();
      loc.end = {
        line: lineNumber,
        column: index - lineStart
      };
      if (token.type !== Token.EOF) {
        value = source.slice(token.start, token.end);
        extra.tokens.push({
          type: TokenName[token.type],
          value: value,
          range: [token.start, token.end],
          loc: loc
        });
      }
      return token;
    }
    function lex() {
      var token;
      token = lookahead;
      index = token.end;
      lineNumber = token.lineNumber;
      lineStart = token.lineStart;
      lookahead = typeof extra.tokens !== 'undefined' ? collectToken() : advance();
      index = token.end;
      lineNumber = token.lineNumber;
      lineStart = token.lineStart;
      return token;
    }
    function peek() {
      var pos, line, start;
      pos = index;
      line = lineNumber;
      start = lineStart;
      lookahead = typeof extra.tokens !== 'undefined' ? collectToken() : advance();
      index = pos;
      lineNumber = line;
      lineStart = start;
    }
    function Position(line, column) {
      this.line = line;
      this.column = column;
    }
    function SourceLocation(startLine, startColumn, line, column) {
      this.start = new Position(startLine, startColumn);
      this.end = new Position(line, column);
    }
    SyntaxTreeDelegate = {
      name: 'SyntaxTree',
      processComment: function (node) {
        var lastChild, trailingComments;
        if (node.type === Syntax.Program) {
          if (node.body.length > 0) {
            return;
          }
        }
        if (extra.trailingComments.length > 0) {
          if (extra.trailingComments[0].range[0] >= node.range[1]) {
            trailingComments = extra.trailingComments;
            extra.trailingComments = [];
          } else {
            extra.trailingComments.length = 0;
          }
        } else {
          if (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
            trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
            delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
          }
        }
        // Eating the stack.
        while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
          lastChild = extra.bottomRightStack.pop();
        }
        if (lastChild) {
          if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
            node.leadingComments = lastChild.leadingComments;
            delete lastChild.leadingComments;
          }
        } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
          node.leadingComments = extra.leadingComments;
          extra.leadingComments = [];
        }
        if (trailingComments) {
          node.trailingComments = trailingComments;
        }
        extra.bottomRightStack.push(node);
      },
      markEnd: function (node, startToken) {
        if (extra.range) {
          node.range = [startToken.start, index];
        }
        if (extra.loc) {
          node.loc = new SourceLocation(startToken.startLineNumber === undefined ? startToken.lineNumber : startToken.startLineNumber, startToken.start - (startToken.startLineStart === undefined ? startToken.lineStart : startToken.startLineStart), lineNumber, index - lineStart);
          this.postProcess(node);
        }
        if (extra.attachComment) {
          this.processComment(node);
        }
        return node;
      },
      postProcess: function (node) {
        if (extra.source) {
          node.loc.source = extra.source;
        }
        return node;
      },
      createArrayExpression: function (elements) {
        return {
          type: Syntax.ArrayExpression,
          elements: elements
        };
      },
      createAssignmentExpression: function (operator, left, right) {
        return {
          type: Syntax.AssignmentExpression,
          operator: operator,
          left: left,
          right: right
        };
      },
      createBinaryExpression: function (operator, left, right) {
        var type = operator === '||' || operator === '&&' ? Syntax.LogicalExpression : Syntax.BinaryExpression;
        return {
          type: type,
          operator: operator,
          left: left,
          right: right
        };
      },
      createBlockStatement: function (body) {
        return {
          type: Syntax.BlockStatement,
          body: body
        };
      },
      createBreakStatement: function (label) {
        return {
          type: Syntax.BreakStatement,
          label: label
        };
      },
      createCallExpression: function (callee, args) {
        return {
          type: Syntax.CallExpression,
          callee: callee,
          'arguments': args
        };
      },
      createCatchClause: function (param, body) {
        return {
          type: Syntax.CatchClause,
          param: param,
          body: body
        };
      },
      createConditionalExpression: function (test, consequent, alternate) {
        return {
          type: Syntax.ConditionalExpression,
          test: test,
          consequent: consequent,
          alternate: alternate
        };
      },
      createContinueStatement: function (label) {
        return {
          type: Syntax.ContinueStatement,
          label: label
        };
      },
      createDebuggerStatement: function () {
        return {
          type: Syntax.DebuggerStatement
        };
      },
      createDoWhileStatement: function (body, test) {
        return {
          type: Syntax.DoWhileStatement,
          body: body,
          test: test
        };
      },
      createEmptyStatement: function () {
        return {
          type: Syntax.EmptyStatement
        };
      },
      createExpressionStatement: function (expression) {
        return {
          type: Syntax.ExpressionStatement,
          expression: expression
        };
      },
      createForStatement: function (init, test, update, body) {
        return {
          type: Syntax.ForStatement,
          init: init,
          test: test,
          update: update,
          body: body
        };
      },
      createForInStatement: function (left, right, body) {
        return {
          type: Syntax.ForInStatement,
          left: left,
          right: right,
          body: body,
          each: false
        };
      },
      createFunctionDeclaration: function (id, params, defaults, body) {
        return {
          type: Syntax.FunctionDeclaration,
          id: id,
          params: params,
          defaults: defaults,
          body: body,
          rest: null,
          generator: false,
          expression: false
        };
      },
      createFunctionExpression: function (id, params, defaults, body) {
        return {
          type: Syntax.FunctionExpression,
          id: id,
          params: params,
          defaults: defaults,
          body: body,
          rest: null,
          generator: false,
          expression: false
        };
      },
      createIdentifier: function (name) {
        return {
          type: Syntax.Identifier,
          name: name
        };
      },
      createIfStatement: function (test, consequent, alternate) {
        return {
          type: Syntax.IfStatement,
          test: test,
          consequent: consequent,
          alternate: alternate
        };
      },
      createLabeledStatement: function (label, body) {
        return {
          type: Syntax.LabeledStatement,
          label: label,
          body: body
        };
      },
      createLiteral: function (token) {
        return {
          type: Syntax.Literal,
          value: token.value,
          raw: source.slice(token.start, token.end)
        };
      },
      createMemberExpression: function (accessor, object, property) {
        return {
          type: Syntax.MemberExpression,
          computed: accessor === '[',
          object: object,
          property: property
        };
      },
      createNewExpression: function (callee, args) {
        return {
          type: Syntax.NewExpression,
          callee: callee,
          'arguments': args
        };
      },
      createObjectExpression: function (properties) {
        return {
          type: Syntax.ObjectExpression,
          properties: properties
        };
      },
      createPostfixExpression: function (operator, argument) {
        return {
          type: Syntax.UpdateExpression,
          operator: operator,
          argument: argument,
          prefix: false
        };
      },
      createProgram: function (body) {
        return {
          type: Syntax.Program,
          body: body
        };
      },
      createProperty: function (kind, key, value) {
        return {
          type: Syntax.Property,
          key: key,
          value: value,
          kind: kind
        };
      },
      createReturnStatement: function (argument) {
        return {
          type: Syntax.ReturnStatement,
          argument: argument
        };
      },
      createSequenceExpression: function (expressions) {
        return {
          type: Syntax.SequenceExpression,
          expressions: expressions
        };
      },
      createSwitchCase: function (test, consequent) {
        return {
          type: Syntax.SwitchCase,
          test: test,
          consequent: consequent
        };
      },
      createSwitchStatement: function (discriminant, cases) {
        return {
          type: Syntax.SwitchStatement,
          discriminant: discriminant,
          cases: cases
        };
      },
      createThisExpression: function () {
        return {
          type: Syntax.ThisExpression
        };
      },
      createThrowStatement: function (argument) {
        return {
          type: Syntax.ThrowStatement,
          argument: argument
        };
      },
      createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
        return {
          type: Syntax.TryStatement,
          block: block,
          guardedHandlers: guardedHandlers,
          handlers: handlers,
          finalizer: finalizer
        };
      },
      createUnaryExpression: function (operator, argument) {
        if (operator === '++' || operator === '--') {
          return {
            type: Syntax.UpdateExpression,
            operator: operator,
            argument: argument,
            prefix: true
          };
        }
        return {
          type: Syntax.UnaryExpression,
          operator: operator,
          argument: argument,
          prefix: true
        };
      },
      createVariableDeclaration: function (declarations, kind) {
        return {
          type: Syntax.VariableDeclaration,
          declarations: declarations,
          kind: kind
        };
      },
      createVariableDeclarator: function (id, init) {
        return {
          type: Syntax.VariableDeclarator,
          id: id,
          init: init
        };
      },
      createWhileStatement: function (test, body) {
        return {
          type: Syntax.WhileStatement,
          test: test,
          body: body
        };
      },
      createWithStatement: function (object, body) {
        return {
          type: Syntax.WithStatement,
          object: object,
          body: body
        };
      }
    };
    // Return true if there is a line terminator before the next token.
    function peekLineTerminator() {
      var pos, line, start, found;
      pos = index;
      line = lineNumber;
      start = lineStart;
      skipComment();
      found = lineNumber !== line;
      index = pos;
      lineNumber = line;
      lineStart = start;
      return found;
    }
    // Throw an exception
    function throwError(token, messageFormat) {
      var error, args = Array.prototype.slice.call(arguments, 2), msg = messageFormat.replace(/%(\d)/g, function (whole, index) {
        assert(index < args.length, 'Message reference must be in range');
        return args[index];
      });
      if (typeof token.lineNumber === 'number') {
        error = new Error('Line ' + token.lineNumber + ': ' + msg);
        error.index = token.start;
        error.lineNumber = token.lineNumber;
        error.column = token.start - lineStart + 1;
      } else {
        error = new Error('Line ' + lineNumber + ': ' + msg);
        error.index = index;
        error.lineNumber = lineNumber;
        error.column = index - lineStart + 1;
      }
      error.description = msg;
      throw error;
    }
    function throwErrorTolerant() {
      try {
        throwError.apply(null, arguments);
      } catch (e) {
        if (extra.errors) {
          extra.errors.push(e);
        } else {
          throw e;
        }
      }
    }
    // Throw an exception because of the token.
    function throwUnexpected(token) {
      if (token.type === Token.EOF) {
        throwError(token, Messages.UnexpectedEOS);
      }
      if (token.type === Token.NumericLiteral) {
        throwError(token, Messages.UnexpectedNumber);
      }
      if (token.type === Token.StringLiteral) {
        throwError(token, Messages.UnexpectedString);
      }
      if (token.type === Token.Identifier) {
        throwError(token, Messages.UnexpectedIdentifier);
      }
      if (token.type === Token.Keyword) {
        if (isFutureReservedWord(token.value)) {
          throwError(token, Messages.UnexpectedReserved);
        } else if (strict && isStrictModeReservedWord(token.value)) {
          throwErrorTolerant(token, Messages.StrictReservedWord);
          return;
        }
        throwError(token, Messages.UnexpectedToken, token.value);
      }
      // BooleanLiteral, NullLiteral, or Punctuator.
      throwError(token, Messages.UnexpectedToken, token.value);
    }
    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.
    function expect(value) {
      var token = lex();
      if (token.type !== Token.Punctuator || token.value !== value) {
        throwUnexpected(token);
      }
    }
    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.
    function expectKeyword(keyword) {
      var token = lex();
      if (token.type !== Token.Keyword || token.value !== keyword) {
        throwUnexpected(token);
      }
    }
    // Return true if the next token matches the specified punctuator.
    function match(value) {
      return lookahead.type === Token.Punctuator && lookahead.value === value;
    }
    // Return true if the next token matches the specified keyword
    function matchKeyword(keyword) {
      return lookahead.type === Token.Keyword && lookahead.value === keyword;
    }
    // Return true if the next token is an assignment operator
    function matchAssign() {
      var op;
      if (lookahead.type !== Token.Punctuator) {
        return false;
      }
      op = lookahead.value;
      return op === '=' || op === '*=' || op === '/=' || op === '%=' || op === '+=' || op === '-=' || op === '<<=' || op === '>>=' || op === '>>>=' || op === '&=' || op === '^=' || op === '|=';
    }
    function consumeSemicolon() {
      var line, oldIndex = index, oldLineNumber = lineNumber, oldLineStart = lineStart, oldLookahead = lookahead;
      // Catch the very common case first: immediately a semicolon (U+003B).
      if (source.charCodeAt(index) === 0x3B || match(';')) {
        lex();
        return;
      }
      line = lineNumber;
      skipComment();
      if (lineNumber !== line) {
        index = oldIndex;
        lineNumber = oldLineNumber;
        lineStart = oldLineStart;
        lookahead = oldLookahead;
        return;
      }
      if (lookahead.type !== Token.EOF && !match('}')) {
        throwUnexpected(lookahead);
      }
    }
    // Return true if provided expression is LeftHandSideExpression
    function isLeftHandSide(expr) {
      return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
    }
    // 11.1.4 Array Initialiser
    function parseArrayInitialiser() {
      var elements = [], startToken;
      startToken = lookahead;
      expect('[');
      while (!match(']')) {
        if (match(',')) {
          lex();
          elements.push(null);
        } else {
          elements.push(parseAssignmentExpression());
          if (!match(']')) {
            expect(',');
          }
        }
      }
      lex();
      return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
    }
    // 11.1.5 Object Initialiser
    function parsePropertyFunction(param, first) {
      var previousStrict, body, startToken;
      previousStrict = strict;
      startToken = lookahead;
      body = parseFunctionSourceElements();
      if (first && strict && isRestrictedWord(param[0].name)) {
        throwErrorTolerant(first, Messages.StrictParamName);
      }
      strict = previousStrict;
      return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
    }
    function parseObjectPropertyKey() {
      var token, startToken;
      startToken = lookahead;
      token = lex();
      // Note: This function is called only from parseObjectProperty(), where
      // EOF and Punctuator tokens are already filtered out.
      if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
        if (strict && token.octal) {
          throwErrorTolerant(token, Messages.StrictOctalLiteral);
        }
        return delegate.markEnd(delegate.createLiteral(token), startToken);
      }
      return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }
    function parseObjectProperty() {
      var token, key, id, value, param, startToken;
      token = lookahead;
      startToken = lookahead;
      if (token.type === Token.Identifier) {
        id = parseObjectPropertyKey();
        // Property Assignment: Getter and Setter.
        if (token.value === 'get' && !match(':')) {
          key = parseObjectPropertyKey();
          expect('(');
          expect(')');
          value = parsePropertyFunction([]);
          return delegate.markEnd(delegate.createProperty('get', key, value), startToken);
        }
        if (token.value === 'set' && !match(':')) {
          key = parseObjectPropertyKey();
          expect('(');
          token = lookahead;
          if (token.type !== Token.Identifier) {
            expect(')');
            throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
            value = parsePropertyFunction([]);
          } else {
            param = [parseVariableIdentifier()];
            expect(')');
            value = parsePropertyFunction(param, token);
          }
          return delegate.markEnd(delegate.createProperty('set', key, value), startToken);
        }
        expect(':');
        value = parseAssignmentExpression();
        return delegate.markEnd(delegate.createProperty('init', id, value), startToken);
      }
      if (token.type === Token.EOF || token.type === Token.Punctuator) {
        throwUnexpected(token);
      } else {
        key = parseObjectPropertyKey();
        expect(':');
        value = parseAssignmentExpression();
        return delegate.markEnd(delegate.createProperty('init', key, value), startToken);
      }
    }
    function parseObjectInitialiser() {
      var properties = [], property, name, key, kind, map = {}, toString = String, startToken;
      startToken = lookahead;
      expect('{');
      while (!match('}')) {
        property = parseObjectProperty();
        if (property.key.type === Syntax.Identifier) {
          name = property.key.name;
        } else {
          name = toString(property.key.value);
        }
        kind = property.kind === 'init' ? PropertyKind.Data : property.kind === 'get' ? PropertyKind.Get : PropertyKind.Set;
        key = '$' + name;
        if (Object.prototype.hasOwnProperty.call(map, key)) {
          if (map[key] === PropertyKind.Data) {
            if (strict && kind === PropertyKind.Data) {
              throwErrorTolerant({}, Messages.StrictDuplicateProperty);
            } else if (kind !== PropertyKind.Data) {
              throwErrorTolerant({}, Messages.AccessorDataProperty);
            }
          } else {
            if (kind === PropertyKind.Data) {
              throwErrorTolerant({}, Messages.AccessorDataProperty);
            } else if (map[key] & kind) {
              throwErrorTolerant({}, Messages.AccessorGetSet);
            }
          }
          map[key] |= kind;
        } else {
          map[key] = kind;
        }
        properties.push(property);
        if (!match('}')) {
          expect(',');
        }
      }
      expect('}');
      return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
    }
    // 11.1.6 The Grouping Operator
    function parseGroupExpression() {
      var expr;
      expect('(');
      expr = parseExpression();
      expect(')');
      return expr;
    }
    // 11.1 Primary Expressions
    function parsePrimaryExpression() {
      var type, token, expr, startToken;
      if (match('(')) {
        return parseGroupExpression();
      }
      if (match('[')) {
        return parseArrayInitialiser();
      }
      if (match('{')) {
        return parseObjectInitialiser();
      }
      type = lookahead.type;
      startToken = lookahead;
      if (type === Token.Identifier) {
        expr = delegate.createIdentifier(lex().value);
      } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
        if (strict && lookahead.octal) {
          throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
        }
        expr = delegate.createLiteral(lex());
      } else if (type === Token.Keyword) {
        if (matchKeyword('function')) {
          return parseFunctionExpression();
        }
        if (matchKeyword('this')) {
          lex();
          expr = delegate.createThisExpression();
        } else {
          throwUnexpected(lex());
        }
      } else if (type === Token.BooleanLiteral) {
        token = lex();
        token.value = token.value === 'true';
        expr = delegate.createLiteral(token);
      } else if (type === Token.NullLiteral) {
        token = lex();
        token.value = null;
        expr = delegate.createLiteral(token);
      } else if (match('/') || match('/=')) {
        if (typeof extra.tokens !== 'undefined') {
          expr = delegate.createLiteral(collectRegex());
        } else {
          expr = delegate.createLiteral(scanRegExp());
        }
        peek();
      } else {
        throwUnexpected(lex());
      }
      return delegate.markEnd(expr, startToken);
    }
    // 11.2 Left-Hand-Side Expressions
    function parseArguments() {
      var args = [];
      expect('(');
      if (!match(')')) {
        while (index < length) {
          args.push(parseAssignmentExpression());
          if (match(')')) {
            break;
          }
          expect(',');
        }
      }
      expect(')');
      return args;
    }
    function parseNonComputedProperty() {
      var token, startToken;
      startToken = lookahead;
      token = lex();
      if (!isIdentifierName(token)) {
        throwUnexpected(token);
      }
      return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }
    function parseNonComputedMember() {
      expect('.');
      return parseNonComputedProperty();
    }
    function parseComputedMember() {
      var expr;
      expect('[');
      expr = parseExpression();
      expect(']');
      return expr;
    }
    function parseNewExpression() {
      var callee, args, startToken;
      startToken = lookahead;
      expectKeyword('new');
      callee = parseLeftHandSideExpression();
      args = match('(') ? parseArguments() : [];
      return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
    }
    function parseLeftHandSideExpressionAllowCall() {
      var expr, args, property, startToken, previousAllowIn = state.allowIn;
      startToken = lookahead;
      state.allowIn = true;
      expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
      for (; ; ) {
        if (match('.')) {
          property = parseNonComputedMember();
          expr = delegate.createMemberExpression('.', expr, property);
        } else if (match('(')) {
          args = parseArguments();
          expr = delegate.createCallExpression(expr, args);
        } else if (match('[')) {
          property = parseComputedMember();
          expr = delegate.createMemberExpression('[', expr, property);
        } else {
          break;
        }
        delegate.markEnd(expr, startToken);
      }
      state.allowIn = previousAllowIn;
      return expr;
    }
    function parseLeftHandSideExpression() {
      var expr, property, startToken;
      assert(state.allowIn, 'callee of new expression always allow in keyword.');
      startToken = lookahead;
      expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
      while (match('.') || match('[')) {
        if (match('[')) {
          property = parseComputedMember();
          expr = delegate.createMemberExpression('[', expr, property);
        } else {
          property = parseNonComputedMember();
          expr = delegate.createMemberExpression('.', expr, property);
        }
        delegate.markEnd(expr, startToken);
      }
      return expr;
    }
    // 11.3 Postfix Expressions
    function parsePostfixExpression() {
      var expr, token, startToken = lookahead;
      expr = parseLeftHandSideExpressionAllowCall();
      if (lookahead.type === Token.Punctuator) {
        if ((match('++') || match('--')) && !peekLineTerminator()) {
          // 11.3.1, 11.3.2
          if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
            throwErrorTolerant({}, Messages.StrictLHSPostfix);
          }
          if (!isLeftHandSide(expr)) {
            throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
          }
          token = lex();
          expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
        }
      }
      return expr;
    }
    // 11.4 Unary Operators
    function parseUnaryExpression() {
      var token, expr, startToken;
      if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
        expr = parsePostfixExpression();
      } else if (match('++') || match('--')) {
        startToken = lookahead;
        token = lex();
        expr = parseUnaryExpression();
        // 11.4.4, 11.4.5
        if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
          throwErrorTolerant({}, Messages.StrictLHSPrefix);
        }
        if (!isLeftHandSide(expr)) {
          throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
        }
        expr = delegate.createUnaryExpression(token.value, expr);
        expr = delegate.markEnd(expr, startToken);
      } else if (match('+') || match('-') || match('~') || match('!')) {
        startToken = lookahead;
        token = lex();
        expr = parseUnaryExpression();
        expr = delegate.createUnaryExpression(token.value, expr);
        expr = delegate.markEnd(expr, startToken);
      } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
        startToken = lookahead;
        token = lex();
        expr = parseUnaryExpression();
        expr = delegate.createUnaryExpression(token.value, expr);
        expr = delegate.markEnd(expr, startToken);
        if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
          throwErrorTolerant({}, Messages.StrictDelete);
        }
      } else {
        expr = parsePostfixExpression();
      }
      return expr;
    }
    function binaryPrecedence(token, allowIn) {
      var prec = 0;
      if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
        return 0;
      }
      switch (token.value) {
        case '||':
          prec = 1;
          break;
        case '&&':
          prec = 2;
          break;
        case '|':
          prec = 3;
          break;
        case '^':
          prec = 4;
          break;
        case '&':
          prec = 5;
          break;
        case '==':
        case '!=':
        case '===':
        case '!==':
          prec = 6;
          break;
        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
          prec = 7;
          break;
        case 'in':
          prec = allowIn ? 7 : 0;
          break;
        case '<<':
        case '>>':
        case '>>>':
          prec = 8;
          break;
        case '+':
        case '-':
          prec = 9;
          break;
        case '*':
        case '/':
        case '%':
          prec = 11;
          break;
        default:
          break;
      }
      return prec;
    }
    // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators
    function parseBinaryExpression() {
      var marker, markers, expr, token, prec, stack, right, operator, left, i;
      marker = lookahead;
      left = parseUnaryExpression();
      token = lookahead;
      prec = binaryPrecedence(token, state.allowIn);
      if (prec === 0) {
        return left;
      }
      token.prec = prec;
      lex();
      markers = [marker, lookahead];
      right = parseUnaryExpression();
      stack = [left, token, right];
      while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
        // Reduce: make a binary expression from the three topmost entries.
        while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
          right = stack.pop();
          operator = stack.pop().value;
          left = stack.pop();
          expr = delegate.createBinaryExpression(operator, left, right);
          markers.pop();
          marker = markers[markers.length - 1];
          delegate.markEnd(expr, marker);
          stack.push(expr);
        }
        // Shift.
        token = lex();
        token.prec = prec;
        stack.push(token);
        markers.push(lookahead);
        expr = parseUnaryExpression();
        stack.push(expr);
      }
      // Final reduce to clean-up the stack.
      i = stack.length - 1;
      expr = stack[i];
      markers.pop();
      while (i > 1) {
        expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
        i -= 2;
        marker = markers.pop();
        delegate.markEnd(expr, marker);
      }
      return expr;
    }
    // 11.12 Conditional Operator
    function parseConditionalExpression() {
      var expr, previousAllowIn, consequent, alternate, startToken;
      startToken = lookahead;
      expr = parseBinaryExpression();
      if (match('?')) {
        lex();
        previousAllowIn = state.allowIn;
        state.allowIn = true;
        consequent = parseAssignmentExpression();
        state.allowIn = previousAllowIn;
        expect(':');
        alternate = parseAssignmentExpression();
        expr = delegate.createConditionalExpression(expr, consequent, alternate);
        delegate.markEnd(expr, startToken);
      }
      return expr;
    }
    // 11.13 Assignment Operators
    function parseAssignmentExpression() {
      var token, left, right, node, startToken;
      token = lookahead;
      startToken = lookahead;
      node = left = parseConditionalExpression();
      if (matchAssign()) {
        // LeftHandSideExpression
        if (!isLeftHandSide(left)) {
          throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
        }
        // 11.13.1
        if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
          throwErrorTolerant(token, Messages.StrictLHSAssignment);
        }
        token = lex();
        right = parseAssignmentExpression();
        node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
      }
      return node;
    }
    // 11.14 Comma Operator
    function parseExpression() {
      var expr, startToken = lookahead;
      expr = parseAssignmentExpression();
      if (match(',')) {
        expr = delegate.createSequenceExpression([expr]);
        while (index < length) {
          if (!match(',')) {
            break;
          }
          lex();
          expr.expressions.push(parseAssignmentExpression());
        }
        delegate.markEnd(expr, startToken);
      }
      return expr;
    }
    // 12.1 Block
    function parseStatementList() {
      var list = [], statement;
      while (index < length) {
        if (match('}')) {
          break;
        }
        statement = parseSourceElement();
        if (typeof statement === 'undefined') {
          break;
        }
        list.push(statement);
      }
      return list;
    }
    function parseBlock() {
      var block, startToken;
      startToken = lookahead;
      expect('{');
      block = parseStatementList();
      expect('}');
      return delegate.markEnd(delegate.createBlockStatement(block), startToken);
    }
    // 12.2 Variable Statement
    function parseVariableIdentifier() {
      var token, startToken;
      startToken = lookahead;
      token = lex();
      if (token.type !== Token.Identifier) {
        throwUnexpected(token);
      }
      return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }
    function parseVariableDeclaration(kind) {
      var init = null, id, startToken;
      startToken = lookahead;
      id = parseVariableIdentifier();
      // 12.2.1
      if (strict && isRestrictedWord(id.name)) {
        throwErrorTolerant({}, Messages.StrictVarName);
      }
      if (kind === 'const') {
        expect('=');
        init = parseAssignmentExpression();
      } else if (match('=')) {
        lex();
        init = parseAssignmentExpression();
      }
      return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
    }
    function parseVariableDeclarationList(kind) {
      var list = [];
      do {
        list.push(parseVariableDeclaration(kind));
        if (!match(',')) {
          break;
        }
        lex();
      } while (index < length);
      return list;
    }
    function parseVariableStatement() {
      var declarations;
      expectKeyword('var');
      declarations = parseVariableDeclarationList();
      consumeSemicolon();
      return delegate.createVariableDeclaration(declarations, 'var');
    }
    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
      var declarations, startToken;
      startToken = lookahead;
      expectKeyword(kind);
      declarations = parseVariableDeclarationList(kind);
      consumeSemicolon();
      return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
    }
    // 12.3 Empty Statement
    function parseEmptyStatement() {
      expect(';');
      return delegate.createEmptyStatement();
    }
    // 12.4 Expression Statement
    function parseExpressionStatement() {
      var expr = parseExpression();
      consumeSemicolon();
      return delegate.createExpressionStatement(expr);
    }
    // 12.5 If statement
    function parseIfStatement() {
      var test, consequent, alternate;
      expectKeyword('if');
      expect('(');
      test = parseExpression();
      expect(')');
      consequent = parseStatement();
      if (matchKeyword('else')) {
        lex();
        alternate = parseStatement();
      } else {
        alternate = null;
      }
      return delegate.createIfStatement(test, consequent, alternate);
    }
    // 12.6 Iteration Statements
    function parseDoWhileStatement() {
      var body, test, oldInIteration;
      expectKeyword('do');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = parseStatement();
      state.inIteration = oldInIteration;
      expectKeyword('while');
      expect('(');
      test = parseExpression();
      expect(')');
      if (match(';')) {
        lex();
      }
      return delegate.createDoWhileStatement(body, test);
    }
    function parseWhileStatement() {
      var test, body, oldInIteration;
      expectKeyword('while');
      expect('(');
      test = parseExpression();
      expect(')');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = parseStatement();
      state.inIteration = oldInIteration;
      return delegate.createWhileStatement(test, body);
    }
    function parseForVariableDeclaration() {
      var token, declarations, startToken;
      startToken = lookahead;
      token = lex();
      declarations = parseVariableDeclarationList();
      return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
    }
    function parseForStatement() {
      var init, test, update, left, right, body, oldInIteration, previousAllowIn = state.allowIn;
      init = test = update = null;
      expectKeyword('for');
      expect('(');
      if (match(';')) {
        lex();
      } else {
        if (matchKeyword('var') || matchKeyword('let')) {
          state.allowIn = false;
          init = parseForVariableDeclaration();
          state.allowIn = previousAllowIn;
          if (init.declarations.length === 1 && matchKeyword('in')) {
            lex();
            left = init;
            right = parseExpression();
            init = null;
          }
        } else {
          state.allowIn = false;
          init = parseExpression();
          state.allowIn = previousAllowIn;
          if (matchKeyword('in')) {
            // LeftHandSideExpression
            if (!isLeftHandSide(init)) {
              throwErrorTolerant({}, Messages.InvalidLHSInForIn);
            }
            lex();
            left = init;
            right = parseExpression();
            init = null;
          }
        }
        if (typeof left === 'undefined') {
          expect(';');
        }
      }
      if (typeof left === 'undefined') {
        if (!match(';')) {
          test = parseExpression();
        }
        expect(';');
        if (!match(')')) {
          update = parseExpression();
        }
      }
      expect(')');
      oldInIteration = state.inIteration;
      state.inIteration = true;
      body = parseStatement();
      state.inIteration = oldInIteration;
      return typeof left === 'undefined' ? delegate.createForStatement(init, test, update, body) : delegate.createForInStatement(left, right, body);
    }
    // 12.7 The continue statement
    function parseContinueStatement() {
      var label = null, key;
      expectKeyword('continue');
      // Optimize the most common form: 'continue;'.
      if (source.charCodeAt(index) === 0x3B) {
        lex();
        if (!state.inIteration) {
          throwError({}, Messages.IllegalContinue);
        }
        return delegate.createContinueStatement(null);
      }
      if (peekLineTerminator()) {
        if (!state.inIteration) {
          throwError({}, Messages.IllegalContinue);
        }
        return delegate.createContinueStatement(null);
      }
      if (lookahead.type === Token.Identifier) {
        label = parseVariableIdentifier();
        key = '$' + label.name;
        if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError({}, Messages.UnknownLabel, label.name);
        }
      }
      consumeSemicolon();
      if (label === null && !state.inIteration) {
        throwError({}, Messages.IllegalContinue);
      }
      return delegate.createContinueStatement(label);
    }
    // 12.8 The break statement
    function parseBreakStatement() {
      var label = null, key;
      expectKeyword('break');
      // Catch the very common case first: immediately a semicolon (U+003B).
      if (source.charCodeAt(index) === 0x3B) {
        lex();
        if (!(state.inIteration || state.inSwitch)) {
          throwError({}, Messages.IllegalBreak);
        }
        return delegate.createBreakStatement(null);
      }
      if (peekLineTerminator()) {
        if (!(state.inIteration || state.inSwitch)) {
          throwError({}, Messages.IllegalBreak);
        }
        return delegate.createBreakStatement(null);
      }
      if (lookahead.type === Token.Identifier) {
        label = parseVariableIdentifier();
        key = '$' + label.name;
        if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError({}, Messages.UnknownLabel, label.name);
        }
      }
      consumeSemicolon();
      if (label === null && !(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
      }
      return delegate.createBreakStatement(label);
    }
    // 12.9 The return statement
    function parseReturnStatement() {
      var argument = null;
      expectKeyword('return');
      if (!state.inFunctionBody) {
        throwErrorTolerant({}, Messages.IllegalReturn);
      }
      // 'return' followed by a space and an identifier is very common.
      if (source.charCodeAt(index) === 0x20) {
        if (isIdentifierStart(source.charCodeAt(index + 1))) {
          argument = parseExpression();
          consumeSemicolon();
          return delegate.createReturnStatement(argument);
        }
      }
      if (peekLineTerminator()) {
        return delegate.createReturnStatement(null);
      }
      if (!match(';')) {
        if (!match('}') && lookahead.type !== Token.EOF) {
          argument = parseExpression();
        }
      }
      consumeSemicolon();
      return delegate.createReturnStatement(argument);
    }
    // 12.10 The with statement
    function parseWithStatement() {
      var object, body;
      if (strict) {
        // TODO(ikarienator): Should we update the test cases instead?
        skipComment();
        throwErrorTolerant({}, Messages.StrictModeWith);
      }
      expectKeyword('with');
      expect('(');
      object = parseExpression();
      expect(')');
      body = parseStatement();
      return delegate.createWithStatement(object, body);
    }
    // 12.10 The swith statement
    function parseSwitchCase() {
      var test, consequent = [], statement, startToken;
      startToken = lookahead;
      if (matchKeyword('default')) {
        lex();
        test = null;
      } else {
        expectKeyword('case');
        test = parseExpression();
      }
      expect(':');
      while (index < length) {
        if (match('}') || matchKeyword('default') || matchKeyword('case')) {
          break;
        }
        statement = parseStatement();
        consequent.push(statement);
      }
      return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
    }
    function parseSwitchStatement() {
      var discriminant, cases, clause, oldInSwitch, defaultFound;
      expectKeyword('switch');
      expect('(');
      discriminant = parseExpression();
      expect(')');
      expect('{');
      cases = [];
      if (match('}')) {
        lex();
        return delegate.createSwitchStatement(discriminant, cases);
      }
      oldInSwitch = state.inSwitch;
      state.inSwitch = true;
      defaultFound = false;
      while (index < length) {
        if (match('}')) {
          break;
        }
        clause = parseSwitchCase();
        if (clause.test === null) {
          if (defaultFound) {
            throwError({}, Messages.MultipleDefaultsInSwitch);
          }
          defaultFound = true;
        }
        cases.push(clause);
      }
      state.inSwitch = oldInSwitch;
      expect('}');
      return delegate.createSwitchStatement(discriminant, cases);
    }
    // 12.13 The throw statement
    function parseThrowStatement() {
      var argument;
      expectKeyword('throw');
      if (peekLineTerminator()) {
        throwError({}, Messages.NewlineAfterThrow);
      }
      argument = parseExpression();
      consumeSemicolon();
      return delegate.createThrowStatement(argument);
    }
    // 12.14 The try statement
    function parseCatchClause() {
      var param, body, startToken;
      startToken = lookahead;
      expectKeyword('catch');
      expect('(');
      if (match(')')) {
        throwUnexpected(lookahead);
      }
      param = parseVariableIdentifier();
      // 12.14.1
      if (strict && isRestrictedWord(param.name)) {
        throwErrorTolerant({}, Messages.StrictCatchVariable);
      }
      expect(')');
      body = parseBlock();
      return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
    }
    function parseTryStatement() {
      var block, handlers = [], finalizer = null;
      expectKeyword('try');
      block = parseBlock();
      if (matchKeyword('catch')) {
        handlers.push(parseCatchClause());
      }
      if (matchKeyword('finally')) {
        lex();
        finalizer = parseBlock();
      }
      if (handlers.length === 0 && !finalizer) {
        throwError({}, Messages.NoCatchOrFinally);
      }
      return delegate.createTryStatement(block, [], handlers, finalizer);
    }
    // 12.15 The debugger statement
    function parseDebuggerStatement() {
      expectKeyword('debugger');
      consumeSemicolon();
      return delegate.createDebuggerStatement();
    }
    // 12 Statements
    function parseStatement() {
      var type = lookahead.type, expr, labeledBody, key, startToken;
      if (type === Token.EOF) {
        throwUnexpected(lookahead);
      }
      if (type === Token.Punctuator && lookahead.value === '{') {
        return parseBlock();
      }
      startToken = lookahead;
      if (type === Token.Punctuator) {
        switch (lookahead.value) {
          case ';':
            return delegate.markEnd(parseEmptyStatement(), startToken);
          case '(':
            return delegate.markEnd(parseExpressionStatement(), startToken);
          default:
            break;
        }
      }
      if (type === Token.Keyword) {
        switch (lookahead.value) {
          case 'break':
            return delegate.markEnd(parseBreakStatement(), startToken);
          case 'continue':
            return delegate.markEnd(parseContinueStatement(), startToken);
          case 'debugger':
            return delegate.markEnd(parseDebuggerStatement(), startToken);
          case 'do':
            return delegate.markEnd(parseDoWhileStatement(), startToken);
          case 'for':
            return delegate.markEnd(parseForStatement(), startToken);
          case 'function':
            return delegate.markEnd(parseFunctionDeclaration(), startToken);
          case 'if':
            return delegate.markEnd(parseIfStatement(), startToken);
          case 'return':
            return delegate.markEnd(parseReturnStatement(), startToken);
          case 'switch':
            return delegate.markEnd(parseSwitchStatement(), startToken);
          case 'throw':
            return delegate.markEnd(parseThrowStatement(), startToken);
          case 'try':
            return delegate.markEnd(parseTryStatement(), startToken);
          case 'var':
            return delegate.markEnd(parseVariableStatement(), startToken);
          case 'while':
            return delegate.markEnd(parseWhileStatement(), startToken);
          case 'with':
            return delegate.markEnd(parseWithStatement(), startToken);
          default:
            break;
        }
      }
      expr = parseExpression();
      // 12.12 Labelled Statements
      if (expr.type === Syntax.Identifier && match(':')) {
        lex();
        key = '$' + expr.name;
        if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
          throwError({}, Messages.Redeclaration, 'Label', expr.name);
        }
        state.labelSet[key] = true;
        labeledBody = parseStatement();
        delete state.labelSet[key];
        return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
      }
      consumeSemicolon();
      return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
    }
    // 13 Function Definition
    function parseFunctionSourceElements() {
      var sourceElement, sourceElements = [], token, directive, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken;
      startToken = lookahead;
      expect('{');
      while (index < length) {
        if (lookahead.type !== Token.StringLiteral) {
          break;
        }
        token = lookahead;
        sourceElement = parseSourceElement();
        sourceElements.push(sourceElement);
        if (sourceElement.expression.type !== Syntax.Literal) {
          // this is not directive
          break;
        }
        directive = source.slice(token.start + 1, token.end - 1);
        if (directive === 'use strict') {
          strict = true;
          if (firstRestricted) {
            throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
          }
        } else {
          if (!firstRestricted && token.octal) {
            firstRestricted = token;
          }
        }
      }
      oldLabelSet = state.labelSet;
      oldInIteration = state.inIteration;
      oldInSwitch = state.inSwitch;
      oldInFunctionBody = state.inFunctionBody;
      state.labelSet = {};
      state.inIteration = false;
      state.inSwitch = false;
      state.inFunctionBody = true;
      while (index < length) {
        if (match('}')) {
          break;
        }
        sourceElement = parseSourceElement();
        if (typeof sourceElement === 'undefined') {
          break;
        }
        sourceElements.push(sourceElement);
      }
      expect('}');
      state.labelSet = oldLabelSet;
      state.inIteration = oldInIteration;
      state.inSwitch = oldInSwitch;
      state.inFunctionBody = oldInFunctionBody;
      return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
    }
    function parseParams(firstRestricted) {
      var param, params = [], token, stricted, paramSet, key, message;
      expect('(');
      if (!match(')')) {
        paramSet = {};
        while (index < length) {
          token = lookahead;
          param = parseVariableIdentifier();
          key = '$' + token.value;
          if (strict) {
            if (isRestrictedWord(token.value)) {
              stricted = token;
              message = Messages.StrictParamName;
            }
            if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
              stricted = token;
              message = Messages.StrictParamDupe;
            }
          } else if (!firstRestricted) {
            if (isRestrictedWord(token.value)) {
              firstRestricted = token;
              message = Messages.StrictParamName;
            } else if (isStrictModeReservedWord(token.value)) {
              firstRestricted = token;
              message = Messages.StrictReservedWord;
            } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
              firstRestricted = token;
              message = Messages.StrictParamDupe;
            }
          }
          params.push(param);
          paramSet[key] = true;
          if (match(')')) {
            break;
          }
          expect(',');
        }
      }
      expect(')');
      return {
        params: params,
        stricted: stricted,
        firstRestricted: firstRestricted,
        message: message
      };
    }
    function parseFunctionDeclaration() {
      var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken;
      startToken = lookahead;
      expectKeyword('function');
      token = lookahead;
      id = parseVariableIdentifier();
      if (strict) {
        if (isRestrictedWord(token.value)) {
          throwErrorTolerant(token, Messages.StrictFunctionName);
        }
      } else {
        if (isRestrictedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictFunctionName;
        } else if (isStrictModeReservedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictReservedWord;
        }
      }
      tmp = parseParams(firstRestricted);
      params = tmp.params;
      stricted = tmp.stricted;
      firstRestricted = tmp.firstRestricted;
      if (tmp.message) {
        message = tmp.message;
      }
      previousStrict = strict;
      body = parseFunctionSourceElements();
      if (strict && firstRestricted) {
        throwError(firstRestricted, message);
      }
      if (strict && stricted) {
        throwErrorTolerant(stricted, message);
      }
      strict = previousStrict;
      return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
    }
    function parseFunctionExpression() {
      var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken;
      startToken = lookahead;
      expectKeyword('function');
      if (!match('(')) {
        token = lookahead;
        id = parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            throwErrorTolerant(token, Messages.StrictFunctionName);
          }
        } else {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictFunctionName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          }
        }
      }
      tmp = parseParams(firstRestricted);
      params = tmp.params;
      stricted = tmp.stricted;
      firstRestricted = tmp.firstRestricted;
      if (tmp.message) {
        message = tmp.message;
      }
      previousStrict = strict;
      body = parseFunctionSourceElements();
      if (strict && firstRestricted) {
        throwError(firstRestricted, message);
      }
      if (strict && stricted) {
        throwErrorTolerant(stricted, message);
      }
      strict = previousStrict;
      return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
    }
    // 14 Program
    function parseSourceElement() {
      if (lookahead.type === Token.Keyword) {
        switch (lookahead.value) {
          case 'const':
          case 'let':
            return parseConstLetDeclaration(lookahead.value);
          case 'function':
            return parseFunctionDeclaration();
          default:
            return parseStatement();
        }
      }
      if (lookahead.type !== Token.EOF) {
        return parseStatement();
      }
    }
    function parseSourceElements() {
      var sourceElement, sourceElements = [], token, directive, firstRestricted;
      while (index < length) {
        token = lookahead;
        if (token.type !== Token.StringLiteral) {
          break;
        }
        sourceElement = parseSourceElement();
        sourceElements.push(sourceElement);
        if (sourceElement.expression.type !== Syntax.Literal) {
          // this is not directive
          break;
        }
        directive = source.slice(token.start + 1, token.end - 1);
        if (directive === 'use strict') {
          strict = true;
          if (firstRestricted) {
            throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
          }
        } else {
          if (!firstRestricted && token.octal) {
            firstRestricted = token;
          }
        }
      }
      while (index < length) {
        sourceElement = parseSourceElement();
        /*istanbul ignore if*/
        if (typeof sourceElement === 'undefined') {
          break;
        }
        sourceElements.push(sourceElement);
      }
      return sourceElements;
    }
    function parseProgram() {
      var body, startToken;
      skipComment();
      peek();
      startToken = lookahead;
      strict = false;
      body = parseSourceElements();
      return delegate.markEnd(delegate.createProgram(body), startToken);
    }
    function filterTokenLocation() {
      var i, entry, token, tokens = [];
      for (i = 0; i < extra.tokens.length; ++i) {
        entry = extra.tokens[i];
        token = {
          type: entry.type,
          value: entry.value
        };
        if (extra.range) {
          token.range = entry.range;
        }
        if (extra.loc) {
          token.loc = entry.loc;
        }
        tokens.push(token);
      }
      extra.tokens = tokens;
    }
    function tokenize(code, options) {
      var toString, token, tokens;
      toString = String;
      if (typeof code !== 'string' && !(code instanceof String)) {
        code = toString(code);
      }
      delegate = SyntaxTreeDelegate;
      source = code;
      index = 0;
      lineNumber = source.length > 0 ? 1 : 0;
      lineStart = 0;
      length = source.length;
      lookahead = null;
      state = {
        allowIn: true,
        labelSet: {},
        inFunctionBody: false,
        inIteration: false,
        inSwitch: false,
        lastCommentStart: -1
      };
      extra = {};
      // Options matching.
      options = options || ({});
      // Of course we collect tokens here.
      options.tokens = true;
      extra.tokens = [];
      extra.tokenize = true;
      // The following two fields are necessary to compute the Regex tokens.
      extra.openParenToken = -1;
      extra.openCurlyToken = -1;
      extra.range = typeof options.range === 'boolean' && options.range;
      extra.loc = typeof options.loc === 'boolean' && options.loc;
      if (typeof options.comment === 'boolean' && options.comment) {
        extra.comments = [];
      }
      if (typeof options.tolerant === 'boolean' && options.tolerant) {
        extra.errors = [];
      }
      try {
        peek();
        if (lookahead.type === Token.EOF) {
          return extra.tokens;
        }
        token = lex();
        while (lookahead.type !== Token.EOF) {
          try {
            token = lex();
          } catch (lexError) {
            token = lookahead;
            if (extra.errors) {
              extra.errors.push(lexError);
              // We have to break on the first error
              // to avoid infinite loops.
              break;
            } else {
              throw lexError;
            }
          }
        }
        filterTokenLocation();
        tokens = extra.tokens;
        if (typeof extra.comments !== 'undefined') {
          tokens.comments = extra.comments;
        }
        if (typeof extra.errors !== 'undefined') {
          tokens.errors = extra.errors;
        }
      } catch (e) {
        throw e;
      } finally {
        extra = {};
      }
      return tokens;
    }
    function parse(code, options) {
      var program, toString;
      toString = String;
      if (typeof code !== 'string' && !(code instanceof String)) {
        code = toString(code);
      }
      delegate = SyntaxTreeDelegate;
      source = code;
      index = 0;
      lineNumber = source.length > 0 ? 1 : 0;
      lineStart = 0;
      length = source.length;
      lookahead = null;
      state = {
        allowIn: true,
        labelSet: {},
        inFunctionBody: false,
        inIteration: false,
        inSwitch: false,
        lastCommentStart: -1
      };
      extra = {};
      if (typeof options !== 'undefined') {
        extra.range = typeof options.range === 'boolean' && options.range;
        extra.loc = typeof options.loc === 'boolean' && options.loc;
        extra.attachComment = typeof options.attachComment === 'boolean' && options.attachComment;
        if (extra.loc && options.source !== null && options.source !== undefined) {
          extra.source = toString(options.source);
        }
        if (typeof options.tokens === 'boolean' && options.tokens) {
          extra.tokens = [];
        }
        if (typeof options.comment === 'boolean' && options.comment) {
          extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
          extra.errors = [];
        }
        if (extra.attachComment) {
          extra.range = true;
          extra.comments = [];
          extra.bottomRightStack = [];
          extra.trailingComments = [];
          extra.leadingComments = [];
        }
      }
      try {
        program = parseProgram();
        if (typeof extra.comments !== 'undefined') {
          program.comments = extra.comments;
        }
        if (typeof extra.tokens !== 'undefined') {
          filterTokenLocation();
          program.tokens = extra.tokens;
        }
        if (typeof extra.errors !== 'undefined') {
          program.errors = extra.errors;
        }
      } catch (e) {
        throw e;
      } finally {
        extra = {};
      }
      return program;
    }
    // Sync with *.json manifests.
    exports.version = '1.2.5';
    exports.tokenize = tokenize;
    exports.parse = parse;
    // Deep copy.
    /*istanbul ignore next*/
    exports.Syntax = (function () {
      var name, types = {};
      if (typeof Object.create === 'function') {
        types = Object.create(null);
      }
      for (name in Syntax) {
        if (Syntax.hasOwnProperty(name)) {
          types[name] = Syntax[name];
        }
      }
      if (typeof Object.freeze === 'function') {
        Object.freeze(types);
      }
      return types;
    })();
  });
  // ASSET: node_modules/uniq/uniq.js
  var $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$exports = {};
  function $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique_pred(list, compare) {
    var ptr = 1, len = list.length, a = list[0], b = list[0];
    for (var i = 1; i < len; ++i) {
      b = a;
      a = list[i];
      if (compare(a, b)) {
        if (i === ptr) {
          ptr++;
          continue;
        }
        list[ptr++] = a;
      }
    }
    list.length = ptr;
    return list;
  }
  function $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique_eq(list) {
    var ptr = 1, len = list.length, a = list[0], b = list[0];
    for (var i = 1; i < len; (++i, b = a)) {
      b = a;
      a = list[i];
      if (a !== b) {
        if (i === ptr) {
          ptr++;
          continue;
        }
        list[ptr++] = a;
      }
    }
    list.length = ptr;
    return list;
  }
  function $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique(list, compare, sorted) {
    if (list.length === 0) {
      return list;
    }
    if (compare) {
      if (!sorted) {
        list.sort(compare);
      }
      return $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique_pred(list, compare);
    }
    if (!sorted) {
      list.sort();
    }
    return $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique_eq(list);
  }
  $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$exports = $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$var$unique;
  var $5ab7d1482fb0d051f7560e4ebf06e739$var$uniq = $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$exports;
  var $5ab7d1482fb0d051f7560e4ebf06e739$var$PREFIX_COUNTER = 0;
  function $5ab7d1482fb0d051f7560e4ebf06e739$var$CompiledArgument(name, lvalue, rvalue) {
    this.name = name;
    this.lvalue = lvalue;
    this.rvalue = rvalue;
    this.count = 0;
  }
  function $5ab7d1482fb0d051f7560e4ebf06e739$var$CompiledRoutine(body, args, thisVars, localVars) {
    this.body = body;
    this.args = args;
    this.thisVars = thisVars;
    this.localVars = localVars;
  }
  function $5ab7d1482fb0d051f7560e4ebf06e739$var$isGlobal(identifier) {
    if (identifier === "eval") {
      throw new Error("cwise-parser: eval() not allowed");
    }
    if (typeof window !== "undefined") {
      return (identifier in window);
    } else if (typeof $parcel$global !== "undefined") {
      return (identifier in $parcel$global);
    } else if (typeof self !== "undefined") {
      return (identifier in self);
    } else {
      return false;
    }
  }
  function $5ab7d1482fb0d051f7560e4ebf06e739$var$getArgNames(ast) {
    var params = ast.body[0].expression.callee.params;
    var names = new Array(params.length);
    for (var i = 0; i < params.length; ++i) {
      names[i] = params[i].name;
    }
    return names;
  }
  function $5ab7d1482fb0d051f7560e4ebf06e739$var$preprocess(func) {
    var src = ["(", func, ")()"].join("");
    var ast = $dbace9392e5246e8c113131bf637212e$exports.parse(src, {
      range: true
    });
    // Compute new prefix
    var prefix = "_inline_" + $5ab7d1482fb0d051f7560e4ebf06e739$var$PREFIX_COUNTER++ + "_";
    // Parse out arguments
    var argNames = $5ab7d1482fb0d051f7560e4ebf06e739$var$getArgNames(ast);
    var compiledArgs = new Array(argNames.length);
    for (var i = 0; i < argNames.length; ++i) {
      compiledArgs[i] = new $5ab7d1482fb0d051f7560e4ebf06e739$var$CompiledArgument([prefix, "arg", i, "_"].join(""), false, false);
    }
    // Create temporary data structure for source rewriting
    var exploded = new Array(src.length);
    for (var i = 0, n = src.length; i < n; ++i) {
      exploded[i] = src.charAt(i);
    }
    // Local variables
    var localVars = [];
    var thisVars = [];
    var computedThis = false;
    // Retrieves a local variable
    function createLocal(id) {
      var nstr = prefix + id.replace(/\_/g, "__");
      localVars.push(nstr);
      return nstr;
    }
    // Creates a this variable
    function createThisVar(id) {
      var nstr = "this_" + id.replace(/\_/g, "__");
      thisVars.push(nstr);
      return nstr;
    }
    // Rewrites an ast node
    function rewrite(node, nstr) {
      var lo = node.range[0], hi = node.range[1];
      for (var i = lo + 1; i < hi; ++i) {
        exploded[i] = "";
      }
      exploded[lo] = nstr;
    }
    // Remove any underscores
    function escapeString(str) {
      return "'" + str.replace(/\_/g, "\\_").replace(/\'/g, "\'") + "'";
    }
    // Returns the source of an identifier
    function source(node) {
      return exploded.slice(node.range[0], node.range[1]).join("");
    }
    // Computes the usage of a node
    var LVALUE = 1;
    var RVALUE = 2;
    function getUsage(node) {
      if (node.parent.type === "AssignmentExpression") {
        if (node.parent.left === node) {
          if (node.parent.operator === "=") {
            return LVALUE;
          }
          return LVALUE | RVALUE;
        }
      }
      if (node.parent.type === "UpdateExpression") {
        return LVALUE | RVALUE;
      }
      return RVALUE;
    }
    // Handle visiting a node
    (function visit(node, parent) {
      node.parent = parent;
      if (node.type === "MemberExpression") {
        // Handle member expression
        if (node.computed) {
          visit(node.object, node);
          visit(node.property, node);
        } else if (node.object.type === "ThisExpression") {
          rewrite(node, createThisVar(node.property.name));
        } else {
          visit(node.object, node);
        }
      } else if (node.type === "ThisExpression") {
        throw new Error("cwise-parser: Computed this is not allowed");
      } else if (node.type === "Identifier") {
        // Handle identifier
        var name = node.name;
        var argNo = argNames.indexOf(name);
        if (argNo >= 0) {
          var carg = compiledArgs[argNo];
          var usage = getUsage(node);
          if (usage & LVALUE) {
            carg.lvalue = true;
          }
          if (usage & RVALUE) {
            carg.rvalue = true;
          }
          ++carg.count;
          rewrite(node, carg.name);
        } else if ($5ab7d1482fb0d051f7560e4ebf06e739$var$isGlobal(name)) {} else {
          rewrite(node, createLocal(name));
        }
      } else if (node.type === "Literal") {
        if (typeof node.value === "string") {
          rewrite(node, escapeString(node.value));
        }
      } else if (node.type === "WithStatement") {
        throw new Error("cwise-parser: with() statements not allowed");
      } else {
        // Visit all children
        var keys = Object.keys(node);
        for (var i = 0, n = keys.length; i < n; ++i) {
          if (keys[i] === "parent") {
            continue;
          }
          var value = node[keys[i]];
          if (value) {
            if (value instanceof Array) {
              for (var j = 0; j < value.length; ++j) {
                if (value[j] && typeof value[j].type === "string") {
                  visit(value[j], node);
                }
              }
            } else if (typeof value.type === "string") {
              visit(value, node);
            }
          }
        }
      }
    })(ast.body[0].expression.callee.body, undefined);
    // Remove duplicate variables
    $5ab7d1482fb0d051f7560e4ebf06e739$var$uniq(localVars);
    $5ab7d1482fb0d051f7560e4ebf06e739$var$uniq(thisVars);
    // Return body
    var routine = new $5ab7d1482fb0d051f7560e4ebf06e739$var$CompiledRoutine(source(ast.body[0].expression.callee.body), compiledArgs, thisVars, localVars);
    return routine;
  }
  $5ab7d1482fb0d051f7560e4ebf06e739$exports = $5ab7d1482fb0d051f7560e4ebf06e739$var$preprocess;
  var $5cdfa2968ca2b18245a258efa5e0b0df$var$parse = $5ab7d1482fb0d051f7560e4ebf06e739$exports;
  // ASSET: node_modules/cwise-compiler/compiler.js
  var $d8d3680e56ad997644fdd48b0081014f$exports = {};
  // ASSET: node_modules/cwise-compiler/lib/thunk.js
  var $a223576e9adc35e3cf9a5a9761c1eb5d$exports = {};
  // ASSET: node_modules/cwise-compiler/lib/compile.js
  var $690c1e901a1b2fdd62402287fda90174$exports = {};
  var $690c1e901a1b2fdd62402287fda90174$var$uniq = $3950c3dfbf0eb95cc9fe2caf4e7b1cdc$exports;
  // This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
  // TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
  function $690c1e901a1b2fdd62402287fda90174$var$innerFill(order, proc, body) {
    var dimension = order.length, nargs = proc.arrayArgs.length, has_index = proc.indexArgs.length > 0, code = [], vars = [], idx = 0, pidx = 0, i, j;
    for (i = 0; i < dimension; ++i) {
      // Iteration variables
      vars.push(["i", i, "=0"].join(""));
    }
    // Compute scan deltas
    for (j = 0; j < nargs; ++j) {
      for (i = 0; i < dimension; ++i) {
        pidx = idx;
        idx = order[i];
        if (i === 0) {
          // The innermost/fastest dimension's delta is simply its stride
          vars.push(["d", j, "s", i, "=t", j, "p", idx].join(""));
        } else {
          // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
          vars.push(["d", j, "s", i, "=(t", j, "p", idx, "-s", pidx, "*t", j, "p", pidx, ")"].join(""));
        }
      }
    }
    if (vars.length > 0) {
      code.push("var " + vars.join(","));
    }
    // Scan loop
    for (i = dimension - 1; i >= 0; --i) {
      // Start at largest stride and work your way inwards
      idx = order[i];
      code.push(["for(i", i, "=0;i", i, "<s", idx, ";++i", i, "){"].join(""));
    }
    // Push body of inner loop
    code.push(body);
    // Advance scan pointers
    for (i = 0; i < dimension; ++i) {
      pidx = idx;
      idx = order[i];
      for (j = 0; j < nargs; ++j) {
        code.push(["p", j, "+=d", j, "s", i].join(""));
      }
      if (has_index) {
        if (i > 0) {
          code.push(["index[", pidx, "]-=s", pidx].join(""));
        }
        code.push(["++index[", idx, "]"].join(""));
      }
      code.push("}");
    }
    return code.join("\n");
  }
  // Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
  // TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
  // I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
  function $690c1e901a1b2fdd62402287fda90174$var$outerFill(matched, order, proc, body) {
    var dimension = order.length, nargs = proc.arrayArgs.length, blockSize = proc.blockSize, has_index = proc.indexArgs.length > 0, code = [];
    for (var i = 0; i < nargs; ++i) {
      code.push(["var offset", i, "=p", i].join(""));
    }
    // Generate loops for unmatched dimensions
    // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
    // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
    for (var i = matched; i < dimension; ++i) {
      code.push(["for(var j" + i + "=SS[", order[i], "]|0;j", i, ">0;){"].join(""));
      // Iterate back to front
      code.push(["if(j", i, "<", blockSize, "){"].join(""));
      // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
      code.push(["s", order[i], "=j", i].join(""));
      code.push(["j", i, "=0"].join(""));
      code.push(["}else{s", order[i], "=", blockSize].join(""));
      code.push(["j", i, "-=", blockSize, "}"].join(""));
      if (has_index) {
        code.push(["index[", order[i], "]=j", i].join(""));
      }
    }
    for (var i = 0; i < nargs; ++i) {
      var indexStr = ["offset" + i];
      for (var j = matched; j < dimension; ++j) {
        indexStr.push(["j", j, "*t", i, "p", order[j]].join(""));
      }
      code.push(["p", i, "=(", indexStr.join("+"), ")"].join(""));
    }
    code.push($690c1e901a1b2fdd62402287fda90174$var$innerFill(order, proc, body));
    for (var i = matched; i < dimension; ++i) {
      code.push("}");
    }
    return code.join("\n");
  }
  // Count the number of compatible inner orders
  // This is the length of the longest common prefix of the arrays in orders.
  // Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
  // This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
  function $690c1e901a1b2fdd62402287fda90174$var$countMatches(orders) {
    var matched = 0, dimension = orders[0].length;
    while (matched < dimension) {
      for (var j = 1; j < orders.length; ++j) {
        if (orders[j][matched] !== orders[0][matched]) {
          return matched;
        }
      }
      ++matched;
    }
    return matched;
  }
  // Processes a block according to the given data types
  // Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
  function $690c1e901a1b2fdd62402287fda90174$var$processBlock(block, proc, dtypes) {
    var code = block.body;
    var pre = [];
    var post = [];
    for (var i = 0; i < block.args.length; ++i) {
      var carg = block.args[i];
      if (carg.count <= 0) {
        continue;
      }
      var re = new RegExp(carg.name, "g");
      var ptrStr = "";
      var arrNum = proc.arrayArgs.indexOf(i);
      switch (proc.argTypes[i]) {
        case "offset":
          var offArgIndex = proc.offsetArgIndex.indexOf(i);
          var offArg = proc.offsetArgs[offArgIndex];
          arrNum = offArg.array;
          ptrStr = "+q" + offArgIndex;
        case "array":
          ptrStr = "p" + arrNum + ptrStr;
          var localStr = "l" + i;
          var arrStr = "a" + arrNum;
          if (proc.arrayBlockIndices[arrNum] === 0) {
            // Argument to body is just a single value from this array
            if (carg.count === 1) {
              // Argument/array used only once(?)
              if (dtypes[arrNum] === "generic") {
                if (carg.lvalue) {
                  pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""));
                  // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                  code = code.replace(re, localStr);
                  post.push([arrStr, ".set(", ptrStr, ",", localStr, ")"].join(""));
                } else {
                  code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""));
                }
              } else {
                code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""));
              }
            } else if (dtypes[arrNum] === "generic") {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""));
              // TODO: Could we optimize by checking for carg.rvalue?
              code = code.replace(re, localStr);
              if (carg.lvalue) {
                post.push([arrStr, ".set(", ptrStr, ",", localStr, ")"].join(""));
              }
            } else {
              pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join(""));
              // TODO: Could we optimize by checking for carg.rvalue?
              code = code.replace(re, localStr);
              if (carg.lvalue) {
                post.push([arrStr, "[", ptrStr, "]=", localStr].join(""));
              }
            }
          } else {
            // Argument to body is a "block"
            var reStrArr = [carg.name], ptrStrArr = [ptrStr];
            for (var j = 0; j < Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
              reStrArr.push("\\s*\\[([^\\]]+)\\]");
              ptrStrArr.push("$" + (j + 1) + "*t" + arrNum + "b" + j);
            }
            re = new RegExp(reStrArr.join(""), "g");
            ptrStr = ptrStrArr.join("+");
            if (dtypes[arrNum] === "generic") {
              /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
              } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
              }*/
              throw new Error("cwise: Generic arrays not supported in combination with blocks!");
            } else {
              // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""));
            }
          }
          break;
        case "scalar":
          code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i));
          break;
        case "index":
          code = code.replace(re, "index");
          break;
        case "shape":
          code = code.replace(re, "shape");
          break;
      }
    }
    return [pre.join("\n"), code, post.join("\n")].join("\n").trim();
  }
  function $690c1e901a1b2fdd62402287fda90174$var$typeSummary(dtypes) {
    var summary = new Array(dtypes.length);
    var allEqual = true;
    for (var i = 0; i < dtypes.length; ++i) {
      var t = dtypes[i];
      var digits = t.match(/\d+/);
      if (!digits) {
        digits = "";
      } else {
        digits = digits[0];
      }
      if (t.charAt(0) === 0) {
        summary[i] = "u" + t.charAt(1) + digits;
      } else {
        summary[i] = t.charAt(0) + digits;
      }
      if (i > 0) {
        allEqual = allEqual && summary[i] === summary[i - 1];
      }
    }
    if (allEqual) {
      return summary[0];
    }
    return summary.join("");
  }
  // Generates a cwise operator
  function $690c1e901a1b2fdd62402287fda90174$var$generateCWiseOp(proc, typesig) {
    // Compute dimension
    // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
    var dimension = typesig[1].length - Math.abs(proc.arrayBlockIndices[0]) | 0;
    var orders = new Array(proc.arrayArgs.length);
    var dtypes = new Array(proc.arrayArgs.length);
    for (var i = 0; i < proc.arrayArgs.length; ++i) {
      dtypes[i] = typesig[2 * i];
      orders[i] = typesig[2 * i + 1];
    }
    // Determine where block and loop indices start and end
    var blockBegin = [], blockEnd = [];
    // These indices are exposed as blocks
    var loopBegin = [], loopEnd = [];
    // These indices are iterated over
    var loopOrders = [];
    // orders restricted to the loop indices
    for (var i = 0; i < proc.arrayArgs.length; ++i) {
      if (proc.arrayBlockIndices[i] < 0) {
        loopBegin.push(0);
        loopEnd.push(dimension);
        blockBegin.push(dimension);
        blockEnd.push(dimension + proc.arrayBlockIndices[i]);
      } else {
        loopBegin.push(proc.arrayBlockIndices[i]);
        // Non-negative
        loopEnd.push(proc.arrayBlockIndices[i] + dimension);
        blockBegin.push(0);
        blockEnd.push(proc.arrayBlockIndices[i]);
      }
      var newOrder = [];
      for (var j = 0; j < orders[i].length; j++) {
        if (loopBegin[i] <= orders[i][j] && orders[i][j] < loopEnd[i]) {
          newOrder.push(orders[i][j] - loopBegin[i]);
        }
      }
      loopOrders.push(newOrder);
    }
    // First create arguments for procedure
    var arglist = ["SS"];
    // SS is the overall shape over which we iterate
    var code = ["'use strict'"];
    var vars = [];
    for (var j = 0; j < dimension; ++j) {
      vars.push(["s", j, "=SS[", j, "]"].join(""));
    }
    for (var i = 0; i < proc.arrayArgs.length; ++i) {
      arglist.push("a" + i);
      // Actual data array
      arglist.push("t" + i);
      // Strides
      arglist.push("p" + i);
      // Offset in the array at which the data starts (also used for iterating over the data)
      for (var j = 0; j < dimension; ++j) {
        // Unpack the strides into vars for looping
        vars.push(["t", i, "p", j, "=t", i, "[", loopBegin[i] + j, "]"].join(""));
      }
      for (var j = 0; j < Math.abs(proc.arrayBlockIndices[i]); ++j) {
        // Unpack the strides into vars for block iteration
        vars.push(["t", i, "b", j, "=t", i, "[", blockBegin[i] + j, "]"].join(""));
      }
    }
    for (var i = 0; i < proc.scalarArgs.length; ++i) {
      arglist.push("Y" + i);
    }
    if (proc.shapeArgs.length > 0) {
      vars.push("shape=SS.slice(0)");
    }
    if (proc.indexArgs.length > 0) {
      // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
      var zeros = new Array(dimension);
      for (var i = 0; i < dimension; ++i) {
        zeros[i] = "0";
      }
      vars.push(["index=[", zeros.join(","), "]"].join(""));
    }
    for (var i = 0; i < proc.offsetArgs.length; ++i) {
      // Offset arguments used for stencil operations
      var off_arg = proc.offsetArgs[i];
      var init_string = [];
      for (var j = 0; j < off_arg.offset.length; ++j) {
        if (off_arg.offset[j] === 0) {
          continue;
        } else if (off_arg.offset[j] === 1) {
          init_string.push(["t", off_arg.array, "p", j].join(""));
        } else {
          init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""));
        }
      }
      if (init_string.length === 0) {
        vars.push("q" + i + "=0");
      } else {
        vars.push(["q", i, "=", init_string.join("+")].join(""));
      }
    }
    // Prepare this variables
    var thisVars = $690c1e901a1b2fdd62402287fda90174$var$uniq([].concat(proc.pre.thisVars).concat(proc.body.thisVars).concat(proc.post.thisVars));
    vars = vars.concat(thisVars);
    if (vars.length > 0) {
      code.push("var " + vars.join(","));
    }
    for (var i = 0; i < proc.arrayArgs.length; ++i) {
      code.push("p" + i + "|=0");
    }
    // Inline prelude
    if (proc.pre.body.length > 3) {
      code.push($690c1e901a1b2fdd62402287fda90174$var$processBlock(proc.pre, proc, dtypes));
    }
    // Process body
    var body = $690c1e901a1b2fdd62402287fda90174$var$processBlock(proc.body, proc, dtypes);
    var matched = $690c1e901a1b2fdd62402287fda90174$var$countMatches(loopOrders);
    if (matched < dimension) {
      code.push($690c1e901a1b2fdd62402287fda90174$var$outerFill(matched, loopOrders[0], proc, body));
    } else {
      code.push($690c1e901a1b2fdd62402287fda90174$var$innerFill(loopOrders[0], proc, body));
    }
    // Inline epilog
    if (proc.post.body.length > 3) {
      code.push($690c1e901a1b2fdd62402287fda90174$var$processBlock(proc.post, proc, dtypes));
    }
    if (proc.debug) {
      console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------");
    }
    var loopName = [proc.funcName || "unnamed", "_cwise_loop_", orders[0].join("s"), "m", matched, $690c1e901a1b2fdd62402287fda90174$var$typeSummary(dtypes)].join("");
    var f = new Function(["function ", loopName, "(", arglist.join(","), "){", code.join("\n"), "} return ", loopName].join(""));
    return f();
  }
  $690c1e901a1b2fdd62402287fda90174$exports = $690c1e901a1b2fdd62402287fda90174$var$generateCWiseOp;
  function $a223576e9adc35e3cf9a5a9761c1eb5d$var$createThunk(proc) {
    var code = ["'use strict'", "var CACHED={}"];
    var vars = [];
    var thunkName = proc.funcName + "_cwise_thunk";
    // Build thunk
    code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""));
    var typesig = [];
    var string_typesig = [];
    var proc_args = [["array", proc.arrayArgs[0], ".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
    Math.max(0, proc.arrayBlockIndices[0]), proc.arrayBlockIndices[0] < 0 ? "," + proc.arrayBlockIndices[0] + ")" : ")"].join("")];
    var shapeLengthConditions = [], shapeConditions = [];
    // Process array arguments
    for (var i = 0; i < proc.arrayArgs.length; ++i) {
      var j = proc.arrayArgs[i];
      vars.push(["t", j, "=array", j, ".dtype,", "r", j, "=array", j, ".order"].join(""));
      typesig.push("t" + j);
      typesig.push("r" + j);
      string_typesig.push("t" + j);
      string_typesig.push("r" + j + ".join()");
      proc_args.push("array" + j + ".data");
      proc_args.push("array" + j + ".stride");
      proc_args.push("array" + j + ".offset|0");
      if (i > 0) {
        // Gather conditions to check for shape equality (ignoring block indices)
        shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0]) - Math.abs(proc.arrayBlockIndices[i])));
        shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[i]) + "]");
      }
    }
    // Check for shape equality
    if (proc.arrayArgs.length > 1) {
      code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')");
      code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {");
      code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')");
      code.push("}");
    }
    // Process scalar arguments
    for (var i = 0; i < proc.scalarArgs.length; ++i) {
      proc_args.push("scalar" + proc.scalarArgs[i]);
    }
    // Check for cached function (and if not present, generate it)
    vars.push(["type=[", string_typesig.join(","), "].join()"].join(""));
    vars.push("proc=CACHED[type]");
    code.push("var " + vars.join(","));
    code.push(["if(!proc){", "CACHED[type]=proc=compile([", typesig.join(","), "])}", "return proc(", proc_args.join(","), ")}"].join(""));
    if (proc.debug) {
      console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------");
    }
    // Compile thunk
    var thunk = new Function("compile", code.join("\n"));
    return thunk($690c1e901a1b2fdd62402287fda90174$exports.bind(undefined, proc));
  }
  $a223576e9adc35e3cf9a5a9761c1eb5d$exports = $a223576e9adc35e3cf9a5a9761c1eb5d$var$createThunk;
  var $d8d3680e56ad997644fdd48b0081014f$var$createThunk = $a223576e9adc35e3cf9a5a9761c1eb5d$exports;
  function $d8d3680e56ad997644fdd48b0081014f$var$Procedure() {
    this.argTypes = [];
    this.shimArgs = [];
    this.arrayArgs = [];
    this.arrayBlockIndices = [];
    this.scalarArgs = [];
    this.offsetArgs = [];
    this.offsetArgIndex = [];
    this.indexArgs = [];
    this.shapeArgs = [];
    this.funcName = "";
    this.pre = null;
    this.body = null;
    this.post = null;
    this.debug = false;
  }
  function $d8d3680e56ad997644fdd48b0081014f$var$compileCwise(user_args) {
    // Create procedure
    var proc = new $d8d3680e56ad997644fdd48b0081014f$var$Procedure();
    // Parse blocks
    proc.pre = user_args.pre;
    proc.body = user_args.body;
    proc.post = user_args.post;
    // Parse arguments
    var proc_args = user_args.args.slice(0);
    proc.argTypes = proc_args;
    for (var i = 0; i < proc_args.length; ++i) {
      var arg_type = proc_args[i];
      if (arg_type === "array" || typeof arg_type === "object" && arg_type.blockIndices) {
        proc.argTypes[i] = "array";
        proc.arrayArgs.push(i);
        proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0);
        proc.shimArgs.push("array" + i);
        if (i < proc.pre.args.length && proc.pre.args[i].count > 0) {
          throw new Error("cwise: pre() block may not reference array args");
        }
        if (i < proc.post.args.length && proc.post.args[i].count > 0) {
          throw new Error("cwise: post() block may not reference array args");
        }
      } else if (arg_type === "scalar") {
        proc.scalarArgs.push(i);
        proc.shimArgs.push("scalar" + i);
      } else if (arg_type === "index") {
        proc.indexArgs.push(i);
        if (i < proc.pre.args.length && proc.pre.args[i].count > 0) {
          throw new Error("cwise: pre() block may not reference array index");
        }
        if (i < proc.body.args.length && proc.body.args[i].lvalue) {
          throw new Error("cwise: body() block may not write to array index");
        }
        if (i < proc.post.args.length && proc.post.args[i].count > 0) {
          throw new Error("cwise: post() block may not reference array index");
        }
      } else if (arg_type === "shape") {
        proc.shapeArgs.push(i);
        if (i < proc.pre.args.length && proc.pre.args[i].lvalue) {
          throw new Error("cwise: pre() block may not write to array shape");
        }
        if (i < proc.body.args.length && proc.body.args[i].lvalue) {
          throw new Error("cwise: body() block may not write to array shape");
        }
        if (i < proc.post.args.length && proc.post.args[i].lvalue) {
          throw new Error("cwise: post() block may not write to array shape");
        }
      } else if (typeof arg_type === "object" && arg_type.offset) {
        proc.argTypes[i] = "offset";
        proc.offsetArgs.push({
          array: arg_type.array,
          offset: arg_type.offset
        });
        proc.offsetArgIndex.push(i);
      } else {
        throw new Error("cwise: Unknown argument type " + proc_args[i]);
      }
    }
    // Make sure at least one array argument was specified
    if (proc.arrayArgs.length <= 0) {
      throw new Error("cwise: No array arguments specified");
    }
    // Make sure arguments are correct
    if (proc.pre.args.length > proc_args.length) {
      throw new Error("cwise: Too many arguments in pre() block");
    }
    if (proc.body.args.length > proc_args.length) {
      throw new Error("cwise: Too many arguments in body() block");
    }
    if (proc.post.args.length > proc_args.length) {
      throw new Error("cwise: Too many arguments in post() block");
    }
    // Check debug flag
    proc.debug = !!user_args.printCode || !!user_args.debug;
    // Retrieve name
    proc.funcName = user_args.funcName || "cwise";
    // Read in block size
    proc.blockSize = user_args.blockSize || 64;
    return $d8d3680e56ad997644fdd48b0081014f$var$createThunk(proc);
  }
  $d8d3680e56ad997644fdd48b0081014f$exports = $d8d3680e56ad997644fdd48b0081014f$var$compileCwise;
  var $5cdfa2968ca2b18245a258efa5e0b0df$var$compile = $d8d3680e56ad997644fdd48b0081014f$exports;
  var $5cdfa2968ca2b18245a258efa5e0b0df$var$REQUIRED_FIELDS = ["args", "body"];
  var $5cdfa2968ca2b18245a258efa5e0b0df$var$OPTIONAL_FIELDS = ["pre", "post", "printCode", "funcName", "blockSize"];
  function $5cdfa2968ca2b18245a258efa5e0b0df$var$createCWise(user_args) {
    // Check parameters
    for (var id in user_args) {
      if ($5cdfa2968ca2b18245a258efa5e0b0df$var$REQUIRED_FIELDS.indexOf(id) < 0 && $5cdfa2968ca2b18245a258efa5e0b0df$var$OPTIONAL_FIELDS.indexOf(id) < 0) {
        console.warn("cwise: Unknown argument '" + id + "' passed to expression compiler");
      }
    }
    for (var i = 0; i < $5cdfa2968ca2b18245a258efa5e0b0df$var$REQUIRED_FIELDS.length; ++i) {
      if (!user_args[$5cdfa2968ca2b18245a258efa5e0b0df$var$REQUIRED_FIELDS[i]]) {
        throw new Error("cwise: Missing argument: " + $5cdfa2968ca2b18245a258efa5e0b0df$var$REQUIRED_FIELDS[i]);
      }
    }
    // Parse blocks
    return $5cdfa2968ca2b18245a258efa5e0b0df$var$compile({
      args: user_args.args,
      pre: $5cdfa2968ca2b18245a258efa5e0b0df$var$parse(user_args.pre || (function () {})),
      body: $5cdfa2968ca2b18245a258efa5e0b0df$var$parse(user_args.body),
      post: $5cdfa2968ca2b18245a258efa5e0b0df$var$parse(user_args.post || (function () {})),
      debug: !!user_args.printCode,
      funcName: user_args.funcName || user_args.body.name || "cwise",
      blockSize: user_args.blockSize || 64
    });
  }
  $5cdfa2968ca2b18245a258efa5e0b0df$exports = $5cdfa2968ca2b18245a258efa5e0b0df$var$createCWise;
  var $e8ae97f6472f3746f501d0b1d2732b57$var$cwise = $5cdfa2968ca2b18245a258efa5e0b0df$exports;
  // ASSET: node_modules/ndarray-ops/ndarray-ops.js
  var $6de3f175c0ee5fbd416455d23a1fbe7f$exports = {};
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile = $d8d3680e56ad997644fdd48b0081014f$exports;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$EmptyProc = {
    body: "",
    args: [],
    thisVars: [],
    localVars: []
  };
  function $6de3f175c0ee5fbd416455d23a1fbe7f$var$fixup(x) {
    if (!x) {
      return $6de3f175c0ee5fbd416455d23a1fbe7f$var$EmptyProc;
    }
    for (var i = 0; i < x.args.length; ++i) {
      var a = x.args[i];
      if (i === 0) {
        x.args[i] = {
          name: a,
          lvalue: true,
          rvalue: !!x.rvalue,
          count: x.count || 1
        };
      } else {
        x.args[i] = {
          name: a,
          lvalue: false,
          rvalue: true,
          count: 1
        };
      }
    }
    if (!x.thisVars) {
      x.thisVars = [];
    }
    if (!x.localVars) {
      x.localVars = [];
    }
    return x;
  }
  function $6de3f175c0ee5fbd416455d23a1fbe7f$var$pcompile(user_args) {
    return $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
      args: user_args.args,
      pre: $6de3f175c0ee5fbd416455d23a1fbe7f$var$fixup(user_args.pre),
      body: $6de3f175c0ee5fbd416455d23a1fbe7f$var$fixup(user_args.body),
      post: $6de3f175c0ee5fbd416455d23a1fbe7f$var$fixup(user_args.proc),
      funcName: user_args.funcName
    });
  }
  function $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp(user_args) {
    var args = [];
    for (var i = 0; i < user_args.args.length; ++i) {
      args.push("a" + i);
    }
    var wrapper = new Function("P", ["return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"].join(""));
    return wrapper($6de3f175c0ee5fbd416455d23a1fbe7f$var$pcompile(user_args));
  }
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$assign_ops = {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
    mod: "%",
    band: "&",
    bor: "|",
    bxor: "^",
    lshift: "<<",
    rshift: ">>",
    rrshift: ">>>"
  };
  (function () {
    for (var id in $6de3f175c0ee5fbd416455d23a1fbe7f$var$assign_ops) {
      var op = $6de3f175c0ee5fbd416455d23a1fbe7f$var$assign_ops[id];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "array"],
        body: {
          args: ["a", "b", "c"],
          body: "a=b" + op + "c"
        },
        funcName: id
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "eq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        body: {
          args: ["a", "b"],
          body: "a" + op + "=b"
        },
        rvalue: true,
        funcName: id + "eq"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "s"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "scalar"],
        body: {
          args: ["a", "b", "s"],
          body: "a=b" + op + "s"
        },
        funcName: id + "s"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "seq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "scalar"],
        body: {
          args: ["a", "s"],
          body: "a" + op + "=s"
        },
        rvalue: true,
        funcName: id + "seq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$unary_ops = {
    not: "!",
    bnot: "~",
    neg: "-",
    recip: "1.0/"
  };
  (function () {
    for (var id in $6de3f175c0ee5fbd416455d23a1fbe7f$var$unary_ops) {
      var op = $6de3f175c0ee5fbd416455d23a1fbe7f$var$unary_ops[id];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        body: {
          args: ["a", "b"],
          body: "a=" + op + "b"
        },
        funcName: id
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "eq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array"],
        body: {
          args: ["a"],
          body: "a=" + op + "a"
        },
        rvalue: true,
        count: 2,
        funcName: id + "eq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$binary_ops = {
    and: "&&",
    or: "||",
    eq: "===",
    neq: "!==",
    lt: "<",
    gt: ">",
    leq: "<=",
    geq: ">="
  };
  (function () {
    for (var id in $6de3f175c0ee5fbd416455d23a1fbe7f$var$binary_ops) {
      var op = $6de3f175c0ee5fbd416455d23a1fbe7f$var$binary_ops[id];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "array"],
        body: {
          args: ["a", "b", "c"],
          body: "a=b" + op + "c"
        },
        funcName: id
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "s"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "scalar"],
        body: {
          args: ["a", "b", "s"],
          body: "a=b" + op + "s"
        },
        funcName: id + "s"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "eq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        body: {
          args: ["a", "b"],
          body: "a=a" + op + "b"
        },
        rvalue: true,
        count: 2,
        funcName: id + "eq"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[id + "seq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "scalar"],
        body: {
          args: ["a", "s"],
          body: "a=a" + op + "s"
        },
        rvalue: true,
        count: 2,
        funcName: id + "seq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_unary = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
  (function () {
    for (var i = 0; i < $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_unary.length; ++i) {
      var f = $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_unary[i];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b"],
          body: "a=this_f(b)",
          thisVars: ["this_f"]
        },
        funcName: f
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "eq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a"],
          body: "a=this_f(a)",
          thisVars: ["this_f"]
        },
        rvalue: true,
        count: 2,
        funcName: f + "eq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_comm = ["max", "min", "atan2", "pow"];
  (function () {
    for (var i = 0; i < $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_comm.length; ++i) {
      var f = $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_comm[i];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(b,c)",
          thisVars: ["this_f"]
        },
        funcName: f
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "s"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "scalar"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(b,c)",
          thisVars: ["this_f"]
        },
        funcName: f + "s"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "eq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b"],
          body: "a=this_f(a,b)",
          thisVars: ["this_f"]
        },
        rvalue: true,
        count: 2,
        funcName: f + "eq"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "seq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "scalar"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b"],
          body: "a=this_f(a,b)",
          thisVars: ["this_f"]
        },
        rvalue: true,
        count: 2,
        funcName: f + "seq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_noncomm = ["atan2", "pow"];
  (function () {
    for (var i = 0; i < $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_noncomm.length; ++i) {
      var f = $6de3f175c0ee5fbd416455d23a1fbe7f$var$math_noncomm[i];
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "op"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(c,b)",
          thisVars: ["this_f"]
        },
        funcName: f + "op"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "ops"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array", "scalar"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(c,b)",
          thisVars: ["this_f"]
        },
        funcName: f + "ops"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "opeq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "array"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b"],
          body: "a=this_f(b,a)",
          thisVars: ["this_f"]
        },
        rvalue: true,
        count: 2,
        funcName: f + "opeq"
      });
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports[f + "opseq"] = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
        args: ["array", "scalar"],
        pre: {
          args: [],
          body: "this_f=Math." + f,
          thisVars: ["this_f"]
        },
        body: {
          args: ["a", "b"],
          body: "a=this_f(b,a)",
          thisVars: ["this_f"]
        },
        rvalue: true,
        count: 2,
        funcName: f + "opseq"
      });
    }
  })();
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$any = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: $6de3f175c0ee5fbd416455d23a1fbe7f$var$EmptyProc,
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      body: "if(a){return true}",
      localVars: [],
      thisVars: []
    },
    post: {
      args: [],
      localVars: [],
      thisVars: [],
      body: "return false"
    },
    funcName: "any"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.any = $6de3f175c0ee5fbd416455d23a1fbe7f$export$any;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$all = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: $6de3f175c0ee5fbd416455d23a1fbe7f$var$EmptyProc,
    body: {
      args: [{
        name: "x",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      body: "if(!x){return false}",
      localVars: [],
      thisVars: []
    },
    post: {
      args: [],
      localVars: [],
      thisVars: [],
      body: "return true"
    },
    funcName: "all"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.all = $6de3f175c0ee5fbd416455d23a1fbe7f$export$all;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$sum = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=0"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      body: "this_s+=a",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return this_s"
    },
    funcName: "sum"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.sum = $6de3f175c0ee5fbd416455d23a1fbe7f$export$sum;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$prod = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=1"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      body: "this_s*=a",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return this_s"
    },
    funcName: "prod"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.prod = $6de3f175c0ee5fbd416455d23a1fbe7f$export$prod;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm2squared = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=0"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 2
      }],
      body: "this_s+=a*a",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return this_s"
    },
    funcName: "norm2squared"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.norm2squared = $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm2squared;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm2 = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=0"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 2
      }],
      body: "this_s+=a*a",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return Math.sqrt(this_s)"
    },
    funcName: "norm2"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.norm2 = $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm2;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$norminf = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=0"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 4
      }],
      body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return this_s"
    },
    funcName: "norminf"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.norminf = $6de3f175c0ee5fbd416455d23a1fbe7f$export$norminf;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm1 = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "this_s=0"
    },
    body: {
      args: [{
        name: "a",
        lvalue: false,
        rvalue: true,
        count: 3
      }],
      body: "this_s+=a<0?-a:a",
      localVars: [],
      thisVars: ["this_s"]
    },
    post: {
      args: [],
      localVars: [],
      thisVars: ["this_s"],
      body: "return this_s"
    },
    funcName: "norm1"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.norm1 = $6de3f175c0ee5fbd416455d23a1fbe7f$export$norm1;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$sup = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      body: "this_h=-Infinity",
      args: [],
      thisVars: ["this_h"],
      localVars: []
    },
    body: {
      body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
      args: [{
        "name": "_inline_1_arg0_",
        "lvalue": false,
        "rvalue": true,
        "count": 2
      }],
      thisVars: ["this_h"],
      localVars: []
    },
    post: {
      body: "return this_h",
      args: [],
      thisVars: ["this_h"],
      localVars: []
    }
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.sup = $6de3f175c0ee5fbd416455d23a1fbe7f$export$sup;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$inf = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array"],
    pre: {
      body: "this_h=Infinity",
      args: [],
      thisVars: ["this_h"],
      localVars: []
    },
    body: {
      body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
      args: [{
        "name": "_inline_1_arg0_",
        "lvalue": false,
        "rvalue": true,
        "count": 2
      }],
      thisVars: ["this_h"],
      localVars: []
    },
    post: {
      body: "return this_h",
      args: [],
      thisVars: ["this_h"],
      localVars: []
    }
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.inf = $6de3f175c0ee5fbd416455d23a1fbe7f$export$inf;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$argmin = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["index", "array", "shape"],
    pre: {
      body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
      args: [{
        name: "_inline_0_arg0_",
        lvalue: false,
        rvalue: false,
        count: 0
      }, {
        name: "_inline_0_arg1_",
        lvalue: false,
        rvalue: false,
        count: 0
      }, {
        name: "_inline_0_arg2_",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      thisVars: ["this_i", "this_v"],
      localVars: []
    },
    body: {
      body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
      args: [{
        name: "_inline_1_arg0_",
        lvalue: false,
        rvalue: true,
        count: 2
      }, {
        name: "_inline_1_arg1_",
        lvalue: false,
        rvalue: true,
        count: 2
      }],
      thisVars: ["this_i", "this_v"],
      localVars: ["_inline_1_k"]
    },
    post: {
      body: "{return this_i}",
      args: [],
      thisVars: ["this_i"],
      localVars: []
    }
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.argmin = $6de3f175c0ee5fbd416455d23a1fbe7f$export$argmin;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$argmax = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["index", "array", "shape"],
    pre: {
      body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
      args: [{
        name: "_inline_0_arg0_",
        lvalue: false,
        rvalue: false,
        count: 0
      }, {
        name: "_inline_0_arg1_",
        lvalue: false,
        rvalue: false,
        count: 0
      }, {
        name: "_inline_0_arg2_",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      thisVars: ["this_i", "this_v"],
      localVars: []
    },
    body: {
      body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
      args: [{
        name: "_inline_1_arg0_",
        lvalue: false,
        rvalue: true,
        count: 2
      }, {
        name: "_inline_1_arg1_",
        lvalue: false,
        rvalue: true,
        count: 2
      }],
      thisVars: ["this_i", "this_v"],
      localVars: ["_inline_1_k"]
    },
    post: {
      body: "{return this_i}",
      args: [],
      thisVars: ["this_i"],
      localVars: []
    }
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.argmax = $6de3f175c0ee5fbd416455d23a1fbe7f$export$argmax;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$random = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
    args: ["array"],
    pre: {
      args: [],
      body: "this_f=Math.random",
      thisVars: ["this_f"]
    },
    body: {
      args: ["a"],
      body: "a=this_f()",
      thisVars: ["this_f"]
    },
    funcName: "random"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.random = $6de3f175c0ee5fbd416455d23a1fbe7f$export$random;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$assign = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
    args: ["array", "array"],
    body: {
      args: ["a", "b"],
      body: "a=b"
    },
    funcName: "assign"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.assign = $6de3f175c0ee5fbd416455d23a1fbe7f$export$assign;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$assigns = $6de3f175c0ee5fbd416455d23a1fbe7f$var$makeOp({
    args: ["array", "scalar"],
    body: {
      args: ["a", "b"],
      body: "a=b"
    },
    funcName: "assigns"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.assigns = $6de3f175c0ee5fbd416455d23a1fbe7f$export$assigns;
  var $6de3f175c0ee5fbd416455d23a1fbe7f$export$equals = $6de3f175c0ee5fbd416455d23a1fbe7f$var$compile({
    args: ["array", "array"],
    pre: $6de3f175c0ee5fbd416455d23a1fbe7f$var$EmptyProc,
    body: {
      args: [{
        name: "x",
        lvalue: false,
        rvalue: true,
        count: 1
      }, {
        name: "y",
        lvalue: false,
        rvalue: true,
        count: 1
      }],
      body: "if(x!==y){return false}",
      localVars: [],
      thisVars: []
    },
    post: {
      args: [],
      localVars: [],
      thisVars: [],
      body: "return true"
    },
    funcName: "equals"
  });
  $6de3f175c0ee5fbd416455d23a1fbe7f$exports.equals = $6de3f175c0ee5fbd416455d23a1fbe7f$export$equals;
  // ASSET: node_modules/typedarray-pool/pool.js
  var $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint16, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint32, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeBigUint64, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt8, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt16, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt32, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeBigInt64, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat32, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat64, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDouble, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint8Clamped, $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDataView, $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocFloat, $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocDouble;
  // Number of bits in an integer
  var $e4b97d7f1181cde6d0827a3ae309518e$var$INT_BITS = 32;
  var $e4b97d7f1181cde6d0827a3ae309518e$export$log2 = function (v) {
    var r, shift;
    r = (v > 0xFFFF) << 4;
    v >>>= r;
    shift = (v > 0xFF) << 3;
    v >>>= shift;
    r |= shift;
    shift = (v > 0xF) << 2;
    v >>>= shift;
    r |= shift;
    shift = (v > 0x3) << 1;
    v >>>= shift;
    r |= shift;
    return r | v >> 1;
  };
  // Counts number of trailing zeros
  function $e4b97d7f1181cde6d0827a3ae309518e$var$countTrailingZeros(v) {
    var c = 32;
    v &= -v;
    if (v) c--;
    if (v & 0x0000FFFF) c -= 16;
    if (v & 0x00FF00FF) c -= 8;
    if (v & 0x0F0F0F0F) c -= 4;
    if (v & 0x33333333) c -= 2;
    if (v & 0x55555555) c -= 1;
    return c;
  }
  var $e4b97d7f1181cde6d0827a3ae309518e$export$nextPow2 = function (v) {
    v += v === 0;
    --v;
    v |= v >>> 1;
    v |= v >>> 2;
    v |= v >>> 4;
    v |= v >>> 8;
    v |= v >>> 16;
    return v + 1;
  };
  var $e4b97d7f1181cde6d0827a3ae309518e$var$REVERSE_TABLE = new Array(256);
  (function (tab) {
    for (var i = 0; i < 256; ++i) {
      var v = i, r = i, s = 7;
      for (v >>>= 1; v; v >>>= 1) {
        r <<= 1;
        r |= v & 1;
        --s;
      }
      tab[i] = r << s & 0xff;
    }
  })($e4b97d7f1181cde6d0827a3ae309518e$var$REVERSE_TABLE);
  // ASSET: node_modules/dup/dup.js
  var $bbea63b5b2686cd360ca463871608ed6$exports = {};
  function $bbea63b5b2686cd360ca463871608ed6$var$dupe_array(count, value, i) {
    var c = count[i] | 0;
    if (c <= 0) {
      return [];
    }
    var result = new Array(c), j;
    if (i === count.length - 1) {
      for (j = 0; j < c; ++j) {
        result[j] = value;
      }
    } else {
      for (j = 0; j < c; ++j) {
        result[j] = $bbea63b5b2686cd360ca463871608ed6$var$dupe_array(count, value, i + 1);
      }
    }
    return result;
  }
  function $bbea63b5b2686cd360ca463871608ed6$var$dupe_number(count, value) {
    var result, i;
    result = new Array(count);
    for (i = 0; i < count; ++i) {
      result[i] = value;
    }
    return result;
  }
  function $bbea63b5b2686cd360ca463871608ed6$var$dupe(count, value) {
    if (typeof value === "undefined") {
      value = 0;
    }
    switch (typeof count) {
      case "number":
        if (count > 0) {
          return $bbea63b5b2686cd360ca463871608ed6$var$dupe_number(count | 0, value);
        }
        break;
      case "object":
        if (typeof count.length === "number") {
          return $bbea63b5b2686cd360ca463871608ed6$var$dupe_array(count, value, 0);
        }
        break;
    }
    return [];
  }
  $bbea63b5b2686cd360ca463871608ed6$exports = $bbea63b5b2686cd360ca463871608ed6$var$dupe;
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$dup = $bbea63b5b2686cd360ca463871608ed6$exports;
  var $9048887052597cadf129168d852186ce$export$toByteArray = $9048887052597cadf129168d852186ce$var$toByteArray;
  var $9048887052597cadf129168d852186ce$export$fromByteArray = $9048887052597cadf129168d852186ce$var$fromByteArray;
  var $9048887052597cadf129168d852186ce$var$lookup = [];
  var $9048887052597cadf129168d852186ce$var$revLookup = [];
  var $9048887052597cadf129168d852186ce$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var $9048887052597cadf129168d852186ce$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var $9048887052597cadf129168d852186ce$var$i = 0, $9048887052597cadf129168d852186ce$var$len = $9048887052597cadf129168d852186ce$var$code.length; $9048887052597cadf129168d852186ce$var$i < $9048887052597cadf129168d852186ce$var$len; ++$9048887052597cadf129168d852186ce$var$i) {
    $9048887052597cadf129168d852186ce$var$lookup[$9048887052597cadf129168d852186ce$var$i] = $9048887052597cadf129168d852186ce$var$code[$9048887052597cadf129168d852186ce$var$i];
    $9048887052597cadf129168d852186ce$var$revLookup[$9048887052597cadf129168d852186ce$var$code.charCodeAt($9048887052597cadf129168d852186ce$var$i)] = $9048887052597cadf129168d852186ce$var$i;
  }
  // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications
  $9048887052597cadf129168d852186ce$var$revLookup[('-').charCodeAt(0)] = 62;
  $9048887052597cadf129168d852186ce$var$revLookup[('_').charCodeAt(0)] = 63;
  function $9048887052597cadf129168d852186ce$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  // base64 is 4/3 + up to two characters of the original data
  function $9048887052597cadf129168d852186ce$var$byteLength(b64) {
    var lens = $9048887052597cadf129168d852186ce$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function $9048887052597cadf129168d852186ce$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function $9048887052597cadf129168d852186ce$var$toByteArray(b64) {
    var tmp;
    var lens = $9048887052597cadf129168d852186ce$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $9048887052597cadf129168d852186ce$var$Arr($9048887052597cadf129168d852186ce$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for (i = 0; i < len; i += 4) {
      tmp = $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i)] << 18 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 3)];
      arr[curByte++] = tmp >> 16 & 0xFF;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
      tmp = $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i)] << 2 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
      tmp = $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i)] << 10 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $9048887052597cadf129168d852186ce$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }
    return arr;
  }
  function $9048887052597cadf129168d852186ce$var$tripletToBase64(num) {
    return $9048887052597cadf129168d852186ce$var$lookup[num >> 18 & 0x3F] + $9048887052597cadf129168d852186ce$var$lookup[num >> 12 & 0x3F] + $9048887052597cadf129168d852186ce$var$lookup[num >> 6 & 0x3F] + $9048887052597cadf129168d852186ce$var$lookup[num & 0x3F];
  }
  function $9048887052597cadf129168d852186ce$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
      output.push($9048887052597cadf129168d852186ce$var$tripletToBase64(tmp));
    }
    return output.join('');
  }
  function $9048887052597cadf129168d852186ce$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    // if we have 1 byte left, pad 2 bytes
    var parts = [];
    var maxChunkLength = 16383;
    // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push($9048887052597cadf129168d852186ce$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      parts.push($9048887052597cadf129168d852186ce$var$lookup[tmp >> 2] + $9048887052597cadf129168d852186ce$var$lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      parts.push($9048887052597cadf129168d852186ce$var$lookup[tmp >> 10] + $9048887052597cadf129168d852186ce$var$lookup[tmp >> 4 & 0x3F] + $9048887052597cadf129168d852186ce$var$lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
  }
  var $acdfc070b310fb08eb6b1943e96416f7$export$read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; (e = e * 256 + buffer[offset + i], i += d, nBits -= 8)) {}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; (m = m * 256 + buffer[offset + i], i += d, nBits -= 8)) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  var $acdfc070b310fb08eb6b1943e96416f7$export$write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; (buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8)) {}
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; (buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8)) {}
    buffer[offset + i - d] |= s * 128;
  };
  var $77ffa64159247d8b11f13d007a4c8ef1$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? // eslint-disable-line dot-notation
  Symbol['for']('nodejs.util.inspect.custom') : // eslint-disable-line dot-notation
  null;
  var $77ffa64159247d8b11f13d007a4c8ef1$export$Buffer = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer;
  var $77ffa64159247d8b11f13d007a4c8ef1$export$INSPECT_MAX_BYTES = 50;
  var $77ffa64159247d8b11f13d007a4c8ef1$var$K_MAX_LENGTH = 0x7fffffff;
  /**
  * If `Buffer.TYPED_ARRAY_SUPPORT`:
  *   === true    Use Uint8Array implementation (fastest)
  *   === false   Print warning and recommend using `buffer` v4.x which has an Object
  *               implementation (most compatible, even IE6)
  *
  * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
  * Opera 11.6+, iOS 4.2+.
  *
  * We report that the browser does not support typed arrays if the are not subclassable
  * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
  * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
  * for __proto__ and has a buggy typed array implementation.
  */
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.TYPED_ARRAY_SUPPORT = $77ffa64159247d8b11f13d007a4c8ef1$var$typedArraySupport();
  if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
      var arr = new Uint8Array(1);
      var proto = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }
  Object.defineProperty($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function () {
      if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(this)) return undefined;
      return this.buffer;
    }
  });
  Object.defineProperty($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function () {
      if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(this)) return undefined;
      return this.byteOffset;
    }
  });
  function $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(length) {
    if (length > $77ffa64159247d8b11f13d007a4c8ef1$var$K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype);
    return buf;
  }
  /**
  * The Buffer constructor returns instances of `Uint8Array` that have their
  * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
  * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
  * and the `Uint8Array` methods. Square bracket notation works as expected -- it
  * returns a single octet.
  *
  * The `Uint8Array` prototype remains unmodified.
  */
  function $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new TypeError('The "string" argument must be of type string. Received type number');
      }
      return $77ffa64159247d8b11f13d007a4c8ef1$var$allocUnsafe(arg);
    }
    return $77ffa64159247d8b11f13d007a4c8ef1$var$from(arg, encodingOrOffset, length);
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.poolSize = 8192;
  // not used by this implementation
  function $77ffa64159247d8b11f13d007a4c8ef1$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
    }
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(value, ArrayBuffer) || value && $77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(value.buffer, ArrayBuffer)) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== 'undefined' && ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(value, SharedArrayBuffer) || value && $77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(value.buffer, SharedArrayBuffer))) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(valueOf, encodingOrOffset, length);
    }
    var b = $77ffa64159247d8b11f13d007a4c8ef1$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    }
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }
  /**
  * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
  * if value is a number.
  * Buffer.from(str[, encoding])
  * Buffer.from(array)
  * Buffer.from(buffer)
  * Buffer.from(arrayBuffer[, byteOffset[, length]])
  **/
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from = function (value, encodingOrOffset, length) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$from(value, encodingOrOffset, length);
  };
  // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
  // https://github.com/feross/buffer/pull/148
  Object.setPrototypeOf($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype, Uint8Array.prototype);
  Object.setPrototypeOf($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer, Uint8Array);
  function $77ffa64159247d8b11f13d007a4c8ef1$var$assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$alloc(size, fill, encoding) {
    $77ffa64159247d8b11f13d007a4c8ef1$var$assertSize(size);
    if (size <= 0) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(size);
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpreted as a start offset.
      return typeof encoding === 'string' ? $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(size).fill(fill, encoding) : $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(size).fill(fill);
    }
    return $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(size);
  }
  /**
  * Creates a new filled Buffer instance.
  * alloc(size[, fill[, encoding]])
  **/
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.alloc = function (size, fill, encoding) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$alloc(size, fill, encoding);
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$allocUnsafe(size) {
    $77ffa64159247d8b11f13d007a4c8ef1$var$assertSize(size);
    return $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(size < 0 ? 0 : $77ffa64159247d8b11f13d007a4c8ef1$var$checked(size) | 0);
  }
  /**
  * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
  **/
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.allocUnsafe = function (size) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$allocUnsafe(size);
  };
  /**
  * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
  */
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.allocUnsafeSlow = function (size) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$allocUnsafe(size);
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
    var length = $77ffa64159247d8b11f13d007a4c8ef1$var$byteLength(string, encoding) | 0;
    var buf = $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayLike(array) {
    var length = array.length < 0 ? 0 : $77ffa64159247d8b11f13d007a4c8ef1$var$checked(array.length) | 0;
    var buf = $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(length);
    for (var i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayView(arrayView) {
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(arrayView, Uint8Array)) {
      var copy = new Uint8Array(arrayView);
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayLike(arrayView);
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    var buf;
    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array);
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype);
    return buf;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$fromObject(obj) {
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(obj)) {
      var len = $77ffa64159247d8b11f13d007a4c8ef1$var$checked(obj.length) | 0;
      var buf = $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== undefined) {
      if (typeof obj.length !== 'number' || $77ffa64159247d8b11f13d007a4c8ef1$var$numberIsNaN(obj.length)) {
        return $77ffa64159247d8b11f13d007a4c8ef1$var$createBuffer(0);
      }
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$fromArrayLike(obj.data);
    }
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $77ffa64159247d8b11f13d007a4c8ef1$var$K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + $77ffa64159247d8b11f13d007a4c8ef1$var$K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$SlowBuffer(length) {
    if (+length != length) {
      // eslint-disable-line eqeqeq
      length = 0;
    }
    return $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.alloc(+length);
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.compare = function compare(a, b) {
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(a, Uint8Array)) a = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(a, a.offset, a.byteLength);
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(b, Uint8Array)) b = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(a) || !$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(b)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.alloc(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    var buffer = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer.length) {
          $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(buf).copy(buffer, pos);
        } else {
          Uint8Array.prototype.set.call(buffer, buf, pos);
        }
      } else if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer, pos);
      }
      pos += buf.length;
    }
    return buffer;
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$byteLength(string, encoding) {
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || $77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== 'string') {
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
    }
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;
        case 'utf8':
        case 'utf-8':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : $77ffa64159247d8b11f13d007a4c8ef1$var$utf8ToBytes(string).length;
          }
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.byteLength = $77ffa64159247d8b11f13d007a4c8ef1$var$byteLength;
  function $77ffa64159247d8b11f13d007a4c8ef1$var$slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return '';
    }
    if (end === undefined || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return '';
    }
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return '';
    }
    if (!encoding) encoding = 'utf8';
    while (true) {
      switch (encoding) {
        case 'hex':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$utf8Slice(this, start, end);
        case 'ascii':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$latin1Slice(this, start, end);
        case 'base64':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  // reliably in a browserify context because there could be multiple different
  // copies of the 'buffer' package in use. This method works even for Buffer
  // instances that were created from another copy of the `buffer` package.
  // See: https://github.com/feross/buffer/issues/154
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype._isBuffer = true;
  function $77ffa64159247d8b11f13d007a4c8ef1$var$swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i, i + 1);
    }
    return this;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i, i + 3);
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i + 1, i + 2);
    }
    return this;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i, i + 7);
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i + 1, i + 6);
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i + 2, i + 5);
      $77ffa64159247d8b11f13d007a4c8ef1$var$swap(this, i + 3, i + 4);
    }
    return this;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $77ffa64159247d8b11f13d007a4c8ef1$var$utf8Slice(this, 0, length);
    return $77ffa64159247d8b11f13d007a4c8ef1$var$slowToString.apply(this, arguments);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.toLocaleString = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.toString;
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.equals = function equals(b) {
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.compare(this, b) === 0;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = $77ffa64159247d8b11f13d007a4c8ef1$export$INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
  };
  if ($77ffa64159247d8b11f13d007a4c8ef1$var$customInspectSymbol) {
    $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype[$77ffa64159247d8b11f13d007a4c8ef1$var$customInspectSymbol] = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.inspect;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(target, Uint8Array)) {
      target = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(target, target.offset, target.byteLength);
    }
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(target)) {
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
    }
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  // 
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function $77ffa64159247d8b11f13d007a4c8ef1$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;
    // Coerce to Number.
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$numberIsNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : buffer.length - 1;
    }
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1; else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0; else return -1;
    }
    // Normalize val
    if (typeof val === 'string') {
      val = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(val, encoding);
    }
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1;
      }
      return $77ffa64159247d8b11f13d007a4c8ef1$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF;
      // Search for a byte value [0-255]
      if (typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return $77ffa64159247d8b11f13d007a4c8ef1$var$arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }
    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if ($77ffa64159247d8b11f13d007a4c8ef1$var$numberIsNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$utf8Write(buf, string, offset, length) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$blitBuffer($77ffa64159247d8b11f13d007a4c8ef1$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$asciiWrite(buf, string, offset, length) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$blitBuffer($77ffa64159247d8b11f13d007a4c8ef1$var$asciiToBytes(string), buf, offset, length);
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$base64Write(buf, string, offset, length) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$blitBuffer($77ffa64159247d8b11f13d007a4c8ef1$var$base64ToBytes(string), buf, offset, length);
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$ucs2Write(buf, string, offset, length) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$blitBuffer($77ffa64159247d8b11f13d007a4c8ef1$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$asciiWrite(this, string, offset, length);
        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return $77ffa64159247d8b11f13d007a4c8ef1$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return $77ffa64159247d8b11f13d007a4c8ef1$var$ucs2Write(this, string, offset, length);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return $9048887052597cadf129168d852186ce$export$fromByteArray(buf);
    } else {
      return $9048887052597cadf129168d852186ce$export$fromByteArray(buf.slice(start, end));
    }
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return $77ffa64159247d8b11f13d007a4c8ef1$var$decodeCodePointsArray(res);
  }
  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var $77ffa64159247d8b11f13d007a4c8ef1$var$MAX_ARGUMENTS_LENGTH = 0x1000;
  function $77ffa64159247d8b11f13d007a4c8ef1$var$decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= $77ffa64159247d8b11f13d007a4c8ef1$var$MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += $77ffa64159247d8b11f13d007a4c8ef1$var$MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for (var i = start; i < end; ++i) {
      out += $77ffa64159247d8b11f13d007a4c8ef1$var$hexSliceLookupTable[buf[i]];
    }
    return out;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for (var i = 0; i < bytes.length - 1; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype);
    return newBuf;
  };
  /*
  * Need to make sure that buffer isn't trying to write out of bounds.
  */
  function $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUintLE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUintBE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUint8 = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 1, this.length);
    return this[offset];
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUint16LE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUint16BE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUint32LE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUint32BE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return $acdfc070b310fb08eb6b1943e96416f7$export$read(this, offset, true, 23, 4);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 4, this.length);
    return $acdfc070b310fb08eb6b1943e96416f7$export$read(this, offset, false, 23, 4);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 8, this.length);
    return $acdfc070b310fb08eb6b1943e96416f7$export$read(this, offset, true, 52, 8);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkOffset(offset, 8, this.length);
    return $acdfc070b310fb08eb6b1943e96416f7$export$read(this, offset, false, 52, 8);
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUintLE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUintBE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUint8 = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUint16LE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUint16BE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUint32LE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUint32BE = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $77ffa64159247d8b11f13d007a4c8ef1$var$checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    $acdfc070b310fb08eb6b1943e96416f7$export$write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$writeFloat(this, value, offset, true, noAssert);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$writeFloat(this, value, offset, false, noAssert);
  };
  function $77ffa64159247d8b11f13d007a4c8ef1$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      $77ffa64159247d8b11f13d007a4c8ef1$var$checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    $acdfc070b310fb08eb6b1943e96416f7$export$write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$writeDouble(this, value, offset, true, noAssert);
  };
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $77ffa64159247d8b11f13d007a4c8ef1$var$writeDouble(this, value, offset, false, noAssert);
  };
  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
      // Use built-in when available, missing from IE11
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
  };
  // Usage:
  // buffer.fill(number[, offset[, end]])
  // buffer.fill(buffer[, offset[, end]])
  // buffer.fill(string[, offset[, end]][, encoding])
  $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !$77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
          // Fast path: If `val` fits into a single byte, use that numeric value.
          val = code;
        }
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    } else if (typeof val === 'boolean') {
      val = Number(val);
    }
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.isBuffer(val) ? val : $77ffa64159247d8b11f13d007a4c8ef1$var$Buffer.from(val, encoding);
      var len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  // HELPER FUNCTIONS
  // ================
  var $77ffa64159247d8b11f13d007a4c8ef1$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function $77ffa64159247d8b11f13d007a4c8ef1$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($77ffa64159247d8b11f13d007a4c8ef1$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          // valid lead
          leadSurrogate = codePoint;
          continue;
        }
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$base64ToBytes(str) {
    return $9048887052597cadf129168d852186ce$export$toByteArray($77ffa64159247d8b11f13d007a4c8ef1$var$base64clean(str));
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
  // the `instanceof` check but they should be treated as of that type.
  // See: https://github.com/feross/buffer/issues/166
  function $77ffa64159247d8b11f13d007a4c8ef1$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function $77ffa64159247d8b11f13d007a4c8ef1$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj;
  }
  // Create lookup table for `toString('hex')`
  // See: https://github.com/feross/buffer/issues/219
  var $77ffa64159247d8b11f13d007a4c8ef1$var$hexSliceLookupTable = (function () {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for (var i = 0; i < 16; ++i) {
      var i16 = i * 16;
      for (var j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }
    return table;
  })();
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$Buffer = $77ffa64159247d8b11f13d007a4c8ef1$export$Buffer;
  // Legacy pool support
  if (!$parcel$global.__TYPEDARRAY_POOL) {
    $parcel$global.__TYPEDARRAY_POOL = {
      UINT8: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      UINT16: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      UINT32: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      BIGUINT64: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      INT8: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      INT16: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      INT32: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      BIGINT64: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      FLOAT: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      DOUBLE: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      DATA: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      UINT8C: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]),
      BUFFER: $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0])
    };
  }
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$hasUint8C = typeof Uint8ClampedArray !== 'undefined';
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$hasBigUint64 = typeof BigUint64Array !== 'undefined';
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$hasBigInt64 = typeof BigInt64Array !== 'undefined';
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL = $parcel$global.__TYPEDARRAY_POOL;
  // Upgrade pool
  if (!$9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.UINT8C) {
    $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.UINT8C = $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]);
  }
  if (!$9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BIGUINT64) {
    $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BIGUINT64 = $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]);
  }
  if (!$9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BIGINT64) {
    $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BIGINT64 = $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]);
  }
  if (!$9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BUFFER) {
    $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BUFFER = $9c1af4ff754f57e481b8666ad1ba57e1$var$dup([32, 0]);
  }
  // New technique: Only allocate from ArrayBufferView and Buffer
  var $9c1af4ff754f57e481b8666ad1ba57e1$var$DATA = $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.DATA, $9c1af4ff754f57e481b8666ad1ba57e1$var$BUFFER = $9c1af4ff754f57e481b8666ad1ba57e1$var$POOL.BUFFER;
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$freeArrayBuffer(buffer) {
    if (!buffer) {
      return;
    }
    var n = buffer.length || buffer.byteLength;
    var log_n = $e4b97d7f1181cde6d0827a3ae309518e$export$log2(n);
    $9c1af4ff754f57e481b8666ad1ba57e1$var$DATA[log_n].push(buffer);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$freeTypedArray(array) {
    $9c1af4ff754f57e481b8666ad1ba57e1$var$freeArrayBuffer(array.buffer);
  }
  var $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint8 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint16 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint32 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeBigUint64 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt8 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt16 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeInt32 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeBigInt64 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat32 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeFloat64 = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDouble = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint8Clamped = $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDataView = $9c1af4ff754f57e481b8666ad1ba57e1$var$freeTypedArray;
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(n) {
    var n = $e4b97d7f1181cde6d0827a3ae309518e$export$nextPow2(n);
    var log_n = $e4b97d7f1181cde6d0827a3ae309518e$export$log2(n);
    var d = $9c1af4ff754f57e481b8666ad1ba57e1$var$DATA[log_n];
    if (d.length > 0) {
      return d.pop();
    }
    return new ArrayBuffer(n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint8(n) {
    return new Uint8Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint16(n) {
    return new Uint16Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(2 * n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint32(n) {
    return new Uint32Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(4 * n), 0, n);
  }
  var $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocUint32 = $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint32;
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocInt8(n) {
    return new Int8Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocInt16(n) {
    return new Int16Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(2 * n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocInt32(n) {
    return new Int32Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(4 * n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocFloat(n) {
    return new Float32Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(4 * n), 0, n);
  }
  var $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocFloat32 = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocFloat = $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocFloat;
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocDouble(n) {
    return new Float64Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(8 * n), 0, n);
  }
  var $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocFloat64 = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocDouble = $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocDouble;
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint8Clamped(n) {
    if ($9c1af4ff754f57e481b8666ad1ba57e1$var$hasUint8C) {
      return new Uint8ClampedArray($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(n), 0, n);
    } else {
      return $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocUint8(n);
    }
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocBigUint64(n) {
    if ($9c1af4ff754f57e481b8666ad1ba57e1$var$hasBigUint64) {
      return new BigUint64Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(8 * n), 0, n);
    } else {
      return null;
    }
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocBigInt64(n) {
    if ($9c1af4ff754f57e481b8666ad1ba57e1$var$hasBigInt64) {
      return new BigInt64Array($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(8 * n), 0, n);
    } else {
      return null;
    }
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocDataView(n) {
    return new DataView($9c1af4ff754f57e481b8666ad1ba57e1$var$mallocArrayBuffer(n), 0, n);
  }
  function $9c1af4ff754f57e481b8666ad1ba57e1$var$mallocBuffer(n) {
    n = $e4b97d7f1181cde6d0827a3ae309518e$export$nextPow2(n);
    var log_n = $e4b97d7f1181cde6d0827a3ae309518e$export$log2(n);
    var cache = $9c1af4ff754f57e481b8666ad1ba57e1$var$BUFFER[log_n];
    if (cache.length > 0) {
      return cache.pop();
    }
    return new $9c1af4ff754f57e481b8666ad1ba57e1$var$Buffer(n);
  }
  // ASSET: node_modules/distance-transform/lib/p1.js
  var $f55e39ec30abbfbe9f7b26da81acf430$exports = {};
  var $f55e39ec30abbfbe9f7b26da81acf430$var$abs = Math.abs;
  function $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1(a, b) {
    return $f55e39ec30abbfbe9f7b26da81acf430$var$abs(a) + $f55e39ec30abbfbe9f7b26da81acf430$var$abs(b);
  }
  function $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1_sep(i, u, g_i, g_u) {
    if (g_u >= g_i + u - i) {
      return 1 << 30;
    } else if (g_i > g_u + u - i) {
      return -(1 << 30);
    } else {
      return g_u - g_i + u + i >> 1;
    }
  }
  $f55e39ec30abbfbe9f7b26da81acf430$exports = function phase2_1(array, nrows, ncols, s, t) {
    var d, u, v, w, q, y, ptr;
    t[0] = 0;
    for (y = 0; y < nrows; ++y) {
      // Clear stack
      s[0] = q = 0;
      ptr = y * ncols;
      // First pass: generate hull
      for (u = 1; u < ncols; ++u) {
        v = array[ptr + u];
        while (q >= 0 && $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1(s[q] - t[q], array[ptr + s[q]]) > $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1(u - t[q], v)) {
          --q;
        }
        if (q < 0) {
          q = 0;
          s[0] = u;
        } else {
          w = 1 + $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1_sep(s[q], u, array[ptr + s[q]], v);
          if (w < ncols) {
            ++q;
            s[q] = u;
            t[q] = w;
          }
        }
      }
      // Second pass: fill in lower hull
      for (u = ncols - 1; u >= 0; --u) {
        d = $f55e39ec30abbfbe9f7b26da81acf430$var$dist_1(s[q] - u, array[ptr + s[q]]);
        array[u + ptr] = d;
        if (u === t[q]) {
          --q;
        }
      }
    }
  };
  var $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_1 = $f55e39ec30abbfbe9f7b26da81acf430$exports;
  // ASSET: node_modules/distance-transform/lib/p2.js
  var $30283cae02618920997c92a0ac0d02c3$exports = {};
  function $30283cae02618920997c92a0ac0d02c3$var$dist_2(a, b) {
    return a * a + b * b;
  }
  function $30283cae02618920997c92a0ac0d02c3$var$dist_2_sep(i, u, g_i, g_u) {
    return (u * u - i * i + g_u * g_u - g_i * g_i) / (2 * (u - i)) | 0;
  }
  $30283cae02618920997c92a0ac0d02c3$exports = function phase2_2(array, nrows, ncols, s, t) {
    var d, u, v, w, q, y, ptr;
    t[0] = 0;
    for (y = 0; y < nrows; ++y) {
      // Clear stack
      s[0] = q = 0;
      ptr = y * ncols;
      // First pass: generate hull
      for (u = 1; u < ncols; ++u) {
        v = array[ptr + u];
        while (q >= 0 && $30283cae02618920997c92a0ac0d02c3$var$dist_2(s[q] - t[q], array[ptr + s[q]]) > $30283cae02618920997c92a0ac0d02c3$var$dist_2(u - t[q], v)) {
          --q;
        }
        if (q < 0) {
          q = 0;
          s[0] = u;
        } else {
          w = 1 + $30283cae02618920997c92a0ac0d02c3$var$dist_2_sep(s[q], u, array[ptr + s[q]], v);
          if (w < ncols) {
            ++q;
            s[q] = u;
            t[q] = w;
          }
        }
      }
      // Second pass: fill in lower hull
      for (u = ncols - 1; u >= 0; --u) {
        d = Math.sqrt($30283cae02618920997c92a0ac0d02c3$var$dist_2(s[q] - u, array[ptr + s[q]]));
        array[u + ptr] = d;
        if (u === t[q]) {
          --q;
        }
      }
    }
  };
  var $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_2 = $30283cae02618920997c92a0ac0d02c3$exports;
  // ASSET: node_modules/distance-transform/lib/pinf.js
  var $aa2096aeed047af763db77b9890cec65$exports = {};
  var $aa2096aeed047af763db77b9890cec65$var$abs = Math.abs;
  var $aa2096aeed047af763db77b9890cec65$var$max = Math.max;
  var $aa2096aeed047af763db77b9890cec65$var$min = Math.min;
  function $aa2096aeed047af763db77b9890cec65$var$dist_inf(a, b) {
    return $aa2096aeed047af763db77b9890cec65$var$max($aa2096aeed047af763db77b9890cec65$var$abs(a), $aa2096aeed047af763db77b9890cec65$var$abs(b));
  }
  function $aa2096aeed047af763db77b9890cec65$var$dist_inf_sep(i, u, g_i, g_u) {
    if (g_i <= g_u) {
      return $aa2096aeed047af763db77b9890cec65$var$max(i + g_u, i + u >> 1);
    } else {
      return $aa2096aeed047af763db77b9890cec65$var$min(u - g_i, i + u >> 1);
    }
  }
  $aa2096aeed047af763db77b9890cec65$exports = function phase2_inf(array, nrows, ncols, s, t) {
    var d, u, v, w, q, y, ptr;
    t[0] = 0;
    for (y = 0; y < nrows; ++y) {
      // Clear stack
      s[0] = q = 0;
      ptr = y * ncols;
      // First pass: generate hull
      for (u = 1; u < ncols; ++u) {
        v = array[ptr + u];
        while (q >= 0 && $aa2096aeed047af763db77b9890cec65$var$dist_inf(s[q] - t[q], array[ptr + s[q]]) > $aa2096aeed047af763db77b9890cec65$var$dist_inf(u - t[q], v)) {
          --q;
        }
        if (q < 0) {
          q = 0;
          s[0] = u;
        } else {
          w = 1 + $aa2096aeed047af763db77b9890cec65$var$dist_inf_sep(s[q], u, array[ptr + s[q]], v);
          if (w < ncols) {
            ++q;
            s[q] = u;
            t[q] = w;
          }
        }
      }
      // Second pass: fill in lower hull
      for (u = ncols - 1; u >= 0; --u) {
        d = $aa2096aeed047af763db77b9890cec65$var$dist_inf(s[q] - u, array[ptr + s[q]]);
        array[u + ptr] = d;
        if (u === t[q]) {
          --q;
        }
      }
    }
  };
  var $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_inf = $aa2096aeed047af763db77b9890cec65$exports;
  // ASSET: node_modules/distance-transform/lib/pp.js
  var $d4d15d258e41849ecd50200eb94c5a88$exports = {};
  // ASSET: node_modules/bisect/bisect.js
  var $e7c9774afbd062ab0ef7e32be59475cd$exports = {};
  function $e7c9774afbd062ab0ef7e32be59475cd$var$bisect(pred, lo, hi, tol) {
    tol = tol || 1e-8;
    while (hi - lo > tol) {
      var m = (hi + lo) / 2;
      if (pred(m)) {
        hi = m;
      } else {
        lo = m;
      }
    }
    return lo;
  }
  $e7c9774afbd062ab0ef7e32be59475cd$exports = $e7c9774afbd062ab0ef7e32be59475cd$var$bisect;
  var $d4d15d258e41849ecd50200eb94c5a88$var$bisect = $e7c9774afbd062ab0ef7e32be59475cd$exports;
  var $d4d15d258e41849ecd50200eb94c5a88$var$pow = Math.pow;
  var $d4d15d258e41849ecd50200eb94c5a88$var$abs = Math.abs;
  var $d4d15d258e41849ecd50200eb94c5a88$var$floor = Math.floor;
  function $d4d15d258e41849ecd50200eb94c5a88$var$dist_p(a, b, p) {
    return $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(a), p) + $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(b), p);
  }
  $d4d15d258e41849ecd50200eb94c5a88$exports = function phase2_p(array, nrows, ncols, s, t, p) {
    var d, u, v, w, q, y, ptr, i, gi, gu;
    function f(x) {
      return $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(x - i), p) + $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(gi), p) > $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(x - u), p) + $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$abs(gu), p);
    }
    // Not super efficient, but good enough for now
    function dist_p_sep() {
      i = s[q];
      gi = array[ptr + i];
      gu = v;
      var t = $d4d15d258e41849ecd50200eb94c5a88$var$bisect(f, i, u + 1, 0.25);
      return Math.floor(t);
    }
    t[0] = 0;
    for (y = 0; y < nrows; ++y) {
      // Clear stack
      s[0] = q = 0;
      ptr = y * ncols;
      // First pass: generate hull
      for (u = 1; u < ncols; ++u) {
        v = array[ptr + u];
        while (q >= 0 && $d4d15d258e41849ecd50200eb94c5a88$var$dist_p(s[q] - t[q], array[ptr + s[q]], p) > $d4d15d258e41849ecd50200eb94c5a88$var$dist_p(u - t[q], v, p)) {
          --q;
        }
        if (q < 0) {
          q = 0;
          s[0] = u;
        } else {
          w = 1 + dist_p_sep();
          if (w < ncols) {
            ++q;
            s[q] = u;
            t[q] = w;
          }
        }
      }
      // Second pass: fill in lower hull
      for (u = ncols - 1; u >= 0; --u) {
        d = $d4d15d258e41849ecd50200eb94c5a88$var$pow($d4d15d258e41849ecd50200eb94c5a88$var$dist_p(s[q] - u, array[ptr + s[q]], p), 1.0 / p);
        array[u + ptr] = d;
        if (u === t[q]) {
          --q;
        }
      }
    }
  };
  var $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_p = $d4d15d258e41849ecd50200eb94c5a88$exports;
  var $e8ae97f6472f3746f501d0b1d2732b57$var$binarize = $e8ae97f6472f3746f501d0b1d2732b57$var$cwise({
    args: ["array", "array", "scalar"],
    body: function (out, a, inf) {
      out = a ? 0 : inf;
    }
  });
  function $e8ae97f6472f3746f501d0b1d2732b57$var$phase1(array, nrows, ncols) {
    var i, j, ptr = 0, d, min = Math.min;
    for (i = 0; i < nrows; ++i) {
      d = array[ptr++];
      for (j = 1; j < ncols; ++j) {
        d = min(array[ptr], d + 1);
        array[ptr++] = d;
      }
      for (j = 0; j < ncols; ++j) {
        d = min(array[--ptr], d + 1);
        array[ptr] = d;
      }
      ptr += ncols;
    }
  }
  $e8ae97f6472f3746f501d0b1d2732b57$exports = function distanceTransform(array, p) {
    var d = array.shape.length, shape = array.shape.slice(0), stride = new Array(d), size = 1, stack_size = 0, inf = 0, i, j, n, s, tmp, m;
    p = p || 2;
    for (i = d - 1; i >= 0; --i) {
      stride[i] = size;
      size *= shape[i];
      inf += shape[i];
      stack_size = Math.max(stack_size, shape[i]);
    }
    // Allocate scratch buffers
    var b0_t = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocDouble(size), b0 = $e8ae97f6472f3746f501d0b1d2732b57$var$ndarray(b0_t, shape.slice(0), stride.slice(0), 0), b1_t = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocDouble(size), b1 = $e8ae97f6472f3746f501d0b1d2732b57$var$ndarray(b1_t, shape.slice(0), stride.slice(0), 0), s_q = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocUint32(stack_size), t_q = $9c1af4ff754f57e481b8666ad1ba57e1$export$mallocUint32(stack_size);
    // Perform first phase of distance transform
    $e8ae97f6472f3746f501d0b1d2732b57$var$binarize(b0, array, inf);
    $e8ae97f6472f3746f501d0b1d2732b57$var$phase1(b0.data, size / shape[d - 1] | 0, shape[d - 1] | 0);
    // Second passes
    for (i = d - 1; i > 0; --i) {
      s = b1.stride;
      n = 1;
      for (j = i - 1; j < d; ++j) {
        s[j] = n;
        n *= shape[j];
      }
      for (j = i - 2; j >= 0; --j) {
        s[j] = n;
        n *= shape[j];
      }
      $6de3f175c0ee5fbd416455d23a1fbe7f$exports.assign(b1, b0);
      // Execute phase 2
      m = shape[i - 1];
      if (!isFinite(p)) {
        $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_inf(b1.data, size / m | 0, m | 0, s_q, t_q);
      } else if (p === 1) {
        $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_1(b1.data, size / m | 0, m | 0, s_q, t_q);
      } else if (p === 2) {
        $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_2(b1.data, size / m | 0, m | 0, s_q, t_q);
      } else if (p < 1) {
        throw new Error("Values of p < 1 are not supported");
      } else {
        $e8ae97f6472f3746f501d0b1d2732b57$var$phase2_p(b1.data, size / m | 0, m | 0, s_q, t_q, p);
      }
      // Swap buffers
      tmp = b0;
      b0 = b1;
      b1 = tmp;
    }
    // Copy b0 to result
    $6de3f175c0ee5fbd416455d23a1fbe7f$exports.assign(array, b0);
    $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDouble(b0_t);
    $9c1af4ff754f57e481b8666ad1ba57e1$export$freeDouble(b1_t);
    $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint32(s_q);
    $9c1af4ff754f57e481b8666ad1ba57e1$export$freeUint32(t_q);
    return array;
  };
  var $e8ae97f6472f3746f501d0b1d2732b57$$interop$default = /*@__PURE__*/$parcel$interopDefault($e8ae97f6472f3746f501d0b1d2732b57$exports);
  // ASSET: node_modules/@parcel/runtime-js/lib/JSRuntime.js
  var $c38224a163ab4b360be51c05c3a61cbd$exports = {};
  /*globals document:readonly*/
  var $481bf5f19ab08de2935ffb5a5afa9610$var$bundleURL = null;
  function $481bf5f19ab08de2935ffb5a5afa9610$var$getBundleURLCached() {
    if (!$481bf5f19ab08de2935ffb5a5afa9610$var$bundleURL) {
      $481bf5f19ab08de2935ffb5a5afa9610$var$bundleURL = $481bf5f19ab08de2935ffb5a5afa9610$var$getBundleURL();
    }
    return $481bf5f19ab08de2935ffb5a5afa9610$var$bundleURL;
  }
  function $481bf5f19ab08de2935ffb5a5afa9610$var$getBundleURL() {
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
      if (matches) {
        return $481bf5f19ab08de2935ffb5a5afa9610$var$getBaseURL(matches[0]);
      }
    }
    return '/';
  }
  function $481bf5f19ab08de2935ffb5a5afa9610$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
  }
  // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
  function $481bf5f19ab08de2935ffb5a5afa9610$var$getOrigin(url) {
    let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) {
      throw new Error('Origin not found');
    }
    return matches[0];
  }
  var $481bf5f19ab08de2935ffb5a5afa9610$export$getBundleURL = $481bf5f19ab08de2935ffb5a5afa9610$var$getBundleURLCached;
  // ASSET: node_modules/@parcel/runtime-js/lib/relative-path.js
  var $e1fa745c0235610f7275370f048b9446$exports = {};
  var $e1fa745c0235610f7275370f048b9446$var$resolve = $2dfff19d9cd9948e3cd060b6f19e7e0e$export$resolve;
  $e1fa745c0235610f7275370f048b9446$exports = function (fromId, toId) {
    return $e1fa745c0235610f7275370f048b9446$var$relative($e1fa745c0235610f7275370f048b9446$var$dirname($e1fa745c0235610f7275370f048b9446$var$resolve(fromId)), $e1fa745c0235610f7275370f048b9446$var$resolve(toId));
  };
  function $e1fa745c0235610f7275370f048b9446$var$dirname(_filePath) {
    if (_filePath === '') {
      return '.';
    }
    var filePath = _filePath[_filePath.length - 1] === '/' ? _filePath.slice(0, _filePath.length - 1) : _filePath;
    var slashIndex = filePath.lastIndexOf('/');
    return slashIndex === -1 ? '.' : filePath.slice(0, slashIndex);
  }
  function $e1fa745c0235610f7275370f048b9446$var$relative(from, to) {
    if (from === to) {
      return '';
    }
    var fromParts = from.split('/');
    if (fromParts[0] === '.') {
      fromParts.shift();
    }
    var toParts = to.split('/');
    if (toParts[0] === '.') {
      toParts.shift();
    }
    // Find where path segments diverge.
    var i;
    var divergeIndex;
    for (i = 0; (i < toParts.length || i < fromParts.length) && divergeIndex == null; i++) {
      if (fromParts[i] !== toParts[i]) {
        divergeIndex = i;
      }
    }
    // If there are segments from "from" beyond the point of divergence,
    // return back up the path to that point using "..".
    var parts = [];
    for (i = 0; i < fromParts.length - divergeIndex; i++) {
      parts.push('..');
    }
    // If there are segments from "to" beyond the point of divergence,
    // continue using the remaining segments.
    if (toParts.length > divergeIndex) {
      parts.push.apply(parts, toParts.slice(divergeIndex));
    }
    return parts.join('/');
  }
  var $e1fa745c0235610f7275370f048b9446$export$_dirname = $e1fa745c0235610f7275370f048b9446$var$dirname;
  $e1fa745c0235610f7275370f048b9446$exports._dirname = $e1fa745c0235610f7275370f048b9446$export$_dirname;
  var $e1fa745c0235610f7275370f048b9446$export$_relative = $e1fa745c0235610f7275370f048b9446$var$relative;
  $e1fa745c0235610f7275370f048b9446$exports._relative = $e1fa745c0235610f7275370f048b9446$export$_relative;
  $c38224a163ab4b360be51c05c3a61cbd$exports = $481bf5f19ab08de2935ffb5a5afa9610$export$getBundleURL() + $e1fa745c0235610f7275370f048b9446$exports("59UkT", "6pX4R");
  var $c38224a163ab4b360be51c05c3a61cbd$$interop$default = /*@__PURE__*/$parcel$interopDefault($c38224a163ab4b360be51c05c3a61cbd$exports);
  const $4fa137b5d57f96bb414f6c327cbd9005$var$grayCharset = ' .\'^-~*+=#';
  const $4fa137b5d57f96bb414f6c327cbd9005$var$sdfCharset = ' .\'`^_-~:+/\\|[]#';
  const $4fa137b5d57f96bb414f6c327cbd9005$var$sleep = async ms => {
    await new Promise(resolve => setTimeout(resolve, ms));
  };
  const $4fa137b5d57f96bb414f6c327cbd9005$var$font2img = async (char, charHeight) => {
    const charWidth = Math.round(charHeight / 2);
    const canvas = document.createElement('CANVAS');
    canvas.height = charHeight;
    canvas.width = charWidth;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, charWidth, charHeight);
    ctx.fillStyle = '#000000';
    ctx.font = charHeight.toString() + 'px monospace';
    ctx.textBaseline = "top";
    // change baseline property
    ctx.fillText(char, 0, 0);
    // left bottom corner
    // use the following appendChild to preview
    // document.body.appendChild(canvas);
    return ctx.getImageData(0, 0, charWidth, charHeight);
  };
  const $4fa137b5d57f96bb414f6c327cbd9005$var$img2sdf = async (data, charHeight) => {
    const charWidth = Math.round(charHeight / 2);
    const gray = data.data.reduce((r, c, i, a) => {
      if (i % 4 == 0) r.push((a[i] + a[i + 1] + a[i + 2]) / 3 < 127 ? 1 : 0);
      return r;
    }, []);
    // why less than? different lib has different def
    const inv = gray.map(g => 1 - g);
    // invert
    const sdfArray = $e8ae97f6472f3746f501d0b1d2732b57$$interop$default($c819e6fc7d8c020cdc7adf1b889fd7da$$interop$default(gray, [charHeight, charWidth])).data;
    const sdfArrayInv = $e8ae97f6472f3746f501d0b1d2732b57$$interop$default($c819e6fc7d8c020cdc7adf1b889fd7da$$interop$default(inv, [charHeight, charWidth])).data;
    let sdfArraySum = sdfArray.map((c, i) => c + sdfArrayInv[i]);
    // normalize sdfArraySum
    const m = Math.min(...sdfArraySum);
    const n = Math.max(...sdfArraySum);
    sdfArraySum = sdfArraySum.map(c => c - m);
    if (n != m) {
      sdfArraySum = sdfArraySum.map(c => c / (n - m));
    }
    const graySum = gray.reduce((r, c) => r + c, 0);
    if (graySum > 0) {
      sdfArraySum = sdfArraySum.map(c => c / (graySum / gray.length));
    }
    return sdfArraySum;
  };
  var $4fa137b5d57f96bb414f6c327cbd9005$export$default = /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.memo(() => {
    const [charSdf, setCharSdf] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState([]);
    const [charHeight, setCharHeight] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState(20);
    // pixel
    // we assume charWidth = charHeight/2
    const handleCharHeightPlus = e => {
      if (charHeight < 40) {
        setCharHeight(h => h + 1);
        setCharSdf([]);
      }
    };
    const handleCharHeightMinus = e => {
      if (charHeight > 10) {
        setCharHeight(h => h - 1);
        setCharSdf([]);
      }
    };
    $6cebeac97b4ebedf27e6f4c716f2d918$init().useEffect(() => Array.from($4fa137b5d57f96bb414f6c327cbd9005$var$sdfCharset).map(c => $4fa137b5d57f96bb414f6c327cbd9005$var$font2img(c, charHeight).then(m => $4fa137b5d57f96bb414f6c327cbd9005$var$img2sdf(m, charHeight).then(m => setCharSdf(sdf => [...sdf, [c, m]])))), [charHeight]);
    const [imgUrl, setImgUrl] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState($c38224a163ab4b360be51c05c3a61cbd$$interop$default);
    const handleUpload = e => setImgUrl(URL.createObjectURL(e.target.files[0]));
    const [imgHeight, setImgHeight] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState(0);
    const [imgWidth, setImgWidth] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState(0);
    const ctx = $6cebeac97b4ebedf27e6f4c716f2d918$init().useMemo(() => {
      if (!imgUrl) {
        return null;
      }
      const canvas = document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        setImgHeight(img.height);
        setImgWidth(img.width);
      };
      img.src = imgUrl;
      return ctx;
    }, [imgUrl]);
    const [renderNum, setRenderNum] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState(0);
    const grayRender = async (i, j) => {
      // sleep for some random time
      await $4fa137b5d57f96bb414f6c327cbd9005$var$sleep(100 * Math.random());
      const charWidth = Math.round(charHeight / 2);
      const data = ctx.getImageData(charWidth * i, charHeight * j, charWidth, charHeight).data;
      const gray = data.reduce((r, c, i, a) => {
        if (i % 4 == 0) r.push((a[i] + a[i + 1] + a[i + 2]) / 3);
        return r;
      }, []).reduce((r, c) => r + c, 0) / (data.length / 4);
      const char = $4fa137b5d57f96bb414f6c327cbd9005$var$grayCharset[Math.floor(gray / 256 * $4fa137b5d57f96bb414f6c327cbd9005$var$grayCharset.length)];
      return char;
    };
    const sdfRender = async (i, j) => {
      // sleep for some random time
      await $4fa137b5d57f96bb414f6c327cbd9005$var$sleep(100 * Math.random());
      const charWidth = Math.round(charHeight / 2);
      const imageData = ctx.getImageData(charWidth * i, charHeight * j, charWidth, charHeight);
      const sdf = await $4fa137b5d57f96bb414f6c327cbd9005$var$img2sdf(imageData, charHeight);
      return charSdf.map(([k, v]) => [k, v.map((w, i) => Math.floor(Math.abs(w - sdf[i]))).reduce((r, c) => r + c, 0)]).reduce((r, c) => r[0] ? r[1] > c[1] ? c : r : c, ['', 0])[0];
    };
    const renderFuncs = [["sdf", sdfRender], ["gray", grayRender]];
    const [renderFunc, setRenderFunc] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState(0);
    const iterateRenderFunc = e => {
      setRenderFunc(r => (r + 1) % renderFuncs.length);
    };
    const [acm, setAcm] = $6cebeac97b4ebedf27e6f4c716f2d918$init().useState([[]]);
    $6cebeac97b4ebedf27e6f4c716f2d918$init().useEffect(() => {
      if (!ctx || imgHeight == 0 || imgWidth == 0) {
        return;
      }
      const charWidth = Math.round(charHeight / 2);
      const acmHeight = Math.floor(imgHeight / charHeight);
      const acmWidth = Math.floor(imgWidth / charWidth);
      const defaultAcm = Array.from(Array(acmHeight), () => Array(acmWidth).fill('#'));
      // now copy contents of old acm
      acm.forEach((l, j) => l.forEach((c, i) => {
        if (j < acmHeight && i < acmWidth) defaultAcm[j][i] = c;
      }));
      setAcm(defaultAcm);
    }, [ctx, imgHeight, imgWidth, charHeight]);
    $6cebeac97b4ebedf27e6f4c716f2d918$init().useEffect(() => {
      if (charSdf.length != $4fa137b5d57f96bb414f6c327cbd9005$var$sdfCharset.length) {
        return;
      }
      // do not render when charSdf is not ready
      acm.forEach((l, j) => l.forEach((c, i) => renderFuncs[renderFunc][1](i, j).then(m => {
        acm[j][i] = m;
        setRenderNum(n => n + 1);
      })));
    }, [acm, charSdf, renderFunc]);
    return (
      /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "tool"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("h2", null, "Input Image"), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "content"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("label", {
        htmlFor: "imgfile",
        className: "img-input-label"
      }, imgUrl), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("input", {
        id: "imgfile",
        type: "file",
        accept: "image/*",
        onChange: handleUpload,
        className: "img-input"
      })), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("h2", null, "Font Size"), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "content"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("span", null, charHeight), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("span", {
        className: "button",
        onClick: handleCharHeightPlus
      }, "+"), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("span", {
        className: "button",
        onClick: handleCharHeightMinus
      }, "-")), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("h2", null, "Render Method"), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "content"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("span", null, renderFuncs[renderFunc][0]), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("span", {
        className: "button",
        onClick: iterateRenderFunc
      }, "+")), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("h2", null, "Rendered"), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "content"
      }, renderNum), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "display"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "dst-acm"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("pre", null, acm.map(l => l.join('')).join('\n'))), /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("div", {
        className: "src-img"
      }, /*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement("img", {
        src: imgUrl
      }))))
    );
  });
  function $4b1ffdda2a341722ebd790ffdb86b047$var$bootstrap() {
    console.log('Meow: bootstrap');
    $008ae6230b404256eda73aa4f5097092$$interop$default.render(/*#__PURE__*/$6cebeac97b4ebedf27e6f4c716f2d918$$interop$default.createElement($4fa137b5d57f96bb414f6c327cbd9005$export$default, null), document.getElementById('app'));
  }
  window.addEventListener('DOMContentLoaded', $4b1ffdda2a341722ebd790ffdb86b047$var$bootstrap);
})();

