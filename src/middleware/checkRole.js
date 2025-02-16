export function checkRole(allowedRoles) {
    return (context) => {
      const user = context.cookies.get('nf_jwt');
      if (!user) {
        return context.redirect('/login');
      }
      
      const userRoles = JSON.parse(atob(user.split('.')[1])).app_metadata.roles || [];
      
      if (!allowedRoles.some(role => userRoles.includes(role))) {
        return context.redirect('/unauthorized');
      }
      
      return context.next();
    };
  }