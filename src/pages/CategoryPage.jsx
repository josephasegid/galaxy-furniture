import Products from "./Products.jsx";
import { CATEGORY_PAGES } from "../data/categories.js";

export default function CategoryPage({ category }) {
  const page = CATEGORY_PAGES.find((item) => item.label === category);

  if (!page) {
    return <Products key={category} category={category} title={category} />;
  }

  return (
    <Products
      key={page.slug}
      category={page.label}
      title={page.title}
      description={page.description}
    />
  );
}
