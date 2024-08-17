"use client";

import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

interface Message {
  role: string;
  content: string;
}

export default function ChatBox({
  id,
  initialMessages,
}: {
  id: string;
  initialMessages: Message[];
}) {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const { mutate } = useMutation({
    mutationFn: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setMessages(messages.concat({ role: "user", content: value }));
      setValue("");
      console.log(messages);
      return fetch(`/${id}/api`, {
        method: "POST",
        body: JSON.stringify(messages),
      });
    },
    onSuccess: async (data, variables, context) => {
      if (!data.ok) {
        return;
      }
      const resp = await data.json();
      // console.log(resp);
      setMessages(messages.concat(resp.message));
    },
  });

  return (
    <div className="flex flex-1 py-2 flex-col bg-slate-200 rounded-lg p-4 gap-3">
      <div className="flex flex-1 flex-col gap-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex bg-white justify-center items-center p-2 ${message.role === "user" ? "self-end" : "self-start"}`}
          >
            <p> {message.content}</p>
          </div>
        ))}
      </div>
      <form
        className="flex w-full bg-white py-2 px-5 rounded-full"
        onSubmit={mutate}
      >
        <input
          type="text"
          name="message"
          placeholder="Chat with document..."
          className="outline-none w-full"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
