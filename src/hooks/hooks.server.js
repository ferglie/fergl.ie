export const handle = async ({ event, resolve }) => {
  console.log('hook', event)
  
  // Handle Chrome DevTools configuration request
  if (event.url.pathname.startsWith('/.well-known/appspecific/')) {
    return new Response(null, { status: 204 });
  }
  
  if (event.url.pathname.startsWith('/.well-known/webfinger')) {
    const headers = new Headers();
    headers.set('content-type', 'application/json');
    return new Response(
      JSON.stringify({
        argle: "bargle"
      }), { headers });
  }

  return resolve(event);
};
