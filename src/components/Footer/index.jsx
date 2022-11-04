import zuriLogo from "../../assets/Zuri.Internship_Logo.png";
import I4GLogo from "../../assets/I4G.png";
import Layout from "../Layout";

const Footer = () => {
  return (
    <>
      <Layout>
        <div className=" md:flex md:justify-between md:items-center border-t-2 border-gray-200 mt-12">
          <div className=" py-6 md:py-8">
            <img src={zuriLogo} alt="" />
          </div>

          <div>
            <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
          </div>

          <div className="py-6 md:py-8">
            <img src={I4GLogo} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Footer;
