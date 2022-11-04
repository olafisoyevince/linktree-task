import Layout from "../../components/Layout";
import Links from "../../components/Links";
import PersonalProfile from "../../components/PersonalProfile";

const Home = () => {
  return (
    <>
      <Layout>
        <PersonalProfile />
        <Links />
      </Layout>
    </>
  );
};

export default Home;
