export const handle = async ({ event, resolve }) => {
  console.log('hook', event)
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
