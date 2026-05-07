/*
 * @Date: 2026-05-02 13:21:52
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-05 19:14:53
 * @FilePath: /东江泉/src/components/ClientRedirect.tsx
 * @description:
 */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ClientRedirectProps {
  to: string;
}

const ClientRedirect = ({ to }: ClientRedirectProps) => {
  const router = useRouter();
  const target = `${router.basePath}${to}`;

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <Head>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
    </Head>
  );
};

export default ClientRedirect;
