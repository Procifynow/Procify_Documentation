# Procify docs chatbot proxy

The docs site is static, so the Anthropic API key cannot live in the browser. This small
Cloudflare Worker holds the key, receives the question plus the matching doc passages, and returns the answer.

## Deploy (about 5 minutes)

1. `npm i -g wrangler` then `wrangler login`
2. From this folder: `wrangler secret put ANTHROPIC_API_KEY` (paste the key)
3. `wrangler deploy` and copy the URL it prints (https://procify-docs-chat.<you>.workers.dev)
4. Put that URL in `static/chat-config.json` as `"endpoint"`
5. `npm run clear && npm run build` (or `npm start` to test locally), then `npm run deploy`

Without an endpoint the widget still works in search-only mode (it lists the best matching pages).

## Keep cost and abuse under control
- Create a dedicated API key in the Anthropic Console and set a monthly spend limit on it.
- Keep `ALLOWED_ORIGINS` to your site (and localhost for testing).
- Enable the optional `RATE_LIMITER` block in `wrangler.toml`.
- `MODEL` defaults to `claude-haiku-5-5` (fast and inexpensive); switch to `claude-sonnet-5-5` for more careful answers.
