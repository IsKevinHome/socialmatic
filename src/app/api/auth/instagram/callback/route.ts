import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { url } = req;

  // Log the Instagram callback URL
  console.log('Instagram OAuth callback URL:', url);

  // Respond with a success message
  return NextResponse.json({ message: 'Callback received' });
}
