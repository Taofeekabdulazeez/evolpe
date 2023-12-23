import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickedItem = function (index) {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <ul className="grid grid-cols-1 w-[75%] mx-auto divide-y bg-red-300">
      <AccordionItem
        index={0}
        onClick={() => handleClickedItem(0)}
        isOpen={activeIndex === 0}
      />
      <AccordionItem
        index={1}
        onClick={() => handleClickedItem(1)}
        isOpen={activeIndex === 1}
      />
      <AccordionItem
        index={2}
        onClick={() => handleClickedItem(2)}
        isOpen={activeIndex === 2}
      />
    </ul>
  );
}

export default Accordion;
