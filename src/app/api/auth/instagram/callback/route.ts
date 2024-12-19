import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawCode = searchParams.get('code');

  if (!rawCode) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  // the code can have a trailing fragment like #_
  const code = rawCode.split('#')[0];

  console.log('Instagram authorization code:', code);

  return NextResponse.json({ message: 'Callback received' });
}
