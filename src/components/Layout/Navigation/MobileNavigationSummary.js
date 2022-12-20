import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import RightArrowIcon from './NavigationIcons/RightArrowIcon';

const MobileNavigationSummary = ({
  data,
  showNavSum,
  onCloseNavSum,
  closeNavModalHandler,
}) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showNavSum}
      timeout={350}
      classNames={{
        enterActive: 'navigation-modal-open',
        exitActive: 'navigation-modal-closed',
      }}
    >
      <div
        className="navigation-modal space-x-2 py-2 px-2"
        onMouseLeave={onCloseNavSum}
      >
        {data.map(obj => (
          <div key={obj.id}>
            <img src={obj.img} alt={obj.title} />
            <p className="font-lora text-base text-center">{obj.title}</p>
          </div>
        ))}
        <Link
          to="/products"
          className="flex items-center justify-center w-14 h-14 border-2 border-gray-500 rounded-full group transition-colors hover:border-blue-500"
          onClick={() => closeNavModalHandler('overflow-y-hidden')}
        >
          <span className="transition group-hover:text-blue-500">
            <RightArrowIcon />
          </span>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default MobileNavigationSummary;
