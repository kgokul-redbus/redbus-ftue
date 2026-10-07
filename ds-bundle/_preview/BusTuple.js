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
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/BusTuple.tsx
  var BusTuple_exports = {};
  __export(BusTuple_exports, {
    ExclusiveDiscount: () => ExclusiveDiscount,
    GroupOffer: () => GroupOffer,
    MidRating: () => MidRating,
    PreviouslyViewed: () => PreviouslyViewed,
    Primo: () => Primo
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

  // .design-sync/previews/BusTuple.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var Results = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 360, padding: "16px 16px", background: "#f6f5fa", display: "grid", gap: 12 }, children });
  var Primo = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BusTuple,
    {
      primo: true,
      departure: "21:15",
      arrival: "05:50",
      duration: "8h 35m",
      seats: 16,
      singleSeats: 1,
      fare: "₹900",
      operator: "Pinky Gudiya Travels And Cargo",
      busType: "A/C Sleeper (2+1)",
      rating: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRating, { value: "4.5", count: 278 }),
      tags: ["New Bus", "Toilet"],
      onDetailsClick: () => {
      }
    }
  ) });
  var ExclusiveDiscount = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BusTuple,
    {
      ribbon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.OfferRibbon, { value: "5% OFF" }),
      departure: "21:30",
      arrival: "05:51",
      duration: "8h 21m",
      seats: 15,
      singleSeats: 1,
      previousFare: "₹952",
      fare: "₹904",
      operator: "Tantia Travels & Cargo",
      busType: "AC Sleeper (2+1)",
      rating: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRating, { value: "4.2", count: 118 }),
      tags: ["Toilet", "97% On Time"]
    }
  ) });
  var GroupOffer = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BusTuple,
    {
      ribbon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.OfferRibbon, { value: "10% OFF" }),
      departure: "23:10",
      arrival: "07:00",
      duration: "7h 50m",
      seats: 36,
      previousFare: "₹1,700",
      fare: "₹1,530",
      operator: "Lal Baba Travels",
      busType: "AshokLeyland Stile A/C",
      offerStrip: "Min. 12.5% off on 3 or more seats"
    }
  ) });
  var MidRating = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BusTuple,
    {
      departure: "21:50",
      arrival: "06:30",
      duration: "8h 40m",
      seats: 33,
      fare: "₹800",
      operator: "New Aditya Travels",
      busType: "A/C Sleeper (2+1)",
      rating: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRating, { value: "3.6", count: 104, tone: "mid" }),
      tags: ["84% On Time"]
    }
  ) });
  var PreviouslyViewed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BusTuple,
    {
      previous: true,
      primo: true,
      departure: "21:15",
      arrival: "05:50",
      duration: "8h 35m",
      seats: 14,
      fare: "₹900",
      operator: "Pinky Gudiya Travels And Cargo",
      busType: "A/C Sleeper (2+1)",
      rating: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRating, { value: "4.5", count: 278 }),
      tags: ["New Bus", "Toilet"]
    }
  ) });
  return __toCommonJS(BusTuple_exports);
})();
