export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const chatReq = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    body: JSON.stringify({
      model: "llama3.1",
      messages: data,
      stream: false,
    }),
  });

  const chatData = await chatReq.json();

  return new Response(JSON.stringify({ message: chatData.message }), {
    status: 200,
  });
}
