function Overlay({ isOpen }) {
  if (isOpen)
    return (
      <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-[1px]"></div>
    );
}

export default Overlay;
