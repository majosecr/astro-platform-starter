import { decode } from 'jsonwebtoken';

export async function post({ request }) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  
  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });
  }

  try {
    const decoded = decode(token);
    // Verify the token, check expiration, etc.
    return new Response(JSON.stringify({ message: 'Protected data', user: decoded }));
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
  }
}