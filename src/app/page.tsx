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
			<div className="flex flex-1 flex-row justify-between items-center w-full">
				<Card className="flex flex-col items-center">
					<CardHeader>
						<CardTitle className="text-lg capitalize">federal</CardTitle>
						<CardDescription>
							Current laws being discussed at the federal level
						</CardDescription>
					</CardHeader>
					<CardContent className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg gap-2">
						{summaries.map((item) => (
							<Summary
								key={item.id}
								id={item.id}
								title={item.title}
								summary={item.summary}
							/>
						))}
					</CardContent>
				</Card>
				{/* <Card className="flex flex-col items-center">
					<CardHeader>
						<CardTitle className="text-lg capitalize">state</CardTitle>
						<CardDescription>
							Current laws being discussed at the state level
						</CardDescription>
					</CardHeader>
					<CardContent className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg gap-2">
						{summaries.map((item) => (
							<Summary
								key={item.id}
								id={item.id}
								title={item.title}
								summary={item.summary}
							/>
						))}
					</CardContent>
				</Card>
				<Card className="flex flex-col items-center">
					<CardHeader>
						<CardTitle className="text-lg capitalize">local</CardTitle>
						<CardDescription>
							Current laws being discussed at the local level
						</CardDescription>
					</CardHeader>
					<CardContent className="bg-slate-100 w-96 h-72 flex flex-col rounded-lg gap-2">
						{summaries.map((item) => (
							<Summary
								key={item.id}
								id={item.id}
								title={item.title}
								summary={item.summary}
							/>
						))}
					</CardContent>
				</Card> */}
			</div>
		</main>
	);
}
