"use client";

import { useState } from "react";

interface Message {
  from: string;
  message: string;
}

export default function ChatBox({
  initialMessages,
}: {
  initialMessages: Message[];
}) {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { from: "user", message: value }]);
    setValue("");
  };
  return (
    <div className="flex flex-1 py-2 flex-col bg-slate-200 rounded-lg p-4 gap-3">
      <div className="flex flex-1 flex-col gap-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex bg-white justify-center items-center self-end p-2"
          >
            <p> {message.message}</p>
          </div>
        ))}
      </div>
      <form
        className="flex w-full bg-white py-2 px-5 rounded-full"
        onSubmit={handleSubmit}
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
