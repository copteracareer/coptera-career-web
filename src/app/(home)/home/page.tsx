import Categories from "../_components/categories";
import Hero from "../_components/hero";
import Jobs from "../_components/jobs";
import Tips from "../_components/tips";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import Feature from "../_components/feature";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <Categories />
      <Jobs />
      <Tips />
      <Footer />
    </div>
  );
};

export default HomePage;
