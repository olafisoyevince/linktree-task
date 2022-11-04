const Input = ({ label, placeholder, type, validate, id, required }) => {
  return (
    <div className=" flex flex-col mb-6 gap-1">
      <label className="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        id={id}
        className=" h-11 py-2 px-3 border-solid border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-300 peer "
      />
      <p className=" hidden peer-invalid:block text-red-600">{validate}</p>
    </div>
  );
};

export default Input;
