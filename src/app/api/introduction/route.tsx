import { NextResponse } from 'next/server';
import { getSelfIntroduction } from '@/services/selfIntroduction';

export async function GET(request: Request) {
  const res = await getSelfIntroduction();
  return NextResponse.json({ response: res });
}
