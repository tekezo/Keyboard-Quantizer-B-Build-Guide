!(function () {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  var t,
    n,
    r,
    a,
    l = !1;
  function o(e) {
    if (null == e)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    return Object(e);
  }
  function i() {
    (t = {}),
      (n = Object.getOwnPropertySymbols),
      (r = Object.prototype.hasOwnProperty),
      (a = Object.prototype.propertyIsEnumerable),
      (t = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var l, i, u = o(e), s = 1; s < arguments.length; s++) {
              for (var c in (l = Object(arguments[s])))
                r.call(l, c) && (u[c] = l[c]);
              if (n) {
                i = n(l);
                for (var f = 0; f < i.length; f++)
                  a.call(l, i[f]) && (u[i[f]] = l[i[f]]);
              }
            }
            return u;
          });
  }
  function u() {
    return l || ((l = !0), i()), t;
  }
  var s,
    c,
    f,
    d,
    p,
    h,
    m,
    g,
    y,
    v,
    b,
    w,
    k,
    E,
    S,
    C,
    _,
    x,
    P,
    N,
    T,
    R,
    z,
    O,
    L,
    I,
    D,
    M,
    F,
    A,
    U,
    j,
    B,
    q,
    V,
    H,
    W,
    $,
    Q,
    G,
    K,
    X,
    Y,
    J,
    Z,
    ee,
    te,
    ne = !1;
  function re(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function ae(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = _),
      (this.updater = n || C);
  }
  function le() {}
  function oe(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = _),
      (this.updater = n || C);
  }
  function ie(e, t, n) {
    var r,
      a = {},
      l = null,
      o = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (o = t.ref),
      void 0 !== t.key && (l = "" + t.key),
      t))
        N.call(t, r) && !T.hasOwnProperty(r) && (a[r] = t[r]);
    var i = arguments.length - 2;
    if (1 === i) a.children = n;
    else if (1 < i) {
      for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
      a.children = u;
    }
    if (e && e.defaultProps)
      for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
    return {
      $$typeof: f,
      type: e,
      key: l,
      ref: o,
      props: a,
      _owner: P.current,
    };
  }
  function ue(e) {
    return "object" == typeof e && null !== e && e.$$typeof === f;
  }
  function se(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function ce(e, t, n, r, a) {
    var l = typeof e;
    ("undefined" !== l && "boolean" !== l) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
      switch (l) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case f:
            case d:
              o = !0;
          }
      }
    if (o)
      return (
        (a = a((o = e))),
        (e = "" === r ? "." + se(o, 0) : r),
        Array.isArray(a)
          ? ((n = ""),
            null != e && (n = e.replace(R, "$&/") + "/"),
            ce(a, t, n, "", function (e) {
              return e;
            }))
          : null != a &&
            (ue(a) &&
              (a = (function (e, t) {
                return {
                  $$typeof: f,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                a,
                n +
                  (!a.key || (o && o.key === a.key)
                    ? ""
                    : ("" + a.key).replace(R, "$&/") + "/") +
                  e
              )),
            t.push(a)),
        1
      );
    if (((o = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
      for (var i = 0; i < e.length; i++) {
        var u = r + se((l = e[i]), i);
        o += ce(l, t, n, u, a);
      }
    else if (
      "function" ==
      typeof (u = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (S && e[S]) || e["@@iterator"])
          ? e
          : null;
      })(e))
    )
      for (e = u.call(e), i = 0; !(l = e.next()).done; )
        o += ce((l = l.value), t, n, (u = r + se(l, i++)), a);
    else if ("object" === l)
      throw (
        ((t = "" + e),
        Error(
          re(
            31,
            "[object Object]" === t
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ))
      );
    return o;
  }
  function fe(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      ce(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function de(e) {
    if (-1 === e._status) {
      var t = e._result;
      (t = t()),
        (e._status = 0),
        (e._result = t),
        t.then(
          function (t) {
            0 === e._status &&
              ((t = t.default), (e._status = 1), (e._result = t));
          },
          function (t) {
            0 === e._status && ((e._status = 2), (e._result = t));
          }
        );
    }
    if (1 === e._status) return e._result;
    throw e._result;
  }
  function pe() {
    var e = z.current;
    if (null === e) throw Error(re(321));
    return e;
  }
  function he() {
    return (
      ne ||
        ((ne = !0),
        (s = {}),
        (c = u()),
        (f = 60103),
        (d = 60106),
        (p = 60107),
        (s.Fragment = p),
        (h = 60108),
        (s.StrictMode = h),
        (m = 60114),
        (s.Profiler = m),
        (g = 60109),
        (y = 60110),
        (v = 60112),
        (b = 60113),
        (s.Suspense = b),
        (w = 60115),
        (k = 60116),
        "function" == typeof Symbol &&
          Symbol.for &&
          ((E = Symbol.for),
          (f = E("react.element")),
          (d = E("react.portal")),
          (p = E("react.fragment")),
          (s.Fragment = p),
          (h = E("react.strict_mode")),
          (s.StrictMode = h),
          (m = E("react.profiler")),
          (s.Profiler = m),
          (g = E("react.provider")),
          (y = E("react.context")),
          (v = E("react.forward_ref")),
          (b = E("react.suspense")),
          (s.Suspense = b),
          (w = E("react.memo")),
          (k = E("react.lazy"))),
        (S = "function" == typeof Symbol && Symbol.iterator),
        (C = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        }),
        (_ = {}),
        (ae.prototype.isReactComponent = {}),
        (ae.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(re(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (ae.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (le.prototype = ae.prototype),
        ((x = oe.prototype = new le()).constructor = oe),
        c(x, ae.prototype),
        (x.isPureReactComponent = !0),
        (P = { current: null }),
        (N = Object.prototype.hasOwnProperty),
        (T = { key: !0, ref: !0, __self: !0, __source: !0 }),
        (R = /\/+/g),
        (O = {
          ReactCurrentDispatcher: (z = { current: null }),
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: P,
          IsSomeRendererActing: { current: !1 },
          assign: c,
        }),
        (L = {
          map: fe,
          forEach: function (e, t, n) {
            fe(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              fe(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              fe(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!ue(e)) throw Error(re(143));
            return e;
          },
        }),
        (s.Children = L),
        (I = ae),
        (s.Component = I),
        (D = oe),
        (s.PureComponent = D),
        (M = O),
        (s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
        (F = function (e, t, n) {
          if (null == e) throw Error(re(267, e));
          var r = c({}, e.props),
            a = e.key,
            l = e.ref,
            o = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (o = P.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var i = e.type.defaultProps;
            for (u in t)
              N.call(t, u) &&
                !T.hasOwnProperty(u) &&
                (r[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) r.children = n;
          else if (1 < u) {
            i = Array(u);
            for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
            r.children = i;
          }
          return {
            $$typeof: f,
            type: e.type,
            key: a,
            ref: l,
            props: r,
            _owner: o,
          };
        }),
        (s.cloneElement = F),
        (A = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: y,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: g, _context: e }),
            (e.Consumer = e)
          );
        }),
        (s.createContext = A),
        (U = ie),
        (s.createElement = U),
        (j = function (e) {
          var t = ie.bind(null, e);
          return (t.type = e), t;
        }),
        (s.createFactory = j),
        (B = function () {
          return { current: null };
        }),
        (s.createRef = B),
        (q = function (e) {
          return { $$typeof: v, render: e };
        }),
        (s.forwardRef = q),
        (V = ue),
        (s.isValidElement = V),
        (H = function (e) {
          return {
            $$typeof: k,
            _payload: { _status: -1, _result: e },
            _init: de,
          };
        }),
        (s.lazy = H),
        (W = function (e, t) {
          return { $$typeof: w, type: e, compare: void 0 === t ? null : t };
        }),
        (s.memo = W),
        ($ = function (e, t) {
          return pe().useCallback(e, t);
        }),
        (s.useCallback = $),
        (Q = function (e, t) {
          return pe().useContext(e, t);
        }),
        (s.useContext = Q),
        (G = function () {}),
        (s.useDebugValue = G),
        (K = function (e, t) {
          return pe().useEffect(e, t);
        }),
        (s.useEffect = K),
        (X = function (e, t, n) {
          return pe().useImperativeHandle(e, t, n);
        }),
        (s.useImperativeHandle = X),
        (Y = function (e, t) {
          return pe().useLayoutEffect(e, t);
        }),
        (s.useLayoutEffect = Y),
        (J = function (e, t) {
          return pe().useMemo(e, t);
        }),
        (s.useMemo = J),
        (Z = function (e, t, n) {
          return pe().useReducer(e, t, n);
        }),
        (s.useReducer = Z),
        (ee = function (e) {
          return pe().useRef(e);
        }),
        (s.useRef = ee),
        (te = function (e) {
          return pe().useState(e);
        }),
        (s.useState = te),
        "17.0.2",
        (s.version = "17.0.2")),
      s
    );
  }
  var me,
    ge = !1;
  function ye() {
    return ge || ((ge = !0), (me = {}), (me = he())), me;
  }
  ye();
  var ve,
    be,
    we,
    ke,
    Ee,
    Se,
    Ce,
    _e,
    xe,
    Pe,
    Ne,
    Te,
    Re,
    ze,
    Oe,
    Le,
    Ie,
    De,
    Me,
    Fe,
    Ae,
    Ue,
    je,
    Be,
    qe,
    Ve,
    He,
    We,
    $e,
    Qe,
    Ge,
    Ke,
    Xe,
    Ye,
    Je,
    Ze,
    et,
    tt,
    nt,
    rt,
    at,
    lt,
    ot,
    it = !1;
  function ut(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = (n - 1) >>> 1,
        a = e[r];
      if (!(void 0 !== a && 0 < ft(a, t))) break e;
      (e[r] = t), (e[n] = a), (n = r);
    }
  }
  function st(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function ct(e) {
    var t = e[0];
    if (void 0 !== t) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, a = e.length; r < a; ) {
          var l = 2 * (r + 1) - 1,
            o = e[l],
            i = l + 1,
            u = e[i];
          if (void 0 !== o && 0 > ft(o, n))
            void 0 !== u && 0 > ft(u, o)
              ? ((e[r] = u), (e[i] = n), (r = i))
              : ((e[r] = o), (e[l] = n), (r = l));
          else {
            if (!(void 0 !== u && 0 > ft(u, n))) break e;
            (e[r] = u), (e[i] = n), (r = i);
          }
        }
      }
      return t;
    }
    return null;
  }
  function ft(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  function dt(e) {
    for (var t = st(Ve); null !== t; ) {
      if (null === t.callback) ct(Ve);
      else {
        if (!(t.startTime <= e)) break;
        ct(Ve), (t.sortIndex = t.expirationTime), ut(qe, t);
      }
      t = st(Ve);
    }
  }
  function pt(e) {
    if (((Ke = !1), dt(e), !Ge))
      if (null !== st(qe)) (Ge = !0), Ee(ht);
      else {
        var t = st(Ve);
        null !== t && Se(pt, t.startTime - e);
      }
  }
  function ht(e, t) {
    (Ge = !1), Ke && ((Ke = !1), Ce()), (Qe = !0);
    var n = $e;
    try {
      for (
        dt(t), We = st(qe);
        null !== We && (!(We.expirationTime > t) || (e && !be()));

      ) {
        var r = We.callback;
        if ("function" == typeof r) {
          (We.callback = null), ($e = We.priorityLevel);
          var a = r(We.expirationTime <= t);
          (t = ve()),
            "function" == typeof a
              ? (We.callback = a)
              : We === st(qe) && ct(qe),
            dt(t);
        } else ct(qe);
        We = st(qe);
      }
      if (null !== We) var l = !0;
      else {
        var o = st(Ve);
        null !== o && Se(pt, o.startTime - t), (l = !1);
      }
      return l;
    } finally {
      (We = null), ($e = n), (Qe = !1);
    }
  }
  function mt() {
    return (
      it ||
        ((it = !0),
        (ke = {}),
        "object" == typeof performance && "function" == typeof performance.now
          ? ((xe = performance),
            (ve = function () {
              return xe.now();
            }),
            (ke.unstable_now = ve))
          : ((Pe = Date),
            (Ne = Pe.now()),
            (ve = function () {
              return Pe.now() - Ne;
            }),
            (ke.unstable_now = ve)),
        "undefined" == typeof window || "function" != typeof MessageChannel
          ? ((Te = null),
            (Re = null),
            (ze = function () {
              if (null !== Te)
                try {
                  var e = ve();
                  Te(!0, e), (Te = null);
                } catch (e) {
                  throw (setTimeout(ze, 0), e);
                }
            }),
            (Ee = function (e) {
              null !== Te
                ? setTimeout(Ee, 0, e)
                : ((Te = e), setTimeout(ze, 0));
            }),
            (Se = function (e, t) {
              Re = setTimeout(e, t);
            }),
            (Ce = function () {
              clearTimeout(Re);
            }),
            (be = function () {
              return !1;
            }),
            (ke.unstable_shouldYield = be),
            (we = function () {}),
            (_e = ke.unstable_forceFrameRate = we))
          : ((Oe = window.setTimeout),
            (Le = window.clearTimeout),
            "undefined" != typeof console &&
              ((Ie = window.cancelAnimationFrame),
              "function" != typeof window.requestAnimationFrame &&
                console.error(
                  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                ),
              "function" != typeof Ie &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                )),
            (De = !1),
            (Me = null),
            (Fe = -1),
            (Ae = 5),
            (Ue = 0),
            (be = function () {
              return ve() >= Ue;
            }),
            (ke.unstable_shouldYield = be),
            (_e = function () {}),
            (we = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (Ae = 0 < e ? Math.floor(1e3 / e) : 5);
            }),
            (ke.unstable_forceFrameRate = we),
            (je = new MessageChannel()),
            (Be = je.port2),
            (je.port1.onmessage = function () {
              if (null !== Me) {
                var e = ve();
                Ue = e + Ae;
                try {
                  Me(!0, e) ? Be.postMessage(null) : ((De = !1), (Me = null));
                } catch (e) {
                  throw (Be.postMessage(null), e);
                }
              } else De = !1;
            }),
            (Ee = function (e) {
              (Me = e), De || ((De = !0), Be.postMessage(null));
            }),
            (Se = function (e, t) {
              Fe = Oe(function () {
                e(ve());
              }, t);
            }),
            (Ce = function () {
              Le(Fe), (Fe = -1);
            })),
        (qe = []),
        (Ve = []),
        (He = 1),
        (We = null),
        ($e = 3),
        (Qe = !1),
        (Ge = !1),
        (Ke = !1),
        (Xe = _e),
        5,
        (ke.unstable_IdlePriority = 5),
        1,
        (ke.unstable_ImmediatePriority = 1),
        4,
        (ke.unstable_LowPriority = 4),
        3,
        (ke.unstable_NormalPriority = 3),
        null,
        (ke.unstable_Profiling = null),
        2,
        (ke.unstable_UserBlockingPriority = 2),
        (Ye = function (e) {
          e.callback = null;
        }),
        (ke.unstable_cancelCallback = Ye),
        (Je = function () {
          Ge || Qe || ((Ge = !0), Ee(ht));
        }),
        (ke.unstable_continueExecution = Je),
        (Ze = function () {
          return $e;
        }),
        (ke.unstable_getCurrentPriorityLevel = Ze),
        (et = function () {
          return st(qe);
        }),
        (ke.unstable_getFirstCallbackNode = et),
        (tt = function (e) {
          switch ($e) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = $e;
          }
          var n = $e;
          $e = t;
          try {
            return e();
          } finally {
            $e = n;
          }
        }),
        (ke.unstable_next = tt),
        (nt = function () {}),
        (ke.unstable_pauseExecution = nt),
        (rt = Xe),
        (ke.unstable_requestPaint = rt),
        (at = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = $e;
          $e = e;
          try {
            return t();
          } finally {
            $e = n;
          }
        }),
        (ke.unstable_runWithPriority = at),
        (lt = function (e, t, n) {
          var r = ve();
          switch (
            ((n =
              "object" == typeof n &&
              null !== n &&
              "number" == typeof (n = n.delay) &&
              0 < n
                ? r + n
                : r),
            e)
          ) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 1073741823;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return (
            (e = {
              id: He++,
              callback: t,
              priorityLevel: e,
              startTime: n,
              expirationTime: (a = n + a),
              sortIndex: -1,
            }),
            n > r
              ? ((e.sortIndex = n),
                ut(Ve, e),
                null === st(qe) &&
                  e === st(Ve) &&
                  (Ke ? Ce() : (Ke = !0), Se(pt, n - r)))
              : ((e.sortIndex = a), ut(qe, e), Ge || Qe || ((Ge = !0), Ee(ht))),
            e
          );
        }),
        (ke.unstable_scheduleCallback = lt),
        (ot = function (e) {
          var t = $e;
          return function () {
            var n = $e;
            $e = t;
            try {
              return e.apply(this, arguments);
            } finally {
              $e = n;
            }
          };
        }),
        (ke.unstable_wrapCallback = ot)),
      ke
    );
  }
  var gt,
    yt = !1;
  function vt() {
    return yt || ((yt = !0), (gt = {}), (gt = mt())), gt;
  }
  var bt,
    wt,
    kt,
    Et,
    St,
    Ct,
    _t,
    xt,
    Pt,
    Nt,
    Tt,
    Rt,
    zt,
    Ot,
    Lt,
    It,
    Dt,
    Mt,
    Ft,
    At,
    Ut,
    jt,
    Bt,
    qt,
    Vt,
    Ht,
    Wt,
    $t,
    Qt,
    Gt,
    Kt,
    Xt,
    Yt,
    Jt,
    Zt,
    en,
    tn,
    nn,
    rn,
    an,
    ln,
    on,
    un,
    sn,
    cn,
    fn,
    dn,
    pn,
    hn,
    mn,
    gn,
    yn,
    vn,
    bn,
    wn,
    kn,
    En,
    Sn,
    Cn,
    _n,
    xn,
    Pn,
    Nn,
    Tn,
    Rn,
    zn,
    On,
    Ln,
    In,
    Dn,
    Mn,
    Fn,
    An,
    Un,
    jn,
    Bn,
    qn,
    Vn,
    Hn,
    Wn,
    $n,
    Qn,
    Gn,
    Kn,
    Xn,
    Yn,
    Jn,
    Zn,
    er,
    tr,
    nr,
    rr,
    ar,
    lr,
    or,
    ir,
    ur,
    sr,
    cr,
    fr,
    dr,
    pr,
    hr,
    mr,
    gr,
    yr,
    vr,
    br,
    wr,
    kr,
    Er,
    Sr,
    Cr,
    _r,
    xr,
    Pr,
    Nr,
    Tr,
    Rr,
    zr,
    Or,
    Lr,
    Ir,
    Dr,
    Mr,
    Fr,
    Ar,
    Ur,
    jr,
    Br,
    qr,
    Vr,
    Hr,
    Wr,
    $r,
    Qr,
    Gr,
    Kr,
    Xr,
    Yr,
    Jr,
    Zr,
    ea,
    ta,
    na,
    ra,
    aa,
    la,
    oa,
    ia,
    ua,
    sa,
    ca,
    fa,
    da,
    pa,
    ha,
    ma,
    ga,
    ya,
    va,
    ba,
    wa,
    ka,
    Ea,
    Sa,
    Ca,
    _a,
    xa,
    Pa,
    Na,
    Ta,
    Ra,
    za,
    Oa,
    La,
    Ia,
    Da,
    Ma,
    Fa,
    Aa,
    Ua,
    ja,
    Ba,
    qa,
    Va,
    Ha,
    Wa,
    $a,
    Qa,
    Ga,
    Ka,
    Xa,
    Ya,
    Ja,
    Za,
    el,
    tl,
    nl,
    rl,
    al,
    ll,
    ol,
    il,
    ul,
    sl,
    cl,
    fl,
    dl,
    pl,
    hl,
    ml,
    gl,
    yl,
    vl,
    bl,
    wl,
    kl,
    El,
    Sl,
    Cl,
    _l,
    xl,
    Pl,
    Nl,
    Tl,
    Rl,
    zl,
    Ol,
    Ll,
    Il,
    Dl,
    Ml,
    Fl,
    Al,
    Ul,
    jl,
    Bl,
    ql,
    Vl,
    Hl,
    Wl,
    $l,
    Ql,
    Gl,
    Kl,
    Xl,
    Yl,
    Jl,
    Zl,
    eo,
    to,
    no,
    ro,
    ao,
    lo,
    oo,
    io,
    uo,
    so,
    co,
    fo,
    po,
    ho,
    mo,
    go,
    yo,
    vo,
    bo,
    wo,
    ko,
    Eo,
    So,
    Co = !1;
  function _o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function xo(e, t) {
    Po(e, t), Po(e + "Capture", t);
  }
  function Po(e, t) {
    for (St[e] = t, e = 0; e < t.length; e++) Et.add(t[e]);
  }
  function No(e, t, n, r, a, l, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = o);
  }
  function To(e) {
    return e[1].toUpperCase();
  }
  function Ro(e, t, n, r) {
    var a = Tt.hasOwnProperty(t) ? Tt[t] : null;
    (null !== a
      ? 0 === a.type
      : !r &&
        2 < t.length &&
        ("o" === t[0] || "O" === t[0]) &&
        ("n" === t[1] || "N" === t[1])) ||
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, a, r) && (n = null),
      r || null === a
        ? (function (e) {
            return (
              !!xt.call(Nt, e) ||
              (!xt.call(Pt, e) &&
                (_t.test(e) ? (Nt[e] = !0) : ((Pt[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : a.mustUseProperty
        ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
        : ((t = a.attributeName),
          (r = a.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  function zo(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (Xt && e[Xt]) || e["@@iterator"])
      ? e
      : null;
  }
  function Oo(e) {
    if (void 0 === Yt)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Yt = (t && t[1]) || "";
      }
    return "\n" + Yt + e;
  }
  function Lo(e, t) {
    if (!e || Jt) return "";
    Jt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (e) {
      if (e && r && "string" == typeof e.stack) {
        for (
          var a = e.stack.split("\n"),
            l = r.stack.split("\n"),
            o = a.length - 1,
            i = l.length - 1;
          1 <= o && 0 <= i && a[o] !== l[i];

        )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (a[o] !== l[i]) {
            if (1 !== o || 1 !== i)
              do {
                if ((o--, 0 > --i || a[o] !== l[i]))
                  return "\n" + a[o].replace(" at new ", " at ");
              } while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      (Jt = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Oo(e) : "";
  }
  function Io(e) {
    switch (e.tag) {
      case 5:
        return Oo(e.type);
      case 16:
        return Oo("Lazy");
      case 13:
        return Oo("Suspense");
      case 19:
        return Oo("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Lo(e.type, !1));
      case 11:
        return (e = Lo(e.type.render, !1));
      case 22:
        return (e = Lo(e.type._render, !1));
      case 1:
        return (e = Lo(e.type, !0));
      default:
        return "";
    }
  }
  function Do(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case It:
        return "Fragment";
      case Lt:
        return "Portal";
      case Mt:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case jt:
        return "Suspense";
      case Bt:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case At:
          return (e.displayName || "Context") + ".Consumer";
        case Ft:
          return (e._context.displayName || "Context") + ".Provider";
        case Ut:
          var t = e.render;
          return (
            (t = t.displayName || t.name || ""),
            e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
          );
        case qt:
          return Do(e.type);
        case Ht:
          return Do(e._render);
        case Vt:
          (t = e._payload), (e = e._init);
          try {
            return Do(e(t));
          } catch (e) {}
      }
    return null;
  }
  function Mo(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e;
      default:
        return "";
    }
  }
  function Fo(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function Ao(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = Fo(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            l = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                (r = "" + e), l.call(this, e);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      })(e));
  }
  function Uo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Fo(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function jo(e) {
    if (
      void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function Bo(e, t) {
    var n = t.checked;
    return kt({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function qo(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Mo(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function Vo(e, t) {
    null != (t = t.checked) && Ro(e, "checked", t, !1);
  }
  function Ho(e, t) {
    Vo(e, t);
    var n = Mo(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? $o(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && $o(e, t.type, Mo(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Wo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    "" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n);
  }
  function $o(e, t, n) {
    ("number" === t && jo(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  function Qo(e, t) {
    return (
      (e = kt({ children: void 0 }, t)),
      (t = (function (e) {
        var t = "";
        return (
          wt.Children.forEach(e, function (e) {
            null != e && (t += e);
          }),
          t
        );
      })(t.children)) && (e.children = t),
      e
    );
  }
  function Go(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        (a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Mo(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function Ko(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(_o(91));
    return kt({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Xo(e, t) {
    var n = t.value;
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(_o(92));
        if (Array.isArray(n)) {
          if (!(1 >= n.length)) throw Error(_o(93));
          n = n[0];
        }
        t = n;
      }
      null == t && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Mo(n) };
  }
  function Yo(e, t) {
    var n = Mo(t.value),
      r = Mo(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function Jo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function Zo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ei(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? Zo(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  function ti(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  function ni(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (nn.hasOwnProperty(e) && nn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ri(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = ni(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
      }
  }
  function ai(e, t) {
    if (t) {
      if (an[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(_o(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(_o(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(_o(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(_o(62));
    }
  }
  function li(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
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
  function oi(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  function ii(e) {
    if ((e = Au(e))) {
      if ("function" != typeof ln) throw Error(_o(280));
      var t = e.stateNode;
      t && ((t = ju(t)), ln(e.stateNode, e.type, t));
    }
  }
  function ui(e) {
    on ? (un ? un.push(e) : (un = [e])) : (on = e);
  }
  function si() {
    if (on) {
      var e = on,
        t = un;
      if (((un = on = null), ii(e), t)) for (e = 0; e < t.length; e++) ii(t[e]);
    }
  }
  function ci(e, t) {
    return e(t);
  }
  function fi(e, t, n, r, a) {
    return e(t, n, r, a);
  }
  function di() {}
  function pi() {
    (null === on && null === un) || (di(), si());
  }
  function hi(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = ju(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) ||
          (r = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(_o(231, t, typeof n));
    return n;
  }
  function mi(e, t, n, r, a, l, o, i, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (e) {
      this.onError(e);
    }
  }
  function gi(e, t, n, r, a, l, o, i, u) {
    (hn = !1), (mn = null), mi.apply(vn, arguments);
  }
  function yi(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function vi(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function bi(e) {
    if (yi(e) !== e) throw Error(_o(188));
  }
  function wi(e) {
    if (
      !(e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = yi(e))) throw Error(_o(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var a = n.return;
          if (null === a) break;
          var l = a.alternate;
          if (null === l) {
            if (null !== (r = a.return)) {
              n = r;
              continue;
            }
            break;
          }
          if (a.child === l.child) {
            for (l = a.child; l; ) {
              if (l === n) return bi(a), e;
              if (l === r) return bi(a), t;
              l = l.sibling;
            }
            throw Error(_o(188));
          }
          if (n.return !== r.return) (n = a), (r = l);
          else {
            for (var o = !1, i = a.child; i; ) {
              if (i === n) {
                (o = !0), (n = a), (r = l);
                break;
              }
              if (i === r) {
                (o = !0), (r = a), (n = l);
                break;
              }
              i = i.sibling;
            }
            if (!o) {
              for (i = l.child; i; ) {
                if (i === n) {
                  (o = !0), (n = l), (r = a);
                  break;
                }
                if (i === r) {
                  (o = !0), (r = l), (n = a);
                  break;
                }
                i = i.sibling;
              }
              if (!o) throw Error(_o(189));
            }
          }
          if (n.alternate !== r) throw Error(_o(190));
        }
        if (3 !== n.tag) throw Error(_o(188));
        return n.stateNode.current === n ? e : t;
      })(e))
    )
      return null;
    for (var t = e; ; ) {
      if (5 === t.tag || 6 === t.tag) return t;
      if (t.child) (t.child.return = t), (t = t.child);
      else {
        if (t === e) break;
        for (; !t.sibling; ) {
          if (!t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return null;
  }
  function ki(e, t) {
    for (var n = e.alternate; null !== t; ) {
      if (t === e || t === n) return !0;
      t = t.return;
    }
    return !1;
  }
  function Ei(e, t, n, r, a) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: 16 | n,
      nativeEvent: a,
      targetContainers: [r],
    };
  }
  function Si(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _n = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(t.pointerId);
    }
  }
  function Ci(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
      ? ((e = Ei(t, n, r, a, l)),
        null !== t && null !== (t = Au(t)) && wn(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function _i(e) {
    var t = Fu(e.target);
    if (null !== t) {
      var n = yi(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = vi(n)))
            return (
              (e.blockedOn = t),
              void En(e.lanePriority, function () {
                vt().unstable_runWithPriority(e.priority, function () {
                  kn(n);
                });
              })
            );
        } else if (3 === t && n.stateNode.hydrate)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function xi(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = Au(n)) && wn(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Pi(e, t, n) {
    xi(e) && n.delete(t);
  }
  function Ni() {
    for (Sn = !1; 0 < Cn.length; ) {
      var e = Cn[0];
      if (null !== e.blockedOn) {
        null !== (e = Au(e.blockedOn)) && bn(e);
        break;
      }
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) {
          e.blockedOn = n;
          break;
        }
        t.shift();
      }
      null === e.blockedOn && Cn.shift();
    }
    null !== _n && xi(_n) && (_n = null),
      null !== xn && xi(xn) && (xn = null),
      null !== Pn && xi(Pn) && (Pn = null),
      Nn.forEach(Pi),
      Tn.forEach(Pi);
  }
  function Ti(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Sn ||
        ((Sn = !0),
        vt().unstable_scheduleCallback(vt().unstable_NormalPriority, Ni)));
  }
  function Ri(e) {
    function t(t) {
      return Ti(t, e);
    }
    if (0 < Cn.length) {
      Ti(Cn[0], e);
      for (var n = 1; n < Cn.length; n++) {
        var r = Cn[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== _n && Ti(_n, e),
        null !== xn && Ti(xn, e),
        null !== Pn && Ti(Pn, e),
        Nn.forEach(t),
        Tn.forEach(t),
        n = 0;
      n < Rn.length;
      n++
    )
      (r = Rn[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && null === (n = Rn[0]).blockedOn; )
      _i(n), null === n.blockedOn && Rn.shift();
  }
  function zi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  function Oi(e) {
    if (Ln[e]) return Ln[e];
    if (!On[e]) return e;
    var t,
      n = On[e];
    for (t in n) if (n.hasOwnProperty(t) && t in In) return (Ln[e] = n[t]);
    return e;
  }
  function Li(e, t) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n],
        a = e[n + 1];
      (a = "on" + (a[0].toUpperCase() + a.slice(1))),
        jn.set(r, t),
        Un.set(r, a),
        xo(a, [r]);
    }
  }
  function Ii(e) {
    if (0 != (1 & e)) return (qn = 15), 1;
    if (0 != (2 & e)) return (qn = 14), 2;
    if (0 != (4 & e)) return (qn = 13), 4;
    var t = 24 & e;
    return 0 !== t
      ? ((qn = 12), t)
      : 0 != (32 & e)
      ? ((qn = 11), 32)
      : 0 !== (t = 192 & e)
      ? ((qn = 10), t)
      : 0 != (256 & e)
      ? ((qn = 9), 256)
      : 0 !== (t = 3584 & e)
      ? ((qn = 8), t)
      : 0 != (4096 & e)
      ? ((qn = 7), 4096)
      : 0 !== (t = 4186112 & e)
      ? ((qn = 6), t)
      : 0 !== (t = 62914560 & e)
      ? ((qn = 5), t)
      : 67108864 & e
      ? ((qn = 4), 67108864)
      : 0 != (134217728 & e)
      ? ((qn = 3), 134217728)
      : 0 !== (t = 805306368 & e)
      ? ((qn = 2), t)
      : 0 != (1073741824 & e)
      ? ((qn = 1), 1073741824)
      : ((qn = 8), e);
  }
  function Di(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return (qn = 0);
    var r = 0,
      a = 0,
      l = e.expiredLanes,
      o = e.suspendedLanes,
      i = e.pingedLanes;
    if (0 !== l) (r = l), (a = qn = 15);
    else if (0 !== (l = 134217727 & n)) {
      var u = l & ~o;
      0 !== u
        ? ((r = Ii(u)), (a = qn))
        : 0 !== (i &= l) && ((r = Ii(i)), (a = qn));
    } else
      0 !== (l = n & ~o)
        ? ((r = Ii(l)), (a = qn))
        : 0 !== i && ((r = Ii(i)), (a = qn));
    if (0 === r) return 0;
    if (
      ((r = n & (((0 > (r = 31 - Vn(r)) ? 0 : 1 << r) << 1) - 1)),
      0 !== t && t !== r && 0 == (t & o))
    ) {
      if ((Ii(t), a <= qn)) return t;
      qn = a;
    }
    if (0 !== (t = e.entangledLanes))
      for (e = e.entanglements, t &= r; 0 < t; )
        (a = 1 << (n = 31 - Vn(t))), (r |= e[n]), (t &= ~a);
    return r;
  }
  function Mi(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function Fi(e, t) {
    switch (e) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return 0 === (e = Ai(24 & ~t)) ? Fi(10, t) : e;
      case 10:
        return 0 === (e = Ai(192 & ~t)) ? Fi(8, t) : e;
      case 8:
        return (
          0 === (e = Ai(3584 & ~t)) &&
            0 === (e = Ai(4186112 & ~t)) &&
            (e = 512),
          e
        );
      case 2:
        return 0 === (t = Ai(805306368 & ~t)) && (t = 268435456), t;
    }
    throw Error(_o(358, e));
  }
  function Ai(e) {
    return e & -e;
  }
  function Ui(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ji(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    (e.suspendedLanes &= r),
      (e.pingedLanes &= r),
      ((e = e.eventTimes)[(t = 31 - Vn(t))] = n);
  }
  function Bi(e) {
    return 0 === e ? 32 : (31 - ((Hn(e) / Wn) | 0)) | 0;
  }
  function qi(e, t, n, r) {
    cn || di();
    var a = Hi,
      l = cn;
    cn = !0;
    try {
      fi(a, e, t, n, r);
    } finally {
      (cn = l) || pi();
    }
  }
  function Vi(e, t, n, r) {
    Qn($n, Hi.bind(null, e, t, n, r));
  }
  function Hi(e, t, n, r) {
    var a;
    if (Gn)
      if ((a = 0 == (4 & t)) && 0 < Cn.length && -1 < zn.indexOf(e))
        (e = Ei(null, e, t, n, r)), Cn.push(e);
      else {
        var l = Wi(e, t, n, r);
        if (null === l) a && Si(e, r);
        else {
          if (a) {
            if (-1 < zn.indexOf(e))
              return (e = Ei(l, e, t, n, r)), void Cn.push(e);
            if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_n = Ci(_n, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (xn = Ci(xn, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Pn = Ci(Pn, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Nn.set(l, Ci(Nn.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Tn.set(l, Ci(Tn.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(l, e, t, n, r)
            )
              return;
            Si(e, r);
          }
          xu(e, t, r, null, n);
        }
      }
  }
  function Wi(e, t, n, r) {
    var a = oi(r);
    if (null !== (a = Fu(a))) {
      var l = yi(a);
      if (null === l) a = null;
      else {
        var o = l.tag;
        if (13 === o) {
          if (null !== (a = vi(l))) return a;
          a = null;
        } else if (3 === o) {
          if (l.stateNode.hydrate)
            return 3 === l.tag ? l.stateNode.containerInfo : null;
          a = null;
        } else l !== a && (a = null);
      }
    }
    return xu(e, t, r, a, n), null;
  }
  function $i() {
    if (Yn) return Yn;
    var e,
      t,
      n = Xn,
      r = n.length,
      a = "value" in Kn ? Kn.value : Kn.textContent,
      l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (Yn = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function Gi() {
    return !0;
  }
  function Ki() {
    return !1;
  }
  function Xi(e) {
    function t(t, n, r, a, l) {
      for (var o in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? Gi
          : Ki),
        (this.isPropagationStopped = Ki),
        this
      );
    }
    return (
      kt(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Gi));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Gi));
        },
        persist: function () {},
        isPersistent: Gi,
      }),
      t
    );
  }
  function Yi(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = br[e]) && !!t[e];
  }
  function Ji() {
    return Yi;
  }
  function Zi(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Rr.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function eu(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Ar[e.type] : "textarea" === t;
  }
  function nu(e, t, n, r) {
    ui(r),
      0 < (t = Nu(t, "onChange")).length &&
        ((n = new Zn("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  function ru(e) {
    ku(e, 0);
  }
  function au(e) {
    if (Uo(Uu(e))) return e;
  }
  function lu(e, t) {
    if ("change" === e) return t;
  }
  function ou() {
    Ur && (Ur.detachEvent("onpropertychange", iu), (jr = Ur = null));
  }
  function iu(e) {
    if ("value" === e.propertyName && au(jr)) {
      var t = [];
      if ((nu(t, jr, e, oi(e)), (e = ru), cn)) e(t);
      else {
        cn = !0;
        try {
          ci(e, t);
        } finally {
          (cn = !1), pi();
        }
      }
    }
  }
  function uu(e, t, n) {
    "focusin" === e
      ? (ou(), (jr = n), (Ur = t).attachEvent("onpropertychange", iu))
      : "focusout" === e && ou();
  }
  function su(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return au(jr);
  }
  function cu(e, t) {
    if ("click" === e) return au(t);
  }
  function fu(e, t) {
    if ("input" === e || "change" === e) return au(t);
  }
  function du(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function pu(e, t) {
    if (Wr(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++)
      if (!$r.call(t, n[r]) || !Wr(e[n[r]], t[n[r]])) return !1;
    return !0;
  }
  function hu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n,
      r = hu(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = hu(r);
    }
  }
  function gu(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? gu(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function yu() {
    for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (e) {
        n = !1;
      }
      if (!n) break;
      t = jo((e = t.contentWindow).document);
    }
    return t;
  }
  function vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function bu(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Yr ||
      null == Gr ||
      Gr !== jo(r) ||
      ("selectionStart" in (r = Gr) && vu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (Xr && pu(Xr, r)) ||
        ((Xr = r),
        0 < (r = Nu(Kr, "onSelect")).length &&
          ((t = new Zn("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Gr))));
  }
  function wu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n),
      (function (e, t, n, r, a, l, o, i, u) {
        if ((gi.apply(this, arguments), hn)) {
          if (!hn) throw Error(_o(198));
          var s = mn;
          (hn = !1), (mn = null), gn || ((gn = !0), (yn = s));
        }
      })(r, t, void 0, e),
      (e.currentTarget = null);
  }
  function ku(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              u = i.instance,
              s = i.currentTarget;
            if (((i = i.listener), u !== l && a.isPropagationStopped()))
              break e;
            wu(a, i, s), (l = u);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = (i = r[o]).instance),
              (s = i.currentTarget),
              (i = i.listener),
              u !== l && a.isPropagationStopped())
            )
              break e;
            wu(a, i, s), (l = u);
          }
      }
    }
    if (gn) throw ((e = yn), (gn = !1), (yn = null), e);
  }
  function Eu(e, t) {
    var n = Bu(t),
      r = e + "__bubble";
    n.has(r) || (_u(t, e, 2, !1), n.add(r));
  }
  function Su(e) {
    e[na] ||
      ((e[na] = !0),
      Et.forEach(function (t) {
        ta.has(t) || Cu(t, !1, e, null), Cu(t, !0, e, null);
      }));
  }
  function Cu(e, t, n, r) {
    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
      l = n;
    if (
      ("selectionchange" === e && 9 !== n.nodeType && (l = n.ownerDocument),
      null !== r && !t && ta.has(e))
    ) {
      if ("scroll" !== e) return;
      (a |= 2), (l = r);
    }
    var o = Bu(l),
      i = e + "__" + (t ? "capture" : "bubble");
    o.has(i) || (t && (a |= 4), _u(l, e, a, t), o.add(i));
  }
  function _u(e, t, n, r) {
    var a = jn.get(t);
    switch (void 0 === a ? 2 : a) {
      case 0:
        a = qi;
        break;
      case 1:
        a = Vi;
        break;
      default:
        a = Hi;
    }
    (n = a.bind(null, t, n, e)),
      (a = void 0),
      !dn ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
        ? e.addEventListener(t, n, { passive: a })
        : e.addEventListener(t, n, !1);
  }
  function xu(e, t, n, r, a) {
    var l = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
      e: for (;;) {
        if (null === r) return;
        var o = r.tag;
        if (3 === o || 4 === o) {
          var i = r.stateNode.containerInfo;
          if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
          if (4 === o)
            for (o = r.return; null !== o; ) {
              var u = o.tag;
              if (
                (3 === u || 4 === u) &&
                ((u = o.stateNode.containerInfo) === a ||
                  (8 === u.nodeType && u.parentNode === a))
              )
                return;
              o = o.return;
            }
          for (; null !== i; ) {
            if (null === (o = Fu(i))) return;
            if (5 === (u = o.tag) || 6 === u) {
              r = l = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    !(function (e, t, n) {
      if (fn) return e(t, n);
      fn = !0;
      try {
        sn(e, t, n);
      } finally {
        (fn = !1), pi();
      }
    })(function () {
      var r = l,
        a = oi(n),
        o = [];
      e: {
        var i = Un.get(e);
        if (void 0 !== i) {
          var u = Zn,
            s = e;
          switch (e) {
            case "keypress":
              if (0 === Qi(n)) break e;
            case "keydown":
            case "keyup":
              u = kr;
              break;
            case "focusin":
              (s = "focus"), (u = cr);
              break;
            case "focusout":
              (s = "blur"), (u = cr);
              break;
            case "beforeblur":
            case "afterblur":
              u = cr;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u = or;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u = ur;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u = _r;
              break;
            case Dn:
            case Mn:
            case Fn:
              u = dr;
              break;
            case An:
              u = Pr;
              break;
            case "scroll":
              u = tr;
              break;
            case "wheel":
              u = Tr;
              break;
            case "copy":
            case "cut":
            case "paste":
              u = hr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u = Sr;
          }
          var c = 0 != (4 & t),
            f = !c && "scroll" === e,
            d = c ? (null !== i ? i + "Capture" : null) : i;
          c = [];
          for (var p, h = r; null !== h; ) {
            var m = (p = h).stateNode;
            if (
              (5 === p.tag &&
                null !== m &&
                ((p = m),
                null !== d && null != (m = hi(h, d)) && c.push(Pu(h, m, p))),
              f)
            )
              break;
            h = h.return;
          }
          0 < c.length &&
            ((i = new u(i, s, null, n, a)), o.push({ event: i, listeners: c }));
        }
      }
      if (0 == (7 & t)) {
        if (
          ((u = "mouseout" === e || "pointerout" === e),
          (!(i = "mouseover" === e || "pointerover" === e) ||
            0 != (16 & t) ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!Fu(s) && !s[fa])) &&
            (u || i) &&
            ((i =
              a.window === a
                ? a
                : (i = a.ownerDocument)
                ? i.defaultView || i.parentWindow
                : window),
            u
              ? ((u = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? Fu(s) : null) &&
                  (s !== (f = yi(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((u = null), (s = r)),
            u !== s))
        ) {
          if (
            ((c = or),
            (m = "onMouseLeave"),
            (d = "onMouseEnter"),
            (h = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = Sr),
              (m = "onPointerLeave"),
              (d = "onPointerEnter"),
              (h = "pointer")),
            (f = null == u ? i : Uu(u)),
            (p = null == s ? i : Uu(s)),
            ((i = new c(m, h + "leave", u, n, a)).target = f),
            (i.relatedTarget = p),
            (m = null),
            Fu(a) === r &&
              (((c = new c(d, h + "enter", s, n, a)).target = p),
              (c.relatedTarget = f),
              (m = c)),
            (f = m),
            u && s)
          )
            e: {
              for (d = s, h = 0, p = c = u; p; p = Tu(p)) h++;
              for (p = 0, m = d; m; m = Tu(m)) p++;
              for (; 0 < h - p; ) (c = Tu(c)), h--;
              for (; 0 < p - h; ) (d = Tu(d)), p--;
              for (; h--; ) {
                if (c === d || (null !== d && c === d.alternate)) break e;
                (c = Tu(c)), (d = Tu(d));
              }
              c = null;
            }
          else c = null;
          null !== u && Ru(o, i, u, c, !1),
            null !== s && null !== f && Ru(o, f, s, c, !0);
        }
        if (
          "select" ===
            (u =
              (i = r ? Uu(r) : window).nodeName && i.nodeName.toLowerCase()) ||
          ("input" === u && "file" === i.type)
        )
          var g = lu;
        else if (tu(i))
          if (Br) g = fu;
          else {
            g = su;
            var y = uu;
          }
        else
          (u = i.nodeName) &&
            "input" === u.toLowerCase() &&
            ("checkbox" === i.type || "radio" === i.type) &&
            (g = cu);
        switch (
          (g && (g = g(e, r))
            ? nu(o, g, n, a)
            : (y && y(e, i, r),
              "focusout" === e &&
                (y = i._wrapperState) &&
                y.controlled &&
                "number" === i.type &&
                $o(i, "number", i.value)),
          (y = r ? Uu(r) : window),
          e)
        ) {
          case "focusin":
            (tu(y) || "true" === y.contentEditable) &&
              ((Gr = y), (Kr = r), (Xr = null));
            break;
          case "focusout":
            Xr = Kr = Gr = null;
            break;
          case "mousedown":
            Yr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yr = !1), bu(o, n, a);
            break;
          case "selectionchange":
            if (Qr) break;
          case "keydown":
          case "keyup":
            bu(o, n, a);
        }
        var v;
        if (zr)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Fr
            ? Zi(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        b &&
          (Ir &&
            "ko" !== n.locale &&
            (Fr || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Fr && (v = $i())
              : ((Xn = "value" in (Kn = a) ? Kn.value : Kn.textContent),
                (Fr = !0))),
          0 < (y = Nu(r, b)).length &&
            ((b = new gr(b, e, null, n, a)),
            o.push({ event: b, listeners: y }),
            v ? (b.data = v) : null !== (v = eu(n)) && (b.data = v))),
          (v = Lr
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return eu(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Mr = !0), Dr);
                  case "textInput":
                    return (e = t.data) === Dr && Mr ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Fr)
                  return "compositionend" === e || (!zr && Zi(e, t))
                    ? ((e = $i()), (Yn = Xn = Kn = null), (Fr = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Ir && "ko" !== t.locale ? null : t.data;
                  default:
                    return null;
                }
              })(e, n)) &&
            0 < (r = Nu(r, "onBeforeInput")).length &&
            ((a = new gr("onBeforeInput", "beforeinput", null, n, a)),
            o.push({ event: a, listeners: r }),
            (a.data = v));
      }
      ku(o, t);
    });
  }
  function Pu(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Nu(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var a = e,
        l = a.stateNode;
      5 === a.tag &&
        null !== l &&
        ((a = l),
        null != (l = hi(e, n)) && r.unshift(Pu(e, l, a)),
        null != (l = hi(e, t)) && r.push(Pu(e, l, a))),
        (e = e.return);
    }
    return r;
  }
  function Tu(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Ru(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r; ) {
      var i = n,
        u = i.alternate,
        s = i.stateNode;
      if (null !== u && u === r) break;
      5 === i.tag &&
        null !== s &&
        ((i = s),
        a
          ? null != (u = hi(n, l)) && o.unshift(Pu(n, u, i))
          : a || (null != (u = hi(n, l)) && o.push(Pu(n, u, i)))),
        (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
  }
  function zu() {}
  function Ou(e, t) {
    switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!t.autoFocus;
    }
    return !1;
  }
  function Lu(e, t) {
    return (
      "textarea" === e ||
      "option" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  function Iu(e) {
    1 === e.nodeType
      ? (e.textContent = "")
      : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
  }
  function Du(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
    }
    return e;
  }
  function Mu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Fu(e) {
    var t = e[sa];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[fa] || n[sa])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = Mu(e); null !== e; ) {
            if ((n = e[sa])) return n;
            e = Mu(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function Au(e) {
    return !(e = e[sa] || e[fa]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function Uu(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(_o(33));
  }
  function ju(e) {
    return e[ca] || null;
  }
  function Bu(e) {
    var t = e[da];
    return void 0 === t && (t = e[da] = new Set()), t;
  }
  function qu(e) {
    return { current: e };
  }
  function Vu(e) {
    0 > ha || ((e.current = pa[ha]), (pa[ha] = null), ha--);
  }
  function Hu(e, t) {
    ha++, (pa[ha] = e.current), (e.current = t);
  }
  function Wu(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ma;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      l = {};
    for (a in n) l[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function $u(e) {
    return null != (e = e.childContextTypes);
  }
  function Qu() {
    Vu(ya), Vu(ga);
  }
  function Gu(e, t, n) {
    if (ga.current !== ma) throw Error(_o(168));
    Hu(ga, t), Hu(ya, n);
  }
  function Ku(e, t, n) {
    var r = e.stateNode;
    if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
      return n;
    for (var a in (r = r.getChildContext()))
      if (!(a in e)) throw Error(_o(108, Do(t) || "Unknown", a));
    return kt({}, n, r);
  }
  function Xu(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        ma),
      (va = ga.current),
      Hu(ga, e),
      Hu(ya, ya.current),
      !0
    );
  }
  function Yu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_o(169));
    n
      ? ((e = Ku(e, t, va)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Vu(ya),
        Vu(ga),
        Hu(ga, e))
      : Vu(ya),
      Hu(ya, n);
  }
  function Ju() {
    switch (Pa()) {
      case Na:
        return 99;
      case Ta:
        return 98;
      case Ra:
        return 97;
      case za:
        return 96;
      case Oa:
        return 95;
      default:
        throw Error(_o(332));
    }
  }
  function Zu(e) {
    switch (e) {
      case 99:
        return Na;
      case 98:
        return Ta;
      case 97:
        return Ra;
      case 96:
        return za;
      case 95:
        return Oa;
      default:
        throw Error(_o(332));
    }
  }
  function es(e, t) {
    return (e = Zu(e)), ka(e, t);
  }
  function ts(e, t, n) {
    return (e = Zu(e)), Ea(e, t, n);
  }
  function ns() {
    if (null !== Ma) {
      var e = Ma;
      (Ma = null), Sa(e);
    }
    rs();
  }
  function rs() {
    if (!Fa && null !== Da) {
      Fa = !0;
      var e = 0;
      try {
        var t = Da;
        es(99, function () {
          for (; e < t.length; e++) {
            var n = t[e];
            do {
              n = n(!0);
            } while (null !== n);
          }
        }),
          (Da = null);
      } catch (t) {
        throw (null !== Da && (Da = Da.slice(e + 1)), Ea(Na, ns), t);
      } finally {
        Fa = !1;
      }
    }
  }
  function as(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = kt({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ls() {
    Ha = Va = qa = null;
  }
  function os(e) {
    var t = Ba.current;
    Vu(Ba), (e.type._context._currentValue = t);
  }
  function is(e, t) {
    for (; null !== e; ) {
      var n = e.alternate;
      if ((e.childLanes & t) === t) {
        if (null === n || (n.childLanes & t) === t) break;
        n.childLanes |= t;
      } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
      e = e.return;
    }
  }
  function us(e, t) {
    (qa = e),
      (Ha = Va = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (0 != (e.lanes & t) && (bl = !0), (e.firstContext = null));
  }
  function ss(e, t) {
    if (Ha !== e && !1 !== t && 0 !== t)
      if (
        (("number" == typeof t && 1073741823 !== t) ||
          ((Ha = e), (t = 1073741823)),
        (t = { context: e, observedBits: t, next: null }),
        null === Va)
      ) {
        if (null === qa) throw Error(_o(308));
        (Va = t),
          (qa.dependencies = { lanes: 0, firstContext: t, responders: null });
      } else Va = Va.next = t;
    return e._currentValue;
  }
  function cs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    };
  }
  function fs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function ds(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function ps(e, t) {
    if (null !== (e = e.updateQueue)) {
      var n = (e = e.shared).pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
  }
  function hs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        l = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
        } while (null !== n);
        null === l ? (a = l = t) : (l = l.next = t);
      } else a = l = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ms(e, t, n, r) {
    var a = e.updateQueue;
    Wa = !1;
    var l = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      i = a.shared.pending;
    if (null !== i) {
      a.shared.pending = null;
      var u = i,
        s = u.next;
      (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
      var c = e.alternate;
      if (null !== c) {
        var f = (c = c.updateQueue).lastBaseUpdate;
        f !== o &&
          (null === f ? (c.firstBaseUpdate = s) : (f.next = s),
          (c.lastBaseUpdate = u));
      }
    }
    if (null !== l) {
      for (f = a.baseState, o = 0, c = s = u = null; ; ) {
        i = l.lane;
        var d = l.eventTime;
        if ((r & i) === i) {
          null !== c &&
            (c = c.next =
              {
                eventTime: d,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              });
          e: {
            var p = e,
              h = l;
            switch (((i = t), (d = n), h.tag)) {
              case 1:
                if ("function" == typeof (p = h.payload)) {
                  f = p.call(d, f, i);
                  break e;
                }
                f = p;
                break e;
              case 3:
                p.flags = (-4097 & p.flags) | 64;
              case 0:
                if (
                  null ==
                  (i =
                    "function" == typeof (p = h.payload) ? p.call(d, f, i) : p)
                )
                  break e;
                f = kt({}, f, i);
                break e;
              case 2:
                Wa = !0;
            }
          }
          null !== l.callback &&
            ((e.flags |= 32),
            null === (i = a.effects) ? (a.effects = [l]) : i.push(l));
        } else
          (d = {
            eventTime: d,
            lane: i,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }),
            null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
            (o |= i);
        if (null === (l = l.next)) {
          if (null === (i = a.shared.pending)) break;
          (l = i.next),
            (i.next = null),
            (a.lastBaseUpdate = i),
            (a.shared.pending = null);
        }
      }
      null === c && (u = f),
        (a.baseState = u),
        (a.firstBaseUpdate = s),
        (a.lastBaseUpdate = c),
        (Ul |= o),
        (e.lanes = o),
        (e.memoizedState = f);
    }
  }
  function gs(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          a = r.callback;
        if (null !== a) {
          if (((r.callback = null), (r = n), "function" != typeof a))
            throw Error(_o(191, a));
          a.call(r);
        }
      }
  }
  function ys(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : kt({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  function vs(e, t, n, r, a, l, o) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, l, o)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !pu(n, r) ||
          !pu(a, l);
  }
  function bs(e, t, n) {
    var r = !1,
      a = ma,
      l = t.contextType;
    return (
      "object" == typeof l && null !== l
        ? (l = ss(l))
        : ((a = $u(t) ? va : ga.current),
          (l = (r = null != (r = t.contextTypes)) ? Wu(e, a) : ma)),
      (t = new t(n, l)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Qa),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function ws(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
  }
  function ks(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = $a), cs(e);
    var l = t.contextType;
    "object" == typeof l && null !== l
      ? (a.context = ss(l))
      : ((l = $u(t) ? va : ga.current), (a.context = Wu(e, l))),
      ms(e, n, a, r),
      (a.state = e.memoizedState),
      "function" == typeof (l = t.getDerivedStateFromProps) &&
        (ys(e, t, l, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && Qa.enqueueReplaceState(a, a.state, null),
        ms(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4);
  }
  function Es(e, t, n) {
    if (
      null !== (e = n.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(_o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(_o(147, e));
        var a = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === a
          ? t.ref
          : (((t = function (e) {
              var t = r.refs;
              t === $a && (t = r.refs = {}),
                null === e ? delete t[a] : (t[a] = e);
            })._stringRef = a),
            t);
      }
      if ("string" != typeof e) throw Error(_o(284));
      if (!n._owner) throw Error(_o(290, e));
    }
    return e;
  }
  function Ss(e, t) {
    if ("textarea" !== e.type)
      throw Error(
        _o(
          31,
          "[object Object]" === Object.prototype.toString.call(t)
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : t
        )
      );
  }
  function Cs(e) {
    function t(t, n) {
      if (e) {
        var r = t.lastEffect;
        null !== r
          ? ((r.nextEffect = n), (t.lastEffect = n))
          : (t.firstEffect = t.lastEffect = n),
          (n.nextEffect = null),
          (n.flags = 8);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
    }
    function r(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
    }
    function a(e, t) {
      return ((e = Of(e, t)).index = 0), (e.sibling = null), e;
    }
    function l(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags = 2), n)
              : r
            : ((t.flags = 2), n)
          : n
      );
    }
    function o(t) {
      return e && null === t.alternate && (t.flags = 2), t;
    }
    function i(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Mf(n, e.mode, r)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      return null !== t && t.elementType === n.type
        ? (((r = a(t, n.props)).ref = Es(e, t, n)), (r.return = e), r)
        : (((r = Lf(n.type, n.key, n.props, null, e.mode, r)).ref = Es(
            e,
            t,
            n
          )),
          (r.return = e),
          r);
    }
    function s(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = Ff(n, e.mode, r)).return = e), t)
        : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, l) {
      return null === t || 7 !== t.tag
        ? (((t = If(n, e.mode, r, l)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if ("string" == typeof t || "number" == typeof t)
        return ((t = Mf("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case Ot:
            return (
              ((n = Lf(t.type, t.key, t.props, null, e.mode, n)).ref = Es(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case Lt:
            return ((t = Ff(t, e.mode, n)).return = e), t;
        }
        if (Ga(t) || zo(t)) return ((t = If(t, e.mode, n, null)).return = e), t;
        Ss(e, t);
      }
      return null;
    }
    function d(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if ("string" == typeof n || "number" == typeof n)
        return null !== a ? null : i(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case Ot:
            return n.key === a
              ? n.type === It
                ? c(e, t, n.props.children, r, a)
                : u(e, t, n, r)
              : null;
          case Lt:
            return n.key === a ? s(e, t, n, r) : null;
        }
        if (Ga(n) || zo(n)) return null !== a ? null : c(e, t, n, r, null);
        Ss(e, n);
      }
      return null;
    }
    function p(e, t, n, r, a) {
      if ("string" == typeof r || "number" == typeof r)
        return i(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case Ot:
            return (
              (e = e.get(null === r.key ? n : r.key) || null),
              r.type === It
                ? c(t, e, r.props.children, a, r.key)
                : u(t, e, r, a)
            );
          case Lt:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        }
        if (Ga(r) || zo(r)) return c(t, (e = e.get(n) || null), r, a, null);
        Ss(t, r);
      }
      return null;
    }
    function h(a, o, i, u) {
      for (
        var s = null, c = null, h = o, m = (o = 0), g = null;
        null !== h && m < i.length;
        m++
      ) {
        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
        var y = d(a, h, i[m], u);
        if (null === y) {
          null === h && (h = g);
          break;
        }
        e && h && null === y.alternate && t(a, h),
          (o = l(y, o, m)),
          null === c ? (s = y) : (c.sibling = y),
          (c = y),
          (h = g);
      }
      if (m === i.length) return n(a, h), s;
      if (null === h) {
        for (; m < i.length; m++)
          null !== (h = f(a, i[m], u)) &&
            ((o = l(h, o, m)), null === c ? (s = h) : (c.sibling = h), (c = h));
        return s;
      }
      for (h = r(a, h); m < i.length; m++)
        null !== (g = p(h, a, m, i[m], u)) &&
          (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
          (o = l(g, o, m)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g));
      return (
        e &&
          h.forEach(function (e) {
            return t(a, e);
          }),
        s
      );
    }
    function m(a, o, i, u) {
      var s = zo(i);
      if ("function" != typeof s) throw Error(_o(150));
      if (null == (i = s.call(i))) throw Error(_o(151));
      for (
        var c = (s = null), h = o, m = (o = 0), g = null, y = i.next();
        null !== h && !y.done;
        m++, y = i.next()
      ) {
        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
        var v = d(a, h, y.value, u);
        if (null === v) {
          null === h && (h = g);
          break;
        }
        e && h && null === v.alternate && t(a, h),
          (o = l(v, o, m)),
          null === c ? (s = v) : (c.sibling = v),
          (c = v),
          (h = g);
      }
      if (y.done) return n(a, h), s;
      if (null === h) {
        for (; !y.done; m++, y = i.next())
          null !== (y = f(a, y.value, u)) &&
            ((o = l(y, o, m)), null === c ? (s = y) : (c.sibling = y), (c = y));
        return s;
      }
      for (h = r(a, h); !y.done; m++, y = i.next())
        null !== (y = p(h, a, m, y.value, u)) &&
          (e && null !== y.alternate && h.delete(null === y.key ? m : y.key),
          (o = l(y, o, m)),
          null === c ? (s = y) : (c.sibling = y),
          (c = y));
      return (
        e &&
          h.forEach(function (e) {
            return t(a, e);
          }),
        s
      );
    }
    return function (e, r, l, i) {
      var u =
        "object" == typeof l && null !== l && l.type === It && null === l.key;
      u && (l = l.props.children);
      var s = "object" == typeof l && null !== l;
      if (s)
        switch (l.$$typeof) {
          case Ot:
            e: {
              for (s = l.key, u = r; null !== u; ) {
                if (u.key === s) {
                  switch (u.tag) {
                    case 7:
                      if (l.type === It) {
                        n(e, u.sibling),
                          ((r = a(u, l.props.children)).return = e),
                          (e = r);
                        break e;
                      }
                      break;
                    default:
                      if (u.elementType === l.type) {
                        n(e, u.sibling),
                          ((r = a(u, l.props)).ref = Es(e, u, l)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                  }
                  n(e, u);
                  break;
                }
                t(e, u), (u = u.sibling);
              }
              l.type === It
                ? (((r = If(l.props.children, e.mode, i, l.key)).return = e),
                  (e = r))
                : (((i = Lf(l.type, l.key, l.props, null, e.mode, i)).ref = Es(
                    e,
                    r,
                    l
                  )),
                  (i.return = e),
                  (e = i));
            }
            return o(e);
          case Lt:
            e: {
              for (u = l.key; null !== r; ) {
                if (r.key === u) {
                  if (
                    4 === r.tag &&
                    r.stateNode.containerInfo === l.containerInfo &&
                    r.stateNode.implementation === l.implementation
                  ) {
                    n(e, r.sibling),
                      ((r = a(r, l.children || [])).return = e),
                      (e = r);
                    break e;
                  }
                  n(e, r);
                  break;
                }
                t(e, r), (r = r.sibling);
              }
              ((r = Ff(l, e.mode, i)).return = e), (e = r);
            }
            return o(e);
        }
      if ("string" == typeof l || "number" == typeof l)
        return (
          (l = "" + l),
          null !== r && 6 === r.tag
            ? (n(e, r.sibling), ((r = a(r, l)).return = e), (e = r))
            : (n(e, r), ((r = Mf(l, e.mode, i)).return = e), (e = r)),
          o(e)
        );
      if (Ga(l)) return h(e, r, l, i);
      if (zo(l)) return m(e, r, l, i);
      if ((s && Ss(e, l), void 0 === l && !u))
        switch (e.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(_o(152, Do(e.type) || "Component"));
        }
      return n(e, r);
    };
  }
  function _s(e) {
    if (e === Ya) throw Error(_o(174));
    return e;
  }
  function xs(e, t) {
    switch ((Hu(el, t), Hu(Za, e), Hu(Ja, Ya), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ei(null, "");
        break;
      default:
        t = ei(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    Vu(Ja), Hu(Ja, t);
  }
  function Ps() {
    Vu(Ja), Vu(Za), Vu(el);
  }
  function Ns(e) {
    _s(el.current);
    var t = _s(Ja.current),
      n = ei(t, e.type);
    t !== n && (Hu(Za, e), Hu(Ja, n));
  }
  function Ts(e) {
    Za.current === e && (Vu(Ja), Vu(Za));
  }
  function Rs(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (0 != (64 & t.flags)) return t;
      } else if (null !== t.child) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function zs(e, t) {
    var n = Rf(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.type = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (n.flags = 8),
      null !== e.lastEffect
        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
        : (e.firstEffect = e.lastEffect = n);
  }
  function Os(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) && ((e.stateNode = t), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), !0)
        );
      case 13:
      default:
        return !1;
    }
  }
  function Ls(e) {
    if (al) {
      var t = rl;
      if (t) {
        var n = t;
        if (!Os(e, t)) {
          if (!(t = Du(n.nextSibling)) || !Os(e, t))
            return (e.flags = (-1025 & e.flags) | 2), (al = !1), void (nl = e);
          zs(nl, n);
        }
        (nl = e), (rl = Du(t.firstChild));
      } else (e.flags = (-1025 & e.flags) | 2), (al = !1), (nl = e);
    }
  }
  function Is(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    nl = e;
  }
  function Ds(e) {
    if (e !== nl) return !1;
    if (!al) return Is(e), (al = !0), !1;
    var t = e.type;
    if (
      5 !== e.tag ||
      ("head" !== t && "body" !== t && !Lu(t, e.memoizedProps))
    )
      for (t = rl; t; ) zs(e, t), (t = Du(t.nextSibling));
    if ((Is(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(_o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n) {
              if (0 === t) {
                rl = Du(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
          }
          e = e.nextSibling;
        }
        rl = null;
      }
    } else rl = nl ? Du(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ms() {
    (rl = nl = null), (al = !1);
  }
  function Fs() {
    for (var e = 0; e < ll.length; e++)
      ll[e]._workInProgressVersionPrimary = null;
    ll.length = 0;
  }
  function As() {
    throw Error(_o(321));
  }
  function Us(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Wr(e[n], t[n])) return !1;
    return !0;
  }
  function js(e, t, n, r, a, l) {
    if (
      ((ul = l),
      (sl = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = null === e || null === e.memoizedState ? ml : gl),
      (e = n(r, a)),
      pl)
    ) {
      l = 0;
      do {
        if (((pl = !1), !(25 > l))) throw Error(_o(301));
        (l += 1),
          (fl = cl = null),
          (t.updateQueue = null),
          (ol.current = yl),
          (e = n(r, a));
      } while (pl);
    }
    if (
      ((ol.current = hl),
      (t = null !== cl && null !== cl.next),
      (ul = 0),
      (fl = cl = sl = null),
      (dl = !1),
      t)
    )
      throw Error(_o(300));
    return e;
  }
  function Bs() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === fl ? (sl.memoizedState = fl = e) : (fl = fl.next = e), fl;
  }
  function qs() {
    if (null === cl) {
      var e = sl.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = cl.next;
    var t = null === fl ? sl.memoizedState : fl.next;
    if (null !== t) (fl = t), (cl = e);
    else {
      if (null === e) throw Error(_o(310));
      (e = {
        memoizedState: (cl = e).memoizedState,
        baseState: cl.baseState,
        baseQueue: cl.baseQueue,
        queue: cl.queue,
        next: null,
      }),
        null === fl ? (sl.memoizedState = fl = e) : (fl = fl.next = e);
    }
    return fl;
  }
  function Vs(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Hs(e) {
    var t = qs(),
      n = t.queue;
    if (null === n) throw Error(_o(311));
    n.lastRenderedReducer = e;
    var r = cl,
      a = r.baseQueue,
      l = n.pending;
    if (null !== l) {
      if (null !== a) {
        var o = a.next;
        (a.next = l.next), (l.next = o);
      }
      (r.baseQueue = a = l), (n.pending = null);
    }
    if (null !== a) {
      (a = a.next), (r = r.baseState);
      var i = (o = l = null),
        u = a;
      do {
        var s = u.lane;
        if ((ul & s) === s)
          null !== i &&
            (i = i.next =
              {
                lane: 0,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
        else {
          var c = {
            lane: s,
            action: u.action,
            eagerReducer: u.eagerReducer,
            eagerState: u.eagerState,
            next: null,
          };
          null === i ? ((o = i = c), (l = r)) : (i = i.next = c),
            (sl.lanes |= s),
            (Ul |= s);
        }
        u = u.next;
      } while (null !== u && u !== a);
      null === i ? (l = r) : (i.next = o),
        Wr(r, t.memoizedState) || (bl = !0),
        (t.memoizedState = r),
        (t.baseState = l),
        (t.baseQueue = i),
        (n.lastRenderedState = r);
    }
    return [t.memoizedState, n.dispatch];
  }
  function Ws(e) {
    var t = qs(),
      n = t.queue;
    if (null === n) throw Error(_o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      a = n.pending,
      l = t.memoizedState;
    if (null !== a) {
      n.pending = null;
      var o = (a = a.next);
      do {
        (l = e(l, o.action)), (o = o.next);
      } while (o !== a);
      Wr(l, t.memoizedState) || (bl = !0),
        (t.memoizedState = l),
        null === t.baseQueue && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function $s(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var a = t._workInProgressVersionPrimary;
    if (
      (null !== a
        ? (e = a === r)
        : ((e = e.mutableReadLanes),
          (e = (ul & e) === e) &&
            ((t._workInProgressVersionPrimary = r), ll.push(t))),
      e)
    )
      return n(t._source);
    throw (ll.push(t), Error(_o(350)));
  }
  function Qs(e, t, n, r) {
    var a = zl;
    if (null === a) throw Error(_o(349));
    var l = t._getVersion,
      o = l(t._source),
      i = ol.current,
      u = i.useState(function () {
        return $s(a, t, n);
      }),
      s = u[1],
      c = u[0];
    u = fl;
    var f = e.memoizedState,
      d = f.refs,
      p = d.getSnapshot,
      h = f.source;
    f = f.subscribe;
    var m = sl;
    return (
      (e.memoizedState = { refs: d, source: t, subscribe: r }),
      i.useEffect(
        function () {
          (d.getSnapshot = n), (d.setSnapshot = s);
          var e = l(t._source);
          if (!Wr(o, e)) {
            (e = n(t._source)),
              Wr(c, e) ||
                (s(e), (e = Jc(m)), (a.mutableReadLanes |= e & a.pendingLanes)),
              (e = a.mutableReadLanes),
              (a.entangledLanes |= e);
            for (var r = a.entanglements, i = e; 0 < i; ) {
              var u = 31 - Vn(i),
                f = 1 << u;
              (r[u] |= e), (i &= ~f);
            }
          }
        },
        [n, t, r]
      ),
      i.useEffect(
        function () {
          return r(t._source, function () {
            var e = d.getSnapshot,
              n = d.setSnapshot;
            try {
              n(e(t._source));
              var r = Jc(m);
              a.mutableReadLanes |= r & a.pendingLanes;
            } catch (e) {
              n(function () {
                throw e;
              });
            }
          });
        },
        [t, r]
      ),
      (Wr(p, n) && Wr(h, t) && Wr(f, r)) ||
        (((e = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Vs,
          lastRenderedState: c,
        }).dispatch = s =
          cc.bind(null, sl, e)),
        (u.queue = e),
        (u.baseQueue = null),
        (c = $s(a, t, n)),
        (u.memoizedState = u.baseState = c)),
      c
    );
  }
  function Gs(e, t, n) {
    return Qs(qs(), e, t, n);
  }
  function Ks(e) {
    var t = Bs();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = (e = t.queue =
        {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Vs,
          lastRenderedState: e,
        }).dispatch =
        cc.bind(null, sl, e)),
      [t.memoizedState, e]
    );
  }
  function Xs(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = sl.updateQueue)
        ? ((t = { lastEffect: null }),
          (sl.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Ys(e) {
    return (e = { current: e }), (Bs().memoizedState = e);
  }
  function Js() {
    return qs().memoizedState;
  }
  function Zs(e, t, n, r) {
    var a = Bs();
    (sl.flags |= e),
      (a.memoizedState = Xs(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function ec(e, t, n, r) {
    var a = qs();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== cl) {
      var o = cl.memoizedState;
      if (((l = o.destroy), null !== r && Us(r, o.deps)))
        return void Xs(t, n, l, r);
    }
    (sl.flags |= e), (a.memoizedState = Xs(1 | t, n, l, r));
  }
  function tc(e, t) {
    return Zs(516, 4, e, t);
  }
  function nc(e, t) {
    return ec(516, 4, e, t);
  }
  function rc(e, t) {
    return ec(4, 2, e, t);
  }
  function ac(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
  }
  function lc(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), ec(4, 2, ac.bind(null, t, e), n)
    );
  }
  function oc() {}
  function ic(e, t) {
    var n = qs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Us(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function uc(e, t) {
    var n = qs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Us(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function sc(e, t) {
    var n = Ju();
    es(98 > n ? 98 : n, function () {
      e(!0);
    }),
      es(97 < n ? 97 : n, function () {
        var n = il.transition;
        il.transition = 1;
        try {
          e(!1), t();
        } finally {
          il.transition = n;
        }
      });
  }
  function cc(e, t, n) {
    var r = Yc(),
      a = Jc(e),
      l = {
        lane: a,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      o = t.pending;
    if (
      (null === o ? (l.next = l) : ((l.next = o.next), (o.next = l)),
      (t.pending = l),
      (o = e.alternate),
      e === sl || (null !== o && o === sl))
    )
      pl = dl = !0;
    else {
      if (
        0 === e.lanes &&
        (null === o || 0 === o.lanes) &&
        null !== (o = t.lastRenderedReducer)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.eagerReducer = o), (l.eagerState = u), Wr(u, i))) return;
        } catch (e) {}
      Zc(e, a, r);
    }
  }
  function fc(e, t, n, r) {
    t.child = null === e ? Xa(t, null, n, r) : Ka(t, e.child, n, r);
  }
  function dc(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
      us(t, a),
      (r = js(e, t, n, r, l, a)),
      null === e || bl
        ? ((t.flags |= 1), fc(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~a),
          Nc(e, t, a))
    );
  }
  function pc(e, t, n, r, a, l) {
    if (null === e) {
      var o = n.type;
      return "function" != typeof o ||
        zf(o) ||
        void 0 !== o.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Lf(n.type, null, r, t, t.mode, l)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = o), hc(e, t, o, r, a, l));
    }
    return (
      (o = e.child),
      0 == (a & l) &&
      ((a = o.memoizedProps),
      (n = null !== (n = n.compare) ? n : pu)(a, r) && e.ref === t.ref)
        ? Nc(e, t, l)
        : ((t.flags |= 1),
          ((e = Of(o, r)).ref = t.ref),
          (e.return = t),
          (t.child = e))
    );
  }
  function hc(e, t, n, r, a, l) {
    if (null !== e && pu(e.memoizedProps, r) && e.ref === t.ref) {
      if (((bl = !1), 0 == (l & a))) return (t.lanes = e.lanes), Nc(e, t, l);
      0 != (16384 & e.flags) && (bl = !0);
    }
    return yc(e, t, n, r, l);
  }
  function mc(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
      if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), uf(t, n);
      else {
        if (0 == (1073741824 & n))
          return (
            (e = null !== l ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e }),
            uf(t, e),
            null
          );
        (t.memoizedState = { baseLanes: 0 }),
          uf(t, null !== l ? l.baseLanes : n);
      }
    else
      null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        uf(t, r);
    return fc(e, t, a, n), t.child;
  }
  function gc(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      (t.flags |= 128);
  }
  function yc(e, t, n, r, a) {
    var l = $u(n) ? va : ga.current;
    return (
      (l = Wu(t, l)),
      us(t, a),
      (n = js(e, t, n, r, l, a)),
      null === e || bl
        ? ((t.flags |= 1), fc(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~a),
          Nc(e, t, a))
    );
  }
  function vc(e, t, n, r, a) {
    if ($u(n)) {
      var l = !0;
      Xu(t);
    } else l = !1;
    if ((us(t, a), null === t.stateNode))
      null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        bs(t, n, r),
        ks(t, n, r, a),
        (r = !0);
    else if (null === e) {
      var o = t.stateNode,
        i = t.memoizedProps;
      o.props = i;
      var u = o.context,
        s = n.contextType;
      "object" == typeof s && null !== s
        ? (s = ss(s))
        : (s = Wu(t, (s = $u(n) ? va : ga.current)));
      var c = n.getDerivedStateFromProps,
        f =
          "function" == typeof c ||
          "function" == typeof o.getSnapshotBeforeUpdate;
      f ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((i !== r || u !== s) && ws(t, o, r, s)),
        (Wa = !1);
      var d = t.memoizedState;
      (o.state = d),
        ms(t, r, o, a),
        (u = t.memoizedState),
        i !== r || d !== u || ya.current || Wa
          ? ("function" == typeof c && (ys(t, n, c, r), (u = t.memoizedState)),
            (i = Wa || vs(t, n, i, r, d, u, s))
              ? (f ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ("function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount()),
                "function" == typeof o.componentDidMount && (t.flags |= 4))
              : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (o.props = r),
            (o.state = u),
            (o.context = s),
            (r = i))
          : ("function" == typeof o.componentDidMount && (t.flags |= 4),
            (r = !1));
    } else {
      (o = t.stateNode),
        fs(e, t),
        (i = t.memoizedProps),
        (s = t.type === t.elementType ? i : as(t.type, i)),
        (o.props = s),
        (f = t.pendingProps),
        (d = o.context),
        "object" == typeof (u = n.contextType) && null !== u
          ? (u = ss(u))
          : (u = Wu(t, (u = $u(n) ? va : ga.current)));
      var p = n.getDerivedStateFromProps;
      (c =
        "function" == typeof p ||
        "function" == typeof o.getSnapshotBeforeUpdate) ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((i !== f || d !== u) && ws(t, o, r, u)),
        (Wa = !1),
        (d = t.memoizedState),
        (o.state = d),
        ms(t, r, o, a);
      var h = t.memoizedState;
      i !== f || d !== h || ya.current || Wa
        ? ("function" == typeof p && (ys(t, n, p, r), (h = t.memoizedState)),
          (s = Wa || vs(t, n, s, r, d, h, u))
            ? (c ||
                ("function" != typeof o.UNSAFE_componentWillUpdate &&
                  "function" != typeof o.componentWillUpdate) ||
                ("function" == typeof o.componentWillUpdate &&
                  o.componentWillUpdate(r, h, u),
                "function" == typeof o.UNSAFE_componentWillUpdate &&
                  o.UNSAFE_componentWillUpdate(r, h, u)),
              "function" == typeof o.componentDidUpdate && (t.flags |= 4),
              "function" == typeof o.getSnapshotBeforeUpdate &&
                (t.flags |= 256))
            : ("function" != typeof o.componentDidUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (o.props = r),
          (o.state = h),
          (o.context = u),
          (r = s))
        : ("function" != typeof o.componentDidUpdate ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof o.getSnapshotBeforeUpdate ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 256),
          (r = !1));
    }
    return bc(e, t, n, r, l, a);
  }
  function bc(e, t, n, r, a, l) {
    gc(e, t);
    var o = 0 != (64 & t.flags);
    if (!r && !o) return a && Yu(t, n, !1), Nc(e, t, l);
    (r = t.stateNode), (vl.current = t);
    var i =
      o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && o
        ? ((t.child = Ka(t, e.child, null, l)), (t.child = Ka(t, null, i, l)))
        : fc(e, t, i, l),
      (t.memoizedState = r.state),
      a && Yu(t, n, !0),
      t.child
    );
  }
  function wc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Gu(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gu(0, t.context, !1),
      xs(e, t.containerInfo);
  }
  function kc(e, t, n) {
    var r,
      a = t.pendingProps,
      l = tl.current,
      o = !1;
    return (
      (r = 0 != (64 & t.flags)) ||
        (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
      r
        ? ((o = !0), (t.flags &= -65))
        : (null !== e && null === e.memoizedState) ||
          void 0 === a.fallback ||
          !0 === a.unstable_avoidThisFallback ||
          (l |= 1),
      Hu(tl, 1 & l),
      null === e
        ? (void 0 !== a.fallback && Ls(t),
          (e = a.children),
          (l = a.fallback),
          o
            ? ((e = Ec(t, e, l, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = wl),
              e)
            : "number" == typeof a.unstable_expectedLoadTime
            ? ((e = Ec(t, e, l, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = wl),
              (t.lanes = 33554432),
              e)
            : (((n = Df(
                { mode: "visible", children: e },
                t.mode,
                n,
                null
              )).return = t),
              (t.child = n)))
        : (e.memoizedState,
          o
            ? ((a = Cc(e, t, a.children, a.fallback, n)),
              (o = t.child),
              (l = e.child.memoizedState),
              (o.memoizedState =
                null === l ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = wl),
              a)
            : ((n = Sc(e, t, a.children, n)), (t.memoizedState = null), n))
    );
  }
  function Ec(e, t, n, r) {
    var a = e.mode,
      l = e.child;
    return (
      (t = { mode: "hidden", children: t }),
      0 == (2 & a) && null !== l
        ? ((l.childLanes = 0), (l.pendingProps = t))
        : (l = Df(t, a, 0, null)),
      (n = If(n, a, r, null)),
      (l.return = e),
      (n.return = e),
      (l.sibling = n),
      (e.child = l),
      n
    );
  }
  function Sc(e, t, n, r) {
    var a = e.child;
    return (
      (e = a.sibling),
      (n = Of(a, { mode: "visible", children: n })),
      0 == (2 & t.mode) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      null !== e &&
        ((e.nextEffect = null),
        (e.flags = 8),
        (t.firstEffect = t.lastEffect = e)),
      (t.child = n)
    );
  }
  function Cc(e, t, n, r, a) {
    var l = t.mode,
      o = e.child;
    e = o.sibling;
    var i = { mode: "hidden", children: n };
    return (
      0 == (2 & l) && t.child !== o
        ? (((n = t.child).childLanes = 0),
          (n.pendingProps = i),
          null !== (o = n.lastEffect)
            ? ((t.firstEffect = n.firstEffect),
              (t.lastEffect = o),
              (o.nextEffect = null))
            : (t.firstEffect = t.lastEffect = null))
        : (n = Of(o, i)),
      null !== e ? (r = Of(e, r)) : ((r = If(r, l, a, null)).flags |= 2),
      (r.return = t),
      (n.return = t),
      (n.sibling = r),
      (t.child = n),
      r
    );
  }
  function _c(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    null !== n && (n.lanes |= t), is(e.return, t);
  }
  function xc(e, t, n, r, a, l) {
    var o = e.memoizedState;
    null === o
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
          lastEffect: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = a),
        (o.lastEffect = l));
  }
  function Pc(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail;
    if ((fc(e, t, r.children, n), 0 != (2 & (r = tl.current))))
      (r = (1 & r) | 2), (t.flags |= 64);
    else {
      if (null !== e && 0 != (64 & e.flags))
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && _c(e, n);
          else if (19 === e.tag) _c(e, n);
          else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Hu(tl, r), 0 == (2 & t.mode))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            null !== (e = n.alternate) && null === Rs(e) && (a = n),
              (n = n.sibling);
          null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            xc(t, !1, a, n, l, t.lastEffect);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === Rs(e)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          xc(t, !0, n, null, l, t.lastEffect);
          break;
        case "together":
          xc(t, !1, null, null, void 0, t.lastEffect);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nc(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Ul |= t.lanes),
      0 != (n & t.childLanes))
    ) {
      if (null !== e && t.child !== e.child) throw Error(_o(153));
      if (null !== t.child) {
        for (
          n = Of((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Of(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    return null;
  }
  function Tc(e, t) {
    if (!al)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Rc(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
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
        return $u(t.type) && Qu(), null;
      case 3:
        return (
          Ps(),
          Vu(ya),
          Vu(ga),
          Fs(),
          (r = t.stateNode).pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (Ds(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
          El(t),
          null
        );
      case 5:
        Ts(t);
        var a = _s(el.current);
        if (((n = t.type), null !== e && null != t.stateNode))
          Sl(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 128);
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(_o(166));
            return null;
          }
          if (((e = _s(Ja.current)), Ds(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[sa] = t), (r[ca] = l), n)) {
              case "dialog":
                Eu("cancel", r), Eu("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Eu("load", r);
                break;
              case "video":
              case "audio":
                for (e = 0; e < ea.length; e++) Eu(ea[e], r);
                break;
              case "source":
                Eu("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Eu("error", r), Eu("load", r);
                break;
              case "details":
                Eu("toggle", r);
                break;
              case "input":
                qo(r, l), Eu("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!l.multiple }),
                  Eu("invalid", r);
                break;
              case "textarea":
                Xo(r, l), Eu("invalid", r);
            }
            for (var o in (ai(n, l), (e = null), l))
              l.hasOwnProperty(o) &&
                ((a = l[o]),
                "children" === o
                  ? "string" == typeof a
                    ? r.textContent !== a && (e = ["children", a])
                    : "number" == typeof a &&
                      r.textContent !== "" + a &&
                      (e = ["children", "" + a])
                  : St.hasOwnProperty(o) &&
                    null != a &&
                    "onScroll" === o &&
                    Eu("scroll", r));
            switch (n) {
              case "input":
                Ao(r), Wo(r, l, !0);
                break;
              case "textarea":
                Ao(r), Jo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof l.onClick && (r.onclick = zu);
            }
            (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
          } else {
            switch (
              ((o = 9 === a.nodeType ? a : a.ownerDocument),
              e === Zt.html && (e = Zo(n)),
              e === Zt.html
                ? "script" === n
                  ? (((e = o.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof r.is
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    "select" === n &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[sa] = t),
              (e[ca] = r),
              kl(e, t, !1, !1),
              (t.stateNode = e),
              (o = li(n, r)),
              n)
            ) {
              case "dialog":
                Eu("cancel", e), Eu("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Eu("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < ea.length; a++) Eu(ea[a], e);
                a = r;
                break;
              case "source":
                Eu("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                Eu("error", e), Eu("load", e), (a = r);
                break;
              case "details":
                Eu("toggle", e), (a = r);
                break;
              case "input":
                qo(e, r), (a = Bo(e, r)), Eu("invalid", e);
                break;
              case "option":
                a = Qo(e, r);
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = kt({}, r, { value: void 0 })),
                  Eu("invalid", e);
                break;
              case "textarea":
                Xo(e, r), (a = Ko(e, r)), Eu("invalid", e);
                break;
              default:
                a = r;
            }
            ai(n, a);
            var i = a;
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var u = i[l];
                "style" === l
                  ? ri(e, u)
                  : "dangerouslySetInnerHTML" === l
                  ? null != (u = u ? u.__html : void 0) && tn(e, u)
                  : "children" === l
                  ? "string" == typeof u
                    ? ("textarea" !== n || "" !== u) && ti(e, u)
                    : "number" == typeof u && ti(e, "" + u)
                  : "suppressContentEditableWarning" !== l &&
                    "suppressHydrationWarning" !== l &&
                    "autoFocus" !== l &&
                    (St.hasOwnProperty(l)
                      ? null != u && "onScroll" === l && Eu("scroll", e)
                      : null != u && Ro(e, l, u, o));
              }
            switch (n) {
              case "input":
                Ao(e), Wo(e, r, !1);
                break;
              case "textarea":
                Ao(e), Jo(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + Mo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  null != (l = r.value)
                    ? Go(e, !!r.multiple, l, !1)
                    : null != r.defaultValue &&
                      Go(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" == typeof a.onClick && (e.onclick = zu);
            }
            Ou(n, r) && (t.flags |= 4);
          }
          null !== t.ref && (t.flags |= 128);
        }
        return null;
      case 6:
        if (e && null != t.stateNode) Cl(e, t, e.memoizedProps, r);
        else {
          if ("string" != typeof r && null === t.stateNode)
            throw Error(_o(166));
          (n = _s(el.current)),
            _s(Ja.current),
            Ds(t)
              ? ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[sa] = t),
                r.nodeValue !== n && (t.flags |= 4))
              : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                  r
                ))[sa] = t),
                (t.stateNode = r));
        }
        return null;
      case 13:
        return (
          Vu(tl),
          (r = t.memoizedState),
          0 != (64 & t.flags)
            ? ((t.lanes = n), t)
            : ((r = null !== r),
              (n = !1),
              null === e
                ? void 0 !== t.memoizedProps.fallback && Ds(t)
                : (n = null !== e.memoizedState),
              r &&
                !n &&
                0 != (2 & t.mode) &&
                ((null === e &&
                  !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                0 != (1 & tl.current)
                  ? 0 === Ml && (Ml = 3)
                  : ((0 !== Ml && 3 !== Ml) || (Ml = 4),
                    null === zl ||
                      (0 == (134217727 & Ul) && 0 == (134217727 & jl)) ||
                      rf(zl, Ll))),
              (r || n) && (t.flags |= 4),
              null)
        );
      case 4:
        return Ps(), El(t), null === e && Su(t.stateNode.containerInfo), null;
      case 10:
        return os(t), null;
      case 17:
        return $u(t.type) && Qu(), null;
      case 19:
        if ((Vu(tl), null === (r = t.memoizedState))) return null;
        if (((l = 0 != (64 & t.flags)), null === (o = r.rendering)))
          if (l) Tc(r, !1);
          else {
            if (0 !== Ml || (null !== e && 0 != (64 & e.flags)))
              for (e = t.child; null !== e; ) {
                if (null !== (o = Rs(e))) {
                  for (
                    t.flags |= 64,
                      Tc(r, !1),
                      null !== (l = o.updateQueue) &&
                        ((t.updateQueue = l), (t.flags |= 4)),
                      null === r.lastEffect && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (e = r),
                      ((l = n).flags &= 2),
                      (l.nextEffect = null),
                      (l.firstEffect = null),
                      (l.lastEffect = null),
                      null === (o = l.alternate)
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = o.childLanes),
                          (l.lanes = o.lanes),
                          (l.child = o.child),
                          (l.memoizedProps = o.memoizedProps),
                          (l.memoizedState = o.memoizedState),
                          (l.updateQueue = o.updateQueue),
                          (l.type = o.type),
                          (e = o.dependencies),
                          (l.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Hu(tl, (1 & tl.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== r.tail &&
              Ua() > Hl &&
              ((t.flags |= 64), (l = !0), Tc(r, !1), (t.lanes = 33554432));
          }
        else {
          if (!l)
            if (null !== (e = Rs(o))) {
              if (
                ((t.flags |= 64),
                (l = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Tc(r, !0),
                null === r.tail &&
                  "hidden" === r.tailMode &&
                  !o.alternate &&
                  !al)
              )
                return (
                  null !== (t = t.lastEffect = r.lastEffect) &&
                    (t.nextEffect = null),
                  null
                );
            } else
              2 * Ua() - r.renderingStartTime > Hl &&
                1073741824 !== n &&
                ((t.flags |= 64), (l = !0), Tc(r, !1), (t.lanes = 33554432));
          r.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : (null !== (n = r.last) ? (n.sibling = o) : (t.child = o),
              (r.last = o));
        }
        return null !== r.tail
          ? ((n = r.tail),
            (r.rendering = n),
            (r.tail = n.sibling),
            (r.lastEffect = t.lastEffect),
            (r.renderingStartTime = Ua()),
            (n.sibling = null),
            (t = tl.current),
            Hu(tl, l ? (1 & t) | 2 : 1 & t),
            n)
          : null;
      case 23:
      case 24:
        return (
          sf(),
          null !== e &&
            (null !== e.memoizedState) != (null !== t.memoizedState) &&
            "unstable-defer-without-hiding" !== r.mode &&
            (t.flags |= 4),
          null
        );
    }
    throw Error(_o(156, t.tag));
  }
  function zc(e) {
    switch (e.tag) {
      case 1:
        $u(e.type) && Qu();
        var t = e.flags;
        return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
      case 3:
        if ((Ps(), Vu(ya), Vu(ga), Fs(), 0 != (64 & (t = e.flags))))
          throw Error(_o(285));
        return (e.flags = (-4097 & t) | 64), e;
      case 5:
        return Ts(e), null;
      case 13:
        return (
          Vu(tl),
          4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
        );
      case 19:
        return Vu(tl), null;
      case 4:
        return Ps(), null;
      case 10:
        return os(e), null;
      case 23:
      case 24:
        return sf(), null;
      default:
        return null;
    }
  }
  function Oc(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += Io(r)), (r = r.return);
      } while (r);
      var a = n;
    } catch (e) {
      a = "\nError generating stack: " + e.message + "\n" + e.stack;
    }
    return { value: e, source: t, stack: a };
  }
  function Lc(e, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Ic(e, t, n) {
    ((n = ds(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        $l || (($l = !0), (Ql = r)), Lc(0, t);
      }),
      n
    );
  }
  function Dc(e, t, n) {
    (n = ds(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      n.payload = function () {
        return Lc(0, t), r(a);
      };
    }
    var l = e.stateNode;
    return (
      null !== l &&
        "function" == typeof l.componentDidCatch &&
        (n.callback = function () {
          "function" != typeof r &&
            (null === Gl ? (Gl = new Set([this])) : Gl.add(this), Lc(0, t));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function Mc(e) {
    var t = e.ref;
    if (null !== t)
      if ("function" == typeof t)
        try {
          t(null);
        } catch (t) {
          xf(e, t);
        }
      else t.current = null;
  }
  function Fc(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (256 & t.flags && null !== e) {
          var n = e.memoizedProps,
            r = e.memoizedState;
          (t = (e = t.stateNode).getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : as(t.type, n),
            r
          )),
            (e.__reactInternalSnapshotBeforeUpdate = t);
        }
        return;
      case 3:
        return void (256 & t.flags && Iu(t.stateNode.containerInfo));
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(_o(163));
  }
  function Ac(e, t, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
          e = t = t.next;
          do {
            if (3 == (3 & e.tag)) {
              var r = e.create;
              e.destroy = r();
            }
            e = e.next;
          } while (e !== t);
        }
        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
          e = t = t.next;
          do {
            var a = e;
            (r = a.next),
              0 != (4 & (a = a.tag)) && 0 != (1 & a) && (Sf(n, e), Ef(n, e)),
              (e = r);
          } while (e !== t);
        }
        return;
      case 1:
        return (
          (e = n.stateNode),
          4 & n.flags &&
            (null === t
              ? e.componentDidMount()
              : ((r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : as(n.type, t.memoizedProps)),
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                ))),
          void (null !== (t = n.updateQueue) && gs(n, t, e))
        );
      case 3:
        if (null !== (t = n.updateQueue)) {
          if (((e = null), null !== n.child))
            switch (n.child.tag) {
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          gs(n, t, e);
        }
        return;
      case 5:
        return (
          (e = n.stateNode),
          void (
            null === t &&
            4 & n.flags &&
            Ou(n.type, n.memoizedProps) &&
            e.focus()
          )
        );
      case 6:
      case 4:
      case 12:
        return;
      case 13:
        return void (
          null === n.memoizedState &&
          ((n = n.alternate),
          null !== n &&
            ((n = n.memoizedState),
            null !== n && ((n = n.dehydrated), null !== n && Ri(n))))
        );
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(_o(163));
  }
  function Uc(e, t) {
    for (var n = e; ; ) {
      if (5 === n.tag) {
        var r = n.stateNode;
        if (t)
          "function" == typeof (r = r.style).setProperty
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
        else {
          r = n.stateNode;
          var a = n.memoizedProps.style;
          (a = null != a && a.hasOwnProperty("display") ? a.display : null),
            (r.style.display = ni("display", a));
        }
      } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
      else if (
        ((23 !== n.tag && 24 !== n.tag) ||
          null === n.memoizedState ||
          n === e) &&
        null !== n.child
      ) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === e) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  function jc(e, t) {
    if (wa && "function" == typeof wa.onCommitFiberUnmount)
      try {
        wa.onCommitFiberUnmount(ba, t);
      } catch (e) {}
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
          var n = (e = e.next);
          do {
            var r = n,
              a = r.destroy;
            if (((r = r.tag), void 0 !== a))
              if (0 != (4 & r)) Sf(t, n);
              else {
                r = t;
                try {
                  a();
                } catch (e) {
                  xf(r, e);
                }
              }
            n = n.next;
          } while (n !== e);
        }
        break;
      case 1:
        if (
          (Mc(t), "function" == typeof (e = t.stateNode).componentWillUnmount)
        )
          try {
            (e.props = t.memoizedProps),
              (e.state = t.memoizedState),
              e.componentWillUnmount();
          } catch (e) {
            xf(t, e);
          }
        break;
      case 5:
        Mc(t);
        break;
      case 4:
        $c(e, t);
    }
  }
  function Bc(e) {
    (e.alternate = null),
      (e.child = null),
      (e.dependencies = null),
      (e.firstEffect = null),
      (e.lastEffect = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.return = null),
      (e.updateQueue = null);
  }
  function qc(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function Vc(e) {
    e: {
      for (var t = e.return; null !== t; ) {
        if (qc(t)) break e;
        t = t.return;
      }
      throw Error(_o(160));
    }
    var n = t;
    switch (((t = n.stateNode), n.tag)) {
      case 5:
        var r = !1;
        break;
      case 3:
      case 4:
        (t = t.containerInfo), (r = !0);
        break;
      default:
        throw Error(_o(161));
    }
    16 & n.flags && (ti(t, ""), (n.flags &= -17));
    e: t: for (n = e; ; ) {
      for (; null === n.sibling; ) {
        if (null === n.return || qc(n.return)) {
          n = null;
          break e;
        }
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

      ) {
        if (2 & n.flags) continue t;
        if (null === n.child || 4 === n.tag) continue t;
        (n.child.return = n), (n = n.child);
      }
      if (!(2 & n.flags)) {
        n = n.stateNode;
        break e;
      }
    }
    r ? Hc(e, n, t) : Wc(e, n, t);
  }
  function Hc(e, t, n) {
    var r = e.tag,
      a = 5 === r || 6 === r;
    if (a)
      (e = a ? e.stateNode : e.stateNode.instance),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = zu));
    else if (4 !== r && null !== (e = e.child))
      for (Hc(e, t, n), e = e.sibling; null !== e; )
        Hc(e, t, n), (e = e.sibling);
  }
  function Wc(e, t, n) {
    var r = e.tag,
      a = 5 === r || 6 === r;
    if (a)
      (e = a ? e.stateNode : e.stateNode.instance),
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (Wc(e, t, n), e = e.sibling; null !== e; )
        Wc(e, t, n), (e = e.sibling);
  }
  function $c(e, t) {
    for (var n, r, a = t, l = !1; ; ) {
      if (!l) {
        l = a.return;
        e: for (;;) {
          if (null === l) throw Error(_o(160));
          switch (((n = l.stateNode), l.tag)) {
            case 5:
              r = !1;
              break e;
            case 3:
            case 4:
              (n = n.containerInfo), (r = !0);
              break e;
          }
          l = l.return;
        }
        l = !0;
      }
      if (5 === a.tag || 6 === a.tag) {
        e: for (var o = e, i = a, u = i; ; )
          if ((jc(o, u), null !== u.child && 4 !== u.tag))
            (u.child.return = u), (u = u.child);
          else {
            if (u === i) break e;
            for (; null === u.sibling; ) {
              if (null === u.return || u.return === i) break e;
              u = u.return;
            }
            (u.sibling.return = u.return), (u = u.sibling);
          }
        r
          ? ((o = n),
            (i = a.stateNode),
            8 === o.nodeType ? o.parentNode.removeChild(i) : o.removeChild(i))
          : n.removeChild(a.stateNode);
      } else if (4 === a.tag) {
        if (null !== a.child) {
          (n = a.stateNode.containerInfo),
            (r = !0),
            (a.child.return = a),
            (a = a.child);
          continue;
        }
      } else if ((jc(e, a), null !== a.child)) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === t) break;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === t) return;
        4 === (a = a.return).tag && (l = !1);
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }
  function Qc(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var n = t.updateQueue;
        if (null !== (n = null !== n ? n.lastEffect : null)) {
          var r = (n = n.next);
          do {
            3 == (3 & r.tag) &&
              ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
              (r = r.next);
          } while (r !== n);
        }
        return;
      case 1:
        return;
      case 5:
        if (null != (n = t.stateNode)) {
          r = t.memoizedProps;
          var a = null !== e ? e.memoizedProps : r;
          e = t.type;
          var l = t.updateQueue;
          if (((t.updateQueue = null), null !== l)) {
            for (
              n[ca] = r,
                "input" === e &&
                  "radio" === r.type &&
                  null != r.name &&
                  Vo(n, r),
                li(e, a),
                t = li(e, r),
                a = 0;
              a < l.length;
              a += 2
            ) {
              var o = l[a],
                i = l[a + 1];
              "style" === o
                ? ri(n, i)
                : "dangerouslySetInnerHTML" === o
                ? tn(n, i)
                : "children" === o
                ? ti(n, i)
                : Ro(n, o, i, t);
            }
            switch (e) {
              case "input":
                Ho(n, r);
                break;
              case "textarea":
                Yo(n, r);
                break;
              case "select":
                (e = n._wrapperState.wasMultiple),
                  (n._wrapperState.wasMultiple = !!r.multiple),
                  null != (l = r.value)
                    ? Go(n, !!r.multiple, l, !1)
                    : e !== !!r.multiple &&
                      (null != r.defaultValue
                        ? Go(n, !!r.multiple, r.defaultValue, !0)
                        : Go(n, !!r.multiple, r.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (null === t.stateNode) throw Error(_o(162));
        return void (t.stateNode.nodeValue = t.memoizedProps);
      case 3:
        return void (
          (n = t.stateNode).hydrate && ((n.hydrate = !1), Ri(n.containerInfo))
        );
      case 12:
        return;
      case 13:
        return (
          null !== t.memoizedState && ((Vl = Ua()), Uc(t.child, !0)), void Gc(t)
        );
      case 19:
        return void Gc(t);
      case 17:
        return;
      case 23:
      case 24:
        return void Uc(t, null !== t.memoizedState);
    }
    throw Error(_o(163));
  }
  function Gc(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new xl()),
        t.forEach(function (t) {
          var r = Nf.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function Kc(e, t) {
    return (
      null !== e &&
      (null === (e = e.memoizedState) || null !== e.dehydrated) &&
      null !== (t = t.memoizedState) &&
      null === t.dehydrated
    );
  }
  function Xc() {
    Hl = Ua() + 500;
  }
  function Yc() {
    return 0 != (48 & Rl) ? Ua() : -1 !== ro ? ro : (ro = Ua());
  }
  function Jc(e) {
    if (0 == (2 & (e = e.mode))) return 1;
    if (0 == (4 & e)) return 99 === Ju() ? 1 : 2;
    if ((0 === ao && (ao = Al), 0 !== ja.transition)) {
      0 !== lo && (lo = null !== ql ? ql.pendingLanes : 0), (e = ao);
      var t = 4186112 & ~lo;
      return (
        0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
      );
    }
    return (
      (e = Ju()),
      0 != (4 & Rl) && 98 === e
        ? (e = Fi(12, ao))
        : (e = Fi(
            (e = (function (e) {
              switch (e) {
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
            })(e)),
            ao
          )),
      e
    );
  }
  function Zc(e, t, n) {
    if (50 < to) throw ((to = 0), (no = null), Error(_o(185)));
    if (null === (e = ef(e, t))) return null;
    ji(e, t, n), e === zl && ((jl |= t), 4 === Ml && rf(e, Ll));
    var r = Ju();
    1 === t
      ? 0 != (8 & Rl) && 0 == (48 & Rl)
        ? af(e)
        : (tf(e, n), 0 === Rl && (Xc(), ns()))
      : (0 == (4 & Rl) ||
          (98 !== r && 99 !== r) ||
          (null === eo ? (eo = new Set([e])) : eo.add(e)),
        tf(e, n)),
      (ql = e);
  }
  function ef(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  function tf(e, t) {
    for (
      var n = e.callbackNode,
        r = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - Vn(o),
        u = 1 << i,
        s = l[i];
      if (-1 === s) {
        if (0 == (u & r) || 0 != (u & a)) {
          (s = t), Ii(u);
          var c = qn;
          l[i] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1;
        }
      } else s <= t && (e.expiredLanes |= u);
      o &= ~u;
    }
    if (((r = Di(e, e === zl ? Ll : 0)), (t = qn), 0 === r))
      null !== n &&
        (n !== La && Sa(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else {
      if (null !== n) {
        if (e.callbackPriority === t) return;
        n !== La && Sa(n);
      }
      15 === t
        ? ((n = af.bind(null, e)),
          null === Da ? ((Da = [n]), (Ma = Ea(Na, rs))) : Da.push(n),
          (n = La))
        : 14 === t
        ? (n = ts(99, af.bind(null, e)))
        : (n = ts(
            (n = (function (e) {
              switch (e) {
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
                  throw Error(_o(358, e));
              }
            })(t)),
            nf.bind(null, e)
          )),
        (e.callbackPriority = t),
        (e.callbackNode = n);
    }
  }
  function nf(e) {
    if (((ro = -1), (lo = ao = 0), 0 != (48 & Rl))) throw Error(_o(327));
    var t = e.callbackNode;
    if (kf() && e.callbackNode !== t) return null;
    var n = Di(e, e === zl ? Ll : 0);
    if (0 === n) return null;
    var r = n,
      a = Rl;
    Rl |= 16;
    var l = df();
    for ((zl === e && Ll === r) || (Xc(), cf(e, r)); ; )
      try {
        mf();
        break;
      } catch (t) {
        ff(e, t);
      }
    if (
      (ls(),
      (Nl.current = l),
      (Rl = a),
      null !== Ol ? (r = 0) : ((zl = null), (Ll = 0), (r = Ml)),
      0 != (Al & jl))
    )
      cf(e, 0);
    else if (0 !== r) {
      if (
        (2 === r &&
          ((Rl |= 64),
          e.hydrate && ((e.hydrate = !1), Iu(e.containerInfo)),
          0 !== (n = Mi(e)) && (r = pf(e, n))),
        1 === r)
      )
        throw ((t = Fl), cf(e, 0), rf(e, n), tf(e, Ua()), t);
      switch (
        ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
      ) {
        case 0:
        case 1:
          throw Error(_o(345));
        case 2:
          vf(e);
          break;
        case 3:
          if ((rf(e, n), (62914560 & n) === n && 10 < (r = Vl + 500 - Ua()))) {
            if (0 !== Di(e, 0)) break;
            if (((a = e.suspendedLanes) & n) !== n) {
              Yc(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = la(vf.bind(null, e), r);
            break;
          }
          vf(e);
          break;
        case 4:
          if ((rf(e, n), (4186112 & n) === n)) break;
          for (r = e.eventTimes, a = -1; 0 < n; ) {
            var o = 31 - Vn(n);
            (l = 1 << o), (o = r[o]) > a && (a = o), (n &= ~l);
          }
          if (
            ((n = a),
            10 <
              (n =
                (120 > (n = Ua() - n)
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * Pl(n / 1960)) - n))
          ) {
            e.timeoutHandle = la(vf.bind(null, e), n);
            break;
          }
          vf(e);
          break;
        case 5:
          vf(e);
          break;
        default:
          throw Error(_o(329));
      }
    }
    return tf(e, Ua()), e.callbackNode === t ? nf.bind(null, e) : null;
  }
  function rf(e, t) {
    for (
      t &= ~Bl,
        t &= ~jl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Vn(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function af(e) {
    if (0 != (48 & Rl)) throw Error(_o(327));
    if ((kf(), e === zl && 0 != (e.expiredLanes & Ll))) {
      var t = Ll,
        n = pf(e, t);
      0 != (Al & jl) && (n = pf(e, (t = Di(e, t))));
    } else n = pf(e, (t = Di(e, 0)));
    if (
      (0 !== e.tag &&
        2 === n &&
        ((Rl |= 64),
        e.hydrate && ((e.hydrate = !1), Iu(e.containerInfo)),
        0 !== (t = Mi(e)) && (n = pf(e, t))),
      1 === n)
    )
      throw ((n = Fl), cf(e, 0), rf(e, t), tf(e, Ua()), n);
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vf(e),
      tf(e, Ua()),
      null
    );
  }
  function lf(e, t) {
    var n = Rl;
    Rl |= 1;
    try {
      return e(t);
    } finally {
      0 === (Rl = n) && (Xc(), ns());
    }
  }
  function of(e, t) {
    var n = Rl;
    (Rl &= -2), (Rl |= 8);
    try {
      return e(t);
    } finally {
      0 === (Rl = n) && (Xc(), ns());
    }
  }
  function uf(e, t) {
    Hu(Dl, Il), (Il |= t), (Al |= t);
  }
  function sf() {
    (Il = Dl.current), Vu(Dl);
  }
  function cf(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), oa(n)), null !== Ol))
      for (n = Ol.return; null !== n; ) {
        var r = n;
        switch (r.tag) {
          case 1:
            null != (r = r.type.childContextTypes) && Qu();
            break;
          case 3:
            Ps(), Vu(ya), Vu(ga), Fs();
            break;
          case 5:
            Ts(r);
            break;
          case 4:
            Ps();
            break;
          case 13:
          case 19:
            Vu(tl);
            break;
          case 10:
            os(r);
            break;
          case 23:
          case 24:
            sf();
        }
        n = n.return;
      }
    (zl = e),
      (Ol = Of(e.current, null)),
      (Ll = Il = Al = t),
      (Ml = 0),
      (Fl = null),
      (Bl = jl = Ul = 0);
  }
  function ff(e, t) {
    for (;;) {
      var n = Ol;
      try {
        if ((ls(), (ol.current = hl), dl)) {
          for (var r = sl.memoizedState; null !== r; ) {
            var a = r.queue;
            null !== a && (a.pending = null), (r = r.next);
          }
          dl = !1;
        }
        if (
          ((ul = 0),
          (fl = cl = sl = null),
          (pl = !1),
          (Tl.current = null),
          null === n || null === n.return)
        ) {
          (Ml = 1), (Fl = t), (Ol = null);
          break;
        }
        e: {
          var l = e,
            o = n.return,
            i = n,
            u = t;
          if (
            ((t = Ll),
            (i.flags |= 2048),
            (i.firstEffect = i.lastEffect = null),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var s = u;
            if (0 == (2 & i.mode)) {
              var c = i.alternate;
              c
                ? ((i.updateQueue = c.updateQueue),
                  (i.memoizedState = c.memoizedState),
                  (i.lanes = c.lanes))
                : ((i.updateQueue = null), (i.memoizedState = null));
            }
            var f = 0 != (1 & tl.current),
              d = o;
            do {
              var p;
              if ((p = 13 === d.tag)) {
                var h = d.memoizedState;
                if (null !== h) p = null !== h.dehydrated;
                else {
                  var m = d.memoizedProps;
                  p =
                    void 0 !== m.fallback &&
                    (!0 !== m.unstable_avoidThisFallback || !f);
                }
              }
              if (p) {
                var g = d.updateQueue;
                if (null === g) {
                  var y = new Set();
                  y.add(s), (d.updateQueue = y);
                } else g.add(s);
                if (0 == (2 & d.mode)) {
                  if (
                    ((d.flags |= 64),
                    (i.flags |= 16384),
                    (i.flags &= -2981),
                    1 === i.tag)
                  )
                    if (null === i.alternate) i.tag = 17;
                    else {
                      var v = ds(-1, 1);
                      (v.tag = 2), ps(i, v);
                    }
                  i.lanes |= 1;
                  break e;
                }
                (u = void 0), (i = t);
                var b = l.pingCache;
                if (
                  (null === b
                    ? ((b = l.pingCache = new _l()),
                      (u = new Set()),
                      b.set(s, u))
                    : void 0 === (u = b.get(s)) &&
                      ((u = new Set()), b.set(s, u)),
                  !u.has(i))
                ) {
                  u.add(i);
                  var w = Pf.bind(null, l, s, i);
                  s.then(w, w);
                }
                (d.flags |= 4096), (d.lanes = t);
                break e;
              }
              d = d.return;
            } while (null !== d);
            u = Error(
              (Do(i.type) || "A React component") +
                " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
            );
          }
          5 !== Ml && (Ml = 2), (u = Oc(u, i)), (d = o);
          do {
            switch (d.tag) {
              case 3:
                (l = u),
                  (d.flags |= 4096),
                  (t &= -t),
                  (d.lanes |= t),
                  hs(d, Ic(0, l, t));
                break e;
              case 1:
                l = u;
                var k = d.type,
                  E = d.stateNode;
                if (
                  0 == (64 & d.flags) &&
                  ("function" == typeof k.getDerivedStateFromError ||
                    (null !== E &&
                      "function" == typeof E.componentDidCatch &&
                      (null === Gl || !Gl.has(E))))
                ) {
                  (d.flags |= 4096),
                    (t &= -t),
                    (d.lanes |= t),
                    hs(d, Dc(d, l, t));
                  break e;
                }
            }
            d = d.return;
          } while (null !== d);
        }
        yf(n);
      } catch (e) {
        (t = e), Ol === n && null !== n && (Ol = n = n.return);
        continue;
      }
      break;
    }
  }
  function df() {
    var e = Nl.current;
    return (Nl.current = hl), null === e ? hl : e;
  }
  function pf(e, t) {
    var n = Rl;
    Rl |= 16;
    var r = df();
    for ((zl === e && Ll === t) || cf(e, t); ; )
      try {
        hf();
        break;
      } catch (t) {
        ff(e, t);
      }
    if ((ls(), (Rl = n), (Nl.current = r), null !== Ol)) throw Error(_o(261));
    return (zl = null), (Ll = 0), Ml;
  }
  function hf() {
    for (; null !== Ol; ) gf(Ol);
  }
  function mf() {
    for (; null !== Ol && !Ca(); ) gf(Ol);
  }
  function gf(e) {
    var t = uo(e.alternate, e, Il);
    (e.memoizedProps = e.pendingProps),
      null === t ? yf(e) : (Ol = t),
      (Tl.current = null);
  }
  function yf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 0 == (2048 & t.flags))) {
        if (null !== (n = Rc(n, t, Il))) return void (Ol = n);
        if (
          (24 !== (n = t).tag && 23 !== n.tag) ||
          null === n.memoizedState ||
          0 != (1073741824 & Il) ||
          0 == (4 & n.mode)
        ) {
          for (var r = 0, a = n.child; null !== a; )
            (r |= a.lanes | a.childLanes), (a = a.sibling);
          n.childLanes = r;
        }
        null !== e &&
          0 == (2048 & e.flags) &&
          (null === e.firstEffect && (e.firstEffect = t.firstEffect),
          null !== t.lastEffect &&
            (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
            (e.lastEffect = t.lastEffect)),
          1 < t.flags &&
            (null !== e.lastEffect
              ? (e.lastEffect.nextEffect = t)
              : (e.firstEffect = t),
            (e.lastEffect = t)));
      } else {
        if (null !== (n = zc(t))) return (n.flags &= 2047), void (Ol = n);
        null !== e &&
          ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
      }
      if (null !== (t = t.sibling)) return void (Ol = t);
      Ol = t = e;
    } while (null !== t);
    0 === Ml && (Ml = 5);
  }
  function vf(e) {
    var t = Ju();
    return es(99, bf.bind(null, e, t)), null;
  }
  function bf(e, t) {
    do {
      kf();
    } while (null !== Xl);
    if (0 != (48 & Rl)) throw Error(_o(327));
    var n = e.finishedWork;
    if (null === n) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(_o(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes,
      a = r,
      l = e.pendingLanes & ~a;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= a),
      (e.mutableReadLanes &= a),
      (e.entangledLanes &= a),
      (a = e.entanglements);
    for (var o = e.eventTimes, i = e.expirationTimes; 0 < l; ) {
      var u = 31 - Vn(l),
        s = 1 << u;
      (a[u] = 0), (o[u] = -1), (i[u] = -1), (l &= ~s);
    }
    if (
      (null !== eo && 0 == (24 & r) && eo.has(e) && eo.delete(e),
      e === zl && ((Ol = zl = null), (Ll = 0)),
      1 < n.flags
        ? null !== n.lastEffect
          ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
          : (r = n)
        : (r = n.firstEffect),
      null !== r)
    ) {
      if (
        ((a = Rl), (Rl |= 32), (Tl.current = null), (ra = Gn), vu((o = yu())))
      ) {
        if ("selectionStart" in o)
          i = { start: o.selectionStart, end: o.selectionEnd };
        else
          e: if (
            ((i = ((i = o.ownerDocument) && i.defaultView) || window),
            (s = i.getSelection && i.getSelection()) && 0 !== s.rangeCount)
          ) {
            (i = s.anchorNode),
              (l = s.anchorOffset),
              (u = s.focusNode),
              (s = s.focusOffset);
            try {
              i.nodeType, u.nodeType;
            } catch (e) {
              i = null;
              break e;
            }
            var c = 0,
              f = -1,
              d = -1,
              p = 0,
              h = 0,
              m = o,
              g = null;
            t: for (;;) {
              for (
                var y;
                m !== i || (0 !== l && 3 !== m.nodeType) || (f = c + l),
                  m !== u || (0 !== s && 3 !== m.nodeType) || (d = c + s),
                  3 === m.nodeType && (c += m.nodeValue.length),
                  null !== (y = m.firstChild);

              )
                (g = m), (m = y);
              for (;;) {
                if (m === o) break t;
                if (
                  (g === i && ++p === l && (f = c),
                  g === u && ++h === s && (d = c),
                  null !== (y = m.nextSibling))
                )
                  break;
                g = (m = g).parentNode;
              }
              m = y;
            }
            i = -1 === f || -1 === d ? null : { start: f, end: d };
          } else i = null;
        i = i || { start: 0, end: 0 };
      } else i = null;
      (aa = { focusedElem: o, selectionRange: i }),
        (Gn = !1),
        (oo = null),
        (io = !1),
        (Wl = r);
      do {
        try {
          wf();
        } catch (e) {
          if (null === Wl) throw Error(_o(330));
          xf(Wl, e), (Wl = Wl.nextEffect);
        }
      } while (null !== Wl);
      (oo = null), (Wl = r);
      do {
        try {
          for (o = e; null !== Wl; ) {
            var v = Wl.flags;
            if ((16 & v && ti(Wl.stateNode, ""), 128 & v)) {
              var b = Wl.alternate;
              if (null !== b) {
                var w = b.ref;
                null !== w &&
                  ("function" == typeof w ? w(null) : (w.current = null));
              }
            }
            switch (1038 & v) {
              case 2:
                Vc(Wl), (Wl.flags &= -3);
                break;
              case 6:
                Vc(Wl), (Wl.flags &= -3), Qc(Wl.alternate, Wl);
                break;
              case 1024:
                Wl.flags &= -1025;
                break;
              case 1028:
                (Wl.flags &= -1025), Qc(Wl.alternate, Wl);
                break;
              case 4:
                Qc(Wl.alternate, Wl);
                break;
              case 8:
                $c(o, (i = Wl));
                var k = i.alternate;
                Bc(i), null !== k && Bc(k);
            }
            Wl = Wl.nextEffect;
          }
        } catch (e) {
          if (null === Wl) throw Error(_o(330));
          xf(Wl, e), (Wl = Wl.nextEffect);
        }
      } while (null !== Wl);
      if (
        ((w = aa),
        (b = yu()),
        (v = w.focusedElem),
        (o = w.selectionRange),
        b !== v &&
          v &&
          v.ownerDocument &&
          gu(v.ownerDocument.documentElement, v))
      ) {
        null !== o &&
          vu(v) &&
          ((b = o.start),
          void 0 === (w = o.end) && (w = b),
          "selectionStart" in v
            ? ((v.selectionStart = b),
              (v.selectionEnd = Math.min(w, v.value.length)))
            : (w =
                ((b = v.ownerDocument || document) && b.defaultView) || window)
                .getSelection &&
              ((w = w.getSelection()),
              (i = v.textContent.length),
              (k = Math.min(o.start, i)),
              (o = void 0 === o.end ? k : Math.min(o.end, i)),
              !w.extend && k > o && ((i = o), (o = k), (k = i)),
              (i = mu(v, k)),
              (l = mu(v, o)),
              i &&
                l &&
                (1 !== w.rangeCount ||
                  w.anchorNode !== i.node ||
                  w.anchorOffset !== i.offset ||
                  w.focusNode !== l.node ||
                  w.focusOffset !== l.offset) &&
                ((b = b.createRange()).setStart(i.node, i.offset),
                w.removeAllRanges(),
                k > o
                  ? (w.addRange(b), w.extend(l.node, l.offset))
                  : (b.setEnd(l.node, l.offset), w.addRange(b))))),
          (b = []);
        for (w = v; (w = w.parentNode); )
          1 === w.nodeType &&
            b.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
        for (
          "function" == typeof v.focus && v.focus(), v = 0;
          v < b.length;
          v++
        )
          ((w = b[v]).element.scrollLeft = w.left),
            (w.element.scrollTop = w.top);
      }
      (Gn = !!ra), (aa = ra = null), (e.current = n), (Wl = r);
      do {
        try {
          for (v = e; null !== Wl; ) {
            var E = Wl.flags;
            if ((36 & E && Ac(v, Wl.alternate, Wl), 128 & E)) {
              b = void 0;
              var S = Wl.ref;
              if (null !== S) {
                var C = Wl.stateNode;
                switch (Wl.tag) {
                  case 5:
                    b = C;
                    break;
                  default:
                    b = C;
                }
                "function" == typeof S ? S(b) : (S.current = b);
              }
            }
            Wl = Wl.nextEffect;
          }
        } catch (e) {
          if (null === Wl) throw Error(_o(330));
          xf(Wl, e), (Wl = Wl.nextEffect);
        }
      } while (null !== Wl);
      (Wl = null), Ia(), (Rl = a);
    } else e.current = n;
    if (Kl) (Kl = !1), (Xl = e), (Yl = t);
    else
      for (Wl = r; null !== Wl; )
        (t = Wl.nextEffect),
          (Wl.nextEffect = null),
          8 & Wl.flags && (((E = Wl).sibling = null), (E.stateNode = null)),
          (Wl = t);
    if (
      (0 === (r = e.pendingLanes) && (Gl = null),
      1 === r ? (e === no ? to++ : ((to = 0), (no = e))) : (to = 0),
      (n = n.stateNode),
      wa && "function" == typeof wa.onCommitFiberRoot)
    )
      try {
        wa.onCommitFiberRoot(ba, n, void 0, 64 == (64 & n.current.flags));
      } catch (e) {}
    if ((tf(e, Ua()), $l)) throw (($l = !1), (e = Ql), (Ql = null), e);
    return 0 != (8 & Rl) || ns(), null;
  }
  function wf() {
    for (; null !== Wl; ) {
      var e = Wl.alternate;
      io ||
        null === oo ||
        (0 != (8 & Wl.flags)
          ? ki(Wl, oo) && (io = !0)
          : 13 === Wl.tag && Kc(e, Wl) && ki(Wl, oo) && (io = !0));
      var t = Wl.flags;
      0 != (256 & t) && Fc(e, Wl),
        0 == (512 & t) ||
          Kl ||
          ((Kl = !0),
          ts(97, function () {
            return kf(), null;
          })),
        (Wl = Wl.nextEffect);
    }
  }
  function kf() {
    if (90 !== Yl) {
      var e = 97 < Yl ? 97 : Yl;
      return (Yl = 90), es(e, Cf);
    }
    return !1;
  }
  function Ef(e, t) {
    Jl.push(t, e),
      Kl ||
        ((Kl = !0),
        ts(97, function () {
          return kf(), null;
        }));
  }
  function Sf(e, t) {
    Zl.push(t, e),
      Kl ||
        ((Kl = !0),
        ts(97, function () {
          return kf(), null;
        }));
  }
  function Cf() {
    if (null === Xl) return !1;
    var e = Xl;
    if (((Xl = null), 0 != (48 & Rl))) throw Error(_o(331));
    var t = Rl;
    Rl |= 32;
    var n = Zl;
    Zl = [];
    for (var r = 0; r < n.length; r += 2) {
      var a = n[r],
        l = n[r + 1],
        o = a.destroy;
      if (((a.destroy = void 0), "function" == typeof o))
        try {
          o();
        } catch (e) {
          if (null === l) throw Error(_o(330));
          xf(l, e);
        }
    }
    for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
      (a = n[r]), (l = n[r + 1]);
      try {
        var i = a.create;
        a.destroy = i();
      } catch (e) {
        if (null === l) throw Error(_o(330));
        xf(l, e);
      }
    }
    for (i = e.current.firstEffect; null !== i; )
      (e = i.nextEffect),
        (i.nextEffect = null),
        8 & i.flags && ((i.sibling = null), (i.stateNode = null)),
        (i = e);
    return (Rl = t), ns(), !0;
  }
  function _f(e, t, n) {
    ps(e, (t = Ic(0, (t = Oc(n, t)), 1))),
      (t = Yc()),
      null !== (e = ef(e, 1)) && (ji(e, 1, t), tf(e, t));
  }
  function xf(e, t) {
    if (3 === e.tag) _f(e, e, t);
    else
      for (var n = e.return; null !== n; ) {
        if (3 === n.tag) {
          _f(n, e, t);
          break;
        }
        if (1 === n.tag) {
          var r = n.stateNode;
          if (
            "function" == typeof n.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Gl || !Gl.has(r)))
          ) {
            var a = Dc(n, (e = Oc(t, e)), 1);
            if ((ps(n, a), (a = Yc()), null !== (n = ef(n, 1))))
              ji(n, 1, a), tf(n, a);
            else if (
              "function" == typeof r.componentDidCatch &&
              (null === Gl || !Gl.has(r))
            )
              try {
                r.componentDidCatch(t, e);
              } catch (e) {}
            break;
          }
        }
        n = n.return;
      }
  }
  function Pf(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = Yc()),
      (e.pingedLanes |= e.suspendedLanes & n),
      zl === e &&
        (Ll & n) === n &&
        (4 === Ml || (3 === Ml && (62914560 & Ll) === Ll && 500 > Ua() - Vl)
          ? cf(e, 0)
          : (Bl |= n)),
      tf(e, t);
  }
  function Nf(e, t) {
    var n = e.stateNode;
    null !== n && n.delete(t),
      0 === (t = 0) &&
        (0 == (2 & (t = e.mode))
          ? (t = 1)
          : 0 == (4 & t)
          ? (t = 99 === Ju() ? 1 : 2)
          : (0 === ao && (ao = Al),
            0 === (t = Ai(62914560 & ~ao)) && (t = 4194304))),
      (n = Yc()),
      null !== (e = ef(e, t)) && (ji(e, t, n), tf(e, n));
  }
  function Tf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.flags = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Rf(e, t, n, r) {
    return new Tf(e, t, n, r);
  }
  function zf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Of(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Rf(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.nextEffect = null),
          (n.firstEffect = null),
          (n.lastEffect = null)),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Lf(e, t, n, r, a, l) {
    var o = 2;
    if (((r = e), "function" == typeof e)) zf(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else
      e: switch (e) {
        case It:
          return If(n.children, a, l, t);
        case $t:
          (o = 8), (a |= 16);
          break;
        case Dt:
          (o = 8), (a |= 1);
          break;
        case Mt:
          return (
            ((e = Rf(12, n, t, 8 | a)).elementType = Mt),
            (e.type = Mt),
            (e.lanes = l),
            e
          );
        case jt:
          return (
            ((e = Rf(13, n, t, a)).type = jt),
            (e.elementType = jt),
            (e.lanes = l),
            e
          );
        case Bt:
          return ((e = Rf(19, n, t, a)).elementType = Bt), (e.lanes = l), e;
        case Qt:
          return Df(n, a, l, t);
        case Gt:
          return ((e = Rf(24, n, t, a)).elementType = Gt), (e.lanes = l), e;
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case Ft:
                o = 10;
                break e;
              case At:
                o = 9;
                break e;
              case Ut:
                o = 11;
                break e;
              case qt:
                o = 14;
                break e;
              case Vt:
                (o = 16), (r = null);
                break e;
              case Ht:
                o = 22;
                break e;
            }
          throw Error(_o(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Rf(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t
    );
  }
  function If(e, t, n, r) {
    return ((e = Rf(7, e, r, t)).lanes = n), e;
  }
  function Df(e, t, n, r) {
    return ((e = Rf(23, e, r, t)).elementType = Qt), (e.lanes = n), e;
  }
  function Mf(e, t, n) {
    return ((e = Rf(6, e, null, t)).lanes = n), e;
  }
  function Ff(e, t, n) {
    return (
      ((t = Rf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Af(e, t, n) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = n),
      (this.callbackNode = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ui(0)),
      (this.expirationTimes = Ui(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ui(0)),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Uf(e, t, n) {
    var r =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: Lt,
      key: null == r ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function jf(e, t, n, r) {
    var a = t.current,
      l = Yc(),
      o = Jc(a);
    e: if (n) {
      t: {
        if (yi((n = n._reactInternals)) !== n || 1 !== n.tag)
          throw Error(_o(170));
        var i = n;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break t;
            case 1:
              if ($u(i.type)) {
                i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                break t;
              }
          }
          i = i.return;
        } while (null !== i);
        throw Error(_o(171));
      }
      if (1 === n.tag) {
        var u = n.type;
        if ($u(u)) {
          n = Ku(n, u, i);
          break e;
        }
      }
      n = i;
    } else n = ma;
    return (
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = ds(l, o)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      ps(a, t),
      Zc(a, o, l),
      o
    );
  }
  function Bf(e) {
    if (!(e = e.current).child) return null;
    switch (e.child.tag) {
      case 5:
      default:
        return e.child.stateNode;
    }
  }
  function qf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Vf(e, t) {
    qf(e, t), (e = e.alternate) && qf(e, t);
  }
  function Hf() {
    return null;
  }
  function Wf(e, t, n) {
    var r =
      (null != n &&
        null != n.hydrationOptions &&
        n.hydrationOptions.mutableSources) ||
      null;
    if (
      ((n = new Af(e, t, null != n && !0 === n.hydrate)),
      (t = Rf(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
      (n.current = t),
      (t.stateNode = n),
      cs(t),
      (e[fa] = n.current),
      Su(8 === e.nodeType ? e.parentNode : e),
      r)
    )
      for (e = 0; e < r.length; e++) {
        var a = (t = r[e])._getVersion;
        (a = a(t._source)),
          null == n.mutableSourceEagerHydrationData
            ? (n.mutableSourceEagerHydrationData = [t, a])
            : n.mutableSourceEagerHydrationData.push(t, a);
      }
    this._internalRoot = n;
  }
  function $f(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Qf(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
      var o = l._internalRoot;
      if ("function" == typeof a) {
        var i = a;
        a = function () {
          var e = Bf(o);
          i.call(e);
        };
      }
      jf(t, o, e, a);
    } else {
      if (
        ((l = n._reactRootContainer =
          (function (e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e
                    ? 9 === e.nodeType
                      ? e.documentElement
                      : e.firstChild
                    : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute("data-reactroot")
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new Wf(e, 0, t ? { hydrate: !0 } : void 0);
          })(n, r)),
        (o = l._internalRoot),
        "function" == typeof a)
      ) {
        var u = a;
        a = function () {
          var e = Bf(o);
          u.call(e);
        };
      }
      of(function () {
        jf(t, o, e, a);
      });
    }
    return Bf(o);
  }
  function Gf(e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$f(t)) throw Error(_o(200));
    return Uf(e, t, null, n);
  }
  function Kf() {
    if (((bt = {}), (wt = ye()), (kt = u()), vt(), !wt)) throw Error(_o(227));
    var e;
    if (
      ((Et = new Set()),
      (St = {}),
      (Ct = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )),
      (_t =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (xt = Object.prototype.hasOwnProperty),
      (Pt = {}),
      (Nt = {}),
      (Tt = {}),
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          Tt[e] = new No(e, 0, !1, e, null, !1, !1);
        }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        Tt[t] = new No(t, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        Tt[e] = new No(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        Tt[e] = new No(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          Tt[e] = new No(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        Tt[e] = new No(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        Tt[e] = new No(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        Tt[e] = new No(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        Tt[e] = new No(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Rt = /[\-:]([a-z])/g),
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(Rt, To);
          Tt[t] = new No(t, 1, !1, e, null, !1, !1);
        }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(Rt, To);
          Tt[t] = new No(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(Rt, To);
        Tt[t] = new No(
          t,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        Tt[e] = new No(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Tt.xlinkHref = new No(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        Tt[e] = new No(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (zt = wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (Ot = 60103),
      (Lt = 60106),
      (It = 60107),
      (Dt = 60108),
      (Mt = 60114),
      (Ft = 60109),
      (At = 60110),
      (Ut = 60112),
      (jt = 60113),
      (Bt = 60120),
      (qt = 60115),
      (Vt = 60116),
      (Ht = 60121),
      (Wt = 60128),
      ($t = 60129),
      (Qt = 60130),
      (Gt = 60131),
      "function" == typeof Symbol &&
        Symbol.for &&
        ((Kt = Symbol.for),
        (Ot = Kt("react.element")),
        (Lt = Kt("react.portal")),
        (It = Kt("react.fragment")),
        (Dt = Kt("react.strict_mode")),
        (Mt = Kt("react.profiler")),
        (Ft = Kt("react.provider")),
        (At = Kt("react.context")),
        (Ut = Kt("react.forward_ref")),
        (jt = Kt("react.suspense")),
        (Bt = Kt("react.suspense_list")),
        (qt = Kt("react.memo")),
        (Vt = Kt("react.lazy")),
        (Ht = Kt("react.block")),
        Kt("react.scope"),
        (Wt = Kt("react.opaque.id")),
        ($t = Kt("react.debug_trace_mode")),
        (Qt = Kt("react.offscreen")),
        (Gt = Kt("react.legacy_hidden"))),
      (Xt = "function" == typeof Symbol && Symbol.iterator),
      (Jt = !1),
      (Zt = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
      }),
      (e = function (e, t) {
        if (e.namespaceURI !== Zt.svg || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (en = en || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = en.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      (tn =
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, a) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
              });
            }
          : e),
      (nn = {
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
        strokeWidth: !0,
      }),
      (rn = ["Webkit", "ms", "Moz", "O"]),
      Object.keys(nn).forEach(function (e) {
        rn.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nn[t] = nn[e]);
        });
      }),
      (an = kt(
        { menuitem: !0 },
        {
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
          wbr: !0,
        }
      )),
      (ln = null),
      (on = null),
      (un = null),
      (sn = ci),
      (cn = !1),
      (fn = !1),
      (dn = !1),
      Ct)
    )
      try {
        (pn = {}),
          Object.defineProperty(pn, "passive", {
            get: function () {
              dn = !0;
            },
          }),
          window.addEventListener("test", pn, pn),
          window.removeEventListener("test", pn, pn);
      } catch (e) {
        dn = !1;
      }
    (hn = !1),
      (mn = null),
      (gn = !1),
      (yn = null),
      (vn = {
        onError: function (e) {
          (hn = !0), (mn = e);
        },
      }),
      (Sn = !1),
      (Cn = []),
      (_n = null),
      (xn = null),
      (Pn = null),
      (Nn = new Map()),
      (Tn = new Map()),
      (Rn = []),
      (zn =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        )),
      (On = {
        animationend: zi("Animation", "AnimationEnd"),
        animationiteration: zi("Animation", "AnimationIteration"),
        animationstart: zi("Animation", "AnimationStart"),
        transitionend: zi("Transition", "TransitionEnd"),
      }),
      (Ln = {}),
      (In = {}),
      Ct &&
        ((In = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete On.animationend.animation,
          delete On.animationiteration.animation,
          delete On.animationstart.animation),
        "TransitionEvent" in window || delete On.transitionend.transition),
      (Dn = Oi("animationend")),
      (Mn = Oi("animationiteration")),
      (Fn = Oi("animationstart")),
      (An = Oi("transitionend")),
      (Un = new Map()),
      (jn = new Map()),
      (Bn = [
        "abort",
        "abort",
        Dn,
        "animationEnd",
        Mn,
        "animationIteration",
        Fn,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        An,
        "transitionEnd",
        "waiting",
        "waiting",
      ]),
      (0, vt().unstable_now)(),
      (qn = 8),
      (Vn = Math.clz32 ? Math.clz32 : Bi),
      (Hn = Math.log),
      (Wn = Math.LN2),
      ($n = vt().unstable_UserBlockingPriority),
      (Qn = vt().unstable_runWithPriority),
      (Gn = !0),
      (Kn = null),
      (Xn = null),
      (Yn = null),
      (Zn = Xi(
        (Jn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        })
      )),
      (er = kt({}, Jn, { view: 0, detail: 0 })),
      (tr = Xi(er)),
      (lr = kt({}, er, {
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
        getModifierState: Ji,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== ar &&
                (ar && "mousemove" === e.type
                  ? ((nr = e.screenX - ar.screenX),
                    (rr = e.screenY - ar.screenY))
                  : (rr = nr = 0),
                (ar = e)),
              nr);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : rr;
        },
      })),
      (or = Xi(lr)),
      (ir = kt({}, lr, { dataTransfer: 0 })),
      (ur = Xi(ir)),
      (sr = kt({}, er, { relatedTarget: 0 })),
      (cr = Xi(sr)),
      (fr = kt({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      (dr = Xi(fr)),
      (pr = kt({}, Jn, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      })),
      (hr = Xi(pr)),
      (mr = kt({}, Jn, { data: 0 })),
      (gr = Xi(mr)),
      (yr = {
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
        MozPrintableKey: "Unidentified",
      }),
      (vr = {
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
        224: "Meta",
      }),
      (br = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      }),
      (wr = kt({}, er, {
        key: function (e) {
          if (e.key) {
            var t = yr[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = Qi(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? vr[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ji,
        charCode: function (e) {
          return "keypress" === e.type ? Qi(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? Qi(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      })),
      (kr = Xi(wr)),
      (Er = kt({}, lr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      })),
      (Sr = Xi(Er)),
      (Cr = kt({}, er, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ji,
      })),
      (_r = Xi(Cr)),
      (xr = kt({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      (Pr = Xi(xr)),
      (Nr = kt({}, lr, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      })),
      (Tr = Xi(Nr)),
      (Rr = [9, 13, 27, 32]),
      (zr = Ct && "CompositionEvent" in window),
      (Or = null),
      Ct && "documentMode" in document && (Or = document.documentMode),
      (Lr = Ct && "TextEvent" in window && !Or),
      (Ir = Ct && (!zr || (Or && 8 < Or && 11 >= Or))),
      (Dr = String.fromCharCode(32)),
      (Mr = !1),
      (Fr = !1),
      (Ar = {
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
        week: !0,
      }),
      (Ur = null),
      (jr = null),
      (Br = !1),
      Ct &&
        (Ct
          ? ((Vr = "oninput" in document) ||
              ((Hr = document.createElement("div")).setAttribute(
                "oninput",
                "return;"
              ),
              (Vr = "function" == typeof Hr.oninput)),
            (qr = Vr))
          : (qr = !1),
        (Br = qr && (!document.documentMode || 9 < document.documentMode))),
      (Wr = "function" == typeof Object.is ? Object.is : du),
      ($r = Object.prototype.hasOwnProperty),
      (Qr = Ct && "documentMode" in document && 11 >= document.documentMode),
      (Gr = null),
      (Kr = null),
      (Xr = null),
      (Yr = !1),
      Li(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
      Li(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      Li(Bn, 2);
    for (
      Jr =
        "change selectionchange textInput compositionstart compositionend compositionupdate".split(
          " "
        ),
        Zr = 0;
      Zr < Jr.length;
      Zr++
    )
      jn.set(Jr[Zr], 0);
    if (
      (Po("onMouseEnter", ["mouseout", "mouseover"]),
      Po("onMouseLeave", ["mouseout", "mouseover"]),
      Po("onPointerEnter", ["pointerout", "pointerover"]),
      Po("onPointerLeave", ["pointerout", "pointerover"]),
      xo(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      xo(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      xo(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      xo(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      xo(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      ),
      (ea =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        )),
      (ta = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(ea)
      )),
      (na = "_reactListening" + Math.random().toString(36).slice(2)),
      (ra = null),
      (aa = null),
      (la = "function" == typeof setTimeout ? setTimeout : void 0),
      (oa = "function" == typeof clearTimeout ? clearTimeout : void 0),
      (ia = 0),
      (ua = Math.random().toString(36).slice(2)),
      (sa = "__reactFiber$" + ua),
      (ca = "__reactProps$" + ua),
      (fa = "__reactContainer$" + ua),
      (da = "__reactEvents$" + ua),
      (pa = []),
      (ha = -1),
      (ga = qu((ma = {}))),
      (ya = qu(!1)),
      (va = ma),
      (ba = null),
      (wa = null),
      (ka = vt().unstable_runWithPriority),
      (Ea = vt().unstable_scheduleCallback),
      (Sa = vt().unstable_cancelCallback),
      (Ca = vt().unstable_shouldYield),
      (_a = vt().unstable_requestPaint),
      (xa = vt().unstable_now),
      (Pa = vt().unstable_getCurrentPriorityLevel),
      (Na = vt().unstable_ImmediatePriority),
      (Ta = vt().unstable_UserBlockingPriority),
      (Ra = vt().unstable_NormalPriority),
      (za = vt().unstable_LowPriority),
      (Oa = vt().unstable_IdlePriority),
      (La = {}),
      (Ia = void 0 !== _a ? _a : function () {}),
      (Da = null),
      (Ma = null),
      (Fa = !1),
      (Aa = xa()),
      (Ua =
        1e4 > Aa
          ? xa
          : function () {
              return xa() - Aa;
            }),
      (ja = zt.ReactCurrentBatchConfig),
      (Ba = qu(null)),
      (qa = null),
      (Va = null),
      (Ha = null),
      (Wa = !1),
      ($a = new wt.Component().refs),
      (Qa = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && yi(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = Yc(),
            a = Jc(e),
            l = ds(r, a);
          (l.payload = t), null != n && (l.callback = n), ps(e, l), Zc(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = Yc(),
            a = Jc(e),
            l = ds(r, a);
          (l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            ps(e, l),
            Zc(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = Yc(),
            r = Jc(e),
            a = ds(n, r);
          (a.tag = 2), null != t && (a.callback = t), ps(e, a), Zc(e, r, n);
        },
      }),
      (Ga = Array.isArray),
      (Ka = Cs(!0)),
      (Xa = Cs(!1)),
      (Ja = qu((Ya = {}))),
      (Za = qu(Ya)),
      (el = qu(Ya)),
      (tl = qu(0)),
      (nl = null),
      (rl = null),
      (al = !1),
      (ll = []),
      (ol = zt.ReactCurrentDispatcher),
      (il = zt.ReactCurrentBatchConfig),
      (ul = 0),
      (sl = null),
      (cl = null),
      (fl = null),
      (dl = !1),
      (pl = !1),
      (hl = {
        readContext: ss,
        useCallback: As,
        useContext: As,
        useEffect: As,
        useImperativeHandle: As,
        useLayoutEffect: As,
        useMemo: As,
        useReducer: As,
        useRef: As,
        useState: As,
        useDebugValue: As,
        useDeferredValue: As,
        useTransition: As,
        useMutableSource: As,
        useOpaqueIdentifier: As,
        unstable_isNewReconciler: !1,
      }),
      (ml = {
        readContext: ss,
        useCallback: function (e, t) {
          return (Bs().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: ss,
        useEffect: tc,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Zs(4, 2, ac.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return Zs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Bs();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Bs();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch =
              cc.bind(null, sl, e)),
            [r.memoizedState, e]
          );
        },
        useRef: Ys,
        useState: Ks,
        useDebugValue: oc,
        useDeferredValue: function (e) {
          var t = Ks(e),
            n = t[0],
            r = t[1];
          return (
            tc(
              function () {
                var t = il.transition;
                il.transition = 1;
                try {
                  r(e);
                } finally {
                  il.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = Ks(!1),
            t = e[0];
          return Ys((e = sc.bind(null, e[1]))), [e, t];
        },
        useMutableSource: function (e, t, n) {
          var r = Bs();
          return (
            (r.memoizedState = {
              refs: { getSnapshot: t, setSnapshot: null },
              source: e,
              subscribe: n,
            }),
            Qs(r, e, t, n)
          );
        },
        useOpaqueIdentifier: function () {
          if (al) {
            var e = !1,
              t = (function (e) {
                return { $$typeof: Wt, toString: e, valueOf: e };
              })(function () {
                throw (
                  (e || ((e = !0), n("r:" + (ia++).toString(36))),
                  Error(_o(355)))
                );
              }),
              n = Ks(t)[1];
            return (
              0 == (2 & sl.mode) &&
                ((sl.flags |= 516),
                Xs(
                  5,
                  function () {
                    n("r:" + (ia++).toString(36));
                  },
                  void 0,
                  null
                )),
              t
            );
          }
          return Ks((t = "r:" + (ia++).toString(36))), t;
        },
        unstable_isNewReconciler: !1,
      }),
      (gl = {
        readContext: ss,
        useCallback: ic,
        useContext: ss,
        useEffect: nc,
        useImperativeHandle: lc,
        useLayoutEffect: rc,
        useMemo: uc,
        useReducer: Hs,
        useRef: Js,
        useState: function () {
          return Hs(Vs);
        },
        useDebugValue: oc,
        useDeferredValue: function (e) {
          var t = Hs(Vs),
            n = t[0],
            r = t[1];
          return (
            nc(
              function () {
                var t = il.transition;
                il.transition = 1;
                try {
                  r(e);
                } finally {
                  il.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = Hs(Vs)[0];
          return [Js().current, e];
        },
        useMutableSource: Gs,
        useOpaqueIdentifier: function () {
          return Hs(Vs)[0];
        },
        unstable_isNewReconciler: !1,
      }),
      (yl = {
        readContext: ss,
        useCallback: ic,
        useContext: ss,
        useEffect: nc,
        useImperativeHandle: lc,
        useLayoutEffect: rc,
        useMemo: uc,
        useReducer: Ws,
        useRef: Js,
        useState: function () {
          return Ws(Vs);
        },
        useDebugValue: oc,
        useDeferredValue: function (e) {
          var t = Ws(Vs),
            n = t[0],
            r = t[1];
          return (
            nc(
              function () {
                var t = il.transition;
                il.transition = 1;
                try {
                  r(e);
                } finally {
                  il.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = Ws(Vs)[0];
          return [Js().current, e];
        },
        useMutableSource: Gs,
        useOpaqueIdentifier: function () {
          return Ws(Vs)[0];
        },
        unstable_isNewReconciler: !1,
      }),
      (vl = zt.ReactCurrentOwner),
      (bl = !1),
      (wl = { dehydrated: null, retryLane: 0 }),
      (kl = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
      (El = function () {}),
      (Sl = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), _s(Ja.current);
          var l,
            o = null;
          switch (n) {
            case "input":
              (a = Bo(e, a)), (r = Bo(e, r)), (o = []);
              break;
            case "option":
              (a = Qo(e, a)), (r = Qo(e, r)), (o = []);
              break;
            case "select":
              (a = kt({}, a, { value: void 0 })),
                (r = kt({}, r, { value: void 0 })),
                (o = []);
              break;
            case "textarea":
              (a = Ko(e, a)), (r = Ko(e, r)), (o = []);
              break;
            default:
              "function" != typeof a.onClick &&
                "function" == typeof r.onClick &&
                (e.onclick = zu);
          }
          for (s in (ai(n, r), (n = null), a))
            if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
              if ("style" === s) {
                var i = a[s];
                for (l in i)
                  i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
              } else
                "dangerouslySetInnerHTML" !== s &&
                  "children" !== s &&
                  "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  "autoFocus" !== s &&
                  (St.hasOwnProperty(s)
                    ? o || (o = [])
                    : (o = o || []).push(s, null));
          for (s in r) {
            var u = r[s];
            if (
              ((i = null != a ? a[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            )
              if ("style" === s)
                if (i) {
                  for (l in i)
                    !i.hasOwnProperty(l) ||
                      (u && u.hasOwnProperty(l)) ||
                      (n || (n = {}), (n[l] = ""));
                  for (l in u)
                    u.hasOwnProperty(l) &&
                      i[l] !== u[l] &&
                      (n || (n = {}), (n[l] = u[l]));
                } else n || (o || (o = []), o.push(s, n)), (n = u);
              else
                "dangerouslySetInnerHTML" === s
                  ? ((u = u ? u.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != u && i !== u && (o = o || []).push(s, u))
                  : "children" === s
                  ? ("string" != typeof u && "number" != typeof u) ||
                    (o = o || []).push(s, "" + u)
                  : "suppressContentEditableWarning" !== s &&
                    "suppressHydrationWarning" !== s &&
                    (St.hasOwnProperty(s)
                      ? (null != u && "onScroll" === s && Eu("scroll", e),
                        o || i === u || (o = []))
                      : "object" == typeof u && null !== u && u.$$typeof === Wt
                      ? u.toString()
                      : (o = o || []).push(s, u));
          }
          n && (o = o || []).push("style", n);
          var s = o;
          (t.updateQueue = s) && (t.flags |= 4);
        }
      }),
      (Cl = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      }),
      (_l = "function" == typeof WeakMap ? WeakMap : Map),
      (xl = "function" == typeof WeakSet ? WeakSet : Set),
      (Pl = Math.ceil),
      (Nl = zt.ReactCurrentDispatcher),
      (Tl = zt.ReactCurrentOwner),
      (Rl = 0),
      (zl = null),
      (Ol = null),
      (Ll = 0),
      (Il = 0),
      (Dl = qu(0)),
      (Ml = 0),
      (Fl = null),
      (Al = 0),
      (Ul = 0),
      (jl = 0),
      (Bl = 0),
      (ql = null),
      (Vl = 0),
      (Hl = 1 / 0),
      (Wl = null),
      ($l = !1),
      (Ql = null),
      (Gl = null),
      (Kl = !1),
      (Xl = null),
      (Yl = 90),
      (Jl = []),
      (Zl = []),
      (eo = null),
      (to = 0),
      (no = null),
      (ro = -1),
      (ao = 0),
      (lo = 0),
      (oo = null),
      (io = !1),
      (uo = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || ya.current) bl = !0;
          else {
            if (0 == (n & r)) {
              switch (((bl = !1), t.tag)) {
                case 3:
                  wc(t), Ms();
                  break;
                case 5:
                  Ns(t);
                  break;
                case 1:
                  $u(t.type) && Xu(t);
                  break;
                case 4:
                  xs(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  Hu(Ba, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? kc(e, t, n)
                      : (Hu(tl, 1 & tl.current),
                        null !== (t = Nc(e, t, n)) ? t.sibling : null);
                  Hu(tl, 1 & tl.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return Pc(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    Hu(tl, tl.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), mc(e, t, n);
              }
              return Nc(e, t, n);
            }
            bl = 0 != (16384 & e.flags);
          }
        else bl = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = Wu(t, ga.current)),
              us(t, n),
              (a = js(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                $u(r))
              ) {
                var l = !0;
                Xu(t);
              } else l = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                cs(t);
              var o = r.getDerivedStateFromProps;
              "function" == typeof o && ys(t, r, o, e),
                (a.updater = Qa),
                (t.stateNode = a),
                (a._reactInternals = t),
                ks(t, r, e, n),
                (t = bc(null, t, r, !0, l, n));
            } else (t.tag = 0), fc(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (l = a._init)(a._payload)),
                (t.type = a),
                (l = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return zf(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === Ut) return 11;
                      if (e === qt) return 14;
                    }
                    return 2;
                  })(a)),
                (e = as(a, e)),
                l)
              ) {
                case 0:
                  t = yc(null, t, a, e, n);
                  break e;
                case 1:
                  t = vc(null, t, a, e, n);
                  break e;
                case 11:
                  t = dc(null, t, a, e, n);
                  break e;
                case 14:
                  t = pc(null, t, a, as(a.type, e), r, n);
                  break e;
              }
              throw Error(_o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              yc(e, t, r, (a = t.elementType === r ? a : as(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              vc(e, t, r, (a = t.elementType === r ? a : as(r, a)), n)
            );
          case 3:
            if ((wc(t), (r = t.updateQueue), null === e || null === r))
              throw Error(_o(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              fs(e, t),
              ms(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Ms(), (t = Nc(e, t, n));
            else {
              if (
                ((l = (a = t.stateNode).hydrate) &&
                  ((rl = Du(t.stateNode.containerInfo.firstChild)),
                  (nl = t),
                  (l = al = !0)),
                l)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((l = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      ll.push(l);
                for (n = Xa(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else fc(e, t, r, n), Ms();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Ns(t),
              null === e && Ls(t),
              (r = t.type),
              (a = t.pendingProps),
              (l = null !== e ? e.memoizedProps : null),
              (o = a.children),
              Lu(r, a) ? (o = null) : null !== l && Lu(r, l) && (t.flags |= 16),
              gc(e, t),
              fc(e, t, o, n),
              t.child
            );
          case 6:
            return null === e && Ls(t), null;
          case 13:
            return kc(e, t, n);
          case 4:
            return (
              xs(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ka(t, null, r, n)) : fc(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              dc(e, t, r, (a = t.elementType === r ? a : as(r, a)), n)
            );
          case 7:
            return fc(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return fc(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (o = t.memoizedProps),
                (l = a.value);
              var i = t.type._context;
              if ((Hu(Ba, i._currentValue), (i._currentValue = l), null !== o))
                if (
                  ((i = o.value),
                  0 ===
                    (l = Wr(i, l)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(i, l)
                          : 1073741823)))
                ) {
                  if (o.children === a.children && !ya.current) {
                    t = Nc(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                    var u = i.dependencies;
                    if (null !== u) {
                      o = i.child;
                      for (var s = u.firstContext; null !== s; ) {
                        if (s.context === r && 0 != (s.observedBits & l)) {
                          1 === i.tag &&
                            (((s = ds(-1, n & -n)).tag = 2), ps(i, s)),
                            (i.lanes |= n),
                            null !== (s = i.alternate) && (s.lanes |= n),
                            is(i.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        s = s.next;
                      }
                    } else
                      o = 10 === i.tag && i.type === t.type ? null : i.child;
                    if (null !== o) o.return = i;
                    else
                      for (o = i; null !== o; ) {
                        if (o === t) {
                          o = null;
                          break;
                        }
                        if (null !== (i = o.sibling)) {
                          (i.return = o.return), (o = i);
                          break;
                        }
                        o = o.return;
                      }
                    i = o;
                  }
              fc(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (l = t.pendingProps).children),
              us(t, n),
              (r = r((a = ss(a, l.unstable_observedBits)))),
              (t.flags |= 1),
              fc(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (l = as((a = t.type), t.pendingProps)),
              pc(e, t, a, (l = as(a.type, l)), r, n)
            );
          case 15:
            return hc(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : as(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              $u(r) ? ((e = !0), Xu(t)) : (e = !1),
              us(t, n),
              bs(t, r, a),
              ks(t, r, a, n),
              bc(null, t, r, !0, e, n)
            );
          case 19:
            return Pc(e, t, n);
          case 23:
          case 24:
            return mc(e, t, n);
        }
        throw Error(_o(156, t.tag));
      }),
      (Wf.prototype.render = function (e) {
        jf(e, this._internalRoot, null, null);
      }),
      (Wf.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo;
        jf(null, e, null, function () {
          t[fa] = null;
        });
      }),
      (bn = function (e) {
        13 === e.tag && (Zc(e, 4, Yc()), Vf(e, 4));
      }),
      (wn = function (e) {
        13 === e.tag && (Zc(e, 67108864, Yc()), Vf(e, 67108864));
      }),
      (kn = function (e) {
        if (13 === e.tag) {
          var t = Yc(),
            n = Jc(e);
          Zc(e, n, t), Vf(e, n);
        }
      }),
      (En = function (e, t) {
        return t();
      }),
      (ln = function (e, t, n) {
        switch (t) {
          case "input":
            if ((Ho(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = ju(r);
                  if (!a) throw Error(_o(90));
                  Uo(r), Ho(r, a);
                }
              }
            }
            break;
          case "textarea":
            Yo(e, n);
            break;
          case "select":
            null != (t = n.value) && Go(e, !!n.multiple, t, !1);
        }
      }),
      (ci = lf),
      (fi = function (e, t, n, r, a) {
        var l = Rl;
        Rl |= 4;
        try {
          return es(98, e.bind(null, t, n, r, a));
        } finally {
          0 === (Rl = l) && (Xc(), ns());
        }
      }),
      (di = function () {
        0 == (49 & Rl) &&
          ((function () {
            if (null !== eo) {
              var e = eo;
              (eo = null),
                e.forEach(function (e) {
                  (e.expiredLanes |= 24 & e.pendingLanes), tf(e, Ua());
                });
            }
            ns();
          })(),
          kf());
      }),
      (sn = function (e, t) {
        var n = Rl;
        Rl |= 2;
        try {
          return e(t);
        } finally {
          0 === (Rl = n) && (Xc(), ns());
        }
      }),
      (so = { Events: [Au, Uu, ju, ui, si, kf, { current: !1 }] }),
      (fo = {
        bundleType: (co = {
          findFiberByHostInstance: Fu,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        }).bundleType,
        version: co.version,
        rendererPackageName: co.rendererPackageName,
        rendererConfig: co.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: zt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = wi(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance: co.findFiberByHostInstance || Hf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      }),
      "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        !(po = __REACT_DEVTOOLS_GLOBAL_HOOK__).isDisabled &&
        po.supportsFiber)
    )
      try {
        (ba = po.inject(fo)), (wa = po);
      } catch (e) {}
    (ho = so),
      (bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ho),
      (mo = Gf),
      (bt.createPortal = mo),
      (go = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(_o(188));
          throw Error(_o(268, Object.keys(e)));
        }
        return (e = null === (e = wi(t)) ? null : e.stateNode);
      }),
      (bt.findDOMNode = go),
      (yo = function (e, t) {
        var n = Rl;
        if (0 != (48 & n)) return e(t);
        Rl |= 1;
        try {
          if (e) return es(99, e.bind(null, t));
        } finally {
          (Rl = n), ns();
        }
      }),
      (bt.flushSync = yo),
      (vo = function (e, t, n) {
        if (!$f(t)) throw Error(_o(200));
        return Qf(null, e, t, !0, n);
      }),
      (bt.hydrate = vo),
      (bo = function (e, t, n) {
        if (!$f(t)) throw Error(_o(200));
        return Qf(null, e, t, !1, n);
      }),
      (bt.render = bo),
      (wo = function (e) {
        if (!$f(e)) throw Error(_o(40));
        return (
          !!e._reactRootContainer &&
          (of(function () {
            Qf(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[fa] = null);
            });
          }),
          !0)
        );
      }),
      (bt.unmountComponentAtNode = wo),
      (ko = lf),
      (bt.unstable_batchedUpdates = ko),
      (Eo = function (e, t) {
        return Gf(
          e,
          t,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        );
      }),
      (bt.unstable_createPortal = Eo),
      (So = function (e, t, n, r) {
        if (!$f(n)) throw Error(_o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(_o(38));
        return Qf(e, t, n, !1, r);
      }),
      (bt.unstable_renderSubtreeIntoContainer = So),
      "17.0.2",
      (bt.version = "17.0.2");
  }
  var Xf = {};
  function Yf(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  !(function e() {
    if (
      "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (e) {
        console.error(e);
      }
  })(),
    Co || ((Co = !0), Kf()),
    (Xf = bt);
  var Jf,
    Zf = {};
  (Jf = function (e) {
    e.version = "1.2.0";
    var t = (function () {
      for (var e = 0, t = new Array(256), n = 0; 256 != n; ++n)
        (e =
          1 &
          (e =
            1 &
            (e =
              1 &
              (e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 & (e = 1 & (e = n) ? -306674912 ^ (e >>> 1) : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1)
                      ? -306674912 ^ (e >>> 1)
                      : e >>> 1)
                    ? -306674912 ^ (e >>> 1)
                    : e >>> 1)
                  ? -306674912 ^ (e >>> 1)
                  : e >>> 1)
                ? -306674912 ^ (e >>> 1)
                : e >>> 1)
              ? -306674912 ^ (e >>> 1)
              : e >>> 1)
            ? -306674912 ^ (e >>> 1)
            : e >>> 1),
          (t[n] = e);
      return "undefined" != typeof Int32Array ? new Int32Array(t) : t;
    })();
    (e.table = t),
      (e.bstr = function (e, n) {
        for (var r = -1 ^ n, a = e.length - 1, l = 0; l < a; )
          r =
            ((r = (r >>> 8) ^ t[255 & (r ^ e.charCodeAt(l++))]) >>> 8) ^
            t[255 & (r ^ e.charCodeAt(l++))];
        return (
          l === a && (r = (r >>> 8) ^ t[255 & (r ^ e.charCodeAt(l))]), -1 ^ r
        );
      }),
      (e.buf = function (e, n) {
        if (e.length > 1e4)
          return (function (e, n) {
            for (var r = -1 ^ n, a = e.length - 7, l = 0; l < a; )
              r =
                ((r =
                  ((r =
                    ((r =
                      ((r =
                        ((r =
                          ((r =
                            ((r = (r >>> 8) ^ t[255 & (r ^ e[l++])]) >>> 8) ^
                            t[255 & (r ^ e[l++])]) >>>
                            8) ^
                          t[255 & (r ^ e[l++])]) >>>
                          8) ^
                        t[255 & (r ^ e[l++])]) >>>
                        8) ^
                      t[255 & (r ^ e[l++])]) >>>
                      8) ^
                    t[255 & (r ^ e[l++])]) >>>
                    8) ^
                  t[255 & (r ^ e[l++])]) >>>
                  8) ^
                t[255 & (r ^ e[l++])];
            for (; l < a + 7; ) r = (r >>> 8) ^ t[255 & (r ^ e[l++])];
            return -1 ^ r;
          })(e, n);
        for (var r = -1 ^ n, a = e.length - 3, l = 0; l < a; )
          r =
            ((r =
              ((r =
                ((r = (r >>> 8) ^ t[255 & (r ^ e[l++])]) >>> 8) ^
                t[255 & (r ^ e[l++])]) >>>
                8) ^
              t[255 & (r ^ e[l++])]) >>>
              8) ^
            t[255 & (r ^ e[l++])];
        for (; l < a + 3; ) r = (r >>> 8) ^ t[255 & (r ^ e[l++])];
        return -1 ^ r;
      }),
      (e.str = function (e, n) {
        for (var r, a, l = -1 ^ n, o = 0, i = e.length; o < i; )
          (r = e.charCodeAt(o++)) < 128
            ? (l = (l >>> 8) ^ t[255 & (l ^ r)])
            : r < 2048
            ? (l =
                ((l = (l >>> 8) ^ t[255 & (l ^ (192 | ((r >> 6) & 31)))]) >>>
                  8) ^
                t[255 & (l ^ (128 | (63 & r)))])
            : r >= 55296 && r < 57344
            ? ((r = 64 + (1023 & r)),
              (a = 1023 & e.charCodeAt(o++)),
              (l =
                ((l =
                  ((l =
                    ((l = (l >>> 8) ^ t[255 & (l ^ (240 | ((r >> 8) & 7)))]) >>>
                      8) ^
                    t[255 & (l ^ (128 | ((r >> 2) & 63)))]) >>>
                    8) ^
                  t[255 & (l ^ (128 | ((a >> 6) & 15) | ((3 & r) << 4)))]) >>>
                  8) ^
                t[255 & (l ^ (128 | (63 & a)))]))
            : (l =
                ((l =
                  ((l = (l >>> 8) ^ t[255 & (l ^ (224 | ((r >> 12) & 15)))]) >>>
                    8) ^
                  t[255 & (l ^ (128 | ((r >> 6) & 63)))]) >>>
                  8) ^
                t[255 & (l ^ (128 | (63 & r)))]);
        return -1 ^ l;
      });
  }),
    "undefined" == typeof DO_NOT_EXPORT_CRC
      ? Jf("object" == typeof Zf ? Zf : {})
      : Jf({});
  var ed = e(Zf);
  function td(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const nd = 2051;
  var rd, ad, ld, od, id, ud;
  ((ad = rd || (rd = {}))[(ad.Decoding = 0)] = "Decoding"),
    (ad[(ad.EscReceived = 1)] = "EscReceived"),
    (ad[(ad.ClearingInvalidPacket = 2)] = "ClearingInvalidPacket");
  class sd {
    constructor() {
      td(this, "decoded_data", []), (this.decode_state = rd.Decoding);
    }
    encode(e) {
      let t = new Uint8Array(nd),
        n = 0;
      for (const r of e)
        r == sd.END
          ? ((t[n] = sd.ESC), (t[n + 1] = sd.ESC_END), (n += 2))
          : r == sd.ESC
          ? ((t[n] = sd.ESC), (t[n + 1] = sd.ESC_ESC), (n += 2))
          : ((t[n] = r), (n += 1));
      return (t[n] = sd.END), (n += 1), t.slice(0, n);
    }
    decode_byte(e) {
      let t = !1;
      if (e > 255 || e < 0)
        return (
          console.log("invalid argument"),
          [!1, this.decode_state, this.decoded_data]
        );
      switch (this.decode_state) {
        case rd.Decoding:
          e == sd.END
            ? (t = !0)
            : e == sd.ESC
            ? (this.decode_state = rd.EscReceived)
            : this.decoded_data.push(e);
          break;
        case rd.EscReceived:
          e == sd.ESC_END
            ? (this.decoded_data.push(sd.END),
              (this.decode_state = rd.Decoding))
            : e == sd.ESC_ESC
            ? (this.decoded_data.push(sd.ESC),
              (this.decode_state = rd.Decoding))
            : (this.decode_state = rd.ClearingInvalidPacket);
          break;
        case rd.ClearingInvalidPacket:
          e == sd.END && (this.decode_state = rd.Decoding);
      }
      if (t) {
        let e = this.decoded_data.slice();
        return (this.decoded_data = []), [t, this.decode_state, e];
      }
      return [t, this.decode_state, this.decoded_data];
    }
  }
  td(sd, "END", 192),
    td(sd, "ESC", 219),
    td(sd, "ESC_END", 220),
    td(sd, "ESC_ESC", 221),
    ((od = ld || (ld = {}))[(od.VERSION = 0)] = "VERSION"),
    (od[(od.CREATE = 1)] = "CREATE"),
    (od[(od.SRN = 2)] = "SRN"),
    (od[(od.CRC = 3)] = "CRC"),
    (od[(od.EXECUTE = 4)] = "EXECUTE"),
    (od[(od.SELECT = 6)] = "SELECT"),
    (od[(od.MTU = 7)] = "MTU"),
    (od[(od.WRITE = 8)] = "WRITE"),
    (od[(od.PING = 9)] = "PING"),
    (od[(od.HW_VER = 10)] = "HW_VER"),
    (od[(od.SW_VER = 11)] = "SW_VER"),
    (od[(od.ABORT = 12)] = "ABORT"),
    (od[(od.RESPONSE = 96)] = "RESPONSE"),
    ((ud = id || (id = {}))[(ud.INVALID_CODE = 0)] = "INVALID_CODE"),
    (ud[(ud.SUCCESS = 1)] = "SUCCESS"),
    (ud[(ud.NOTSUPPORTED = 2)] = "NOTSUPPORTED"),
    (ud[(ud.INVALID_PARAMETER = 3)] = "INVALID_PARAMETER"),
    (ud[(ud.INSUFFICIENT_RESOURCES = 4)] = "INSUFFICIENT_RESOURCES"),
    (ud[(ud.INVALID_OBJECT = 5)] = "INVALID_OBJECT"),
    (ud[(ud.INVALID_SIGNATURE = 6)] = "INVALID_SIGNATURE"),
    (ud[(ud.UNSUPPORTED_TYPE = 7)] = "UNSUPPORTED_TYPE"),
    (ud[(ud.OPERATION_NOTPERMITTED = 8)] = "OPERATION_NOTPERMITTED"),
    (ud[(ud.OPERATION_FAILED = 10)] = "OPERATION_FAILED"),
    (ud[(ud.EXTENDED_ERROR = 11)] = "EXTENDED_ERROR");
  class cd {
    sleep(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    async waitReceive() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
      for (; 0 == this.received && e > 0; ) await this.sleep(1), e--;
      if (0 == e) throw new Error("DFU command timeout");
      if (1 == this.received) {
        if (!this.command_result.success)
          throw (
            ((this.received = !1),
            new Error("Failed to receive command response."))
          );
        this.received = !1;
      }
    }
    async getProtocolVersion() {
      return (
        (this.sending_opcode = ld.VERSION),
        await this.send(new Uint8Array([this.sending_opcode])),
        await this.waitReceive(),
        this.command_result
          ? this.command_result.data[0]
          : (console.error("Get Protocol Ver:Failed"), Promise.reject())
      );
    }
    async setPacketReceiptNotification(e) {
      if (
        ((this.sending_opcode = ld.SRN),
        await this.send(new Uint8Array([this.sending_opcode, e])),
        await this.waitReceive(),
        !this.command_result.success)
      )
        return Promise.reject("Failed to set Packet Receipt Notification.");
    }
    async getMtu() {
      (this.sending_opcode = ld.MTU),
        await this.send(new Uint8Array([this.sending_opcode])),
        await this.waitReceive();
      let e = new Uint8Array(this.command_result.data),
        t = new Uint16Array(e.buffer);
      return this.command_result.success
        ? t[0]
        : (console.error("Get mtu:Failed"),
          Promise.reject(new Error("Failed to get MTU")));
    }
    async createObject(e, t) {
      if (
        ((this.sending_opcode = ld.CREATE),
        await this.send(
          new Uint8Array([
            this.sending_opcode,
            e,
            255 & t,
            (t >> 8) & 255,
            (t >> 16) & 255,
            (t >> 24) & 255,
          ])
        ),
        await this.waitReceive(),
        !this.command_result.success)
      )
        return Promise.reject(new Error("Failed to create Object"));
    }
    async createCommand(e) {
      return this.createObject(1, e);
    }
    async createData(e) {
      return this.createObject(2, e);
    }
    async selectObject(e) {
      (this.sending_opcode = ld.SELECT),
        await this.send(new Uint8Array([this.sending_opcode, e])),
        await this.waitReceive();
      let t = new Uint8Array(this.command_result.data),
        n = new Int32Array(t.buffer);
      return new Promise((e, t) => {
        if (this.command_result.success) {
          let t = { max_size: n[0], offset: n[1], crc: n[2] };
          console.log("select object:", t), e(t);
        } else t();
      });
    }
    async selectCommand() {
      return this.selectObject(1);
    }
    async selectData() {
      return this.selectObject(2);
    }
    async requestChecksum() {
      if (
        ((this.sending_opcode = ld.CRC),
        await this.send(new Uint8Array([this.sending_opcode])),
        await this.waitReceive(),
        this.command_result.success)
      ) {
        let e = new Uint8Array(this.command_result.data),
          t = new Int32Array(e.buffer);
        return new Promise((e) => {
          e({ max_size: 0, offset: t[0], crc: t[1] });
        });
      }
      return new Promise((e) => {
        e(null);
      });
    }
    async requestExecute() {
      return (
        (this.sending_opcode = ld.EXECUTE),
        await this.send(new Uint8Array([this.sending_opcode])),
        await this.waitReceive(),
        new Promise((e, t) => {
          this.command_result.success ? e() : t();
        })
      );
    }
    async streamData(e, t, n) {
      let r,
        a = 0,
        l = e.length;
      for (a = 0; a < l; a += 1024) {
        r = e.slice(a, a + 1024);
        let l = new Uint8Array(1 + r.length);
        (this.sending_opcode = ld.WRITE),
          l.set([ld.WRITE]),
          l.set(r, 1),
          await this.send(l),
          (t = ed.buf(r, t)),
          (n += r.length);
      }
      let o = await this.requestChecksum();
      return o
        ? (console.log("crc_response", o),
          t != o.crc
            ? (console.error(
                "CRC Error: Expect: 0x"
                  .concat(t.toString(16), ", Received: 0x")
                  .concat(o.crc.toString(16))
              ),
              Promise.reject(new Error("CRC Error.")))
            : n != o.offset
            ? Promise.reject(new Error("Offset error. Packet lossed."))
            : t)
        : Promise.reject(new Error("Failed to get checksum."));
    }
    decodeReceivePacket(e) {
      let t,
        n = !1,
        r = rd.Decoding;
      for (const a of e) {
        if ((([n, r, t] = this.slip.decode_byte(a)), n))
          return console.log("SLIP packet decoded"), [!0, t];
        if (r == rd.ClearingInvalidPacket)
          return console.log("Invalid SLIP packet"), [!0, null];
      }
      return [!1, null];
    }
    onReceivePacket(e) {
      let [t, n] = this.decodeReceivePacket(e);
      t && n && (this.messageParaser(n.slice()), (this.received = !0));
    }
    messageParaser(e) {
      (this.command_result.success = !1),
        (this.command_result.data = []),
        e[0] != ld.RESPONSE &&
          console.error("invalid response: not response packet"),
        e[1] != this.sending_opcode &&
          console.error(
            "invalid response: different opcode. expect "
              .concat(this.sending_opcode, ", received ")
              .concat(e[1])
          ),
        e[2] == id.SUCCESS
          ? (console.log("dfu command successed", this.sending_opcode),
            (this.command_result.success = !0),
            (this.command_result.data = e.slice(3)))
          : e[2] == id.EXTENDED_ERROR
          ? console.error("extend error:", e[3])
          : console.error("invalid response: oeperation failed:", e[2]);
    }
    constructor(e) {
      td(this, "slip", new sd()),
        td(this, "received", !1),
        td(this, "sending_opcode", null),
        td(this, "command_result", { success: !1, data: [] }),
        (this.serial = e),
        e.setReceiveCallback(this.onReceivePacket.bind(this));
    }
    async checkIntegrity() {
      await this.setPacketReceiptNotification(0);
      let e = await this.getMtu();
      return (
        e == nd ||
        (console.error("Wrong MTU:".concat(e, " Expected:").concat(nd)), !1)
      );
    }
    async send(e) {
      let t = this.slip.encode(e);
      if (
        (console.log("serial send ".concat(t.byteLength, "byte")),
        !this.serial.connected)
      )
        return Promise.reject(new Error("Serial port is not opend."));
      await this.serial.write(t);
    }
    async sendInitpacket(e) {
      let t = Object.assign({}, await this.selectCommand());
      return (
        console.log("Select Command:", t),
        t
          ? t.max_size < e.length
            ? Promise.reject(new Error("Too long init packet."))
            : void (
                (t &&
                  (await (async (t) => {
                    if (
                      (console.log("try to resume init packet"),
                      0 == t.offset || t.offset > e.length)
                    )
                      return console.log("Nothing to resume"), !1;
                    let n = ed.buf(e.slice(0, t.offset));
                    return n != t.crc
                      ? (console.log("invalid crc"), !1)
                      : (e.length > t.offset &&
                          (console.log("resume init packet"),
                          await this.streamData(
                            e.slice(t.offset),
                            n,
                            t.offset
                          )),
                        await this.requestExecute(),
                        !0);
                  })(t))) ||
                (console.log("send intial packet from head"),
                await this.createCommand(e.length),
                await this.streamData(e, 0, 0),
                await this.requestExecute())
              )
          : Promise.reject(new Error("Invalid response."))
      );
    }
    async sendFirmware(e, t) {
      let n = Object.assign({}, await this.selectData());
      if (!n) return Promise.reject(new Error("Invalid response."));
      console.log("Select Data:", n),
        await (async (t) => {
          if ((console.log("try to resume firmware packet"), 0 == t.offset))
            return console.log("Nothing to resume"), !1;
          let n = ed.buf(e.slice(0, t.offset)),
            r = t.offset % t.max_size;
          if (n != t.crc)
            return (
              console.log("invalid crc"),
              (t.offset -= r || t.max_size),
              (t.crc = ed.buf(e.slice(0, t.offset))),
              !1
            );
          if (0 != r && t.offset != e.length) {
            console.log("resume firmware image"),
              console.log("send a chunk of firmware image");
            let n = e.slice(t.offset, t.offset + t.max_size - r);
            t.crc = await this.streamData(n, t.crc, t.offset);
          }
          return await this.requestExecute(), !1;
        })(n);
      let r = n.offset,
        a = e.length;
      for (
        console.log("write ".concat(a, " bytes, strat from ").concat(r));
        r < a;
        r += n.max_size
      ) {
        console.log(
          "send a chunk of firmware image ["
            .concat(r, ":")
            .concat(r + n.max_size, "]/")
            .concat(a, " => ")
            .concat(Math.floor((r / a) * 100), "%")
        );
        let l = e.slice(r, r + n.max_size);
        await this.createData(l.length),
          (n.crc = await this.streamData(l, n.crc, r)),
          await this.requestExecute(),
          t && t(Math.floor((r / a) * 100));
      }
      t && t(Math.floor((r / a) * 100));
    }
  }
  function fd(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  function dd(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  class pd {
    constructor(e) {
      var t = this;
      dd(this, "defaultBaudrate", 115200),
        dd(
          this,
          "open",
          async () => (
            this.port.connected ||
              (await this.port.open(
                () => {},
                this.defaultBaudrate,
                this.filters ? { filters: this.filters } : null
              ),
              this.port.startReadLoop()),
            this.port.connected
          )
        ),
        dd(this, "close", async () => {
          this.port.setReceiveCallback(() => {}), await this.port.close();
        }),
        dd(this, "extractJson", (e) =>
          e.slice(e.indexOf("{"), e.lastIndexOf("}") + 1)
        ),
        dd(this, "extractMessage", (e) => e.replace(/.*bmp@.*/gm, "").trim()),
        dd(this, "sendCommand", async function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.extractJson;
          const a = await t.open();
          if (!a) return;
          let l = "";
          t.port.setReceiveCallback((e) => {
            l = l.concat(new TextDecoder().decode(e));
          });
          try {
            t.port.writeString("\n".concat(e, "\n")),
              await fd(n),
              console.log(l),
              (l = r(l)),
              console.log(l);
          } catch (e) {
            console.error(e);
          } finally {
            t.port.setReceiveCallback(() => {});
          }
          return l;
        }),
        dd(
          this,
          "getVersion",
          async () =>
            await this.sendCommand("version", 500, this.extractMessage)
        ),
        dd(this, "getConfig", async () => {
          const e = await this.sendCommand("conf");
          try {
            return JSON.parse(e);
          } catch (e) {
            return await this.close(), console.error(e), null;
          }
        }),
        dd(this, "getTappingTerm", async () => {
          const e = await this.sendCommand("tap");
          return JSON.parse(e);
        }),
        dd(this, "startAdvertise", async (e) => {
          null != e
            ? (console.log("adv ".concat(e)),
              await this.sendCommand("adv ".concat(e)))
            : (console.log("adv"), await this.sendCommand("adv"));
        }),
        dd(this, "getBondingList", async () => {
          const e = await this.sendCommand("show");
          try {
            return JSON.parse(e);
          } catch (e) {
            return console.error(e), await this.close(), null;
          }
        }),
        dd(this, "deleteBonding", async (e) => {
          console.log("del ".concat(e)),
            await this.sendCommand("del ".concat(e));
        }),
        dd(this, "updateConfig", async (e) => {
          await this.port.writeString("\nfile config\n"),
            await this.port.writeString(e),
            await this.port.writeString("\0"),
            await this.port.writeString("\nupdate 0\n");
        }),
        dd(this, "updateTappingTerm", async (e) => {
          await this.port.writeString("\nfile tapterm\n"),
            await this.port.writeString(e),
            await this.port.writeString("\0"),
            await this.port.writeString("\nupdate 2\n");
        }),
        dd(this, "isBmp", async () => {
          try {
            const e = await this.sendCommand("conf"),
              t = JSON.parse(e);
            return null != (null == t ? void 0 : t.config);
          } catch (e) {
            return console.error(e), !1;
          }
        }),
        dd(this, "activateBootloader", async () => {
          if (!this.port.connected)
            try {
              await this.port.open(
                null,
                57600,
                null != this.filters
                  ? {
                      filters: this.filters.concat({
                        usbVendorId: 6421,
                        usbProductId: 21023,
                      }),
                    }
                  : null
              ),
                this.port.startReadLoop();
            } catch (e) {
              return console.error(e), await this.close(), "comError";
            }
          if (1 == (await this.isBmp()))
            try {
              return (
                console.log("send dfu wake up command"),
                await this.port.writeString("\ndfu\nÀ"),
                await this.close(),
                "dfuActivate"
              );
            } catch (e) {
              return console.error(e), await this.close(), "comError";
            }
          const e = new cd(this.port);
          let t = !1;
          try {
            console.log("check dfu"), (t = await e.checkIntegrity());
          } catch (e) {
            console.error(e), (t = !1), await this.close();
          }
          return t && console.log("dfu found"), "dfuFound";
        }),
        dd(this, "updateFirmware", async (e, t, n) => {
          const r = await this.activateBootloader();
          if ("comError" === r) return { error: "Access to Invalid port" };
          if ("dfuActivate" === r) return "DfuActivate";
          const a = new cd(this.port);
          try {
            await a.sendInitpacket(t);
          } catch (e) {
            return (
              await this.close(),
              console.error(e),
              { error: "Failed to send init packet: ".concat(e) }
            );
          }
          try {
            return await a.sendFirmware(e, n), await this.close(), "Success";
          } catch (e) {
            return (
              await this.close(),
              console.error(e),
              { error: "Failed to send firmware image: ".concat(e) }
            );
          }
        }),
        dd(this, "tryLock", async (e) => {
          const t = this.lock();
          if (null != t)
            try {
              await e();
            } finally {
              this.release(t);
            }
        }),
        dd(this, "lock", () =>
          this.isBusy ? null : ((this.isBusy = !0), this)
        ),
        dd(this, "release", (e) => e === this && ((this.isBusy = !1), !0)),
        (this.port = e),
        (this.filters = null);
    }
    static getInstance(e) {
      return (
        this.bleMicroPro || (this.bleMicroPro = new pd(e)), this.bleMicroPro
      );
    }
  }
  const hd = [87, 171],
    md = [
      161, 18, 0, 89, 17, 77, 67, 85, 32, 73, 83, 80, 32, 38, 32, 87, 67, 72,
      46, 67, 78,
    ],
    gd = [162, 1, 0, 1],
    yd = [163, 34, 0],
    vd = [164, 1, 0, 0],
    bd = [165, 0, 0, 0, 0, 0, 0, 0],
    wd = [166, 0, 0, 0, 0, 0, 0, 0],
    kd = [167, 2, 0, 31, 0],
    Ed = [168, 14, 0, 7, 0, 255, 255, 255, 255, 3, 0, 0, 0, 255, 78, 0, 0];
  class Sd {
    constructor(e) {
      var t, n, r;
      (r = []),
        (n = "comReceive") in (t = this)
          ? Object.defineProperty(t, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = r),
        (this.serial = e);
    }
    dumpHex(e) {
      return e.map((e) => e.toString(16)).join(" ");
    }
    sleep(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    splitToChunk(e, t) {
      let n,
        r,
        a = [];
      for (n = 0, r = e.length; n < r; n += t) a.push(e.slice(n, n + t));
      return a;
    }
    receiveResponse(e) {
      this.comReceive = this.comReceive.concat(Array.from(e));
    }
    async readResponse(e, t) {
      let n = 0;
      for (; this.comReceive.length < e && n < t; )
        await this.sleep(1), (n += 1);
      if (n >= t) return [];
      let r = this.comReceive.slice(0, e);
      return (this.comReceive = this.comReceive.slice(e)), r;
    }
    convertPayload(e, t, n) {
      return e.map((e, r) =>
        r % 8 == 7 ? 255 & (e ^ ((t + n) & 255)) : 255 & (e ^ t)
      );
    }
    appendHeader(e) {
      return hd.concat(e);
    }
    appendCheckSum(e) {
      return e.concat((256 + e.reduce((e, t) => e + t)) & 255);
    }
    makeFlashCmd(e, t, n, r, a, l) {
      let o = Array.from(e);
      return (
        (o[1] = r.length + 5),
        (o[3] = 255 & t),
        (o[4] = (t >> 8) & 255),
        (o[7] = 255 & n),
        (o = o.concat(Array.from(this.convertPayload(r, a, l)))),
        (o = this.appendCheckSum(o)),
        this.appendHeader(o)
      );
    }
    makeFlashWriteCmd(e, t, n, r, a) {
      return this.makeFlashCmd(bd, e, t, n, r, a);
    }
    makeVerifyCmd(e, t, n, r, a) {
      return this.makeFlashCmd(wd, e, t, n, r, a);
    }
    makeEraseCmd(e) {
      let t = vd,
        n = Math.floor((e + 1024 - 1) / 1024);
      if (n > 60) throw new Error("Erase size is too large");
      return (
        (t[3] = n), (t = this.appendCheckSum(t)), (t = this.appendHeader(t)), t
      );
    }
    makeResetCmd() {
      let e = gd;
      return (e = this.appendCheckSum(e)), (e = this.appendHeader(e)), e;
    }
    makeDetectCmd() {
      let e = md;
      return (e = this.appendCheckSum(e)), (e = this.appendHeader(e)), e;
    }
    makeReadCfgCmd() {
      let e = kd;
      return (e = this.appendCheckSum(e)), (e = this.appendHeader(e)), e;
    }
    makeWriteCfgCmd(e) {
      let t = Ed;
      switch (e) {
        case "4.6":
          t[9] = 3;
          break;
        case "5.1":
          t[9] = 1;
          break;
        default:
          t[9] = 3;
      }
      return (t = this.appendCheckSum(t)), (t = this.appendHeader(t)), t;
    }
    makeSendKeyCmd() {
      let e = Array.from(yd).concat(Array(34).fill(0));
      return (e = this.appendCheckSum(e)), (e = this.appendHeader(e)), e;
    }
    async sendCommand(e, t) {
      await this.serial.write(Uint8Array.from(e));
      let n = await this.readResponse(t, 1e3);
      if (
        (console.log("Receive: ".concat(this.dumpHex(n))),
        n.length < t || 0 != n[5])
      )
        throw new Error("Command failed");
      return n;
    }
    async detect() {
      let e = this.makeDetectCmd();
      console.log("Send detect: ".concat(this.dumpHex(e))),
        await this.sendCommand(e, 9);
    }
    async getCfg() {
      let e = this.makeReadCfgCmd();
      console.log("Send cfg: ".concat(this.dumpHex(e)));
      let t = await this.sendCommand(e, 33);
      return {
        version: "ver".concat(t[21], ".").concat(t[22], ".").concat(t[23]),
        checksum: 255 & t.slice(24, 28).reduce((e, t) => e + t),
        bootPinConfig: 1 == t[13] ? "5.1" : "4.6",
      };
    }
    async writeCfg(e) {
      let t = this.makeWriteCfgCmd(e);
      console.log("Write cfg: ".concat(this.dumpHex(t))),
        await this.sendCommand(t, 9);
    }
    async eraseChip(e) {
      let t = this.makeEraseCmd(e);
      console.log("Send erase: ".concat(this.dumpHex(t))),
        await this.sendCommand(t, 9);
    }
    async reset() {
      let e = this.makeResetCmd();
      console.log("Send reset: ".concat(this.dumpHex(e))),
        await this.sendCommand(e, 9);
    }
    async sendKey() {
      let e = this.makeSendKeyCmd();
      console.log("Send key: ".concat(this.dumpHex(e))),
        await this.sendCommand(e, 9);
    }
    async opBinFile(e, t, n, r) {
      let a =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        l = this.splitToChunk(e, 56),
        o = 0,
        i = e.length;
      for (let e of l) {
        let l;
        if (
          (e.length < 56 &&
            (e = Array.from(e).concat(Array(56 - e.length).fill(255))),
          "write" === t)
        )
          l = this.makeFlashWriteCmd(o, i, e, n, r);
        else {
          if ("verify" !== t) throw new Error("Unknown operation :".concat(t));
          l = this.makeVerifyCmd(o, i, e, n, r);
        }
        if (
          ((o += e.length),
          (i -= e.length),
          console.log("Send ".concat(t, ": ").concat(this.dumpHex(l))),
          0 != (await this.sendCommand(l, 9))[6])
        )
          throw new Error(
            "".concat(t, " failed address 0x").concat(o.toString(16))
          );
        null != a && a(o, i);
      }
    }
    async openPort() {
      (this.comReceive = []),
        this.serial.setReceiveCallback(this.receiveResponse.bind(this)),
        this.serial.connected ||
          (await this.serial.open(null, 57600), this.serial.startReadLoop());
    }
    async initBootloader() {
      await this.detect();
      let { version: e, checksum: t, bootPinConfig: n } = await this.getCfg();
      return (
        console.log(
          "Ch55x version "
            .concat(e, ", checksum ")
            .concat(t, ", bootPinConfig ")
            .concat(n)
        ),
        { version: e, checksum: t, bootPinConfig: n }
      );
    }
    async flash(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : () => {};
      await this.openPort();
      try {
        let r = await this.initBootloader();
        r.bootPinConfig != t && (await this.writeCfg(t)),
          await this.eraseChip(e.length),
          await this.sendKey(),
          n("write start.\n"),
          await this.opBinFile(e, "write", r.checksum, 89, (e, t) => {
            n(".");
          }),
          n("write complete.\n"),
          await this.sendKey(),
          n("verify start.\n"),
          await this.opBinFile(e, "verify", r.checksum, 89, (e, t) => {
            n(".");
          }),
          n("verify complete.\n"),
          await this.reset(),
          n("Flash Succeeded.\n");
      } catch (e) {
        n("\n" + e.toString() + "\n"), n("Flash failed.\n");
      } finally {
        await this.serial.close();
      }
    }
    async verify(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : () => {};
      await this.openPort();
      try {
        let n = await this.initBootloader();
        await this.sendKey(),
          t("verify start.\n"),
          await this.opBinFile(e, "verify", n.checksum, 89, (e, n) => {
            t(".");
          }),
          t("verify complete.\n"),
          await this.reset(),
          t("Verify Succeeded.\n");
      } catch (e) {
        t("\n" + e.toString() + "\n"), t("Verify failed.\n");
      } finally {
        await this.serial.close();
      }
    }
  }
  function Cd(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  class _d extends pd {
    constructor(e) {
      super(e),
        Cd(this, "activateCh55xBootloader", async () => {
          await this.sendCommand("chboot");
        }),
        Cd(
          this,
          "getVersion",
          async () =>
            (await this.sendCommand("version", 500, this.extractMessage)) +
            "\n\n" +
            (await this.sendCommand("chver", 500, this.extractMessage))
        ),
        Cd(this, "updateCh55xFirmware", async (e, t) => {
          this.port.connected && (await this.port.close()),
            (await this.isBmp())
              ? (await this.activateCh55xBootloader(),
                await this.ch55xBootloader.flash(e, "5.1", t))
              : t("Quantizer not found");
        }),
        (this.defaultBaudrate = 57600),
        (this.filters = [{ usbVendorId: 65261, usbProductId: 39323 }]),
        (this.ch55xBootloader = new Sd(e));
    }
    static getInstance(e) {
      return this.quantizer || (this.quantizer = new _d(e)), this.quantizer;
    }
  }
  ye(), ye();
  const xd = (e) =>
      ye().createElement(
        "div",
        { className: "language-plaintext highlighter-rouge", style: e.style },
        ye().createElement("code", { style: { whiteSpace: "pre" } }, e.msg)
      ),
    Pd = (e) => {
      const t = e.bonding.map((t, n) =>
        ye().createElement(
          "li",
          { key: n },
          ye().createElement(
            "button",
            {
              className: "btn btn-outline mr-1",
              onClick: () => {
                e.quantizer.startAdvertise(t.id);
              },
            },
            "Connect"
          ),
          ye().createElement(
            "button",
            {
              className: "btn btn-outline",
              onClick: () => {
                e.quantizer.deleteBonding(t.id);
              },
            },
            "Delete"
          ),
          "ID: ",
          t.id,
          ", ",
          t.name
        )
      );
      return ye().createElement("ul", null, t);
    },
    Nd = (e) => {
      const [t, n] = ye().useState([]),
        [r, a] = ye().useState("");
      return ye().createElement(
        "div",
        null,
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: async () => {
              try {
                await e.quantizer.startAdvertise(), a("Start pairing...");
              } catch (e) {
                a("".concat(e));
              }
            },
          },
          "Pairing"
        ),
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: async () => {
              a("Get pair list...");
              try {
                const t = await e.quantizer.getBondingList();
                t && n(t.bonding), a("Get pair list...complete");
              } catch (e) {
                a("".concat(e));
              }
            },
          },
          "Update"
        ),
        ye().createElement(Pd, { bonding: t, quantizer: e.quantizer }),
        ye().createElement(xd, { msg: r })
      );
    };
  ye(), ye();
  const Td = (e) =>
    ye().createElement("input", {
      type: "number",
      value: e.value,
      min: e.min,
      max: e.max,
      style: { width: "50px" },
      onChange: (t) => {
        const n = parseInt(t.target.value);
        n >= e.min && n <= e.max && e.onChange(t);
      },
    });
  function Rd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function zd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Rd(Object(n), !0).forEach(function (t) {
            Od(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Rd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Od(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const Ld = (e) => {
    const [t, n] = ye().useState({ interval: 10, duty: 1 }),
      [r, a] = ye().useState("");
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "button",
        {
          className: "btn btn-purple mr-1",
          onClick: () => {
            e.quantizer.tryLock(() =>
              (async () => {
                a("Get current config...");
                try {
                  const t = await e.quantizer.getConfig();
                  if (t)
                    return (
                      n({
                        interval: t.config.reserved[3],
                        duty: t.config.reserved[4],
                      }),
                      a("Get current config...Complete"),
                      t
                    );
                } catch (e) {
                  a("".concat(e));
                }
              })()
            );
          },
        },
        "Get"
      ),
      ye().createElement(
        "button",
        {
          className: "btn btn-purple",
          onClick: () => {
            e.quantizer.tryLock(() =>
              (async () => {
                a("Set new config...");
                try {
                  const n = await e.quantizer.getConfig();
                  if (n) {
                    (n.config.reserved[3] = t.interval),
                      (n.config.reserved[4] = t.duty);
                    const r = JSON.stringify(n);
                    await e.quantizer.updateConfig(r);
                  }
                  a("Set new config...Complete");
                } catch (e) {
                  a("".concat(e));
                }
              })()
            );
          },
        },
        "Set"
      ),
      ye().createElement(
        "p",
        null,
        "間隔",
        ye().createElement(Td, {
          value: t.interval,
          min: 0,
          max: 255,
          onChange: (e) => {
            n(zd(zd({}, t), {}, { interval: parseInt(e.target.value) }));
          },
        }),
        "[秒]"
      ),
      ye().createElement(
        "p",
        null,
        "時間",
        ye().createElement(Td, {
          value: t.duty,
          min: 0,
          max: 50,
          onChange: (e) => {
            n(zd(zd({}, t), {}, { duty: parseInt(e.target.value) }));
          },
        }),
        "[%]"
      ),
      ye().createElement(xd, { msg: r })
    );
  };
  ye();
  const Id = (e) => {
    const [t, n] = ye().useState("default"),
      [r, a] = ye().useState(""),
      l = (e) => {
        n(e.target.value);
      };
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "button",
        {
          className: "btn btn-purple mr-1",
          onClick: () => {
            e.quantizer.tryLock(() =>
              (async () => {
                a("Get current config...");
                try {
                  var t, r;
                  const l = await e.quantizer.getConfig();
                  1 ==
                  (null == l ||
                  null === (t = l.config) ||
                  void 0 === t ||
                  null === (r = t.matrix) ||
                  void 0 === r
                    ? void 0
                    : r.diode_direction)
                    ? n("fixed")
                    : n("default"),
                    a("Get current config...Complete");
                } catch (e) {
                  a("".concat(e));
                }
              })()
            );
          },
        },
        "Get"
      ),
      ye().createElement(
        "button",
        {
          className: "btn btn-purple",
          onClick: () => {
            e.quantizer.tryLock(() =>
              (async () => {
                a("Set new config...");
                try {
                  var n, r;
                  let l = await e.quantizer.getConfig();
                  null !=
                    (null == l ||
                    null === (n = l.config) ||
                    void 0 === n ||
                    null === (r = n.matrix) ||
                    void 0 === r
                      ? void 0
                      : r.diode_direction) &&
                    (l.config.matrix.diode_direction = "fixed" === t ? 1 : 0);
                  const o = JSON.stringify(l);
                  console.log(o),
                    await e.quantizer.updateConfig(o),
                    a("Set new config...Complete");
                } catch (e) {
                  a("".concat(e));
                }
              })()
            );
          },
        },
        "Set"
      ),
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "label",
          null,
          ye().createElement("input", {
            type: "radio",
            name: "parser",
            id: "default",
            value: "default",
            onChange: l,
            checked: "default" === t,
          }),
          "Default"
        )
      ),
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "label",
          null,
          ye().createElement("input", {
            type: "radio",
            name: "parser",
            id: "fixed",
            value: "fixed",
            onChange: l,
            checked: "fixed" === t,
          }),
          "Fixed"
        )
      ),
      ye().createElement(xd, { msg: r })
    );
  };
  ye();
  const Dd = (e) => {
    var t;
    const [n, r] = ye().useState(!0),
      [a, l] = ye().useState(""),
      [o, i] = ye().useState(
        e.firmware[null !== (t = e.defaultIndex) && void 0 !== t ? t : 0].path
      );
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "label",
          null,
          "version: ",
          ye().createElement(
            "select",
            {
              onChange: (t) => {
                i(e.firmware.find((e) => e.name == t.target.value).path);
              },
            },
            e.firmware.map((e, t) =>
              ye().createElement("option", { key: t }, e.name)
            )
          )
        )
      ),
      ye().createElement(
        "button",
        {
          className: "btn btn-purple mt-1",
          style: { width: "300px" },
          onClick: () => {
            n &&
              (r(!1),
              e.bleMicroPro.tryLock(() =>
                (async () => {
                  var t;
                  const n = o.concat(
                    null !== (t = e.suffix) && void 0 !== t ? t : ""
                  );
                  l("Start updating... loading:".concat(n));
                  const r = await fetch("".concat(n, ".bin")),
                    a = await fetch("".concat(n, ".dat"));
                  if (!r.ok || !a.ok)
                    return (
                      console.log("Faild to load firmware: ".concat(n)),
                      void l("Faild to load firmware: ".concat(n))
                    );
                  const i = await e.bleMicroPro.updateFirmware(
                    new Uint8Array(await r.arrayBuffer()),
                    new Uint8Array(await a.arrayBuffer()),
                    (e) => {
                      l(
                        "Updating... ".concat(
                          Math.min(Math.floor(e), 100),
                          "% complete"
                        )
                      );
                    }
                  );
                  l(
                    "Success" === i
                      ? "Update complete"
                      : "DfuActivate" === i
                      ? "Bootloader is activated. Click update button again"
                      : "Update process failed: ".concat(i.error)
                  );
                })()
              ),
              r(!0));
          },
        },
        e.btnName
      ),
      ye().createElement(xd, { msg: a })
    );
  };
  ye();
  const Md = (e) => {
    const [t, n] = ye().useState("_no_msc"),
      [r, a] = ye().useState(!1);
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "label",
        null,
        ye().createElement("input", {
          type: "checkbox",
          checked: r,
          onChange: () => {
            const e = !r;
            a(e), n(e ? "" : "_no_msc");
          },
        }),
        "Enable UF2 bootloader"
      ),
      ye().createElement(Dd, {
        bleMicroPro: e.bleMicroPro,
        btnName: e.btnName,
        firmware: e.firmware,
        suffix: t,
        defaultIndex: e.defaultIndex,
      })
    );
  };
  ye();
  const Fd = (e) => {
    var t;
    const [n, r] = ye().useState(!0),
      [a, l] = ye().useState(""),
      [o, i] = ye().useState(
        e.firmware[null !== (t = e.defaultIndex) && void 0 !== t ? t : 0].path
      );
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "label",
          null,
          "version: ",
          ye().createElement(
            "select",
            {
              onChange: (t) => {
                i(e.firmware.find((e) => e.name == t.target.value).path);
              },
            },
            e.firmware.map((e, t) =>
              ye().createElement("option", { key: t }, e.name)
            )
          )
        )
      ),
      ye().createElement(
        "button",
        {
          className: "btn btn-purple mt-1",
          style: { width: "300px" },
          onClick: () => {
            n &&
              (r(!1),
              e.quantizer.tryLock(() =>
                (async () => {
                  l("Start updating...");
                  const t = await fetch("".concat(o, ".bin"));
                  if (!t.ok)
                    return (
                      console.log("Faild to load firmware: ".concat(o)),
                      void l("Faild to load firmware: ".concat(o))
                    );
                  try {
                    let n = "";
                    await e.quantizer.updateCh55xFirmware(
                      new Uint8Array(await t.arrayBuffer()),
                      (e) => {
                        (n = n.concat(e)), l(n);
                      }
                    );
                  } catch (e) {
                    console.error(e), l(e);
                  }
                })()
              ),
              r(!0));
          },
        },
        "Flash"
      ),
      ye().createElement(xd, { msg: a })
    );
  };
  ye();
  const Ad = (e) => {
    const [t, n] = ye().useState("");
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "button",
        {
          className: "btn btn-purple",
          onClick: async () => {
            try {
              n("");
              const t = await e.quantizer.getVersion();
              n(t);
            } catch (e) {
              n(e.toString());
            }
          },
        },
        "Get"
      ),
      ye().createElement(xd, { msg: t })
    );
  };
  ye();
  const Ud = (e) => {
    const [t, n] = ye().useState(""),
      [r, a] = ye().useState(0);
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: async () => {
              n("Get sleep config...");
              try {
                var t;
                const r = await e.quantizer.getConfig();
                null != r &&
                  null !== (t = r.config) &&
                  void 0 !== t &&
                  t.reserved &&
                  a(r.config.reserved[2]),
                  n("Get sleep config...complete");
              } catch (e) {
                n(e.toString());
              }
            },
          },
          "Get"
        ),
        ye().createElement(
          "button",
          {
            className: "btn btn-purple",
            onClick: async () => {
              n("Set sleep config...");
              try {
                var t;
                let a = await e.quantizer.getConfig();
                null != a &&
                  null !== (t = a.config) &&
                  void 0 !== t &&
                  t.reserved &&
                  ((a.config.reserved[2] = r),
                  await e.quantizer.updateConfig(JSON.stringify(a))),
                  n("Set sleep config...complete");
              } catch (e) {
                n(e.toString());
              }
            },
          },
          "Set"
        )
      ),
      ye().createElement(
        "p",
        null,
        ye().createElement(Td, {
          value: r,
          min: 0,
          max: 255,
          onChange: (e) => {
            a(parseInt(e.target.value));
          },
        }),
        " x10分"
      ),
      ye().createElement(xd, { msg: t })
    );
  };
  ye();
  const jd = (e) => {
    const [t, n] = ye().useState(200),
      [r, a] = ye().useState("");
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: async () => {
              a("Get TAPPING_TERM config...");
              try {
                var t;
                const r = await e.quantizer.getTappingTerm();
                null != r &&
                  null !== (t = r.tapping_term) &&
                  void 0 !== t &&
                  t.KC_NO &&
                  n(r.tapping_term.KC_NO),
                  a("Get TAPPING_TERM config...complete");
              } catch (e) {
                a(e.toString());
              }
            },
          },
          "Get"
        ),
        ye().createElement(
          "button",
          {
            className: "btn btn-purple",
            onClick: async () => {
              a("Set TAPPING_TERM config...");
              try {
                var n;
                let r = await e.quantizer.getTappingTerm();
                null != r &&
                  null !== (n = r.tapping_term) &&
                  void 0 !== n &&
                  n.KC_NO &&
                  ((r.tapping_term.KC_NO = t),
                  await e.quantizer.updateTappingTerm(JSON.stringify(r))),
                  a("Set TAPPING_TERM config...complete");
              } catch (e) {
                a(e.toString());
              }
            },
          },
          "Set"
        )
      ),
      ye().createElement(
        "p",
        null,
        ye().createElement(Td, {
          value: t,
          min: 0,
          max: 1e3,
          onChange: (e) => {
            n(parseInt(e.target.value));
          },
        }),
        " ms"
      ),
      ye().createElement(xd, { msg: r })
    );
  };
  ye();
  const Bd = (e) => {
    const [t, n] = ye().useState(""),
      [r, a] = ye().useState(90);
    return ye().createElement(
      "div",
      null,
      ye().createElement(
        "div",
        null,
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: async () => {
              n("Get gesture config...");
              try {
                var t;
                const r = await e.quantizer.getConfig();
                null != r &&
                  null !== (t = r.config) &&
                  void 0 !== t &&
                  t.reserved &&
                  a(r.config.reserved[5]),
                  n("Get gesture config...complete");
              } catch (e) {
                n(e.toString());
              }
            },
          },
          "Get"
        ),
        ye().createElement(
          "button",
          {
            className: "btn btn-purple",
            onClick: async () => {
              n("Set gesture config...");
              try {
                var t;
                let a = await e.quantizer.getConfig();
                null != a &&
                  null !== (t = a.config) &&
                  void 0 !== t &&
                  t.reserved &&
                  ((a.config.reserved[5] = r),
                  await e.quantizer.updateConfig(JSON.stringify(a))),
                  n("Set gesture config...complete");
              } catch (e) {
                n(e.toString());
              }
            },
          },
          "Set"
        )
      ),
      ye().createElement(
        "p",
        null,
        ye().createElement(Td, {
          value: r,
          min: 0,
          max: 255,
          onChange: (e) => {
            a(parseInt(e.target.value));
          },
        }),
        " px"
      ),
      ye().createElement(xd, { msg: t })
    );
  };
  ye();
  const qd = (e) => {
      const [t, n] = ye().useState("Disabled"),
        [r, a] = ye().useState(""),
        l = (e) => {
          n(e.target.value);
        };
      return ye().createElement(
        "div",
        null,
        ye().createElement(
          "button",
          {
            className: "btn btn-purple mr-1",
            onClick: () => {
              e.quantizer.tryLock(() =>
                (async () => {
                  a("Get current config...");
                  try {
                    var t;
                    const r = await e.quantizer.getConfig();
                    1 ==
                    (null == r || null === (t = r.config) || void 0 === t
                      ? void 0
                      : t.startup)
                      ? n("Enabled")
                      : n("Disabled"),
                      a("Get current config...Complete");
                  } catch (e) {
                    a("".concat(e));
                  }
                })()
              );
            },
          },
          "Get"
        ),
        ye().createElement(
          "button",
          {
            className: "btn btn-purple",
            onClick: () => {
              e.quantizer.tryLock(() =>
                (async () => {
                  a("Set new config...");
                  try {
                    var n;
                    let r = await e.quantizer.getConfig();
                    null !=
                      (null == r || null === (n = r.config) || void 0 === n
                        ? void 0
                        : n.startup) &&
                      (r.config.startup = "Enabled" === t ? 1 : 0);
                    const l = JSON.stringify(r);
                    console.log(l),
                      await e.quantizer.updateConfig(l),
                      a("Set new config...Complete");
                  } catch (e) {
                    a("".concat(e));
                  }
                })()
              );
            },
          },
          "Set"
        ),
        ye().createElement(
          "div",
          null,
          ye().createElement(
            "label",
            null,
            ye().createElement("input", {
              type: "radio",
              name: "startupAdvConf",
              id: "Enabled",
              value: "Enabled",
              onChange: l,
              checked: "Enabled" === t,
            }),
            "Enabled"
          )
        ),
        ye().createElement(
          "div",
          null,
          ye().createElement(
            "label",
            null,
            ye().createElement("input", {
              type: "radio",
              name: "startupAdvConf",
              id: "Disabled",
              value: "Disabled",
              onChange: l,
              checked: "Disabled" === t,
            }),
            "Disabled"
          )
        ),
        ye().createElement(xd, { msg: r })
      );
    },
    Vd = _d.getInstance(
      new (class {
        get connected() {
          return this._connected;
        }
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 64,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 30;
          Yf(this, "receiveCallback", null),
            Yf(this, "closeCallback", null),
            Yf(this, "errorCallback", null),
            Yf(this, "port", null),
            Yf(this, "writable", null),
            Yf(this, "reader", null),
            Yf(this, "_connected", !1),
            Yf(this, "_readloopRunning", !1),
            (this.send_chunk = e),
            (this.send_interval = t);
        }
        setReceiveCallback(e) {
          this.receiveCallback = e;
        }
        setErrorCallback(e) {
          this.errorCallback = e;
        }
        setCloseCallback(e) {
          this.errorCallback = e;
        }
        async open(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 115200,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          this.port = await navigator.serial.requestPort(n);
          try {
            await this.port.open({ baudRate: t, buffersize: 81920 });
          } catch (e) {
            return console.error(e), await this.port.close(), Promise.reject(e);
          }
          (this._connected = !0),
            (this._readloopRunning = !1),
            e && e(),
            (this.writable = this.port.writable),
            console.log("open serial port");
        }
        async startReadLoop() {
          this.readLoop(), await this.sleep(1e3);
        }
        getInfo() {
          var e;
          return null === (e = this.port) || void 0 === e
            ? void 0
            : e.getInfo();
        }
        async readLoop() {
          if (null != this.port)
            try {
              for (
                this.reader = this.port.readable.getReader(),
                  console.log("start read loop");
                ;

              ) {
                const { done: e, value: t } = await this.reader.read();
                if ((t && this.receiveCallback && this.receiveCallback(t), e)) {
                  console.log("Web serial read complete", e),
                    this.reader && this.reader.releaseLock(),
                    (this._readloopRunning = !1);
                  break;
                }
              }
            } catch (e) {
              (this._readloopRunning = !1),
                console.error(e),
                this.errorCallback && this.errorCallback(e),
                await this.close();
            }
          else console.error("failed to read from serial port");
        }
        sleep(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        async writeString(e) {
          await this.write(new TextEncoder().encode(e));
        }
        async write(e) {
          if (null == this.writable) return;
          const t = this.writable.getWriter();
          for (let n = 0; n < e.length; n += this.send_chunk)
            await t.write(e.slice(n, n + this.send_chunk)),
              await this.sleep(this.send_interval);
          t.releaseLock();
        }
        async close() {
          if (this.reader)
            try {
              await this.reader.cancel(), this.reader.releaseLock();
            } catch (e) {
              console.error(e);
            } finally {
              this.reader = null;
            }
          if (
            (this.writable && (this.writable = null),
            this.closeCallback && this.closeCallback(),
            this.port)
          )
            try {
              await this.port.close(),
                (this.port = null),
                (this._connected = !1);
            } catch (e) {
              console.error(e);
            }
          console.log("serial port closed");
        }
      })(128, 5)
    );
  navigator.serial ||
    alert("Chrome または Chromium Edgeのみサポートしています"),
    Xf.render(
      ye().createElement(Md, {
        bleMicroPro: Vd,
        btnName: "Update Bootloader",
        firmware: [
          {
            name: "0.11.1",
            path: "../assets/firmware/nrf/kqb_bootloader_0_11_1",
          },
          {
            name: "0.11.0",
            path: "../assets/firmware/nrf/kqb_bootloader_0_11_0",
          },
          {
            name: "0.10.0",
            path: "../assets/firmware/nrf/kqb_bootloader_0_10_0",
          },
        ],
      }),
      document.getElementById("bootloader-update")
    ),
    Xf.render(
      ye().createElement(Dd, {
        bleMicroPro: Vd,
        btnName: "Update Application",
        firmware: [
          {
            name: "0.11.1",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_11_1",
          },
          {
            name: "0.11.0",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_11_0",
          },
          {
            name: "0.10.4",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_10_4",
          },
          {
            name: "0.10.3",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_10_3",
          },
          {
            name: "0.10.2",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_10_2",
          },
          {
            name: "0.10.1",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_10_1",
          },
          {
            name: "0.10.0",
            path: "../assets/firmware/nrf/keyboard_quantizer_kqb_default_0_10_0",
          },
        ],
      }),
      document.getElementById("application-update")
    ),
    Xf.render(
      ye().createElement(Ad, { quantizer: Vd }),
      document.getElementById("get-version")
    ),
    Xf.render(
      ye().createElement(Fd, {
        quantizer: Vd,
        firmware: [
          { name: "1.1.0", path: "../assets/firmware/ch559/CH559USB_1_1_0" },
        ],
      }),
      document.getElementById("ch559-update")
    ),
    Xf.render(
      ye().createElement(jd, { quantizer: Vd }),
      document.getElementById("tapping-term")
    ),
    Xf.render(
      ye().createElement(Id, { quantizer: Vd }),
      document.getElementById("parser-config")
    ),
    Xf.render(
      ye().createElement(Bd, { quantizer: Vd }),
      document.getElementById("gesture-config")
    ),
    Xf.render(
      ye().createElement(Ld, { quantizer: Vd }),
      document.getElementById("power-loader")
    ),
    Xf.render(
      ye().createElement(qd, { quantizer: Vd }),
      document.getElementById("startupAdvertise")
    ),
    Xf.render(
      ye().createElement(Nd, { quantizer: Vd }),
      document.getElementById("pairing")
    ),
    Xf.render(
      ye().createElement(Ud, { quantizer: Vd }),
      document.getElementById("sleep-time")
    );
})();
//# sourceMappingURL=configuration.js.map
