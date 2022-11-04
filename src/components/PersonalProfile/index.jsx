import profileImg from "../../assets/profile__img.png";
import mobileShare from "../../assets/_Avatar share button (1).png";
import desktopShare from "../../assets/_Avatar share button.png";
import { useState, useEffect } from "react";

const PersonalProfile = () => {
  const BREAK_POINT = 768;

  const [screenWidth, setScreenWidth] = useState({
    winWidth: window.innerWidth,
  });

  // console.log(screenWidth);

  const detectSize = () => {
    setScreenWidth({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [screenWidth]);

  return (
    <>
      <div className="mt-12 relative">
        <img
          className="absolute -top-4 right-0 md:right-20"
          src={screenWidth.winWidth < BREAK_POINT ? mobileShare : desktopShare}
          alt=""
        />
        <div>
          <img
            src={profileImg}
            id="profile__img"
            className=" mx-auto "
            alt=" a mock profile"
          />
        </div>
        <div className="py-8 ">
          <h3 id="twitter" className="text-center font-bold">
            @seuntheboy
          </h3>
        </div>

        <div>
          <h3 id="slack" className="hidden">
            seuntheboy
          </h3>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
