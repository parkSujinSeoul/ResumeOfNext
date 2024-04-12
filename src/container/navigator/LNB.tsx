'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <span>
      <button type="button" onClick={() => router.push('/')}>
        Main
      </button>
      <button type="button" onClick={() => router.push('/resume/basicInfo')}>
        Main2
      </button>
    </span>
  );
}
