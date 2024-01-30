# Discogs Yelp App

Nothing Discog-y about it. Just an app that loads some of my favorite Portland eateries from the Yelp GraphQL API.

This is a interview exercise project. Hope they dig it.

## What's Inside

- UI Build - Vite
- UI Framework - React
- Types - TypeScript
- CSS - Sass, BEM, Themes, Custom Properties (Variables)
- Cache - TanStack Query
- Routing - React Router
- State - React Router loaders
- Repo / Automation - You guessed it... Github / Actions
- Deployment - Cloudflare Worker Site using Wrangler

## What does it do?

The app fetches basic data from Yelp of some hard-coded eateries (using their alias IDs). This loads a list into the UI's homepage. Clicking on an item loads a 'Fav' page which queries Yelp for more data about the eatery (reviews, rating, address, etc). The reviews panel has a refresh button that invalidates the cache for that page and refetches it. The plan here was to see updates in the reviews list but they don't come in frequently enough. 🫤

Oh and it's set up to use your browser-preferred color theme (light, dark). So give your browser theme settings a toggle to check it out.

## Set-up

Things you'll need to run:

- A Yelp API Key with Developer Beta
- A `.env.development.local` env file in `app/src`. This allows Vite dev server to pick up the needed env variables. It should have:

  ```
  VITE_YELP_API_KEY=< API Key from Yelp>
  VITE_YELP_API_ENDPOINT=/graphql
  ```

- a `.dev.vars` env file in the project root. This is to make the API Key avaiable to the Worker when it's running locally. It should have:
  ```
  VITE_YELP_API_KEY=<API Key from your Yelp developer account>
  ```

## How it works

### Cloudflare Worker (local and prod)

The Worker serves static assets and also makes the `/graphql` queries. To run using Wrangler:

```
npm run dev
```

### Vite dev server

Vite server serves assets and proxies `/graphql` queries. To run using Vite:

```
npm run app
```

### React UI

The UI posts queries to the server (no CORS issues or exposed secrets) and then does fun stuff.

## Things I'd like to add

- Add SubPub to Yelp webhooks and send updates to UI via Server Sent Events
- Add Cloudflare binding to D1 to store favorites, and add or remove them
- Any GraphQL mutations... nothing I saw in Yelp API for updating user profile or posting reviews...
- Accessibility
  - Make it AA/AAA compliant (color contrast, keyboard access, ARIA properties, target size ... to start)
- Tests (more of a 'must' than a 'like')
  - Started on the this but couldn't get the configuration done fast enough
  - Want to use Mock Service Worker and Testing Library, but combined with GraphQL queries and React Router loaders, it was just too much to tackle in a short amount of time 😞

## Known Issues

- Rebuild of Vite on file changes doesn't trigger Wrangler dev restart (workaround: saving toml file triggers the Wrangler build)
- Not sure I've I'm catching all my errors and rejected promises... saw at least one UI blow-up when I hit the Yelp daily rate limit
