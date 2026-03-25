Minddd is a lightweight collaborative canvas that combines Next.js App Router pages with tldraw + Yjs sync to keep multiple users editing the same document in real time.

## Highlights
- powered by the App Router (Next 16) and client-only tldraw canvas
- uses `yjs` + `y-websocket` to mirror the editor store via the `minddd.vercel.app` websocket server
- room URLs look like `/room/<id>` so you can share them with teammates and keep everyone aligned

## Quick start
1. Install dependencies (Bun is primary, but the npm/yarn commands work too).
   ```bash
   bun install
   ```
2. Run the development server and open `http://localhost:3000`.
   ```bash
   bun dev
   ```
3. Click *Create a ROOOOMMM!* to generate a new room ID, then open the same URL from other windows or devices to collaborate.

## Notes
- The canvas state is synchronized over the websocket host at `wss://minddd.vercel.app`; closing a tab destroys the connection and releases memory.
- The landing page simply generates IDs with `nanoid(10)` and pushes `/room/<id>` via the App Router client navigation.
- Deploying elsewhere just needs the same dependencies plus an accessible websocket backend if you want to continue syncing rooms.
