import { Suspense, useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const SuspenseWithProgress = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [loading]);

  return (
    <Suspense fallback={<LoadingFallback setLoading={setLoading} />}>
      {children}
    </Suspense>
  );
};

const LoadingFallback = ({ setLoading }: any) => {
  useEffect(() => {
    setLoading(true);
    return () => setLoading(false);
  }, [setLoading]);

  return null;
};

export default SuspenseWithProgress;
