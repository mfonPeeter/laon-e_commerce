import { Fragment } from 'react';
import CloseIcon from './CloseIcon';

const EmbedProductVideo = ({
  showIframeModal,
  closeOverlayHandler,
  closeModalHandler,
  embedLink,
  title,
}) => {
  return (
    <Fragment>
      {showIframeModal && (
        <div
          className="z-10 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
          onClick={closeOverlayHandler}
        >
          <div className="relative my-28 mb-4 sm:my-8">
            <h4 className="text-lg text-center text-white font-lora font-semibold uppercase">
              {title}
            </h4>
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center w-7 h-7 text-white rounded-full transition-colors hover:bg-red-600 md:right-0 md:left-[89%] lg:left-[85%] xl:left-[81%]"
              onClick={() => closeModalHandler('overflow-auto')}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <iframe
              className="px-4 w-full aspect-video md:px-0 md:w-10/12 lg:w-3/4 xl:w-2/3"
              src={embedLink}
              title={title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EmbedProductVideo;
