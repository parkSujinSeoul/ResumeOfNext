import { NextResponse } from 'next/server';
import {
  getSelfIntroduction,
  saveSelfIntroduction,
} from '@/services/selfIntroduction';

export async function GET() {
  const res = await getSelfIntroduction();
  return NextResponse.json({ response: res });
}

export async function POST(request: Request) {
  const received = await request.json();
  const res = await saveSelfIntroduction(received.introduce);
  return NextResponse.json({ response: res });
}
