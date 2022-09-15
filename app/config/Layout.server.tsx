export const layouts = {
  studio: "Studio",
  single: "1 Bedroom",
  singleDen: "1 Bedroom + Den",
  double: "2 Bedrooms",
  doubleDen: "2 Bedrooms + Den",
  doubleJr: "JR 2 Bedrooms",
  triple: "3 Bedrooms",
}

type Layout = keyof typeof layouts;
export default Layout;