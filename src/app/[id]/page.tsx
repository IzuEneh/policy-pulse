export function generateStaticParams() {
	return [{ id: "bill-0" }, { id: "bill-1" }];
}

const summaries = [
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

export default function Details({ params }: { params: { id: string } }) {
	const fullSummary = summaries.find((sum) => sum.id === params.id);

	if (!fullSummary) {
		return null;
	}

	return (
		<main className="flex min-h-screen flex-col p-5 gap-5">
			<h1 className="text-4xl">{fullSummary.title}</h1>
			<div className="flex flex-1 flex-col gap-1">
				<div>
					<h2 className="text-2xl font-medium">General Summary</h2>
					<div>
						<p>{fullSummary.summary}</p>
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-2xl capitalize font-medium">status</h2>
					<p>{fullSummary.status}</p>
				</div>
				<div className="flex flex-1 flex-col gap-1">
					<h2 className="text-2xl font-medium">Notable Excerpts</h2>
					<div className="flex flex-1 gap-3 flex-col">
						{fullSummary.notableSections.map((section) => (
							<div key={section.id}>
								<h3 className="text-lg">{section.title}</h3>
								<p>{section.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-2xl capitalize font-medium">timeline</h2>
					<p>{fullSummary.timeline}</p>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-2xl capitalize font-medium">controversy</h2>
					<p>{fullSummary.controversy}</p>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-2xl capitalize font-medium">comparison</h2>
					<p>{fullSummary.comparison}</p>
				</div>
			</div>
		</main>
	);
}
