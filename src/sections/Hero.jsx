import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const changeBigShoeImage = (shoe) => {
    setBigShoeImg(shoe);
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-4xl font-montserrat text-coral-red">
          Our Exquisite Collections
        </p>
        <h1 className="mt-10 font-palanquin text-4xl md:text-8xl max-sm:text-[92px] max-sm:leading-[122px] font-bold">
          <span className="xl:bg-white dark:bg-slate-600 xl:whitespace-nowrap z-10 pr-10 relative p-2 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike Shoes arrival, quality comfort and innovation
          that suits whatever lifestyle you have
        </p>
        <Button label={"Shop Now"} iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* <div className="relative"> */}
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={600}
          height={500}
          className="object-contain z-10 relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={changeBigShoeImage}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
