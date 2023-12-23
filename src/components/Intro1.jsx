function Intro1() {
  return (
    <section className="py-[1rem] sm:py-[2rem]">
      <div className="grid sm:grid-cols-[1fr_.7fr] w-[85%] m-auto items-center gap-16 sm:gap-9">
        <div>
          <span className="inline-block bg-[#D995451A] tracking-widest text-[#EF7C00] px-[12px] py-[6px] uppercase text-sm font-semibold rounded-lg mb-4">
            Email efficiency
          </span>
          <h1 className="text-[3rem] sm:text-[3.6rem] font-medium mb-[24px] text-[#0A071B] leading-[1.25]">
            Your partner in customer-experience implementations
          </h1>
          <p className="text-[1.25rem] font-medium text-[#5B5675] mb-6">
            We implement and develop business software across all categories
            ranging from no-code to low-code and highly complex cloud
            architecture services.
          </p>
          <a
            className="inline-block no-underline mr-3 bg-[#EF7C00] px-4 py-2 rounded-md border-2 border-transparent font-medium text-[1.2rem] text-white"
            href="#"
          >
            Contact us
          </a>
          <a
            className="inline-block no-underline px-4 py-2 rounded-md border-2 border-stone-900 font-medium text-[1.2rem]"
            href="#"
          >
            Learn more
          </a>
        </div>
        <div className="sm:h-full">
          <div className="bg-blue-100 w-[100%] sm:h-full rounded-t-full relative overflow-hidden">
            <img
              className="block sm:absolute sm:bottom-[11%] sm:scale-[1.4]"
              src="hero-removebg-preview.png"
              alt="exited customer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro1;
