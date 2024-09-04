import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center"> What Our
      <span className="text-coral-red"> Customers </span>Says?</h3>
      <p className="info-text max-w-lg text-center m-auto mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum suscipit molestiae optio vitae ut magnam dolorem.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index)=>(
          <ReviewCard key={index} review={review} imgURL={review.imgURL}customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews