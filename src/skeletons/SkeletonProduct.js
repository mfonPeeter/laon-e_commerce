import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonProduct = () => {
  return (
    <div className="relative px-2 bg-white overflow-hidden">
      <div>
        <div className="flex justify-center items-center">
          <SkeletonElement type="image" />
        </div>
        <SkeletonElement type="tag" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="price" />
        <SkeletonElement type="btn" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProduct;
