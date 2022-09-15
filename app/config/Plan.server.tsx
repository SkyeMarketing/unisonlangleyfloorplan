export const plans  = {
  a: {
    enabled: true,
    name: "A",
  },
  a1: {
    enabled: true,
    name: "A1",
  },
  a2: {
    enabled: true,
    name: "A2",
  },
  a3: {
    enabled: true,
    name: "A3",
  },
  a4: {
    enabled: true,
    name: "A4",
    units: [
      108,
    ],
  },
  a5: {
    enabled: true,
    name: "A5",
  },
  a6: {
    enabled: true,
    name: "A6",
  },
  b: {
    enabled: true,
    name: "b",
  },
  b1: {
    enabled: true,
    name: "B1",
  },
  b2: {
    enabled: true,
    name: "B2",
  },
  b3: {
    enabled: true,
    name: "B3",
  },
  c: {
    enabled: true,
    name: "C",
  },
  c1: {
    enabled: true,
    name: "C1",
  },
  c2: {
    enabled: true,
    name: "C2",
  },
}

type Plan = keyof typeof plans;
export default Plan;