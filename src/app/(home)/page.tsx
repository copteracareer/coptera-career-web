import Hero from "./_components/hero";
import Jobs from "./_components/jobsServer";
import Tips from "./_components/tips";
import NewHero from "./_components/newHero";
import PostJob from "./_components/postJob";
import Partner from "./_components/partner";
import Testimoni from "./_components/testimoni";

export const revalidate = 3600;

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* <Hero /> */}
      {/* <Feature /> */}
      {/* <Categories /> */}
      <NewHero />
      <Jobs />
      <Testimoni />
      <Partner />
      <PostJob />
      {/* <Tips /> */}
    </div>
  );
};

export default HomePage;
