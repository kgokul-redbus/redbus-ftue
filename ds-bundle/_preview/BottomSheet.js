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

  // .design-sync/previews/BottomSheet.tsx
  var BottomSheet_exports = {};
  __export(BottomSheet_exports, {
    BoardingPointSheet: () => BoardingPointSheet,
    FareBreakup: () => FareBreakup,
    FiltersSheet: () => FiltersSheet
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

  // .design-sync/previews/BottomSheet.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var Screen = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        position: "relative",
        transform: "translateZ(0)",
        width: 360,
        height: 560,
        overflow: "hidden",
        background: "var(--surface-neutral-medium-default)",
        borderRadius: 12
      },
      children
    }
  );
  var FiltersSheet = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    ds_exports.BottomSheet,
    {
      open: true,
      title: "Filters",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "secondary", children: "Clear all" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "primary", children: "Show 24 buses" })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Departure time", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "checkbox", name: "departure", defaultChecked: true, children: "Before 06:00" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "checkbox", name: "departure", children: "06:00 – 12:00" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "checkbox", name: "departure", defaultChecked: true, children: "18:00 – 23:59" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Bus type", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "checkbox", name: "bustype", defaultChecked: true, children: "A/C Sleeper" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "checkbox", name: "bustype", children: "A/C Seater" })
        ] })
      ]
    }
  ) });
  var FareBreakup = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    ds_exports.BottomSheet,
    {
      open: true,
      title: "Fare breakup",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "primary", children: "Continue to pay ₹1,418" }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", children: "Chandigarh → Delhi ISBT Kashmere Gate · 2 seats" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, children: "Base fare ₹1,200" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, children: "Reservation charges ₹98" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, children: "GST ₹120" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, { variant: "dotted" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", strong: true, tabular: true, children: "Total payable ₹1,418" })
      ]
    }
  ) });
  var BoardingPointSheet = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ds_exports.BottomSheet,
    {
      open: true,
      hideHandle: true,
      title: "Select boarding point",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "primary", children: "Confirm" }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.List, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.ListItem,
          {
            media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }),
            title: "Sector 43 Bus Terminal",
            support: "21:30 · Chandigarh",
            onClick: () => {
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.ListItem,
          {
            media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }),
            title: "Zirakpur Chowk",
            support: "21:55 · Near Paras Down Town",
            onClick: () => {
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.ListItem,
          {
            media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }),
            title: "Ambala Cantt",
            support: "22:50 · Highway pickup",
            onClick: () => {
            }
          }
        )
      ] })
    }
  ) });
  return __toCommonJS(BottomSheet_exports);
})();
