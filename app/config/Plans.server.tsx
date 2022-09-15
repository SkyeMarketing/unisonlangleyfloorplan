import type Area from "~/config/Area.server";
import type Category from "~/config/Category.server";
import type Layout from "~/config/Layout.server";
import type Plan from "~/config/Plan.server";

export type PlanData = {
  area: Area,
  category: Category,
  layout: Layout,
  plan: Plan,
  units: number[],
}

const Plans: PlanData[] = [
  {
    area: "464",
    category: "a",
    layout: "studio",
    plan: "a",
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
      505,
    ]
  },
  {
    area: "797",
    category: "a",
    layout: "doubleJr",
    plan: "a1",
    units: [
      101,
      201,
      301,
      401,
      501,
      601,
    ]
  },
  {
    area: "646",
    category: "a",
    layout: "single",
    plan: "a2",
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
      606,
    ]
  },
  {
    area: "582",
    category: "a",
    layout: "singleDen",
    plan: "a3",
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
      507,
    ]
  },
  {
    area: "646",
    category: "a",
    layout: "single",
    plan: "a4",
    units: [
      108,
    ],
  },
  {
    area: "633",
    category: "a",
    layout: "doubleJr",
    plan: "a5",
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
      604,
    ],
  },
  {
    area: "646",
    category: "a",
    layout: "singleDen",
    plan: "a6",
    units: [
      603,
    ],
  },
  {
    area: "859",
    category: "b",
    layout: "double",
    plan: "b",
    units: [
      214,
      314,
      414,
      514,
      605,
    ],
  },
  {
    area: "863",
    category: "b",
    layout: "doubleDen",
    plan: "b1",
    units: [
      216,
      316,
      416,
      516,
      607,
    ],
  },
  {
    area: "716",
    category: "b",
    layout: "double",
    plan: "b2",
    units: [
      217,
    ],
  },
  {
    area: "827",
    category: "b",
    layout: "double",
    plan: "b3",
    units: [
      317,
      417,
      517,
      608,
    ]
  },
  {
    area: "880",
    category: "c",
    layout: "double",
    plan: "c",
    units: [
      109,
      209,
      309,
      409,
    ],
  },
  {
    area: "1042",
    category: "c",
    layout: "triple",
    plan: "c1",
    units: [
      208,
    ],
  },
  {
    area: "1043",
    category: "c",
    layout: "triple",
    plan: "c2",
    units: [
      308,
      408,
    ],
  }
];

export default Plans