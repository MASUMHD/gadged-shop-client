import Accordion from "../Components/Home/Accordion";
import Banner from "../Components/Home/Banner";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import UserReview from "../Components/Home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-extrabold text-center">
            Featured Products
          </h1>
          <FeaturedProducts />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-extrabold text-center">
            User Review
          </h1>
          <UserReview />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-extrabold text-center">
            Frequently Asked Questions
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
