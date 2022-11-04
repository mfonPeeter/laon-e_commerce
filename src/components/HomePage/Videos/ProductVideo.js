import PlayIcon from './PlayIcon';

const ProductVideo = ({ img, showIframeModalHandler, title, extraTitle }) => {
  return (
    <div>
      <div
        className="group relative cursor-pointer"
        onClick={showIframeModalHandler}
      >
        <img src={img} alt="Redmi Note 10 Series" />
        <div className="flex flex-col items-center space-y-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
          <button className="flex justify-center items-center w-16 h-16 bg-white opacity-20 rounded-full transition-opacity duration-500 group-hover:opacity-80 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <PlayIcon />
          </button>
          <span className="px-6 text-center text-gray-100">
            {title}
            <span className="sm:hidden lg:inline">{extraTitle}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
