function Intro1() {
  return (
    <section className="py-[2.4rem] sm:py-[2rem] sm:pb-[6rem]">
      <div className="grid sm:grid-cols-[1fr_.7fr] grid-cols-1 gap-[6rem] w-[85%] mx-auto items-center sm:gap-9">
        <div>
          <span className="inline-block bg-[#D995451A] tracking-widest text-[#EF7C00] px-[12px] py-[6px] uppercase text-[.8rem] font-bold rounded-lg mb-4">
            Welcome to evolpe
          </span>
          <h1 className="text-[2.5rem] sm:text-[3.6rem] font-medium mb-[24px] text-[#0A071B] leading-[1.25]">
            Your partner in customer-experience implementations
          </h1>
          <p className="text-[1.2rem] sm:text-[1.25rem] font-medium text-[#5B5675] mb-6">
            We implement and develop business software across all categories
            ranging from no-code to low-code and highly complex cloud
            architecture services.
          </p>
          <a
            className="inline-block no-underline mr-3 bg-[#EF7C00] px-3 py-1.5 rounded-md border-2 border-[#EF7C00] font-medium text-[1rem] text-white"
            href="#"
          >
            Contact us
          </a>
          <a
            className="inline-block no-underline px-3 py-1.5 rounded-md border-2 border-stone-900 font-medium text-[1rem]"
            href="#"
          >
            Learn more
          </a>
        </div>
        <div className="relative sm:h-full">
          <div className="bg-blue-100 w-[100%] sm:h-full rounded-t-full relative overflow-hidden">
            <img
              className="block sm:absolute sm:bottom-[11%] sm:scale-[1.4]"
              src="hero-removebg-preview.png"
              alt="exited customer"
            />
          </div>
          <div className="w-fit absolute top-[-20%] right-0 sm:top-0 sm:left-0 sm:translate-x-[-100%] px-4 py-2 bg-[#FCF5ED] rounded-md shadow-[3px_3px_0px_0px_#000] border-[1px] border-black flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-[28px] h-[28px] bg-[#00C2501A] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="#00C250"
                className="w-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
            <span className="font-semibold text-xs">
              Efficiency Increase +92%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro1;
