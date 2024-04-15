import { setFetchOptions } from './fetchOptions';
import { ReceiveFetchType } from '@/types/fetch';
/**
 * 자기소개 내용을 조회합니다.
 * @param {string} postId
 * @returns {ReceiveFetchType | boolean} commentsData or false
 */
export const getSelfIntroduction = async (postId: string) => {
  const url = `/self-introduction`;
  const options = setFetchOptions('GET');

  // 요청 결과 반환
  const res = await fetch(url, options);
  const data: ReceiveFetchType<string> = await res.json(); // 댓글 리스트
  return res.ok ? data : false;
};
