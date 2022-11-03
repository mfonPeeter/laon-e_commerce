import PlayIcon from './PlayIcon';

const ProductVideo = ({ img, showIframeModalHandler, title }) => {
  return (
    <div>
      <div
        className="group relative cursor-pointer border"
        onClick={showIframeModalHandler}
      >
        <img src={img} alt="Redmi Note 10 Series" />
        <div className="flex flex-col items-center space-y-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
          <button className="flex justify-center items-center w-24 h-24 bg-white opacity-30 rounded-full transition-opacity duration-500 group-hover:opacity-80">
            <PlayIcon />
          </button>
          <span className="px-6 text-center text-gray-100">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
