import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MenuButton from "./MenuButton";

function Header({ isOpen, onClick }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries.at(0);
          setIsIntersecting(entry.isIntersecting);
        },
        {
          root: null,
          threshold: [0],
          rootMargin: `-${ref.current.getBoundingClientRect().height}px`,
        }
      );
      observer.observe(document.querySelectorAll("section")[0]);

      return () => observer.disconnect();
    },
    [isIntersecting, ref]
  );

  // observer.observe(Header);

  return (
    <header
      ref={ref}
      className={`flex items-center justify-between py-3 sm:py-6 px-6 sm:px-16 w-full bg-white z-10 transition-all ${
        isIntersecting ? "" : "fixed shadow-[0_3px_6px_0_rgba(0,0,0,0.09)]"
      }`}
    >
      <Logo />
      <Nav isOpen={isOpen} />
      <MenuButton isOpen={isOpen} onClick={onClick} />
    </header>
  );
}

export default Header;
