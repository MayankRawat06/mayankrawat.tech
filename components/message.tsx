"use client";

import { useState } from "react";
import Image from "next/image";
import send from "./icons/send.svg";
import load from "./icons/load.svg";
import { toast } from "sonner";

export default function Message() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!message) {
      return;
    }

    const res = await fetch(`${location.origin}/api`, {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
      toast.error("Error while sending a message, Please try again later.")
      setError(error);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="relative bg-zinc-800 rounded overflow-hidden"
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Drop a message (Don't worry, it's anonymous) ..."
        className={`w-full h-full p-4 text-md bg-zinc-800 text-zinc-400
                  placeholder:text-base placeholder:font-sans placeholder:text-zinc-600
                  resize-none focus:outline-none`}
      />
      {message && (
        <button
          type="submit"
          disabled={loading}
          className={`absolute right-3 bottom-3 px-2 py-1 text-sm rounded-md
                    ${
                      !loading ? "bg-zinc-200" : "bg-zinc-300"
                    } text-zinc-800 hover:bg-zinc-50 active:bg-zinc-200
                      font-bold flex gap-1 items-center`}
          onClick={() => toast.success('Message sent successfully!')}
        >
          {loading ? (
            <>
              <Image
                src={load}
                width={16}
                className="animate-spin"
                alt="Loading"
              />
              Sending
            </>
          ) : (
            <>
              <Image src={send} width={16} alt="Send" />
              Send
            </>
          )}
        </button>
      )}
    </form>
  );
}
