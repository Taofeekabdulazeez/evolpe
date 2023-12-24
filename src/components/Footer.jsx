function Footer() {
  return (
    <footer className="bg-[#1A202C] text-white py-16">
      <div className="w-[80%] mx-auto">
        <img
          src="footer-logo.svg"
          alt="logo"
          className="block mx-auto h-[5rem] mb-6"
        />
        <h1 className="text-center font-bold text-[2rem] mb-6">
          We implement and develop business software. No declaration. All
          online.
        </h1>
        <div className="flex justify-center items-center text-center gap-4 mb-32">
          <a
            className="rounded text-white bg-orange-500 px-[.75rem] py-[.5rem] font-semibold"
            href="\"
          >
            Get started
          </a>
          <a
            className="rounded text-stone-800 bg-white px-[.75rem] py-[.5rem] font-semibold"
            href="\"
          >
            Learn more
          </a>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row gap-8">
          <p>© 2023 evolpe Inc. Copyright and rights reserved</p>
          <p>Terms and Condtions - Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
