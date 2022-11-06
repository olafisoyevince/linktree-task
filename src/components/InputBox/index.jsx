const Input = ({ label, placeholder, type, validate, id, required }) => {
  return (
    <div className="w-full flex flex-col mb-6 gap-1">
      <label className="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        id={id}
        className="w-full h-11 py-2 px-3 border-solid border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:ring focus:outline-none peer "
      />
      <p className=" hidden ">{validate}</p>
    </div>
  );
};

export default Input;
