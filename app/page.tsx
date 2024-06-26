import Landing from "../components/Landing/Landing";
import PageLayout from "../components/pagelayout";

const Home: React.FC = () => {
  return (
    <PageLayout noPaddingTop>
      <Landing />
    </PageLayout>
  );
};

export default Home;
