import Button from "../components/Button";
import {arrowRight} from '../assets/icons'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span> The New Arrival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>Discover stylish Nike Shoes arrival, quality comfort and innovation that suits whatever lifestyle you have</p>
        <Button label={"Shop Now"} iconURL={arrowRight}/>
      </div>
    </section>
  );
};

export default Hero;
