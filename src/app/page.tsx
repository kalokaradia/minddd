"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  function createRoom() {
    const id = nanoid(10);
    router.push(`/room/${id}`);
  }

  return (
    <div className="flex flex-col justify-between h-[100dvh]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 font-mono uppercase font-semibold text-5xl mb-8 mx-auto w-fit cursor-default">
          MINDDD
        </h1>
        <p className="lowercase mb-5 font-mono text-lg mx-auto w-fit">
          Real-time collaborative canvas
        </p>
        <button
          type="button"
          className="font-mono text-lg bg-neutral-300 border-2 hover:opacity-70 transition-opacity ease-in-out duration-300 cursor-pointer rounded py-2 px-4 mx-auto block"
          onClick={() => createRoom()}
        >
          Create a <span className="font-black">ROOOOMMM</span>!
        </button>
      </div>
      <div className="my-5 mx-auto font-mono">
        Created with{" "}
        <a
          href="https://tldraw.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black underline"
        >
          Tldraw
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/kalokaradia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black underline"
        >
          Kaloka Radia Nanda
        </a>
      </div>
    </div>
  );
}
