import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);
  return <div>Redirecting...</div>;
}

export default Index;
