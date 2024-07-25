import { setFetchOptions } from './fetchOptions';
import { ReceiveFetchType } from '@/types/fetch/response';
/**
 * 자기소개 내용을 조회합니다.
 * @returns {ReceiveFetchType | boolean} commentsData or false
 */
export const getSelfIntroduction = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/resume/introduce?id=${1}`;
  const options = setFetchOptions('GET');

  // 요청 결과 반환
  const res = await fetch(url, options);
  const data: ReceiveFetchType<string> = await res.json();
  return res.ok ? data : false;
};

export const saveSelfIntroduction = async (introduce: string) => {
  console.log(introduce);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/resume/save/introduce`;
  // 요청 결과 반환
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(introduce),
  });
  const data: ReceiveFetchType<string> = await res.json();
  return res.ok ? data : false;
};
