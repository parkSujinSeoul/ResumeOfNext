import { setFetchOptions } from './fetchOptions';
import { ReceiveFetchType } from '@/types/fetch';
/**
 * 자기소개 내용을 조회합니다.
 * @returns {ReceiveFetchType | boolean} commentsData or false
 */
export const getSelfIntroduction = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/self-introduction`;
  const options = setFetchOptions('GET');

  // 요청 결과 반환
  const res = await fetch(url, options);
  const data: ReceiveFetchType<string> = await res.json();
  return res.ok ? data : false;
};
