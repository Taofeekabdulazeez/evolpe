function AccordionItem({ isOpen, onClick }) {
  return (
    <li className="pt-8 pb-4">
      <div className="grid grid-cols-[1fr_auto] items-center justify-between cursor-pointer pb-4">
        <h4 className="text font-semibold">
          How is the system implemented? What are it’s stages?
        </h4>
        <button
          className="inline-flex items-center justify-center h-6 w-6 bg-[#0A071B1A] rounded-full font-bold text-[1.5rem]"
          onClick={onClick}
        >
          <span>{isOpen ? "-" : "+"}</span>
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden">
          IT systems cost... various things. The license price varies depending
          on the selected product and even its version. It all depends on your
          needs and the range of features you require from the software. There
          are also applications on the market without license fees. It is then
          worth paying attention to additional costs
        </p>
      </div>
    </li>
  );
}

export default AccordionItem;
