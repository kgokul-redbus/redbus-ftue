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

  // .design-sync/previews/BusDetailsSheet.tsx
  var BusDetailsSheet_exports = {};
  __export(BusDetailsSheet_exports, {
    CancellationTab: () => CancellationTab,
    Overview: () => Overview
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

  // .design-sync/previews/BusDetailsSheet.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var policyRows = [
    { time: "Before 7th Jul 01:15 PM", standard: "90% refund", flexible: "100% refund" },
    { time: "From 7th Jul 01:15 PM Until 8th Jul 09:15 AM", standard: "75% refund", flexible: "100% refund" },
    { time: "After 8th Jul 09:15 AM", standard: "50% refund", flexible: "100% refund" }
  ];
  var policies = [
    { glyph: "☺", title: "Child passenger policy", description: "Children above the age of 7 will need a ticket" },
    { glyph: "▣", title: "Luggage policy", description: "2 pieces of luggage will be accepted free of charge per passenger." }
  ];
  var route = [
    "Delhi",
    "Bahadurgarh (Haryana)",
    "Rohtak",
    "Meham",
    "Hansi",
    "Hisar (Haryana)",
    "Bassi (Haryana)",
    "Bhadra (Rajasthan)",
    "Gogamedi",
    "Nohar",
    "Rawatsar",
    "Hanumangarh",
    "Pakka Saharana",
    "Ganganagar (Sri Ganganagar)",
    "Padampur",
    "Gajsinghpur",
    "Raisinghnagar"
  ];
  var boarding = [
    {
      time: "21:15",
      date: "10 Jul",
      name: "Shop no.35 old delhi railway station fatehpuri parking",
      address: "shop no.35 old delhi railway station fatehpuri parking"
    },
    {
      time: "22:14",
      date: "10 Jul",
      name: "Pinky gudiya travel and cargo ekta enclave metro station peeragarhi",
      address: "pinky gudiya travel and cargo ekta enclave metro station peeragarhi"
    }
  ];
  var dropping = [
    { time: "05:10", date: "11 Jul", name: "Lalgarh", address: "Lalgarh" },
    { time: "05:15", date: "11 Jul", name: "Ricco", address: "Ricco" }
  ];
  var tabs = [
    { id: "highlights", label: "Highlights" },
    { id: "cancellation", label: "Cancellation policy" },
    { id: "date-change", label: "Date change policy" },
    { id: "route", label: "Bus route" },
    { id: "boarding-info", label: "Boarding points" },
    { id: "dropping-info", label: "Dropping points" },
    { id: "policies", label: "Other policies" }
  ];
  var operator = {
    operator: "Pinky Gudiya Travels And Cargo",
    primo: true,
    meta: "21:15 - 05:50 · Fri, 10 Jul",
    rating: "4.5",
    ratingCount: "278"
  };
  var Overview = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IonsRoot, { device: true, style: { height: 800 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.BusDetailsSheet, { open: true, ...operator, tabs, activeSection: "highlights", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.DetailSection, { id: "highlights", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ff-detail-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ff-detail-card", children: [
          "New Bus",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "12 months old" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ff-detail-card", children: [
          "Bus Safety",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Available" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ff-detail-card", style: { marginTop: 8 }, children: [
        "Top 5%   ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "One of the best on this route" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "cancellation", title: "Cancellation policy", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PolicyTable, { rows: policyRows }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "date-change", title: "Date change policy", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You can change the travel date until 24 hours before departure. Fare difference may apply." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRoute, { stops: route, from: "Delhi", to: "Ganganagar (Sri Ganganagar)", summary: "421 km · 8h 35m" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "boarding-info", title: "Boarding points", subtitle: "Delhi", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RouteTimeline, { stops: boarding }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "dropping-info", title: "Dropping points", subtitle: "Ganganagar (Sri Ganganagar)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RouteTimeline, { stops: dropping }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "policies", title: "Other policies", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PolicyList, { items: policies }) })
  ] }) });
  var CancellationTab = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IonsRoot, { device: true, style: { height: 800 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.BusDetailsSheet, { open: true, ...operator, media: false, tabs, activeSection: "cancellation", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DetailSection, { id: "cancellation", title: "Cancellation policy", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.PolicyTable, { rows: policyRows }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.BusRoute, { stops: route, from: "Delhi", to: "Ganganagar (Sri Ganganagar)", summary: "421 km · 8h 35m" })
  ] }) });
  return __toCommonJS(BusDetailsSheet_exports);
})();
