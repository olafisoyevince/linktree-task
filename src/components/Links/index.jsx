import slackLogo from "../../assets/slack.png";
import githubLogo from "../../assets/Icon.png";

const Links = () => {
  return (
    <>
      <div className="flex flex-col gap-4 font-normal">
        <a
          href="https://training.zuri.team/"
          id="btn__zuri"
          className="text-center bg-gray-200 rounded-md py-6 "
        >
          Zuri Team
        </a>

        <a
          href="http://books.zuri.team"
          id="books"
          className=" text-center  bg-gray-200 rounded-md py-6"
        >
          Zuri Books
        </a>

        <a
          href={`https://books.zuri.team/python-for-beginners?ref_id=seuntheboy`}
          id="book__python"
          className=" text-center  bg-gray-200 rounded-md py-6"
          title="Python for Beginners"
        >
          Python Books
        </a>

        <a
          href="https://background.zuri.team"
          id="pitch"
          className=" text-center  bg-gray-200 rounded-md py-6"
        >
          Background Check for Coders
        </a>

        <a
          href="https://books.zuri.team/design-rules"
          id="book__design"
          className=" text-center  bg-gray-200 rounded-md py-6"
        >
          Design Books
        </a>

        <div className=" flex justify-center py-8 gap-4">
          <a href="">
            <img src={slackLogo} alt="" />
          </a>

          <a href="">
            <img src={githubLogo} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
