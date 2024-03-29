/*!
 * vanilla-picker v2.8.0
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2019 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Picker = t()
}(this, function() {
    "use strict";
    var n = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        e = function() {
            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(e, t, r) {
                return t && o(e.prototype, t), r && o(e, r), e
            }
        }(),
        g = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var r = [],
                    o = !0,
                    i = !1,
                    n = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                } catch (e) {
                    i = !0, n = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (i) throw n
                    }
                }
                return r
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
    String.prototype.startsWith = String.prototype.startsWith || function(e) {
        return 0 === this.indexOf(e)
    }, String.prototype.padStart = String.prototype.padStart || function(e, t) {
        for (var r = this; r.length < e;) r = t + r;
        return r
    };
    var r = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function i(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        return (0 < t ? e.toFixed(t).replace(/0+$/, "").replace(/\.$/, "") : e.toString()) || "0"
    }
    var a = function() {
            function h(e, t, r, o) {
                n(this, h);
                var d = this;
                if (void 0 === e);
                else if (Array.isArray(e)) this.rgba = e;
                else if (void 0 === r) {
                    var i = e && "" + e;
                    i && function(e) {
                        if (e.startsWith("hsl")) {
                            var t = e.match(/([\-\d\.e]+)/g).map(Number),
                                r = g(t, 4),
                                o = r[0],
                                i = r[1],
                                n = r[2],
                                a = r[3];
                            void 0 === a && (a = 1), o /= 360, i /= 100, n /= 100, d.hsla = [o, i, n, a]
                        } else if (e.startsWith("rgb")) {
                            var s = e.match(/([\-\d\.e]+)/g).map(Number),
                                l = g(s, 4),
                                p = l[0],
                                c = l[1],
                                f = l[2],
                                u = l[3];
                            void 0 === u && (u = 1), d.rgba = [p, c, f, u]
                        } else e.startsWith("#") ? d.rgba = h.hexToRgb(e) : d.rgba = h.nameToRgb(e) || h.hexToRgb(e)
                    }(i.toLowerCase())
                } else this.rgba = [e, t, r, void 0 === o ? 1 : o]
            }
            return e(h, [{
                key: "printRGB",
                value: function(e) {
                    var t = (e ? this.rgba : this.rgba.slice(0, 3)).map(function(e, t) {
                        return i(e, 3 === t ? 3 : 0)
                    });
                    return e ? "rgba(" + t + ")" : "rgb(" + t + ")"
                }
            }, {
                key: "printHSL",
                value: function(e) {
                    var r = [360, 100, 100, 1],
                        o = ["", "%", "%", ""],
                        t = (e ? this.hsla : this.hsla.slice(0, 3)).map(function(e, t) {
                            return i(e * r[t], 3 === t ? 3 : 1) + o[t]
                        });
                    return e ? "hsla(" + t + ")" : "hsl(" + t + ")"
                }
            }, {
                key: "printHex",
                value: function(e) {
                    var t = this.hex;
                    return e ? t : t.substring(0, 7)
                }
            }, {
                key: "rgba",
                get: function() {
                    if (this._rgba) return this._rgba;
                    if (!this._hsla) throw new Error("No color is set");
                    return this._rgba = h.hslToRgb(this._hsla)
                },
                set: function(e) {
                    3 === e.length && (e[3] = 1), this._rgba = e, this._hsla = null
                }
            }, {
                key: "rgbString",
                get: function() {
                    return this.printRGB()
                }
            }, {
                key: "rgbaString",
                get: function() {
                    return this.printRGB(!0)
                }
            }, {
                key: "hsla",
                get: function() {
                    if (this._hsla) return this._hsla;
                    if (!this._rgba) throw new Error("No color is set");
                    return this._hsla = h.rgbToHsl(this._rgba)
                },
                set: function(e) {
                    3 === e.length && (e[3] = 1), this._hsla = e, this._rgba = null
                }
            }, {
                key: "hslString",
                get: function() {
                    return this.printHSL()
                }
            }, {
                key: "hslaString",
                get: function() {
                    return this.printHSL(!0)
                }
            }, {
                key: "hex",
                get: function() {
                    return "#" + this.rgba.map(function(e, t) {
                        return t < 3 ? e.toString(16) : Math.round(255 * e).toString(16)
                    }).map(function(e) {
                        return e.padStart(2, "0")
                    }).join("")
                },
                set: function(e) {
                    this.rgba = h.hexToRgb(e)
                }
            }], [{
                key: "hexToRgb",
                value: function(e) {
                    var t = (e.startsWith("#") ? e.slice(1) : e).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
                    if (!t.match(/^([0-9a-fA-F]{8})$/)) throw new Error("Unknown hex color; " + e);
                    var r = t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(e) {
                        return parseInt(e, 16)
                    });
                    return r[3] = r[3] / 255, r
                }
            }, {
                key: "nameToRgb",
                value: function(e) {
                    var t = r[e];
                    if (t) return h.hexToRgb(t)
                }
            }, {
                key: "rgbToHsl",
                value: function(e) {
                    var t = g(e, 4),
                        r = t[0],
                        o = t[1],
                        i = t[2],
                        n = t[3];
                    r /= 255, o /= 255, i /= 255;
                    var a = Math.max(r, o, i),
                        s = Math.min(r, o, i),
                        l = void 0,
                        p = void 0,
                        c = (a + s) / 2;
                    if (a === s) l = p = 0;
                    else {
                        var f = a - s;
                        switch (p = .5 < c ? f / (2 - a - s) : f / (a + s), a) {
                            case r:
                                l = (o - i) / f + (o < i ? 6 : 0);
                                break;
                            case o:
                                l = (i - r) / f + 2;
                                break;
                            case i:
                                l = (r - o) / f + 4
                        }
                        l /= 6
                    }
                    return [l, p, c, n]
                }
            }, {
                key: "hslToRgb",
                value: function(e) {
                    var t = g(e, 4),
                        r = t[0],
                        o = t[1],
                        i = t[2],
                        n = t[3],
                        a = void 0,
                        s = void 0,
                        l = void 0;
                    if (0 === o) a = s = l = i;
                    else {
                        var p = function(e, t, r) {
                                return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                            },
                            c = i < .5 ? i * (1 + o) : i + o - i * o,
                            f = 2 * i - c;
                        a = p(f, c, r + 1 / 3), s = p(f, c, r), l = p(f, c, r - 1 / 3)
                    }
                    var u = [255 * a, 255 * s, 255 * l].map(Math.round);
                    return u[3] = n, u
                }
            }]), h
        }(),
        E = window;

    function s(e) {
        var t = Element.prototype;
        t.matches || (t.matches = t.msMatchesSelector || t.webkitMatchesSelector), t.closest || (t.closest = function(e) {
            var t = this;
            do {
                if (t.matches(e)) return t;
                t = "svg" === t.tagName ? t.parentNode : t.parentElement
            } while (t);
            return null
        });
        var l = (e = e || {}).container || document.documentElement,
            i = e.selector,
            o = e.callback || console.log,
            n = e.callbackDragStart,
            a = e.callbackDragEnd,
            s = e.callbackClick,
            r = e.propagateEvents,
            p = !1 !== e.roundCoords,
            c = !1 !== e.dragOutside,
            f = e.handleOffset || !1 !== e.handleOffset,
            u = null;
        switch (f) {
            case "center":
                u = !0;
                break;
            case "topleft":
            case "top-left":
                u = !1
        }
        var d = void 0;

        function h(e, t, r, o) {
            var i = e.clientX,
                n = e.clientY;

            function a(e, t, r) {
                return Math.max(t, Math.min(e, r))
            }
            if (t) {
                var s = t.getBoundingClientRect();
                if (i -= s.left, n -= s.top, r && (i -= r[0], n -= r[1]), o && (i = a(i, 0, s.width), n = a(n, 0, s.height)), t !== l)(null !== u ? u : "circle" === t.nodeName || "ellipse" === t.nodeName) && (i -= s.width / 2, n -= s.height / 2)
            }
            return p ? [Math.round(i), Math.round(n)] : [i, n]
        }

        function g(e) {
            e.preventDefault(), r || e.stopPropagation()
        }

        function b(e) {
            var t = void 0;
            if (t = i ? i instanceof Element ? i.contains(e.target) ? i : null : e.target.closest(i) : {}) {
                g(e);
                var r = i && f ? h(e, t) : [0, 0],
                    o = h(e, l, r);
                d = {
                    target: t,
                    mouseOffset: r,
                    startPos: o,
                    actuallyDragged: !1
                }, n && n(t, o)
            }
        }

        function m(e) {
            if (d) {
                g(e);
                var t = d.startPos,
                    r = h(e, l, d.mouseOffset, !c);
                d.actuallyDragged = d.actuallyDragged || t[0] !== r[0] || t[1] !== r[1], o(d.target, r, t)
            }
        }

        function k(e, t) {
            if (d) {
                if (a || s) {
                    var r = !d.actuallyDragged,
                        o = r ? d.startPos : h(e, l, d.mouseOffset, !c);
                    s && r && !t && s(d.target, o), a && a(d.target, o, d.startPos, t || r && s)
                }
                d = null
            }
        }

        function v(e, t) {
            k(x(e), t)
        }

        function w(e, t, r) {
            e.addEventListener(t, r)
        }

        function _(e) {
            return void 0 !== e.buttons ? 1 === e.buttons : 1 === e.which
        }

        function y(e, t) {
            1 === e.touches.length ? t(x(e)) : k(e, !0)
        }

        function x(e) {
            var t = e.targetTouches[0];
            return t || (t = e.changedTouches[0]), t.preventDefault = e.preventDefault.bind(e), t.stopPropagation = e.stopPropagation.bind(e), t
        }
        w(l, "mousedown", function(e) {
            _(e) ? b(e) : k(e, !0)
        }), w(l, "touchstart", function(e) {
            return y(e, b)
        }), w(E, "mousemove", function(e) {
            d && (_(e) ? m(e) : k(e))
        }), w(E, "touchmove", function(e) {
            return y(e, m)
        }), w(l, "mouseup", function(e) {
            d && !_(e) && k(e)
        }), w(l, "touchend", function(e) {
            return v(e)
        }), w(l, "touchcancel", function(e) {
            return v(e, !0)
        })
    }
    var l = "keydown",
        p = "mousedown",
        c = "focusin";

    function w(e, t) {
        return (t || document).querySelector(e)
    }

    function f(e, t, r) {
        e.addEventListener(t, r, !1)
    }

    function u(e) {
        e.preventDefault(), e.stopPropagation()
    }

    function d(e, t, r, o) {
        f(e, l, function(e) {
            0 <= t.indexOf(e.key) && (o && u(e), r(e))
        })
    }
    var t = document.createElement("style");
    return t.textContent = ".picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.layout_default.picker_wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:'';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.layout_default .picker_sl::before{content:'';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:6rem}.layout_default .picker_editor input{width:calc(100% + 2px);height:calc(100% + 2px)}.layout_default .picker_sample{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.layout_default .picker_done{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.picker_wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;background:#f2f2f2;-webkit-box-shadow:0 0 0 1px silver;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{margin:-1px}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;-webkit-box-shadow:0 0 3px 1px #67b9ff;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);-webkit-box-shadow:0 0 0 1px silver;box-shadow:0 0 0 1px silver}.picker_sl{position:relative;-webkit-box-shadow:0 0 0 1px silver;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url(\"data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\") left top/contain white;-webkit-box-shadow:0 0 0 1px silver;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:monospace;padding:.1em .2em}.picker_sample::before{content:'';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_done button{-webkit-box-sizing:border-box;box-sizing:border-box;padding:.2em .5em;cursor:pointer}.picker_arrow{position:absolute;z-index:-1;top:150px}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;-webkit-box-shadow:0 0 10px 1px rgba(0,0,0,0.4);box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:\"\";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;-webkit-box-shadow:none;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:150px;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:-150px;right:100%}.popup.popup_left .picker_arrow{top:150px;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:-150px;left:100%}.popup.popup_right .picker_arrow{top:150px;left:0}", document.documentElement.firstElementChild.appendChild(t),
        function() {
            function r(e) {
                var t = this;
                n(this, r), this.settings = {
                    popup: "right",
                    layout: "default",
                    alpha: !0,
                    editor: !0,
                    editorFormat: "hex"
                }, this._openProxy = function(e) {
                    return t.openHandler(e)
                }, this.onChange = null, this.onDone = null, this.onOpen = null, this.onClose = null, this.setOptions(e)
            }
            return e(r, [{
                key: "setOptions",
                value: function(e) {
                    if (e) {
                        var t = this.settings;
                        if (e instanceof HTMLElement) t.parent = e;
                        else {
                            t.parent && e.parent && t.parent !== e.parent && (t.parent.removeEventListener("click", this._openProxy, !1), this._popupInited = !1),
                                function(e, t, r) {
                                    for (var o in e) r && 0 <= r.indexOf(o) || (t[o] = e[o])
                                }(e, t), e.onChange && (this.onChange = e.onChange), e.onDone && (this.onDone = e.onDone), e.onOpen && (this.onOpen = e.onOpen), e.onClose && (this.onClose = e.onClose);
                            var r = e.color || e.colour;
                            r && this._setColor(r)
                        }
                        var o = t.parent;
                        o && t.popup && !this._popupInited ? (f(o, "click", this._openProxy), d(o, [" ", "Spacebar", "Enter"], this._openProxy), this._popupInited = !0) : e.parent && !t.popup && this.show()
                    }
                }
            }, {
                key: "openHandler",
                value: function(e) {
                    if (this.show()) {
                        e && e.preventDefault(), this.settings.parent.style.pointerEvents = "none";
                        var t = e && e.type === l ? this._domEdit : this.domElement;
                        setTimeout(function() {
                            return t.focus()
                        }, 100), this.onOpen && this.onOpen(this.colour)
                    }
                }
            }, {
                key: "closeHandler",
                value: function(e) {
                    var t = e && e.type;
                    (e && ("click" !== t && t !== l || u(e)), !0) && this.hide() && (this.settings.parent.style.pointerEvents = "", t !== p && this.settings.parent.focus(), this.onClose && this.onClose(this.colour))
                }
            }, {
                key: "movePopup",
                value: function(e, t) {
                    this.closeHandler(), this.setOptions(e), t && this.openHandler()
                }
            }, {
                key: "setColor",
                value: function(e, t) {
                    this._setColor(e, {
                        silent: t
                    })
                }
            }, {
                key: "_setColor",
                value: function(e, t) {
                    if ("string" == typeof e && (e = e.trim()), e) {
                        t = t || {};
                        var r = void 0;
                        try {
                            r = new a(e)
                        } catch (e) {
                            if (t.failSilently) return;
                            throw e
                        }
                        if (!this.settings.alpha) {
                            var o = r.hsla;
                            o[3] = 1, r.hsla = o
                        }
                        this.colour = this.color = r, this._setHSLA(null, null, null, null, t)
                    }
                }
            }, {
                key: "setColour",
                value: function(e, t) {
                    this.setColor(e, t)
                }
            }, {
                key: "show",
                value: function() {
                    if (!this.settings.parent) return !1;
                    if (this.domElement) {
                        var e = this._toggleDOM(!0);
                        return this._setPosition(), e
                    }
                    var t, r, o = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div></div>',
                        i = (t = o, (r = document.createElement("div")).innerHTML = t, r.firstElementChild);
                    return this.domElement = i, this._domH = w(".picker_hue", i), this._domSL = w(".picker_sl", i), this._domA = w(".picker_alpha", i), this._domEdit = w(".picker_editor input", i), this._domSample = w(".picker_sample", i), this._domOkay = w(".picker_done button", i), i.classList.add("layout_" + this.settings.layout), this.settings.alpha || i.classList.add("no_alpha"), this.settings.editor || i.classList.add("no_editor"), this._ifPopup(function() {
                        return i.classList.add("popup")
                    }), this._setPosition(), this.colour ? this._updateUI() : this._setColor("#0cf"), this._bindEvents(), !0
                }
            }, {
                key: "hide",
                value: function() {
                    return this._toggleDOM(!1)
                }
            }, {
                key: "_bindEvents",
                value: function() {
                    var t = this,
                        r = this,
                        o = this.domElement;

                    function e(i, n) {
                        function e(e, t) {
                            var r = t[0] / i.clientWidth,
                                o = t[1] / i.clientHeight;
                            n(r, o)
                        }
                        return {
                            container: i,
                            dragOutside: !1,
                            callback: e,
                            callbackDragStart: e,
                            propagateEvents: !0
                        }
                    }
                    f(o, "click", function(e) {
                        return e.preventDefault()
                    }), s(e(this._domH, function(e, t) {
                        return r._setHSLA(e)
                    })), s(e(this._domSL, function(e, t) {
                        return r._setHSLA(null, e, 1 - t)
                    })), this.settings.alpha && s(e(this._domA, function(e, t) {
                        return r._setHSLA(null, null, null, 1 - t)
                    }));
                    var i = this._domEdit;
                    f(i, "input", function(e) {
                        r._setColor(this.value, {
                            fromEditor: !0,
                            failSilently: !0
                        })
                    }), f(i, "focus", function(e) {
                        this.selectionStart === this.selectionEnd && this.select()
                    });
                    var n = function(e) {
                        t._ifPopup(function() {
                            return t.closeHandler(e)
                        }), t.onDone && t.onDone(t.colour)
                    };
                    this._ifPopup(function() {
                        var e = function(e) {
                            return t.closeHandler(e)
                        };
                        f(window, p, e), f(window, c, e), d(o, ["Esc", "Escape"], e), f(o, p, u), f(o, c, u), f(t._domEdit, p, function(e) {
                            return t._domEdit.focus()
                        })
                    }), f(this._domOkay, "click", n), d(o, ["Enter"], n)
                }
            }, {
                key: "_setPosition",
                value: function() {
                    var r = this.settings.parent,
                        o = this.domElement;
                    r !== o.parentNode && r.appendChild(o), this._ifPopup(function(e) {
                        "static" === getComputedStyle(r).position && (r.style.position = "relative");
                        var t = !0 === e ? "popup_right" : "popup_" + e;
                        ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function(e) {
                            e === t ? o.classList.add(e) : o.classList.remove(e)
                        }), o.classList.add(t)
                    })
                }
            }, {
                key: "_setHSLA",
                value: function(e, t, r, o, i) {
                    i = i || {};
                    var n = this.colour,
                        a = n.hsla;
                    [e, t, r, o].forEach(function(e, t) {
                        (e || 0 === e) && (a[t] = e)
                    }), n.hsla = a, this._updateUI(i), this.onChange && !i.silent && this.onChange(n)
                }
            }, {
                key: "_updateUI",
                value: function(e) {
                    if (this.domElement) {
                        e = e || {};
                        var t = this.colour,
                            r = t.hsla,
                            o = "hsl(" + 360 * r[0] + ", 100%, 50%)",
                            i = t.hslString,
                            n = t.hslaString,
                            a = this._domH,
                            s = this._domSL,
                            l = this._domA,
                            p = w(".picker_selector", a),
                            c = w(".picker_selector", s),
                            f = w(".picker_selector", l);
                        k(0, p, r[0]), this._domSL.style.backgroundColor = this._domH.style.color = o, k(0, c, r[1]), v(0, c, 1 - r[2]), s.style.color = i, v(0, f, 1 - r[3]);
                        var u = i,
                            d = u.replace("hsl", "hsla").replace(")", ", 0)"),
                            h = "linear-gradient(" + [u, d] + ")";
                        if (this._domA.style.backgroundImage = h + ", url(\"data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\")", !e.fromEditor) {
                            var g = this.settings.editorFormat,
                                b = this.settings.alpha,
                                m = void 0;
                            switch (g) {
                                case "rgb":
                                    m = t.printRGB(b);
                                    break;
                                case "hsl":
                                    m = t.printHSL(b);
                                    break;
                                default:
                                    m = t.printHex(b)
                            }
                            this._domEdit.value = m
                        }
                        this._domSample.style.color = n
                    }

                    function k(e, t, r) {
                        t.style.left = 100 * r + "%"
                    }

                    function v(e, t, r) {
                        t.style.top = 100 * r + "%"
                    }
                }
            }, {
                key: "_ifPopup",
                value: function(e, t) {
                    this.settings.parent && this.settings.popup ? e && e(this.settings.popup) : t && t()
                }
            }, {
                key: "_toggleDOM",
                value: function(e) {
                    var t = this.domElement;
                    if (!t) return !1;
                    var r = e ? "" : "none",
                        o = t.style.display !== r;
                    return o && (t.style.display = r), o
                }
            }], [{
                key: "StyleElement",
                get: function() {
                    return t
                }
            }]), r
        }()
});