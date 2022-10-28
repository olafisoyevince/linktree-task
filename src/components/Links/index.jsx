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
          title="A place to find great books to aid your software journey"
        >
          Zuri Books
        </a>

        <a
          href={`https://books.zuri.team/python-for-beginners?ref_id=seuntheboy`}
          id="book__python"
          className=" text-center  bg-gray-200 rounded-md py-6"
          title="A book to get you started with Python"
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
            <img src={slackLogo} alt="slack logo with my link attached to it" />
          </a>

          <a href="https://github.com/olafisoyevince">
            <img
              src={githubLogo}
              alt="github logo with my link attached to it"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
