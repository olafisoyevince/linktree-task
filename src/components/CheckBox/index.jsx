import { BsCheckLg } from "react-icons/bs";

const CheckBox = ({ label, handleChecked }) => {
  return (
    <div className=" ">
      <label htmlFor="checkbox" className="relative">
        <input
          type="checkbox"
          id="checkbox"
          className="w-8 h-8 appearance-none border-solid border-2 border-gray-300 rounded-lg absolute focus:ring focus:border-blue-300 checked:border-blue-600 "
          onChange={handleChecked}
        />
        <BsCheckLg className="text-8xl h-4 w-4 text-blue-600 absolute left-2 top-2 text-opacity-0 check-1 transition" />
      </label>
      <p className=" ml-10 text-gray-600 ">{label}</p>
    </div>
  );
};

export default CheckBox;
