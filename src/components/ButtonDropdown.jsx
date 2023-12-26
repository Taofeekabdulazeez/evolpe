import PropTypes from "prop-types";

function ButtonDropdown({ children }) {
  return (
    <button className="flex items-center sm:gap-1 justify-between w-full sm:w-auto">
      <span className="font-medium text-[#5B5675] text-[.875rem]">
        {children}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-[18px] stroke-slate-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}

ButtonDropdown.propTypes = {
  children: PropTypes.string,
};

export default ButtonDropdown;
