const RouteConfig = {
  root: '/',

  register: '/register',
  verifyEmail: '/register/verify-email',
  verifyMobile: '/register/verify-mobile',
  login: '/login',

  dashboard: '/dashboard',
};

/**
 * Helper method to generate links by route name.
 */
RouteConfig.url = (routeName, params = {}) => {
  if (routeName in RouteConfig && typeof RouteConfig[routeName] === 'string') {
    let url = RouteConfig[routeName];
    Object.entries(params).forEach((param, value) => {
      url = url.replace(new RegExp(`:${param}\\??`), value);
    });
    return url;
  }
  throw new Error(`No route found for '${routeName}'`);
};

export { RouteConfig };
