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

  // .design-sync/previews/IonsRoot.tsx
  var IonsRoot_exports = {};
  __export(IonsRoot_exports, {
    DarkTheme: () => DarkTheme,
    DeviceCanvas: () => DeviceCanvas,
    LightTheme: () => LightTheme,
    SideBySide: () => SideBySide
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

  // .design-sync/previews/IonsRoot.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var SearchResult = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: {
        padding: 16,
        background: "var(--surface-neutral-lowest-default)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 6
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-3", children: "Zing Bus Express" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RatingTag, { rating: "4.4", count: "1,208 ratings" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "Volvo 9600 AC Sleeper (2+1)" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "baseline", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", tabular: true, children: "22:45" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "06h 45m" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", tabular: true, children: "05:30" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Tag, { tone: "brand", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-offer", size: "sm" }), children: "₹150 off" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", tabular: true, children: "₹899" })
        ] })
      ]
    }
  );
  var LightTheme = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { theme: "light", style: { width: 360, padding: 16 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-1", style: { marginBottom: 12 }, children: "Chandigarh → Delhi" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResult, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "primary", block: true, style: { marginTop: 16 }, children: "Select seats" })
  ] });
  var DarkTheme = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { theme: "dark", style: { width: 360, padding: 16 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-1", style: { marginBottom: 12 }, children: "Chandigarh → Delhi" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResult, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Button, { variant: "primary", block: true, style: { marginTop: 16 }, children: "Select seats" })
  ] });
  var SideBySide = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { theme: "light", style: { width: 300, padding: 16, borderRadius: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "label", style: { color: "var(--content-neutral-medium-default)" }, children: "Light" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.List, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.ListItem,
          {
            media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }),
            title: "Zirakpur Chowk",
            support: "06:40 · Near Paras Down Town"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ListItem, { media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }), title: "Ambala Cantt", support: "07:35 · Highway pickup" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { theme: "dark", style: { width: 300, padding: 16, borderRadius: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "label", style: { color: "var(--content-neutral-medium-default)" }, children: "Dark" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.List, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ds_exports.ListItem,
          {
            media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }),
            title: "Zirakpur Chowk",
            support: "06:40 · Near Paras Down Town"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ListItem, { media: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-location" }), title: "Ambala Cantt", support: "07:35 · Highway pickup" })
      ] })
    ] })
  ] });
  var DeviceCanvas = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.IonsRoot, { device: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.TopNav,
      {
        title: "Chandigarh → Delhi",
        overline: "Wed, 12 Aug · 24 buses",
        leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Back", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-arrow-back" }) }),
        trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Filter", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "ion-filter" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: 16, display: "flex", flexDirection: "column", gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResult, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            padding: 16,
            background: "var(--surface-neutral-lowest-default)",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-3", children: "IntrCity SmartBus" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RatingTag, { rating: "4.1", count: "640 ratings" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "AC Seater / Sleeper (2+1) · 18 seats left" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "23:15 → 06:05" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", tabular: true, children: "₹1,049" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            padding: 16,
            background: "var(--surface-neutral-lowest-default)",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-3", children: "Laxmi Holidays" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.RatingTag, { rating: "3.9", count: "312 ratings" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)" }, children: "Non-AC Seater (2+2) · Boards at Zirakpur Chowk" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "body", tabular: true, style: { color: "var(--content-neutral-medium-default)" }, children: "21:30 → 05:15" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "title-2", tabular: true, children: "₹649" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { role: "caption", style: { color: "var(--content-neutral-medium-default)", textAlign: "center" }, children: "21 more buses on this route" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: "0 0 auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.BottomNav,
      {
        defaultValue: "home",
        items: [
          { value: "home", label: "Home", icon: "ion-home-filled" },
          { value: "bookings", label: "Bookings", icon: "ion-bookings" },
          { value: "offers", label: "Offers", icon: "ion-offer" },
          { value: "account", label: "Account", icon: "ion-account-circle" }
        ]
      }
    ) })
  ] });
  return __toCommonJS(IonsRoot_exports);
})();
