import { useEffect } from "react";

/**
 * Set the page title
 * @param {string} title 
 * @return {void}
 */
const usePageTitle = (title) => {
  const defaultTitle = import.meta.env.VITE_APP_TITLE || "React App"
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}

export default usePageTitle;