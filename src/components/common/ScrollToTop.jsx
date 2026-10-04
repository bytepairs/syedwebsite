import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures page scrolls to top on route navigation.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
