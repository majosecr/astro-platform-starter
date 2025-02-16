export default async (request, context) => {
    const user = context.cookies.get('nf_jwt');
    
    if (!user && !request.url.includes('/login')) {
      return Response.redirect(new URL('/', request.url));
    }
    
    return context.next();
  };