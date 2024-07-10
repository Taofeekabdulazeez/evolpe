import React from "react";

export const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    observer.observe(document.querySelectorAll("section")[0]);

    return () => {
      observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
