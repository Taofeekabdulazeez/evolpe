function Companies() {
  return (
    <section className="bg-[#F5F9FA] py-9">
      <div className="w-[80%] mx-auto">
        <p className="text-center text-md text-black font-semibold mb-6">
          We have already helped these companies. Click to see how!
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="px-3 py-6 bg-white rounded-md shadow-[4px_4px_0px_0px_#000]">
            <img
              src="business-insider.png"
              alt="featured in logo"
              className="block w-[60%] mx-auto brightness-0"
            />
          </div>
          <div className="px-3 py-6 bg-white rounded-md shadow-[4px_4px_0px_0px_#000]">
            <img
              src="featured-in-3.png"
              alt="featured in logo"
              className="block w-[60%] mx-auto brightness-0"
            />
          </div>
          <div className="px-3 py-6 bg-white rounded-md shadow-[4px_4px_0px_0px_#000]">
            <img
              src="forbes.png"
              alt="featured in logo"
              className="block w-[60%] mx-auto brightness-0"
            />
          </div>
          <div className="px-3 py-6 bg-white rounded-md shadow-[4px_4px_0px_0px_#000]">
            <img
              src="usa-today.png"
              alt="featured in logo"
              className="block w-[60%] mx-auto brightness-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
