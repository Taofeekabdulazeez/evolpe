import { useState } from "react";

function isMobileView() {
  return window.matchMedia("(max-width: 35em)").matches;
}

function Slider() {
  const [index, setIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(null);
  const [slideDistance, setSlideDistance] = useState(null);
  const minSlide = 0;
  const maxSlide = 2; // 0 based

  const nextSlide = function () {
    setIndex((index) => (index === maxSlide ? maxSlide : index + 1));
  };

  const prevSlide = function () {
    setIndex((index) => (index === minSlide ? minSlide : index - 1));
  };

  return (
    <>
      <div
        className={`flex sm:gap-6 relative sm:static border-2 h-[12rem]`}
        onTouchStart={(event) => {
          setStartPosition(event.touches[0].pageX);
        }}
        onTouchMove={(event) => {
          setSlideDistance(event.touches[0].pageX);
        }}
        onTouchEnd={() => {
          if (startPosition > 200 && slideDistance < 280) nextSlide();
          if (startPosition < 200 && slideDistance > 200) prevSlide();
        }}
      >
        <div
          className={`p-4 top-0 left-0 border-2 rounded-md absolute sm:static sm:!translate-x-[0] transition-all duration-500`}
          style={{
            transform: `translate(${(0 - index) * 105}%)`,
          }}
        >
          <div className="h-20 bg-slate-200 mb-4"></div>
          <p className="text-sm font-semibold text-stone-500">
            Low-Code platform recommended by specialists. Market analysis
            results for 2023
          </p>
        </div>
        <div
          className={`p-4 border-2 rounded-md absolute sm:static sm:!translate-x-[0] transition-all duration-500`}
          style={{
            transform: `translate(${(1 - index) * 105}%)`,
          }}
        >
          <div className="h-20 bg-pink-200 mb-4"></div>
          <p className="text-sm font-semibold text-stone-500 duration-500">
            Choose a system that collect the best user ratings. Zendesk is the
            leader on the G2 platform
          </p>
        </div>
        <div
          className={`p-4 border-2 rounded-md absolute sm:static sm:!translate-x-[0] transition-all duration-500`}
          style={{
            transform: `translate(${(2 - index) * 105}%)`,
          }}
        >
          <div className="h-20 bg-blue-200 mb-4"></div>
          <p className="text-sm font-semibold text-stone-500">
            How does artificial intelligence help serve customers and support
            employees?
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 bottom-0">
        <button onClick={prevSlide}>👈</button>
        <button onClick={nextSlide}>👉</button>
      </div>
    </>
  );
}

export default Slider;
