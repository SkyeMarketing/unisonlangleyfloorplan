var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.js
import { createRequestHandler } from "@remix-run/netlify";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { json } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useLocation } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-A4YIL5SV.css";

// app/root.tsx
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap"
  }
], meta = () => [{
  charset: "utf-8",
  title: "Unison Floorplans",
  viewport: "width=device-width,initial-scale=1"
}], loader = async () => json({ gaTrackingId: "AW-323317353" }), root_default = function() {
  let location = useLocation(), { gaTrackingId } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      gaTrackingId ? /* @__PURE__ */ jsxDEV2(Fragment, { children: [
        /* @__PURE__ */ jsxDEV2(
          "script",
          {
            async: !0,
            defer: !0,
            src: `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV2(
          "script",
          {
            async: !0,
            defer: !0,
            id: "gtag-init",
            dangerouslySetInnerHTML: {
              __html: `
                window.datalayer = window.datalayer || []
                function gtag() {
                  datalayer.push(arguments);
                }
                gtag('js', new Date())
                gtag('config', '${gaTrackingId}', {
                  page_path: '${location.pathname}'
                }
                )
              `
            }
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 74,
            columnNumber: 15
          },
          this
        ),
        location.pathname !== "/thank-you" ? null : /* @__PURE__ */ jsxDEV2(
          "script",
          {
            async: !0,
            defer: !0,
            dangerouslySetInnerHTML: {
              __html: `
                          gtag('event', 'conversion', {'send_to': 'AW-323317353/M8AKCI_JwuICEOnclZoB'});
                        `
            }
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 97,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV2(
      "body",
      {
        className: "overflow-hidden relative h-screen",
        children: [
          /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 114,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 115,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 116,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
};

// app/routes/thank-you.tsx
var thank_you_exports = {};
__export(thank_you_exports, {
  default: () => thank_you_default2,
  links: () => links2
});

// app/styles/thank-you.css
var thank_you_default = "/build/_assets/thank-you-RCSNMWGZ.css";

// app/routes/thank-you.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links2 = () => [
  {
    rel: "stylesheet",
    href: thank_you_default
  }
], thank_you_default2 = function() {
  return /* @__PURE__ */ jsxDEV3(
    "main",
    {
      className: `
          flex 
          flex 
          items-center sm:items-end md:items-center lg:items-end
          justify-center
          py-16 
          bg-center 
          w-full 
          mx-auto 
          h-full 
          bg-img 
          bg-cover 
          bg-fixed 
          bg-no-repeat 
          bg-blend-darken 
          bg-blend-darken 
        `,
      children: /* @__PURE__ */ jsxDEV3(
        "p",
        {
          className: `
            text-xl 
            font-serif 
            uppercase 
            font-bold 
            py-4 
            px-8 
            bg-white 
            border-2 
            border-aqua 
            rounded-md 
            text-center
          `,
          children: "Thank you for registering!"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
};

// app/routes/$plan/index.tsx
var plan_exports = {};
__export(plan_exports, {
  default: () => plan_default,
  loader: () => loader2
});

// app/schemas/Plans.schema.ts
import { z as z10 } from "zod";

// app/schemas/Plan.schema.ts
import { z as z9 } from "zod";

// app/schemas/Area.schema.ts
import { z } from "zod";
var AreaSchema = z.enum([
  "464",
  "582",
  "633",
  "646",
  "716",
  "797",
  "827",
  "859",
  "863",
  "880",
  "1042",
  "1043"
], {
  description: "The area of the plan",
  invalid_type_error: "The area must be a string",
  required_error: "Area is required"
}), Area_schema_default = AreaSchema, areaTransformer = (area) => `${area} Sq.Ft.`;

// app/schemas/Baths.schema.ts
import { z as z2 } from "zod";
var BathsSchema = z2.number({
  description: "The number of bathrooms in the plan",
  invalid_type_error: "The number of bathrooms must be a number",
  required_error: "The number of bathrooms is required"
}).min(1, {
  message: "The number of bathrooms must be at least 1"
}).max(3, {
  message: "The number of bathrooms must be at most 3"
}), Baths_schema_default = BathsSchema, bathsTransformer = (baths) => `${baths} Bath${baths > 1 ? "s" : ""}`;

// app/schemas/Category.schema.ts
import { z as z3 } from "zod";
var CategorySchema = z3.enum(
  [
    "A",
    "B",
    "C"
  ],
  {
    description: "The category of the plan",
    invalid_type_error: "The category must be a string",
    required_error: "Category is required"
  }
), Category_schema_default = CategorySchema;

// app/schemas/Enabled.schema.ts
import { z as z4 } from "zod";
var EnabledSchema = z4.boolean({
  description: "Whether the plan is enabled",
  invalid_type_error: "The enabled flag must be a boolean"
}).optional().default(!0), Enabled_schema_default = EnabledSchema;

// app/schemas/Layout.schema.ts
import { z as z5 } from "zod";
var LayoutSchema = z5.enum([
  "studio",
  "one-bedroom",
  "one-bedroom-plus-den",
  "two-bedroom",
  "two-bedroom-plus-den",
  "jr-two-bedroom",
  "three-bedroom"
], {
  description: "The layout of the plan",
  invalid_type_error: "The layout must be a string",
  required_error: "The layout is required"
}), Layout_schema_default = LayoutSchema, layoutTransformer = (layout) => {
  switch (layout) {
    case "studio":
      return "Studio";
    case "one-bedroom":
      return "1 Bedroom";
    case "one-bedroom-plus-den":
      return "1 Bedroom + Den";
    case "two-bedroom":
      return "2 Bedroom";
    case "two-bedroom-plus-den":
      return "2 Bedroom + Den";
    case "jr-two-bedroom":
      return "Jr. 2 Bedroom";
    case "three-bedroom":
      return "3 Bedroom";
  }
};

// app/schemas/Name.schema.ts
import { z as z6 } from "zod";
var NameSchema = z6.string({
  description: "The name of the plan",
  invalid_type_error: "The name must be a string",
  required_error: "The name is required"
}), Name_schema_default = NameSchema, nameTransformer = (name) => `Plan ${name}`;

// app/schemas/Units.schema.ts
import { z as z8 } from "zod";

// app/schemas/Unit.schema.ts
import { z as z7 } from "zod";
var UnitSchema = z7.number(), Unit_schema_default = UnitSchema;

// app/schemas/Units.schema.ts
var UnitsSchema = z8.array(Unit_schema_default, {
  description: "Available units for the plan",
  invalid_type_error: "The units must be an array of numbers",
  required_error: "The units are required"
}), Units_schema_default = UnitsSchema;

// app/schemas/Plan.schema.ts
var PlanSchema = z9.object({
  area: Area_schema_default,
  baths: Baths_schema_default,
  category: Category_schema_default,
  enabled: Enabled_schema_default,
  layout: Layout_schema_default,
  name: Name_schema_default,
  units: Units_schema_default
}), Plan_schema_default = PlanSchema;

// app/schemas/Plans.schema.ts
var PlansSchema = z10.array(Plan_schema_default), Plans_schema_default = PlansSchema;

// app/data/Plans.server.ts
var PLANS = Plans_schema_default.parse([
  {
    area: "464",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "studio",
    name: "A",
    units: [
      103,
      104,
      105,
      203,
      204,
      205,
      303,
      304,
      305,
      403,
      404,
      405,
      503,
      504,
      505
    ]
  },
  {
    area: "797",
    baths: 2,
    category: "A",
    enabled: !0,
    layout: "jr-two-bedroom",
    name: "A1",
    units: [
      101,
      201,
      301,
      401,
      501,
      601
    ]
  },
  {
    area: "646",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "one-bedroom",
    name: "A2",
    units: [
      102,
      202,
      215,
      302,
      315,
      402,
      415,
      502,
      515,
      602,
      606
    ]
  },
  {
    area: "582",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "one-bedroom-plus-den",
    name: "A3",
    units: [
      106,
      107,
      206,
      207,
      306,
      307,
      406,
      407,
      506,
      507
    ]
  },
  {
    area: "646",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "one-bedroom",
    name: "A4",
    units: [
      108
    ]
  },
  {
    area: "633",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "jr-two-bedroom",
    name: "A5",
    units: [
      110,
      111,
      112,
      113,
      210,
      211,
      212,
      213,
      310,
      311,
      312,
      313,
      410,
      411,
      412,
      413,
      510,
      511,
      512,
      513,
      604
    ]
  },
  {
    area: "646",
    baths: 1,
    category: "A",
    enabled: !0,
    layout: "one-bedroom-plus-den",
    name: "A6",
    units: [
      603
    ]
  },
  {
    area: "859",
    baths: 2,
    category: "B",
    enabled: !0,
    layout: "two-bedroom",
    name: "B",
    units: [
      214,
      314,
      414,
      514,
      605
    ]
  },
  {
    area: "863",
    baths: 2,
    category: "B",
    enabled: !0,
    layout: "two-bedroom-plus-den",
    name: "B1",
    units: [
      216,
      316,
      416,
      516,
      616
    ]
  },
  {
    area: "716",
    baths: 1,
    category: "B",
    enabled: !0,
    layout: "two-bedroom",
    name: "B2",
    units: [
      217
    ]
  },
  {
    area: "827",
    baths: 2,
    category: "B",
    enabled: !0,
    layout: "two-bedroom",
    name: "B3",
    units: [
      317,
      417,
      517,
      617
    ]
  },
  {
    area: "880",
    baths: 2,
    category: "C",
    enabled: !0,
    layout: "two-bedroom",
    name: "C",
    units: [
      109,
      209,
      309,
      409
    ]
  },
  {
    area: "1042",
    baths: 2,
    category: "C",
    enabled: !0,
    layout: "three-bedroom",
    name: "C1",
    units: [
      208
    ]
  },
  {
    area: "1043",
    baths: 2,
    category: "C",
    enabled: !0,
    layout: "three-bedroom",
    name: "C2",
    units: [
      308,
      408
    ]
  }
]), Plans_server_default = PLANS;

// app/routes/$plan/index.tsx
import { redirect } from "@remix-run/node";
import { z as z12 } from "zod";
import { Link, useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/PlanUnit.tsx
import { z as z11 } from "zod";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var PlanUnitSchema = z11.object({
  unit: z11.number()
}), PlanUnit_default = ({ unit }) => /* @__PURE__ */ jsxDEV4(
  "span",
  {
    className: `
        block
        py-4 md:py-6
        hover:bg-aqua
        border-2
        border-aqua hover:border-grey
        rounded-lg
        w-32 md:w-56
        font-serif
        text-2xl
        text-center
        group
      `,
    children: /* @__PURE__ */ jsxDEV4(
      "p",
      {
        className: `
          text-black group-hover:text-white
        `,
        children: unit
      },
      void 0,
      !1,
      {
        fileName: "app/components/PlanUnit.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/PlanUnit.tsx",
    lineNumber: 8,
    columnNumber: 5
  },
  this
);

// app/routes/$plan/index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var LoaderDataSchema = z12.object({
  area: Area_schema_default,
  baths: Baths_schema_default,
  layout: Layout_schema_default,
  name: Name_schema_default,
  units: Units_schema_default
}), loader2 = ({ params }) => {
  let { plan } = params;
  console.log(params), plan || redirect("/");
  let findPlan = Plans_server_default.filter(({ enabled }) => enabled).map(({ area, baths, layout, name, units }) => ({ area, baths, layout, name, units })).find((p) => p.name === plan);
  return findPlan ? LoaderDataSchema.parse(findPlan) : redirect("/");
}, plan_default = function() {
  let data = useLoaderData2();
  return /* @__PURE__ */ jsxDEV5(
    "main",
    {
      className: `
        container
        flex
        flex-col
        mx-auto
        lg:space-y-8
        overflow-hidden
      `,
      children: [
        /* @__PURE__ */ jsxDEV5(
          "img",
          {
            className: `
          lg:w-3/4
          mx-auto
          justify-self-center
        `,
            alt: `${data.name} floorplan`,
            src: `/imgs/plans/${data.name}.webp`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/$plan/index.tsx",
            lineNumber: 66,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          "div",
          {
            className: `
          flex
          flex-col
          justify-center
          items-center
          gap-4
        `,
            children: [
              /* @__PURE__ */ jsxDEV5(
                "div",
                {
                  className: `
            border-2
            border-aqua
            rounded-lg
            px-4
            py-2
            mb-2
          `,
                  children: [
                    /* @__PURE__ */ jsxDEV5(
                      "div",
                      {
                        className: `
              flex
              flex-col
              font-serif
              gap-x-1
              text-sm
              py-4
              px-2
              w-64
              text-center
            `,
                        children: [
                          /* @__PURE__ */ jsxDEV5(
                            "h1",
                            {
                              className: `
                uppercase
                text-3xl
                font-bold
                text-aqua
              `,
                              children: nameTransformer(data.name)
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/$plan/index.tsx",
                              lineNumber: 108,
                              columnNumber: 13
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV5(
                            Link,
                            {
                              to: "/m",
                              className: `
                decoration-1
                underline
                hover:text-aqua 
                hover:underline 
                hover:decoration-2 
                hover:decocation-aqua 
                transition-all 
                duration-300 
                ease-in-out
              `,
                              children: "Change floorplan"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/$plan/index.tsx",
                              lineNumber: 118,
                              columnNumber: 13
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/$plan/index.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5(
                      "ul",
                      {
                        className: `
              flex
              flex-col
              items-center
              text-xl
              uppercase
              font-serif
            `,
                        children: [
                          /* @__PURE__ */ jsxDEV5("li", { children: layoutTransformer(data.layout) }, void 0, !1, {
                            fileName: "app/routes/$plan/index.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                          }, this),
                          /* @__PURE__ */ jsxDEV5("li", { children: bathsTransformer(data.baths) }, void 0, !1, {
                            fileName: "app/routes/$plan/index.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                          }, this),
                          /* @__PURE__ */ jsxDEV5("li", { children: areaTransformer(data.area) }, void 0, !1, {
                            fileName: "app/routes/$plan/index.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/$plan/index.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/$plan/index.tsx",
                  lineNumber: 85,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
                "ul",
                {
                  className: `
            flex
            lg:w-1/2
            flex-wrap
            flex-row
            gap-4
            overflow-x-auto
            py-2
            justify-center
            items-center
            mx-auto
          `,
                  children: data.units.map((unit) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(Link, { to: `/${data.name}/${unit}`, children: [
                    /* @__PURE__ */ jsxDEV5(PlanUnit_default, { unit }, void 0, !1, {
                      fileName: "app/routes/$plan/index.tsx",
                      lineNumber: 168,
                      columnNumber: 50
                    }, this),
                    " "
                  ] }, void 0, !0, {
                    fileName: "app/routes/$plan/index.tsx",
                    lineNumber: 168,
                    columnNumber: 15
                  }, this) }, unit, !1, {
                    fileName: "app/routes/$plan/index.tsx",
                    lineNumber: 167,
                    columnNumber: 13
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/$plan/index.tsx",
                  lineNumber: 152,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/$plan/index.tsx",
            lineNumber: 76,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/$plan/index.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader3
});
import { z as z15 } from "zod";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/CategoryCarousel.tsx
import { z as z14 } from "zod";
import { Fragment as Fragment2, useCallback, useEffect, useRef, useState } from "react";

// app/components/CategoryPlan.tsx
import { z as z13 } from "zod";
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var CategoryPlanSchema = z13.object({
  area: Area_schema_default,
  layout: Layout_schema_default,
  name: Name_schema_default
}), CategoryPlan_default = ({ area, layout, name }) => /* @__PURE__ */ jsxDEV6(
  Link2,
  {
    to: `/${name}`,
    children: /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: `
          flex
          flex-col sm:flex-row lg:flex-col
          justify-center sm:justify-start
          sm:items-center
          w-64 sm:w-auto
          border-2
          border-black hover:border-grey
          rounded-lg
          overflow-hidden
          hover:bg-aqua
          group
        `,
        children: [
          /* @__PURE__ */ jsxDEV6(
            "img",
            {
              alt: `${name} Floorplan`,
              className: `
            border-b-2 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0
            border-aqua group-hover:border-grey
          `,
              src: `/imgs/plans/${name}.min.webp`
            },
            void 0,
            !1,
            {
              fileName: "app/components/CategoryPlan.tsx",
              lineNumber: 32,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            "div",
            {
              className: `
            place-center
            text-center
            transition-all
            ease-in-out
            duration-300
            sm:w-44 lg:w-48
            py-2 sm:py-auto
            sm:px-4
          `,
              children: [
                /* @__PURE__ */ jsxDEV6(
                  "h2",
                  {
                    className: `
              uppercase
              text-2xl
              font-bold
              font-serifCaps
              text-black group-hover:text-white
              group-hover:underline
              group-hover:decoration-white
              group-hover:decoration-4
            `,
                    children: [
                      "Plan ",
                      name
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/CategoryPlan.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6(
                  "ul",
                  {
                    className: `
              mt-4
              text-lg
              font-bold
              font-serif
              uppercase
              text-black group-hover:text-white
            `,
                    children: [
                      /* @__PURE__ */ jsxDEV6("li", { children: layoutTransformer(layout) }, void 0, !1, {
                        fileName: "app/components/CategoryPlan.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ jsxDEV6("li", { children: areaTransformer(area) }, void 0, !1, {
                        fileName: "app/components/CategoryPlan.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/CategoryPlan.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/CategoryPlan.tsx",
              lineNumber: 39,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/CategoryPlan.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/CategoryPlan.tsx",
    lineNumber: 14,
    columnNumber: 5
  },
  this
);

// app/components/CategoryCarousel.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var CategoryCarouselSchema = z14.object({
  plans: z14.array(
    z14.object({
      area: Area_schema_default,
      layout: Layout_schema_default,
      name: Name_schema_default
    })
  )
}), CategoryCarousel_default = ({ plans }) => {
  let MAX_PLANS = plans.length, FIRST_PLAN = 0, LAST_PLAN = MAX_PLANS - 1, [current, setCurrent] = useState(0), leftButtonRef = useRef(null), rightButtonRef = useRef(null), rightLgButtonRef = useRef(null), leftClickListener = useCallback((e) => {
    e.preventDefault(), current > 0 && setCurrent(current - 1);
  }, [current]), rightClickListener = useCallback((e) => {
    e.preventDefault(), current < LAST_PLAN && setCurrent(current + 1);
  }, [current, plans.length]), rightLgClickListener = useCallback(
    (e) => {
      e.preventDefault(), current < plans.length - 1 ? setCurrent(current + 1) : setCurrent(LAST_PLAN);
    },
    [LAST_PLAN, current, plans.length]
  );
  useEffect(
    () => {
      leftButtonRef.current && leftButtonRef.current.addEventListener("click", leftClickListener), rightButtonRef.current && rightButtonRef.current.addEventListener("click", rightClickListener), rightLgButtonRef.current && rightLgButtonRef.current.addEventListener("click", rightLgClickListener);
    },
    [current]
  );
  let smComponentSchema = z14.object({
    plan: z14.object({
      area: Area_schema_default,
      layout: Layout_schema_default,
      name: Name_schema_default
    })
  }), SmComponent = ({ plan }) => /* @__PURE__ */ jsxDEV7(CategoryPlan_default, { ...plan }, void 0, !1, {
    fileName: "app/components/CategoryCarousel.tsx",
    lineNumber: 91,
    columnNumber: 71
  }, this), lgComponentSchema = z14.object({
    plans: z14.array(
      z14.object({
        area: Area_schema_default,
        layout: Layout_schema_default,
        name: Name_schema_default
      })
    )
  }), LgComponent = ({ plans: plans2 }) => /* @__PURE__ */ jsxDEV7(
    "div",
    {
      className: `
        flex
        justify-center
        items-center
        gap-2
      `,
      children: plans2.map((plan, index) => index >= current && index <= current + 2 ? /* @__PURE__ */ jsxDEV7(CategoryPlan_default, { ...plan }, index, !1, {
        fileName: "app/components/CategoryCarousel.tsx",
        lineNumber: 116,
        columnNumber: 18
      }, this) : /* @__PURE__ */ jsxDEV7(Fragment2, {}, index, !1, {
        fileName: "app/components/CategoryCarousel.tsx",
        lineNumber: 118,
        columnNumber: 18
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/CategoryCarousel.tsx",
      lineNumber: 106,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ jsxDEV7(
    "div",
    {
      className: `
        flex
        justify-center
        items-center
        gap-2
      `,
      children: [
        /* @__PURE__ */ jsxDEV7(
          "button",
          {
            className: `
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `,
            disabled: current === FIRST_PLAN,
            ref: leftButtonRef,
            type: "button",
            children: /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: `
            w-8
            h-8
            group-hover:text-white
            transition-all
            ease-in-out
            duration-300
          `,
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CategoryCarousel.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/CategoryCarousel.tsx",
                lineNumber: 152,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/CategoryCarousel.tsx",
            lineNumber: 134,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          "span",
          {
            className: `
          lg:hidden
          flex
          gap-2
          justify-center
          items-center
        `,
            children: /* @__PURE__ */ jsxDEV7(SmComponent, { plan: plans[current] }, void 0, !1, {
              fileName: "app/components/CategoryCarousel.tsx",
              lineNumber: 181,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/CategoryCarousel.tsx",
            lineNumber: 172,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          "span",
          {
            className: `
          hidden lg:flex
          gap-2
          justify-center
          items-center
        `,
            children: /* @__PURE__ */ jsxDEV7(LgComponent, { plans }, void 0, !1, {
              fileName: "app/components/CategoryCarousel.tsx",
              lineNumber: 192,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/CategoryCarousel.tsx",
            lineNumber: 184,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          "button",
          {
            className: `
          lg:hidden
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `,
            disabled: current === LAST_PLAN,
            ref: rightButtonRef,
            type: "button",
            children: /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: `
            w-8
            h-8
            group-hover:text-white
            transition-all
            ease-in-out
            duration-300
          `,
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CategoryCarousel.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/CategoryCarousel.tsx",
                lineNumber: 214,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/CategoryCarousel.tsx",
            lineNumber: 195,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          "button",
          {
            className: `
          hidden
          rounded-full 
          hover:bg-aqua 
          h-12 
          w-12 
          hidden lg:flex 
          justify-center 
          items-center
          group
          transition-all
          ease-in-out
          duration-300
        `,
            disabled: current + 2 >= LAST_PLAN,
            ref: rightLgButtonRef,
            type: "button",
            children: /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: `
            w-8
            h-8
            group-hover:text-white
            transition-all
            ease-in-out
            duration-300
          `,
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CategoryCarousel.tsx",
                    lineNumber: 265,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/CategoryCarousel.tsx",
                lineNumber: 253,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/CategoryCarousel.tsx",
            lineNumber: 234,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CategoryCarousel.tsx",
      lineNumber: 126,
      columnNumber: 5
    },
    this
  );
};

// app/routes/index.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var LoaderDataSchema2 = z15.record(
  Category_schema_default,
  z15.array(z15.object({
    area: Area_schema_default,
    layout: Layout_schema_default,
    name: Name_schema_default
  }))
), loader3 = () => {
  let data = {};
  return Plans_server_default.filter(({ enabled }) => enabled).map(({ baths, enabled, units, ...plan }) => plan).forEach(({ category, ...plan }) => {
    data[category] ? data[category]?.push(plan) : data[category] = [plan];
  }), data;
}, routes_default = function() {
  let data = useLoaderData3();
  return /* @__PURE__ */ jsxDEV8(
    "main",
    {
      className: `
        container
        px-3
        py-6
        mx-auto
        bg-white
      `,
      children: /* @__PURE__ */ jsxDEV8(
        "section",
        {
          className: `
          flex
          flex-col
          gap-y-2
        `,
          children: Object.entries(data).map(([category, plans]) => /* @__PURE__ */ jsxDEV8(
            "div",
            {
              className: `
                py-4 sm:py-6
              `,
              children: [
                /* @__PURE__ */ jsxDEV8(
                  "h1",
                  {
                    className: `
                  mx-auto
                  uppercase
                  font-serif
                  text-4xl md:text-7xl
                  font-bold
                  text-center
                  text-aqua
                  py-4 md:py-8
                `,
                    children: category
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 70,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV8(CategoryCarousel_default, { plans }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 85,
                  columnNumber: 15
                }, this)
              ]
            },
            category,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 64,
              columnNumber: 13
            },
            this
          ))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 55,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 46,
      columnNumber: 5
    },
    this
  );
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FMCYAN2W.js", imports: ["/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-GAWRJWIF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-KXG2A6WS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BZGAQZOQ.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/$plan": { id: "routes/$plan", parentId: "root", path: ":plan", index: void 0, caseSensitive: void 0, module: "/build/routes/$plan-LBNBMP4P.js", imports: ["/build/_shared/chunk-JPS4SMAW.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-OHKGOCTZ.js", imports: ["/build/_shared/chunk-JPS4SMAW.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/thank-you": { id: "routes/thank-you", parentId: "root", path: "thank-you", index: void 0, caseSensitive: void 0, module: "/build/routes/thank-you-HOROP5M6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "45f5a1ee", hmr: { runtime: "/build/_shared/chunk-KXG2A6WS.js", timestamp: 1695325488639 }, url: "/build/manifest-45F5A1EE.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/thank-you": {
    id: "routes/thank-you",
    parentId: "root",
    path: "thank-you",
    index: void 0,
    caseSensitive: void 0,
    module: thank_you_exports
  },
  "routes/$plan": {
    id: "routes/$plan",
    parentId: "root",
    path: ":plan",
    index: void 0,
    caseSensitive: void 0,
    module: plan_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken != null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader != null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = createRequestHandler({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
export {
  handler
};
//# sourceMappingURL=index.js.map
