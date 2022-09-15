export const categories = {
  a: "A",
  b: "B",
  c: "C",
}

type Category = keyof typeof categories;
export default Category;