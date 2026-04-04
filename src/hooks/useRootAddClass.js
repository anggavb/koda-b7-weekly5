import { useEffect } from 'react';

/**
 * Add class to #root element
 * @param {string[]} className 
 * @returns {void}
 */
const useRootAddClass = (className) => {
  useEffect(() => {
    const root = document.querySelector("#root");
    root.classList.add(...className);
    return () => root.classList.remove(className);
  }, [className]);
}

export default useRootAddClass;