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
          <script src="https://cdn.twind.style"></script>
          <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        </head>
        <body>
          <main class="flex min-h-screen flex-col items-center gap-5 p-5">
            <h1 class="text-4xl">Recent Policies in your Area</h1>
            <form
              class="flex w-full border-2 border-black py-2 px-5 rounded-full "
              hx-get="/search"
              hx-target="#results"
              hx-swap="innerHtml"
            >
              <input
                type="text"
                name="query"
                placeholder="Search for a specific document"
                class="outline-none w-full"
              />
              <button type="submit">Enter</button>
            </form>
            <div class="flex flex-1 flex-col w-full" id="results">
              {summaries.map((section, sectionIndex) => (
                <a href={`/${section.id}`}>
                  <div class="flex flex-1 flex-col p-6">
                    <h2 class="text-2xl capitalize font-bold">
                      {section.title}
                    </h2>
                    <p>{section.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          </main>
        </body>
      </html>
    );
  })
  .get("/:id", ({ params: { id } }) => {
    const messages: { role: string; content: string }[] = [];

    const summaryQuery = db
      .query(`SELECT * FROM summary WHERE id = $id`)
      .as(Summary);
    const notableQuery = db
      .query(`SELECT * FROM notable_section WHERE bill_id = $id`)
      .as(NotableSection);

    const fullSummary = summaryQuery.get({ $id: id });
    const notableSections = notableQuery.all({ $id: id });

    if (!fullSummary) {
      return redirect("/");
    }

    return (
      <html lang="en">
        <head>
          <title>{fullSummary.title}</title>
          <script src="https://cdn.twind.style"></script>
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
              <div class="flex flex-1 py-2 flex-col bg-slate-400 rounded-lg p-4 gap-3">
                <div
                  class="flex flex-1 flex-col gap-2 items-center justify-center"
                  id="messages"
                >
                  <p>Chat coming soon !</p>
                </div>
                <form
                  class="flex w-full bg-slate-200 py-2 px-5 rounded-full "
                  hx-post={`/chat/${id}`}
                  hx-target="#messages"
                  hx-swap="innerHtml"
                  hx-include="#messages"
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Chat with document..."
                    class="outline-none w-full disabled:bg-slate-200"
                    disabled
                  />
                  <button type="submit" disabled>
                    Enter
                  </button>
                </form>
              </div>
            </div>
          </main>
        </body>
      </html>
    );
  })
  .get("/search", ({ query }) => {
    if (!query["query"]) {
      return null;
    }

    const decodedQuery = decodeURI(query["query"]);
    const searchQuery = db.query(`SELECT id FROM titles($query)`);
    const searchResults = searchQuery.all({ $query: decodedQuery });
    console.log("search results: ", searchResults);
    const summaryQuery = db
      .query(
        `SELECT * FROM summary WHERE id IN (${searchResults.map(
          (res) => `'${res.id}'`
        )})`
      )
      .as(Summary);
    const results = summaryQuery.all();

    if (!searchResults) {
      return null;
    }

    return (
      <>
        {results.map((result) => (
          <a href={`/${result.id}`} class="search-result">
            <div class="flex flex-1 flex-col p-6">
              <h2 class="text-2xl capitalize font-bold">{result.title}</h2>
              <p>{result.summary}</p>
            </div>
          </a>
        ))}
      </>
    );
  })
  .listen(3000);

console.log(
  `🦊 elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
