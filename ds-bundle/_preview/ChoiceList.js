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

  // .design-sync/previews/ChoiceList.tsx
  var ChoiceList_exports = {};
  __export(ChoiceList_exports, {
    BusTypeFilter: () => BusTypeFilter,
    OperatorFilter: () => OperatorFilter,
    SortRadios: () => SortRadios,
    TwoGroups: () => TwoGroups
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

  // .design-sync/previews/ChoiceList.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var BusTypeFilter = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Bus type", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "type", value: "ac-sleeper", defaultChecked: true, children: "AC Sleeper" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "type", value: "ac-seater", children: "AC Seater" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "type", value: "non-ac-sleeper", children: "Non-AC Sleeper" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "type", value: "non-ac-seater", children: "Non-AC Seater" })
  ] }) });
  var SortRadios = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Sort buses by", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "radio", name: "sort-by", value: "fare", defaultChecked: true, children: "Fare — low to high" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "radio", name: "sort-by", value: "departure", children: "Earliest departure" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { type: "radio", name: "sort-by", value: "duration", children: "Shortest duration" })
  ] }) });
  var OperatorFilter = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 328 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Operators on Chandigarh → Delhi", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "operator", value: "zing", defaultChecked: true, children: "Zing Bus · 12 buses" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "operator", value: "intrcity", children: "IntrCity SmartBus · 8 buses" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "operator", value: "laxmi", children: "Laxmi Holidays · 5 buses" })
  ] }) });
  var TwoGroups = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 328, display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Departure time", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "depart", value: "early", defaultChecked: true, children: "Before 06:00" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "depart", value: "night", children: "After 18:00" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ChoiceList, { legend: "Amenities", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "amenity", value: "charging", defaultChecked: true, children: "Charging point" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "amenity", value: "blanket", children: "Blanket" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Choice, { name: "amenity", value: "tracking", children: "Live tracking" })
    ] })
  ] });
  return __toCommonJS(ChoiceList_exports);
})();
