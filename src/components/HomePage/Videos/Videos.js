import useVideo from '../../../hooks/use-video';

import img1 from '../../../assets/home-page/videos/rn10-series-video.jpg';
import img2 from '../../../assets/home-page/videos/mi10-video.jpg';
import img3 from '../../../assets/home-page/videos/smartlife.jpg';
import ProductVideo from './ProductVideo';
import EmbedProductVideo from './EmbedProductVideo';

const Videos = () => {
  const {
    showModal: showRedmiModal,
    showModalHandler: showRedmiModalHandler,
    closeOverlayHandler: closeRedmiOverlayHandler,
    closeModalHandler: closeRedmiModalHandler,
  } = useVideo();

  const {
    showModal: showMiModal,
    showModalHandler: showMiModalHandler,
    closeOverlayHandler: closeMiOverlayHandler,
    closeModalHandler: closeMiModalHandler,
  } = useVideo();

  const {
    showModal: showSmartTechModal,
    showModalHandler: showSmartTechModalHandler,
    closeOverlayHandler: closeSmartTechOverlayHandler,
    closeModalHandler: closeSmartTechModalHandler,
  } = useVideo();

  return (
    <section className="homepage-container mb-12">
      <h2 className="mb-6 text-gray-700 text-2xl text-center font-semibold uppercase md:text-3xl">
        Videos
      </h2>

      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4">
        <ProductVideo
          img={img1}
          showIframeModalHandler={showRedmiModalHandler}
          title="Redmi Note 10"
          extraTitle=" Series Challenge Your Boundaries"
        />
        <ProductVideo
          img={img2}
          showIframeModalHandler={showMiModalHandler}
          title="MI 10T Pro"
          extraTitle=" | Official Unboxing"
        />
        <ProductVideo
          img={img3}
          showIframeModalHandler={showSmartTechModalHandler}
          title="Smart Technology"
        />
      </div>

      <EmbedProductVideo
        showIframeModal={showRedmiModal}
        closeOverlayHandler={closeRedmiOverlayHandler}
        closeModalHandler={closeRedmiModalHandler}
        embedLink="https://youtube.com/embed/j4OKYwPYmH8"
        title="Redmi Note 10 Series"
      />
      <EmbedProductVideo
        showIframeModal={showMiModal}
        closeOverlayHandler={closeMiOverlayHandler}
        closeModalHandler={closeMiModalHandler}
        embedLink="https://youtube.com/embed/EJIyfaVvWLo"
        title="MI 10T"
      />
      <EmbedProductVideo
        showIframeModal={showSmartTechModal}
        closeOverlayHandler={closeSmartTechOverlayHandler}
        closeModalHandler={closeSmartTechModalHandler}
        embedLink="https://youtube.com/embed/ADCPxT__ng4"
        title="Smart Technology"
      />
    </section>
  );
};

export default Videos;
