import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Comfi Store`;
  });
  return null;
};

export default useTitle;
