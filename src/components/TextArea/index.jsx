const TextArea = ({ label, placeholder }) => {
  return (
    <div className=" flex flex-col mb-6 gap-1">
      <label className=" ">{label}</label>
      <textarea
        type="text"
        placeholder={placeholder}
        required
        id="message"
        className=" h-32 py-2 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none  invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-300 peer "
      />
      <p className=" hidden peer-invalid:block text-red-600">
        Please enter a message
      </p>
    </div>
  );
};

export default TextArea;
