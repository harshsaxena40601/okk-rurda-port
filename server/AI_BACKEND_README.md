# AI Chat Backend (Local)

This file documents how to run the local AI Chat backend that provides a simple `/api/chat` endpoint.

Notes:
- The server will attempt to use Google GenAI if `GOOGLE_API_KEY` is provided and the relevant client package is available.
- If the cloud client is not available or fails, the server falls back to a local rule-based responder so you can run and test locally without an API key.

## Run locally

1. Install dependencies (if not already installed):

```bash
npm install
# and for dev auto-reload
npm install -D nodemon
```

2. Start the AI server in development (auto-restarts on changes):

```bash
npm run dev:ai
```

3. Start in production mode:

```bash
npm run start:ai
```

4. Default server URL: `http://localhost:3001`

## Environment
Create a `.env` file in project root with (optional):

```
GOOGLE_API_KEY=your_google_api_key_here
AI_PORT=3001
NODE_ENV=development
```

If `GOOGLE_API_KEY` is not provided, the server will still run using a local fallback responder.

## Endpoints
- `POST /api/chat` - { message, sessionId, conversationHistory }
- `POST /api/feedback` - { messageId, type, sessionId }
- `GET /api/sessions/:sessionId`
- `GET /api/analytics`
- `GET /health`

## Security
This is a local/dev implementation. For production:
- Add authentication for analytics and admin endpoints
- Use a persistent DB instead of in-memory Maps
- Add rate limiting and input validation

