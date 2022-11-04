const Button = ({ checked, title, handleClick }) => {
  return (
    <>
      <button
        id="btn__submit"
        className="w-full rounded-lg text-white mt-8 mb-16 bg-blue-700 py-3 px-5 disabled:border-solid disabled:bg-blue-200  active:bg-blue-600 active:border-blue-200 active:ring"
        disabled={checked}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
