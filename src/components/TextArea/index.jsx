const TextArea = ({ label, placeholder }) => {
  return (
    <div className=" flex flex-col mb-6 gap-1">
      <label className=" ">{label}</label>
      <textarea
        type="text"
        placeholder={placeholder}
        id="message"
        className=" h-32 py-2 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
