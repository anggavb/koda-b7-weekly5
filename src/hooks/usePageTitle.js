import { useEffect } from "react";

import { getEnv } from "@utils";

/**
 * Set the page title
 * @param {string} title - The title to be set for the page
 * @return {void}
 */
const usePageTitle = (title) => {
  const { appTitle } = getEnv;
  const pageTitle = title ? `${title} | ${appTitle}` : appTitle
  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}

export default usePageTitle;