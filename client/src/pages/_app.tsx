// import '../index.css'; // your css
// import LoadingBar from '../components/LoadingBar';
// import { AppProps } from 'next/dist/shared/lib/router/router';

// function MyApp({ Component, pageProps }: AppProps) {
//     return (
//       <>
//         <LoadingBar />
//         <Component {...pageProps} />
//       </>
//     );
//   }
  
//   export default MyApp;

// pages/_app.tsx
// pages/_app.tsx
import '../styles/index.css'; // or globals.css – whatever your file is called
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const handleStart = () => {
      document.body.classList.add('loading');
    };

    const handleComplete = () => {
      // Small delay so the bar finishes its animation
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, 500);
    };

    // These events work perfectly in pages/ router
    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleComplete);
    window.addEventListener('routeChangeError', handleComplete);

    return () => {
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleComplete);
      window.removeEventListener('routeChangeError', handleComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}