import { Link } from 'react-router-dom';
import RightArrowIcon from './NavigationIcons/RightArrowIcon';

const MobileNavigationSummary = ({
  data,
  showNavSum,
  onCloseNavSum,
  closeNavModalHandler,
}) => {
  return (
    <div
      className={`flex items-center space-x-2 py-2 px-2 h-0 shadow-md opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.5,1,0.89,1)] ${
        showNavSum ? 'opacity-100 h-[30vh]' : ''
      }`}
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
  );
};

export default MobileNavigationSummary;
