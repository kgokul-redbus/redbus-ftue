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

  // .design-sync/previews/Icon.tsx
  var Icon_exports = {};
  __export(Icon_exports, {
    ColourInheritance: () => ColourInheritance,
    Navigation: () => Navigation,
    Sizes: () => Sizes,
    StatusAndAccount: () => StatusAndAccount,
    TravelAndBooking: () => TravelAndBooking
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

  // .design-sync/previews/Icon.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var cell = (name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: { width: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name, label: name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)", textAlign: "center" }, children: name.replace("ion-", "") })
      ]
    },
    name
  );
  var group = (heading, names) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "label", style: { color: "var(--content-neutral-medium-default)" }, children: heading }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: names.map(cell) })
  ] });
  var Navigation = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: group("Navigation and controls", [
    "ion-arrow-back",
    "ion-arrow-forward",
    "ion-chevron-down",
    "ion-chevron-up",
    "ion-close",
    "ion-menu",
    "ion-more",
    "ion-search",
    "ion-plus",
    "ion-minus",
    "ion-edit",
    "ion-copy"
  ]) });
  var TravelAndBooking = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: group("Travel and booking", [
    "ion-bus",
    "ion-location",
    "ion-calendar",
    "ion-swap",
    "ion-filter",
    "ion-sort",
    "ion-ticket",
    "ion-bookings",
    "ion-offer",
    "ion-home",
    "ion-home-filled",
    "ion-delete"
  ]) });
  var StatusAndAccount = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328 }, children: [
    group("Status", ["ion-check", "ion-check-circle", "ion-error", "ion-info", "ion-star"]),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 16 } }),
    group("Account", [
      "ion-user",
      "ion-account-circle",
      "ion-help",
      "ion-eye",
      "ion-eye-off"
    ])
  ] });
  var Sizes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 24, alignItems: "flex-end" }, children: ["sm", "md", "lg"].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-bus", size, label: `Bus ${size}` }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: size === "sm" ? "sm · 18px" : size === "md" ? "md · 24px" : "lg · 28px" })
  ] }, size)) });
  var row = (name, label, color, background) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color,
        ...background ? { background, padding: "8px 12px", borderRadius: 8 } : null
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", strong: true, style: { color: "inherit" }, children: label })
      ]
    }
  );
  var ColourInheritance = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 10 }, children: [
    row("ion-offer", "Flat ₹150 off with ZINGFEST", "var(--content-brand-high-default)"),
    row("ion-check-circle", "Booking confirmed · TK-4821-9930", "var(--content-success-high-default)"),
    row("ion-error", "Payment failed — retry with UPI", "var(--content-warning-high-default)"),
    row("ion-location", "Sector 43 Bus Terminal, Chandigarh", "var(--content-neutral-medium-default)"),
    row(
      "ion-bus",
      "Zing Bus is 12 min away",
      "var(--content-neutral-inverse-default)",
      "var(--surface-brand-high-default)"
    )
  ] });
  return __toCommonJS(Icon_exports);
})();
