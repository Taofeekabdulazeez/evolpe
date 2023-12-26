import ButtonDropdown from "./ButtonDropdown";
// [&>*]:w-[100%] sm:[&>*]:w-auto

function Nav({ isOpen }) {
  return (
    <nav
      className={`${
        isOpen ? "translate-x-[0%]" : ""
      } fixed translate-x-[-100%] sm:translate-x-0 transition-all sm:static inset-0 top-[60px] bg-white sm:bg-transparent h-[100dvh] sm:h-auto flex flex-col sm:flex-row w-[70%] sm:w-auto sm:flex sm:items-center sm:justify-between gap-24 z-40`}
    >
      <ul className="flex flex-col sm:flex-row items-center sm:gap-6 [&>*]:w-[100%] sm:[&>*]:w-auto divide-y divide-2 sm:divide-none">
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

      <ul className="flex flex-col sm:flex-row items-center justify-between gap-3">
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
  );
}

export default Nav;
