import { useEffect } from 'react';

/**
 * Add class to #root element
 * @param {string[]} className - The class name(s) to be added to the #root element
 * @returns {void}
 */
const useRootAddClass = (className) => {
  useEffect(() => {
    const root = document.querySelector("#root");
    root.classList.add(...className);
    return () => root.classList.remove(...className);
  }, [className]);
}

export default useRootAddClass;