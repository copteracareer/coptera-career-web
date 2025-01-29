import Categories from "../_components/categories";
import Hero from "../_components/hero";
import Jobs from "../_components/jobs";
import Tips from "../_components/tips";
import Feature from "../_components/feature";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      {/* <Feature /> */}
      <Categories />
      <Jobs />
      <Tips />
    </div>
  );
};

export default HomePage;
