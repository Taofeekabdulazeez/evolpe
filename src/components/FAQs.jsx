import Accordion from "./Accordion";

function FAQs() {
  return (
    <section className="py-[6rem] sm:mt-20">
      <div className="sm:w-[85%] mx-auto">
        <h2 className="text-[2rem] font-semibold text-center mb-6">
          Frequently asked questions
        </h2>
        <Accordion />
      </div>
    </section>
  );
}

export default FAQs;
