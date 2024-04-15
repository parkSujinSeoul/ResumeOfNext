'use client';
import React, { useEffect, useState } from 'react';
import { getSelfIntroduction } from '@/services/selfIntroduction';
export default function SelfIntroduction() {
  const [introduce, setIntroduce] = useState('');
  useEffect(() => {
    getSelfIntroduction();
  }, []);
  const saveIntroduction = () => {};
  return (
    <>
      <textarea></textarea>
      <button
        onClick={() => saveIntroduction()}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        저장
      </button>
    </>
  );
}
