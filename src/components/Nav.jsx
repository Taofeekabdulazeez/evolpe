import ButtonDropdown from "./ButtonDropdown";

function Nav() {
  return (
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
          className="px-[.75rem] py-[.5rem] text-[#5B5675] inset-border inline-block rounded-lg font-medium"
        >
          Book an appointment
        </a>
        <a
          href="#"
          className="px-[12px] py-[6px] bg-slate-900 text-red-50 inline-block rounded-lg font-medium"
        >
          Contact us
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
