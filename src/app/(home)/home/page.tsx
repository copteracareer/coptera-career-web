import Hero from "../_components/hero";
import Jobs from "../_components/jobs";
import Tips from "../_components/tips";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      {/* <Feature /> */}
      {/* <Categories /> */}
      <Jobs />
      <Tips />
    </div>
  );
};

export default HomePage;
