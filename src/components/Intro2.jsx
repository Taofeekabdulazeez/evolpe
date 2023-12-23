function Intro2() {
  return (
    <section className="py-[3rem]">
      <div className="grid sm:grid-cols-[1fr_.8fr] w-[85%] m-auto max-w-[130rem] items-center gap-20">
        <div>
          <span className="inline-block bg-[#D995451A] tracking-widest text-[rgb(239,124,0)] px-[12px] py-[6px] uppercase text-sm font-semibold rounded-lg mb-4">
            Email efficiency
          </span>
          <h1 className="text-[3rem] font-medium mb-[24px] text-[#0A071B] leading-[1.25]">
            Schedule a consultation with an eVolpe expert
          </h1>
          <p className="text-[1.25rem] font-medium text-[#5B5675] mb-6">
            Our team of experts understands the challenges and opportunities
            associated with optimizing your platform and is equipped to execute
            impactful delivery that yield quantifiable results.
          </p>
          <a
            href="#"
            className="px-[.75rem] py-[.5rem] text-[#5B5675] inset-border inline-block rounded-lg font-medium"
          >
            Choose a date
          </a>
        </div>
        <div className="h-full grid place-items-center">
          <div className="relative">
            <div className="triangle-t"></div>
            <img
              className="block w-[100%]"
              src="consult.jpg"
              alt="exited customer"
            />
            <div className="triangle-b"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
