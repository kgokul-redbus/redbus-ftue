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

  // .design-sync/previews/Text.tsx
  var Text_exports = {};
  __export(Text_exports, {
    BodyScale: () => BodyScale,
    InContext: () => InContext,
    Strong: () => Strong,
    Tabular: () => Tabular,
    TitleScale: () => TitleScale
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

  // .design-sync/previews/Text.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var spec = (role, children) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-low-default)" }, children: role }),
    children
  ] }, role);
  var TitleScale = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 14 }, children: [
    spec("extra-large-title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "extra-large-title", children: "Chandigarh to Delhi" })),
    spec("large-title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "large-title", children: "Select your seats" })),
    spec("title-1", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-1", children: "Zing Bus Express" })),
    spec("title-2", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", children: "Boarding points" })),
    spec("title-3", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-3", children: "Sector 43 Bus Terminal" }))
  ] });
  var BodyScale = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 14 }, children: [
    spec(
      "body",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", children: "Volvo 9600 Multi-Axle AC Sleeper (2+1) departing 22:45 and reaching Delhi ISBT Kashmere Gate at 05:30 the next morning." })
    ),
    spec("label", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "label", children: "Cancellation policy" })),
    spec(
      "caption",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "Free cancellation until 12 Aug, 18:45 IST" })
    )
  ] });
  var Strong = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", children: "Amount payable after the ZINGFEST discount" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", strong: true, children: "Amount payable after the ZINGFEST discount" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "Seats L3, L4 · Lower deck" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", strong: true, children: "Seats L3, L4 · Lower deck" })
  ] });
  var Tabular = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-3", children: "Fare breakup" }),
    [
      ["Base fare · 2 seats", "₹1,598"],
      ["Reservation charges", "₹40"],
      ["GST", "₹110"],
      ["ZINGFEST discount", "−₹150"]
    ].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", style: { color: "var(--content-neutral-medium-default)" }, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, children: value })
    ] }, label)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, { variant: "dotted" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", strong: true, children: "Total payable" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", strong: true, tabular: true, children: "₹1,598" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "22:45" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "06h 45m" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "05:30" })
    ] })
  ] });
  var InContext = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: {
        width: 328,
        padding: 16,
        background: "var(--surface-neutral-lowest-default)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 4
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "IntrCity SmartBus" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", children: "Jaipur Sindhi Camp → Delhi ISBT" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", style: { color: "var(--content-neutral-medium-default)" }, children: "AC Seater / Sleeper (2+1) · 18 seats left" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-1", tabular: true, style: { marginTop: 8 }, children: "₹899" })
      ]
    }
  );
  return __toCommonJS(Text_exports);
})();
