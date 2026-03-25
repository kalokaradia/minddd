"use client";

import { useSyncDemo } from "@tldraw/sync";
import { useParams } from "next/navigation";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export default function () {
  const params = useParams();
  const roomId = params.id as string;
  const store = useSyncDemo({ roomId });

  return (
    <div className="fixed inset-0">
      <Tldraw
        onMount={(editor) => {
          editor.selectAll();
        }}
        // persistenceKey={roomId}
        store={store}
      />
    </div>
  );
}
