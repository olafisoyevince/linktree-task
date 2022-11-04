const Input = ({ label, placeholder }) => {
  return (
    <div className=" flex flex-col mb-6 gap-1">
      <label className="">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        id="first_name"
        className=" h-11 py-2 px-3 border-solid border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none "
      />
    </div>
  );
};

export default Input;
