import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";

export const fullSummaries = [
  {
    id: "bill-0",
    title:
      "H.R. 8070 - Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
    summary:
      "This act authorizes appropriations for fiscal year 2025 for military activities of the Department of Defense, military construction, and defense activities of the Department of Energy. It also prescribes military personnel strengths and addresses various aspects of military operations and personnel matters.",
    notableSections: [
      {
        id: 1,
        title: "Defense Spending",
        description:
          "Authorizes funding for various defense programs, including procurement, research and development, and military construction.",
      },
      {
        id: 2,
        title: "Military Personnel",
        description:
          "Addresses various aspects of military personnel policy, including end strengths, officer grade distributions, and personnel benefits.",
      },
      {
        id: 3,
        title: "Energy and Environment",
        description:
          "Includes provisions related to energy resilience and security, sustainable aviation fuel, and environmental remediation at military installations.",
      },
    ],
    timeline:
      "The act is for fiscal year 2025, which typically begins on October 1, 2024, and ends on September 30, 2025",
    status:
      "The bill has been introduced and is under consideration (exact status would need to be verified)",
    controversy:
      "Potential areas of debate could include procurement decisions, research priorities, and environmental regulations",
    comparison:
      "This act is an annual authorization bill, similar to previous years' National Defense Authorization Acts",
  },
  {
    id: "bill-1",
    title: "Preventing Sex Trafficking and Strengthening Families Act",
    summary: `The "Preventing Sex Trafficking and Strengthening Families Act" aims to prevent and address sex trafficking of children in foster care,
      extend and improve adoption incentives, and enhance international child support recovery.`,
    notableSections: [
      {
        id: 1,
        title: "Identifying and Protecting Children at Risk",
        description:
          "Requires states to develop policies for identifying and providing services to children at risk of sex trafficking.",
      },
      {
        id: 2,
        title: "Reporting Requirements",
        description:
          "Mandates states to report instances of sex trafficking and maintain records in the Adoption and Foster Care Analysis and Reporting System",
      },
      {
        id: 3,
        title: "Missing Children",
        description:
          "Enhances efforts to locate and assist runaway foster children vulnerable to trafficking",
      },
    ],
    timeline: "Introduced September 29, 2014 and is now law",
    status: "Became law",
    controversy:
      "Debate may focus on funding allocations and the balance between child protection and administrative burdens on states.",
    comparison:
      "This bill expands protections beyond existing laws, focusing specifically on child trafficking within foster care systems, with parallels in international child welfare legislation.",
  },
];

const summaries = [
  {
    id: "bill-0",
    title:
      "Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
    summary: `This act authorizes appropriations for fiscal year 2025 for military activities of the Department of Defense,
    military construction, and defense activities of the Department of Energy. It also prescribes military personnel strengths
    and addresses various aspects of military operations and personnel matters.`,
  },
  {
    id: "bill-1",
    title: "Preventing Sex Trafficking and Strengthening Families Act",
    summary: `The "Preventing Sex Trafficking and Strengthening Families Act" aims to prevent and address sex trafficking of children in foster care,
      extend and improve adoption incentives, and enhance international child support recovery.`,
  },
  {
    id: "bill-0",
    title:
      "Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
    summary: `This act authorizes appropriations for fiscal year 2025 for military activities of the Department of Defense,
    military construction, and defense activities of the Department of Energy. It also prescribes military personnel strengths
    and addresses various aspects of military operations and personnel matters.`,
  },
  {
    id: "bill-1",
    title: "Preventing Sex Trafficking and Strengthening Families Act",
    summary: `The "Preventing Sex Trafficking and Strengthening Families Act" aims to prevent and address sex trafficking of children in foster care,
      extend and improve adoption incentives, and enhance international child support recovery.`,
  },
  {
    id: "bill-0",
    title:
      "Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
    summary: `This act authorizes appropriations for fiscal year 2025 for military activities of the Department of Defense,
    military construction, and defense activities of the Department of Energy. It also prescribes military personnel strengths
    and addresses various aspects of military operations and personnel matters.`,
  },
  {
    id: "bill-1",
    title: "Preventing Sex Trafficking and Strengthening Families Act",
    summary: `The "Preventing Sex Trafficking and Strengthening Families Act" aims to prevent and address sex trafficking of children in foster care,
      extend and improve adoption incentives, and enhance international child support recovery.`,
  },
];

const app = new Elysia()
  .use(html())
  .get("/", () => (
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
  ))
  .get("/:id", ({ params: { id } }) => {
    const fullSummary = fullSummaries.find((sum) => sum.id === id);
    const messages: { role: string; content: string }[] = [];

    if (!fullSummary) {
      return null;
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
              <div class="flex flex-col">
                <h2 class="text-2xl capitalize font-medium">status</h2>
                <p>{fullSummary.status}</p>
              </div>
              <div class="flex  flex-col gap-1">
                <h2 class="text-2xl font-medium">Notable Sections</h2>
                <div class="flex flex-1 gap-3 flex-col">
                  {fullSummary.notableSections.map((section) => (
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
