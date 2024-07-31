'use client'

import Summary from "@/components/ui/summary";
import { useMediaQuery } from '@/hooks/useMediaQuery'

import MobileHome from "@/app/mobileHomePage"

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

export default function Home() {
	const isMobile = useMediaQuery('(max-width: 600px)')

	if (isMobile) {
		return <MobileHome summaries={summaries} />
	}

	return (
		<main className="flex min-h-screen flex-col items-center gap-5 p-5">
			<h1 className="text-4xl">Recent Policies in your Area</h1>
			<div className="flex flex-1 flex-row w-full">
				<div className="flex flex-1 flex-col p-6">
					<h2 className="text-2xl capitalize font-bold">Fedral Laws</h2>
					<p className="text-lg">
						Current laws being discussed at the federal level
					</p>
					<div className="flex flex-1 flex-col gap-4 mt-3">
						{summaries.map((item, index) => (
							<>
								<Summary
									key={item.id}
									id={item.id}
									title={item.title}
									summary={item.summary}
								/>
								{index !== summaries.length - 1 ? (
									<div className="w-full border bg-slate-700"></div>
								) : null}
							</>
						))}
					</div>
				</div>
				<div className="h-100 border bg-slate-700"></div>
				<div className="flex flex-1 flex-col p-6">
					<h2 className="text-2xl capitalize font-bold">State Laws</h2>
					<p className="text-lg">
						Current laws being discussed at the state level
					</p>
					<div className="flex flex-1 flex-col gap-4 mt-3">
						{summaries.map((item, index) => (
							<>
								<Summary
									key={item.id}
									id={item.id}
									title={item.title}
									summary={item.summary}
								/>
								{index !== summaries.length - 1 ? (
									<div className="w-full border bg-slate-700"></div>
								) : null}
							</>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
