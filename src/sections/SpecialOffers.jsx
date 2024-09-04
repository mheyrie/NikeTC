import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer}  alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl  capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
         Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quo nam facilis voluptatum, accusamus deleniti reiciendis beatae laboriosam, dolore fugit deserunt modi. Maxime nobis necessitatibus libero, dolores deleniti quaerat voluptate.
          
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
        Officiis, reiciendis. Eveniet recusandae vero, consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel consequuntur. 
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop Now"} iconURL={arrowRight}/>
          <Button label={"Learn More"} backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
