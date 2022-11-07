import { useState } from 'react';

const useNavigation = () => {
  const [showXiaomiNavSum, setShowXiaomiNavSum] = useState(false);
  const [showRedmiNavSum, setShowRedmiNavSum] = useState(false);
  const [showSmartDeviceNavSum, setShowSmartDeviceNavSum] = useState(false);

  const openXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(prevVal => !prevVal);
    setShowRedmiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(false);
  };

  const openRedmiNavSumHandler = () => {
    setShowRedmiNavSum(prevVal => !prevVal);
    setShowXiaomiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeRedmiNavSumHandler = () => {
    setShowRedmiNavSum(false);
  };

  const openSmartDeviceNavSumHandler = () => {
    setShowSmartDeviceNavSum(prevVal => !prevVal);
    setShowXiaomiNavSum(false);
    setShowRedmiNavSum(false);
  };

  const closeSmartDeviceNavSumHandler = () => {
    setShowSmartDeviceNavSum(false);
  };

  return {
    showXiaomiNavSum,
    showRedmiNavSum,
    showSmartDeviceNavSum,
    openXiaomiNavSumHandler,
    closeXiaomiNavSumHandler,
    openRedmiNavSumHandler,
    closeRedmiNavSumHandler,
    openSmartDeviceNavSumHandler,
    closeSmartDeviceNavSumHandler,
  };
};

export default useNavigation;
