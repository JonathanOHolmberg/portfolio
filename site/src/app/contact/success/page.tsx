"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import '@/styles/pages/success.css';

export default function Success(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/contact');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

    return (
        <main>
            <span><h1>Form submitted!<span>.</span></h1></span>
           <section>
           Thank you! The form has been submitted successfully. We will reply to you soon!
           <button onClick={() => router.push('/contact')}>Go back</button>
           </section>
        </main>
    );
}