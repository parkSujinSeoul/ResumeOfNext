'use client';
import React, { useEffect, useState } from 'react';
import { getSelfIntroduction } from '@/services/selfIntroduction';
export default function SelfIntroduction() {
  const [introduce, setIntroduce] = useState('');
  const fetchFAQs = async () => {
    const res = await fetch('/api/introduction', {method: 'GET'});

    console.log(res, 'TTTTTTTT');

  };

  useEffect(() => {
    fetchFAQs();
  }, []);
  const saveIntroduction = () => {};
  return (
    <>
      <textarea></textarea>
      {introduce}
      <button
        onClick={() => saveIntroduction()}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        저장
      </button>
    </>
  );
}
