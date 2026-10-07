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

  // .design-sync/previews/RaySheet.tsx
  var RaySheet_exports = {};
  __export(RaySheet_exports, {
    Answered: () => Answered,
    Loading: () => Loading,
    Welcome: () => Welcome
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

  // .design-sync/previews/RaySheet.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var intro = "Good Evening Traveler! 👋 I'm your new travel chat assistant, here to help you find routes, compare options, and make your journeys smoother. You're one of the first to chat with me — I'm still in beta and learning along the way, so if I take a wrong turn, your feedback will help me get better!";
  var context = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Helping you choose a bus from Delhi to Ganganagar (Sri Ganganagar) on 9 Jul" });
  var Welcome = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IonsRoot, { device: true, style: { height: 800 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.RaySheet,
    {
      open: true,
      intro,
      context,
      prompts: ["Explore Comfortable Travel Options", "Find Early Booking Discount Buses", "Show AC Seater Buses"]
    }
  ) });
  var Answered = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IonsRoot, { device: true, style: { height: 800 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.RaySheet,
    {
      open: true,
      context,
      exchanges: [
        {
          question: "Explore Comfortable Travel Options",
          answer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Since you prefer a comfortable journey, I’ve found some great AC seater options for your trip today. These are perfect for relaxing while you travel; tap an option below to choose your seats before they fill up!" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ds_exports.BusTuple,
              {
                embedded: true,
                departure: "23:25",
                arrival: "07:55",
                duration: "8h 30m",
                seats: 22,
                singleSeats: 2,
                fare: "₹800",
                operator: "Gajraj bus service",
                busType: "Bharat Benz A/C Seater / Sleeper",
                tags: ["New Bus", "Toilet"]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ds_exports.BusTuple,
              {
                embedded: true,
                departure: "23:10",
                arrival: "07:00",
                duration: "7h 50m",
                seats: 36,
                singleSeats: 12,
                previousFare: "₹1,700",
                fare: "₹1,530",
                operator: "Lal Baba Travels",
                busType: "AshokLeyland Stile A/C",
                offerStrip: "Min. 12.5% off on 3 or more seats"
              }
            )
          ] })
        }
      ]
    }
  ) });
  var Loading = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IonsRoot, { device: true, style: { height: 800 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RaySheet, { open: true, context, placeholder: "Please wait...", exchanges: [{ question: "Explore Comfortable Travel Options" }] }) });
  return __toCommonJS(RaySheet_exports);
})();
