const NavigationList = ({ text, onOpenNavSum }) => {
  return (
    <li
      className="cursor-default transition-colors hover:text-blue-700"
      onMouseEnter={onOpenNavSum}
      onClick={onOpenNavSum}
    >
      {text}
    </li>
  );
};

export default NavigationList;
