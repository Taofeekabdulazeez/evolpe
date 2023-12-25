import ButtonDropdown from "./ButtonDropdown";

function Nav() {
  return (
    <>
      <nav className="hidden sm:flex items-center justify-between gap-24">
        <ul className="flex items-center gap-6">
          <li>
            <ButtonDropdown>Systems</ButtonDropdown>
          </li>
          <li>
            <ButtonDropdown>How we work</ButtonDropdown>
          </li>
          <li>
            <ButtonDropdown>Knowledgeable</ButtonDropdown>
          </li>
          <li>
            <ButtonDropdown>Clients</ButtonDropdown>
          </li>
          {/* { <li>
          <ButtonDropdown>Contact</ButtonDropdown>
        </li>} */}
        </ul>

        <ul className="flex items-center justify-between gap-3">
          <a
            href="#"
            className="px-3 py-1.5 text-stone-900 text-[1rem] border-2 border-stone-800 inline-block rounded-lg font-medium"
          >
            Book an appointment
          </a>
          <a
            href="#"
            className="px-3 py-1.5 bg-slate-900 text-white border-2 border-slate-900 inline-block rounded-lg font-medium"
          >
            Contact us
          </a>
        </ul>
      </nav>
      <button className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  );
}

export default Nav;
