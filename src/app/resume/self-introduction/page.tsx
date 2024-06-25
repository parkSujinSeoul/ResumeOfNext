'use client';
import React, { useEffect, useState } from 'react';
import { resume } from '@/types/fetch/resume';
export default function SelfIntroduction() {
  const [introduce, setIntroduce] = useState('');
  const fetchFAQs = async () => {
    const res: Response = await fetch('/api/introduction');
    const data = await res.json();

    const resume = data.response?.data as resume;
    setIntroduce(resume?.introduceMyself);

    console.log(introduce);
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
