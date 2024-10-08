/*!
 * Packery PACKAGED v1.2.4
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2014 Metafizzy
 */

(function (t) {
  function e() {}
  function i(t) {
    function i(e) {
      e.prototype.option ||
        (e.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
        });
    }
    function o(e, i) {
      t.fn[e] = function (o) {
        if ("string" == typeof o) {
          for (
            var s = n.call(arguments, 1), a = 0, h = this.length;
            h > a;
            a++
          ) {
            var p = this[a],
              u = t.data(p, e);
            if (u)
              if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                var c = u[o].apply(u, s);
                if (void 0 !== c) return c;
              } else r("no such method '" + o + "' for " + e + " instance");
            else
              r(
                "cannot call methods on " +
                  e +
                  " prior to initialization; " +
                  "attempted to call '" +
                  o +
                  "'",
              );
          }
          return this;
        }
        return this.each(function () {
          var n = t.data(this, e);
          n
            ? (n.option(o), n._init())
            : ((n = new i(this, o)), t.data(this, e, n));
        });
      };
    }
    if (t) {
      var r =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            };
      return (
        (t.bridget = function (t, e) {
          i(e), o(t, e);
        }),
        t.bridget
      );
    }
  }
  var n = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
    : i(t.jQuery);
})(window),
  (function (t) {
    function e(t) {
      return RegExp("(^|\\s+)" + t + "(\\s+|$)");
    }
    function i(t, e) {
      var i = n(t, e) ? r : o;
      i(t, e);
    }
    var n, o, r;
    "classList" in document.documentElement
      ? ((n = function (t, e) {
          return t.classList.contains(e);
        }),
        (o = function (t, e) {
          t.classList.add(e);
        }),
        (r = function (t, e) {
          t.classList.remove(e);
        }))
      : ((n = function (t, i) {
          return e(i).test(t.className);
        }),
        (o = function (t, e) {
          n(t, e) || (t.className = t.className + " " + e);
        }),
        (r = function (t, i) {
          t.className = t.className.replace(e(i), " ");
        }));
    var s = {
      hasClass: n,
      addClass: o,
      removeClass: r,
      toggleClass: i,
      has: n,
      add: o,
      remove: r,
      toggle: i,
    };
    "function" == typeof define && define.amd
      ? define("classie/classie", s)
      : "object" == typeof exports
        ? (module.exports = s)
        : (t.classie = s);
  })(window),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof n[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, o = 0, r = i.length; r > o; o++)
          if (((e = i[o] + t), "string" == typeof n[e])) return e;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      n = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
        ? (module.exports = e)
        : (t.getStyleProperty = e);
  })(window),
  (function (t) {
    function e(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = s.length;
        i > e;
        e++
      ) {
        var n = s[e];
        t[n] = 0;
      }
      return t;
    }
    function n(t) {
      function n(t) {
        if (
          ("string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var n = r(t);
          if ("none" === n.display) return i();
          var o = {};
          (o.width = t.offsetWidth), (o.height = t.offsetHeight);
          for (
            var u = (o.isBorderBox = !(!p || !n[p] || "border-box" !== n[p])),
              c = 0,
              f = s.length;
            f > c;
            c++
          ) {
            var d = s[c],
              l = n[d];
            l = a(t, l);
            var y = parseFloat(l);
            o[d] = isNaN(y) ? 0 : y;
          }
          var g = o.paddingLeft + o.paddingRight,
            m = o.paddingTop + o.paddingBottom,
            v = o.marginLeft + o.marginRight,
            x = o.marginTop + o.marginBottom,
            b = o.borderLeftWidth + o.borderRightWidth,
            w = o.borderTopWidth + o.borderBottomWidth,
            _ = u && h,
            E = e(n.width);
          E !== !1 && (o.width = E + (_ ? 0 : g + b));
          var L = e(n.height);
          return (
            L !== !1 && (o.height = L + (_ ? 0 : m + w)),
            (o.innerWidth = o.width - (g + b)),
            (o.innerHeight = o.height - (m + w)),
            (o.outerWidth = o.width + v),
            (o.outerHeight = o.height + x),
            o
          );
        }
      }
      function a(t, e) {
        if (o || -1 === e.indexOf("%")) return e;
        var i = t.style,
          n = i.left,
          r = t.runtimeStyle,
          s = r && r.left;
        return (
          s && (r.left = t.currentStyle.left),
          (i.left = e),
          (e = i.pixelLeft),
          (i.left = n),
          s && (r.left = s),
          e
        );
      }
      var h,
        p = t("boxSizing");
      return (
        (function () {
          if (p) {
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style[p] = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(t);
            var n = r(t);
            (h = 200 === e(n.width)), i.removeChild(t);
          }
        })(),
        n
      );
    }
    var o = t.getComputedStyle,
      r = o
        ? function (t) {
            return o(t, null);
          }
        : function (t) {
            return t.currentStyle;
          },
      s = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          n,
        )
      : "object" == typeof exports
        ? (module.exports = n(require("get-style-property")))
        : (t.getSize = n(t.getStyleProperty));
  })(window),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      n = function () {};
    i.addEventListener
      ? (n = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (n = function (t, i, n) {
          (t[i + n] = n.handleEvent
            ? function () {
                var i = e(t);
                n.handleEvent.call(n, i);
              }
            : function () {
                var i = e(t);
                n.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + n]);
        });
    var o = function () {};
    i.removeEventListener
      ? (o = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (o = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (n) {
            t[e + i] = void 0;
          }
        });
    var r = { bind: n, unbind: o };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : "object" == typeof exports
        ? (module.exports = r)
        : (t.eventie = r);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : r.push(t));
    }
    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== o.readyState;
      if (!e.isReady && !i) {
        e.isReady = !0;
        for (var n = 0, s = r.length; s > n; n++) {
          var a = r[n];
          a();
        }
      }
    }
    function n(n) {
      return (
        n.bind(o, "DOMContentLoaded", i),
        n.bind(o, "readystatechange", i),
        n.bind(t, "load", i),
        e
      );
    }
    var o = t.document,
      r = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? ((e.isReady = "function" == typeof requirejs),
          define("doc-ready/doc-ready", ["eventie/eventie"], n))
        : "object" == typeof exports
          ? (module.exports = n(require("eventie")))
          : (t.docReady = n(t.eventie));
  })(window),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var n = t.prototype,
      o = this,
      r = o.EventEmitter;
    (n.getListeners = function (t) {
      var e,
        i,
        n = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
      } else e = n[t] || (n[t] = []);
      return e;
    }),
      (n.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i;
      }),
      (n.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
      }),
      (n.addListener = function (t, i) {
        var n,
          o = this.getListenersAsObject(t),
          r = "object" == typeof i;
        for (n in o)
          o.hasOwnProperty(n) &&
            -1 === e(o[n], i) &&
            o[n].push(r ? i : { listener: i, once: !1 });
        return this;
      }),
      (n.on = i("addListener")),
      (n.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (n.once = i("addOnceListener")),
      (n.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (n.removeListener = function (t, i) {
        var n,
          o,
          r = this.getListenersAsObject(t);
        for (o in r)
          r.hasOwnProperty(o) &&
            ((n = e(r[o], i)), -1 !== n && r[o].splice(n, 1));
        return this;
      }),
      (n.off = i("removeListener")),
      (n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (n.manipulateListeners = function (t, e, i) {
        var n,
          o,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (n = i.length; n--; ) r.call(this, e, i[n]);
        else
          for (n in e)
            e.hasOwnProperty(n) &&
              (o = e[n]) &&
              ("function" == typeof o
                ? r.call(this, n, o)
                : s.call(this, n, o));
        return this;
      }),
      (n.removeEvent = function (t) {
        var e,
          i = typeof t,
          n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
          for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this;
      }),
      (n.removeAllListeners = i("removeEvent")),
      (n.emitEvent = function (t, e) {
        var i,
          n,
          o,
          r,
          s = this.getListenersAsObject(t);
        for (o in s)
          if (s.hasOwnProperty(o))
            for (n = s[o].length; n--; )
              (i = s[o][n]),
                i.once === !0 && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (n.trigger = i("emitEvent")),
      (n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (n.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (n._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (o.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
          ? (module.exports = t)
          : (this.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t, e) {
      return t[s](e);
    }
    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function n(t, e) {
      i(t);
      for (
        var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length;
        r > o;
        o++
      )
        if (n[o] === t) return !0;
      return !1;
    }
    function o(t, n) {
      return i(t), e(t, n);
    }
    var r,
      s = (function () {
        if (t.matchesSelector) return "matchesSelector";
        for (
          var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length;
          n > i;
          i++
        ) {
          var o = e[i],
            r = o + "MatchesSelector";
          if (t[r]) return r;
        }
      })();
    if (s) {
      var a = document.createElement("div"),
        h = e(a, "div");
      r = h ? e : o;
    } else r = n;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return r;
        })
      : "object" == typeof exports
        ? (module.exports = r)
        : (window.matchesSelector = r);
  })(Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function o(t, o, r) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var h = r("transition"),
        p = r("transform"),
        u = h && p,
        c = !!r("perspective"),
        f = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[h],
        d = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        l = (function () {
          for (var t = {}, e = 0, i = d.length; i > e; e++) {
            var n = d[e],
              o = r(n);
            o && o !== n && (t[n] = o);
          }
          return t;
        })();
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (a.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.getSize = function () {
          this.size = o(this.element);
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style;
          for (var i in t) {
            var n = l[i] || i;
            e[n] = t[i];
          }
        }),
        (a.prototype.getPosition = function () {
          var t = s(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            o = parseInt(t[i ? "left" : "right"], 10),
            r = parseInt(t[n ? "top" : "bottom"], 10);
          (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
          var a = this.layout.size;
          (o -= i ? a.paddingLeft : a.paddingRight),
            (r -= n ? a.paddingTop : a.paddingBottom),
            (this.position.x = o),
            (this.position.y = r);
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {};
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + "px"),
              (i.right = ""))
            : ((i.right = this.position.x + t.paddingRight + "px"),
              (i.left = "")),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + "px"),
                (i.bottom = ""))
              : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                (i.top = "")),
            this.css(i),
            this.emitEvent("layout", [this]);
        });
      var y = c
        ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)";
          }
        : function (t, e) {
            return "translate(" + t + "px, " + e + "px)";
          };
      (a.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return this.layoutPosition(), void 0;
        var a = t - i,
          h = e - n,
          p = {},
          u = this.layout.options;
        (a = u.isOriginLeft ? a : -a),
          (h = u.isOriginTop ? h : -h),
          (p.transform = y(a, h)),
          this.transition({
            to: p,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return this._nonTransition(t), void 0;
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var g = p && n(p) + ",opacity";
      (a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: g,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(f, this, !1));
      }),
        (a.prototype.transition =
          a.prototype[h ? "_transition" : "_nonTransition"]),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var m = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            n = m[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
            n in e.onEnd)
          ) {
            var o = e.onEnd[n];
            o.call(this), delete e.onEnd[n];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(f, this, !1),
            (this.isTransitioning = !1);
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var v = { transitionProperty: "", transitionDuration: "" };
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(v);
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (a.prototype.remove = function () {
          if (!h || !parseFloat(this.layout.options.transitionDuration))
            return this.removeElem(), void 0;
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (a.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        a
      );
    }
    var r = t.getComputedStyle,
      s = r
        ? function (t) {
            return r(t, null);
          }
        : function (t) {
            return t.currentStyle;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
          ],
          o,
        )
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === c.call(t);
    }
    function n(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
      else e.push(t);
      return e;
    }
    function o(t, e) {
      var i = d(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function r(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        })
        .toLowerCase();
    }
    function s(i, s, c, d, l, y) {
      function g(t, i) {
        if (("string" == typeof t && (t = a.querySelector(t)), !t || !f(t)))
          return (
            h &&
              h.error("Bad " + this.constructor.namespace + " element: " + t),
            void 0
          );
        (this.element = t),
          (this.options = e({}, this.constructor.defaults)),
          this.option(i);
        var n = ++m;
        (this.element.outlayerGUID = n),
          (v[n] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      var m = 0,
        v = {};
      return (
        (g.namespace = "outlayer"),
        (g.Item = y),
        (g.defaults = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
          visibleStyle: { opacity: 1, transform: "scale(1)" },
        }),
        e(g.prototype, c.prototype),
        (g.prototype.option = function (t) {
          e(this.options, t);
        }),
        (g.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (g.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (g.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              n = [],
              o = 0,
              r = e.length;
            r > o;
            o++
          ) {
            var s = e[o],
              a = new i(s, this);
            n.push(a);
          }
          return n;
        }),
        (g.prototype._filterFindItemElements = function (t) {
          t = n(t);
          for (
            var e = this.options.itemSelector, i = [], o = 0, r = t.length;
            r > o;
            o++
          ) {
            var s = t[o];
            if (f(s))
              if (e) {
                l(s, e) && i.push(s);
                for (
                  var a = s.querySelectorAll(e), h = 0, p = a.length;
                  p > h;
                  h++
                )
                  i.push(a[h]);
              } else i.push(s);
          }
          return i;
        }),
        (g.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (g.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (g.prototype._init = g.prototype.layout),
        (g.prototype._resetLayout = function () {
          this.getSize();
        }),
        (g.prototype.getSize = function () {
          this.size = d(this.element);
        }),
        (g.prototype._getMeasurement = function (t, e) {
          var i,
            n = this.options[t];
          n
            ? ("string" == typeof n
                ? (i = this.element.querySelector(n))
                : f(n) && (i = n),
              (this[t] = i ? d(i)[e] : n))
            : (this[t] = 0);
        }),
        (g.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (g.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o);
          }
          return e;
        }),
        (g.prototype._layoutItems = function (t, e) {
          function i() {
            n.emitEvent("layoutComplete", [n, t]);
          }
          var n = this;
          if (!t || !t.length) return i(), void 0;
          this._itemsOn(t, "layout", i);
          for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              h = this._getItemLayoutPosition(a);
            (h.item = a), (h.isInstant = e || a.isLayoutInstant), o.push(h);
          }
          this._processLayoutQueue(o);
        }),
        (g.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (g.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant);
          }
        }),
        (g.prototype._positionItem = function (t, e, i, n) {
          n ? t.goTo(e, i) : t.moveTo(e, i);
        }),
        (g.prototype._postLayout = function () {
          this.resizeContainer();
        }),
        (g.prototype.resizeContainer = function () {
          if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t &&
              (this._setContainerMeasure(t.width, !0),
              this._setContainerMeasure(t.height, !1));
          }
        }),
        (g.prototype._getContainerSize = u),
        (g.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (g.prototype._itemsOn = function (t, e, i) {
          function n() {
            return o++, o === r && i.call(s), !0;
          }
          for (
            var o = 0, r = t.length, s = this, a = 0, h = t.length;
            h > a;
            a++
          ) {
            var p = t[a];
            p.on(e, n);
          }
        }),
        (g.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (g.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (g.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              this.ignore(n);
            }
          }
        }),
        (g.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              o(n, this.stamps), this.unignore(n);
            }
        }),
        (g.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = n(t)))
            : void 0;
        }),
        (g.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t];
              this._manageStamp(i);
            }
          }
        }),
        (g.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (g.prototype._manageStamp = u),
        (g.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            n = d(t),
            o = {
              left: e.left - i.left - n.marginLeft,
              top: e.top - i.top - n.marginTop,
              right: i.right - e.right - n.marginRight,
              bottom: i.bottom - e.bottom - n.marginBottom,
            };
          return o;
        }),
        (g.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (g.prototype.bindResize = function () {
          this.isResizeBound ||
            (i.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (g.prototype.unbindResize = function () {
          this.isResizeBound && i.unbind(t, "resize", this),
            (this.isResizeBound = !1);
        }),
        (g.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout;
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var e = this;
          this.resizeTimeout = setTimeout(t, 100);
        }),
        (g.prototype.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (g.prototype.needsResizeLayout = function () {
          var t = d(this.element),
            e = this.size && t;
          return e && t.innerWidth !== this.size.innerWidth;
        }),
        (g.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (g.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (g.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (g.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i];
              n.reveal();
            }
        }),
        (g.prototype.hide = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i];
              n.hide();
            }
        }),
        (g.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n;
          }
        }),
        (g.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
              var o = t[i],
                r = this.getItem(o);
              r && e.push(r);
            }
            return e;
          }
        }),
        (g.prototype.remove = function (t) {
          t = n(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i];
              s.remove(), o(s, this.items);
            }
          }
        }),
        (g.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy();
          }
          this.unbindResize(),
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace);
        }),
        (g.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && v[e];
        }),
        (g.create = function (t, i) {
          function n() {
            g.apply(this, arguments);
          }
          return (
            Object.create
              ? (n.prototype = Object.create(g.prototype))
              : e(n.prototype, g.prototype),
            (n.prototype.constructor = n),
            (n.defaults = e({}, g.defaults)),
            e(n.defaults, i),
            (n.prototype.settings = {}),
            (n.namespace = t),
            (n.data = g.data),
            (n.Item = function () {
              y.apply(this, arguments);
            }),
            (n.Item.prototype = new y()),
            s(function () {
              for (
                var e = r(t),
                  i = a.querySelectorAll(".js-" + e),
                  o = "data-" + e + "-options",
                  s = 0,
                  u = i.length;
                u > s;
                s++
              ) {
                var c,
                  f = i[s],
                  d = f.getAttribute(o);
                try {
                  c = d && JSON.parse(d);
                } catch (l) {
                  h &&
                    h.error(
                      "Error parsing " +
                        o +
                        " on " +
                        f.nodeName.toLowerCase() +
                        (f.id ? "#" + f.id : "") +
                        ": " +
                        l,
                    );
                  continue;
                }
                var y = new n(f, c);
                p && p.data(f, t, y);
              }
            }),
            p && p.bridget && p.bridget(t, n),
            n
          );
        }),
        (g.Item = y),
        g
      );
    }
    var a = t.document,
      h = t.console,
      p = t.jQuery,
      u = function () {},
      c = Object.prototype.toString,
      f =
        "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      d = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "doc-ready/doc-ready",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "./item",
          ],
          s,
        )
      : (t.Outlayer = s(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item,
        ));
  })(window),
  (function (t) {
    function e() {
      function t(e) {
        for (var i in t.defaults) this[i] = t.defaults[i];
        for (i in e) this[i] = e[i];
      }
      return (
        (i.Rect = t),
        (t.defaults = { x: 0, y: 0, width: 0, height: 0 }),
        (t.prototype.contains = function (t) {
          var e = t.width || 0,
            i = t.height || 0;
          return (
            this.x <= t.x &&
            this.y <= t.y &&
            this.x + this.width >= t.x + e &&
            this.y + this.height >= t.y + i
          );
        }),
        (t.prototype.overlaps = function (t) {
          var e = this.x + this.width,
            i = this.y + this.height,
            n = t.x + t.width,
            o = t.y + t.height;
          return n > this.x && e > t.x && o > this.y && i > t.y;
        }),
        (t.prototype.getMaximalFreeRects = function (e) {
          if (!this.overlaps(e)) return !1;
          var i,
            n = [],
            o = this.x + this.width,
            r = this.y + this.height,
            s = e.x + e.width,
            a = e.y + e.height;
          return (
            this.y < e.y &&
              ((i = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y,
              })),
              n.push(i)),
            o > s &&
              ((i = new t({
                x: s,
                y: this.y,
                width: o - s,
                height: this.height,
              })),
              n.push(i)),
            r > a &&
              ((i = new t({
                x: this.x,
                y: a,
                width: this.width,
                height: r - a,
              })),
              n.push(i)),
            this.x < e.x &&
              ((i = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height,
              })),
              n.push(i)),
            n
          );
        }),
        (t.prototype.canFit = function (t) {
          return this.width >= t.width && this.height >= t.height;
        }),
        t
      );
    }
    var i = (t.Packery = function () {});
    "function" == typeof define && define.amd
      ? define("packery/js/rect", e)
      : ((t.Packery = t.Packery || {}), (t.Packery.Rect = e()));
  })(window),
  (function (t) {
    function e(t) {
      function e(t, e, i) {
        (this.width = t || 0),
          (this.height = e || 0),
          (this.sortDirection = i || "downwardLeftToRight"),
          this.reset();
      }
      (e.prototype.reset = function () {
        (this.spaces = []), (this.newSpaces = []);
        var e = new t({ x: 0, y: 0, width: this.width, height: this.height });
        this.spaces.push(e),
          (this.sorter = i[this.sortDirection] || i.downwardLeftToRight);
      }),
        (e.prototype.pack = function (t) {
          for (var e = 0, i = this.spaces.length; i > e; e++) {
            var n = this.spaces[e];
            if (n.canFit(t)) {
              this.placeInSpace(t, n);
              break;
            }
          }
        }),
        (e.prototype.placeInSpace = function (t, e) {
          (t.x = e.x), (t.y = e.y), this.placed(t);
        }),
        (e.prototype.placed = function (t) {
          for (var i = [], n = 0, o = this.spaces.length; o > n; n++) {
            var r = this.spaces[n],
              s = r.getMaximalFreeRects(t);
            s ? i.push.apply(i, s) : i.push(r);
          }
          (this.spaces = i),
            e.mergeRects(this.spaces),
            this.spaces.sort(this.sorter);
        }),
        (e.mergeRects = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            if (n) {
              var o = t.slice(0);
              o.splice(e, 1);
              for (var r = 0, s = 0, a = o.length; a > s; s++) {
                var h = o[s],
                  p = e > s ? 0 : 1;
                n.contains(h) && (t.splice(s + p - r, 1), r++);
              }
            }
          }
          return t;
        });
      var i = {
        downwardLeftToRight: function (t, e) {
          return t.y - e.y || t.x - e.x;
        },
        rightwardTopToBottom: function (t, e) {
          return t.x - e.x || t.y - e.y;
        },
      };
      return e;
    }
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], e);
    else {
      var i = (t.Packery = t.Packery || {});
      i.Packer = e(i.Rect);
    }
  })(window),
  (function (t) {
    function e(t, e, i) {
      var n = t("transform"),
        o = function () {
          e.Item.apply(this, arguments);
        };
      o.prototype = new e.Item();
      var r = o.prototype._create;
      return (
        (o.prototype._create = function () {
          r.call(this), (this.rect = new i()), (this.placeRect = new i());
        }),
        (o.prototype.dragStart = function () {
          this.getPosition(),
            this.removeTransitionStyles(),
            this.isTransitioning && n && (this.element.style[n] = "none"),
            this.getSize(),
            (this.isPlacing = !0),
            (this.needsPositioning = !1),
            this.positionPlaceRect(this.position.x, this.position.y),
            (this.isTransitioning = !1),
            (this.didDrag = !1);
        }),
        (o.prototype.dragMove = function (t, e) {
          this.didDrag = !0;
          var i = this.layout.size;
          (t -= i.paddingLeft),
            (e -= i.paddingTop),
            this.positionPlaceRect(t, e);
        }),
        (o.prototype.dragStop = function () {
          this.getPosition();
          var t = this.position.x !== this.placeRect.x,
            e = this.position.y !== this.placeRect.y;
          (this.needsPositioning = t || e), (this.didDrag = !1);
        }),
        (o.prototype.positionPlaceRect = function (t, e, i) {
          (this.placeRect.x = this.getPlaceRectCoord(t, !0)),
            (this.placeRect.y = this.getPlaceRectCoord(e, !1, i));
        }),
        (o.prototype.getPlaceRectCoord = function (t, e, i) {
          var n = e ? "Width" : "Height",
            o = this.size["outer" + n],
            r = this.layout[e ? "columnWidth" : "rowHeight"],
            s = this.layout.size["inner" + n];
          e ||
            ((s = Math.max(s, this.layout.maxY)),
            this.layout.rowHeight || (s -= this.layout.gutter));
          var a;
          if (r) {
            (r += this.layout.gutter),
              (s += e ? this.layout.gutter : 0),
              (t = Math.round(t / r));
            var h;
            h = this.layout.options.isHorizontal
              ? e
                ? "ceil"
                : "floor"
              : e
                ? "floor"
                : "ceil";
            var p = Math[h](s / r);
            (p -= Math.ceil(o / r)), (a = p);
          } else a = s - o;
          return (t = i ? t : Math.min(t, a)), (t *= r || 1), Math.max(0, t);
        }),
        (o.prototype.copyPlaceRectPosition = function () {
          (this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
        }),
        o
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "packery/js/item",
          [
            "get-style-property/get-style-property",
            "outlayer/outlayer",
            "./rect",
          ],
          e,
        )
      : (t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect));
  })(window),
  (function (t) {
    function e(t, e, i, n, o, r) {
      function s(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x;
      }
      function a(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y;
      }
      var h = i.create("packery");
      return (
        (h.Item = r),
        (h.prototype._create = function () {
          i.prototype._create.call(this),
            (this.packer = new o()),
            this.stamp(this.options.stamped);
          var t = this;
          (this.handleDraggabilly = {
            dragStart: function (e) {
              t.itemDragStart(e.element);
            },
            dragMove: function (e) {
              t.itemDragMove(e.element, e.position.x, e.position.y);
            },
            dragEnd: function (e) {
              t.itemDragEnd(e.element);
            },
          }),
            (this.handleUIDraggable = {
              start: function (e) {
                t.itemDragStart(e.currentTarget);
              },
              drag: function (e, i) {
                t.itemDragMove(
                  e.currentTarget,
                  i.position.left,
                  i.position.top,
                );
              },
              stop: function (e) {
                t.itemDragEnd(e.currentTarget);
              },
            });
        }),
        (h.prototype._resetLayout = function () {
          this.getSize(), this._getMeasurements();
          var t = this.packer;
          this.options.isHorizontal
            ? ((t.width = Number.POSITIVE_INFINITY),
              (t.height = this.size.innerHeight + this.gutter),
              (t.sortDirection = "rightwardTopToBottom"))
            : ((t.width = this.size.innerWidth + this.gutter),
              (t.height = Number.POSITIVE_INFINITY),
              (t.sortDirection = "downwardLeftToRight")),
            t.reset(),
            (this.maxY = 0),
            (this.maxX = 0);
        }),
        (h.prototype._getMeasurements = function () {
          this._getMeasurement("columnWidth", "width"),
            this._getMeasurement("rowHeight", "height"),
            this._getMeasurement("gutter", "width");
        }),
        (h.prototype._getItemLayoutPosition = function (t) {
          return this._packItem(t), t.rect;
        }),
        (h.prototype._packItem = function (t) {
          this._setRectSize(t.element, t.rect),
            this.packer.pack(t.rect),
            this._setMaxXY(t.rect);
        }),
        (h.prototype._setMaxXY = function (t) {
          (this.maxX = Math.max(t.x + t.width, this.maxX)),
            (this.maxY = Math.max(t.y + t.height, this.maxY));
        }),
        (h.prototype._setRectSize = function (t, i) {
          var n = e(t),
            o = n.outerWidth,
            r = n.outerHeight;
          if (o || r) {
            var s = this.columnWidth + this.gutter,
              a = this.rowHeight + this.gutter;
            (o = this.columnWidth ? Math.ceil(o / s) * s : o + this.gutter),
              (r = this.rowHeight ? Math.ceil(r / a) * a : r + this.gutter);
          }
          (i.width = Math.min(o, this.packer.width)),
            (i.height = Math.min(r, this.packer.height));
        }),
        (h.prototype._getContainerSize = function () {
          return this.options.isHorizontal
            ? { width: this.maxX - this.gutter }
            : { height: this.maxY - this.gutter };
        }),
        (h.prototype._manageStamp = function (t) {
          var e,
            i = this.getItem(t);
          if (i && i.isPlacing) e = i.placeRect;
          else {
            var o = this._getElementOffset(t);
            e = new n({
              x: this.options.isOriginLeft ? o.left : o.right,
              y: this.options.isOriginTop ? o.top : o.bottom,
            });
          }
          this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e);
        }),
        (h.prototype.sortItemsByPosition = function () {
          var t = this.options.isHorizontal ? a : s;
          this.items.sort(t);
        }),
        (h.prototype.fit = function (t, e, i) {
          var n = this.getItem(t);
          n &&
            (this._getMeasurements(),
            this.stamp(n.element),
            n.getSize(),
            (n.isPlacing = !0),
            (e = void 0 === e ? n.rect.x : e),
            (i = void 0 === i ? n.rect.y : i),
            n.positionPlaceRect(e, i, !0),
            this._bindFitEvents(n),
            n.moveTo(n.placeRect.x, n.placeRect.y),
            this.layout(),
            this.unstamp(n.element),
            this.sortItemsByPosition(),
            (n.isPlacing = !1),
            n.copyPlaceRectPosition());
        }),
        (h.prototype._bindFitEvents = function (t) {
          function e() {
            n++, 2 === n && i.emitEvent("fitComplete", [i, t]);
          }
          var i = this,
            n = 0;
          t.on("layout", function () {
            return e(), !0;
          }),
            this.on("layoutComplete", function () {
              return e(), !0;
            });
        }),
        (h.prototype.resize = function () {
          var t = e(this.element),
            i = this.size && t,
            n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
          (i && t[n] === this.size[n]) || this.layout();
        }),
        (h.prototype.itemDragStart = function (t) {
          this.stamp(t);
          var e = this.getItem(t);
          e && e.dragStart();
        }),
        (h.prototype.itemDragMove = function (t, e, i) {
          function n() {
            r.layout(), delete r.dragTimeout;
          }
          var o = this.getItem(t);
          o && o.dragMove(e, i);
          var r = this;
          this.clearDragTimeout(), (this.dragTimeout = setTimeout(n, 40));
        }),
        (h.prototype.clearDragTimeout = function () {
          this.dragTimeout && clearTimeout(this.dragTimeout);
        }),
        (h.prototype.itemDragEnd = function (e) {
          var i,
            n = this.getItem(e);
          if (
            (n && ((i = n.didDrag), n.dragStop()),
            !n || (!i && !n.needsPositioning))
          )
            return this.unstamp(e), void 0;
          t.add(n.element, "is-positioning-post-drag");
          var o = this._getDragEndLayoutComplete(e, n);
          n.needsPositioning
            ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y))
            : n && n.copyPlaceRectPosition(),
            this.clearDragTimeout(),
            this.on("layoutComplete", o),
            this.layout();
        }),
        (h.prototype._getDragEndLayoutComplete = function (e, i) {
          var n = i && i.needsPositioning,
            o = 0,
            r = n ? 2 : 1,
            s = this;
          return function () {
            return (
              o++,
              o !== r
                ? !0
                : (i &&
                    (t.remove(i.element, "is-positioning-post-drag"),
                    (i.isPlacing = !1),
                    i.copyPlaceRectPosition()),
                  s.unstamp(e),
                  s.sortItemsByPosition(),
                  n && s.emitEvent("dragItemPositioned", [s, i]),
                  !0)
            );
          };
        }),
        (h.prototype.bindDraggabillyEvents = function (t) {
          t.on("dragStart", this.handleDraggabilly.dragStart),
            t.on("dragMove", this.handleDraggabilly.dragMove),
            t.on("dragEnd", this.handleDraggabilly.dragEnd);
        }),
        (h.prototype.bindUIDraggableEvents = function (t) {
          t.on("dragstart", this.handleUIDraggable.start)
            .on("drag", this.handleUIDraggable.drag)
            .on("dragstop", this.handleUIDraggable.stop);
        }),
        (h.Rect = n),
        (h.Packer = o),
        h
      );
    }
    "function" == typeof define && define.amd
      ? define(
          [
            "classie/classie",
            "get-size/get-size",
            "outlayer/outlayer",
            "packery/js/rect",
            "packery/js/packer",
            "packery/js/item",
          ],
          e,
        )
      : (t.Packery = e(
          t.classie,
          t.getSize,
          t.Outlayer,
          t.Packery.Rect,
          t.Packery.Packer,
          t.Packery.Item,
        ));
  })(window);
