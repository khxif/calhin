import ProductsGrid from "./sections/products-grid";

export function Products() {
  return (
    <section className="pb-4 lg:py-20 max-w-7xl mx-auto mt-10 px-6 lg:px-0">
      <h1
        className="text-3xl font-medium relative before:absolute before:rounded-full max-w-fit
         before:w-3/5 before:h-1 before:bg-red-600 before:bottom-0 before:left-0 py-2.5 space-x-1"
      >
        <span className="text-red-600"> Our</span>
        <span> Products</span>
      </h1>

      <ProductsGrid />
    </section>
  );
}
