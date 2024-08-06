import Link from "next/link";
import ChatBox from "./chat";
import { summaries } from "./summaries";

export function generateStaticParams() {
  return [{ id: "bill-0" }, { id: "bill-1" }];
}

export default function Details({ params }: { params: { id: string } }) {
  const fullSummary = summaries.find((sum) => sum.id === params.id);

  if (!fullSummary) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col p-5 gap-5 justify-start">
      <h1 className="text-4xl">{fullSummary.title}</h1>
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <h2 className="text-2xl font-medium">General Summary</h2>
          <div>
            <p>{fullSummary.summary}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl capitalize font-medium">status</h2>
          <p>{fullSummary.status}</p>
        </div>
        <div className="flex  flex-col gap-1">
          <h2 className="text-2xl font-medium">Notable Sections</h2>
          <div className="flex flex-1 gap-3 flex-col">
            {fullSummary.notableSections.map((section) => (
              <div key={section.id}>
                <h3 className="text-lg">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ChatBox initialMessages={[]} />
      </div>
    </main>
  );
}
