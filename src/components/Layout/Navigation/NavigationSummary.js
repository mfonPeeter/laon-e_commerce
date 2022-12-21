import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import RightArrowIcon from './NavigationIcons/RightArrowIcon';

const NavigationSummary = ({ data, showNavSum, onCloseNavSum }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showNavSum}
      timeout={600}
      classNames={{
        enterActive: 'navigation-modal-open',
        exitActive: 'navigation-modal-closed',
      }}
    >
      <div
        className="navigation-modal hidden absolute z-40 space-x-8 -mt-3 px-8 py-6 w-full bg-zinc-50 lg:flex"
        onMouseLeave={onCloseNavSum}
      >
        {data.map(obj => (
          <div key={obj.id}>
            <Link reloadDocument to={`/products/${obj.id}`}>
              <img src={obj.img} alt={obj.title} />
              <p className="font-lora text-base text-center">{obj.title}</p>
            </Link>
          </div>
        ))}
        <Link
          to="/products"
          className="flex items-center justify-center w-14 h-14 border-2 border-gray-500 rounded-full group transition-colors hover:border-blue-500"
          onClick={onCloseNavSum}
        >
          <span className="transition group-hover:text-blue-500">
            <RightArrowIcon />
          </span>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default NavigationSummary;
