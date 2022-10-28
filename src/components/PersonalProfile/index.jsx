import profileImg from "../../assets/profile__img.png";

const PersonalProfile = () => {
  return (
    <>
      <div className="mt-12">
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
