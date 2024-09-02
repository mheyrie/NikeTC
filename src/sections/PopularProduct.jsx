import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span>  Product</h2>
        <p className="">
          Experience top notch quality and styles with a sort after collections
        </p>
      </div>
    </section>
  );
};

export default PopularProduct;
