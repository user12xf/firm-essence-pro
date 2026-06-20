# Deploy to Cloudflare Workers

The project builds to a Cloudflare Worker using Nitro's `cloudflare-module` preset. All server routes (like `/sitemap.xml`) and the SPA shell run on the edge.

## Prerequisites

- A [Cloudflare](https://dash.cloudflare.com) account
- `bun` installed locally (or `npm` / `pnpm`)

## Authenticate Wrangler

Log in to Cloudflare via the CLI (one-time setup):

```bash
bunx wrangler login
```

## Build

```bash
bun run build
```

This produces:
- `dist/server/` — Worker script + generated `wrangler.json`
- `dist/client/` — Static SPA assets
- `.wrangler/deploy/config.json` — Deployment metadata

## Deploy

### Production

```bash
bun run deploy
```

Equivalent to:
```bash
wrangler deploy dist/server/wrangler.json
```

### Preview on Cloudflare's network (before going live)

```bash
bun run deploy:preview
```

This runs the Worker on `localhost` but with the real Cloudflare runtime.

## Customizing the Worker

- **Worker name**: Edit `name` in `dist/server/wrangler.json` before deploying, or create a `wrangler.toml` in the project root.
- **Custom domain / routes**: Run `bunx wrangler route` after first deploy, or add `routes` to a root `wrangler.toml`.
- **Environment variables**: Use `bunx wrangler secret put KEY_NAME` or define them in the Cloudflare dashboard under Workers & Pages → your worker → Settings → Variables.

## Important Notes

- `ssr: false` is set in `src/routes/__root.tsx`, so the app hydrates entirely on the client after the initial shell. Server routes (`/sitemap.xml`, future API routes) still execute on the Worker.
- The preset enables `nodejs_compat`, so most Node.js built-ins work in the Worker runtime.
- Do NOT commit `.wrangler/` or any secret files to version control.
