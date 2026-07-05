const CANONICAL_ORIGIN = 'https://aispherevision.com';

export default {
  async fetch(request, env) {
    const redirectUrl = getCanonicalRedirect(request);
    if (redirectUrl) {
      return Response.redirect(redirectUrl, 301);
    }

    return serveAsset(request, env);
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

async function serveAsset(request, env) {
  const url = new URL(request.url);

  if (url.pathname === '/index.html') {
    return Response.redirect(new URL(`/${url.search}`, CANONICAL_ORIGIN).href, 301);
  }

  if (url.pathname === '/' || url.pathname === '') {
    return env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
  }

  return env.ASSETS.fetch(request);
}
