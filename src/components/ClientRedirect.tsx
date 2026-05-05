'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ClientRedirectProps {
  to: string;
}

const ClientRedirect = ({ to }: ClientRedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return null;
};

export default ClientRedirect;
