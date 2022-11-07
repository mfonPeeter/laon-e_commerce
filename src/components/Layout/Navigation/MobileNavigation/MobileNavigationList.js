const MobileNavigationList = ({ text, onOpenNavSum }) => {
  return (
    <li
      className="relative z-20 cursor-default transition-colors hover:text-blue-700"
      onMouseEnter={onOpenNavSum}
      onClick={onOpenNavSum}
    >
      {text}
    </li>
  );
};

export default MobileNavigationList;
