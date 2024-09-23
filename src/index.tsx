import { Elysia, redirect } from "elysia";
import { html, Html } from "@elysiajs/html";
import { Database } from "bun:sqlite";

const db = new Database("db/summaries.db");
db.exec("PRAGMA journal_mode = WAL;");

class Summary {
  id!: string;
  title!: string;
  summary!: string;
}

class NotableSection {
  id!: string;
  bill_id!: string;
  title!: string;
  description!: string;
}

const app = new Elysia()
  .use(html())
  .get("/", () => {
    const query = db.query("SELECT * FROM summary").as(Summary);
    const summaries = query.all();

    return (
    <html lang="en">
      <head>
        <title>Policy Pulse</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <main class="flex min-h-screen flex-col items-center gap-5 p-5">
          <h1 class="text-4xl">Recent Policies in your Area</h1>
          <div class="flex flex-1 flex-col w-full">
            {summaries.map((section, sectionIndex) => (
              <a href={`/${section.id}`}>
                <div class="flex flex-1 flex-col p-6">
                  <h2 class="text-2xl capitalize font-bold">{section.title}</h2>
                  <p>{section.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </main>
      </body>
    </html>
  )})
  .get("/:id", ({ params: { id } }) => {
    const messages: { role: string; content: string }[] = [];

    const summaryQuery = db.query(`SELECT * FROM summary WHERE id = $id`).as(Summary);
    const notableQuery = db.query(`SELECT * FROM notable_section WHERE bill_id = $id`).as(NotableSection);

    const fullSummary = summaryQuery.get({$id: id});
    const notableSections = notableQuery.all({ $id: id});

    if (!fullSummary) {
      return redirect('/');
    }

    return (
      <html lang="en">
        <head>
          <title>{fullSummary.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        </head>
        <body>
          <main class="flex min-h-screen flex-col p-5 gap-5 justify-start">
            <h1 class="text-4xl">{fullSummary.title}</h1>
            <div class="flex flex-1 flex-col gap-2">
              <div>
                <h2 class="text-2xl font-medium">General Summary</h2>
                <div>
                  <p>{fullSummary.summary}</p>
                </div>
              </div>
              <div class="flex  flex-col gap-1">
                <h2 class="text-2xl font-medium">Notable Sections</h2>
                <div class="flex flex-1 gap-3 flex-col">
                  {notableSections.map((section) => (
                    <div>
                      <h3 class="text-lg">{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex flex-1 py-2 flex-col bg-slate-200 rounded-lg p-4 gap-3">
                <div class="flex flex-1 flex-col gap-2" id="messages">
                  {messages.map((message, index) => (
                    <div
                      class={`flex bg-white justify-center items-center p-2 ${
                        message.role === "user" ? "self-end" : "self-start"
                      } message`}
                    >
                      <p> {message.content}</p>
                    </div>
                  ))}
                </div>
                <form
                  class="flex w-full bg-white py-2 px-5 rounded-full"
                  hx-post={`/chat/${id}`}
                  hx-target="#messages"
                  hx-swap="innerHtml"
                  hx-include="#messages"
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Chat with document..."
                    class="outline-none w-full"
                  />
                  <button type="submit">Enter</button>
                </form>
              </div>
            </div>
          </main>
        </body>
      </html>
    );
  })
  .post("/chat/:id", (context) => {
    console.log(context.body);
    return (
      <>
        <div
          class={`flex bg-white justify-center items-center p-2 ${"self-start"} message`}
        >
          <p> This is a response message</p>
          <input
            type="hidden"
            name="system-1"
            value="This is a response message"
          />
        </div>
        <div
          class={`flex bg-white justify-center items-center p-2 ${"self-end"} message`}
        >
          <p> This is a user message</p>
          <input
            type="hidden"
            name="user-1"
            value="This is a user message"
          />
        </div>
      </>
    );
  })
  .listen(3000);

console.log(
  `🦊 elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
