function Slide({ index, slideIndex, data }) {
  const { image, description } = data;
  return (
    <div
      key={index}
      className={`p-4 top-0 left-0 border-2 rounded-md absolute sm:static sm:!translate-x-[0] transition-all duration-500`}
      style={{
        transform: `translate(${(index - slideIndex) * 105}%)`,
      }}
    >
      <div className="h-24 bg-slate-200 mb-4">
        <img
          className="bg-cover h-[100%] w-[100%]"
          src={image}
          alt="Artificial Intelligence"
        />
      </div>
      <p className="text-sm font-semibold text-stone-500">{description}</p>
    </div>
  );
}

export default Slide;
