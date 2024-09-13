"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import '@/styles/pages/success.css';

export default function Success(): JSX.Element {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push('/contact');
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main>
      <span><h1>Form submitted!</h1></span>
      <section>
        Thank you for your message! The form has been submitted successfully. I will reply back to you soon!
        <small>Redirecting in <b>{countdown}</b> seconds...</small>
        <button onClick={() => router.push('/contact')}>Go back</button>
      </section>
    </main>
  );
}