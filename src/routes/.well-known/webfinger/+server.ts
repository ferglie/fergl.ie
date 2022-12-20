const finger = {
  subject: "acct:fergal@mastodon.fergl.ie",
  aliases: [
    "https://mastodon.fergl.ie/@fergal",
    "https://mastodon.fergl.ie/users/fergal"
  ],
  links: [
    {
      rel: "http://webfinger.net/rel/profile-page",
      type: "text/html",
      href: "https://mastodon.fergl.ie/@fergal"
    },
    {
      rel: "self",
      type: "application/activity+json",
      href: "https://mastodon.fergl.ie/users/fergal"
    },
    {
      rel: "http://ostatus.org/schema/1.0/subscribe",
      template: "https://mastodon.fergl.ie/authorize_interaction?uri={uri}"
    }
  ]
}
export function GET() {
  const headers = {
    "Content-Type": "application/jrd+json"
  }
  return new Response(JSON.stringify(finger), {headers})
}
