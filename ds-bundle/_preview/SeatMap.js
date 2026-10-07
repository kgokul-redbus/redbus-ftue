"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.IndiaBusDS;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/SeatMap.tsx
  var SeatMap_exports = {};
  __export(SeatMap_exports, {
    Loaded: () => Loaded,
    OneSeatSelected: () => OneSeatSelected,
    TwoSeatsSelected: () => TwoSeatsSelected
  });
  init_define_import_meta_env();

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  init_define_import_meta_env();
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.IndiaBusDS;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/SeatMap.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var sold = (restriction) => ({ state: "sold", restriction });
  var decks = [
    {
      label: "Lower deck",
      steering: true,
      seats: [
        null,
        { id: "L25", price: 950, restriction: "male" },
        ...["male", "male", "male", "female", "female", "male", "female", "female", "male", "female", "male", "male", "female", "female", "male", "female"].map(sold)
      ]
    },
    {
      label: "Upper deck",
      seats: [
        null,
        ...["female", "female", "male", "male", "female", "male"].map(sold),
        { id: "U17", price: 900 },
        { id: "U18", price: 900 },
        sold("male"),
        { id: "U19", price: 900 },
        { id: "U20", price: 900 },
        sold("male"),
        { id: "U21", price: 900 },
        { id: "U22", price: 900 },
        sold("male"),
        { id: "U23", price: 900 },
        { id: "U24", price: 900 }
      ]
    }
  ];
  var canvas = { height: 800, background: "#f4f3f8" };
  var AppBar = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ff-status" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "ff-appbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "ff-back", type: "button", "aria-label": "Back", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-arrow-back", className: "ff-icon" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ff-appbar__copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Select Seats" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Delhi → Ganganagar (Sri Ganganagar)" })
      ] })
    ] })
  ] });
  var tray = {
    operator: "Pinky Gudiya Travels And Cargo",
    primo: true,
    meta: "21:15 - 05:50 · Fri, 10 Jul",
    rating: "4.5",
    ratingCount: "278",
    highlights: [
      { title: "New Bus", detail: "12 months old" },
      { title: "Bus Safety", detail: "Available" },
      { title: "Primo", detail: "A rising star" }
    ]
  };
  var Loaded = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { device: true, style: canvas, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatMap, { decks }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatTray, { photo: true, ...tray, footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatSelectionFooter, { count: 0, total: 0 }) })
  ] });
  var OneSeatSelected = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { device: true, style: canvas, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatMap, { decks, value: ["L25"] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatTray, { photo: true, ...tray, hasSelection: true, footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatSelectionFooter, { count: 1, total: 950 }) })
  ] });
  var TwoSeatsSelected = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { device: true, style: canvas, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatMap, { decks, value: ["L25", "U17"] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatTray, { photo: true, ...tray, hasSelection: true, footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SeatSelectionFooter, { count: 2, total: 1850 }) })
  ] });
  return __toCommonJS(SeatMap_exports);
})();
