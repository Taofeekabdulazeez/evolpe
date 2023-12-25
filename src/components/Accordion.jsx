import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/data";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickedItem = function (index) {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <ul className="grid grid-cols-1 w-[90%] mx-auto divide-y">
      {faqs.map((faq, index) => (
        <AccordionItem
          data={faq}
          key={index}
          isOpen={activeIndex === index}
          onClick={() => handleClickedItem(index)}
        />
      ))}
    </ul>
  );
}

export default Accordion;
