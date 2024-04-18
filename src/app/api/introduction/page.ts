import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).json({ name: 'api 요청 실패 예상' });
}
