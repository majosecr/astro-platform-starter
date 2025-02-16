import { verify } from 'jsonwebtoken';

export async function post({ request }) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  
  if (!token) {
    return new Response(JSON.stringify({ error: 'No token provided' }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const secret = import.meta.env.JWT_SECRET || 'your-secret-key'; // Replace with your actual secret key
    const decoded = verify(token, secret);

    // Check if the token has expired
    if (Date.now() >= decoded.exp * 1000) {
      throw new Error('Token has expired');
    }

    // Basic role-based access control
    if (decoded.role !== 'admin' && decoded.role !== 'user') {
      throw new Error('Insufficient permissions');
    }

    // You can add more checks here based on your requirements

    return new Response(JSON.stringify({ 
      message: 'Protected data', 
      user: {
        id: decoded.sub,
        username: decoded.username,
        role: decoded.role
      }
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Token verification failed:', error.message);

    return new Response(JSON.stringify({ error: error.message || 'Invalid token' }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Add GET method for testing purposes
export async function get({ request }) {
  return new Response(JSON.stringify({ message: 'This is a protected route. Use POST with a valid token to access.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}