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
    title: "Servicemember Quality of Life Improvement and National Defense Authorization Act for Fiscal Year 2025",
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
