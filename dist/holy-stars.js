!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.HolyStars = t())
    : (e.HolyStars = t())
})(window, function () {
  return (function (e) {
    var t = {}
    function r(o) {
      if (t[o]) return t[o].exports
      var n = (t[o] = { i: o, l: !1, exports: {} })
      return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if (
          (r.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var n in e)
            r.d(
              o,
              n,
              function (t) {
                return e[t]
              }.bind(null, n)
            )
        return o
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = ''),
      r((r.s = 0))
    )
  })([
    function (e, t, r) {
      r(2), (e.exports = r(1))
    },
    function (e, t, r) {},
    function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'HolyStars', function () {
          return u
        })
      var o = {
        el: null,
        rate: null,
        size: 24,
        primaryColor: '#FFE135',
        secondColor: '#ddd'
      }
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function i(e) {
        var t = e.offset,
          r = void 0 === t ? 1 : t,
          o = e.colors,
          n = e.size,
          i = void 0 === n ? 24 : n
        return '\n    <div class="holy-stars__entity" style="width: '
          .concat(i, 'px; height: ')
          .concat(
            i,
            'px">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '
          )
          .concat(24 * r, ' 24" width="')
          .concat(i * r, '" height="')
          .concat(i, '">\n        <path fill="')
          .concat(
            o.primaryColor,
            '" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>\n      </svg>\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="'
          )
          .concat(i, '" height="')
          .concat(i, '">\n        <path fill="')
          .concat(
            o.secondColor,
            '" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>\n      </svg>\n    </div>'
          )
      }
      var s = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this._data = { el: null, colors: null, rate: null, size: null })
        }
        var t, r, o
        return (
          (t = e),
          (r = [
            {
              key: 'run',
              value: function () {
                var e = this._data,
                  t = e.rate,
                  r = t - Math.floor(t)
                t = Math.floor(t)
                for (var o = '', n = 0; n < 5; n++)
                  n < t
                    ? (o += i({ colors: e.colors, size: e.size }))
                    : r
                    ? ((o += i({ offset: r, colors: e.colors, size: e.size })),
                      (r = !1))
                    : (o += i({ offset: 0, colors: e.colors, size: e.size }))
                var s = document.createElement('div')
                for (
                  s.classList.add('holy-stars'), s.innerHTML = o;
                  e.el.firstChild;

                )
                  e.el.removeChild(e.el.firstChild)
                e.el.appendChild(s)
              }
            },
            {
              key: 'data',
              set: function (e) {
                this._data = e
              }
            }
          ]) && n(t.prototype, r),
          o && n(t, o),
          e
        )
      })()
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      var u = (function () {
        function e(t) {
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            (this.options = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? l(Object(r), !0).forEach(function (t) {
                      a(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : l(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      )
                    })
              }
              return e
            })({}, o, {}, t)),
            !(this.options.el instanceof HTMLElement))
          )
            throw new Error("Option 'el' should be HTMLElement")
          if (((this.el = this.options.el), null === this.options.rate))
            throw new Error("Option 'rate' required")
          var r = parseFloat(this.options.rate)
          if ('number' != typeof r || isNaN(r))
            throw new Error("Option 'rate' should be correct number")
          if (((this.rate = r), isNaN(+this.options.size)))
            throw new Error("Option 'size' should be correct number")
          ;(this.size = +this.options.size),
            (this.colors = {
              primaryColor: this.options.primaryColor,
              secondColor: this.options.secondColor
            }),
            (this.render = new s()),
            this.compute()
        }
        var t, r, n
        return (
          (t = e),
          (r = [
            {
              key: 'compute',
              value: function () {
                ;(this.render.data = {
                  el: this.el,
                  colors: this.colors,
                  rate: this.rate,
                  size: this.size
                }),
                  this.render.run()
              }
            },
            {
              key: 'value',
              set: function (e) {
                var t = parseFloat(e)
                if ('number' != typeof t || isNaN(t))
                  throw new Error('rate value should be correct number')
                ;(this.rate = t), (this.rate = t), this.compute()
              }
            }
          ]) && c(t.prototype, r),
          n && c(t, n),
          e
        )
      })()
    }
  ])
})
