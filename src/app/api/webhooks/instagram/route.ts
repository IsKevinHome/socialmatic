import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Log all verification attempts
  console.log('Webhook Verification Request:', {
    mode: searchParams.get('hub.mode'),
    token: searchParams.get('hub.verify_token'),
    challenge: searchParams.get('hub.challenge'),
  });

  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const VERIFY_TOKEN = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN;

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified successfully');
    return new NextResponse(challenge, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  console.log('Webhook verification failed');
  return NextResponse.json(
    { error: 'Invalid verification request' },
    { status: 403 }
  );
}

export async function POST(req: NextRequest) {
  try {
    // Log the raw headers
    console.log('Webhook Headers:', Object.fromEntries(req.headers));

    // Log the raw body
    const body = await req.json();
    console.log('Webhook Payload:', JSON.stringify(body, null, 2));

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
