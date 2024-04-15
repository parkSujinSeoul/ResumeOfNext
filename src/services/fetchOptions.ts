/**
 *  fetch 요청을 보낼 때 method와 options를 설정합니다.
 * @param method
 * @param {object|null} body
 * @returns
 */
export const setFetchOptions = (method: string, body: object | null = null) => {
  if (method === 'GET' || method === 'DELETE') {
    return { method };
  }

  if (method === 'POST' || method === 'PATCH') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  throw Error('method not found');
};
