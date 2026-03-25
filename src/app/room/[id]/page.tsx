"use client";

import { useEffect, useRef } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { Tldraw, createTLStore, getSnapshot, loadSnapshot } from "tldraw";
import { useParams } from "next/navigation";
import "tldraw/tldraw.css";

export default function RoomPage() {
  const params = useParams();
  const rawRoomId = params.id;
  const roomId = Array.isArray(rawRoomId) ? rawRoomId[0] : rawRoomId;

  const storeRef = useRef(createTLStore());

  useEffect(() => {
    if (!roomId) {
      return;
    }

    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      "wss://minddd.vercel.app",
      roomId,
      ydoc,
    );

    const ymap = ydoc.getMap("tldraw");
    const store = storeRef.current;

    // local → yjs
    const removeStoreListener = store.listen(
      () => {
        const snapshot = getSnapshot(store);

        ymap.set("data", snapshot);
      },
      { source: "user", scope: "document" },
    );

    // yjs → local
    const handleRemoteUpdate = () => {
      const data = ymap.get("data");
      if (data) {
        store.mergeRemoteChanges(() => {
          loadSnapshot(store, data);
        });
      }
    };

    ymap.observe(handleRemoteUpdate);

    return () => {
      removeStoreListener();
      ymap.unobserve(handleRemoteUpdate);
      provider.destroy();
      ydoc.destroy();
    };
  }, [roomId]);

  return (
    <div className="editor fixed inset-0">
      <Tldraw
        store={storeRef.current}
        onMount={(editor) => {
          editor.selectAll();
        }}
      />
    </div>
  );
}
