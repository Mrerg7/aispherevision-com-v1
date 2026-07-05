const CANONICAL_ORIGIN = 'https://aispherevision.com';

export default {
  async fetch(request, env) {
    const redirectUrl = getCanonicalRedirect(request);
    if (redirectUrl) {
      return Response.redirect(redirectUrl, 301);
    }

    return env.ASSETS.fetch(request);
  },
};

function getCanonicalRedirect(request) {
  const url = new URL(request.url);
  const isWww = url.hostname === 'www.aispherevision.com';
  const isHttp = url.protocol === 'http:';
  const isRootWithoutSlash =
    url.hostname === 'aispherevision.com' &&
    url.pathname === '/' &&
    !url.search &&
    !request.url.endsWith('/');

  if (!isWww && !isHttp && !isRootWithoutSlash) {
    return null;
  }

  const path = url.pathname === '/' ? '/' : url.pathname;
  return new URL(`${path}${url.search}`, CANONICAL_ORIGIN).href;
}
