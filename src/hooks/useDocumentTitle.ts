import { useLayoutEffect } from 'react';

const useDocumentTitle = (title?: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'MOVIES | Movie Browser';
    }
  }, [title]);
};

export default useDocumentTitle;
