import RightArrowIcon from './NavigationIcons/RightArrowIcon';

const NavigationSummary = ({ data, showNavSum, onCloseNavSum }) => {
  return (
    <div
      className={`hidden container px-20 w-full h-0 mx-auto max-w-screen-xl items-center space-x-14 shadow-md opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.5,1,0.89,1)] lg:flex ${
        showNavSum ? 'opacity-100 h-[30vh]' : ''
      }`}
      onMouseLeave={onCloseNavSum}
    >
      {data.map(obj => (
        <div key={obj.id}>
          <img src={obj.img} alt={obj.title} />
          <p className="text-center">{obj.title}</p>
        </div>
      ))}
      <a
        href="#"
        className="flex items-center justify-center w-14 h-14 border-2 border-gray-500 rounded-full group transition-colors hover:border-blue-500"
      >
        <span className="transition group-hover:text-blue-500">
          <RightArrowIcon />
        </span>
      </a>
    </div>
  );
};

export default NavigationSummary;
