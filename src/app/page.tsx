import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Summary from "@/components/ui/summary";

const summaries = [
  {
    id: "bill-0",
    title: "Bill Name",
    summary: `Vivamus pretium scelerisque enim. Curabitur hendrerit gravida
								volutpat. Nam sagittis ex eget ultricies egestas. Integer quis
								metus ex. Ut in ligula tellus.`,
  },
  {
    id: "bill-1",
    title: "Bill Name",
    summary: `Vivamus pretium scelerisque enim. Curabitur hendrerit gravida
								volutpat. Nam sagittis ex eget ultricies egestas. Integer quis
								metus ex. Ut in ligula tellus.`,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5">
      <h1 className="text-4xl">Recent Policies in your Area</h1>
      <div className="flex flex-1 flex-row justify-center items-center w-full">
        <Card className="flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-lg capitalize">federal</CardTitle>
            <CardDescription>
              Current laws being discussed at the federal level
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-slate-100 p-4 w-96 flex flex-col rounded-lg gap-4">
            {summaries.map((item, index) => (
              <>
                <Summary
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  summary={item.summary}
                />
                {index !== summaries.length - 1 ? <div className="bg-black h-px w-full"></div> : null}
              </>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
