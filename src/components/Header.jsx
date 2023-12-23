import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
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
        }
      );
      observer.observe(ref.current);
    },
    [isIntersecting]
  );

  // observer.observe(Header);

  return (
    <header
      ref={ref}
      className={`flex items-center justify-between py-6 px-6 sm:px-16 w-full`}
    >
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
