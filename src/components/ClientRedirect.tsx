import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ClientRedirectProps {
  to: string;
}

const ClientRedirect = ({ to }: ClientRedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
      </Head>
      <p>Redirecting...</p>
    </>
  );
};

export default ClientRedirect;
