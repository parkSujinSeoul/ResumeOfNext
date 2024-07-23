'use client';
import React, { useEffect, useState } from 'react';
import { resume } from '@/types/fetch/resume';
export default function SelfIntroduction() {
  const [introduce, setIntroduce] = useState('');
  useEffect(() => {
    fetchIntroduce();
  }, []);
  const fetchIntroduce = async () => {
    const res: Response = await fetch('/api/introduction');
    const data = await res.json();

    const resume = data.response?.data as resume;
    setIntroduce(resume?.introduceMyself);

    console.log(introduce);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
  };
  const saveIntroduction = async () => {
    await fetch('/api/introduction', { method: 'POST' });
  };
  return (
    <>
      <textarea value={introduce} onChange={(e) => handleChange(e)}></textarea>
      <button
        onClick={() => saveIntroduction()}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        저장
      </button>
    </>
  );
}
