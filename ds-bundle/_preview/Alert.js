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

  // .design-sync/previews/Alert.tsx
  var Alert_exports = {};
  __export(Alert_exports, {
    OperatorNotice: () => OperatorNotice,
    TitleOnly: () => TitleOnly,
    Tones: () => Tones,
    WithAction: () => WithAction
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

  // .design-sync/previews/Alert.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var Tones = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Alert,
      {
        tone: "info",
        title: "Boarding point updated",
        description: "Zing Bus now picks up from Sector 43 Bus Terminal at 21:15."
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Alert,
      {
        tone: "success",
        title: "₹180 cashback applied",
        description: "Coupon SAVEBIG is active on this booking."
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Alert,
      {
        tone: "warning",
        title: "Only 3 seats left at this fare",
        description: "Fares on the 21:30 Chandigarh → Delhi service change with demand."
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.Alert,
      {
        tone: "error",
        title: "Seats released, your selection expired",
        description: "Seats L4 and L5 are back in the pool. Please pick your seats again."
      }
    )
  ] });
  var WithAction = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.Alert,
    {
      tone: "warning",
      title: "Payment pending",
      description: "Complete payment within 08:00 minutes or the booking is cancelled.",
      action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "tertiary", children: "Retry" })
    }
  ) });
  var TitleOnly = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { tone: "success", title: "Ticket sent to +91 98xxx 41207" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Alert, { tone: "error", title: "No buses found for Ambala Cantt → Jaipur Sindhi Camp" })
  ] });
  var OperatorNotice = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.Alert,
    {
      tone: "info",
      title: "Delhi ISBT Kashmere Gate entry is via Gate 3",
      description: "IntrCity SmartBus drops at the outer bay. Allow 10 minutes to reach the metro.",
      action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "tertiary", children: "Map" })
    }
  ) });
  return __toCommonJS(Alert_exports);
})();
