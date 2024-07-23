import { NextResponse } from 'next/server';
import {
  getSelfIntroduction,
  saveSelfIntroduction,
} from '@/services/selfIntroduction';

export async function GET() {
  const res = await getSelfIntroduction();
  return NextResponse.json({ response: res });
}

export async function POST(introduce: String) {
  const res = await saveSelfIntroduction(introduce);
  return NextResponse.json({ response: res });
}
